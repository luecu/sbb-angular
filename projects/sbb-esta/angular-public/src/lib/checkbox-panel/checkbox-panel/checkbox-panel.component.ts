import { FocusMonitor } from '@angular/cdk/a11y';
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { CheckboxBase } from '../../checkbox/checkbox/checkbox-base';

@Component({
  selector: 'sbb-checkbox-panel',
  templateUrl: './checkbox-panel.component.html',
  styleUrls: ['./checkbox-panel.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxPanelComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CheckboxPanelComponent extends CheckboxBase {
  /**
   * Label of a multiple checkbox panel.
   */
  @Input()
  label: string;
  /**
   * Subtitle of a multiple checkbox panel.
   */
  @Input()
  subtitle?: string;

  /**
   * Returns the subtitle of a multiple checkbox panel.
   * @deprecated Check subtitle
   */
  get hasSubtitle() {
    return !!this.subtitle;
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    focusMonitor: FocusMonitor,
    elementRef: ElementRef<HTMLElement>,
    @Attribute('tabindex') tabIndex: string
  ) {
    super(changeDetectorRef, focusMonitor, elementRef, tabIndex, 'checkbox-panel');
  }
}
