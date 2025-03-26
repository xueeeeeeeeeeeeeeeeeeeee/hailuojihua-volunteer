<template>
	<view class="content">
		<image src="../../static/hailuo/background.png" mode="" lazy-load class="background"></image>

		<view class="allconch">
			<h1 class="title">我的海螺</h1>
			<p class="totle0">总计：{{conchs.length}}个海螺</p>
			<view class="incontent">
				<scroll-view class="allconchs" scroll-y="true">
					<view class="black"></view>
					<view class="conchs" @click="chagerighordown1">
						<image src="../../static/myconch/right.png" mode="aspectFill" v-if="conchliststate1=='right'">
						</image>
						<image src="../../static/myconch/down.png" mode="aspectFill" v-else></image>
						<p class="p1">接收的海螺</p>
						<p class="totle">{{conchs.length}}</p>

					</view>
					<view class="conchitem" v-show="conchliststate1=='down'" v-for="item in conchs"
						v-if="item.state!='已回收'">
						<image src="../../static/index/hailuo.png" mode="aspectFill"></image>
						<view class="conchstate">
							<view class="time">
								<p class="fssj">发送时间：</p>
								<p>{{item.lastTime}}</p>
							</view>
							<view class="acho">
								<p class="achoword">状态:</p>
								<p class="have">{{item.state}}</p>

							</view>
						</view>
						<view class="button1" @click="enterconch(item)">
							查看
						</view>
						<view class="red" v-if="item.unread==1">

						</view>
						<view class="button2" v-if="item.state=='已回收'">
							被回收
						</view>
					</view>
					<view class="black"></view>
					<view class="conchs" @click="chagerighordown2">
						<image src="../../static/myconch/right.png" mode="aspectFill" v-if="conchliststate2=='right'">
						</image>
						<image src="../../static/myconch/down.png" mode="aspectFill" v-else></image>
						<p class="p1">被回收的海螺</p>
						<p class="totle">{{totle2}}</p>
					</view>
					<view class="conchitem" v-show="conchliststate2=='down'" v-for="item in conchs"
						v-if="item.state=='已回收'">
						<image src="../../static/index/hailuo.png" mode="aspectFill"></image>
						<view class="conchstate">
							<view class="time">
								<p class="fssj">发送时间：</p>
								<p>{{item.lastTime}}</p>
							</view>
							<view class="acho">
								<p class="achoword">状态:</p>
								<p class="have">{{item.state}}</p>

							</view>
						</view>
						<view class="button1" @click="enterconch(item)">
							查看
						</view>
						<view class="button2" v-if="item.state=='已回收'">
							被回收
						</view>
					</view>
				</scroll-view>

			</view>
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
				infodata: null,
				user: {
					userstate: 0,
					headpicurl: "../../static/user/headpic.jpg",
				},
				totle1: 0,
				totle2: 0,
				conchliststate1: "right",
				conchliststate2: "right",
				conchs: []
			};
		},
		watch: {

		},
		onLoad() {
			this.token = uni.getStorageSync("token");
			this.returninfo();
			this.getconchS();
			uni.connectSocket({
				url: 'ws://47.113.227.126:21354/chat/2',

			});
			uni.onSocketMessage(function(res) {
				this.getconchS();
			});
		},
		onShow() {
			this.getconchS();
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
					url: 'http://47.113.227.126:21354/sign/get_info',
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
			getconchS() {
				uni.request({
					url: 'http://47.113.227.126:21354/hailuo/all',
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
						this.conchs = res.data.data;
						console.log(this.infodata);
						this.conchs.forEach((item, index) => {
							if (item.state == "已回收") {
								this.totle2++;
							} else {
								this.totle1++;
							}
						});
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			enterconch(item) {
				console.log(item);
				uni.navigateTo({
					url: `/pages/hailuochat/hailuochat?id=${item.hailuo_id}`
				});
			},
			chagerighordown1() {
				if (this.conchliststate1 == "right") {
					this.conchliststate1 = "down";
				} else {
					this.conchliststate1 = "right";
				}
			},
			chagerighordown2() {
				if (this.conchliststate2 == "right") {
					this.conchliststate2 = "down";
				} else {
					this.conchliststate2 = "right";
				}
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

		.allconch {
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

			.totle0 {
				font-size: 35rpx;
				font-weight: bolder;
				color: #1c2b80;
				margin-right: -300rpx;
			}

			.allconchs {
				display: flex;
				flex-direction: column;
				height: 900rpx;

				.black {
					margin-top: 20rpx;
					width: 600rpx;
					height: 2rpx;
					background: black;
				}

				.conchs {
					position: relative;
					display: flex;
					width: 600rpx;
					height: 50rpx;
					padding-left: 5rpx;
					padding-top: 10rpx;

					image {

						height: 40rpx;
						width: 40rpx;
					}

					.p1 {
						font-size: 33rpx;
						font-weight: bolder;
						color: #1c2b80;
					}

					.totle {
						position: absolute;
						right: 0rpx;
					}


				}

				.conchitem {
					transition-duration: 0.3s;
					margin-top: 5rpx;
					position: relative;
					margin-bottom: 20rpx;
					overflow: visible;
					height: 100rpx;
					width: 600rpx;
					display: flex;
					justify-content: center;
					align-items: center;

					image {
						height: 60rpx;
						width: 80rpx;
					}

					.conchstate {
						height: 100rpx;
						width: 400rpx;
						margin-left: 10rpx;

						.time {
							display: flex;

							.fssj {
								font-size: 30rpx;
								font-weight: bolder;
								color: #2e3b89;
							}
						}

						.acho {
							font-size: 30rpx;
							margin-top: -10rpx;
							display: flex;

							.achoword {
								font-size: 30rpx;
								font-weight: bolder;
								color: #2e3b89;
								margin-right: 10rpx;
							}

							.have {
								font-size: 30rpx;
								font-weight: bolder;
								color: #2e3b89;
								margin-right: 10rpx;
							}

							.wu {
								font-size: 30rpx;
								font-weight: bolder;
								color: #ffaf16;
								margin-right: 10rpx;
							}
						}
					}

					.red {
						position: absolute;
						right: 5rpx;
						top: 10rpx;
						background-color: red;
						border-radius: 50%;
						height: 25rpx;
						width: 25rpx;
					}

					.button1 {
						border-radius: 20rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						color: white;
						background: #13227a;
						font-size: 28rpx;
						height: 60rpx;
						width: 100rpx;
						line-height: 100rpx;
					}

					.button2 {
						margin-left: 5rpx;
						margin-right: -9rpx;
						border-radius: 20rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						color: white;
						background: #008733;
						font-size: 28rpx;
						height: 60rpx;
						width: 110rpx;
						line-height: 100rpx;
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