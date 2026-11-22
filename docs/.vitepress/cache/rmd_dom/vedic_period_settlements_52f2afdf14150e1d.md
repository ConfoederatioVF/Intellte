---
title: "Settlement Gazetteer of the Vedic Period and Iron Age Gangetic Basin"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (1500BC to 500BC)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: vedic_period_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_vedic_period_spatial.png"
hero_caption: "Spatial distribution of 5.905 catalogued settlements and macro-regional catchments across Northern and Western South Asia (2,01M km²) from 1500BC to 500BC."
hero_label: "fig:hero-spatial"
header-includes:
  - \AtBeginDocument{\pretocmd{\abscontent}{\crdneedspace{135pt}}{}{}}
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues WGS84 geographic coordinates, sub-regional attributions, archaeological horizons and benchmark demographic trajectories for 5.905 catalogued settlements across Northern and Western South Asia (2,01M km², encompassing 2.013.529 km² and 26.445 active terrestrial grid cells) during the Vedic period from 1500BC to 500BC. Spanning four physiographic macro-regions, the gazetteer captures the spatial restructuring of South Asian settlement systems following the post-urban Indus decentralisation [@Possehl1999IndusAge; @Kenoyer1998AncientCities]. Architectural and settlement forms documented include early agropastoral tells and rock-cut mortuary complexes in Gandhara and the Swat valley, fortified mud-brick tells associated with Painted Grey Ware (PGW) ceramics across Kurukshetra and the Ganga-Yamuna Doab, riverine wet-paddy trading hubs in Kosala and early Magadha, and enduring Chalcolithic-Iron Age tell settlements across the Malwa plateau and the Aravalli piedmont [@Erdosy1988Urbanisation; @Allchin1995Archaeology]. Individual settlement scales conform closely to a Zipf rank-size distribution ($\alpha = 0,85$, $R^2 = 0,97$), ranging from small agrarian farmsteads and specialised pottery hamlets (300 to 800 peak inhabitants) to large fortified regional capitals peaking in 500BC, led by Rajgir (55.000), Kaushambi (48.000), Varanasi (42.000), Ujjain (42.000), Shravasti (42.000), Vaishali (40.000), Taxila (35.000) and Patna (35.000). Every settlement is reconciled against 6.705 source-ledger candidates under PRETA alongside 800 documented duplicate-alias exclusions within a 2,2 km spatial deduplication radius. Georeferenced settlement trajectories provide the empirical foundation for settlement subtraction, ensuring that background rural population surfaces reflect authentic archaeological densities across Iron Age South Asia.

# Settlement Archaeology and Iron Age Nucleation

Archaeological settlement patterns in Northern and Western South Asia between 1500BC and 500BC document the transition from dispersed agropastoral hamlets to nucleated, multi-tiered urban systems [@Kumar2023Second; @Thapar1981Indian; @Allchin1995Archaeology]. Four primary settlement traditions characterise the regional archaeological record:

1. Sapta Sindhu and Gandharan Tells: In the northwest, communities occupied stratified tell mounds situated along the floodplains of the Indus and Punjab tributaries, alongside stone-built settlements and cist-grave cemeteries in Swat, Dir and the Vale of Peshawar [@Olivieri2022Stoneyards; @Jassar2009Hellas; @Possehl1999IndusAge]. Sites such as Taxila (Bhir Mound), Charsadda (Bala Hisar) and Harappa maintained strategic positions controlling trade routes connecting the Gangetic basin with the Iranian plateau [@Kenoyer1998AncientCities].
2. Kuru-Panchala Fortified Tells: Across Haryana and the Upper Ganga-Yamuna Doab, settlements associated with the Painted Grey Ware horizon occupied elevated river levees (*kheras*) rising three to twelve metres above the active floodplain [@Latief2026Tibba; @Neogi2019Geoarchaeo]. Sites including Kaushambi, Varanasi, Shravasti, Ayodhya, Mathura, Ahichchhatra, Hastinapura and Kampilya featured massive mud and burnt-brick ramparts, ditch circumvallations and structured domestic quarters [@Erdosy1988Urbanisation].
3. Middle Gangetic Wet-Paddy Riverine Centres: In the fertile, humid alluvium of Kosala, Videha and early Magadha, settlements developed at the confluences of perennial rivers and oxbow lakes [@Kumar2023Second; @Sengupta2023Fish]. Centres such as Rajgir (Rajagriha), Vaishali, Patna (Pataliputra) and Bhagalpur (Champa) combined intensive wet-paddy rice agriculture with riverine boat transport, emerging as the largest demographic agglomerations in first-millennium BC South Asia [@Allchin1995Archaeology].
4. Malwa and Western Chalcolithic Tells: Across central India and Rajasthan, tell settlements maintained continuous occupation from the Chalcolithic Ahar and Malwa cultures into the Iron Age [@Schug2009Ancient; @Mishra2026Historical]. Sites such as Ujjain, Vidisha, Nagda and Eran exploited fertile black cotton soils and mineral deposits, serving as commercial links between the Gangetic heartland and the Arabian Sea coast [@Allchin1995Archaeology].

