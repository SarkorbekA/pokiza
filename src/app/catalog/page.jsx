// import styles from "./catalog.module.scss";
// import { useState } from "react";

// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import Link from "next/link";


// const products = [
//   { id: 1, name: "Колбаса вареная", type: "EXTRA", calories: 235, fatLevel: "низкий", meatType: "свинина" },
//   { id: 2, name: "Колбаса докторская", type: "Премиум", calories: 250, fatLevel: "средний", meatType: "говядина" },
//   { id: 3, name: "Колбаса молочная", type: "Стандарт", calories: 220, fatLevel: "высокий", meatType: "курица" },
//   // Добавьте больше продуктов
// ];

// export default function CatalogPage() {
//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [sortOrder, setSortOrder] = useState({ field: null, order: null }); // { field: "calories", order: "asc" }

//   const handleSort = (field) => {
//     const isAscending = sortOrder.field === field && sortOrder.order === "asc";
//     const sorted = [...filteredProducts].sort((a, b) => {
//       if (a[field] > b[field]) return isAscending ? -1 : 1;
//       if (a[field] < b[field]) return isAscending ? 1 : -1;
//       return 0;
//     });
//     setSortOrder({ field, order: isAscending ? "desc" : "asc" });
//     setFilteredProducts(sorted);
//   };

