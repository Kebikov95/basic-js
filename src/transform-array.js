module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('The entered data is not an array.');
      }
        let returnArr = [];
        for(var i = 0; i < arr.length; i++){
          switch(arr[i]){
            case '--discard-next':
              if(i + 1 != arr.length) i++;
              break;
            case '--discard-prev':
              returnArr.pop();
              break;
            case '--double-next':
              if(i + 1 != arr.length) returnArr.push(arr[i+1]);
              break;
            case '--double-prev':
              if(i != 0) returnArr.push(arr[i-1]);
              break;
            default:
              returnArr.push(arr[i]);
              break;    
          }
        }
      return returnArr;
};
