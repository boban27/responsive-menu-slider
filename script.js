const mobileMenu = () =>{
    let menu = document.querySelector('.header ul ')
    let btn = document.querySelector('.header button');

if(btn.innerText === 'MENU'){
    menu.style.display ='block';
    btn.innerText='CLOSE';


}else{
    menu.style.display ='none';
    btn.innerText='MENU';


}


    
}

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let picture =document.querySelectorAll('.slider-images img');
let numImg = 0;
 
rightBtn.addEventListener('click',()=>{
    displaycNone();
    numImg++;
    if(numImg === picture.length){
        numImg =0;
    }
    picture[numImg].style.display='block';
});
 
leftBtn.addEventListener('click',()=>{
displaycNone();
numImg--;
if(numImg===-1){
    numImg=picture.length -1;
}
picture[numImg].style.display='block';



});
    

    
    const displaycNone = ( )=>{
        picture.forEach((img) =>{
            img.style.display='none';

        })  

        }




        const portfolioSort = (button) => {
         let categori = button.getAttribute('data-category');
         let singleItem = document.querySelectorAll('.portfolio-single-item ');

         singleItem.forEach((items) => {

            items.style.display='none';


         });

         if(categori === 'sve'){
            singleItem.forEach((items) => {

                items.style.display='block';

         });
         }
           singleItem.forEach((items) =>{
               if(items.getAttribute('data-category').includes(categori)){
                   items.style.display='block';

               }
           })

        }



            
            
    const openModal = ()=>{
        let openmodal = document.querySelector('.popup-modal');
        let overley =document.querySelector('.overlay');

        openmodal.style.display='block';
        overley.style.display ='block';

    }

    const closeModal = ()=>{
        let openmodal = document.querySelector('.popup-modal');
        let overley =document.querySelector('.overlay');

        openmodal.style.display='none';
        overley.style.display ='none';



    }