const PI=3.14;
const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question(`Enter value of r ?`, r => {
    console.log(`Area of circle ${PI*r*r}!`)
    readline.close()
  })  