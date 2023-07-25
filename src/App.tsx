import { Header } from './components/Header'

import { PlusCircle } from 'phosphor-react'

import './global.css'
import styles from './App.module.css'

export function App() {

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
          <div>
            <div>
              <p>Tarefas criadas</p>
              <span>5</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>2 de 5</span>
            </div>
          </div>
          <div>
            <div>
              <p>x</p>
              <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
              <p>x</p>
            </div>
          </div>
      </main>
    </div>
  )
}

export default App
