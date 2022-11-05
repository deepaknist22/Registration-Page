function myFunc(course1,place1)
{
    var course1 = document.getElementById(course1);
    var place1 = document.getElementById(place1);

    place1.innerHTML = "";

    if(course1.value == "capsule_course_2023"){
        var optionArray = ['gs road|GS Road'];
    }
    else if(course1.value == "lalans_all_india_test_series"){
        var optionArray = ['gs road|GS Road'];
    }
    for(var option in optionArray)
    {
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML=pair[1];
        place1.options.add(newoption);
    }
}

