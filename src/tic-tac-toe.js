class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.playGround = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.playGround[rowIndex][columnIndex] == null) {
            this.playGround[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = (this.currentPlayerSymbol === 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
        return (this.getWinner() !== null || this.isDraw() == true);
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {            
            if ( ( this.playGround[i][0] == this.playGround[i][1] ) 
                && ( this.playGround[i][1] == this.playGround[i][2] )
                && ( this.playGround[i][0] !== null) ) {
                    return this.playGround[i][0]; 
                }
            if ( ( this.playGround[0][i] == this.playGround[1][i] ) 
                && ( this.playGround[1][i] == this.playGround[2][i] )
                && ( this.playGround[0][i] !== null) ) {
                    return this.playGround[0][i];    
            }
        }
        if ( ( ( this.playGround[0][0] == this.playGround[1][1] ) && ( this.playGround[2][2] == this.playGround[1][1] ) ) 
            || ( ( this.playGround[0][2] == this.playGround[1][1] ) && ( this.playGround[2][0] == this.playGround[1][1] ) ) ) {
                if ( this.playGround[1][1] !== null ) {
                    return this.playGround[1][1];
                }
        }    
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.playGround[i][j] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && this.getWinner() == null);
    }

    getFieldValue(rowIndex, colIndex) {
        return this.playGround[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
