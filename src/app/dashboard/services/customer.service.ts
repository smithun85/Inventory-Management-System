import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CUSTOMER } from '../Models/customer.model';
import { customers } from './data/customer-data';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';  //Error handling

@Injectable({providedIn:'root'})

export class CustomerApi{

    private customerUrl= 'api/customers' // URL to web api

    constructor(
        private http: HttpClient,
        private notificationService:NotificationService,
    ){}

    getCustomer():Observable<CUSTOMER[]>{
        return new Observable( (observer)=>{
            observer.next(customers)
            this.notificationService.add('Successfully fetch the customer data')
            setTimeout( ()=>{
                this.notificationService.clear();
            },5000)
        });
    };

   // // Dummy API:
    // // message
    // private log(message:string){
    //     this.notificationService.add(`Customer_Service: ${message}`)
    //     setTimeout( ()=>{
    //         this.notificationService.clear();
    //     },5000)
    // };
    // // Error handling:
    // private handleError<T>(operation = 'operation', result:T){
    //     return (error:any):Observable<T> => {
    //         console.error(error);
    //         this.log(`${operation} failed: ${error.message} `);
    //         return of(result as T)
    //     }
    // };
    // getCustomer():Observable<CUSTOMER[]>{
    //     return this.http.get<CUSTOMER[]>(this.customerUrl)
    //     .pipe(
    //         tap(_ => this.log('fetched data')),
    //         catchError(this.handleError<CUSTOMER[]>('getCustomers',[]))
    //     ); 
        
    // };


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