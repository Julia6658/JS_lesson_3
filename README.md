# JS_lesson_3

Ответы на вопросы.
1) 2 дочерних элемента.<br>
2) document.querySelector("#input").value = "new value";<br>
3) 1 потомок <br>
4) Когда у elem два или более потомков, Когда у elem нет потомков
5) .classList
6) Устанавливает значение атрибута 
7) Вот тут вопрос, так как текст добавляется и менятеся через innerText, но это свойство, а не метод.
8) elem.innerHTML
9) объект события - это параметр функции-обработчика. Он содержит информацию и о произошедшем событии, и о «кликнутом» элементе.
10) BOM - это oбъектная модель браузера, предоставляет дополнительные объекты,чтобы работать со всем, кроме документа.
11) Таблица: let table = document.getElementbyId("age-table");<br>
Label: let labels = document.querySelectorAll("#age-table label");<br>
Форма: let form = document.querySelector("form[name='search-person']");

12) Через атрибут onclick у тега button  вызвать функцию changeHref() <br>

function changeHref() {
  window.location.href = 'https://www.wikipedia.org/'
}

