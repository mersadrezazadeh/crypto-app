import Link from "next/link";

function MainNav() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
