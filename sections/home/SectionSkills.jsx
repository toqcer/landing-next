import FancyButton from '../../components/Button/FancyButton';
import Card from '../../components/Card/Card';
import UsersIcon from '../../public/images/UsersIcon';
import UserssIcon from '../../public/images/UserssIcon';

export default function SectionSkills() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mx-auto lg:w-[421px]">
          <span className="capitalize text-fancy-purple font-semibold">
            what we have
          </span>
          <h2 className="text-4xl font-bold">Tools and Skills</h2>
          <p className="text-solid-brown leading-8 mt-4">
            The wise man once said that we must recognize the weapons we use
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 lg:gap-10 lg:mt-16">
          <Card className="col-span-12 lg:col-span-6 p-10 ">
            <div className="flex gap-9 ">
              <div>
                <div className="shadow-blue-500 shadow-lg bg-blue-500 p-4 flex justify-center items-center aspect-square rounded-3xl">
                  <UsersIcon />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-2xl">Python</h3>
                <p className="text-solid-brown text-base mt-2">
                  Members, Friends Connection ( like followers ), Private
                  Message
                </p>
              </div>
            </div>
          </Card>
          <Card className="col-span-12 lg:col-span-6 p-10 ">
            <div className="flex gap-9 ">
              <div>
                <div className="shadow-pink-500 shadow-md bg-pink-500 p-4 flex justify-center items-center aspect-square rounded-3xl">
                  <UserssIcon />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-2xl">PHP</h3>
                <p className="text-solid-brown text-base mt-2">
                  Your users can create groups to let other users to join and
                  talk
                </p>
              </div>
            </div>
          </Card>
          <Card className="col-span-12 lg:col-span-6 p-10 ">
            <div className="flex gap-9 ">
              <div>
                <div className="shadow-orange-400 shadow-md bg-orange-400 p-4 flex justify-center items-center aspect-square rounded-3xl">
                  <UsersIcon />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-2xl">Laravel</h3>
                <p className="text-solid-brown text-base mt-2">
                  Forum is ready by BBPress. Your users can make topics and
                  talk.
                </p>
              </div>
            </div>
          </Card>
          <Card className="col-span-12 lg:col-span-6 p-10 ">
            <div className="flex gap-9 ">
              <div>
                <div className="shadow-blue-500 shadow-lg bg-blue-500 p-4 flex justify-center items-center aspect-square rounded-3xl">
                  <UsersIcon />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-2xl">Codeigniter</h3>
                <p className="text-solid-brown text-base mt-2">
                  You can create Members, Groups Module. We already created 3
                  modules. Its by drag & drop live builder.
                </p>
              </div>
            </div>
          </Card>
          <Card className="col-span-12 lg:col-span-6 p-10 ">
            <div className="flex gap-9 ">
              <div>
                <div className="shadow-pink-500 shadow-md bg-pink-500 p-4 flex justify-center items-center aspect-square rounded-3xl">
                  <UsersIcon />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-2xl">Express</h3>
                <p className="text-solid-brown text-base mt-2">
                  Members, Groups list can be modified by drag drop live
                  builder.
                </p>
              </div>
            </div>
          </Card>
          <Card className="col-span-12 lg:col-span-6 p-10 ">
            <div className="flex gap-9 ">
              <div>
                <div className="shadow-orange-400 shadow-md bg-orange-400 p-4 flex justify-center items-center aspect-square rounded-3xl">
                  <UsersIcon />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-2xl">Golang</h3>
                <p className="text-solid-brown text-base mt-2">
                  8 different scroll effects are ready. You can always change by
                  your tastes.
                </p>
              </div>
            </div>
          </Card>
        </div>
        <FancyButton className="mt-10 mx-auto">Discover More</FancyButton>
      </div>
    </section>
  );
}
