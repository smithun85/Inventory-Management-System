import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CUSTOMER } from '../Models/customer.model';
import { customers } from './data/customer-data';


@Injectable({providedIn:'root'})

export class CustomerApi{
    getCustomer():Observable<CUSTOMER[]>{
        return new Observable( (observer)=>{
            observer.next(customers)
        });
    };
    //Post the customers data
    postcustomerData(customerFormData:any):Observable<any>{
        return new Observable( observer=>{
            observer.next(customers.push({...customerFormData, id:Math.floor(Math.random()*100+1)}))
        })
    };

    //Update the customerAll data
    updatecustomersData(customerFormData:any, id:number):Observable<any>{        
        const customerIndex = customers.findIndex( (data)=>data.id==id)
        
    if(customerIndex !== -1){
        console.log('data');
       customers[customerIndex] = customerFormData;
      return of( customers[customerIndex])
    }
    return of(null)
    }
}