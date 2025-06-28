import './index.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-block social">
                    <h4>Sosyal Medya</h4>
                    <div className="social-icons">
                        <a href="#"><img src="icon-facebook.svg" alt="Facebook" /></a>
                        <a href="#"><img src="icon-instagram.svg" alt="Instagram" /></a>
                        <a href="#"><img src="icon-twitter.svg" alt="Twitter" /></a>
                        <a href="#"><img src="icon-youtube.svg" alt="YouTube" /></a>
                    </div>
                </div>
                <div className="footer-block address">
                    <h4>Adres</h4>
                    <p>Door Atelier</p>
                    <p>Hayal Sok. No: 5<br />Şişli, İstanbul</p>
                    <p>Tel: +90 212 123 45 67</p>
                    <p>Email: info@dooratelier.com</p>
                </div>
                <div className="footer-block form">
                    <h4>Bilgi İçin Kayıt Ol</h4>
                    <form action="#" method="post">
                        <input type="email" name="email" placeholder="E-posta adresiniz" required />
                        <button type="submit">Gönder</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}