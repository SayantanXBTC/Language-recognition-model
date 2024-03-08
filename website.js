document.getElementById('recognizeButton').addEventListener('click', () => {
    const text = document.getElementById('textInput').value;
    const language = detectLanguage(text);
    document.getElementById('result').textContent = language;
});

function detectLanguage(text) {
    const languageMap = {
        'en': 'This is English commonly spoken in UK,USA and Canada',
        'es': 'This is Spanish spoken in Spain,so the place you are looking for is probably Spain',
        'fr': 'This is French commonly spoken in France,so the place you are looking for is probably France',
        'de': 'This is German commonly spoken in Germany,so the place is Germany',
        'hi': 'This is Hindi commonly spoken in India,so the place is India',
        'zh': 'This is Chinese Mandarin,so the place is China',
    };
    const words = text.split(/\s+/);
    const spanishWords = ['hola', 'adiós', 'gracias', 'por favor','esto es en espanol'];
    if (words.some(word => spanishWords.includes(word.toLowerCase()))) {
        return languageMap['es'];
    }
    const frenchWords = ['bonjour', 'au revoir', 'merci', 's\'il vous plaît','cest en francias'];
    if (words.some(word => frenchWords.includes(word.toLowerCase()))) {
        return languageMap['fr'];
    }
    const germanWords = ['hallo', 'auf wiedersehen', 'danke', 'bitte','das ist auf deutsch'];
    if (words.some(word => germanWords.includes(word.toLowerCase()))) {
        return languageMap['de'];
    }
    const englishWords = ['hello', 'goodbye', 'thank you', 'please','this is in english'];
    if (words.some(word => englishWords.includes(word.toLowerCase()))) {
        return languageMap['en'];
    }
    const hindiWords= ['namaste','kya haal','aur bhai','fir milte hai','maaf karo bhai','ye hackathon hum jitne chahiye'];
    if (words.some(word => hindiWords.includes(word.toLowerCase()))){
        return languageMap['hi'];
    }
    const chineseWords=['你好','早上好','再见'];
    if (words.some(word => chineseWords.includes(word.toLowerCase()))){
        return languageMap['zh'];
    }

    return 'This is Alien Language,we dont recognize it!!!';
}

