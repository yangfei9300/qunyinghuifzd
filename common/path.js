// 项目域名
export const BASE_URL = 'https://lq.imjiayi.com//api'
// export const BASE_URL = 'https://frdhwapi.zsyflive.com/api'

//----------项目接口请求路径-----------
//获取分组 
const getGroup =BASE_URL + '/api/getGroup' 
// 获取对答如流用户分数  /api/api/getTestList
const getTestList =BASE_URL + '/api/getTestList' 
// 登录  
const apilogin =BASE_URL + '/api/login' 
// 获取导师打分泪飙 /api/api/getDtLog2
const getDtLog2 =BASE_URL + '/api/getDtLog2' 
// 胸有成竹得分绑定  /api/api/dtLogBind2
const dtLogBind2 =BASE_URL + '/api/dtLogBind2' 
// 获取组员  /api/api/getGroupMember
const getGroupMember =BASE_URL + '/api/getGroupMember' 
// 设置当前方向  /api/api/sortUpdate
const sortUpdate =BASE_URL + '/api/sortUpdate' 
// 获取当前方向  api/api/getSort
const getSort =BASE_URL + '/api/getSort' 




 export default {
	 getSort,
	 sortUpdate,
	 getGroupMember,
	 dtLogBind2,
	 getDtLog2,
	 apilogin,
	 getTestList,
	getGroup
 }
 