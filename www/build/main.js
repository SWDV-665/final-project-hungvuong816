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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
            _this.dataService.photo_temp = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
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
            _this.dataService.photo_temp = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
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
            _this.dataService.photo_temp = 'data:image/jpeg;base64,' + imageData;
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
    PicturePage.prototype.photoObject = function () {
        this.dataService.photos.splice(0, 0, new __WEBPACK_IMPORTED_MODULE_3__contact_photo__["a" /* Photo */](this.dataService.photo_temp, 0, this.dataService.desp_temp, []));
        this.showAlert();
        this.resetInput();
    };
    PicturePage.prototype.showAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'Your Post was successfully created. <br> Please check the home tab to add comments, likes, and contacts ',
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PicturePage.prototype.resetInput = function () {
        this.dataService.desp_temp = "";
    };
    PicturePage.prototype.showAddItemPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Groceries Cart',
            message: "Please enter  item to your cart.",
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
            selector: 'page-picture',template:/*ion-inline-start:"/Users/hungvuong/FinalProject/src/pages/picture/picture.html"*/'<ion-header>\n    <ion-navbar color ="primary">\n        <ion-title>\n      Picture\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <br>\n\n  <h3>Please take a photo of your item or upload from your photo library</h3>\n\n  <br>\n\n\n\n<button ion-button full color = "primary" (click) = "takePhoto()" >Take Photo</button>\n<button ion-button full color = "secondary" (click) = "getPhoto()" >Upload From Library</button>\n<button ion-button full color = "danger" (click) = "cropPhoto()" >Crop Photo</button>\n\n<img src = "{{this.dataService.photo_temp}}"/>\n\n<br>\n<br>\n<h3>Post Title</h3>\n<ion-input id = "my_text" type = "text" placeholder ="Please Enter Item Description" [(ngModel)]="this.dataService.desp_temp"></ion-input>\n<br>\n\n<button ion-button full color = "Primary" (click) ="photoObject()">Create Post</button> \n\n\n\n\n<br>\n\n\n\n\n'/*ion-inline-end:"/Users/hungvuong/FinalProject/src/pages/picture/picture.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], PicturePage);
    return PicturePage;
    var _a, _b, _c, _d, _e;
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
        this.resetComment();
    };
    HomePage.prototype.makeCall = function () {
        this.callNumber.callNumber("4695434949", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HomePage.prototype.resetComment = function () {
        this.temp = "";
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/hungvuong/FinalProject/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color ="primary">\n        <ion-title>\n      Sharing Community\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n<ion-item>\n  <p class="date"><ion-datetime float-end [(ngModel)]="date" displayFormat="MMMM DD, YYYY" min="2017" max="2100"></ion-datetime></p>\n</ion-item>\n\n<!-- <p align = "center" *ngFor = "let photo of photos"><img src = "{{photo.src}}"></p> -->\n  \n  <ion-card *ngFor = "let photo of this.dataService.photos"> \n        <ion-item>\n          <ion-avatar>\n            <img src = "{{this.dataService.avatar}}"/>\n          </ion-avatar>\n          <h2>{{this.dataService.user_name}}</h2>\n          <h4>\n          <ion-item>\n            <ion-datetime [(ngModel)]="date" id = "datesize" displayFormat="MMMM DD, YYYY" min="2017" max="2100"></ion-datetime>\n          </ion-item>\n          </h4>\n          <p>{{photo.description}}</p>\n        \n         \n          <img src = "{{photo.src}}"/>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <button ion-button icon-left clear small color = "primary" (click)= "likePhoto(photo)">{{photo.likes}}&nbsp;\n                  <ion-icon name = "thumbs-up"></ion-icon>\n                </button>\n                <button ion-button icon-left clear small color = "primary" (click)= "sendSMS()">\n                    <ion-icon name = "text"></ion-icon>\n                </button>\n                <button ion-button icon-left clear small color = "primary" (click)= "sendEmail()">\n                  <ion-icon name = "mail"></ion-icon>\n                </button>\n                  \n              </ion-item>\n            </ion-col>\n          </ion-row>\n        \n        </ion-item>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              \n          <ion-input type = "text" placeholder ="AddComment" [(ngModel)]="temp"></ion-input>\n              \n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <div style ="text-align: right">\n              <button ion-button icon-end id="button" clear small color = "primary" (click)= "addComment(photo,temp)">\n                <ion-icon name = "ios-arrow-dropright-circle-outline"></ion-icon>\n              </button>\n            </div>      \n          </ion-col>\n        </ion-row>\n      \n\n\n              <ion-list *ngFor ="let i of photo.comment">\n                  <ion-item>\n                      <ion-avatar><img src = "{{this.dataService.avatar}}"/></ion-avatar>\n                      <h4> {{i}}</h4>\n                  </ion-item>\n\n              </ion-list>\n         \n         \n  </ion-card>\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/hungvuong/FinalProject/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_sms__["a" /* SMS */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_sms__["a" /* SMS */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_email_composer__["a" /* EmailComposer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_email_composer__["a" /* EmailComposer */]) === "function" && _g || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g;
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