const SERVICES = [
    {
        ID:1,
        NAME:'BIO CLEAN',
        DESCRIPTION: 'El Bactericida es efectivopara una gama amplia debacterias incluyendo aerobias y anaerobias su fórmula es a base de Biocidas conun fuerte poder bactericida,alguicida y fungicida.',
        SECURITY_SHEET:'./assets/docs/MSDS_BIOCLEAN__(SGA)__.pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_BACTERICIDA__-_BIO_CLEAN.pdf',
        IMAGE: './assets/products/BIO_CLEAN.png',
    },
    {
        ID:2,
        NAME:'BIOPOLYMER VIS',
        DESCRIPTION: 'EI BIOPOLYMERCVIS, es un Biopolímero tipo goma xantana, (Xanthan Gum) dispersable en agua fácilmente. El producto BIOPOLYMER-VIS se usa como agente de suspensión, por su alta propiedad TIXOTROPICA.',
        SECURITY_SHEET:'./assets/docs/MSDS_BIO_POLYMER-VIS_(SGA).pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_BIOPOLYMER_-_VIS.pdf',
        IMAGE: './assets/products/BIOPOLYMER_VIS.png',
    },
    {
        ID:3,
        NAME:'BLACK WELL',
        DESCRIPTION: 'Poseé una composición exclusiva, diseñado para mejorar la estabilidad del pozo y pérdida de filtrado en condiciones de presión y temperatura elevadas, por lo tanto es utilizado en una amplia gama de operaciones de perforación',
        SECURITY_SHEET:'./assets/docs/MSDS_BLACK-WELL__SOLIDO_SUDECAP_Español.pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_BLACK_WELL_SOLIDO_SUDECAP_2015.pdf',
        IMAGE: './assets/products/BLACK_WELL.png',
    },
    {
        ID:4,
        NAME:'DRILL LUBE',
        DESCRIPTION: 'Es un producto tipo Lubricante diseñado para mejorar la velocidad de penetración en fluidos de perforación base agua, especialmente donde se utilizan barrenas compactas de diamante policristalino (PDC) y agente humectante al perforar formaciones problemáticas SUDECAP',
        SECURITY_SHEET:'./assets/docs/MSDS__DRILL_LUBE_(SGA)_.pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_DRILL_LUBE.pdf',
        IMAGE: './assets/products/DRILL_LUBE.png',
    },
    {
        ID:5,
        NAME:'H&A CONTROL',
        DESCRIPTION: 'Es un producto diseñado para controlar en pH y dureza en el agua, no excede el rango del pH 8-10 ideal para el fluido, Este producto ayudaa mejorar las condiciones del agua para mejorar el rendimiento de los demás aditivos.',
        SECURITY_SHEET:'./assets/docs/MSDS_H&A_CONTROL_(SGA)_.pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_H&A_CONTROL.pdf',
        IMAGE: './assets/products/H&A_CONTROL.png',
    },
    {
        ID:6,
        NAME:'MR GEL PLUG',
        DESCRIPTION: 'Es una bentonita granulada ideal para sellar fracturas, para la instalación y el piezómetro y otros sensores de medición. Es un producto ideal desde su funcionamiento hasta convertirse en una solución efectiva y económica',
        SECURITY_SHEET:'./assets/docs/MSDS_MR_GEL__PLUG__3.8_(SGA)_.pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_M-R_GEL_PLUG_3.8_SUDECAP2013.pdf',
        IMAGE: './assets/products/MR_GEL_PLUG.png',
    },
    {
        ID:7,
        NAME:'MR GEL',
        DESCRIPTION: 'El viscosificador MR GEL*es una bentonita superior de sodio, tratada tipo Wyoming de primera calidad de 220 a 260 bbl por tonelada de arciIla seca, mezclada con extendedores especiales.Es fácil de mezclar para aplicaciones de perforación con agua dulce y perforación de cateo.',
        SECURITY_SHEET:'./assets/docs/MSDS_MR_GEL_(SGA)_.pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_MR_GEL.pdf',
        IMAGE: './assets/products/MR_GEL.png',
    },
    {
        ID:8,
        NAME:'MR LUBE 2012',
        DESCRIPTION: 'Lubricante de aceite vegetal de fácil mezclado en fluidos base agua. Ayuda a la reducción del torque y disminuye el desgaste de las herramientas, mejorador de ROP.',
        SECURITY_SHEET:'./assets/docs/MSDS_MR_LUBE_20-12(SGA)_.pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_MR_LUBE-2012.pdf',
        IMAGE: './assets/products/MR_LUBE_2012.png',
    },
    {
        ID:9,
        NAME:' POLYMER PLUS RD',
        DESCRIPTION: 'Es un producto fácilmente dispersable y diseñado para proporcionar encapsulación y estabilización de la lutita. Esto resulta benéfico al estar mezclando rápidamente grandes cantidades o altas concentraciones de polímero también brindando control del filtrado.',
        SECURITY_SHEET:'./assets/docs/MSDS_POLYMER-PLUS_RD_(SGA).pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_POLYMER_PLUS_-_RD.pdf',
        IMAGE: './assets/products/PLOLYMER_PLUS_RD.png',
    },
    {
        ID:10,
        NAME:'POLYEXPAND',
        DESCRIPTION: 'Es un polímero obturante que tiene la capacidad de aumentar hasta 200 veces su tamaño inicial, es muy usado como recuperador de nivel de agua, sellar fracturas; es un material para perdida de circulación.',
        SECURITY_SHEET:'./assets/docs/MSDS_POLYEXPAND_(SGA)_.pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_POLYEXPAND.pdf',
        IMAGE: './assets/products/POLYEXPAND.png',
    },
    {
        ID:11,
        NAME:'POLYMER PAC-R',
        DESCRIPTION: 'Controlador de filtrado de alta viscosidad, para zonas arenosas e inestable, haciendo más resistente el revoque o pared en el pozo perforado. Mejor rendimiento y menor pérdida del filtrado .',
        SECURITY_SHEET:'./assets/docs/MSDS_POLYMER-PAC_R_(SGA).pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_POLYMER_PAC_-_R.pdf',
        IMAGE: './assets/products/POLYMER_PAC_R.png',
    },
    {
        ID:12,
        NAME:'ROD FREE SOLIDO',
        DESCRIPTION: 'Es un dispersante de arcillas para evitar incrustaciones de arcilla en las herramientas. Se usa en zonas con arcillas radioactivas, evitando taponamientos, cuellos y/o anillos en el pozo.',
        SECURITY_SHEET:'./assets/docs/MSDS_ROD_FREE_(SGA)_.pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_ROD_FREE.pdf',
        IMAGE: './assets/products/ROD_FREE_SOLIDO.png',
    },
    {
        ID:13,
        NAME:'SUDTROL',
        DESCRIPTION: 'Es un biopolímero de almidón modificado para ser empleado principalmente como agente reductor filtrante en el proceso de perforación, estabilizador de suspensiones, retenedor de agua, viscosificador de líquidos y con capacidad formadora de films.',
        SECURITY_SHEET:'./assets/docs/MSDS_SUDTROL_(SGA)_.pdf',
        TECNICAL_SHEET:'./assets/docs/HOJA_TECNICA_SUDTROL.pdf',
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
                <img
                  src=${SERVICE.IMAGE}
                  alt="Product">
              </figure>
              <div>
                <span class="name_product">${SERVICE.NAME}</span>
                <span class="description_product">${SERVICE.DESCRIPTION}</span>
              </div>
              <a class="button_write_us" target="_blank" href="https://api.whatsapp.com/send?phone=573103695000&text=Hola%20estoy%20interesado%20en%20eL%20producto%20${SERVICE.NAME}">
                  Cotizar
              </a>
              <a class="view_file" target="_blank" href="${SERVICE.SECURITY_SHEET}">
                  Hoja de seguridad
              </a>
              <a class="view_file" target="_blank" href="${SERVICE.TECNICAL_SHEET}">
                  Hoja técnica	
              </a>
            </div>
          </div>
        </div>
        `);
    });

});