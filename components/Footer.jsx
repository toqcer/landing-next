import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

export default function Footer({ className }) {
    return (
        <footer
            className={`bg-cyan-200 h-20 ${className} text-white bg-midnight-blue`}
        >
            <div className="container flex justify-between items-center h-full">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Image
                            src="/images/logo-white.png"
                            height={22}
                            layout="fill"
                        />
                    </div>
                    <small className="text-sm">Toqcer Digital Agency.</small>
                </div>

                <div className="flex items-center gap-3">
                    <Link href="wa.me">
                        <a className="bg-white rounded-full p-2">
                            <BsWhatsapp size={20} color="#0E0E38" />
                        </a>
                    </Link>
                    <Link href="wa.me">
                        <a className="bg-white rounded-full p-2">
                            <BsWhatsapp size={20} color="#0E0E38" />
                        </a>
                    </Link>
                    <Link href="wa.me">
                        <a className="bg-white rounded-full p-2">
                            <BsInstagram size={20} color="#0E0E38" />
                        </a>
                    </Link>
                    <Link href="wa.me">
                        <a className="bg-white rounded-full p-2">
                            <BsLinkedin size={20} color="#0E0E38" />
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
