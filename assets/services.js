const SERVICES = [
    {
        ID:1,
        NAME:'BIO CLEAN',
        DESCRIPTION: 'El Bactericida es efectivopara una gama amplia debacterias incluyendo aero-bias y anaerobias su fórmu-la es a base de Biocidas conun fuerte poder bactericida,alguicida y fungicida.',
        FILE:'./assets/docs/MSDS_BIOCLEAN__(SGA)__.pdf',
        IMAGE: './assets/products/BIO_CLEAN.png',
    },
    {
        ID:2,
        NAME:'BIOPOLYMER VIS',
        DESCRIPTION: 'EI BIOPOLYMERC - VIS, es un Biopolímero tipo goma xantana, (Xanthan Gum) dispersable en agua fácil- mente. El producto BIOPOLYMER-VIS se usa como agente de suspen- sión, por su alta propiedad TIXOTROPICA.',
        FILE:'./assets/docs/MSDS_BIO_POLYMER-VIS_(SGA).pdf',
        IMAGE: './assets/products/BIOPOLYMER_VIS.png',
    },
    {
        ID:3,
        NAME:'BLACK WELL',
        DESCRIPTION: 'Poseé una composición ex- clusiva, diseñado para me- jorar la estabilidad del pozo y pérdida de filtrado en condiciones de presión y temperatura elevadas, por lo tanto es utilizado en una amplia gama de operacio- nes de perforación',
        FILE:'./assets/docs/MSDS_BLACK-WELL__SOLIDO_SUDECAP_Español.pdf',
        IMAGE: './assets/products/BLACK_WELL.png',
    },
    {
        ID:4,
        NAME:'DRILL LUBE',
        DESCRIPTION: 'Es un producto tipo Lubri- cante diseñado para mejorar la velocidad de penetración en fluidos de perforación base agua, especialmente donde se utilizan barrenas compactas de diamante poli- cristalino (PDC) y agente hu- mectante al perforar forma- ciones problemáticas SUDECAP',
        FILE:'./assets/docs/MSDS__DRILL_LUBE_(SGA)_.pdf',
        IMAGE: './assets/products/DRILL_LUBE.png',
    },
    {
        ID:5,
        NAME:'H&A CONTROL',
        DESCRIPTION: 'Es un producto diseñado para controlar en pH y dureza en el agua, no excede el rango del pH 8-10 ideal para el fluido, Este producto ayudaa mejorar las condiciones del agua para mejorar el rendimiento de los demás aditivos.',
        FILE:'./assets/docs/MSDS_H&A_CONTROL_(SGA)_.pdf',
        IMAGE: './assets/products/H&A_CONTROL.png',
    },
    {
        ID:6,
        NAME:'MR GEL PLUG',
        DESCRIPTION: 'Es una bentonita granulada ideal para sellar fracturas, para la instalación y el pie- zómetro y otros sensores de medición. Es un producto ideal desde su funcionamiento hasta convertirse en una solución efectiva y económica',
        FILE:'./assets/docs/MSDS_MR_GEL__PLUG__3.8_(SGA)_.pdf',
        IMAGE: './assets/products/MR_GEL_PLUG.png',
    },
    {
        ID:7,
        NAME:'MR GEL',
        DESCRIPTION: 'El viscosificador MR GEL*es una bentonita superior de sodio, tratada tipo Wyoming de primera calidad de 220 a 260 bbl por tonelada de arci- Ila seca, mezclada con exten- dedores especiales.Es fácil de mezclar para aplicaciones de perforación con agua dulce y perforación de cateo.',
        FILE:'./assets/docs/MSDS_MR_GEL_(SGA)_.pdf',
        IMAGE: './assets/products/MR_GEL.png',
    },
    {
        ID:8,
        NAME:'MR LUBE - 2012',
        DESCRIPTION: 'Lubricante de aceite vegetal de fácil mezclado en fluidos base agua. Ayuda a la reducción del torque y disminuye el des- gaste de las herramientas, mejorador de ROP.',
        FILE:'./assets/docs/MSDS_MR_LUBE_20-12(SGA)_.pdf',
        IMAGE: './assets/products/MR_LUBE_2012.png',
    },
    {
        ID:9,
        NAME:'PLOLYMER PLUS RD',
        DESCRIPTION: 'Es un producto fácilmente dispersable y diseñado para proporcionar encapsulación y estabilización de la lutita. Esto resulta benéfico al estar mezclando rápidamente grandes cantidades o altas concentraciones de polímero también brindando control del filtrado.',
        FILE:'./assets/docs/MSDS_POLYMER-PLUS_RD_(SGA).pdf',
        IMAGE: './assets/products/PLOLYMER_PLUS_RD.png',
    },
    {
        ID:10,
        NAME:'POLYEXPAND',
        DESCRIPTION: 'Es un polímero obturante que tiene la capacidad de aumentar hasta 200 veces su tamaño inicial, es muy usado como recuperador de nivel de agua, sellar fracturas; es un material para perdida de circulación.',
        FILE:'./assets/docs/MSDS_POLYEXPAND_(SGA)_.pdf',
        IMAGE: './assets/products/POLYEXPAND.png',
    },
    {
        ID:11,
        NAME:'POLYMER PAC-R',
        DESCRIPTION: 'Controlador de filtrado de alta viscosidad, para zonas arenosas e inestable, ha- ciendo más resistente el revoque o pared en el pozo perforado. Mejor rendimiento y menor pérdida del filtrado .',
        FILE:'./assets/docs/MSDS_POLYMER-PAC_R_(SGA).pdf',
        IMAGE: './assets/products/POLYMER_PAC_R.png',
    },
    {
        ID:12,
        NAME:'ROD FREE SOLIDO',
        DESCRIPTION: 'Es un dispersante de arcillas para evitar incrustaciones de arcilla en las herramientas. Se usa en zonas con arcillas radioactivas, evitando taponamientos, cuellos y/o anillos en el pozo.',
        FILE:'./assets/docs/MSDS_ROD_FREE_(SGA)_.pdf',
        IMAGE: './assets/products/ROD_FREE_SOLIDO.png',
    },
    {
        ID:13,
        NAME:'SUDTROL',
        DESCRIPTION: 'Es un biopolímero de almi- dón modificado para ser empleado principalmente como agente reductor filtrante en el proceso de perforación, estabilizador de suspensiones, retenedor de agua, viscosificador de líquidos y con capacidad formadora de films.',
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
                <span class="description_product">${SERVICE.DESCRIPTION}</span>
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