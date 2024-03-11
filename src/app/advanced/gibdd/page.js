import PageTitle from '../../../components/another/PageTitle'
import conf from '../../../config'
import CustomBlockRender from '../../../components/CustomBlockRender'
import { Flex, Image } from 'antd'
import getData from '../../../getData';
const url = '/api/akkreditacziya-v-gibdd?populate[0]=meta&populate[1]=img'

export async function generateMetadata() {
  const { meta } = await getData(url)
  return {
    title: meta.title,
    description: meta.description
  }
}
export default async function CategoryB() {
  let {meta,content,img} = await getData(url)
  console.log(await getData(url))
  return (
    <div>
      <PageTitle title={meta.title} />
      {content &&
        <Flex gap={20} wrap="wrap" justify='center' align='center'>
          <Image width={200} src={`${conf.serverUrl}${img.data.attributes.url}`} />
          <div style={{ maxWidth: "800px" }}>
            <CustomBlockRender content={content} />
          </div>
        </Flex>
      }
    </div>
  )
}
