<template>
	<view class="content">
		<image src="../../static/hailuo/background.png" mode="" lazy-load class="background"></image>

		<view class="allconch">
			<h1 class="title">贝壳广场</h1>
			<p class="totle0">总计：{{tiezi.length}}个贝壳</p>
			<view class="incontent">
				<scroll-view class="allconchs" scroll-y="true">
					<view class="tieziitem" v-for="item in tiezi" @click="entertiezi(item)">
						<view class="author">
							<view class="authorimg">
								<img :src="'http://47.113.227.126:21354/uploadFile/'+item.userId+'.jpg'" alt="aspectFit">
							</view>
							<view class="authorname">
								{{item.username}}
							</view>
						</view>
						<h3>{{item.title}}</h3>
						<p class="tieziitem-body iconfont ">{{item.content}}</p>
						<view class="imgbox">
							<view v-for="item in item.images.slice(0,3)" class="imgitem">
								<img :src="'http://47.113.227.126:21354/images/'+item" alt="aspectFit">
							</view>
						</view>
						<view class="tieziitem-bottom">
							<view class="dianzan">
								<svg t="1697452578346" class="icon" viewBox="0 0 1024 1024" version="1.1"
									xmlns="http://www.w3.org/2000/svg" p-id="4227" width="200" height="200">
									<path
										d="M269 658.2s9.2-28.8 49.8-49.8c0 0-19.6-169.4 156-169.1 0 0 64.1 5.3 74.7 17 5.6-1.4 64.3-13.9 129.8 14.4 13.1 2.6 73.5 0.8 97 17 16.9 2.8 82.6 9 91.8 22.3 9.1 13.3-24.9 47.2-31.5 49.8-6.6 2.6-55.4 19.4-52.4 30.2 3 10.7-1.3 43.3-40.6 44.6-11.8 9.2-43.7 179.5-208.5 89.2-6.6-6.6-67 28.9-104.9 21-37.9-7.9-132.5-15.7-127.2-73.4-7.7-5.3-34 9.1-34-13.2zM304.4 664.8s166.5-19.7 225.5 51.1M349 630.7s77.4-26.2 144.2 17M544.4 468.1s28.7 119.3 199.3 166.5M686 474.7s5.2 90.5 98.3 115.4M776.5 487.8s11.8 61.6 53.8 73.4"
										fill="#2c2c2c" p-id="4228"></path>
									<path
										d="M588.4 722.6c-37.1 0-78.5-12.4-123.8-37.2-4.9 0.3-19 5.4-30.4 9.4-32.4 11.6-76.7 27.4-111.1 20.3-6.6-1.4-14.7-2.8-23.3-4.3-29.7-5.2-70.5-12.3-102.7-27-37-16.9-56.1-40.7-56.9-70.9-2.1 0.1-4.4 0.4-6.2 0.6-10.4 1.1-23.2 2.5-32.2-5.6-5.4-4.8-8.1-12-8.1-21.3 0-1 0.2-2.1 0.5-3 0.5-1.7 13.6-41.1 67.5-71.1-0.6-10.1-1.1-30.3 2.4-54.9 6.5-46.4 23.9-86.5 50.3-116.1 38.7-43.4 96.4-65.4 171.5-65.4h1.4c0.9 0.1 22.7 1.9 46.6 5.7 35.4 5.7 50.6 11.8 57.9 16.9 20-3.8 95.4-14.6 178.4 21 4.4 0.7 13.1 1.2 23.1 1.8 33.7 1.9 84.2 4.8 111 21.7 3.8 0.6 9.1 1.3 15 2.1 17.9 2.4 42.3 5.6 64.2 10.3 29.2 6.2 45 13 51.3 22.1 2.9 4.3 5.7 11.8 2.3 23.2-7.2 23.9-39.9 56.1-50 60.1-1 0.4-2.7 1.1-5 1.9-7.9 2.9-22.6 8.4-36 14.7-17.5 8.2-23 13.1-24.6 14.9 2.6 12.4-0.2 31.6-11 46.3-7.7 10.5-22.4 23-49.6 25.2-1.9 3.6-4.6 10-7.1 15.9-7.7 18.2-19.4 45.8-37.5 71.6-22.2 31.5-48.8 52.8-79.3 63.4-15.4 5.1-31.5 7.7-48.6 7.7z m-113.6-54.4c60.7 33.1 113 42.4 155.4 27.6 61.6-21.4 89.8-88.1 105-123.9 6.6-15.7 9.5-22.2 14-25.7 1.7-1.3 3.7-2 5.8-2.1 17.9-0.6 31.1-6.4 39.1-17.4 8.8-12 8.8-26.2 7.4-31.2-5.1-18.4 23-32.8 73.4-51.6 2-0.7 3.5-1.3 4.4-1.7 5.9-3.1 34.2-30.7 38.7-48.4 0.7-2.8 0.5-4.5 0.1-5.1-0.5-0.7-5.5-6.7-39-13.9-21.1-4.5-45.2-7.7-62.7-10-7.6-1-13.5-1.8-17.7-2.5-1.5-0.2-2.8-0.8-4.1-1.6-21.6-14.9-72.4-17.8-102.7-19.5-12.4-0.7-21.4-1.2-26.8-2.3-0.7-0.1-1.4-0.3-2-0.6-90.8-39.2-171-19.5-171.8-19.3-3.6 0.9-7.4-0.2-9.9-3-0.7-0.8-8-7.7-50.8-14.6-21.5-3.5-41.7-5.3-44.8-5.5h-0.2c-69 0-121.7 19.7-156.5 58.6-30 33.5-41.2 75.7-45.4 105.1-4.6 32.4-1.9 57.1-1.9 57.4 0.5 4.1-1.7 8.1-5.3 10-45.2 23.3-60.1 54.3-62.9 61.2 0.2 2.4 0.7 4.1 1.4 4.8 2.4 2.1 11.4 1.2 16.7 0.6 8.6-0.9 17.4-1.9 24.1 2.6 3.1 2 4.7 5.6 4.4 9.2-0.9 9.4-3.5 38.1 44.9 60.2 29.9 13.7 69.2 20.5 97.9 25.5 8.8 1.5 17 3 23.9 4.4 28.9 6 70.2-8.7 100.3-19.5 25.9-9.2 39.5-14 47.6-7.8z"
										fill="#2c2c2c" p-id="4229"></path>
									<path
										d="M462 675.7c-2.9 0-5.7-1.2-7.7-3.6-76.7-92-298.6-66.9-300.8-66.7-5.5 0.6-10.5-3.3-11.1-8.8-0.6-5.5 3.3-10.5 8.8-11.1 2.4-0.3 58.9-6.8 126.4-1.4 39.9 3.2 75.2 10 105.1 20.1 38.1 12.9 67.4 31.4 87 55.1 3.5 4.2 3 10.5-1.3 14.1-1.9 1.5-4.2 2.3-6.4 2.3zM411.5 582.1c-1.9 0-3.7-0.5-5.4-1.6-45-29.1-93.9-33.7-127-32.4-36.3 1.4-62.2 10-62.4 10.1-5.2 1.8-10.9-1-12.7-6.3-1.8-5.2 1-10.9 6.3-12.7 1.1-0.4 28.4-9.5 67.4-11.1 51.8-2.1 100 10.2 139.3 35.6 4.6 3 6 9.2 3 13.8-2 3-5.2 4.6-8.5 4.6zM755.4 564.1c-0.9 0-1.8-0.1-2.7-0.4-54.6-15.1-102.7-37.4-143-66.4-32.4-23.3-59.9-50.9-81.7-82-37.3-53.3-44.9-98.2-45.2-100.1-0.9-5.5 2.8-10.6 8.3-11.5 5.4-0.9 10.6 2.8 11.5 8.2 0.1 0.4 7.5 43.1 42.5 92.7 20.5 29.1 46.4 54.9 77 76.8 38.3 27.4 84.1 48.6 136.1 62.9 5.3 1.5 8.4 7 7 12.3-1.4 4.6-5.4 7.5-9.8 7.5zM811.2 502.9c-0.9 0-1.7-0.1-2.6-0.3-69.6-18.7-104.6-63.2-121.8-97.3-18.5-36.8-20.6-69-20.6-70.3-0.3-5.5 3.9-10.2 9.4-10.6 5.5-0.3 10.2 3.9 10.6 9.4 0 0.6 2.1 30.2 18.9 63.2 22.3 43.8 58.9 72.8 108.7 86.2 5.3 1.4 8.5 6.9 7.1 12.2-1.2 4.5-5.3 7.5-9.7 7.5zM874.2 463.2c-0.9 0-1.8-0.1-2.7-0.4-62.8-17.7-80.2-104.9-80.9-108.6-1-5.4 2.5-10.7 7.9-11.7s10.7 2.5 11.7 7.9c0.2 0.8 15.8 78.8 66.7 93.1 5.3 1.5 8.4 7 6.9 12.3-1.2 4.6-5.2 7.4-9.6 7.4z"
										fill="#2c2c2c" p-id="4230"></path>
								</svg>
								<view class="dianzannum">
									{{item.likeNumber}}
								</view>
							</view>
							<view class="pinglun">
								<svg t="1697453081061" class="icon" viewBox="0 0 1024 1024" version="1.1"
									xmlns="http://www.w3.org/2000/svg" p-id="5607" width="200" height="200">
									<path
										d="M512.4 836.1c-28.5 0-56.4-2.4-83.5-6.7L233.2 944V753.2C131 684.1 65.6 578.1 65.6 459c0-208.2 200-377 446.8-377 246.9 0 446.9 168.8 446.9 377s-200 377.1-446.9 377.1z m0-700.3c-215.9 0-391 144.8-391 323.2 0 109.6 66.1 206.3 167 264.6l-1.8 125.1L418 772.5c30.3 6.2 61.8 9.8 94.3 9.8 216 0 391.1-144.6 391.1-323.2 0.1-178.5-175-323.3-391-323.3z m223.5 377c-30.9 0-55.9-24.1-55.9-53.8 0-29.8 25.1-53.8 55.9-53.8 30.9 0 55.8 24.1 55.8 53.8 0.1 29.8-24.9 53.8-55.8 53.8z m-223.5 0c-30.8 0-55.8-24.1-55.8-53.8 0-29.8 25.1-53.8 55.8-53.8 30.9 0 55.9 24.1 55.9 53.8 0 29.8-25 53.8-55.9 53.8z m-223.4 0c-30.9 0-55.8-24.1-55.8-53.8 0-29.8 24.9-53.8 55.8-53.8s55.9 24.1 55.9 53.8c0 29.8-25 53.8-55.9 53.8z m0 0"
										p-id="5608" fill="#2c2c2c"></path>
								</svg>
								<view class="pinglunnum">
									{{item.reply}}
								</view>
							</view>
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
			this.returnbiezi();
		},
		methods: {
			entertiezi(item) {
				// console.log(item.postId);
				uni.navigateTo({
					url: `/pages/tiebadetail/tiebadetail?id=${item.postId}`
				});
			},
			returnbiezi(e) {
				let that = this;
				uni.request({
					url: 'http://47.113.227.126:21354/randomTwentyPosts',
					method: 'GET',

					header: {
						'Authorization': this.token,
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						console.log(1);

						that.tiezi = res.data.data;
						for (var i = 0; i < that.tiezi.length; i++) {
							that.tiezi[i].images = JSON.parse(that.tiezi[i].images);
						}
						console.log(that.tiezi);
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
						console.log(res.data);
						this.user.headpicurl = "http://47.113.227.126:21354/uploadFile/" + res.data.data.id +
							".jpg"
						this.userinfo = res.data.data;
						console.log(this.userinfo);
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

			.incontent {
				height: 100%;
				width: 100%;
			}

			.title {
				margin-top: 10rpx;
				margin-left: 20rpx;
				color: #1c2b80;
				font-size: 60rpx;
				font-weight: 200rpx;
				font-family: "AlimamaDaoLiTi";
			}

			.totle0 {
				font-size: 35rpx;
				font-weight: bolder;
				color: #1c2b80;
				margin-right: -300rpx;
				font-family: "AlimamaDaoLiTi";
			}

			.allconchs {
				display: flex;
				flex-direction: column;
				height: 90%;
				position: relative;
				width: 100%;


				.black {
					margin-top: 20rpx;
					width: 600rpx;
					height: 2rpx;
					background: black;
				}

				.tieziitem {

					height: auto;
					width: 97%;
					display: flex;
					flex-direction: column;
					background: white;
					margin: auto;
					margin-top: 15rpx;
					padding-left: 30rpx;
					padding-top: 20rpx;
					padding-bottom: 10rpx;
					border-radius: 25rpx;
					gap: 10rpx;

					.author {
						display: flex;
						align-items: center;

						.authorimg {
							width: 60rpx;
							height: 60rpx;
							border-radius: 15rpx;

							img {
								width: 100%;
								border-radius: 15rpx;
							}

						}

						.authorname {
							margin-left: 10rpx;
						}
					}

					h3 {
						width: 40%;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						font-family: "AlimamaDaoLiTi";
					}

					.tieziitem-body {
						width: 90%;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						font-family: "AlimamaDaoLiTi";

					}

					.imgbox {
						width: 100%;
						display: flex;
						overflow: hidden;

						.imgitem {
							height: 100%;
							width: 30%;

							img {
								width: 100%;
							}
						}

					}

					.tieziitem-bottom {
						display: flex;
						justify-content: center;
						align-items: center;

						.icon {
							height: 50rpx;
							width: 50rpx;
						}

						.dianzan {
							display: flex;
							align-items: center;
							justify-content: center;
							gap: 10rpx;

							.dianzannum {
								font-size: 30rpx;
							}
						}

						.pinglun {
							display: flex;
							align-items: center;
							justify-content: center;
							gap: 10rpx;
							margin-left: 30%;

							.pinglunnum {
								font-size: 30rpx;
							}
						}
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