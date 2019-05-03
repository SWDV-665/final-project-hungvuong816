import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Photo } from '../contact/photo';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';


/**
 * Generated class for the PicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-picture',
  templateUrl: 'picture.html',
})
export class PicturePage {

 
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private camera: Camera,public dataService: GroceriesServiceProvider,public alertCtrl: AlertController) {
  }


  takePhoto(){
    this.showAddDespPrompt();
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
    
     this.dataService.photos.splice(0,0,new Photo('data:image/jpeg;base64,' + imageData,0,this.dataService.descriptions[0],["tyty","hungco"]));



      }, (err) => {
     // Handle error
    });
    console.log(this.dataService.descriptions);
    console.log(this.dataService.photos);

   
  }

  getPhoto(){
    this.showAddDespPrompt();
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }
  
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
 
     this.dataService.photos.splice(0,0,new Photo('data:image/jpeg;base64,' + imageData,0,this.dataService.descriptions[0],new Array("Mary","Tom","Jack","Jill")));
      
    }, (err) => {
     // Handle error
    });
    console.log(  this.dataService.photos);
    
   
  }

  cropPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetWidth: 400,
      targetHeight: 400 
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.dataService.photos.splice(0,0,new Photo('data:image/jpeg;base64,' + imageData,0,this.dataService.descriptions[0],[]));
        }, (err) => {
     // Handle error
    });
  }

  
  deletePhoto(photo){
    this.dataService.photos.splice(this.dataService.photos.indexOf(photo),1);
  }

  likePhoto(photo){
    photo.likes++;
  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Groceries Cart',
      message: "Please enter the item to your cart",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.dataService.descriptions.splice(0,0,item);
          }
        }
      ]
      
    });
    prompt.present();
    
  }

  showAddDespPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Description',
      message: "Please enter description for the items",
      inputs: [
        {
          name: 'description',
          placeholder: 'Description'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.dataService.descriptions.push(item.description);
            console.log(this.dataService.descriptions);

          }
        }
      ]
      
    });
    prompt.present();
    
  }








}

