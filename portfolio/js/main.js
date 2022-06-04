.zoomIn {
    /* animation for feature card */
    transition: transform .2s;
    /* max-width: 25%; */
    width: 350px;
}

.zoomIn: hover {
    transform: scale(1.1);
    box - shadow: 0px 1px 4px 2px #b63232;
    cursor: pointer;
}







// filter method using traditional syntax
let nums = [1, -3, 4, 6];

const filtered = nums.filter(function (value) {
    return value >= 0;
})

// filter method using ES6 arrow function syntax




const filtered = nums.filter(value => value >= 0);

