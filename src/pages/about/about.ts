import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public avatar : any;

  constructor(public navCtrl: NavController, public dataService: GroceriesServiceProvider,private camera: Camera) {

  }

  login(){
    if (this.dataService.user_name  == ""){
      alert("Please enter your username");
    } else
    if (this.dataService.user_password == ""){
      alert("Please Enter your userpassword");
    } else
    if (this.dataService.email_address == ""){
      alert("Please Enter your email address");
    } else
    if (this.dataService.phone_number == ""){
      alert("Please Enter your phone number");
    } else {
      alert ("You have successfully registered. Please check other tabs for interaction");
    }
  }


  getPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }
  
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
 
     this.dataService.avatar = 'data:image/jpeg;base64,' + imageData;
      
    }, (err) => {
     // Handle error
    });

    
   
  }





}
