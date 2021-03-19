import {
  DatabaseOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  GitlabOutlined,
  GlobalOutlined,
  LinkedinOutlined,
  MailOutlined,
  ReadOutlined,
  SoundOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
import { Avatar, Col, Divider, Layout, Row, Space } from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'gatsby'
import * as React from 'react'
import profile from '../images/photo.jpg'

function IndexPage() {
  const { Footer, Content } = Layout

  return (
    <main>
      <link rel="icon" href="/favicon.ico" />
      <title>Kullanan Thanachotanan Site</title>

      <Layout className="min-h-screen">
        <Content className="p-8 text-third">
          <Row>
            <Col lg={8}>
              <Row className="w-full items-center justify-center">
                <Space direction="vertical">
                  <Avatar src={profile} alt="profile" size={200} />

                  <Divider className="w-full" />

                  <p className="font-bold text-2xl">Contacts</p>
                  <p>
                    <MailOutlined className="text-lg mr-2" />
                    <Link
                      href="mailto:kullananthana@gmail.com"
                      className="text-third hover:text-third hover:underline"
                    >
                      kullananthana@gmail.com
                    </Link>
                  </p>
                  <p>
                    <GithubOutlined className="text-lg mr-2" />
                    <Link
                      href="https://github.com/kullthana"
                      className="text-third hover:text-third hover:underline"
                    >
                      GitHub
                    </Link>
                  </p>
                  <p>
                    <GitlabOutlined className="text-lg mr-2" />
                    <Link
                      href="https://gitlab.com/kull_thana"
                      className="text-third hover:text-third hover:underline"
                    >
                      GitLab
                    </Link>
                  </p>
                  <p>
                    <LinkedinOutlined className="text-lg mr-2" />
                    <Link
                      href="https://www.linkedin.com/in/kullanan-thanachotanan-7976b9206/"
                      className="text-third hover:text-third hover:underline"
                    >
                      LinkedIn
                    </Link>
                  </p>
                  <p>
                    <EnvironmentOutlined className="text-lg mr-2" />
                    Chiang Mai, Thailand
                  </p>

                  <Divider className="w-full" />

                  <p className="font-bold text-2xl">Hobbies</p>
                  <p>
                    <ReadOutlined className="text-lg mr-2" />
                    Reading novel
                  </p>
                  <p>
                    <TrophyOutlined className="text-lg mr-2" />
                    Playing games
                  </p>
                  <p>
                    <SoundOutlined className="text-lg mr-2" />
                    Listening Japanese music
                  </p>
                  <p>
                    <DatabaseOutlined className="text-lg mr-2" />
                    Book collecting
                  </p>
                  <p>
                    <GlobalOutlined className="text-lg mr-2" />
                    Learning languages
                  </p>

                  <Divider className="w-full" />

                  <p className="font-bold text-2xl">Languages</p>
                  <p>Thai</p>
                  <p>English</p>
                  <p>Japanese</p>
                </Space>
              </Row>
            </Col>
            <Col lg={16}>
              <Row className="w-full">
                <Space direction="vertical" size={2}>
                  <p className="font-bold text-primary text-4xl">Kullanan Thanachotanan</p>

                  <Divider className="w-full" />

                  <p className="font-bold text-2xl">Education</p>
                  <p className="font-bold text-primary">
                    College of Arts, Media and Technology (CAMT) Chiang Mai University (2017-2021)
                  </p>
                  <p className="font-bold">Bachelor of Science | Software Engineering</p>

                  <Divider className="w-full" />

                  <p className="font-bold text-2xl">Experience</p>
                  <p className="font-bold text-primary">Internship</p>
                  <p className="font-bold">Artisan Digital Asia | August 2020 - March 2021</p>
                  <p className="font-bold">Department: Developer</p>
                  <p className="font-bold text-primary">Boot Camp</p>
                  <p className="font-bold">Digital Ventures | December 2019 - June 2020</p>

                  <Divider className="w-full" />

                  <p className="font-bold text-2xl">Skills</p>
                  <Row>
                    <Col lg={8}>
                      <p className="font-bold text-primary">Front-end</p>
                      <p>
                        JavaScript, TypeScript, React, React Native, Java, HTML5, CSS, Vue.js,
                        Flutter
                      </p>
                    </Col>
                    <Col lg={8}>
                      <p className="font-bold text-primary">Back-end</p>
                      <p>GraphQL, GO, PostgreSQL</p>
                    </Col>
                    <Col lg={8}>
                      <p className="font-bold text-primary">State Management</p>
                      <p>Redux, Easy Peasy, Recoil</p>
                    </Col>
                    <Col lg={8}>
                      <p className="font-bold text-primary">Web Framework</p>
                      <p>Next.js, Nuxt.js</p>
                    </Col>
                    <Col lg={8}>
                      <p className="font-bold text-primary">CSS Framework</p>
                      <p>Tailwinds CSS</p>
                    </Col>
                    <Col lg={8}>
                      <p className="font-bold text-primary">UI Framework</p>
                      <p>Ant Design, Material-UI, React Native Paper, UI Kitten, Native Base</p>
                    </Col>
                    <Col lg={8}>
                      <p className="font-bold text-primary">Project Management</p>
                      <p>Trello, Taiga</p>
                    </Col>
                    <Col lg={8}>
                      <p className="font-bold text-primary">Design</p>
                      <p>Figma, Draw.io</p>
                    </Col>
                    <Col lg={8}>
                      <p className="font-bold text-primary">Tools</p>
                      <p>
                        Visual studio, Git Kraken, Git Fork, Insomnia, Postman, Docker, Altair
                        GraphQL Client, TablePlus, Adobe Photoshop, Adobe After effect, Adobe
                        Illustrator, Adobe Premiere Pro
                      </p>
                    </Col>
                  </Row>
                </Space>
              </Row>
            </Col>
          </Row>
        </Content>
        <Footer className="w-full flex items-center justify-center">
          <Row className="w-full">
            <Col span={24}>
              <Row className="flex items-center justify-center">
                <p>© 2021</p>
              </Row>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </main>
  )
}

export default IndexPage
