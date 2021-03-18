import React from 'react';
import styled from 'styled-components'

const StyledSection = styled.div`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`

const WeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`

const WeekendTitle = styled(WeekdayTitle)`
    background-color: lightgrey;
    border-radius: 7px 0 0 7px;
    font-weight: 600;
    color: black;
`

function Section(props) {
    return(
        <StyledSection>
            {props.day === "S" && <WeekendTitle>{props.day}</WeekendTitle>}
            {props.day !== "S" && <WeekdayTitle>{props.day}</WeekdayTitle>}
        </StyledSection>
    )
}

export default Section;