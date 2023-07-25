import { useState } from 'react'

import { Header } from './components/Header'

import { PlusCircle, Trash, Check, ClipboardText } from 'phosphor-react'

import './global.css'
import styles from './App.module.css'

export function App() {
  const [isChecked, setIsChecked] = useState(true)
  const [tasks, setTasks] = useState([])


  console.log(tasks.length)

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
          <div className={styles.inputContainer}>
            <input 
              className={styles.input} 
              type="text" 
              name="inputTask" 
              id="inputTask"
              placeholder='Adicione uma nova tarefa'
            />
            <button className={styles.button} title="Criar">
              Criar
              <PlusCircle size={16} weight='bold' />
            </button>
          </div>
          

            <div className={styles.statusTasksWrapper}>
              <div className={styles.statusWrapper}>
                <p>Tarefas criadas</p>
                <span>5</span>
              </div>
              <div className={styles.statusWrapper}>
                <p>Concluídas</p>
                <span>2 de 5</span>
              </div>
            </div>
            {
              tasks.length === 0 ? (
                <div className={styles.withoutTasksBox}>
                  <ClipboardText weight='light' />
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              ): (
                <div className={styles.taskWrapper}>
                  <button className={isChecked ? styles.checked : styles.unchecked}>
                    <Check weight='bold' />
                  </button>
                  <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                  <button type='button' title='Trash'>
                    <Trash size={20} weight='bold' />
                  </button>
                </div>
              )
            }
          {/* </div> */}
      </main>
    </div>
  )
}

export default App
