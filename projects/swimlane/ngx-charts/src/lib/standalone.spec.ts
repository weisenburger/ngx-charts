import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { NgxChartsModule } from './ngx-charts.module';

const data = [
  { name: 'Germany', value: 8940000 },
  { name: 'USA', value: 5000000 },
  { name: 'France', value: 7200000 }
];

@Component({
  selector: 'test-standalone-tooltip',
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <ngx-charts-bar-vertical
      [view]="[400, 300]"
      [results]="data"
      [xAxis]="true"
      [yAxis]="true"
      [animations]="false">
      <ng-template #tooltipTemplate let-model="model">
        <span>{{ model.value }}</span>
      </ng-template>
    </ngx-charts-bar-vertical>
  `
})
class TestStandaloneTooltipComponent {
  data = data;
}

describe('Standalone Component with tooltip template', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideNoopAnimations()]
    });
  });

  it('should work with custom tooltip template in standalone component', () => {
    const fixture = TestBed.createComponent(TestStandaloneTooltipComponent);
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});
