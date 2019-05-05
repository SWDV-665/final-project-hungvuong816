webpackJsonp([1],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_photo__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_groceries_service_groceries_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PicturePage = /** @class */ (function () {
    function PicturePage(navCtrl, toastCtrl, camera, dataService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
    }
    PicturePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.dataService.photos.splice(0, 0, new __WEBPACK_IMPORTED_MODULE_3__contact_photo__["a" /* Photo */]('data:image/jpeg;base64,' + imageData, 0, _this.dataService.descriptions[0], new Array()));
        }, function (err) {
            // Handle error
        });
        this.showAddDespPrompt();
        console.log(this.dataService.descriptions);
        console.log(this.dataService.photos);
    };
    PicturePage.prototype.getPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.dataService.photos.splice(0, 0, new __WEBPACK_IMPORTED_MODULE_3__contact_photo__["a" /* Photo */]('data:image/jpeg;base64,' + imageData, 0, _this.dataService.descriptions[0], new Array()));
        }, function (err) {
            // Handle error
        });
        this.showAddDespPrompt();
        console.log(this.dataService.photos);
    };
    PicturePage.prototype.cropPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false,
            allowEdit: true,
            targetWidth: 400,
            targetHeight: 400
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.dataService.photos.splice(0, 0, new __WEBPACK_IMPORTED_MODULE_3__contact_photo__["a" /* Photo */]('data:image/jpeg;base64,' + imageData, 0, _this.dataService.descriptions[0], []));
        }, function (err) {
            // Handle error
        });
    };
    PicturePage.prototype.deletePhoto = function (photo) {
        this.dataService.photos.splice(this.dataService.photos.indexOf(photo), 1);
    };
    PicturePage.prototype.likePhoto = function (photo) {
        photo.likes++;
    };
    PicturePage.prototype.showAddItemPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (item) {
                        console.log('Saved clicked', item);
                        _this.dataService.descriptions.splice(0, 0, item);
                    }
                }
            ]
        });
        prompt.present();
    };
    PicturePage.prototype.showAddDespPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (item) {
                        console.log('Saved clicked', item);
                        _this.dataService.descriptions.push(item.description);
                        console.log(_this.dataService.descriptions);
                    }
                }
            ]
        });
        prompt.present();
    };
    PicturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-picture',template:/*ion-inline-start:"/Users/hungvuong/FinalProject/src/pages/picture/picture.html"*/'<ion-header>\n    <ion-navbar color ="primary">\n        <ion-title>\n      Picture\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <br>\n\n  <h3>Please take a photo of your item or upload from your photo library</h3>\n\n  <br>\n\n<button ion-button full color = "primary" (click) = "takePhoto()" >Take Photo</button>\n<button ion-button full color = "secondary" (click) = "getPhoto()" >Upload From Library</button>\n<button ion-button full color = "danger" (click) = "cropPhoto()" >Crop Photo</button>\n\n<br>\n<h3>Please check the home tab for posting, liking, and contacting.</h3>\n\n\n\n'/*ion-inline-end:"/Users/hungvuong/FinalProject/src/pages/picture/picture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PicturePage);
    return PicturePage;
}());

//# sourceMappingURL=picture.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/picture/picture.module": [
		278,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Photo; });
var Photo = /** @class */ (function () {
    function Photo(src, likes, description, comment) {
        this.src = src;
        this.likes = likes;
        this.description = description;
        this.comment = comment;
    }
    return Photo;
}());

//# sourceMappingURL=photo.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* unused harmony export SlidingPage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__picture_picture__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__picture_picture__["a" /* PicturePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/hungvuong/FinalProject/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="User" tabIcon="ios-contacts"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Photo" tabIcon="camera"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/hungvuong/FinalProject/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

