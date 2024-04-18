
let menu = document.getElementById("menu");
let url= window.location.search
let pageTitle= document.querySelector(`#pageTitle`)
let mainSection= document.querySelector('#main-section')
let data= JSON.parse(localStorage.getItem('slider'))
let navbar= document.querySelector('#menu-bar')
let crossSign= document.querySelector('.cross')

// function toggleMenu() {
//     menu.classList.toggle("hidden");
//   }
  function toggleMenu() {
    menu.classList.toggle("transform");
  menu.classList.toggle("translate-x-72")

}

  function getAbout(){
    window.open(`./services.html?about`, '_self');
  
  }
  function getContact(){
    window.open(`./services.html?contact`, '_self');
  }

  document.addEventListener('scroll',(event)=>{
    console.log(event);
    if(document.documentElement.scrollTop>30){
      navbar.classList.add('menue')
      crossSign.classList.remove('top-12')
      crossSign.classList.add('top-4')
      menu.classList.remove('max-md:top-12')
      menu.classList.add('max-md:top-4')
    } else {
      navbar.classList.remove('menue')
      crossSign.classList.remove('top-4')
      crossSign.classList.add('top-12')
      menu.classList.remove('max-md:top-4')
      menu.classList.add('max-md:top-12')

    }
  })
  
  if(url == "?about"){
    console.log('about')
    pageTitle.innerHTML = 'درباره ما'
    mainSection.innerHTML = `
    <div class="m-6 max-md:m-0 my-8 shadow-xl p-4">
      <span class="inline-block pr-10">
        <h2 class="title text-3xl">
          شرکت طراح گستر
        </h2>
      </span>
      <div class="p-4 flex items-center justify-center gap-6 max-md:flex-col">
        <p class="content w-2/3 max-md:w-full">
        شرکت طراح گستر، یک شرکت  با ارائه‌ی خدمات در حیطه‌های وب و اپلیکیشن است که برای اولین بار در سال 1390 شروع به کار کرد. این شرکت در طول فعالیت بیش از یک دهه‌‌ای خود توانسته که از فراز و نشیب‌های فراوانی عبور نماید. در ابتدای آغاز دهه‌ی 90، شرکت وستا سیستم، فعالیت خود را بر راه‌اندازی انواع استارت‌آپ‌ها متمرکز کرده بود. تقریبا در همان دوران بود که شرکت وستا سیستم توانست خود را در زمره‌ی اولین استارت‌آپ‌هایی قرار دهد که در زمینه‌ی خرید گروهی فعالیت می‌کنند. شرکت وستا سیستم با گذشت زمان، توانست اعتماد بسیاری از نهادهای رسمی و معتبر موجود در کشور را کسب نماید. با پیشرفت خدمات شرکت، دانشکده‌ی فنی مهندسی دانشگاه باهنر شیراز به عنوان یک پشتوانه‌ی قوی و معتبر برای شرکت وستا سیستم به توسعه‌ی خدمات این شرکت در حیطه‌ی طراحی و تولید انواع نرم‌افزارهای تحت وب و موبایل، معرفی شد. این شرکت در سال 1397 توانست که عنوان شرکت دانش بنیان را با به دست آوردن مجوز رسمی از معاونت علمی پژوهشی ریاست جمهوری، کسب نماید. امروزه شرکت طراح گستر با توسعه‌ی تیم خود توانسته که پروژه‌های مهمی را اجرا کرده و یا در دست اجرا داشته باشد. با توجه به آن که طراح گستر اهداف بزرگی را برای آینده‌ی خود در نظر گرفته‌است، هر روزه در حال بهبود کیفیت خدمات خود و تیمش است. برای آن که بتوانید از خدمات و امکانات شرکت طراح گستر مطلع شوید می‌توانید هم‌اکنون با ما تماس بگیرید.
        </p>
        <div class="flex flex-col gap-2">
        <img src="./images/gallary-0.webp" alt="" class="w-72 h-auto">
        <img src="./images/gallary-1.webp" alt="" class="w-72 h-auto">
        <img src="./images/gallary-2.webp" alt="" class="w-72 h-auto">
        </div>
      </div>
    </div>
    
    `


  } else if (url.includes("id")){
    let newurl= new URLSearchParams(location.search)
    let postId=newurl.get('id')
    console.log(postId);
    data.forEach(function(item){
      if(item.id==postId){
        mainSection.innerHTML=''
        showpost(item)
        showButtons()

      }
    })
  } else if (url=='?contact'){
    pageTitle.innerHTML = 'تماس با ما'
    mainSection.insertAdjacentHTML('beforeend',`
    <div class="m-6 my-8 shadow-xl p-4 pb-10 mx-auto w-full flex justify-around max-md:flex-col">
    <div class="p-4 my-4">
    <div class="address flex flex-col gap-1 w-fit">
    <span class="text-xl pb-3">آدرس: </span>
    <p>
      شیراز- خیابان شهید رجایی - کوچه 25م - پلاک 9
    </p>
    <span class="mt-3 text-lg">تلفن:</span>
    <p>
      0713-6345566<br />
      0713-6345567<br />
      09172000951
    </p>
    <p>info@gmail.com</p>
  </div>
    </div>
    <div class="flex justify-center items-center flex-col w-fit my-4">
        <div class="text-right w-full">
            <h2>لطفا فرم زیر را تکمیل نمایید</h2>
        </div>
        <div class="flex flex-col gap-2 m-4">
        <span class="flex gap-2 max-md:flex-col">
            <input type="text" id="name" placeholder="اسم و فامیل" class="p-4 rounded-md border-2 border-slate-400">
            <input type="text" id="email" placeholder="example@gmail.com" class="p-4 rounded-md border-2 border-slate-400"> 
        </span>
        <span>
            <textarea id="content" cols="30" rows="8" placeholder="متن پیام" class="p-4 w-full border-2 border-slate-400 rounded-md"></textarea>  
        </span>
        </div>
        <button class="w-[95%] py-2 bg-sky-700 rounded-xl text-white hover:bg-sky-800">ارسال</button>

    </div>
    </div>
    
    `)
  
  
  } else {
    data.forEach(element=> {
     showpost(element)
    });
  }

  function showpost(element){
    mainSection.insertAdjacentHTML('beforeend',`
    <div class="m-6 max-md:m-0 my-8 shadow-xl p-4">
      <span class="inline-block p-4">
        <h2 class="title text-3xl">
          ${element.title}
        </h2>
      </span>
      <div class="p-4 flex items-center justify-center gap-6 max-md:flex-col">
        <p class="content">
        ${element.content}
        </p>
        <img src="${element.image}" alt="" class="w-72 h-auto">
      </div>
    </div>
    `)
  }

  function showButtons(){
    return mainSection.innerHTML+=
    `<div class="flex justify-around">
    <span class="bg-sky-700 py-4 px-6 rounded-md text-white inline min-w-24 cursor-pointer text-center hover:bg-sky-800" onclick="history.go(-1)" >
    بازگشت
   </span> 
   <span class="bg-sky-700 py-4 px-6 rounded-md text-white inline min-w-24 cursor-pointer text-center hover:bg-sky-800" onclick="window.location.href='./services.html'" >
    تمام خدمات
   </span> 
   </div>`
  }
  