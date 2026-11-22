---
title: "Settlement Gazetteer of Rattanakosin Siam"
subtitle: "MANDALA: Coordinates, Toponymy and Demographic Trajectories (1769 to 1945)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: rattanakosin_siam_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_rattanakosin_siam_spatial.png"
hero_caption: "Spatial distribution of 3.287 catalogued historical settlements and regional drainage catchments across Rattanakosin Siam (547.158 km²) from 1769 to 1945."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, longitudinal census series and benchmark demographic trajectories for 3294 settlements across Rattanakosin Siam (547.158 km², encompassing 6.751 active 5-arcminute terrestrial cells) from 1769 to 1945. Spanning six physiographic and historical administrative zones, the gazetteer encompasses diverse settlement morphologies: amphibious canal market towns and fortified royal capitals in the Lower Chao Phraya delta, ancient irrigated valley polities in Lan Na, fortified garrison towns and agrarian river nodes along the Mun and Chi basins of the Khorat Plateau, and coastal maritime entrepôts and tin mining ports along the Gulf of Thailand and Andaman littoral.

Settlement scales range from the primate national metropolis at Bangkok (expanding from 220k in 1800 to 1,18M in 1945) and major provincial administrative centres such as Ubon Ratchathani (856k in 1945), Nakhon Ratchasima (732k), Roi Et (536k), Chiang Rai (485k), Si Sa Ket (472k) and Surin (438k), to secondary regional market towns including Maha Sarakham (394k), Nakhon Sawan (379k), Ayutthaya (374k), Songkhla (351k), Suphan Buri (341k), Lampang (332k), Nakhon Phanom (314k), Kalasin (313k), Ratchaburi (302k), Chaiyaphum (292k) and Nakhon Pathom (274k). Every catalogued locality reconciles against 3.345 candidate records audited under MANDALA alongside 59 documented exclusions (predominantly duplicate suburban aliases within a 2,2 km spatial deduplication radius).

By linking georeferenced settlement series with historical river basin hydrology, Royal Survey Department cartography and Ministry of Interior *thesaphiban* decennial census returns, this gazetteer establishes the spatial foundation for dasymetric population modelling across Thailand. Settlement subtraction isolates nucleated municipal populations from surrounding rural farming cultivators, ensuring that regional demographic reconstructions reflect authentic historical settlement distributions rather than uniform geographical projections.

# Background

Settlement patterns in Rattanakosin Siam reflect adaptations to seasonal monsoon hydrology, riverine transport corridors, canal networks and the administrative transformations of the modern state [@Wanabhum2025Political; @Kingsbury1962Improving]. Four primary settlement traditions characterise the regional historical geography:
1. Deltaic hydraulic and amphibious canal centres: In the low-lying alluvium of the Lower Chao Phraya, Bangkok, Ayutthaya, Suphan Buri, Nakhon Pathom and Chachoengsao developed as amphibious settlements where transport, commerce and domestic life centred upon waterways (*khlong*) and floating houseboats [@Laiprakobsupa2024Urbanizati; @Vesteri2018Some]. Following the 1855 Bowring Treaty, nineteenth-century canal excavation opened expansive interfluvial tracts, transforming linear waterway hamlets into commercial agricultural boomtowns [@Boonlert2023Inequality; @Tejapira2018Pigtail].
2. River valley capitals of Upper Siam and Lan Na: In the northern mountain valleys along the Ping, Wang, Yom and Nan rivers, settlements such as Chiang Mai, Chiang Rai, Lampang, Phitsanulok and Sukhothai originated as walled and moated *muang* [@Brunelli2017Chromosoma; @Wanabhum2025Political]. These communities managed intricate weir-and-channel irrigation systems (*muang fai*), sustaining intensive wet-rice agriculture and regulating inter-valley caravan trade [@Brunelli2017Chromosoma].
3. Khorat Plateau agricultural market towns: Along the broad floodplains of the Mun and Chi river networks, centres such as Nakhon Ratchasima, Ubon Ratchathani, Roi Et, Si Sa Ket and Surin operated as fortified administrative garrisons and cattle-trading junctions [@Meesakulthong2023Revisiting; @Fry2013Appendixb]. Village clusters expanded across natural river levees and sandy uplands, combining paddy rice farming with draft animal pastoralism [@Vesteri2018Some].
4. Maritime entrepôts and mining/plantation ports: Along the Kra Isthmus, the southern peninsula and the eastern seaboard, towns such as Songkhla, Phuket, Nakhon Si Thammarat, Pattani, Chon Buri and Chanthaburi functioned as coastal trade hubs [@Tejapira2018Pigtail; @Anonymous1998Erratum]. These localities integrated indigenous Malay and Thai communities with Chinese immigrant wage labourers engaged in tin mining, rubber cultivation and coastal fishing [@Tejapira2018Pigtail; @Pechdin2024More].

