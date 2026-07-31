import FilterSearch from "@/components/FilterSearch";

type User = {
    id: number;
    name: string;
    username: string;
}

export default async function Users(){

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return(
        <main>
            <h1>Users:</h1>
            <FilterSearch users={users} />
        </main>
    )
}