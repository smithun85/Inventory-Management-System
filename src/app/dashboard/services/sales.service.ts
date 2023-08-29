import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { chart } from './data/salesData/chartData';
import { products } from './data/salesData/productData';
import { allSales } from './data/salesData/allSellsData';
// import { CartModel } from '../models/cart.model';
import { carts, carts_Bottom } from './data/salesData/carts';

@Injectable({providedIn:'root'})

export class salesApi{
    getGraph():Observable<any>{
        return new Observable( (observer)=>{
            observer.next(chart)
        });
    };

    getTable():Observable<any>{
        return of(products)
    };

    getAllSales():Observable<any>{
        return of(allSales)
    };

    getCarts():Observable<any>{
        return of(carts)
    };

    getCartsBottom():Observable<any>{
        return of(carts_Bottom)
    };

    //Post the salesAll data
    postSalesData(salesFormData:any):Observable<any>{
        return new Observable( observer=>{
            observer.next(allSales.salesList.push({...salesFormData, id:Math.floor(Math.random()*100+1)}))
        })
    };

    //Update the salesAll data
    updateSalessData(salesFormData:any, id:number):Observable<any>{
        
        const salesIndex =  allSales.salesList.findIndex( (data)=>data.id==id)
        
    if(salesIndex !== -1){
        console.log('data');
        allSales.salesList[salesIndex] = salesFormData;
      return of( allSales.salesList[salesIndex])
    }
    return of(null)
    }
}