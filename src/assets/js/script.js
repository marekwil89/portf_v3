var projectsData = [{
    id: 0,
    name: 'Pmi',
    tech: ['jQuery', 'AngularJs', 'MongoDb', 'NodeJs', 'Bootstrap', 'Sass'],
    descr: 'Wewnętrzny sklep internetowy dla pracowników firmy. Umożliwia dodawanie zakupionych przez pracowników produktów do historii zamówień. Pracownik w ciągu miesiąca posiada możliwość zakupu tylko 2 produktów z listy. Aplikacja posiada możliwość importu pliku .xlsx z listą pracowników.',
    category: 'Aplikacje',
    adres: "80.211.200.144:8001",
    miniImg: 'assets/img/project1-mini.jpg',
    projectImages: ['assets/img/project1-img1.jpg', 'assets/img/project1-img2.jpg', 'assets/img/project1-img3.jpg']
  },
  {
    id: 1,
    name: 'Konkretny Content',
    tech: ['jQuery'],
    descr: 'Prosta strona internetowa wykonana dla Copywritera.',
    category: 'Strony Internetowe',
    adres: "www.konkretnycontent.pl/",
    miniImg: 'assets/img/project2-mini.jpg',
    projectImages: ['assets/img/project2-img1.jpg', 'assets/img/project2-img2.jpg', 'assets/img/project2-img3.jpg']
  },
  {
    id: 2,
    name: 'Invaders game',
    tech: ['jQuery', 'AngularJs'],
    descr: 'Prosta gierka umożliwiająca zestrzelenie pojawiających się potworów. Posiada poziomy trudności oraz różne typy uzbrojenia do wybrania.',
    category: 'Strony Internetowe',
    adres: "rawgit.com/marekwil89/invaders-game/master/index.html",
    miniImg: 'assets/img/project3-mini.jpg',
    projectImages: ['assets/img/project3-img1.jpg', 'assets/img/project3-img2.jpg', 'assets/img/project3-img3.jpg']
  },
  {
    id: 3,
    name: 'DZIP',
    tech: ['jQuery', 'AngularJs', 'MongoDb', 'NodeJs', 'Bootstrap', 'Sass'],
    descr: 'Dziennik Zarządzeń i Poleceń wykonany dla firmy transportowej. Umożliwia dodawanie przez przełożonych poleceń dla podległych pracowników. Polecenia automatycznie archiwizują się po upływie czasu obowiązywania.',
    category: 'Aplikacje',
    adres: "80.211.200.144:8002",
    miniImg: 'assets/img/project4-mini.jpg',
    projectImages: ['assets/img/project4-img1.jpg', 'assets/img/project4-img2.jpg', 'assets/img/project4-img3.jpg']
  },{
    id: 4,
    name: 'Retro',
    tech: ['jQuery'],
    descr: 'Prosta strona wykonana na podstawie szablonu .psd',
    category: 'Strony Internetowe',
    adres: "rawgit.com/marekwil89/retro/master/index.html",
    miniImg: 'assets/img/project5-mini.jpg',
    projectImages: ['assets/img/project5-img1.jpg', 'assets/img/project5-img2.jpg', 'assets/img/project5-img3.jpg']
  }
]
$( document ).ready(function() {

  $(document).on('click', '.btn-filter', filterByCategory);
  
  function projectsInit() {
    projects = projectsData;
    projectsLoad('.portfolio-best-projects', projects)
  }
  
  function filterByCategory() {
    $('.btn-filter').removeClass('active');
    $(this).addClass('active');
    var category = $(this).attr('filterBy');
    if(!category){
      projectFiltered = projectsData;
      $('.btn-filter:first').addClass('active');
    }
    else if(category){
      projectFiltered = projectsData.filter(function(el){
        return el.category === category
      })        
    }
    projectsLoad('.realizations', projectFiltered)
  }

  function projectsLoad(section, filteredProjects){
    $(section).text('');
    for(i = 0; i < filteredProjects.length; i++){
      $(section).append('<a id="'+ filteredProjects[i].id +'" class="project active"><span class="project-detail"><div class="project-info"><h4 class="center main-color">' + filteredProjects[i].name + '</h4><p class="center">' + filteredProjects[i].category + '</p></div><button class="btn btn-main center project-btn-link">Powiększ</button></span><figure style="background: url('+ filteredProjects[i].miniImg +'); background-size: cover; background-position: center;"></figure></a>')
    }
  }
  
  projectsInit()
  filterByCategory()
});
$(document).ready(function () {

    $(window).scroll(function () {
        let wScroll = $(window).scrollTop()
        $('.mountain').css({ transform: "translate3d(0, " + wScroll / 1.3 + "px, 0)" })
        $('.rocks').css({ transform: "translate3d(0, " + wScroll / 1.7 + "px, 0)" })
        $('.landscape').css({ transform: "translate3d(0, " + (-wScroll / 7) + "px, 0)" })
        $('.forest').css({ transform: "translate3d(0, " + (-wScroll / 10) + "px, 0)" })
    });

    function viewAnimation(targetElement, animation) {
        $(targetElement).addClass(animation);
        setTimeout(function () {
            $(targetElement).removeClass(animation)
        }, 1500)
    }

    function moveMist(img, speed) {
        var i = 0
        setInterval(function () {
            i++
            $(img).css('background-position', i + 'px 0')
        }, speed)
    }

    function randNumber(max, min) {
        return Math.floor(Math.random() * max) - min;
    };

    function randomStrike() {
        var randLightningImage = randNumber(3, 0)
        var randPosition = randNumber(80, 30)
        var randDeg = randNumber(60, 30)
        var url = 'assets/img/light' + randLightningImage + '.png'
        $('.lightning').css('background-image', 'url(' + url + ')')
        $('.lightning').css({
            'left': randPosition + '%',
            'transform': 'rotate(' + randDeg + 'deg)'
        });
    }

    function anchorScroll(){
        $('a[href*="#"]:not([href="#"])').click(function(e){
            console.log('wefwe');
            if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){

                var target = $(this.hash);
                if(e.currentTarget.className != 'arrow-bottom'){
            }
        
            target = target.length ? target:$('[name='+this.hash.slice(1)+']');
            if(target.length){$('html, body').animate({
                    scrollTop:target.offset().top
                },2500);
            
                return false;
            }}
        });
    }

    moveMist('.mist.front', 100);
    moveMist('.mist.back', 30);

    anchorScroll();

    setInterval(function () {
        viewAnimation('.lightning', 'strike');
        viewAnimation('.thunder', 'flash');
        randomStrike();
    }, 3000)
});

