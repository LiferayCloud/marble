import Chart from '../src/Chart';

let chart;

describe('Chart', () => {
  afterEach(() => {
    if (chart) {
      chart.dispose();
    }
  });

  it('should generate the default markup', () => {
    chart = new Chart();

    expect(chart).toMatchSnapshot();
  });
});
