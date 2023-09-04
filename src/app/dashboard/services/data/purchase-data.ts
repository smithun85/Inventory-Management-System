import { PURCHASE_LIST, PURCHASE_RETURN } from "../../Models/purchase.model"

export let purchase_List:PURCHASE_LIST[] = [
    {
        id:1,
       invoice:'s-0001' ,
       date:'22 oct, 2022',
       supplier:'Ram',
       mobile:'9875414212',
       totalAmount:'1000000',
       warehouse:'Warehouse One',
       discount:'0.00',
       payable:'100000',
       paid:'100000',
       due:'0.00'
    },
    {
        id:2,
        invoice:'s-0009' ,
        date:'22 oct, 2022',
        supplier:'Bam',
        mobile:'9875414212',
        totalAmount:'1000000',
       warehouse:'Warehouse One',
       discount:'0.00',
       payable:'100000',
       paid:'100000',
       due:'0.00'
     },
     {
        id:3,
        invoice:'s-0005' ,
        date:'22 oct, 2022',
        supplier:'Sam',
        mobile:'9875414212',
        totalAmount:'1000000',
        warehouse:'Warehouse One',
        discount:'0.00',
        payable:'100000',
        paid:'100000',
        due:'0.00'
     },
     {
        id:4,
        invoice:'s-0003' ,
        date:'22 oct, 2022',
        supplier:'Kam',
        mobile:'9875414212',
        totalAmount:'1000000',
        warehouse:'Warehouse One',
        discount:'0.00',
        payable:'100000',
        paid:'100000',
        due:'0.00'
     }
];


export let purchase_Return:PURCHASE_RETURN[] = [
    {
        id:1,
       invoice:'s-0001' ,
       date:'22 oct, 2022',
       supplier:'Ram',
       mobile:'9875414212',
       totalAmount:'1000000',
       warehouse:'Warehouse One',
       lessed:'0.00',
       receivable:'100000',
       received:'100000',
       due:'0.00'
    },
    {
        id:2,
        invoice:'s-0009' ,
        date:'22 oct, 2022',
        supplier:'Bam',
        mobile:'9875414212',
        totalAmount:'1000000',
       warehouse:'Warehouse One',
       lessed:'0.00',
       receivable:'100000',
       received:'100000',
       due:'0.00'
     },
     {
        id:3,
        invoice:'s-0005' ,
        date:'22 oct, 2022',
        supplier:'Sam',
        mobile:'9875414212',
        totalAmount:'1000000',
        warehouse:'Warehouse One',
        lessed:'0.00',
       receivable:'100000',
       received:'100000',
       due:'0.00'
     },
     {
        id:4,
        invoice:'s-0003' ,
        date:'22 oct, 2022',
        supplier:'Kam',
        mobile:'9875414212',
        totalAmount:'1000000',
        warehouse:'Warehouse One',
        lessed:'0.00',
        receivable:'100000',
        received:'100000',
        due:'0.00'
     }
]