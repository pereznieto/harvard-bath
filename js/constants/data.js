import xs from 'xstream';
import _ from 'lodash';
import Helpers from '../utils/Helpers';

export default {
	bookWithAuthor: {
		name: 'Book with author',
		format: 'Author’s surname(s), INITIALS., Year. _Title_. Edition (if not the first). Place of publication: Publisher.',
		examples: [
			'Open University, 1972. _Electricity and magnetism._ Bletchley: Open University Press.',
			'Rang, H.P., Dale, M.M. Ritter, J.M., Flower, R.J. and Henderson, G., 2012. _Rang and Dale’s pharmacology._ 7th ed. Edinburgh: Elsevier Churchill Livingstone.'
		],
		notes: [
			'You can shorten the name of the publisher, e.g. for John Wiley and Sons Inc., use Wiley.'
		],
		inputs: [
			{
				name: 'surname0',
				placeholder: 'Surname(s)*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'initials0',
				placeholder: 'Initials*',
				model: input => !!input ? `${Helpers.parseInitials(input)}, ` : ''
			}, {
				name: 'year0',
				placeholder: 'Year*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'title0',
				placeholder: 'Title*',
				model: input => !!input ? `_${input}_. ` : ''
			}, {
				name: 'edition0',
				placeholder: 'Edition',
				model: input => !!input ? `${input} ed. ` : ''
			}, {
				name: 'place0',
				placeholder: 'Place of publication*',
				model: input => !!input ? `${input}: ` : ''
			}, {
				name: 'publisher0',
				placeholder: 'Publisher*',
				model: input => !!input ? `${input}.` : ''
			}
		]
	},
	bookWithEditor: {
		name: 'Book with editor instead of author',
		format: 'Editor’s surname, INITIALS., ed., Year. _Title_. Edition (if not the first). Place of publication: Publisher.',
		examples: [
			'Rothman, K.J., Greenland, S. and Lash, T.L., eds., 2008. _Modern epidemiology._ 3rd ed. Philadelphia, Pa.: Lippincott Williams & Wilkins.'
		],
		notes: [
			'For US based publishers use the abbreviated form of the state, e.g. Pa. = Pennsylvania. See http://www.stateabbreviations.us/'
		],
		inputs: [
			{
				name: 'surname1',
				placeholder: 'Editor’s surname(s)*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'initials1',
				placeholder: 'Initials*',
				model: input => !!input ? `${Helpers.parseInitials(input)}, ed., ` : ''
			}, {
				name: 'year1',
				placeholder: 'Year*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'title1',
				placeholder: 'Title*',
				model: input => !!input ? `_${input}_. ` : ''
			}, {
				name: 'edition1',
				placeholder: 'Edition',
				model: input => !!input ? `${input} ed. ` : ''
			}, {
				name: 'place1',
				placeholder: 'Place of publication*',
				model: input => !!input ? `${input}: ` : ''
			}, {
				name: 'publisher1',
				placeholder: 'Publisher*',
				model: input => !!input ? `${input}.` : ''
			}
		]
	},
	bookKnownByTitle: {
		name: 'Book usually known by its title',
		format: '_Title_, Year. Edition (if not the first). Place of publication: Publisher.',
		examples: [
			'_Oxford English dictionary_, 1989. 2nd ed. Oxford: Clarendon Press.'
		],
		notes: [],
		inputs: [
			{
				name: 'title2',
				placeholder: 'Title*',
				model: input => !!input ? `_${input}_, ` : ''
			}, {
				name: 'year2',
				placeholder: 'Year*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'edition2',
				placeholder: 'Edition',
				model: input => !!input ? `${input} ed. ` : ''
			}, {
				name: 'place2',
				placeholder: 'Place of publication*',
				model: input => !!input ? `${input}: ` : ''
			}, {
				name: 'publisher2',
				placeholder: 'Publisher*',
				model: input => !!input ? `${input}.` : ''
			}
		]
	},
	bookWithAuthorOnline: {
		name: 'Book with author (online)',
		format: 'Author’s surname(s), INITIALS., Year. _Title_ [Online]. Edition (if not the first). Place of publication: Publisher. Available from: _URL_ [Accessed date].',
		examples: [
			'Carroll, L., 2008. _Alice’s adventure in wonderland_ [Online]. Salt Lake City: Project Gutenberg. Available from: _http://www.gutenberg.org/ebooks/11_ [Accessed 22 November 2012].'
		],
		notes: [
			'If the e-book is a direct equivalent of a print book e.g. in PDF format, you can reference it as a normal print book.'
		],
		inputs: [
			{
				name: 'surname3',
				placeholder: 'Surname(s)*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'initials3',
				placeholder: 'Initials*',
				model: input => !!input ? `${Helpers.parseInitials(input)}, ` : ''
			}, {
				name: 'year3',
				placeholder: 'Year*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'title3',
				placeholder: 'Title*',
				model: input => !!input ? `_${input}_ [Online]. ` : ''
			}, {
				name: 'edition3',
				placeholder: 'Edition',
				model: input => !!input ? `${input} ed. ` : ''
			}, {
				name: 'place3',
				placeholder: 'Place of publication*',
				model: input => !!input ? `${input}: ` : ''
			}, {
				name: 'publisher3',
				placeholder: 'Publisher*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'url3',
				placeholder: 'URL*',
				model: input => !!input ? `Available from: _${input}_ ` : ''
			}, {
				name: 'accessDate3',
				placeholder: 'Access Date*',
				model: input => !!input ? `[Accessed ${input}].` : ''
			}
		]
	},
	bookWithEditorOnline: {
		name: 'Book with editor instead of author (online)',
		format: 'Editor’s surname, INITIALS., ed., Year. _Title_ [Online]. Edition (if not the first). Place of publication: Publisher. Available from: _URL_ [Accessed date].',
		examples: [
			'Haynes, W.M., ed., 2014. _CRC handbook of chemistry and physics_ [Online]. 94th ed. Boca Raton, Fla.: CRC Press/Taylor and Francis. Available from: _http://www.hbcpnetbase.com_ [Accessed 16/06/2016].'
		],
		notes: [
			'If the e-book is a direct equivalent of a print book e.g. in PDF format, you can reference it as a normal print book.'
		],
		inputs: [
			{
				name: 'surname4',
				placeholder: 'Editor’s surname(s)*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'initials4',
				placeholder: 'Initials*',
				model: input => !!input ? `${Helpers.parseInitials(input)}, ed., ` : ''
			}, {
				name: 'year4',
				placeholder: 'Year*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'title4',
				placeholder: 'Title*',
				model: input => !!input ? `_${input}_ [Online]. ` : ''
			}, {
				name: 'edition4',
				placeholder: 'Edition',
				model: input => !!input ? `${input} ed. ` : ''
			}, {
				name: 'place4',
				placeholder: 'Place of publication*',
				model: input => !!input ? `${input}: ` : ''
			}, {
				name: 'publisher4',
				placeholder: 'Publisher*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'url4',
				placeholder: 'URL*',
				model: input => !!input ? `Available from: _${input}_ ` : ''
			}, {
				name: 'accessDate4',
				placeholder: 'Access Date*',
				model: input => !!input ? `[Accessed ${input}].` : ''
			}
		]
	},
	bookKnownByTitleOnline: {
		name: 'Book usually known by its title (online)',
		format: '_Title_ [Online], Year. Edition (if not the first). Place of publication: Publisher. Available from: _URL_ [Accessed date].',
		examples: [
			'_The Merck index online_ [Online]. London: RSC Publishing. Available from: _http://www.rsc.org/Merck-Index_ [Accessed 16/06/2016].'
		],
		notes: [
			'If the e-book is a direct equivalent of a print book e.g. in PDF format, you can reference it as a normal print book.'
		],
		inputs: [
			{
				name: 'title5',
				placeholder: 'Title*',
				model: input => !!input ? `_${input}_ [Online], ` : ''
			}, {
				name: 'year5',
				placeholder: 'Year*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'edition5',
				placeholder: 'Edition',
				model: input => !!input ? `${input} ed. ` : ''
			}, {
				name: 'place5',
				placeholder: 'Place of publication*',
				model: input => !!input ? `${input}: ` : ''
			}, {
				name: 'publisher5',
				placeholder: 'Publisher*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'url5',
				placeholder: 'URL*',
				model: input => !!input ? `Available from: _${input}_ ` : ''
			}, {
				name: 'accessDate5',
				placeholder: 'Access Date*',
				model: input => !!input ? `[Accessed ${input}].` : ''
			}
		]
	},
	chapterInBook: {
		name: 'One chapter / paper from a collection in a book',
		format: 'Author of paper’s surname, INITIALS., Year. Title of paper. In: INITIALS. Surname of author/editor of book, followed by ed. or eds. if relevant. _Title of book_. Edition (if not the first). Place of publication: Publisher, page numbers of paper or chapter.',
		examples: [
			'Reid, D.R., 1967. Physical testing of polymer films. In: S.H. Pinner, ed. _Modern packaging films_. London: Butterworths, pp.143–183.'
		],
		notes: [
			'Add ‘ed.’ after the book’s editors surname if book has an editor rather than an author.'
		],
		inputs: [
			{
				name: 'surname6',
				placeholder: 'Paper’s Author’s Surname(s)*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'initials6',
				placeholder: 'Paper’s Author’s Initials*',
				model: input => !!input ? `${Helpers.parseInitials(input)}, ` : ''
			}, {
				name: 'year6',
				placeholder: 'Year*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'title6',
				placeholder: 'Paper’s Title*',
				model: input => !!input ? `${input}. In: ` : ''
			}, {
				name: 'initialsBook6',
				placeholder: 'Book’s Author’s Initials*',
				model: input => !!input ? `${Helpers.parseInitials(input)}, ` : ''
			}, {
				name: 'surnameBook6',
				placeholder: 'Book’s Author’s Surname(s)*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'titleBook6',
				placeholder: 'Book’s Title*',
				model: input => !!input ? `_${input}_. ` : ''
			}, {
				name: 'edition6',
				placeholder: 'Edition',
				model: input => !!input ? `${input} ed. ` : ''
			}, {
				name: 'place6',
				placeholder: 'Place of publication*',
				model: input => !!input ? `${input}: ` : ''
			}, {
				name: 'publisher6',
				placeholder: 'Publisher*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'pageStart6',
				placeholder: 'Paper’s start page*',
				model: input => !!input ? `pp.${input}–` : ''
			}, {
				name: 'pageEnd6',
				placeholder: 'Paper’s end page*',
				model: input => !!input ? `${input}.` : ''
			}
		]
	},
	journalArticle: {
		name: 'Journal article',
		format: 'Author’s surname, INITIALS., Year. Title of article. _Title of journal_, Volume number(issue), page numbers.',
		examples: [
			'Newman, R., 2010. Malaria control beyond the decade. _British Medicine Journal_, 341(7765), pp.157-208.'
		],
		notes: [
			'You can give journal titles in full or abbreviate them, depending on the preference of your Department/tutor. If you can’t find the abbreviation, find and use the full title here: http://www.bath.ac.uk/library/help/infoguides/abbreviations.html'
		],
		inputs: [
			{
				name: 'surname7',
				placeholder: 'Surname(s)*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'initials7',
				placeholder: 'Initials*',
				model: input => !!input ? `${Helpers.parseInitials(input)}, ` : ''
			}, {
				name: 'year7',
				placeholder: 'Year*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'title7',
				placeholder: 'Article’s Title*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'titleJournal7',
				placeholder: 'Journal’s Title*',
				model: input => !!input ? `_${input}_, ` : ''
			}, {
				name: 'volume7',
				placeholder: 'Volume number*',
				model: input => !!input ? `${input}` : ''
			}, {
				name: 'issue7',
				placeholder: 'Issue*',
				model: input => !!input ? `(${input}), ` : ''
			}, {
				name: 'pageStart7',
				placeholder: 'Article’s start page*',
				model: input => !!input ? `pp.${input}–` : ''
			}, {
				name: 'pageEnd7',
				placeholder: 'Article’s end page*',
				model: input => !!input ? `${input}.` : ''
			}
		]
	},
	journalArticleOnline: {
		name: 'Journal article (online)',
		format: 'Author’s surname, INITIALS., Year. Title. _Journal title_ [Online], volume(issue). Available from: _URL_ [Accessed date].',
		examples: [
			'Williams, F., 1997. Electronic document delivery: a trial in an academic library. _Ariadne_ [Online], 10. Available from: _http://www.ariadne.ac.uk/issue10/edd/_ [Accessed 05/12/1997].'
		],
		notes: [
			'Look for a PDF version of the article online. This will almost always be identical to the print version, so even if you read it online you can reference it as a print journal article. As a general rule, if there are page numbers, reference the article as you would the print version, without the URL or [Online].',
			'You can give journal titles in full or abbreviate them, depending on the preference of your Department/tutor. If you can’t find the abbreviation, find and use the full title here: http://www.bath.ac.uk/library/help/infoguides/abbreviations.html'
		],
		inputs: [
			{
				name: 'surname8',
				placeholder: 'Surname(s)*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'initials8',
				placeholder: 'Initials*',
				model: input => !!input ? `${Helpers.parseInitials(input)}, ` : ''
			}, {
				name: 'year8',
				placeholder: 'Year*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'title8',
				placeholder: 'Article’s Title*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'titleJournal8',
				placeholder: 'Journal’s Title*',
				model: input => !!input ? `_${input}_ [Online], ` : ''
			}, {
				name: 'volume8',
				placeholder: 'Volume number*',
				model: input => !!input ? `${input}` : ''
			}, {
				name: 'issue8',
				placeholder: 'Issue*',
				model: input => !!input ? `(${input}), ` : ''
			}, {
				name: 'url8',
				placeholder: 'URL*',
				model: input => !!input ? `Available from: _${input}_ ` : ''
			}, {
				name: 'accessDate8',
				placeholder: 'Access Date*',
				model: input => !!input ? `[Accessed ${input}].` : ''
			}
		]
	}
}
