### vue 性能优化

from https://juejin.im/post/5cdf7058f265da1b904bb03f

#### sourceMap

productionSourceMap:false

#### router 懒加载

#### v-if try,and watch not recommmend

#### 预加载

<li v-for="item in items ">
  <span ref @click="toggle"></span>
</li>

toggle(){
  "获取第几个ref ???"
}

<el-popover
    ref="popover"
    placement="right"
    title="标题"
    width="200"
    trigger="focus"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
  </el-popover>
  <el-button v-popover:popover>focus 激活</el-button>