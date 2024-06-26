import { getDocs, collection } from "firebase/firestore"
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface IPost {
    id: string,
    userId: string,
    title: string,
    username: string,
    description: string,
}

export const Main = () => {
    const postsRef = collection(db, "posts");
    const [postsList, setPostsList] = useState<IPost[] | null>(null);

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IPost[]
        );
    }

    useEffect(() => {
        getPosts();
    }, [])

    return <div>
            {postsList?.map((post, key) => (
                <Post key={key} post={post} />
            ))}
        </div>;
}