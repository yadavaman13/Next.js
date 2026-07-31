import Image from "next/image";
import Card from "@/components/Card"
import {Action} from "@/app/actions/action"

export default function Home() {
  return (
    <>
      <h1>Cards:</h1>
      <Card title="card 1" description="description of 1st card" />
      <Card title="card 2" description="description of 2nd card" />
      <Card title="card 3" description="description of 3rd card" />

      <button 
      onClick={Action}
      className="border-2 border-white text-white p-2.5 rounded-2xl"
      >
        click me!
      </button>
    </>
  );
}