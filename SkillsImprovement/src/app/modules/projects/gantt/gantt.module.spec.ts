import { GanttModule } from './gantt.module';

describe('GanttModule', () => {
  let ganttModule: GanttModule;

  beforeEach(() => {
    ganttModule = new GanttModule();
  });

  it('should create an instance', () => {
    expect(ganttModule).toBeTruthy();
  });
});
