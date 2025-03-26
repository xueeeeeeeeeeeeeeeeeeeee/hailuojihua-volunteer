<template>
	<view class="content">
		<image lazy-load src="../../static/backgroundmain.jpg" mode="aspectFill" class="background"></image>

		<view class="top">
			<view class="topon">
				<view class="onleft" @click="changeheadpic">
					<image :src="headpicurl" mode="aspectFill"></image>
				</view>
				<view class="onright">
					<p class="name" v-if="userinfo">{{userinfo.username}}</p>
					<p v-if="infodata">ID/志愿者编号{{infodata.id}}</p>
				</view>
			</view>
			<view class="topbottom">
				<view class="shishu">
					<h2>志愿时数</h2>
					<view class="sum">
						<p class="lj">累计</p>
						<h2 v-if="infodata">{{infodata.currentActivitySeconds}}</h2>
						<p>小时</p>
					</view>

				</view>
			</view>
		</view>
		<view class="body" v-if="pagestatus==0">
			<view class="item">
				<p class="before">学校:</p>
				<p class="after" v-if="infodata"> {{infodata.school}}</p>

			</view>
			<view class="item">
				<p class="before">账号:</p>
				<p class="after" v-if="userinfo"> {{userinfo.username}}</p>
				<button @click="changename">编辑</button>
			</view>
			<view class="item">
				<p class="before">学号:</p>
				<p class="after" v-if="infodata"> {{infodata.studentId}}</p>
			</view>
			<view class="item">
				<p class="before">学院:</p>
				<p class="after" v-if="infodata"> {{infodata.college}}</p>
			</view>
			<view class="item">
				<p class="before">专业:</p>
				<p class="after" v-if="infodata"> {{infodata.major}}</p>
			</view>
			<view class="item">
				<p class="before">密码:</p>
				<p class="after"> ********</p>
				<button @click="changepassword">修改密码</button>
			</view>
		</view>
		<view class="body" v-if="pagestatus==1">
			输入新用户名
			<input class="uni-input" focus placeholder="请输入...." v-model="newname" />
			<button class="sure1" @click="back">返回</button>
			<button class="sure" @click="surename">确认</button>
		</view>
		<view class="body" v-if="pagestatus==2">
			输入验证码
			<input class="uni-input" focus placeholder="请输入...." v-model="code" />
			输入新密码
			<input class="uni-input" focus placeholder="请输入...." v-model="newpassword" />
			请再次输入新密码
			<input class="uni-input" focus placeholder="请输入...." v-model="surenewpassword" />
			<p class="error" v-if="error==1">{{errorinfo}}</p>
			<button class="sure2" @click="send">发送验证码</button>
			<button class="sure1" @click="back">返回</button>
			<button class="sure" @click="surepassword">确认</button>
		</view>
		<view class="bottom">
			<button type="warn" @click="quit">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: "",
				file: null,
				newpassword: "",
				surenewpassword: "",
				error: 1,
				errorinfo: "",
				code: "",
				loginstatus: 0,
				pagestatus: 0, //0为显示，1为修改昵称，2为修改密码
				infodata: null,
				newname: "",
				headpicurl: "",
				user: {
					headpicurl: "../../static/user/headpic.jpg",
					userID: 1000,
					username: "xuee",
					userhours: 20,
					userschool: "杭师大",
					useruid: 2000,
					usermajor: "软件工程",
					usercollege: "信科院",
					userpassword: "123456",
					userstate: 2, //0不是志愿者 1是审核中 2是志愿者
				},
				applystatus: 0,
				userinfo: null,
				formitem: ["学校", "账号", "学号", "学院", "专业", "密码"],
				applyfrom: []
			};
		},
		onInit() {
			this.returninfo();
		},
		onLoad() {
			this.token = uni.getStorageSync("token");
			this.returninfo();
			console.log(uni.$u.config.v);
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
			changeheadpic() {
				var Authorization = this.token;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: function(res) {
						console.log(res.tempFiles[0]);
						var file = res.tempFiles[0];
						console.log(file);

						console.log(Authorization);
						uni.uploadFile({
							url: 'http://47.113.227.126:21354//sign/upload?Authorization=' +
								Authorization,
							filePath: file.path,
							name: 'file',
							formData: {
								// 可以在这里添加其他的表单数据
							},

							success: function(res) {
								var kk;
								kk = JSON.parse(res.data);
								console.log(kk);
								if (kk.msg == "没有登录") {
									uni.navigateTo({
										url: '/pages/login/login',
									});
								}

								uni.showToast({
									title: "修改成功请等待头像审核",
									icon: 'exception',
									duration: 1000
								});
								uni.switchTab({
									url: '/pages/userinfo/userinfo',
								})
							},
							fail: function(res) {
								console.log(2);
								console.log(res.data);
							}
						});
					}
				});

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
						this.headpicurl = "http://47.113.227.126:21354/uploadFile/" +
							res.data.data.id + ".jpg"
						console.log(this.headpicurl);
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

			changename() {
				this.pagestatus = 1;
			},
			changepassword() {
				this.pagestatus = 2;
			},
			surename() {
				console.log(this.token);
				uni.request({
					url: 'http://47.113.227.126:21354/user/new_username',
					method: 'POST',
					data: {
						new_username: this.newname
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
						} else if (res.data.msg == "修改成功") {
							uni.showToast({
								title: "修改成功",
								icon: 'exception',
								duration: 1000
							});
							this.newname = "";
							this.returninfo();
							this.pagestatus = 0;
						} else if (res.data.msg == "用户名已被占用") {
							uni.showToast({
								title: "用户名已被占用",
								icon: 'error',
								duration: 1000
							});
						}
						console.log(res.data);
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})


			},
			back() {
				this.pagestatus = 0;
			},
			send() {
				uni.request({
					url: 'http://47.113.227.126:21354/sign/send_email',
					method: 'POST',
					data: {
						email: this.userinfo.email,
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
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'exception',
								duration: 1000
							});

						}
						console.log(res.data);
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			quit() {
				uni.request({
					url: 'http://47.113.227.126:21354/user/logout',
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
						} else if (res.data.msg == "退出成功") {
							uni.navigateTo({
								url: '/pages/login/login',
							})
						}
						console.log(res.data);
						this.infodata = res.data.data;
						console.log(this.infodata);
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			surepassword() {
				if (this.newpassword != this.surenewpassword) {
					this.errorinfo = "两次密码输入不一致";
					this.error = 1;
				} else {
					uni.request({
						url: 'http://47.113.227.126:21354/user/npwd',
						method: 'POST',
						data: {
							code: this.code,
							npwd: this.surenewpassword,
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
							} else if (res.data.msg == "修改成功") {
								uni.showToast({
									title: "修改成功",
									icon: 'exception',
									duration: 1000
								});
								this.pagestatus = 0;
							} else {
								this.error = 1;
								this.errorinfo = res.data.msg;
							}
							console.log(res.data);
						},
						fail: (res) => {
							console.log(2);
							console.log(res.data);
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;

		.background {
			position: absolute;
			z-index: -1;
			border-radius: 30rpx;
			margin-top: 0rpx;
			height: 1700rpx;
			width: 100%;
			opacity: 0.9;
		}

		.top {
			height: 400rpx;
			width: 100%;
			// background: linear-gradient(#545f9f, white);
			display: flex;
			flex-direction: column;

			.topon {
				height: 200rpx;
				width: 100%;
				display: flex;
				justify-items: center;
				align-items: center;

				.onleft {
					height: 150rpx;
					width: 150rpx;
					background: red;
					border-radius: 50%;
					margin-left: 30rpx;

					image {

						height: 150rpx;
						width: 150rpx;
						border-radius: 50%;
					}
				}

				.onright {
					margin-left: 40rpx;

					.name {
						font-size: 50rpx;
					}
				}
			}

			.topbottom {
				height: 200rpx;
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-items: center;

				.shishu {
					margin-top: 5rpx;
					height: 180rpx;
					width: 80%;
					background-color: rgba(255, 255, 255, 0.6);
					border-radius: 50rpx;
					box-shadow: 6px 10px 10px #4f9fd3;

					h2 {
						margin: 20rpx 30rpx;
					}



					.sum {
						display: flex;
						justify-items: center;
						align-items: center;
						height: 90rpx;
						width: 50%;
						transform: translateX(340rpx);

						.lj {
							transform: translatey(-60rpx);
						}

						h2 {
							transform: translatey(-30rpx);
						}
					}
				}
			}
		}

		.body {
			display: flex;
			flex-direction: column;

			// margin-top: -150rpx;
			height: 800rpx;
			width: 600rpx;
			background: rgba(255, 255, 255, 0.7);
			border-radius: 30rpx;
			border-right: 5rpx #55a2d3 solid;
			border-bottom: 5rpx #55a2d3 solid;
			border-left: 5rpx #55a2d3 solid;
			padding-left: 60rpx;
			box-sizing: border-box;
			padding-top: 20rpx;
			position: relative;

			.sure {
				bottom: 1rpx;
				margin-left: -10rpx;
				width: 500rpx;
				position: absolute;
			}

			.sure1 {
				bottom: 100rpx;
				margin-left: -10rpx;
				width: 500rpx;
				position: absolute;
			}

			.sure2 {
				bottom: 200rpx;
				margin-left: -10rpx;
				width: 500rpx;
				position: absolute;
			}

			.error {
				color: red;
			}

			input {
				margin-top: 20rpx;
				margin-left: -30rpx;
				height: 80rpx;
				width: 500rpx;
				background: #f6f6f6;
				padding-left: 30rpx;
				border-radius: 20rpx;
			}

			.item {
				margin-top: 35rpx;
				display: flex;

				p {
					font-size: 35rpx;
				}

				button {
					height: 55rpx;
					line-height: 55rpx;
					font-size: 25rpx;
				}
			}
		}

		.bottom {
			position: absolute;
			bottom: -150rpx;
			height: 150rpx;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			button {
				width: 80%;
			}
		}
	}
</style>