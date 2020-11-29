var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

/*=========================Party Names===========================*/
$("#inputGroupSelect01").change(function ()
    {
        var selectedItem = $(this).val();

        if (selectedItem != null && selectedItem != '')
        {
            $("#candidateName").val(selectedItem);
        }      
    });  
    
$("#inputGroupSelect02").change(function ()
    {
        var selectedItem = $(this).val();

        if (selectedItem != null && selectedItem != '')
        {
            $("#candidateName2").val(selectedItem);
        }      
    });

$("#inputGroupSelect03").change(function ()
    {
        var selectedItem = $(this).val();

        if (selectedItem != null && selectedItem != '')
        {
            $("#candidateName3").val(selectedItem);
        }      
    });

    $("#inputGroupSelect04").change(function ()
    {
        var selectedItem = $(this).val();

        if (selectedItem != null && selectedItem != '')
        {
            $("#candidateName4").val(selectedItem);
        }      
    });  
    
$("#inputGroupSelect05").change(function ()
    {
        var selectedItem = $(this).val();

        if (selectedItem != null && selectedItem != '')
        {
            $("#candidateName5").val(selectedItem);
        }      
    });

$("#inputGroupSelect06").change(function ()
    {
        var selectedItem = $(this).val();

        if (selectedItem != null && selectedItem != '')
        {
            $("#candidateName6").val(selectedItem);
        }      
    });

    $("#inputGroupSelect07").change(function ()
    {
        var selectedItem = $(this).val();

        if (selectedItem != null && selectedItem != '')
        {
            $("#candidateName7").val(selectedItem);
        }      
    });  
    
$("#inputGroupSelect08").change(function ()
    {
        var selectedItem = $(this).val();

        if (selectedItem != null && selectedItem != '')
        {
            $("#candidateName8").val(selectedItem);
        }      
    });

$("#inputGroupSelect09").change(function ()
    {
        var selectedItem = $(this).val();

        if (selectedItem != null && selectedItem != '')
        {
            $("#candidateName9").val(selectedItem);
        }      
    });

    $("#inputGroupSelect10").change(function ()
    {
        var selectedItem = $(this).val();

        if (selectedItem != null && selectedItem != '')
        {
            $("#candidateName10").val(selectedItem);
        }      
    });  
    
$("#inputGroupSelect11").change(function ()
    {
        var selectedItem = $(this).val();

        if (selectedItem != null && selectedItem != '')
        {
            $("#candidateName11").val(selectedItem);
        }      
    });

$("#inputGroupSelect12").change(function ()
    {
        var selectedItem = $(this).val();

        if (selectedItem != null && selectedItem != '')
        {
            $("#candidateName12").val(selectedItem);
        }      
    });
/*=========================Party Names===========================*/

/*=========================Regions & Const ===========================*/
function autocomplete(searchEle, arr) {
    var currentFocus;
    searchEle.addEventListener("input", function(e) {
       var divCreate,
       b,
       i,
       fieldVal = this.value;
       closeAllLists();
       if (!fieldVal) {
          return false;
       }
       currentFocus = -1;
       divCreate = document.createElement("DIV");
       divCreate.setAttribute("id", this.id + "autocomplete-list");
       divCreate.setAttribute("class", "autocomplete-items");
       this.parentNode.appendChild(divCreate);
       for (i = 0; i <arr.length; i++) {
          if ( arr[i].substr(0, fieldVal.length).toUpperCase() == fieldVal.toUpperCase() ) {
             b = document.createElement("DIV");
             b.innerHTML = "<strong>" + arr[i].substr(0, fieldVal.length) + "</strong>";
             b.innerHTML += arr[i].substr(fieldVal.length);
             b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
             b.addEventListener("click", function(e) {
                searchEle.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
             });
             divCreate.appendChild(b);
          }
       }
    });
    searchEle.addEventListener("keydown", function(e) {
       var autocompleteList = document.getElementById(
          this.id + "autocomplete-list"
       );
       if (autocompleteList)
          autocompleteList = autocompleteList.getElementsByTagName("div");
       if (e.keyCode == 40) {
          currentFocus++;
          addActive(autocompleteList);
       }
       else if (e.keyCode == 38) {
          //up
          currentFocus--;
          addActive(autocompleteList);
       }
       else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
             if (autocompleteList) autocompleteList[currentFocus].click();
          }
       }
    });
    function addActive(autocompleteList) {
       if (!autocompleteList) return false;
          removeActive(autocompleteList);
       if (currentFocus >= autocompleteList.length) currentFocus = 0;
       if (currentFocus < 0) currentFocus = autocompleteList.length - 1;
       autocompleteList[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(autocompleteList) {
       for (var i = 0; i < autocompleteList.length; i++) {
          autocompleteList[i].classList.remove("autocomplete-active");
       }
    }
    function closeAllLists(elmnt) {
       var autocompleteList = document.getElementsByClassName(
          "autocomplete-items"
       );
       for (var i = 0; i < autocompleteList.length; i++) {
          if (elmnt != autocompleteList[i] && elmnt != searchEle) {
             autocompleteList[i].parentNode.removeChild(autocompleteList[i]);
          }
       }
    }
    document.addEventListener("click", function(e) {
       closeAllLists(e.target);
    });
 }
 var constituencies = 
 [
     //Ashanti Region
    "Adansi-Asokwa","Fomena", "New Edubease", "Afigya Kwabre North ","Afigya Kwabre South ","Ahafo Ano South East","Ahafo Ano South West","Odotobori",
    "Aminsie West","Manso Nkwanta","Manso Edubia","Asante-Akim North","Asante-Akim Central",
    "Asante-Akim North ","Asante-Akim South","Asawase ","Atwima Kwanwoma","Atwima-Mponua",
    "Atwima-Nwabiagya North","Atwima-Nwabiagya South","Bekwa","Bosome-Ferho","Bosomtwe",
    "Ejisu","Juaben","Ejura","Asokwa ","Mampong","Asokwa","Bantama","Nhyiaeso","Oforikrom",
    "Old Tafo","Suame", "Subin","Manhyia North", "Manhyia South","Kwadaso","Kwabre East","Akrofuom","Obuasi East","Obuasi West",
    "Ofinso North","Ofinso South","Kumawu","Sekyere Afram plains","Nsuta-Kwamang Beposo","Afigya Sekyere West","Afigya Sekyere East",

    //Ahafo Region
    "Asunafo North","Asunafo South","Asutifi North","Tano North","Tano South",

    //Bono Region
    "Banda  Ahenkro",
    
];
 autocomplete(document.getElementById("constituency"), constituencies);


/*=========================PRegions & Const ===========================*/
