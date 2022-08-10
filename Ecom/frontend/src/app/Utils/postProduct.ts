import axios from "axios";

export const postProduct = async (obj:any) => {
    try{
        let post = await axios.post('/product', obj)
        return post.data;
    }catch(err){
        console.log(`Error en postProduct utils :${err}`);
    }
}