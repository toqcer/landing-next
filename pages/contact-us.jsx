import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Card from '../components/Card/Card';
import HeadingSection from '../components/HeadingSection/HeadingSection';
import AboutContact from '../components/Section/AboutContact';
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
        <AboutContact>
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
                                    <p className="text-xl">{contact.label}</p>
                                    <p className="text-xl">{contact.value}</p>
                                </figcaption>
                            </figure>
                        </Card>
                    ))}
                </article>
            </div>
        </AboutContact>
    );
}

ContactUs.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
