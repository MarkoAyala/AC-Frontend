import axios from "axios";


export const deleteStock = async (id:string) => {
    try{
        let deleteStok = await axios.delete(`/stock?_id=${id}`);
        return deleteStok.data;
    }catch(err){
        console.log(`Error en postStock utils :${err}`);
    }
}
