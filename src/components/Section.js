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
    background-color: ${({progress}) => {
        let str = progress.slice(0,-1);
        let num = parseInt(str);

        if( num >= 80) return 'green';
        else if(num >= 60) return 'yellow';
        else if(num >= 40) return 'orange';
        else return 'red';
    }};
    height: 50px;
    width: ${({progress}) => progress || '0%'};
`

const TodayProgressBar = styled(ProgressBar)`
    background-color: purple;
`

function Section(props) {
    let date = new Date();
    let day = date.getDay();

    let isToday = day === props.d;

    return(
        <StyledSection>
            {props.day === "S" && <WeekendTitle>{props.day}</WeekendTitle>}
            {props.day !== "S" && <WeekdayTitle>{props.day}</WeekdayTitle>}
            <ProgressSection>
                {isToday && <TodayProgressBar progress={props.progress}/>}
                {!isToday && <ProgressBar progress={props.progress}/>}
            </ProgressSection>
        </StyledSection>
    )
}

export default Section;