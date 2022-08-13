import Card from '../../components/Card/Card';
import Image from 'next/image';
import skillIcon from '../../public/images/icon/tools/1.svg';

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
                    {dummySKill.map((skill, i) => {
                        return (
                            <Card className="col-span-6 bg-white">
                                <figure className="flex items-center gap-4">
                                    <div
                                        className="flex items-center justify-center shadow-md h-20 w-20 
                                    bg-linear-blue rounded-3xl"
                                    >
                                        <Image src={skillIcon} height={34} />
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
