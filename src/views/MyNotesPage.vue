<template>
    <div class="MyNotes">
        <div class="OwnerInfo">
            <p>QianciJun</p>
            <p>笔记数量</p>
        </div>
        <div class="NotesList">
            <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
                prop="number"
                label="编号"
                width="140">
            </el-table-column>
            <el-table-column
                prop="name"
                label="笔记名称"
                width="300">
            </el-table-column>
            <el-table-column
                prop="coding"
                label="笔记编码"
                width="300">
            </el-table-column>
            <el-table-column
                prop="tag"
                label="标签"
                width="400">
            </el-table-column>

            <el-table-column
                fixed="right"
                label="操作"
                width="200">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>
        </div>
    </div>
</template>


<style lang="less">
.NotesList {
    margin: 0.5rem 0.5rem;
}
</style>


<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
            number: 1,
            name: '高等数学',
            coding: '11223344',
            tag: "数学"
        }]
      }
    }
  }
</script>