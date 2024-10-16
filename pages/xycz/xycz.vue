<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/datitop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  center_center" :style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}">
				<scroll-view scroll-y :style="{
					'height':(screenHeightPx-img1-img2)+'rpx'
				}">
					<view class="colonn p-all-30">
						<!-- <view class="h-50"></view>
						<view class="roww center_center duiqi">
							<view class="fs-40 fw-800">修改中</view>
						</view>
						<view class="h-50"></view>
						<view class="colonn fs-40 w-690">
							<view>{{tiIndex}}.极大规模集成电路间李春雷虽上的佛龛歌城是极大规模集成电路间李春雷虽上的佛龛歌城是极大规模集成电路间李春雷虽上的佛龛歌城是(简单题)</view>
						</view> -->
						<view class="h-60"></view>
						
						<view class="roww fs-40">
							<picker :range="duiyuans">
								<view>作答队伍：A队 ▼</view>
							</picker>
						</view>
						<view class="h-15"></view>
						<view class="roww fs-40">
							<picker :range="duiyuans">
								<view>作答队员：刘女士 ▼</view>
							</picker>
						</view>
						<view class="h-60"></view>
						<block>
							
							<view class="fs-40 fw-800">案例分析打分（总分100分）</view>
							<view class="h-20"></view>
							
							<view class="colonn center_center">
								<view class="fs-40 w-690">根据影像学资料给出正确的病例诊断结果：</view>
								<view class="h-20"></view>
								<view  class="fw-600 roww w-690" style="text-align: left;" >
									<view>得分：</view>   
									<text style="color: red;">30分</text>   
									<view class="allline"></view>
								</view>
							</view>
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40 w-690">诊断思路阐述逻辑清晰有条理，表述完整精炼，重点突出：</view>
								<view class="h-20"></view>
								<view  class="fw-600 roww w-690" style="text-align: left;" >
									<view>得分：</view>   
									<text style="color: red;">30分</text>   
									<view class="allline"></view>
								</view>
							</view>
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40 w-690">含有针对性的鉴别诊断，鉴别诊断结合病人具体病情：</view>
								<view class="h-20"></view>
								<view  class="fw-600 roww w-690" style="text-align: left;" >
									<view>得分：</view>   
									<text style="color: red;">20分</text>   
									<view class="allline"></view>
								</view>
							</view>
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40 w-690">如可能，提出进一步诊断方案：</view>
								<view class="h-20"></view>
								<view  class="fw-600 roww w-690" style="text-align: left;" >
									<view>得分：</view>   
									<text style="color: red;">10分</text>   
									<view class="allline"></view>
								</view>
							</view>
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40  w-690">语言表达清晰完整，声音洪亮，语速和节奏适中：</view>
								<view class="h-20"></view>
								<view  class="fw-600 roww w-690" style="text-align: left;" >
									<view>得分：</view>   
									<text style="color: red;">5分</text>   
									<view class="allline"></view>
								</view>
							</view>
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40  w-690">PPT制作规范，排版美观（5分）：</view>
								<view class="h-20"></view>
								<view  class="fw-600 roww w-690" style="text-align: left;" >
									<view>得分：</view>   
									<text style="color: red;">5分</text>   
									<view class="allline"></view>
								</view>
							</view>
							<view class="h-20"></view>
							
							<view class="h-100"></view>
							
							<view class="fs-40 fw-800">补充回答质量（总分20分）</view>
							<view class="h-50"></view>
							
							<picker :range="duiyuans">
								<view class="fs-40">作答队伍：<text class="fs-40">B队 ▼ </text></view>
							</picker>
							
							<view class="h-20"></view>
							<view class="roww fs-40">
								<view>作答队员：</view>
								<picker :range="duiyuans">
									<view class="">刘女士 ▼ </view>
								</picker>
							</view>
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40  w-690">有效补充答题队缺失的内容：</view>
								<view class="h-20"></view>
								<view  class="fw-600 roww w-690" style="text-align: left;" >
									<view>得分：</view>   
									<text style="color: red;">10分</text>   
									<view class="allline"></view>
								</view>
							</view>
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40  w-690">诊断思路阐述逻辑清晰合理，重点突出：</view>
								<view class="h-20"></view>
								<view  class="fw-600 roww w-690" style="text-align: left;" >
									<view>得分：</view>   
									<text style="color: red;">10分</text>   
									<view class="allline"></view>
								</view>
							</view>
							<view class="h-50"></view>
							
							
						</block>
						
						
						
						
						<view class="h-40"></view>
						<view class="btns1"
						 @click.stop="nextQuestion">提交</view>
					</view>
				</scroll-view>
			</view>
			<image @load="imgload($event,2)" 
			src="../../static/datibottom.jpg" mode="widthFix" class="w-750"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				'screenHeightPx': 0,
				img1: 0,
				img2: 0,
				startTime: 0, //开始的时间戳
				nowTime: 0,
				miaoshu: 30, //倒计时
				tiIndex: 1,

				numberInput: '',
				formattedNumber: '',
				duiyuans:['刘女士1','刘女士2','刘女士3']
			}
		},
		onLoad() {  
			// 获取当前界面的宽高
			const systemInfo = uni.getSystemInfoSync();
			const screenWidth = systemInfo.screenWidth;
			const screenHeight = systemInfo.screenHeight;
			console.log("屏幕的原始高", )
			const bili = 750 / screenWidth;
			const screenHeightPx = bili * screenHeight;
			this.screenHeightPx = screenHeightPx;
		},
		methods: {

			checkPrice(e) {
				
				var value=e.detail.value;
				
				
				
				this.$nextTick(()=> {
					//'有小数点时，最大长度为7位，没有则是5位'
					this.numberInput = value
				})

			},

			// 下一题点击事件
			nextQuestion() {
				if (this.tiIndex == 10) {
					this.tiIndex =11
					this.$tools.showToast("打分完成");
					setTimeout(res=>{
						uni.redirectTo({
							url: "/pages/selFangxiang/selFangxiang"
						})
					},1000)
					return false;
				}else if (this.tiIndex<10) {
					this.tiIndex = this.tiIndex + 1;
				}
				
			},
			// 图片加载完成
			imgload(res, index) {
				if (index == 1) {
					this.img1 = res.detail.height / 2;
				}
				if (index == 2) {
					this.img2 = res.detail.height / 2;
				}
				if (this.img1 > 0 && this.img2 > 0) {
					console.log("默认高", this.screenHeightPx)
					console.log("img1", this.img1)
					console.log("img2", this.img2)
				}
			}
		}
	}
</script>

<style>
	@import url(xycz.css);
</style>