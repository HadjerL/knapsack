const almond_btn = document.getElementById('btn--almond');
const apples_btn = document.getElementById('btn--apples');
const avocado_btn = document.getElementById('btn--avocado');
const banana_btn = document.getElementById('btn--banana');
const blueberry_btn = document.getElementById('btn--blueberry');
const bread_btn = document.getElementById('btn--bread');
const broccoli_btn = document.getElementById('btn--broccoli');
const cheese_chedder_btn = document.getElementById('btn--cheese-chedder');
const chickpeas_btn = document.getElementById('btn--chickpeas');
const cottage_btn = document.getElementById('btn--cottage');
const eggs_btn = document.getElementById('btn--eggs');
const grilled_chicken_btn = document.getElementById('btn--grilled-chicken');
const lean_beaf_btn = document.getElementById('btn--lean-beef');
const lentils_btn = document.getElementById('btn--lentils');
const milk_btn = document.getElementById('btn--milk');
const oatmeal_btn = document.getElementById('btn--oatmeal');
const peanut_butter_btn = document.getElementById('btn--peanut-butter');
const rice_btn = document.getElementById('btn--rice');
const salmon_btn = document.getElementById('btn--salmon');
const spinach_btn = document.getElementById('btn--spinach');
const sweet_potato_btn = document.getElementById('btn--sweet-potato');
const tofu_btn = document.getElementById('btn--tofu');
const yogurt_btn = document.getElementById('btn--yogurt');
const result_btn = document.getElementById('result');

const weights = [];
const values =[];

const poids =[10, 12, 8, 15, 16, 18, 25, 8, 13, 20];
const val =[12, 13, 14, 20, 21, 22, 23, 10, 11, 16];
const W = 100;

almond_btn.addEventListener('click',()=>{
    weights.push(160);
    values.push(8);
})
apples_btn.addEventListener('click',()=>{
    weights.push(95);
    values.push(6);
})
avocado_btn.addEventListener('click',()=>{
    weights.push(160);
    values.push(9);
})
banana_btn.addEventListener('click',()=>{
    weights.push(105);
    values.push(8);
})
blueberry_btn.addEventListener('click',()=>{
    weights.push(85);
    values.push(9);
})
bread_btn.addEventListener('click',()=>{
    weights.push(80);
    values.push(6);
})
broccoli_btn.addEventListener('click',()=>{
    weights.push(55);
    values.push(7);
})
cheese_chedder_btn.addEventListener('click',()=>{
    weights.push(113);
    values.push(8);
})
chickpeas_btn.addEventListener('click',()=>{
    weights.push(269);
    values.push(7);
})
cottage_btn.addEventListener('click',()=>{
    weights.push(120);
    values.push(8);
})
eggs_btn.addEventListener('click',()=>{
    weights.push(78);
    values.push(7);
})
grilled_chicken_btn.addEventListener('click',()=>{
    weights.push(165);
    values.push(9);
})
lean_beaf_btn.addEventListener('click',()=>{
    weights.push(250);
    values.push(6);
})
lentils_btn.addEventListener('click',()=>{
    weights.push(230);
    values.push(9);
})
milk_btn.addEventListener('click',()=>{
    weights.push(102);
    values.push(8);
})
oatmeal_btn.addEventListener('click',()=>{
    weights.push(140);
    values.push(7);
})
peanut_butter_btn.addEventListener('click',()=>{
    weights.push(190);
    values.push(7);
})
rice_btn.addEventListener('click',()=>{
    weights.push(216);
    values.push(6);
})
salmon_btn.addEventListener('click',()=>{
    weights.push(208);
    values.push(8);
})
spinach_btn.addEventListener('click',()=>{
    weights.push(23);
    values.push(7);
})
sweet_potato_btn.addEventListener('click',()=>{
    weights.push(86);
    values.push(8);
})
tofu_btn.addEventListener('click',()=>{
    weights.push(94);
    values.push(7);
})
yogurt_btn.addEventListener('click',()=>{
    weights.push(100);
    values.push(9);
})


function knapsack(weights, values, capacity) {
    console.log(weights);
console.log(values);
console.log(capacity);
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i-1] <= w) {
                dp[i][w] = Math.max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w]);
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    
    let selectedItems = [];
    let i = n, w = capacity;
    while (i > 0 && w > 0) {
        if (dp[i][w] !== dp[i-1][w]) {
            selectedItems.push(i-1);
            w -= weights[i-1];
        }
        i--;
    }
    
    return {
        maxValue: dp[n][capacity],
        selectedItems: selectedItems.reverse()
    };
}

