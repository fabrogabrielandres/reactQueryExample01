import "./App.css";
import { UseRamdomNumber } from "./hooks/UseRamdomNumber";


export const App = () => {

  const query = UseRamdomNumber();
 

  return (
    <>
      {query.isFetching ? <h1>Cargando....</h1> : <h1>Number Ramdom is :{query.data}</h1>}
      {!query.isLoading && query.isError &&  <h1>"error loading"</h1> } 
    </>
  );
};
