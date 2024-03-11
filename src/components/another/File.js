import React from 'react'
import {  Avatar } from 'antd';
import { Meta } from 'antd/es/list/Item';
import Item from 'antd/es/list/Item';
import conf from '../../config'
import pdf from '../../img/pdf.svg'
import jpg from '../../img/jpg.svg'
import docx from '../../img/docx.svg'
import xlsx from '../../img/xlsx.svg'
import anotherIco from '../../img/anotherIco.svg'

export default function File({ name, url, type, size }) {
    let ico = anotherIco
    if (type === '.jpg' || type === '.jpeg') ico = jpg
    if (type === '.docx' || type === '.doc') ico = docx
    if (type === '.xlsx' || type === '.xls') ico = xlsx
    if (type === '.pdf') ico = pdf
    // console.log(ico)
    return (
        <Item>
            <Meta
                avatar={<Avatar size={48} src={ico.src} />}
                title={<a href={conf.serverUrl + url} target='_blank'>{name}</a>}
                description={size > 1000 ? `${(size / 1000).toFixed(1)} MB` : `${(size).toFixed()} KB`}
            />
        </Item>
    )
}
