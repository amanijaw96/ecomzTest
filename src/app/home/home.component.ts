import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sections = [
    {
      imageAlignment: 'right',
      textColor: 'red',
      class: 'image-right red-text',
    },
    {
      imageAlignment: 'left',
      textColor: 'red',
      class: 'image-left blue-text',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
