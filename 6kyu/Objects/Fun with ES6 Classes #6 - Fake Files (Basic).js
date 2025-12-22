class File {
  constructor(fullName, contents){
    let fileIndex = fullName.lastIndexOf(".")

    this._fullName = fullName
    this._filename = fullName.slice(0, fileIndex)
    this._extension = fullName.slice(fileIndex + 1)
    this.contents = contents

    this.lineIndex = 0
    this.charIndex = 0
  }

  get fullName() {
    return this._fullName
  }

  get filename() {
    return this._filename
  }

  get extension() {
    return this._extension
  }

  getContents(){
    return this.contents
  }

  write(str){
    if (this.contents.length === 0) {
      this.contents = str
    } else {
      this.contents += "\n" + str
    }
  }

  gets(){
    let lines = this.contents.split("\n")
    if (this.lineIndex >= lines.length) return undefined
    return lines[this.lineIndex++]
  }

  getc(){
    if (this.charIndex >= this.contents.length) return undefined
    return this.contents[this.charIndex++]
  }
}

//Learned: practiced creating inside classes and methods, you can use logic and variables js code in constructors, and grab data from constructors to be used in methods.
