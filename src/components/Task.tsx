import styles from './Task.module.css'
import { Trash, Check } from 'phosphor-react'

interface Task {
    id: string
    completed: boolean
    content: string
    onChangeStatus(id: string): void
    onDeleteTask(id: string): void
}

export function Task({ id, completed, content, onChangeStatus, onDeleteTask }: Task) {
    return (
        <div key={id} className={styles.taskWrapper}>
            <button onClick={() => onChangeStatus(id)} className={completed ? styles.checked : styles.unchecked}>
                <Check weight='bold' />
            </button>
            <p className={completed ? styles.taskComplete : styles.taskIncomplete}>{content}</p>
            <button onClick={() => onDeleteTask(id)} type='button' title='Trash'>
                <Trash size={20} weight='bold' />
            </button>
        </div>
    )
}