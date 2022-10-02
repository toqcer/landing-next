import Image from 'next/image';
import HeadingSection from '../../components/HeadingSection/HeadingSection';
import CustomLiWithDot from '../../components/Li/CustomLiWithDot';

import FsLightbox from 'fslightbox-react';
import { useEffect, useState } from 'react';
import { BiPlay } from 'react-icons/bi';

import CustomLi from '../../styles/CustomLi.module.scss';

import AboutCover from '../../public/images/about-cover.png';

export default function SectionAboutUsHome() {
    const [togglerPromo, setTogglerPromo] = useState(false);
    const [aboutDesc, setAboutDesc] = useState({});

    useEffect(() => {
        async function getAboutDesc() {
            const resAboutDesc = await fetch('json/about.json');
            const jsonAboutDesc = await resAboutDesc.json();

            setAboutDesc(jsonAboutDesc);
        }

        getAboutDesc();
    }, []);

    return (
        <>
            <section className={`container mx-auto py-20`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:h-[576px] ">
                    <div className="lg:flex-1">
                        <div
                            className={`lg:w-96 flex flex-col gap-4 ${CustomLi['custom-li-dot']}`}
                        >
                            <HeadingSection
                                text={aboutDesc.heading}
                                subtext="What is Toqcer?"
                                isCenter={false}
                            />

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: aboutDesc.desc,
                                }}
                            />
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
