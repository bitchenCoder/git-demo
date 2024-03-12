<template>
  <div class="main">

    <div class="Box">

      <div class="outSub sub">1</div>

      <div class="sub">1</div>
      <div class="sub">2</div>
      <div class="sub">3</div>
      <div class="sub">4</div>
      <div class="sub">5</div>
      <div class="sub">6</div>

      <div class="outSub sub">6</div>

    </div>

    <button @click="change(true)">+</button>
    <button @click="change(false)">-</button>

  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      temp: "",
      timer: null,
      flag: true,

    };
  },
  mounted() {

   console.log('branch test1');

  },
  computed: {
  },
  watch: {
  },
  methods: {
    change(flag) {

      let box = document.getElementsByClassName('Box')[0];

      console.log(box.firstElementChild);
      let newEle = box.firstElementChild.cloneNode(true);

      box.prepend(newEle)


      // if(flag){

      // }else{

      // }

    },
    //防抖 （相当于lol的回城 ）
    debounce(fn, time) {

      if (this.timer !== null) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        fn();
      }, time);

    },
    //节流 （相当于技能cd）
    throttle(fn, time) {

      if (this.flag == false) {
        console.log('cd中');
        return;
      }

      this.flag = false;
      fn();

      setTimeout(() => {

        this.flag = true;

      }, time);

    },
    valueChange() {

      this.temp = this.$refs.inputRef.value;

    },
    tempFun() {
      console.log(1);
    }


  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.main {
  width: 3840px;
  height: 2160px;
  position: relative;
}

.Pointer {
  cursor: pointer;
}

input {
  margin-left: 50%;
  transform: scale(3);
}

.font {
  font-size: 50px;
}

.Box {
  position: absolute;
  width: 1800px;
  height: 300px;
  background-color: red;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.outSub:first-child {
  position: absolute;
  left: -300px;
}

.outSub:last-child {
  position: absolute;
  right: -300px;
}

.sub {
  height: 100%;
  width: 300px;
  color: black;
  font-size: 60px;
  text-align: center;
  display: inline-block;
  line-height: 300px;
  border: 5px solid plum;
  transition: all 1s;
}

button {
  width: 300px;
  height: 300px;
  font-size: 60px;
}
</style>
