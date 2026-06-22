import { Book } from './book.js';
import { EBook } from './eBook.js';

const book1 = new Book('Final Appeal', 'Remigiusz Mróz', 2015);
const book2 = new Book('The Disappearance', 'Remigiusz Mróz', 2014);
const book3 = new Book('Never Found', 'Remigiusz Mróz', 2018);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const eBook1 = new EBook(
	'A Good Girl Guide to Murder',
	'Holly Jackson',
	2019,
	'EPUB',
);

eBook1.printInfo();

const books = [book1, book2, book3, eBook1];

console.log(Book.getOldestBook(books));

console.log(EBook.createFromBook(book1, 'PDF'));
