module.exports = function repeater( str, options ) {
    if(options.separator === undefined)
        options.separator = '+';
    if(options.addition === undefined)
        options.additionRepeatTimes = 0;
    if(options.additionSeparator === undefined)
        options.additionSeparator = '';
    if(options.repeatTimes === undefined)
        options.repeatTimes = 1;
    if(options.additionRepeatTimes === undefined)
        options.additionRepeatTimes = 1;


    let res1 = "";
    for(let i = 0;i<options.additionRepeatTimes;i++){
        if(i<options.additionRepeatTimes-1){
            res1+=options.addition + options.additionSeparator;
        }
        else{
            res1+=options.addition;
        }
    }
    str +=res1;
    let res2="";
    for(let i = 0;i<options.repeatTimes;i++){
        if(i<options.repeatTimes-1){
            res2+=str+options.separator;
        }
        else{
            res2+=str;
        }
    }
    return res2;
};
  