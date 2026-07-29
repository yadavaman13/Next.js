"use client" //client side rendering

export default function Button(){
    return(
        <button 
        className="border-2 border-black mt-1.5"
        onClick={()=>{alert("btn clicked")}}>
            Explore
        </button>
    )
}