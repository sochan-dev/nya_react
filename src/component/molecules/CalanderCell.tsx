import React, { VFC } from 'react'
import { useDispatch } from 'react-redux'

type props = {
  day: number
  month: number
  yearNumber: number
  schedules?: {
    id: number
    title: string
    detail: string
    datetime: Date
    type_id: number
    channel_id: number
  }[]
}

const CalendarCell: VFC<props> = (props) => {
  const dispatch = useDispatch()
  const { day, month, yearNumber, schedules } = props

  const date = `202${yearNumber}-${month}-${day}`
  return (
    <div>
      {date}:{schedules.length !== 0 && schedules[0].title}
    </div>
  )
}
export default CalendarCell
