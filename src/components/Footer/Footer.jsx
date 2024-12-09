import styles from './Footer.module.scss'

const Footer = ({ }) => {

    return (
        <footer id='contact' className={styles.footer}>
            <div className={`${styles.footerContainer} container`}>
                <div className={styles.footerTop}>
                    <h2 className={styles.footerTopTitle}>
                        Есть предложения
                        <br /> обращайтесь!
                    </h2>
                    <div className={styles.footerInput}>
                        <input type="text" placeholder="Ваш номер телефона" className={styles.footerInputInput} />
                        <button type="button" className={styles.footerInputBtn}>Отправить</button>
                    </div>
                </div>
                <div className={styles.footerContent}>
                    <div className={styles.footerContentLeft}>
                        <a href="https://keypix.uz">
                            <svg width="106" height="32" viewBox="0 0 106 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="6.4" fill="#CCFF00" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.40039 21.7522V10.4268C6.40039 10.179 6.50523 9.94263 6.68901 9.77628L10.1678 6.62722C10.4927 6.33315 10.9847 6.32381 11.3205 6.60534L15.7733 10.3386C15.8154 10.3739 15.8533 10.4121 15.8869 10.4528V10.427C15.8869 10.1791 15.9917 9.94281 16.1755 9.77645L19.6543 6.6274C19.9792 6.33332 20.4712 6.32398 20.807 6.60552L25.2598 10.3388C25.6663 10.6796 25.6798 11.3003 25.2885 11.6585L21.3371 15.2755C20.9571 15.6234 20.9571 16.2222 21.3371 16.5701L25.3148 20.2111C25.6968 20.5608 25.6945 21.1635 25.3099 21.5102L21.0232 25.3747C20.7026 25.6637 20.2193 25.6766 19.8837 25.4051L16.2124 22.4346C16.0065 22.268 15.8869 22.0173 15.8869 21.7524V21.4467C15.867 21.4686 15.8458 21.4897 15.8233 21.51L11.5367 25.3745C11.2161 25.6636 10.7328 25.6765 10.3972 25.4049L6.72594 22.4344C6.52003 22.2678 6.40039 22.0171 6.40039 21.7522ZM15.8869 20.2699V11.5691C15.8611 11.6003 15.8328 11.6301 15.802 11.6583L11.8506 15.2753C11.4706 15.6232 11.4706 16.2221 11.8506 16.5699L15.8283 20.211C15.8489 20.2299 15.8685 20.2495 15.8869 20.2699Z" fill="black" />
                                <path d="M41.42 22H38.72V9.94H41.42V14.728H44.426L47.63 9.94H50.87L46.676 15.88L50.816 22H47.576L44.462 17.356H41.42V22ZM61.758 22H51.552V9.94H61.758V12.37H54.252V14.728H61.488V17.14H54.252V19.57H61.758V22ZM70.1238 22H67.4058V18.004L62.0598 9.94H65.3898L67.6938 13.468L68.7018 15.088H68.8998L69.9078 13.468L72.2118 9.94H75.5598L70.1238 18.022V22ZM78.7735 22H76.0735V9.94H82.3735C85.1635 9.94 86.9635 11.524 86.9635 14.296C86.9635 17.068 85.1635 18.67 82.3735 18.67H78.7735V22ZM82.0855 12.37H78.7735V16.24H82.0855C83.5795 16.24 84.2815 15.808 84.2815 14.296C84.2815 12.82 83.5795 12.37 82.0855 12.37ZM90.6212 22H87.9212V9.94H90.6212V22ZM94.7525 22H91.2245L95.9225 16.042V15.844L91.2245 9.94H94.7525L98.1365 14.242H98.3345L101.592 9.94H105.12L100.44 15.898V16.096L105.12 22H101.592L98.2265 17.644H98.0285L94.7525 22Z" fill="white" />
                            </svg>
                        </a>
                        <p>Разработка сайтов</p>
                    </div>
                </div>
                <div className={styles.footerBot}>
                    <div className={styles.footerBotLeft}>
                        <a href="/" className={styles.footerBotBtn}>Главная</a>
                        <a href="/catalog" className={styles.footerBotBtn}>Наши продукты</a>
                        <a href="/" className={styles.footerBotBtn}>Отзывы</a>
                        <a href="/#contact" className={styles.footerBotBtn}>Контакты</a>
                    </div>
                    <div className={styles.footerBotRight}>
                        <a target="_blank" href="#!" className={styles.footerBotLink}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2057_758)">
                                    <path d="M24 12C24 5.37264 18.6274 0 12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12H24Z" fill="#EE2C3F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2057_758">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a target="_blank" href="" className={styles.footerBotLink}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2057_765)">
                                    <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#EE2C3F" />
                                    <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#EE2C3F" />
                                    <path d="M19.8469 5.59226C19.8469 6.38914 19.2 7.03133 18.4078 7.03133C17.6109 7.03133 16.9688 6.38445 16.9688 5.59226C16.9688 4.79539 17.6156 4.1532 18.4078 4.1532C19.2 4.1532 19.8469 4.80007 19.8469 5.59226Z" fill="#EE2C3F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2057_765">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a target="_blank" href="" className={styles.footerBotLink}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93013 10.3492 5.43188 11.8733C4.86382 12.0992 4.56625 12.3202 4.53916 12.5363C4.49337 12.9015 4.9507 13.0453 5.57346 13.2411C5.65817 13.2678 5.74594 13.2954 5.83593 13.3246C6.44863 13.5238 7.27282 13.7568 7.70128 13.766C8.08993 13.7744 8.52372 13.6142 9.00263 13.2853C12.2711 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.7839 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.0769 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5421 7.68858C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23204 15.7625 7.47282 12.43 8.85893Z" fill="#EE2C3F" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>


    );
};

export default Footer;
