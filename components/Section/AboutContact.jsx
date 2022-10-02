import Image from 'next/image';

const AboutContact = ({ children }) => {
    return (
        <main className="bg-linear-green-bottom-right overflow-hidden pt-20">
            <div className="container relative w-full h-full pt-32">
                {children}

                <div className="w-3/5 lg:aspect-square cursor-pointer absolute z-[2] opacity-80 -right-20 -bottom-28">
                    <Image
                        draggable={false}
                        layout="fill"
                        objectFit="contain"
                        src="/images/logo2.svg"
                        alt="logo toqcer"
                    />
                </div>
            </div>
        </main>
    );
};

export default AboutContact;
