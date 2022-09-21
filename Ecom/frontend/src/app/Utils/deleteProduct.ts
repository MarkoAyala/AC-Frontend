import axios from "axios";
export const deleteProducts = async (obj:any) => {
    try{
        console.log(obj)
        let deleteProducts = await axios.put("/product", obj);
        console.log(deleteProducts.data)
        return deleteProducts.data;
    }catch(err){
        console.log(`Error en deleteProduct utils :${err}`);
    }
}
