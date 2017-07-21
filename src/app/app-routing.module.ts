import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TextInputsComponent }   from './app.component.accessible-forms.text-inputs';

const routes: Routes = [
  { path: 'text-inputs',  
    component: TextInputsComponent 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}