<template>
	<view class="content">
		<view class="swiperbox">
			<swiper class="swiper" circular :indicator-dots="true" autoplay="autoplay" interval="interval">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/1.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/2.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/3.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="centre">
			<view class="top">


				<view class="left" @click="enterhailuo">
					<image src="../../static/hailuoback.jpg" mode="aspectFill"></image>
					<view class="hailuo">
						<h2 class="on">
							海螺
						</h2>
						<p>志愿者服务</p>

						<image src="../../static/index/hailuo.png" mode="aspectFill"></image>


					</view>
				</view>
				<view class="right">
					<view class="paopao" @click="entergoodrequire">
						<image src="../../static/paopaoback.jpg" mode="aspectFill" class="paopaoback"></image>
						<h3 class="on">
							志愿者打分
						</h3>
						<p>留言</p>
						<image src="../../static/index/paopao.png" mode="aspectFill"></image>
					</view>
					<view class="shishu" @click="enterrequire">
						<image src="../../static/huodongback.jpg" mode="aspectFill" class="hailuoback"></image>
						<h3 class="on">
							回复帖子
						</h3>
						<p>志愿者服务</p>
						<image src="../../static/index/Volunteer.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<!-- 		<view class="bottom">
				<view class="onbottom">
					<p>我的志愿时数</p>
					<h2 v-if="infodata">{{infodata.currentActivitySeconds}}</h2>
				</view>

				<p>积分可以兑换美食券以及品牌周边哦</p>
			</view> -->
		</view>
		<!-- <view class="under">
			<view class="on">

				<view class="onleft">

				</view>
				<legend>
					推荐海螺
				</legend>
				<view class="onright">

				</view>
			</view>
			<view class="contentbottom">


				<view class="left">
					<view class="pink">

					</view>
				</view>
				<view class="right">
					<view class="pink">

					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: "",
				infodata: null,
				cishu: 20,
				shishu: 200
			}
		},

		onLoad() {
			this.token = uni.getStorageSync("token");
			let that = this;
			uni.getStorage({
				key: 'token',
				success: function(res) {
					that.token = res.data;
					console.log(res.data);
					that.returninfo();
				}
			});

			console.log(uni.$u.config.v);
		},

		methods: {
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
			entergoodrequire() {
				console.log(1);
				uni.navigateTo({
					url: '/pages/goodrequire/goodrequire'
				});
			},
			enterrequire() {
				console.log(1);
				uni.navigateTo({
					url: '/pages/requiretiezi/requiretiezi'
				});
			},
			enterhailuo() {
				uni.navigateTo({
					url: '/pages/myconch/myconch'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;

		.swiperbox {
			width: 400rpx;
			width: 100%;

			.swiper {
				height: 400rpx;

				.swiper-item {
					display: block;
					height: 400rpx;
					line-height: 300rpx;
					text-align: center;
					background: blue;

					image {
						height: 400rpx;
						width: 100%;
					}
				}
			}
		}

		.centre {


			.top {
				margin-top: 20rpx;
				width: 100%;
				height: 1000rpx;
				display: flex;
				align-items: center;
				justify-items: center;
				flex-direction: column;

				.left {
					position: relative;
					height: 600rpx;
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;

					image {
						position: absolute;
						height: 100%;
						width: 90%;
						border-radius: 10rpx;
					}

					.hailuo {
						border-radius: 10rpx;
						height: 100%;
						width: 90%;
						background-image: url("../../static/huodongback.jpg");
						display: flex;
						flex-direction: column;

						h2 {
							position: relative;
							top: 26rpx;
							left: 50rpx;
							color: white;
						}

						p {
							position: relative;
							top: 26rpx;
							left: 50rpx;
							font-size: 20rpx;
							color: white;
						}

						image {

							position: absolute;
							bottom: 370rpx;
							right: 550rpx;
							height: 50px;
							width: 120rpx;
						}
					}
				}

				.right {
					height: 370rpx;
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;

					.paopao {
						margin-top: 50rpx;
						border-radius: 10px;
						margin-right: 10rpx;
						width: 45%;
						height: 100%;
						background: linear-gradient(#b8c0ff, white);
						position: relative;

						.paopaoback {
							top: 0rpx;
							left: 0rpx;
							position: absolute;
							height: 100%;
							width: 100%;
							border-radius: 10rpx;
						}

						h3 {
							position: relative;
							top: 26rpx;
							left: 30rpx;
						}

						p {
							position: relative;
							top: 26rpx;
							left: 30rpx;
							font-size: 6rpx;
						}

						image {
							position: relative;
							bottom: 50rpx;
							right: -200rpx;
							height: 100rpx;
							width: 100rpx;
						}
					}

					.shishu {
						margin-top: 50rpx;
						border-radius: 10px;
						width: 45%;
						height: 100%;
						margin-left: 10rpx;
						background: linear-gradient(#b8c0ff, white);
						position: relative;

						.hailuoback {
							right: 0rpx;
							position: absolute;
							height: 100%;
							width: 100%;
							border-radius: 10rpx;
						}

						h3 {
							position: relative;
							top: 26rpx;
							left: 30rpx;
						}

						p {
							position: relative;
							top: 26rpx;
							left: 30rpx;
							font-size: 6rpx;
						}

						image {
							position: relative;
							bottom: 0rpx;
							right: -220rpx;
							height: 80rpx;
							width: 80rpx;
						}

					}
				}
			}

			.bottom {
				margin-top: 30rpx;
				padding-left: 60rpx;
				height: 120rpx;
				width: 100%;

				.onbottom {
					display: flex;
					justify-items: center;
					align-items: center;

					p {
						font-size: 50rpx
					}

					h2 {
						margin-left: 20rpx;
						font-size: 50rpx;
					}
				}
			}
		}

		.under {
			margin-top: 10rpx;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-items: center;
			height: 320rpx;
			width: 100%;

			.on {
				margin-bottom: 40rpx;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;

				.onleft {
					width: 30%;
					height: 8rpx;
					background: linear-gradient(to right, white, #a9b1ff);
				}

				legend {
					margin: auto;
				}

				.onright {
					width: 30%;
					height: 8rpx;
					background: linear-gradient(to right, #a9b1ff, white);
				}
			}

			.contentbottom {
				display: flex;

				align-items: center;
				justify-items: center;
				height: 320rpx;
				width: 100%;

				.left {
					flex-direction: column;
					display: flex;
					align-items: center;
					justify-items: center;
					height: 350rpx;
					width: 50%;

					.pink {
						border-radius: 30rpx;
						height: 100%;
						width: 80%;
						background: #fff3ee;
					}
				}

				.right {
					height: 350rpx;
					width: 50%;
					flex-direction: column;
					display: flex;
					align-items: center;
					justify-items: center;

					.pink {
						border-radius: 30rpx;
						height: 100%;
						width: 80%;
						background: #fff3ee;
					}
				}
			}
		}
	}
</style>