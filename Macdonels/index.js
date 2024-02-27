
function getSelectedItems(){
    let List=document.querySelectorAll('.food:checked');
    let array=Array.from(List);
    let newArray=array.map(function(item){
        return item.value;
    })
    return newArray;
}
function getOrderId(){
    return Math.floor(Math.random() * 10000);
}
async function orderFood(Items){
    document.querySelector("#order_food_container").innerHTML=" ";
    let orderDiv=document.createElement('div');
    orderDiv.className="orderBox";
    let orderId=document.createElement('h2');
    let id=getOrderId();
    console.log(id);
    orderId.innerText=`Order Id:${id}`;
    orderDiv.append(orderId);
    Items.forEach(async element => {
        let orderItem=document.createElement('div');
        orderItem.className="orderItem";
        let image=document.createElement('img');
        let imageUrl=getImageUrl(element);
        image.src=imageUrl;
        let itemName=document.createElement('p');
        itemName.innerText=element;
        orderItem.append(image,itemName);
        orderDiv.append(orderItem);
    });
    await dealy(randomSecond());
    document.querySelector("#order_food_container").append(orderDiv);
}

function randomSecond(){
    return Math.floor(Math.random()*5000)+1500;
}


function dealy(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


let orderbtn=document.getElementById("order-food")
orderbtn.addEventListener('click', async () => {
    let selectedItems = getSelectedItems();
    await orderFood(selectedItems);
});
function getImageUrl(item){
    let obj={
        Burger:"https://s7d1.scene7.com/is/image/mcdonalds/DBlBM_832x472:product-header-desktop?wid=830&hei=455&dpr=off",
        Chicken:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8AHje0ccRSkBtUMqrOifES7_dH2pQZgwkg&usqp=CAU",
        Sandwiches:"https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_4295-005_BaconQPC_832x472:nutrition-calculator-tile",
        McNuggets:"https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0483_4McNuggets_Stacked_832x472:nutrition-calculator-tile",
        Fires:"https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6050_SmallFrenchFries_Standing_832x472:nutrition-calculator-tile",
        Treats:"https://s7d1.scene7.com/is/image/mcdonalds/MediumShamrockShake_Glass_A1_832472:nutrition-calculator-tile",
        Beverages:"https://s7d1.scene7.com/is/image/mcdonalds/DC_202112_0521_MediumCoke_Glass_832x472:nutrition-calculator-tile",
        BigMac:"https://s7d1.scene7.com/is/image/mcdonalds/DC_202103_7002_4McNuggetsHappyMeal_AppleSlices_WhiteMilkJug_Left_832x472:nutrition-calculator-tile",
        McCrispy:"https://s7d1.scene7.com/is/image/mcdonalds/DC_Ingredient_Condiment_202203_00409-120__0901_SweetNSour_832x472:nutrition-calculator-tile",
        Sausage:"https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0334_SausageBurrito_Alt_832x472:nutrition-calculator-tile"
    }
    if(obj.hasOwnProperty(item)){
        return obj[item];
    }
}