//   return (
//     <div>
//       <Header isBlue={true} />
//       <section className={styles.catalog}>
//         <div className={`${styles.catalogContainer} container`}>
//           <h1 className={styles.catalogTitle}>Наша продукция</h1>
//           <div className={styles.catalogHeader}>
//             <button className={styles.catalogHeaderBtn}>
//               <h3>Все</h3>
//             </button>
//             <button className={`${styles.catalogHeaderBtn} ${styles.active}`}>
//               <h3>Колбасы</h3>
//               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M7.65081 11.2408C7.23148 10.8813 6.60018 10.9299 6.24076 11.3492C5.88134 11.7686 5.9299 12.3999 6.34923 12.7593L13.3492 18.7593C13.7237 19.0803 14.2763 19.0803 14.6508 18.7593L21.6508 12.7593C22.0701 12.3999 22.1187 11.7686 21.7593 11.3492C21.3999 10.9299 20.7686 10.8813 20.3492 11.2408L14 16.6829L7.65081 11.2408Z" fill="black" />
//               </svg>
//             </button>
//             <button className={styles.catalogHeaderBtn}>
//               <h3>Тип мяса</h3>
//               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M7.65081 11.2408C7.23148 10.8813 6.60018 10.9299 6.24076 11.3492C5.88134 11.7686 5.9299 12.3999 6.34923 12.7593L13.3492 18.7593C13.7237 19.0803 14.2763 19.0803 14.6508 18.7593L21.6508 12.7593C22.0701 12.3999 22.1187 11.7686 21.7593 11.3492C21.3999 10.9299 20.7686 10.8813 20.3492 11.2408L14 16.6829L7.65081 11.2408Z" fill="black" />
//               </svg>
//             </button>
//             <button className={styles.catalogHeaderBtn}>
//               <h3>Уровень жирности</h3>
//               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M7.65081 11.2408C7.23148 10.8813 6.60018 10.9299 6.24076 11.3492C5.88134 11.7686 5.9299 12.3999 6.34923 12.7593L13.3492 18.7593C13.7237 19.0803 14.2763 19.0803 14.6508 18.7593L21.6508 12.7593C22.0701 12.3999 22.1187 11.7686 21.7593 11.3492C21.3999 10.9299 20.7686 10.8813 20.3492 11.2408L14 16.6829L7.65081 11.2408Z" fill="black" />
//               </svg>
//             </button>
//           </div>
//           <ul className={styles.catalogList}>
//             {Array.from({ length: 12 }).map((_, index) => (
//               <li key={index} className={styles.catalogListItem}>
//                 <div className={styles.catalogItemImg}>
//                   <img src="/product.png" alt="" />
//                   <span className={styles.catalogItemEnergy}>
//                     235 ККАЛ
//                   </span>
//                   <div className={styles.catalogItemIcons}>
//                     <div className={styles.catalogItemIcon}>
//                       <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M12.6072 26.3123C15.9742 25.5883 19.4675 24.8434 22.0138 26.1986C25.7432 28.2307 29.0423 30.968 31.7276 34.2584C31.8444 34.4141 31.9955 34.5407 32.1693 34.6283C32.3431 34.7159 32.5347 34.7622 32.7293 34.7635C32.8725 34.7665 33.0151 34.7437 33.1502 34.6961C33.3972 34.6088 33.6109 34.4469 33.7617 34.2327C33.9125 34.0186 33.993 33.7628 33.992 33.5009V7.40643C33.994 7.3756 33.994 7.34466 33.992 7.31383C34.5475 6.60676 34.9179 6.0512 35.0526 5.86181C35.2366 5.58311 35.3028 5.24283 35.2365 4.91547C35.1703 4.58811 34.977 4.30034 34.699 4.11516C32.4448 2.60178 29.69 2.02516 27.018 2.50741C24.6821 0.912283 19.9431 -0.657591 15.6543 2.18754C13.1795 1.95606 12.1863 0.781811 12.1568 0.748141C12.0443 0.595973 11.899 0.47105 11.7317 0.382609C11.5643 0.294169 11.3793 0.244474 11.1902 0.2372C11.001 0.229926 10.8127 0.26526 10.6391 0.340587C10.4655 0.415914 10.311 0.529308 10.1871 0.672383C8.08272 3.10506 9.42111 6.14379 10.3218 7.79363C9.42111 8.77849 8.49097 9.73388 7.57767 10.6766C3.05323 15.3568 -1.22289 19.7634 1.68959 24.4814C3.95812 28.1599 8.35629 27.2214 12.6072 26.3123ZM4.21485 18.4966C5.05661 19.0732 6.12564 20.037 6.12564 21.0681C6.12564 22.377 5.06502 23.4377 4.50526 23.909C4.24011 23.6987 4.01366 23.4438 3.83606 23.1557C2.9438 21.7163 3.17949 20.2179 4.21485 18.4966ZM11.6013 3.51752C12.131 3.83585 12.696 4.0915 13.2848 4.2793C13.0996 4.49395 12.9144 4.70018 12.7334 4.95271C12.5524 5.20524 12.3294 5.47039 12.1063 5.72292C11.7609 5.03986 11.5876 4.2828 11.6013 3.51752ZM9.39165 12.457C11.2876 10.5717 13.0737 8.57907 14.741 6.48891C17.9986 2.25067 21.8959 2.93671 24.0508 3.80371C23.9383 4.03933 23.9016 4.30403 23.9457 4.56138C23.9899 4.81872 24.1127 5.05605 24.2974 5.24068C24.482 5.42531 24.7193 5.54816 24.9767 5.59231C25.234 5.63647 25.4987 5.59975 25.7343 5.48722C26.756 5.07412 27.8502 4.87056 28.9521 4.88863C30.054 4.90671 31.141 5.14605 32.1485 5.59244C30.3724 7.8273 26.9128 11.3837 24.1855 10.6766C23.8612 10.5924 23.5168 10.6404 23.2279 10.8101C22.939 10.9798 22.7294 11.2573 22.6451 11.5815C22.5608 11.9058 22.6088 12.2503 22.7785 12.5391C22.9482 12.828 23.2257 13.0377 23.55 13.1219C24.0076 13.2407 24.4787 13.3001 24.9515 13.2987C27.3715 13.2987 29.678 11.7667 31.4793 10.0874V30.1843C29.0404 27.7146 26.2492 25.6197 23.1964 23.968C19.8294 22.1792 15.7174 23.0631 12.0768 23.8417C10.5134 24.2248 8.92147 24.481 7.31672 24.6077C8.14768 23.6119 8.61784 22.3646 8.6509 21.0681C8.6509 18.8711 6.91689 17.2802 5.70476 16.4385C6.69382 15.2516 7.95225 13.93 9.39165 12.457ZM15.3849 11.7162C15.3824 11.5076 15.442 11.3029 15.5561 11.1282C15.6702 10.9536 15.8336 10.8167 16.0257 10.7352C16.2177 10.6536 16.4296 10.6309 16.6346 10.6701C16.8395 10.7093 17.0282 10.8085 17.1766 10.9551C17.325 11.1017 17.4265 11.2892 17.4681 11.4936C17.5097 11.6981 17.4896 11.9103 17.4104 12.1033C17.3311 12.2963 17.1963 12.4614 17.023 12.5775C16.8497 12.6937 16.6458 12.7558 16.4371 12.7558C16.299 12.7569 16.162 12.7306 16.0341 12.6784C15.9063 12.6261 15.79 12.5491 15.6921 12.4516C15.5943 12.3541 15.5167 12.2382 15.464 12.1105C15.4113 11.9828 15.3844 11.8459 15.3849 11.7078V11.7162ZM18.752 6.51417C19.0676 5.4746 20.8564 3.60169 22.5399 4.01836C24.2234 4.43503 22.2242 7.55373 21.2772 8.17663C20.3303 8.79953 18.4195 7.54532 18.752 6.50575V6.51417Z" fill="white" />
//                       </svg>
//                     </div>
//                     <div className={styles.catalogItemIcon}>
//                       <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M29.6439 3.02434C29.5039 2.30686 29.1023 1.65926 28.5098 1.19543C26.9439 -0.0487352 24.9244 -0.08606 23.5984 1.10419C22.3553 2.21979 22.3204 4.15238 22.412 5.25139C19.8952 6.2011 17.3348 8.70602 16.2138 13.015C15.8893 14.1537 15.332 15.2205 14.5738 16.1544C13.5938 16.8762 12.473 17.4062 11.2763 17.7137C5.7542 19.0201 4.24501 21.4462 3.95277 23.2212C3.90915 23.4957 3.89163 23.7733 3.90042 24.0507C2.59188 24.117 1.13503 24.6105 0.41097 26.1243C-0.461394 27.9781 0.245221 29.2596 0.755554 29.8568C1.21049 30.3381 1.7629 30.7273 2.37971 31.0009C2.99653 31.2746 3.66508 31.4271 4.34533 31.4493C4.48648 32.1674 4.88964 32.815 5.48376 33.2782C6.21039 33.8804 7.13711 34.2196 8.10085 34.2362C8.95615 34.2409 9.78007 33.9302 10.3995 33.3694C11.3112 32.54 11.5729 31.2958 11.6121 30.259C13.7581 30.1802 16.1528 29.301 18.6521 27.6173C24.4097 23.7189 30.5162 15.5157 30.2632 10.4354C30.964 10.413 31.6448 10.2077 32.2311 9.84194C32.8173 9.47619 33.2864 8.96412 33.587 8.3618C34.4593 6.51214 33.7527 5.22651 33.2424 4.62931C32.7876 4.14468 32.2343 3.75263 31.6158 3.47679C30.9974 3.20095 30.3266 3.04705 29.6439 3.02434ZM7.15434 31.3663C7.03741 31.2569 6.95688 31.1171 6.92275 30.9645C6.88863 30.8119 6.90243 30.6531 6.96242 30.5079C7.0291 30.2919 7.03436 30.0629 6.97766 29.8444C6.92096 29.6258 6.80432 29.4255 6.63965 29.2637C6.48341 29.1072 6.28707 28.9921 6.06989 28.9296C5.85272 28.867 5.62217 28.8593 5.40089 28.9071C4.4631 29.1103 3.24179 28.8158 2.7838 28.2767C2.67912 28.1523 2.43485 27.862 2.7838 27.1445C3.13274 26.427 4.28426 26.4768 4.71172 26.5431C5.4556 27.6874 6.48102 28.6424 7.69957 29.3259C8.1111 29.5662 8.55012 29.761 9.00811 29.9065C9.00811 30.595 8.89907 31.3041 8.61555 31.5654C8.05724 32.0423 7.30264 31.4825 7.15434 31.3663ZM17.1255 25.5893C15.2455 26.8335 11.6994 28.7536 9.06482 27.2108C7.32009 26.1989 6.34304 24.7764 6.53932 23.582C6.77486 22.1264 8.72023 20.8615 11.9087 20.1108C13.5196 19.7019 15.024 18.9803 16.3272 17.9916C16.4005 17.9344 16.4677 17.8705 16.5279 17.8008C17.5634 16.5583 18.3164 15.1249 18.7393 13.5914C19.8385 9.43178 22.5646 7.28352 24.715 7.28352H24.7586C26.1719 7.30426 27.1794 8.29544 27.5851 10.0787C28.3353 13.2721 23.3803 21.384 17.1255 25.5893ZM31.2098 7.34158C30.9175 7.94708 30.128 8.00929 29.6046 7.97611C28.6974 6.03936 27.0617 4.89473 25.0073 4.7952C24.9767 4.04041 25.0814 3.19438 25.3955 2.91652C25.932 2.43544 26.704 2.99117 26.8349 3.10729C26.9555 3.21442 27.0402 3.35307 27.0782 3.50581C27.1162 3.65855 27.1059 3.81857 27.0486 3.96576C26.9791 4.17998 26.9704 4.40783 27.0232 4.6263C27.0761 4.84476 27.1886 5.04609 27.3496 5.20992C27.5058 5.36639 27.7021 5.48154 27.9193 5.54407C28.1365 5.6066 28.367 5.61436 28.5883 5.56658C29.5217 5.36337 30.7692 5.65782 31.2054 6.19696C31.3144 6.31723 31.5587 6.60338 31.2098 7.325V7.34158Z" fill="white" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <div className={styles.catalogItemBox}>
//                   <h3 className={styles.catalogItemName}>Колбаса вареная</h3>
//                   <h3 className={styles.catalogItemType}>EXTRA</h3>
//                 </div>
//                 <Link href="/product" className={styles.catalogItemBtn}>
//                   <span>Подробнее</span>
//                   <div>
//                     <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M24.1663 0.214294C27.2434 0.246795 28.8094 0.578398 30.4331 1.44678C31.9874 2.27801 33.2166 3.50721 34.0478 5.06149C34.9162 6.68521 35.2478 8.25118 35.2803 11.3283V23.6663C35.2478 26.7435 34.9162 28.3094 34.0478 29.9332C33.2166 31.4874 31.9874 32.7166 30.4331 33.5479C28.8094 34.4162 27.2434 34.7478 24.1663 34.7803H11.8283C8.75112 34.7478 7.18515 34.4162 5.56142 33.5479C4.00715 32.7166 2.77795 31.4874 1.94672 29.9332C1.07834 28.3094 0.746734 26.7435 0.714233 23.6663V11.3283C0.746734 8.25118 1.07834 6.68521 1.94672 5.06149C2.77795 3.50721 4.00715 2.27801 5.56142 1.44678C7.18515 0.578398 8.75112 0.246795 11.8283 0.214294H24.1663ZM23.6391 3.35446H12.3554L11.4795 3.36213C9.1549 3.40621 8.11404 3.64571 7.04359 4.21819C6.03702 4.75651 5.25645 5.53708 4.71813 6.54365C4.14565 7.6141 3.90615 8.65496 3.86207 10.9796L3.8544 11.8554V23.1392L3.86207 24.0151C3.90615 26.3397 4.14565 27.3805 4.71813 28.451C5.25645 29.4576 6.03702 30.2381 7.04359 30.7764C8.11404 31.3489 9.1549 31.5884 11.4795 31.6325L12.3554 31.6402H23.6391L24.515 31.6325C26.8396 31.5884 27.8805 31.3489 28.9509 30.7764C29.9575 30.2381 30.7381 29.4576 31.2764 28.451C31.8489 27.3805 32.0884 26.3397 32.1324 24.0151L32.1401 23.1392V11.8554L32.1324 10.9796C32.0884 8.65496 31.8489 7.6141 31.2764 6.54365C30.7381 5.53708 29.9575 4.75651 28.9509 4.21819C27.8805 3.64571 26.8396 3.40621 24.515 3.36213L23.6391 3.35446ZM18.5487 10.8069C19.2076 10.2421 20.1997 10.3184 20.7645 10.9773L25.4788 16.4773C25.4827 16.4819 25.4865 16.4865 25.4904 16.491C25.5552 16.5683 25.6126 16.6518 25.6617 16.7406C25.9222 17.2124 25.9222 17.7876 25.6618 18.2591C25.6126 18.3482 25.5552 18.4317 25.4905 18.5089L25.4788 18.5227L20.7645 24.0227C20.1997 24.6816 19.2076 24.7579 18.5487 24.1931C17.8898 23.6283 17.8135 22.6363 18.3783 21.9773L20.8678 19.0714H11.7142C10.8464 19.0714 10.1428 18.3679 10.1428 17.5C10.1428 16.6321 10.8464 15.9286 11.7142 15.9286H20.8678L18.3783 13.0227C17.8569 12.4144 17.8818 11.5223 18.407 10.9445L18.5487 10.8069Z" fill="currentColor" />
//                     </svg>

