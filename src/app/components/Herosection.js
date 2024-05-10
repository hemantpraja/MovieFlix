import styleSheet from '@/app/styles/herosection.module.css';
import styles from '@/app/styles/common.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Mulish } from 'next/font/google';

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
});

const Herosevtion = ({ title, imageUrl }) => {
  return (
    <main className={styleSheet.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={styleSheet.hero_content}>
            <h1>{title}</h1>
            <p>
              From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.
            </p>
            <Link href="/movies">
              <button className={mulish.className}>
                Explore Movies
              </button>
            </Link>
          </div>

          <div className={styleSheet.hero_image}>
            <Image src={imageUrl} height={500} width={500} alt='my image'></Image>
          </div>
        </div>
      </div>

      <div className={styles["custom-shape-divider-bottom-1709904779"]}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles["shape-fill"]}></path>
        </svg>
      </div>
    </main>
  );
};

export default Herosevtion;