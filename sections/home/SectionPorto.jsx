import Card from '../../components/Card/Card';
import { BsArrowRightShort, BsStar } from 'react-icons/bs';
import FancyButton from '../../components/Button/FancyButton';
import HeadingSection from '../../components/HeadingSection/HeadingSection';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function SectionPorto() {
    const [portos, setPortos] = useState([]);

    async function getApiPorto() {
        const response = await fetch('json/porto.json');

        let dummyPorto = await response.json();
        dummyPorto = Array.from(dummyPorto).filter(
            (porto) => porto.is_on_showcase,
        );

        setPortos([...portos, ...dummyPorto]);
    }

    const apiRef = useRef(getApiPorto);

    useEffect(() => {
        apiRef.current();
    }, []);

    return (
        <section className="container mx-auto py-20">
            <div className="flex lg:flex-row flex-col gap-6">
                {portos.map((porto, i) => (
                    <Card
                        className="p-10 flex flex-col gap-10 lg:w-[340px]"
                        key={i}
                    >
                        <h3 className="flex text-xl items-center space-x-4">
                            <BsStar className={' text-fancy-purple text-2xl'} />
                            <span className="font-semibold">{porto.title}</span>
                        </h3>
                        <span className="text-fancy-purple font-semibold">
                            {porto.start} - {porto.end}
                        </span>

                        <p className="text-gray-middle">{porto.desc}</p>
                        <Link href="/">See details</Link>
                    </Card>
                ))}

                <div className="lg:flex-1 lg:pl-24 pt-10 pb-2">
                    <HeadingSection text="We are Providing You The Digital Solution" />

                    <p className="my-8 leading-7 text-solid-brown">
                        We have realized many ideas from our clients
                        professionally. We help clients expand their reach, and
                        thrive with new technologies.
                    </p>

                    <FancyButton>
                        Discover me
                        <BsArrowRightShort className="ml-4" size={32} />
                    </FancyButton>
                </div>
            </div>
        </section>
    );
}
