
import React from 'react'
import { Collapse, Descriptions, Divider, } from 'antd';
import PageTitle from '../../../components/another/PageTitle';
import Title from 'antd/es/typography/Title';
import getData from '../../../getData';
const url = '/api/personal?populate=*'

export async function generateMetadata() {
  const { meta } = await getData(url)
  return {
    title: meta.title,
    description: meta.description
  }
}

export default async function Staff() {
  const { meta, administration, teacher } = await getData(url)
  return (
    <>
      <PageTitle title={meta.title} />
      <Divider orientation="left"><strong>Руководство</strong></Divider>

      <Collapse accordion items={
        administration.map(item => ({
          key: item.id,
          label: <div>
            <Title level={5} style={{ marginBottom: 0 }}>{item.post}: </Title>
            <Title level={5} style={{ marginTop: 0, color: "#555", fontWeight: 400 }}>{item.fio}</Title>
          </div>,
          children: <Descriptions
            key={item.id}
            style={{ marginBottom: "20px" }}
            bordered
            size='small'
            layout={"horizontal"}
            column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
            contentStyle={{ marginBottom: "5px" }}
            items={[
              {
                key: '1',
                label: 'Должность',
                children: item.post,
              },
              {
                key: '2',
                label: 'Телефон',
                children: item.phone,
              },
              {
                key: '3',
                label: 'email',
                children: item.email,
              },
            ]} />,
        }))
      } />

      <Divider orientation="left"><strong>Педагогический состав</strong></Divider>
      <Collapse accordion items={
        teacher.map(item => ({
          key: item.id,
          label: <div>
            <Title level={5} style={{ marginBottom: 0 }}>{item.post}: </Title>
            <Title level={5} style={{ marginTop: 0, color: "#555", fontWeight: 400 }}>{item.fio}</Title>
          </div>,
          children: <Descriptions
            key={item.id}
            style={{ marginBottom: "20px" }}

            bordered
            size='small'
            layout={"horizontal"}
            column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
            contentStyle={{ marginBottom: "5px" }}
            items={[
              {
                key: '1',
                label: 'Должность',
                children: item.post ? item.post : '-',
              },
              {
                key: '2',
                label: 'Учебный предмет',
                children: item.subject ? item.subject : '-',
              },
              {
                key: '3',
                label: 'Образование',
                children: item.education ? item.education : '-',
              },
              {
                key: '4',
                label: 'Удостоверение о повышении квалификации (не реже чем один раз в три года)',
                children: item.certificate ? item.certificate : '-',
              },
              {
                key: '5',
                label: 'Стаж работы по специальности',
                children: item.experience ? item.experience : '-',
              },
              {
                key: '6',
                label: 'Форма трудового соглашения',
                children: item.employment ? item.employment : '-',
              },

            ]} />
        }))
      } />
    </>
  )

}