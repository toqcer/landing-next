import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {
    SectionAboutUsHome,
    SectionHomeHero,
    SectionPorto,
    SectionReview,
    SectionServices,
    SectionSkills,
    SectionTeams,
} from '../sections/home';

export default function Home({ reviewData }) {
    return (
        <>
            <SectionHomeHero />
            <SectionAboutUsHome />
            <SectionPorto />
            <SectionServices />
            <SectionReview reviews={reviewData} />
            <SectionTeams />
            <SectionSkills />
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps() {
    const reviewRes = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10',
    );
    const reviewData = await reviewRes.json();

    return {
        props: {
            reviewData,
        },
    };
}
