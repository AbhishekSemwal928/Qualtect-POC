
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loggedIn, userData } from '../../Redux/Action'
import './Login.css'

const INITIAL_STATE = {
    userName: '',
    password: ''
}
const Login = (props) => {

    const [formVal, setFormVal] = useState(INITIAL_STATE)
    const dispatch = useDispatch()

    const setInputHandler = (e) => {
        setFormVal({ ...formVal, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (formVal.userName === 'admin' && formVal.password === 'admin') {

            dispatch(loggedIn(true))
            dispatch(userData(formVal.userName))
            props.history.push('/home')

        }
        else {
            console.log("inccoorect ")
        }
    }

    const validateForm = () => {
        if (formVal.userName.length > 0 && formVal.password.length > 0) {
            return false
        }
        else {
            return true
        }

    }

    return (
        <div className='loginContainer'>
            <h2>Login</h2>
            <form
                onSubmit={submitForm}
                autoComplete='off'
            >
                <label htmlFor="userName">User Name</label>
                <input
                    type='text'
                    id='userName'
                    placeholder='User Name'
                    name='userName'
                    value={formVal.userName}
                    onChange={setInputHandler}
                />
                <br />
                <br />
                <br />
                <label htmlFor="pass">Password</label>
                <input
                    type='password'
                    id='pass'
                    placeholder='Password'
                    name='password'
                    value={formVal.password}
                    onChange={setInputHandler}
                />
                <br />
                <br />
                <br />
                <button
                    type="submit"
                    disabled={validateForm()}
                >Submit</button>
            </form>
        </div>
    )
}

export default Login