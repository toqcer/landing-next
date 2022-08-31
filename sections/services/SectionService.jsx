import FancyButton from '../../components/Button/FancyButton';
import Card from '../../components/Card/Card';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { BiLoaderAlt } from 'react-icons/bi';
import HeadingSection from '../../components/HeadingSection/HeadingSection';
import UsersIcon from '../../public/images/UsersIcon';

export default function SectionServices() {
    const [skills, setSkills] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    async function getApiSkill() {
        setIsLoading(true);
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=6`,
        );
        const dummySkill = await response.json();
        setSkills([...skills, ...dummySkill]);
        setIsLoading(false);
    }

    const apiRef = useRef(getApiSkill);

    useEffect(() => {
        apiRef.current();
    }, [page]);

    return (
        <section className="py-20 bg-linear-green-center mt-10">
            <div className="container mx-auto">
                <div className="text-center mx-auto lg:w-[421px]">
                    <HeadingSection
                        text="Services"
                        className="text-black !text-3xl"
                    />
                    <div className="w-full mt-8 border-[0.5px] border-my-emerald flex rounded-lg overflow-hidden">
                        <input
                            className="px-6 border-none flex-1 outline-none"
                            type="text"
                            placeholder="What you looking for..."
                        />
                        <button className="h-12 px-10 rounded  bg-my-emerald text-white font-semibold">
                            Search
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-8 mt-16">
                    {skills.map((skill, i) => (
                        <Card
                            key={i}
                            className="col-span-12 lg:col-span-6 bg-white"
                        >
                            <figure className="flex items-center gap-4">
                                <div
                                    className="flex items-center justify-center shadow-md h-20 w-20 
                                    bg-linear-blue rounded-3xl"
                                >
                                    <UsersIcon />
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
