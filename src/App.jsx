function App() {
  const status = true;
  return(
    <div>
      <h1>login status</h1>
    {  status && <button>logOut</button>}
    </div>
  )
  
}
export default App;
