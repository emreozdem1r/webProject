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
	//var url="http://192.168.137.147:1453/api/noticelist";
	var url="noticelist.txt"
	var client= new HttpClient();
	client.get(url,function(response){
		var obj=JSON.parse(response);
		var duyuru=print(obj);
		document.getElementById("duyuru1").innerHTML=duyuru;
	});
}
function print(obj){
	try{
		if(obj==null)
			console.log("objeden null deger geldi.");
		else{
			var i=0;
			var duyuru="";
			while(obj[i]!=null){
				duyuru+=obj[i].message + "	|  | ";
				i++;
			}
			return duyuru;
		}
	}
	catch(err){
		console.log(err);
	}
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
  //var url="http://192.168.137.147:1453/api/contentlist";
  var url="contentlist.txt"
  var client= new HttpClient();
  client.get(url,function(response){
    var obj=JSON.parse(response);
    var img= display(obj);
    document.getElementById('body1').innerHTML=img;
    //console.log(img);
  });
}
function display(obj){
	try{
	var i=0,visibility=0;
    var img="";
    while(obj[i]!=null){
    	if(visibility==0){
        img+='<img class="mySlides" src="images/' + obj[i].image + '"  >';
        //http://192.168.137.147:1453/images şeklinde düzeltilecek.
        i++;
        visibility=1;
    }
    else
    {
     img+='<img class="mySlides" src="images/' + obj[i].image + '"  style="visibility:hidden">';
        //http://192.168.137.147:1453/images şeklinde düzeltilecek.
        i++;
    }
    }
    return img;
	}
	catch(err){
		console.log(err);
	}

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
  //var url="http://192.168.137.147:1453/api/classroomlist";
  var url="classroomlist.txt"
  var client= new HttpClient();
  client.get(url,function(response){
    var obj=JSON.parse(response);
    var str=classList(obj);
   	document.getElementById('rightText').innerHTML=str;
    console.log(obj[0].message);
  });
}
function classList(obj){
	try{
		if(obj==null)
			console.log("objeden null deger geldi.");
		else{
		var i=0;
		var str="";
		var message="";
		while(obj[i]!=null){
			message+=obj[i].message + "<br>";
			i++;
		}
		str +='<marquee direction="down" class="ders">' + message+ '</marquee>';
			
		return str;
		}
	}
	catch(err){
		console.log(err);
	}
	
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
  //var url="http://192.168.137.147:1453/api/activitylist";
  var url="activitylist.txt"
  var client= new HttpClient();
  client.get(url,function(response){
    var obj=JSON.parse(response);
   var str=activityList(obj);
   document.getElementById('midText').innerHTML=str;
    console.log(obj[0].message);
  });
}

function activityList(obj){
	try{
		if(obj==null)
			console.log("objeden null deger geldi.");
		else{
			var i=0;
			var str="";
			var message="";
			while(obj[i]!=null){
				message+=obj[i].message+"<br>" ;
				i++;
			}
			str+='<p id="p1" class="etkinlik">' + message + '</p>';
				
			return str;
		}
	}
	catch(err){
		console.log(err);
	}
}

























function deneme(){
	document.getElementById("demo").innerHTML="<h1>bu duyuru</h1>";
}
