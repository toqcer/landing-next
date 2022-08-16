import FancyButton from '../../components/Button/FancyButton';
import Card from '../../components/Card/Card';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { BiLoaderAlt } from 'react-icons/bi';

export default function SectionSkills() {
    const [skills, setSkills] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getApiSkill() {
            setIsLoading(true);
            const dummySKillRes = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=6`,
            );
            setSkills([...skills, ...(await dummySKillRes.json())]);
            setIsLoading(false);
        }
        getApiSkill();
    }, [page]);

    console.log(skills);

    return (
        <section className="py-20 bg-linear-green-center">
            <div className="container mx-auto">
                <div className="text-center mx-auto lg:w-[421px]">
                    <span className="capitalize text-fancy-purple font-semibold">
                        what we have
                    </span>
                    <h2 className="text-4xl font-bold">Tools and Skills</h2>
                    <p className="text-solid-brown leading-8 mt-4">
                        The wise man once said that we must recognize the
                        weapons we use
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-8 lg:mt-16">
                    {skills.map((skill, i) => (
                        <Card key={i} className="col-span-6 bg-white">
                            <figure className="flex items-center gap-4">
                                <div
                                    className="flex items-center justify-center shadow-md h-20 w-20 
                                    bg-linear-blue rounded-3xl"
                                >
                                    <Image
                                        src="/images/icon/tools/1.svg"
                                        height={34}
                                        width={34}
                                        alt="img"
                                    />
                                </div>
                                <figcaption className="flex-1">
                                    <span className="block text-purple-bold font-bold">
                                        {skill.title}
                                    </span>
                                    <small className="text-gray-helper">
                                        {skill.body}
                                    </small>
                                </figcaption>
                            </figure>
                        </Card>
                    ))}
                </div>

                <FancyButton
                    className="mt-10 mx-auto gap-2 flex"
                    onClick={() => setPage(page + 1)}
                >
                    <span>Discover More</span>
                    {isLoading && <BiLoaderAlt className="animate-spin" />}
                </FancyButton>
            </div>
        </section>
    );
}
