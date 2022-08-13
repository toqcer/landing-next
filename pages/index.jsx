import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionHomeHero from '../sections/home/SectionHomeHero';
import SectionAboutUsHome from '../sections/home/SectionAboutUsHome';
import SectionSkills from '../sections/home/SectionSkills';
import SectionPorto from '../sections/home/SectionPorto';

export default function Home() {
  return (
    <>
      <SectionHomeHero />
      <SectionAboutUsHome />
      <SectionPorto />
      <SectionSkills />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
