const ParaGenerator = (number) => {
    const words = [
        "Elephant",
        "Sparkle",
        "Whisper",
        "Galaxy",
        "Mysterious",
        "Umbrella",
        "Cascade",
        "Enigma",
        "Lantern",
        "Squirrel",
        "Melody",
        "Breeze",
        "Prism",
        "Puddle",
        "Journey",
        "Horizon",
        "Whispering",
        "Twinkle",
        "Serendipity",
        "Adventure"
      ];
  
  
    let sentence = "";
  
    for(let i = 0; i<number; i++){
        const randomIndex = Math.floor(Math.random()*words.length)
        sentence = sentence + ` ${words[randomIndex]}`
  
    }
  
  
    return sentence
  
  
  
  
  }

  export default ParaGenerator;