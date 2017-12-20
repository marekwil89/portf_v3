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