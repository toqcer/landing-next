import styles from '../../styles/HomeSection.module.css';
import Image from 'next/image';
import FancyButton from '../../components/Button/FancyButton';

export default function SectionHomeHero() {
    return (
        <section
            className={`${styles.home_hero} flex flex-col justify-center relative h-screen overflow-hidden`}
        >
            <div className="container mx-auto ">
                <h3 className="font-bold text-5xl leading-tight">
                    Toqcer, One Stop <br /> Solution for You
                </h3>
                <p className="text-solid-brown my-4">
                    Improve your digital integration and quality.
                </p>
                <FancyButton className="font-medium text-sm py-6 px-12 rounded-2xl">
                    About More
                </FancyButton>
            </div>
            <div className="w-3/5 lg:aspect-square cursor-pointer absolute z-[2] opacity-80 -right-20 -bottom-48 ">
                <Image
                    draggable={false}
                    layout="fill"
                    objectFit="contain"
                    src="/images/logo2.svg"
                    alt="logo toqcer"
                />
            </div>
        </section>
    );
}
