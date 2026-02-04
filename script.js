const slides = [
  {
    image: "images/1.jpg",
    title: "الصورة الأولى",
    text: "هذه الصورة تعني الهدوء والسلام وتُظهر جمال الطبيعة."
  },
  {
    image: "images/2.jpg",
    title: "الصورة الثانية",
    text: "هذه الصورة تعني القوة والإصرار وتلهمنا بالنجاح."
  },
  {
    image: "images/3.jpg",
    title: "الصورة الثالثة",
    text: "هذه الصورة تعني الأمل والانطلاق نحو مستقبل أفضل."
  }
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const sliderTitle = document.getElementById("sliderTitle");
const sliderText  = document.getElementById("sliderText");

function showSlide(index){
  sliderImage.src = slides[index].image;
  sliderTitle.textContent = slides[index].title;
  sliderText.textContent = slides[index].text;
}

function nextSlide(){
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide(){
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

// تشغيل أول صورة
showSlide(currentIndex);

// تغيير تلقائي كل 5 ثواني
setInterval(nextSlide, 5000);
