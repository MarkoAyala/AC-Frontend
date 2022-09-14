export interface Product{
    _id:string,
    name:string,
    price:number,
    stock:{
        name:string
        stock:Array<StockInterface>
        __v?:number
        _id:string
    },
    url:Url,
    tags:Array<String>
}

export interface Url {
    img1:string
    img2?:string
    img3?:string
    img4?:string
    img5?:string
    img6?:string
}
export interface StockInterface {
    [negro?:{
        code:string
        stock_negro:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [blanco?:{
        code:string
        stock_blanco:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [beige?:{
        code:string
        stock_beige:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [gris?:{
        code:string
        stock_gris:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [azul_francia?:{
        code:string
        stock_azul_francia:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [azul_marino?:{
        code:string
        stock_azul_marino:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [azul?:{
        code:string
        stock_azul:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [plata?:{
        code:string
        stock_plata:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [tiza?:{
        code:string
        stock_tiza:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [dorado?:{
        code:string
        stock_dorado:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [marron?:{
        code:string
        stock_marron:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [marron_havana?:{
        code:string
        stock_marron_havana:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [marron_suela?:{
        code:string
        stock_marron_suela:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [marron_cafe?:{
        code:string
        stock_marron_cafe:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [bordo?:{
        code:string
        stock_bordo:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [verde?:{
        code:string
        stock_verde:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [verde_oscuro?:{
        code:string
        stock_verde_oscuro:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [verde_claro?:{
        code:string
        stock_verde_claro:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [verde_menta?:{
        code:string
        stock_verde_menta:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [verde_oliva?:{
        code:string
        stock_verde_oliva:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [cereza?:{
        code:string
        stock_cereza:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [fucsia?:{
        code:string
        stock_fucsia:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [morado?:{
        code:string
        stock_morado:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [cobre?:{
        code:string
        stock_cobre:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [camel?:{
        code:string
        stock_camel:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [turquesa?:{
        code:string
        stock_turquesa:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [rojo?:{
        code:string
        stock_rojo:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [amarillo?:{
        code:string
        stock_amarillo:number | 0;
        xs:number | 0;
        s:number | 0;
        m:number | 0;
        l:number | 0;
        xl:number | 0;
        xxl:number | 0;
    }],
    [{all:number | 0}]
}