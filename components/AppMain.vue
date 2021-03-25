<template>
	<div class="main" :class="compclass">
		<div class="wrapper main-wrapper">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			"compclass": String,
		}
	}
</script>