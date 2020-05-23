$(function(){
    var pics=['url(../images/female-fashion-designer.jpg)','url(../images/girl-painting.jpg)','url(../images/hair-cut.jpg)','url(../images/sketching.jpg)','url(../images/baking.jpg)','url(../images/money.jpg)','url(../images/graduation.jpg)']
    var comment=['are you a fashion designer?','are you a painter?', 'are you a hair stylist?','can you draw?', 'is baking your thing?','make the most of your skill','we are here for you till you graduate'];
    var l=0;
    setInterval(() => {
        $(':root').css('--image',pics[l]);
        $('#frame').text(comment[l]);
        l++;
        if (l==5){
            l=0;
        }
    }, (4000));
})