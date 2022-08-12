import Card from '../../components/Card/Card';
import { BsArrowRightShort, BsStar } from 'react-icons/bs';

export default function SectionOurAchievement() {
  return (
    <section className={'container mx-auto py-20'}>
      <div className={'flex lg:flex-row flex-col gap-6 '}>
        <Card className="p-10 flex flex-col gap-10 lg:w-[340px]">
          <h3 className="flex text-xl items-center space-x-4">
            <BsStar className={'text-fancy-purple text-2xl'} />
            <span className="font-semibold">Build Kominfo Web</span>
          </h3>
          <span className="text-fancy-purple font-semibold">
            Jan 2020 - Feb 2021
          </span>
          <p className="text-[#8C8C8C]">
            More than 2 billion we people over countries use socibooks we to
            stay in touch with friends.
          </p>
          <span>See details</span>
        </Card>
        <Card className="p-10 flex flex-col gap-10 lg:w-[340px]">
          <h3 className="flex text-xl items-center space-x-4">
            <BsStar className={'text-fancy-purple text-2xl'} />
            <span className="font-semibold">Build Kominfo Web</span>
          </h3>
          <span className="text-fancy-purple font-semibold">
            Jan 2020 - Feb 2021
          </span>
          <p className="text-[#8C8C8C]">
            More than 2 billion we people over countries use socibooks we to
            stay in touch with friends.
          </p>
          <span>See details</span>
        </Card>
        <div className="lg:flex-1 lg:pl-24 pt-10 pb-2">
          <h2 className="text-3xl font-bold">
            We are Providing You The Digital Solution
          </h2>
          <p className="my-8 leading-7 text-solid-brown">
            We have realized many ideas from our clients professionally. We help
            clients expand their reach, and thrive with new technologies.
          </p>
          <button className="shadow-lg shadow-fancy-purple/80 py-4 px-9 bg-fancy-purple text-white flex rounded-xl items-center text-lg">
            Discover me
            <BsArrowRightShort className="ml-4" size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
