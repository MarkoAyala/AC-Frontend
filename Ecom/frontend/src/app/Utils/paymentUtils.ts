import { Compra } from "../Interfaces/interfaceRandoms";
import axios from "axios";

export const Payment = async (obj:Compra) => {
    try{
        let post = await axios.post('/payment', obj);
        return post.data;
    }catch(err){
        console.log(`Error en postImages utils: ${err}`);
    }
}