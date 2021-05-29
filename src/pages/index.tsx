import { NextPage, InferGetStaticPropsType } from 'next'
import React, { VFC } from 'react'
import { useDispatch } from 'react-redux'
import { calendar } from '../lib/posts'
import { MainTemplate } from '../component/templates'
import { switchLoading } from '../stores/slices/loadingStatusSlice'

type props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  return {
    props: { calendar: calendar },
    revalidate: 30
  }
}

const Home: NextPage<props> = (props) => {
  const dispatch = useDispatch()
  dispatch(switchLoading('ff'))
  console.log(props.calendar)
  return (
    <div>
      <MainTemplate />
    </div>
  )
}

export default Home
