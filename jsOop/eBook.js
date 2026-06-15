import { Book } from './book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        console.log(
            `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, File Format: ${this.fileFormat}`
        );
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(format) {
        if (typeof format !== 'string') {
            console.log('File format must be a string');
        } else {
            this._fileFormat = format;
        }
    }

    static createFromBook (book, fileFormat) {
        return new EBook(
        book.title,
        book.author,
        book.year,
        fileFormat
    );
}
}

