<template>
	<view class="content">
		<image src="../../static/hailuo/background.png" mode="" lazy-load class="background"></image>

		<view class="writebubble">
			<h1 class="title">泡泡留言：</h1>
			<p class="word">{{bubbleword}}</p>
			<view class="input" adjust-position v-if="status">
				<input @focus="changeing" @blur="lose" @input="oninput" class="uni-input" focus placeholder="请输入..."
					:value="bubbleinput" />
				<image src="../../static/index/paopao.png" mode="aspectFill" v-if="inputting==0"></image>
				<view class="inputting" @click="send" v-else>
					发送
				</view>
			</view>
		</view>
		<view class="all">

			<view class="user" @click="enlong">
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
				status: true,
				user: {
					userstate: 0,
					headpicurl: "../../static/user/headpic.jpg",
				},
				bubbleinput: "",
				bubbleword: "",
				inputting: 0,
			};
		},
		onLoad(e) {
			this.token = uni.getStorageSync("token");
			this.returninfo();
			if (e.status == 1) {
				console.log(e);
				this.status = false;
				this.bubbleword = e.content;
			}
		},
		watch: {
			bubbleinput: function(newName, oldName) {
				if (newName == "") {
					console.log(1);
					this.inputting = 0;
				} else {
					this.inputting = 1;
				}

			}
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
			enlong() {
				if (this.change == "active user2") {
					this.change = "user2"
				} else {
					this.change = "active user2"
				}
			},
			changeing() {
				this.inputting = 1;
				console.log(this.bubbleinput);
			},
			oninput(e) {
				this.bubbleinput = e.detail.value;
			},
			lose() {
				if (this.bubbleinput == "") {
					this.inputting = 0
				}
			},
			send() {
				console.log("send");
				this.bubbleword = this.bubbleinput;
				uni.request({
					url: 'http://47.113.227.126:21354/volunteer/send_paopao',
					method: 'POST',
					data: {
						content: this.bubbleinput,
					},
					header: {
						'Authorization': this.token,
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						console.log(res);
						if (res.data.msg == "没有登录") {
							uni.navigateTo({
								url: '/pages/login/login',
							})
						} else if (res.data.msg == "成功发送泡泡") {
							uni.showToast({
								title: "成功发送泡泡",
								icon: 'exception',
								duration: 1000
							});
							this.status = false;
						}
						console.log(res.data.msg);
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
				this.bubbleinput = "";
				console.log(this.bubbleinput);
				console.log(this.bubbleword);
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

		.writebubble {
			position: relative;
			margin-top: -200rpx;
			width: 600rpx;
			height: 1150rpx;
			background: white;
			border-radius: 30rpx;
			border-top: 8rpx #7692ca solid;
			border-bottom: 8rpx #7692ca solid;
			box-sizing: border-box;
			z-index: 4;

			.title {
				margin-top: 10rpx;
				margin-left: 20rpx;
				color: #1c2b80;
				font-size: 60rpx;
				font-weight: 200rpx;
			}

			.word {
				font-size: 40rpx;
				font-weight: 200rpx;
				margin: auto;
				width: 500rpx;
			}

			.input {
				width: 600rpx;
				height: 60rpx;

				position: absolute;
				bottom: 10rpx;
				left: 20rpx;
				display: flex;
				box-sizing: border-box;
			}

			input {
				width: 450rpx;
				border-radius: 25rpx;
				border: 1rpx #333 solid;
				height: 60rpx;
				padding-left: 20rpx;
				border-radius: 25rpx;
				box-sizing: border-box;
			}

			image {
				float: right;
				width: 80rpx;
				height: 80rpx;
				margin-left: 50rpx;
			}

			.inputting {
				display: flex;
				justify-content: center;
				align-items: center;
				float: right;
				width: 100rpx;
				border-radius: 30rpx;
				height: 60rpx;
				margin-left: 10rpx;
				line-height: 60rpx;
				color: white;

				background: #084da6;
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