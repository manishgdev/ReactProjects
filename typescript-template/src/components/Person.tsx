interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country?: Country; // the question mark will make the country parameter an optional argument
}

export enum Country {
    India = "India",
    Brazil = "Brazil",
    Canada = "Canada",
    France = "France"
}

export const Person = (props: Props) => {
    return (
        <div>
            <h1>Name : {props.name}</h1>
            <h1>Email : {props.email}</h1>
            <h1>Age : {props.age}</h1>
            <h1>This person {props.isMarried? "is" : "is not"} Married</h1>
            {props.friends.map((friend:string, key:number) => {
                return <h1 key={key}>{friend}</h1>
            })
            }
            <h1>Country : {props.country}</h1>

        </div>
    );
}