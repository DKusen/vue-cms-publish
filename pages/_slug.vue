<template>
	<div>
		<TitleContainer compclass="cms-title-container" :h1="pageTitle" :mainImage="pageImage" />
		<app-main compclass="cms-main">
			<AppSidebar menu="sidebar" />
			<div class="content-layout">
				<div class="content" v-interpolation v-html="item.content"></div>
			</div>	
		</app-main>
	</div>
</template>

<script>
	import global from '@/mixins/global.js';
	export default {
		data() {
			return {
				item: this.$store.state.page,
				pageTitle: this.$store.state.page.seo_title,
				pageImage: this.$store.state.page.main_image
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
		mounted(){
		},
		mixins: [global]
	}
</script>