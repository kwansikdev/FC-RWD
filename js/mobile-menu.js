var viewport = window.matchMedia('(max-width: 999px)');
var items = $('.menu-item');

$(window).resize(function() {
  location.reload();
});

if(viewport.matches) {
  var nav = $('.navigation');
  var btn = $('.btn-menubar');
  var menu = $('.menu');
  var lists = $('.menu-list');
  
  items.addClass('icon-plus');
  items.attr('role', 'button');
  items.attr('aria-haspopup', 'true');
  items.attr('aria-expanded', 'false');
  items.attr('aria-pressed', 'false');
  
  btn.on('click', function(e) {
    e.preventDefault();
    nav.toggleClass('nav-act');
    if(nav.hasClass('nav-act')){
      btn.attr('aria-label', '메인메뉴 닫기');
    }else {
      btn.attr('aria-label', '메인메뉴 열기');
    };
  });

  items.on('click', function(){
    lists.removeClass('menu-act');
    $(this).parent().addClass('menu-act');
    if(lists.hasClass('menu-act')) {
      items.removeClass('icon-minus').addClass('icon-plus');
      items.attr('aria-expended', 'false').attr('aria-pressed', 'false')
      $(this).addClass('icon-minus').removeClass('icon-plus');
      $(this).attr('aria-expended', 'true').attr('aria-pressed', 'true');
    }
  });

  menu.on('focusin', function() {
    nav.addClass('nav-act');
  })
  menu.on('focusout', function() {
    nav.removeClass('nav-act');
  })
}else {
  var bar = $('.bar');

  items.attr('role', 'presentation');
  bar.attr('aria-hidden', 'true');
}


// 버튼을 클릭했을 때 내비게이션 요소에 nav-act 클래스를 추가한다.
