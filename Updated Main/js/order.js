
const ORDER_EMAIL = "orders@examplewebsite142.com";

const orderButton = document.querySelector("#orderBtn");

if (orderButton) {

    orderButton.addEventListener("click", function () {

        const productName = document.querySelector(".title-row h1").textContent.trim();

        const productPrice = document.querySelector(".price").textContent.trim();

        const color = document.querySelector("#colorName").textContent.trim();

        const size = document.querySelector("#size").value;

        const quantity = document.querySelector("#qty").value;

        const priceNumber = Number(productPrice.replace(/[^\d.]/g, ""));
        const total = priceNumber * Number(quantity);

        const subject = "Paw Rangers Order - " + productName;

        const body =
            "Hello Paw Rangers!\r\n\r\n" +
            "I would like to place an order.\r\n\r\n" +
            "PRODUCT DETAILS:\r\n" +
            "Product: " + productName + "\r\n" +
            "Price: " + productPrice + "\r\n" +
            "Color: " + color + "\r\n" +
            "Size: " + size + "\r\n" +
            "Quantity: " + quantity + "\r\n" +
            "Total: PHP " + total.toFixed(2) + "\r\n\r\n" +
            "Thank you!";

        const mailtoLink =
            "mailto:" + ORDER_EMAIL +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        window.location.href = mailtoLink;

    });

}
