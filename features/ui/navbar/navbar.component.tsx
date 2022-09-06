import Link from "next/link";
import { Root } from "./navbar.styles";

export function Navbar() {
  return (
    <Root data-testid="navbar">
      <Link href="/" passHref>
        <h1>Navbar</h1>
      </Link>
    </Root>
  );
}
