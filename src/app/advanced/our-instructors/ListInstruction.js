'use client'
import React from 'react'
import { Flex, Image, List, Typography } from 'antd'
import styles from './OurInstructors.module.css'
import conf from '../../../config'

export default function ListInstruction({instructors}) {
  return (
    <List
          bordered
          dataSource={instructors}
          renderItem={(item) => (
            <List.Item>
              <Flex gap={20} wrap='wrap'>
                <div className={styles.containerImage}>
                  {(item.img.data && item.img.data.attributes &&
                    <Image width={"100%"} src={`${conf.serverUrl}${item.img.data.attributes.url}`} />) || <Image src={`https://www.newsauto.gr/wp-content/uploads/2018/01/The-Stig-768x512.jpg`} />
                  }
                </div>
                <div>
                  <Typography.Title level={4}>{item.fio}</Typography.Title>
                  <Typography.Paragraph><b>Автомобиль:</b> {item.auto}</Typography.Paragraph>
                  <Typography.Paragraph><b>КПП:</b> {item.typeKpp}</Typography.Paragraph>
                  <Typography.Paragraph><b>Гос. номер:</b> {item.numberAuto}</Typography.Paragraph>
                  <Typography.Paragraph><Typography.Link href={`tel:${item.phone}`}>{item.displayPhone}</Typography.Link></Typography.Paragraph>
                </div>
              </Flex>
            </List.Item>
          )}
        />
  )
}
