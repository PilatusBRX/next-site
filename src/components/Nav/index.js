import Link from "next/link";
import { LinkItem, NavContainer, Navbar } from "./style";

const Nav = () => {
  return (
    <NavContainer>
      <Navbar>
        <LinkItem>
          <Link href='/' className='link'>
            Home
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href='/about' className='link'>
            About
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href='/blog' className='link'>
            Blog
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href='/contact' className='link'>
            Contact
          </Link>
        </LinkItem>
      </Navbar>
    </NavContainer>
  );
};

export default Nav;
