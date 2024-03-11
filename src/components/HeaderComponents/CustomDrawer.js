'use client'
import React from 'react'
import { Image, Layout, Menu, theme, Button, Typography, Drawer, Modal, Input, Form, Checkbox } from 'antd';

const { Text } = Typography;

export default function CustomDrawer({data}) {
    return (
        <Drawer title="Наши контакты" onClose={onClose} open={open}>
            <Text level={4}>
                <a href={`tel:+${data.phone1}`} className='phoneblockmobile'>
                    <span className="material-symbols-outlined phoneblockmobile__icon">phone</span>
                    <span className='phoneblockmobile__text'>{data.displayPhone2}</span>
                </a>
            </Text>
            <Text level={4}>
                <a href={`tel:+${data.phone2}`} className='phoneblockmobile'>
                    <span className="material-symbols-outlined phoneblockmobile__icon">phone</span>
                    <span className='phoneblockmobile__text'>{data.displayPhone2}</span>
                </a>
            </Text>
            <Text level={4}>
                <a href={`mailto:${data.email}`} className='phoneblockmobile'>
                    <span className="material-symbols-outlined phoneblockmobile__icon">email</span>
                    <span className='phoneblockmobile__text'>{data.email}</span>
                </a>
            </Text>
            <Text level={4}>
                <a href={`https://vk.com/${data.vk}`} className='phoneblockmobile' target='_blank'>
                    <svg className='phoneblockmobile__icon' width="24px" height="24px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs>

                    </defs><path className="cls-1" d="M1.5,7.25c0,2.86,2.86,10.5,10.5,10.5h1.91V14.89h1a6.34,6.34,0,0,1,2.85,2.85H22.5V16.8c-1-1.5-2.55-2.55-3.82-3.82h0a9.79,9.79,0,0,0,2.57-4.53l.3-1.2H17.73l-.1.3A11.3,11.3,0,0,1,14.86,12h-.95V7.25H9.14V8.2l.95,1V13A6,6,0,0,1,6.27,7.25Z" />
                    </svg>
                    <span className='phoneblockmobile__text'>{data.vk}</span>
                </a>
            </Text>
            <Text level={4}>
                <Button type="primary" onClick={showModal} >Записаться</Button>
            </Text>
        </Drawer>
    )
}