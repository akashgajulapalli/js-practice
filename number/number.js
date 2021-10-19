const myfunction = () => {
  let number = document.getElementById("num").value;

  // even/odd
  if (number % 2 != 0) {
    document.getElementById("result").innerHTML = "Odd";
  } else {
    document.getElementById("result").innerHTML = "Even";
  }

  //reverse
  let num2 = document.getElementById("num").value;
  sum1 = 0;
  let r;
  while (num2 > 0) {
    r = num2 % 10;
    num2 = parseInt(num2 / 10);
    sum1 = sum1 * 10 + r;
  }
  document.getElementById("reverse").innerHTML =  sum1;

  //factorial
  let num3 = document.getElementById("num").value;
  let sum2 = 1;
  for (let i = 1; i <= num3; i++) {
    sum2 = sum2 * i;
  }
  document.getElementById("factorial").innerHTML =sum2;

  //sumnum
  let num1 = document.getElementById("num").value;
  let sum = 0;
  for (let i = 0; i <= num1; i++) {
    sum = sum + i;
  }
  document.getElementById("sumnum").innerHTML =sum;

  //palindrome
  let num4 = document.getElementById("num").value;
  let sum3 = 0;
  let r1;
  let temp = num4;
  while (num4 > 0) {
    r1 = num4 % 10;
    num4 = parseInt(num4 / 10);
    sum3 = sum3 * 10 + r1;
  }
  if (temp == sum3) {
    document.getElementById("palindrome").innerHTML ="Yes";
  } else {
    document.getElementById("palindrome").innerHTML ="No";
  }
};
