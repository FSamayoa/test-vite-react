import { Lista } from "./components/Lista"


function App() {

  const listaPersonas = [
    {name:"Fernando", age:34, signo:"Tauro"},
    {name:"Marcel", age:25, signo:"Sagitario"},
    {name:"Camila", age:19, signo:"Libra"},
    {name:"Bernardo", age:50, signo:"Capricornio"},
  ]

  return (
    <>
      <h1>test</h1>
      <div className="card">
        <p>prueba</p>
        <Lista listado={listaPersonas}/>
      </div>
    </>
  )
}

export default App
