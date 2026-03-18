import { NgModule } from '@angular/core';
import { AxisLabelComponent } from './axis-label.component';
import { XAxisComponent } from './x-axis.component';
import { XAxisTicksComponent } from './x-axis-ticks.component';
import { YAxisComponent } from './y-axis.component';
import { YAxisTicksComponent } from './y-axis-ticks.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, XAxisTicksComponent, YAxisTicksComponent],
  declarations: [AxisLabelComponent, XAxisComponent, YAxisComponent],
  exports: [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent]
})
export class AxesModule {}
