document.getElementById("contactForm").addEventListener("submit", function (e) {

		const fullname = document.getElementById("name").value.trim();
		const namePattern = /^[A-Za-z\s]+$/;

		if (fullname.length < 5) {
			alert("Full name must contain at least 5 characters.");
			e.preventDefault();
			return;
		}

		if (!namePattern.test(fullname)) {
			alert("Full name must contain only letters and spaces.");
			e.preventDefault();
			return;
		}

		const email = document.getElementById("email").value.trim();
		const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt.ro$/;

		if (!emailPattern.test(email)) {
			alert("Email must be valid and end with @e-uvt.ro");
			e.preventDefault();
			return
		 }

		const phone = document.getElementById("phone").value.trim();
		const phonePattern = /^[0-9]+$/;

        if(phone != ""){
		if (!phonePattern.test(phone)) {
			alert("Phone number must be valid");
			e.preventDefault();
			return;
		}
		if(phone.length != 10){
            alert("Phone number must have exactly 10 digits");
            e.preventDefault()
            return;
        }
    }
        const subject = document.getElementById("subject");
        if(subject.value === ""){
            alert("Subject must not be empty")
            e.preventDefault();
            return
        }
        const message = document.getElementById("msg");
        if(message.value.trim() === ""){
            alert("Message must not be empty");
            e.preventDefault()
            return;
        }

        const selected = document.querySelector('input[name="hear"]:checked')
        
        if(!selected){
            alert("Must choose a radio option")
            e.preventDefault();
            return;
        }

        const dob = document.getElementById("dob").value.trim();
        const birthDate = new Date(dob);
        const today = new Date();

        let agebyDate = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth() 

        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
            agebyDate--;
        }
        if(agebyDate < 18){
        alert("You must be at least 18 years old.");
        e.preventDefault();
        return;
       }

       const age = document.getElementById("age");
       if(Number(age.value) < 18 || Number(age.value) > 60){
        alert("Age must be between 18 years old and 60 years old")
        e.preventDefault();
        return;
       }

        const website = document.getElementById("website").value.trim();
        if(!website.startsWith("https://")){
        alert("The website link must begin with https://")
        e.preventDefault();
        return;
        }
        const fileInput = document.getElementById("fileUpload");
        const file = fileInput.files[0];
        if(!file){
            alert("Upload a file");
            e.preventDefault();
            return;
        }

        const fileName = file.name.toLowerCase();
        if(!fileName.endsWith(".pdf") && !fileName.endsWith(".docx")){
            alert("File must end with .pdf or .docx")
            e.preventDefault();
            return
        }

        const maxSize = 2*1024*1024;

        if(file.size> maxSize){
            alert("File must be smaller than 2MB");
            e.preventDefault();
            return;
        }

        const color = document.getElementById("favColor");
        if(color.value === "#000000"){
            alert("A color must be selected");
            e.preventDefault();
            return
        }
	});