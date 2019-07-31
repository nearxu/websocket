### some error from vue

1. beforeDestroy  removeEvenet and not destroyed

2. setTimeout and setInterval this is window ,so should () => {}

3. app.vue watch:{'$route'(to,from) }  路由防卫

4. vue 滚动记录位置 vueRouter({mode:'history',scrollBehavior:saevPosition})