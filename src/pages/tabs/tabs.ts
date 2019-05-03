import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {PicturePage} from '../picture/picture';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PicturePage;
  tab3Root = ContactPage;
  tab4Root = AboutPage;

  constructor() {

  }
}




export class SlidingPage { }