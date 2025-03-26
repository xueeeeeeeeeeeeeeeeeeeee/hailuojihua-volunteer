<template>
	<view>
		<image src="../../static/chailuo.png" mode="" @click="change"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad() {

		},
		methods: {
			change() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: function(res) {
						console.log(res.tempFiles[0]);
						var file = res.tempFiles[0];
						console.log(file);

						uni.uploadFile({
							url: 'http://47.113.227.126:21354//sign/upload?Authorization=6da8605d801000',
							filePath: file.path,
							name: 'file',
							formData: {
								// 可以在这里添加其他的表单数据
							},

							success: function(res) {
								if (res.data.code == 201) {
									uni.navigateTo({
										url: '/pages/login/login',
									});
								}
								console.log(res.data);
								var infodata = res.data.data;
								console.log(infodata);
								uni
									.switchTab({
										url: `/pages/userinfo/userinfo`,
									})
							},
							fail: function(res) {
								console.log(2);
								console.log(res.data);
							}
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss">

</style>