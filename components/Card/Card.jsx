import styles from './Card.module.css';

export default function Card({ children, className }) {
  return (
    <div className={`${className} ${styles.card} p-8 rounded-xl`}>
      {children}
    </div>
  );
}
