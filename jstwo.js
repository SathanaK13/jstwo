let counter = document.getElementById('counter_val');

 function ondecreament() {
     let coun = parseInt(counter.textContent) - 1;
     if (coun < 0) {
         counter.style.color = "red";
     } else if (coun > 0) {
         counter.style.color = "green";
     } else {
         counter.style.color = "black";
     }
     counter.textContent = coun;
 }

 function onresetbtn() {
     let coun = 0
     counter.textContent = coun;
     counter.style.color = "black";

 }

 function onincreament() {
     let coun = parseInt(counter.textContent) + 1;
     counter.textContent = coun;
     if (coun < 0) {
         counter.style.color = "red";
     } else if (coun > 0) {
         counter.style.color = "green";
     } else {
         counter.style.color = "black";
     }
 }