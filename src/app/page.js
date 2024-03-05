import { Button, ConfigProvider } from 'antd';

const Home = () => (
  <div>

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

      <Button type="primary">Button</Button>
    </ConfigProvider>
  </div>
);

export default Home;