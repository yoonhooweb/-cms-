$(document).ready(function(){
    let menuCheckli = $(".gnb .depth1");
    let menuCheck = $(".gnb")
    $(menuCheckli).bind({"mouseover" : function(){
        if (!menuCheck.hasClass("active")) {
            $(menuCheck).addClass("active");
        }
        }, "mouseleave" :  function (){
            if (menuCheck.hasClass("active")) {
                $(menuCheck).removeClass("active");
            }
        }
    });

    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('active');
		$('.tab-contents').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

    $("#stDate,#endDate").datepicker({
        dateFormat: 'yy-mm-dd'
        ,showOtherMonths: true
        ,showMonthAfterYear:true
        ,dayNamesMin: ['일','월','화','수','목','금','토']
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    });

});

function arrowRotate(){
    let rotate = document.querySelector(".userArrow");
    let userInfo = document.querySelector(".userInfo");
    rotate.classList.toggle("active");
    if (rotate.classList.contains("active")) {
        userInfo.style.height = "200px";
        userInfo.style.display = "block";
    } else {
        userInfo.style.height = "0px";
        userInfo.style.display = "none";
    }
}

(function () {
    let modalopen = document.querySelector(".modal");
    let modalWrap = document.querySelector("#modal");
    modalopen.addEventListener("click", function(e){
        e.preventDefault();
        modalWrap.style.display = "block";
    });

    let modal = document.querySelector("#modal");
    let close = document.querySelector(".modal-close");
    close.addEventListener("click", function(e){
        e.preventDefault();
        modal.style.display = "none";
    });

    let sideBt = document.querySelector(".side li a");
    sideBt.addEventListener("click", function(e){
        /* if (sideBt.classList.contains("active")) {
            sideBt.classList.remove("active");
        } else {
            sideBt.classList.add("active");
        } */
        e.preventDefault();
        sideBt.classList.toggle("active");
    })

    let tableRow = document.querySelector(".addRow");
    let lastRow = document.querySelector(".table-detail tbody tr:last-child");
    tableRow.addEventListener("click", function(){
        lastRow.after("<tr><th>추가된로우tr</th><td>추가된로우td</td></tr>");
    })
})();
