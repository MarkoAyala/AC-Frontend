import axios from "axios";
import { Stock } from "../Interfaces/interfaceStock";

export const stockTemplate:Stock = {
    _id:"",
    name:"",
    stock:{
        red:{
            code:"",
            stock_red:0,
            xs:0,
            s:0,
            m:0,
            l:0,
            xl:0,
            xxl:0
        },
        yellow:{
            code:"",
            stock_yellow:0,
            xs:0,
            s:0,
            m:0,
            l:0,
            xl:0,
            xxl:0
        },
        all:0
    }
}

export const editStock = async (obj:any) => {
    try{
        let post = await axios.put('/stock',obj);
        return post.data;
    }catch(err){
        console.log(`Error en editStock utils: ${err}`);
    }
}