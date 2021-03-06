import xs from 'xstream';
import {div, input, select, option, h1, h2, h3, h4, p, span, hr, ul, li} from '@cycle/dom';
import _ from 'lodash';
import Helpers from '../utils/Helpers';
import Data from '../constants/data';

const intent = DOMSource => DOMSource
	.select('.refType')
	.events('change')
	.map(e => e.target.value)
	.startWith('bookWithAuthor')
	.map(refType => {
		const data = Data[refType];
		const action = {data};
		_.each(data.inputs, dataInput => action[`${dataInput.name}$`] = Helpers.selectTarget(DOMSource, `.${dataInput.name}`));
		return action;
	});

const model = newValues$ => newValues$
	.map(newValues => {
		const parseInputs = (...inputs) => Helpers.join(_.map(inputs, (input, i) => newValues.data.inputs[i].model(input)));
		return xs.combine.apply(this, _.map(_.omit(newValues, 'data'), input => input))
			.map(combinedInputs => ({
				details: parseInputs.apply(this, combinedInputs),
				data: newValues.data
			}));
	})
	.flatten();

const view = value$ => value$
	.map(value =>
		div('.page.reference', [
			h1('Harvard (Bath) referencing style'),
			h2(`How to reference: ${value.data.name}`),
			div('.c', [
				select('.refType', [
					option({attrs: {value: 'bookWithAuthor'}}, 'Book with author'),
					option({attrs: {value: 'bookWithAuthorOnline'}}, 'Book with author (online)'),
					option({attrs: {value: 'bookWithEditor'}}, 'Book with editor instead of author'),
					option({attrs: {value: 'bookWithEditorOnline'}}, 'Book with editor instead of author (online)'),
					option({attrs: {value: 'bookKnownByTitle'}}, 'Book usually known by its title'),
					option({attrs: {value: 'bookKnownByTitleOnline'}}, 'Book usually known by its title (online)'),
					option({attrs: {value: 'chapterInBook'}}, 'One chapter / paper from a collection in a book'),
					option({attrs: {value: 'journalArticle'}}, 'Journal article'),
					option({attrs: {value: 'journalArticleOnline'}}, 'Journal article (online)'),
					option({attrs: {value: 'website'}}, 'Websites'),
					option({attrs: {value: 'conferenceEditor'}}, 'Conference paper (when proceedings have a named editor)'),
					option({attrs: {value: 'conference'}}, 'Conference paper (when proceedings have no named editor)'),
					option({attrs: {value: 'newspaper'}}, 'Newspaper article'),
				])
			]),
			h4('Format:'),
			p('.format', Helpers.italicise(value.data.format)),
			!_.isEmpty(value.data.examples) && div([
				h4(`Example${value.data.examples.length > 1 ? 's' : ''}:`),
				div(_.map(value.data.examples, example => p('.example', Helpers.italicise(example))))
			]),
			!_.isEmpty(value.data.notes) && div([
				h4(`Note${value.data.notes.length > 1 ? 's' : ''}:`),
				ul(_.map(value.data.notes, note => li('.note', Helpers.italicise(note))))
			]),
			hr(),
			!_.isEmpty(value.data.inputs) && div('.m-m-b', [
				h4('.m-s-t', 'Inputs:'),
				div(_.map(value.data.inputs, dataInput => input(`.${dataInput.name}`, {attrs: {type: 'text', placeholder: dataInput.placeholder}})))
			]),
			!!value.details && div([
				h4('.b', 'Result:'),
				p('.result', Helpers.italicise(value.details))
			]),
			!value.details && div([
				p('.c.i.grey', 'Enter the details of the item you want to reference in the inputs above.')
			])
		])
	);

const Reference = sources => ({
	DOM: view(model(intent(sources.DOM)))
});

export default Reference;