$( document ).ready(function() {

  $(document).on('click', '.project', openModal); 
    
  $(document).on('click', '.modal-close', closeModal);
  
  function closeModal(){
    $('body').css('overflow', 'visible');
    $(".modal").removeClass("opened");
    $(".slider-section").removeClass("opened");
  }

  function openModal(){
    $('body').css('overflow','hidden');
    var id = parseInt($(this).attr('id'));
    $(".slider-section").removeClass("opened");
    $(".modal").addClass("opened");
    $(".project-images").text('');
    $(".project-title").text(projectsData[id].name);
    $(".project-descr").text(projectsData[id].descr);
    // $(".project-date").text(projectsData[id].date)
    $(".project-category").text(projectsData[id].category);
    $(".project-adres").text(projectsData[id].name);
    $(".project-tech").text(projectsData[id].tech);
    // $(".project-client").text(projectsData[id].client)
    $(".project-adres").prop("href", "http://" + projectsData[id].adres);
    for(i = 0; i < projectsData[id].projectImages.length; i++){
      $(".project-images").append("<figure class='project-img "+ id +"'><img src="+ projectsData[id].projectImages[i] +"><span class='line'></span></figure>")
    }
  }

});
$( document ).ready(function() {

  $(document).on('click', '.project-img', openSlider); 

  $(document).on('click', '.slider-close', closeSlider); 

  function closeSlider(){
    $(".modal").addClass("opened")
    $(".slider-section").removeClass("opened")    
  }  

  var currentSlide = ''

  function openSlider(event){
    $(".modal").removeClass("opened")
    $(".slider-section").addClass("opened")
    var projectId = event.currentTarget.classList[1]
    var projectImgId = $(this).index()
    $('.slider-box').text('');
    for(i = 0; i < projectsData[projectId].projectImages.length; i++){
      $('.slider-box').append('<figure class="slide"><img src="'+ projectsData[projectId].projectImages[i] +'" alt="project photo" /></figure>')
    }
    $('figure.slide').eq(projectImgId).addClass('active')
    currentSlide = $('figure.slide').eq(projectImgId)
  }

  $(document).on('click', '.arrow.right', nextSlide);

  $(document).on('click', '.arrow.left', prevSlide); 

  function nextSlide(){
    console.log()
    var next = currentSlide.next()

    $('figure.slide').removeClass('active')
    console.log(next.index('.slide'))
    if(next.length){
      currentSlide = next.addClass('active')
    }
    else{
      currentSlide = $('figure.slide').first().addClass('active')
    }    
  }

  function prevSlide(){
    var prev = currentSlide.prev()
    console.log(prev)
    $('figure.slide').removeClass('active')
    console.log(prev.index('.slide'))
    if(prev.index('.slide') >= 0){
      currentSlide = prev.addClass('active')
    }
    else{
      currentSlide = $('figure.slide').last().addClass('active')
    }    
  }


});