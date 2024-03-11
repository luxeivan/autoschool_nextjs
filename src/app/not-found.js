'use client'
import { Button, Result } from 'antd'
import React from 'react'
import Link from 'next/link'

export default function Page404() {
  
  const handlerBack = () => {
    console.log()
  }
  return (

    <Result
      status="404"
      title="404"
      subTitle="Такой страницы не существует"
      extra={<Link href={'/'}><Button type="primary">На главную</Button></Link>}
    />

  )
}
