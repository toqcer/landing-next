import Image from 'next/image';
import CustomLiWithDot from '../../components/Li/CustomLiWithDot';

export default function SectionAboutUsHome() {
  return (
    <section className={`container mx-auto py-20`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:h-[576px] ">
        <div className="lg:flex-1">
          <div className="lg:w-96 flex flex-col gap-4">
            <span className="text-fancy-purple font-medium text-lg">
              What is Toqcer?
            </span>
            <h3 className="font-bold lg:text-4xl">
              Toqcer Is a Digital Agency For You
            </h3>
            <small className="text-solid-brown">
              We help grow your business with various of products and services.
              We have 3 core services to help you develop your website and
              application such as:
            </small>
            <ul className="space-y-2">
              <CustomLiWithDot>Design</CustomLiWithDot>
              <CustomLiWithDot>Develop</CustomLiWithDot>
              <CustomLiWithDot>Maintenance</CustomLiWithDot>
            </ul>
          </div>
        </div>
        <div className="lg:flex-1 h-full flex gap-6">
          <div className="flex-1 flex flex-col justify-center ">
            <div className="relative w-full lg:h-[422px] rounded-lg overflow-hidden">
              <Image
                src={'/images/desc-placeholder-1.png'}
                alt="placeholders-1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={'/images/desc-placeholder-2.png'}
                alt="placeholders-1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={'/images/desc-placeholder-3.png'}
                alt="placeholders-1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
