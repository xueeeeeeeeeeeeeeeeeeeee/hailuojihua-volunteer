<template>
	<view>
		<u-tabbar v-model="current" :list="list" :mid-button="true" @change="ChangBar"></u-tabbar>
	</view>
</template>

<script>
	export default {
		name: "tabbar",
		data() {
			return {
				list: [{
						"pagePath": "pages/home/home",
						iconPath: "static/tabbar/home1.jpg",
						selectedIconPath: "static/tabbar/home2.jpg",
						text: '首页',
						// count: 2,
						// isDot: true,
						customIcon: false,
					}, {
						"pagePath": "pages/hailuo/hailuo",
						iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
						text: '发布',
						midButton: true,
						customIcon: false,
					},
					{
						"pagePath": "pages/user/user",
						iconPath: "static/tabbar/user1.jpg",
						selectedIconPath: "static/tabbar/user2.jpg",
						text: '我的',
						customIcon: false,
					}
				],
				current: 0

			};
		},
		methods: {
			ChangBar(e) {
				uni.switchTab({
					url: '/' + this.list[e].pagePath
				})
			}
		}
	}
</script>

<style lang="scss">

</style>