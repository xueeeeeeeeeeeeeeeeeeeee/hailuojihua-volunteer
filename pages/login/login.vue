<template>
	<view class="content">
		<view class="head">
			<image src="../../static/tabbar/logo.png" mode="aspectFill"></image>
		</view>
		<form @submit="formSubmit" @reset="formReset">
			<p v-if="yzm==0">账号:</p>
			<p v-else>邮箱:</p>
			<input class="uni-input" focus v-model="account" />
			<p v-if="yzm==0">密码:</p>
			<p v-else>请输入验证码:</p>
			<input class="uni-input" focus v-model="password" password v-if="disabled=='false'" />
			<input class="uni-input" focus v-model="password" password disabled v-if="disabled=='true'" />
			<view class="bottom">
				<p class="error" v-if="error==1">账号或密码错误</p>
				<p class="error" v-if="error==2">账号或密码不能为空</p>
				<p class="wjmm">忘记密码?</p>

			</view>

			<view class="uni-btn-v">
				<button @click="submit" v-if="yzm==0">登录</button>
				<button @click="submit3" v-else>发送验证码</button>
				<button @click="submit2" v-if="yzm==1">登录</button>
			</view>
			<p class="yzm" @click="subyzm" v-if="yzm==0">验证码登录</p>
			<p class="yzm" @click="subyzm" v-else>密码登录</p>
		</form>
		<a href="https://beian.miit.gov.cn/" target="_blank" class="beian">浙ICP备2023018090号-1</a>

	</view>
</template>

<script>
	export default {
		data() {
			return {

				error: 0,
				yzm: 0,
				account: '',
				password: '',
				disabled: 'false',
			};
		},
		methods: {
			submit3() {
				this.disabled = "false";
				uni.request({
					url: 'http://47.113.227.126:21354/sign/send_email',
					method: 'POST',
					data: {
						email: this.account,
					},
					header: {
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						console.log(res.data);
						if (res.data.msg == "邮件发送成功") {
							uni.showToast({
								title: "邮件发送成功",
								icon: 'exception',
								duration: 1000
							});
						}
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			submit2() {
				uni.request({
					url: 'http://47.113.227.126:21354/sign/email_login',
					method: 'POST',
					data: {
						email: this.account,
						code: this.password,
					},
					header: {
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						uni.setStorageSync('token', res.data.data.token);
						console.log(res.data);
						if (res.data.msg == "用户不存在") {
							this.error = 1
						} else if (res.data.msg == "志愿者登录成功") {
							uni.setStorageSync('token', res.data.data.token);

							console.log(res.data.msg);
							uni.switchTab({
								url: '/pages/index/index',
							})

						}
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			subyzm() {
				if (this.yzm == 0) {

					this.disabled = "true";
					this.yzm = 1;
				} else {
					this.disabled = "false"
					this.yzm = 0;
				}
				console.log(this.disabled);
			},
			submit() {
				if (this.account != "" && this.password != "") {
					console.log(this.account);
					console.log(this.password);
					uni.request({
						url: 'http://47.113.227.126:21354/sign/psd_login',
						method: 'POST',
						data: {
							username: this.account,
							password: this.password,
						},
						header: {
							'content-type': 'application/json;charset=UTF-8'
						},
						success: (res) => {
							console.log(res);
							if (res.data.msg == "用户不存在") {
								this.error = 1
							} else if (res.data.msg == "志愿者登录成功") {
								console.log(res.data.msg);
								uni.setStorageSync('token', res.data.data.token);
								uni.switchTab({
									url: `/pages/index/index`,
								})

							} else {
								this.error = 1;
							}
						},
						fail: (res) => {
							console.log(2);
							console.log(res.data);
						}
					})
				} else {
					this.error = 2;
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

		.beian {
			position: relative;
			bottom: -200rpx;
		}

		.bottom {
			display: flex;
			height: 10rpx;

			.error {
				color: red;
			}

			.wjmm {
				position: absolute;
				right: 150rpx;
				color: #001ecf;
			}
		}

		.head {
			image {
				margin-top: 100rpx;
				height: 300rpx;
				width: 300rpx;
			}
		}

		input {
			padding-left: 20rpx;
			margin-top: 20rpx;
			width: 550rpx;
			border-radius: 40rpx;
			height: 100rpx;
			background: #f6f6f6;
		}

		p {
			margin-top: 30rpx;
			font-size: 30rpx;
		}



		button {
			margin-top: 100rpx;
			color: #f6f6f6;
			background: #001ecf;
		}
	}
</style>