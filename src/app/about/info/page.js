import PageTitle from '../../../components/another/PageTitle'
import axios from 'axios'
import conf from '../../../config'
import { Collapse } from 'antd';
import MainAbout from '../../../components/MainAbout';
import Structure from '../../../components/Structure';
import getData from '../../../getData';
const url = '/api/informacziya?populate[0]=meta'

const arrinfo = [
  {
    title: 'Основные сведения',
    content: <MainAbout />
  },
  {
    title: 'Международное сотрудничество',
    content: <p>У образовательной организации отсутствуют договоры с иностранными и международными организациями по вопросам образования и науки. Образовательные программы имеющие международную аккредитацию отсутствуют.</p>
  },
  {
    title: 'Доступная среда',
    content: <p>Образовательная организация расположена по адресу г. Зеленоград, ул. Панфилова, д. 28Б на 2 этаже. При входе в здание имеются дверные проемы, оборудованные автоматическими дверями соответствующими всем требованиям. Для подъема на 2 этаж имеется лифт.</p>
  },
  {
    title: 'Структура и органы управления образовательной организацией',
    content: <Structure />
  },
  {
    title: 'Доступ к информационным системам',
    content: <p>Обеспечен доступ к информационным системам, информационно-телекоммуникационным сетям и электронным образовательным ресурсам.</p>
  },
  {
    title: 'Стипендии и иные виды материальной поддержки',
    content: <p>Стипендии и другие виды материальной поддержки не предусмотрены.</p>
  },
  {
    title: 'Вакантные места для приема (перевода)',
    content: <p>Вакантных мест для приема (перевода) нет.</p>
  },

]

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
      <p>
        АНО ДПО Автошкола «МалинАвто» -  современный специализированный центр в г. Зеленограде, где любой начинающий водитель может рассчитывать на индивидуальный подход и качественное индивидуальное решение!
      </p>
      <p>
        Одно из самых главных наших отличий и достоинств – коллектив преподавателей. Опытные инструкторы со стажем  не менее 20 лет, отлично разбирающиеся в психологии «начинающего водителя», помогут Вам приобрести не только необходимые навыки и знания, а также сделают обучение в автошколе не скучным и познавательным.
      </p>
      <Collapse accordion items={arrinfo.map((info, index) => (
        {
          key: index,
          label: info.title,
          children: info.content,
        }
      )
      )} />
    </div>
  )
}
