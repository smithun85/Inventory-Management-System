import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { chart } from './data/chartData';
import { products } from './data/productData';
import { allSales } from './data/allSellsData';

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
    }
}