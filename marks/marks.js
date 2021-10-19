const myfunction =() => {
    let Marks = document.getElementsByClassName("marks");
    let sum = 0;
    for(let i=0;i<Marks.length;i++ ){
        sum = sum + parseInt(Marks[i].value);
    }
    
    document.getElementById("totalmarks").innerHTML = sum;
    let percentage = sum/Marks.length;
    document.getElementById("percentage").innerHTML = percentage;
}