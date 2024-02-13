import Link from "next/link";
import Image from "next/image";

export default function Movies() {
  return (
    <>
      <h1>My favourite movies</h1>
      <Image
        alt="cinema"
        width={640}
        height={426}
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
      />
      <ul>
        <li>
          <Link href="/movies/hulk">Hulk</Link>
        </li>
        <li>
          <Link href="/movies/spiderman">Spiderman</Link>
        </li>
      </ul>
    </>
  );
}
