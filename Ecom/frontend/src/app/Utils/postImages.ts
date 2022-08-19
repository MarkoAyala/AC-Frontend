import axios from "axios";

export const postImages = async (obj:any) => {
    try{
        let post = await axios.put('/images', obj);
        return post.data;
    }catch(err){
        console.log(`Error en postImages utils: ${err}`);
    }
}