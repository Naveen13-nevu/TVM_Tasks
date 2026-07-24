function calculateBMI(){

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(height==="" || weight===""){
        alert("Please enter height and weight.");
        return;
    }

    let heightMeter = height / 100;

    let bmi = weight / (heightMeter * heightMeter);

    document.getElementById("result").innerHTML ="BMI : " + bmi.toFixed(2);

    let category="";

    if(bmi < 18.5){
        category="Underweight";
    }
    else if(bmi < 25){
        category="Normal Weight";
    }
    else if(bmi < 30){
        category="Overweight";
    }
    else{
        category="Obese";
    }

    document.getElementById("category").innerHTML =
    "Category : " + category;

}