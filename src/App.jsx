function App() {
  const status = true;
  return(
    <div>
      <h1>login status</h1>
    {(()=>{
      if(status==true){
       return <button>LogOut</button>
      }else{
       return <button>LogIn</button>
      }
    })()}
    </div>
  )
  
}
export default App;
