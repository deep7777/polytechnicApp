var vowels = ['a', 'e', 'i', 'o', 'u'];
var str='javascriptloops';
for(var i =0;i<vowels.length;i++) {
    for(var j=0;j<str.length;j++){
        if(vowels[i]==str[j]){
            console.log(vowels[i]);
        }
    }
    
}
    console.log(str.length);
    for(var j=0;j<str.length;j++){
        //console.log(str[j],'=',vowels.indexOf(str[j]));
        if(vowels.indexOf(str[j]>-1)){
            console.log(str[j]);
        }
    }
    
