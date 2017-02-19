//events
$("li a").on("click", function(){
   actualLinkTab = getActualLinkTab($(this));
});

$("li").on("click", function(){
  var actualtab = $(this);
  activeActualTab(actualtab);
});


//Logic//
var actualLinkTab;

getActualLinkTab = htmlElement => $(htmlElement).attr('href');
hasActiveClass = htmlElement => $(htmlElement).hasClass('active');
removeActiveClass = htmlElement => $(htmlElement).removeClass('active');
addActiveClass = htmlElement => $(htmlElement).addClass('active');

activeActualTab = actualtab => {
  if(!hasActiveClass(actualtab)){
    removeActiveClass($('li'));
    removeActiveClass($('div'));
    addActiveClass(actualLinkTab);
    addActiveClass(actualtab);

  }
}