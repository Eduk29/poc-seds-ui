import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seds-masthead',
  templateUrl: './seds-masthead.component.html',
  styleUrls: ['./seds-masthead.component.scss']
})
export class SedsMastheadComponent implements OnInit {

  @Input() backgroundColor: string = 'success';
  @Input() title: string = '';
  @Input() subtitle: string = '';

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewChecked(): void {
    if(!this.title) {
      throw new Error("Title is required!");
    }

    if (!this.subtitle) {
      throw new Error("Subtitle is required!");
    }
  }

}
