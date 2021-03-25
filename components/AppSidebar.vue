<template>
	<div class="sidebar">
		<ul class="sidebar-nav">
			<li v-for="item in items" :key="item.id"><nuxt-link :to="item.url"><span>{{ item.title }}</span></nuxt-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			"menu": String
		},
		data(){
			return{
				menus: this.$store.state.menus,
				items: []
			}
		},
		fetch: function(){
			const menu_items = this.menus.filter(item => item.menu == this.menu);
			this.items = menu_items[0].items;
		}
	}
</script>