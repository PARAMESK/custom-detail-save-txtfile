    let saveFile = () => {
    	
        // Get the data from each element on the form.
    	const name = document.getElementById('txtName');
        const password = document.getElementById('inputPassword4');
        const email = document.getElementById('txtEmail');
        const city = document.getElementById('inputCity');
        const address = document.getElementById('inputAddress');
        const txtarea = document.getElementById('exampleFormControlTextarea1');
        
        // This variable stores all the data.
        let data = 
            '\r Name: ' + name.value + ' \r\n ' + 
            'Password: ' +password.value + ' \r\n ' + 
            'Email: ' + email.value + ' \r\n ' + 
            'City: ' + city.value + ' \r\n ' + 
            'Textarea: ' + txtarea.value + ' \r\n ' + 
            'Address: ' + address.value;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }
    let saveFile2 = () => {
    	
        // Get the data from each element on the form.
    	const name = document.getElementById('txtName2');
        const password = document.getElementById('inputPassword42');
        const email = document.getElementById('txtEmail2');
        const city = document.getElementById('inputCity2');
        const address = document.getElementById('inputAddress2');
        const txtarea = document.getElementById('exampleFormControlTextarea2');
        
        // This variable stores all the data.
        let data = 
            '\r Name: ' + name.value + ' \r\n ' + 
            'Password: ' +password.value + ' \r\n ' + 
            'Email: ' + email.value + ' \r\n ' + 
            'City: ' + city.value + ' \r\n ' + 
            'Textarea: ' + txtarea.value + ' \r\n ' + 
            'Address: ' + address.value;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }