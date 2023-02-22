const projectsList = document.querySelector('#projectsList')

const getRepos = () => {
	fetch('https://api.github.com/users/ViiKDev/repos')
		.then((response) => response.json())
		.then((data) => listRepos(data))
}

getRepos()

function listRepos(data) {
	for(let i = 0; i < data.length; i++) {
		let name = data[i].name
		if(name.includes('HCJ-') || name.includes('React-') || name.includes('uranimes')) {
			let li = createLi(name)
			projectsList.appendChild(li)
		}
	}
}

function createLi(name) {
	let li = document.createElement('li')
	
	let a = document.createElement('a')
	a.classList.add('projs')
	a.innerText = name
	a.href = `https://viikdev.github.io/${name}`
	a.target = '_blank'
	
	li.appendChild(a)
	return li
}