class MyStack {
    constructor(maxSize) {
        this.undoStack = []
        this.redoStack = []
        this.undoSize = 0
        this.last = -1
        this.maxSize = maxSize
    }

    action(value) {
        this.redoStack = []
        this.undoStack.push(this.last) // push last action applied
        this.last = value // change last action to be the current one
        this.undoSize++
        if(this.undoSize > this.maxSize) {
            this.undoStack.splice(0, 1) // delete oldest entry if max reached
            this.undoSize--
        }
    }

    undo() {
        if(this.undoSize > 0) {
            this.redoStack.push(this.last)
            this.last = this.undoStack.pop() // get previous action
            this.undoSize--
            return this.last
        } else {
            throw new Error("Empty undoStack")
        }
    }

    redo() {
        if(this.redoStack.length > 0) {
            this.undoStack.push(this.last)
            this.last = this.redoStack.pop()
            this.undoSize++
            if(this.undoSize > this.maxSize) {
                this.undoStack.splice(0, 1) // delete oldest entry if max reached
                this.undoSize--
            }
            return this.last
        } else {
            throw new Error("Empty redoStack")
        }
    }

}