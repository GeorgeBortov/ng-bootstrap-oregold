import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngbd-accordion-static',
  templateUrl: './my-accordion.component.html',
  styleUrls: ['./my-accordion.component.scss'],
  encapsulation: ViewEncapsulation.None
  // styles: [require('my-accordion.component.css'), 'h1 { font-weight: normal; }']
})
export class MyAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
