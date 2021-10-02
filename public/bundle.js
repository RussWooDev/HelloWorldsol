var contractABI =[
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ];
var contractAddress = "0xB272125259978CB1fB924b51144E0F6454e40B97"; 
//get the HelloWorld address

var web3 = new Web3("http://localhost:9545");
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
  helloWorld.methods.hello().call()
  .then(result => {
    document.getElementById('hello').innerHTML = result;
  });
});
