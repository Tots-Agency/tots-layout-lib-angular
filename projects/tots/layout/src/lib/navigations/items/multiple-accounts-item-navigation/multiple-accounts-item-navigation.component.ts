import { Component, Input, OnInit } from '@angular/core';
import { TotsLayoutService } from '../../../services/tots-layout.service';

@Component({
  selector: 'tots-multiple-accounts-item-navigation',
  templateUrl: './multiple-accounts-item-navigation.component.html',
  styleUrls: ['./multiple-accounts-item-navigation.component.scss']
})
export class MultipleAccountsItemNavigationComponent implements OnInit {

  @Input() data: any;

  constructor(
    protected layoutService: TotsLayoutService
  ) { }

  ngOnInit(): void {
  }

  onClickAccount(account: any) {
    account.key = 'change_account';
    this.layoutService.navigationClick.next(account);
  }

  onClick(item: any) {
    this.layoutService.navigationClick.next(item);
  }

  onClickNewAccount() {
    this.layoutService.navigationClick.next({ key: 'new_account' });
  }

  getAccounts(): any[] {
    if(this.data.id != undefined && this.data.id > 0){
      return this.data.accounts.filter((account: any) => account.id != this.data.id);
    }

    return this.data.accounts;
  }
}
