
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { loggedIn } from '../../Redux/Action';
import Loader from '../Loader/Loader';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './Header.css'
import { Typography } from '@material-ui/core';

const Header = (props) => {

    const dispatch = useDispatch()
    const authStatus = useSelector((state) => state.authorization_reducer)
    const loader_status = useSelector((state) => state.loader_reducer)

    const onLogout = () => {
        props.history.push('/login')
        dispatch(loggedIn(false))
    }

    return (
        <div className='headerComponent'>
            {/* <div className="headerContainer">
                <h2>Header</h2>
                {
                    authStatus && <div className='authButtons'>
                        <button>Home</button>
                        <button onClick={onLogout}>Logout</button>
                    </div>
                }
            </div> */}

            <AppBar position="static" >
                <Toolbar className='headerContainer' >
                    <Typography variant='h6'>Header</Typography>
                 
                    {
                    authStatus && <div className='authButtons'>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit" onClick={onLogout}>Logout</Button>
                    </div>
                }
                </Toolbar>
            </AppBar>

            <div style={{ display: loader_status ? 'block' : 'none' }}>
                <Loader />

            </div>

        </div>

    )
}

export default withRouter(Header)