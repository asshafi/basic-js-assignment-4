function isJavaScriptFile(filename) {
    // input validity check
    if (typeof filename == 'string' && filename.split('.').length >= 2) {
     //split and get ext from name
        
    let ext = filename.split('.').pop();

    //check extension and return boolean 
    return ext.toLowerCase() == 'js';
    }

    else {
        return 'Please enter a valid file name!';
    }
  
}
console.log(isJavaScriptFile('app.js'));