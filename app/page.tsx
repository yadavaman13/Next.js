import Image from "next/image";
import Card from "@/components/Card"

export default function Home() {
  return (
    <>
      <h1>Cards:</h1>
      <Card title="card 1" description="description of 1st card" />
    </>
  );
}
