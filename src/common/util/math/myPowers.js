
const myCube = require('./myCube');


const mySquare = require('./mySquare');



module.exports = {
    
        toSquare: function(inpNumber) {
            return mySquare.toSquare(inpNumber);
        },
    
    
        toCube: function(inpNumber) {
         return myCube.toCube(inpNumber);   
        }
    }
