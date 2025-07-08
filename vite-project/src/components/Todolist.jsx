import Botao from "./Botao"
import { useState } from "react"
function Todolist() {

  const [tarefas, setTarefas] = useState([])
  const [tarefa, setTarefa] = useState('')

  function add() {
    setTarefas([...tarefas, tarefa])
    setTarefa('')
    console.log(tarefas)
  }
  function mudaEstado(e) {
    setTarefa(e.target.value)
  }
  return (
    <div>
    <header className='
    flex flex-col items-center
    bg-white p-6 w-4/6 mx-auto mt-10 rounded border border-black
    shadow-gray-500 shadow-md'
    >
      <h1 className="p-4 text-5xl">To-do-list</h1>
      <div className="flex w-full">
        <input className='border border-black outline-none
        rounded w-4/5 p-2 mr-2.5'
          type="text"
          value={tarefa}
          onChange={mudaEstado}
          
          
        />
        <Botao 
        onClick={add}
        >Adicionar</Botao>

      </div>

    </header>
       <ul className="mt-6 w-4/6 m-auto ">
        {tarefas.map(function (item, index) {
          return (
            <li key={index} className="bg-white border shadow-gray-500 shadow-md border-black p-2 my-2 rounded">
              {item}
            </li>
          )
        })}
      </ul>

    </div>
    
  )

}
export default Todolist