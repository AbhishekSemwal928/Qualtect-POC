
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loggedIn, showLoader, } from '../../Redux/Action'
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
        dispatch(showLoader(true))
        setTimeout(() => {
            if (formVal.userName === 'admin' && formVal.password === 'admin') {
                dispatch(loggedIn(true))
                props.history.push('/home')
            }
            else {
                console.log("inccoorect ")
                alert('Incorrect credentials')
            }
            dispatch(showLoader(false))
        }, 3000);
        // dispatch(showLoader(false))
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

            <div className='container'>
                <h1>Login Form</h1>
                <form
                    onSubmit={submitForm}
                    autoComplete='off'
                >
                    <div className='userName'>
                        <label htmlFor='username'>
                            <input
                                type="text"
                                name='userName'
                                value={formVal.userName}
                                onChange={setInputHandler}
                                placeholder="username"
                            /></label><br />

                    </div>
                    <div className='password'>
                        <label htmlFor='password'>
                            <input
                                type="password"
                                name='password'
                                value={formVal.password}
                                onChange={setInputHandler}
                                placeholder="Password"
                            /></label><br />

                    </div>
                    <div>
                        <button className='loginButton'
                            type="submit"
                            disabled={validateForm()}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login