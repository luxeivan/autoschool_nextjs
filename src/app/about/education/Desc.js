'use client'
import React from 'react'
import Descriptions from 'antd'

export default function Desc({items}) {
  return (
    <Descriptions title="" bordered size='small' layout={"horizontal"} column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} items={items} />
  )
}
