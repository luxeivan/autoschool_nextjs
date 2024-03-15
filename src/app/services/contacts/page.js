import axios from 'axios'
import React from 'react'
import conf from '../../../config'
import PageTitle from '../../../components/another/PageTitle'
import { Descriptions } from 'antd';
import ListItem from './ListItem';
import YandexMapArea from './YandexMapArea';
import getData from '../../../getData';
const url = '/api/kontakty?populate[0]=meta&populate[1]=phonegroup'

export async function generateMetadata() {
  const { meta } = await getData(url)
  return {
    title: meta.title,
    description: meta.description
  }
}
export default async function Contacts() {
  let data = await getData(url)
  const { meta } = data
  try {
    const res = await axios.get(`${conf.serverUrl}/api/kontakty?populate[0]=meta&populate[1]=phonegroup`)
    data = res.data.data.attributes
    metadata = res.data.data.attributes.meta
  } catch (error) {
    console.log(error)
  }

  return (
    <div>
      <PageTitle title={meta.title} />

      <Descriptions
        style={{ marginBottom: "20px" }}

        bordered
        size='small'
        column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
        contentStyle={{ marginBottom: "5px" }}
        items={[
          {
            key: '1',
            label: 'Адрес',
            children: data && data.address,
          },
          {
            key: '2',
            label: 'Телефон',
            children: <ListItem data={data} />,
          },
          {
            key: '3',
            label: 'Часы работы',
            children: data && data.workTime,
          },
          {
            key: '4',
            label: 'Email',
            children: data && <a href={`mailto:${data.email}`}>{data.email}</a>,
          },
        ]}
      />
      <YandexMapArea data={data} />
    </div>
  )
}
