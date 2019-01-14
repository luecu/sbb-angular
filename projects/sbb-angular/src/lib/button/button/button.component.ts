import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input, HostBinding,
  TemplateRef,
  ContentChild
} from '@angular/core';

import { ButtonIconDirective } from './button-icon.directive';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[sbbButton], input[type=submit][sbbButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  /**
   * Button modes available for different purposes.
   */
  @Input() mode: 'primary' | 'secondary' | 'ghost' | 'frameless' = 'primary';

   /**
   * Template that will contain icons.
   * Use the *sbbButtonIcon structural directive to provide the desired icon.
   */
  @Input() @ContentChild(ButtonIconDirective, { read: TemplateRef }) icon: TemplateRef<any>;
  /**
   * Sets modes and icons for all buttons
   */
  @Input() class = '';

  /**
   * Sets value of button mode
   */
  @HostBinding('class') buttonModeClass: string;

  ngOnInit() {
    const hasIconClass = this.icon ? 'sbb-button-has-icon': '';
    this.buttonModeClass = `${this.class} sbb-button-${this.mode} ${hasIconClass}`;
  }

}