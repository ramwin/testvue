<template>

</template>
<script setup lang="ts">
// import Web3 from 'web3'
import axios from "axios"
import { onMounted } from "vue"

onMounted(() => {
    // const web3 = new Web3("http://localhost:15173/http/rpcprivatepass202403011129/")
    // console.log("获取number")
    // console.log(web3.eth.getBlockNumber())

    axios.post(
        "/http/rpcprivatepass202403011129/",
        {
            jsonrpc: "2.0",
            "id": "00250581-b209-48d8-a015-2759437db49d",
            method: "eth_blockNumber",
            params: []
        },
        {
            "headers": {
            "Content-type": "application/json",
            },
        }
    ).then((res)=>{
        console.log(res.data)
    })

})
</script>
