import { useEffect } from "react";

const Fakeapi = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((temp) => console.log(temp))

      .catch((e) => console.log("error"))
  }, [])

  return (<>
  </>)
}
export default Fakeapi;