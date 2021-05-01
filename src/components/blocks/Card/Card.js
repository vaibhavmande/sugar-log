import React from 'react'
import styled from 'styled-components'

const Parent = styled.div`
  background-color: #f9fbff;
  border-radius: 0.4rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Above = styled(Row)`
  margin-bottom: 0.6rem;
`

const Risk = styled.div`
  color: #6c6c6c;
`

const Color = styled.div`
  border-radius: 50%;
  background-color: green;
  width: 1rem;
  height: 1rem;
`

const ReadingText = styled.span`
  color: #576be8;
`

const Card = ({ date, time, reading, type }) => {
  return (
    <Parent>
      <Above>
        <div>{date}</div>
        <div>
          <span
            style={{
              color: '#6c6c6c',
              fontWeight: 'lighter',
              marginRight: '0.6rem',
            }}
          >
            ({type})
          </span>
          <span
            style={{
              color: '#576be8',
              fontSize: '1.04rem',
              fontWeight: 'bold',
            }}
          >
            {reading}
          </span>
        </div>
      </Above>
      <Row className="row below">
        <Risk className="risk">{time}</Risk>
        <Color className="risk-color"></Color>
      </Row>
    </Parent>
  )
}

export default Card
