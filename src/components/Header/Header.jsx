
"use client";

import styles from './Header.module.scss';

import { useState } from "react";

const Header = ({ isBlue = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            <a href="/" className={styles.headerLogo}>
              <img src="/logo.svg" alt="logo" />
            </a>
            <ul className={styles.headerNav}>
              <li className={styles.headerNavItem}>
                <a href="/" className={styles.headerNavLink}>
                  Главная
                </a>
              </li>
              <li className={styles.headerNavItem}>
                <a href="/catalog/pokiza" className={styles.headerNavLink}>
                  Каталог
                </a>
              </li>
              <li className={styles.headerNavItem}>
                <a href="/#about" className={styles.headerNavLink}>
                  О нас
                </a>
              </li>
              <li className={styles.headerNavItem}>
                <a href="/#contact" className={styles.headerNavLink}>
                  Контакты
                </a>
              </li>
            </ul>
            <button onClick={() => setMenuOpen(true)} className={styles.headerBurgerBtn}>
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="4" rx="2" fill="#152040" />
                <rect y="8" width="32" height="4" rx="2" fill="#152040" />
                <rect y="16" width="32" height="4" rx="2" fill="#152040" />
              </svg>
            </button>
          </div>
          <div className={`${styles.headerRight} ${menuOpen ? styles.active : ""}`}>
            <div className={styles.headerBurgerClose}>
              <button onClick={() => setMenuOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.19191 1.19191C1.63823 0.7456 2.36184 0.7456 2.80816 1.19191L10 8.38289L17.1919 1.19191C17.6039 0.779931 18.2522 0.74824 18.7005 1.09684L18.8082 1.19191C19.2545 1.63823 19.2545 2.36184 18.8082 2.80816L11.6172 10L18.8082 17.1919C19.2201 17.6039 19.2518 18.2522 18.9032 18.7005L18.8082 18.8082C18.3618 19.2545 17.6382 19.2545 17.1919 18.8082L10 11.6172L2.80816 18.8082C2.39617 19.2201 1.74791 19.2518 1.29958 18.9032L1.19191 18.8082C0.7456 18.3618 0.7456 17.6382 1.19191 17.1919L8.38289 10L1.19191 2.80816C0.779931 2.39617 0.74824 1.74791 1.09684 1.29958L1.19191 1.19191Z" fill="black" />
                </svg>
              </button>
            </div>
            <ul className={`${styles.headerNav} ${styles.mob}`}>
              <li onClick={() => setMenuOpen(false)} className={styles.headerNavItem}>
                <a href="/" className={styles.headerNavLink}>
                  Главная
                </a>
              </li>
              <li onClick={() => setMenuOpen(false)} className={styles.headerNavItem}>
                <a href="/catalog/pokiza" className={styles.headerNavLink}>
                  Каталог
                </a>
              </li>
              <li onClick={() => setMenuOpen(false)} className={styles.headerNavItem}>
                <a href="/#about" className={styles.headerNavLink}>
                  О нас
                </a>
              </li>
              <li onClick={() => setMenuOpen(false)} className={styles.headerNavItem}>
                <a href="/#contact" className={styles.headerNavLink}>
                  Контакты
                </a>
              </li>
            </ul>
            <button onClick={() => {
              setMenuOpen(false)
              setContactOpen(true)
            }} className={`${styles.headerBtn} ${isBlue ? styles.headerBtnSecond : ''}`}>
              Заказать звонок
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.modal} ${contactOpen ? styles.active : ""}`}>
        <div className={styles.modalBox}>
          <button onClick={() => setContactOpen(false)} className={styles.modalClose}>
            <img src="/exit.svg" alt="exit" />
          </button>
          <div className={styles.modalForm}>
            <h3 className={styles.modalTitle}>
              Оставить заявку на прием
            </h3>
            <div className={styles.modalList}>
              <label htmlFor="name">
                <input placeholder='Ваше имя' required id='name' type="text" />
              </label>
              <label htmlFor="name">
                <input placeholder='Контактный номер' required id='phone' type="text" />
              </label>
              <label htmlFor="name">
                <input placeholder='Ваша почта (Необязательно)' id='email' type="text" />
              </label>
            </div>
            <div className={styles.modalConfirm}>
              <label htmlFor='confirm' className={styles.modalCheckbox}>
                <input id='confirm' type="checkbox" />
                <span className={styles.modalCheckboxSpan}></span>
              </label>
              <p className={styles.modalConfirmText}>
                Подтверждаю свое согласие с условиями <a href="#"> обработки персональных данных</a>
              </p>
            </div>
            <button className={styles.modalBtn}>Отправить</button>
          </div>
        </div>
        <div onClick={() => setContactOpen(false)} className={styles.modalFilter}></div>
      </div>
    </header>
  )
}

export default Header;
