//your JS code here. If required.
let array=[p1,p2,p3];
const p1=new Promise((a,b)=>{
	setTimeout(()=>{
		a('resolved');
	});
},1500);
const p2=new Promise((a,b)=>{
	setTimeout(()=>{
		a('resolved');
	});
},2000);
const p3=new Promise((a,b)=>{
	setTimeout(()=>{
		a('resolved');
	}
},2500);
Promise.all(array).then((d)=>{
	let a=document.getElementById('output');
	a.innerHTML=``;
	a.innerHTML=`<tr><td>Promise 1<td><td>1.500<td></tr>
	<tr><td>Promise 2<td><td>2.000<td></tr>
	<tr><td>Promise 3<td><td>2.500<td></tr>
	<tr><td>Total<td><td>6.000<td></tr>
	`;
});