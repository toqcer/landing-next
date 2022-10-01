import PortoProduct from '../components/Section/portoProduct';
import MainLayout from '../layouts/MainLayout';

const Products = () => {
    return (
        <PortoProduct
            headingText="Products"
            urlApi="https://jsonplaceholder.typicode.com/posts"
        />
    );
};

export default Products;

Products.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
