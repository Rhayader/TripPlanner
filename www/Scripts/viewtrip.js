$(document).ready(function(){
  $.ajax({
      type: 'GET',
      url: 'Data/sample_data.xml',
      dataType: 'xml',
      success: xmlParser
    });
});

function xmlParser(xml){
  $('#TimelineLoader').fadeOut();
  $(xml).find('db_event').each(function(){
    var icon;
    if($(this).find('title').text()=='Flight'){
      icon='<i class="fa fa-plane" aria-hidden="true" style="font-size: 2rem; color: #F44336;"></i>'+'<strong>&nbsp;Flight from Paris to Florence</strong>';
    } else{
      icon=$(this).find('title').text();
    };
    $('#TimelineContainer').append(
      '<li class="event" data-date="' +
      $(this).find('date').text() +
      '"><h3>' +
      icon +
      '</h3><p>' +
      $(this).find('content').text() +
      '</p></li>'
    );
  });
};
