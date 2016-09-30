import {span} from '@cycle/dom';
import _ from 'lodash';

export default class Helpers {
	static selectTarget(source, selector, startWith) {
		return source.select(selector).events('input').map(e => e.target.value).startWith(startWith || '');
	}

	static italicise(string) {
		const parts = _.split(string, '__');

		switch (parts.length) {
			case 0:
			case 1:
			case 2:
			default:
				return string;
			case 3:
				return [parts[0], span('.i', parts[1]), parts[2]];
			case 4:
				return [parts[0], span('.i', parts[1]), parts[2], span('.i', parts[3])]
			case 5:
				return [parts[0], span('.i', parts[1]), parts[2], span('.i', parts[3]), parts[4]];
		}
	}

	static split(string) {
		return _.split(string, '');
	}

	static join(array) {
		return _.join(array, '');
	}

	static parseInitials(string) {
		const removeDots = array => _.filter(array, item => item !== '.');
		const addDots = array => _.map(array, item => `${item}.`);
		const parseInitials = _.flow([this.split, removeDots, addDots, this.join, _.toUpper]);

		return parseInitials(string);
	}
}
