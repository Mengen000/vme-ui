<template>
    <div class="alert" ref="alert" :class="{ active: alertStatus }">
      <div>
        {{ text }}
      </div>
    </div>
  </template>
  <script>
  export default {
      // <el-button> el-xxx
      name:'VmeAlert',
      data() {
          return {
              alertStatus: false,
              text:''
          }
      },
      methods: {
          // 封装方法，类库，组件
          // 容错，健壮性，扩展性
          open(alert, time=2000){
              this.text = alert;
              this.alertStatus = true;
              setTimeout(() => {
                  this.alertStatus = false;
                  // alertStatus = 13
                  // 1.不可控 2. 工具是独立的(隐藏，私密性)
              }, time)
          }
      }
  }
  </script>
  <style scoped>
  .alert {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    width: 0;
    min-height: 0;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: #ffffff;
    transition: all 0.5s;
    z-index: -1;
    opacity: 0;
  }
  .alert.active {
    width: 150px;
    min-height: 25px;
    opacity: 1;
    z-index: 11;
  }
  </style>