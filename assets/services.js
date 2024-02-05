const SERVICES = [
    {
        ID:1,
        NAME:'BIO CLEAN',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS_BIOCLEAN__(SGA)__.pdf',
        IMAGE: './assets/products/BIO_CLEAN.png',
    },
    {
        ID:2,
        NAME:'BIOPOLYMER VIS',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS_BIO_POLYMER-VIS_(SGA).pdf',
        IMAGE: './assets/products/BIOPOLYMER_VIS.png',
    },
    {
        ID:3,
        NAME:'BLACK WELL',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS_BLACK-WELL__SOLIDO_SUDECAP_Español.pdf',
        IMAGE: './assets/products/BLACK_WELL.png',
    },
    {
        ID:4,
        NAME:'DRILL LUBE',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS__DRILL_LUBE_(SGA)_.pdf',
        IMAGE: './assets/products/DRILL_LUBE.png',
    },
    {
        ID:5,
        NAME:'H&A CONTROL',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS_H&A_CONTROL_(SGA)_.pdf',
        IMAGE: './assets/products/H&A_CONTROL.png',
    },
    {
        ID:6,
        NAME:'MR GEL PLUG',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS_MR_GEL__PLUG__3.8_(SGA)_.pdf',
        IMAGE: './assets/products/MR_GEL_PLUG.png',
    },
    {
        ID:7,
        NAME:'MR GEL',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS_MR_GEL_(SGA)_.pdf',
        IMAGE: './assets/products/MR_GEL.png',
    },
    {
        ID:8,
        NAME:'MR LUBE - 2012',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS_MR_LUBE_20-12(SGA)_.pdf',
        IMAGE: './assets/products/MR_LUBE_2012.png',
    },
    {
        ID:9,
        NAME:'PLOLYMER PLUS RD',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS_POLYMER-PLUS_RD_(SGA).pdf',
        IMAGE: './assets/products/PLOLYMER_PLUS_RD.png',
    },
    {
        ID:10,
        NAME:'POLYEXPAND',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS_POLYEXPAND_(SGA)_.pdf',
        IMAGE: './assets/products/POLYEXPAND.png',
    },
    {
        ID:11,
        NAME:'POLYMER PAC-R',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS_POLYMER-PAC_R_(SGA).pdf',
        IMAGE: './assets/products/POLYMER_PAC_R.png',
    },
    {
        ID:12,
        NAME:'ROD FREE SOLIDO',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS_ROD_FREE_(SGA)_.pdf',
        IMAGE: './assets/products/ROD_FREE_SOLIDO.png',
    },
    {
        ID:13,
        NAME:'SUDTROL',
        DESCRIPTION: '',
        FILE:'./assets/docs/MSDS_SUDTROL_(SGA)_.pdf',
        IMAGE: './assets/products/SUDTROL.png',
    }
]

$(document).ready(function(){

    // content_products
    let content_products = $('.content_products');
    content_products.empty();
    $.each(SERVICES, function(index, SERVICE) {
        content_products.append(`
        <div class="item_single col-12 col-sm-6 col-md-4"  target="_blank">
          <div class="a">
            <div class="product_content">
              <figure>
                <!-- src='https://sudecap.com/assets/products/BIOPOLYMER_VIS.png' -->
                <img
                  src=${SERVICE.IMAGE}
                  alt="Product">
              </figure>
              <div>
                <span class="name_product">${SERVICE.NAME}</span>
              </div>
              <a class="button_write_us" target="_blank" href="https://api.whatsapp.com/send?phone=573103695000&text=Hola%20estoy%20interesado%20en%20eL%20producto%20${SERVICE.NAME}">
                  Cotizar
              </a>
              <a class="view_file" target="_blank" href="${SERVICE.FILE}">
                  Hoja de seguridad
              </a>
            </div>
          </div>
        </div>
        `);
    });

});