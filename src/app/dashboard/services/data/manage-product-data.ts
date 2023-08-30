import { BRANDS, CATEGORY, PRODUCTS, UNITS } from "../../models/manage-product.models";

export let categories:CATEGORY[] = [
    {
        id:1,
        serialNo:'1',
        name:'Bsample',
        products:'23'
    },
    {
        id:1,
        serialNo:'51',
        name:'Asample',
        products:'21'
    },
    {
        id:1,
        serialNo:'51',
        name:'sample',
        products:'12'
    },
    {
        id:1,
        serialNo:'15',
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
        name:'canon',
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
        name:'Pckts',
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
        image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…RAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP//Z',
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
        image:'',
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
        image:'',
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
        image:'',
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
        image:'',
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