<template>
	<view class="content" v-if="applystatus==0">
		<view class="top">
			<view class="topon">
				<view class="onleft">
					<image :src="user.headpicurl" mode="aspectFill"></image>
				</view>
				<view class="onright">
					<p class="name" v-if="userinfo">{{userinfo.username}}</p>
					<p v-if="infodata">ID/志愿者编号{{infodata.volunteerId}}</p>
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
		<view class="centre">
			<view class="userdetail" @click="enterinfo">
				个人信息
			</view>
			<view class="usermessage">
				信息通知
			</view>
			<view class="about">
				关于
			</view>
			<view class="centrebottom" v-if="user.userstate==0">
				<view class="image">
					<image src="../../static/index/hailuo.png" mode="aspectFill"></image>
				</view>
				<view class="word">
					<h4>申请成为志愿者</h4>
					<p>快来加入我们吧</p>
				</view>

				<button @click="applyenter">点击申请</button>

			</view>
			<view class="centrebottom2" v-else-if="user.userstate==2">
				<view class="title">
					<h3>志愿者功能</h3>
				</view>
				<view class="in">
					<view class="item1" @click="enterhailuo">
						<image src="../../static/index/hailuo.png" mode=""></image>
						<view class="itemword">
							我的海螺
						</view>
					</view>
					<view class="item2" @click="enterpaopao">
						<image src="../../static/index/qipao.png" mode=""></image>
						<view class="itemword">
							我的泡泡
						</view>
					</view>
					<view class="item3" @click="entersendpaopao">
						<image src="../../static/index/paopao.png" mode=""></image>
						<view class="itemword">
							发送泡泡
						</view>
					</view>
				</view>
			</view>
			<view class="centrebottom1" v-else-if="user.userstate==1">
				<view class="image">
					<image src="../../static/index/hailuo.png" mode="aspectFill"></image>
				</view>
				<view class="word">
					<h4>申请志愿者</h4>
					<p>审核中</p>
				</view>

				<button>点击查看</button>

			</view>
		</view>
		<view class="bottom">
			<button type="warn" @click="quit">退出登录</button>
		</view>
	</view>
	<view class="content" v-else>
		<view class="top">
			<view class="topon">
				<view class="onleft">
					<image :src="user.headpicurl" mode="aspectFill"></image>
				</view>
				<view class="onright">
					<p class="name">{{user.username}}</p>
					<p>ID/志愿者编号{{user.userID}}</p>
				</view>
			</view>

		</view>
		<view class="applytable">
			<view class="applydetail">
				<form @submit="formSubmit" @reset="formReset">
					<h1>海螺计划 志愿者申请</h1>
					<p>海螺计划 欢迎您的加入</p>
					<view class="inputx uni-form-item uni-column" v-for="item in formitem">
						{{item}}
						<input class="uni-input" focus :placeholder="'请输入'+item" :name="item">
					</view>
					<button type="primary" form-type="submit">提交申请</button>
					<button type="primary" form-type="reset">重置</button>
				</form>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginstatus: 0,
				infodata: null,
				user: {
					headpicurl: "../../static/user/headpic.jpg",
					userID: 1000,
					username: "xuee",
					userhours: 20,
					userstate: 2, //0不是志愿者 1是审核中 2是志愿者
				},
				userinfo: null,
				applystatus: 0,
				formitem: ["学校", "姓名", "学号", "学院", "专业", "年纪"],
				applyfrom: []
			};
		},
		onLoad() {
			this.returninfo();
			console.log(uni.$u.config.v);
		},
		methods: {
			entersendpaopao() {
				uni.navigateTo({
					url: '/pages/bubbledetail/bubbledetail'
				});
			},
			enterinfo() {
				uni.navigateTo({
					url: '/pages/userinfo/userinfo'
				});
			},
			quit() {
				uni.request({
					url: 'http://hailuojihua.top:82/sign/logout',
					method: 'POST',

					header: {
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
			returninfo() {
				uni.request({
					url: 'http://hailuojihua.top:82/volunteer/get_info',
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
						this.user.headpicurl = "http://hailuojihua.top:82/uploadFile/" + res.data.data.id +
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
					url: 'http://hailuojihua.top:82/sign/get_info',
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
			enterpaopao() {
				console.log(1);
				uni.navigateTo({
					url: '/pages/mybubble/mybubble'
				});
			},
			enterhailuo() {
				console.log(1);
				uni.navigateTo({
					url: '/pages/myconch/myconch'
				});
			},
			applyenter() {
				this.applystatus = 1;
				console.log(this.applystatus);
				console.log(this.user.userstate);

			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value;
				this.applyfrom = formdata;
				console.log(this.applyfrom);

				this.user.userstate = 1;
				console.log(this.userstate);
				this.applystatus = 0;
				uni.showModal({
					content: '提交成功！',
					showCancel: false
				});


			},
			formReset: function(e) {
				console.log('清空数据')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		.top {
			height: 400rpx;
			width: 100%;
			background: linear-gradient(#545f9f, white);
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
					background-color: white;
					border-radius: 50rpx;
					box-shadow: 6px 10px 10px #a5abcc;

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

		.centre {
			height: 700rpx;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-items: center;
			align-items: center;

			view {
				height: 130rpx;
				width: 80%;

				margin-top: 0rpx;
				font-size: 40rpx;
				line-height: 130rpx;
			}

			.centrebottom2 {
				height: 230rpx;
				width: 80%;
				background: white;
				border-radius: 50rpx;
				box-shadow: 6rpx 6px 10px 10px #a5abcc;
				display: flex;
				align-items: center;
				flex-direction: column;

				.title {
					height: 37rpx;

					h3 {
						transform: translate(-20rpx, -25rpx);
						font-size: 37rpx;
						color: #122179;

					}
				}

				.in {
					display: flex;
					margin-top: 35rpx;

					view {
						margin-right: 20rpx;
						height: 130rpx;
						width: 130rpx;

						display: flex;
						flex-direction: column;

						image {
							height: 50px;
							width: 50px;
						}

						.itemword {
							color: #122179;
							margin-top: -30rpx;
							height: 5rpx;
							font-size: 13rpx;
						}
					}
				}
			}

			.centrebottom1 {
				height: 180rpx;
				width: 80%;
				background: white;
				border-radius: 50rpx;
				box-shadow: 6rpx 6px 10px 10px #a5abcc;
				display: flex;
				align-items: center;



				.image {
					transform: translate(20rpx, -5rpx);
					height: 80rpx;
					width: 130rpx;

					image {
						height: 100%;
						width: 100%;
					}
				}

				.word {
					h4 {
						transform: translate(30rpx, -15rpx);
					}

					p {
						font-size: 30rpx;
						transform: translate(30rpx, -95rpx);
					}
				}

				button {
					font-size: 1rpx;
					font-weight: bold;
					color: #4a5699;
					line-height: 65rpx;
					box-shadow: 3px 10px 10px #a5abcc;
					height: 65rpx;
					width: 200rpx;
					background: white;
					border-radius: 25%;
					margin-left: -30rpx;
					margin-right: 20rpx;
				}
			}

			.centrebottom {
				height: 180rpx;
				width: 80%;
				background: white;
				border-radius: 50rpx;
				box-shadow: 6rpx 6px 10px 10px #a5abcc;
				display: flex;
				align-items: center;



				.image {
					transform: translate(20rpx, -5rpx);
					height: 80rpx;
					width: 130rpx;

					image {
						height: 100%;
						width: 100%;
					}
				}

				.word {
					h4 {
						transform: translate(30rpx, -15rpx);
					}

					p {
						font-size: 30rpx;
						transform: translate(30rpx, -95rpx);
					}
				}

				button {
					font-size: 1rpx;
					font-weight: bold;
					color: #4a5699;
					line-height: 65rpx;
					box-shadow: 3px 10px 10px #a5abcc;
					height: 65rpx;
					width: 200rpx;
					background: white;
					border-radius: 25%;
					margin-left: -30rpx;
					margin-right: 20rpx;
				}
			}
		}

		.bottom {
			position: fixed;
			bottom: 100rpx;
			height: 150rpx;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			button {
				width: 80%;
			}
		}

		.applytable {
			height: 1100rpx;
			width: 100%;
			display: flex;
			justify-content: center;
			transform: translateY(-160rpx);

			.applydetail {
				height: 1100rpx;
				width: 80%;
				border-radius: 50rpx;

				border: 5rpx solid #a0a6c9;
				background: white;

				form {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					h1 {
						margin-top: 30rpx;
						font-size: 45rpx;
					}

					p {
						float: right;
						color: #4429c7;
						font-size: 25rpx;
					}

					.inputx {
						margin-top: 30rpx;

						input {
							border-bottom: 3rpx #122179 solid;
						}
					}

					button {
						margin-top: 40rpx;
					}
				}
			}
		}
	}
</style>