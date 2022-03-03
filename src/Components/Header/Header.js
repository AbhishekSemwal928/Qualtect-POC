
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { loggedIn } from '../../Redux/Action';



import './Header.css'

const Header = (props) => {
    
    const dispatch = useDispatch()
    const authStatus = useSelector((state) => state.authorization_reducer)

    const onLogout = () =>{
        props.history.push('/login')
        dispatch(loggedIn(false))
    }

    return (
        <div className='headerComponent'>
            Header

            

        {
            authStatus&&<div className='authButtons'>
                <button>Home</button>
                <button onClick={onLogout}>Logout</button>
            </div>
        }
        
        </div>

    )
}

export default withRouter(Header)