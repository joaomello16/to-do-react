import Botao from "./Botao"
function Todolist (){


    return(
         <header className='
    flex flex-col items-center
    bg-amber-200 p-6 w-4/6 mx-auto mt-10 rounded border border-black'
    >
      <h1 className="p-4 text-5xl">To-do-list</h1>
      <div className="flex w-full">
        <input className='border border-black outline-none
        rounded w-4/5 p-2 mr-2.5' 
        
        ></input>
        <Botao>Adicionar</Botao>
      
      </div>
    </header>
    )

}
export default Todolist