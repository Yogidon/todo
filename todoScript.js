$(function () {

    let inp = $('#inp');
    let add = $('#add');
    let result = $('#list');

    add.click(function () {

        let val = `
            <li>
            <input class="newinp" type="hidden">
            <span class="elem" onclick="typeChange(this)">${inp.val()}</span>
            <button class="update" onclick="updElem(this)">Update</button>
            <span class="delete" onclick="delElem(this)"><i class="fa fa-close" style="font-size:35px;color:red"></i></span>
        </li>`;

        result.append(val);
        $('.res').show();

    });
    $('.res').hide();

});
// Important : Define Function definations outside $(function(){ .. })  or $.ready

function typeChange(ele) {
    $(ele).prev().attr('type' , 'text');
}

function delElem(ele){
    $(ele).parent().remove();
}

function updElem(ele){
    let prev1 = $(ele).prev();
    let prev2 = $(prev1).prev();
    let valInp = $(prev2).val();
    if(valInp){
        prev1.text(valInp)
    }

    $(prev2).attr('type' , 'hidden');
}

$(inp).keyup(function (e) {
    if(e.keyCode==13){
        $(add).click();
    }
});

