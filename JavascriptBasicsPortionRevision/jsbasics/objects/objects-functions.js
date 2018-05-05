let myBook = {
    title : '1984',
    author : 'George Orwell',
    pageCount : 326
}

let otherBook = {
    title : 'A People\'s History',
    author : 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary : `${book.title} is ${book.pageCount} pages long`
    };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary);       //is an object

console.log(bookSummary.pageCountSummary);
console.log(bookSummary.summary);


let fahrenheitConvertor = function(fahren){
    let c = (fahren - 32)*(5/9);
    return {
        fahrenheit: fahren,
        celcius : c,
        kelvin : c+273
    }
};

console.log(fahrenheitConvertor(68).fahrenheit);