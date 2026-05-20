//your code here

function majElement(){
	                                                                  
	let arr=n.split(" ")
	let value=Math.floor(arr.length/2)
	let narr={}
	console.log(arr.length)
	  for (let i = 0; i < arr.length; i++) {

        let el = arr[i];

        narr[el] = (narr[el] || 0) + 1;

        if (narr[el] > value) {
            console.log(el); 
            return; 
        }
}
	console.log("No Majority Element");
}
let n= prompt()    
majElement(n)