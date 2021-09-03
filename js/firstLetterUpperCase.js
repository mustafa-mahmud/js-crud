function firstLetterUpperCase(value) {
  let text = value;
  text = text.charAt(0).toUpperCase() + text.slice(1);
  return text;
}

export { firstLetterUpperCase };
