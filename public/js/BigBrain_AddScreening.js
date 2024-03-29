//Screen Number
function screenNumberError(){
    if($("#screenNumberSubmit").val()=="..."){
        $("#screenNumberSubmit").css("border", "1px solid #B00000");

        $("#screenNumberAlert").html("Screen Number field is required!");
        $("#screenNumberAlert").addClass("alert alert-danger col-8");
    }
}

//Date
function dateError(){
    if($("#dateSubmit").val()==""){
        $("#dateSubmit").css("border", "1px solid #B00000");

        $("#dateAlert").html("Date field is required!");
        $("#dateAlert").addClass("alert alert-danger col-8");
    }
}

//Title
function titleError(){
    if($("#titleSubmit").val()==""){
        $("#titleSubmit").css("border", "1px solid #B00000");

        $("#titleAlert").text("Title field is required!");
        $("#titleAlert").addClass("alert alert-danger col-8");
    }
}

//Desc
function descError(){
    if($("#descSubmit").val()==""){
        $("#descSubmit").css("border", "1px solid #B00000");

        $("#descAlert").text("Description field is required!");
        $("#descAlert").addClass("alert alert-danger col-8");
    }
}

//Rating
function ratingError(){
    if($("#ratingSubmit").val()=="..."){
        $("#ratingSubmit").css("border", "1px solid #B00000");

        $("#ratingAlert").text("Rating field is required!");
        $("#ratingAlert").addClass("alert alert-danger col-8");
    }
}

//Poster
function posterError(){
    if($("#posterSubmit").val()=="..."){
        $("#posterAlert").text("Poster field is required!");
        $("#posterAlert").addClass("alert alert-danger col-8");
    }
}

//Duration
function durationError(){
    if($("#durationSubmit").val()==""){
        $("#durationSubmit").css("border", "1px solid #B00000");

        $("#durationAlert").text("Duration field is required!");
        $("#durationAlert").addClass("alert alert-danger col-8");
    }
}

//Price
function priceError(){
    if($("#priceSubmit").val()==""){
        $("#priceSubmit").css("border", "1px solid #B00000");

        $("#priceAlert").text("Price field is required!");
        $("#priceAlert").addClass("alert alert-danger col-8");
    }
}

//Time1
function time1Error(){
    if($("#timeStartSubmit1").val()==""){
        $("#timeStartSubmit1").css("border", "1px solid #B00000");

        $("#time1Alert").text("Time Slot 1 field is required!");
        $("#time1Alert").addClass("alert alert-danger col-8");
    }
}

//Time2
function time2Error(){
    if($("#timeStartSubmit2").val()==""){
        $("#timeStartSubmit2").css("border", "1px solid #B00000");

        $("#time2Alert").text("Time Slot 2 field is required!");
        $("#time2Alert").addClass("alert alert-danger col-8");
    }
}

//Time3
function time3Error(){
    if($("#timeStartSubmit3").val()==""){
        $("#timeStartSubmit3").css("border", "1px solid #B00000");

        $("#time3Alert").text("Time Slot 3 field is required!");
        $("#time3Alert").addClass("alert alert-danger col-8");
    }
}

//clear input
const clearInput = () => {
    //console.log("Clearing input...")
    $("#screenNumberSubmit").val("")
    $("#dateSubmit").val("")
    $("#titleSubmit").val("")
    $("#descSubmit").val("")
    $("#posterSubmit").val("")
    $("#durationSubmit").val("")
    $("#priceSubmit").val("")
    $("#timeStartSubmit1").val("")
    //$("#timeEndSubmit1").val("")
    $("#timeStartSubmit2").val("") 
    //$("#timeEndSubmit2").val("")
    $("#timeStartSubmit3").val("")
    //$("#timeEndSubmit3").val("")
    $("#ratingSubmit").val("")
}

//submit validation
function checkEmployeeForm() {
    const v1 = !($("#screenNumberSubmit").val()=="...");
    const v2 = !($("#dateSubmit").val()=="");
    const v3 = !($("#titleSubmit").val()=="");
    const v4 = !($("#descSubmit").val()=="");
    const v5 = !($("#posterSubmit").val()=="");
    const v6 = !($("#durationSubmit").val()=="");
    const v7 = !($("#priceSubmit").val()=="");
    const v8 = !($("#timeStartSubmit1").val()=="" || $("#timeEndSubmit1").val()=="");
    const v9 = !($("#timeStartSubmit2").val()=="" || $("#timeEndSubmit2").val()=="");
    const v10 = !($("#timeStartSubmit3").val()=="" || $("#timeEndSubmit3").val()=="");
    const v11 = !($("#ratingSubmit").val()=="");

    const valid = v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8 && v9 && v10 && v11;
/*
    if(valid == true)
        alert("Screen Movie Information Successfully Updated");
*/
    return valid;
}

function getEndTime(start, duration) {
    let end

    let [sHour, sMin] = start.split(":")
    let nHour = parseInt(sHour)
    let nMin = parseInt(sMin)
    let nDur = parseInt(duration)

    nMin = nMin + nDur
    nHour = (nHour + Math.floor(nMin/60)) % 24
    nMin = nMin % 60

    end = nHour.toString() + ":" + nMin.toString()

    return end
}

