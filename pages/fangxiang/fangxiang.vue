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
				scroll-y class="colonn center_center"
				:style="{
					'height':(screenHeightPx-img1-img2-200)+'rpx'
				}"
				>  
					<block v-for="(item,index) in 12">
							
						<view class="roww rowsb center_center m-bottom-30 w-700">
							<view class="w-30"></view>
							<view class="type1" @click.stop="topage(index+1)">方向{{index+1}}</view>
							<view class="allline1"></view>
							<block v-if="nowSort==(index+1)">
								<view style="color: green;" >当前方向</view>
							</block>
							<block v-else>
								<view style="color: blue;" @click="setFangxaing(index+1)">设定当前方向</view>
							</block>
							<view class="w-30"></view>
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
				
				nowSort:-1,
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
			this.getfangxiang();
		},
		methods: {
			// 获取当前方向
			getfangxiang(){
				var data={
					
				}
				this.$axios
					.axios('POST', this.$paths.getSort, data)
					.then(res => {
						if (res.code == 1) {
							console.log("当前方向",res);
							this.nowSort=res.data.sort;
						} else {
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 当前方向设置
			setFangxaing(sort){
				var data={
					'sort':sort
				}
				
				this.$axios
					.axios('POST', this.$paths.sortUpdate, data)
					.then(res => {
						if (res.code == 1) {
							this.$tools.showToast("设定成功");
							setTimeout(res=>{
								this.getfangxiang();
							},500)
						} else {
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			
			
			topage(sort){
				uni.navigateTo({
					url:"/pages/dafenjilu/dafenjilu?sort="+sort
				})
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
	@import url(fangxiang.css);
</style>
