import React from 'react';
import { useState } from 'react';
import UserPool from './UserPool';


const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [address, setAddress] = useState('');

    const submit = (event) => {
        event.preventDefault();
        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })

    }

    return (
        <>
            <div>Sign Up app</div>
            <form onSubmit={submit}>
                <input value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <input value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                {/* <input value={address} placeholder='Address' onChange={(e) => setAddress(e.target.value)} /> */}
                <button type='submit'>signUp</button>
            </form>
        </>
    )
}

export default SignUp;