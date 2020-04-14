const OlaMundo = {};

OlaMundo.install = function(Vue) {
	Vue.ola = () => {
		console.log('Olá mundo do vue com método global')
	}

	Vue.prototype.$ola = () => {
		console.log('Olá mundo do vue com método de instância')
	}

	Vue.directive('ola', {
		bind (el) {
			el.innerHTML = 'texto do puglin'
		}
	})

	Vue.mixin({
		created: () => {
			console.log('created executado pelo puglin')
		}
	})
}

export default OlaMundo