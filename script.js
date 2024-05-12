//your JS code here. If required.
let a=document.getElementById('output');
a.innerHTML=` <tr><td colspan='2'>Loading...</td></tr>`;
const p1=new Promise((a,b)=>{
	setTimeout(()=>{
		a('resolved');
	},2500);
});
const p2=new Promise((a,b)=>{
	setTimeout(()=>{
		a('resolved');
	},2900);
});
const p3=new Promise((a,b)=>{
	setTimeout(()=>{
		a('resolved');
	},2950);
});
let array=[p1,p2,p3];
Promise.all(array).then((d)=>{
	
	a.innerHTML=``;
	a.innerHTML=`<tr><td>Promise 1</td><td>2500</td></tr>
	<tr><td>Promise 2</td><td>2.900</td></tr>
	<tr><td>Promise 3</td><td>2.950</td></tr>
	<tr><td>Total</td><td>2.950</td></tr>
	`;
});