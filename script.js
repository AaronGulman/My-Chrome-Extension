let myLeads = [];
let btn = document.querySelector('#inputBtn')
let userInput = document.getElementById('userInput')
let uol = document.getElementById('ul');
let delBtn = document.querySelector('#deleteBtn')

delBtn.addEventListener('dblclick', ()=>{
	localStorage.clear()
	myLeads = [];
	renderMyLeads();
	
})

function renderMyLeads(){
	let list = document.createElement('li')
	uol.appendChild(list);
	list.style.textDecoration='none';
let listItems = ''
for(let i = 0; i < myLeads.length; i++){

listItems +=`
<li>
	<a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
 </li>`;
}
uol.innerHTML = listItems;
}




let leadsFromLocalStorage = JSON.parse( localStorage.getItem('myLeads'))

if(leadsFromLocalStorage ){
	myLeads = leadsFromLocalStorage
	renderMyLeads()
}


btn.addEventListener('click',()=>{
myLeads.push(userInput.value)
userInput.value = "";
localStorage.setItem("myLeads", JSON.stringify(myLeads));
renderMyLeads();
})