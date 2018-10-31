import React from 'react';
import Book from '../Components/Book';
import renderer from 'react-test-renderer';

const changeBookShelf = (newBook, newShelf) => {
  update(newBook, newShelf).then(response => {
      newBook.shelf = newShelf;

      let updatedBooks = this.state.books.filter(book => book.id !== newBook.id);
      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks })
  })
}

test('Rendering a book', () => {
  const book = {
		title: "Universal Artificial Intelligence",
    subtitle: "Sequential Decisions Based on Algorithmic Probability",
		authors: ["Marcus Hutter"],
		publisher: "Springer Science & Business Media",
		publishedDate: "2006-01-17",
		description: "Personal motivation. The dream of creating artificial devices that reach or outperform human inteUigence is an old one. It is also one of the dreams of my youth, which have never left me. What makes this challenge so interesting? A solution would have enormous implications on our society, and there are reasons to believe that the AI problem can be solved in my expected lifetime. So, it's worth sticking to it for a lifetime, even if it takes 30 years or so to reap the benefits. The AI problem. The science of artificial intelligence (AI) may be defined as the construction of intelligent systems and their analysis. A natural definition of a system is anything that has an input and an output stream. Intelligence is more complicated. It can have many faces like creativity, solving prob lems, pattern recognition, classification, learning, induction, deduction, build ing analogies, optimization, surviving in an environment, language processing, and knowledge. A formal definition incorporating every aspect of intelligence, however, seems difficult. Most, if not all known facets of intelligence can be formulated as goal driven or, more precisely, as maximizing some utility func tion. It is, therefore, sufficient to study goal-driven AI; e. g. the (biological) goal of animals and humans is to survive and spread. The goal of AI systems should be to be useful to humans.",
		industryIdentifiers: [{
			type: "ISBN_13",
			identifier: "9783540268772"
		}, {
			type: "ISBN_10",
			identifier: "3540268774"
		}],
		readingModes: {
			text: false,
			image: true
		},
		pageCount: 278,
		printType: "BOOK",
		categories: ["Computers"],
		maturityRating: "NOT_MATURE",
		allowAnonLogging: true,
		contentVersion: "1.4.1.0.preview.1",
		panelizationSummary: {
			containsEpubBubbles: false,
			containsImageBubbles: false
		},
		imageLinks: {
			smallThumbnail: "http://books.google.com/books/content?id=fhoonlqqGP8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
			thumbnail: "http://books.google.com/books/content?id=fhoonlqqGP8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
		},
		language: "en",
		previewLink: "http://books.google.com/books?id=fhoonlqqGP8C&printsec=frontcover&dq=artificial+intelligence&hl=&cd=5&source=gbs_api",
		infoLink: "https://play.google.com/store/books/details?id=fhoonlqqGP8C&source=gbs_api",
		canonicalVolumeLink: "https://market.android.com/details?id=book-fhoonlqqGP8C",
		id: "fhoonlqqGP8C",
		shelf: "currentlyReading"
  }
  
  const component = renderer.create(
    <Book book={book} changeShelf={changeBookShelf}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})