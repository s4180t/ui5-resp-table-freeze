sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";

    return Controller.extend("ui5resptablefreeze.controller.Table", {
        onInit: function () {
            const model = this.getOwnerComponent().getModel();
            model.setProperty("/tableData", [
                {
                    name: "John Doe",
                    age: 30,
                    occupation: "Software Engineer",
                    location: "New York",
                    experience: 8,
                    email: "john.doe@example.com",
                    phone: "123-456-7890",
                },
                {
                    name: "Jane Smith",
                    age: 25,
                    occupation: "Designer",
                    location: "San Francisco",
                    experience: 3,
                    email: "jane.smith@example.com",
                    phone: "987-654-3210",
                },
                {
                    name: "Sam Wilson",
                    age: 35,
                    occupation: "Product Manager",
                    location: "Seattle",
                    experience: 10,
                    email: "sam.wilson@example.com",
                    phone: "456-789-1234",
                },
                {
                    name: "Chris Evans",
                    age: 40,
                    occupation: "Actor",
                    location: "Los Angeles",
                    experience: 20,
                    email: "chris.evans@example.com",
                    phone: "321-654-9870",
                },
                {
                    name: "Scarlett Johansson",
                    age: 36,
                    occupation: "Actress",
                    location: "Los Angeles",
                    experience: 18,
                    email: "scarlett.j@example.com",
                    phone: "654-321-0987",
                },
                {
                    name: "Robert Downey Jr.",
                    age: 50,
                    occupation: "Actor",
                    location: "Los Angeles",
                    experience: 25,
                    email: "robert.d@example.com",
                    phone: "789-123-4567",
                },
                {
                    name: "Natalie Portman",
                    age: 38,
                    occupation: "Actress",
                    location: "Boston",
                    experience: 20,
                    email: "natalie.p@example.com",
                    phone: "987-123-6540",
                },
                {
                    name: "Mark Ruffalo",
                    age: 48,
                    occupation: "Actor",
                    location: "New York",
                    experience: 22,
                    email: "mark.r@example.com",
                    phone: "654-987-3210",
                },
                {
                    name: "Chris Hemsworth",
                    age: 37,
                    occupation: "Actor",
                    location: "Sydney",
                    experience: 15,
                    email: "chris.h@example.com",
                    phone: "321-789-6540",
                },
                {
                    name: "Brie Larson",
                    age: 32,
                    occupation: "Actress",
                    location: "Sacramento",
                    experience: 12,
                    email: "brie.l@example.com",
                    phone: "123-654-7890",
                },
            ]);
            model.setProperty("/columns", [
                { name: "Name" },
                { name: "Age" },
                { name: "Occupation" },
                { name: "Location" },
                { name: "Experience (Years)" },
                { name: "Email" },
                { name: "Phone Number" },
            ]);
        },
    });
});
