import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { chart } from './data/dashboardData/chartData';
import { products } from './data/dashboardData/productData';
import { allSales, salesReturnList } from './data/SalesData';
// import { CartModel } from '../models/cart.model';
import { carts, carts_Bottom } from './data/dashboardData/carts';
import { SALES_RETURN } from '../models/sales.model';

@Injectable({providedIn:'root'})

export class salesApi{

    // Dashboard
    getGraph():Observable<any>{
        return new Observable( (observer)=>{
            observer.next(chart)
        });
    };
    getTable():Observable<any>{
        return of(products)
    };
    getCarts():Observable<any>{
        return of(carts)
    };

    getCartsBottom():Observable<any>{
        return of(carts_Bottom)
    };





    //All Sales:
    getAllSales():Observable<any>{
        return of(allSales)
    };

    //Post the salesAll data
    postSalesData(salesFormData:any):Observable<any>{
        return new Observable( observer=>{
            observer.next(allSales.salesList.push({...salesFormData, id:Math.floor(Math.random()*100+1)}))
        })
    };

    //Update the salesAll data
    updateSalessData(salesFormData:any, id:number):Observable<any>{
        console.log(salesFormData);
        const salesIndex =  allSales.salesList.findIndex( (data)=>data.id==id)
        
    if(salesIndex !== -1){
        console.log('data');
        allSales.salesList[salesIndex] = salesFormData;
      return of( allSales.salesList[salesIndex])
    }
    return of(null)
    };


     //Sales_Return:
        getSalesReturn():Observable<SALES_RETURN[]>{
            return of(salesReturnList)
        };
        //Update the salesAll data
        updateSalesReturnData(salesFormData:any, id:number):Observable<any>{
            console.log(salesFormData);
            const salesIndex =  salesReturnList.findIndex( (data)=>data.id==id)
            
        if(salesIndex !== -1){
            console.log('data');
            salesReturnList[salesIndex] = salesFormData;
          return of( salesReturnList[salesIndex])
        }
        return of(null)
        }
}