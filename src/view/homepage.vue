<template>
  <div>
    <div>
      <div class="center">
        <div class="header">
          <img
            src="../assets/培训.png"
            :style="{ width: '100%', height: 'auto' }"
          />
        </div>
        <div class="login">
          <div class="message">
            <img src="../assets/message.png" />
          </div>
          <div class="login-ntext">
            {{ message }}
          </div>
          <div class="login-button">
            <button>登录</button>
          </div>
        </div>
        <div class="logon">
          <img
            src="../assets/com.png"
            alt=""
            :style="{ width: '100%', height: 'auto' }"
          />
        </div>
        <div class="classes">
          <div class="center">
            <div class="first">
              <div class="flex">
                <div class="wenzi bottom">
                  {{ classes }}
                </div>
                <div class="more">
                  {{ more }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      message: "您还没有登录,只能试听五分钟哦",
      classes: "在线课程",
      more: "更多",
    };
  },
};
</script>

<style >
.center {
  margin: 0 auto;
}

.login {
  padding-top: 10px;
  background: white;
}

.login {
  display: flex;
  justify-content: space-between;
}

.message img {
  width: 20px;
}

.message {
  padding-left: 10px;
}

.login-ntext {
  padding-right: 105px;
  font-size: 10px;
}

.login-button button {
  border: none;
  background: white;
  color: blue;
  font-weight: 300;
}

.logon {
  padding-top: 10px;
}

.logon img {
  width: 360px;
}

.bottom {
  border-bottom: 1px solid blue;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.classes {
  background: #fff;
  margin-top: 10px;
}

.wenzi {
  padding-left: 11px;
  padding-top: 10px;
  font-weight: 300;
  font-size: 21px;
}

.more {
  padding-top: 10px;
  font-weight: 200;
  color: #808080a3;
}
</style>