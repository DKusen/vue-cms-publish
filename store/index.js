export const state = () => ({
	labels: [],
	menus: [],
	rotators: [],
	page: {},
	layout: ''
})

export const mutations = {
	SET_LABELS(state, payload) {
		state.labels = payload;
	},

	SET_ROTATORS(state, payload) {
		state.rotators = payload;
	},

	SET_LAYOUT(state, layout) {
		state.layout = layout;
	},

	SET_PAGE(state, page) {
		state.page = page;
	}
}

export const actions = {
	/*
	nuxtServerInit(vueContext, context) {
		vueContext.commit('SET_LABELS', [{'identifier': 'copyright', 'content': 'Copyright content'}])
	}
	*/
	
	async nuxtServerInit(vueContext, context) {		
		/*
		let {data} = await this.$axios.$get('labels.json')
			commit('SET_LABELS', [{'identifier': 'copyright', 'content': 'Copyright content'}])
		*/
		
		await this.$axios.get('labels.json')
			.then(res => {
				//vueContext.commit('SET_LABELS', res.data);
				this.state.labels = res.data;
				//console.log(res.data);
			})
			.catch(e => context.error(e));
		/*
		await this.$axios.get('rotators.json')
			.then(res => {
				//vueContext.commit('SET_ROTATORS', res.data);
				this.state.rotators = res.data;
				//console.log(res.data);
			})
			.catch(e => context.error(e));
		*/
		await this.$axios.get('rotators.json')
			.then(res => {
				//console.log(res.data);
				//return vueContext.commit('SET_ROTATORS', res.data);
				this.state.rotators = res.data;
			})
			.catch(e => context.error(e));

		await this.$axios.get('menus.json')
			.then(res => {
				//console.log(res.data);
				//return vueContext.commit('setMenus', res.data);
				this.state.menus = res.data;
			})
			.catch(e => context.error(e));
	}
}

export const getters = {
	getLabel: (state) => (id) => {
		/*
		const l = state.labels.find(o => o.identifier == id);
		return l.content;
		*/

		const items = state.labels;
		let label;

		for (let i = 0; i < items.length; i++) {
			if(items[i].identifier == id){
				label = items[i].content;
				break;
			}
		}

		return label;
	}
}