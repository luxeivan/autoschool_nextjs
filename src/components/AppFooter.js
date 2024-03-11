import React from 'react'
import { Layout, Menu, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';

export default function AppFooter() {
  return (
    <Footer
    style={{
      textAlign: 'center',
    }}
  >
    Автошкола «МалинАвто» ©{new Date().getFullYear()}
  </Footer>
  )
}
