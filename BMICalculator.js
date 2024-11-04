const calculate = document.querySelector("form");
const cal = document.querySelector(".btn");

cal.addEventListener("click", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#hei").value);
    const weight = parseInt(document.querySelector("#wei").value);
    const age = parseInt(document.querySelector("#ag").value);
    const male = document.querySelector("#ma");
    const female = document.querySelector("#fe");
    const result = document.querySelector(".p6");
    console.log(height,weight,age);

    if(height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please give a valid data';
    } else if(weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please give a valid data';
    } else if(age === "" || age < 0 || isNaN(age)) {
        result.innerHTML = 'Please give a valid data';
    } else if(male.checked==false && female.checked==false) {
        result.innerHTML = 'Please choose your gender';
    } else if(male.checked==true && female.checked==true) {
        result.innerHTML = 'Please choose only one gender';
    } else if(male.checked==true || female.checked==true){
        let bmi = (weight / ((height*height)/10000));
        bmi = bmi.toFixed(2);
        if(age > 0 ) {
            if(bmi < 16) {
                result.innerHTML = `${bmi} , Severe Thinness`;
            } else if(bmi >= 16 && bmi <= 17) {
                result.innerHTML = `${bmi} , Moderate Thinness`;
            } else if(bmi > 17 && bmi <= 18.5) {
                result.innerHTML = `${bmi} , Mild Thinness`;
            } else if(bmi > 18.5 && bmi <= 25) {
                result.innerHTML = `${bmi} , Normal`;
            } else if(bmi > 25 && bmi <= 30) {
                result.innerHTML = `${bmi} , Overweight`;
            } else if(bmi > 30 && bmi <= 35) {
                result.innerHTML = `${bmi} , Obese Class I`;
            } else if(bmi > 35 && bmi <= 40) {
                result.innerHTML = `${bmi} , Obese Class II`;
            } else {
                result.innerHTML = `${bmi} , Obese Class III`;
            }
         }
        // else {
        //     if(bmi < 17) {
        //         result.innerHTML = `${bmi} , Underweight`;
        //     } else if(bmi > 17 && bmi <= 21.1) {
        //         result.innerHTML = `${bmi} , Healthy weight`;
        //     } else if(bmi > 21.1 && bmi <= 22.5) {
        //         result.innerHTML = `${bmi} , At risk of Overweight`;
        //     } else {
        //         result.innerHTML = `${bmi} , Overweight`;
        //     }
        // }
    }
});

