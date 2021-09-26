let texBox = document.getElementById("textbox");
texBox.addEventListener('input', function () {
    // To write in the textarea
    var text = this.value;

    // To get the length of the character
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    // To remove the white space at the first and at the last
    text = text.trim();

    // To get the no. of the words
    let words = text.split(" ");

    // To remove the white space between the paragraph
    let cleanList = words.filter(function (elm) {
        return elm != "";
    })
    document.getElementById("word").innerHTML = cleanList.length;
});