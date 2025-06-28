import { useRef, useEffect, useState, type PropsWithChildren } from 'react';
import './index.css';

const Reveal = ({ children, delay = "0" }: PropsWithChildren<{ delay?: string }>) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && ref.current) {
                    setVisible(true);
                    observer.unobserve(ref.current);
                }
            },
            { rootMargin: '0px 0px -100px 0px' }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal${visible ? ' visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default Reveal;