$(function(){
    let nav = $.get('http://localhost:5002/include/navbar.html', data=>{
        $(data).insertAfter('#header');
    });
    let footer = $.get('http://localhost:5002/include/footer.html', data=>{
        $(data).insertAfter('#footer');
    });
    $.when(nav, footer).done(()=>{
        $('nav').toggleClass('bg-s bg-dark', window.scrollY > 465);
        $(window).scroll(()=>{
            $('nav').toggleClass('bg-s bg-dark', window.scrollY > 465);
        });
        let get1 = $.get('http://localhost:5002/food/suggestion', (data)=>{
            JSON.parse(data).forEach(v=>{
                $('#suggest').append(cartMaker(v));
            });
        });
        let get2 = $.get('http://localhost:5002/food/fried', (data)=>{
            JSON.parse(data).forEach(v=>{
                $('#fried').append(cartMaker(v));
            });
        });
        $.when(get1, get2).done(()=>{
            $('.card').on('mouseenter', function (){
                $(this).animate({
                    boxShadow: "0px 0px 5px 3px hsla(100, 70%, 60%, 0.8)"
                });
            })
        });
    })
});

const cartMaker = v => {
    return `
            <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div style="background: url('assets/images/${v.image}')" class="card-img card-img-top"></div>
                        <div class="card-body">
                            <h5 class="card-title">${v.name}</h5>
                            <p class="card-text">${v.description}</p>
                            <a href="/food/show/${v.id}" class="btn btn-primary buy"><i class="bi bi-cart-plus"></i></a>
                            ${v.discount ? `<div class="badge badge-pill badge-danger discount">${v.discount}%</div>` : ""}
                        </div>
                    </div>
                </div>
            `;
}