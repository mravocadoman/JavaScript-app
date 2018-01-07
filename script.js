let list1 = document.querySelector('.list1');
let list2 = document.querySelector('.list2');
let list = document.getElementById('demo');
let liItems = document.querySelectorAll("li");


liItems.forEach(addClass);
    function addClass(oneLi, index){
      oneLi.addEventListener('click', listClicked);
    }
    function listClicked(evt){
      console.log(evt.target);
      evt.target.classList.toggle("stuff");
        
        
        
        if(evt.target.parentNode==list1){
            console.log('daddy is list1')
            list2.appendChild(evt.target)
        } else {
            console.log('daddy is list2')
            list1.appendChild(evt.target)
        }

    }

function changeText2(){ 
    let listitem = document.getElementById('listitem').value;
    if (listitem == "") {
        console.log("Empty")
    } else {
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(listitem));
    entry.addEventListener('click', listClicked);
    list.appendChild(entry);
    }
    

}




/*
let myHeader = document.createElement('h1');
myHeader.textContent='awesome';

list1.appendChild(myHeader)
list2.appendChild(myHeader)*/
