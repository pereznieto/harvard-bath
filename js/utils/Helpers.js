import {i} from '@cycle/dom';

export default class Helpers {
	static selectTarget(source, selector, startWith) {
		return source.select(selector).events('input').map(e => e.target.value).startWith(startWith || '');
	}

	static italicise(string) {
		const parts = string.split('_');

		return parts.length < 3 ? string : [parts[0], i(parts[1]), parts[2]];
	}
}
