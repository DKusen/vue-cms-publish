<template>
	<div class="promo-zones">
		<div class="wrapper promo-zones-wrapper">
			<div class="promo-zone" v-for="item in rotator_items" :key="item.id">
				<nuxt-link :to="item.link" v-if="item.link">
					<figure class="promo-zone-image"><img :src="item.main_image" :alt="item.title"></figure>
					<div class="promo-zone-cnt">
						<h2>{{item.title}}</h2>
						<div class="promo-zone-description" v-if="item.content" v-html="item.content"></div>
					</div>
				</nuxt-link>
				<div v-else>
					<figure class="promo-zone-image"><img :src="item.main_image" :alt="item.title"></figure>
					<div class="promo-zone-cnt">
						<h2>{{item.title}}</h2>
						<div class="promo-zone-description" v-if="item.content" v-html="item.content"></div>
					</div>
				</div>
			</div>
		</div>  
	</div>
</template>

<script>
	export default {
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