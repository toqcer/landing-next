import React from 'react';
import MainLayout from '../layouts/MainLayout';
import styles from '../styles/HomeSection.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section
        className={`${styles.home_hero} flex flex-col justify-center relative h-screen overflow-hidden`}
      >
        <div className="container mx-auto">
          <h3 className="font-bold text-5xl">
            Toqcer, One Stop <br /> Solution for You
          </h3>
        </div>
        <div className="w-3/5 aspect-[1/1] opacity-70 absolute -right-20 -bottom-48 ">
          <Image
            draggable={false}
            layout="fill"
            objectFit="contain"
            src="/images/logo2.svg"
            alt="logo toqcer"
          />
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
