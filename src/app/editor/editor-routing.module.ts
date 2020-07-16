import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';
import {ThreeComponent} from './three/three.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'one'
  },
  {
    path: 'one',
    component: OneComponent
  },
  {
    path: 'two',
    component: TwoComponent
  },
  {
    path: 'three',
    component: ThreeComponent
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
