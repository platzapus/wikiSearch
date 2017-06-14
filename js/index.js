$(document).ready(function(){

  $("#searchBtn").click(function(){
    var uInput = $("#uInput").val();

    $('#resBox').removeClass('hide');
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+uInput+"&format=json&callback=?";
    
    
    $.ajax({
     type: "GET",
      url:api,
      async: false,
      dataType:"json",
      
      success: function(data){
        $("#results").html('');
        $('h1').css('margin-top','2%');
        for(var i=data[1].length-1;i>=0;i--){
          $("#results").prepend("<a href="+data[3][i]+"><li><div id='titleRes'>"+data[1][i]+"</div><p>"+data[2][i]+"</p></li></a>");
        }
        
        
  
          
        },
      error: function(errorMessage){
        alert("Failure");
      }
    })
  }
)});