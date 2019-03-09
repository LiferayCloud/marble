import smartAvatar from 'smart-avatar';

import Component from 'metal-component';
import {Config} from 'metal-state';
import Soy from 'metal-soy';
import {isServerSide} from 'metal';
import templates from './Avatar.soy.js';

const nonSmallClassSubstrings = ['md', 'medium', 'lg', 'large'];

/**
 * Avatar component.
 */
class Avatar extends Component {
  /**
   */
  rendered() {
    if (isServerSide()) {
      return;
    }

    this.initAvatar();
  }

  /**
   */
  initAvatar() {
    const targetEl = this.element.querySelector('.sa-target');

    let resolution = 70;

    const nonSmall = nonSmallClassSubstrings.some(substring => this.elementClasses.includes(substring))

    if (nonSmall) {
      resolution = 120;
    }
    
    smartAvatar(targetEl, {
      email: this.email || null,
      hash: this.emailHash || null,
      initials: this.initials || null,
      src: this.photoUrl || null,
      resolution: resolution,
      cssClass: 'avatar avatar-initials' + (this.avatarColorIndex ? `color-avatar-${this.avatarColorIndex}` : ''),
      unstyled: true,
    })
  }
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
Avatar.STATE = {
  photoUrl: Config.string().value(''),
  emailHash: Config.string().value(''),
  initials: Config.string().value(''),
  email: Config.string().value(''),
  elementClasses: Config.string().value(''),
  avatarColorIndex: {},
}

Soy.register(Avatar, templates);

export {Avatar};
export default Avatar;
