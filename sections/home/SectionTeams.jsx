import { BsCheck } from 'react-icons/bs';
import Image from 'next/image';

import Card from '../../components/Card/Card';

export default function SectionTeams() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mx-auto lg:w-[421px]">
          <span className="capitalize text-fancy-purple font-semibold">
            Introducing
          </span>
          <h2 className="text-4xl font-bold">Our Team Members</h2>
          <p className="text-solid-brown leading-8 mt-4">
            Behind a startup with a variety of services, there is a team that
            has many abilities
          </p>
        </div>
        <Card className="flex flex-col justify-center w-max">
          {/* Avatar */}
          <Card className=" p-4 shadow-md shadow-gray-500 w-40 h-40 rounded-full relative">
            <div className="w-full h-full overflow-hidden rounded-full relative bg-slate-500">
              <Image
                src="/images/avatar-placeholder.png"
                objectFit="cover"
                layout="fill"
                alt=""
              />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 b-5 w-5 h-5 rounded-full text-white text-lg flex justify-center items-center bg-blue-600">
              <BsCheck />
            </div>
          </Card>
        </Card>
      </div>
    </section>
  );
}
