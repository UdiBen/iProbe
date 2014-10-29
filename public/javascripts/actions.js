(function(){
    var viewModel = {
        fields: ko.observableArray([])
    };

    $(".fetch-button").on("click", function(){
        $.get("/product?source=gb&productId="+$(".product-id").val(), function (response) {
            viewModel.fields($.parseJSON(response));
        });
    });

    ko.applyBindings(viewModel, $("#content")[0]);
    $( "#tabs" ).tabs();
})();
