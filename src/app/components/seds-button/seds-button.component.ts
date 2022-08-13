import { Component, Input, OnInit } from '@angular/core';

export const SedsButtonTypes = [
  'primary',
  'secondary',
  'text'
];

export type SedsButtonVariant = typeof SedsButtonTypes[number];
export type SedsButtonSize = 'normal' | 'large';
export type SedsButtonType = 'button' | 'reset' | 'submit';

@Component({
  selector: 'app-seds-button',
  templateUrl: './seds-button.component.html',
  styleUrls: ['./seds-button.component.scss']
})
export class SedsButtonComponent implements OnInit {

  @Input() variant: SedsButtonVariant = 'primary';
  @Input() size: SedsButtonSize = 'normal';
  @Input() type: SedsButtonType = 'button';
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void { }

}
