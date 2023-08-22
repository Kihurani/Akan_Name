
let btnShow=document.querySelector('button');
let result = document.querySelector('h5');

btnShow.addEventListener('click',() =>{
    let selected = document.querySelector('input[type="radio"]:checked');
    result.innerText = selected.value;
    result.innerText = selected.parentElement.textContent;
    alert(result.innerText)

   var  Gender=result.innerText
  
          alert("your gender is "+Gender)
          alert("For your biodata, ensure you put in as advised");

              var Yearborn=prompt("Which year were you born ? (Input 4 digits,YYYY)")
              var Monthborn=prompt("Which month were you born ? (Use digit values between 1 and 12)")
              var Dateborn=prompt("Which date were you born ? (Use digit values between 1 and 31)")

                   let MM=Monthborn*1;  // convert Monthborn string to number


                   var YB=(Yearborn*1); // convert Yearborn string to a number

                   var CC= Yearborn.slice(0, 2); // Century year 
                   var YY= Yearborn.slice(2, 4); // Units year

                   let UY=CC*1 ; // convert Century year string to number
                  let SY=YY*1 ; // convert Units year string to number

                   switch(YB%4) // Formulate leap year identification code
                        { 
                         case 0:
                           switch(UY%4)
                                 {
                                    case 0:
                                      Ytype="Leap";
                                     break;

                                    case 1:
                                       switch(SY%4)
                                           {
                                             case 0:
                                               Ytype="Leap";
                                             break;
                                             case 1 :
                                             case 2 :
                                             case 3 :
                                               Ytype="Norm"
                                           } 

                                    case 2:
                                     switch(SY%4)
                                     {
                                       case 0:
                                         Ytype="Leap";
                                       break;
                                       case 1 :
                                       case 2 :
                                       case 3 :
                                         Ytype="Norm"
                                     } 

                                    case 3:
                                     switch(SY%4)
                                     {
                                       case 0:
                                         Ytype="Leap";
                                       break;
                                       case 1 :
                                       case 2 :
                                       case 3 :
                                         Ytype="Norm"
                                     } 
                               
                               }
                         break;
                         case 1:
                         case 2:
                         case 3:
                               Ytype="Norm";

                        }   
           
                                      alert("The year is a type "+Ytype);

 // Each month has a similar weekday code depending on whether it's a leap year or not
                       switch (MM) 
                                     {
                                       case 1:
                                           switch(Ytype)
                                               {
                                                 case 'Norm' :
                                                  RefDat=3;
                                                 break;
                                                 case 'Leap' :
                                                  RefDat=4;
                                                }   
                                          MB='January';
                                         break;

                                       case 2:
                                           switch(Ytype)
                                                {
                                                  case 'Norm' :
                                                   RefDat=28;
                                                 break;
                                                  case 'Leap' :
                                                   RefDat=29;
                                                }
                                         MB='February';
                                         break;

                                       case 3:
                                         RefDat=14;
                                         MB='March';
                                         break;

                                       case 4:
                                         RefDat=4;
                                         MB='April';
                                         break;

                                       case 5:
                                         RefDat=9;
                                         MB='May';
                                         break;

                                       case 6:
                                         RefDat=6;
                                         MB='June';
                                         break;

                                       case 7:
                                         RefDat=11;
                                         MB='July';
                                         break;

                                       case 8:
                                         RefDat=8;
                                         MB='August';
                                         break;

                                       case 9:
                                         RefDat=5;
                                         MB='September';
                                         break;

                                       case 10:
                                         RefDat=10;
                                         MB='October';
                                         break;

                                       case 11:
                                         RefDat=7;
                                         MB='November';
                                         break;

                                       case 12:
                                         RefDat=12;
                                         MB='December';
                                     }

                         alert("You were born on "+MB+" "+Dateborn+", "+Yearborn)

                         
  // Next process step is to formulate the weekday code


                                   switch (UY) {
                                        case 18:
                                        case 14:
                                        case 10:
                                             Operand_1 =5;
                                             break;
                                        case 19:
                                        case 15:
                                        case 11: 
                                             Operand_1 =3;
                                             break;
                                        case 20:
                                        case 16: 
                                        case 12: 
                                             Operand_1 =2;
                                             break;
                                        case 21:
                                        case 17:
                                        case 13:
                                             Operand_1 =0;
                                   }
  // Formulate the first operand based on the Century year number value geared towards generating the weekday code
                              var   Operand_2=Math.floor(YY/12) // extract the years quotient after dividing by 12

                              var Operand_3=YY%12  // extract the years remainder after dividing by 12

                              var   Operand_4=Math.floor(Operand_3/4)  // extract the quotient after dividing Operand_3 by 4

                              var  Operand_5=(Operand_1+Operand_2+Operand_3+Operand_4)%7  // add above operands and extract remainder after dividing by 7 to get the years magic weekday value where

  //                            alert("First operand is : "+Operand_1) ;
    //                        alert("Second operand is : "+Operand_2) ;
      //                        alert("third operand is : "+Operand_3);
        //                     alert("fourth operand is : "+Operand_4);
           //                  alert("Fifth operand is : "+Operand_5);
                     
                                                 
                               switch (Operand_5)
                                            {
                                              case 0:
                                              MagWkDay = "Sunday";
                                                break;
                                              case 1:
                                              MagWkDay = "Monday";
                                                break;
                                              case 2:
                                              MagWkDay = "Tuesday";
                                                break;
                                              case 3:
                                              MagWkDay = "Wednesday";
                                                break;
                                              case 4:
                                              MagWkDay = "Thursday";
                                                break;
                                              case 5:
                                              MagWkDay = "Friday";
                                                break;
                                              case  6:
                                              MagWkDay = "Saturday";
                                            }

 //                                          alert("The years magic Weekday is " + MagWkDay);

   //           var operand_6=(Dateborn-RefDat)+35;
     //         alert("Operand 6 is Dateborn-months RefDate giving "+operand_6);
       //       var operand_7=operand_6%7
         //     alert("Operand 7 is previous value MOD 7 giving "+operand_7);
           //   var operand_8=operand_7+Operand_5
             // alert("Operand 8 is previous value and add MagicWkDay code (operand_5) giving "+operand_8);
       //       var operand_9=operand_8%7
         //     alert("Operand 9 is is previous value MOD 7 giving "+operand_9);



let WkDayBorn=((((Dateborn-RefDat)+28)%7)+Operand_5)%7  // Dateborn is date provided at input for the month MM provided 

// alert("Weekday code is "+WkDayBorn)
switch (WkDayBorn) 
                   {
                     case 0:
                            Dayborn = "Sunday";
                                           switch (Gender)
                                                  {
                                                    case "Male":
                                                       AkanName= "Kwasi";
                                                    break;
                                                    case "Female" :
                                                       AkanName = "Akosua"
                                                  }
                                           break;
                     case 1:
                            Dayborn = "Monday";
                                            switch (Gender)
                                                  {
                                                     case "Male":
                                                        AkanName= "Kwadwo";
                                                      break;
                                                     case "Female" :
                                                        AkanName = "Adwoa"
    
                                                  }
                                            break;
                     case 2:
                            Dayborn = "Tuesday";
                                            switch (Gender)
                                                  {
                                                     case "Male":
                                                        AkanName= "Kwabena";
                                                      break;
                                                     case "Female" :
                                                        AkanName = "Abenaa"
                                                  }
                                            break;
                     case 3:
                            Dayborn = "Wednesday";
                                            switch (Gender)
                                                    {
                                                     case "Male":
                                                        AkanName= "Kwaku";
                                                      break;
                                                     case "Female" :
                                                        AkanName = "Akua"
                                                    }
                                            break;
                     case 4:
                            Dayborn = "Thursday";
                                            switch (Gender)
                                                    {
                                                     case "Male":
                                                        AkanName= "Yaw";
                                                      break;
                                                     case "Female" :
                                                        AkanName = "Yaa"
                                                    }
                                            break;
                     case 5:
                            Dayborn = "Friday";
                                            switch (Gender)
                                                    {
                                                     case "Male":
                                                        AkanName= "Kofi";
                                                      break;
                                                     case "Female" :
                                                        AkanName = "Afua"
                                                    }
                                            break;
                     case  6:
                            Dayborn = "Saturday";
                                            switch (Gender)
                                                    {
                                                     case "Male":
                                                        AkanName= "Kwame";
                                                      break;
                                                     case "Female" :
                                                        AkanName = "Ama"
                                                    }
                    }

alert("You were born a " + Dayborn+" and your Akan name is "+AkanName);

})
    
