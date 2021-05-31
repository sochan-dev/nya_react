import React, { VFC } from 'react'
import { useSelector } from 'react-redux'
import { getSchedule, schedule } from '../../stores/slices/scheduleSlice'
import { DAYS_IN_MONTH } from '../../const/daysInMonth'
import { CalendarCell } from '../molecules'

type calenderCell = {
  day: number
  month: number
  yearNumber: number
  schedule?: {
    id: number
    title: string
    detail: string
    datetime: Date
    type_id: number
    channel_id: number
  }[]
}

const ScheduleCalendar: VFC = () => {
  const daysInMonth: number[] = DAYS_IN_MONTH
  const schedules: schedule[] = useSelector(getSchedule)

  const checkSchedule = (
    day: number,
    month: number,
    year: number
  ): calenderCell => {
    const date = `202${year}-${month}-${day}`
    const targetSchedules = []
    for (let i = 0; i < schedules.length; i++) {
      String(schedules[i].datetime) === date &&
        targetSchedules.push(schedules[i])
    }

    const props = { day: day, month: month, yearNumber: year }
    props['schedules'] = targetSchedules

    return props
  }

  return (
    <div>
      {(() => {
        const cell = []
        for (let year = 1; year <= 3; year++) {
          daysInMonth.map((days, month) => {
            for (let j = 1; j < days; j++) {
              const props = checkSchedule(j, month, year)
              cell.push(
                <CalendarCell key={`${year}-${month}-${j}`} {...props} />
              )
            }
            cell.push(<p key={`${year}-${month}`}>改</p>)
          })
        }
        return <>{cell}</>
      })()}
    </div>
  )
}

export default ScheduleCalendar
