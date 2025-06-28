import Divider from '../divider'
import './index.css'

export default function Me() {
    return (
        <div className='me-wrapper'>
            <h2>Who am I?</h2>
            <div className='me-content'>
                <section>
                    <p>Hello, I’m <strong>Sevgi</strong>. As a French teacher and child development specialist, I’m delighted to open the doors of <em>Door Atelier</em> to you. Welcome!</p>

                    <p>My story began during my student years with the twin children of a French family, and continues now with my own child. My greatest motivation is to cultivate a refined aesthetic sense for my son, <strong>Dora</strong>; to foster his creativity; to weave art into his everyday life; to teach him multiple languages—all while blending the globally recognized Montessori, Waldorf, and Reggio Emilia approaches.</p>

                    <p>With this passion, I founded <em>Door Atelier</em>, and I can’t wait to share all my experience and love with you. Our mission is to enable children to learn visually, auditorily, and socially in a multilingual environment through play. Through age-appropriate activities, we aim to develop motor skills and aesthetic awareness. The truest measure of our success is simply that our children are having fun.</p>

                    <p>I invite you to explore our magical world filled with play, joy, multilingualism, and art. Please, knock the door!</p>

                    {/* <p className='me-footer'>Sincerely,<br />Sevgi Ay Tosun<br />Founder &amp; CEO</p> */}
                </section>

                <div className="avatar">
                    <div className='motto'>
                        <div>
                            <blockquote>
                                A door to learning through artful, multilingual play.
                            </blockquote>
                            <p>Sevgi Ay Tosun, Founder</p>
                        </div>
                    </div>
                    <video width={200} autoPlay loop muted playsInline>
                        <source src='/stet.mp4' type="video/mp4" />
                    </video>
                </div>
            </div>
            <Divider />
        </div>
    )
}