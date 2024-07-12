let total = 0;

let cartListArr = [
    `<li><i class="ri-close-large-line fs-2" style="cursor: pointer;" onclick="hideCart()"></i></li>`,
    `<p class="fs-3 total">Total: &#8369 ${(total.toFixed(2))}</p>
    <button class="btn btn-danger confirm-btn" onclick="location.href='ff-login.html'">Confirm Order</button>`
];

let totalElem = document.querySelector(".total");

function food1Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/spaghetti.jpg" style="width: 80px; height: auto;">
                <div>Meaty Spaghetti</div>
                <button class="btn btn-outline-danger" onclick="remove1(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }

    insertElement();

    total += 150;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food2Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/chickennuggets.jpg" style="width: 80px; height: auto;">
                <div>Chicken Nuggets</div>
                <button class="btn btn-outline-danger" onclick="remove2(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 280;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food3Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/friedchicken.jpg" style="width: 80px; height: auto;">
                <div>Fried Chicken</div>
                <button class="btn btn-outline-danger" onclick="remove3(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 240;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food4Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/roastedchicken.jpg" style="width: 80px; height: auto;">
                <div>Roasted Chicken</div>
                <button class="btn btn-outline-danger" onclick="remove4(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 300;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food5Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/frenchfries.jpg" style="width: 80px; height: auto;">
                <div>French Fries</div>
                <button class="btn btn-outline-danger" onclick="remove5(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 85;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food6Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/burger.jpg" style="width: 80px; height: auto;">
                <div>Burger</div>
                <button class="btn btn-outline-danger" onclick="remove6(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 90;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food7Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/premiumchocolatechipdrink.jpg" style="width: 80px; height: auto;">
                <div>Premium Chocolate Chip Drink</div>
                <button class="btn btn-outline-danger" onclick="remove7(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 130;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food8Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/lemonade.jpg" style="width: 80px; height: auto;">
                <div>Fresh Lemonade</div>
                <button class="btn btn-outline-danger" onclick="remove8(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 60;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food9Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/milktea.jpg" style="width: 80px; height: auto;">
                <div>Milktea</div>
                <button class="btn btn-outline-danger" onclick="remove9(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 100;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food10Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/mangoshake.jpg" style="width: 80px; height: auto;">
                <div>Mango Shake</div>
                <button class="btn btn-outline-danger" onclick="remove10(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 90;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food11Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/icecoffee.jpg" style="width: 80px; height: auto;">
                <div>Premium Ice Coffee</div>
                <button class="btn btn-outline-danger" onclick="remove11(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 110;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food12Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/icecream.jpg" style="width: 80px; height: auto;">
                <div>Ice cream</div>
                <button class="btn btn-outline-danger" onclick="remove12(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 60;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food13Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/caramelcake.jpg" style="width: 80px; height: auto;">
                <div>Caramel Cake</div>
                <button class="btn btn-outline-danger" onclick="remove13(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 80;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food14Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/brownies.jpg" style="width: 80px; height: auto;">
                <div>Chocolate Brownies</div>
                <button class="btn btn-outline-danger" onclick="remove14(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 75;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food15Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/cookies.jpg" style="width: 80px; height: auto;">
                <div>Chocolatey Cookies</div>
                <button class="btn btn-outline-danger" onclick="remove15(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 70;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}