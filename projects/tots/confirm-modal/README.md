<div align="center">
  <img src="https://avatars.githubusercontent.com/u/117909365" alt="Tots Logo" width="150">
  
  <h1>
    @tots/confirm-modal
  </h1>

</div>

<br><br>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0.

`@tots/confirm-modal` is a library that provides a simple actionable confirmation modal

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

## Using the modal

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

<br>

## Configuration

```typescript
import { Injectable } from '@angular/core';
import { TotsCoreConfig } from '@tots/core';

@Injectable({
	providedIn: 'root'
})
export class AppConfig extends TotsCoreConfig {
	baseUrl = 'https://api.example.com';
	lang = 'en';
}
```

<br>

## Usage of BaseHttpService

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TotsBaseHttpService, TotsQuery } from '@tots/core';

@Injectable({
	providedIn: 'root'
})
export class UserService extends TotsBaseHttpService<User> {
	
	basePathUrl = '/users';

	constructor(http: HttpClient, config: TotsCoreConfig) {
		super(config, http);
	}
}

// Query users
const totsQuery = new TotsQuery();

userService.list(totsQuery).subscribe(
	(response:TotsListResponse<User>) => {
		console.log(response.data);
	}
);
```
