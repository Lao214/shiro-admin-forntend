<template>
  <div class="login-body">
        <div class="body-left">

        </div>
        <div class="body-right">
            <div class="login-form">
                <div style="display: flex; align-items: center;width: 100%;justify-content: center;">
                    <svg t="1715068069137" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4856" width="36" height="36"><path d="M736.256 257.024l-40.96 16.9472S632.9856 213.7088 558.08 213.7088 418.4064 273.9712 418.4064 273.9712l-79.36-45.6192s80.64-81.92 190.6176-81.92 206.592 110.592 206.592 110.592z m-385.1776 502.784A260.0448 260.0448 0 0 1 256 777.6256C114.6368 777.6256 0 665.6 0 527.36s114.6368-250.112 256-250.112a258.56 258.56 0 0 1 153.6 50.0224v52.1728a183.552 183.552 0 0 0-139.008-28.16c-99.0208 19.4048-163.84 113.7664-145.3568 210.7392S239.4112 721.92 338.432 702.5664A185.344 185.344 0 0 0 418.4064 665.6v1.536c9.4208-5.12 72.4992-38.656 93.5936-54.3744a167.0144 167.0144 0 0 0 27.9552-26.6752l-56.7296-21.248 120.2176-46.7968 57.2928 113.408-66.816-24.9856a400.5376 400.5376 0 0 1-64.6656 56.32 1044.0192 1044.0192 0 0 1-99.84 56.32l0.4608 1.0752c33.6384 76.0832 131.584 106.1376 218.6752 67.1232a184.32 184.32 0 0 0 99.4816-104.6016 140.6976 140.6976 0 0 0 88.064-8.8576c74.7008-33.4848 106.5984-125.2864 71.3728-204.8s-124.416-117.2992-199.1168-83.8144a141.4656 141.4656 0 0 0-35.4304 22.8352v-2.3552l-126.2592 76.8 32.8192 32.0512L491.52 509.7472l-5.12-85.9648 40.1408 39.2704 146.3808-106.4448a214.0672 214.0672 0 0 1 138.9568-50.688c117.1456 0 212.1216 92.8256 212.1216 207.3088s-94.976 207.3088-212.1216 207.3088a215.552 215.552 0 0 1-32.768-2.4576 236.288 236.288 0 0 1-428.032 41.8304z" fill="#00C080" p-id="4857"></path></svg>
                    <span style="margin-left: 7px;font-size: 24px;">Affiliate Links</span>
                </div>
                <div style="margin-top: 30px;">
                    <div class="group">
                        <svg t="1715068503855" class="icons" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5869" width="24" height="24"><path d="M506.075809 546.976206c-145.260076 0-263.436846-118.16774-263.436846-263.418785 0-145.260076 118.17677-263.436846 263.436846-263.436846 145.260076 0 263.436846 118.16774 263.436846 263.436846C769.512655 428.799436 651.335885 546.976206 506.075809 546.976206zM506.075809 76.996419c-113.896181 0-206.561002 92.664821-206.561002 206.561002S392.179628 490.100362 506.075809 490.100362c113.905212 0 206.561002-92.646759 206.561002-206.54294S619.981021 76.996419 506.075809 76.996419zM514.754388 621.191146c-250.902125 0-455.024817 174.88103-455.024817 389.840656l28.437922 0c0-199.607302 190.991939-361.411765 426.586895-361.411765s426.586895 161.804462 426.586895 361.411765l20.156698 0 8.281224 0C969.788235 796.072176 765.647482 621.191146 514.754388 621.191146zM514.754388 678.057959c219.547262 0 398.148973 149.360049 398.148973 332.964812l28.437922 0c0-199.607302-190.991939-361.411765-426.586895-361.411765S88.167493 811.4245 88.167493 1011.031802l28.437922 0C116.605415 827.427039 295.207126 678.057959 514.754388 678.057959z"  p-id="5870"></path></svg>
                        <input placeholder="请输入用户名" v-model="loginForm.username"  class="input">
                    </div>
                    <div class="group" style="margin-bottom: 5px;">
                        <svg t="1715069877507" class="icons" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7224" width="24" height="24"><path d="M933.645464 421.646315h-120.470375V120.470376c0-95.834184-34.876174-120.470376-131.55365-120.470376H342.25639C245.518679 0 210.823211 24.636192 210.823211 120.470376v301.175939H90.352835a61.138716 61.138716 0 0 0-60.235188 60.235188v498.747355a43.550041 43.550041 0 0 0 43.971687 43.369335h875.699161a43.550041 43.550041 0 0 0 43.790981-43.369335L993.880652 481.881503a60.235188 60.235188 0 0 0-60.235188-60.235188zM271.058398 120.470376a51.802262 51.802262 0 0 1 60.235188-60.235188h361.411127a51.802262 51.802262 0 0 1 60.235188 60.235188v301.175939H271.058398V120.470376z m662.587066 843.292629H90.352835V481.881503h843.292629v481.881502z m-460.016129-225.761484v71.860579a10.902569 10.902569 0 0 0 10.962804 10.842334h54.693551a10.902569 10.902569 0 0 0 10.962804-10.842334v-71.860579a65.656355 65.656355 0 1 0-76.619159 0z m0 0" p-id="7225"></path></svg>
                        <input placeholder="请输入密码" v-model="loginForm.password" type="password" class="input">
                    </div>
                    <div style="text-align: end;color: gray;font-size: 14px;">
                        忘记密码
                    </div>
                    <div class="login-btn" @click="handleLogin">
                        登录
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            loading: false
        }
    },
    methods: {
        handleLogin() { 
            if(!this.loginForm.username) {
                this.$message({
                message: '请输入用户名',
                type: 'warning'
                });
                return
            }
            if(!this.loginForm.password) {
                this.$message({
                message: '请输入密码',
                type: 'warning'
                })
                return
            }
            this.loading = true
            this.$store.dispatch('user/login', this.loginForm).then(() => {
                this.$router.push({ path: '/dashboard' })
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        }
    }
}
</script>

<style scoped>
    .login-body{
        background: #5674d8;
        height: 100vh;
        display: flex;
    }
    .body-left {
        /* background: #227256; */
        width: 50%;
    }
    .body-right {
        /* background: #567256; */
        width: 50%;
    }
    .login-form {
        min-width: 300px;
        min-height: 340px;
        padding: 20px;
        width: 27vw;
        background: white;
        margin: 0 auto;
        margin-top: 20vh;
        border-radius: 14px;
    }

    .group {
        display: flex;
        line-height: 28px;
        align-items: center;
        position: relative;
        margin-top: 20px;
        margin-bottom: 20px;
        /* max-width: 190px; */
    }

    .input {
        width: 100%;
        height: 40px;
        line-height: 28px;
        padding: 0 1rem;
        padding-left: 2.5rem;
        border: 2px solid transparent;
        border-radius: 8px;
        outline: none;
        background-color: #f3f3f4;
        color: #0d0c22;
        transition: .3s ease;
    }

    .input::placeholder {
        color: #9e9ea7;
    }

    .input:focus, input:hover {
        outline: none;
        border-color: rgba(76, 118, 234, 0.4);
        background-color: #fff;
        box-shadow: 0 0 0 4px rgba(76, 118, 234, 0.1);
    }

    .icons {
        position: absolute;
        left: 1rem;
        fill: #9e9ea7;
        width: 1rem;
        height: 1rem;
    }

    /* 修改.login-btn的样式以应用动画 */
    .login-btn {
        margin-top: 10px;
        padding: 11px;
        color: white;
        /* 调整渐变以适应动画，增加背景尺寸使动画可见 */
        background: linear-gradient(to bottom, #5674d8, rgb(140, 182, 249));
        border-radius: 7px;
        cursor: pointer;
        font-weight: 700;
    }

    /* 保持原有的`:focus`和`:hover`状态效果 */
    .login-btn:hover {
        background: #5674d8;
    }
</style>