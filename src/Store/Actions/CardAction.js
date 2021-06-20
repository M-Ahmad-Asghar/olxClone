import { useState, useEffect } from "react";

// export const cardImage = () =>{
export const cardImage = (data) => async(dispatch, previouState) => {
    const [productAll, setproductAll] = useState([])
    let res = await fetch(`https://fakestoreapi.com/products/`);
    setproductAll(await res.json())
    let prArr = []
    
    console.log("res", productAll);
    dispatch({
        type: "CARD_IMAGE",
        payload:productAll,
    })
    
 return [res]     
}
