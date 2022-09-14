import { Product } from "./interfaceProducts"
export interface StarProducts {
    favorite:boolean
    id:string
    producto:Product
}

export interface Images {
    default:string
    img1?:string
    img2?:string
    img3?:string
    img4?:string
    img5?:string
    img6?:string
}