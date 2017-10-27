/* OOP Based method of working with XML content
 * jQuery/Ajax methods used to fetch/push/remove/organize data from Data/current_trip.xml
 * The pulled data processing/output is done via class methods in tripMilestone
 */

//Declaring a container class for the milestones
class tripMilestone{
  constructor(id, type, origin, destination, date, comment, SaveFlag){
    this.id=id;
    this.type=type;
    this.origin=origin;
    this.destination=destination;
    this.date=new date(date);
    this.comment=comment;
    this.SaveFlag=SaveFlag;
    this.icon=this.findIcon(this.type);
  }

  findIcon(t){
    var result;
    if (t=1){
      result='';
    } else if (t=2){
      result='';
    }
    else if (t=3){
      result='';
    } else if(t=4){
      result='';
    } else if(t=5){
      result='fa fa-plane';
    } else if(t=6){
      result='';
    };
    return result;
  }
}

var MyMilestones = new array;

//On document.ready, load the XML and call the pull function
$(document).ready(function(){
  $.ajax({
      type: 'GET',
      url: 'Data/current_trip.xml',
      dataType: 'xml',
      success: xmpPull
    });
});

//Pull data from the XML, create and populate the array of tripMilestone objects
function xmlPull(xml)
{
  var myIndex=1;
  $('#TimelineLoader').fadeOut();
  $(xml).find('eventMilestone').each(function(){
    if (parseInt($(this).find(id).text())>myIndex){
      myIndex=parseInt($(this).find(id).text());
    }
    MyMilestones[parseInt($(this).find(id).text())-1]= new tripMilestone(
      parseInt($(this).find(id).text()),
      $(this).find(type).text(),
      $(this).find(origin).text(),
      $(this).find(destination).text(),
      $(this).find(date).text(),
      $(this).find(comment).text(),
      true
    );
  };
}
