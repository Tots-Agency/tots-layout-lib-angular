import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TotsFilterBoxConfig, TotsItemSelectedFilter } from '@tots/filter-box';
import { TotsBreadcrumbItem } from '@tots/layout';
import { TotsActionTable, TotsTableApiComponent, TotsTableApiConfig } from '@tots/table';

@Component({
  selector: 'tots-base-crud-page',
  templateUrl: './base-crud-page.component.html',
  styleUrls: ['./base-crud-page.component.scss']
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

  onTableAction(action: TotsActionTable) {
    this.tableAction.emit(action);
  }

  onSearch() {
    this.tableAction.emit({ key: 'search', item: this.inputSearch.value });
  }

  onApplyFilters(filters: Array<TotsItemSelectedFilter>) {
    this.filterApply.emit(filters);
  }

  onClickButton() {
    this.clickButton.emit();
  }

  loadItems() {
    this.tableComp.loadItems();
  }

  refreshQueryAndLoadItems() {
    this.tableComp.refreshQueryAndLoadItems();
  }

  public getTableComponent() {
    return this.tableComp;
  }
}
