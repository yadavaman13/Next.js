type profilePageAgeProps = {
    params: Promise<{ name: string; age: string }>;
}

export default async function profilePageAge({params}: profilePageAgeProps){

    const users = [
        {
            id: 1,
            name: "aman",
            age: 20,
            bio: "MERN",
        },
        {
            id: 2,
            name: "b",
            age: 21,
            bio: "AI/ML",
        },
        {
            id: 3,
            name: "c",
            age: 22,
            bio: "NEXTjs"
        }
    ]

    const profileParams = await params;
    const username = profileParams.name;
    const userage = profileParams.age;

    if(!username || !userage){
        return(
            <h1>Invalid profile URL parameters.</h1>
        )
    }

    const user = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase() && user.age.toString() === userage);

    if(!user){
        return(
            <div>
                <h1>User not found</h1>
                <p>No user exists with username "{username}" and age "{userage}"</p>
            </div>
        )
    }

    return(
        <div>
            <h1>{user.name}'s profile page</h1>
            <p>Age: {user.age}</p>
            <p>Bio: {user.bio}</p>
        </div>
    )
}