function response(answer) {
    if (answer === 'yes') {
        // Change the cat image to a dancing cat GIF
        document.getElementById('cat').src = 'dancing_cat.gif';
        // Remove the question container and options
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('options').style.display = 'none';
    } else {
        alert("Maybe next time!");
    }
}

function shiftNo() {
    var noButton = document.querySelector('button:last-child');
    noButton.style.marginLeft = Math.random() * 200 + 'px';
}
