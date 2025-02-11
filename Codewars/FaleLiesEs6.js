class File {
    constructor(fullName, contents) {
      this._fullName = fullName;
      this._contents = contents;
      this._lines = contents.split("\n");
      this._currentLine = 0;
      this._currentChar = 0;
  
      // Extract filename and extension safely
      let lastDotIndex = fullName.lastIndexOf(".");
      if (lastDotIndex > 0) { // Ensuring it's not the first character
        this._filename = fullName.substring(0, lastDotIndex);
        this._extension = fullName.substring(lastDotIndex + 1);
      } else {
        this._filename = fullName; // No extension found
        this._extension = "";
      }
    }
  
    // Read-only properties
    get fullName() {
      return this._fullName;
    }
  
    get filename() {
      return this._filename;
    }
  
    get extension() {
      return this._extension;
    }
  
    // Methods
    getContents() {
      return this._contents;
    }
  
    write(str) {
      if (this._contents.length > 0) {
        this._contents += `\n${str}`;
      } else {
        this._contents = str;
      }
      this._lines = this._contents.split("\n"); // Update lines after writing
    }
  
    gets() {
      if (this._currentLine < this._lines.length) {
        return this._lines[this._currentLine++];
      }
      return undefined;
    }
  
    getc() {
      if (this._currentChar < this._contents.length) {
        return this._contents[this._currentChar++];
      }
      return undefined; // Explicitly return undefined when no more characters
    }
  }
  