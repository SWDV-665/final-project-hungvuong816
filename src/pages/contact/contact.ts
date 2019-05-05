import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { SMS } from '@ionic-native/sms';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  title : "Contact Page";
  

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController,public dataService: GroceriesServiceProvider,private sms: SMS,private emailComposer: EmailComposer) {

  }

  sendEmail(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: 'hungvuong816@gmai.com',
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

  sendSMS(){
    this.sms.send("4693589713", '');
  }

}



