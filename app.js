
$(document).ready(function () {
    var mainArr = [];
    var totalArr = [];
    var count=0;

    $(".apSub").click(function () {
        var n1 = $(".pName").val();
        var p1 = $(".pPrice").val();
        var q1 = $(".pQuantity").val();
        var inputValue = { name: n1, price: p1, quan: q1 };
        if (inputValue) {
            addToArray(inputValue);
        }
        $("input[type='text']").val("");
        $("input[type='number']").val("");
    });

    function addToArray(inputValue) {
        totalArr.push(inputValue);
        $(".tItems").text(totalArr.length);
        mainArr.push(inputValue);
        display(mainArr);
        $(".isItems").text(mainArr.length);
    }

    function display(array) {
        $("#prods tbody").empty();
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            var row = "<tr> <td>" + item.name + "</td> <td>" + item.price + "</td> <td>" + item.quan + "</td> </tr>";
            $("#prods tbody").append(row);
        }
    }

    $(".spSub").click(function () {
        var sname=$(".pName1").val();
        var squan=$(".pQuantity1").val();
        removeItem(sname, squan);
        $("input[type='text']").val("");
        $("input[type='number']").val("");
    });

    function removeItem(name, quantity) {
        var indexToRemove = -1;
        for(var i=0; i<mainArr.length; i++){
            var item = mainArr[i];
            if (item.name == name && item.quan == quantity) {
                indexToRemove = i;
                break;
            }
        }
        if (indexToRemove !== -1) {
            count++;
            $(".sItems").text(count);
            mainArr.splice(indexToRemove, 1);
            display(mainArr);
            $(".isItems").text(mainArr.length);
        }
    }

    $(".sicon").click(function(){
        
        var count=-1;
        for(var i=0; i<mainArr.length; i++){
            var item = mainArr[i];
            var name= $(".ss").val();
            if (item.name == name) {
                count = i;
                break;
            }
        }
        console.log(count)
        $("#prods tbody").empty();
        item = mainArr[count];
        var row = "<tr> <td>" + item.name + "</td> <td>" + item.price + "</td> <td>" + item.quan + "</td> </tr>";
        $("#prods tbody").append(row);
    })
    
});
