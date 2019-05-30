$(document).ready(function(){
  toggleAccordion();
});


function toggleAccordion(){
  $(".accordion-item-title").click(function(){
    if (!$(this).parent().hasClass('active')) {
      $(".accordion-item").removeClass("active");
      $(this).parent().toggleClass("active");
    }else{
      return false;
    }
  })
}
