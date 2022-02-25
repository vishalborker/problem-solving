
$("document").ready(function () {
    let selectCount = 3;
    const selectValues = {};
    $("#edit-sizes").change(function () {
       const val = $("#edit-sizes").val();
       console.log($("#edit-sizes").val());
       selectValues[val] = val;
       console.log(selectValues);
       
       for(let i = 0; i <= selectCount; i++) {
           if ($(`#data_${i}`)) {
              $(`#data_${i}`).append(`<option value=${val}>${val}</option>`);
           }
       }
    });
    // console.log('we are here');

    function populateDropdown(){
        // alert('here');
        const selectList = document.createElement("select");
        selectList.id = `data_${selectCount}`;

        const SelectValueOption = document.createElement("option");
        SelectValueOption.value = 0;
        SelectValueOption.text = 'Select';

        selectList.appendChild(SelectValueOption);
        Object.keys(selectValues).forEach((value, index) => {
            console.log(value);
            const option = document.createElement("option");
            option.value = value;
            option.text = selectValues[value];
            selectList.appendChild(option);
        });
        document.body.appendChild(selectList);
        selectCount++;
    }

    $('#addBtn').click(function() {
        populateDropdown();
    });

});


