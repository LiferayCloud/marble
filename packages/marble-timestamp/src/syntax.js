import moment from 'moment';

/**
 * Updates moment.js timestamp syntax
 * @param {string} type
 * @return {Object}
 */
export function updateMomentSyntax(type = 'timestamp') {
  let relativeTimeObject = {};

  if (type === 'timestamp') {
    relativeTimeObject = {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'now',
        ss: '%d sec ago',
        m: '1 min ago',
        mm: '%d min ago',
        h: '1 hour ago',
        hh: '%d hours ago',
        d: '1 day ago',
        dd: '%d days ago',
        M: '1 month ago',
        MM: '%d months ago',
        y: '1 year ago',
        yy: '%d years ago',
      },
    };
  } else if (type === 'duration') {
    relativeTimeObject = {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'now',
        ss: '%ds',
        m: '1min',
        mm: '%dmin',
        h: '1h',
        hh: '%dh',
        d: '1d',
        dd: '%dd',
        M: '1mo',
        MM: '%dmo',
        y: '1y',
        yy: '%dy',
      },
    };
  }

  return moment.updateLocale('en', relativeTimeObject);
}
