

import styles from "./product.module.scss";

import { useParams } from 'react-router-dom';
import ProductDetails from "@/components/ProductDetails/ProductDetails";


const products = [

  {
    id: 1,
    name: "Докторская любимая",
    img: "/pokiza/1.png",
    type: "1-NAV",
    calories: 219.1,
    fat: 19.5,
    proteins: 10.4,
     
    meatType: "курица"
  },
  {
    id: 2,
    name: "Докторская ароматная",
    img: "/pokiza/2.png",
    type: "1-NAV",
    calories: 219.1,
    fat: 19.5,
    proteins: 10.4,
      
    meatType: "курица"
  },
  {
    id: 3,
    name: "Для завтрака",
    img: "/pokiza/3.png",
    type: "1-NAV",
    calories: 219.1,
    fat: 21.2,
    proteins: 10.4,
      
    meatType: "курица"
  },
  {
    id: 4,
    name: "Extra",
    img: "/pokiza/4.png",
    type: "1-NAV",
    calories: 219.1,
    fat: 19.5,
    proteins: 10.4,
      
    meatType: "курица"
  },
  {
    id: 5,
    name: "Ветчина",
    img: "/pokiza/5.png",
    type: "1-NAV",
    calories: 219.1,
    fat: 19.5,
    proteins: 10.4,
      
    meatType: "курица и говядина"
  },
  {
    id: 6,
    name: "Молочная",
    img: "/pokiza/6.png",
    type: "1-NAV",
    calories: 219.1,
    fat: 19.5,
    proteins: 10.4,
      
    meatType: "курица и говядина"
  },
  {
    id: 7,
    name: "Special One",
    img: "/pokiza/7.png",
    type: "1-NAV",
    calories: 219.1,
    fat: 19.5,
    proteins: 10.4,
      
    meatType: "курица и говядина"
  },
  {
    id: 8,
    name: "Покиза КС",
    img: "/pokiza/8.png",
    type: "1-NAV",
    calories: 219.1,
    fat: 21.2,
    proteins: 10.4,
      
    meatType: "курица и говядина"
  },
  {
    id: 9,
    name: "Батон",
    img: "/pokiza/9.png",
    type: "1-NAV",
    calories: 215.8,
    fat: 17.0,
    proteins: 15.2,
      
    meatType: "курица и говядина"
  },
  {
    id: 10,
    name: "Краковская",
    img: "/pokiza/10.png",
    type: "1-NAV",
    calories: 215.8,
    fat: 17.0,
    proteins: 15.2,
      
    meatType: "курица и говядина"
  },
  {
    id: 11,
    name: "Сервелат",
    img: "/pokiza/11.png",
    type: "1-NAV",
    calories: 219.1,
    fat: 21.2,
    proteins: 10.4,
      
    meatType: "курица и говядина"
  },
  {
    id: 12,
    name: "Палоска",
    img: "/pokiza/12.png",
    type: "1-NAV",
    calories: 186.8,
    fat: 16.0,
    proteins: 10.7,
      
    meatType: "курица и говядина"
  },
  {
    id: 13,
    name: "Говяжье",
    img: "/pokiza/13.png",
    type: "1-NAV",
    calories: 186.8,
    fat: 16.0,
    proteins: 10.7,
      
    meatType: "курица и говядина"
  },
  // {
  //   id: 14,
  //   name: "Молочный gaz/kg",
  //   img: "/pokiza/14.png",
  //   type: "1-NAV",
  //   calories: 186.8,
  //   fat: 16.0,
  //   proteins: 10.7,
  //     
  //   meatType: "курица и говядина"
  // },
  {
    id: 15,
    name: "Kids gaz",
    img: "/pokiza/14.png",
    type: "1-NAV",
    calories: 186.8,
    fat: 16.0,
    proteins: 10.7,
      
    meatType: "курица"
  },
];

export default async function ProductPage({ params }) {
  const { id } = await params;

  return <ProductDetails id={id} />;
}
