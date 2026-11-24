---
title: "Mediaeval North Africa (1000-1517)"
subtitle: "Fatimid, Ayyubid and Mamluk Egypt and the Mediaeval Maghreb"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: mediaeval_north_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_mediaeval_north_africa_spatial.png"
hero_caption: "Five North African demographic regions and major urban centres from the Nile Delta and Upper Egypt to Tripolitania, Ifriqiya, Tlemcen, Fez and Sijilmasa between 1000AD and 1517AD."
hero_label: "fig:hero-mediaeval-north-africa"

header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{10pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{10pt plus 2pt minus 2pt}
  - \raggedbottom

output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between 1000AD and the Ottoman conquest of Cairo in 1517AD, the population of North Africa from the Atlantic littoral of Morocco to the Nile Delta followed a stark two-part cycle of gradual agrarian expansion and sudden epidemic contraction. Across the five regions reconstructed in HANDBOOK—Fatimid, Ayyubid and Mamluk Egypt; Almoravid, Almohad and Marinid Morocco and Western Sahara; Hammadid, Almohad and Zayyanid Algeria; Zirid and Hafsid Ifriqiya (Tunisia); and Tripolitania, Cyrenaica and Fezzan—combined numbers rose from 12,65M in 1000AD to 13,48M in 1150AD and reached a mediaeval peak of 14,42M around 1300AD. Growth was concentrated in Egypt, where basin irrigation along the Nile Valley and Delta supported 6,45M inhabitants under the early Bahri Mamluk sultanate, and in Morocco, where Almoravid, Almohad and Marinid state formation linked High Atlas pastoralists, trans-Saharan gold routes through Sijilmasa and irrigated coastal plains into a polity of 3,15M people. By contrast, eleventh-century Hilalian migrations and maritime raids depressed inland Ifriqiya and Libya below their late tenth-century baselines before partial coastal recovery under the Hafsids. The arrival of the Black Death in 1348AD and recurrent plague epidemics over the following century broke this demographic plateau. By 1400AD total North African population had fallen to 10,14M, a net decline of 29,7%, with Egypt losing 2,3M inhabitants (-35,7%) and rural irrigation works contracting across both Lower and Upper Egypt. Gradual demographic recovery during the late fifteenth century restored regional totals to 11,28M by 1517AD, still 21,8% below the pre-plague peak of 1300AD. These estimates rest on 377 individually assessed mediaeval North African settlements screened from 548 ledger candidates (171 excluded), radial oasis and alluvial-corridor kernels, non-stationary Matérn kriging ($\nu = 3/2$) and pycnophylactic scaling across 10 historical subadministrative census provinces and 445 modern geoBoundaries administrative polygons.



# Background

## Ecological Dualism and Hydraulic Foundations

North Africa between the eleventh and early sixteenth centuries comprised two ecologically distinct demographic worlds bound together by Mediterranean sea lanes and trans-Saharan caravan tracks. East of the Western Desert lay Egypt, a hydraulic society in which virtually the entire sedentary population crowded into the 35.000 km² ribbon of the Nile Valley, the Faiyum depression and the broad fan of the Delta. West of the Gulf of Sirte stretched the Maghreb, an archipelago of Tell Atlas coastal plains, fertile intermontane basins, high semi-arid steppes and pre-Saharan palm oases extending from Tripolitania through Tunisia and Algeria to the Atlantic plains of Morocco and the Wadi Draa.

Because annual precipitation across the Maghreb drops sharply south of the Tell crest and east of the Tunisian Sahel, human numbers depended on two contrasting mechanisms: annual Nile flood basins in Egypt, and spring-fed or wadi-diversion oasis networks plus dryland cereal-olive belts across the Maghreb [@Fenwick2020Ifriqiya; @Fenwick2022Medieval; @Kamiyama2021Irrigation]. Where irrigation dykes held silt and floodwater in Egypt, rural densities reached levels matched elsewhere in the Mediterranean world only in Lombardy or Lower Mesopotamia; across the Maghreb, by contrast, settlement clustered along coastal alluvial pockets, terraced mountain valleys and isolated oasis depressions separated by wide pastoral corridors.

## Fatimid, Ayyubid and Mamluk Egypt

At the opening of our period in 1000AD, the Fatimid Caliphate had recently shifted its seat from Mahdia in Ifriqiya to Cairo (*al-Qāhira*), founded beside the older commercial metropolis of Fusṭāṭ in 969AD. Fatimid control over the Nile Valley fostered vigorous urban commerce, glass and textile manufacture, and Red Sea transit trade, backed by gold minted from West African ore moving north through Sijilmasa and Kairouan [@L2026Insights; @R2024Unveiling]. Egypt held roughly 5,75M people at the turn of the millennium, nearly half the entire North African total.

Yet Egyptian demography remained acutely sensitive to consecutive low Nile floods. Between 1065AD and 1072AD, prolonged hydrological failure coincided with factional fighting among Turkish, Berber and Sudanese regiments (*al-shidda al-mustanṣiriyya*), triggering famine, epidemic mortality and the temporary depopulation of quarters outside the Fatimid walls. Recovery under the Armenian vizier Badr al-Jamālī restored irrigation dykes and fiscal order, carrying Egypt to 5,95M by 1150AD.

Under the Ayyubids (1171–1250AD) and the early Bahri Mamluks (1250–1382AD), state capacity and rural productivity rose substantially. Saladin unified Cairo, Fusṭāṭ and the fortified Citadel into a single metropolitan conurbation, while Ayyubid and Mamluk *iqṭāʿ* cadastral assignments tied military revenue directly to the maintenance of provincial *jusūr* (dykes) and feeder canals [@Rapoport2007Women]. The great Mamluk land surveys—especially the *Rawk al-Ḥusāmī* (1298AD) and the *Rawk al-Nāṣirī* (1315AD) under Sultan al-Nāṣir Muḥammad ibn Qalāwūn—registered thousands of Delta and Nile Valley *nāḥiya* villages and their cultivated *feddan* assessments. At the high-water mark around 1300AD, Egypt supported an estimated 6,45M inhabitants, anchored by the Cairo-Fusṭāṭ complex (peaking at 412k in 1340AD), the Mediterranean ports of Alexandria (*al-Iskandariyya*, 86,5k) and Damietta (*Dumyāṭ*, 39,2k), Upper Egypt's caravan hub Qus (48,5k) and provincial market towns such as al-Maḥalla al-Kubrā, Asyūṭ, al-Fayyūm, Bilbays and Aswan (*Uswān*) [@Bosworth2007Historic].

This trajectory snapped in the autumn of 1347AD when plague arrived at Alexandria on Mediterranean merchant vessels and spread upstream through the Delta to Cairo by 1348AD [@Tresso2021Prayer; @MH2025Plague; @J2024Plague]. Contemporary Mamluk chronicles and funerary registers describe daily funeral tallies in Cairo running into thousands at the height of the outbreak, leaving entire quarters abandoned and transforming extramural cemeteries into dense burial landscapes [@John2022Urban]. Unlike regions that rebounded swiftly after a single epidemic shock, Mamluk Egypt endured repeated secondary plague waves—notably in 1363AD, 1374AD, 1419AD, 1430AD and 1460AD—compounded by Circassian Burji Mamluk fiscal exactions and neglected provincial canal dredging. Egypt's population dropped from 6,45M in 1300AD to 4,15M in 1400AD, a contraction of more than one-third, before partial demographic stabilisation lifted the total to 4,55M on the eve of the Ottoman conquest in 1517AD.

## Ifriqiya, Tripolitania and the Central Maghreb

West of Egypt, the eleventh century opened with a sharp divergence between Ifriqiya and the western Maghreb. In 1051–1057AD, following the Zirid breach with Cairo, the migration of Banu Hilal and Banu Sulaym pastoral confederations into Tripolitania and central Tunisia disrupted settled dryland farming around Kairouan (*al-Qayrawān*), which was sacked in 1057AD [@Fenwick2020Ifriqiya]. Settled populations in inland Ifriqiya and Cyrenaica declined or shifted toward fortified coastal towns such as Tunis, Sousse, Sfax and Mahdia, as well as the olive-growing Sahel and northern Tell valleys.

Ceramic production surveys at Chimtou and regional archaeological syntheses confirm that urban networks did not vanish across Ifriqiya, but reoriented away from exposed interior steppe plains toward littoral ports and terraced upland refugia [@Fenwick2020Ifriqiya; @V2024Technology]. Genetic analyses of Tunisian paternal lineages further reflect the layered demographic legacy of Middle Eastern and autochthonous Maghrebi populations across these coastal and interior zones [@S2021Insights]. Tripolitania, Cyrenaica and Fezzan slipped from 1M inhabitants in 1000AD to 880k in 1150AD and 820k in 1300AD, while Zirid and Hafsid Tunisia dipped from 1,75M in 1000AD to 1,65M in 1150AD before Hafsid consolidation (1229–1574AD) restored Tunis and its agricultural hinterland to 1,75M by 1300AD.

In the Central Maghreb (modern Algeria), political gravity shifted from the Hammadid mountain capital of Qalʿat Banī Ḥammād to the maritime port of Béjaïa and, after the mid-thirteenth century, to Zayyanid Tlemcen [@Algeria2018Spatial; @Algeria2017Traditiona]. Tlemcen controlled the northern terminus of western Saharan caravan routes via Sijilmasa and Tuat while commanding fertile Tell basins between Oran and the Chelif valley. Combined Algerian totals grew modestly from 1,9M in 1000AD to 2,15M in 1150AD and 2,25M in 1300AD, cushioned in the Kabylie and Aurès highlands against steppe pastoral disruption, before fourteenth-century plague and Marinid-Zayyanid warfare reduced numbers to 1,75M in 1400AD and allowed a modest recovery to 1,95M by 1517AD.

## Almoravid, Almohad and Marinid Morocco

Morocco experienced the strongest sustained demographic expansion in the mediaeval Maghreb. Originating among Sanhaja pastoralists of the western Sahara, the Almoravid movement unified the desert oases, the Draa and Tafilalt valleys, and the Atlantic plains, founding Marrakech around 1062–1070AD and linking Moroccan cities directly to Andalusi craft and agricultural expertise [@Sires2025Those; @Alkadi2017Origin]. Their Almohad successors (1147–1269AD) and the Marinid dynasty (1244–1465AD) consolidated Fez (*Fās*) as a dense artisanal and educational capital—home to Qarawiyyin madrasas and water-driven mills—while sustaining irrigated oasis booms along the Wadi Draa and Tafilalt (Sijilmasa) [@Hour2025Teaching; @Olsen2000Almohad; @Fenwick2022Medieval; @Bigon2022Tracing].

Archaeological field surveys in the Wadi Draa demonstrate that oasis agriculture, *khettara* water galleries and fortified *ksour* expanded markedly between 700AD and 1500AD, underpinning Moroccan totals that climbed from 2,25M in 1000AD to 2,85M in 1150AD and 3,15M in 1300AD [@Fenwick2022Medieval]. Like Egypt and Ifriqiya, Morocco was struck hard by the 1348AD plague—witnessed in part by the Marinid chroniclers and by Ibn Baṭṭūṭa's travels—falling to 2,35M in 1400AD before late Marinid and Wattasid stabilisation carried the region back to 2,75M by 1517AD [@Tresso2021Prayer].

# Methodology

## Spatial Partitioning and Settlement Compilation

Reconstruction of North African population between 1000AD and 1517AD within HANDBOOK operates under Regime 2 (historical proto-census and archaeological-urban hybrid modelling), integrating regional demographic totals, settlement gazetteers, archaeological site distributions and subadministrative GIS polygons into a single mass-conserving spatial surface. Five continuous spatial regions partition the 27.855 active 5-arcminute land pixels across the North African domain: Fatimid, Ayyubid and Mamluk Egypt (11.049 pixels); Tripolitania, Cyrenaica and Fezzan (6.692 pixels); Almoravid, Almohad and Marinid Morocco and Western Sahara (5.695 pixels); Hammadid, Almohad and Zayyanid Algeria (3.531 pixels); and Zirid and Hafsid Ifriqiya (888 pixels).

Political boundaries across these dynasties shifted frequently, particularly between Marinids, Zayyanids and Hafsids. Historical territorial extents were therefore cross-referenced against the Cliopatria geospatial political database to preserve consistent sub-regional accounting across benchmark slices [@JS2025Cliopatria]. Using fixed geographical envelopes anchored to enduring hydrographic and topographical divides avoids spurious population jumps whenever frontier provinces such as Tlemcen, Tripolitania or Barqa changed suzerainty.

Settlement reconstruction screened 548 candidate entries drawn from mediaeval Arabic geographical works (al-Bakrī, al-Idrīsī, Ibn Jubayr, Ibn Baṭṭūṭa, al-Maqrīzī, Ibn Duqmāq and Leo Africanus), historical settlement registers (including Al-Thurayya, DARMC, Euratlas and regional North African archaeological corpora), excavated urban plans and regional historical monographs. Following deduplication and strict evidentiary screening against the 1000–1517AD window, 377 individually assessed mediaeval North African settlements were retained in the included ledger and 171 candidate entries were excluded as co-located localities, duplicate variants, abandoned classical ruins lacking mediaeval occupation or unquantified minor waystations. Every retained city and oasis town was evaluated case by case from excavated intramural hectare areas, fiscal *rawk* and *iqṭāʿ* records, sixteenth-century hearth counts, documented sacks and plague mortality curves.

The retained ledger distributes 143 settlements across Egypt (37,9%), 92 across Algeria (24,4%), 65 across Morocco (17,2%), 55 across Tunisia (14,6%) and 22 across Libya (5,8%). Historical urban descriptions and dynastic capitals were cross-checked against standard Islamic urban reference works to separate continuously inhabited towns from abandoned classical ruins [@Bosworth2007Historic].

## Radial Oasis Modelling and Non-Stationary Matérn Kriging

Because North African settlement outside the Tell littoral is tightly tethered to linear riverine corridors and isolated desert springs, naive Euclidean interpolation across hyper-arid desert expanses would smear urban mass over uninhabitable erg and hammada terrain. HANDBOOK therefore combines a biophysical habitability mask with radial oasis and alluvial-corridor distance kernels.

Each oasis or wadi settlement—from Sijilmasa in Tafilalt and the Wadi Draa *ksour* to Ghadames, Siwa and the Kharga-Dakhla depressions—exerts a compact metric-isotropic decay field scaled by local hydrological catchment size. Conversely, Nile Valley and Delta pixels receive continuous alluvial suitability weighting informed by historic *jusūr* dyke networks and cultivated basin extents. Residual spatial variance in settlement and archaeological site intensity is interpolated using two-dimensional non-stationary Matérn kriging ($\nu = 3/2$) over Freeman-Tukey variance-stabilised site counts inside metric-isotropic catchments, preventing cross-desert spillover from Egypt into the Fezzan or from the Tell Atlas into the Tanezrouft.

<figure class="crd-table-figure" id="tab:subregional-trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1400AD</th><th class="crd-th">1517AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Fatimid, Ayyubid and Mamluk Egypt</strong></td><td class="crd-td">5,75M</td><td class="crd-td">5,95M</td><td class="crd-td">6,45M</td><td class="crd-td">4,15M</td><td class="crd-td">4,55M</td></tr>
<tr><td class="crd-td"><strong>Almoravid, Almohad and Marinid Morocco and Western Sahara</strong></td><td class="crd-td">2,25M</td><td class="crd-td">2,85M</td><td class="crd-td">3,15M</td><td class="crd-td">2,35M</td><td class="crd-td">2,75M</td></tr>
<tr><td class="crd-td"><strong>Hammadid, Almohad and Zayyanid Algeria</strong></td><td class="crd-td">1,9M</td><td class="crd-td">2,15M</td><td class="crd-td">2,25M</td><td class="crd-td">1,75M</td><td class="crd-td">1,95M</td></tr>
<tr><td class="crd-td"><strong>Zirid and Hafsid Ifriqiya (Tunisia)</strong></td><td class="crd-td">1,75M</td><td class="crd-td">1,65M</td><td class="crd-td">1,75M</td><td class="crd-td">1,25M</td><td class="crd-td">1,35M</td></tr>
<tr><td class="crd-td"><strong>Tripolitania, Cyrenaica and Fezzan</strong></td><td class="crd-td">1M</td><td class="crd-td">880k</td><td class="crd-td">820k</td><td class="crd-td">640k</td><td class="crd-td">680k</td></tr>
<tr><td class="crd-td"><strong>Total Mediaeval North Africa</strong></td><td class="crd-td">12,65M</td><td class="crd-td">13,48M</td><td class="crd-td">14,42M</td><td class="crd-td">10,14M</td><td class="crd-td">11,28M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional population trajectory across Mediaeval North Africa from 1000AD to 1517AD, showing pre-plague growth to 1300AD, the fourteenth-century demographic trough and partial recovery by the Ottoman conquest.</figcaption>
</figure>

## Subadministrative GIS Calibration

To bridge mediaeval spatial surfaces directly with nineteenth- and twentieth-century statistical regimes, HANDBOOK anchors its grid geometry to both historical provincial census divisions and modern geoBoundaries administrative polygons [@Runfola2020GeoBoundaries]. Historical provincial series from the Egyptian censuses of 1882–1947, Moroccan protectorate enumerations of 1880–1960, Algerian departmental censuses of 1886–1954, Tunisian *contrôles civils* of 1881–1956 and Italian Libyan counts of 1880–1954 establish the post-1880 provincial constraints.

At finer resolution, 445 modern ADM1 and ADM2 polygons across Egypt, Morocco, Algeria, Tunisia, Libya and Western Sahara define the sub-provincial spatial targets. Mass-conserving pycnophylactic scaling guarantees that grid-cell sums match every administrative unit exactly without artificial boundary cliffs across international or provincial borders.

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mediaeval-north-africa/fig2_mediaeval_north_africa_trajectory.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory across the five North African regions between 1000AD and 1517AD, highlighting Egyptian basin-irrigation growth to 1300AD, the 1348AD Black Death contraction and Maghrebi divergence.</figcaption>
</figure>

# Testing and Validation

## Pycnophylactic Mass Conservation and Subadministrative Audits

Validation of the North African surface rests on three internal audits: subadministrative pycnophylactic mass conservation, settlement rank-size coherence across the 377-site ledger, and spatial density diagnostics across ecological zones. Across the full HANDBOOK domain, the subadministrative mass audit evaluated 29 historical provincial units and 2.629 modern administrative units over 65.864 unit-year checks, recording a maximum unit relative mass error of 5,85e-08.

Within the North African chapter specifically, Table \ref{tab:hist-subadmin} documents the 10 historical subadministrative census provinces—three Egyptian *muḥāfaẓa* and *mudīriyya* groupings, four Algerian *départements* and southern territories, plus the Moroccan, Tunisian and Libyan protectorate and colonial frameworks. Their territorial footprints calibrate back-projected regional weighting between the Delta, Upper Egypt, the Tell Atlas and Saharan districts, ensuring that pre-modern population density ratios across ecological bands remain anchored to observed hydraulic and agrarian constraints.

<figure class="crd-table-figure" id="tab:hist-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ISO3</th><th class="crd-th">Historical Division</th><th class="crd-th">First Census</th><th class="crd-th">Last Census</th><th class="crd-th">Series Span</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Upper Egypt (Sa'id &amp; Frontier Mudiriyas)</td><td class="crd-td">2,79M (1882)</td><td class="crd-td">7,17M (1947)</td><td class="crd-td">1882-1947</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Cairo, Alexandria &amp; Suez Canal Muhafazas</td><td class="crd-td">675k (1882)</td><td class="crd-td">3,34M (1947)</td><td class="crd-td">1882-1947</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Lower Egypt (Nile Delta Mudiriyas)</td><td class="crd-td">3,34M (1882)</td><td class="crd-td">8,51M (1947)</td><td class="crd-td">1882-1947</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Morocco (French &amp; Spanish Protectorate Régions)</td><td class="crd-td">4,2M (1880)</td><td class="crd-td">11,63M (1960)</td><td class="crd-td">1880-1960</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Territoires du Sud (Algerian Sahara)</td><td class="crd-td">280k (1886)</td><td class="crd-td">850k (1954)</td><td class="crd-td">1886-1954</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Département d'Alger (Central Algeria)</td><td class="crd-td">1,38M (1886)</td><td class="crd-td">3,09M (1954)</td><td class="crd-td">1886-1954</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Département de Constantine (Eastern Algeria)</td><td class="crd-td">1,57M (1886)</td><td class="crd-td">3,44M (1954)</td><td class="crd-td">1886-1954</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Département d'Oran (Western Algeria)</td><td class="crd-td">870,5k (1886)</td><td class="crd-td">2,15M (1954)</td><td class="crd-td">1886-1954</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">Protectorate of Tunisia (Contrôles Civils)</td><td class="crd-td">1,5M (1881)</td><td class="crd-td">3,78M (1956)</td><td class="crd-td">1881-1956</td></tr>
<tr><td class="crd-td"><strong>LBY</strong></td><td class="crd-td">Italian Libya (Tripolitania, Cyrenaica &amp; Fezzan)</td><td class="crd-td">780k (1880)</td><td class="crd-td">1,09M (1954)</td><td class="crd-td">1880-1954</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Historical subadministrative census divisions calibrating regional demographic structure across Egypt and the Maghreb, listing earliest and latest enumerations in each archival series.</figcaption>
</figure>

## Modern geoBoundaries Disaggregation and Zipf Diagnostics

Complementing the nineteenth- and twentieth-century provincial series, Table \ref{tab:mod-subadmin} summarises the 445 modern geoBoundaries ADM1 and ADM2 units matched inside the North African mask [@Runfola2020GeoBoundaries]. High-resolution ADM2 coverage in Egypt (296 districts across five census dates from 1986 to 2023), Morocco (63 provinces and prefectures across four censuses from 1994 to 2024) and Algeria (44 *wilayas* across four censuses from 1977 to 2008) contrasts with ADM1 coverage in Tunisia (24 governorates), Libya (17 *shaʿbiyat*) and Western Sahara (1 administrative unit).

Because modern Egyptian *markaz* and *qism* units align closely with mediaeval Nile *kūra* and *nāḥiya* fiscal basins, their polygonal boundaries provide a direct geometric check on alluvial rural carrying capacities when disaggregated back through Matérn kriging covariates. Similarly, Moroccan provinces along the Haouz, Gharb and Souss plains preserve hydrographic boundaries first stabilised under Almoravid and Almohad hydraulic administration.

<figure class="crd-table-figure" id="tab:mod-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Admin Level</th><th class="crd-th">Matched Units</th><th class="crd-th">Census Count</th><th class="crd-th">Census Years</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">ADM2</td><td class="crd-td">296</td><td class="crd-td">5</td><td class="crd-td">1986, 1996, 2006, 2017, 2023</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">63</td><td class="crd-td">4</td><td class="crd-td">1994, 2004, 2014, 2024</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">ADM2</td><td class="crd-td">44</td><td class="crd-td">4</td><td class="crd-td">1977, 1987, 1998, 2008</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">ADM1</td><td class="crd-td">24</td><td class="crd-td">5</td><td class="crd-td">1984, 1994, 2004, 2014, 2024</td></tr>
<tr><td class="crd-td"><strong>LBY</strong></td><td class="crd-td">ADM1</td><td class="crd-td">17</td><td class="crd-td">2</td><td class="crd-td">2006, 2020</td></tr>
<tr><td class="crd-td"><strong>ESH</strong></td><td class="crd-td">ADM1</td><td class="crd-td">1</td><td class="crd-td">4</td><td class="crd-td">1994, 2004, 2014, 2024</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Modern geoBoundaries subadministrative units matched inside the North African spatial mask, detailing administrative tier and census years used for pycnophylactic disaggregation.</figcaption>
</figure>

Rank-size testing across all 377 individually assessed settlements yields a Zipf slope of $\alpha = 0,81$ with $R^2 = 0,91$. This well-fitted power-law distribution reflects a mature polycentric urban system spanning multiple sovereign capitals rather than a single primate city-state: while Cairo towered over the Egyptian Nile system at a pre-plague peak of 412k in 1340AD, Fez (148k), Marrakech (132k), Tunis (124k), Kairouan (89,2k), Tlemcen (88,5k), Alexandria (86,5k), Béjaïa (61,2k), Ceuta (52,4k) and Qus (48,5k) anchored semi-independent dynastic poles across the Maghreb and Upper Egypt above a dense register of regional market towns and oasis hubs. Temporal coverage across the 377-site ledger remains broad throughout the half-millennium—257 active sites in 1000AD, 257 in 1150AD and 345 in 1300AD following the foundations of Qalʿat Banī Ḥammād (1007AD), Béjaïa (1067AD), Marrakech (1070AD), Rabat (1150AD), Quseir al-Qadim (1180AD) and Mansoura (1219AD), 342 across the mid-fourteenth-century plague slice, 342 in 1400AD, 201 in 1500AD and 90 at the 1517AD terminal benchmark as demolished or abandoned centres (such as Tinnis, Surt, Aydhab, Anfa and Tamdult) were offset by late fifteenth-century foundations such as Chefchaouen and rebuilt Tetouan.

<figure class="crd-figure-block" id="fig:density">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mediaeval-north-africa/fig3_mediaeval_north_africa_density.png" alt="fig:density" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Kriged population density surface across Mediaeval North Africa showing extreme concentration along the Nile Delta and Valley beside compact Maghrebi littoral and Saharan oasis belts.</figcaption>
</figure>

# Results

## Pre-Plague Expansion and Regional Divergence (1000-1300AD)

Between 1000AD and 1300AD, North Africa's population grew by 1,77M (+14%), climbing from 12,65M to 14,42M, though regional fortunes diverged sharply. Egypt added 700k people (+12,2%) over those three centuries, rising from 5,75M to 6,45M despite the severe eleventh-century Nile low-water crisis and Crusader coastal raids on Damietta and Alexandria. Agricultural intensification under the Ayyubids and early Bahri Mamluks, including expanded summer cultivation of sugar cane, rice and cotton alongside winter wheat and barley, raised rural yields across the Delta and Faiyum [@AM2026Tale; @Rapoport2007Women].

In parallel, Almoravid, Almohad and Marinid Morocco grew by 900k inhabitants (+40%), from 2,25M in 1000AD to 3,15M in 1300AD—the fastest proportional growth in the region. This expansion rested on Atlantic plain reclamation, urban expansion at Marrakech and Fez, and trans-Saharan oasis intensification in the Draa and Tafilalt [@Fenwick2022Medieval; @Sires2025Those; @Bigon2022Tracing]. Algeria gained 350k (+18,4%), rising from 1,9M to 2,25M as Zayyanid Tlemcen and eastern Kabyle and Constantine basins consolidated trade and upland farming.

Conversely, Tunisia and Libya suffered early mediaeval stagnation or contraction. Tunisia dipped from 1,75M in 1000AD to 1,65M in 1150AD following the Hilalian disruption of the central steppe and Norman attacks on coastal ports, before Hafsid administrative restoration lifted numbers back to 1,75M by 1300AD [@Fenwick2020Ifriqiya]. Libya endured a steady structural decline from 1M in 1000AD to 880k in 1150AD and 820k in 1300AD, as pastoralisation contracted sedentary cereal farming across the Jabal Akhdar in Cyrenaica and exposed Tripolitanian coastal towns to maritime competition.

## The 1348AD Plague Collapse and Partial Recovery

The Black Death of 1347–1349AD inverted this trajectory everywhere. Reaching Alexandria in late 1347AD and spreading rapidly along the Nile, Mediterranean shipping routes and caravan trails into Tunisia, Algeria and Morocco by 1348AD, *Yersinia pestis* killed perhaps 30% to 40% of urban residents in the initial wave and persisted in endemic urban-rural reservoirs throughout the late fourteenth and fifteenth centuries [@Tresso2021Prayer; @MH2025Plague; @John2022Urban].

By 1400AD, Egypt had fallen by 2,3M to 4,15M (-35,7%), Morocco by 800k to 2,35M (-25,4%), Algeria by 500k to 1,75M (-22,2%), Tunisia by 500k to 1,25M (-28,6%) and Libya by 180k to 640k (-22%). In Egypt, rural depopulation undermined the collective labour required to clear silt from basin canals and maintain flood embankments, converting temporary epidemic loss into prolonged agrarian under-capacity that lasted well into the fifteenth century.

Recovery between 1400AD and 1517AD was uneven and incomplete. Total North African population regained 1,14M inhabitants (+11,2%) over those 117 years, reaching 11,28M in 1517AD. Morocco rebounded most vigorously (+400k, to 2,75M), followed by Egypt (+400k, to 4,55M), Algeria (+200k, to 1,95M), Tunisia (+100k, to 1,35M) and Libya (+40k, to 680k). Even at the close of the Mamluk sultanate, however, Egypt remained 1,9M inhabitants (-29,5%) below its 1300AD peak, shifting the demographic balance of North Africa slightly westward: Egypt's share of total North African population fell from 45,5% in 1000AD and 44,7% in 1300AD to 40,3% in 1517AD, while the four Maghrebi regions collectively increased from 54,5% to 59,7%.

## Urban Hierarchy and Oasis Anchors

<figure class="crd-table-figure" id="tab:top-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Span</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cairo</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,04, 31,24</td><td class="crd-td">1340AD</td><td class="crd-td">412k</td><td class="crd-td">1000-1517AD</td></tr>
<tr><td class="crd-td"><strong>Fez</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,06, -4,98</td><td class="crd-td">1340AD</td><td class="crd-td">148k</td><td class="crd-td">1000-1517AD</td></tr>
<tr><td class="crd-td"><strong>Marrakech</strong></td><td class="crd-td">Morocco</td><td class="crd-td">31,63, -7,98</td><td class="crd-td">1200AD</td><td class="crd-td">132k</td><td class="crd-td">1070-1517AD</td></tr>
<tr><td class="crd-td"><strong>Tunis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,81, 10,18</td><td class="crd-td">1340AD</td><td class="crd-td">124k</td><td class="crd-td">1000-1517AD</td></tr>
<tr><td class="crd-td"><strong>Kairouan</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,68, 10,1</td><td class="crd-td">1050AD</td><td class="crd-td">89,2k</td><td class="crd-td">1000-1517AD</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">Algeria</td><td class="crd-td">34,88, -1,31</td><td class="crd-td">1340AD</td><td class="crd-td">88,5k</td><td class="crd-td">1000-1517AD</td></tr>
<tr><td class="crd-td"><strong>Alexandria</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,2, 29,92</td><td class="crd-td">1340AD</td><td class="crd-td">86,5k</td><td class="crd-td">1000-1517AD</td></tr>
<tr><td class="crd-td"><strong>Bejaia</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,75, 5,06</td><td class="crd-td">1340AD</td><td class="crd-td">61,2k</td><td class="crd-td">1067-1517AD</td></tr>
<tr><td class="crd-td"><strong>Ceuta</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,89, -5,32</td><td class="crd-td">1340AD</td><td class="crd-td">52,4k</td><td class="crd-td">1000-1517AD</td></tr>
<tr><td class="crd-td"><strong>Qus</strong></td><td class="crd-td">Egypt</td><td class="crd-td">25,93, 32,76</td><td class="crd-td">1300AD</td><td class="crd-td">48,5k</td><td class="crd-td">1000-1517AD</td></tr>
<tr><td class="crd-td"><strong>Al-Mahdiyya</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,5, 11,06</td><td class="crd-td">1100AD</td><td class="crd-td">46,2k</td><td class="crd-td">1000-1517AD</td></tr>
<tr><td class="crd-td"><strong>Sijilmasa</strong></td><td class="crd-td">Morocco</td><td class="crd-td">31,27, -4,27</td><td class="crd-td">1200AD</td><td class="crd-td">42,4k</td><td class="crd-td">1000-1517AD</td></tr>
<tr><td class="crd-td"><strong>Meknes</strong></td><td class="crd-td">Morocco</td><td class="crd-td">33,89, -5,55</td><td class="crd-td">1340AD</td><td class="crd-td">41,2k</td><td class="crd-td">1000-1517AD</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,37, 6,61</td><td class="crd-td">1340AD</td><td class="crd-td">40,6k</td><td class="crd-td">1000-1517AD</td></tr>
<tr><td class="crd-td"><strong>Qal'at Bani Hammad</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,82, 4,79</td><td class="crd-td">1050AD</td><td class="crd-td">39,4k</td><td class="crd-td">1007-1152AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading fifteen settlements in the Mediaeval North Africa ledger by peak assessed population, showing geographic coordinates, peak benchmark year and active chronological span.</figcaption>
</figure>

Table \ref{tab:top-settlements} highlights the spatial continuity and dynastic dynamism of mediaeval urban anchors across the region. In Egypt, Cairo (412k in 1340AD), Alexandria (86,5k in 1340AD) and Upper Egypt's caravan terminus Qus (48,5k in 1300AD) trace the primary hydrological and spice-trade spine from the Mediterranean coast to the Red Sea corridor. Across the Maghreb, Moroccan capitals Fez (148k in 1340AD) and Marrakech (132k in 1200AD) join Ceuta (52,4k), Sijilmasa (42,4k) and Meknes (41,2k); Ifriqiyan capitals Tunis (124k in 1340AD), Kairouan (89,2k in 1050AD) and Al-Mahdiyya (46,2k in 1100AD) reflect the post-Hilalian shift from steppe to coast; and Algerian poles Tlemcen (88,5k), Béjaïa (61,2k), Constantine (40,6k) and Qalʿat Banī Ḥammād (39,4k in 1050AD) link Tell hinterlands to Mediterranean maritime commerce [@Bosworth2007Historic; @Fenwick2020Ifriqiya].

Behind these rank-size leaders, architectural and material records corroborate distinct urban morphologies between the eastern and western basins. Detailed courtyard-house surveys in Tlemcen's mediaeval medina reveal multi-tiered residential quarters calibrated to artisanal guild density and defensive citadel proximity under Zayyanid patronage [@Algeria2017Traditiona; @Algeria2018Spatial], while madrasa endowments across Almohad and Marinid Fez concentrated scholarly migration and manuscript production inside dense intramural wards [@Hour2025Teaching].

At the southern desert margins, multi-isotopic analyses of Fatimid gold coinage demonstrate how West African gold passing through Sijilmasa and the Wadi Draa oiled Mediterranean fiscal capacity and anchored permanent oasis populations far south of the Tell rainfall limit [@L2026Insights; @Bigon2022Tracing]. In central Tunisia, even after the eleventh-century sack of Kairouan, water-harvesting olive cultivation and glazed ceramic workshops kept rural-urban exchange alive along the Sahel and northern river corridors [@Kamiyama2021Irrigation; @V2024Technology].

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mediaeval-north-africa/fig4_mediaeval_north_africa_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Spatial distribution and rank-size hierarchy of 377 individually assessed North African mediaeval settlements across Egypt, Libya, Tunisia, Algeria and Morocco between 1000AD and 1517AD.</figcaption>
</figure>

# Limitations

Four principal uncertainties govern these estimates. First, no region in North Africa possesses complete household-level censuses before the nineteenth century. Egyptian population figures rely on indirect reconciliation of Mamluk *rawk* cadastral land surveys, grain tax receipts, military *iqṭāʿ* enrolments and urban topography, all of which record fiscal capacity rather than exact headcounts and under-represent landless labourers, pastoral groups and women [@Rapoport2007Women].

Second, Maghrebi historical chronicles rarely transmit province-wide fiscal totals outside isolated tribute accounts under the Almohads and Marinids. Regional estimates across Tunisia, Algeria, Morocco and Libya therefore depend more heavily on archaeological settlement density surveys, oasis canal footprints and urban intramural area comparisons [@Fenwick2022Medieval; @Fenwick2020Ifriqiya].

Third, the magnitude of the 1348AD plague collapse and subsequent fifteenth-century mortality waves carries wide uncertainty bounds, roughly plus or minus 20% to 30% around point estimates. While contemporary Cairo necrologies and Ibn Baṭṭūṭa's travel accounts attest to catastrophic urban mortality, rural plague incidence in Upper Egypt, the Rif mountains and pre-Saharan *ksour* is far more sparsely documented [@Tresso2021Prayer; @MH2025Plague].

Fourth, the 377-site settlement ledger exhibits a systematic survival bias toward walled dynastic capitals, maritime ports and major caravan centres documented by Arabic geographers and sixteenth-century hearth surveys—such as Cairo, Fez, Tunis, Tlemcen and Tripoli—while earthen mudbrick villages, smaller Saharan *ksour* and seasonal pastoral camps leave fainter archaeological and textual traces. Radial oasis kernels capture point-source desert carrying capacity cleanly, yet simplify multi-branch wadi irrigation systems into symmetric decay gradients.

# Conclusion

Between 1000AD and 1517AD, Mediaeval North Africa traced a demographic arc defined by hydraulic fragility in the east, trans-Saharan state integration in the west and shared vulnerability to fourteenth-century pandemic plague. Total population expanded from 12,65M at the turn of the millennium to 14,42M around 1300AD, anchored by 6,45M inhabitants in Mamluk Egypt and 3,15M in Marinid Morocco, before the 1348AD Black Death and recurring epidemic waves drove numbers down by nearly 30% to 10,14M in 1400AD.

Although late fifteenth-century demographic stabilisation restored the macro-region to 11,28M by 1517AD, Egypt never fully regained its pre-plague basin-irrigation density prior to Ottoman incorporation. As a result, the Maghreb entered the early modern era holding a larger share of total North African population than it had possessed under the Fatimids five centuries earlier.

# Appendix

## Modern Subadministrative Target Polygons

To illustrate the fine-grained spatial targets used in HANDBOOK's pycnophylactic disaggregation pipeline, Table \ref{tab:modern-top-units} reports the leading modern ADM1 and ADM2 polygons inside the North African domain alongside their latest census totals and land areas [@Runfola2020GeoBoundaries]. Compact metropolitan and alluvial districts such as Fayyum City (75 km²), Kesm Al-minya (76 km²) and the Prefecture of Casablanca (141 km²) contrast sharply with broader provincial territories such as Province de Kenitra (3.437 km²), Tizi Ouzou (3.192 km²) and interior Algerian *wilayas* including Batna (11.775 km²) and Djelfa (35.146 km²), underscoring why area-weighted uniform disaggregation fails without radial oasis and alluvial-corridor covariates.

<figure class="crd-table-figure" id="tab:modern-top-units">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ISO3</th><th class="crd-th">Unit</th><th class="crd-th">Level</th><th class="crd-th">Area (km²)</th><th class="crd-th">Latest Census</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Markz Al Minya</td><td class="crd-td">ADM2</td><td class="crd-td">304</td><td class="crd-td">6,34M (2023)</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Kesm Al-minya</td><td class="crd-td">ADM2</td><td class="crd-td">76</td><td class="crd-td">6,34M (2023)</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Fayyum</td><td class="crd-td">ADM2</td><td class="crd-td">375</td><td class="crd-td">4,08M (2023)</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Fayyum</td><td class="crd-td">ADM2</td><td class="crd-td">75</td><td class="crd-td">4,08M (2023)</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Fayyum City</td><td class="crd-td">ADM2</td><td class="crd-td">75</td><td class="crd-td">4,08M (2023)</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Kafr Al-Shaykh</td><td class="crd-td">ADM2</td><td class="crd-td">222</td><td class="crd-td">3,72M (2023)</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Prefecture of Casablanca</td><td class="crd-td">ADM2</td><td class="crd-td">141</td><td class="crd-td">3,22M (2024)</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Préfecture de Marrakech</td><td class="crd-td">ADM2</td><td class="crd-td">2.575</td><td class="crd-td">1,57M (2024)</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Prefecture of Tangier - Assilah</td><td class="crd-td">ADM2</td><td class="crd-td">956</td><td class="crd-td">1,49M (2024)</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Province de Kenitra</td><td class="crd-td">ADM2</td><td class="crd-td">3.437</td><td class="crd-td">1,28M (2024)</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Préfecture de Fès</td><td class="crd-td">ADM2</td><td class="crd-td">360</td><td class="crd-td">1,26M (2024)</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Tizi Ouzou</td><td class="crd-td">ADM2</td><td class="crd-td">3.192</td><td class="crd-td">1,13M (2008)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Twelve highest-population modern geoBoundaries administrative units inside the North African spatial mask, giving polygonal area and latest census population.</figcaption>
</figure>

## Settlement Ledger Country Totals

Table \ref{tab:ledger-breakdown} summarises the distribution of the 377 individually assessed settlements across the five constituent countries and their combined archival populations at four benchmark slices. Egypt accounts for 143 catalogued centres (37,9%), followed by Algeria (92 sites, or 24,4%), Morocco (65 sites, or 17,2%), Tunisia (55 sites, or 14,6%) and Libya (22 sites, or 5,8%); Cairo's metropolitan scale and dense Delta town network keep Egyptian urban mass well above every Maghrebi jurisdiction, while regional rural totals balance these urban anchors against kriged suitability across each hydrological zone.

<figure class="crd-table-figure" id="tab:ledger-breakdown">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Included Sites</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Egypt</strong></td><td class="crd-td">143</td><td class="crd-td">1,03M</td><td class="crd-td">1,1M</td><td class="crd-td">1,47M</td><td class="crd-td">899,9k</td></tr>
<tr><td class="crd-td"><strong>Morocco</strong></td><td class="crd-td">65</td><td class="crd-td">438,4k</td><td class="crd-td">630,2k</td><td class="crd-td">757,2k</td><td class="crd-td">548,4k</td></tr>
<tr><td class="crd-td"><strong>Algeria</strong></td><td class="crd-td">92</td><td class="crd-td">361,6k</td><td class="crd-td">451,4k</td><td class="crd-td">687k</td><td class="crd-td">611,6k</td></tr>
<tr><td class="crd-td"><strong>Tunisia</strong></td><td class="crd-td">55</td><td class="crd-td">380,5k</td><td class="crd-td">333,2k</td><td class="crd-td">496,1k</td><td class="crd-td">397,7k</td></tr>
<tr><td class="crd-td"><strong>Libya</strong></td><td class="crd-td">22</td><td class="crd-td">129,2k</td><td class="crd-td">104,4k</td><td class="crd-td">171,5k</td><td class="crd-td">164,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Distribution of the 377 individually assessed settlements across modern North African jurisdictions and aggregated ledger populations at four mediaeval benchmarks.</figcaption>
</figure>

# Sources

::: {#refs}
:::
