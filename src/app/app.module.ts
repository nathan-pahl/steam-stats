import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './component/search/search.component';
import { SearchResultsComponent } from './component/search-results/search-results.component';
import { TimePipe } from './filter/time.pipe';
import { FriendsListComponent } from './component/friends-list/friends-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    TimePipe,
    FriendsListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
