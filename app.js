const reviews = [
{

name:"Szent Endre",
job: "Javascript Fejlesztő",
img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloribus magnam aspernatur impedit deserunt perspiciatis odit, officiis dolorem repellendus id cupiditate vero ipsum. Tempore error in fuga. Facilis iste nobis debitis aut tempora excepturi quod, quisquam soluta voluptas, facere delectus officiis dicta illo molestias repudiandae aliquid doloremque veritatis quis unde ipsam? Consequatur voluptatibus impedit perferendis, quo libero fugiat blanditiis ab facere ad quam dignissimos dolores vitae repellat, fugit repellendus ea architecto obcaecati nesciunt? Quis, ipsum."


},
{

    name:"Török Bálint",
    job: "Java Fejlesztő",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloribus magnam aspernatur impedit deserunt perspiciatis odit, officiis dolorem repellendus id cupiditate vero ipsum. Tempore error in fuga. Facilis iste nobis debitis aut tempora excepturi quod, quisquam soluta voluptas, facere delectus officiis dicta illo molestias repudiandae aliquid doloremque veritatis quis unde ipsam? Consequatur voluptatibus impedit perferendis, quo libero fugiat blanditiis ab facere ad quam dignissimos dolores vitae repellat, fugit repellendus ea architecto obcaecati nesciunt? Quis, ipsum."
    
    
    },
    {

        name:"Feri Péter",
        job: "Vasutas",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloribus magnam aspernatur impedit deserunt perspiciatis odit, officiis dolorem repellendus id cupiditate vero ipsum. Tempore error in fuga. Facilis iste nobis debitis aut tempora excepturi quod, quisquam soluta voluptas, facere delectus officiis dicta illo molestias repudiandae aliquid doloremque veritatis quis unde ipsam? Consequatur voluptatibus impedit perferendis, quo libero fugiat blanditiis ab facere ad quam dignissimos dolores vitae repellat, fugit repellendus ea architecto obcaecati nesciunt? Quis, ipsum."
        
        
        }



];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");
const next = document.querySelector(".prev-btn");
const prev = document.querySelector(".next-btn");


let current = 0;

window.addEventListener("load", () => {

const item = reviews[current];
img.src = item.img;
author.textContent = item.name;
job.textContent = item.job;
text.textContent = item.text;


})


function showPerson(person){

const item = reviews[person];
img.src = item.img;
author.textContent = item.name;
job.textContent = item.job;
text.textContent = item.text;
}



next.addEventListener("click", ()=>{

current++

if(current > reviews.lenght-1){
    current = 0;
}


showPerson(current)

})


prev.addEventListener("click", ()=>{

    current--
    
    if(current < 0 ){
        current = reviews.lenght-1;
    }
    
    
    showPerson(current)
    
    })