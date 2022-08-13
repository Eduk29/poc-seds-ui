import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seds-button-showcase',
  templateUrl: './seds-button-showcase.component.html',
  styleUrls: ['./seds-button-showcase.component.scss']
})
export class SedsButtonShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  greeting(msg: string): void {
    alert(msg);
  }

}
