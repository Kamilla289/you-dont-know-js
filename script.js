'use strict';

let bookItem = document.querySelectorAll('.book');
let bookList1 = document.querySelectorAll(".book")[0].querySelectorAll("li");
let bookList2 = document.querySelectorAll(".book")[5].querySelectorAll("li");
let bookList3 = document.querySelectorAll(".book")[2].querySelectorAll("li");
let newList = document.createElement('li');

let background = document.querySelectorAll('body');
let link = document.querySelectorAll('a');
let advLink = document.querySelector('.adv');

bookItem[0].before(bookItem[1]);
bookItem[2].before(bookItem[4]);
bookItem[5].after(bookItem[2]);

background[0].style.backgroundImage = "url('image/you-dont-know-js.jpg')";

link[4].textContent = 'Книга 3. this и Прототипы Объектов';

advLink.remove();

bookList1[10].after(bookList1[2]);
bookList1[8].after(bookList1[7]);
bookList1[3].after(bookList1[6]);
bookList1[6].after(bookList1[8]);

bookList2[1].after(bookList2[9]);
bookList2[7].after(bookList2[5]);
bookList2[4].after(bookList2[2]);

newList.textContent = 'Глава 8: За пределами ES6';

bookList3[8].append(newList);

// console.log(bookItem);
// console.log(bookList2);