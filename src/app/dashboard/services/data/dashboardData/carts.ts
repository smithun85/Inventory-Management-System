import { CartModel } from "src/app/dashboard/models/cart.model";
export let carts:CartModel[]= [
        {
            icon:'fa-solid fa-cart-shopping',
            label:'sales',
            count:10, 
            button:"View All",
            text_color:'text-info', 
            bgcolor:'bg-info',
            border:'btn btn-outline-info'    
        },
        {
            icon:'fa-solid fa-thumbs-up',
            label:'sales Return',
            count:10 ,
            button:"View All",
            text_color:'text-warning', 
            bgcolor:'bg-warning', 
            border:'btn btn-outline-warning',          
        },
        {
            icon:'fa-solid fa-cart-shopping',
            label:'Purchases',
            count:10 ,
            button:"View All",
            text_color:'text-success', 
            bgcolor:'bg-success',
            border:'btn btn-outline-success',           
        },
        {
            icon:'fa-solid fa-users-line',
            label:'Purchases Return',
            count:10 ,
            button:"View All",
            text_color:'text-danger', 
            bgcolor:'bg-danger',
            border:'btn btn-outline-danger'          
        }
    ];


    export let carts_Bottom:CartModel[]= [
        {
            icon:'fa-solid fa-cart-shopping',
            label:'categories',
            count:8, 
            button:"View All",
            text_color:'text-white', 
            bgcolor:'bg-primary',
            border:'btn btn-outline-light', 
        },
        {
            icon:'fa-solid fa-cart-shopping',
            label:'Products',
            count:10 ,
            button:"View All",
            text_color:'text-white', 
            bgcolor:'bg-warning', 
            border:'btn btn-outline-light',          
        },
        {
            icon:'fa-solid fa-cart-shopping',
            label:'Suppliers',
            count:10 ,
            button:"View All",
            text_color:'text-white', 
            bgcolor:'bg-success',
            border:'btn btn-outline-light',           
        },
        {
            icon:'fa-solid fa-cart-shopping',
            label:'Customers',
            count:10 ,
            text_color:'text-white', 
            bgcolor:'bg-danger',
            border:'btn btn-outline-light'          
        }
    ]