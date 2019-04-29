function httpRequestDuyuru(){
		var HttpClient = function(){
		this.get=function(aUrl,aCallback){
			var anHttpRequest = new XMLHttpRequest();
			anHttpRequest.onreadystatechange=function(){
				if(anHttpRequest.readyState==4 && anHttpRequest.status==200)
					aCallback(anHttpRequest.responseText);
			}
			anHttpRequest.open('GET',aUrl,true);
			anHttpRequest.send();
		}
	}
	var url="http://192.168.137.147:1453/api/noticelist";
	//var url="json.txt"
	var client= new HttpClient();
	client.get(url,function(response){
		var obj=JSON.parse(response);
		var duyuru=print(obj);
		document.getElementById("duyuru1").innerHTML=duyuru;
	});
}
function print(obj){
	var i=0;
	var duyuru="";
	while(obj[i]!=null){
		duyuru+=obj[i].message + "	|  | ";
		i++;
	}
	return duyuru;
}
function httpRequestSlider(){
    var HttpClient = function(){
    this.get=function(aUrl,aCallback){
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange=function(){
        if(anHttpRequest.readyState==4 && anHttpRequest.status==200)
          aCallback(anHttpRequest.responseText);
      }
      anHttpRequest.open('GET',aUrl,true);
      anHttpRequest.send();
    }
  }
  var url="http://192.168.137.147:1453/api/contentlist";
  //var url="json.txt"
  var client= new HttpClient();
  client.get(url,function(response){
    var obj=JSON.parse(response);
    var img= display(obj);
    document.getElementById('body1').innerHTML=img;
    //console.log(img);
  });
}
function display(obj){
	var i=0;
    var img="";
    while(obj[i]!=null){
        img+='<img class="mySlides" src="http://192.168.137.147:1453/images/' + obj[i].image + '"  >'
        i++;
    }
    return img;
}
function httpRequestClass(){
    var HttpClient = function(){
    this.get=function(aUrl,aCallback){
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange=function(){
        if(anHttpRequest.readyState==4 && anHttpRequest.status==200)
          aCallback(anHttpRequest.responseText);
      }
      anHttpRequest.open('GET',aUrl,true);
      anHttpRequest.send();
    }
  }
  var url="http://192.168.137.147:1453/api/classroomlist";
  //var url="json.txt"
  var client= new HttpClient();
  client.get(url,function(response){
    var obj=JSON.parse(response);
    var str=classList(obj);
   	document.getElementById('rightText').innerHTML=str;
    console.log(obj[0].message);
  });
}
function classList(obj){
	var i=0;
	var str="";
	var message="<br><br><br>";
	while(obj[i]!=null){
		message+=obj[i].message + "<br>";
		i++;
	}
	str +='<marquee direction="down">' + message+ '</marquee>';
		
	return str;
}

function httpRequestActivity(){
    var HttpClient = function(){
    this.get=function(aUrl,aCallback){
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange=function(){
        if(anHttpRequest.readyState==4 && anHttpRequest.status==200)
          aCallback(anHttpRequest.responseText);
      }
      anHttpRequest.open('GET',aUrl,true);
      anHttpRequest.send();
    }
  }
  var url="http://192.168.137.147:1453/api/activitylist";
  //var url="json.txt"
  var client= new HttpClient();
  client.get(url,function(response){
    var obj=JSON.parse(response);
   var str=activityList(obj);
   document.getElementById('midText').innerHTML=str;
    console.log(obj[0].message);
  });
}

function activityList(obj){
	var i=0;
	var str="";
	var message="<br><br>";
	while(obj[i]!=null){
		message+=obj[i].message + "<br>";
		i++;
	}
	str+='<marquee direction="up" scrooldelay=1 scroolamount="100">' + message + '</marquee>';
		
	return str;
}

























function deneme(){
	document.getElementById("demo").innerHTML="<h1>bu duyuru</h1>";
}
