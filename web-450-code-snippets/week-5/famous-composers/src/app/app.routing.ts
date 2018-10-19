import { Routes } from '@angular/router';

import { ComposerListComponent } from './composer-list/composer-list.component';
import { ComposerDetailComponent } from './composer-detail/composer-detail.component';
import { ComposerDeleteComponent } from './composer-delete/composer-delete.component';
import { ComposerCreateComponent } from './composer-create/composer-create.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'list',
    component: ComposerListComponent
  },
  {
    path: 'detail',
    component: ComposerDetailComponent
  },
  {
    path: 'delete',
    component: ComposerDeleteComponent
  },
  {
    path: 'create',
    component: ComposerCreateComponent
  }
];
