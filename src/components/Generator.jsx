import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from './utils/swoldier';
function Header(props)
{
  const {index,title,decsriptions}=props;
  return(
    <div className='flex flex-col gap-3 items-center justify-center pt-3'>
      <div className='flex gap-3 items-baseline'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400'>{index}</p>
        <h4 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-200'>{title}</h4>
      </div>
      <p className='text-sm sm:text-lg md:text-xl font-light text-blue-200'>{decsriptions}</p>
    </div>
  )
}
export default function Generator(props) {
  const [modal,setmodal]=useState(false);
  const {poison,setpoison,muscles,setmuscles,goal,setgoal,updateWorkout}=props
  function showmodal()
  {
    setmodal(!modal);
  }
  function addmusclegroup(Muscle)
  {
    if(muscles.includes(Muscle))
    {
      setmuscles(muscles.filter(val=>val!==Muscle));
      return;
    }

    if(muscles.length>2)
    {
      showmodal();
      return;
    }

    if(poison!=='individual')
    {
      setmuscles([Muscle]);
      showmodal();
      return;
    }    
    setmuscles([...muscles,Muscle])
    if(muscles.length===3)
    {
      showmodal();
      return;
    }
  }
  return (
      <SectionWrapper id={'generate'} header={"Generate your Workout"} title={['It\'s','Huge','0\'clock']}>
        <Header index={'01'} title={'Select your poison'} decsriptions={'Select The workout you wish to endure'}/>
        <div className='flex gap-10 justify-center flex-wrap sm:flex-nowrap'>
            {Object.keys(WORKOUTS).map((type, typeIndex) => {
                return (
                  <button onClick={() => {
                      setmuscles([]);
                      setpoison(type);
                  }} className={'bg-slate-950 border w-[250px] text-sm sm:text-lg md:text-xl h-[65px] duration-200 px-4 hover:border-blue-400 py-3 rounded-lg ' 
                  + (type === poison ? ' border-blue-400' : ' border-black')} key={typeIndex}>
                      <p className='capitalize'>
                        {type.replaceAll('_', " ")}
                      </p>
                  </button>
                )
            })}
        </div>

        <Header index={'02'} title={'Lock on Target'} decsriptions={'Select the Muscle for workout'}/>
        <div className='bg-black p-4 border-solid border-blue-400 border rounded-md flex flex-col justify-center'>
          <button className='relative' onClick={()=>{
            showmodal()}}>
            <p className='capitalize'>{(muscles.length===0)?'Select your Muscle':muscles.join(' ')}</p>
            <i className="fa-solid fa-caret-down absolute right-0 top-0"></i>
          </button>
          {modal&&
          (<div className='flex flex-col mt-2 border-t-blue-400 border-t gap-1'>
            {((poison==='individual')?WORKOUTS[poison]:Object.keys(WORKOUTS[poison])).map((Muscle,muscleIndex)=>{
              return(
                 <button onClick={()=>{
                    addmusclegroup(Muscle)
                  }} key={muscleIndex} className={'mt-1 hover:text-blue-400 duration-200'+(muscles.includes(Muscle)?' text-blue-400':' ')}>
                    <p className='capitalize'>
                      {Muscle}
                    </p>
                </button>
              )
            })}
          </div>)}
        </div>

        <Header index={'03'} title={'Select your Goal'} decsriptions={'Select The Goal you wish to acheive'}/>
        <div className='flex gap-10 justify-center flex-wrap sm:flex-nowrap'>
            {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                return (
                  <button onClick={() => {
                      setgoal(scheme)
                  }} className={'bg-slate-950 border text-sm sm:text-lg md:text-xls w-[250px] h-[60px] duration-200 px-4 hover:border-blue-400 py-3 rounded-lg' 
                  + (scheme === goal ? ' border-blue-400' : ' border-black')} key={schemeIndex}>
                      <p className='capitalize'>
                        {scheme.replaceAll('_', " ")}
                      </p>
                  </button>
                )
            })}
        </div>
        <button onClick={updateWorkout}
           className='text-white mx-auto font-semibold text-base mb-5 border-2 p-4 px-6 border-blue-400 rounded-md border-solid blueshadow duration-200'>Generate</button>
      </SectionWrapper> 
  )
}
