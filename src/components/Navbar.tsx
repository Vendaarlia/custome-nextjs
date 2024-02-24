import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
 return (
    <div className="container-navbar">
        <nav className="navbar">
            <div className="wrapper-navbar">
                <div className="brand">
                    <Link className="logo" href="/">
                        <Image className="logo-img" src="/images/logo.jpg" alt="logo" width={30} height={30} />
                        <span>E&A</span>
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link className="link-nav" href="/Dungeon">Dungeon</Link>
                    </li>
                    <li>
                        <Link className="link-nav" href="/Laboratory">Laboratory</Link>
                    </li>
                    <li>
                        <Link className="link-nav button" href="/Portal">Portal</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;