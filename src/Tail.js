const tail = (array) => {
    if(array.length==0)
        return [];
    const result = array.slice(1, array.length);
    return result;   
  }
  module.exports = tail;