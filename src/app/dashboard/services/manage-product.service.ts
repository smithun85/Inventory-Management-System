import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BRANDS, CATEGORY, PRODUCTS, UNITS } from '../models/manage-product.models';
import { brands, categories, products, units } from './data/manage-product-data';


@Injectable({providedIn:'root'})

export class ManageProductApi{

    getCategories():Observable<CATEGORY[]>{
        return of(categories)
    };
    getBrands():Observable<BRANDS[]>{
        return new Observable( (observer)=>{
            observer.next(brands)
        });
    };

    getUnits():Observable<UNITS[]>{
        return of(units)
    };

    getProducts():Observable<PRODUCTS[]>{
        return of(products)
    };

    // CATEGORY:
    //Post the categories data
    postCategoriesData(categoriesFormData:any):Observable<any>{
        return new Observable( observer=>{
            observer.next(categories.push({...categoriesFormData, id:Math.floor(Math.random()*100+1)}))
        })
    };
    //Update the categories data
    updateCategoriesData(categoriesFormData:CATEGORY, id:number):Observable<any>{        
        const categoriesIndex =  categories.findIndex( (data)=>data.id==id)        
    if(categoriesIndex !== -1){
        console.log('data');
        categories[categoriesIndex] = categoriesFormData;
      return of( categories[categoriesIndex])
    }
    return of(null)
    };
    // Delete the Categaries id:
 deleteCategoriesData(id:number):Observable<boolean>{
    const categoriesIndex =  categories.findIndex( (data)=> data.id === id)
    if(categoriesIndex !== -1){
        categories.splice(categoriesIndex,1)
       return of(true)
    }
    return of(false)
     };

         // BRANDS:
    //Post the categories data
    postBrandsData(brandsFormData:any):Observable<any>{
        return new Observable( observer=>{
            observer.next(brands.push({...brandsFormData, id:Math.floor(Math.random()*100+1)}))
        })
    };
    //Update the brands data
    updateBrandsData(brandsFormData:any, id:number):Observable<any>{        
        const brandsIndex =  brands.findIndex( (data)=>data.id==id)        
    if(brandsIndex !== -1){
        console.log('data');
        brands[brandsIndex] = brandsFormData;
      return of( brands[brandsIndex])
    }
    return of(null)
    };
    // Delete the Categaries id:
 deleteBrandsData(id:number):Observable<boolean>{
    const brandsIndex =  brands.findIndex( (data)=> data.id === id)
    if(brandsIndex !== -1){
        brands.splice(brandsIndex,1)
       return of(true)
    }
    return of(false)
     };

         // UNITS:
    //Post the units data
    postUnitsData(unitsFormData:any):Observable<any>{
        return new Observable( observer=>{
            observer.next(units.push({...unitsFormData, id:Math.floor(Math.random()*100+1)}))
        })
    };
    //Update the units data
    updateUnitsData(unitsFormData:any, id:number):Observable<any>{        
        const unitsIndex =  units.findIndex( (data)=>data.id==id)        
    if(unitsIndex !== -1){
        console.log('data');
        units[unitsIndex] = unitsFormData;
      return of( units[unitsIndex])
    }
    return of(null)
    };
    // Delete the Categaries id:
 deleteUnitsData(id:number):Observable<boolean>{
    const unitsIndex =  units.findIndex( (data)=> data.id === id)
    if(unitsIndex !== -1){
        units.splice(unitsIndex,1)
       return of(true)
    }
    return of(false)
     };

         // PRODUCTS:
    //Post the products data
    postProductsData(productsFormData:any):Observable<any>{
        return new Observable( observer=>{
            observer.next(products.push({...productsFormData, id:Math.floor(Math.random()*100+1)}))
        })
    };
    //Update the products data
    updateProductsData(productsFormData:any, id:number):Observable<any>{        
        const productsIndex =  products.findIndex( (data)=>data.id==id)        
    if(productsIndex !== -1){
        console.log('data');
        products[productsIndex] = productsFormData;
      return of( products[productsIndex])
    }
    return of(null)
    };

}