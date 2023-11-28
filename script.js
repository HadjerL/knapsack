const weight_input = document.getElementById('weight');
const height_input = document.getElementById('height');
const age_input = document.getElementById('age');
const activity_input = document.getElementById('activity')
const female_radio = document.getElementById('female');
const male_radio = document.getElementById('male');
const next_btn = document.getElementById('next--btn');


let weight = '';
let height = '';
let age = '';
let activity = '';
let sex = ''

next_btn.addEventListener('click',()=>{
    weight = weight_input.value;
    height = height_input.value;
    age = age_input.value;
    activity = activity_input.options[activity_input.selectedIndex].text;
    if(female_radio.checked){
        sex = 'female';
    }
    else{
        sex = 'male';
    }
    const info = {
        weight: weight,
        height: height,
        age: age,
        activity: activity,
        sex: sex
    }
    const infoString = JSON.stringify(info);
    localStorage.setItem('info',infoString);
})

