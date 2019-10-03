import Component from 'metal-component';
import {Config} from 'metal-state';
import Soy from 'metal-soy';
import moment from 'moment-timezone';
import {updateMomentSyntax} from './syntax';
import templates from './Timestamp.soy.js';
import {isServerSide} from 'metal';


/**
 * Timestamp component.
 */
class Timestamp extends Component {
  /**
   */
  rendered() {
    if (isServerSide()) {
      return;
    }
    if (this.time) {
      updateMomentSyntax(this.type);
      const timestamp = parseInt(this.time, 10);
      this.label = moment(timestamp).fromNow(true);
      if (this.hasTitle) {
        const timezone = moment.tz.guess();
        this.title = moment(timestamp)
          .tz(timezone)
          .format('MMM DD YYYY, h:mma (UTCZ)');
      }
    }
  }
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
Timestamp.STATE = {
  childElementClasses: Config.string().value(''),
  elementClasses: Config.string().value(''),
  hasTitle: Config.bool().value(false),
  label: Config.string()
    .internal(true)
    .value(''),
  time: Config.number().value(0),
  title: Config.string()
    .internal(true)
    .value(undefined),
  type: Config.oneOf(['timestamp', 'duration'])
    .value('timestamp'),
};

Soy.register(Timestamp, templates);

export {Timestamp};
export default Timestamp;
