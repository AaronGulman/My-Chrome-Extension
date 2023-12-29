let btn = document.querySelector('#inputBtn')
let myLeads = [];
let userInput = document.getElementById('userInput')

btn.addEventListener('click',()=>{
myLeads.push(userInput.value)
console.log(myLeads);
})

for(let i = 0; i < myLeads.length; i++){
	console.log(myLeads[i])
}