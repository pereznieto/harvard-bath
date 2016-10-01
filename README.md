# Harvard (Bath) references generator

### What
An easy-to-use online tool to format Harvard (Bath) references. You select what type of publication you want to reference and type its information in text fields. The tool gives you the properly-formatted reference for you to copy-paste into your bibliography.

### Why
The University of Bath uses a custom referencing format. There are many great tools out there to help out students and academics with reference formatting for the more common formats, like MLA, APA, and Harvard. I couldn't find any tool that did Harvard (Bath) style to the level of specificity that the University requires, so I decided to build one and make it publicly available.

### How (if you're techy)
Front-end–only web app built using Cycle.js (with xstream), written in ES6 and using some cool npm packages (like lodash). Built using functional reactive programming, because it's pretty cool, reduces ugly bugs, makes working with asynchronicity as easy as it'll ever be (probably), and is clear to read and easy to extend. Pretty powerful stuff. Very succinct too—the app's main logic is under 70 lines of code. So yeah, functional and reactive programming for the win.

### Where
#### Publicly
http://pereznieto.name/references/

#### Locally
Pull down the repo, run `npm start`, and point your browser to http://localhost:8080/

### Completeness
This is a work in progress. I'll progressively add more reference sources and maybe even some extra features.

*List of current sources:*

1. Book with author(s)
2. Book with editor(s) instead of author(s)
3. Book usually known by its title
4. One chapter / paper from a collection in a book
5. Electronic book
6. Journal article
7. E-journal article
8. Websites
9. Conference paper (when proceedings have a named editor)
10. Conference paper (when proceedings have no named editor or are part of a major series)
11. Newspaper article


#### Sources
Pretty much all data, formats, notes, and examples taken from: http://www.bath.ac.uk/library/infoskills/referencing-plagiarism/harvard-bath-style.html

#### Disclaimer
This was independently done by me, without sponsorship, instructions, responsibility or involvement from the University of Bath, other than making the link above available to everyone online.
Any typos, copy-paste mistakes, incompleteness, bugs, and pending features are my fault. If you find something that needs correcting, or have an awesome idea for new features, please raise an issue!
Happy for other people to contribute and raise PRs. Or fork and do their own stuff. Do what you want with it. Long live open source.
