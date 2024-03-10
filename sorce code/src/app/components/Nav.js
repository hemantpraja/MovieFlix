import StyleSheet from '@/app/styles/navbar.module.css';
import Link from 'next/link';

const Nav = (props) => {
    return (
        <nav className={StyleSheet.navbar}>
            <div>
                <ul className={StyleSheet.navbarList}>
                    <li className={StyleSheet.navbarItem}>
                        <Link href="/" className={StyleSheet.navbarLink}>Home</Link>
                    </li>
                    <li className={StyleSheet.navbarItem}>
                        <Link href="/about" className={StyleSheet.navbarLink}>About</Link>
                    </li>
                    <li className={StyleSheet.navbarItem}>
                        <Link href="/movies" className={StyleSheet.navbarLink}>Movies</Link>
                    </li>
                    <li className={StyleSheet.navbarItem}>
                        <Link href="/contact" className={StyleSheet.navbarLink}>contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;