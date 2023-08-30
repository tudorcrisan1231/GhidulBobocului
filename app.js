function camine(){
    const camine_content = document.querySelectorAll('.camine_content');
    const camine_btns_btn = document.querySelectorAll('.camine_btns_btn');
    


    for(let i = 0; i < camine_content.length; i++){
        camine_btns_btn[i].addEventListener('click', function(){

            for(let j = 0; j < camine_content.length; j++){
                camine_content[j].classList.add('camin_hidden');
                camine_btns_btn[j].classList.remove('camine_btns_btn_active');
            }

            camine_content[i].classList.toggle('camin_hidden');
            camine_btns_btn[i].classList.toggle('camine_btns_btn_active');
        })
    }
}
camine();



//SWIPER SLIDER

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    loop: true,
});

var swiper_camine = new Swiper(".mySwiper_camine", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    // loop: true,
});

var swiper = new Swiper(".mySwiper_bazaSportiva2", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
    loop: true,
    breakpoints: {
        600: {
        slidesPerView: 2,
        },
        1000: {
        slidesPerView: 3,
        },
    },
    on: {
        init: function() {
        this.el.addEventListener('mouseenter', function() {
            this.autoplay.stop();
        }.bind(this));
        
        this.el.addEventListener('mouseleave', function() {
            this.autoplay.start();
        }.bind(this));
        }
    }
});



//CALENDAR

const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();


// storing full name of all months in array
const months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",
];


const structura_an_universitar = [
    //SEMESTRUL 1
    {
        type: 'predare',
        name: "Predare",
        startDate: new Date('2023-09-25'),
        endDate: new Date('2023-12-22')
    },
    {
        type: 'vacanta',
        name: "Vacanta",
        startDate: new Date('2023-12-23'),
        endDate: new Date('2024-01-07')
    },
    {
        type: 'predare',
        name: "Predare",
        startDate: new Date('2024-01-08'),
        endDate: new Date('2024-01-14')
    },
    {
        type: 'sesiune_1_1', // sesiune 1 - programarea 1
        name: "Sesiune 1 - Programarea 1",
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-02-04')
    },
    {
        type: 'vacanta',
        name: "Vacanta",
        startDate: new Date('2024-02-05'),
        endDate: new Date('2024-02-11')
    },
    {
        type: 'sesiune_2_2', // sesiune 2 - programarea 2
        name: "Sesiune 2 - Programarea 2",
        startDate: new Date('2024-02-12'),
        endDate: new Date('2024-02-25')
    },

    //SEMESTRUL 2
    {
        type: 'predare', 
        name: "Predare",
        startDate: new Date('2024-02-19'),
        endDate: new Date('2024-04-26')
    },
    {
        type: 'vacanta',
        name: "Vacanta",
        startDate: new Date('2024-04-27'),
        endDate: new Date('2024-05-06')
    },
    {
        type: 'predare',
        name: "Predare",
        startDate: new Date('2024-05-07'),
        endDate: new Date('2024-06-02')
    },
    {
        type: 'sesiune_3_1', // sesiune 3 - programarea 1
        name: "Sesiune 3 - Programarea 1",
        startDate: new Date('2024-06-03'),
        endDate: new Date('2024-06-22')
    },
    {
        type: 'sesiune_4_2', // sesiune 3 - programarea 2
        name: "Sesiune 4 - Programarea 2",
        startDate: new Date('2024-06-24'),
        endDate: new Date('2024-07-07')
    },
];

function getTypeForDate(date) {
    for (let i = structura_an_universitar.length - 1; i >= 0; i--) {
        const range = structura_an_universitar[i];
        if (date >= range.startDate && date <= range.endDate) {
            return range.type;
        }
    }
    return 'vacanta';
}
console.log(getTypeForDate(new Date('2024-1-20')));
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 0).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {

        // creating li of all days of current month
        let isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
            ? "active"
            : "";

        console.log(getTypeForDate(new Date(`${currYear}-${currMonth+1}-${i}`)), `${currYear}-${currMonth+1}-${i}`);

        let day_color = '';
        if(getTypeForDate(new Date(`${currYear}-${currMonth+1}-${i}`)) == 'predare'){
            day_color = 'day_color_predare';
        }else if(getTypeForDate(new Date(`${currYear}-${currMonth+1}-${i}`)) == 'vacanta'){
            day_color = 'day_color_vacanta';
        }else if( getTypeForDate(new Date(`${currYear}-${currMonth+1}-${i}`)).includes("sesiune") ){
            day_color = 'day_color_sesiune';
        }

        liTag += `
                <li class="${isToday} ${day_color}">
                    <span class="day">${i}</span>
                    <div class="activity"></div>
                </li>
        `; // Adding activity details section ---- <div class="activity-bar"> <div class="activity-text"></div> </div>
        // console.log(i, currMonth, currYear);
    }


    for (let i = lastDayofMonth; i < 6; i++) {
        // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach((icon) => {
    // getting prev and next icons
    icon.addEventListener("click", () => {
        // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling
    });
});