import { ref, reactive } from "vue";
import type { TableColumns } from "@pureadmin/table";

export function getData() {
  const columns: Array<TableColumns> = [
    {
      label: "Date",
      prop: "date"
    },
    {
      label: "Name",
      prop: "name"
    },
    {
      label: "Address",
      prop: "address"
    }
  ];
  const tableData = [
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    },
    {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    },
    {
      date: "2016-05-04",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    },
    {
      date: "2016-05-01",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    }
  ];
  const loading = ref(true);
  const pagination = reactive({
    pageSize: 5,
    currentPage: 1,
    background: true,
    total: tableData.length
  });
  setTimeout(() => {
    loading.value = false;
  }, 1500);
  return { columns, tableData, loading, pagination };
}
