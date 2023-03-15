
/*
    1.  Let's import the easyinvoice library so we can use it.
    2.  Let's import the built-in NodeJS fs library,
        so we can interact with the file system to save our invoice 
*/
// const easyinvoice = require('easyinvoice');
// const fs = require('fs');

const invoiceBtn = document.querySelector('.invoice');
const pdf = document.querySelector('.pdf');
// import easyinvoice from 'easyinvoice';


// const app = express();
// const express = require('express');
// const PORT = 6969;

// app.get('/invoice/:invoiceId', (req, res) => {

//     res.send({ data: 'invoiceBtn' })
// });

// app.post('/invoice/:invoiceId', (req, res) => {
//     res.send({ data: 'invoice' })
// });

// app.put('/invoice/:invoiceId', (req, res) => {
//     res.send({ data: 'invoice' })
// });

// app.delete('/invoice/:invoiceId', (req, res) => {
//     res.send({ data: 'invoice' })
// });

// app.listen(PORT, () => {
//     console.log('server running')
// });





/*  
    3.  Let's create a data object. 
        This object will contain all the data we would like to be visible on our invoice.
        We will add data later in our demo.
*/

// Our new data object, this will replace the empty object we used earlier.
var data = {

    // Let's add a recipient
    "client": {
        "company": "Client",
        "address": "Clientstreet 456",
        "zip": "4567 CD",
        "city": "Clientcity",
        "country": "Clientcountry"
    },

    // Now let's add our own sender details
    "sender": {
        "company": "DocDocs",
        "address": "Sample Street 123",
        "zip": "1234 AB",
        "city": "Sampletown",
        "country": "Samplecountry"
    },

    // Of course we would like to use our own logo and/or background on this invoice. There are a few ways to do this.
    "images": {
        //      Logo:
        // 1.   Use a url
        logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",


        /*
           2.   Read from a local file as base64
                logo: fs.readFileSync('logo.png', 'base64'),
           3.   Use a base64 encoded image string
                logo:
                Background:
                The same options apply if you would like to add a background.
                We will not use a background in our sample.
           1.   Use a url
                background: "https://public.easyinvoice.cloud/img/watermark-draft.jpg",
           2.   Read from a local file as base64
                background: fs.readFileSync('images/watermark-draft.jpg', 'base64'),
           3.   Use a base64 encoded image string

         */
    },

    // Let's add some standard invoice data, like invoice number, date and due-date
    "information": {
        // Invoice number
        "number": "2029.0001",
        // Invoice data
        "date": "12-12-2023",
        // Invoice due date
        "due-date": "31-12-2023"
    },

    // Now let's add some products! Calculations will be done automatically for you.
    "products": [
        {
            "quantity": "2",
            "description": "Test1",
            "tax-rate": 6,
            "price": 33.87
        },
        {
            "quantity": "4",
            "description": "Test2",
            "tax-rate": 21,
            "price": 10.45
        }
    ],

    // We will use bottomNotice to add a message of choice to the bottom of our invoice
    "bottomNotice": "Kindly pay your invoice within 15 days.",

    // Here you can customize your invoice dimensions, currency, tax notation, and number formatting based on your locale
    "settings": {
        "currency": "USD", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.

        "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')         
        "tax-notation": "gst", // Defaults to 'vat'
        // Using margin we can regulate how much white space we would like to have from the edges of our invoice
        "margin-top": 25, // Defaults to '25'
        "margin-right": 25, // Defaults to '25'
        "margin-left": 25, // Defaults to '25'
        "margin-bottom": 25, // Defaults to '25'
        "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
        "height": "1000px", // allowed units: mm, cm, in, px
        "width": "500px", // allowed units: mm, cm, in, px
        "orientation": "landscape", // portrait or landscape, defaults to portrait         

    },

    /*
        Last but not least, the translate parameter.
        Used for translating the invoice to your preferred language.
        Defaults to English. Below example is translated to Dutch.
        We will not use translate in this sample to keep our samples readable.
     */
    "translate": {
        /*
         "invoice": "FACTUUR",  // Default to 'INVOICE'
         "number": "Nummer", // Defaults to 'Number'
         "date": "Datum", // Default to 'Date'
         "due-date": "Verloopdatum", // Defaults to 'Due Date'
         "subtotal": "Subtotaal", // Defaults to 'Subtotal'
         "products": "Producten", // Defaults to 'Products'
         "quantity": "Aantal", // Default to 'Quantity'
         "price": "Prijs", // Defaults to 'Price'
         "product-total": "Totaal", // Defaults to 'Total'
         "total": "Totaal" // Defaults to 'Total'        
         */
    },

    /*
        Customize enables you to provide your own templates.
        Please review the documentation for instructions and examples.
        Leave this option blank to use the default template
     */
    "customize": {
        // "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html
    },
};

//  4.    Let's use the EasyInvoice library and call the "createInvoice" function


invoiceBtn.addEventListener("click", function () {
    easyinvoice.createInvoice(data, function (result) {
        /*  
            5.  The 'result' variable will contain our invoice as a base64 encoded PDF
                Now let's save our invoice to our local filesystem so we can have a look!
                We will be using the 'fs' library we imported above for this.
        */
        fs.writeFileSync("../pdf/invoice.pdf", result.pdf, 'base64');

    }).then(function () {
        pdf.setAttribute('src', './assets/pdf/invoice.pdf');
    })
});


