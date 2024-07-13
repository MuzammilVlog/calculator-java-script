const a=+prompt("Enter Your First Num");

const c=prompt("Enter Your Operator");

const b=+prompt("Enter Your Second Num");


switch(c){
    case "+":
        alert(a+b);
        break;

        case "-":
        alert(a-b);
        break;

        case "*":
        alert(a*b);
        break;

        case "/":
        alert(a/b);
        break;

        default:
            alert("Bad Expression");
}