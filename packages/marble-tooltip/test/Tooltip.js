import dom from 'metal-dom';
import Tooltip from '../src/Tooltip';
import xssFilters from 'xss-filters';

describe('Tooltip', () => {
  let tooltip;

  afterEach(() => {
    if (tooltip) {
      tooltip.dispose();
      dom.exitDocument(dom.toElement('#tooltipTrigger1'));
    }
  });

  it('should escape html content by default', (done) => {
    const title = 'title';
    const description = 'description';

    const titleInAttr = xssFilters.inDoubleQuotedAttr(`"><img src=x onerror=alert('${title}')>`);
    const descriptionInAttr = xssFilters.inDoubleQuotedAttr(`"><img src=x onerror=alert('${description}')>`);
    const titleInData = xssFilters.inHTMLData(`"><img src=x onerror=alert('${title}')>`);
    const descriptionInData = xssFilters.inHTMLData(`"><img src=x onerror=alert('${description}')>`);

    dom.enterDocument(`<div id="tooltipTrigger1" data-title="${titleInAttr}" data-description="${descriptionInAttr}">trigger</div>`);
    let trigger = dom.toElement('#tooltipTrigger1');

    tooltip = new Tooltip({
      delay: [0, 0],
      selector: '#tooltipTrigger1',
      visible: false,
    });
    dom.triggerEvent(trigger, 'mouseover');
    setTimeout(() => {
      expect(tooltip.title).toEqual(titleInData);
      expect(tooltip.description).toEqual(descriptionInData);
      done();
    }, 25);
  });

  it('should prevent escaping title and description when escaping is disabled', (done) => {
    const title = `"><img src=x onerror=alert('title')>`;
    const description = `"><img src=x onerror=alert('description')>`;

    const titleInAttr = xssFilters.inDoubleQuotedAttr(title);
    const descriptionInAttr = xssFilters.inDoubleQuotedAttr(description);

    dom.enterDocument(`<div id="tooltipTrigger1" data-escape-title="false" data-title="${titleInAttr}" data-escape-description="false" data-description="${descriptionInAttr}">trigger</div>`);
    let trigger = dom.toElement('#tooltipTrigger1');

    tooltip = new Tooltip({
      delay: [0, 0],
      selector: '#tooltipTrigger1',
      visible: false,
    });
    dom.triggerEvent(trigger, 'mouseover');
    setTimeout(() => {
      expect(tooltip.title).toEqual(title);
      expect(tooltip.description).toEqual(description);
      done();
    }, 25);
  });
});
