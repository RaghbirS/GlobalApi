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
async function getByQuery(query){
    let data = await axios.get(`http://localhost:3001/AllRows?${query}`);
    console.log(data.data);
}
async function getByID(id){
    let data = await axios.get(`http://localhost:3001/AllRows/${id}`);
    console.log(data.data);
}
async function patch(id){
    let data = await axios.patch(`http://localhost:3001/AllRows/${id}`,{
        test1:"patching",
    })
}
async function deleteData(id){
    let data = await axios.delete(`http://localhost:3001/AllRows/${id}`)
}
// get()
// getByID("id")
// getByQuery("query")
// post()
// patch("id")
// deleteData("id")