<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/datitop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  center_center" :style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}">
				<scroll-view scroll-y :style="{
					'height':(screenHeightPx-img1-img2-200)+'rpx'
				}">
					<view class="roww allline rowsa">
						<view class="roww center_center">
							<view>主答均分：</view>
							<view>
								<input type="number" class="w-200" v-model="waidate.score_avg" placeholder="" />
							</view>
						</view>

						<view class="roww center_center">
							<view>补答均分：</view>
							<view>
								<input  type="number"  class="w-200" v-model="waidate.b1score_avg" placeholder="" />
							</view>
						</view>
					</view>
					<view class="h-30"></view>
					<block v-for="(item,index) in test_list">
						<view class="roww rowsa p-bottom-40">
							<view class="w-20"></view>
							<view class="w-200 cebtee1s">{{item.username}}.</view>
							<view class="w-228 fw-700 cebtee1s">主打:
								<text style="color:green;" class="fw-700">{{item.score}}分</text>
							</view>
							<view class="fw-700 w-238 cebtee1s">补打：
								<text style="color:green;" class="fw-700">{{item.b1score}}分</text>
							</view>
						</view>
					</block>

					<view class="colonn">
						<view class="roww border_bottom cebtees w-700 p-all-20">
							主要回答
						</view>

						<view class="roww border_bottom  p-all-20">
							<view>组</view>
							<view class="w-30"></view>
							<view class="w-500">
								<view class="huanhang">
									<block v-for="(item,index) in zuList">
										<view class="duiitemsel" v-if="selzufec.zgIndex==index">
											{{item.name}}
										</view>
										<view class="duiitemno" @click.stop="zuChange(index,1)" v-else>
											{{item.name}}
										</view>
									</block>
								</view>
							</view>
						</view>
						<view class="roww border_bottom  p-all-20">
							<view>姓名</view>
							<view class="w-500">
								<view class="huanhang">
									<block v-for="(item,index) in zuyuan1">
										<view class="duiitemsel" v-if="selzufec.zIndex==index">
											{{item.username}}
										</view>
										<view class="duiitemno" @click.stop="zuyuanChange(index,1)" v-else>
											{{item.username}}
										</view>
									</block>
								</view>
							</view>
						</view>

						<view class="roww border_bottom cebtees w-700 p-all-20">
							补充回答
						</view>
						<view class="roww border_bottom  p-all-20">
							<view>组</view>
							<view class="w-30"></view>
							<view class="w-500">
								<view class="huanhang">
									<block v-for="(item,index) in zuList">
										<view class="duiitemsel" v-if="selzufec.fgIndex==index">
											{{item.name}}
										</view>
										<view class="duiitemno" @click.stop="zuChange(index,2)" v-else>
											{{item.name}}
										</view>
									</block>
								</view>
							</view>
						</view>
						<view class="roww border_bottom  p-all-20">
							<view>姓名</view>
							<block v-for="(item,index) in zuyuan2">
								<view class="duiitemsel" v-if="selzufec.fIndex==index">
									{{item.username}}
								</view>
								<view class="duiitemno" @click.stop="zuyuanChange(index,2)" v-else>
									{{item.username}}
								</view>
							</block>
						</view>
						<view class="roww center_center">
							<view class="btns" @click.stop="toSubmit">提交绑定</view>
						</view>
					</view>

				</scroll-view>
			</view>
			<image @load="imgload($event,2)" src="../../static/datibottom.jpg" mode="widthFix" class="w-750"></image>
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

				options: {},
				test_list: [],
				waidate: {

				},

				zuList: [], //
				formSub: {
					'sort': '',
					'uuid': '',
					'buid1': '',
					'score_avg': '',
					'b1score_avg': '',
				},
				selzufec: {
					'zgIndex': -1,
					'zIndex': -1,
					'fgIndex': -1,
					'fIndex': -1,
				}, //选择组和组员
				zuyuan1: [], //组员1
				zuyuan2: [], //组员2
			}
		},
		onLoad(options) {
			// 获取当前界面的宽高
			const systemInfo = uni.getSystemInfoSync();
			const screenWidth = systemInfo.screenWidth;
			const screenHeight = systemInfo.screenHeight;
			console.log("屏幕的原始高", )
			const bili = 750 / screenWidth;
			const screenHeightPx = bili * screenHeight;
			this.screenHeightPx = screenHeightPx;
			console.log(bili, screenWidth, screenHeight, screenHeightPx);

			this.options = options;
			this.getDaoshidafenList();


			this.getZu();

		},
		methods: {
			// 提交指定得人
			toSubmit() {
				// dtLogBind2
				if(this.selzufec.zIndex==-1||this.selzufec.fIndex==-1){
					this.$tools.showToast("请选择人员");
					return false;
				}  
				var data={
					'sort': this.options.sort,
					'uuid': this.zuyuan1[this.selzufec.zIndex].uuid,
					'buid1':this.zuyuan2[this.selzufec.fIndex].uuid,
					'score_avg': this.waidate.score_avg,
					'b1score_avg': this.waidate.b1score_avg,
				}
				
				this.$axios
					.axios('POST', this.$paths.dtLogBind2, data)
					.then(res => {
						if (res.code == 1) {
							this.$tools.showToast("绑定成功");
							setTimeout(res=>{
								uni.navigateBack({
									delta:1
								})
							},1000)
				
						} else {
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			zuyuanChange(index, type) {
				if (type == 1) {
					this.selzufec.zIndex = index;
				} else if (type == 2) {
					this.selzufec.fIndex = index;
				}
			},
			// 组修改
			zuChange(index, type) {
				console.log("aa", index, type)
				if (type == 1) {
					this.selzufec.zgIndex = index;
				} else if (type == 2) {
					this.selzufec.fgIndex = index;
				}
				this.getGroupMember(type);
			},
			// 获取组员
			getGroupMember(type) {
				if(type==1){
					var data = {
						'group_id': this.zuList[this.selzufec.zgIndex].group_id
					}
				}else{
					var data = {
						'group_id': this.zuList[this.selzufec.fgIndex].group_id
					}
				}
				
				this.$axios
					.axios('POST', this.$paths.getGroupMember, data)
					.then(res => {
						if (res.code == 1) {
							console.log("分组", res);
							if (type == 1) {
								this.zuyuan1 = res.data;
							} else if (type == 2) {
								this.zuyuan2 = res.data;
							}

						} else {
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 获取组
			getZu() {
				// 
				var data = {}
				this.$axios
					.axios('POST', this.$paths.getGroup, data)
					.then(res => {
						if (res.code == 1) {
							console.log("分组", res);
							this.zuList = res.data;
						} else {
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 获取打分记录
			getDaoshidafenList() {
				var data = {
					'sort': this.options.sort
				}
				this.$axios
					.axios('POST', this.$paths.getDtLog2, data)
					.then(res => {
						if (res.code == 1) {
							var test_list = res.data.test_list;
							for (var a = 0; a < test_list.length; a++) {
								test_list[a].b1score = parseFloat(test_list[a].b1score).toFixed(1)
								test_list[a].score = parseFloat(test_list[a].score).toFixed(1)
							}
							this.test_list = test_list;
							this.waidate = res.data;
							this.waidate.score_avg = parseFloat(this.waidate.score_avg).toFixed(1)
							this.waidate.b1score_avg = parseFloat(this.waidate.b1score_avg).toFixed(1)

						} else {
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			topage() {
				uni.navigateTo({
					url: "/pages/xycz/xycz"
				})
			},
			// 图片加载完成
			imgload(res, index) {
				console.log("阿萨德", res, index)
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
	@import url(dafenjilu.css);
</style>