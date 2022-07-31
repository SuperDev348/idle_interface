import { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const urls = [
    {name: 'Home', href: '/home'},
    {name: 'News', href: '/news'},
    {name: 'Game guides', href: '/gameguids'},
    {name: 'Download', href: '/downloads'},
]

export default function Navbar(){
    const [selItem, setSelItem] = useState('Home');

    useEffect(() => {
        setSelItem(window.location.pathname);
    }, [])
    return (
        <>
            <header className="header">
                <div className="container header__container">
                    <a className="header__logo animate__animated animate__fadeInLeft" href="/">
                        <img src="/img/logo.png" alt="logo" style={{animation: 'pulse 2.5s linear infinite'}} />
                    </a>
                    <nav className="header__nav animate__animated animate__fadeInRight">
                        <ul className="header__list">
                            {urls.map((e, idx) => {
                                return (
                                    <li className="header__item" key={idx}>
                                        <a className={e.href === selItem?"header__link header__link_active":"header__link"} href={e.href}>{e.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <a className="header__btn animate__animated animate__fadeInRight" target="_blank" href="https://discord.gg/vHtR3FgGDR" rel="noreferrer">Discord</a>
                </div>
            </header>
        </>
    )
}