import PageTitle from '../../../components/another/PageTitle'
import { Divider } from 'antd';
import ListGosuslugi from './ListGosuslugi';
import getData from '../../../getData';
const url = '/api/gosuslugi-i-kvitanczii?populate[0]=gosuslugi&populate[1]=kvitancii&populate[2]=meta'

export async function generateMetadata() {
  const { meta } = await getData(url)
  return {
    title: meta.title,
    description: meta.description
  }
}
export default async function CategoryB() {
  let {meta,gosuslugi, kvitancii} = await getData(url)
 
  return (
    <div>
        <PageTitle title={meta.title} />
        <Divider orientation="left">Госуслуги</Divider>
        {gosuslugi &&
          <ListGosuslugi data={gosuslugi.data}/>          
        }
        <Divider orientation="left">Квитанции</Divider>
        {kvitancii &&
        <ListGosuslugi data={kvitancii.data}/>
        
        }
      </div >
  )
}
