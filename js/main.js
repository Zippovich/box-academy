$(function() {
    $("#tS2").thumbnailScroller({
        scrollerType: "clickButtons",
        scrollerOrientation: "horizontal",
        scrollSpeed: 2,
        scrollEasing: "easeOutCirc",
        scrollEasingAmount: 600,
        acceleration: 4,
        scrollSpeed: 800,
        noScrollCenterSpace: 10,
        autoScrolling: 0,
        autoScrollingSpeed: 2000,
        autoScrollingEasing: "easeInOutQuad",
        autoScrollingDelay: 500
    });
    
    $('.columns').each(function(index, item) {
        if ($('aside', $(item)).height() < $('article', $(item)).height()) {
            $('aside', $(item)).height($('article', $(item)).height());
        }
    });
});