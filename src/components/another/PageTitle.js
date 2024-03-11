import Title from 'antd/es/typography/Title'
import React from 'react'

export default function PageTitle({title}) {
  return (    
    <Title level={1} style={{ textAlign: "center", fontSize: "1.5rem" }}>{title}</Title>
  )
}
