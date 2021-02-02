function myFunction() {
    var added_item_button = document.getElementById('myDropdown');
    var actualDisplay = getComputedStyle(added_item_button).display;
    if (actualDisplay == 'none') {
      added_item_button.style.display = 'block';
    } else {
        added_item_button.style.display = 'none';
    }
}