//                     {/* <img src="/arrow.svg" alt="" /> */}
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }
"use client";


import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./catalog.module.scss";

const products = [
  { id: 1, name: "Колбаса вареная", type: "EXTRA", calories: 235, fatLevel: "низкий", meatType: "свинина" },
  { id: 2, name: "Колбаса докторская", type: "Премиум", calories: 250, fatLevel: "средний", meatType: "говядина" },
  { id: 3, name: "Колбаса молочная", type: "Стандарт", calories: 220, fatLevel: "высокий", meatType: "курица" },
];

export default function CatalogPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState({ field: null, order: null });
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSort, setActiveSort] = useState(null);
  const [isDropdown, setIsDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown)
  }

  const handleSort = (field) => {
    const isAscending = sortOrder.field === field && sortOrder.order === "asc";
    const sorted = [...filteredProducts].sort((a, b) => {
      if (a[field] > b[field]) return isAscending ? -1 : 1;
      if (a[field] < b[field]) return isAscending ? 1 : -1;
      return 0;
    });
    setSortOrder({ field, order: isAscending ? "desc" : "asc" });
    setFilteredProducts(sorted);
    setActiveSort(field);
    setActiveFilter(null);
  };

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setActiveSort(null);
    if (filter === "all") {
      setFilteredProducts(products);
    } else if (filter === "sausages") {
      setFilteredProducts(products.filter((product) => product.type));
    } else if (filter === "meatType") {
      setFilteredProducts(products.filter((product) => product.meatType === "свинина"));
    } else if (filter === "fatLevel") {
      setFilteredProducts(products.filter((product) => product.fatLevel === "низкий"));
    }
  };

  const handleFilterByMeatType = (meatType) => {
    setActiveFilter(meatType);
    setActiveSort(null);
    toggleDropdown()
    if (meatType === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.meatType === meatType)); // Фильтруем по типу мяса
    }
  };

  return (
    <div className="wrapper">
      <div className="wrapper-top">
        <Header />
        <section className={styles.catalog}>
          <div className={`${styles.catalogContainer} container`}>
            <h1 className={styles.catalogTitle}>Наша продукция</h1>

            <div className={styles.catalogHeader}>
              <button
                className={`${styles.catalogHeaderBtn} ${activeFilter === "all" ? styles.active : ""}`}
                onClick={() => handleFilter("all")}
              >
                <h3>Все</h3>
              </button>
              <button
                className={`${styles.catalogHeaderBtn} ${activeFilter === "sausages" ? styles.active : ""}`}
                onClick={() => handleFilter("sausages")}
              >
                <h3>Колбасы</h3>
              </button>
              <div className={styles.dropdown}>
                <button
                  className={`${styles.catalogHeaderBtn} ${activeSort === "meatType" || activeFilter === "meatType" ? styles.active : ""
                    }`}
                  onClick={() => toggleDropdown()}
                >
                  <h3>Тип мяса</h3>
                  <svg
                    className={`${styles.catalogSortIcon} ${isDropdown ? styles.asc : styles.desc
                      }`}
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65081 11.2408C7.23148 10.8813 6.60018 10.9299 6.24076 11.3492C5.88134 11.7686 5.9299 12.3999 6.34923 12.7593L13.3492 18.7593C13.7237 19.0803 14.2763 19.0803 14.6508 18.7593L21.6508 12.7593C22.0701 12.3999 22.1187 11.7686 21.7593 11.3492C21.3999 10.9299 20.7686 10.8813 20.3492 11.2408L14 16.6829L7.65081 11.2408Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <div className={`${styles.dropdownMenu} ${isDropdown ? styles.active : ""}`}>
                  {/* <button className={styles.dropdownMenuItem} onClick={() => handleFilterByMeatType("all")}>Все типы мяса</button> */}
                  <button className={`${styles.dropdownMenuItem} ${activeFilter == "свинина" ? styles.active : ""}`} onClick={() => handleFilterByMeatType("свинина")}>Свинина</button>
                  <button className={`${styles.dropdownMenuItem} ${activeFilter == "говядина" ? styles.active : ""}`} onClick={() => handleFilterByMeatType("говядина")}>Говядина</button>
                  <button className={`${styles.dropdownMenuItem} ${activeFilter == "курица" ? styles.active : ""}`} onClick={() => handleFilterByMeatType("курица")}>Курица</button>
                </div>
              </div>
              <button
                className={`${styles.catalogHeaderBtn} ${activeSort === "fatLevel" || activeFilter === "fatLevel" ? styles.active : ""
                  }`}
                onClick={() => handleSort("fatLevel")}
              >
                <h3>Уровень жирности</h3>
                <svg
                  className={`${styles.catalogSortIcon} ${sortOrder.field === "fatLevel" && sortOrder.order === "asc" ? styles.asc : styles.desc
                    }`}
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.65081 11.2408C7.23148 10.8813 6.60018 10.9299 6.24076 11.3492C5.88134 11.7686 5.9299 12.3999 6.34923 12.7593L13.3492 18.7593C13.7237 19.0803 14.2763 19.0803 14.6508 18.7593L21.6508 12.7593C22.0701 12.3999 22.1187 11.7686 21.7593 11.3492C21.3999 10.9299 20.7686 10.8813 20.3492 11.2408L14 16.6829L7.65081 11.2408Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <ul className={styles.catalogList}>
              {filteredProducts.map((product) => (
                <li key={product.id} className={styles.catalogListItem}>
                  <div className={styles.catalogItemImg}>
                    <img src="/product.png" alt={product.name} />
                    <span className={styles.catalogItemEnergy}>{product.calories} ККАЛ</span>
                  </div>
                  <div className={styles.catalogItemBox}>
                    <h3 className={styles.catalogItemName}>{product.name}</h3>
                    <h4 className={styles.catalogItemType}>{product.type}</h4>
                  </div>
                  <Link href="/product" className={styles.catalogItemBtn}>
                    <span>Подробнее</span>
                    <div>
                      <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.1663 0.214294C27.2434 0.246795 28.8094 0.578398 30.4331 1.44678C31.9874 2.27801 33.2166 3.50721 34.0478 5.06149C34.9162 6.68521 35.2478 8.25118 35.2803 11.3283V23.6663C35.2478 26.7435 34.9162 28.3094 34.0478 29.9332C33.2166 31.4874 31.9874 32.7166 30.4331 33.5479C28.8094 34.4162 27.2434 34.7478 24.1663 34.7803H11.8283C8.75112 34.7478 7.18515 34.4162 5.56142 33.5479C4.00715 32.7166 2.77795 31.4874 1.94672 29.9332C1.07834 28.3094 0.746734 26.7435 0.714233 23.6663V11.3283C0.746734 8.25118 1.07834 6.68521 1.94672 5.06149C2.77795 3.50721 4.00715 2.27801 5.56142 1.44678C7.18515 0.578398 8.75112 0.246795 11.8283 0.214294H24.1663ZM23.6391 3.35446H12.3554L11.4795 3.36213C9.1549 3.40621 8.11404 3.64571 7.04359 4.21819C6.03702 4.75651 5.25645 5.53708 4.71813 6.54365C4.14565 7.6141 3.90615 8.65496 3.86207 10.9796L3.8544 11.8554V23.1392L3.86207 24.0151C3.90615 26.3397 4.14565 27.3805 4.71813 28.451C5.25645 29.4576 6.03702 30.2381 7.04359 30.7764C8.11404 31.3489 9.1549 31.5884 11.4795 31.6325L12.3554 31.6402H23.6391L24.515 31.6325C26.8396 31.5884 27.8805 31.3489 28.9509 30.7764C29.9575 30.2381 30.7381 29.4576 31.2764 28.451C31.8489 27.3805 32.0884 26.3397 32.1324 24.0151L32.1401 23.1392V11.8554L32.1324 10.9796C32.0884 8.65496 31.8489 7.6141 31.2764 6.54365C30.7381 5.53708 29.9575 4.75651 28.9509 4.21819C27.8805 3.64571 26.8396 3.40621 24.515 3.36213L23.6391 3.35446ZM18.5487 10.8069C19.2076 10.2421 20.1997 10.3184 20.7645 10.9773L25.4788 16.4773C25.4827 16.4819 25.4865 16.4865 25.4904 16.491C25.5552 16.5683 25.6126 16.6518 25.6617 16.7406C25.9222 17.2124 25.9222 17.7876 25.6618 18.2591C25.6126 18.3482 25.5552 18.4317 25.4905 18.5089L25.4788 18.5227L20.7645 24.0227C20.1997 24.6816 19.2076 24.7579 18.5487 24.1931C17.8898 23.6283 17.8135 22.6363 18.3783 21.9773L20.8678 19.0714H11.7142C10.8464 19.0714 10.1428 18.3679 10.1428 17.5C10.1428 16.6321 10.8464 15.9286 11.7142 15.9286H20.8678L18.3783 13.0227C17.8569 12.4144 17.8818 11.5223 18.407 10.9445L18.5487 10.8069Z" fill="currentColor" />
                      </svg>

                      {/* <img src="/arrow.svg" alt="" /> */}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
