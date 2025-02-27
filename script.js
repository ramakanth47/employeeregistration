$(document).ready(function () {
  // Calculate Age when the DOB changes
  $("#empDOB").on("change", function () {
    var dob = new Date($(this).val());
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    $("#empAge").val(age);
  });

  
  $("#employeeForm").on("submit", function (event) {
    event.preventDefault();

   
    var isValid = true;
    $("input, select, textarea").each(function () {
      if ($(this).val() === "") {
        alert("Please fill out all fields.");
        isValid = false;
        return false; 
      }
    });

    
    if (isValid) {
      var formData = {
        empId: $("#empId").val(),
        empName: $("#empName").val(),
        empAddress: $("#empAddress").val(),
        empDistrictState: $("#empDistrictState").val(),
        empEducation: $("#empEducation").val(),
        empExperience: $("#empExperience").val(),
        empDOB: $("#empDOB").val(),
        empAge: $("#empAge").val(),
        empSalary: $("#empSalary").val(),
        empDepartment: $("#empDepartment").val(),
      };

      console.log("Form Data:", formData);
      alert("Form submitted successfully!");

      
      $("#employeeForm")[0].reset();

      
      $("#empAge").val(""); 
    }
  });
});
