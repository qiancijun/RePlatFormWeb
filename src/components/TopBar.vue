<template>
    <div class="Topbar">
        <div class="container">
            <div class="Logo">RePlatForm</div>

            <div class="MainPage" @click="toMainPage">
                <a>首页</a>
            </div>

            <div class="MyNote" @click="toMyNotes">
                <a>我的笔记</a>
            </div>

            <div class="NodePlat">
                <a>笔记广场</a>
            </div>

            <div class="Login">
                <a>登录/注册</a>
            </div>
        </div>

    </div>
</template>

<style lang="less">
.Topbar {
    width: 100%;
    height: 1rem;
    background: pink;
    position: relative;
    font-size: 0.2rem;
    text-align: 1rem;
    .container {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        background: orange;
    }
    .container > div {
        display: inline-block;
        width: 2rem;
        margin: 0 0.9rem;
        a {
            text-decoration: none;
            display: inline-block;
            text-align: center;
            line-height: 1rem;
        }
    }
}

</style>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        toMyNotes: function() {
            // console.log("click");
            this.$router.push("/MyNotesPage");
        },
        toMainPage: function() {
            this.$router.push("/MainPage");
        }
    }
}
</script>