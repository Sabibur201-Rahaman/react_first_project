
import Demo from "./demo"

function App() {


  const status=true;
  if(status==true){
    return (
      <>
      <h1>login status</h1>
      <button>LogOut</button>
      <div><Demo/></div>
      </>
      
    )
      
  }else{
   return(
    <div>
       <h1>login status</h1>
      <button>LogIn</button>
    </div>
   )
  }
  
}

export default App
 
