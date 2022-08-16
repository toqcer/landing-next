import FancyButton from '../../components/Button/FancyButton';
import Card from '../../components/Card/Card';
import UsersIcon from '../../public/images/UsersIcon';
import UserssIcon from '../../public/images/UserssIcon';

import Image from 'next/image';

export default function SectionSkills() {
    let dummySKill = [
        {
            title: 'Python',
            desc: 'Members, Friends Connection ( like followers ), Private Message',
        },
        {
            title: 'Python',
            desc: 'Members, Friends Connection ( like followers ), Private Message',
        },
        {
            title: 'Python',
            desc: 'Members, Friends Connection ( like followers ), Private Message',
        },
        {
            title: 'Python',
            desc: 'Members, Friends Connection ( like followers ), Private Message',
        },
        {
            title: 'Python',
            desc: 'Members, Friends Connection ( like followers ), Private Message',
        },
        {
            title: 'Python',
            desc: 'Members, Friends Connection ( like followers ), Private Message',
        },
    ];
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
                    {dummySKill.map((skill, i) => (
                        <Card key={i} className="col-span-6 bg-white">
                            <figure className="flex items-center gap-4">
                                <div
                                    className="flex items-center justify-center shadow-md h-20 w-20 
                                    bg-linear-blue rounded-3xl"
                                >
                                    <Image
                                        src="/images/icon/tools/1.svg"
                                        height={34}
                                        alt="img"
                                    />
                                </div>
                                <figcaption>
                                    <span className="block text-purple-bold font-bold">
                                        {skill.title}
                                    </span>
                                    <small className="text-gray-helper">
                                        {skill.desc}
                                    </small>
                                </figcaption>
                            </figure>
                        </Card>
                    ))}
                </div>
                <FancyButton className="mt-10 mx-auto">
                    Discover More
                </FancyButton>
            </div>
        </section>
    );
}
