'use strict';

import dom from 'metal-dom';
import Soy from 'metal-soy';
import TooltipBase from 'metal-tooltip';

import templates from './MarbleTooltip.soy.js';

/**
 * MarbleTooltip component.
 */
class MarbleTooltip extends TooltipBase {
	
	syncVisible(visible) {
		super.syncVisible(visible);

		if(visible) {
			dom.addClasses(this.element, 'showing');
		} else {
			dom.removeClasses(this.element, 'showing');
		}
	}

	syncCurrentAlignElement(alignElement, prevAlignElement) {
		this.currentAlignElement = alignElement;
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
Soy.register(MarbleTooltip, templates);

MarbleTooltip.Align = TooltipBase.Align;

export default MarbleTooltip;
export { MarbleTooltip, TooltipBase };
