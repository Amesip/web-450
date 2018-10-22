import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ComposerDetailComponent } from './composer-detail/composer-detail.component';
import { ComposerDeleteComponent } from './composer-delete/composer-delete.component';
import { ComposerCreateComponent } from './composer-create/composer-create.component';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    ComposerDetailComponent,
    ComposerDeleteComponent,
    ComposerCreateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, {useHash: true, enableTracing: false}),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
