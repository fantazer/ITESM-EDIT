$(document).ready(function(){var t=function(t,o){$(t).click(function(t){t.stopPropagation(),$(o).slideToggle()}),$(o).on("click",function(t){t.stopPropagation()}),$(document).on("click",function(){$(o).hide()})};$(".left-col > ul > li").click(function(){$(this).find(".left-col-sub").slideToggle(),$(this).toggleClass("left-col-sub-active")}),t(".header-prof-img",".header-prof-sub-wrap"),t(".table-prior",".table-prior-wraper"),t(".col-content .icon-Information",".infomation-block"),$(".filter-sub").click(function(){$(this).find(".filter-sub-wrap").slideToggle(),$(this).toggleClass("filter-sub-active")}),$(".select").niceSelect(),$(".table-progress-val").each(function(){var t=$(this).data("progress");$(this).css("width",t+"%"),30>t&&t>0&&$(this).css("background-color","#00B8DF"),50>t&&t>30&&$(this).css("background-color","#00CE74"),t>70&&$(this).css("background-color","#E1523E")}),$(".top-row-button .icon-btn").click(function(){$(".top-row-button .icon-btn").removeClass("icon-btn-active"),$(this).addClass("icon-btn-active")}),$(".top-row-button .icon-Filter").click(function(){$(".data-table-title").toggleClass("data-table-title-change")}),$(".data-table-title").click(function(){$(this).toggleClass("data-table-title-active")}),$(".get-rangeslider").click(function(){$(".range-slider").toggleClass("hidden")}),$(".title-toggle-hide").click(function(){$(this).next(".col-content").slideToggle()}),$(".input-row").click(function(){$(this).find("span").toggleClass("text-red")});var o=document.getElementById("rangeSlider");o&&noUiSlider.create(o,{start:[0,100],connect:!0,step:10,orientation:"vertical",range:{min:0,max:100},pips:{mode:"steps",density:4}}),$(".get-modal").click(function(){$(".modal").bPopup({closeClass:"modal-close",position:["auto","auto"],follow:[!0,!1]})}),$(".get-modal").click();var i=0;$(".modal-content-coner").each(function(){i+=59,$(this).css("left",i+"px")}),$(".modal-head .icon-btn").click(function(){var t=$(this).data("modalicon");$(".modal-content").each(function(){$(this).addClass("hidden");var o=$(this).data("modalcontetn");t===o&&$(this).removeClass("hidden")})}),$(".scroll").mCustomScrollbar(),$(".get-datapicker").datepicker({language:"ru",orientation:" bottom"}),$(".input-date").on("changeDate",function(t){$(this).datepicker("hide")})});