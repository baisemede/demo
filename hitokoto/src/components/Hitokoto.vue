
<template>
  <div class="xx">
    <header class="header">
      <ul class="list">
        <li @click="changetype">刷新</li>
        <li @click="changetype">其他</li>
        <li @click="changetype">来自网络</li>
        <li @click="changetype">原创</li>
        <li @click="changetype">小说</li>
        <li @click="changetype">游戏</li>
        <li @click="changetype">漫画</li>
        <li @click="changetype">动画</li>
      </ul>
    </header>
    <main class="main">
     
      <div class="wrap " >
        <div class="left sym">『</div>
        <div class="one-content" >
           <transition name="fade"
      enter-active-class="zoomIn"
      leave-active-class="zoomOut">
          <p v-show="show" >{{one.hitokoto}}</p>
          </transition>
           <transition name="fade"
      enter-active-class="zoomIn"
      leave-active-class="zoomOut">
          <p v-show="!show" class="animated">{{one.hitokoto}}</p>
          </transition>
        </div>
        <div class="right sym">』</div>
      </div>
        
     <!--  <transition name="fade"
      enter-active-class="zoomIn"
      leave-active-class="zoomOut">
      <div class="wrap animated" v-show="!show">
        <div class="left sym">『</div>
        <div class="one-content" >
          <p>{{one.hitokoto}}</p>
        </div>
        <div class="right sym">』</div>
      </div>
        </transition> -->
      <div>{{one.type}}--{{one.from}}</div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      one: {},
      type: "b",
      timer: "",
      show:false
    };
  },
  created() {
    this.btn();
  },
  mounted() {
    if (this.timer) {
      clearInterval(this.timer);
    } else {
      this.clock();
    }
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    btn() {
      this.$http
        .get(`https://v1.hitokoto.cn/?c=${this.type}`)
        .then(res => {
          this.one = res.data;
          this.show=!this.show
        })
        .then(err => {});
    },
    changetype(e) {
      let string = e.target.innerHTML;
      switch (true) {
        case string === "动画":
          this.type = "a";
          break;
        case string === "漫画":
          this.type = "b";
          break;
        case string === "游戏":
          this.type = "c";
          break;
        case string === "小说":
          this.type = "d";
          break;
        case string === "原创":
          this.type = "e";
          break;
        case string === "来自网络":
          this.type = "f";
          break;
        case string === "其他":
          this.type = "g";
          break;
      }
      this.btn();
      clearInterval(this.timer);
      this.clock();
    },
    clock() {
      this.timer = setInterval(() => {
        this.btn();
      }, 8000);
    }
  }
};
</script>
<style scoped>
.xx {
  height: 100vh;
}
.list {
  text-align: center;
  font-size: 16px;
  display: flex;
  list-style: none;
  flex-direction: row-reverse;
}
li {
  padding: 0 10px;
  line-height: 8vh;
  color: white;
}
li:hover {
  background-color: #e3e3e3;
  cursor: pointer;
  color: black;
}
.header {
  background-color: #3f51b5;
  height: 8vh;
}
.main {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 92vh;
  justify-content: center;
  align-items: center;
}
.wrap {
  align-self: center;
  position: relative;
  margin-bottom: 10vh;
}
.one-content {
  padding: 15px 50px;
  font-size: 2em;
  max-width: 99vh;
  text-align: center;
}
.sym {
  font-size: 2em;
}
.left {
  position: absolute;
  left: 0;
  top: 0;
}
.right {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
