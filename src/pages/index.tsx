import { NextPage, GetStaticProps } from 'next'
import React, { VFC } from 'react'

import Test from '../component/Test'

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 30
  }
}

const Home: NextPage = (props) => {
  return (
    <div>
      <Test />
    </div>
  )
}

export default Home
