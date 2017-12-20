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