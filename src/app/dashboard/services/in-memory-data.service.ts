import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { CUSTOMER } from '../Models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const  customers:CUSTOMER[] = [
      {
          id:1,
          name:'Ajay',
          address:'123, RamNamgar,ahmedabad',
          mobile:9876543210,
          email:'ajay@gmail.com',
          receivable:'80',
          payable:'108',
      },
      {
          id:2,
          name:'wjay',
          address:'123, RamNamgar,ahmedabad',
          mobile:3876543210,
          email:'wjay@gmail.com',
          receivable:'270',
          payable:'106',
      },
      {
          id:3,
          name:'sajay',
          address:'123, RamNamgar,ahmedabad',
          mobile:5876543210,
          email:'sajay@gmail.com',
          receivable:'20',
          payable:'10',
      },
      {
          id:4,
          name:'kjay',
          address:'123, RamNamgar,ahmedabad',
          mobile:8876543210,
          email:'kjay@gmail.com',
          receivable:'2',
          payable:'13',
      },
  ];
  return {customers}
  }

  getId(customers:CUSTOMER[]) : number {
    return customers.length > 0 ? Math.max(...customers.map( customer=>customer.id)) + 1 : 11;
  }

}
