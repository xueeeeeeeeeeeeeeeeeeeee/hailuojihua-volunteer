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
				<view class="otheriezibody">
					{{otherquire}}
				</view>
			</view>
			<view class="bottombtn" v-if="watchnum<=0">

				<button @click="Commentcomment(1)">一般！</button>
				<button @click="Commentcomment(2)">好！</button>
				<button @click="Commentcomment(3)">非常好！</button>


			</view>
			<view class="bottombtn" v-else>
				<view class="watch">
					{{watchnum}}
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				watchnum: 5,
				token: "",
				change: 'user2',
				infodata: null,
				childrenimg: null,
				childrenname: null,
				childrentieziimg: [],
				postid: null,
				commentid: null,
				otherquire: "应该追随自己的内心，努力去做自己喜欢的事情就好了，什么事情都先努力了再说，努力的收获在于过程不在于结果",
				childrentitle: "来自守护少年足球梦",
				childrentiezi: "如果我想把足球作为我未来的职业方向，我该怎么努力实现呢?",
				user: {
					userstate: 0,
					headpicurl: "../../static/children.jpg",
				},
				totle1: 0,
				totle2: 0,
				conchliststate1: "down",
				conchliststate2: "right",
				tiezi: [{
					authorimg: "../../static/children.jpg",
					username: "儿童",
					title: "你们在学校遇到过这样子的事情吗",
					content: "我前桌借了我的铅笔，我向他要的时候他说过两天再还，可是我过了一星期向他要他还说过两天我该怎么办呢",
					createTime: "2023-10-16 16:00",
					likeNumber: "100",
					reply: "200",
					images: ["../../static/mad.jpg"]
				}]
			};
		},
		watch: {

		},
		onLoad() {
			this.token = uni.getStorageSync("token");
			this.returninfo();
			this.gettiezi();
			this.watch();
		},
		methods: {
			watch() {
				let that = this;
				this.timer = setInterval(function() {
					that.watchnum--;
					if (that.watchnum <= 0) {
						clearInterval(that.timer);
						that.timer = null;
					}
					console.log(that.watchnum);
				}, 1000);
			},
			Commentcomment(e) {
				let that = this;
				console.log(e + "   " + this.commentid);
				uni.request({
					url: 'http://47.113.227.126:21354/volunteer/scoringOthersComment',
					method: 'POST',
					data: {
						"commentId": this.commentid,
						"level": e,
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
						console.log(res.data);
						if (res.data.msg == "响应成功") {
							uni.showToast({
								title: '评价成功',
								icon: 'none', //如果要纯文本，不要icon，将值设为'none'
								duration: 2000 //持续时间为 2秒
							});
						}
						that.watchnum = 5;
						that.gettiezi();
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			gettiezi() {
				let that = this;
				uni.request({
					url: 'http://47.113.227.126:21354/volunteer/getOthersComment',
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
							that.childrentitle = res.data.data.post.title;
							that.childrentiezi = res.data.data.post.content;
							that.childrentieziimg = JSON.parse(res.data.data.post.images);
							that.childrenimg = "http://47.113.227.126:21354/uploadFile/" + res.data.data
								.post
								.userId +
								".jpg";
							that.childrenname = res.data.data.post.username;
							that.postid = res.data.data.post.postId;
							that.otherquire = res.data.data.comment.content;
							that.commentid = res.data.data.comment.commentId;
							that.watchnum = 5;
						} else {
							that.childrentiezi = "暂无帖子";
							that.childrentitle = "暂无帖子";
							that.childrentieziimg = [];
							that.childrenimg = null;
							that.childrenname = null;
							that.postid = null;
							that.otherquire = "暂无回复";
							that.commentid = null;

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
						this.user.headpicurl = "http://47.113.227.126:21354/uploadFile/" + res.data.data
							.id +
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
		src: url("../../static/AlimamaDaoLiTi.woff") format("woff2"),
			url("../../static/AlimamaDaoLiTi.woff") format("woff");
		font-display: swap;
	}


	.content {
		height: calc(100vh - 44px);
		width: 100%;
		font-family: AlimamaDaoLiTi;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		.background {
			position: absolute;
			height: 100%;
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
				border-radius: 5%;

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
				text-decoration: underline dashed #f5ad52;
				display: flex;
				flex-direction: column;
				// justify-content: center;
				align-items: center;
				padding-top: 20rpx;
				padding-left: 20rpx;
				padding-right: 20rpx;
				position: relative;

				.myrequire-img {
					position: absolute;

					height: 10em;
					bottom: 0rpx;
					left: 0rpx;
				}

				.otheriezibody {
					overflow-y: scroll;
					height: 80%;
					width: 80%;
					word-wrap: break-word;
				}
			}

			.bottombtn {
				display: flex;
				justify-content: center;
				// gap: 20%;
				width: 100%;
				padding-left: 5%;
				padding-right: 5%;
				height: 50px;

				.watch {
					height: 80%;
					border: #e6984e solid 2px;
					border-radius: 5%;
					width: 80%;
					font-size: 40rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #e6984e;
				}


				button {
					width: 28%;
					border-radius: 10%;
					border: #e6984e solid 2px;
					color: #e6984e;
				}






			}
		}



	}
</style>