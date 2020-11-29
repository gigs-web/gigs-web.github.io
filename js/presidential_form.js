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
    "Banda  Ahenkro","Berekum East","Berekum West","Dormaa East","Dormaa West","Dormaa Central",
    "Jaman North","Jaman South","Sunyani East","Sunyani West","Tain","Wenchi",

    //Bono East Region 
    "Atebubu Amantin","Kintampo North","Kintampo South","Nkoranza North","Pru East","Pru West",
    "Sene East","Sene West","Techiman North","Techiman South",

    //Central Region
   "Abura-Asebu-Kwamankese","Agona East","Agona West","Ajumako-Enyan-Essiam","Asikuma-Odoben-Brakwa",
    "Assin North","Assin North","Assin Central","Assin South","Awutu-Senya","Awutu-Senya East",
    "Awutu-Senya West","Cape Coast","Cape Coast North","Cape Coast South","Effutu","Ekumfi",
    "Gomoa East","Gomoa Central","Gomoa West","Komenda-Edina-Eguafo-Abirem","Mfantseman East",
    "Mfantseman West","Hemang Lower Denkyira","Twifo-Atii Morkwaa","Upper Denkyira East","Upper Denkyira West",

    //Eastern Region
    "Akropong","Akuapem South","Okere","Asuogyaman","Atiwa","Atiwa East","Atiwa West","Ayensuano","Akim Oda",
    "Asene Akroso-Manso","Abirem","Akim Swedru","Achiase","Akim Abuakwa North","Akim Abuakwa South",
    "Fanteakwa North","Fanteakwa South","Akwatia","Kade","Abetifi","Afram Plains North","Afram Plains South",
    "Mpraeso","Nkawkaw","Lower Manya Krobo","New Juaben North","New Juaben South","Nsawam - Adoagyiri",
    "Suhum","Upper Manya","Lower West Akim","Upper West Akim","Yilo Krobo",

    //Greater Accra Region 
    "Ablekuma Central","Ablekuma North","Ablekuma South","Ablekuma West","Ayawaso Central","Ayawaso East","Ayawaso North",
    "Ayawaso West Wuogon","Dade Kotopon","Domeabra-Obom","Korle Klottey","Odododiodoo","Okaikwei North",
    "Okaikwei Central","Okaikwei South","Adenta","Ashaiman","Ada","Sege","Ningo-Prampram",
    "Madina","Abokobi-Madina","Dome-Kwabenya","Trobu-Amasaman","Trobu","Amasaman","Weija",
    "Weija-Gbawe","Bortianor-Ngleshie-Amanfrom","Anyaa-Sowutuom","Krowor","Ledzokuku","Kpone-Katamanso", 
    "Shai-Osudoku","Tema East","Tema Central","Tema West",

    //Northern East  Region
    "Bunkpurugu","Yunyoo","Chereponi","Nalerigu Gambaga","Kumbungu","Damango-Daboya",
    "Daboya-Mankarigu","Walewale","Yagaba-Kubor",

    //Savannah Region 
    "Bole bamboi","Yapei-Kusawgu","Salaga North","Salaga South","Daboya","Sawla Tuna Klaba",

    //Northern Region 
    "Gushegu","Karaga","Kpandai","Kumbungu","Bimbilla","Wulensi","Mion","Saboba","Nanton", 
    "Savelugu","Sagnarigu","Tamale Central","Tamale North","Tamale South","Tolon","Damango", 
    "Tatale-Sanguli","Yendi","Zabzugu",

    //Upper East Region 
    "Bawku Central","Binduri","Pusiga","Zebilla","Bolgatanga Central","Bolgatanga East",
    "Bongo","Builsa North","Builsa South","Tempane","Garu", "Tempane","Chiana-Paga",
    "Navrongo Central","Nabdam", "Talensi",

    //Upper West Region 
    "Jirapa","Lambussie","Lawra-Nandom","Lawra","Nandom","Nadowli East","Nadowli West",
    "Sissala East","Sissala West","Wa East","Wa Central","Wa West",

    //Volta Region
    "Adaklu","Afadjato South","Agotime-Ziope","Akatsi North","Akatsi South","Ho Central",
    "Ho West","Hohoe South","Anlo","Keta","Ketu North","Ketu South","Kpando","Central Tongu",
    "North Tongu","North Dayi","South Dayi","South Tongu",

    //Oti Region
    "Biakoye","Buem","Akan","Krachi East","Krachi West","Krachi Nchumuru","Nkwanta North","Nkwanta South",

    //Western Region 
    "Amenfi Central","Amenfi East","Ahanta West","Ellembelle","Jomoro","Mpohor-Wassa East",
    "Mpohor Wassa East","Evalue-Gwira","Prestea-Huni Valley","Effia-Kwesimintsim","Effia",
    "Kwesimintsim","Essikado-Ketan","Sekondi","Takoradi","Shama","Tarkwa-Nsuaem","Amenfi East","Amenfi West", 
    
    //Western North Region 
    "Aowin","Bia East","Bia West","Bibiani-Anhwiaso-Bekwai","Bodi","Juabeso",
    "Sefwi-Akontombra","Sefwi Wiawso","Suaman",

];
 autocomplete(document.getElementById("constituency"), constituencies);
 autocomplete(document.getElementById("constituency2"), constituencies);
 autocomplete(document.getElementById("constituency3"), constituencies);
 autocomplete(document.getElementById("constituency4"), constituencies);
 autocomplete(document.getElementById("constituency5"), constituencies);
 autocomplete(document.getElementById("constituency6"), constituencies);
 autocomplete(document.getElementById("constituency7"), constituencies);
 autocomplete(document.getElementById("constituency8"), constituencies);
 autocomplete(document.getElementById("constituency9"), constituencies);
 autocomplete(document.getElementById("constituency10"), constituencies);
 autocomplete(document.getElementById("constituency11"), constituencies);
 autocomplete(document.getElementById("constituency12"), constituencies);


/*=========================PRegions & Const ===========================*/
