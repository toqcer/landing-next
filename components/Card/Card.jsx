import styles from './Card.module.css';

export default function Card({ children, className = '' }) {
    return (
        <div className={`${styles.card} p-8 rounded-xl ${className}`}>
            {children}
        </div>
    );
}
