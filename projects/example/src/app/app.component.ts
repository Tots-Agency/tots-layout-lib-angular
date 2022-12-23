import { Component, OnInit } from '@angular/core';
import { ButtonItemNavigationComponent, ImageItemNavigationComponent, TotsLayoutService, UserItemNavigationComponent } from 'projects/tots/layout/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    protected layoutService: TotsLayoutService
  ) {}

  ngOnInit(): void {
    this.loadNavigation();
  }

  loadNavigation() {
    this.layoutService.navigationClick.subscribe(action => {
      if(action.key == 'profile'){
        console.log('click profile');
      }
    });

    this.layoutService.putNavigationHorizontal([
      { component: ImageItemNavigationComponent, data: { url: 'https://tots.agency/assets/img/logos/logo-horiz.svg', alt: 'Tots Layout' } },
    ],
    [
      { 
        component: UserItemNavigationComponent, 
        data: { 
          firstname: 'Matias', 
          lastname: 'Camiletti', 
          email: 'matias@tots.agency', 
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-GMiQsjet02eTthC4jC6ieAkdZLmjyeoh9kChZ8TT9A&s', 
          status: 'online',
          items: [
            { title: 'Profile', icon: 'settings', key: 'profile' },
            { title: 'Settings', icon: 'settings', key: 'settings' },
            { title: 'Sign out', icon: 'logout', key: 'logout' },
          ]
        }
      }
    ]);

    this.layoutService.putNavigationLinks([
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: 'home',
    },
    {
        title: 'Apps',
        url: 'apps',
        icon: 'email',
        children: [
            { title: 'Inbox', url: '/documentation/button' },
            { title: 'Read', url: '/documentation/button-toggle' },
            { title: 'Compose', url: '/documentation/card' },
            { title: 'Chat', url: 'accordion' },
            { title: 'Calendar', url: 'alerts' },
        ],
    },
    {
        title: 'UI Kit',
        url: 'ui-kit',
        icon: 'today',
        children: [
            { title: 'Bottom Sheet', url: '/documentation/bottom-sheet' },
            { title: 'Button', url: '/documentation/button' },
            { title: 'Button Toggle', url: '/documentation/button-toggle' },
            { title: 'Card', url: '/documentation/card' },
            { title: 'Dialog', url: '/documentation/dialog' },
            { title: 'Table', url: '/documentation/table' },
            { title: 'Accordion', url: 'accordion' },
            { title: 'Alerts', url: 'alerts' },
            { title: 'Badges', url: 'badges' },
        ],
    },
    {
        title: 'Forms',
        url: 'forms',
        icon: 'description',
        children: [
            { title: 'Form Field', url: '/documentation/form-field' },
            { title: 'Checkbox', url: '/documentation/checkbox' },
            { title: 'Form Validation', url: 'form-validation' },
            { title: 'Autocomplete', url: 'autocomplete' },
        ],
    },
    {
        title: 'Icons',
        url: 'icons',
        icon: 'sentiment_satisfied',
    },
    {
        title: 'Special pages',
        url: 'icons',
        icon: 'book',
        children: [
            { title: 'Blank page', url: '/pages/blank-page' },
            { title: 'Faq', url: '/pages/faq' },
            { title: 'Invoice', url: '/pages/invoice' },
            { title: 'Profile', url: '/pages/profile' },
            { title: 'Pricing', url: '/pages/pricing' },
            { title: 'Timeline', url: 'timeline' },
            { title: 'Login', url: 'auth/login' },
            { title: 'Register', url: 'auth/register' },
            { title: 'Error 404', url: 'error-404' },
            { title: 'Error 500', url: 'error-500' },
        ],
    },
    {
        title: 'Libraries',
        url: 'libraries',
        icon: 'sentiment_satisfied',
        children: [
            { title: 'Mia Table TOTS', url: '/libraries/mia-table-tots' },
        ],
    },
    ]);
  }
}
