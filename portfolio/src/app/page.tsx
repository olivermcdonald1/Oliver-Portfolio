import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Oliver</h1>
      <p className="text-lg mb-8 text-center">
       
      </p>
      <Image
        src="/myphoto.jpg"
        alt="Oliver's photo"
        width={200}
        height={200}
        className="rounded-full"
      />
    </main>
  );
}