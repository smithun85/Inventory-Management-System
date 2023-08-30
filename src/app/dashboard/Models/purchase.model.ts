export interface PURCHASE_LIST{
    id:Number;
    invoice:string;
    date:string;
    supplier:string;
    mobile:string;
    totalAmount:string;
    warehouse:string;    
    discount:string;
    payable:string;
    paid:string;
    due:string;
};

export interface PURCHASE_RETURN{
    id:Number;
    invoice:string;
    date:string;
    supplier:string;
    mobile:string;
    totalAmount:string;
    warehouse:string;    
    lessed:string;
    receivable:string;
    received:string;
    due:string;
}