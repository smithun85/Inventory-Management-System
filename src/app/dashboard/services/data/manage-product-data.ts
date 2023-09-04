import { BRANDS, CATEGORY, PRODUCTS, UNITS } from "../../Models/manage-product.models";

export let categories:CATEGORY[] = [
    {
        id:1,
        serialNo:'1',
        name:'Bsample',
        products:'23'
    },
    {
        id:2,
        serialNo:'2',
        name:'Asample',
        products:'21'
    },
    {
        id:3,
        serialNo:'3',
        name:'Abssample',
        products:'12'
    },
    {
        id:4,
        serialNo:'4',
        name:'Csample',
        products:'52'
    }
];

export let brands:BRANDS[] = [
    {
        id:1,
        serialNo:'1',
        name:'Bcanon',
        products:'2'
    },
    {
        id:2,
        serialNo:'2',
        name:'Acanon',
        products:'2'
    },
    {
        id:3,
        serialNo:'3',
        name:'Dcanon',
        products:'2'
    },
    {
        id:4,
        serialNo:'4',
        name:'Dcasanon',
        products:'2'
    },
    
]

export let units:UNITS[] = [
    {
        id:1,
        serialNo:'1',
        name:'bags',
        products:'82'
    },
    {
        id:2,
        serialNo:'2',
        name:'bags',
        products:'62'
    },
    {
        id:3,
        serialNo:'3',
        name:'pckts',
        products:'12'
    },
    {
        id:4,
        serialNo:'4',
        name:'bags',
        products:'21'
    },
]

export let products:PRODUCTS[] = [
    {
        id:1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2qqeMHmWoOGEr4zYQuHUYFkJ_rbpQIx-kQ&usqp=CAU',
        name:'Product-1',
        SKU:'SK133',
        category:'Foot Wear',
        brand:'Nike',
        stock:'0',
        total_sale:'0',
        altert_qnty:'10',
        unit:'pcs'
    },
    {
        id:2,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2qqeMHmWoOGEr4zYQuHUYFkJ_rbpQIx-kQ&usqp=CAU',
        name:'Product-5',
        SKU:'ASK133',
        category:' Wear',
        brand:'Adidas',
        stock:'10',
        total_sale:'7',
        altert_qnty:'10',
        unit:'pcs'
    },
    {
        id:3,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2qqeMHmWoOGEr4zYQuHUYFkJ_rbpQIx-kQ&usqp=CAU',
        name:'tProduct-1',
        SKU:'SK133',
        category:'Foot Wear',
        brand:'Nike',
        stock:'0',
        total_sale:'0',
        altert_qnty:'10',
        unit:'pcs'
    },
    {
        id:2,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2qqeMHmWoOGEr4zYQuHUYFkJ_rbpQIx-kQ&usqp=CAU',
        name:'Product-1',
        SKU:'SK133',
        category:'Foot Wear',
        brand:'Nike',
        stock:'0',
        total_sale:'0',
        altert_qnty:'10',
        unit:'pcs'
    },
    {
        id:4,
        image:'https://images.unsplash.com/photo-1533543217756-e975139f45c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7cecfb5e1f7f9e22459e90bd484e5d9a&auto=format&fit=crop&w=750&q=80',
        name:'Product-1',
        SKU:'SK133',
        category:'cloths',
        brand:'Peater England',
        stock:'0',
        total_sale:'0',
        altert_qnty:'10',
        unit:'pcs'
    }
]