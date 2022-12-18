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
      { component: ButtonItemNavigationComponent, data: { path: '/dashboard', title: 'Dashboard', icon: 'settings' }},
      { component: ButtonItemNavigationComponent, data: { path: '/settings', title: 'Templates', icon: 'home' }},
      { component: ButtonItemNavigationComponent, data: { path: '/settings', title: 'Settings', icon: 'settings' }},
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
    ])
  }
}
