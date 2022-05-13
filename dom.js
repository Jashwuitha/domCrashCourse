// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 'Jashu';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all); m,
// console.log(document.all[10]);
// document.all[10].textContent="Mani";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GET ELEMENT BY ID
// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var headerTitle=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='hello';
// headerTitle.innerText='Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>MANI</h3>';
// headerTitle.style.borderBottom='solid 3px #000';

// GET ELEMENT BY CLASSNAME //
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent="Mani";
// items[1].style.fontWeight="bold";  
// items[1].style.backgroundColor="orange";

// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }

// GET ELEMENT BY TAGNAME //
//var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent="Mani";
// li[1].style.fontWeight="bold";  
// li[1].style.backgroundColor="orange";

// for(var i=0; i s< li.length; i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

//  QUERY SELECTOR //
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='Hello World'

// var submit=document.querySelector('input[type="submit"]');
// submit.value="send"

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='coral';

// QUERYSELECTORALL //
// var titles=document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundcolor="f4f4f4";
//     even[i].style.backgroundcolor='#ccc';
// }

//  TRAVERSIMNG THE DOM //

// var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentElewment);
// itemList.parentElement.style.backgroundColor='f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// CHILD NODES
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundcolor='yellow';

// // firstchild
// console.log(itemList.firstchild);
// // first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello 1';

// l;ast child
// console.log(itemList.firstchild);
// // first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello 4';

// nextsibling
// console.log(itemList.nextSibling);
// // nextelementsibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// // previouselementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

// // createElement

// // create a div
// var newDiv=document.createElement('div');

// // Add class
// newDiv.className='hello';

// // Add id
// newDiv.id='hello1';

// // Add attr
// newDiv.setAttribute('title','hello Div');

// // create textnode
// var newDivText=document.createTextNode('hello world');

// // Add  text to div
// newDiv.appendChild(newDivText);

// var container=document.querySelector('header .container');
// var h1=document.querySelector("header h1");

// console.log(newDiv);

// newDiv.style.fontSize='30px';

// container.insertBefore(newDiv, h1);

//                 // EVENTS

// var button=document.getElementById('button').addEventListener
// ('click', buttonclick);

// function buttonclick(e){
    // console.log("button clicked");
    // document.getElementById('header-title').textContent='changed';
    // document.querySelector('#main').style.backgroundcolor=
    // '#f4f4f4';
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output=document.getElementById('output');
    // output.innerHTML='<h3>'+e.target.id+'<h3>';
    // console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);

// }


var button=document.getElementById('button');
var box=document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mousedown', runEvent);

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseout',runEvent);
// box.addEventListener('mouseover',runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput=document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('cut', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change',runEvent);
// select.addEventListener('input',runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);

    // console.log(e.target.value);

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML=
    // '<h3>'+e.target.value+'</h3>';

    // output.innerHTML='<h3>mouseX' +e.offsetX+'</h3><h3>mouseY:'
    // +e.offsetY+'</h3>';

    // document.body.style.backgroundColor="rgb("+e.offsetX+","
    // +e.offsetY+",40)";
}


