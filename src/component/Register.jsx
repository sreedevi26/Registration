import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import '../component/bootstrap.min (1).css';
import '../component/Register.css'
import { Button } from '@mui/material';
import Link from '@mui/material/Link';

function Register() {
    const [registername, setRegisterName] = useState("")
    const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")
    // const [isError, setIsError] = useState("")
    const [isRegisterName, setisRegisterName] = useState(true)
    const [isEmail, setisEmail] = useState(true)
    const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

    const validateInput = (e) => {
        const { name, value } = e.target
        if (!!value.match(/^[A-Za-z]+$/)) {
            if (name === "registername") {
                setRegisterName(value)
                setisRegisterName(true)
            }
        } else {
            if (name == "registername") {
                setRegisterName(value)
                setisRegisterName(false)
            }
        }
        if (!!value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            if (name === 'email') {
                setEmail(value)
                setisEmail(true)
            }
        } else {
            if (name == 'email') {
                setEmail(value)
                setisEmail(false)
            }
        }
    }
    // 
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        
        // if (confirmPassword !== newPassword) {
        //   setError('Passwords do not match');
        // } else {
        //   setError('');
        // }
      };
    
      const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
    
        if (password !== newConfirmPassword) {
          setError('Passwords do not match');
        } else {
          setError('');
        }
      };
      const handleSubmits = (e) => {
        e.preventDefault()
        alert(`
            Name:${registername}
            Email:${email}
            Password:${password}
            ConfirmPassword:${confirmPassword}
            `)
    }

    return (
        <div className='container'>
            <h1 style={{ color: 'black', textAlign: 'center' }}>Register</h1>
            <hr style={{ color: 'black' }} />
            <form action="" onSubmit={handleSubmits}>
                <div className='mt-3'>
                    <TextField className='w-100' id="standard-basic1" label="Name" variant="standard"
                        value={registername || ""} name='registername' onChange={(e) => validateInput(e)} />
                    <div>
                        {
                            !isRegisterName &&
                            <div className='mb-3 text-danger fw-bolder'>
                                *Invalid User Input
                            </div>
                        }
                    </div>
                </div>
                <div className='mt-3'>
                    <TextField className='w-100' id="standard-basic2" label="Email" variant="standard"
                        value={email || ""} name='email' onChange={(e) => validateInput(e)} />
                    <div>
                        {
                            !isEmail &&
                            <div className='mb-3 text-danger fw-bolder'>
                                *Proper format
                            </div>
                        }
                    </div>
                </div>
                <div className='mt-3'>
                    <TextField className='w-100' type='password' id="standard-basic3" label="Password" variant="standard"
                        value={password} onChange={handlePasswordChange} name='password' />
                    {/* </div>
                   <div className='mt-3'> */}
                    <br />
                    <br />
                    <TextField className='w-100' type='password' id="standard-basic4" label="Confirm Password" variant="standard"
                        value={confirmPassword} onChange={handleConfirmPasswordChange} name='confirmPass' />
                    <div className='mb-3 text-danger fw-bolder'>
                        {/* {
                            isError &&
                            <div className='mb-3 text-danger fw-bolder'>
                                {isError}
                            </div>
                        } */}
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <div className='button mt-3 '>
                    <Button className='w-100' style={{ color: 'black' }} variant="outlined" type='submit' value={'Submit'}>Sign Up</Button>
                </div>

                <div className='mt-3 ' style={{ textAlign: 'center' }}><p style={{ color: 'black' }}>Have an Account ?

                    <Link href="#" underline="none">
                        {'Login Here'}
                    </Link>
                </p>
                </div>
            </form>
        </div>
    )
}

export default Register;