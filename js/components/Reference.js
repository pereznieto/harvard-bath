import xs from 'xstream';
import {div, input, h1, h2, h3, h4, p, span, hr} from '@cycle/dom';
import _ from 'lodash';
import Helpers from '../utils/Helpers';
import Data from '../constants/data';

const intent = sources => {
	const action = {
		data: sources.data
	};
	_.each(sources.data.inputs, dataInput => action[`${dataInput.name}$`] = Helpers.selectTarget(sources.DOM, `.${dataInput.name}`));
	return action;
};

const model = action => xs.combine(action.data.model(action), xs.of(action.data)).map(([details, data]) => ({details, data}));

const view = state =>
	state.map(newState =>
		div([
			h1('Harvard (Bath) referencing style'),
			h2(newState.data.name),
			h4('Format:'),
			p('.format', Helpers.italicise(newState.data.format)),
			!_.isEmpty(newState.data.examples) && div([
				h4(`Example${newState.data.examples.length > 1 ? 's' : ''}:`),
				div(_.map(newState.data.examples, example => p('.example', Helpers.italicise(example))))
			]),
			!_.isEmpty(newState.data.notes) && div([
				h4(`Note${newState.data.notes.length > 1 ? 's' : ''}:`),
				div(_.map(newState.data.notes, note => p('.note', Helpers.italicise(note))))
			]),
			hr(),
			!_.isEmpty(newState.data.inputs) && div([
				h4('Inputs:'),
				div(_.map(newState.data.inputs, dataInput => input(`.${dataInput.name}`, {attrs: {type: 'text', placeholder: dataInput.placeholder}})))
			]),
			!!newState.details && div([
				h4('Result:'),
				p('.result', Helpers.italicise(newState.details))
			])
		]));

export default sources => {
	sources.data = Data.bookWithAuthor;
	return {DOM: view(model(intent(sources)))}
};
