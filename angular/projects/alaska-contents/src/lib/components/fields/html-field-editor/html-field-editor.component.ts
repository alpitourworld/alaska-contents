import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { ContentField, ImageFieldData } from '@alaska-project/contents-core/dist/types/models/content-models';

@Component({
  selector: 'aly-html-field-editor',
  templateUrl: './html-field-editor.component.html',
  styleUrls: ['./html-field-editor.component.scss']
})
export class HtmlFieldEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('fieldElement', {static: false}) 
  fieldElement: ElementRef<HTMLAlaskaHtmlFieldEditorElement>;

  @Input()
  field: ContentField<string>;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.fieldElement.nativeElement.field = this.field;
  }
}
