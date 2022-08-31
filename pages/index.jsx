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

export default function Home() {
    return (
        <>
            <SectionHomeHero />
            <SectionAboutUsHome />
            <SectionPorto />
            <SectionServices />
            <SectionReview className="my-12" />
            <SectionTeams />
            <SectionSkills />
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
