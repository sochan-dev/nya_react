import React, { VFC } from 'react'
import { ScheduleCalendar } from '../organisms'
import Styles from '../../../styles/sass/topLayput.module.scss'

const TopTemplate: VFC = () => {
  console.log('hello')
  return (
    <div className={Styles.root}>
      <div className={Styles.calendar}>
        <ScheduleCalendar />
      </div>
      <div className={Styles.wrapArea}>
        <div className={Styles.scheduleArea}>選択中日付の詳細</div>
        <div className={Styles.timetableArea}>時間割とその他の機能</div>
      </div>
    </div>
  )
}
export default TopTemplate