# Methodology and Source Ledger Reconciliation

The expanded 5.905-settlement gazetteer is empirically anchored rather than parametrically invented, integrating primary-monograph urban histories with multi-repository archaeological, monument, census and historical-toponymy corpora through a four-wave saturation pipeline [@Erdosy1988Urbanisation; @Allchin1995Archaeology; @ImperialGazetteer1908; @JANGIS2025Journal]:

- Wave 1 (3.425 inclusions): Primary-monograph historical metropolis trajectories and official national censuses, uniting the Census of India Table A-04 and Saket sub-district series with Pakistan Bureau of Statistics (PBS), Bangladesh Bureau of Statistics (BBS), DCS, CBS, NSB and NBS territorial frames alongside nineteenth- and early twentieth-century district gazetteers [@ImperialGazetteer1908; @Bayly1983Rulers].
- Wave 2 (1.653 inclusions): Multi-repository archaeological and heritage corpora, combining Pleiades classical site records, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology: A Review (IAR) compilations, Archaeological Survey of India (ASI) P1371 monument registers, Wikidata, OpenStreetMap (OSM) heritage nodes and radiocarbon-dated XRONOS/c14bazAAR site assemblages [@Thapar1981Indian; @Possehl1999IndusAge; @Kenoyer1998AncientCities].
- Wave 3 (827 inclusions): Macro-envelope *qasba*, *pargana* and *nadu* settlement continuity reconstructions derived from Mughal and early modern cartographic syntheses [@Habib1982Atlas; @Naqvi1968Urbanisation; @Chattopadhyaya1994Making], subjected to strict foundation-year and chronological toponymy filters so that post-ancient mediaeval and colonial foundations are excluded.
- Wave 4 (0 new additions; saturation verified): Automated submask gap-hunter and GeoNames homonym audit across 354.949 South Asian locality records, confirming 0% marginal gain and complete coverage across all four physiographic submasks.

Inclusion required verified WGS84 geographic coordinates aligned with documented archaeological mounds or continuous pre-ancient settlement cores, stratigraphic or toponymic evidence of occupation between 1500BC and 500BC (OCP, Gandhara Grave, BRW, PGW or early NBPW horizons), and empirical population trajectories calibrated to site area and administrative rank. Where multiple survey entries fell within a 2,2 km radius of a higher-priority nucleated centre, secondary records were merged as duplicate aliases to prevent artificial spatial clustering. Across the full 5.905-settlement hierarchy, peak populations follow a clean Zipf rank-size power law ($\alpha = 0,85$, $R^2 = 0,97$).

