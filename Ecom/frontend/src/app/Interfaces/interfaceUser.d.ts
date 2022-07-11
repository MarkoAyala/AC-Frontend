import { Product } from "./interfaceProducts"
export interface User {
    _id:string,
    firstName:string,
    lastName:string,
    nickname:string,
    email:string,
    picture:string,
    role:number,
    country:string,
    shoppingCart?:Array<Product>;
}