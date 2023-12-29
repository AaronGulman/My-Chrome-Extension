let myLeads = [];
let btn = document.querySelector('#inputBtn')
let userInput = document.getElementById('userInput')
let uol = document.getElementById('ul');
let delBtn = document.querySelector('#deleteBtn')
let leadsFromLocalStorage = JSON.parse( localStorage.getItem('myLeads'))
let tabBtn = document.querySelector('#tab-btn')



if(leadsFromLocalStorage ){
	myLeads = leadsFromLocalStorage
	render(myLeads)
}

tabBtn.addEventListener('click',function(){
	chrome.tabs.query({
		active: true,
		currentWindow: true,
		lastFocusedWindow: true
	    }, function(tabs) {
		myLeads.push(tabs[0].url)
		localStorage.setItem("myLeads", JSON.stringify(myLeads));
		render(myLeads);
		})
})

function render(leads){
	let list = document.createElement('li')
	uol.appendChild(list);
	list.style.textDecoration='none';
	let listItems = ''


for(let i = 0; i < leads.length; i++){

listItems +=`
<li>
	<a target='_blank' href='${leads[i]}'>${leads[i]}</a>
 </li>`;
}
uol.innerHTML = listItems;

}

// Buttons

delBtn.addEventListener('dblclick', ()=>{
	localStorage.clear()
	myLeads = [];
	render(myLeads);
	
})

btn.addEventListener('click',()=>{
myLeads.push(userInput.value)
userInput.value = "";
localStorage.setItem("myLeads", JSON.stringify(myLeads));
render(myLeads);
})


