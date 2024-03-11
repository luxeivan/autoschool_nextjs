import { Flex, Image, Space,  } from 'antd';
import Typography from 'antd/es/typography/Typography';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import React from 'react'
import gibdd from '../../src/img/main/gibdd.png'
import gibdd_back from '../../src/img/main/gibdd_back.png'
import cert from '../../src/img/main/cert.png'
import cert_back from '../../src/img/main/cert_back.jpg'
import quadro from '../../src/img/main/quadro.png'
import quadro_back from '../../src/img/main/quadro_back.jpg'
import map from '../../src/img/main/map.png'
import map_back from '../../src/img/main/map_back.jpg'
import comp from '../../src/img/main/comp.png'
import comp_back from '../../src/img/main/comp_back.jpg'
import sale from '../../src/img/main/sale.png'
import sale_back from '../../src/img/main/sale_back.png'
import styles from './page.module.css'

export const metadata = {
  title: 'Автошкола МалинАвто',
  description: 'Автошкола «МалинАвто»',
}

const banners = [
  {
    name: "Бесплатное сопровождение в ГИБДД",
    description: "Бесплатная регистрация в ГИБДД и бесплатное сопровождение в ГИБДД на экзамен! Мы думаем и заботимся о наших учениках!",
    img: gibdd,
    backgroundImg: gibdd_back,
    backgroundColor: ""
  },
  {
    name: "Подарочный сертификат на обучение",
    description: "Теперь Вы можете приобрести подарочный сертификат на обучение в автошколе МалинАвто. Подарите обучение своим родственникам, друзьям и знакомым.",
    img: cert,
    backgroundImg: cert_back,
    backgroundColor: ""
  },
  {
    name: "Обучение на квадроцикле и спецтехнике",
    description: "МалинАвто проводит обучение по управлению квадроциклами и снегоходами, а также обучение на тракториста. Выездная медкомиссия. Бесплатное сопровождение в ГИБДД",
    img: quadro,
    backgroundImg: quadro_back,
    backgroundColor: ""
  },
  {
    name: "Близкое и удобное расположение",
    description: "Мы находимся всего в 3 минутах ходьбы от станции Крюково",
    img: map,
    backgroundImg: map_back,
    backgroundColor: ""
  },
  {
    name: "Уникальный компьютерный класс для тестирования",
    description: "Вам не нужно стоять в очереди, чтобы пройти тестирование",
    img: comp,
    backgroundImg: comp_back,
    backgroundColor: ""
  },
  {
    name: "Мы предлагаем скидки",
    description: "Школьникам; Студентам; Гражданам из многодетных семей; Участникам боевых действий; Участникам акции «Приведи друга и получи скидку»;",
    img: sale,
    backgroundImg: sale_back,
    backgroundColor: ""
  },
]

export default function Main() {
  return (
    <div className={styles.main}>
      <Flex vertical>
        {banners.map((item, index) =>
          <Flex wrap='wrap' key={index} align="center" justify="space-around" gap="large" style={{padding:"40px 20px", backgroundColor: item.backgroundColor, backgroundImage:`url(${item.backgroundImg.src})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <Flex vertical className={styles.cardElement}>

              <Title level={2}>{item.name}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Flex>
            <Flex justify='center'className={styles.cardElement} style={{order: index % 2 !== 0 ? -1 : 1 }} >
              <Image width={"100%"} src={item.img.src} preview={false} />
            </Flex>
          </Flex>
        )}
      </Flex>
    </div>
  )
}
