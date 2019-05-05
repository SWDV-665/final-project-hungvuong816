import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Photo } from '../contact/photo';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { EmailComposer } from '@ionic-native/email-composer';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public date: string = new Date().toISOString();
  public temp: string;

  constructor(public navCtrl: NavController, private camera: Camera,public dataService: GroceriesServiceProvider,public alertCtrl: AlertController,private callNumber: CallNumber,private sms: SMS,private emailComposer: EmailComposer) {
  }
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.dataService.photos.splice(0,0,new Photo('data:image/jpeg;base64,' + imageData,0,this.dataService.descriptions[0],[]));
 
    }, (err) => {
     // Handle error
    });
   
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
     this.dataService.photos.splice(0,0,new Photo('data:image/jpeg;base64,' + imageData,0,this.dataService.descriptions[0],[]));
      
    }, (err) => {
     // Handle error
    });
   
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

  addComment(photo,temp){
    photo.comment.push(temp);
    this.resetComment();
  }

  makeCall(){
    this.callNumber.callNumber("4695434949", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  resetComment(){
    this.temp = "";
  }

  sendSMS(){
    this.sms.send(this.dataService.phone_number, '');
  }

  sendEmail(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: this.dataService.email_address,
       cc: '',
       bcc: [],
       attachments: [
         'file://img/logo.png',
         'res://icon.png',
         'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
         'file://README.pdf'
       ],
       subject: 'Let me know your thought',
       body: 'Welcome to Ionic Final Project SWDV665',
       isHtml: true
     }
     
     // Send a text message using default options
     this.emailComposer.open(email);
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
            console.log(this.dataService.descriptions, item.description);
            this.dataService.descriptions.push(item.description);
            console.log(this.dataService.descriptions);

          }
        }
      ]
      
    });
    prompt.present();
    
  }

  showAddCommentPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Comment',
      message: "Please enter comment",
      inputs: [
        {
          name: 'author',
          placeholder: 'Author'
        },
        {
          name: 'comment',
          placeholder: 'Comment'
        },
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
            console.log('Saved clicked',this.dataService.comments);
            this.dataService.comments.push(item);
          }
        }
      ]
      
    });
    prompt.present();
    
  }




}


