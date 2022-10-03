import FancyButton from '../../components/Button/FancyButton';
import Card from '../../components/Card/Card';

import HeadingSection from '../../components/HeadingSection/HeadingSection';
import UsersIcon from '../../public/images/UsersIcon';
import Link from 'next/link';

export default function SectionSkills({ skills }) {
    return (
        <section className="py-20 bg-linear-green-center">
            <div className="container mx-auto">
                <div className="text-center mx-auto lg:w-[421px]">
                    <HeadingSection
                        subtext="what we have"
                        text="Tools and Skills"
                    />
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
                                    className={`flex items-center justify-center shadow-md h-20 w-20 
                                     rounded-3xl ${skill.bgColor}`}
                                >
                                    <UsersIcon />
                                </div>
                                <figcaption className="flex-1">
                                    <span className="block text-purple-bold font-bold text-2xl mb-1">
                                        {`${String(skill.title).substring(
                                            0,
                                            20,
                                        )}...`}
                                    </span>
                                    <small className="text-gray-helper">
                                        {skill.desc}
                                    </small>
                                </figcaption>
                            </figure>
                        </Card>
                    ))}
                </div>

                <FancyButton className="mt-10 mx-auto gap-2 flex">
                    <Link href="/teams#tools-and-skills">
                        <span>Discover More</span>
                    </Link>
                </FancyButton>
            </div>
        </section>
    );
}
