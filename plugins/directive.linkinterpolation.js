import Vue from 'vue'

export default ({ app: { router } }) => {
	Vue.directive('interpolation', {
		// Called only once, when the directive is first bound to the element.
		bind (el) {
			const baseURL = window.location.host
	
			// Hijack link click and process as local or external
			const navigate = event => {
				const item = event.currentTarget
				const href = item.getAttribute('href')

				if(item.host === baseURL) {
					event.preventDefault()
					const route = href.replace(item.origin, '')
					router.push(route)
				} else {
					item.setAttribute('target', '_blank')
				}
			}

			let links = el.getElementsByTagName('a')

			const addListeners = links => {
				for (let i = 0; i < links.length; i++) {
					links[i].addEventListener('click', navigate, false)
				}
			}

			const removeListeners = links => {
				for (let i = 0; i < links.length; i++) {
					links[i].removeEventListener('click', navigate, false)
				}
				links = []
			}

			addListeners(links)

			el.$componentUpdated = () => {
				removeListeners(links)
				Vue.nextTick(() => addListeners(links))
			}

			el.$destroy = () => el.removeEventListener('click', removeListeners(links))
		},

		// Called after the containing component’s VNode and the VNodes of its children have updated.
		componentUpdated: el => el.$componentUpdated(),

		// Called only once, when the directive is unbound from the element.
		unbind: el => el.$destroy()
	})
}