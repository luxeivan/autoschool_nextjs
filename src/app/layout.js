import { Inter } from "next/font/google";
import { ConfigProvider, Flex } from 'antd';
import { getUrl } from 'nextjs-current-url/server';
import { Content } from "antd/es/layout/layout";

// import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";
import 'material-symbols';
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import AppHeader from "@/components/AppHeader";
import Head from 'next/head'
import Container from "@/components/Container";
import AppFooter from "@/components/AppFooter";
// import fontGoogle from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "МалинАвто",
  description: "Автошкола МалинАвто",
};
// export async function getServerSideProps({ req, query, resolvedUrl }) {
//   console.log(req, query, resolvedUrl)
//   return { props: {} }
// }

export default function RootLayout({ children }) {
  // const { href: currentUrl, pathname } = useUrl() ?? {};
  // console.log(props)
  return (
    <html lang="ru">

      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              components: {
                Layout: {
                  /* here is your component tokens */
                  headerBg: "#38385C",
                },
                Descriptions: {
                  /* here is your component tokens */
                  titleMarginBottom: 5
                },
              },
              token: {
                // Seed Token
                colorPrimary: '#38385C',
                // borderRadius: 2,

                // Alias Token
                // colorBgContainer: '#A4A4FF',
              },
            }}
          >
            <Flex vertical justify={'space-between'} style={{ minHeight: "100vh" }}>

              <AppHeader />
              <Content >

                {children}
              </Content>


              <AppFooter />
            </Flex>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
