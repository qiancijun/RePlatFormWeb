<template>
    <div class="NoteCard">
        <div class="container">
            <div class="UserInfo">
                <div class="UserName">QianciJun</div>
                <div class="Date">1小时前</div>
            </div>
            <mavon-editor
                class= "md"
                :value= "content"
                :subfield = "false"
                :defaultOpen = "'preview'"
                :toolbarsFlag = "false"
                :editable = "false"
                :ishljs = "true"
            ></mavon-editor>
        </div>
    </div>
</template>

<style lang="less">
.NoteCard {
    margin: 0.5rem auto;
    margin-top: 40px;
    width: 15rem;
    height: 5rem;
    .Container {
        overflow: hidden;
        height: 5rem;
    }
    .UserName {
        font-size: 0.4rem;
    }
    .Date {
        margin-top: 0.2rem;
        font-size: 0.3rem;
    }
    .md {
        min-height: 4rem;
        min-width: 15rem;
    }
}
</style>

<script>
export default {
    data() {
        let content = "# hello"
        return {
            content
        };
    }
}
</script>

