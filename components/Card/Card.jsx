import styles from './Card.module.css';

export default function Card({ children, className = '' }) {
    return (
        <div
            className={`${styles.card} rounded-xl ${
                String(className).includes('p-') ? className : 'p-8'
            } ${className}`}
        >
            {children}
        </div>
    );
}
