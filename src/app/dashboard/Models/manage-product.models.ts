export interface CATEGORY {
        id:number;
        serialNo:string;
       name:string;
        products:string;
    }


export interface BRANDS {
        id:number;
        serialNo:string;
       name:string;
        products:string;
    }


export interface UNITS {
        id:number;
        serialNo:string;
       name:string;   
            products:string;
    }


export interface PRODUCTS {
        id:number;
        image:string;
       name:string;
        SKU:string;
        category:string;
        brand:string;
        stock:string;
        total_sale:string;
        altert_qnty:string;
        unit:string;
    }
