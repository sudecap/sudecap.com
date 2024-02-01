const SERVICES = [
    {
        ID:1,
        NAME:'BIO CLEAN',
        DESCRIPTION: '',
        IMAGE: './assets/products/BIO_CLEAN.png',
    },
    {
        ID:2,
        NAME:'BIOPOLYMER VIS',
        DESCRIPTION: '',
        IMAGE: './assets/products/BIOPOLYMER_VIS.png',
    },
    {
        ID:3,
        NAME:'BLACK WELL',
        DESCRIPTION: '',
        IMAGE: './assets/products/BLACK_WELL.png',
    },
    {
        ID:4,
        NAME:'DRILL LUBE',
        DESCRIPTION: '',
        IMAGE: './assets/products/DRILL_LUBE.png',
    },
    {
        ID:5,
        NAME:'H&A CONTROL',
        DESCRIPTION: '',
        IMAGE: './assets/products/H&A_CONTROL.png',
    },
    {
        ID:6,
        NAME:'MR GEL PLUG',
        DESCRIPTION: '',
        IMAGE: './assets/products/MR_GEL_PLUG.png',
    },
    {
        ID:7,
        NAME:'MR GEL',
        DESCRIPTION: '',
        IMAGE: './assets/products/MR_GEL.png',
    },
    {
        ID:8,
        NAME:'MR LUBE - 2012',
        DESCRIPTION: '',
        IMAGE: './assets/products/MR_LUBE_2012.png',
    },
    {
        ID:9,
        NAME:'PLOLYMER PLUS RD',
        DESCRIPTION: '',
        IMAGE: './assets/products/PLOLYMER_PLUS_RD.png',
    },
    {
        ID:10,
        NAME:'POLYEXPAND',
        DESCRIPTION: '',
        IMAGE: './assets/products/POLYEXPAND.png',
    },
    {
        ID:11,
        NAME:'POLYMER PAC-R',
        DESCRIPTION: '',
        IMAGE: './assets/products/POLYMER_PAC_R.png',
    },
    {
        ID:12,
        NAME:'ROD FREE SOLIDO',
        DESCRIPTION: '',
        IMAGE: './assets/products/ROD_FREE_SOLIDO.png',
    },
    {
        ID:13,
        NAME:'SUDTROL',
        DESCRIPTION: '',
        IMAGE: './assets/products/SUDTROL.png',
    }
]

$(document).ready(function(){

    // content_products
    let content_products = $('.content_products');
    content_products.empty();

    $.each(SERVICES, function(index, SERVICE) {
        content_products.append(`
        <a class="item_single col-12 col-sm-6 col-md-4" href="https://api.whatsapp.com/send?phone=573103695000&text=Hola%20estoy%20interesado%20en%20eL%20producto%20${SERVICE.NAME}" target="_blank">
        <div class="a">
          <div class="product_content">
            <figure>
              <img
                src=${SERVICE.IMAGE}
                alt="Product">
            </figure>
            <div>
              <span>${SERVICE.NAME}</span>
            </div>
          </div>
        </div>
      </a>
        `);
    });

});