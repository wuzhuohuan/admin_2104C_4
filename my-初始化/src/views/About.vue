<template>
  <div class="about">
      <h1>留言板</h1>
      {{data}}
       <p> 用户名：{{$route.query.username}}</p>
      <textarea name="" id="" cols="30" rows="10" v-model="content" ></textarea>
       <button @click="arr">发布</button>
      <!-- 发布信息 -->
       <div class="fabu">
          <ul >
            <li v-for="(item,index) in data" :key="index" >
              <span>用户名：{{item.username}}</span> <br>
              <span> 
                内容：{{item.content}} 
                <button @click="huifu(index)">回复</button> 
                <button @click="sc(index)">删除</button>
              </span> <br>
              <span>时间：{{item.id|time}}</span>
               <ol>
                 <li v-for="(it,ind) in item.children" :key="ind">
                   {{it.content}}
                   <button @click="scchildren({index:index,ind:ind})" >删除</button>
                   </li>
               </ol>
            </li>
          </ul>
         
       </div>

  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
  export default {
    data() {
      return {
        content:"",
        flag:false
      }
    },
    computed:{
      ...mapState(["data"])
    },
    methods:{
      ...mapMutations(["arrone","scone","huifuone","scchildren"]),
        arr(){
          var obj ={
            id: new Date(),
            content:this.content,
            username:this.$route.query.username,
            children:[]
          }
          this.arrone(obj)
          this.content=""
        },
        huifu(index){
           if(this.content==""){
              return alert("不能为空")
           }
           var obj ={
            id: new Date(),
            content:this.content,
            username:this.$route.query.username,
          }
         
          this.huifuone({index:index,o:obj})
        },
        sc(index){
          this.scone(index)
        },
        
    }
  }
</script>

<style lang="scss" scoped>
    ul{
      // border: 1px solid #ccc;
      width: 300px;
      
    }
</style>
