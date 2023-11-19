<template>
  <div>
    <h1>表格</h1>
    <a-table
        :rowSelection="{ selectedRowKeys: selected, onChange: onSelectChange }"
      :dataSource="data"
      :columns="columns"
      rowKey="id"
      />
    <h1>测试gutter</h1>
    <p>左右各添加gutter/2的margin, 然后gutter-row添加了gutter/2的padding</p>
    <a-row :gutter="36">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
    </a-row>
    <h1>覆盖样式</h1>
    <a-card style="border: 1px solid red;">
      <div style="border: 1px solid green;">我是body</div>
    </a-card>
    <a-card style="border: 1px solid red;" class="card2">
      <div style="border: 1px solid green;">我是body, 通过设置.card2 .ant-card-body可以覆盖样式</div>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue"
type Key = string | number

const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
];
const data = [
  {
    id: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    id: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    id: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]
const selected = ref<Key[]>(['1', '2'])
const onSelectChange = (selectedRowKeys: Key[]) => {
  console.log("选择了: ", selectedRowKeys)
  selected.value = selectedRowKeys
}
</script>
<style>
.gutter-box {
  background: #0092ff;
  padding: 8px 0;
}
</style>
<style lang="less">
.card2 {
  .ant-card-body {
    border: 1px solid purple;
    padding: 0px;
  }
}
</style>
