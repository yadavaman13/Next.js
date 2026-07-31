type profilePageProps = {
    params: Promise<{name: String}>;
}

export default async function ProfilePage({params} : profilePageProps){
    const users = [
        {
            id: 1,
            name: "aman",
            bio: "MERN",
        },
        {
            id: 2,
            name: "b",
            bio: "AI/ML",
        },
        {
            id: 3,
            name: "c",
            bio: "NEXTjs"
        }
    ]

    const profileParams = await params

    const username = profileParams.name

    const user = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase());

    if(!user){
        return(
            <div>
                <h1>User not found</h1>
                <p>No user exists with username "{username}"</p>
            </div>
        )
    }

    return(
        <div>
            <h1>{user?.name}'s Profile Page</h1>
            <p>BIO: {user?.bio}</p>
        </div>
    )
}