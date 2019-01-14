import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessflowComponent } from './processflow/processflow.component';
import { IconCommonModule } from '../svg-icons-components/icon-common.module';
import { ProcessflowStepComponent } from './processflow-step/processflow-step.component';

@NgModule({
  imports: [
    CommonModule,
    IconCommonModule
  ],
  declarations: [ProcessflowComponent, ProcessflowStepComponent],
  exports: [ProcessflowComponent, ProcessflowStepComponent]
})
export class ProcessflowModule { }