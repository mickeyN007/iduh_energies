import { mySettings } from './../../settings'

const {method, headers} = mySettings.optionsB

export function getProducts() {
	return fetch(mySettings.serverID+'api/getProducts')
	.then(products => products.json())
	.then(products => {
		const { data } = products
		// group products by sex
		let { result, categories } = groupArr(data, "sex")
		localStorage.setItem('products', JSON.stringify(result))
		localStorage.setItem('categories', JSON.stringify(categories))

		return true
	})
	.catch(err => {
		alert("Please check your internet connection and try again")
		return false
	})
}

export function groupArr(arr, key) {
	let categories = []
	let tmp = []
	let tmpB = []
	let result = arr.reduce(function (r, a) {
		if (a.sex == "m") {
			if (!tmp.includes(a.category)) {
				tmp.push(a.category)
				categories.push({category: a.category, sex: a.sex})
			}
		}
		else {
			if (!tmpB.includes(a.category)) {
				tmp.push(a.category)
				categories.push({category: a.category, sex: a.sex})
			}
		}
		r[a[key]] = r[a[key]] || [];
		r[a[key]].push(a);
		return r;
	}, Object.create(null));
	return {result, categories}
}

export function isLoggedIn() {
	// get and verify token
	var token = JSON.parse(localStorage.getItem('token'))
	if (token) {
		var body = JSON.stringify({token})
		var options = {body, method, headers}
		return fetch(mySettings.serverID+'api/verifyToken', options)
		.then(data => data.json())
		.then(data => {
			const { status } = data
			if (status) {
				return true
			}
			else {
			return false
			}
		})
		.catch(err => {
			alert('ggg')
			return false
		})
	}
	else {
		return false
	}
}

export function register(data) {
	const { email, password, zone, name } = data
	var body = JSON.stringify({ email, password, name, zone })
	var options = {body, method, headers}
	fetch(mySettings.serverID+'api/register', options)
	.then(data => data.json())
	.then (data => {
		//this.toggleLoading(false)
		if (data.status){
			alert(data.msg)
		}
		else {
			alert(data.msg)
		}
	})
	.catch(err =>{
		alert(err)
	})
}
export function logOut() {
	//alert('test')
	localStorage.clear()
	window.location.href = '/'
}

export function saveData(key, data) {
	localStorage.setItem(key, JSON.stringify(data))
}

export function getData(key) {
	return JSON.parse(localStorage.getItem(key))
}

/*
export function getUserDetails() {
	return JSON.parse(localStorage.getItem('user')).user
}

export function getUsers() {
	fetch(mySettings.serverID+'api/getUsers')
	.then(users => users.json())
	.then(users => {
		const { data } = users
		localStorage.setItem('users', JSON.stringify(data))
	})
	.catch(err => {
		alert('f')//"Please check your internet connection and try again")
	})
}

export function updateGroups(data) {
	var groups = retrieveGroups()
	const { name, count } = data
	var indx = groups.findIndex(element => element.name == name)
	groups[indx].count=count

	//alert()
	localStorage.setItem('branches', JSON.stringify(groups))
	window.location.reload()

}

function updateUserDetails(data) {
	var users = retrieveUsers()
	const { name, zone, email } = data
	var indx = users.findIndex(element => element.email == email)
	users[indx].name=name
	users[indx].zone=zone

	localStorage.setItem('users', JSON.stringify(users))
	//window.location.reload()
}
*/
