const SERVICES = [
    {
        ID:1,
        NAME: 'BIO - CLEAN',
        DESCRIPTION: '',
        IMAGE: './assets/products/1.png',
    },
    {
        ID:2,
        NAME: 'BIOPOLYMER - VIS',
        DESCRIPTION: '',
        IMAGE: './assets/products/2.png',
    },
    {
        ID:3,
        NAME: 'SUDTROL',
        DESCRIPTION: '',
        IMAGE: './assets/products/3.png',
    },
    {
        ID:4,
        NAME: 'H & A CONTROL',
        DESCRIPTION: '',
        IMAGE: './assets/products/4.png',
    },
    {
        ID:5,
        NAME: 'POLYMER PAC - R',
        DESCRIPTION: '',
        IMAGE: './assets/products/5.png',
    },
    {
        ID:6,
        NAME: 'MY LUBE 2012',
        DESCRIPTION: '',
        IMAGE: './assets/products/6.png',
    },
    {
        ID:7,
        NAME: 'ROD FREE',
        DESCRIPTION: '',
        IMAGE: './assets/products/7.png',
    },
    {
        ID:8,
        NAME: 'ROD FREE SOLIDO ',
        DESCRIPTION: '',
        IMAGE: './assets/products/8.png',
    },
    {
        ID:9,
        NAME: 'MR GEL PLUG 3/8',
        DESCRIPTION: '',
        IMAGE: './assets/products/9.png',
    },
    {
        ID:10,
        NAME: 'POLYEXPAND',
        DESCRIPTION: '',
        IMAGE: './assets/products/10.png',
    },
    {
        ID:11,
        NAME: 'BLACK WELL',
        DESCRIPTION: '',
        IMAGE: './assets/products/11.png',
    },
    {
        ID:12,
        NAME: 'DRILL LUBE',
        DESCRIPTION: '',
        IMAGE: './assets/products/12.png',
    },
    {
        ID:13,
        NAME: 'POLYMER PLUS RD',
        DESCRIPTION: '',
        IMAGE: './assets/products/13.png',
    },
    {
        ID:14,
        NAME: 'MR GER',
        DESCRIPTION: '',
        IMAGE: './assets/products/14.png',
    },
]

$(document).ready(function(){

    // content_products
    let content_products = $('.content_products');
    content_products.empty();

    $.each(SERVICES, function(index, SERVICE) {
        content_products.append(`
            <a class="col-4" href="https://api.whatsapp.com/send?phone=573103695000" target="_blank">
                <div class="product">
                    <div class="main-data">
                    <figure>
                        <img src="${SERVICE.IMAGE}" alt="Product Image 1">
                    </figure>
                    <div class="data" style="text-align: center; margin-top:5px;">
                        <h3><a href="#" style="text-align: center;">${SERVICE.NAME}</a></h3>
                        <div class="price-range">
                        </div>
                    </div>
                    </div>
                </div>
            </a>
        `);
    });

});