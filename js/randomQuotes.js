function generateRandomQuote() {
	var quotes = [
    ["One's destination is never a place but rather a new way of looking at things.", "Henry Miller"],
    ["Without new experiences, something inside us sleeps. The sleeper must awaken.", "Frank Herbert"],
    ["Like all great travellers, I have seen more than I remember, and remember more than I have seen.", "Benjamin Disraeli"]
    ].sort(function() {
    	return 0.5 - Math.random();
    });

    return "<p>&ldquo;" + quotes[0][0] + "&rdquo; &mdash; <em>" + quotes[0][1] + "</em></p>";
}

document.getElementById("quotes").innerHTML = generateRandomQuote();