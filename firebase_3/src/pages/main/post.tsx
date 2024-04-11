import { addDoc, collection, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";
import { IPost } from "./main"
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props  {
    post: IPost
}

interface ILike {
    likeId: string;
    userId: string;
}

export const Post = (props: Props) => {
    const [user] = useAuthState(auth);
    const { post } = props;

    const [likes, setLikes] = useState<ILike[] | null>(null)

    const likesRef = collection(db, "likes");
    const likesDoc = query(likesRef, where("postId", "==", post.id));

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(data.docs.map((doc) => ({userId: doc.data().userId, likeId: doc.id})));
    }

    const addLike = async () => {
        console.log("hasUserLiked : " + JSON.stringify(hasUserLiked) + ", Add Like ")
        try {
            const newDoc = await addDoc(likesRef, {
                userId:user?.uid , postId: post?.id
             });
             // below will happen only if above request is successful
             if(user) {
                 setLikes((prev) => prev? [...prev, {userId:user?.uid, likeId: newDoc.id}] : [{userId:user?.uid, likeId: newDoc.id}])
             }    
        } catch (error) {
            
        }    
    }

    const removeLike = async () => {
        console.log("hasUserLiked : " + JSON.stringify(hasUserLiked) + ", Remove Like ")
        try {
            const likeToDeleteQuery = query(likesRef, where("postId", "==", post.id), where("userId", "==", user?.uid));
            const likeToDeleteData = await getDocs(likeToDeleteQuery);
            const likeId = likeToDeleteData.docs[0].id
            const likeToDelete = doc(db, "likes", likeId)
            await deleteDoc(likeToDelete);
           
             // below will happen only if above request is successful
             if(user) {
                 setLikes( (prev) => prev && prev.filter((like) => like.likeId !== likeId))
             }    
        } catch (error) {
            
        }    
    }

    const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

    useEffect(() => {
        getLikes();
    }, []) 

    return (
        <div>
            <div className="title">
                <h1>{post.title}</h1>
            </div>
            <div className="body">
                <p>{post.description}</p>
            </div>
            <div className="footer">
                <p>@{post.username}</p>
                <button onClick={hasUserLiked? removeLike : addLike}>
                    {hasUserLiked?<>&#128078;</> : <>&#128077;</>}
                </button>
                {likes && <p>Likes : {likes?.length}</p>}
            </div>
        </div>
    )
}