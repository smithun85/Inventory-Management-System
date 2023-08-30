import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SUPPLIER } from '../models/supplier.model';
import { suppliers } from './data/supplier-data';

@Injectable({providedIn:'root'})

export class SupplierApi{
    getsupplier():Observable<SUPPLIER[]>{
        return new Observable( (observer)=>{
            observer.next(suppliers)
        });
    };
    //Post the suppliers data
    postsupplierData(supplierFormData:any):Observable<any>{
        return new Observable( observer=>{
            observer.next(suppliers.push({...supplierFormData, id:Math.floor(Math.random()*100+1)}))
        })
    };

    //Update the suppliers data
    updatesuppliersData(supplierFormData:any, id:number):Observable<any>{   
        console.log(supplierFormData);     
        const supplierIndex = suppliers.findIndex( (data)=>data.id==id)       
    if(supplierIndex !== -1){
        console.log('data');
       suppliers[supplierIndex] = supplierFormData;
      return of( suppliers[supplierIndex])
    }
    return of(null)
    }
}