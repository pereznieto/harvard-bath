import xs from 'xstream';
import _ from 'lodash';
import Helpers from '../utils/Helpers';

export default {
	bookWithAuthor: {
		name: 'Book with author',
		format: 'Author’s surname(s), INITIALS., Year. _Title._ Edition (if not the first). Place of publication: Publisher.',
		examples: [
			'Open University, 1972. _Electricity and magnetism._ Bletchley: Open University Press.',
			'Rang, H.P., Dale, M.M. Ritter, J.M., Flower, R.J. and Henderson, G., 2012. _Rang and Dale’s pharmacology._ 7th ed. Edinburgh: Elsevier Churchill Livingstone.'
		],
		notes: [
			'You can shorten the name of the publisher, e.g. for John Wiley and Sons Inc., use Wiley.'
		],
		inputs: [
			{
				name: 'surname',
				placeholder: 'Surname(s)*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'initials',
				placeholder: 'Initials*',
				model: input => !!input ? `${Helpers.parseInitials(input)}, ` : ''
			}, {
				name: 'year',
				placeholder: 'Year*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'title',
				placeholder: 'Title*',
				model: input => !!input ? `_${input}_. ` : ''
			}, {
				name: 'edition',
				placeholder: 'Edition',
				model: input => !!input ? `${input} ed. ` : ''
			}, {
				name: 'place',
				placeholder: 'Place of publication*',
				model: input => !!input ? `${_.startCase(input)}: ` : ''
			}, {
				name: 'publisher',
				placeholder: 'Publisher*',
				model: input => !!input ? `${input}.` : ''
			}
		]
	}
}
