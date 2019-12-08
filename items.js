
function fetchItemsToDisplay(items, sortParameter, sortOrder, itemPerPage, pageNumber) {
    // var arrayForOrder =
    var newArrayForOrder = [];
    var arraySorted = [];
    var pagedShown = [];
    for(var i =0;i<items.length;i++){
        newArrayForOrder.push(items[i][sortParameter])
    }
    if(sortOrder == 0) arraySorted = newArrayForOrder.sort();
    if(sortOrder == 1) arraySorted = newArrayForOrder.reverse();

    console.log(arraySorted);
    
    var itemStart = itemPerPage * pageNumber;
    var limit = ((itemStart+itemPerPage)-1);
    for(var j = itemStart; j <= limit; j++ ){
        if(arraySorted[j]){
            pagedShown.push(arraySorted[j]);
        }
    }

    console.log(pagedShown);

    // return result;
}


var items = [ 
    ['p1', '1', '2'],
    ['p2', '2', '1'], 
    ['p3', '2', '1'], 
    ['p4', '2', '1'], 
    ['p5', '2', '1'], 
    ['p6', '2', '1'], 
    ['p7', '2', '1']];

const result =  fetchItemsToDisplay( items, 0, 1, 3, 1);

// p1 1 2
// p2 2 1
// 0 
// 0 
// 1 
// 0

// 1,2,3,4,5,6  2
 // 1,1,2,2,3,3
// 6,1,2,3,4,5,6,
// 2
// console.log(result);


// 6,1,1,2,2,3,3
// 1