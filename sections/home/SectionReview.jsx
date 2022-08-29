import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { BiRightArrowAlt, BiStar } from 'react-icons/bi';
import Link from 'next/link';
import Card from '../../components/Card/Card';

import ContainerStyle from '../../styles/Container.module.css';

import HeadingSection from '../../components/HeadingSection/HeadingSection';
import { useEffect, useRef, useState } from 'react';

export default function SectionReview({ className }) {
    const [reviews, setReviews] = useState([]);

    async function getReviews() {
        const dummyReviewsRes = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=6`,
        );
        setReviews([...reviews, ...(await dummyReviewsRes.json())]);
    }

    const apiRef = useRef(getReviews);

    useEffect(() => {
        apiRef.current();
    }, []);

    return (
        <section className={`overflow-hidden ${className && className}`}>
            <div
                className={`container pr-0 ml-auto overflow-visible ${ContainerStyle['container-right-0']}`}
            >
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-4">
                        <HeadingSection
                            text="Client Review"
                            subtext="What Our Client Feels About"
                            className="mb-12"
                            isCenter={false}
                        />

                        <p className="text-gray-helper">
                            I say chap thats suing lavatory chip shop gosh off
                            his smashing boot are you taking the piss posh loo
                            brilliant.
                        </p>
                    </div>
                    <div className="col-span-8 ">
                        <div className="overflow-hidden">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                slidesPerView={2.5}
                                spaceBetween={60}
                                autoplay={{ delay: 9000 }}
                                watchOverflow={true}
                                pagination={{ clickable: true }}
                                style={{
                                    paddingLeft: '3rem',
                                    paddingRight: '3rem',
                                }}
                                mousewheel={true}
                            >
                                {reviews.map((review, index) => (
                                    <SwiperSlide
                                        className="overflow-visible py-10 bg-white !h-auto"
                                        key={index}
                                    >
                                        <Card className="!shadow-lg h-full flex flex-col">
                                            <div className="flex items-center gap-3 mb-10">
                                                <BiStar color="#571C56" />
                                                <p className="text-xl">
                                                    {review.title}
                                                </p>
                                            </div>
                                            <p className="text-gray-600 mb-3">
                                                {review.body}
                                            </p>

                                            <Link href="/details" passHref>
                                                <a className="text-fancy-purple inline-flex items-center mt-auto">
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
            </div>
        </section>
    );
}
