let img = document.querySelector("main img.active");
// let imgs = ["1.jpg","2.jpg","3.jpg"];
let imgs = Array.from(document.querySelectorAll("main img"));
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imglen = imgs.length;
let currslide = 1;
let slidenum = document.getElementById('slide-num');
prev.onclick = prevslide;
next.onclick = nextslide;

let pagination = document.createElement("ul");
pagination.setAttribute('id','pagination');

// nekteb li 3la hasb slide

for(let i = 1; i <= imglen;i++){
    let li = document.createElement("li");
    li.setAttribute('ind', i);
    li.appendChild(document.createTextNode(i));
    pagination.appendChild(li);    
}
// add ul to body
document.getElementById('indice').appendChild(pagination);
let ul = document.getElementById('pagination');
let AllUl = Array.from(document.querySelectorAll("#pagination li")); 
Active();
function nextslide (){
    if(currslide < imglen){
      currslide++;
      Active();  
    }else {return;}
}
function prevslide (){
    // if(currslide > 1){
    //     currslide--;
    //     Active();  
    //   }else {return;}
    if (prev.classList.contains('disabled')){
        return;
    }else {
        currslide--;
        Active();
    }
}
function Active(){
    slidenum.textContent = 'slide #' + (currslide) + ' of ' + (imglen);
     RemoveActive(imgs);
    imgs[currslide - 1].classList.add("active");
    //  let AllUl = document.querySelectorAll(".pagination li");
    RemoveActive(AllUl);
    ul.children[currslide - 1].classList.add("active");
    currslide == 1? prev.classList.add ('disabled'):prev.classList.remove ('disabled');
    currslide == imglen?next.classList.add ('disabled'):next.classList.remove ('disabled');
}
function RemoveActive(el){
    el.forEach(e => {
        e.classList.remove("active");
    });
}
AllUl.forEach ((item,i) =>{
    item.onclick = function(){
        currslide = i+1;
        Active();
    };
});

