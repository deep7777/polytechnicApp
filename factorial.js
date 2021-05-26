function fact(n){
let f=1;
for(var i=n;i>=1;i--){
    f=f*i;
    
}
return f;
}

let n=4;
f1=fact(n);
console.log(f1);