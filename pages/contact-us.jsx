import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Card from '../components/Card/Card';
import HeadingSection from '../components/HeadingSection/HeadingSection';
import MainLayout from '../layouts/MainLayout';

export default function ContactUs() {
    const [contactUs, setContactUs] = useState([]);

    async function getApicontactUs() {
        const response = await fetch('json/contact-us.json');

        let dummyContactUs = await response.json();

        setContactUs([...dummyContactUs, ...contactUs]);
    }

    const apiRef = useRef(getApicontactUs);

    useEffect(() => {
        apiRef.current();
    }, []);

    return (
        <main className="bg-linear-green-bottom-right overflow-hidden pt-20">
            <div className="container relative w-full h-full pt-32">
                <div className="relative z-10 w-8/12">
                    <HeadingSection
                        text="Contact Us"
                        isCenter={false}
                        className="mb-10"
                    />

                    <article className="grid grid-cols-2 gap-x-6 gap-y-4 pb-20">
                        {contactUs.map((contact, index) => (
                            <Card
                                className="mb-6 bg-white opacity-100 p-0 rounded-l-3xl"
                                key={index}
                            >
                                <figure className="flex gap-9 items-center">
                                    <div className="flex items-center justify-center shadow-md h-20 w-20 bg-linear-blue rounded-3xl">
                                        <Image
                                            src="/images/icon/tools/1.svg"
                                            height={34}
                                            width={34}
                                            alt="img"
                                        />
                                    </div>
                                    <figcaption className="text-purple-bold font-bold">
                                        <p className="text-xl">
                                            {contact.label}
                                        </p>
                                        <p className="text-xl">
                                            {contact.value}
                                        </p>
                                    </figcaption>
                                </figure>
                            </Card>
                        ))}
                    </article>
                </div>

                <div className="w-3/5 lg:aspect-square cursor-pointer absolute z-[2] opacity-80 -right-20 -bottom-28">
                    <Image
                        draggable={false}
                        layout="fill"
                        objectFit="contain"
                        src="/images/logo2.svg"
                        alt="logo toqcer"
                    />
                </div>
            </div>
        </main>
    );
}

ContactUs.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
