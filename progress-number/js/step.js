var currentTab = 0;
showTab(currentTab);

function showTab(n) {

  var x = document.getElementsByClassName("step");
  var stepHeadings = document.getElementsByClassName("step-headings")[0].getElementsByTagName("h5");

  for (var i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }

  x[n].style.display = "block";

  var stepIndicators = document.getElementsByClassName("stepIndicator"); 
  
  for (var i = 0; i < stepHeadings.length; i++) {
    if (i === n) {
      stepHeadings[i].style.display = "block";
    } else {
      stepHeadings[i].style.display = "none";
    }
  }

  for (var i = 0; i < stepIndicators.length; i++) {
    stepIndicators[i].textContent = i + 1;
  }

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

  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("step");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("signUpForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("step");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  
  var i, x = document.getElementsByClassName("stepIndicator");

  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  
  x[n].className += " active";
}