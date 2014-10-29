(function(){
    var viewModel = {
        fields: ko.observableArray([])
    };

    $(".fetch-button").on("click", function(){
        updateView();
    });

    $("#tabs li").on("click", function(){
        updateView();
    })

    function updateView(){
        var productId = $("#content").find(".product-id").val();
        if (productId === "") {
            alert("חמוד אתה");
            return;
        }

        var selectedTab = $('#tabs').find(".ui-tabs-active a").text();
        $.get("/product?source=" + selectedTab + "&productId=" + productId, function (response) {
            viewModel.fields(response);
            $(response).each(function(index, value){
                if(value.name == 'ImageURL'){
                    var imageUrl = value.value;
                    $('#product-image').attr('src', imageUrl);
                }
            });
        });
    }

    ko.applyBindings(viewModel, $("#content")[0]);
    $( "#tabs" ).tabs();
})();
