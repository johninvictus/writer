import {Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  /**
   *  CKEditor
   *
   *  Seems complex and somehow not maintainable
   *
   *  stars *** 3/5
   */
  ckEditor = ClassicEditor;

  constructor() {
  }

  ngOnInit(): void {
  }

  editorChange({editor}: ChangeEvent) {
    const data = editor.getData();
  }

}
