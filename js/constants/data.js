import xs from 'xstream';
import _ from 'lodash';
import Helpers from '../utils/Helpers';

export default {
	bookWithAuthor: {
		name: 'Book with author',
		format: 'Author’s surname(s), INITIALS., Year. __Title__. Edition (if not the first). Place of publication: Publisher.',
		examples: [
			'Open University, 1972. __Electricity and magnetism.__ Bletchley: Open University Press.',
			'Rang, H.P., Dale, M.M. Ritter, J.M., Flower, R.J. and Henderson, G., 2012. __Rang and Dale’s pharmacology.__ 7th ed. Edinburgh: Elsevier Churchill Livingstone.'
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
				model: input => !!input ? `__${input}__. ` : ''
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
		format: 'Editor’s surname, INITIALS., ed., Year. __Title__. Edition (if not the first). Place of publication: Publisher.',
		examples: [
			'Rothman, K.J., Greenland, S. and Lash, T.L., eds., 2008. __Modern epidemiology.__ 3rd ed. Philadelphia, Pa.: Lippincott Williams & Wilkins.'
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
				model: input => !!input ? `__${input}__. ` : ''
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
		format: '__Title__, Year. Edition (if not the first). Place of publication: Publisher.',
		examples: [
			'__Oxford English dictionary__, 1989. 2nd ed. Oxford: Clarendon Press.'
		],
		notes: [],
		inputs: [
			{
				name: 'title2',
				placeholder: 'Title*',
				model: input => !!input ? `__${input}__, ` : ''
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
		format: 'Author’s surname(s), INITIALS., Year. __Title__ [Online]. Edition (if not the first). Place of publication: Publisher. Available from: __URL__ [Accessed date].',
		examples: [
			'Carroll, L., 2008. __Alice’s adventure in wonderland__ [Online]. Salt Lake City: Project Gutenberg. Available from: __http://www.gutenberg.org/ebooks/11__ [Accessed 22 November 2012].'
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
				model: input => !!input ? `__${input}__ [Online]. ` : ''
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
				model: input => !!input ? `Available from: __${input}__ ` : ''
			}, {
				name: 'accessDate3',
				placeholder: 'Access Date*',
				model: input => !!input ? `[Accessed ${input}].` : ''
			}
		]
	},
	bookWithEditorOnline: {
		name: 'Book with editor instead of author (online)',
		format: 'Editor’s surname, INITIALS., ed., Year. __Title__ [Online]. Edition (if not the first). Place of publication: Publisher. Available from: __URL__ [Accessed date].',
		examples: [
			'Haynes, W.M., ed., 2014. __CRC handbook of chemistry and physics__ [Online]. 94th ed. Boca Raton, Fla.: CRC Press/Taylor and Francis. Available from: __http://www.hbcpnetbase.com__ [Accessed 16/06/2016].'
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
				model: input => !!input ? `__${input}__ [Online]. ` : ''
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
				model: input => !!input ? `Available from: __${input}__ ` : ''
			}, {
				name: 'accessDate4',
				placeholder: 'Access Date*',
				model: input => !!input ? `[Accessed ${input}].` : ''
			}
		]
	},
	bookKnownByTitleOnline: {
		name: 'Book usually known by its title (online)',
		format: '__Title__ [Online], Year. Edition (if not the first). Place of publication: Publisher. Available from: __URL__ [Accessed date].',
		examples: [
			'__The Merck index online__ [Online]. London: RSC Publishing. Available from: __http://www.rsc.org/Merck-Index__ [Accessed 16/06/2016].'
		],
		notes: [
			'If the e-book is a direct equivalent of a print book e.g. in PDF format, you can reference it as a normal print book.'
		],
		inputs: [
			{
				name: 'title5',
				placeholder: 'Title*',
				model: input => !!input ? `__${input}__ [Online], ` : ''
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
				model: input => !!input ? `Available from: __${input}__ ` : ''
			}, {
				name: 'accessDate5',
				placeholder: 'Access Date*',
				model: input => !!input ? `[Accessed ${input}].` : ''
			}
		]
	},
	chapterInBook: {
		name: 'One chapter / paper from a collection in a book',
		format: 'Author of paper’s surname, INITIALS., Year. Title of paper. In: INITIALS. Surname of author/editor of book, followed by ed. or eds. if relevant. __Title of book__. Edition (if not the first). Place of publication: Publisher, page numbers of paper or chapter.',
		examples: [
			'Reid, D.R., 1967. Physical testing of polymer films. In: S.H. Pinner, ed. __Modern packaging films__. London: Butterworths, pp.143–183.'
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
				model: input => !!input ? `__${input}__. ` : ''
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
		format: 'Author’s surname, INITIALS., Year. Title of article. __Title of journal__, Volume number(issue), page numbers.',
		examples: [
			'Newman, R., 2010. Malaria control beyond the decade. __British Medicine Journal__, 341(7765), pp.157-208.'
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
				model: input => !!input ? `__${input}__, ` : ''
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
		format: 'Author’s surname, INITIALS., Year. Title. __Journal title__ [Online], volume(issue). Available from: __URL__ [Accessed date].',
		examples: [
			'Williams, F., 1997. Electronic document delivery: a trial in an academic library. __Ariadne__ [Online], 10. Available from: __http://www.ariadne.ac.uk/issue10/edd/__ [Accessed 05/12/1997].'
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
				model: input => !!input ? `__${input}__ [Online], ` : ''
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
				model: input => !!input ? `Available from: __${input}__ ` : ''
			}, {
				name: 'accessDate8',
				placeholder: 'Access Date*',
				model: input => !!input ? `[Accessed ${input}].` : ''
			}
		]
	},
	website: {
		name: 'Websites',
		format: 'Author’s surname, INITIALS., Year (if known). __Title__ [Online]. (Edition if known). Place of publication: Publisher (if known). Available from: __URL__ [Accessed date].',
		examples: [
			'Holland, M., 2002. _Guide to citing internet sources_ [Online]. Poole: Bournemouth University. Available from: __http://www.bournemouth.ac.uk/library/using/guide_to_citing_internet_sourc.html__ [Accessed 04/11/2002].',
			'Wiltshire Council, 2015. _Get Wiltshire walking_ [Online]. Trowbridge: Wiltshire Council. Available from: __http://www.wiltshire.gov.uk/leisureandrecreation/sportphysicalactivity/getwiltshirewalking.html__ [Accessed 19/08/2015].'
		],
		notes: [
			'If a website has no personal author use the organisation publishing the website as author (see second example above).'
		],
		inputs: [
			{
				name: 'author9',
				placeholder: 'Author*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'year9',
				placeholder: 'Year',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'title9',
				placeholder: 'Title*',
				model: input => !!input ? `__${input}__ [Online]. ` : ''
			}, {
				name: 'edition9',
				placeholder: 'Edition',
				model: input => !!input ? `${input} ed. ` : ''
			}, {
				name: 'place9',
				placeholder: 'Place of publication',
				model: input => !!input ? `${input}: ` : ''
			}, {
				name: 'publisher9',
				placeholder: 'Publisher',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'url9',
				placeholder: 'URL*',
				model: input => !!input ? `Available from: __${input}__ ` : ''
			}, {
				name: 'accessDate9',
				placeholder: 'Access Date*',
				model: input => !!input ? `[Accessed ${input}].` : ''
			}
		]
	},
	conferenceEditor: {
		name: 'Conference paper (when proceedings have a named editor)',
		format: 'Author of paper’s surname, INITIALS., Year. Title of paper. In: INITIALS. surname of editor, ed. __Title of conference proceedings__, full date and place of conference. Place of publication: Publisher, page numbers of paper.',
		examples: [
			'Crawford, G.I., 1965. Oxygen in metals. In: J.M.A. Lenihan AND S.J. Thompson, eds. __Activation analysis: proceedings of a NATO Advanced Study Institute__, 2-4 August 1964 Glasgow. London: Academic Press, pp.113-118.'
		],
		notes: [],
		inputs: [
			{
				name: 'surnameA',
				placeholder: 'Surname(s)*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'initialsA',
				placeholder: 'Initials*',
				model: input => !!input ? `${Helpers.parseInitials(input)}, ` : ''
			}, {
				name: 'yearA',
				placeholder: 'Year*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'paperTitleA',
				placeholder: 'Title of Paper*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'initialsEditorA',
				placeholder: 'Editor’s initials*',
				model: input => !!input ? `In: ${Helpers.parseInitials(input)}, ` : ''
			},{
				name: 'surnameEditorA',
				placeholder: 'Editor’s surname(s)*',
				model: input => !!input ? `${input}, ed. ` : ''
			}, {
				name: 'conferenceTitleA',
				placeholder: 'Title of conference proceedings*',
				model: input => !!input ? `__${input}__, ` : ''
			}, {
				name: 'dateA',
				placeholder: 'Full date of proceedings*',
				model: input => !!input ? `${input} ` : ''
			}, {
				name: 'placeA',
				placeholder: 'Place of proceedings*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'placePublicationA',
				placeholder: 'Place of publication*',
				model: input => !!input ? `${input}: ` : ''
			}, {
				name: 'publisherA',
				placeholder: 'Publisher*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'pageStartA',
				placeholder: 'Paper’s start page*',
				model: input => !!input ? `pp.${input}–` : ''
			}, {
				name: 'pageEndA',
				placeholder: 'Paper’s end page*',
				model: input => !!input ? `${input}.` : ''
			}
		]
	},
	conference: {
		name: 'Conference paper (when proceedings have no named editor or are part of a major series)',
		format: 'Author of paper’s surname, INITIALS., Year. Title of paper. __Title of conference proceedings__, full date and place of conference. Place of publication: Publisher, page numbers of paper.',
		examples: [
			'Soper, D., 1972. Review of bracken control experiments with asulam. __Proceedings of the 11th British Weed Control Conference__, 15-17 November 1972 Brighton. Brighton: University of Sussex, pp.24-31.'
		],
		notes: [],
		inputs: [
			{
				name: 'surnameB',
				placeholder: 'Surname(s)*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'initialsB',
				placeholder: 'Initials*',
				model: input => !!input ? `${Helpers.parseInitials(input)}, ` : ''
			}, {
				name: 'yearB',
				placeholder: 'Year*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'paperTitleB',
				placeholder: 'Title of Paper*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'conferenceTitleB',
				placeholder: 'Title of conference proceedings*',
				model: input => !!input ? `__${input}__, ` : ''
			}, {
				name: 'dateB',
				placeholder: 'Full date of proceedings*',
				model: input => !!input ? `${input} ` : ''
			}, {
				name: 'placeB',
				placeholder: 'Place of proceedings*',
				model: input => !!input ? `${input}. ` : ''
			}, {
				name: 'placePublicationB',
				placeholder: 'Place of publication*',
				model: input => !!input ? `${input}: ` : ''
			}, {
				name: 'publisherB',
				placeholder: 'Publisher*',
				model: input => !!input ? `${input}, ` : ''
			}, {
				name: 'pageStartB',
				placeholder: 'Paper’s start page*',
				model: input => !!input ? `pp.${input}–` : ''
			}, {
				name: 'pageEndB',
				placeholder: 'Paper’s end page*',
				model: input => !!input ? `${input}.` : ''
			}
		]
	}
}
