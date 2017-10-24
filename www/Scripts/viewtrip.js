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
      icon='<div class="milestone-card-title"><strong><i class="fa fa-plane" aria-hidden="true" style="color: #F44336; font-size: 1.5rem;"></i>'+'&nbsp;' + $(this).find('origin').text() +'</strong>' + '&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i>' + '&nbsp;<strong>' + $(this).find('destination').text() + '</strong></div>';
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
