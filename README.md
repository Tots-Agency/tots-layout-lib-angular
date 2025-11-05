<div align="center">
  <img src="https://avatars.githubusercontent.com/u/117909365" alt="Tots Logo" width="150">
  
  <h1>
    Tots Layout
  </h1>

</div>

<br><br>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0.

Tots Layout is a repository that contains 1 library

- `@tots/confirm-modal` is a library that provides a simple actionable confirmation modal

<br>
<hr>
<br>

## Installation

```bash
npm install @tots/confirm-modal
```

Ensure your project uses Angular 20+ and compatible versions of TypeScript, and rxjs.

<br>
<hr>
<br>

## Using @tots/confirm-modal

```html
<button mat-flat-button (click)="openConfirmationModal()">
        Open confirmation modal
</button>
```

```typescript
import { TotsConfirmModalComponent, TotsConfirmModalConfig } from 'projects/tots/confirm-modal/src/public-api';

openConfirmationModal() {
        this.dialog.open(TotsConfirmModalComponent, { data: new TotsConfirmModalConfig('Are you sure?'), width: '420px', })
}
```