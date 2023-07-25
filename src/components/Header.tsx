import styles from './Header.module.css'

import todoLogo from '../assets/logo.png'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={todoLogo} alt="Logo tipo ToDo Web App" />
        </header>
    )
}