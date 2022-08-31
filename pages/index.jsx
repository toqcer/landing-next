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
            <SectionSkills />
            <SectionTeams />
            <SectionReview className="mb-10" />
            <SectionServices />
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
