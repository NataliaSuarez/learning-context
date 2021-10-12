import { Component, createContext } from "react";

const Context = createContext("default value");

const Provider = ({ children }) => {
  return <Context.Provider value={"otro valor"}>{children}</Context.Provider>;
};

class SimpleComponent extends Component {
  // static contextType = Context;
  render() {
    console.log(this.context);
    return <div>lala</div>;
  }
}
SimpleComponent.contextType = Context;

const App = () => {
  return (
    <Provider>
      <SimpleComponent />
      <Context.Consumer>{(valor) => <div>{valor}</div>}</Context.Consumer>
      {/* con CONSUMER podriamos acceder a los valores de varios contextos desde un mismo componente de CLASES */}
    </Provider>
  );
};

export default App;
