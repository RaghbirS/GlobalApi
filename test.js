const { default: axios } = require("axios");

async function post(){
    let data = await axios.post("http://localhost:3001/AllRows",{
        test1:"Vdsvds",
        test2:"dvsvsd",
        test3:242,
        test4:false
    })
}
async function get(){
    let data = await axios.get("http://localhost:3001/AllRows");
    console.log(data.data);
}
async function getByQuery(){
    let data = await axios.get("http://localhost:3001/AllRows?test4=false");
    console.log(data.data);
}
async function getByID(){
    let data = await axios.get("http://localhost:3001/AllRows/64268fe4f3e8a5eef0e08db1");
    console.log(data.data);
}
async function patch(){
    let data = await axios.patch("http://localhost:3001/AllRows/64268fe4f3e8a5eef0e08db1",{
        test1:"patching",
    })
}
async function deleteData(){
    let data = await axios.delete("http://localhost:3001/AllRows/6426abe4ac9605fa351c9276")
}
// get()
// getByID()
// getByQuery()
// post()
// patch()
deleteData()