function inventoryList() {
	let items = [
	  {
  	  name: 'abc'
  	},
  	{
  	  name: 'dfg'
  	},
  	{
  	  name: 'hig'
  	}
	]

	const add = (name) => {
	  const names = items.filter(item => item.name === name)
	  if (names.length === 0) {
	    items.push({name: name})
        //var item=items.join('/n');
		console.log(items[0].name);
	  }
	}

	const remove = (name) => {
	  items = items.filter(item => item.name !== name)
	}

	const getList = () => {
		for (var i = 0; i < items.length; i++) {
	 console.log(items[i].name);
		}
	
	}

 //getList()
   //add('opi')
getList()
  // add('yui')
  // getList()
  // remove('opi')
  // getList()
  // add('mko')
  // getList()
  // add('vbn')
  // getList()
 /* const readline = require("readline-sync");
  
  // Enter the number
  let a = Number(readline.question());

  for (let i = 0; i < a; ++i) {
	const operationInfo=readline.trim().split('');
	if(operationInfo[0]=='getlist')
	{
		console.log("gt");
	}
	if(operationInfo[0]=='add')
	{
		console.log("ad");
	}
  }
 
	*/

	return {add, remove, getList}

}

inventoryList();


