import * as React from "react";
import profile from "../images/photo.jpg";

function IndexPage() {
  return (
    <main>
      <link rel="icon" href="/favicon.ico" />
      <title>Kullanan Thanachotanan Site</title>

      <div>
        <div>
          <div>
            <div>
              <div>
                <p>
                  <img src={profile} alt="profile" />
                </p>
                <p>
                  <strong>Kullanan Thanachotanan</strong>
                </p>
                <p>Software Engineer</p>
                <p>
                  <a href="https://www.linkedin.com/in/kullanan-thanachotanan-7976b9206/">
                    Linkedin
                  </a>

                  <a href="https://github.com/kullthana">Github</a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <h3>Education</h3>
              </div>
            </div>

            <div>
              <div>
                <p>
                  <strong>Software Engineering</strong>
                </p>
                <p>2010 - 2014</p>
                <p>
                  College of Art, Media and Technology in Chiang Mai University
                </p>
              </div>
            </div>

            <hr />

            <div>
              <div>
                <h3>Experience</h3>
              </div>
            </div>

            <div>
              <div>
                <p>
                  <strong>Internship Developer</strong>
                </p>
                <p>August 2020 - March 2021</p>
                <p>Artisan Digital Asia</p>
              </div>
            </div>

            <hr />

            <div>
              <div>
                <h3>Skills</h3>
              </div>
            </div>

            <div>
              <div>
                <span>TypeScript</span>
                <span>Graphql</span>
                <span>React.js</span>
                <span>NodeJs</span>
                <span>Docker</span>
                <span>Git</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>PostgreSQL</span>
                <span>jQuery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default IndexPage;
