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
  font-weight: lighter;
  color: gray;
`

const Color = styled.div`
  border-radius: 50%;
  background-color: green;
  width: 1rem;
  height: 1rem;
`

const Card = () => {
  return (
    <Parent>
      <Above className="row above">
        <div className="date" style={{ fontWeight: 'bolder' }}>
          12/12/12
        </div>
        <div className="reading">13 / 45 gmol/dl</div>
      </Above>
      <Row className="row below">
        <Risk className="risk">risk</Risk>
        <Color className="risk-color"></Color>
      </Row>
    </Parent>
  )
}

export default Card
