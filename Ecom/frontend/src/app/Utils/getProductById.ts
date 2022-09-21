import axios from "axios";
export const getProductById = async (id:string) => {
    try{
        let post = await axios.get(`/product/${id}`);
        return post.data;
    }catch(err){
        console.log(`Error en getProductById utils: ${err}`);
    }
}