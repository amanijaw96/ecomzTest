import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imagesection',
  templateUrl: './imagesection.component.html',
  styleUrls: ['./imagesection.component.css'],
})
export class ImagesectionComponent implements OnInit {
  @Input() section;
  @Input() index;
  @Output() updateParent = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}
}
