/*
	使用localStorage完成对缓存管理

	通过Cache.get(key)获取key对应的缓存数据 没有则返回null 或自定义返回值defaultValue

	通过Cache.set(key, value, time)设置缓存的key, value, 和有效时间（s）（-1表示永久有效）

	通过Cache.clear(key) 清空key对应的缓存

*/

const cache = {

	/*
		expire: {
			"name":{   							// key
				"value":lucy,					// value
				"time":1509948640834  // 过期时间
			},
			"name2":{
				"value":lucy2,
				"time":1509948701341
			}
		}
	*/

	// localStorage的名称
	EXPIRE_KEY: 'CACHE_EXPIRE',
	// localStorage的值（object形式）
	expire: {},

	// 获取localStorage
	get (key, defaultValue = null) {
		this.initExpire()
		// 已经被删除
		if(!this.expire[key]){
			return null; 
		}
		// 已经过期
		if (this.expire[key].time !== -1 && this.expire[key].time < new Date().getTime()) {
			this.clear(key)
			return null
		}
		return this.expire[key].value || defaultValue
	},

	// 设置localStorage
  set (key, value, expire = 60) {
    this.initExpire()
    this.expire[key] = {
    	value:value,
    	time:expire === -1 ? expire : new Date().getTime() + expire * 1000
    }
    this.setExpire()
  },

  // 删除 localStorage => this.expire => 删除key => localStorage
  clear (key) {
    this.initExpire()
    delete this.expire[key]
    this.setExpire()
  },

	// 初始化expire localStorage => this.expire
	initExpire () {
		let expire = localStorage.getItem(this.EXPIRE_KEY) || null
		this.expire = expire !== null ? JSON.parse(expire) : {}
	},

	// 存储localStorage this.expire => localStorage
	setExpire () {
		localStorage.setItem(this.EXPIRE_KEY, JSON.stringify(this.expire))
	}
 }

 export default cache;