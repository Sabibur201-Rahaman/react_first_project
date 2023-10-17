import Hero from "./component/Hero";
function App() {
  const itemObj={
    name:'sabibur',
    age:20,
    city:'Berhampore',
  }
  return(
    <div>
      <Hero item={itemObj}/>

    </div>
  )
  
}
export default App;
