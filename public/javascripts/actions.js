(function(){
    var viewModel = {
        fields: ko.observableArray([]/*[{value:"aaa"}, {value: "bbb"}]*/),
        test: "udi"
    };

    $(".fetch-button").on("click", function(){
        $.get("/product?source=db&productId="+$(".product-id").val(), function (response) {
            viewModel.fields($.parseJSON(response));
        });
    });

    ko.applyBindings(viewModel, $("#content")[0]);
})();
