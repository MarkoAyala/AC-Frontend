import { StockInterface } from "./interfaceProducts"
export interface CreateStock{
    name:string
    stock:StockInterface
}
export interface Stock{
    _id:string
    name:string
    stock:StockInterface
}