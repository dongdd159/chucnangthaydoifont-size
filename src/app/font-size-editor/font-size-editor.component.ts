import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {
  fontSize = 70;
  constructor() { }

  ngOnInit() {
  }
  changeFontSizeValue(fontSize: any) {
    this.fontSize = fontSize;
  }
}