Table \ref{tab:summary} summarises the distribution of 5.905 catalogued settlements and summed site peaks across the four macro-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sapta Sindhu and Punjab</strong></td><td class="crd-td">1.391</td><td class="crd-td">23,6%</td><td class="crd-td">954,8k</td><td class="crd-td">Taxila (35k)</td></tr>
<tr><td class="crd-td"><strong>Kurukshetra and Upper Doab</strong></td><td class="crd-td">1.317</td><td class="crd-td">22,3%</td><td class="crd-td">1,11M</td><td class="crd-td">Kaushambi (48k)</td></tr>
<tr><td class="crd-td"><strong>Middle Ganga and Magadha</strong></td><td class="crd-td">1.501</td><td class="crd-td">25,4%</td><td class="crd-td">937,1k</td><td class="crd-td">Rajgir (55k)</td></tr>
<tr><td class="crd-td"><strong>Malwa and Western Periphery</strong></td><td class="crd-td">1.696</td><td class="crd-td">28,7%</td><td class="crd-td">1,18M</td><td class="crd-td">Ujjain (42k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">5.905</td><td class="crd-td">100%</td><td class="crd-td">4,18M</td><td class="crd-td">Rajgir (55k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 5.905 catalogued settlements and summed site peaks across Northern and Western South Asia.</figcaption>
</figure>

# Leading Settlements of the Vedic Period

Table \ref{tab:gazetteer} presents the leading 45 settlements across Northern and Western South Asia ordered by peak population descending, detailing geographic coordinates, sub-regional attribution, occupation span and benchmark demographic series.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">500BC Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Rajgir</strong></td><td class="crd-td">Middle Ganga and Magadha</td><td class="crd-td">25,03 N, 85,42 E</td><td class="crd-td">600BC - 500BC</td><td class="crd-td">55k</td><td class="crd-td">55k</td></tr>
<tr><td class="crd-td"><strong>Kaushambi</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">25,34 N, 81,39 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">48k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">900BC - 500BC</td><td class="crd-td">42k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Shravasti</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">27,51 N, 82,05 E</td><td class="crd-td">600BC - 500BC</td><td class="crd-td">42k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Malwa and Western Periphery</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">600BC - 500BC</td><td class="crd-td">42k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Vaishali</strong></td><td class="crd-td">Middle Ganga and Magadha</td><td class="crd-td">25,99 N, 85,13 E</td><td class="crd-td">600BC - 500BC</td><td class="crd-td">40k</td><td class="crd-td">40k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Middle Ganga and Magadha</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">500BC</td><td class="crd-td">35k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Taxila</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">33,75 N, 72,79 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">35k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Bhagalpur</strong></td><td class="crd-td">Middle Ganga and Magadha</td><td class="crd-td">25,25 N, 86,95 E</td><td class="crd-td">600BC - 500BC</td><td class="crd-td">34k</td><td class="crd-td">34k</td></tr>
<tr><td class="crd-td"><strong>Ayodhya</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">26,79 N, 82,19 E</td><td class="crd-td">700BC - 500BC</td><td class="crd-td">32k</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">27,49 N, 77,67 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">32k</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>Ahichhatra</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">28,37 N, 79,13 E</td><td class="crd-td">1100BC - 500BC</td><td class="crd-td">25k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Charsadda</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">34,15 N, 71,73 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">23,8k</td><td class="crd-td">23,8k</td></tr>
<tr><td class="crd-td"><strong>Vidisha</strong></td><td class="crd-td">Malwa and Western Periphery</td><td class="crd-td">23,52 N, 77,81 E</td><td class="crd-td">500BC</td><td class="crd-td">20k</td><td class="crd-td">20k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">18k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Hastinapura</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">29,16 N, 78 E</td><td class="crd-td">1100BC - 500BC</td><td class="crd-td">18k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Tilaurakot</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">27,57 N, 83,05 E</td><td class="crd-td">700BC - 500BC</td><td class="crd-td">16k</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>Kampilya</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">27,62 N, 79,28 E</td><td class="crd-td">900BC - 500BC</td><td class="crd-td">15,5k</td><td class="crd-td">15,5k</td></tr>
<tr><td class="crd-td"><strong>Janakpur</strong></td><td class="crd-td">Middle Ganga and Magadha</td><td class="crd-td">26,73 N, 85,93 E</td><td class="crd-td">600BC - 500BC</td><td class="crd-td">15,2k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td"><strong>Atranjikhera</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">27,58 N, 78,66 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">14k</td><td class="crd-td">14k</td></tr>
<tr><td class="crd-td"><strong>Kannauj</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">27,05 N, 79,92 E</td><td class="crd-td">500BC</td><td class="crd-td">12k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Gaya</strong></td><td class="crd-td">Middle Ganga and Magadha</td><td class="crd-td">24,8 N, 85 E</td><td class="crd-td">500BC</td><td class="crd-td">12k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Thanesar</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">29,97 N, 76,83 E</td><td class="crd-td">600BC - 500BC</td><td class="crd-td">10,9k</td><td class="crd-td">10,9k</td></tr>
<tr><td class="crd-td"><strong>Viratnagar</strong></td><td class="crd-td">Malwa and Western Periphery</td><td class="crd-td">27,45 N, 76,18 E</td><td class="crd-td">700BC - 500BC</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>Sheikhupura</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">31,71 N, 73,99 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">9,1k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Kushinagar</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">26,74 N, 83,89 E</td><td class="crd-td">600BC - 500BC</td><td class="crd-td">9k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Harappa</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">30,63 N, 72,86 E</td><td class="crd-td">1500BC - 1300BC</td><td class="crd-td">8,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">25,43 N, 81,85 E</td><td class="crd-td">500BC</td><td class="crd-td">8k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Panipat</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">29,39 N, 76,96 E</td><td class="crd-td">500BC</td><td class="crd-td">8k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">33,67 N, 72,7 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">7,8k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Ruins of Jamal Garhi</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">34,32 N, 72,07 E</td><td class="crd-td">500BC</td><td class="crd-td">7,6k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">31,27 N, 72,32 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">7,2k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Gujrat</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">32,57 N, 74,08 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">6,9k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Kasur</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">31,12 N, 74,45 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">6,6k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Mardan</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">34,2 N, 72,05 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">6,6k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Saharanpur</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">29,97 N, 77,55 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Ghakhar Mandi</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">32,18 N, 74,9 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Indragarh</strong></td><td class="crd-td">Malwa and Western Periphery</td><td class="crd-td">24,54 N, 75,72 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">6,3k</td><td class="crd-td">6,3k</td></tr>
<tr><td class="crd-td"><strong>Akra</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">32,88 N, 70,63 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">6,1k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Darbhanga</strong></td><td class="crd-td">Middle Ganga and Magadha</td><td class="crd-td">26,15 N, 85,9 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">6,1k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Sisai, Hisar</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">29,18 N, 76,01 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">6k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Mirzapur-cum-Vindhyachal</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">25,14 N, 82,57 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">6k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Chirand</strong></td><td class="crd-td">Middle Ganga and Magadha</td><td class="crd-td">25,73 N, 84,83 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">6k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Kopia</strong></td><td class="crd-td">Kurukshetra and Upper Doab</td><td class="crd-td">26,87 N, 83,08 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">5,8k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Mingora</strong></td><td class="crd-td">Sapta Sindhu and Punjab</td><td class="crd-td">34,78 N, 72,36 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across Northern and Western South Asia (1500BC to 500BC).</figcaption>
</figure>

# Sub-Regional Settlement Catalogues

## Sapta Sindhu, Gandhara and Indus-Punjab Plains

The Sapta Sindhu division catalogues 1.391 settlements spanning the Punjab plains and the northwestern highlands [@Olivieri2022Stoneyards; @Jassar2009Hellas; @Possehl1999IndusAge]. Leading centres include Taxila (35k peak in 500BC), Charsadda (23,8k peak in 500BC), Sheikhupura (9,1k peak in 500BC), Harappa (8,5k peak in 1500BC), Jhang (7,8k peak in 500BC), Jamal Garhi (7,6k peak in 500BC) and Gujrat (6,9k peak in 500BC). In Gandhara, Taxila and Charsadda anchored strategic river crossings connecting the Indus valley with Central Asia, developing stone architecture, terraced residential quarters and metallurgical workshops [@Allchin1995Archaeology]. Across the central Punjab doabs, settlements occupied elevated river terraces, integrating wheat-barley agriculture with sheep, goat and zebu pastoralism [@Kenoyer1998AncientCities].

## Kurukshetra, Upper Ganga-Yamuna Doab and Panchala

The Kuru-Panchala and western Kosala division catalogues 1.317 settlements, representing the primary Painted Grey Ware heartland of Iron Age South Asia [@Thapar1981Indian; @Latief2026Tibba; @Erdosy1988Urbanisation]. Leading centres include Kaushambi (48k peak in 500BC), Varanasi (42k peak in 500BC), Shravasti (42k peak in 500BC), Ayodhya (32k peak in 500BC), Mathura (32k peak in 500BC), Ahichchhatra (25k peak in 500BC), Delhi (18k peak in 500BC), Hastinapura (18k peak in 700BC), Tilaurakot (16k peak in 500BC), Kampilya (15,5k peak in 500BC) and Atranjikhera (14k peak in 500BC). These settlements were characterised by deep stratigraphic accumulations of Painted Grey Ware and early NBPW, iron-smelting furnaces, glass bangle workshops and extensive defensive ramparts constructed of compacted earth, mud brick and burnt brick.

## Middle Ganga, Kosala, Videha and Early Magadha

The Middle Ganga and eastern Kosala-Videha-Magadha division catalogues 1.501 settlements, functioning as the primary agrarian and urban growth zone of first-millennium BC South Asia [@Kumar2023Second; @Sengupta2023Fish; @Allchin1995Archaeology]. Anchored by Rajgir (Rajagriha) (55k peak in 500BC), Vaishali (40k peak in 500BC), Patna (Pataliputra) (35k peak in 500BC), Bhagalpur (Champa) (34k peak in 500BC), Janakpur (15,2k peak in 500BC), Gaya (12k peak in 500BC), Darbhanga (6,1k peak in 500BC) and Chirand (6k peak in 500BC), settlements in this division controlled vast wet-paddy rice hinterlands and riverine freight networks along the Ganga, Son and Gandak rivers. The construction of cyclopean stone walls at Rajgir and monumental earthen and brick ramparts at Vaishali and Champa marked the emergence of early state administration and standing military forces.

## Malwa, Matsya, Rajasthan and Western Chalcolithic Periphery

The western division catalogues 1.696 settlements distributed across the Aravalli range, the Malwa tableland and the estuaries of Gujarat [@Schug2009Ancient; @Mishra2026Historical; @Allchin1995Archaeology]. Prominent settlements include Ujjain (42k peak in 500BC), Vidisha (20k peak in 500BC), Viratnagar (10,7k peak in 500BC), Indragarh (6,3k peak in 600BC), Alwar (5,5k peak in 500BC), Nahargarh ki Bawari (4,6k peak in 600BC) and Dewas (4,5k peak in 500BC). Positioned along the fertile black cotton soils of Malwa and key trans-Aravalli corridors, these centres developed thriving metallurgical, bead-making and textile industries, channelling raw materials and semi-precious stones from central and western India to the Gangetic urban markets.

# Source Ledger Audit and Excluded Candidates

The source ledger evaluates 6.705 candidate localities across Northern and Western South Asia. Of these, 5.905 entries were verified and included as primary catalogued settlements, while 800 entries were excluded. All 800 exclusions (100% of excluded records) represent duplicate-alias consolidations: secondary survey coordinates located within a 2,2 km spatial deduplication radius of a higher-priority canonical settlement that were merged to prevent artificial spatial clustering.

Table \ref{tab:excluded} documents the leading 25 excluded candidates alongside their canonical primary settlement, administrative jurisdiction and exclusion justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Garhi (Ramgarh)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Taular (Walni Bujurg)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ambara Kandari (Attargaon)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kakada (Ambuj)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khambora</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yeni</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pardi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yeni (Beni Pandhari)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ambara Kandari (village)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ambara Kandari (Gopalpur)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pardi (Village)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kavitha (Nagarwadi)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tuljapur Garhi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kakada (Raja Burkhar Kheda</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tokbala (Jambhal)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Chachondi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Taular (Walni khurd)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Chachondi (Chahagarh)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Chachondi (Garhi)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Chachondi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wadner Bhujang</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sindhi Buzurg (Kavitha Buj</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khambora</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur (Dula Rahman)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Vedic Period source ledger.</figcaption>
</figure>

# Limitations and Preservation Biases

Archaeological visibility and settlement recovery across Northern and Western South Asia remain subject to pronounced taphonomic constraints [@Jha2025Geoarchaeo; @Neogi2019Geoarchaeo]:

1. Alluvial Burial in the Gangetic Floodplain: Annual monsoon inundations have deposited several metres of silt across second and first millennium BC horizons, obscuring low-relief rural hamlets and small farmsteads while leaving only prominent tell mounds exposed.
2. Urban Superimposition: Many of the largest Vedic centres, notably Varanasi, Ujjain, Patna, Mathura and Delhi, have been continuously occupied for over two millennia, resulting in modern civic infrastructure overlying ancient archaeological strata and restricting excavations to salvage trenches [@Allchin1995Archaeology; @Erdosy1988Urbanisation].
3. Brick Robbery and Industrial Disturbance: Nineteenth-century railway expansion resulted in systematic destruction of protohistoric tell mounds across Punjab and Uttar Pradesh, where ancient mud-brick and burnt-brick structures were quarried for track ballast [@ImperialGazetteer1908].

Despite these preservation factors, the spatial synthesis of 5.905 georeferenced settlements (conforming to a Zipf rank-size slope of $\alpha = 0,85$, $R^2 = 0,97$) establishes an empirical baseline for understanding Iron Age nucleation, demographic growth and territorial organisation in ancient South Asia.

# Sources
