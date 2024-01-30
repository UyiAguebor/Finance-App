import Link from "next/link";

interface NavbarProps {
  link1: string;
  link2: string;
  link3: string;
}

const Navbar: React.FC<NavbarProps> = ({ link1, link2, link3 }) => {
  return (
    <ul className="navbar">
      <li className="navbarlink">
        <Link href={link1}>{link1}</Link>
      </li>
      <li className="navbarlink">
        <Link href={link2}>{link2}</Link>
      </li>
      <li className="navbarlink">
        <Link href={link3}>{link3}</Link>
      </li>
    </ul>
  );
};

export default Navbar;