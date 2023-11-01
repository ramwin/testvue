<template>
  <div>
    <h1>表格</h1>
    <a-table
        :rowSelection="{ selectedRowKeys: selected, onChange: onSelectChange }"
      :dataSource="data"
      :columns="columns"
      rowKey="id"
      />
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

