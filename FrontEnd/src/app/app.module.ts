import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderComponent } from './header/header.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    GridListComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatGridListModule,
      MatExpansionModule,
      MatCardModule,
      RouterModule.forRoot([
          { path: '', component: GridListComponent },
          { path: 'category/:category', component: CategoryComponent },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
