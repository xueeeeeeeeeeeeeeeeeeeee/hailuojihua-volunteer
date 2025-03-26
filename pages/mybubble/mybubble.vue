<template>
	<view class="content">
		<image src="../../static/hailuo/background.png" mode="" lazy-load class="background"></image>

		<view class="allbubble">
			<h1 class="title">我的泡泡</h1>
			<p>总计：{{bubbles.length}}个泡泡</p>
			<scroll-view class="bubbles" scroll-y="true">
				<view class="bubbleitem" v-for="item in bubbles" :key="item.bid">
					<image src="../../static/index/paopao.png" mode="aspectFill"></image>
					<p>发出时间：{{item.send_time}}</p>

					<view class="button" @click="enterbubble(item)">
						查看
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="all">

			<view class="user">
				<image :src="user.headpicurl" mode="aspectFill"></image>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: "",
				change: 'user2',
				user: {
					userstate: 0,
					headpicurl: "../../static/user/headpic.jpg",
				},
				totle: 10,
				bubbles: []
			};
		},
		onLoad() {
			this.token = uni.getStorageSync("token");
			this.getbubbles();
			this.returninfo();
		},
		watch: {

		},
		methods: {
			returninfo() {
				uni.request({
					url: 'http://47.113.227.126:21354/volunteer/get_info',
					method: 'POST',

					header: {
						'Authorization': this.token,
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						if (res.data.code == 201) {
							uni.navigateTo({
								url: '/pages/login/login',
							})
						}
						this.user.headpicurl = "http://47.113.227.126:21354/uploadFile/" + res.data.data.id +
							".jpg"
						console.log(res.data);
						this.infodata = res.data.data;
						console.log(this.infodata);
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
				uni.request({
					url: 'http://47.113.227.126:21354/user/get_info',
					method: 'POST',

					header: {
						'Authorization': this.token,
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						if (res.data.code == 201) {
							uni.navigateTo({
								url: '/pages/login/login',
							})
						}
						console.log(res.data);
						this.userinfo = res.data.data;
						console.log(this.userinfo);
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			getbubbles() {
				uni.request({
					url: 'http://47.113.227.126:21354/volunteer/get_all_paopao',
					method: 'POST',
					header: {
						'Authorization': this.token,
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						if (res.data.code == 201) {
							uni.navigateTo({
								url: '/pages/login/login',
							})
						}
						this.bubbles = res.data.data;
						console.log(res.data);
						console.log(this.bubbles);
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			enterbubble(item) {
				uni.navigateTo({
					url: `/pages/bubbledetail/bubbledetail?status=1&paopao_id=${item.paopao_id}&content=${item.content}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 1437rpx;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		.background {
			position: absolute;
			height: 1437rpx;
			width: 100%;
		}

		.allbubble {
			position: relative;
			margin-top: -200rpx;
			width: 680rpx;
			height: 1150rpx;
			background: white;
			border-radius: 30rpx;
			border-top: 8rpx #7692ca solid;
			border-bottom: 8rpx #7692ca solid;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			align-items: center;
			z-index: 4;

			.title {
				margin-top: 10rpx;
				margin-left: 20rpx;
				color: #1c2b80;
				font-size: 60rpx;
				font-weight: 200rpx;
			}


			p {
				font-size: 35rpx;
				font-weight: bolder;
				color: #1c2b80;
				margin-right: -300rpx;
			}

			.bubbles {
				overflow: hidden;

				.bubbleitem {
					height: 130rpx;
					width: 100%;

					margin-top: 20rpx;
					display: flex;
					align-items: center;

					image {
						height: 100rpx;
						width: 90rpx;
						margin-left: 20rpx;
					}

					p {
						font-size: 28rpx;
						width: 750rpx;
					}

					.button {
						height: 60rpx;
						width: 100rpx;
						color: white;
						border-radius: 20rpx;
						background: #1c2b80;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}
			}
		}

		.all {
			.user {
				height: 150rpx;
				width: 150rpx;
				background: #333;
				border-radius: 50%;
				position: fixed;
				bottom: 130rpx;
				right: 20rpx;
				z-index: 1;

				image {
					height: 150rpx;
					width: 150rpx;
					border-radius: 50%;
				}
			}




		}
	}
</style>