'use strict';

import { core, string } from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './tooltip.soy';

class Tooltip extends Component {

	tooltipAlignElementChanged(event) {
		const value = event.newVal.getAttribute('alt');
		if (value) {
			this.components.tooltip.title = unescape(value);
		}
	}
};

Soy.register(Tooltip, templates);

export default Tooltip;