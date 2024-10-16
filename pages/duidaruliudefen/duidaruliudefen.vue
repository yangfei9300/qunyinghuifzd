<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/datitop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  center_center"
			:style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}"
			>
				<scroll-view
				scroll-y
				:style="{
					'height':(screenHeightPx-img1-img2-200)+'rpx'
				}"
				>
					<block v-for="(item,index) in List">
						<view class="roww rowsa p-bottom-40">
							<view class="w-100 cebtees">{{index+1}}.</view>
							<view class="w-208 cebtees">{{item.username}}</view>
							
							<view v-if="item.score" class="fw-700 w-208 cebtees" style="color:green;"
							 >{{item.score}}分</view>
							 <view v-else class="w-208 cebtees" >未打分</view>
						</view>
					</block>
				</scroll-view>
				
				
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
				
				List:[],
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
			this.getTestList();
			
		},
		methods: {
			getTestList(){
				var data={
					'uuid':uni.getStorageSync("userId"),
				}
				this.$axios
					.axios('POST', this.$paths.getTestList,data)
					.then(res => {
						if(res.code==1){
							this.List=res.data;
						}else{
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
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
	@import url(duidaruliudefen.css);
</style>
