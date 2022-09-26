import type { NextPage } from 'next'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Title>My First Next.js Page</Title>
    </div>
  )
}

export default Home