$(document).ready(function() {

    $.get("filenames", (data, status) => {
        //console.log(data[0].filename)
        data.forEach((item, i) => {
            //console.log("Kenneth")
            //console.log(item[i])
            $('<option/>').val(item.filename).html(item.filename).appendTo('#posterSubmit');
        })
    })

    $("#screenNumberSubmit").focusout(function(){
        if($("#screenNumberSubmit").val()!="..."){
            $("#screenNumberSubmit").css("border", "1px solid #ddd");

            $("#screenNumberAlert").html("");
            $("#screenNumberAlert").removeClass("alert alert-danger col-8");
        }
        else{
            screenNumberError();
        }
    });

    $("#dateSubmit").focusout(function(){
        if($("#dateSubmit").val()!=""){
            $("#dateSubmit").css("border", "1px solid #ddd");

            $("#dateAlert").html("");
            $("#dateAlert").removeClass("alert alert-danger col-8");
        }
        else{
            dateError();
        }
    });

    $("#titleSubmit").focusout(function(){
        if($("#titleSubmit").val()!=""){
            $("#titleSubmit").css("border", "1px solid #ddd");

            $("#titleAlert").html("");
            $("#titleAlert").removeClass("alert alert-danger col-8");
        }
        else{
            titleError();
        }
    });

    $("#descSubmit").focusout(function(){
        if($("#descSubmit").val()!=""){
            $("#descSubmit").css("border", "1px solid #ddd");

            $("#descAlert").html("");
            $("#descAlert").removeClass("alert alert-danger col-8");
        }
        else{
            descError();
        }
    });

    $("#ratingSubmit").focusout(function(){
        if($("#ratingSubmit").val()!="..."){
            $("#ratingSubmit").css("border", "1px solid #ddd");

            $("#ratingAlert").html("");
            $("#ratingAlert").removeClass("alert alert-danger col-8");
        }
        else{
            ratingError();
        }
    });

    $("#posterSubmit").focusout(function(){
        if($("#posterSubmit").val()!="..."){
            $("#posterAlert").html("");
            $("#posterAlert").removeClass("alert alert-danger col-8");
        }
        else{
            posterError();
        }
    });

    $("#durationSubmit").focusout(function(){
        if($("#durationSubmit").val()!=""){
            $("#durationSubmit").css("border", "1px solid #ddd");

            $("#durationAlert").html("");
            $("#durationAlert").removeClass("alert alert-danger col-8");
        }
        else{
            durationError();
        }
    });

    $("#priceSubmit").focusout(function(){
        if($("#priceSubmit").val()!=""){
            $("#priceSubmit").css("border", "1px solid #ddd");

            $("#priceAlert").html("");
            $("#priceAlert").removeClass("alert alert-danger col-8");
        }
        else{
            priceError();
        }
    });

    $("#timeStartSubmit1").focusout(function(){
        if($("#timeStartSubmit1").val()!=""){
            $("#timeStartSubmit1").css("border", "1px solid #ddd");

            $("#time1Alert").html("");
            $("#time1Alert").removeClass("alert alert-danger col-8");
        }
        else{
            time1Error();
        }
    });


    $("#timeStartSubmit2").focusout(function(){
        if($("#timeStartSubmit2").val()!=""){
            $("#timeStartSubmit2").css("border", "1px solid #ddd");

            $("#time2Alert").html("");
            $("#time2Alert").removeClass("alert alert-danger col-8");
        }
        else{
            time2Error();
        }
    });

    $("#timeStartSubmit3").focusout(function(){
        if($("#timeStartSubmit3").val()!=""){
            $("#timeStartSubmit3").css("border", "1px solid #ddd");

            $("#time3Alert").html("");
            $("#time3Alert").removeClass("alert alert-danger col-8");
        }
        else{
            time3Error();
        }
    });

    $("#employeeSubmit").click(function(event){
        event.preventDefault();

        screenNumberError();
        dateError();
        titleError();
        descError();
        posterError();
        priceError();
        durationError();
        time1Error();
        time2Error();
        time3Error();
        ratingError();
        
        if(checkEmployeeForm()/*freeScreen*/ == true)
        {
            let screenNum = $("#screenNumberSubmit").val(); //cast to int
            let date = $("#dateSubmit").val(); //cast to date
            let title = $("#titleSubmit").val();
            let desc = $("#descSubmit").val();
            let poster = $("#posterSubmit").val();
            let price = $("#priceSubmit").val(); //cast to int
            let duration = $("#durationSubmit").val(); //cast to int
            let time1start = $("#timeStartSubmit1").val();
            let time2start = $("#timeStartSubmit2").val();
            let time3start = $("#timeStartSubmit3").val();
            let time1end = getEndTime(time1start, duration) //= $("#timeEndSubmit1").val();
            let time2end = getEndTime(time2start, duration) //= $("#timeEndSubmit2").val();
            let time3end = getEndTime(time3start, duration) //= $("#timeEndSubmit3").val();
            let rating = $("#ratingSubmit").val();

            var screeningInfo = {
                screenNum: parseInt(screenNum),
                date: new Date(date),
                title: title,
                desc: desc,
                poster: poster,
                price: parseFloat(price),
                duration: parseInt(duration),
                time1start: time1start,
                time2start: time2start,
                time3start: time3start,
                time1end: time1end,
                time2end: time2end,
                time3end: time3end,
                rating: rating
            }

            //alert("Screen Movie Information Successfully Updated");
            $('#completeModal').modal({show: true})
            clearInput()

            $.post("addScreening", screeningInfo, function(data, status) {
            
            });
        }
    });
});