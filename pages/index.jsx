import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionHomeHero from '../sections/home/SectionHomeHero';
import SectionAboutUsHome from '../sections/home/SectionAboutUsHome';
import SectionSkills from '../sections/home/SectionSkills';
import SectionPorto from '../sections/home/SectionPorto';
import SectionTeams from '../sections/home/SectionTeams';
import SectionReview from '../sections/home/SectionReview';
import SectionService from '../sections/home/SectionServices';

export default function Home() {
    return (
        <>
            <SectionHomeHero />
            <SectionAboutUsHome />
            <SectionPorto />
            <SectionSkills />
            <SectionTeams />
            <SectionReview className="mb-10" />
            <SectionService />
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
