import React from 'react'
import styled from 'styled-components'
import FlexContainer from '../../containers/FlexContainer'
import Bigger from '../../elements/Bigger'
import Smaller from '../../elements/Smaller'
import Lighter from '../../elements/Lighter'
import { READINGS_COLORS, RANGE } from '../../../constants'

const Parent = styled.div`
  display: flex;
  background-color: #f9fbff;
  border-radius: 0.4rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`

const Left = styled.div`
  flex-basis: 70%;
  padding: 0.8rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ColorCoded = styled.div`
  background-color: ${({ status }) =>
    READINGS_COLORS[status] ?? READINGS_COLORS['unknown']};
`

const Right = styled(ColorCoded)`
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0.4rem 0.4rem 0;
`

const Reading = styled.div`
  font-size: 2rem;
  text-shadow: 2px 0 3px rgba(0, 0, 0, 0, 2);
`

const Card = ({ date, time, reading, type }) => {
  const getStatus = (reading, type) => {
    let status = 'unknown'
    switch (type.toUpperCase()) {
      case 'PP':
        if (reading <= RANGE['PP'].safe) {
          status = 'safe'
        } else if (
          reading > RANGE['PP'].safe &&
          reading <= RANGE['PP'].moderate
        ) {
          status = 'moderate'
        } else {
          status = 'high'
        }
        break
      case 'FASTING':
        if (reading <= RANGE['FASTING'].safe) {
          status = 'safe'
        } else if (
          reading > RANGE['FASTING'].safe &&
          reading <= RANGE['FASTING'].moderate
        ) {
          status = 'moderate'
        } else {
          status = 'high'
        }
        break
      default:
        status = 'unknown'
    }
    return status
  }

  return (
    <Parent>
      <Left>
        <FlexContainer ai="baseline">
          <Bigger mr="0.4rem">{date}</Bigger>
          <Smaller>{time}</Smaller>
        </FlexContainer>
        <Lighter fs="0.9rem">({type})</Lighter>
      </Left>
      <Right status={getStatus(reading, type)}>
        <Reading>{reading}</Reading>
      </Right>
    </Parent>
  )
}

export default Card
