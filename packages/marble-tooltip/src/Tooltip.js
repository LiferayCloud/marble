import dom from 'metal-dom';
import Soy from 'metal-soy';
import TooltipBase from './TooltipBase';
import xssFilters from 'xss-filters';

import templates from './Tooltip.soy.js';

/**
 * Tooltip component.
 */
class Tooltip extends TooltipBase {
  /**
   * @inheritDoc
   */
  syncVisible(visible) {
    super.syncVisible(visible);

    if (visible) {
      dom.addClasses(this.element, 'showing');
    } else {
      dom.removeClasses(this.element, 'showing');
    }
  }

  /**
   * @inheritDoc
   */
  syncCurrentAlignElement(alignElement, prevAlignElement) {
    if (alignElement) {
      const dataTitle = alignElement.getAttribute('data-title');
      if (dataTitle) {
        let escapeTitle = true;
        if (alignElement.getAttribute('data-escape-title') === 'false') {
          escapeTitle = false;
        }

        this.title = escapeTitle ? xssFilters.inHTMLData(dataTitle) : dataTitle;
      } else {
        this.title = '';
      }

      const dataDescription = alignElement.getAttribute('data-description');
      if (dataDescription) {
        let escapeDescription = true;
        if (alignElement.getAttribute('data-escape-description') === 'false') {
          escapeDescription = false;
        }
        this.description = escapeDescription ?
          xssFilters.inHTMLData(dataDescription) : dataDescription;
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
