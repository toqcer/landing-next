import Image from 'next/image';
import HeadingSection from '../../components/HeadingSection/HeadingSection';
import CustomLiWithDot from '../../components/Li/CustomLiWithDot';

import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import { BiPlay } from 'react-icons/bi';

import AboutCover from '../../public/images/about-cover.png';

export default function SectionAboutUsHome() {
    const [togglerPromo, setTogglerPromo] = useState(false);

    return (
        <>
            <section className={`container mx-auto py-20`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:h-[576px] ">
                    <div className="lg:flex-1">
                        <div className="lg:w-96 flex flex-col gap-4">
                            <HeadingSection
                                text="Toqcer Is a Digital Agency For You"
                                subtext="What is Toqcer?"
                                isCenter={false}
                            />
                            <small className="text-solid-brown">
                                We help grow your business with various of
                                products and services. We have 3 core services
                                to help you develop your website and application
                                such as:
                            </small>

                            <ul className="space-y-2">
                                <CustomLiWithDot>Design</CustomLiWithDot>
                                <CustomLiWithDot>Develop</CustomLiWithDot>
                                <CustomLiWithDot>Maintenance</CustomLiWithDot>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:flex-1 flex relative">
                        <div className="w-full overflow-hidden flex">
                            <div className="w-full relative">
                                <Image
                                    src={AboutCover}
                                    height={360}
                                    layout="responsive"
                                    className="rounded-lg"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                        <button
                            className="rounded-full bg-white p-3 absolute left-1/2 top-1/2 transform -translate-y-1/2"
                            onClick={() => setTogglerPromo(!togglerPromo)}
                        >
                            <BiPlay
                                color="#571C56"
                                size={32}
                                className="-mr-1"
                            />
                        </button>
                    </div>
                </div>
            </section>
            <FsLightbox
                toggler={togglerPromo}
                sources={['https://www.youtube.com/watch?v=RlaHAtv90Co']}
            />
        </>
    );
}
