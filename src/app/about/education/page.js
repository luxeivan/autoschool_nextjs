// 'use client'
import { Descriptions, List, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import Item from 'antd/es/list/Item'
import React from 'react'
import PageTitle from '../../../components/another/PageTitle'
import conf from '../../../config'
import axios from 'axios'
import File from '../../../components/another/File'
import getData from '../../../getData';
const url = '/api/obrazovanie?populate=*'

export async function generateMetadata() {
  const { meta } = await getData(url)
  return {
    title: meta.title,
    description: meta.description
  }
}
const items = [
  {
    key: '1',
    label: 'Уровень образования',
    children: 'Профессиональное обучение',
  },
  {
    key: '2',
    label: 'Код профессии',
    children: '11442 (кроме категорий «А», «А1», «М» — 11441)',
  },
  {
    key: '3',
    label: 'Как производится обучение',
    children: 'Обучение производится по договорам об оказании платных образовательных услуг за счет средств физических лиц',
  },
  {
    key: '4',
    label: 'Форма обучения',
    children: 'Очная',
  },
  {
    key: '5',
    label: 'Реализуемые уровни образования',
    children: 'Профессиональное обучение',
  },
  {
    key: '6',
    label: 'Язык преподавания',
    children: 'Русский',
  },
  {
    key: '7',
    label: 'Реализуемые программы профессиональной подготовки водителей транспортных средств',
    children: <List>
      <Item>
        Категория «B»
      </Item>
      <Item>
        Категория «A»
      </Item>
      <Item>
        Категория «B(AT)»
      </Item>
    </List>,
  },
  {
    key: '8',
    label: 'Методы обучения',
    children: 'При обучении могут использоваться методы электронного обучения и дистанционных образовательных технологий',
  },
]
const items2 = [
  {
    key: '1',
    label: 'Численность обучающихся по договорам об образовании за счет средств физических лиц',
    children: '646 человек',
  },
  {
    key: '2',
    label: 'Численность обучающихся по договорам об образовании за счет средств юридических лиц',
    children: '0 человек',
  },
  {
    key: '3',
    label: 'Численность обучающихся по договорам об образовании за счет средств бюджетных ассигнований бюджетов федерального уровня, субъектов РФ и местного уровня',
    children: '0 человек',
  },
  {
    key: '4',
    label: 'Численность обучающихся иностранных граждан',
    children: '0 человек',
  },
  {
    key: '5',
    label: 'Численность обучающихся по реализуемым образовательным программам',
    children: <List>
      <Item>
        Подготовка водителей ТС категории «А» — 117 человек
      </Item>
      <Item>
        Подготовка водителей ТС категории «В» — 529 человек
      </Item>
    </List>,
  },
]
const catA = [
  {
    key: '1',
    label: 'Наименование профессии',
    children: 'Водитель ТС категории "А"',
  },
  {
    key: '2',
    label: 'Нормативный срок обучения',
    children: '2 месяца',
  },
  {
    key: '3',
    label: 'Код профессии',
    children: '11453',
  },
]
const catB = [
  {
    key: '1',
    label: 'Наименование профессии',
    children: 'Водитель ТС категории "В"',
  },
  {
    key: '2',
    label: 'Нормативный срок обучения',
    children: '3 месяца',
  },
  {
    key: '3',
    label: 'Код профессии',
    children: '11442',
  },
]
export default async function AboutEducation() {
  // let mobile = false
  // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  //   mobile = true
  // }
  const { meta, docs } = await getData(url)
  return (
    <>


      <div>
        <PageTitle title={meta.title} />
        <Descriptions title="" bordered size='small' layout={ "horizontal"} column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} items={items} />

        <Title level={4} className='info-title'>Уровень образования</Title>
        <List>
          <Item>
            Профессиональная подготовка
          </Item>
        </List>
        <Title level={4} className='info-title'>Форма обучения</Title>
        <List>
          <Item>
            Очная
          </Item>
          <Item>
            Дистанционная
          </Item>
        </List>
        <Title level={4} className='info-title'>Язык образования</Title>
        <List>
          <Item>
            Русский
          </Item>
        </List>
        <Descriptions title="" bordered size='small' layout={ "horizontal"} column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} items={items2} />
        <Title level={4} className='info-title'>Реализуемые образовательные программы профессиональной подготовки и переподготовки</Title>
        <Title level={5} className='info-title'>Водителей ТС категории «А»</Title>
        <Descriptions title="" bordered size='small' layout={"horizontal"} column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} items={catA} />

        <Title level={5} className='info-title'>Водителей ТС категории «В»</Title>
        <Descriptions title="" bordered size='small' layout={ "horizontal"} column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} items={catB} />
        <Title level={4} className='info-title'>Документы</Title>
        <List>

           {docs && docs.data.map((file, index) => (
            <File key={index} name={file.attributes.name} url={file.attributes.url} type={file.attributes.ext} size={file.attributes.size} />
          ))} 
        </List>
      </div>
    </>
  )
}
