'use client'
import React from 'react'
import { List, Typography,Image } from 'antd'
import Link from 'next/link'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Item from 'antd/es/list/Item'


export default function CustomBlockRender({ content }) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        list: (tratata) => {
          const newArr = tratata.children.map(item => item.props?.content?.children[0].text)
          //console.log(tratata.children.map(item=>item.props.content.children[0].text))
          return <List>{newArr.map((item, index) => <Item key={index}>{item}</Item>)}</List>
        },
        // You can use the default components to set class names...
        paragraph: ({ children }) => <Typography.Paragraph>{children}</Typography.Paragraph>,
        // ...or point to a design system
        heading: ({ children, level }) => <Typography.Title className='info-title' level={level}>{children}</Typography.Title>,
        // For links, you may want to use the component from your router or framework
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
        image: ({ image }) => {
          console.log(image)
          return <Image preview={false} src={image.url} />
        }
      }}
      modifiers={{

        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  )
}
