---
title: "Pharaonic Egypt to the Persian Conquest"
subtitle: "Nile Basin Irrigation, Royal Capitals, Western Oases and Provincial Nomes, 3200BC to 525BC"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: pharaonic_egypt_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_pharaonic_egypt_spatial.png"
hero_caption: "Territorial divisions and catalogued Pharaonic settlement centres across the Nile Valley, Delta, Fayum and desert oases from 3200BC to 525BC."
hero_label: "fig:hero-pharaonic-egypt-spatial"
header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{8pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{8pt plus 2pt minus 2pt}
  - \setlength{\parskip}{2pt plus 1pt minus 1pt}
  - \linespread{0.95}
  - \raggedbottom
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This chapter reconstructs the demographic trajectory, provincial carrying capacity and settlement hierarchy of Pharaonic Egypt from the unification of the Two Lands in 3200BC to the Achaemenid Persian conquest in 525BC. Across six analytical territories spanning 999.989 km² (11.050 five-arcminute cells), aggregate population multiplied roughly fourfold over nearly twenty-seven centuries, expanding from 1,03M (1.033.000) in 3200BC to 1,81M in 2500BC during the Old Kingdom pyramid age, 2,46M in 1900BC under the Middle Kingdom, 3,41M (3.405.000) in 1300BC at the height of the New Kingdom empire, and 4,13M (4.125.000) by 525BC on the eve of Cambyses II's invasion [@Kohler2017Developmen; @Moeller2015Archaeolog; @Bennett2019Archaeolog]. Over this span the demographic centre of gravity tilted decisively northward: Upper Egypt (the Thebaid) expanded 3,5-fold from 240k to 840k, whereas Lower Egypt (the Nile Delta) expanded 4,61-fold from 380k to 1,75M as drainage of marshland lobes and eastern Delta colonisation brought expansive alluvial tracts under winter basin cultivation [@Agnieszka2016Nile; @Elfadaly2019Discoverin]. Middle Kingdom hydraulic works regulated Nile inflow into the Fayum depression along the Bahr Yussef [@Romer2017Nile], lifting the Memphis and Fayum core from 160k to 620k and Middle Egypt from 210k to 760k, while the Western Desert oases (Siwa, Bahariya, Farafra, Dakhla and Kharga) and the Sinai and Eastern Desert corridors rose from 25k and 18k to 90k and 65k respectively [@Hubschmann2010Inhabited; @Rademakers2018Copper]. Integrating 3.691 Egyptian archaeological site records, including 723 Egypt Exploration Society (EES) Delta Survey entries, with 1.435 individually assessed settlements (7.970 settlement-year observations across 1.685 evaluated ledger candidates, consolidating 250 subordinate mounds and variant aliases after expanding coverage via EES Delta Survey tells and measured-area archaeological registers), HANDBOOK combines metric-isotropic radial oasis distance modelling, non-stationary Matérn ($\nu = 3/2$) kriging, and pycnophylactic subadministrative GIS disaggregation anchored to modern ADM2 boundaries [@Runfola2020GeoBoundaries].

# Background

## Hydraulic Ecology and the Nile Floodplain

Between the First Cataract at Aswan and the Mediterranean littoral, Egyptian civilisation rested on a single hydrological mechanism: the annual late-summer flood of the Nile, driven by monsoon rainfall over the Ethiopian highlands [@Toonen2021Hydro; @Romer2017Nile]. Whereas Mesopotamian irrigators battled spring snowmelt surges that arrived just as winter crops matured and carried heavy salt loads onto flat alluvial plains, the Egyptian inundation rose predictably in late July, crested in September, and receded by November. Floodwaters flushed accumulated salts downward through deep silt soils and left behind fresh moisture and nutrient-rich sediment across natural riverine basins [@Toonen2021Hydro]. Once farmers breached low earthen transverse dykes to flood a sequence of longitudinal basins, retained the water for four to six weeks, and drained the surplus back into the falling river channel, a single autumn sowing of emmer wheat and six-row barley yielded reliable harvests with minimal ploughing [@Fagbore2023Punishment].

This natural basin system imposed clear ecological thresholds. Only land below the level of a normal inundation could be watered by gravity alone; higher levees held permanent villages, orchards and palm groves above flood crest, while marginal desert edges stayed barren unless lifted water reached them. The introduction of the counterpoised water-lift (*shaduf*) during the New Kingdom (after 1550BC) expanded summer garden plots, vegetables and orchard terraces along riverbanks and in the Fayum, raising labour inputs per hectare without altering the fundamental winter-grain rhythm of the floodplain [@Romer2017Nile]. Yet the river itself was never static. Remote-sensing reconstruction of the western Memphite margin demonstrates that the now-abandoned Ahramat Nile branch once flowed immediately past the Old Kingdom pyramid fields from Lisht to Giza, providing direct barge access to quarries and construction ramps before gradual eastward channel migration and aeolian sand encroachment stranded the branch [@Ghoneim2024Egyptian; @Younes2023Pyramid]. Similar channel avulsions reshaped provincial capitals such as Hermopolis Magna (al-Ashmunayn) in Middle Egypt, where geomorphological coring reveals how shifting river courses governed urban siting and abandonment [@Toonen2021Hydro].

Disease ecology modulated fertility and survival along this crowded hydraulic ribbon. Seasonal standing water in receding flood basins, irrigation ditches and marshy Delta lagoons sustained mosquito and snail vectors carrying malaria and schistosomiasis, while flies, fleas and grain-infesting insects spread enteric infections and endemic ocular disease [@Kenawy2015Insects]. Skeletal and bioarchaeological studies from urban and colonial cemeteries show that high population density in walled towns and workmen's villages went hand in hand with elevated childhood mortality, anaemia and occupational strain from heavy agricultural and construction corvée [@Dabbs2025Mortality; @Online2023Compulsion; @Buzon2025Growing].

## Predynastic Roots and Early Dynastic Unification (3200BC to 2686BC)

During the fourth millennium BC, farming communities in Upper Egypt (Badarian and Naqada I–III traditions) and Lower Egypt (Maadi-Buto culture) followed contrasting ecological paths before merging into a single territorial kingdom around 3200BC [@Kohler2017Developmen; @Agnieszka2016Nile]. In the narrow Valley south of Asyut, Naqada elites at Hierakonpolis (Nekhen), Naqada (Nubt) and Abydos (Ebot) consolidated control over basin dyke networks, gold-bearing Eastern Desert wadis and Nubian prestige goods [@Kohler2017Developmen; @Lambert2014Role]. Rock-art motifs in the desert wadis and early royal funerary precincts document the emergence of territorial kingship rituals that linked flood control with military subjugation [@Lambert2014Role; @Vanhulle2023Boat]. Simultaneously, Lower Egyptian settlements such as Tell el-Farkha, Tell el-Iswid, Bouto (Tell el-Fara'in) and Maadi acted as commercial intermediaries along the Ways of Horus across northern Sinai, importing Levantine copper, olive oil, wine and cedar resin [@Agnieszka2016Nile; @Rademakers2018Copper].

By Dynasty 0 and the First Dynasty (3200BC to 2890BC), Upper Egyptian rulers extended direct political control across the Delta, founding the fortified administrative capital of Memphis (*Ineb-Hedj*, "White Wall") at the strategic apex where the Nile Valley opens into its distributary fan [@Love2003Questionin; @Kohler2017Developmen]. Archaeological excavations show that Early Dynastic state formation did not immediately produce massive metropolises; instead, royal power rested on an interlocking network of provincial administrative estates (*hwt*), grain-storage centres and sacred precincts stretching from Elephantine at the First Cataract to Bouto and Mendes in the northern Delta [@Kohler2017Developmen; @Moeller2015Archaeolog]. Royal boat burials and ceremonial pits at Abydos, Saqqara and Helwan symbolised both the logistical centrality of river transport and the ideological unity of the Two Lands under a single crown [@Vanhulle2023Boat]. At the 3200BC threshold, total Egyptian population stood near 1,03M, with 380k already concentrated in the fertile Delta, 240k in Upper Egypt, 210k in Middle Egypt and 160k in the Memphite-Fayum hinge.

## Old Kingdom Monumentality and Provincial Fragmentation (2686BC to 2055BC)

The Old Kingdom (Dynasties Three to Six, 2686BC to 2181BC) marks the first great climax of Pharaonic demographic and fiscal organisation. Centralised royal expeditions tapped copper and turquoise deposits in southern Sinai (Wadi Maghara, Serabit el-Khadim and Bir Nasib) and sailed across the Gulf of Suez from the fortified Fourth Dynasty harbour at Wadi al-Jarf and Ayn Soukhna [@Rademakers2018Copper]. Inside the Memphite core, the construction of the Step Pyramid of Djoser at Saqqara and the Fourth Dynasty complexes at Meidum, Dahshur and Giza required sustained seasonal mobilisation of peasant corvée teams alongside permanent skilled workshops [@Younes2023Pyramid; @Online2023Compulsion]. Reconstructed harbour basins and papyrus logbooks from Wadi al-Jarf demonstrate that crews transported Tura limestone blocks along engineered canals branching off the Ahramat channel directly to Giza's worker settlement at Heit el-Ghurab [@Ghoneim2024Egyptian; @Younes2023Pyramid]. Nationwide, population rose 75% between 3200BC and 2500BC, reaching 1,81M, with Memphis and Fayum doubling from 160k to 320k and Lower Egypt advancing from 380k to 680k.

From the late Fifth and Sixth Dynasties onward, however, royal revenue exemptions for mortuary foundations and temples eroded crown fiscal capacity, shifting wealth and administrative authority toward hereditary provincial governors (*nomarchs*) in Middle and Upper Egypt [@Willems2013Nomarchs; @Fagbore2023Punishment]. When a series of severely depressed Nile floods struck after 2200BC during the 4,2 ka climatic aridification event, the central court at Memphis collapsed into the First Intermediate Period (2181BC to 2055BC). Competing dynasties at Herakleopolis Magna (Neni-nesu) in Middle Egypt and Thebes (Waset) in Upper Egypt fought over grain reserves and river crossings, while provincial rulers such as Ankhtifi at Mo'alla boasted in tomb autobiographies of feeding starving districts during famine years [@Moeller2015Archaeolog; @Willems2013Nomarchs]. Urban growth stalled across the Memphite plain while regional capitals in Middle Egypt (Asyut, Hermopolis, Beni Hasan) and Upper Egypt (Thebes, Dendera, Edfu) consolidated fortified autonomous hinterlands.

## Middle Kingdom Reclamation, Hyksos Mobility and New Kingdom Empire (2055BC to 1069BC)

Reunification under Mentuhotep II of Thebes around 2055BC inaugurated the Middle Kingdom (Dynasties Eleven to Thirteen), whose kings gradually curbed nomarchic independence and launched Egypt's most ambitious internal agricultural expansion [@Willems2013Nomarchs; @Moeller2015Archaeolog]. Under Amenemhat I, Senusret II and Amenemhat III, royal engineers transformed the Fayum depression: by regulating the Bahr Yussef branch at el-Lahun with massive stone dykes and sluices, they lowered Lake Moeris and reclaimed hundreds of square kilometres of rich lacustrine farmland around Shedet (Krokodilopolis) [@Romer2017Nile]. Planned state towns such as Kahun (el-Lahun) housed administrators, priests and hydraulic labourers on orthogonal grids [@Moeller2015Archaeolog]. By 1900BC, Egypt's aggregate population reached 2,46M, with Memphis and Fayum rising to 440k and Upper Egypt to 540k. Concurrently, Twelfth Dynasty monarchs built a chain of mudbrick fortresses (Buhen, Mirgissa, Semna, Kumma) along the Second Cataract of Lower Nubia to regulate gold flows, ebony, cattle and human labour from Kerma [@Ferreira2019Lower; @Flammini2008Ancient].

During the Second Intermediate Period (1650BC to 1550BC), central control fractured once more. Asiatic migrants from the southern Levant settled densely across the eastern Delta, where Tell el-Dab'a (ancient Avaris) grew into a sprawling cosmopolitan port and seat of the Hyksos Fifteenth Dynasty [@Stantis2021Multi]. Strontium and oxygen isotope analyses of skeletal remains at Tell el-Dab'a confirm sustained multi-generational mobility between the eastern Nile Delta and Syro-Palestinian coastal towns rather than an isolated military raid [@Stantis2021Multi].

The expulsion of the Hyksos by Ahmose I around 1550BC ushered in the New Kingdom (Dynasties Eighteen to Twenty, 1550BC to 1069BC), when Egypt became an imperial power stretching from the Fourth Cataract in Nubia to the Orontes and Euphrates frontiers. Tribute, prisoners of war and bronze-age diplomatic exchange with Mitanni, Hatti and Kassite Babylonia (*Sngr*) enriched temples and royal estates [@Clayden2024Sngr; @Siegel2025Appraisal]. Thebes (Diospolis Magna) expanded into the religious capital of Karnak and Luxor, while Memphis remained the primary administrative, military and shipyard metropolis, surrounded by a vast funerary and ceremonial landscape at Saqqara [@Staring2023Saqqara]. In Nubia, colonial towns such as Tombos integrated Egyptian administrators and local Nubian lineages into enduring frontier communities [@Buzon2025Growing]. Under Amenhotep IV (Akhenaten, around 1353BC to 1336BC), the royal court relocated abruptly to a virgin desert bay in Middle Egypt at Akhetaten (Tell el-Amarna), assembling tens of thousands of courtiers, guards and quarry workers within a single decade [@Kulmar2018Possible]. Bioarchaeological excavation of Amarna's non-elite cemeteries documents acute nutritional stress, heavy labour trauma and a sharp mortality spike consistent with the Late Bronze Age Mediterranean epidemic documented in the Amarna Letters [@Dabbs2025Mortality]. Even after the court abandoned Akhetaten, New Kingdom Egypt sustained a 1300BC population of 3,41M, driven by Delta expansion (1,35M) and Upper Egyptian temple estates (780k).

## Third Intermediate Period, Saite Renaissance and the Persian Conquest (1069BC to 525BC)

Following the collapse of Twentieth Dynasty imperial hegemony in 1069BC, Egypt entered the Third Intermediate Period (1069BC to 664BC), characterised by political division between the high priests of Amun at Thebes and successive Libyan-descended royal houses at Tanis, Bubastis and Sais in the Delta [@Bennett2019Archaeolog]. Archaeological surveys of Third Intermediate Period Delta tells show that political fragmentation did not trigger demographic collapse; rather, shifting Nile branches encouraged settlement nucleation around fortified temple mounds in the central and eastern Delta [@Bennett2019Archaeolog; @Elfadaly2019Discoverin]. Under the Nubian Twenty-Fifth Dynasty and especially the Saite Twenty-Sixth Dynasty (664BC to 525BC), Egypt experienced a notable commercial and demographic revival. Saite kings settled Greek, Carian and Phoenician mercenaries at Naukratis, Daphnai (Tell Defenneh) and Migdol, fortified the eastern Sinai approach around Pelusium and Sile, and expanded maritime trade across the eastern Mediterranean [@Siegel2025Appraisal; @Bennett2019Archaeolog]. By the chapter terminal benchmark of 525BC, total Egyptian population attained 4,13M, with Lower Egypt alone holding 1,75M (42,4% of the national total). In that year, the Achaemenid king Cambyses II defeated Psamtik III at Pelusium, captured Memphis and incorporated Egypt into the Persian Empire as the satrapy of Mudraya.

# Methodology

## Territorial Partition and Nome Geography

To model spatial demographic dynamics without distorting the stark ecological boundary between irrigated alluvium and hyper-arid desert, HANDBOOK partitions Pharaonic Egypt into six analytical territories encompassing 999.989 km² across 11.050 five-arcminute raster cells:

1. Lower Egypt (Nile Delta) (27.287 km², 832 cells): the fan of distributary channels, marsh lagoons and agricultural tells extending north of the Cairo apex between Alexandria, Pelusium and Damietta, corresponding broadly to the twenty Lower Egyptian nomes.
2. Memphis and Fayum Core (44.339 km², 961 cells): the strategic hinge linking the Valley and Delta, encompassing Memphis, Giza, Saqqara, Heliopolis and the irrigated Fayum basin fed by the Bahr Yussef.
3. Middle Egypt (42.104 km², 1.165 cells): the broad western-floodplain Valley corridor from Atfih and Herakleopolis south through Hermopolis Magna, Amarna and Lykopolis (Asyut).
4. Upper Egypt (Thebaid) (212.735 km², 3.168 cells): the narrower southern Nile Valley and adjacent Nubian borderlands from Abydos through Dendera, Thebes, El Kab and Nekhen to Syene (Aswan) and Wadi es Sebua, encompassing the southern Upper Egyptian nomes.
5. Western Desert Oases (611.234 km², 3.944 cells): the Libyan Desert depression chain containing Siwa (Ammon), Bahariya (Oasis Parva), Farafra, Dakhla and Kharga, separated by vast uninhabitable sand seas and limestone plateaus.
6. Sinai and Eastern Desert (62.289 km², 980 cells): the Sinai Peninsula, Isthmus of Suez frontier fortresses, Wadi Hammamat gold and greywacke quarries, and Red Sea embarkation ports at Wadi al-Jarf, Ayn Soukhna and Mersa Gawasis (Saww).

At each canonical benchmark year ($t \in \{-3200, -2500, -1900, -1300, -525\}$), regional population totals $P_r(t)$ combine archaeological site hierarchies, provincial carrying-capacity estimates and continuous rural density surfaces conditioned on alluvial suitability.

## Archaeological Site Corpora and EES Delta Survey

Baseline spatial conditioning for Egypt draws upon 3.691 domestic archaeological records compiled inside HANDBOOK's macro-regional MENA site corpus, supplemented by 18.006 cross-frontier buffer observations within 250 km across Sinai, the southern Levant and Nubia. Crowd-sourced platforms such as Wikidata or OpenStreetMap contribute exactly zero records in Egypt (0% crowd share). Instead, 1.806 records (48,9%) derive from curated national and regional heritage registers—principally the Egypt Exploration Society (EES) Delta Survey (723 records in Egypt), the Pleiades Ancient World Gazetteer, the Digital Atlas of the Roman Empire, the Near East Radiocarbon Database (NERD), EAMENA Wadi Naqqat and Al-Thurayya—while 1.644 records (44,5%) come from the Published Excavations Atlas and HANDBOOK monograph tables, alongside 241 global radiocarbon records (6,5%). The EES Delta Survey is essential in Lower Egypt, where millennia of Nile silting and modern agricultural expansion obscure ancient *koms* and tells; integrating historic topographic surveys with multispectral and radar remote sensing recovers hundreds of buried Delta mounds that conventional surface-walkover databases overlook [@Elfadaly2019Discoverin].

## Radial Oasis Modelling and Non-Stationary Matérn Kriging

Because Pharaonic Egypt spans dense irrigated riverine corridors juxtaposed against hyper-arid Saharan plateaus, isotropic Euclidean interpolation would bleed riverine densities out into empty limestone desert or smear point-like oasis populations across hundreds of kilometres. HANDBOOK prevents both artefacts through two coupled spatial mechanisms. First, Western Desert oases and Red Sea desert stations are conditioned using metric-isotropic radial distance fields centred on documented oasis aquifers and mining springs, decaying smoothly across local agricultural basins rather than extrapolating across intervening ergs and gravel plains [@Hubschmann2010Inhabited]. Second, HANDBOOK implements Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 3.416 Voronoi domestic catchments (1.942 active catchments; median Voronoi radius 32,51 km, ninetieth percentile 40,25 km) paired with an explicit urban-mask buffer (radius of two cells) and weighted least-squares (WLS) biophysical trend covariates: habitability ($\beta_{\text{hab}}$), natural vegetation ($\beta_{\text{nat}}$), ecological suitability ($\beta_{\text{eco}}$), fluvial proximity ($\beta_{\text{fluvial}}$) and coastal access ($\beta_{\text{coastal}}$).

Across the three macro-regional chronological horizons spanning Pharaonic Egypt—the Early to Middle Bronze Age (3200BC to 1600BC), the Late Bronze and Iron Age (1600BC to 600BC), and the Achaemenid and Hellenistic transition (600BC to 100BC)—fitted short-range scales hold tight around 48,98 km to 50,66 km ($\tau_1 = 1,35$, $\tau_2 = 2,9$, nugget-to-sill ratio $\eta = 0,0417$). Fluvial proximity ($\beta_{\text{fluvial}} = 0,0873$ in the Early to Middle Bronze Age, $0,0834$ in the Late Bronze and Iron Age, $0,0693$ in the Achaemenid and Hellenistic horizon) and coastal access ($\beta_{\text{coastal}} = 0,0827$, $0,0796$ and $0,0661$) dominate the deterministic trend while baseline desert background remains minimal ($\beta_{\text{hab}} = 0,01$ to $0,015$), forcing residual kriging mass sharply onto the Nile alluvium, the Fayum and documented oasis cores (Table \ref{tab:kriging-egypt}).

## Subadministrative GIS Disaggregation Framework

To anchor historical spatial weights against verifiable sub-national demographic distributions rather than uniform grid assumptions, HANDBOOK couples historical provincial series with modern administrative geometry from geoBoundaries [@Runfola2020GeoBoundaries]. Across the broader MENA macro-region, 29 historical administrative units and 2.629 modern administrative polygons are disaggregated using strictly mass-conserving pycnophylactic scaling across 83 benchmark years, passing all 65.864 unit-year conservation checks within 0,01% tolerance (global maximum unit relative error $5,85 \times 10^{-8}$). Within Egypt specifically, historical censuses from the Ministry of Finance and CAPMAS spanning 1882 to 1947 calibrate three macro-administrative strata—Lower Egypt (Nile Delta mudiriyas), Upper Egypt (Sa'id and Frontier mudiriyas), and the urban muhafazas of Cairo, Alexandria and the Suez Canal—while modern ADM2 disaggregation matches 296 Egyptian markaz and kism polygons across the 1986, 1996, 2006, 2017 and 2023 enumerations [@Runfola2020GeoBoundaries]. Even allowing for nineteenth-century perennial-canal expansion and modern Greater Cairo growth, these subadministrative enumerations quantify the enduring carrying-capacity gradient between Delta, Valley and oasis basins that anchors HANDBOOK's dasymetric prior.

# Testing and Validation

Ledger reconciliation across Pharaonic Egypt accounts for 1.685 evaluated candidate entries with zero unaccounted records: 1.435 individually assessed settlements are included (spanning 7.970 settlement-year population observations, an average of 5,6 temporal checkpoints per site, integrating verified core centres with measured-area archaeological sites led by EES Delta Survey tells and regional corpora including Palmisano et al. 2021 and Titolo and Palmisano 2025) and 250 candidate features are excluded. Of the 250 excluded candidates, 167 represent co-located subordinate suburbs or satellite mounds merged within 3,2 km of a primary urban core and 83 represent multi-source variant-spelling duplicates consolidated within 25 km.

Rank-size testing across the 1.435 included settlements yields a tightly fitted Zipf exponent of $\alpha = 0,87$ ($R^2 = 0,97$, unrounded $\alpha = 0,871$). This well-structured urban hierarchy captures the sharp functional separation between Egypt's imperial capitals—Memphis (88,5k), Pi-Ramesses (79k) and Thebes (77,5k)—followed by major dynastic seats including Sais (48,5k), Avaris (42,5k), Tanis (39,8k), Itjtawy (34,8k), Bubastis (34,6k) and Akhetaten/Amarna (34,2k), above a differentiated tier of provincial nome capitals spanning 10k to 29k and smaller fortress, quarry and oasis towns [@Moeller2015Archaeolog; @Kohler2017Developmen].

<figure class="crd-table-figure" id="tab:kriging-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Raw Tau1</th><th class="crd-th">Range (km)</th><th class="crd-th">Beta Fluvial</th><th class="crd-th">Beta Coastal</th><th class="crd-th">Residual R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Early to Middle Bronze Age</strong></td><td class="crd-td">1,51</td><td class="crd-td">48,98</td><td class="crd-td">0,0873</td><td class="crd-td">0,0827</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Late Bronze and Iron Age</strong></td><td class="crd-td">1,56</td><td class="crd-td">50,66</td><td class="crd-td">0,0834</td><td class="crd-td">0,0796</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Achaemenid and Hellenistic</strong></td><td class="crd-td">1,54</td><td class="crd-td">49,91</td><td class="crd-td">0,0693</td><td class="crd-td">0,0661</td><td class="crd-td">0,9992</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Non-stationary Matérn variogram parameters and WLS fluvial-coastal covariate weights across Pharaonic horizons.</figcaption>
</figure>

Table \ref{tab:kriging-egypt} confirms sub-1,8 dimensionless correlation stability (1,51 to 1,56 raw $\tau_1$) and near-unity residual variogram fit ($R^2 \ge 0,9992$) across all three horizons. Tables \ref{tab:subadmin-hist-egypt} and \ref{tab:subadmin-mod-egypt} summarise the historical mudiriya and modern ADM2 census benchmarks used to audit pycnophylactic mass conservation across Egyptian subadministrative polygons [@Runfola2020GeoBoundaries].

<figure class="crd-table-figure" id="tab:subadmin-hist-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subadministrative Stratum</th><th class="crd-th">1882</th><th class="crd-th">1897</th><th class="crd-th">1917</th><th class="crd-th">1937</th><th class="crd-th">1947</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Egypt (Sa'id and Frontier Mudiriyas)</strong></td><td class="crd-td">2,79M</td><td class="crd-td">3,97M</td><td class="crd-td">5,11M</td><td class="crd-td">6,39M</td><td class="crd-td">7,17M</td></tr>
<tr><td class="crd-td"><strong>Cairo, Alexandria and Suez Canal Muhafazas</strong></td><td class="crd-td">675k</td><td class="crd-td">985k</td><td class="crd-td">1,38M</td><td class="crd-td">2,19M</td><td class="crd-td">3,34M</td></tr>
<tr><td class="crd-td"><strong>Lower Egypt (Nile Delta Mudiriyas)</strong></td><td class="crd-td">3,34M</td><td class="crd-td">4,78M</td><td class="crd-td">6,26M</td><td class="crd-td">7,35M</td><td class="crd-td">8,51M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Official Egyptian historical subadministrative census strata (1882 to 1947) anchoring pycnophylactic spatial weights.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:subadmin-mod-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ADM2 Unit</th><th class="crd-th">Area (km²)</th><th class="crd-th">1986</th><th class="crd-th">2006</th><th class="crd-th">2017</th><th class="crd-th">2023</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Markz Al Minya</strong></td><td class="crd-td">304</td><td class="crd-td">2,65M</td><td class="crd-td">4,17M</td><td class="crd-td">5,5M</td><td class="crd-td">6,34M</td></tr>
<tr><td class="crd-td"><strong>Kesm Al-minya</strong></td><td class="crd-td">76</td><td class="crd-td">2,65M</td><td class="crd-td">4,17M</td><td class="crd-td">5,5M</td><td class="crd-td">6,34M</td></tr>
<tr><td class="crd-td"><strong>Fayyum</strong></td><td class="crd-td">375</td><td class="crd-td">1,54M</td><td class="crd-td">2,51M</td><td class="crd-td">3,6M</td><td class="crd-td">4,08M</td></tr>
<tr><td class="crd-td"><strong>Fayyum</strong></td><td class="crd-td">75</td><td class="crd-td">1,54M</td><td class="crd-td">2,51M</td><td class="crd-td">3,6M</td><td class="crd-td">4,08M</td></tr>
<tr><td class="crd-td"><strong>Fayyum City</strong></td><td class="crd-td">75</td><td class="crd-td">1,54M</td><td class="crd-td">2,51M</td><td class="crd-td">3,6M</td><td class="crd-td">4,08M</td></tr>
<tr><td class="crd-td"><strong>Kafr Al-Shaykh</strong></td><td class="crd-td">222</td><td class="crd-td">1,8M</td><td class="crd-td">2,62M</td><td class="crd-td">3,36M</td><td class="crd-td">3,72M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Representative modern Egyptian ADM2 subadministrative units (296 matched polygons) from geoBoundaries and CAPMAS.</figcaption>
</figure>

# Results

## National Demographic Trajectory (3200BC to 525BC)

At the Early Dynastic inception in 3200BC, Pharaonic Egypt supported 1,03M inhabitants (Figure \ref{fig:traj-egypt}; Table \ref{tab:regions-egypt}). Over the next seven centuries of Old Kingdom state formation, improved basin coordination, expansion of royal estates in the Delta and systematic exploitation of the Memphite core drove a 75,2% rise to 1,81M by 2500BC, equivalent to an average annual growth rate of roughly 0,08% across the interval—an impressive sustained expansion for a Bronze Age agrarian state despite periodic low-Nile famines [@Kohler2017Developmen; @Moeller2015Archaeolog].

<figure class="crd-figure-block" id="fig:traj-egypt">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-pharaonic-egypt/fig2_pharaonic_egypt_trajectory.png" alt="fig:traj-egypt" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Pharaonic Egypt from 3200BC to 525BC across the Delta, Valley, Memphis-Fayum core and desert peripheries.</figcaption>
</figure>

Following the First Intermediate Period crisis, Middle Kingdom reunification and Fayum reclamation lifted total population by 35,9% to 2,46M in 1900BC. The pace accelerated again during the New Kingdom empire, rising 38,4% to 3,41M by 1300BC under the Eighteenth and Nineteenth Dynasties, when *shaduf* irrigation, eastern Delta urbanisation and imperial tribute expanded productive capacity across every nome [@Romer2017Nile; @Stantis2021Multi]. Between 1300BC and the Persian conquest of 525BC, growth moderated to 21,1%, bringing Egypt to 4,13M inhabitants—a cumulative fourfold (3,99x) multiplication from 3200BC.

<figure class="crd-table-figure" id="tab:regions-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">3200BC</th><th class="crd-th">2500BC</th><th class="crd-th">1900BC</th><th class="crd-th">1300BC</th><th class="crd-th">525BC</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Egypt (Nile Delta)</strong></td><td class="crd-td">380k</td><td class="crd-td">680k</td><td class="crd-td">920k</td><td class="crd-td">1,35M</td><td class="crd-td">1,75M</td></tr>
<tr><td class="crd-td"><strong>Memphis and Fayum Core</strong></td><td class="crd-td">160k</td><td class="crd-td">320k</td><td class="crd-td">440k</td><td class="crd-td">520k</td><td class="crd-td">620k</td></tr>
<tr><td class="crd-td"><strong>Middle Egypt</strong></td><td class="crd-td">210k</td><td class="crd-td">360k</td><td class="crd-td">480k</td><td class="crd-td">640k</td><td class="crd-td">760k</td></tr>
<tr><td class="crd-td"><strong>Upper Egypt (Thebaid)</strong></td><td class="crd-td">240k</td><td class="crd-td">390k</td><td class="crd-td">540k</td><td class="crd-td">780k</td><td class="crd-td">840k</td></tr>
<tr><td class="crd-td"><strong>Western Desert Oases</strong></td><td class="crd-td">25k</td><td class="crd-td">35k</td><td class="crd-td">45k</td><td class="crd-td">65k</td><td class="crd-td">90k</td></tr>
<tr><td class="crd-td"><strong>Sinai and Eastern Desert</strong></td><td class="crd-td">18k</td><td class="crd-td">25k</td><td class="crd-td">35k</td><td class="crd-td">50k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Pharaonic Egypt Total</strong></td><td class="crd-td">1,03M</td><td class="crd-td">1,81M</td><td class="crd-td">2,46M</td><td class="crd-td">3,4M</td><td class="crd-td">4,12M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Population benchmarks across the six Egyptian territories from 3200BC to 525BC.</figcaption>
</figure>

## Delta Expansion versus Upper Egyptian Stability

The most decisive spatial shift across the Pharaonic longue durée was the steady demographic ascendancy of Lower Egypt (the Nile Delta) over Upper Egypt (the Thebaid) (Figure \ref{fig:density-egypt}; Table \ref{tab:density-egypt}). At 3200BC, the Delta held 380k inhabitants (36,8% of Egypt's total), while Upper Egypt held 240k (23,2%), Middle Egypt 210k (20,3%) and the Memphis and Fayum core 160k (15,5%). Because the Upper Egyptian floodplain between Aswan and Asyut is hemmed in by limestone and sandstone escarpments rarely exceeding 10 km to 15 km in width, early state formation achieved rapid initial intensification there, climbing from 240k in 3200BC to 390k in 2500BC and 780k in 1300BC before plateauing at 840k in 525BC (an overall 3,5x increase, dropping to 20,4% of national population).

<figure class="crd-figure-block" id="fig:density-egypt">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-pharaonic-egypt/fig3_pharaonic_egypt_density.png" alt="fig:density-egypt" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional population shares and crude density gradients across the six Egyptian territories between 3200BC and 525BC.</figcaption>
</figure>

By contrast, the Delta fan possessed vast expanses of seasonally flooded marsh, backswamps and multiple active Nile distributaries (Pelusiac, Tanitic, Mendesian, Sebennytic, Canopic) that absorbed sustained agricultural reclamation throughout the Bronze and Iron Ages [@Elfadaly2019Discoverin; @Bennett2019Archaeolog]. Lower Egypt expanded to 680k by 2500BC, 920k by 1900BC, 1,35M by 1300BC and 1,75M by 525BC—a 4,61x increase that raised its share of total population to 42,4%. Across its 27.287 km² territorial mask, crude regional density in the Delta rose from 13,9 persons per km² in 3200BC to 64,1 persons per km² by 525BC, easily the highest macro-territorial density in ancient North Africa.

<figure class="crd-table-figure" id="tab:density-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">Cells</th><th class="crd-th">3200BC (km²)</th><th class="crd-th">525BC (km²)</th><th class="crd-th">Ratio</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Egypt (Nile Delta)</strong></td><td class="crd-td">27.287</td><td class="crd-td">832</td><td class="crd-td">13,93</td><td class="crd-td">64,13</td><td class="crd-td">4,61x</td></tr>
<tr><td class="crd-td"><strong>Memphis and Fayum Core</strong></td><td class="crd-td">44.339</td><td class="crd-td">961</td><td class="crd-td">3,61</td><td class="crd-td">13,98</td><td class="crd-td">3,88x</td></tr>
<tr><td class="crd-td"><strong>Middle Egypt</strong></td><td class="crd-td">42.104</td><td class="crd-td">1.165</td><td class="crd-td">4,99</td><td class="crd-td">18,05</td><td class="crd-td">3,62x</td></tr>
<tr><td class="crd-td"><strong>Upper Egypt (Thebaid)</strong></td><td class="crd-td">212.735</td><td class="crd-td">3.168</td><td class="crd-td">1,13</td><td class="crd-td">3,95</td><td class="crd-td">3,5x</td></tr>
<tr><td class="crd-td"><strong>Western Desert Oases</strong></td><td class="crd-td">611.234</td><td class="crd-td">3.944</td><td class="crd-td">0,04</td><td class="crd-td">0,15</td><td class="crd-td">3,6x</td></tr>
<tr><td class="crd-td"><strong>Sinai and Eastern Desert</strong></td><td class="crd-td">62.289</td><td class="crd-td">980</td><td class="crd-td">0,29</td><td class="crd-td">1,04</td><td class="crd-td">3,61x</td></tr>
<tr><td class="crd-td"><strong>Pharaonic Egypt Total</strong></td><td class="crd-td">999.988</td><td class="crd-td">11.050</td><td class="crd-td">1,03</td><td class="crd-td">4,13</td><td class="crd-td">3,99x</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Territorial areas, raster cell counts, crude densities (persons per km²) and cumulative growth ratios, 3200BC to 525BC.</figcaption>
</figure>

## Middle Egypt, Memphis and the Fayum Core

Positioned between the Delta apex and the Thebaid, the Memphis and Fayum core (44.339 km²) and Middle Egypt (42.104 km²) formed the hydraulic and administrative spine of the Pharaonic monarchy. Memphis and Fayum expanded 3,88x from 160k in 3200BC to 320k in 2500BC, 440k in 1900BC, 520k in 1300BC and 620k in 525BC, raising its territorial density from 3,61 to 13,98 persons per km². Early Old Kingdom expansion centred on the Memphite floodplain and the Ahramat branch servicing Giza (peaking at 18,8k during Fourth Dynasty pyramid construction), Abusir (6,4k), Dahshur (4,6k) and Heliopolis (28,6k) [@Love2003Questionin; @Ghoneim2024Egyptian]. During the Twelfth Dynasty, state reclamation of the Fayum basin alongside the disembedded royal capital of Itjtawy (34,8k) transformed Shedet (Crocodilopolis, reaching 18,6k), Herakleopolis Magna (27,6k at its First Intermediate Period peak) and Lahun (7,9k) into dense agrarian and administrative nodes supplied by controlled Bahr Yussef intake canals [@Romer2017Nile; @Moeller2015Archaeolog].

Middle Egypt rose 3,62x from 210k in 3200BC to 760k in 525BC (rising from 4,99 to 18,05 persons per km²). Its broad western alluvial plain—wider than the southern Thebaid—supported prosperous provincial centres at Hermopolis Magna (26,9k), Asyut (Lykopolis, 23,6k), Qaw el-Kebir (Antaeopolis, 11,2k), Oxyrhynchus (10,8k), Cusae (10,5k) and Beni Hasan (8,4k), whose nomarchs exercised decisive political leverage during both Intermediate Periods [@Willems2013Nomarchs; @Toonen2021Hydro]. The dramatic Eighteenth Dynasty foundation of Akhetaten (Amarna, climbing rapidly to 34,2k in 1335BC) momentarily concentrated royal court, temple workshops and military garrisons in Middle Egypt before rapid abandonment returned imperial administration to Memphis and Thebes [@Kulmar2018Possible; @Dabbs2025Mortality].

## Western Desert Oases and Eastern Frontiers

Beyond the Nile Valley, the hyper-arid Western Desert oases (611.234 km²) and the Sinai and Eastern Desert corridors (62.289 km²) sustained modest aggregate populations whose strategic importance far outweighed their 3,8% share of national headcount. Across the Western Desert oases, population grew 3,6x from 25k in 3200BC to 35k in 2500BC, 45k in 1900BC, 65k in 1300BC and 90k in 525BC (an overall territorial mask density of only 0,15 persons per km², masking high local crowding around artesian springs). Old Kingdom governors dispatched overland donkey caravans along the Abu Ballas trail and established a fortified administrative hub at Balat (Ayn Asil, peaking at 4,5k) in Dakhla Oasis, where local oasis populations (*waḥat*) interacted with Nile Valley settlers [@Hubschmann2010Inhabited]. Through the Second Intermediate Period, New Kingdom and Saite renaissance, state provisioning and temple investment developed Kharga Oasis around Umm Mawagir (3,9k) and Hibis (4,2k), complementing established centres at Mut el-Kharab (3,8k) and Amheida (2,7k) in Dakhla, El-Bawiti in Bahariya (3,7k), Aghurmi in Siwa (2,4k) and Qasr el-Farafra (1,5k), alongside the Ramesside western coastal stronghold of Zawiyet Umm el-Rakham (2,5k).

In the Sinai and Eastern Desert, population expanded 3,61x from 18k in 3200BC to 65k in 525BC (1,04 persons per km² across the desert mask). Here settlement concentrated along two axes: the fortified northern Sinai coastal highway anchored at Pelusium (6,2k), Tell Hebua (Tjaru/Sile, 5,4k), Tell el-Borg (3,2k), Tell el-Haruba (2,6k) and Bir el-Abd (1,9k)—backed on the eastern Delta margin by Daphnae (8,3k) and Tell el-Maskhuta (6,9k)—and the mineral and maritime logistics network of southern Sinai and the Red Sea coast, including Old and Middle Kingdom port bases at Wadi al-Jarf (2,4k), Mersa Gawasis (Saww, 2,3k) and Ayn Sokhna (2,1k) alongside the turquoise and copper mining camps of Serabit el-Khadim (1,6k), Wadi Maghara (1,4k) and Tell Ras Budran (1,2k) [@Rademakers2018Copper; @Siegel2025Appraisal].

## Urban Hierarchy: Memphis, Pi-Ramesses, Thebes and the Nome Capitals

Across 1.435 individually assessed settlements, HANDBOOK documents a four-tiered urban network ($\alpha = 0,87$, $R^2 = 0,97$) anchored by imperial capitals, dynastic residences, regional grain-taxation halls and frontier garrisons (Figure \ref{fig:sett-egypt}). At the apex stood three successive imperial metropolises: Memphis (climbing from 64k–73,5k in the Old Kingdom to 88,5k in 1250BC and holding 71k–76,5k in the Saite period), Pi-Ramesses (surging to 79k around 1200BC as the Ramesside eastern Delta capital before Pelusiac branch silting triggered abandonment around 1060BC) and Thebes (expanding to 77,5k in 1250BC before Ashurbanipal's 663BC sack cut its urban population to 25,5k–32,5k) [@Love2003Questionin; @Staring2023Saqqara].

<figure class="crd-figure-block" id="fig:sett-egypt">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-pharaonic-egypt/fig4_pharaonic_egypt_settlements.png" alt="fig:sett-egypt" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size profile across 1.435 individually assessed settlements (Zipf slope 0,87, R² = 0,97) and leading twelve Pharaonic settlement centres across Egypt from 3200BC to 525BC.</figcaption>
</figure>

Directly beneath these three imperial poles sat a second tier of dynastic and disembedded royal capitals between 34k and 49k: Sais (48,5k in 600BC under the Twenty-Sixth Dynasty), Avaris (42,5k in 1600BC as the Hyksos Fifteenth Dynasty capital), Tanis (39,8k in 950BC as the Twenty-First and Twenty-Second Dynasty northern capital built from Pi-Ramesses spolia), Itjtawy (34,8k in 1800BC under the Twelfth Dynasty), Bubastis (34,6k in 850BC under the Libyan Twenty-Second Dynasty) and Akhetaten/Amarna (peaking briefly at 34,2k in 1335BC prior to swift post-Amarna abandonment) [@Stantis2021Multi; @Kulmar2018Possible; @Dabbs2025Mortality; @Bennett2019Archaeolog]. Below 30k, major sacred cities and provincial nome capitals formed a well-graded middle tier spanning 12k to 29k: in Lower Egypt, Mendes (24,2k), Athribis (18,4k), Sebennytos (16,8k), Buto (15,2k), Leontopolis (14,9k), Xois (14,2k), Tell el-Balamun (13,8k), the Greek-Egyptian emporium of Naukratis (13,4k) and Busiris (13,3k); in the Memphite-Fayum hinge and Middle Egypt, Heliopolis (28,6k), Herakleopolis Magna (27,6k), Hermopolis Magna (26,9k), Asyut (23,6k), Giza (18,8k) and Crocodilopolis (18,6k); and in Upper Egypt, Akhmim (19,6k), Coptos (17,4k), Dendera (15,9k), Abydos (14,6k), Thinis (13,6k) and Esna (12,6k) [@Moeller2015Archaeolog; @Kohler2017Developmen]. Below 12k, secondary nome centres—Armant (11,5k), Thonis-Heracleion (11,4k), Qaw el-Kebir (11,2k), Hermopolis Parva (11,1k), Oxyrhynchus (10,8k), Cusae (10,5k), Elkab (10,4k), Hierakonpolis (9,8k), Edfu (8,9k), Elephantine (8,7k) and Kom Ombo (8,5k)—alongside planned workmen's and pyramid towns such as Lahun (7,9k) and Deir el-Medina (630), frontier bastions and desert oasis hubs linked Egypt's urban hierarchy to roughly four million rural cultivators.

# Limitations

Three methodological constraints govern the interpretation of these estimates. First, no complete household census survives from Pharaonic Egypt prior to Ptolemaic tax registers; demographic reconstruction relies on settlement areas, temple grain-ration allocations, quarry expedition rosters, necropolis volumes and carrying-capacity models [@Fagbore2023Punishment; @Online2023Compulsion]. While cross-checked across 1.435 individually assessed settlements and calibrated against provincial nome structure, aggregate national totals carry an uncertainty envelope of roughly $\pm 15\%$ to $\pm 20\%$ during the Early Dynastic and Old Kingdom intervals, narrowing toward $\pm 10\%$ to $\pm 15\%$ in the New Kingdom and Saite periods.

Second, Holocene Nile alluviation and dense modern rural settlement severely obscure Predynastic, Old Kingdom and Middle Kingdom archaeological strata in Lower and Middle Egypt [@Toonen2021Hydro; @Elfadaly2019Discoverin]. In the northern Delta, rising water tables and centuries of *sebakh* digging for nitrate-rich mudbrick fertiliser destroyed upper occupation layers on many tells, whereas hyper-arid desert margins preserve fragile campsites and cemeteries with exceptional fidelity. Integrating the 723 EES Delta Survey records and satellite radar prospection mitigates—but cannot eliminate—this taphonomic contrast between desert preservation and floodplain burial [@Elfadaly2019Discoverin].

Third, five-to-seven-century temporal benchmarks smooth sharp short-term political and epidemiological shocks. Neither the First Intermediate Period famines around 2150BC nor Akhenaten's two-decade Amarna experiment and Late Bronze Age epidemic around 1340BC appear as sharp high-frequency sawtooth troughs across the 2500BC, 1900BC and 1300BC snapshots [@Dabbs2025Mortality; @Willems2013Nomarchs]. Readers should therefore interpret the modelled curve as a secular capacity trajectory punctuated by episodic institutional crises documented in the epigraphic and bioarchaeological record.

# Conclusion

Between 3200BC and 525BC, Pharaonic Egypt quadrupled in population from 1,03M to 4,13M, making it the most densely inhabited riverine society of the ancient Mediterranean and Near Eastern world. Driven by predictable annual basin inundation, state hydraulic engineering in the Fayum, progressive reclamation of the Nile Delta's marshland distributaries and the integration of Western Desert oases and Red Sea mineral corridors, Egypt's demographic centre shifted gradually from Upper Egyptian predynastic nuclei toward Lower Egypt, which held 42,4% of all inhabitants by the Persian conquest. By combining 3.691 domestic archaeological site records—including the EES Delta Survey—with radial oasis distance fields, non-stationary Matérn kriging across 3.416 Voronoi catchments and pycnophylactic subadministrative GIS disaggregation, HANDBOOK establishes a spatially explicit quantitative baseline for Pharaonic demography.

# Appendix

Table \ref{tab:sources-egypt} details the constituent archaeological and heritage registers contributing to Egypt's 3.691 domestic site records inside HANDBOOK's macro-regional spatial corpus, while the Pharaonic Egypt settlement ledger reconciles 1.685 evaluated candidates (1.435 individually assessed settlements and 250 excluded subordinate or duplicate entries) compiled from primary excavation monographs, measured-area archaeological registers and the EES Delta Survey Gazetteer.

<figure class="crd-table-figure" id="tab:sources-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Provenance Tier</th><th class="crd-th">Site Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>National and Regional Registers (EES Delta, Pleiades, DARE, NERD, EAMENA, Al-Thurayya)</strong></td><td class="crd-td">1.806</td><td class="crd-td">48,9%</td></tr>
<tr><td class="crd-td"><strong>Academic Monograph Tables (Published Excavations Atlas, HANDBOOK Catalogue)</strong></td><td class="crd-td">1.644</td><td class="crd-td">44,5%</td></tr>
<tr><td class="crd-td"><strong>Global Radiocarbon Records (C14 Baseline)</strong></td><td class="crd-td">241</td><td class="crd-td">6,5%</td></tr>
<tr><td class="crd-td"><strong>Crowd-Sourced Open Repositories (Wikidata, OSM)</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td></tr>
<tr><td class="crd-td"><strong>Total Egyptian Domestic Site Corpus</strong></td><td class="crd-td">3.691</td><td class="crd-td">100%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Provenance breakdown of the 3.691 domestic archaeological site records for Egypt in HANDBOOK's spatial conditioning corpus.</figcaption>
</figure>

# Sources

<div id="refs"></div>
