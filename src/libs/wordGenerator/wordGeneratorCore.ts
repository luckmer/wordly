import words from "@json/words.json";

export  class WordGeneratorCore {
  randomWord = "";

  returnRandomWord = () => {
    const wordIndex = Math.floor(Math.random() * words.length);
    return words[wordIndex];
  };

  generateRandomWord = () => {
    this.randomWord = this.returnRandomWord();
    return  this.randomWord
  };
}
