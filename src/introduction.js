import { createContext, useContext } from "react";
// import Contenido from "./components/Contenido";

/** CONTEXT */
// es una forma que tenemos para pasar props
// en un arbol de componentes
// de arriba hacia abajo
// sin necesidad de pasar por los componentes intermedios

/// NO se utiliza en reemplazo de redux

// USO ESPECIFICO:
// se almacenan props en un contexto
// y luego componentes a lo largo de la app
// pueden sacar esas props

/** Ejemplo de creación de un contexto con un valor por defecto (podria ser [], {}, etc) */
const DefaultContext = createContext("default value"); // default value sera el seleccionado si no creamos un <Provider>

/** PROVIDER: es el encargado de pasar el contexto hacia abajo, a los componentes hijos */
const DefaultProvider = ({ children }) => {
  return (
    <DefaultContext.Provider value="nuevo valor seteado">
      {children}
    </DefaultContext.Provider>
  );
};

/** Componente hijo: sera el que va a acceder a las props del contexto */
const Contenido = () => {
  const ctx = useContext(DefaultContext);
  return <div>{ctx}</div>;
};

const App = () => {
  return (
    <DefaultProvider>
      <Contenido />
    </DefaultProvider>
  );
};

export default App;
