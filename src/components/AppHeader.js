import React from 'react'
import Typography from 'antd/es/typography/Typography';
import Text from 'antd/es/typography/Text';
import { Header } from 'antd/es/layout/layout';
import Layout from 'antd/es/layout/layout';
import IconMenu from './menu/IconMenu';
import logo from '../img/logo.svg'
import vk from '../img/vk.svg'
import css from './AppHeader.css'
import axios from 'axios';
import conf from '../config';
import ButtonBlock from './HeaderComponents/ButtonBlock';
import Link from 'next/link';
import Image from 'next/image';

const items = [
    {
        key: 1,
        label: <IconMenu url='/services' name='Услуги' iconName='density_small' />,
    },
    {
        key: 2,
        label: <IconMenu url='/advanced' name='Прочее' iconName='keyboard_command_key' />,
    },
    {
        key: 3,
        label: <IconMenu url='/about' name='О нас' iconName='info' />,
    },
    {
        key: 4,
        label: <IconMenu url='/contacts' name='Контакты' iconName='contacts' />,
    },
]
export default async function AppHeader() {

    const res = await axios.get(`${conf.serverUrl}/api/header`)
    const data = res.data.data.attributes
    // useEffect(() => {
    //     axios.get(`${conf.serverUrl}/api/header`)
    //         .then(res => {
    //             //console.log(res.data.data.attributes)
    //             setData(res.data.data.attributes)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [])
    // ------------------------------------------
    
    // ------------------------------------------
    
    return (
        <>
            <div className='topheader'>
                
                <Link href='/'>
                    <Image src={logo} width={200} />
                </Link>
                <div className='topheader__contactarea'>
                    <Text level={4}>
                        <a href={`tel:+${data.phone1}`} className='phoneblock'>
                            <span className="material-symbols-outlined phoneblock__icon">phone</span>
                            <span className='phoneblock__text'>{data.displayPhone1}</span>
                        </a>
                    </Text>
                    <Text level={4}>
                        <a href={`tel:+${data.phone2}`} className='phoneblock'>
                            <span className="material-symbols-outlined phoneblock__icon">phone</span>
                            <span className='phoneblock__text'>{data.displayPhone2}</span>
                        </a>
                    </Text>
                </div>
                <ButtonBlock data={data} />

            </div>
            <Header className='bottomheader'>
                <ul className='bottomheader__menu'>
                    {items.map((item, index) => <span key={index}>{item.label}</span>)}
                </ul>
            </Header>
            
        </>
    )
}
