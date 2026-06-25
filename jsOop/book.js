//Завдання 1

//Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo.
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
//В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book.
// Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook
// (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
//Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для
// зміни та отримання значень властивостей.
//Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. Викличте його в
// коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
//Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook

export class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	printInfo() {
		console.log(
			`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`,
		);
	}

	get title() {
		return this._title;
	}

	set title(name) {
		if (typeof name !== 'string' || name.length === 0) {
			console.log('Title must be a string with min 1 character');
		} else {
			this._title = name;
		}
	}

	get author() {
		return this._author;
	}

	set author(name) {
		if (typeof name !== 'string' || name.length === 0) {
			console.log('Author must be a string with min 1 character');
		} else {
			this._author = name;
		}
	}

	get year() {
		return this._year;
	}

	set year(number) {
		if (typeof number !== 'number' || number <= 0) {
			console.log('Year must be a positive number');
		} else {
			this._year = number;
		}
	}

	static getOldestBook(books) {
		return books.reduce((oldest, book) =>
			book.year < oldest.year ? book : oldest,
		);
	}
}
