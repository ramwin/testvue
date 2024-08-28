const axios = require('axios')
axios.post(
  "http://geth.coin.ramwin.com/http/rpcprivatepass202403011129/",
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
