import Link from "next/link";

export const metadate = {
  title: "frontpage",
  description: "lorem ipsum dollar whatever whatever",
};

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Hello world..</h1>
      <Link href={"/henry"}>link test</Link>
    </main>
  );
}
