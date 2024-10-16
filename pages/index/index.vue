<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/datitop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  center_center"
			:style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}"
			>
				<!-- <scroll-view
				scroll-y
				:style="{
					'height':(screenHeightPx-img1-img2-200)+'rpx'
				}"
				>
					
				</scroll-view> -->
				<view class="colonn">
					<view class="type1" @click.stop="topage(1)">对答如流得分</view>
					<view class="h-100"></view>
					<view class="type1"  @click.stop="topage(2)">方向列表</view>
				</view>
				
			</view>
			<image  @load="imgload($event,2)"  
			src="../../static/datibottom.jpg" mode="widthFix" class="w-750"></image>
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
			
			}
		},
		onLoad() {
			
			// 获取当前界面的宽高
			const systemInfo = uni.getSystemInfoSync();
			const screenWidth = systemInfo.screenWidth;
			const screenHeight = systemInfo.screenHeight;
			console.log("屏幕的原始高",)
			const bili=750/screenWidth;
			const screenHeightPx=bili*screenHeight;  
			this.screenHeightPx=screenHeightPx;
			console.log(bili,screenWidth,screenHeight,screenHeightPx);
			
		},
		methods: {
			topage(type){
				if(type==1){
					uni.navigateTo({
						url:"/pages/duidaruliudefen/duidaruliudefen"
					})
				}else if(type==2){
					uni.navigateTo({
						url:"/pages/fangxiang/fangxiang"
					})
				}
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
	@import url(index.css);
</style>
