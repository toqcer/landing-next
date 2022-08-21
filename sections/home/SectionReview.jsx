import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { BiRightArrowAlt, BiStar } from 'react-icons/bi';
import Link from 'next/link';
import Card from '../../components/Card/Card';

import ContainerStyle from '../../styles/Container.module.css';

export default function SectionReview() {
    return (
        <section className="overflow-hidden">
            <div
                className={`container pr-0 ml-auto overflow-visible ${ContainerStyle['container-right-0']}`}
            >
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-4">
                        <small className="capitalize text-fancy-purple font-semibold mb-3 block">
                            What Our Client Feels About
                        </small>
                        <h2 className="text-4xl font-bold mb-12">
                            Client Review
                        </h2>

                        <p className="text-gray-helper">
                            I say chap thats suing lavatory chip shop gosh off
                            his smashing boot are you taking the piss posh loo
                            brilliant.
                        </p>
                    </div>
                    <div className="col-span-8">
                        <Swiper
                            modules={[Scrollbar]}
                            slidesPerView={2.5}
                            spaceBetween={60}
                            scrollbar={{ draggable: true }}
                            className="pl-10"
                        >
                            {[...Array(5).fill(5)].map((reviewItem, index) => (
                                <SwiperSlide
                                    className="overflow-visible py-10"
                                    key={index}
                                >
                                    <Card className="shadow-lg px-10">
                                        <div className="flex items-center gap-3 mb-10">
                                            <BiStar color="#571C56" />
                                            <p className="text-xl">
                                                Build KOMINFO WEB
                                            </p>
                                        </div>
                                        <p className="text-gray-600">
                                            More than 2 billion we people over
                                            countries use socibooks we to stay
                                            in touch with friends.
                                        </p>

                                        <Link href="/details">
                                            <a className="text-fancy-purple inline-flex items-center">
                                                See details
                                                <BiRightArrowAlt />
                                            </a>
                                        </Link>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
