'use client'
import React from 'react'
import File from '../../../components/another/File';
import { List} from 'antd';

export default function ListGosuslugi({data}) {
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(file, index) => (
                <File key={index} name={file.attributes.name} url={file.attributes.url} type={file.attributes.ext} size={file.attributes.size} />
            )}
        />
    )
}
