export interface Product{
    _id:string,
    name:string,
    price:number,
    stock:number,
    color:Array<String>,
    url:Array<String>,
    tags:Array<String>
}