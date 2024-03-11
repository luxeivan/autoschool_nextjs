'use client'
import React from 'react'
import { List } from 'antd'
import Item from 'antd/es/list/Item'

export default function ListItem({data}) {
    return (
        <List
            size="small"
            dataSource={data && data.phonegroup}
            renderItem={(item) => <Item><a href={`tel:${item.phone}`}>{item.displayPhone}</a></Item>}
        />
    )
}
