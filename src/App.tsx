import { Header } from "./components/Header"

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <main>
          <div>
            <input type="text" name="inputTask" id="inputTask" />
            <button title="Criar">
              Criar
              x
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
