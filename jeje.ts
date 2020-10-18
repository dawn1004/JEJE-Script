// 4 b c d e f 9 h  ! j k  l  m  n 0 p q r 5 t  ü v w x y z
const toJejeMon = (word: string): string =>{
    word = word.toLowerCase()
    let splittedWord: Array<string> = word.split("")
    
    splittedWord  = splittedWord.map((letter:string)=>{
        switch (letter){
            case "a": return "4"
            case "g": return "9"
            case "i": return "!"
            case "o": return "0"
            case "s": return "5"
            case "u": return "ü"
        }
    
        if(Math.floor(Math.random() * Math.floor(2))) return letter.toUpperCase()
        else return letter
    })
    
    word = splittedWord.join("")
    return word
}

let sentence: string  = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque est vitae eros efficitur dictum. Nunc posuere commodo rutrum. Mauris odio ligula, iaculis sodales mollis sit amet, interdum nec dui. In lacinia diam id arcu pharetra vestibulum. Quisque at arcu dapibus, sodales augue a, tincidunt lectus. Nullam a aliquet arcu, sed suscipit purus. Vivamus fringilla diam leo, quis hendrerit lacus pharetra ut. Nulla facilisi. In et dapibus diam. Proin sit amet magna mi. Phasellus fringilla consectetur odio. Vestibulum aliquet id diam sit amet varius. Pellentesque varius ligula sit amet arcu porta lobortis. Suspendisse ac cursus augue, ut commodo dui. Morbi dignissim tincidunt arcu nec ultrices. Aliquam hendrerit erat sed tristique posuere. "

console.log(toJejeMon(sentence))


