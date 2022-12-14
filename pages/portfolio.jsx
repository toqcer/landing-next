import PortoProduct from '../components/Section/portoProduct';
import MainLayout from '../layouts/MainLayout';

const Portfolio = () => {
    return (
        <PortoProduct
            headingText="Portfolio"
            urlApi="https://jsonplaceholder.typicode.com/posts"
        />
    );
};

export default Portfolio;

Portfolio.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
