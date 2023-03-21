<template>
  <div>
    <div>
      <div class="center">
        <div class="header">
          <img src="../assets/培训.png" />
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
          <img src="../assets/com.png" alt="" />
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
    };
  },
};
</script>

<style >
.center {
  margin: 0 auto;
}

.center .header img {
  width: 360px;
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
</style>