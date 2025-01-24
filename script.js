function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}
document.addEventListener('click', (event) => {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// For Carousel
const carousel = document.querySelector('.carousel');
let index = 0;

function updateCarousel() {
  const totalImages = document.querySelectorAll('.carousel img').length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
  const totalImages = document.querySelectorAll('.carousel img').length;
  index = (index + 1) % totalImages;
  updateCarousel();
}, 5000);

// For buttons
function changeVideo(videoUrl, button) {
  document.getElementById("campus-video").src = videoUrl;

  const buttons = document.querySelectorAll('.tab-buttons button');
  buttons.forEach(button => button.classList.remove('active'));

  button.classList.add('active');
}



function countUp(elementId, endValue) {
  let count = 0;
  let element = document.getElementById(elementId);
  let firstPart = element.querySelector('.first-part');
  let secondPart = element.querySelector('.second-part');
  
  let interval = setInterval(() => {
    count++;
    firstPart.innerText = Math.floor(count / 10); 
    secondPart.innerText = count % 10;        

    if (count >= endValue) clearInterval(interval);
  }, 50); 
}

window.onload = () => {
  countUp('total-students', 1250);
  countUp('total-teachers', 125); 
  countUp('total-staff', 25);  
};

// For important links
document.addEventListener("DOMContentLoaded", () => {

  const contentMap = {
    innovation: {
      text: `
        Entrepreneurship Cell is established at IKG PTU campus to strengthen the entrepreneurial activities and to instill the spirit of entrepreneurship among University students.
        Many Entrepreneurial Competitions like Business Plan Competition in collaboration with The Indus Entrepreneurs (TiE) Chandigarh, Poster Making Competition, Rs. 200 Ventures, and Talks by prominent Entrepreneurs are organized annually to promote innovation and out of box thinking in IKG PTU ecosystem... <br>
        The aim is to provide students with opportunities to participate in various business-related activities and competitions that help them in developing their entrepreneurial mindset and skillset. <br>
        This section of the university is pivotal in ensuring the growth of entrepreneurial talent in a vibrant and innovative environment.
      `,
      image: "assets\\innov-home.jpg",
    },
    youth: {
      text: `
        Department of Youth Affairs, being an important part of the University, working for the overall development of the students. With an objective to nurturing the young minds for their balanced growth and development. To channelize their energies in a positive way, Department of Youth Affairs organizes several activities to give a platform and develop the hidden talent... <br>
        The department encourages the young students to come forward and prove themselves by participating in various creative activities. Active participation of the students in these activities motivates the department to provide more opportunities for their growth.
      `,
      image: "assets\\Inter-Zonal-YouthFest-2019.jpg",
    },
    sports: {
      text: `
        The Sports Department in the University has been established to promote the spirit of Sports participation amongst the students. The Department annually organizes various activities under the guidance of the Sports Council of the University... <br>
        The University also participates in different Inter-Varsity games. The Sports Department of the University is visualizing programs to increase student participation in different sports activities by offering financial incentives to medal winners in Inter-Varsity sports tournaments.
      `,
      image: "assets\\sports-home.jpg",
    },
    nss: {
      text: `
        NSS Department of I.K. Gujral Punjab Technical University is working on various areas of overall development, including rural development, raising awareness on environment, cleanliness, health issues, drug de-addiction, road safety, and personality development... <br>
        The NSS activities are carried out under the guidance of the NSS advisory council of the university, chaired by the Hon'ble Vice-Chancellor. There are currently 74 units working in various affiliated colleges of IKGPTU.
      `,
      image: "assets\\nss-home.jpg",
    },
    alumni: {
      text: `
        Presently, more than 9 lakh alumni of IKG PTU are spread across the globe. Today, IKGPTU alumni community is more than a million strong and they have made an impact in every walk of life... <br>
        Armed with IKGPTU degrees, alumni have gone on to become entrepreneurs, performance artists, educators, scientists, politicians, and public servants. They have made a significant impact in communities and organizations they are part of.
      `,
      image: "assets\\alumni-meet-ikgptu-1.jpg",
    },
  };
  
  const tabs = document.querySelectorAll(".tab");
  const contentText = document.getElementById("dynamic-content-text");
  const contentImage = document.getElementById("dynamic-content-image");
  const readMoreBtn = document.getElementById("read-more-btn");
  
  let isFullDescription = false;
  
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
  
      const contentKey = tab.getAttribute("data-content");
      const content = contentMap[contentKey];
  
      const descriptionPart = content.text.split("<br>")[0];
      const readMoreHTML = `<span id="read-more-btn" class="read-more-btn">Read More</span>`;
      contentText.innerHTML = `${descriptionPart} ${readMoreHTML}`; 
  
      contentImage.src = content.image;
      contentImage.alt = contentKey;
  
      isFullDescription = false;
      readMoreBtn.style.display = "inline";
    });
  });
  
  document.addEventListener("click", (event) => {
    if (event.target && event.target.id === "read-more-btn") {
      const contentKey = document.querySelector(".tab.active").getAttribute("data-content");
      
      contentText.innerHTML = contentMap[contentKey].text;
  
      readMoreBtn.style.display = "none";
    }
  });
  
  tabs[0].click();
  });