var SlidingPage = /** @class */ (function () {
    function SlidingPage() {
    }
    return SlidingPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_groceries_service_groceries_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, dataService, camera) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.camera = camera;
    }
    AboutPage.prototype.login = function () {
        if (this.dataService.user_name == "") {
            alert("Please enter your username");
        }
        else if (this.dataService.user_password == "") {
            alert("Please Enter your userpassword");
        }
        else if (this.dataService.email_address == "") {
            alert("Please Enter your email address");
        }
        else if (this.dataService.phone_number == "") {
            alert("Please Enter your phone number");
        }
        else {
            alert("You have successfully registered. Please check other tabs for interaction");
        }
    };
    AboutPage.prototype.getPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.dataService.avatar = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/hungvuong/FinalProject/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color ="primary">\n    <ion-title>\n      User Information\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2> Welcome to Big Heart App.<br>This project will help people living in the same community to share/donate their domestic items for the needy using the native plugin camera on our smart devices </h2>\n  <br>\n  <br>\n  <br>\n  <br>\n  <button ion-button full>Please enter your information below</button> \n \n\n      <ion-item>\n        <ion-label>User Name</ion-label>\n        <ion-input type = "text" [(ngModel)]="this.dataService.user_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>User Password</ion-label>\n        <ion-input type = "password" [(ngModel)]="this.dataService.user_password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email Address</ion-label>\n        <ion-input type = "text" [(ngModel)]="this.dataService.email_address"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Phone Number</ion-label>\n        <ion-input type = "text" [(ngModel)]="this.dataService.phone_number"></ion-input>\n      </ion-item>\n\n      <button ion-button full (click) ="getPhoto()">Upload Profile Photo</button> \n\n      <img src = "{{this.dataService.avatar}}"/>\n\n\n\n\n      \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/hungvuong/FinalProject/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_groceries_service_groceries_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, toastCtrl, alertCtrl, dataService, sms, emailComposer) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.sms = sms;
        this.emailComposer = emailComposer;
    }
    ContactPage.prototype.sendEmail = function () {
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //Now we know we can send
            }
        });
        var email = {
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
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    ContactPage.prototype.sendSMS = function () {
        this.sms.send("4693589713", '');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/hungvuong/FinalProject/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar color ="primary">\n    <ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <h2 style = "margin-left: 20px">Welcome to Big Heart App!</h2>\n  <br>\n  <p>\n    My name is Hung Vuong, i am the developer of this mobile. I hope this app will help each of us to contribute to share and donate our necessary items across the community. \n  </p>\n  <p>\n    Please reach out to me if you have any questions or concerns.\n  </p>\n  <br>\n  <ion-row class ="row">\n    <ion-col>\n        <button ion-button icon-left color = "primary" (click)= "sendSMS()">\n            <ion-icon name = "text"></ion-icon>\n        </button>\n    </ion-col>\n\n    <ion-col>\n        <button ion-button icon-left color = "secondary" (click)= "sendEmail()">\n            <ion-icon name = "mail"></ion-icon>\n        </button>\n    </ion-col>\n        \n    <ion-col>\n        <a ion-button icon-left color = "dark" href="https://github.com/hungvuong816"><ion-icon name="logo-github"></ion-icon></a>\n    </ion-col>\n  </ion-row>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/hungvuong/FinalProject/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_photo__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_groceries_service_groceries_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sms__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_email_composer__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, camera, dataService, alertCtrl, callNumber, sms, emailComposer) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.sms = sms;
        this.emailComposer = emailComposer;
        this.date = new Date().toISOString();
    }
    HomePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.dataService.photos.splice(0, 0, new __WEBPACK_IMPORTED_MODULE_3__contact_photo__["a" /* Photo */]('data:image/jpeg;base64,' + imageData, 0, _this.dataService.descriptions[0], []));
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.getPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.dataService.photos.splice(0, 0, new __WEBPACK_IMPORTED_MODULE_3__contact_photo__["a" /* Photo */]('data:image/jpeg;base64,' + imageData, 0, _this.dataService.descriptions[0], []));
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.cropPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false,
            allowEdit: true,
            targetWidth: 400,
            targetHeight: 400
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.dataService.photos.splice(0, 0, new __WEBPACK_IMPORTED_MODULE_3__contact_photo__["a" /* Photo */]('data:image/jpeg;base64,' + imageData, 0, _this.dataService.descriptions[0], []));
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.deletePhoto = function (photo) {
        this.dataService.photos.splice(this.dataService.photos.indexOf(photo), 1);
    };
    HomePage.prototype.likePhoto = function (photo) {
        photo.likes++;
    };
    HomePage.prototype.addComment = function (photo, temp) {
        photo.comment.push(temp);
    };
    HomePage.prototype.makeCall = function () {
        this.callNumber.callNumber("4695434949", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HomePage.prototype.sendSMS = function () {
        this.sms.send(this.dataService.phone_number, '');
    };
    HomePage.prototype.sendEmail = function () {
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //Now we know we can send
            }
        });
        var email = {
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
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    HomePage.prototype.showAddDespPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (item) {
                        console.log(_this.dataService.descriptions, item.description);
                        _this.dataService.descriptions.push(item.description);
                        console.log(_this.dataService.descriptions);
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.showAddCommentPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (item) {
                        console.log('Saved clicked', _this.dataService.comments);
                        _this.dataService.comments.push(item);
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/hungvuong/FinalProject/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color ="primary">\n        <ion-title>\n      Sharing Community\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n<ion-item>\n  <p class="date"><ion-datetime float-end [(ngModel)]="date" displayFormat="MMMM DD, YYYY" min="2017" max="2100"></ion-datetime></p>\n</ion-item>\n\n<!-- <p align = "center" *ngFor = "let photo of photos"><img src = "{{photo.src}}"></p> -->\n  \n  <ion-card *ngFor = "let photo of this.dataService.photos"> \n        <ion-item>\n          <ion-avatar>\n            <img src = "{{this.dataService.avatar}}"/>\n          </ion-avatar>\n          <h2>{{this.dataService.user_name}}</h2>\n          <h4>\n          <ion-item>\n            <ion-datetime [(ngModel)]="date" id = "datesize" displayFormat="MMMM DD, YYYY" min="2017" max="2100"></ion-datetime>\n          </ion-item>\n          </h4>\n          <p>{{this.dataService.descriptions[this.dataService.descriptions.length-1]}}</p>\n        \n         \n          <img src = "{{photo.src}}"/>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <button ion-button icon-left clear small color = "primary" (click)= "likePhoto(photo)">{{photo.likes}}&nbsp;\n                  <ion-icon name = "thumbs-up"></ion-icon>\n                </button>\n                <button ion-button icon-left clear small color = "primary" (click)= "sendSMS()">\n                    <ion-icon name = "text"></ion-icon>\n                </button>\n                <button ion-button icon-left clear small color = "primary" (click)= "sendEmail()">\n                  <ion-icon name = "mail"></ion-icon>\n                </button>\n                  \n              </ion-item>\n            </ion-col>\n          </ion-row>\n        \n        </ion-item>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              \n          <ion-input type = "text" placeholder ="Comment" [(ngModel)]="temp"></ion-input>\n              \n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <div style ="text-align: right">\n              <button ion-button icon-end id="button" clear small color = "primary" (click)= "addComment(photo,temp)">\n                <ion-icon name = "ios-arrow-dropright-circle-outline"></ion-icon>\n              </button>\n            </div>      \n          </ion-col>\n        </ion-row>\n      \n\n\n              <ion-list *ngFor ="let i of photo.comment">\n                  <ion-item>\n                      <ion-avatar><img src = "{{this.dataService.avatar}}"/></ion-avatar>\n                      <h4> {{i}}</h4>\n                  </ion-item>\n\n              </ion-list>\n         \n         \n  </ion-card>\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/hungvuong/FinalProject/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_picture_picture__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_groceries_service_groceries_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_call_number__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_sms__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_email_composer__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_picture_picture__["a" /* PicturePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/picture/picture.module#PicturePageModule', name: 'PicturePage', segment: 'picture', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_picture_picture__["a" /* PicturePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_email_composer__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/hungvuong/FinalProject/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/hungvuong/FinalProject/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceriesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GroceriesServiceProvider = /** @class */ (function () {
    function GroceriesServiceProvider() {
        this.items = [
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
        this.profilePhoto = "../../assets/imgs/hungvuong.jpg";
        this.photos = [];
        this.descriptions = ["hello", "bello", "NeiHao", "Ola"];
        this.comments = [];
        this.user_name = "";
        this.user_password = "";
        console.log('Hello GroceriesServiceProvider Provider');
    }
    GroceriesServiceProvider.prototype.getItem = function () {
        return this.items;
    };
    GroceriesServiceProvider.prototype.removeItem = function (index) {
        this.items.splice(index, 1); /* splice index , number of item want to remove */
    };
    GroceriesServiceProvider.prototype.addItem = function (item) {
        this.items.push(item);
    };
    GroceriesServiceProvider.prototype.editItem = function (item, index) {
        this.items[index] = item;
    };
    GroceriesServiceProvider.prototype.editQuantity = function (item, index) {
        this.items[index].quantity = item;
    };
    GroceriesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GroceriesServiceProvider);
    return GroceriesServiceProvider;
}());

//# sourceMappingURL=groceries-service.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map