import { Produto } from "./Produto";
import { useLocation } from "react-router-dom";

export default function Login(){
  const location = useLocation();
  //location é um objeto que contém o pathname e o state
  const username = location.state.username || '';
  //se o state.username não existir, username recebe vazio

    return (
    <>
      <h1> Bem-Vindo, {username} </h1>
      <Produto
        nome={"Notebook"} 
        descricao={"Notebook Dell"} 
        qtde={10} 
        preco={5000.00}/>
      <Produto
       nome={"Celular"} 
       descricao={"Samsung S21"} 
       qtde={10} 
       preco={5000.00}
      /> 
    </>
    )
}