<template>
  <el-card shadow="never" :style="elStyle">
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

//@ts-ignore
defineOptions({
  name: "Table2"
});

const { loading, tableData, columns, pagination } = getData();
</script>

<style lang="scss" scoped></style>
