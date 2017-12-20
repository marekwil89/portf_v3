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