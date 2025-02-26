$(document).ready(function() {
    
    $("#empDOB").on("change", function() {
        var dob = new Date($(this).val());
        var today = new Date();
        var age = today.getFullYear() - dob.getFullYear();
        var m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        $("#empAge").val(age);
    });

   
    $("#employeeForm").on("submit", function(event) {
        var isValid = true;

       
        $("input, select, textarea").each(function() {
            if ($(this).val() === "") {
                alert("Please fill out all fields.");
                isValid = false;
                return false;
            }
        });

       
        if (!isValid) {
            event.preventDefault();
        }
    });
});
