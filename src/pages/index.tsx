import { NextPage, InferGetStaticPropsType } from 'next'
import React from 'react'
import { useDispatch } from 'react-redux'
import { TopTemplate } from '../component/templates'
import { setSchedule } from '../stores/slices/scheduleSlice'

type props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const schedules = [
    {
      id: 1,
      title: 'CR:予告',
      detail: '明日CR２限からあります。自己教育のほにゃらら忘れずに。',
      datetime: '2021-6-1',
      type_id: 3,
      channel_id: 3
    },
    {
      id: 2,
      title: 'ST31:課題',
      detail: '課題明日までです。',
      datetime: '2021-6-4',
      type_id: 5,
      channel_id: 2
    }
  ]

  return {
    props: { schedules: schedules },
    revalidate: 30
  }
}

const Home: NextPage<props> = (props) => {
  const dispatch = useDispatch()
  dispatch(setSchedule(props.schedules))
  return (
    <>
      <TopTemplate />
    </>
  )
}

export default Home
