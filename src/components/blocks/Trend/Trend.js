import React from 'react'
import { Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts'
import FlexContainer from '../../containers/FlexContainer'
import styled from 'styled-components'

const GraphContainer = styled(FlexContainer)`
  flex-basis: 30%;
  width: 100%;
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  background-color: #576be8;
`

const Trend = ({ entries }) => {
  let byDate = {}
  let graphData = []

  entries.forEach((reading) => {
    if (byDate[reading.date]) {
      byDate[reading.date].push(reading)
    } else {
      byDate[reading.date] = []
      byDate[reading.date].push(reading)
    }
  })

  for (let date in byDate) {
    const fastingArray =
      byDate[date].find((value) => value.type === 'fasting') ?? []
    const ppArray = byDate[date].find((value) => value.type === 'PP') ?? []

    graphData.push({
      name: date,
      fasting: fastingArray?.value ?? 0,
      PP: ppArray?.value ?? 0,
    })
  }

  graphData.sort((prev, next) => new Date(prev.name) - new Date(next.name))

  return (
    <GraphContainer at="center" jc="center">
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={100}
          data={graphData}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Area
            type="monotone"
            dataKey="fasting"
            stackId="1"
            stroke="#ffc65d"
            fill="#576be8"
            activeDot={false}
          ></Area>
          <Area
            type="monotone"
            dataKey="PP"
            stackId="2"
            stroke="#ffc65d"
            fill="#576be8"
            strokeWidth={3}
            activeDot={false}
          />
          <Tooltip
            labelFormatter={(name, payload) => {
              return payload[name]?.payload?.name ?? name
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </GraphContainer>
  )
}

export default Trend
