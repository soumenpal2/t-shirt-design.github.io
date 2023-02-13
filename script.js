

let inputfield=document.getElementById("input-field");

inputfield.addEventListener("change",()=>{
let value = inputfield.value;

inputfield.remove();

generateToastMessage(`Hi, ${value.toUpperCase()} 

 "CLICK ME"

 to see the items`);

});
 

function generateToastMessage(msg) {
	div = document.createElement('div');
	div.innerText = msg;
    
	div.className = 'toast-message toast-message-slide-in';
    document.body.appendChild(div);
    div.addEventListener('click', function () {
        div.remove();
       
    });
};
// image change 

const menuitems=[
    {
        id:1,
        item:"Shirt item1",
        oneliner:"ONE: Lorem, ipsum dolor sit amet consectetur adipisicing elit adipisicing elit. Dolorem, tempora.",
        img:"taylor-bdYJWXg4pK4-unsplash.jpg",
        shirt:"shirt style1",
        desc:"Lorem ipsum dolor sit amet consectetursit amet consectetur adipisicing elit Quos."
    },
{
    id:2,
    item:"Shirt item2",
    oneliner:"TWO: Lorem, ipsum dolor sit amet consectetur adipisicing elitsit amet consectetur adipisicing.",
    img:"ali-muhamad-UkijHku-7kM-unsplash.jpg",
   shirt:"shirt style2",
    desc:"Lorem ipsum dolor sit amet consectetur sit amet consecteturadipisicing elit Quos."

},
{
    id:3,
    item:"Shirt item3",
    oneliner:"THREE: Lorem, ipsum dolor sit amet consectetur adipisicing elitsit amet consectetur adipisicing.",
    img:"clarisse-meyer-5xbdx3TqPnw-unsplash.jpg",
    shirt:"shirt style3",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicingsit amet consectetur elit Quos."



},

{
    id:4,
    item:"Shirt item4",
    oneliner:"FOUR: Lorem, ipsum dolor sit amet consectetur adipisicing elitsit amet consectetur adipisicing.",
    img:"jacinto-diego-Groi0xH25-o-unsplash.jpg",
    shirt:"shirt style4",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicingsit amet consectetur elit Quos."

},

{
    id:5,
    item:"Shirt item5",
    oneliner:"FIVE: Lorem, ipsum dolor sit amet consectetur adipisicing elitsit amet consectetur adipisicing.",
    img:"jacinto-diego-XGtMs_0YqAY-unsplash.jpg",
    shirt:"shirt style5",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing sit amet consecteturelit Quos."

}

];

 const item= document.getElementById("item");
 const oneliner= document.getElementById("oneliner");
 const img= document.getElementById("img");
 const shirt= document.getElementById("shirt");
 const desc= document.getElementById("desc");
 const prev= document.getElementById("prev");
 const random= document.getElementById("random");
 const next= document.getElementById("next");
 
 
 
 
 let currentmenu=0;
 window.addEventListener('DOMContentLoaded',function(){

  allmenu(currentmenu);
 });

 const allmenu=()=>{
    let menu=menuitems[currentmenu];
    item.textContent=menu.item;
    oneliner.textContent=menu.oneliner;
    img.src=menu.img;
    shirt.textContent=menu.shirt;
    desc.textContent=menu.desc;  
 };


random.addEventListener('click',()=>{

currentmenu=Math.floor(Math.random()*menuitems.length);
allmenu(currentmenu);
});
prev.addEventListener('click',()=>{
currentmenu--;
if(currentmenu<0){
    currentmenu=menuitems.length-1;
}
allmenu(currentmenu);
});
next.addEventListener('click',()=>{
    currentmenu++;
    if(currentmenu>menuitems.length-1){
        currentmenu=0;
    }
    allmenu(currentmenu);
    });

    

// tttt 

	const root = document.getElementById('root');
	const btn = document.getElementById('change-btn');

	btn.addEventListener('click', function () {
		const bgColor = generateColor();
		root.style.backgroundColor = bgColor;
	});


//   color 
function generateColor() {
	
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `rgb(${red}, ${green}, ${blue})`;
}

function abc(element)
{
    return  element === '0';
}
function myfunction(value){
    let sum = 0;
    var val = value.split(' ');
    let len = val.length;
        if(val.find(abc))
        {
            document.getElementById('area').disabled = true;
            for(var i = 0;i < len; ++i)
            {
                sum += parseInt(val[i]);
            }
            alert(`Sum is: ${sum}`);
        }   
}