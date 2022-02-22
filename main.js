const button = document.querySelector("#button")


button.addEventListener('click', function(event) {
    this.classList.toggle('active_button')
})