function validateForm() {
    var usnInput = document.getElementById("usn");
    var usnValue = usnInput.value.trim();
    var usnPattern = /^NNM23[A-Z]{2}\d{3}$/;

    if (!usnPattern.test(usnValue)) {
        document.getElementById("usnError").innerHTML = "USN must be in the format NNM23CS256";
        return false;
    } else {
        document.getElementById("usnError").innerHTML = "";
        return true;
    }
}
