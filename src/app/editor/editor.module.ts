import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OneComponent} from './one/one.component';
import {EditorRoutingModule} from './editor-routing.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [OneComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    CKEditorModule
  ]
})
export class EditorModule {
}
