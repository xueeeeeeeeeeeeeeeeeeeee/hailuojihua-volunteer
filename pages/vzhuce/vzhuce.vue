<template>
	<view>
		用户名：
		<input class="uni-input" focus v-model="username1" />
		邮箱：
		<input class="uni-input" focus v-model="email1" />
		密码：
		<input class="uni-input" focus v-model="password1" />
		验证码：
		<input class="uni-input" focus v-model="code" />
		<button @click="submit2">发送验证码</button>
		<button @click="submit1">注册1</button>
		<button @click="submit3">登录</button>
		用户名：
		<input class="uni-input" focus v-model="username" />
		邮箱：
		<input class="uni-input" focus v-model="email" />
		密码：
		<input class="uni-input" focus v-model="password" />
		真实姓名：
		<input class="uni-input" focus v-model="name" />
		学号：
		<input class="uni-input" focus v-model="student_id" />
		志愿者编号：
		<input class="uni-input" focus v-model="volunteer_id" />
		生日，格式：yyyy-MM-dd HH:mm:ss：
		<input class="uni-input" focus v-model="birthday" />
		学校：
		<input class="uni-input" focus v-model="school" />
		学院：
		<input class="uni-input" focus v-model="college" />
		专业：
		<input class="uni-input" focus v-model="major" />
		<button @click="submit">注册</button>
		志愿者id：
		<input class="uni-input" focus v-model="volunteer_id" />
		可获得的志愿者时数：
		<input class="uni-input" focus v-model="activity_seconds" />
		开始时间,格式(yyyy-MM-dd HH:mm:ss)：
		<input class="uni-input" focus v-model="start_time" />
		结束时间，格式：yyyy-MM-dd HH:mm:ss
		<input class="uni-input" focus v-model="end_time" />
		<button @click="submit4">发布活动</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: "",
				activity_seconds: "",
				start_time: "",
				end_time: "",
				username1: "",
				email1: "",
				password1: "",
				code: "",
				username: "",
				email: "",
				password: "",
				name: "",
				student_id: "",
				volunteer_id: "",
				birthday: "",
				school: "",
				college: "",
				major: ""
			};
		},
		methods: {
			submit4() {
				console.log(this.volunteer_id);
				uni.request({
					url: 'http://124.220.40.115:82/root/activity_registration',
					method: 'POST',
					header: {
						'Authorization': this.token,
					},
					data: {
						volunteer_id: this.volunteer_id,
						activity_seconds: this.activity_seconds,
						start_time: this.start_time,
						end_time: this.end_time,
					},
					header: {
						'Authorization': this.token,
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
							console.log(res.data.msg);
						console.log(res.data);

					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			submit3() {
				console.log(this.username1);
				console.log(this.password1);
				uni.request({
					url: 'http://124.220.40.115:82/sign/psd_login',
					method: 'POST',
					data: {
						username: this.username1,
						password: this.password1,

					},
					header: {
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						console.log(res.data.msg);	
						if(res.data.msg=="管理员登录成功"){
							alert("管理员登录成功")
						}
						this.token = res.data.data.token;

					},
					fail: (res) => {
						alert("登录失败")
						console.log(2);
						console.log(res.data);
					}
				})
			},
			submit2() {
				uni.request({
					url: 'http://124.220.40.115:82/sign/send_email',
					method: 'POST',
					data: {

						email: this.email1,

					},
					header: {
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						console.log(res.data);

					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			submit1() {
				uni.request({
					url: 'http://124.220.40.115:82/sign/children_register',
					method: 'POST',
					data: {
						username: this.username1,
						email: this.email1,
						password: this.password1,
						code: this.code,
					},
					header: {
						'Authorization': this.token,
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						console.log(res.data);

					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			},
			submit() {
				var data={
						username: this.username,
						email: this.email,
						mobileNumber: "",
						password: this.password,
						name: this.name,
						studentId: this.student_id,
						volunteerId: this.volunteer_id,
						birthday: this.birthday,
						school: this.school,
						college: this.college,
						major: this.major,
					}
				console.log(data);
				uni.request({
					url: 'http://124.220.40.115:82/adm/volunteerRegister',
					method: 'POST',
					data: {
						username: this.username,
						email: this.email,
						mobileNumber: "暂无",
						password: this.password,
						name: this.name,
						studentId: this.student_id,
						volunteerId: this.volunteer_id,
						birthday: this.birthday,
						school: this.school,
						college: this.college,
						major: this.major,
					},
					header: {
						'Authorization': this.token,
						'content-type': 'application/json;charset=UTF-8'
					},
					success: (res) => {
						alert(res.data.msg)
						console.log(res.data.msg);
						if (res.data.msg == "用户不存在") {
							this.error = 1
						}
					},
					fail: (res) => {
						console.log(2);
						console.log(res.data);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	input {
		padding-left: 20rpx;
		margin-top: 20rpx;
		width: 550rpx;
		border-radius: 40rpx;
		height: 100rpx;
		background: #f6f6f6;
	}

	button {
		margin-top: 100rpx;
		color: #f6f6f6;
		background: #001ecf;
	}
</style>