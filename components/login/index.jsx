import { useRef } from 'react'
import styles from './login.module.css'

export function Login () {
    const username = useRef()
    const password = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username.current.value)
        console.log(password.current.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.form} >
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.input}>
                        <label htmlFor="username">username</label>
                        <input type="text" placeholder="username" ref={username} />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder="password" ref={password} />
                    </div>
                    <div className={styles.btn}>
                        <button type='submit' >Login</button>
                    </div>
                </form>
                <div className={styles.signup}>
                    don't have an account? <button>Sign up</button>
                </div>
            </div>
        </div>
    )
}