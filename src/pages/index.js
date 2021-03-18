import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Layout, Row, Space, Typography } from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'gatsby'
import * as React from 'react'
import profile from '../images/photo.jpg'

function IndexPage() {
  const { Header, Footer, Content } = Layout
  const { Text } = Typography

  return (
    <main>
      <link rel="icon" href="/favicon.ico" />
      <title>Kullanan Thanachotanan Site</title>

      <Layout className="h-screen">
        <Header>
          <Button type="text" className="text-white">
            <Link to="/">Home</Link>
          </Button>
          <Button type="text" className="text-white">
            <Link to="/about-me">About me</Link>
          </Button>
        </Header>
        <Content className="p-8">
          <Row className="w-full items-center justify-center">
            <Space direction="vertical" className="flex items-center justify-center">
              <Col>
                <Avatar src={profile} alt="profile" size={200} />
              </Col>
              <Col>
                <Text className="font-bold">Kullanan Thanachotanan</Text>
              </Col>
              <Text>Software Engineer</Text>
            </Space>
          </Row>
        </Content>
        <Footer className="w-full flex items-center justify-center">
          <Row className="w-full">
            <Col span={24}>
              <Row className="flex items-end justify-end">
                <Link
                  href="https://www.linkedin.com/in/kullanan-thanachotanan-7976b9206/"
                  className="mr-2"
                >
                  <LinkedinOutlined className="text-xl" />
                </Link>

                <Link href="https://github.com/kullthana">
                  <GithubOutlined className="text-xl" />
                </Link>
              </Row>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </main>
  )
}

export default IndexPage
