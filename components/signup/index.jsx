import { useRef } from 'react'
import styles from './signup.module.css'
import { useRouter } from 'next/router'


export function SignUp () {
    const username = useRef()
    const password = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username.current.value)
        console.log(password.current.value)
    }

    //const router = useRouter();

    // const handleNavigate = () => {
    //     router.push('/about'); // Navigate to the '/about' page
    // };

    return (
        <div className={styles.container}>
            <div className={styles.form} >
                <h1 className={styles.header}>
                    Create new account
                </h1>
                <form onSubmit={handleSubmit} >
                    <div className= {`${styles.input1} ${styles.input}`} >
                        <label htmlFor="username">username</label>
                        <input type="text" placeholder="username" ref={username} />
                    </div>
                    <div className= {`${styles.input2} ${styles.input}`} >
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" placeholder="firstname" ref={username} />
                    </div>
                    <div className= {`${styles.input3} ${styles.input}`} >
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" placeholder="lastname" ref={username} />
                    </div>
                    <div className= {`${styles.input4} ${styles.input}`}>
                        <label htmlFor="username">Email</label>
                        <input type="text" placeholder="username" ref={username} />
                    </div>
                    <div className= {`${styles.input5} ${styles.input}`} >
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="password" ref={password} />
                    </div>
                    <div className= { styles.input} >
                        <label htmlFor="password">Confirm password</label>
                        <input type="password" placeholder="confirm password" ref={password} />
                    </div>
                    <div className={styles.btn}>
                        <button type='submit' >Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}