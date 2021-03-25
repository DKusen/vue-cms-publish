<template>
	<div class="title-container" :class="compclass" :style="image">
		<div class="wrapper tc-wrapper">
			<h1>{{h1}}</h1>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TitleContainer',
		props:{
			"compclass": String,
			"h1": String,
			"mainImage": String
		},
		data(){
			return{
				image: {backgroundImage: `url(${this.mainImage})`},
			}
		},
		mounted(){
			//console.log(this.mainImage);
		}
	}
</script>