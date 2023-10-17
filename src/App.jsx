function App() {
  const status = false;
  return(
  <div>{status ? <button>LogOut</button> : <button>LogIn</button>}</div>
  )
}
export default App;
