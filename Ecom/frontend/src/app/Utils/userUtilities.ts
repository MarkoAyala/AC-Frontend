import axios from "axios"
import { User } from "../Interfaces/interfaceUser"
import { UserFavorite } from "../Interfaces/interfaceUser"
export const userTemplate: User = {
    _id:"",
    firstName:"",
    lastName:"",
    nickname:"",
    email:"",
    picture:"",
    role:0,
    country:"",
    favorites:[],
    shoppingCart:[]
}

export const userFavoriteTemplate = {
    _id:"",
    firstName:"",
    lastName:"",
    nickname:"",
    email:"",
    picture:"",
    role:0,
    country:"",
    shoppingCart:[],
    favorites:[]
}

export const editUser = async(obj:UserFavorite) => {
    try {
        let post = await axios.put('/user',obj);
        return post.data;
    }catch(err){
        console.log('Error en editUser utils:'+err);
    }
}