import { useEffect, useRef, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

import HeadingSection from '../components/HeadingSection/HeadingSection';
import InputHorizontal from '../components/InputHorizontal/InputHorizontal';
import PaginatePortfolio from '../components/Paginate/PaginatePortfolio';
import MainLayout from '../layouts/MainLayout';

const portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getApiSkill = async () => {
        setIsLoading(true);

        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
        );
        const dummyPortfolio = await response.json();

        setPortfolio([...portfolio, ...dummyPortfolio]);
        setIsLoading(false);
    };

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
                    {isLoading && (
                        <BiLoaderAlt
                            className="animate-spin mx-auto mt-4 text-teal-700"
                            size={50}
                        />
                    )}

                    {!isLoading && <PaginatePortfolio data={portfolio} />}
                </div>
            </section>
        </>
    );
};

export default portfolio;

portfolio.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
