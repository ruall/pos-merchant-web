<template>
  <el-card shadow="never">
    <pure-table
      border
      :loading="loading"
      :data="tableData"
      :columns="columns"
      :pagination="pagination"
  /></el-card>
</template>

<script setup lang="ts">
import { getData } from "./model";
defineOptions({
  name: "Table"
});

const { loading, tableData, columns, pagination } = getData();
</script>

<style lang="scss" scoped></style>
