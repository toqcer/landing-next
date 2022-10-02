import Image from 'next/image';
import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import AboutContact from '../components/Section/AboutContact';
import MainLayout from '../layouts/MainLayout';

import CustomLi from '../styles/CustomLi.module.scss';

const About = () => {
    const [aboutDesc, setAboutDesc] = useState({});
    const [sampleProfit, setSampleProfit] = useState([]);

    useEffect(() => {
        async function getAboutDesc() {
            const resAboutDesc = await fetch('json/about.json');
            const jsonAboutDesc = await resAboutDesc.json();

            setAboutDesc(jsonAboutDesc);
        }

        async function getSampleProfit() {
            const res = await fetch('json/sample-profit.json');
            const json = await res.json();

            setSampleProfit(json);
        }

        getSampleProfit();
        getAboutDesc();
    });

    return (
        <AboutContact>
            <div className="w-6/12">
                <div
                    className={`text-gray-helper ${CustomLi['custom-li-dot']}`}
                    dangerouslySetInnerHTML={{
                        __html: aboutDesc.desc,
                    }}
                />

                <section className="w-10/12 mt-20">
                    {sampleProfit &&
                        sampleProfit.map((profit, index) => (
                            <Card
                                className="mb-6 bg-white opacity-100 p-0 rounded-l-3xl"
                                key={index}
                            >
                                <figure className="flex gap-5 items-center">
                                    <div className="flex items-center justify-center shadow-md h-20 w-20 bg-linear-blue rounded-3xl">
                                        <Image
                                            src={profit.icon}
                                            height={34}
                                            width={34}
                                            alt="img"
                                        />
                                    </div>
                                    <figcaption className="text-purple-bold font-bold">
                                        <p className="text-xl m-0">
                                            {profit.label}
                                        </p>
                                        <p className="text-4xl m-0">
                                            {profit.val}
                                        </p>
                                    </figcaption>
                                </figure>
                            </Card>
                        ))}
                </section>
            </div>
        </AboutContact>
    );
};

export default About;

About.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
