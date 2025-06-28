import Reveal from '../reveal'
import './index.css'

export default function Hero() {
    return (
        <Reveal delay='1500'>
            <div className="hero-wrapper">
                <h1>Fostering Imagination and Growth</h1>
                <p>
                    Join us for fun and engaging events designed for babies and toddlers to
                    explore their creativity.
                </p>
                <button className='hero-button'>
                    Get in Touch
                </button>
            </div>
        </Reveal>
    );
}