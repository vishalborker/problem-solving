



var appendChildChangeEvent = function(index) {
    selected = [];
    
    for (child in parent) {
        child = 'parent-id-${index}-child'
        document.getElementById(id).addEventListener('change', function(e) {
            const konsaChild = e.target.id;
            console.log(parentSlected);
            appendChildChangeEvent(parentId, index);
        });
    }
}


for(i=0; i < 4; i++) {
    id = `parentId-najdjsbf-${i}-kjsndjbsf`;
    const element =  document.getElementById(id);
    if (element) {
        document.getElementById(id).addEventListener('change', function(e) {
            const konsa = e.target.id;
            console.log(parentSlected);
    
            appendChildChangeEvent(parentId, index);
        });
    }


    $(id).change(function(){

    });
}

// parentSelected(index) {
    
// }

<select onchange="childSelected(parent, childIndex)") />
<select onchange="childSelected(parent, childIndex)")>