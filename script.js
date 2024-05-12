//your JS code here. If required.
let d1=new Date();
let a=document.getElementById('output');
const p1=new Promise((a,b)=>{
	setTimeout(()=>{
		a('resolved');
	},1500);
});
const p2=new Promise((a,b)=>{
	setTimeout(()=>{
		a('resolved');
	},1200);
});
const p3=new Promise((a,b)=>{
	setTimeout(()=>{
		a('resolved');
	},1950);
});
let array=[p1,p2,p3];
Promise.all(array).then((d)=>{
	let d2=new Date();
	let final=d2.getSeconds()-d1.getSeconds()+(d2.getMilliseconds()-d1.getMilliseconds())/1000;
	a.innerHTML=`<tr><td>Promise 1</td><td>1.500</td></tr>
	<tr><td>Promise 2</td><td>1.200</td></tr>
	<tr><td>Promise 3</td><td>1.950</td></tr>
	<tr><td>Total</td><td>${final.toFixed(4)}</td></tr>
	`;
});