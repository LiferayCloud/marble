import dom from 'metal-dom';
import Soy from 'metal-soy';
import TooltipBase from './TooltipBase';

import templates from './Tooltip.soy.js';

/**
 * Tooltip component.
 */
class Tooltip extends TooltipBase {
  syncVisible(visible) {
    super.syncVisible(visible);

    if (visible) {
      dom.addClasses(this.element, 'showing');
    } else {
      dom.removeClasses(this.element, 'showing');
    }
  }

  syncCurrentAlignElement(alignElement, prevAlignElement) {
    if (alignElement) {
      const dataTitle = alignElement.getAttribute('data-title');
      if (dataTitle) {
        this.title = dataTitle;
      } else {
        this.title = '';
      }

      const dataDescription = alignElement.getAttribute('data-description');
      if (dataDescription) {
        this.description = dataDescription;
      } else {
        this.description = '';
      }
    }
    super.syncCurrentAlignElement(alignElement, prevAlignElement);
  }
}

Soy.register(Tooltip, templates);

Tooltip.Align = TooltipBase.Align;

export {Tooltip, TooltipBase};
export default Tooltip;
