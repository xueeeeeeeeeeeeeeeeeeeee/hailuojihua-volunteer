<template>
	<view class="content">
		<image src="../../static/hailuo/background.png" mode="" lazy-load class="background"></image>

		<view class="requiretiezi">
			<view class="childrentiezi">
				<view class="childrenauthor">
					<img :src="childrenimg" alt="">
					{{childrenname}}
				</view>
				<view class="childrentiezititle">
					{{childrentitle}}
				</view>
				<view class="childrentiezibody">
					{{childrentiezi}}
				</view>
				<view class="tieziimg">
					<view class="imgitem" v-for="item in childrentieziimg">
						<img :src="'http://47.113.227.126:21354/images/'+item" alt="">
					</view>
				</view>
			</view>
			<view class="myrequire">
				<img src="../../static/children.png" alt="" class="myrequire-img">
				<h1>一起写！</h1>
				<textarea class="myrequiretextarea" v-model="myrequire" cols="30" rows="10"
					placeholder="请输入你的回答...."></textarea>
			</view>
			<view class="bottombtn">
				<view class="delete">
					<button @click="deletetiezi">删除</button>
				</view>
				<view class="require">
					<button @click="explain">为TA解答</button>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				postid: null,
				token: "",
				change: 'user2',
				infodata: null,
				childrenimg: null,
				childrenname: null,
				childrentitle: "来自守护少年足球梦",
				childrentiezi: "如果我想把足球作为我未来的职业方向，我该怎么努力实现呢?",
				childrentieziimg: [],
				myrequire: null,
				user: {
					userstate: 0,
					headpicurl: "../../static/children.jpg",
				},
				totle1: 0,
				totle2: 0,
				conchliststate1: "down",
				conchliststate2: "right",
			};
		},
		watch: {

		},
		onLoad() {
			this.token = uni.getStorageSync("token");
			this.returninfo();
			this.gettiezi();
		},
		methods: {
			deletetiezi() {
				let that = this;
				uni.showModal({
					title: '确认',
					content: '确认要删除该帖子吗？',
					success: function(res) {
						if (res.confirm) {
							uni.request({
								url: 'http://47.113.227.126:21354/volunteer/deletePost/' + that.postid,
								method: 'POST',
								data: {
									postId: that.postid,
								},
								header: {
									'Authorization': that.token,
								},
								success: (res) => {
									if (res.data.code == 201) {
										uni.navigateTo({
											url: '/pages/login/login',
										})
									}
									console.log(res);
									if (res.data.msg == "删除成功") {
										uni.showToast({
											title: '删除成功',
											icon: 'none', //如果要纯文本，不要icon，将值设为'none'
											duration: 2000 //持续时间为 2秒
										});
										setTimeout(function() {
											that.$router.go(0)

										}, 1000); // 这里的 1000 表示延时的时间，单位是毫秒



									}
									that.gettiezi();
								},
								fail: (res) => {
									console.log(2);
									console.log(res.data);
								}
							})
						} else {
							console.log('点击了取消')
						}
					}
				})


			},
			explain() {
				console.log(this.myrequire.length);
				if (this.myrequire.length <= 50) {
					uni.showToast({
						title: '文字应该大于50个字',
						icon: 'none', //如果要纯文本，不要icon，将值设为'none'
						duration: 2000 //持续时间为 2秒
					});
				} else {
					let that = this;
					uni.uploadFile({
						url: 'http://47.113.227.126:21354/volunteer/creatComment',
						header: {
							Authorization: this.token,
						},
						formData: {
							"postId": this.postid,
							"content": this.myrequire
							// 可以在这里添加其他的表单数据
						},

						success: function(res) {
							console.log(res);
							if (JSON.parse(res.data).msg == "响应成功") {
								uni.showToast({
									title: '解答成功',
									icon: 'none', //如果要纯文本，不要icon，将值设为'none'
									duration: 2000 //持续时间为 2秒
								});
								setTimeout(function() {
									that.$router.go(0)

								}, 1000); // 这里的 1000 表示延时的时间，单位是毫秒


								c
							}
							// if (res.data.msg)
							that.gettiezi();
						},
						fail: function(res) {
							console.log(2);
							console.log(res.data);
						}
					});
				}

			},
			gettiezi() {
				let that = this;
				uni.request({
					url: 'http://47.113.227.126:21354/volunteer/getOnePost',
					method: 'GET',

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
						if (res.data.msg == "响应成功") {
							that.childrentitle = res.data.data.title;
							that.childrentiezi = res.data.data.content;
							that.childrentieziimg = JSON.parse(res.data.data.images);
							that.childrenimg = "http://47.113.227.126:21354/uploadFile/" + res.data.data.userId +
								".jpg";
							that.childrenname = res.data.data.username;
							that.postid = res.data.data.postId;
						} else {
							that.childrentiezi = "暂无帖子";
							that.childrentitle = "暂无帖子";
							that.childrentieziimg = [];
							that.childrenimg = null;
							that.childrenname = null;
							that.postid = null;

						}
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
						if (res.data.code == 201) {
							uni.navigateTo({
								url: '/pages/login/login',
							})
						}
						this.user.headpicurl = "http://47.113.227.126:21354/uploadFile/" + res.data.data.id +
							".jpg"
						this.userinfo = res.data.data;

					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
	@font-face {
		font-family: "AlimamaDaoLiTi";
		font-weight: 400;
		src: url("../../static/JinNianYeYaoJiaYouYa-2.ttf");
		font-display: swap;
	}


	.content {
		height: 1437rpx;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		font-family: AlimamaDaoLiTi;

		.background {
			position: absolute;
			height: 1437rpx;
			width: 100%;
		}

		.requiretiezi {
			position: relative;
			// margin-top: -200rpx;
			width: 95vw;
			height: 1400rpx;
			background: #f1f1f3;
			border-radius: 30rpx;
			border-top: 8rpx #7692ca solid;
			border-bottom: 8rpx #7692ca solid;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			padding-top: 5%;
			gap: 5%;

			.childrentiezi {
				width: 90%;
				height: 30%;
				// background-color: blue;
				text-decoration: underline dashed #f5ad52;
				overflow-y: scroll;
				// border-radius: 5%;
				border-bottom: #7692ca solid 2px;

				.childrenauthor {
					width: 100%;
					height: 100rpx;
					display: flex;
					align-items: center;
					gap: 5%;
					font-size: 50rpx;

					img {
						height: 100rpx;
						width: 100rpx;
					}
				}

				.childrentiezititle {
					font-size: 40rpx;
				}

				.tieziimg {
					display: flex;
					flex-direction: column;
					flex-wrap: wrap;
					align-items: center;
					gap: 3%;

					.imgitem {
						width: 50%;

						img {
							width: 100%;
							height: 100%;
						}
					}
				}
			}

			.myrequire {
				border-radius: 5%;
				width: 90%;
				height: 50%;
				// background-color: blue;
				overflow-y: scroll;
				border: #bf9d39 solid 1px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: relative;


				.myrequiretextarea {
					text-decoration: underline dashed #f5ad52;
					width: 80%;
					height: 80%;
				}

				.myrequire-img {
					position: absolute;

					height: 10em;
					bottom: 0rpx;
					left: 0rpx;
				}
			}

			.bottombtn {
				display: flex;
				// gap: 20%;
				width: 100%;
				padding-left: 5%;
				padding-right: 5%;

				.delete {
					width: 50%;

					button {
						width: 80%;
						border-radius: 10%;
						border: #e6984e solid 2px;
						color: #e6984e;
					}
				}

				.require {
					width: 50%;

					button {
						width: 80%;
						border-radius: 10%;
						background-color: #ff5e15;
						color: #fff;
					}
				}


			}
		}



	}
</style>