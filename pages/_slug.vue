<template>
	
</template>

<script>
	import global from '@/mixins/global.js';
	export default {
		data() {
			return {
				item: this.$store.state.page
			}
		},
		middleware: 'layout',
		layout(context) {
			return context.store.state.layout;
		},
		head() {
			return {
				title: this.item.seo_title,
				meta: [
					{
						hid: 'keywords',
						name: 'keywords',
						content: this.item.keywords
					},
					{
						hid: 'description',
						name: 'description',
						content: this.item.description
					}
				]
			}
		},
		mixins: [global]
	}
</script>