function Botao({onClick, children, cor='blue'}){
    const cores = {
        red: 'bg-red-600',
        blue: 'bg-blue-600'
    }

    return(
        <button 
        onClick={onClick}
        className = {`text-white border border-black cursor-pointer w-2/10 rounded ${cores[cor]}`}>
        {children}
        </button>
    )
}
export default Botao