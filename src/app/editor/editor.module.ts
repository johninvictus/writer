import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OneComponent} from './one/one.component';
import {EditorRoutingModule} from './editor-routing.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { TwoComponent } from './two/two.component';
import {QuillModule} from 'ngx-quill';
import { ThreeComponent } from './three/three.component';


@NgModule({
  declarations: [OneComponent, TwoComponent, ThreeComponent],
    imports: [
        CommonModule,
        EditorRoutingModule,
        CKEditorModule,
        QuillModule
    ]
})
export class EditorModule {
}
