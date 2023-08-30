import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { salesApi } from './services/dashboard-sales.service';
import { CartModel } from './models/cart.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  // Card-1:
  cart:CartModel[] = [];
  cartBottom:CartModel[] = [];
   //Graph:
   chart: any = [];
   chartData:any  = []
    x_axis:any = [];
    y_axis:any = [];

    //table:
    public product:any[] = [];



ngOnInit(): void {
  this.createChart();
  this.createTable();
  this.getCart();
  this.getCartBottom();
};
constructor(private salesApi:salesApi){}

getCart(){
  this.salesApi.getCarts().subscribe( item=>{
    // console.log(item);
    this.cart = item
  })
};

getCartBottom(){
  this.salesApi.getCartsBottom().subscribe( item=>{
    console.log(item);
    this.cartBottom = item
  })
}

createChart(){
  this.salesApi.getGraph().subscribe( chart=>{
    // console.log(chart)
    this.chartData = chart.data;
    
  })
//  console.log( this.chartData)
 let dataArrays:any = {};
 let label:any[] = [];
 let colors = ['red', 'blue','purple','pink'];
 this.chartData.map(((item:any)=>{
  this.x_axis.push(item.date)
  label = Object.keys(item.reports);

  for (let key in item.reports) {
    if (!dataArrays[key]) {
        dataArrays[key] = [];
    }
    dataArrays[key].push(item.reports[key]);
}
 }))
//  console.log(dataArrays)
//  console.log(Object.values(dataArrays))
//  console.log(this.x_axis)
//  console.log('y:',this.y_axis)
//  console.log('label',label)
 
// set Y-axis
Object.values(dataArrays).map((item:any,index:number)=>{
  this.y_axis.push({
    data:item,
    label:label[index],
    backgroundColor:colors[index],
    // borderWidth: 3,
  })
})



  this.chart = new Chart('canvas', {
    type: 'bar',
    data: {
      labels: this.x_axis,  //dynamic data for x-axis label
      // labels:['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
      // '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
      datasets: this.y_axis
      // datasets: [{
      //   label: "Sales",
      //   data: ['467','576', '572', '79', '92',
      //        '574', '573', '576'],
      //   backgroundColor: 'blue'
      // },
      // {
      //   label: "Profit",
      //   data: ['542', '542', '536', '327', '17',
      //          '0.00', '538', '541'],
      //   backgroundColor: 'limegreen'
      // }  ]
    },
    options: {
      aspectRatio:2,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      animation: false,
      plugins: {
        legend: {
          display: true
        },
        tooltip: {
          enabled: true
        }
      },
    },
  });
};

createTable(){
  this.salesApi.getTable().subscribe( (item:any)=>{
    console.log(item)
    this.product = item.product
  });
}

}