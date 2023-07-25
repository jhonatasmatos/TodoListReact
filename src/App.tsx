import { ChangeEvent, useMemo, useState } from 'react'
import { v4 } from 'uuid'

import { Header } from './components/Header'

import { PlusCircle, Trash, Check, ClipboardText } from 'phosphor-react'

import './global.css'
import styles from './App.module.css'

interface Task {
  id: string
  completed: boolean
  content: string
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  function handleCreateTask() {

    const addedTask = {
      id: v4(),
      completed: false,
      content: newTask
    }

    setTasks([...tasks, addedTask])
    setNewTask('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event?.target.value)
  }

  function handleDeleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
        return task.id !== taskId
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function handleChangeStatus(taskId: string) {
    const taskToEdit = tasks.find(task => task.id === taskId)

    if(taskToEdit) {
      taskToEdit.completed = !taskToEdit.completed
    }

    const editedTasks = [...tasks]
    setTasks(editedTasks)
  }

  const tasksDone = useMemo(() => tasks.filter(task => task.completed).length, [tasks])

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
              value={newTask}
              onChange={handleNewCommentChange}
              placeholder='Adicione uma nova tarefa'
            />
            <button onClick={handleCreateTask} className={styles.button} title="Criar">
              Criar
              <PlusCircle size={16} weight='bold' />
            </button>
          </div>
          

            <div className={styles.statusTasksWrapper}>
              <div className={styles.statusWrapper}>
                <p>Tarefas criadas</p>
                <span>{tasks.length}</span>
              </div>
              <div className={styles.statusWrapper}>
                <p>Concluídas</p>
                <span>
                  {
                    tasks.length === 0 ? (
                      0
                    ): (
                      <>{tasksDone} de {tasks.length}</>
                    )
                  }
                </span>
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
                <>
                  {
                    tasks.map(task => (
                      <div key={task.id} className={styles.taskWrapper}>
                        <button onClick={() => handleChangeStatus(task.id)} className={task.completed ? styles.checked : styles.unchecked}>
                          <Check weight='bold' />
                        </button>
                        <p className={task.completed ? styles.taskComplete : styles.taskIncomplete}>{task.content}</p>
                        <button onClick={() => handleDeleteTask(task.id)} type='button' title='Trash'>
                          <Trash size={20} weight='bold' />
                        </button>
                      </div>
                    ))
                  }
                </>
              )
            }
      </main>
    </div>
  )
}

export default App
