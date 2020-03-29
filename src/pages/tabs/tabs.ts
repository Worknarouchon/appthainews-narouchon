import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';

import { HotnewsPage } from '../../pages/hotnews/hotnews';
import { EntertainmentPage } from '../../pages/entertainment/entertainment';
import { SciencePage } from '../../pages/science/science';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HotnewsPage;
  tab2Root = SciencePage;
  tab3Root = EntertainmentPage;

  constructor() {

  }
}
