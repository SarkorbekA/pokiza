
import styles from './Banner.module.scss';
import Link from 'next/link';

const Banner = ({ }) => {

  return (
    <main className={styles.banner}>
      <div className={`container ${styles.bannerContainer}`}>
        <div className={styles.bannerInnerBox}>
          <div className={styles.bannerInner}>
          </div>
          <div className={styles.bannerBox}>
            <div className={styles.bannerBoxImg}>
              <img src="/company.png" alt="company" />
            </div>
            <div className={styles.bannerBoxRight}>
              <h3 className={styles.bannerBoxTitle}>POKIZA</h3>
              <p className={styles.bannerBoxText}>Натуральные ингредиенты:  отборное мясо, ароматные специи и никаких искусственных добавок.  Мы заботимся о вашем здоровье и используем только лучшее сырье.</p>
              <Link href="/catalog"
                className={styles.bannerBoxBtn}>
                Посмотреть каталог
              </Link>
            </div>
          </div>
          <div className={`${styles.bannerBoxSecond} ${styles.bannerBox}`}>
            <div className={styles.bannerBoxImg}>
              <img src="/company2.png" alt="company" />
              <img className={styles.bannerBoxLogo} src='/burxanov.svg' alt='logo' />
            </div>
            <div className={styles.bannerBoxRight}>
              <h3 className={styles.bannerBoxTitle}>BURXANOV</h3>
              <p className={styles.bannerBoxText}>Непревзойденный вкус:  наши колбасы – это настоящий праздник для каждого стола.</p>
              <Link href="/catalog"
                className={styles.bannerBoxBtn}>
                Посмотреть каталог
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}

export default Banner;
