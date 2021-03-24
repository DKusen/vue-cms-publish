export default {
	methods: {
		cmslabel(id) {
			var l = this.$store.getters.getLabel(id);
			if(l) {
				return l;
			}
		}
	}
}