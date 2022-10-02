import PortoProduct from '../components/Section/portoProduct';
import MainLayout from '../layouts/MainLayout';
import SectionServices from '../sections/services/SectionService';

export default function Services() {
    return (
        <PortoProduct
            headingText="Services"
            urlApi="https://jsonplaceholder.typicode.com/posts"
        />
    );
}

Services.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
