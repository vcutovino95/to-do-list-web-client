window.ToDoList = {

    apiUrl: "http://localhost:8070/to-do-items",

    addItem: function () {

        var description = $("input[title='Description']").val();
        var deadline = $("input[title='Deadline']").val();

        var data = {

            'description': description,
            'deadline': deadline
        };

        $.ajax({

            url: ToDoList.apiUrl,
            method: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data)

        }.done(function (response) {


            // reload items table

            console.log(response)
        }))
    },
    bindEvents: function () {
        $("#to-do-items").submit(function (event) {
            event.preventDefault();
            ToDoList.addItem();

            return false;

        })
    }
};

ToDoList.bindEvents();


