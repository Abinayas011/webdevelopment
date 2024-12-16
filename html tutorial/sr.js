document.addEventListener("DOMContentLoaded", function () {
    var popover = document.querySelector(".pop-over");
    var popbox = document.querySelector(".pop-box");
    var addpubotton = document.getElementById("popup");
    var cancel = document.getElementById("cancel-event");
    var container = document.querySelector(".container");
    var addbook = document.getElementById("add-event");
    var companytitle = document.getElementById("company-title"); // Fixed typo
    var eventtitle = document.getElementById("event-title");
    var eventtype = document.getElementById("event-type");
    var description = document.getElementById("description");



    // Show popup when the "+" button is clicked
    if (addpubotton) {
        addpubotton.addEventListener("click", function () {
            popover.style.display = "block";
            popbox.style.display = "block";
        });
    }

    // Cancel popup
    if (cancel) {
        cancel.addEventListener("click", function (event) {
            event.preventDefault();
            popover.style.display = "none";
            popbox.style.display = "none";
        });
    }

    // Add book event
    if (addbook) {
        addbook.addEventListener("click", function (event) {
            event.preventDefault();
            var div = document.createElement("div");
            div.setAttribute("class", "book");
            div.innerHTML = `
                <h2>${companytitle.value}</h2>
                <h4>${eventtitle.value}</h4>
                <h4>${eventtype.value}</h4>
                <p>${description.value}</p>
                <button onclick="deletebook(event)">Delete</button>`;
            container.append(div);

            // Clear the popup and hide it
            companytitle.value = "";
            eventtitle.value = "";
            eventtype.value = "";
            description.value = "";
            popover.style.display = "none";
            popbox.style.display = "none";
        });
    }


    // Delete book function
    window.deletebook = function (event) {
       event.target.parentElement.remove();
    };
});
