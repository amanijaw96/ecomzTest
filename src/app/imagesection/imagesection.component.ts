import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagesection',
  templateUrl: './imagesection.component.html',
  styleUrls: ['./imagesection.component.css'],
})
export class ImagesectionComponent implements OnInit {
  @Input() section;
  constructor() {}
  ngOnInit(): void {}
}
