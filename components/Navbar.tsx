import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../styles/navbar.module.css'

type Props = {
  href: string[];
  title: string[];
};

export default function Navbar({ href, title }: Props) {
  const router = useRouter();

  function generateLI(href: string, title: string) {
    return (
      <li>
        <Link href={href}>{title}</Link>
      </li>
    );
  }

  return (
    <ul className={styles.navbar}>
      {router.pathname !== "/" && (
        <li>
          <Link href="/">Home</Link>
        </li>
      )}
      <li>
        <Link href="/contact">Contato</Link>
      </li>
      {title.map((item, index) => generateLI(href[index], item))}
    </ul>
  );
}
