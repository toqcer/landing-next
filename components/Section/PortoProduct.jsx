import { useEffect, useRef, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

import HeadingSection from '../HeadingSection/HeadingSection';
import InputHorizontal from '../InputHorizontal/InputHorizontal';
import PaginatePortoProduct from '../Paginate/PaginatePortoProduct';
import MainLayout from '../../layouts/MainLayout';

const PortoProduct = ({ headingText, urlApi }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getApiData = async () => {
        setIsLoading(true);

        const response = await fetch(urlApi);
        const dummyData = await response.json();

        setData([...data, ...dummyData]);
        setIsLoading(false);
    };

    const apiRef = useRef(getApiData);

    useEffect(() => {
        apiRef.current();
    }, []);

    return (
        <>
            <header className="pt-40">
                <HeadingSection text={headingText} className="mb-8" />

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

                    {!isLoading && <PaginatePortoProduct data={data} />}
                </div>
            </section>
        </>
    );
};

export default PortoProduct;
