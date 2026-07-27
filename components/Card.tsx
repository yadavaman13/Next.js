type CardProps = {
    title: String
    description: String
};

export default function Card({title, description}: CardProps){
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}