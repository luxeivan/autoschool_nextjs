import PageTitle from '../../../components/another/PageTitle'
import CustomBlockRender from '../../../components/CustomBlockRender'
import getData from '../../../getData';
const url = '/api/obuchenie-i-attestacziya-masterov?populate=meta'

export async function generateMetadata() {
  const { meta } = await getData(url)
  return {
    title: meta.title,
    description: meta.description
  }
}
export default async function CategoryB() {
  let { meta, content } = await getData(url)
  return (
    <div>
      <PageTitle title={meta.title} />
      <CustomBlockRender content={content} />
    </div>
  )
}
