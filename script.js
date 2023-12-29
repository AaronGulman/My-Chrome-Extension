let myLeads = [];
let btn = document.querySelector('#inputBtn')
let userInput = document.getElementById('userInput')
let uol = document.getElementById('ul');


let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
console.log(leadsFromLocalStorage)


btn.addEventListener('click',()=>{
myLeads.push(userInput.value)
userInput.value = "";
localStorage.getItem("myLeads", JSON.stringify(myLeads));
renderMyLeads();
// verification
console.log(localStorage.getItem("myLeads"));
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

