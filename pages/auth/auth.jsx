import { useState } from 'react'
import styles from './auth.module.css'
import { Login } from '@/components/login'
import { SignUp } from '@/components/signup'

export function Auth () {
    const [sign, setSign] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.logo}></div>
            <div className={styles.form} >
                {
                    sign ?
                        <Login />
                    :    
                        <SignUp />
                }
            </div>
        </div>
    )
}