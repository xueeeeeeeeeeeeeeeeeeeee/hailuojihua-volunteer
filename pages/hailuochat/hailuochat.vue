<template>
	<view class="content">
		<image lazy-load src="../../static/backgroundmain.jpg" mode="aspectFill" class="background"></image>
		<view class="chat">
			<p class="chatname">{{chatname}}</p>
			<scroll-view scroll-y="true" class="allchat" :scroll-into-view="scrollTop">
				<view class=" chatitem1" v-for="(item,index) in chatcontent" v-if="item.identity=='儿童'"
					:id="'msg'+index">
					{{item.content}}
					<view class="time">
						{{item.sendTime}}
					</view>
				</view>
				<view class="chatitem2" v-else :id="'msg'+index">
					{{item.content}}
					<view class="time">
						{{item.sendTime}}
					</view>
				</view>
			</scroll-view>
			<view class="input" adjust-position>
				<input @focus="changeing" @blur="lose" @input="oninput" class="uni-input" focus placeholder="请输入..."
					:value="bubbleinput" />
				<image src="../../static/index/hailuo.png" mode="aspectFill" v-if="inputting==0"></image>
				<view class="inputting" @click="send" v-else>
					发送
				</view>
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
				hailuoid: 1,
				scrollTop: '',
				change: 'user2',
				user: {
					id: 10002,
					userstate: 0,
					headpicurl: "../../static/user/headpic.jpg",
				},
				chatname: "",
				totle: 10,
				chatcontent: [],
				infodata: null,
				bubbleinput: "",
				bubbleword: "",
				inputting: 0,
				test: {
					"code": 605,
					"hailuo_id": 31,
					"content": "你好",
					"time": "25:12"
				},
				ws: null,
				timer:null,
			};
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
		onLoad(e) {
			this.token = uni.getStorageSync("token");
let that=this;
			this.hailuoid = e.id;
			console.log(e);
			this.gethailuodetail();
this.timer = setInterval(function() {
    that.gethailuodetail();
}, 10000);
console.log(this.timer);


		},
		onShow() {
			this.returninfo();
			this.gethailuodetail();
		},
		onLaunch() {
			uni.connectSocket({
				url: 'ws://47.113.227.126:21354/chat/2',
				success(res) {
					console.log(res);

				}

			});
			uni.onSocketMessage(function(res) {
				console.log('收到服务器内容：' + res.data);


			});
		},
		methods: {
			createconnect() {},
			gethailuodetail() {
				console.log(this.hailuoid);
				uni.request({
					url: 'http://47.113.227.126:21354/hailuo/readOne',
					method: 'POST',
					data: {
						'Authorization': this.token,
						hailuo_id: this.hailuoid,
						read: 1,
					},
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
						this.chatcontent = res.data.data.chatLog;
						this.chatname = res.data.data.children_username;
						this.$nextTick(function() {
							this.scrollTop = 'msg' + String(this.chatcontent.length - 1)
						})

					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})


			},
			returninfo() {

				uni.request({
					url: 'http://47.113.227.126:21354/user/get_info',
					method: 'POST',

					header: {
						'Authorization': this.token,
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						var that=this;
						if (res.data.code == 201) {
							uni.navigateTo({
								url: '/pages/login/login',
							})
						}
						this.user.headpicurl = "http://47.113.227.126:21354/uploadFile/" + res.data.data.id +
							".jpg"
						console.log(res.data);
						this.userinfo = res.data.data;
						console.log(this.userinfo);
						uni.connectSocket({
							url: 'ws://47.113.227.126:21354/chat/' + this.userinfo.id,
							success(res) {
								console.log(res);

							},

						});
						var tempid = this.hailuoid;
						var st = 0;
						console.log(tempid);
						uni.onSocketOpen(function(res) {
							console.log('WebSocket连接已打开！');
							st = 1;
						});
						uni.onSocketError(function(res) {
							console.log('WebSocket连接打开失败，请检查！');
						});
						uni.onSocketMessage(function(res) {
							clearInterval(that.timer);
						that.timer = setInterval(function() {
						    that.gethailuodetail();
						}, 10000);
							console.log('收到服务器内容：' + res.data);
							this.WebSocketstaut = 1;
							console.log(JSON.parse(res.data).hailuo_id);
							console.log(tempid);

							if (JSON.parse(res.data).hailuo_id == tempid) {
								that.gethailuodetail();
								// setTimeout(() => {
								// 	uni.navigateTo({
								// 		url: `/pages/hailuochat/hailuochat?id=${tempid}`
								// 	});
								// }, 500);
							}

							console.log(this.WebSocketstaut);
						});
						// setTimeout(() => {
						// 	if (st == 0) {

						// 		setTimeout(() => {
						// 			this.$router.go(0)
						// 		}, 500);
						// 	}
						// }, 1000);

					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})

			},


			changeing() {
				this.inputting = 1;

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
			
				let that=this;
				uni.request({
					url: 'http://47.113.227.126:21354/hailuo/reply_hailuo',
					method: 'POST',
					data: {
						hailuo_id: this.hailuoid,
						content: this.bubbleinput,
					},
					header: {
						'Authorization': this.token,
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						console.log(res);
						if (res.data.code == 201) {
							uni.navigateTo({
								url: '/pages/login/login',
							})
						} else if (res.data.msg == "回复成功") {
							uni.sendSocketMessage({
								data: JSON.stringify({
									"code": 605,
									"hailuo_id": this.hailuoid,
									"content": this.bubbleinput,
									"time": ""
								}),
								success() {
									console.log(11);
								}
							});
							uni.showToast({
								title: "回复成功",
								icon: 'exception',
								duration: 500
							});
							that.gethailuodetail();
						}

					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
				this.bubbleinput = "";
				if (this.chatcontent.length == 1) {
					setTimeout(() => {
						this.$router.go(0)
					}, 500)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 1437rpx;
		width: 100%;
		// background: url("../../static/hailuo/background.png");
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		.background {
			position: absolute;
			height: 1437rpx;
			width: 100%;
		}

		.chat {
			position: relative;
			margin-top: -200rpx;
			width: 680rpx;
			height: 1150rpx;
			background: rgba(255, 255, 255, 0.7);
			z-index: 4;
			border-radius: 30rpx;
			border-top: 8rpx #7692ca solid;
			border-bottom: 8rpx #7692ca solid;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			align-items: center;

			.chatname {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 50rpx;
				line-height: 50rpx;
				width: 100%;
				border-bottom: 1rpx solid black;
			}

			.allchat {
				display: flex;
				height: 1000rpx;
				justify-content: center;
				align-items: center;

				.chatitem1 {
					position: relative;
					white-space: normal;
					word-break: break-all;
					overflow: hidden;
					font-weight: bolder;
					box-sizing: border-box;
					padding-left: 15rpx;
					padding-top: 8rpx;
					margin-top: 20rpx;
					min-height: 100rpx;
					margin-left: 20rpx;
					height: auto;
					width: 500rpx;
					background: #fceec1;
					border-radius: 20rpx 20rpx 20rpx 0rpx;

					.time {
						bottom: 10rpx;
						right: 10rpx;
						position: absolute;
						font-weight: 100;
						font-size: 5rpx;
					}

				}

				.chatitem2 {
					transform: translateX(140rpx);
					position: relative;
					white-space: normal;
					word-break: break-all;
					overflow: hidden;
					font-weight: bolder;
					box-sizing: border-box;
					padding-left: 15rpx;
					padding-top: 8rpx;
					margin-top: 20rpx;
					min-height: 100rpx;
					margin-left: 20rpx;
					height: auto;
					width: 500rpx;
					background: #de7241;
					border-radius: 20rpx 20rpx 0rpx 20rpx;

					.time {
						bottom: 10rpx;
						right: 10rpx;
						position: absolute;
						font-weight: 100;
						font-size: 5rpx;
					}

				}
			}

			.input {
				width: 800rpx;
				height: 60rpx;

				position: absolute;
				bottom: 10rpx;
				left: 20rpx;
				display: flex;
				box-sizing: border-box;
			}

			input {
				width: 500rpx;
				border-radius: 25rpx;
				border: 1rpx #333 solid;
				height: 60rpx;
				padding-left: 20rpx;
				border-radius: 25rpx;
				box-sizing: border-box;
			}

			image {
				float: right;
				width: 100rpx;
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