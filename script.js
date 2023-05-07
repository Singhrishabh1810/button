var index=0;

function Changecolors(){
    var colors=["red","cornflowerblue","black","aqua","orangered","mediumspringgreen","deeppink"

    ];
    document.getElementsByTagName("body")[0].
    style.background= colors[index++];

    if(index > colors.length -1)
    index=0;
}