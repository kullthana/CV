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
import { Avatar, Button, Col, Divider, Layout, Row, Space } from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'gatsby'
import * as React from 'react'
import profile from '../images/photo.jpg'

function AboutMePage() {
  const { Header, Footer, Content } = Layout

  return (
    <Layout className="min-h-screen">
      <Header style={{ backgroundColor: '#32AFB2' }}>
        <Button type="text" className="text-white">
          <Link to="/">Home</Link>
        </Button>
        <Button type="text" className="text-white">
          <Link to="/about-me">About me</Link>
        </Button>
      </Header>
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
                <p>Department: Developer</p>
                <p>
                  Dashboard project - Design and built responsive web, front-end using React
                  TypeScript, UI framework using Ant Design, CSS framework using Tailwind, connect
                  api using Apollo, state management using easy-peasy. - Design and built back-end
                  using GraphQL. - Expand features, refine code, and improve processes, producing
                  smoother operations and enhancing user engagement. Web Partner project - Built
                  responsive web, front-end using React TypeScript, web framework using Next.js, UI
                  framework using Ant Design, CSS framework using Tailwind, connect api using
                  Apollo, state management using easy-peasy. - Refine code, and improve processes,
                  producing smoother operations and enhancing user engagement. Web app center -
                  Built web, front-end using React, web framework using Next.js, UI framework using
                  Material-UI, connect api using axios, state management using recoil - Refine code,
                  and improve processes, producing smoother operations and enhancing user
                  engagement.
                </p>
                <p className="font-bold text-primary">Boot Camp</p>
                <p className="font-bold">Digital Ventures | December 2019 - June 2020</p>
                <p>
                  Content management project - Design and built responsive web, front-end using
                  React, state management using Redux, connect api using axios. - Expand features,
                  refine code, and improve processes, producing smoother operations and enhancing
                  user engagement. Money wallet project - Design and built android app, front-end
                  using React Native, UI framework using React Native Paper, state management using
                  Redux, connect api using axios. - Expand features, refine code, and improve
                  processes, producing smoother operations and enhancing user engagement. Booking
                  movie tickets project - Design and built android app, front-end using React
                  Native, UI framework using React Native Paper, state management using Redux,
                  connect api using axios. - Expand features, refine code, and improve processes,
                  producing smoother operations and enhancing user engagement. Gallery project -
                  Design and built responsive web, front-end using React JavaScript, UI framework
                  using Material-UI, connect api using axios. - Design and built back-end using GO.
                  - Expand features, refine code, and improve processes, producing smoother
                  operations and enhancing user engagement. Recipe project - Design and built
                  android app, front-end using React Native, UI framework using UI Kitten, connect
                  api using axios. - Design and built back-end using GO. - Expand features, refine
                  code, and improve processes, producing smoother operations and enhancing user
                  engagement.
                </p>

                <Divider className="w-full" />

                <p className="font-bold text-2xl">Skills</p>
                <Row>
                  <Col lg={8}>
                    <p className="font-bold text-primary">Front-end</p>
                    <p>
                      JavaScript, TypeScript, React, React Native, Java, HTML5, CSS, Vue.js, Flutter
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
                    <p>Ant Design, Material-UI, React Native Paper, UI Kitten</p>
                  </Col>
                  <Col lg={8}>
                    <p className="font-bold text-primary">Project Management</p>
                    <p>Trello, Taiga, Slack</p>
                  </Col>
                  <Col lg={8}>
                    <p className="font-bold text-primary">Design</p>
                    <p>Figma, Draw.io</p>
                  </Col>
                  <Col lg={8}>
                    <p className="font-bold text-primary">Tools</p>
                    <p>
                      Visual studio, Git Kraken, Git Fork, Insomnia, Postman, Docker, Altair,
                      TablePlus, Adobe Photoshop, Adobe After effect, Adobe Illustrator, Adobe
                      Premiere Pro
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
            <Row className="flex items-end justify-end">
              <Link
                href="https://www.linkedin.com/in/kullanan-thanachotanan-7976b9206/"
                className="mr-2 text-primary hover:text-secondary"
              >
                <LinkedinOutlined className="text-xl" />
              </Link>

              <Link
                href="https://github.com/kullthana"
                className="text-primary hover:text-secondary"
              >
                <GithubOutlined className="text-xl" />
              </Link>
            </Row>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}

export default AboutMePage
