function getpromise(text)
{
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve(text);
      },5000)
     
    })
}

const mypromise=getpromise('abcd');
mypromise.then((t) => {
    console.log(t)
})