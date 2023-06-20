import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TotsFilterBoxConfig, TotsItemSelectedFilter } from '@tots/filter-box';
import { TotsBreadcrumbItem } from '@tots/layout';
import { TotsActionTable, TotsTableApiComponent, TotsTableApiConfig } from '@tots/table';

@Component({
  selector: 'tots-base-crud-page',
  templateUrl: './base-crud-page.component.html',
  styleUrls: ['./base-crud-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TotsBaseCrudPageComponent {

  @ViewChild('tableComp') tableComp!: TotsTableApiComponent;

  @Input() breadcrumb?: Array<TotsBreadcrumbItem>;

  @Input() title?: string = '';
  @Input() subtitle?: string;
  @Input() buttonName?: string;
  @Input() buttonIcon?: string;
  @Output() clickButton = new EventEmitter<any>();

  @Input() tableClasses?: string;
  @Input() tableConfig = new TotsTableApiConfig();
  @Output() tableAction = new EventEmitter<TotsActionTable>();

  @Input() filterConfig?: TotsFilterBoxConfig;
  @Output() filterApply = new EventEmitter<Array<TotsItemSelectedFilter>>();

  inputSearch = new FormControl<string>('');

  selecteds = new Array<any>();

  onTableAction(action: TotsActionTable) {
    if (action.key == 'select-item') {
      action.item.isSelected = true;
      this.selecteds.push(action.item);
    }else if (action.key == 'unselect-item') {
      action.item.isSelected = false;
      this.selecteds = this.selecteds.filter((item) => item.id != action.item.id);
    }
    this.tableAction.emit(action);
  }

  onSearch() {
    this.tableAction.emit({ key: 'search', item: this.inputSearch.value });
  }

  onApplyFilters(filters: Array<TotsItemSelectedFilter>) {
    this.filterApply.emit(filters);
  }

  onRemoveBulk() {
    this.tableAction.emit({ key: 'remove-bulk', item: this.selecteds });
  }

  onClickButton() {
    this.clickButton.emit();
  }

  loadItems() {
    return this.tableComp.loadItems();
  }

  refreshQueryAndLoadItems() {
    return this.tableComp.refreshQueryAndLoadItems();
  }

  cleanSelecteds() {
    this.selecteds = [];
  }

  public getTableComponent() {
    return this.tableComp;
  }
}
