import styles from './About.module.scss'

const About = ({ }) => {

    return (
        <section id='about' className={`container ${styles.about}`}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <p className={styles.label}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.0514 3.69069C12.3709 2.16826 10.8128 1.73216 9.60357 2.15022C8.99119 2.36194 8.42495 2.79019 8.08264 3.4096C7.81269 3.89808 7.699 4.4973 7.77405 5.09749C7.50685 5.11173 7.24559 5.16421 6.99992 5.24885C5.76592 5.67395 4.75317 7.02469 5.25995 8.693C5.26544 8.71109 5.27145 8.72902 5.27796 8.74677L5.56316 9.51648C5.31195 9.53682 5.0621 9.60113 4.8304 9.68468C4.20202 9.91127 3.63599 10.3674 3.30478 11.0129C2.96539 11.6745 2.89397 12.4706 3.17468 13.2862L3.18092 13.3038L5.91371 20.7931C5.91934 20.8085 5.92535 20.8238 5.93173 20.8389C6.51055 22.3598 7.94306 24.7977 11.2875 25.7991C11.8166 25.9576 12.3739 25.657 12.5323 25.1278C12.6907 24.5986 12.3902 24.0411 11.8611 23.8827C9.32946 23.1247 8.2441 21.3064 7.78363 20.0829L5.06311 12.6272C4.94972 12.2922 5.01201 12.0669 5.08417 11.9263C5.16507 11.7686 5.31584 11.6361 5.50869 11.5666C5.70085 11.4973 5.89604 11.5042 6.0541 11.574C6.19677 11.637 6.39492 11.7787 6.52989 12.1437L6.532 12.1494L7.64659 15.2479C7.83383 15.7676 8.40681 16.037 8.92639 15.8498C9.44597 15.6625 9.71539 15.0894 9.52815 14.5697L8.41248 11.4809L8.41139 11.4779L8.41049 11.4755L8.4055 11.4619L8.40459 11.4594L7.15845 8.05053C7.0824 7.78156 7.15092 7.58814 7.22327 7.46132C7.30733 7.31395 7.47299 7.19659 7.66858 7.12921C7.83204 7.0729 8.0442 7.08679 8.19592 7.15265C8.25993 7.18044 8.49995 7.33298 8.63032 7.66974L8.65686 7.74263L10.7749 13.4836C10.9661 14.0019 11.5411 14.267 12.0593 14.0758C12.5774 13.8846 12.8425 13.3094 12.6513 12.7912L10.5454 7.03956C10.5345 7.0083 10.5232 6.97735 10.5116 6.94669L9.80502 5.00613C9.71581 4.70013 9.76768 4.50242 9.83683 4.37729C9.91652 4.23309 10.0636 4.10777 10.2569 4.04092C10.4504 3.97404 10.6468 3.98083 10.8029 4.04587C10.9409 4.10339 11.1067 4.22992 11.2258 4.52801C11.7393 5.9035 11.821 6.12179 11.8982 6.34164C11.9393 6.45859 11.9791 6.57597 12.0819 6.86819C12.0902 6.89243 12.0987 6.91662 12.1075 6.94078C12.4821 7.97008 12.913 9.1758 13.2506 10.1253C13.4193 10.5998 13.5645 11.0098 13.6676 11.3012L13.8811 11.8823C14.0865 12.4505 14.649 12.685 15.1959 12.4935C15.6725 12.2982 15.9537 11.7707 15.7675 11.2176L15.5631 10.6376C15.4598 10.3454 15.3104 9.92948 15.1412 9.45374C14.8031 8.50275 14.3712 7.29575 13.9941 6.25951L13.9937 6.25824C13.9892 6.24613 13.985 6.23423 13.9811 6.22253C13.8775 5.91713 13.9453 5.67124 14.0162 5.53487C14.0958 5.38198 14.2466 5.26956 14.4398 5.19996C14.6333 5.13028 14.827 5.13752 14.9782 5.2024C15.1116 5.25962 15.3007 5.43598 15.4203 5.76476C15.7975 6.80124 16.0543 7.50776 16.365 8.35655C16.3973 8.445 16.43 8.53424 16.4631 8.62464C16.8135 9.58233 17.2728 10.8262 17.8795 12.4935C18.0148 12.8652 18.3464 13.116 18.7409 13.1431L18.8405 13.1499C18.8899 13.1533 18.9395 13.153 18.9888 13.1491L19.074 13.1422C19.5044 13.1077 19.8636 12.8195 19.9655 12.3997L20.5053 10.1432L20.5084 10.1297C20.5825 9.80462 20.7274 9.64061 20.8723 9.55356C21.0342 9.45629 21.2542 9.41377 21.4884 9.4532C21.7229 9.49267 21.9194 9.58854 22.0436 9.73506C22.1549 9.86649 22.2749 10.0818 22.242 10.3967L22.2404 10.4141L22.0923 12.231C22.0446 12.7814 22.4582 13.2506 23.0084 13.2984C23.5586 13.3461 24.0709 12.935 24.0944 12.3099L24.2279 10.6192C24.4089 8.82811 23.1247 7.70007 21.8204 7.48048C21.1703 7.37103 20.4579 7.46896 19.8425 7.83866C19.3792 8.11698 19.0009 8.54631 18.7584 9.07475C18.6258 8.71198 18.445 8.22021 18.3287 7.9026L18.2309 7.6352C17.9201 6.78612 17.6702 6.09313 17.2936 5.0582C17.0006 4.25294 16.4391 3.66236 15.7584 3.3703C15.0956 3.08592 14.3712 3.09215 13.7506 3.31561C13.5063 3.40359 13.2676 3.53511 13.0514 3.69069ZM15.7967 17.002C14.791 17.002 13.9989 17.8062 13.9989 18.8846C13.9989 19.5686 14.1109 19.9169 14.4392 20.3593C14.8723 20.9432 15.6861 21.6808 17.3333 22.9543L18.4989 23.8555L19.6646 22.9543C21.3118 21.6808 22.1255 20.9432 22.5587 20.3593C22.8869 19.9169 22.9989 19.5686 22.9989 18.8846C22.9989 17.8147 22.2207 17.018 21.2233 17.0074L21.0341 17.0122C20.6854 17.0358 20.1982 17.2601 19.6979 17.5917L19.0629 18.0342C18.7194 18.2736 18.2631 18.2736 17.9196 18.0342L17.2847 17.5917C16.7388 17.23 16.2078 17.002 15.7967 17.002ZM11.9989 18.8846C11.9989 16.7847 13.6049 15.0016 15.7967 15.0016C16.821 15.0016 17.7695 15.5119 18.4008 15.9317L18.4187 15.9439L18.4913 15.9945L18.5638 15.9439L18.5817 15.9317C19.1413 15.5595 20.0184 15.0644 20.9366 15.014C20.9408 15.0138 20.945 15.0136 20.9492 15.0134C20.9548 15.0132 20.9604 15.013 20.966 15.0129L21.1887 15.0072C21.1984 15.007 21.208 15.0069 21.2177 15.0069C23.4014 15.015 24.9989 16.7882 24.9989 18.8846C24.9989 19.9238 24.7897 20.7091 24.1648 21.5514C23.5448 22.3872 22.5159 23.2782 20.8877 24.5371L19.3785 25.7039C18.858 26.1008 18.095 26.0966 17.6194 25.7039L16.1102 24.5371C14.4819 23.2782 13.4531 22.3872 12.833 21.5514C12.2082 20.7091 11.9989 19.9238 11.9989 18.8846Z" fill="white" />
                        </svg>
                        О компании Pokiza
                    </p>
                    <h3 className={styles.title}>
                        «Мы производим все от ПО до железа» Главный принцип работы в Mobile Solutions
                    </h3>
                    <p className={styles.text}>
                        Создаем  программное обеспечение и оборудование для оптимизации обслуживания клиентов в различных организациях. Наши системы помогают упорядочить поток посетителей, сократить время ожидания и улучшить качество сервиса.
                    </p>
                </div>
                <div className={styles.right}>
                    <img loading='lazy' src="/about.png" alt="" className={styles.img} />
                </div>
            </div>
        </section>
    );
};

export default About;