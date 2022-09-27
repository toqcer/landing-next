import { useEffect, useRef, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import Card from '../components/Card/Card';
import HeadingSection from '../components/HeadingSection/HeadingSection';
import InputHorizontal from '../components/InputHorizontal/InputHorizontal';
import MainLayout from '../layouts/MainLayout';
import UsersIcon from '../public/images/UsersIcon';

const portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getApiSkill() {
        setIsLoading(true);
        const response = await fetch('json/porto.json');
        const dummyPortfolio = await response.json();
        setPortfolio([...portfolio, ...dummyPortfolio]);
        setIsLoading(false);
    }

    const apiRef = useRef(getApiSkill);

    useEffect(() => {
        apiRef.current();
    }, []);

    return (
        <>
            <header className="pt-40">
                <HeadingSection text="Products" className="mb-8" />

                <div className="container">
                    <div className="w-6/12 mx-auto">
                        <InputHorizontal
                            placeholder="What You Looking For..."
                            btnText="Search"
                            className="placeholder:text-teal-500"
                        />
                    </div>
                </div>
            </header>

            <section className="pb-20">
                <div className="container">
                    {isLoading && <BiLoaderAlt className="animate-spin" />}
                    {!isLoading && (
                        <div className="grid grid-cols-12 gap-8 lg:mt-16">
                            {portfolio.map((skill, i) => (
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
                                                {`${String(
                                                    skill.title,
                                                ).substring(0, 20)}...`}
                                            </span>
                                            <small className="text-gray-helper">
                                                {skill.desc}
                                            </small>
                                        </figcaption>
                                    </figure>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default portfolio;

portfolio.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
