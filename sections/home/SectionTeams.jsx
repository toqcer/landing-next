import { BsCheck } from 'react-icons/bs';
import Image from 'next/image';

import Card from '../../components/Card/Card';
import { useEffect, useRef, useState } from 'react';
import BGCustom from '../../styles/Bg.module.css';
import HeadingSection from '../../components/HeadingSection/HeadingSection';
import { useRecoilValueLoadable } from 'recoil';
import { ourTeam } from '../../components/state';
import { BiLoaderAlt } from 'react-icons/bi';

export default function SectionTeams() {
    const [members, setMembers] = useState([]);
    const teamsRecoil = useRecoilValueLoadable(ourTeam);

    const { contents: contentTeams } = teamsRecoil;

    const memberRef = useRef(async () => {
        setMembers(await contentTeams);
    });

    useEffect(() => {
        memberRef.current();
    }, []);

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="text-center mx-auto lg:w-[421px]">
                    <HeadingSection
                        text="Our Team Members"
                        subtext="Introducing"
                    />
                    <p className="text-solid-brown leading-8 mt-4">
                        Behind a startup with a variety of services, there is a
                        team that has many abilities
                    </p>
                </div>
                <div className="grid grid-cols-4 gap-4 lg:mt-16">
                    {members.data === undefined && (
                        <div className="col-span-4 flex justify-center">
                            <BiLoaderAlt className="animate-spin" size={70} />
                        </div>
                    )}
                    {members.data &&
                        members.data.map((member, index) => (
                            <div
                                key={index}
                                className="hover:shadow-bottom-x hover:bg-white transition-all cursor-pointer rounded-lg w-full 
                                items-center py-6 px-11 flex flex-col"
                            >
                                {/* Avatar */}
                                <div
                                    className={`w-36 h-36 bg-cover p-3 relative ${BGCustom['bg-linear-orange']}`}
                                >
                                    <div
                                        className={`overflow-hidden relative w-full h-full bg-blue-50 rounded-full`}
                                    >
                                        <Image
                                            src="/images/avatar-placeholder.png"
                                            alt=""
                                            layout="fill"
                                        />
                                    </div>
                                    <div
                                        className="absolute left-1/2 -translate-x-1/2 bottom-0 b-5 w-5 h-5 rounded-full 
                                            text-white text-lg flex justify-center items-center bg-blue-600"
                                    >
                                        <BsCheck />
                                    </div>
                                </div>
                                <div className="flex flex-col text-center mt-4 ">
                                    <span className="font-semibold">
                                        Bariq Dharmawan
                                    </span>
                                    <span className="-mt-1 text-solid-brown font-medium text-sm">
                                        @briqdharmawan
                                    </span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
