import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionHomeHero from '../sections/home/SectionHomeHero';
import SectionAboutUsHome from '../sections/home/SectionAboutUsHome';
import SectionOurAchievement from '../sections/home/SectionOurAchievement';
import SectionSkills from '../sections/home/SectionSkills';

export default function Home() {
  return (
    <>
      <SectionHomeHero />
      <SectionAboutUsHome />
      <SectionOurAchievement />
      <SectionSkills />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
