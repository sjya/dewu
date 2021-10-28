// 点击放大文字
var li_ = document.getElementsByClassName('li1');
// console.log(li_)
touch.on(li_, 'tap', function() {
    this.style.fontSize = '0.1rem'
    this.style.color = 'black'
    this.style.fontWeight = '200'
})
touch.on(li_, 'touchend', function() {
    this.style.fontSize = '2rem'
    this.style.color = 'red'
    this.style.fontWeight = '900'

})

// 轮播图
var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
})



// 点击显示侧边栏
// 找到点击的logo
var right_pic = document.getElementsByClassName('right_pic')[0];
var sidebar_ = document.getElementsByClassName('sidebar')[0];
console.log(sidebar_)
console.log(right_pic)
touch.on(right_pic, 'tap', function() {
        sidebar_.style.right = '0'
    })
    // 点击返回 隐藏侧边栏
var back_ = document.getElementsByClassName('back')[0];
console.log(back_)
touch.on(back_, 'tap', function() {
    sidebar_.style.right = '-41rem'
})

// 定位侧边栏左边商品列表
var sidebarlList;
var listTop;
var listLeft;
// 初始化页面获取列表位置
window.onload = function() {
        sidebarlList = document.getElementsByClassName('sidebar_list')[0];
        console.log(sidebarlList)
        listTop = sidebarlList.offsetTop;
        // console.log(listTop)
        listLeft = sidebarlList.offsetLeft;
        // console.log(listLeft)
    }
    // 页面滚动时
window.onscroll = function() {
    var listScrollLeft = document.documentElement.scrollLeft;
    // console.log(listScrollLeft)
    var listScrollTop = document.documentElement.scrollTop;
    // console.log(listScrollTop)

    sidebarlList.style.left = listLeft + listScrollLeft + 'px';
    sidebarlList.style.top = listTop + listScrollTop + 'px'
}