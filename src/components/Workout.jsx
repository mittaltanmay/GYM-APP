import React from 'react'
import SectionWrapper from './SectionWrapper';
import ExceriseCards from './ExceriseCards';

export default function Workout(props) {
  const {gen_workout}=props;
  return (
    <SectionWrapper id={'exercise'} header={"Welcome To Workout Zone"} title={['The','generated','workout']}>
      <div className='flex flex-col gap-4'>
        {gen_workout.map((exercise,index)=>{
          return(
            <ExceriseCards index={index} exercise={exercise} key={index}/>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
