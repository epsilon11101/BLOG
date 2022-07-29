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

    // let image_overlay = $("#grid .grid-element");
    // let title = $("#welcome_text");
    // let subtitle = $("#welcome_text_sub");
    
    // image_overlay.mouseover(function () {
    //     let figure = $(this).children("figure")
    //     let image_overlay = figure.children("div.image_overlay");
    //     let image_title = image_overlay.children("div.image_title").children("p");
    //     let image_subtitle = image_title.attr("description");

    //     image_overlay.css({ "top": "80%", "height": "20%" });
    //     title.text(image_title.html())
    //     subtitle.text(image_subtitle)
    // })
