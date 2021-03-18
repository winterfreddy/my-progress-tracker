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

const ProgressSection = styled.div`
    width: 250px;
`

const ProgressBar = styled.div`
    background-color: red;
    height: 50px;
    width: ${({progress}) => progress || '0%'};
`

function Section(props) {
    return(
        <StyledSection>
            {props.day === "S" && <WeekendTitle>{props.day}</WeekendTitle>}
            {props.day !== "S" && <WeekdayTitle>{props.day}</WeekdayTitle>}
            <ProgressSection>
                <ProgressBar progress={props.progress}/>
            </ProgressSection>
        </StyledSection>
    )
}

export default Section;