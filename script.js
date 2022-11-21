var index = 0;

function changecolor(){
    var color = ["red", 'blue', 'pink', 'purple', 'orange', 'green']

    document.getElementsByClassName("container")[0].style.background = color[index++]
    if(index > color.length - 1)
    index = 0

}


