import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OneComponent} from './one/one.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'one'
  },
  {
    path: 'one',
    component: OneComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EditorRoutingModule {
}
