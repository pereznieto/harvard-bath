import xs from 'xstream';
import {div, input, h1, h2, h3, h4, p, span, hr} from '@cycle/dom';
import Helpers from '../utils/Helpers';

const intent = sources => ({
	surname$: Helpers.selectTarget(sources.DOM, '.surname'),
	initials$: Helpers.selectTarget(sources.DOM, '.initials'),
	year$: Helpers.selectTarget(sources.DOM, '.year'),
	title$: Helpers.selectTarget(sources.DOM, '.title'),
	edition$: Helpers.selectTarget(sources.DOM, '.edition'),
	place$: Helpers.selectTarget(sources.DOM, '.place'),
	publisher$: Helpers.selectTarget(sources.DOM, '.publisher')
});

const model = action => {
	return xs.combine(action.surname$, action.initials$, action.year$, action.title$, action.edition$, action.place$, action.publisher$)
		.map(([surnameRaw, initialsRaw, yearRaw, titleRaw, editionRaw, placeRaw, publisherRaw]) => {
			const surname = !!surnameRaw ? `${surnameRaw}, ` : '';
			const initials = !!initialsRaw ? `${initialsRaw}, ` : '';
			const year = !!yearRaw ? `${yearRaw}. ` : '';
			const title = !!titleRaw ? `_${titleRaw}_. ` : '';
			const edition = !!editionRaw ? `${editionRaw} ed. ` : '';
			const place = !!placeRaw ? `${placeRaw}: ` : '';
			const publisher = !!publisherRaw ? `${publisherRaw}.` : '';

			return `${surname}${initials}${year}${title}${edition}${place}${publisher}`
		});
};

const view = state =>
	state.map(details =>
		div([
			h1('Harvard (Bath) referencing style'),
			h2('Book with author'),
			h4('Format:'),
			p('.format', Helpers.italicise('Author’s surname(s), INITIALS., Year. _Title._ Edition (if not the first). Place of publication: Publisher.')),
			h4('Examples:'),
			p('.example', Helpers.italicise('Rang, H.P., Dale, M.M. Ritter, J.M., Flower, R.J. and Henderson, G., 2012. _Rang and Dale’s pharmacology._ 7th ed. Edinburgh: Elsevier Churchill Livingstone.')),
			p('.example', Helpers.italicise('Open University, 1972. _Electricity and magnetism._ Bletchley: Open University Press.')),
			h4('Note:'),
			p('.note', 'You can shorten the name of the publisher, e.g. for John Wiley and Sons Inc., use Wiley.'),
			hr(),
			h4('Inputs:'),
			input('.surname', {attrs: {type: 'text', placeholder: 'Surname(s)'}}),
			input('.initials', {attrs: {type: 'text', placeholder: 'Initials'}}),
			input('.year', {attrs: {type: 'text', placeholder: 'Year'}}),
			input('.title', {attrs: {type: 'text', placeholder: 'Title'}}),
			input('.edition', {attrs: {type: 'text', placeholder: 'Edition'}}),
			input('.place', {attrs: {type: 'text', placeholder: 'Place of publication'}}),
			input('.publisher', {attrs: {type: 'text', placeholder: 'Publisher'}}),
			!!details && div([
				h4('Result:'),
				p('.result', Helpers.italicise(details))
			])
		]));

export default sources => ({
	DOM: view(model(intent(sources)))
});
