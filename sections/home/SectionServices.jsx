import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import FancyButton from '../../components/Button/FancyButton';
import Card from '../../components/Card/Card';
import HeadingSection from '../../components/HeadingSection/HeadingSection';

export default function SectionServices() {
    const [services, setServices] = useState([]);

    async function getApiServices() {
        const response = await fetch('json/product-service.json');

        let dummyServices = await response.json();

        setServices([...dummyServices, ...services]);
    }

    const apiRef = useRef(getApiServices);

    const products = apiRef;

    useEffect(() => {
        apiRef.current();
    }, []);

    return (
        <section className="py-10">
            <div className="container mx-auto">
                <HeadingSection
                    text="Products and Services"
                    subtext="What We Can Do For You"
                    className="mb-16 text-center"
                />

                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p className="text-3xl font-bold text-fancy-purple text-center mb-4">
                            Best Seller Products
                        </p>

                        <article>
                            {services.map((service, index) => (
                                <Card className="mb-6" key={index}>
                                    <figure className="flex gap-9 items-center">
                                        <div className="flex items-center justify-center shadow-md h-20 w-20 bg-linear-blue rounded-3xl">
                                            <Image
                                                src="/images/icon/tools/1.svg"
                                                height={34}
                                                width={34}
                                                alt="img"
                                            />
                                        </div>
                                        <figcaption>
                                            <span className="block text-xl text-purple-bold">
                                                {service.title}
                                            </span>
                                        </figcaption>
                                    </figure>
                                </Card>
                            ))}
                        </article>

                        <FancyButton className="font-medium text-sm py-6 px-12 rounded-2xl mx-auto mt-12">
                            Discover More
                        </FancyButton>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-fancy-purple text-center mb-4">
                            Services
                        </p>
                        {[...Array(3).fill(3)].map((service, index) => (
                            <Card key={index} className="mb-6">
                                <figure className="flex gap-9 items-center">
                                    <div className="flex items-center justify-center shadow-md h-20 w-20 bg-linear-blue rounded-3xl">
                                        <Image
                                            src="/images/icon/tools/1.svg"
                                            height={34}
                                            width={34}
                                            alt="img"
                                        />
                                    </div>
                                    <figcaption>
                                        <span className="block text-xl text-purple-bold">
                                            Store Management System
                                        </span>
                                    </figcaption>
                                </figure>
                            </Card>
                        ))}

                        <FancyButton className="font-medium text-sm py-6 px-12 rounded-2xl mx-auto mt-12">
                            Discover More
                        </FancyButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
