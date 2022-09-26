import type { NextPage } from 'next'
import Head from 'next/head'

import { Container } from '@styles/pages/index'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | KnowNetworks</title>
      </Head>

      <Container>
      <section className="container_login">
          <form className="login_form">
            <div className="text_form">
              <div className="text_title">
                Login KnowNetworks
                </div>
            </div>
            <div className="alert_form">Invalid Username/Email or password</div>
            <div className="container_email">
              <div className="text_label" >
                Username or email address
                </div>
              <input
              name="email"
              id="ipt_eml"
              type="text"
              required />
            </div>
            <div className="container_pwd">
              <div className="text_label" >
                Password
                </div>
              <input
              name="password"
              id="ipt_pwd"
              type="password"
              required />
            </div>
            <div className="btn_log">
              <input type="submit" value="Join" />
            </div>
          </form>
        </section>
      </Container>
    </>
  )
}

export default Home