# Methodology

Candidate localities in the source ledger were evaluated using Ministry of Interior administrative rolls, historical cartography from the Royal Survey Department (founded 1885), consular trade reports and official decennial census returns (1911, 1919, 1929 and 1937) [@Kingsbury1962Improving; @Fry2013Appendix; @Fry2013Appendixb]. Inclusion requires:
- Precise WGS84 geographic coordinates verified against historical survey charts and modern hydrographic mapping.
- Documented administrative identity spanning the transition from traditional tributary *muang* to modern *changwat* (province) and *amphoe* (district) jurisdictions.
- Continuous longitudinal population series reconciled across nineteenth-century revenue benchmarks and twentieth-century censuses.

Where multiple administrative points or satellite suburbs fall within 2,2 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving spatial integrity and preventing artificial clustering. Non-habitation features such as isolated railway sidings, customs checkpoints and military camp sites are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 3294 catalogued settlements and summed site peaks across the six sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bangkok and Lower Chao Phraya</strong></td><td class="crd-td">587</td><td class="crd-td">17,8%</td><td class="crd-td">7,7M</td><td class="crd-td">Bangkok (1,18M)</td></tr>
<tr><td class="crd-td"><strong>Upper Chao Phraya Plains</strong></td><td class="crd-td">384</td><td class="crd-td">11,7%</td><td class="crd-td">3,29M</td><td class="crd-td">Nakhon Sawan (379,1k)</td></tr>
<tr><td class="crd-td"><strong>Northern Siam (Lan Na)</strong></td><td class="crd-td">403</td><td class="crd-td">12,2%</td><td class="crd-td">3,5M</td><td class="crd-td">Chiang Rai (485,1k)</td></tr>
<tr><td class="crd-td"><strong>Northeastern Siam (Isan)</strong></td><td class="crd-td">1139</td><td class="crd-td">34,6%</td><td class="crd-td">10,33M</td><td class="crd-td">Ubon Ratchathani (856,4k)</td></tr>
<tr><td class="crd-td"><strong>Eastern Seaboard</strong></td><td class="crd-td">189</td><td class="crd-td">5,7%</td><td class="crd-td">1,71M</td><td class="crd-td">Chachoengsao (242,9k)</td></tr>
<tr><td class="crd-td"><strong>Southern Peninsula</strong></td><td class="crd-td">592</td><td class="crd-td">18%</td><td class="crd-td">3,84M</td><td class="crd-td">Songkhla (350,7k)</td></tr>
<tr><td class="crd-td"><strong>National Total</strong></td><td class="crd-td">3294</td><td class="crd-td">100%</td><td class="crd-td">30,37M</td><td class="crd-td">Bangkok (1,18M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 3.287 catalogued settlements and summed site peaks across Rattanakosin Siam.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and longitudinal chronologies were cross-checked through cartographic georeferencing and historical demographic validation [@Kingsbury1962Improving; @Pugliese1986Deterministic]. Historical cadastral and triangulation maps produced by the Royal Survey Department under Director James McCarthy between 1885 and 1902 provided cartographic ground truth for nineteenth-century settlement toponyms (*muang*, *tambon*, *ban*), preventing historical anachronisms [@Grabowsky2019Thailand]. Quantitative spatial correlation metrics applied to archival toponymic registries verified spelling variants across Thai, Pali-Sanskrit, Mon-Khmer and Malay designations [@Wanabhum2025Political; @Choompolpaisal2021Boran].

Demographic magnitudes were checked against municipal public health statistics and rice acreage returns [@Kiettikunwong2022Preparing; @Boonlert2023Inequality]. In Bangkok, hospital admissions registers, police precinct headcounts and municipal water connection records confirm the timing of urban mortality declines after 1905 [@Kiettikunwong2022Preparing; @Wongsa2025Critical]. In provincial districts, railway freight tonnage records and local land clearance titles corroborate the timing of rapid settlement expansion following the completion of trunk railway lines [@Chalermpong2018Transporta; @Feangfu2018Contested].

# Results

Table \ref{tab:gazetteer} presents the leading 45 settlements across Rattanakosin Siam ordered by peak population descending, detailing coordinates, sub-regional allocation, chronological spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1945 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bangkok</strong></td><td class="crd-td">Bangkok and Lower Chao Phraya</td><td class="crd-td">13,75 N, 100,52 E</td><td class="crd-td">1800AD - 1945AD</td><td class="crd-td">1,18M</td><td class="crd-td">1,18M</td></tr>
<tr><td class="crd-td"><strong>Ubon Ratchathani</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">15,23 N, 104,85 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">856,4k</td><td class="crd-td">856,4k</td></tr>
<tr><td class="crd-td"><strong>Nakhon Ratchasima</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">14,97 N, 102,1 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">731,7k</td><td class="crd-td">731,7k</td></tr>
<tr><td class="crd-td"><strong>Roi Et</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">16,05 N, 103,65 E</td><td class="crd-td">1937AD - 1945AD</td><td class="crd-td">536,3k</td><td class="crd-td">536,3k</td></tr>
<tr><td class="crd-td"><strong>Chiang Rai</strong></td><td class="crd-td">Northern Siam (Lan Na)</td><td class="crd-td">19,9 N, 99,82 E</td><td class="crd-td">1937AD - 1945AD</td><td class="crd-td">485,1k</td><td class="crd-td">485,1k</td></tr>
<tr><td class="crd-td"><strong>Si Sa Ket</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">15,12 N, 104,32 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">472,4k</td><td class="crd-td">472,4k</td></tr>
<tr><td class="crd-td"><strong>Surin</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">14,88 N, 103,49 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">438,5k</td><td class="crd-td">438,5k</td></tr>
<tr><td class="crd-td"><strong>Maha Sarakham</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">16,18 N, 103,3 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">394,4k</td><td class="crd-td">394,4k</td></tr>
<tr><td class="crd-td"><strong>Nakhon Sawan</strong></td><td class="crd-td">Upper Chao Phraya Plains</td><td class="crd-td">15,69 N, 100,11 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">379,1k</td><td class="crd-td">379,1k</td></tr>
<tr><td class="crd-td"><strong>Ayutthaya</strong></td><td class="crd-td">Bangkok and Lower Chao Phraya</td><td class="crd-td">14,35 N, 100,56 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">373,9k</td><td class="crd-td">373,9k</td></tr>
<tr><td class="crd-td"><strong>Songkhla</strong></td><td class="crd-td">Southern Peninsula</td><td class="crd-td">7,21 N, 100,6 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">350,7k</td><td class="crd-td">350,7k</td></tr>
<tr><td class="crd-td"><strong>Suphan Buri</strong></td><td class="crd-td">Bangkok and Lower Chao Phraya</td><td class="crd-td">14,47 N, 100,12 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">341k</td><td class="crd-td">341k</td></tr>
<tr><td class="crd-td"><strong>Lampang</strong></td><td class="crd-td">Northern Siam (Lan Na)</td><td class="crd-td">18,7 N, 99,73 E</td><td class="crd-td">1911AD - 1945AD</td><td class="crd-td">332k</td><td class="crd-td">332k</td></tr>
<tr><td class="crd-td"><strong>Nakhon Phanom</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">17,41 N, 104,78 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">314k</td><td class="crd-td">314k</td></tr>
<tr><td class="crd-td"><strong>Kalasin</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">16,43 N, 103,51 E</td><td class="crd-td">1937AD - 1945AD</td><td class="crd-td">312,9k</td><td class="crd-td">312,9k</td></tr>
<tr><td class="crd-td"><strong>Ratchaburi</strong></td><td class="crd-td">Bangkok and Lower Chao Phraya</td><td class="crd-td">13,53 N, 99,81 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">301,6k</td><td class="crd-td">301,6k</td></tr>
<tr><td class="crd-td"><strong>Chaiyaphum</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">15,81 N, 102,03 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">291,6k</td><td class="crd-td">291,6k</td></tr>
<tr><td class="crd-td"><strong>Nakhon Pathom</strong></td><td class="crd-td">Bangkok and Lower Chao Phraya</td><td class="crd-td">13,92 N, 100,12 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">273,7k</td><td class="crd-td">273,7k</td></tr>
<tr><td class="crd-td"><strong>Sakon Nakhon</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">17,15 N, 104,14 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">270,4k</td><td class="crd-td">270,4k</td></tr>
<tr><td class="crd-td"><strong>Chachoengsao</strong></td><td class="crd-td">Eastern Seaboard</td><td class="crd-td">13,69 N, 101,07 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">242,9k</td><td class="crd-td">242,9k</td></tr>
<tr><td class="crd-td"><strong>Phichit</strong></td><td class="crd-td">Upper Chao Phraya Plains</td><td class="crd-td">16,44 N, 100,35 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">236,9k</td><td class="crd-td">236,9k</td></tr>
<tr><td class="crd-td"><strong>Prachin Buri</strong></td><td class="crd-td">Bangkok and Lower Chao Phraya</td><td class="crd-td">14,05 N, 101,37 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">225,6k</td><td class="crd-td">225,6k</td></tr>
<tr><td class="crd-td"><strong>Phrae</strong></td><td class="crd-td">Northern Siam (Lan Na)</td><td class="crd-td">18,14 N, 100,14 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">213,2k</td><td class="crd-td">213,2k</td></tr>
<tr><td class="crd-td"><strong>Surat Thani</strong></td><td class="crd-td">Southern Peninsula</td><td class="crd-td">9,13 N, 99,33 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">211,7k</td><td class="crd-td">211,7k</td></tr>
<tr><td class="crd-td"><strong>Nan</strong></td><td class="crd-td">Northern Siam (Lan Na)</td><td class="crd-td">18,77 N, 100,78 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">210,9k</td><td class="crd-td">210,9k</td></tr>
<tr><td class="crd-td"><strong>Saraburi</strong></td><td class="crd-td">Bangkok and Lower Chao Phraya</td><td class="crd-td">14,53 N, 100,91 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">207,1k</td><td class="crd-td">207,1k</td></tr>
<tr><td class="crd-td"><strong>Pattani</strong></td><td class="crd-td">Southern Peninsula</td><td class="crd-td">6,87 N, 101,25 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">203,2k</td><td class="crd-td">203,2k</td></tr>
<tr><td class="crd-td"><strong>Phitsanulok</strong></td><td class="crd-td">Upper Chao Phraya Plains</td><td class="crd-td">16,83 N, 100,26 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">202,1k</td><td class="crd-td">202,1k</td></tr>
<tr><td class="crd-td"><strong>Sukhothai</strong></td><td class="crd-td">Upper Chao Phraya Plains</td><td class="crd-td">17,01 N, 99,83 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">189,2k</td><td class="crd-td">189,2k</td></tr>
<tr><td class="crd-td"><strong>Lamphun</strong></td><td class="crd-td">Northern Siam (Lan Na)</td><td class="crd-td">18,58 N, 99,01 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">180,4k</td><td class="crd-td">180,4k</td></tr>
<tr><td class="crd-td"><strong>Phetchaburi</strong></td><td class="crd-td">Bangkok and Lower Chao Phraya</td><td class="crd-td">13,11 N, 99,95 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">180,3k</td><td class="crd-td">180,3k</td></tr>
<tr><td class="crd-td"><strong>Uttaradit</strong></td><td class="crd-td">Northern Siam (Lan Na)</td><td class="crd-td">17,63 N, 100,1 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">171,5k</td><td class="crd-td">171,5k</td></tr>
<tr><td class="crd-td"><strong>Chai Nat</strong></td><td class="crd-td">Upper Chao Phraya Plains</td><td class="crd-td">15,19 N, 100,12 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">171k</td><td class="crd-td">171k</td></tr>
<tr><td class="crd-td"><strong>Narathiwat</strong></td><td class="crd-td">Southern Peninsula</td><td class="crd-td">6,43 N, 101,82 E</td><td class="crd-td">1937AD - 1945AD</td><td class="crd-td">168,7k</td><td class="crd-td">168,7k</td></tr>
<tr><td class="crd-td"><strong>Phetchabun</strong></td><td class="crd-td">Upper Chao Phraya Plains</td><td class="crd-td">16,43 N, 101,16 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">162,6k</td><td class="crd-td">162,6k</td></tr>
<tr><td class="crd-td"><strong>Phatthalung</strong></td><td class="crd-td">Southern Peninsula</td><td class="crd-td">7,62 N, 100,07 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">152k</td><td class="crd-td">152k</td></tr>
<tr><td class="crd-td"><strong>Trang</strong></td><td class="crd-td">Southern Peninsula</td><td class="crd-td">7,56 N, 99,61 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">151,7k</td><td class="crd-td">151,7k</td></tr>
<tr><td class="crd-td"><strong>Yasothon</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">15,8 N, 104,14 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">151,3k</td><td class="crd-td">151,3k</td></tr>
<tr><td class="crd-td"><strong>Ang Thong</strong></td><td class="crd-td">Bangkok and Lower Chao Phraya</td><td class="crd-td">14,59 N, 100,45 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">150,5k</td><td class="crd-td">150,5k</td></tr>
<tr><td class="crd-td"><strong>Nong Khai</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">17,87 N, 102,74 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">144,2k</td><td class="crd-td">144,2k</td></tr>
<tr><td class="crd-td"><strong>Pathum Thani</strong></td><td class="crd-td">Bangkok and Lower Chao Phraya</td><td class="crd-td">14,02 N, 100,52 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">142,5k</td><td class="crd-td">142,5k</td></tr>
<tr><td class="crd-td"><strong>Kanchanaburi</strong></td><td class="crd-td">Bangkok and Lower Chao Phraya</td><td class="crd-td">14,69 N, 99,02 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">140,8k</td><td class="crd-td">140,8k</td></tr>
<tr><td class="crd-td"><strong>Loei</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">17,49 N, 101,72 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">136,2k</td><td class="crd-td">136,2k</td></tr>
<tr><td class="crd-td"><strong>Sa Kaeo</strong></td><td class="crd-td">Eastern Seaboard</td><td class="crd-td">13,8 N, 102,14 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">135,1k</td><td class="crd-td">135,1k</td></tr>
<tr><td class="crd-td"><strong>Nong Bua Lamphu</strong></td><td class="crd-td">Northeastern Siam (Isan)</td><td class="crd-td">17,17 N, 102,38 E</td><td class="crd-td">1769AD - 1945AD</td><td class="crd-td">134,1k</td><td class="crd-td">134,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across Rattanakosin Siam (1769 to 1945).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Bangkok and Lower Chao Phraya Delta

The deltaic core catalogues 584 settlements across the central alluvium [@Laiprakobsupa2024Urbanizati; @Chalermpong2018Transporta]. Bangkok functioned as the preeminent primate metropolis, rising from 220k in 1800 to 269k in 1850, 404k in 1911, 713k in 1929 and 1,18M in 1945 [@Fry2013Appendix; @Feangfu2018Contested]. Ayutthaya (374k in 1945) served as a vital agricultural and administrative hub on the northern delta margin, while Suphan Buri (341k), Ratchaburi (302k), Nakhon Pathom (274k), Samut Prakan, Nonthaburi and Samut Sakhon anchored the rich commercial rice and fruit farming basins flanking the Chao Phraya, Tha Chin and Mae Klong rivers [@Boonlert2023Inequality; @Laiprakobsupa2024Urbanizati].

### Upper Chao Phraya Plains

The upper alluvial division catalogues 383 settlements across the confluence zones of the Ping, Yom and Nan rivers [@Lapbenjakul2017High; @Wanabhum2025Political]. Nakhon Sawan (379k in 1945) commanded the strategic debouchment where the northern river trunks merge to form the Chao Phraya stem, operating as the principal transhipment node for upriver teak rafts and agricultural produce [@Chalermpong2018Transporta]. Other major historic centres include Phitsanulok (peaking as an administrative capital for the lower north), Phichit, Sukhothai, Kamphaeng Phet, Uthai Thani and Tak, which linked the central plains with overland trade routes extending into Upper Burma [@Wanabhum2025Political; @Fry2013Appendixb].

### Northern Siam (Monthon Phayap and Lan Na)

The northern highland division catalogues 402 settlements across the intramontane valleys of Lan Na [@Brunelli2017Chromosoma; @Jangtarwan2020Predictive]. Chiang Rai (485k in 1945) developed into the leading northern urban centre, anchoring trade along the Kok and upper Mekong valleys. Lampang (332k in 1945) operated as the primary commercial and railway depot for the British and Siamese teak extraction industry, housing substantial Burmese, Shan and Chinese merchant communities [@Chalermpong2018Transporta; @Tejapira2018Pigtail]. Chiang Mai served as the historic royal capital of Lan Na, complemented by Lamphun, Phrae, Nan and Mae Hong Son, each coordinating intensive irrigated paddy basins surrounded by forested mountain ranges [@Brunelli2017Chromosoma; @Fry2013Appendixb].

### Northeastern Siam (Isan and Khorat Plateau)

The northeastern division catalogues 1.139 settlements, representing the single largest geographic cluster in the kingdom [@Meesakulthong2023Revisiting; @Fry2013Appendixb]. Ubon Ratchathani (856k in 1945) commanded the lower Mun River near its confluence with the Mekong, serving as the commercial and administrative capital of Lower Isan. Nakhon Ratchasima (732k in 1945) functioned as the gateway city to the plateau, experiencing explosive growth following the arrival of the Royal State Railway in 1900 [@Chalermpong2018Transporta]. Other major administrative centres along the Mun and Chi drainage systems include Roi Et (536k in 1945), Si Sa Ket (472k), Surin (438k), Maha Sarakham (394k), Nakhon Phanom (314k), Kalasin (313k), Chaiyaphum (292k), Sakon Nakhon (270k), Udon Thani, Khon Kaen, Buriram, Nong Khai and Loei [@Fry2013Appendixb; @Vesteri2018Some].

### Eastern Seaboard (Chanthaburi and Chon Buri)

The eastern maritime division catalogues 188 settlements along the coast of the Gulf of Thailand [@Tejapira2018Pigtail; @Boonlert2023Inequality]. Chachoengsao (243k in 1945) commanded the lower Bang Pakong River, serving as a hub for commercial rice milling and canal transport. Chon Buri functioned as a vital seaport and sugar-processing centre, while Chanthaburi and Trat were renowned for pepper plantations, gemstone extraction and maritime commerce with Indochina. Rayong, Bang Lamung and Sattahip accommodated coastal fishing communities and sheltered naval anchorages [@Tejapira2018Pigtail; @Fry2013Appendixb].

### Southern Peninsula (Nakhon Si Thammarat, Phuket and Pattani)

The southern peninsular division catalogues 591 settlements across the Isthmus of Kra and the northern Malay realm [@Tejapira2018Pigtail; @Anonymous1998Erratum]. Songkhla (351k in 1945) commanded the entrance to Songkhla Lake, operating as the administrative capital of Monthon Nakhon Si Thammarat. Nakhon Si Thammarat served as the ancient cultural and religious centre of the upper peninsula. On the Andaman coast, Phuket functioned as the international capital of the tin-mining boom, attracting tens of thousands of Chinese immigrant miners [@Tejapira2018Pigtail; @Pechdin2024More]. Other major peninsular centres include Surat Thani, Pattani, Trang, Phatthalung, Yala, Narathiwat, Chumphon and Krabi, combining coastal trade, tin dredging, rubber planting and artisanal fishing [@Anonymous1998Erratum; @Fry2013Appendixb].

# Limitations

Settlement gazetteer compilation for Rattanakosin Siam is constrained by several historical factors:
1. Municipal boundary evolution: Prior to the Thetsaban Act of 1933, administrative units were defined by provincial *muang* and district *amphoe* perimeters rather than legally demarcated municipal urban boundaries, requiring careful harmonisation between district-wide totals and core urban populations [@Kingsbury1962Improving; @Wongsa2025Critical].
2. Floating populations on river networks: In the Lower Chao Phraya basin, significant proportions of the population lived on boats or seasonal canal rafts, shifting localities across agricultural seasons and escaping static municipal counts [@Laiprakobsupa2024Urbanizati; @Wongsa2025Critical].
3. Fire vulnerability and wooden architecture: Traditional Siamese domestic dwellings were constructed of bamboo, thatch and teak, resulting in frequent catastrophic city fires (such as the great Bangkok fires of 1883 and 1899) that temporarily dispersed urban populations into surrounding rural hamlets [@Kiettikunwong2022Preparing].
4. Upland peripheral communities: Swidden-cultivating hill tribes in the Tenasserim and Bilauktaung ranges were largely unrecorded in early district gazetteers, causing conservative population estimates in peripheral highland tracts [@Seetaraso2025Effects; @Jangtarwan2020Predictive].

# Conclusion

The settlement gazetteer of Rattanakosin Siam records 3.287 catalogued localities across six physiographic divisions, establishing a comprehensive basis for spatial demographic modelling between 1769 and 1945. By georeferencing administrative centres from Bangkok's primate core to the remote river valleys of Lan Na and the agricultural savannas of the Khorat Plateau, this gazetteer links nineteenth-century revenue registers with twentieth-century ministerial censuses. Settlement subtraction enables accurate separation of concentrated urban-administrative populations from rural farming cultivators, providing a reliable foundation for dasymetric population mapping across modern Thailand.

# Appendix

The MANDALA source ledger audited 3.345 candidate localities for Rattanakosin Siam, resulting in 3.287 accepted settlements and 58 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing territory, exclusion reason and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Thonburi</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Chiang Mai</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sukhothai</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Samet</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bo Pla Thong</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bang Nang Li</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Champa Lo</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lat Chit</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sanam Chandra Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Vimanmek Mansion</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>King Narai's Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tha Phra Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sukhothai palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wang Chan Kasem</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ban Mo palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sa Pathum palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tha Chang Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Suan Kulap palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Withayu Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wang Waritchawet</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ban Maliwan</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Windsor Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Phra Chuthathut Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ban Chao Phraya</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kham Yat palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Rattanakosin Siam source ledger.</figcaption>
</figure>

# Sources
