const printer = {
    on: true,
    mode: 'black and white',
    remainingSheets: 168,
    print: function () {
      console.log('The printer is printing!');
    }
};


//Another Example
let originalObject = {
    favoriteColor: 'red'
  };
  
  function setToBlue(object) {
    object.favoriteColor = 'blue';
  }
  
  setToBlue(originalObject);
  
  originalObject.favoriteColor;
  // 'blue'