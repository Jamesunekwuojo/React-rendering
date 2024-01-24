import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const time = new Date();
  const day = time.toLocaleString("en-US", {weekday: "long"}) ;
  const morning = time.getHours() >= 6 && time.getHours() <=12;
  let dayGreetings;

  if (day.toLocaleLowerCase()==="monday"){
    dayGreetings = `Happy${day}`
  } else if(day.toLocaleLowerCase()==="tuesday"){
    dayGreetings = `Happy${day}`

  } else if(day.toLocaleLowerCase()==="wednesday"){
    dayGreetings = `Happy${day}`

  } else if(day.toLocaleLowerCase()==="thursday"){
    dayGreetings = `Happy${day}`

  } else if(day.toLocaleLowerCase()==="friday"){
    dayGreetings = `Happy${day}`

  } else{
    dayGreetings ="Enjoy ur weeekends"
  }


  return(
    <>
    <div>
      <h1>
        {dayGreetings}
      </h1>

      {morning? <h2>Have u had ur breakfast</h2>:''}

    </div>
    </>
  )

  


}

export default App
