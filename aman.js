 
    // import datakey from "./weather.js"
    // import { datakey } from './weather.js';

    // console.log(datakey)

    const apikey="4643eb338b6675e8e35a8b6b2ed9d8fc";
    // let datakey=0;
    
    
    
    function tofind(){
        // e.preventDefault();

if (!document.getElementsByClassName("amandeepsharmainput")[0].value) {
 alert("city named not mentioned")   
}
else{

        let findinput=document.getElementsByClassName("amandeepsharmainput");
        const newdata=findinput[0].value
        // console.log(newdata)




     var urlsearch= `http://api.openweathermap.org/data/2.5/weather?q=${newdata}&` + `appid=${apikey}`;

    fetch(urlsearch).then((res)=>{
        return res.json();
    }).then((data)=>{

        console.log(data)

   dhowit(data.id)


    findinput[0].value=""

    document.getElementById("amansharma").style.display="none"
        
//  console.log(data.id)


    })
    .catch(err=>{
        console.log(err)
        alert("city not found")
    })


    console.log("amandeepsharma")
    // console.log(datakey)
   
}

    }



function dhowit(dataa){
    
        
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
    
    window.myWidgetParam.push({id: 11,cityid: dataa,appid: '4643eb338b6675e8e35a8b6b2ed9d8fc',units: 'metric',containerid: 'openweathermap-widget-11',  }); 
    
    (function() {var script = document.createElement('script');
    
    script.async = true;script.charset = "utf-8";
    
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    
    var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();
   
}


  