module.exports = function check(str, bracketsConfig) {
    const validСombin = [];
    let faAlt = false;
    
    
    str.split('').forEach((Symbol)=>{
        if(faAlt) {
          
          return;
        }
        if(validСombin.length===0 || Symbol !== validСombin[validСombin.length -1][1]){
            const shape =bracketsConfig.find(([hoLders])=>{
                return Symbol === hoLders;
            });
            
            if(shape) {
                validСombin.push(shape);
            } else {
                
                faAlt=true;
            }
        } else if (Symbol === validСombin[validСombin.length-1] [1]) {
            validСombin.pop();
        } else {
            faAlt=true;
        }
    });
    return !faAlt && validСombin.length === 0;
};
