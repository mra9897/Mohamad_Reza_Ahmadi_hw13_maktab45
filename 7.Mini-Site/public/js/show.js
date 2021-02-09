$(function(){
    let pathName = window.location.pathname.split('/');
    $.get(`http://localhost:5002/food/read/${pathName[pathName.length-1]}`, data=>{
        console.log('hi')
        let parseData = JSON.parse(data);
        $('#image').attr('src',`http://localhost:5002/assets/images/${parseData.image}`).attr('alt',parseData.name);
        $('#name').text(parseData.name);
        $('#description').text(parseData.description);
        $('#prep').text(parseData.prep);
        $('#cook').text(parseData.cook);
        $('#calories').text(parseData.calories);
        $('#servings').text(parseData.servings);
        $('#price').text(parseData.price);
    });
    let nav = $.get('http://localhost:5002/include/navbar.html', data=>{
        $(data).insertAfter('#header');
    });
    let footer = $.get('http://localhost:5002/include/footer.html', data=>{
        $(data).insertAfter('#footer');
    });
    $.when(nav, footer).done(()=>{
        $('li').removeClass('active');
        let page = window.location.pathname;
        console.log(`li[data-url='${page}']`);
        $(`a[data-url='${page}']`).parent().addClass('active');
        $('nav').toggleClass('bg-s bg-dark');
    });
    $('span i').on('click', function(){
        let id = $(this).attr('id');
        $(this).toggleClass(`bi-${id} bi-${id}-fill`);
        $(this).toggleClass('activeIcon');
    });
    $('#up').on('click', ()=>{
        let count = $('#count');
        count.text(+count.text()+1);
    });
    $('#down').on('click', ()=>{
        let count = $('#count');
        if(count.text() !== "1")
            count.text(+count.text()-1);
    });
});