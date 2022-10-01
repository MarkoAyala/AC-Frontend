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

export interface Compra {
    name:string
    email:string
    description:string
    picture:string
    price:number
    nombre_comprador:string
    email_comprador:string
    codigo_de_area:string
    celular:string
    dni:string
    provincia:string
    calle:string
    numeracion:string
    codigo_postal:string
}

export interface RenderColor {
    [index:string]:{
        xs:number
        s:number
        [index:`stock_${string}`]:number
        m:number
        l:number
        xl:number
        xxl:number
    }
}