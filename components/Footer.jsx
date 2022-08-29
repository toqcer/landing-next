import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

export default function Footer({ className }) {
    return (
        <footer
            className={`bg-cyan-200 h-20 ${className} px-10 lg:px-20 text-white bg-midnight-blue`}
        >
            <div className="flex justify-between items-center h-full">
                <div className="flex items-center gap-3 h-full">
                    <div className="relative w-24 aspect-video">
                        <Image
                            src="/images/logo-white.png"
                            layout="fill"
                            objectFit="contain"
                            alt=""
                        />
                    </div>
                    <small className="text-sm text-[#F6F6F6]">
                        Toqcer Digital Agency.
                    </small>
                </div>
                <div className="flex items-center gap-4">
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
                    <div className="flex items-center pl-4 rounded-lg w-80 bg-transparent border-[0.5px] border-white overflow-hidden">
                        <span className="text-white text-base">
                            toqcer@gmail.com
                        </span>
                        <button
                            onClick={() => alert('hello')}
                            className="text-midnight-blue font-semibold cursor-pointer ml-auto px-7 rounded-md py-3 bg-white"
                        >
                            Email Us
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
