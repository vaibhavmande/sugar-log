import React from 'react'
import styled, { css } from 'styled-components'

const READINGS_COLORS = {
  high: '#db7f7f',
  safe: '#89d089',
  moderate: '#dbdb81',
  unknown: 'whitesmoke',
}

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

const DateTime = styled.div`
  display: flex;
  align-items: baseline;
`
const withMargin = css`
  ${({ mr }) => mr && `margin-right: ${mr}`}
`
const withFontSize = css`
  ${({ fs }) => fs && `font-size: ${fs}`}
`

const Bigger = styled.div`
  font-size: 1.2rem;
  ${withMargin}
`
const Smaller = styled.div`
  font-size: 0.8rem;
`
const Lighter = styled.div`
  font-weight: lighter;
  ${withFontSize}
`
const Reading = styled.div`
  font-size: 2rem;
  text-shadow: 2px 0 3px rgba(0, 0, 0, 0, 2);
`

const Card = ({ date, time, reading, type }) => {
  return (
    <Parent>
      <Left>
        <DateTime>
          <Bigger mr="0.4rem">{date}</Bigger>
          <Smaller>{time}</Smaller>
        </DateTime>
        <Lighter fs="0.9rem">({type})</Lighter>
      </Left>
      <Right status="moderate">
        <Reading>{reading}</Reading>
      </Right>
    </Parent>
  )
}

export default Card
