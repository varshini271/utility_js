  
  function cube(num){
    return num*num*num;  
  }
  module.exports = cube;
 function identity(num) {
    return num;  
  }
   module.exports = identity;
  const map=(array,fn)=>{
      return array.map(eval(fn));
  }
  module.exports = map;
