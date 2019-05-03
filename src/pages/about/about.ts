import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  constructor(public navCtrl: NavController, public dataService: GroceriesServiceProvider) {

  }

  login(){
    if (this.dataService.user_name  == ""){
      alert("Please enter your username");
    } else
    if (this.dataService.user_password == ""){
      alert("Please Enter your userpassword");
    } else {
      alert ("You have successfully registered. Please check other tabs for interaction");
    }
  }








}
