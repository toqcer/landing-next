import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Grid, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

import HeadingSection from '../components/HeadingSection/HeadingSection';
import MainLayout from '../layouts/MainLayout';
import Card from '../components/Card/Card';

import BGCustom from '../styles/Bg.module.css';
import Image from 'next/image';
import { BsCheck } from 'react-icons/bs';

import SliderCustom from '../styles/Slider.module.css';
import UsersIcon from '../public/images/UsersIcon';

export default function Teams() {
    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getApiSkill() {
        setIsLoading(true);
        const response = await fetch('json/skill.json');
        const dummySkill = await response.json();
        setSkills([...skills, ...dummySkill]);
        setIsLoading(false);
    }

    const apiRef = useRef(getApiSkill);
    useEffect(() => {
        apiRef.current();
    }, []);

    return (
        <>
            <div className="bg-linear-full-green mb-10">
                <header className="h-screen flex flex-col justify-center">
                    <HeadingSection
                        text="Our Team Members"
                        subtext="Introducing Who is The Man Behind Gun"
                        className="mb-3"
                    />

                    <p className="text-gray-helper text-center">
                        Behind a startup with a variety of services, there is a
                        team
                        <br />
                        that has many abilities
                    </p>

                    <article className="mt-10">
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={4.5}
                            spaceBetween={20}
                            grabCursor={true}
                            initialSlide={0}
                            slidesOffsetBefore={100}
                        >
                            {Array(5)
                                .fill(5)
                                .map((item, index) => {
                                    return (
                                        <SwiperSlide
                                            className={`overflow-visible !h-auto pb-14 ${SliderCustom['swiper-slide-active']}`}
                                            key={index}
                                        >
                                            <Card className="!shadow-none h-full flex flex-col bg-white">
                                                <div
                                                    key={index}
                                                    className="w-full items-center flex flex-col"
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
                                                        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 b-5 w-5 h-5 rounded-full text-white text-lg flex justify-center items-center bg-blue-600">
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
                                            </Card>
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </article>
                </header>

                <section>
                    <HeadingSection
                        text="Tools and Skills"
                        subtext="What We Capable of"
                    />

                    <p className="text-gray-helper text-center">
                        Behind a startup with a variety of services, there is a
                        team
                        <br />
                        that has many abilities
                    </p>

                    <article className="mt-10">
                        <Swiper
                            modules={[Grid]}
                            slidesPerView={3}
                            spaceBetween={14}
                            grid={{ rows: 2, fill: 'row' }}
                            slidesOffsetBefore={100}
                        >
                            {skills.map((skill, i) => (
                                <SwiperSlide className="pb-10" key={i}>
                                    <Card className="bg-white">
                                        <figure className="flex items-center gap-4">
                                            <div
                                                className={`flex items-center justify-center shadow-md 
                                                h-20 w-20 rounded-3xl ${skill.bgColor}`}
                                            >
                                                <UsersIcon />
                                            </div>
                                            <figcaption className="flex-1">
                                                <span className="block text-purple-bold font-bold text-2xl mb-1">
                                                    {`${String(
                                                        skill.title,
                                                    ).substring(0, 20)}...`}
                                                </span>
                                                <small className="text-gray-helper">
                                                    {skill.desc}
                                                </small>
                                            </figcaption>
                                        </figure>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </article>
                </section>
            </div>
        </>
    );
}

Teams.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
