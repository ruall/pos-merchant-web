// import { $t } from "@/plugins/i18n";

export default {
  path: "/table",
  meta: {
    title: "table",
    // showLink: false,
    rank: 11
  },
  children: [
    {
      path: "/table/index/1",
      meta: {
        title: "table1"
      },
      children: [
        {
          path: "/table/index/1",
          name: "table1",
          component: () => import("@/views/table/index.vue"),
          meta: {
            title: "table1-1"
          }
        },
        {
          path: "/table/index/2",
          name: "table2",
          component: () => import("@/views/table1/index.vue"),
          meta: {
            title: "table1-2"
          }
        }
      ]
    },
    {
      path: "/table/index2",
      name: "table3",
      component: () => import("@/views/table2/index.vue"),
      meta: {
        title: "table2"
      }
    }
  ]
} as RouteConfigsTable;
