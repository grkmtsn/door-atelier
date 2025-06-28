import './index.css'

import Reveal from '../reveal';

export default function Header() {
    return (
        <div className="header-wrapper">
            <Reveal delay='500'>
                <img className="static-logo" src="/logo.svg" width="48" height="56" alt="Door Atelier" />
            </Reveal>
            <Reveal delay='1000'>
                <img
                    className="text-logo"
                    src="/logo-text.svg"
                    alt="Door Atelier"
                />
            </Reveal>
        </div>
    );
}