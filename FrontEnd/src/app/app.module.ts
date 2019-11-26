import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';


import { TopBarComponent } from './top-bar/top-bar.component';
import { MatrixHeaderComponent } from './matrix-header/matrix-header.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { CategoryComponent } from './category/category.component';
import { MatrixComponent } from './matrix/matrix.component';
import { GridListHeaderComponent } from './grid-list-header/grid-list-header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MatrixHeaderComponent,
    GridListComponent,
    CategoryComponent,
    MatrixComponent,
    GridListHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatGridListModule,
      MatExpansionModule,
      MatCardModule,
      MatButtonModule,
      MatTableModule,
      MatIconModule,
      RouterModule.forRoot([
          { path: '', component: MatrixHeaderComponent },
          { path: 'reference-guide', component: GridListHeaderComponent },
          { path: 'reference-guide/:category', component: CategoryComponent },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
