function speakMe(text) {
  const speech = window.speechSynthesis;
  const voice = new SpeechSynthesisUtterance(text);

  speech.speak(voice);
}

export default speakMe;