function calculatebmr({weight,height,age}){
    if(person.sex == 'female'){
        const bmr =447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        return bmr;
    } else {
        const bmr =88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        return bmr;
    }
}

const storedPersonSring= localStorage.getItem('info');
const person = JSON.parse(storedPersonSring);
const bmr = calculatebmr(person);

function calculateCapacity(bmr,{activity}){
    let capacity = 0
    switch (activity){
        case 'Little to no exercise':
            capacity =  bmr * 1.2;
            break;
            case '1-3 days/week':
                capacity =  bmr * 1.375;
                break;
                case '3-5 days/week':
                    capacity =  bmr * 1.55;
                    break;
                    case '6-7 days a week':
                        capacity =  bmr * 1.725;
                        break;
                        case 'Physical job or training':
                            capacity =  bmr * 1.9;
                        }
                        return Math.round(capacity)
                    }
                    
                    const foods = [
                        { name: 'Chicken Breast', satisfaction: 8, calories: 165 },
                        { name: 'Salmon', satisfaction: 9, calories: 208 },
                        { name: 'Broccoli', satisfaction: 7, calories: 55 },
                        { name: 'Brown Rice', satisfaction: 6, calories: 216 },
    { name: 'Avocado', satisfaction: 9, calories: 160 },
    { name: 'Eggs', satisfaction: 7, calories: 78 },
    { name: 'Spinach', satisfaction: 8, calories: 23 },
    { name: 'Sweet Potato', satisfaction: 7, calories: 86 },
    { name: 'Greek Yogurt', satisfaction: 6, calories: 100 },
    { name: 'Almonds', satisfaction: 8, calories: 160 },
    { name: 'Oatmeal', satisfaction: 7, calories: 150 },
    { name: 'Apples', satisfaction: 6, calories: 95 },
    { name: 'Bananas', satisfaction: 8, calories: 105 },
    { name: 'Blueberries', satisfaction: 9, calories: 85 },
    { name: 'Cottage Cheese', satisfaction: 7, calories: 120 },
    { name: 'Lean Beef', satisfaction: 8, calories: 250 },
    { name: 'Peanut Butter', satisfaction: 9, calories: 190 },
    { name: 'Whole Grain Bread', satisfaction: 6, calories: 80 },
    { name: 'Tofu', satisfaction: 7, calories: 94 },
    { name: 'Lentils', satisfaction: 8, calories: 230 },
    { name: 'Chickpeas', satisfaction: 7, calories: 269 },
    { name: 'Milk (1% Fat)', satisfaction: 7, calories: 102 },
    { name: 'Cheese (Cheddar)', satisfaction: 8, calories: 113 },
];

// const weights = [1, 1, 8];
// const values = [2, 5, 2];

const capacity = calculateCapacity(bmr,person);

// const result = knapsack(weights, values, capacity);
console.log("Maximum value:", result.maxValue);
console.log("Selected items:", result.selectedItems);


var btn = document.getElementById('result');
var res = document.getElementById('max-value');
var list = document.getElementById('selected-elements');
btn.addEventListener('click',()=>{
    var result = knapsack(weights, values, capacity);
    console.log("Maximum value:", result.maxValue);
    console.log("Selected items:", result.selectedItems);
    res.innerText= result.maxValue;
    var data = [...result.selectedItems.sort()];
    var i = 0;
    while (i < data.length) {
        var elem = document.createElement('li');
        var text = document.createTextNode(data[i]);
        elem.appendChild(text);
        list.appendChild(elem);
        i++;
    }

    return result;
})


var btntest = document.getElementById('result-test');
var restest = document.getElementById('max-value-test');
var listtest = document.getElementById('selected-elements-test');
btntest.addEventListener('click',()=>{
    var resulttest = knapsack(poids, val, W);
    console.log("Maximum value:", resulttest.maxValue);
    console.log("Selected items:", resulttest.selectedItems);
    restest.innerText= resulttest.maxValue;
    var datatest = [...resulttest.selectedItems.sort()];
    var i = 0;
    while (i < datatest.length) {
        var elem = document.createElement('li');
        var text = document.createTextNode(datatest[i] + 1);
        elem.appendChild(text);
        listtest.appendChild(elem);
        i++;
    }

    return result;
})

