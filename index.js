$(document).ready(function(){

let menus = $("div:nth-child(2) .title")
let sub_menus = $("div:nth-child(2) .subtitle")
    

    $.each(sub_menus,function(i,e) {
        $(this).css({ "display": "none" })
    })

    menus.click(function () {

        let ul_element = $(this).children("ul");
        
        if (ul_element.attr("attribute") === "checked") {
            ul_element.attr("attribute", "unchecked");
            ul_element.children(".subtitle").css({ "display": "block" });
            $(this).children(".icon-text").children(".icon").children("i").attr("class","fa-solid fa-caret-down fa-xl")
        }
        else {
            ul_element.attr("attribute", "checked");
            ul_element.children(".subtitle").css({ "display": "none" });
            $(this).children(".icon-text").children(".icon").children("i").attr("class","fa-solid fa-lg fa-caret-right")
        }

    })


    
});
