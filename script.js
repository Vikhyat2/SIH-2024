function selectRole(role) {
    localStorage.setItem('userRole', role);
    window.location.href = 'login.html'; // Redirect to login page
}


// Function to update the login page based on the selected role
function updateLoginPage() {
    const role = localStorage.getItem('userRole');
    const roleHeading = document.getElementById('role-heading');
    if (role) {
        roleHeading.textContent = Login.$;{role.charAt(0).toUpperCase() + role.slice(1)};
    }
}

window.onload = updateLoginPage;

function validateForm() {
    const uniqueId = document.getElementById('uniqueId').value;
    const password = document.getElementById('password').value;

    if (uniqueId === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Login successful!");
    return true;
}

function signIn() {
    const role = localStorage.getItem('userRole');
    if (role === 'patient') {
        window.location.href = 'patient-signin.html';
    } else if (role === 'doctor') {
        window.location.href = 'doctor-signin.html';
    } else if (role === 'administrator') {
        // If you have an administrator sign-in page, add its redirect here
        alert("Administrator sign-in page is not implemented yet.");
    } else {
        alert("Please select a role first.");
        window.location.href = 'index.html'; // Redirect back to role selection if no role is selected
    }
}

// For OTP Dialog
function verifyMobile() {
    document.getElementById('otpDialog').style.display = 'block';
}

function closeOtpDialog() {
    document.getElementById('otpDialog').style.display = 'none';
}

function submitOtp() {
    const otp = document.getElementById('otp').value;
    if (otp === "") {
        alert("Please enter OTP.");
    } else {
        alert("OTP Verified!");
        closeOtpDialog();
    }
}

// Patient Form Validation
function validatePatientForm() {
    const mobileNumber = document.getElementById('mobileNumber').value;
    const aadharNumber = document.getElementById('aadharNumber').value;

    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    if (aadharNumber.length !== 12 || isNaN(aadharNumber)) {
        alert("Please enter a valid 12-digit Aadhar number.");
        return false;
    }

    return true;
}

// Doctor Form Validation
function validateDoctorForm() {
    const mobileNumber = document.getElementById('mobileNumber').value;

    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    return true;
}

// Add Another Qualification
function addQualification() {
    const qualifications = document.getElementById('qualifications');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'qualification';
    newInput.placeholder = 'Qualification';
    newInput.style.marginTop = '10px';
    qualifications.appendChild(newInput);
}