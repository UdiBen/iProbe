function foo (value, level) {
    try {
        if (value.indexOf('{') >= 0) {
            value = value.substr(value.indexOf('{') + 1, value.lastIndexOf('}') - 1);
            var items = value.split(',');
            var table = '';

            $.each(items, function(i, val){
                table += '<div>';
                    table += val ;
                table += '</div>';
            });

            return table;
        }
    }
    catch(err) {
        return value;
    }
    return value;
}

(function(){

    var viewModel = {
        fields: ko.observableArray([])
    };

    $(".fetch-button").on("click", function(){
        updateView();
    });

    $("#tabs li").on("click", function(){
        updateView();
    });

    function updateView(){
        var productId = $("#content").find(".product-id").val();
        if (productId === "") {
            alert("חמוד אתה");
            return;
        }

        var selectedTab = $('#tabs').find(".ui-tabs-active a").text();
        $.get("/product?source=" + selectedTab + "&productId=" + productId, function (response) {
            viewModel.fields(response);
        });

        $.get("/product?source=DB&productId=" + productId, function (response) {
            $('.product-info').removeClass('hidden');
            $(response).each(function(index, value){
                switch (value.name) {
                    case "ImageURL":
                        $('#product-image').attr('src', value.value);
                        break;
                    case "Name":
                        $('#product-name').text(value.value);
                        break;
                    case "ExternalProductId":
                        $('#external-product-id').text(value.value);
                        break;
                    case "SourceID":
                        $('#source-id').text(value.value);
                        break;

                }
            });
        });

    }

    ko.applyBindings(viewModel, $("#content")[0]);
    $( "#tabs" ).tabs();
})();
