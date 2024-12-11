"use client";


import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "../catalog.module.scss";

const products = [
  {
    id: 25,
    name: "Докторская особая",
    img: "/burxanov/50.png",
    type: "1-NAV",
    calories: 235.5,
    fat: 21.2,
    proteins: 10.7,
    meatType: "курица"
  },
  {
    id: 26,
    name: "Докторская",
    img: "/burxanov/49.png",
    type: "1-NAV",
    calories: 235.5,
    fat: 21.2,
    proteins: 10.5,
    meatType: "курица"
  },
  {
    id: 27,
    name: "Докторская домик",
    img: "/burxanov/48.png",
    type: "1-NAV",
    calories: 235.5,
    fat: 21.2,
    proteins: 10.5,
    meatType: "курица"
  },
  {
    id: 28,
    name: "Докторская особая Д",
    img: "/burxanov/47.png",
    type: "1-NAV",
    calories: 235.5,
    fat: 21.2,
    proteins: 10.5,
    meatType: "курица"
  },
  {
    id: 29,
    name: "Колбаса варёная дорожная",
    img: "/burxanov/46.png",
    type: "1-NAV",
    calories: 235.5,
    fat: 21.2,
    proteins: 10.5,
    meatType: "курица"
  },
  {
    id: 30,
    name: "Детская",
    img: "/burxanov/45.png",
    type: "1-NAV",
    calories: 219.1,
    fat: 16.4,
    proteins: 10.4,
    meatType: "курица"
  },
]

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
      return isAscending ? b[field] - a[field] : a[field] - b[field];
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
                  <button className={`${styles.dropdownMenuItem} ${activeFilter == "курица и говядина" ? styles.active : ""}`} onClick={() => handleFilterByMeatType("курица и говядина")}>Говядина</button>
                  <button className={`${styles.dropdownMenuItem} ${activeFilter == "курица" ? styles.active : ""}`} onClick={() => handleFilterByMeatType("курица")}>Курица</button>
                </div>
              </div>
              <button
                className={`${styles.catalogHeaderBtn} ${activeSort === "fatLevel" || activeFilter === "fatLevel" ? styles.active : ""
                  }`}
                onClick={() => handleSort("calories")}
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
                    <img src={product.img} alt={product.name} />
                    <span className={styles.catalogItemEnergy}>{product.calories} ККАЛ</span>
                  </div>
                  <div className={styles.catalogItemBox}>
                    <h3 className={styles.catalogItemName}>{product.name}</h3>
                    <h4 className={styles.catalogItemType}>{product.type}</h4>
                  </div>
                  <Link href={`/product/${product.id}`} className={styles.catalogItemBtn}>
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
