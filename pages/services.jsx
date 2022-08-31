import MainLayout from '../layouts/MainLayout';
import SectionServices from '../sections/services/SectionService';

export default function Services() {
    return (
        <div>
            <SectionServices />
        </div>
    );
}

Services.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
