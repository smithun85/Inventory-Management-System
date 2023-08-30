import { SALES_RETURN } from "../../models/sales.model";

export let  allSales = {
    salesList: [
        {
            id:1,
           invoice:'s-0001' ,
           date:'22 oct, 2022',
           customer:'Ram',
           mobile:'9875414212',
           warehouse:'Warehouse One',
           totalAmount:1000000,
           discount:0.00,
           receivable:100000,
           received:100000,
           due:0.00
        },
        {
            id:2,
            invoice:'s-0009' ,
            date:'22 oct, 2022',
            customer:'Bam',
            mobile:'9875414212',
            warehouse:'Warehouse One',
            totalAmount:1000000,
            discount:0.00,
            receivable:100000,
            received:100000,
            due:0.00
         },
         {
            id:3,
            invoice:'s-0005' ,
            date:'22 oct, 2022',
            customer:'Sam',
            mobile:'9875414212',
            warehouse:'Warehouse One',
            totalAmount:1000000,
            discount:0.00,
            receivable:100000,
            received:100000,
            due:0.00
         },
         {
            id:4,
            invoice:'s-0003' ,
            date:'22 oct, 2022',
            customer:'Kam',
            mobile:'9875414212',
            warehouse:'Warehouse One',
            totalAmount:1000000,
            discount:0.00,
            receivable:100000,
            received:100000,
            due:0.00
         }
    ]
};


export const salesReturnList:SALES_RETURN[] = [
   {
      id:1,
     invoice:'s-0001' ,
     date:'22 oct, 2022',
     customer:'Ram',
     mobile:'9875414212',
     warehouse:'Warehouse One',
     totalAmount:'1000000',
     discount:'0.00',
     payable:'100000',
     paid:'21',
     due:'0.00',
  },
  {
      id:2,
      invoice:'s-0009' ,
      date:'22 oct, 2022',
      customer:'Bam',
      mobile:'9875414212',
      warehouse:'Warehouse One',
      totalAmount:'1000000',
      discount:'0.00',
      payable:'100000',
      paid:'21',
      due:'0.00',
   },
   {
      id:3,
      invoice:'s-0005' ,
      date:'22 oct, 2022',
      customer:'Sam',
      mobile:'9875414212',
      warehouse:'Warehouse One',
      totalAmount:'1000000',
      discount:'0.00',
      payable:'100000',
      paid:'21',
      due:'0.00',
   },
   {
      id:4,
      invoice:'s-0003' ,
      date:'22 oct, 2022',
      customer:'Kam',
      mobile:'9875414212',
      warehouse:'Warehouse One',
      totalAmount:'1000000',
     discount:'0.00',
     payable:'100000',
     paid:'21',
     due:'0.00',
   }
]