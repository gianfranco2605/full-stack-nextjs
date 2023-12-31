"use client"

import Link from "next/link";
import styles from './navbar.module.css';
import DarkModeToogle from '../DarkModeToggle/DarkModelToogle.jsx'

// Links Nav
const links = [
    {
    id: 1,
    title: "Home",
    url: "/",
    },
    {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
    },
    {
    id: 3,
    title: "Blog",
    url: "/blog",
    },
    {
    id: 4,
    title: "About",
    url: "/about",
    },
    {
    id: 5,
    title: "Contact",
    url: "/contact",
    },
    {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
    },
];

const Navbar = () => {
return (
    <div className={styles.container}>
        <Link href={'/'} className={styles.logo}>Digital Navas</Link>
        <div className={styles.links}>
            <DarkModeToogle />
            {links.map((link) => (
                <Link key={link.id} className={styles.link} href={link.url}>{link.title}</Link>
            ))}
            <button
                onClick={() => {}}
                className={styles.logout}
            >Logout</button>
        </div>
    </div>
)
}

export default Navbar