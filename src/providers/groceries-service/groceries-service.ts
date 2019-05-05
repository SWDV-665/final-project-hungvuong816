import { Injectable } from '@angular/core';

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {

  items = [
    {
      name: "Milk",
      quantity: 1
    },
    {
      name: "Steak",
      quantity: 3
    },
    {
      name: "Banana",
      quantity: 2
    },
    {
      name: "Salt",
      quantity: 5
    },

  ];

  public profilePhoto =  "../../assets/imgs/hungvuong.jpg";

  public photos = [];

  public descriptions = ["hello","bello","NeiHao","Ola"];

  public comments = [];

  public user_name : string = "";
  
  public user_password: string = "";

  public phone_number: string;

  public email_address: string;

  public avatar : any;

  public photo_temp : any;

  public desp_temp: any;




  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }

  getItem(){
    return this.items;
  }

  removeItem(index){
    this.items.splice(index,1); /* splice index , number of item want to remove */

  }

  addItem(item){
    this.items.push(item);
  }

  editItem(item,index){
    this.items[index] = item;
  }

  editQuantity(item,index){
    this.items[index].quantity = item;
  }








}
