import React from 'react'
// import { Chart } from 'react-charts'
import FlexContainer from '../../containers/FlexContainer'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

const GraphContainer = styled(FlexContainer)`
  flex-basis: 30%;
  width: 100%;
`

const Trend = ({ readings }) => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.2,
      },
    ],
  }

  const options = {
    animations: {
      radius: {
        duration: 400,
        easing: 'linear',
        loop: (context) => context.active,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      xAxes: [
        {
          grid: {
            display: false,
          },
          title: {
            display: false,
          },
          gridLines: {
            display: false,
          },
          scaleLabel: {
            display: false,
          },
          ticks: {
            display: false,
            minRotation: 90,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
          },
          ticks: {
            display: false,
            minRotation: 0,
          },
        },
      ],
    },
  }

  return (
    <GraphContainer at="center" jc="center">
      <div
        className="chart-container"
        style={{ padding: '2rem', width: '50%', height: '100px' }}
      >
        <Line data={data} options={options} />
      </div>
    </GraphContainer>
  )
}

export default Trend
