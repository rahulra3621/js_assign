function revString()
{
    var s = document.getElementById("rev").value.split("");
    // s = s.value;
    // s =  s.split();
    s = s.reverse().join("");
    document.getElementById("reversed").innerHTML=s;  
    document.getElementById("rev").value="";  
}
function palCheck()
{
    var s = document.getElementById("palIn").value;
    var rev = s.split("").reverse().join("");

    if(s==rev){
        document.getElementById("palRes").innerHTML=rev+"<br>String is Palindrome.";
    }
    else{
        document.getElementById("palRes").innerHTML=rev+"<br>String is not Palindrome.";
    }
    document.getElementById("palIn").value="";  
}

function fact()
{
    let num  = document.getElementById("factIn").value;
    let fac = 1;
    while(num>0)
    {
        fac *= num;
        num--;
    }
    document.getElementById("factRes").innerHTML="Factorial = "+fac;
    document.getElementById("factIn").value="";  
}

function fiboSeries()
{
    let a = 0;
    let b = 1;
    let num = document.getElementById("fibIn");
    num = num.value;
    var ch = document.createElement("div");
    // var br = document.createElement("br");/
    let temp  = 0;
    for(let i = 1; i <= num; i++)
    {
        ch.append(a+" ");
        // ch.appendChild(br);
        document.getElementById("fibRes").append(ch);
        temp = a;
        a=b;
        b=temp+a;
    }
    document.getElementById("fibIn").value="";  
}

var max = 0;
var arr = [];
document.getElementById("maxIn").addEventListener(
    "input",function (){
        let num = document.getElementById("maxIn").value;
        if (num>=max)
        {
            max=num;
        }
        arr.push(num);
        document.getElementById("maxRes").innerHTML=`Array: ${arr}<br>`+"Max: "+max;
        document.getElementById("rev").value="";
    }
);

function vowelCounter()
{
    let vowels = "aeiouAEIOU";
    var s = document.getElementById("stringIn").value;
    let len = s.length;
    let count = 0;
    for(let i = 0; i <= len-1; i++)
    {
        for(let j = 0; j <= vowels.length-1; j++)
        {
            if(s[i]==vowels[j])
            {
                count++;
            }
        }
    }
    document.getElementById("countRes").innerHTML=`String Entered: ${s}<br>`+"No. of Vowels: "+count;
    document.getElementById("stringIn").value="";
}

function sumDigits()
{
    let num = document.getElementById("numIn").value;
    let temp = num;
    let sum = 0;
    while(num>0){
        sum += num%10;
        num = num/10;
        sum = Math.floor(sum);
    }
    console.log(sum);
    document.getElementById("sumRes").innerHTML=`Number Entered: ${temp}<br>`+"Sum of Digits: "+sum;
    document.getElementById("numIn").value="";
}

function eoCheck()
{
    let num = document.getElementById("eoIn").value;
    let element = document.getElementById("eoRes");
    if(num%2==0)
    {
        element.innerHTML=`Number: ${num} is even number.`;
    }
    else{
        element.innerHTML=`Number: ${num} is odd number.`;
    }
    document.getElementById("eoIn").value="";
}

function primeCheck()
{
    let num = document.getElementById("primeIn").value;
    var prime = true;
    for(let i = 2; i <= Math.sqrt(num); i++)
    {
        if(num%i==0)
        {
            prime = false;
            break;
        }
        // else{
        //     prime = true;
        // }
    }
    if(prime)
    {
        document.getElementById("primeRes").innerHTML=`${num} is Prime`;
    }
    else{
        document.getElementById("primeRes").innerHTML=`${num} is not Prime`;
    }
    document.getElementById("primeIn").value="";
}

var arr = [];

function duplicateRem() {
    let num = document.getElementById("arrIn").value;
    arr.push(num);
    let newarr = [...new Set(arr)];
    console.log(newarr);
    document.getElementById("duplicateRes").innerHTML = `
        Array with Duplicate Values: ${arr.join(", ")} <br>
        Array without Duplicate Values: ${newarr.join(", ")}`;
    document.getElementById("arrIn").value = "";
}