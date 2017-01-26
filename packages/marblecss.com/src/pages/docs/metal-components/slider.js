'use strict';

import { core, string } from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';
import 'metal-slider'

import templates from './slider.soy';

class slider extends Component {

	scaleValueChanged(event, payload) {
		console.log("scaleValueChanged: " + event.newVal);
	}
};

Soy.register(slider, templates);

export default slider;