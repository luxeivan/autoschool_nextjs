import { Card } from "antd";
import React from "react";
import Link from "next/link";
import css from "./Services.css";
import categoryB from "../../img/categoryB.jpg";
import categoryBAT from "../../img/categoryBAT.jpg";
import categoryA from "../../img/categoryA.jpg";
import medcom from "../../img/medcom.jpg";
import qvadro from "../../img/qvadro.jpg";
import board from "../../img/board.jpg";
import education from "../../img/education.jpg";
export const metadata = {
  title: 'Наши услуги',
  description: 'Услуги автошколы «МалинАвто»',
}
const cards = [
  {
    id: 1,
    name: "Обучение на категорию «В»",
    url: "/services/category-b",
    description: "Обучение на категорию «В»",
    image: categoryB,
  },
  {
    id: 2,
    name: "Обучение на категорию «В(АТ)»",
    url: "/services/category-b-at",
    description: "Обучение на категорию «В(АТ)»",
    image: categoryBAT,
  },
  {
    id: 3,
    name: "Обучение на категорию «А»",
    url: "/services/category-a",
    description: "Обучение на категорию «А»",
    image: categoryA,
  },
  {
    id: 4,
    name: "Медицинская комиссия",
    url: "/services/medical",
    description: "Медицинская комиссия",
    image: medcom,
  },
  {
    id: 5,
    name: "Квадроциклы и спецтехника",
    url: "/services/quadro",
    description: "Квадроциклы и спецтехника",
    image: qvadro,
  },
  {
    id: 6,
    name: "Судовождение",
    url: "/services/board",
    description: "Судовождение",
    image: board,
  },
  {
    id: 7,
    name: "Обучение и аттестация мастеров",
    url: "/services/education",
    description: "Обучение и аттестация мастеров производственного обучения вождению",
    image: education,
  },
];
console.log(categoryB)
export default function Services() {
  return (
    <div className="services">      
      {cards.map((item) => (
        <Link className="services__item" href={item.url} key={item.id}>
          <Card
            className="services__card"
            title={item.name}
            bordered={false}
            bodyStyle={{ minHeight: "250px", backgroundImage: `url(${item.image.src})`, backgroundBlendMode: "multiply", backgroundPosition: "bottom right", backgroundSize: "400px", backgroundRepeat: "no-repeat" }}
          >
            {/* <p>{item.description}</p> */}
          </Card>
        </Link>
      ))}
    </div>
  );
}
