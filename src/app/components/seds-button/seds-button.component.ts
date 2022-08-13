import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seds-button',
  templateUrl: './seds-button.component.html',
  styleUrls: ['./seds-button.component.scss']
})
export class SedsButtonComponent implements OnInit {

  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewChecked(): void {
    if(!this.label) {
      throw new Error("Label is required!");
    }
  }

}
