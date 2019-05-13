/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-cloud-rain-sun',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M7.2 10.2c-2.14 0-2.567 4.3.8 4.3h7c3.35 0 3.2-4.3.7-4.2 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.432-.042-3.2 1.9zm10.139 1.187c1.266-.352 2.16-1.489 2.16-2.887 0-1.69-1.308-3-3-3-.992 0-1.854.451-2.395 1.167M16.5 2v2m-4.67-.122l1.44 1.386m6.523 6.6l1.414 1.414M23 8.5h-2m.096-4.611l-1.414 1.414M9.5 16l-1 2m7-2l-1 2m-3-2l-2 4m4.05-4l-2 4"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M10.8 15.3c-3.211 0-3.85 6.45 1.2 6.45h10.5c5.025 0 4.8-6.45 1.05-6.3 1.65-5.55-5.7-8.1-7.95-3-1.981-1.623-5.148-.063-4.8 2.85zm15.208 1.78c1.9-.527 3.242-2.233 3.242-4.33 0-2.536-1.964-4.5-4.5-4.5-1.49 0-2.783.677-3.594 1.75m3.594-7v3m-7.006-.183l2.161 2.079m9.784 9.9l2.122 2.12M34.5 12.75h-3m.144-6.917l-2.121 2.121M14.25 24l-1.5 3m10.5-3l-1.5 3m-4.5-3l-3 6m6.075-6l-3 6"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconCloudRainSunComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconCloudRainSunComponent],
  exports: [IconCloudRainSunComponent]
})
export class IconCloudRainSunModule {}
