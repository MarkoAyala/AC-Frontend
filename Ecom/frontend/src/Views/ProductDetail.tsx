import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// ============= IMPORT UTILITIES ======== //
import { getProductById } from "../app/Utils/getProductById";
function ProductDetail(){
    const {_id} = useParams();
    useEffect(()=>{
        if(_id){
            getProductById(_id).then((res)=>console.log(res))
        }
    },[])
    return (
        <div>hola</div>
    )
}

export default ProductDetail