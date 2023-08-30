import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { purchase_List, purchase_Return } from './data/purchase-data';
import { PURCHASE_LIST, PURCHASE_RETURN } from '../models/purchase.model';
@Injectable({providedIn:'root'})

export class PurchaseApi{

    //All Purchases:
    getAllPurchaseList():Observable<PURCHASE_LIST[]>{
        return of(purchase_List)
    };

    //Post the purchaseListAll data
    postpurchaseListData(purchaseListFormData:any):Observable<any>{
        return new Observable( observer=>{
            observer.next(purchase_List.push({...purchaseListFormData, id:Math.floor(Math.random()*100+1)}))
        })
    };

    //Update the purchaseListAll data
    updatepurchaseListsData(purchaseListFormData:any, id:number):Observable<any>{
        console.log(purchaseListFormData);
        const purchaseListIndex =  purchase_List.findIndex( (data)=>data.id==id)
        
    if(purchaseListIndex !== -1){
        console.log('data');
        purchase_List[purchaseListIndex] = purchaseListFormData;
      return of( purchase_List[purchaseListIndex])
    }
    return of(null)
    };


     //purchaseList_Return:
        getpurchaseListReturn():Observable<PURCHASE_RETURN[]>{
            return of(purchase_Return)
        };
        //Update the purchaseReturn data
        updatepurchaseListReturnData(purchaseListFormData:any, id:number):Observable<any>{
            console.log(purchaseListFormData);
            const purchaseListIndex =  purchase_Return.findIndex( (data)=>data.id==id)
            
        if(purchaseListIndex !== -1){
            console.log('data');
            purchase_Return[purchaseListIndex] = purchaseListFormData;
          return of( purchase_Return[purchaseListIndex])
        }
        return of(null)
        }
}