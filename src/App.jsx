
import Demo from "./demo"
function App() {

  const city=['kolkata','Delhi','Dhaka','Rajshahi']
  return (
    <>
    <ol>
      {
        city.map((item,i)=>{
          return <li key={i.toString()}>{item}</li>
        })
      }
    </ol>
    <Demo/>
    </>
  )
}

export default App
 
