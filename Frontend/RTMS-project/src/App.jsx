import About1 from './Components/About/About1'
import Contact1 from './Components/Contact/Contact'
import Header from './Components/Header'
//import Login1 from "./Components/Login/Login1"
//import Login2 from "./Components/Login/Login2"

//import Registration1 from "./Components/Registration/Registration1"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>  
      
      <div className='w-full overflow-hidden'>
        <Header />
        <About1 /> 
        <Contact1 />
        {/* <Login1 /> */}
        {/* <Registration1 /> */}
      </div>    
      
      
    </>
  )
}

export default App
