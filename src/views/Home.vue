<template>
	<div class='home'>
		<div class='page'>		
			<HomePage  v-show="PageInfo == 'home'"></HomePage>
      

		</div>
	</div>
</template>

<script>
import HomePage from '../components/HomePage.vue'


export default {
	name: 'Home',
	components:{
		HomePage,

		
	},
	computed:{
    PageInfo() {
			return this.$store.state.pageInfo
		},
	
	},
	data() {
		return {
		};
	},
	mounted() {
		

	},
	methods: {
	}
};
</script>

<style lang='scss' scoped>
.home {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: visible;
}
.page {
	width: 3840px;
	height: 2160px;
	position: absolute;
	left: 0px;
	top: 0px;
}





// .page img{
// 	width: 1920px;
// 	height: 1080px;
// 	position: absolute;
// 	left: 0px;
// 	top: 0px;
// }
</style>
