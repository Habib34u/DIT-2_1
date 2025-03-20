
document.getElementById("form1").addEventListener("submit", function(Event) {
    Event.preventDefault(); // prevent page reload
    const formData = new FormData(this);
    for (const[name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
    }
});