const stext = "this is no good";
const encrypt = (st)=>{
    var return_string = "";
    var string ="";
    string+=st;
    string+=stext;
    string = string.split("")
    const len = string.length;
    let temp="";
    for(var i=0;i<len;i=i+2){
        if(i+1<len){
            temp = string[i];
            string[i] = string[i+1];
            string[i+1] = temp; 
        }
    }
    for(var j=0;j<len;j++)
    {
        var code = string[j].charCodeAt(0);
        code = code+j;
        string[j] = String.fromCharCode(code);
    }
    for(var t=0;t<len;t++)
    {
        return_string+= string[t];
    }
    return return_string;
}

const decrypt = (st)=>{
    var return_string = "";
    var string = "";
    string+=st;
    string =string.split("");
    const len = string.length;
    let temp = "";
    for(var j=0;j<len;j++)
    {
        var code = string[j].charCodeAt(0);
        code = code-j;
        string[j] = String.fromCharCode(code);
    }
    for(var i=0;i<len;i=i+2)
    {
        if(i+1<len){
            temp = string[i];
            string[i] = string[i+1];
            string[i+1] = temp; 
        }
    }
    for(var f =0;f<len;f++)
    {
        return_string+=string[f];
    }
    return return_string.slice(0,-6);
}

export default encrypt;
export {decrypt};