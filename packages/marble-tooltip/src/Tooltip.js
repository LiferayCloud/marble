import dom from 'metal-dom';
import Soy from 'metal-soy';
import TooltipBase from './TooltipBase';
import xssFilters from 'xss-filters';

import templates from './Tooltip.soy.js';

const REGEX_ESCAPE = /__escape([\s\S]*?)escape__/gim;

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

        this.title = escapeTitle ? this.escape_(dataTitle) : dataTitle;
      } else {
        this.title = '';
      }

      const dataDescription = alignElement.getAttribute('data-description');
      if (dataDescription) {
        let escapeDescription = true;
        if (alignElement.getAttribute('data-escape-description') === 'false') {
          escapeDescription = false;
        }
        this.description = escapeDescription
          ? this.escape_(dataDescription)
          : dataDescription;
      } else {
        this.description = '';
      }
    }
    super.syncCurrentAlignElement(alignElement, prevAlignElement);
  }

  /**
   * Escapes content to be shown in HTML data.
   * @param {!string} content Data to be escaped
   * @return {string} Returns the escaped data
   */
  escape_(content) {
    let buffer = '';
    let match = REGEX_ESCAPE.exec(content);

    if (match === null) {
      return xssFilters.inHTMLData(content);
    } else {
      let lastIndex = 0;
      do {
        buffer += content.substring(lastIndex, match.index);
        if (match.index === REGEX_ESCAPE.lastIndex) {
          REGEX_ESCAPE.lastIndex++;
        }

        buffer += xssFilters.inHTMLData(match[1]);
        lastIndex = REGEX_ESCAPE.lastIndex;
      } while ((match = REGEX_ESCAPE.exec(content)) !== null);

      buffer += content.substring(lastIndex);
    }

    return buffer;
  }
}

Soy.register(Tooltip, templates);

Tooltip.Align = TooltipBase.Align;

export {Tooltip, TooltipBase};
export default Tooltip;
