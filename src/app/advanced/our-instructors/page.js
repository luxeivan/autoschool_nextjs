import PageTitle from '../../../components/another/PageTitle'
import ListInstruction from './ListInstruction'
import getData from '../../../getData';
const url = '/api/nashi-instruktora?populate[0]=meta&populate[1]=instructors&populate[2]=instructors.img'

export async function generateMetadata() {
  const { meta } = await getData(url)
  return {
    title: meta.title,
    description: meta.description
  }
}
export default async function CategoryB() {
  let {meta,instructors} = await getData(url)
  
  return (
    <div>
      <PageTitle title={meta.title} />
      {instructors &&
       <ListInstruction instructors={instructors}/>
      }
    </div>
  )
}
