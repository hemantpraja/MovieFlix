import Link from 'next/link';
import Image from 'next/image';

import styles from "@/app/styles/navbar.module.css";
import Nav from './Nav.js';


const logo = {
    border: '5px',
    borderRadius: '10%',
    borderStyle: 'solid',
    borderColor: 'black',
}

const Header = (props) => {
    return (
        <header className={styles.main_header}>
            <div lcassname={styles.navbar_brand}>
                <Link href="/">
                    {/* <Image src="/logo.png" alt="logo" width={150} height={40} /> */}
                    <div className={logo}>
                        <h1>MovieFlix</h1>
                    </div>
                </Link>

            </div>
            <Nav />
        </header>
    )
}

export default Header;
