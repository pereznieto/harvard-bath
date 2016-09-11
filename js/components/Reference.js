import xs from 'xstream';
import {div, input, h1, h2, h3, h4, p, span, hr} from '@cycle/dom';
import _ from 'lodash';
import Helpers from '../utils/Helpers';
import Data from '../constants/data';

function intent(DOMSource) {
	return Helpers.selectTarget(DOMSource, '.refType', 'bookWithAuthor')
		.map(refType => {
			const data = Data[refType];
			const action = {data};
			_.each(data.inputs, dataInput => action[`${dataInput.name}$`] = Helpers.selectTarget(DOMSource, `.${dataInput.name}`));
			return action;
		});
};

function model(newValues$) {
	return newValues$.map(nV => xs.combine(nV.surname$, nV.initials$, nV.year$, nV.title$, nV.edition$, nV.place$, nV.publisher$)
		.map(([surnameRaw, initialsRaw, yearRaw, titleRaw, editionRaw, placeRaw, publisherRaw]) => {
			const dataInputs = nV.data.inputs;
			const surname = dataInputs[0].model(surnameRaw);
			const initials = dataInputs[1].model(initialsRaw);
			const year = dataInputs[2].model(yearRaw);
			const title = dataInputs[3].model(titleRaw);
			const edition = dataInputs[4].model(editionRaw);
			const place = dataInputs[5].model(placeRaw);
			const publisher = dataInputs[6].model(publisherRaw);

			return {
				details: `${surname}${initials}${year}${title}${edition}${place}${publisher}`,
				data: nV.data
			};
		})).flatten();
};

function view(value$) {
	return value$.map(value =>
		div([
			h1('Harvard (Bath) referencing style'),
			h2(value.data.name),
			input('.refType', {attrs: {type: 'text'}}),
			h4('Format:'),
			p('.format', Helpers.italicise(value.data.format)),
			!_.isEmpty(value.data.examples) && div([
				h4(`Example${value.data.examples.length > 1 ? 's' : ''}:`),
				div(_.map(value.data.examples, example => p('.example', Helpers.italicise(example))))
			]),
			!_.isEmpty(value.data.notes) && div([
				h4(`Note${value.data.notes.length > 1 ? 's' : ''}:`),
				div(_.map(value.data.notes, note => p('.note', Helpers.italicise(note))))
			]),
			hr(),
			!_.isEmpty(value.data.inputs) && div([
				h4('Inputs:'),
				div(_.map(value.data.inputs, dataInput => input(`.${dataInput.name}`, {attrs: {type: 'text', placeholder: dataInput.placeholder}})))
			]),
			!!value.details && div([
				h4('Result:'),
				p('.result', Helpers.italicise(value.details))
			])
		])
	);
}

let Reference = function(sources) {
	let value$ = model(intent(sources.DOM));
	let vtree$ = view(value$);
	return {
		DOM: vtree$,
		value: value$
	};
}

export default Reference;
