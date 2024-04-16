// code your solution here

function superbowlWin(record){
    const win = record.find(({result}) => result === "W");
    if (win){
        return win.year 
    } 
    else {
        return undefined
    }
}
