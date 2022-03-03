import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Routes from "./routes/Routes"
import './App.css'
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { withRouter } from "react-router-dom"

const App = (props) => {

  const authStatus = useSelector((state) => state.authorization_reducer)

  useEffect(() => {
    if (authStatus) {
      props.history.push('/home')
    }
    else {
      props.history.push('/login')
    }

  },[authStatus,props.history])

  return (
    <>
      
        <Header />
        <div className="container">
          <Routes />
        </div>
        <Footer />
     
    </>
  )
}

export default withRouter(App)