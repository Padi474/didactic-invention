let sliderBackground = document.getElementById("backg");
let circle = document.querySelectorAll("#circle");
let headerTitle = document.querySelector("#header-title");
let menu = document.getElementById("menu");
let headerContent= document.querySelector('.header-content')
let images = ["back1.JPG", "back2.jpeg", "back3.jpg", "back4.webp"];
let titles = [
  "کلید کسب و کار",
  "موفقیت روز افزون",
  "پیشرفت و خلاقیت",
  "آینده روشن",
];

function toggleMenu() {
  // headerContent.classList.toggle('hidden');
  menu.classList.toggle("transform");
  menu.classList.toggle("translate-x-72")
  if (headerContent.style.display == "block") {
    headerContent.style.display = "none";
  } else {
    headerContent.style.display = "block";
  }
}

// the slider header part ///
let index = 0;
headerTitle.innerHTML = titles[index];
circle[0].style.background = "#0a5cc3";
function nextImg() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  sliderBackground.style.backgroundImage = `url(images/${images[index]})`;
  headerTitle.innerHTML = titles[index];

  circle.forEach((item) => {
    if (item == circle[index]) {
      item.style.background = "#0a5cc3";
    } else {
      item.style.background = "white";
    }
  });
}
setInterval(nextImg, 3000);

////////////////////// the swiper library ///////////////////////////

         var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {  
          350: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 40,},
          640: {
            slidesPerView: 2,
            spaceBetween: 50, },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


///////////// inner slider part ////////////////

let sliderDiv= document.querySelector('.swiper-wrapper')

let data= [
  {
    id:'1',
    image:'./images/services-1.webp',
    title:'خدمات مشتری',
    content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
  },
  {
    id:'2',
    image:'./images/services-3.webp',
    title:'پشتیبانی یکساله',
    content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
  },
  {
    id:'3',
    image:'./images/gallary-2.webp',
    title:'رضایت مشتری',
    content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
  },
  {
    id:'4',
    image:'./images/gallary-1.webp',
    title:'هاست پرسرعت',
    content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
  },
  {
    id:'5',
    image:'./images/gallary-3.webp',
    title:'مشتری مداری',
    content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
  },
  {
    id:'6',
    title:'انواع وبسایت',
    image:'./images/gallary-4.webp',
    content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
  },
]

localStorage.setItem('slider', JSON.stringify(data))
let sliderData= JSON.parse(localStorage.getItem("slider"))
console.log(sliderData);
sliderData.forEach(item => {
  sliderDiv.insertAdjacentHTML('beforeend',`
  <div class="swiper-slide">
  <div class=' w-[100%] h-[70%]' onclick=getblog(${item.id})>
    <img src=${item.image} alt="customer" class="h-52 w-full transition-colors duration-500 hover:border-sky-600 hover:border-4">
    <div class="relative bg-white p-4 mx-auto bottom-4 w-[90%]">
      <h2 class="mb-2 hover:text-red-600 cursor-pointer max-md:text-sm"><a href="#">${item.title}</a></h2> 
      </div>
    </div>
</div>
  `)

  
})


function getblog(id){
  console.log(id);
  window.open(`./services.html?id=${id}`, '_self');

}
function getAbout(){
  window.open(`./services.html?about`, '_self');

}
function getContact(){
  window.open(`./services.html?contact`, '_self');
}
function goUp(){
  document.documentElement.scrollTop=0
}

let goupbtn= document.querySelector('.goUp')
document.addEventListener('scroll',() => {
  if (document.documentElement.scrollTop>1000){
    goupbtn.classList.add('animate-fade')
    goupbtn.classList.add('fixed')


  }
  else {
    goupbtn.classList.remove('fixed')
    goupbtn.classList.remove('animate-fade')
  }

})