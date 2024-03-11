import PageTitle from '../../../components/another/PageTitle'
import CustomBlockRender from '../../../components/CustomBlockRender'
import SpecList from '../../../components/quadro/SpecList'
import { Divider } from 'antd'
import getData from '../../../getData';
const url = '/api/kvadroczikly-i-specztehnika?populate[0]=meta&populate[1]=spec&populate[2]=spec.img'

export async function generateMetadata() {
  const { meta } = await getData(url)
  return {
    title: meta.title,
    description: meta.description
  }
}
export default async function CategoryB() {
  let { meta, content, spec } = await getData(url)
  return (
    <div>
      <PageTitle title={meta.title} />
      <CustomBlockRender content={content} />
      <Divider />
      <SpecList list={spec} />
    </div>
  )
}
