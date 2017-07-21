import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { MainHeaderComponent }  from './app.component.main-header';

import { TextInputsComponent }  from './app.component.accessible-forms.text-inputs';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule  ],
  declarations: [ 
    AppComponent,
    MainHeaderComponent,
    TextInputsComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
