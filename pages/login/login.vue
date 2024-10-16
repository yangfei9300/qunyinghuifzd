<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/logintop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  center_center"
			:style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}"
			>
				<view class="colonn">
					
					<view class="roww center_center">
						<view class="fw-700 fs-40" style="color:#E7942E;">控制后台</view>
					</view>
					<view class="h-100"></view>
					<view class="roww inputview">
						<view>姓名</view>
						<view class="w-20"></view>
						<input v-model="username" placeholder="请输入姓名" />
					</view>
					<view class="h-40"></view>
					<view class="btns" @click.stop="toLoginApi">登录</view>
				</view>
			</view>
			<image  @load="imgload($event,2)"  src="../../static/loginbottom.jpg" mode="widthFix" class="w-750"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				'screenHeightPx':0,
				img1:0,
				img2:0,
				
				identity:1,//1普通答题者,2打分专家3.专家（不打分）
				
				username:'',//
			}
		},
		onLoad() {
			const systemInfo = uni.getSystemInfoSync();
			const screenWidth = systemInfo.screenWidth;
			const screenHeight = systemInfo.screenHeight;
			console.log("屏幕的原始高",)
			const bili=750/screenWidth;
			const screenHeightPx=bili*screenHeight;  
			this.screenHeightPx=screenHeightPx;
			console.log(bili,screenWidth,screenHeight,screenHeightPx);
			if(uni.getStorageSync("userId")){
				uni.navigateTo({
					url:"/pages/index/index"
				})
			}
		},
		methods: {
			
			// 去登陆
			toLoginApi(){
				
				if(this.username==""){
					this.$tools.showToast("请输入姓名");
					return false;
				}
				
				var data={
					'username':this.username
				}
				
				this.$axios
					.axios('POST', this.$paths.apilogin,data)
					.then(res => {
						if(res.code==1){
							if(res.data.type==4){
								uni.navigateTo({
									url:"/pages/index/index"
								})
							}
						}else{
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			
			toLogin(){
				if(this.identity==1){
					this.getTestStatus();
					
				}else if(this.identity==2){
					uni.navigateTo({
						url:"/pages/selType/selType"
					})
				}
			},
			identityClick(index){
				this.identity=index;
			},
			
			// 图片加载完成
			imgload(res,index){
				console.log("阿萨德",res,index)
				if(index==1){
					this.img1=res.detail.height/2;
				}
				if(index==2){
					this.img2=res.detail.height/2;
				}
				if(this.img1>0&&this.img2>0){
					console.log("默认高",this.screenHeightPx)
					console.log("img1",this.img1)
					console.log("img2",this.img2)
				}
			}
		}
	}
</script>

<style>
	@import url(login.css);
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
