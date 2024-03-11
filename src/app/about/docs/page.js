import PageTitle from '../../../components/another/PageTitle'
import { Collapse } from 'antd';
import ListDocs from './ListDocs';
import getData from '../../../getData';
const url = '/api/doc?populate[0]=docs&populate[1]=docs.file&populate[2]=meta'

export async function generateMetadata() {
  const { meta } = await getData(url)
  return {
    title: meta.title,
    description: meta.description
  }
}
export default async function CategoryB() {
  let { meta, docs } = await getData(url)
  return (
    <div>
      <PageTitle title={meta.title} />
      <Collapse accordion items={docs.map((group, index) => (
        {
          key: index,
          label: group.name,
          children: <ListDocs data={group.file.data} />,
        }
      )
      )} />

    </div >
  )
}
