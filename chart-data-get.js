/* 
FILL OUT THE FOLLOWING 2 SETS OF DATA. 

THE FIRST SET IS TO REFLECT HOW MUCH THE SENSES PLAY INTO THE DESIGN AS THE OBJECT/EXPERIECE EXISTS NOW. 

THE SECOND SET OF DATA REFLECTS HOW THE WHOLE INTERACTION EXPERIENCE CHANGES ONCE MORE SENSES ARE TAPPED INTO BY DESIGNING THE OBJECT/EXPIERENCE TO PURPOSEFULLY TAKE ADVANTAGE OF ADDITIONAL SENSES 
*/







/***** SENSE LEVELS IN ORIGINAL FORM *****/
var smell1 	= 	0; //SMELL
var taste1 	= 	4; //TASTE
var touch1 	= 	0; //TOUCH
var hearing1 = 	3; //HEARING
var sight1 = 	  9; //SIGHT


/***** SENSE LEVELS WITH RE-DESIGN TO ALLOW MORE ACCESS TO SENSES *****/
var smell2 = 	  8; //SMELL
var taste2 = 	  4; //TASTE
var touch2 = 	  3; //TOUCH
var hearing2 = 	3; //HEARING
var sight2 = 	  9; //SIGHT









/******************************************************************/
/*********************** DO NOT EDIT BELOW ************************/
/******************************************************************/
/***** CHARTING DATA  *****/
 var opts = {
    "paddingTop": "15",
    "paddingRight" : "35"
}
  var data = {
  "main": [
    {
      "className": ".original",
      "data": [
        {
          "x": "Smell",
          "y": smell1
        },
        {
          "x": "Taste",
          "y": taste1
        },
         {
          "x": "Touch",
          "y": touch1
        },
        {
          "x": "Hearing",
          "y": hearing1
        },
         {
          "x": "Sight",
          "y": sight1
        }
      ]
    },
       {
      "className": ".comparison",
      "data": [
        {
          "x": "Smell",
          "y": smell2
        },
        {
          "x": "Taste",
          "y": taste2
        },
         {
          "x": "Touch",
          "y": touch2
        },
        {
          "x": "Hearing",
          "y": hearing2
        },
         {
          "x": "Sight",
          "y": sight2
        }
      ]
    },
  ],

      "xScale": "ordinal",
      "yScale": "linear",
      "type" : "line",
      "yMax" : 10

    },
    chart = new xChart('bar', data, '#myChart', opts);
    window.orgval = smell1+taste1+touch1+hearing1+sight1;
    window.newval = smell2+taste2+touch2+hearing2+sight2;
    window.diffval = newval - orgval;
    window.finalval = diffval + newval;
    
    window.oldpct = orgval * 100 / 50;
    window.newpct = newval * 100 / 50;
    
    window.onload = function() {
  	  document.getElementById("sense-value").innerHTML = orgval;
  	  document.getElementById("sense-result").innerHTML = newval;
  	  document.getElementById("orgpct").innerHTML = oldpct;
  	  document.getElementById("newpct").innerHTML = newpct;
  	 }
    