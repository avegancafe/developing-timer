import React from 'react'
import { Timeline } from 'antd'

import s from './App.module.css'

const App = () => {
  return (
    <div>
      <Timeline className={s.timelineContainer} pending="Recording...">
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
      </Timeline>
    </div>
  )
}

export default App
