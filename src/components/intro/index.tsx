import Lottie, { type LottieComponentProps } from "lottie-react";
import logoJson from "../../assets/lottie/logo.json";
import "./index.css";

export default function Intro({ onComplete, fadingOut }: { onComplete: LottieComponentProps["onComplete"], fadingOut: boolean }) {
    return (
        <div className={`intro-wrapper${fadingOut ? ' fade-out' : ''}`}>
            <Lottie
                loop={false}
                style={{ width: 48, height: 56, scale: 2 }}
                animationData={logoJson}
                onComplete={onComplete}
            />
        </div>
    )
}