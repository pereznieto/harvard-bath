import {i} from '@cycle/dom';
import _ from 'lodash';

export default class Helpers {
	static selectTarget(source, selector, startWith) {
		return source.select(selector).events('input').map(e => e.target.value).startWith(startWith || '');
	}

	static italicise(string) {
		const parts = _.split(string, '_');

		return parts.length < 3 ? string : [parts[0], i(parts[1]), parts[2]];
	}

	static _split(string) {
		return _.split(string, '');
	}

	static _join(array) {
		return _.join(array, '');
	}

	static parseInitials(string) {
		const removeDots = array => _.filter(array, item => item !== '.');
		const addDots = array => _.map(array, item => `${item}.`);
		const parseInitials = _.flow([this._split, removeDots, addDots, this._join, _.toUpper]);

		return parseInitials(string);
	}
}
