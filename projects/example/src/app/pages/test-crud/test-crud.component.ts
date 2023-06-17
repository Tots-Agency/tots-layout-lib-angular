import { Component, OnInit, ViewChild } from '@angular/core';
import { MoreMenuColumnComponent, StringColumnComponent, TotsActionTable, TotsTableApiComponent, TotsTableApiConfig } from '@tots/table';
import { TotsBaseCrudPageComponent } from 'projects/tots/crud-page/src/public-api';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test-crud',
  templateUrl: './test-crud.component.html',
  styleUrls: ['./test-crud.component.scss']
})
export class TestCrudComponent implements OnInit {

  @ViewChild('crudPage') crudPage!: TotsBaseCrudPageComponent;

  tableConfig = new TotsTableApiConfig();

  constructor(
    protected testService: TestService
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onClickAdd() {
    //this.router.navigateByUrl('/posts/write');
  }

  onClickRemove(item: any) {
    /*this.dialog
    .open(TotsConfirmModalComponent, { data: new TotsConfirmModalConfig('Are you sure?') })
    .afterClosed()
    .pipe(takeWhile(res => res === true))
    .pipe(switchMap(res => this.postService.removeById(item.id!)))
    .pipe(tap(res => this.tableComp.loadItems()))
    .subscribe();*/
  }

  onTableAction(action: TotsActionTable) {
    console.log(action);
    if(action.key == 'edit') {
      //this.router.navigateByUrl('/posts/edit/' + action.item.id);
    } else if (action.key == 'duplicate') {
      //this.onDuplicate(action.item);
    } else if (action.key == 'remove') {
      //this.onClickRemove(action.item);
    }
  }

  loadConfig() {
    this.tableConfig.id = 'table-test';
    this.tableConfig.service = this.testService;
    this.tableConfig.columns = [
      { key: 'slug', component: StringColumnComponent, title: 'Slug', field_key: 'slug' },
      { key: 'title', component: StringColumnComponent, title: 'Titulo', field_key: 'name' },
      //{ key: 'created_at', component: DateColumnComponent, title: 'Created At', field_key: 'created_at', hasOrder: false, extra: { format_in: 'YYYY-MM-DD', format_out: 'DD/MM/YYYY' } },
      { key: 'more', component: MoreMenuColumnComponent, title: '', extra: { width: '60px', actions: [
        { icon: 'add', title: 'Editar', key: 'edit' },
        { icon: 'add', title: 'Duplicar', key: 'duplicate' },
        { icon: 'add', title: 'Eliminar', key: 'remove' },
      ]} },
    ];
  }
}
