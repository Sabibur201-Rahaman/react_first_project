
import Demo from "./demo"
const statusloginBtn=(status=true)=>{
if(status){
return(
  <h1>LogOut Btn</h1>
)
}else{
  return<h1>LogIn</h1>
}
}
function App() {


  
  
    return (
      <>
      <h2>Login status</h2>
      {statusloginBtn(true)}
      <Demo/>
      </>
      
    )
   
    }
export default App
 
