<template>
  <div class="app">
    <!-- <SideBar></SideBar> -->
    <TopBar></TopBar>
    <!-- <NoteCard></NoteCard>
    <NoteCard></NoteCard>
    <NoteCard></NoteCard> -->
    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 0.25rem;
}
body, html{
  /* height: 100%; */
}
.show {
  /* float: right; */
  /* background: #bfa; */
  width: 100%;
  height: 100%;
}
</style>