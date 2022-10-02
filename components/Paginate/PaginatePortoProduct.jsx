import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../Card/Card';
import UsersIcon from '../../public/images/UsersIcon';
import PaginationStyle from '../../styles/Pagination.module.scss';

const PaginatePortoProduct = ({ data, ...rest }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="grid grid-cols-12 gap-8 lg:mt-16 mb-4" {...rest}>
                {currentItems.map((skill, i) => (
                    <Card key={i} className="col-span-6 bg-white">
                        <figure className="flex items-center gap-4">
                            <div
                                className="flex items-center justify-center shadow-md h-20 w-20 
                                            rounded-3xl bg-linear-red"
                            >
                                <UsersIcon />
                            </div>
                            <figcaption className="flex-1">
                                <span className="block text-purple-bold font-bold text-2xl mb-1">
                                    {String(skill.title).substring(0, 20)}
                                    ...
                                </span>
                                <small className="text-gray-helper">
                                    {skill.body}
                                </small>
                            </figcaption>
                        </figure>
                    </Card>
                ))}
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName={PaginationStyle.pagination}
                previousClassName={PaginationStyle.pagination__item}
                previousLinkClassName={PaginationStyle.pagination__link}
                nextClassName={PaginationStyle.pagination__item}
                nextLinkClassName={PaginationStyle.pagination__link}
                pageClassName={PaginationStyle.pagination__item}
                pageLinkClassName={PaginationStyle.pagination__link}
                activeClassName={PaginationStyle['pagination__item--active']}
            />
        </>
    );
};

export default PaginatePortoProduct;
