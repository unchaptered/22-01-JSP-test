// 장바구니, 바로구매, 찜하기
const SHOP_BAG=document.querySelector(".old_book_btn_1");
const BUY=document.querySelector(".old_book_btn_2");
const LIKE=document.querySelector(".old_book_btn_3");

const MINUS_BTN=document.querySelector(".count_minus");
const PLUS_BTN=document.querySelector(".count_plus");
const COUNT=document.querySelector(".count");

MINUS_BTN.addEventListener("click",()=>{
    if (COUNT.innerText > 0) {
        // 양수
        COUNT.innerText--;
    }
});
PLUS_BTN.addEventListener("click",()=>{
    const LARGEST=100;
    if (COUNT.innerText <= LARGEST) {
        // 최댓값
        COUNT.innerText++;
    }
});