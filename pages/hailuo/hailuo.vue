<template>
	<view class="content">
		<image src="../../static/chailuo.png" mode="aspectFill" class="chailuo" @click="enterhailuo"></image>
		<image src="../../static/bubble.png" mode="aspectFill" class="bubble1 bubble" @click="enterrand"></image>
		<image src="../../static/bubble.png" mode="aspectFill" class="bubble2 bubble" @click="enterrand"></image>
		<image src="../../static/bubble.png" mode="aspectFill" class="bubble3 bubble" @click="enterrand"></image>
		<image src="../../static/bubble.png" mode="aspectFill" class="bubble4 bubble" @click="enterrand"></image>
		<image src="../../static/bubble.png" mode="aspectFill" class="bubble5 bubble" @click="enterrand"></image>
		<image src="../../static/bubble.png" mode="aspectFill" class="bubble6 bubble" @click="enterrand"></image>
		<image src="../../static/bubble.png" mode="aspectFill" class="bubble7 bubble" @click="enterrand"></image>
		<image src="../../static/backgroundmain.jpg" mode="aspectFill" class="background" lazy-load></image>
		<view class="all">
			<view class="user" @click="enlong">
				<image :src="user.headpicurl" mode="aspectFill"></image>
			</view>
			<view :class="change">
				<view class="scroll">


					<view class="item" @click="enterbeike">
						<view class="image">
							<svg t="1699798311288" class="icon" viewBox="0 0 1879 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg" p-id="4313" width="50" height="50">
								<path
									d="M1445.290173 368.610405s-25.156069-108.319075-129.923699-125.336417c0 0-42.469364-183.639306-234.987283-133.17919 0 0-134.65896-152.268208-291.07052 0 0 0-175.944509-59.634682-235.135261 133.327167 0 0-135.842775 15.685549-136.878612 189.706359-1.035838 174.020809 213.974566 349.965318 249.784971 366.390751 0 0-57.710983 102.843931 53.715607 157.003468 111.278613 54.307514 407.528324 21.456647 447.630058-10.358381 40.101734-31.667052 62.298266-74.43237 34.182658-146.645087-0.147977 0.147977 289.146821-172.54104 242.682081-430.90867zM1077.271676 228.476301s78.723699-78.871676 136.434682 14.945664c55.047399 89.378035-107.13526 476.337572-207.463583 507.708671 0 0 97.960694-262.65896 71.028901-522.654335z m-237.206936 13.761849c12.282081-99.736416 85.086705-104.323699 85.086705-104.323699s140.134104-44.836994 102.252023 294.473988c-37.734104 339.163006-92.633526 324.809249-92.633526 324.809249-77.835838-27.96763-106.987283-415.223121-94.705202-514.959538z m-183.787283 1.183815c57.710983-93.965318 136.434682-14.945665 136.434682-14.945664-26.931792 259.995376 71.028902 522.654335 71.028901 522.654335-100.180347-31.371098-262.363006-418.330636-207.463583-507.708671z m-139.690174 201.248555c-10.210405-132.73526 86.27052-99.736416 86.27052-99.736416 7.10289 162.182659 166.769942 396.282081 166.91792 396.282081-63.186127-23.380347-242.978035-163.810405-253.18844-296.545665z m595.606937 440.971098c-94.853179 41.877457-332.8 14.501734-352.036995-1.183815-14.057803-11.39422 22.492486-67.477457 22.492486-67.477456 13.909827 8.730636 44.393064-5.179191 44.393064-5.179191 17.313295 16.721387 75.616185 5.327168 75.616185 5.327168 32.850867 23.084393 70.880925 0 70.880924 0 34.034682 12.430058 75.616185-5.327168 75.616185-5.327168 11.098266 9.322543 43.505202 5.179191 43.505203 5.327168 41.72948 59.634682 19.532948 68.513295 19.532948 68.513294z m-11.690174-144.425433s159.519075-234.099422 166.769942-396.282081c0 0 96.628902-32.998844 86.418498 99.736416-10.210405 132.883237-190.002312 273.165318-253.18844 296.545665z"
									fill="#13227a" p-id="4314"></path>
							</svg>
						</view>

						<p>贝壳广场</p>
					</view>
					<view class="item" @click="enterhailuo">
						<view class="image">
							<image src="../../static/index/hailuo.png" mode="aspectFill"></image>
						</view>

						<p>我的海螺</p>
					</view>
					<view class="item" @click="entersendpaopao">
						<view class="image">
							<image src="../../static/index/paopao.png" mode="aspectFill"></image>
						</view>

						<p>发出泡泡</p>
					</view>
					<view class="item" @click="enterpaopao">
						<view class="image">
							<image src="../../static/index/qipao.png" mode="aspectFill"></image>
						</view>

						<p>我的泡泡</p>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: '',
				change: 'user2',
				headpicurl: "",
				user: {
					userstate: 0,
					headpicurl: "../../static/user/headpic.jpg",
				}
			};
		},
		onLoad() {

			this.token = uni.getStorageSync("token");
			uni.getStorage({
				key: 'token',
				success: function(res) {
					this.token = res.data;
					console.log(res.data);
				}
			});
			this.returninfo();
		},
		onShow() {
			this.token = uni.getStorageSync("token");
			uni.getStorage({
				key: 'token',
				success: function(res) {
					this.token = res.data;
					console.log(res.data);
				}
			});
			this.returninfo();
		},
		methods: {
			entersendpaopao() {
				uni.navigateTo({
					url: '/pages/bubbledetail/bubbledetail'
				});
			},
			enterrand() {
				uni.request({
					url: 'http://47.113.227.126:21354/random_paopao',
					method: 'POST',

					header: {
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						if (res.data.code == 201) {
							uni.navigateTo({
								url: '/pages/login/login',
							})
						}
						this.content = res.data.data.content;
						console.log(res.data);
						uni.navigateTo({
							url: `/pages/bubbledetail/bubbledetail?status=1&content=${this.content}`
						});
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})

			},
			returninfo() {

				console.log(this.token);
				uni.request({
					url: 'http://47.113.227.126:21354/volunteer/get_info',
					method: 'POST',

					header: {
						'Authorization': this.token,
						'content-type': 'application/json;charset=UTF-8',

					},
					success: (res) => {
						if (res.data.code == 201) {
							uni.navigateTo({
								url: '/pages/login/login',
							})
						}
						console.log(res);
						this.user.headpicurl = "http://47.113.227.126:21354/uploadFile/" +
							res.data.data.id + ".jpg"
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
			enlong() {
				if (this.change == "active user2") {
					this.change = "user2"
				} else {
					this.change = "active user2"
				}
			},
			enterpaopao() {
				console.log(1);
				uni.navigateTo({
					url: '/pages/mybubble/mybubble'
				});
			},
			enterbeike() {
				uni.navigateTo({
					url: '/pages/tieba/tieba'
				});
			},
			enterhailuo() {
				console.log(1);
				uni.navigateTo({
					url: '/pages/myconch/myconch'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 1437rpx;
		width: 100%;
		position: relative;

		.scroll {
			padding-left: 20rpx;
			display: flex;
			align-items: center;
			width: 400rpx;
			overflow: hidden;
			overflow: scroll;
			white-space: nowrap;
		}

		.bubble1 {
			position: absolute;
			z-index: 2;
			width: 150rpx;
			height: 150rpx;

			margin-top: 100rpx;
			animation: ballShaking 3s infinite;
		}

		@keyframes ballShaking {
			0% {
				position: absolute;
				transform: translateY(0rpx);
			}

			50% {
				position: absolute;
				transform: translateY(20rpx);
			}

			100% {
				position: absolute;
				transform: translateY(0rpx);
			}
		}

		.bubble2 {
			position: absolute;
			z-index: 2;
			width: 150rpx;
			height: 150rpx;

			margin-left: 300rpx;
			margin-top: 200rpx;
			animation: ballShaking 3s infinite;
		}

		.bubble3 {
			position: absolute;
			z-index: 2;
			width: 150rpx;
			height: 150rpx;
			animation: ballShaking 3s infinite;
			margin-left: 500rpx;
			margin-top: 50rpx;
		}

		.bubble4 {
			position: absolute;
			z-index: 2;
			width: 150rpx;
			height: 150rpx;
			animation: ballShaking 3s infinite;
			margin-left: 0rpx;
			margin-top: 500rpx;
		}

		.bubble5 {
			position: absolute;
			z-index: 2;
			width: 150rpx;
			height: 150rpx;
			animation: ballShaking 3s infinite;
			margin-left: 200rpx;
			margin-top: 300rpx;
		}

		.bubble6 {
			position: absolute;
			z-index: 2;
			width: 150rpx;
			height: 150rpx;
			animation: ballShaking 3s infinite;
			margin-left: 500rpx;
			margin-top: 400rpx;
		}

		.bubble7 {
			position: absolute;
			z-index: 2;
			width: 150rpx;
			height: 150rpx;
			animation: ballShaking 3s infinite;
			margin-left: 250rpx;
			margin-top: 600rpx;
		}

		.chailuo {
			position: absolute;
			z-index: 2;
			width: 75rpx;
			height: 75rpx;
			margin-top: 850rpx;
			margin-left: 320rpx;
			animation: bigbig 5s infinite;
		}

		@keyframes bigbig {
			0% {
				transform: scale(0);
			}

			50% {
				transform: scale(1.5);
			}

			100% {
				transform: scale(0);
			}
		}

		.background {
			position: absolute;
			height: 1437rpx;
			width: 100%;
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



			.user2 {
				position: fixed;
				bottom: 130rpx;
				right: 20rpx;
				height: 150rpx;
				width: 150rpx;
				background: #f4e3d5;
				border-radius: 75rpx;
				overflow: hidden;
				display: flex;
				justify-content: center;
				align-items: center;
				transition-duration: 0.3s;



				.item {
					transform: translateX(-20rpx);
					height: 150rpx;
					width: 150rpx;
					display: flex;
					justify-content: center;
					flex-direction: column;

					image {
						margin-top: 5rpx;
						height: 95rpx;
						width: 115rpx;
					}

					p {
						font-size: 20rpx;
						color: #13227a;
						font-weight: bolder;
					}
				}
			}

			.active {
				width: 600rpx;
			}
		}
	}
</style>