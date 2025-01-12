import { useState } from "react"
import Generator from "./components/Generator"
import Hero from "./components/Hero"
import Workout from "./components/Workout"
import { generateWorkout } from "./components/utils/function";
function App() {
  const [gen_workout,setgen_workout]=useState(null);
  const [poison,setpoison]=useState('individual');
  const [muscles,setmuscles]=useState([]);
  const [goal,setgoal]=useState('strength_power');
  function updateWorkout()
  {
    if(muscles.length<1) return;
    let newWorkout=generateWorkout({poison,muscles,goal});
    console.log(newWorkout);
    setgen_workout(newWorkout);
    window.location.href='#exercise';
  }
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-600 to-slate-950 text-white text-sm sm:text-base'>
      <Hero/>
      <Generator
      poison={poison}
      setpoison={setpoison}
      muscles={muscles}
      setmuscles={setmuscles}
      goal={goal}
      setgoal={setgoal}
      updateWorkout={updateWorkout}
      />
      {gen_workout && <Workout gen_workout={gen_workout}/>}
    </main>
  )
}

export default App
