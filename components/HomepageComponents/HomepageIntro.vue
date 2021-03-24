<template>
	<VueSlickCarousel v-bind="settings" class="homepage-intro">
		<div v-for="item in rotator_items" :key="item.id">
			<div class="hi-item">
				<figure class="hi-image"><img :src="item.main_image" :alt="item.title"></figure>
			</div>
		</div>
    </VueSlickCarousel>
</template>

<script>
	import VueSlickCarousel from 'vue-slick-carousel';
	export default {
		components: {VueSlickCarousel},
		props: {
			"rotator_id": String
		},
		data(){
			return{
				rotators: this.$store.state.rotators,
				rotator_items: [],
				settings: {
					arrows: true,
					dots: false,
					fade: true
				}
			}
		},
		fetch: function(){	
			const rotator_items = this.rotators.filter(item => item.rotator_id == this.rotator_id);
			this.rotator_items = rotator_items[0].items;
		}
	}
</script>