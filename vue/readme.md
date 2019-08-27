<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-31 16:25:01
 * @LastEditTime: 2019-08-26 18:04:29
 * @LastEditors: Please set LastEditors
 -->
### some error from vue

1. beforeDestroy  removeEvenet and not destroyed

2. setTimeout and setInterval this is window ,so should () => {}

3. app.vue watch:{'$route'(to,from) }  路由防卫

4. vue 滚动记录位置 vueRouter({mode:'history',scrollBehavior:saevPosition})

### vue 路由参数变化，页面不刷新（数据不更新）

1. watch:{
  $route(to,from){
    // do some things
  }
}

2.
<keep-alive>
      <router-view :key="$route.fullPath"></router-view>
</keep-alive>