import React from 'react'
import { Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts'
import FlexContainer from '../../containers/FlexContainer'
import styled from 'styled-components'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const GraphContainer = styled(FlexContainer)`
  flex-basis: 30%;
  width: 100%;
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  background-color: #576be8;
`

const Trend = ({ readings }) => {
  return (
    <GraphContainer at="center" jc="center">
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={100}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#ffc65d"
            fill="#576be8"
            activeDot={false}
          ></Area>
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#ffc65d"
            fill="#576be8"
            strokeWidth={3}
            activeDot={false}
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </GraphContainer>
  )
}

export default Trend
