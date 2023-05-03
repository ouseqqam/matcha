import styles from './login.module.css'

export function Login () {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                Logo
            </div>
            <div className={styles.form} >
                <h1>Login</h1>
                <form>
                    <div className={styles.input}>
                        <label htmlFor="username">username</label>
                        <input type="text" placeholder="username" />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder="password" />
                    </div>
                    <div className={styles.btn}>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}