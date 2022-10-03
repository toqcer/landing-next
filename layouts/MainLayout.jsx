import { RecoilRoot, selector } from 'recoil';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Layouts.module.css';

export default function MainLayout({ children }) {
    return (
        <div className={styles.layout_container}>
            <div className={styles.layout_span}>
                <Navbar />
                <main className={styles.layout_main}>{children}</main>
            </div>
            <Footer />
        </div>
    );
}
