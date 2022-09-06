import { IconPosition } from './../../shared/enums/icon-position.enum';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';

import { ButtonType } from '../../shared/enums/button-type.enum';

@Component({
  selector: 'app-seds-button',
  templateUrl: './seds-button.component.html',
  styleUrls: ['./seds-button.component.scss']
})
export class SedsButtonComponent extends MatButton implements OnInit {

  @Input() override color: ThemePalette = undefined;
  @Input() class: string = '';
  @Input() icon: string = '';
  @Input() iconPosition: string = IconPosition.BEFORE_LABEL;
  @Input() label: string = 'Test';
  @Input() styleType: string = ButtonType.BASIC_BUTTON;
  @Input() type: "button" | "submit" | "reset" = "button";

  constructor(private el: ElementRef, private focusMonitor: FocusMonitor) {
    super(el, focusMonitor, "");
  }

  ngOnInit(): void { }

  get isBasicButton() {
    return this.styleType === ButtonType.BASIC_BUTTON
  }

  get isRaisedButton() {
    return this.styleType === ButtonType.RAISED_BUTTON
  }

  get isFlatButton() {
  return this.styleType === ButtonType.FLAT_BUTTON
  }

}
