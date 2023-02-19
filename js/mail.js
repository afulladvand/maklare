

function sendMail() {
    const params = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    };

    const serviceID = process.env.SERVICE_ID;
    const templateID = process.env.TEMPLATE_ID;
    if (params.name != "" && params.email != "") {
        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                document.querySelector("#name").value = "";
                document.querySelector("#email").value = "";
                document.querySelector("#message").value = "";
                alert("SUCCESS!");
            })
            .catch((err) => console.log(err));
    } else {
        alert("Du ska mata in på namn och email delen!")
    }
}
