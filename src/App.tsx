import { useEffect, useState } from "react"
import { findProducts } from "./data"


function App() {

  

  //FORMA ERRADA
  /**let productId = 1
  console.log("Passou no app")
  let prod = findProducts(productId);


  function handleClick() {
    console.log("Passou no handle")
    productId = 2
    prod = findProducts(productId);

  }**/


  /**
   * FORMA ERRADA 2 
   * console.log("Passou no app")

  const [productId, setProductId] = useState(1);
  const [prod, setProd] = useState(findProducts(productId));

  function handleClick() {
    console.log("Passou no handle")
    setProductId(2);
    setProd(findProducts(productId));
  }**/


  console.log("Passou no app")

  const [productId, setProductId] = useState(1);
  const [prod, setProd] = useState<any>();

  useEffect(() => {
    console.log("passou no useEffect");
    setProd(findProducts(productId))
  }, [productId])

  function handleClick() {
    console.log("Passou no handle")
    setProductId(2);
  }
 
  return (
    <>
      Produto
      <h2>{prod?.name}</h2>
      <p>{prod?.price}</p>
      <br />
      <button onClick={handleClick}>Mudar para produto {prod?.id}</button>
    </>
  )
}

export default App
