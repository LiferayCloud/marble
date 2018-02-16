import dom from 'metal-dom';
import TooltipBase from '../src/TooltipBase';

describe('TooltipBase', () => {
  var tooltip;

  afterEach(() => {
    if (tooltip) {
      tooltip.dispose();
    }
  });

  it('should show tooltip on mouseover by a selector after a delay', (done) => {
    dom.enterDocument('<div id="tooltipTrigger1">trigger</div>');
    var trigger = dom.toElement('#tooltipTrigger1');

    tooltip = new TooltipBase({
      delay: [0, 0],
      selector: '#tooltipTrigger1',
      visible: false
    });
    expect(!tooltip.visible).toBeTruthy();
    dom.triggerEvent(trigger, 'mouseover');
    setTimeout(() => {
      expect(tooltip.visible).toBeTruthy();
      expect(trigger).toBe(tooltip.currentAlignElement);
      dom.exitDocument(trigger);
      done();
    }, 25);
  });

  it('should hide tooltip on mouseout by a selector after a delay', (done) => {
    dom.enterDocument('<div id="tooltipTrigger2">trigger</div>');
    var trigger = dom.toElement('#tooltipTrigger2');

    tooltip = new TooltipBase({
      delay: [0, 0],
      selector: '#tooltipTrigger2',
      visible: true,
      alignElement: trigger
    });
    dom.triggerEvent(trigger, 'mouseout');
    setTimeout(() => {
      expect(!tooltip.visible).toBeTruthy();
      dom.exitDocument(trigger);
      done();
    }, 25);
  });

  it('should toggle tooltip on click by a selector after a delay', (done) => {
    dom.enterDocument('<div id="tooltipTrigger3">trigger</div>');
    var trigger = dom.toElement('#tooltipTrigger3');

    tooltip = new TooltipBase({
      delay: [0, 0],
      triggerEvents: ['click', 'click'],
      selector: '#tooltipTrigger3',
      visible: false
    });
    dom.triggerEvent(trigger, 'click');
    setTimeout(() => {
      expect(tooltip.visible).toBeTruthy();
      dom.triggerEvent(trigger, 'click');
      setTimeout(() => {
        expect(!tooltip.visible).toBeTruthy();
        dom.exitDocument(trigger);
        done();
      }, 25);
    }, 25);
  });

  it('should prevent tooltip to hide when mouseenter tooltip area', (done) => {
    dom.enterDocument('<div id="tooltipTrigger4">trigger</div>');
    var trigger = dom.toElement('#tooltipTrigger4');

    tooltip = new TooltipBase({
      delay: [0, 0],
      selector: '#tooltipTrigger4',
      visible: false
    });
    dom.triggerEvent(trigger, 'mouseover');
    setTimeout(() => {
      expect(tooltip.visible).toBeTruthy();
      dom.triggerEvent(trigger, 'mouseout');
      dom.triggerEvent(tooltip.element, 'mouseenter');
      setTimeout(() => {
        expect(tooltip.visible).toBeTruthy();
        dom.triggerEvent(tooltip.element, 'mouseleave');
        setTimeout(() => {
          expect(!tooltip.visible).toBeTruthy();
          dom.exitDocument(trigger);
          done();
        }, 25);
      }, 25);
    }, 25);
  });

  it('should set alignedPosition equal to position if well aligned to trigger', (done) => {
    dom.enterDocument('<div id="trigger">trigger</div>');
    var trigger = dom.toElement('#trigger');

    tooltip = new TooltipBase({
      position: TooltipBase.Align.Bottom,
      selector: '#trigger'
    });
    dom.triggerEvent(trigger, 'mouseover');

    tooltip.once('stateSynced', () => {
      tooltip.once('stateSynced', () => {
        expect(TooltipBase.Align.Bottom).toBe(tooltip.alignedPosition);
        dom.exitDocument(trigger);
        done();
      });
    });
  });

  it.skip('should set alignedPosition to the best found position that aligns well to trigger', (done) => {
    dom.enterDocument('<div id="trigger" style="width: 20px; height: 20px; position: absolute;">trigger</div>');
    var trigger = dom.toElement('#trigger');

    tooltip = new TooltipBase({
      position: TooltipBase.Align.Top,
      selector: '#trigger'
    });
    tooltip.element.style.width = '100px';
    tooltip.element.style.height = '30px';
    dom.triggerEvent(trigger, 'mouseover');

    tooltip.once('stateSynced', () => {
      tooltip.once('stateSynced', () => {
        expect(TooltipBase.Align.Right).toBe(tooltip.alignedPosition);
        dom.exitDocument(trigger);
        done();
      });
    });
  });

  it('should remove listeners when dettached', (done) => {
    dom.enterDocument('<div id="tooltipTrigger5">trigger</div>');
    var trigger = dom.toElement('#tooltipTrigger5');

    tooltip = new TooltipBase({
      delay: [0, 0],
      selector: '#tooltipTrigger5',
      visible: false
    });
    tooltip.detach();
    dom.triggerEvent(trigger, 'mouseover');
    setTimeout(() => {
      expect(!tooltip.visible).toBeTruthy();
      dom.exitDocument(trigger);
      done();
    }, 25);
  });

  it('should stick open if only changes alignElement', (done) => {
    dom.enterDocument('<div class="trigger" id="tooltipTrigger6">trigger</div>');
    dom.enterDocument('<div class="trigger" id="tooltipTrigger7">trigger</div>');
    var trigger = dom.toElement('#tooltipTrigger6');
    var triggerOther = dom.toElement('#tooltipTrigger7');

    tooltip = new TooltipBase({
      delay: [0, 0],
      triggerEvents: ['click', 'click'],
      selector: '.trigger'
    });
    dom.triggerEvent(trigger, 'click');
    setTimeout(() => {
      dom.triggerEvent(trigger, 'click');
      dom.triggerEvent(triggerOther, 'click');
      setTimeout(() => {
        expect(tooltip.visible).toBeTruthy();
        expect(triggerOther).toBe(tooltip.currentAlignElement);
        dom.exitDocument(trigger);
        dom.exitDocument(triggerOther);
        done();
      }, 25);
    }, 25);
  });

  it('should not throw error if showing tooltip while component is disposed', (done) => {
    dom.enterDocument('<div id="tooltipTrigger1">trigger</div>');
    var trigger = dom.toElement('#tooltipTrigger1');

    tooltip = new TooltipBase({
      delay: [0, 0],
      selector: '#tooltipTrigger1',
      visible: false
    });
    dom.triggerEvent(trigger, 'mouseover');
    tooltip.dispose();

    setTimeout(() => {
      dom.exitDocument(trigger);
      done();
    }, 25);
  });
});
