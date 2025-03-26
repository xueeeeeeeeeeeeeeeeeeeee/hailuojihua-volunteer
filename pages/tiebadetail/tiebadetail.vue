<template>
	<view class="content">
		<image src="../../static/backgroud.jpg" mode="aspectFill" class="background"></image>
		<view class="content-main">
			<view class="author">
				<view class="authorimg">
					<img :src="'http://47.113.227.126:21354/uploadFile/'+tiezidetail.userId+'.jpg'" alt="aspectFit">
				</view>
				<view class="authorinfo">
					<view class="authorname">
						{{tiezidetail.username}}
					</view>
					<view class="authortime">
						{{tiezidetail.createTime}}
					</view>
				</view>
				<button class="delete" @click="deltiezi">删除</button>
			</view>
			<scroll-view scroll-y="true" class="body">
				<view class="bodyword">{{tiezidetail.content}}</view>
				<view class="bodyimg" v-for="item in tiezidetail.images">
					<img :src="'http://47.113.227.126:21354/images/'+item" alt="aspectFill">
				</view>
				<view class="cando">
					<svg t="1697471447540" class="icon" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="4034" width="200" height="200">
						<path
							d="M853.333333 533.333333a32 32 0 0 1 64 0v266.666667c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V256c0-64.8 52.533333-117.333333 117.333333-117.333333h277.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v544a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V533.333333z m-42.058666-277.333333l-89.792-95.402667a32 32 0 0 1 46.613333-43.861333l140.544 149.333333C927.861333 286.485333 913.376 320 885.333333 320H724.704C643.029333 320 576 391.210667 576 480v192a32 32 0 1 1-64 0V480c0-123.296 94.784-224 212.704-224h86.570667z"
							fill="#2c2c2c" p-id="4035"></path>
					</svg>
					<view class="dianzan" @click="dianzan">
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
							{{tiezidetail.likeNumber}}
						</view>
					</view>
				</view>
				<view class="reply">
					<view class="noreply" v-if="tiezidetail.comments.length==0">
						<img src="../../static/girl.png" alt="aspectFit">
						楼层为空，快来抢楼吧
					</view>
					<view class="replyitem" v-for="(item,index) in tiezidetail.comments">
						<view class="replyauthor">
							<img :src="'http://47.113.227.126:21354/uploadFile/'+item.userId+'.jpg'" alt="aspectFit"
								class="replyauthor-pic">
							{{item.username}}
							<button class="delete" @click="delcomments(item.commentId)">删除</button>
							<div class="replyauthordianzan" @click="dianzancomments(item.commentId,index)">
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
								</svg>{{item.likeNumber}}
							</div>
						</view>
						<view class="replyitem-body">
							<view class="replyitem-body-word">
								{{item.content}}
							</view>
							<view class="replyitem-body-img" v-for="item1 in item.images">
								<img :src="'http://47.113.227.126:21354/images/'+item1" alt="aspectFit"
									class="replyitem-body-inimg">
							</view>
						</view>
					</view>
				</view>

			</scroll-view>
			<view class="input" adjust-position>
				<input @focus="changeing" @blur="lose" @input="oninput" class="uni-input" focus placeholder="请输入..."
					:value="bubbleinput" />
				<image src="../../static/index/hailuo.png" mode="aspectFill" v-if="inputting==0"></image>
				<view class="send2" v-else>
					<view class="inputting" @click="send">
						回复
					</view>
				</view>
				<svg t="1697554721378" class="icon" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg" p-id="5299" width="200" height="200" @click="onloadimg">
					<path d="M287.8 288m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z" fill="#2c2c2c" p-id="5300"></path>
					<path
						d="M957.1 161.9c-0.5-2-1-4.1-1.6-6.1-0.6-2-1.2-4-1.9-5.9-0.3-1-0.7-2-1-2.9-1.1-2.9-2.2-5.8-3.5-8.6-1.7-3.7-3.6-7.4-5.6-10.9-1-1.8-2.1-3.5-3.2-5.2-0.6-0.9-1.1-1.7-1.7-2.5-1.7-2.5-3.5-5-5.4-7.4-1.3-1.6-2.6-3.2-3.9-4.7-2.7-3.1-5.5-6-8.4-8.8-22.8-21.7-53.5-35.1-87.3-35.1H190.9c-27.2 0-52.5 8.7-73.2 23.5-0.8 0.6-1.6 1.2-2.5 1.8-2.4 1.8-4.8 3.7-7.1 5.7-0.8 0.7-1.5 1.3-2.3 2-1.1 1-2.2 2.1-3.3 3.1l-2.2 2.2c-2.5 2.5-4.9 5.2-7.1 7.9-0.6 0.8-1.3 1.6-1.9 2.4-1.5 1.9-3 3.9-4.4 5.9-9.6 13.7-16.5 29.3-20 46.2-0.1 0.4-0.2 0.8-0.2 1.1-0.4 2.1-0.8 4.2-1.1 6.3-1 6.6-1.6 13.3-1.6 20.1v640c0 9.2 1 18.3 2.9 27 5 23.8 16.6 45.2 33 62.1l2.7 2.7c1.8 1.8 3.7 3.5 5.6 5.2 3.8 3.3 7.9 6.4 12.1 9.3 0.8 0.6 1.7 1.1 2.5 1.7 1.7 1.1 3.5 2.2 5.2 3.2l2.7 1.5c1.8 1 3.6 1.9 5.5 2.8 4.6 2.2 9.4 4.2 14.3 5.9 2 0.7 3.9 1.3 5.9 1.9 6 1.7 12.2 3 18.5 3.8 5.6 0.8 11.3 1.2 17.1 1.2h640c3.6 0 7.1-0.2 10.6-0.4 7.8-0.5 15.4-1.8 22.7-3.7 3-0.8 6-1.7 9-2.7 4.9-1.7 9.7-3.6 14.3-5.9 1.8-0.9 3.7-1.8 5.5-2.8l2.7-1.5c8.8-5.1 17-11.2 24.4-18.2 0.6-0.5 1.1-1.1 1.6-1.6 0.2-0.2 0.4-0.3 0.5-0.5 2.2-2.2 4.2-4.4 6.2-6.7 0.1-0.1 0.2-0.3 0.4-0.4 1.2-1.4 2.4-2.8 3.5-4.2 1.3-1.6 2.5-3.2 3.7-4.9 0.4-0.6 0.8-1.2 1.2-1.7 0.3-0.4 0.6-0.9 0.9-1.3 0.5-0.7 0.9-1.3 1.3-2s0.8-1.3 1.2-2c0.1-0.2 0.3-0.4 0.4-0.6l2.1-3.6c0.8-1.5 1.6-2.9 2.4-4.4 1.3-2.5 2.5-5.1 3.6-7.7 0.5-1.2 1-2.3 1.4-3.5 0.9-2.2 1.7-4.5 2.5-6.8 0.5-1.6 1.1-3.3 1.5-5 0.6-2 1.1-4.1 1.6-6.1 0.2-0.9 0.4-1.8 0.6-2.8 0.4-1.9 0.8-3.8 1.1-5.8 0-0.2 0.1-0.4 0.1-0.7 0.2-1.6 0.5-3.1 0.6-4.7 0.2-1.6 0.3-3.2 0.5-4.8 0.2-3.2 0.4-6.4 0.4-9.7V190.4c-0.1-9.8-1.3-19.3-3.4-28.5zM752.2 467.2c-25.3-25.3-66.6-25.3-91.8 0l-242 242L304.1 595c-25.3-25.3-66.6-25.3-91.8 0L128 679.3V192c0-17 6.7-33 18.9-45.1C159 134.7 175 128 192 128h640c17 0 33 6.7 45.1 18.9C889.3 159 896 175 896 192v419L752.2 467.2z"
						fill="#13227a" p-id="5301"></path>
				</svg>

			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputting: 0,
				bubbleinput: "",
				tieziid: null,
				picboxs: [],
				token: "",
				author: {
					authorimg: "../../static/children.jpg",
					authorname: "儿童"
				},

				user: {
					id: 10002,
					userstate: 0,
					headpicurl: "../../static/children.jpg",
				},
				tiezidetail: {
					title: "你们在学校遇到过这样子的事情吗",
					body: "我前桌借了我的铅笔，我向他要的时候他说过两天再还，可是我过了一星期向他要他还说过两天我该怎么办呢",
					time: "2023-10-16 16:00",
					hot: "100",
					comments: [{
						pepimg: "../../static/children.jpg",
						pepname: "儿童",
						body: "我也遇到过这样子的事情，我就自认倒霉，感觉拿他没什么办法",
						bodyimg: [],
						dianzan: 200
					}, {
						pepimg: "../../static/children.jpg",
						pepname: "儿童",
						body: "图不错我偷了",
						bodyimg: ["../../static/mad.jpg"],
						dianzan: 200
					}, {
						pepimg: "../../static/children.jpg",
						pepname: "儿童",
						body: "可以和老师说，这样子他不还也得还",
						bodyimg: [],
						dianzan: 200
					}, {
						pepimg: "../../static/user/headpic.jpg",
						pepname: "儿童",
						body: "wocwocwocwocwoc",
						bodyimg: ["../../static/test.jpg"],
						dianzan: 200
					}],
					img: ["../../static/mad.jpg", ],

				}
			};
		},
		watch: {

		},
		onLoad(e) {
			console.log(e.id);
			this.tieziid = e.id;
			this.token = uni.getStorageSync("token");



			this.returninfo();
			this.returntiezidetail();
		},
		methods: {
			oninput(e) {
				this.bubbleinput = e.detail.value;
			},
			deltiezi() {
				uni.request({
					url: 'http://47.113.227.126:21354/volunteer/deletePost/' + this.tieziid,
					method: 'POST',
					data: {
						postId: this.tieziid,
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


					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			delcomments(e) {
				console.log(e);
				let that = this;
				uni.request({
					url: 'http://47.113.227.126:21354/volunteer/deleteComment/' + e,
					method: 'POST',
					data: {
						commentId: e,
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
						console.log(res);
						// setTimeout(function() {
						// 	that.$router.go(0)

						// }, 1000);

					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			dianzancomments(e, index) {
				let that = this;
				console.log("dianzan");
				uni.request({
					url: 'http://47.113.227.126:21354/like/comment/' + e,
					method: 'POST',
					data: {
						postId: this.tieziid,
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
						if (that.tiezidetail.comments[index].islike == 0) {
							that.tiezidetail.comments[index].likeNumber++;
							that.tiezidetail.comments[index].islike = 1;
						} else {
							that.tiezidetail.comments[index].likeNumber--;
							that.tiezidetail.comments[index].islike = 0;
						}


						console.log(res.data);

					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			dianzan() {
				let that = this;
				console.log("dianzan");
				uni.request({
					url: 'http://47.113.227.126:21354/like/post/' + this.tieziid,
					method: 'POST',
					data: {
						postId: this.tieziid,
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
						if (that.tiezidetail.islike == 0) {
							that.tiezidetail.likeNumber++;
							that.tiezidetail.islike = 1;
						} else {
							that.tiezidetail.likeNumber--;
							that.tiezidetail.islike = 0;
						}


						console.log(res.data);

					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			lose() {
				if (this.bubbleinput == "") {
					this.inputting = 0
				}
			},
			changeing() {
				this.inputting = 1;

			},
			onloadimg() {
				let that = this;
				uni.chooseImage({
					count: 9, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						console.log(that.picboxs);
						const files = res.tempFiles;
						let imgArr = [];
						for (let i = 0; i < files.length; i++) {
							let obj = new Object();
							obj.name = 'images';
							obj.uri = files[i].path;
							that.picboxs.push(obj);
						}

						console.log(that.picboxs[0].uri);
						// that.picboxs = res.tempFilePaths; //拿到选择的图片，是一个数组
						// console.log(that.picboxs[0]);
					}
				});
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
			returntiezidetail() {
				let that = this;
				uni.request({
					url: 'http://47.113.227.126:21354/p/' + this.tieziid,
					method: 'GET',

					header: {
						'Authorization': this.token,
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						console.log(that.tiezidetail);
						that.tiezidetail = res.data.data;

						that.tiezidetail.images = JSON.parse(that.tiezidetail.images);
						console.log(that.tiezidetail);
						for (var i = 0; i < that.tiezidetail.comments.length; i++) {
							that.tiezidetail.comments[i].images = JSON.parse(that.tiezidetail.comments[i]
								.images);
						}
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})

			},
			send() {
				let that = this;
				uni.uploadFile({
					url: 'http://47.113.227.126:21354/discussion/creatComment',
					files: this.picboxs,
					header: {
						Authorization: this.token,
					},
					formData: {
						"postId": this.tieziid,
						"content": this.bubbleinput
						// 可以在这里添加其他的表单数据
					},

					success: function(res) {
						console.log(res);
						if (JSON.parse(res.data).msg == "响应成功") {
							uni.showToast({
								title: '发送成功',
								icon: 'none', //如果要纯文本，不要icon，将值设为'none'
								duration: 2000 //持续时间为 2秒
							});
							setTimeout(function() {
								that.$router.go(0)

							}, 1000); // 这里的 1000 表示延时的时间，单位是毫秒



						}
						// if (res.data.msg)
					},
					fail: function(res) {
						console.log(2);
						console.log(res.data);
					}
				});
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

		.content-main {
			position: relative;
			width: 97vw;
			height: 88vh;
			background: rgba(255, 255, 255, 0.7);
			z-index: 4;
			border-radius: 30rpx;
			border-top: 8rpx #7692ca solid;
			border-bottom: 8rpx #7692ca solid;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;

			.reply {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.noreply {
					padding-top: 120rpx;
					padding-bottom: 120rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: #828283;

					img {
						width: 360rpx;
					}
				}

				.replyitem {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 95%;
					padding-top: 50rpx;
					border-bottom: #828283 solid 0.5rpx;

					.replyauthor {
						display: flex;
						width: 100%;
						align-items: center;
						font-size: 30rpx;

						.delete {
							background-color: red;
							color: #fff;
						}

						.replyauthordianzan {
							display: flex;
							margin-left: auto;
							justify-content: center;
							align-items: center;

							.icon {
								height: 60rpx;
								width: 60rpx;
							}

						}

						img {
							height: 60rpx;
							width: 60rpx;
							border-radius: 50%;
							margin-right: 20rpx;
						}
					}

					.replyitem-body {
						width: 100%;

						.replyitem-body-word {
							margin-top: 20rpx;
							margin-bottom: 20rpx;
							width: 100%;
							word-break: break-all;
							word-wrap: break-word
						}

						.replyitem-body-img {
							width: 60%;

							img {
								width: 100%
							}

							margin-bottom: 20rpx;
						}
					}
				}
			}

			.author {
				padding-left: 15rpx;
				padding-top: 10rpx;
				padding-bottom: 10rpx;
				display: flex;
				align-items: center;
				border-bottom: #333 solid 0.1rpx;

				.delete {
					background-color: red;
					color: #fff;
				}

				.authorimg {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;

					img {
						width: 100%;
						border-radius: 50%;
					}

				}

				.authorname {
					font-size: 40rpx;
					margin-left: 10rpx;
				}

				.authortime {
					font-size: 20rpx;
					margin-left: 10rpx;
				}
			}

			.body {
				padding-top: 10rpx;
				padding-left: 10rpx;
				overflow: hidden;
				height: 86%;

				.bodyimg {
					width: 80%;
					margin: auto;
					margin-top: 10rpx;

					img {
						width: 100%
					}
				}

				.cando {
					display: flex;
					align-items: center;
					justify-content: center;
					padding-bottom: 20rpx;
					border-bottom: #333 solid 0.1rpx;

					.icon {
						height: 60rpx;
						width: 60rpx;
					}

					.dianzan {
						margin-left: 20%;
						display: flex;
						align-items: center;
						justify-content: center;
						gap: 10rpx;



						.dianzannum {
							font-size: 45rpx;
						}
					}
				}

			}

			.input {
				width: 800rpx;
				height: 60rpx;

				position: absolute;
				bottom: 0rpx;
				bottom: 10rpx;
				left: 20rpx;
				display: flex;
				box-sizing: border-box;
				align-items: center;

				.icon {
					margin-left: 15rpx;
					height: 55rpx;
					width: 70rpx;
				}
			}

			input {

				background: white;
				width: 450rpx;
				border-radius: 25rpx;
				border: 1rpx #333 solid;
				height: 60rpx;
				padding-left: 20rpx;
				margin-bottom: 0rpx;
				border-radius: 25rpx;
				box-sizing: border-box;
			}

			image {

				float: right;
				width: 100rpx;
				height: 80rpx;
				margin-left: 50rpx;
			}

			.send2 {
				display: flex;

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

				.voice {
					margin-left: 10rpx;
					height: 60rpx;
					width: 60rpx;
				}
			}
		}



	}
</style>