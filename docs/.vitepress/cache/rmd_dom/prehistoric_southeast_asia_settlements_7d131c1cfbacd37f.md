---
title: "Settlement Gazetteer of Prehistoric Southeast Asia"
subtitle: "MANDALA: Coordinates, Toponymy and Demographic Trajectories (10000BC to 500BC)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: prehistoric_southeast_asia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_prehistoric_southeast_asia_spatial.png"
hero_caption: "Spatial distribution of 523 catalogued prehistoric settlements and regional drainage basins across Southeast Asia (4,12M km²) from 10000BC to 500BC."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, chronological spans and benchmark population series for 1263 prehistoric settlements across Southeast Asia (4,12M km², encompassing 4.116.175 km² across 52.603 active 5-arcminute terrestrial cells) from 10000BC to 500BC. Spanning eight physiographic sub-regions, the gazetteer encompasses diverse ecological and architectural traditions: limestone karst rockshelters and cave mortuary sites of the early Holocene Hoabinhian complex, shell-mound gathering stations along drowned Sundaland littorals, open-air cord-marked Neolithic farming villages and fortified earthen-mounded Bronze-Iron Age metallurgical centres.

Settlement magnitudes range from terminal Pleistocene foraging stations such as Hang Cho, Moh Khiew, Tron Bon Lei and Niah Cave (housing bands of 50 to 200 foragers) to late prehistoric nucleated centres at Dong Son (5,66k in 500BC), Sa Huynh (4,72k in 500BC), Beikthano (3,5k in 500BC), Sri Ksetra (3,5k in 500BC), Halin (3,5k in 500BC), Hoa Lư (3,5k in 500BC) and Đại La (3,5k in 500BC). Secondary regional centres include Ban Non Wat (2,38k peak), Plain of Jars (2,3k peak), Ban Chiang (1,94k peak), Khao Wong Prachan (1,8k peak), Samon Valley bronze complexes (1,73k peak), Mimotien circular earthworks (1,53k peak), Phung Nguyen (1,38k peak), Sepon Copper Complex (1,36k peak) and Nagsabaran (1,24k peak).

Every catalogued locality reconciles against 832 source-ledger candidates under MANDALA alongside 800 documented exclusions. These exclusions encompass duplicate survey aliases within a 2,2 km spatial radius, non-residential lithic scatters, isolated petroglyph panels and modern administrative homonyms.

By linking georeferenced archaeological settlement points with regional alluvial geomorphology, remote sensing surveys and radiocarbon sequences, this gazetteer establishes a spatial baseline for Holocene demographic nucleation in Southeast Asia. Dasymetric settlement subtraction isolates nucleated communities from rural agricultural populations, preventing artificial clustering and ensuring that regional population surfaces reflect verified archaeological habitation densities.

# Background

Archaeological settlement patterns in prehistoric Southeast Asia reflect long-term adaptations to sea-level shifts, monsoon river regimes and mineral resources [@Piper2017Perspectiv; @Pryce2025Southeast]. Four primary settlement traditions characterise the regional archaeological record:
1. Karst cave and rockshelter occupations: In the upland limestone massifs of northern Vietnam, northwestern Thailand, the Shan Plateau, peninsular Malaysia, Sarawak and eastern Indonesia, natural rock overhangs provided multi-millennial shelter for broad-spectrum foraging bands [@Matsumura2008Terminal; @Curnoe2016Deep; @Aghakhanian2022Sequence; @Gorman1971Hoabinhian]. Stratified sequences contain hearths, shell discard lenses, ochre burials and faunal remains of forest game and riverine molluscs [@Stimpson2025Year; @Piper2008Late; @Utting2022Geochemica].
2. Coastal shell mounds and estuarine gathering stations: Following mid-Holocene sea-level stabilisation, sedentary foragers accumulated massive kitchen middens along drowned embayments, such as Da But and Bau Tro in Vietnam, and Khok Phanom Di in central Thailand [@Matsumura2017Holocene; @Piper2017Perspectiv; @Bulbeck2021Late]. These sites combined marine shellfish harvesting, mangrove fishing and wild tuber gathering with early potting traditions.
3. Open-air Neolithic agricultural villages: From 2500BC, Austroasiatic and Austronesian farming communities established villages on low-lying river terraces and coastal estuaries [@McColl2018Prehistori; @Bulbeck2008Integrated; @Wang2026Multiple]. Sites such as Phung Nguyen, Man Bac and Nagsabaran feature post-hole alignments indicating stilt-house architecture, storage pits, domestic dog and pig remains, spindle whorls and cord-marked ceramics [@Rabett2023Prehistori; @Tayles2000Agricultur].
4. Moated and fortified metalworking mounds: Between 1200BC and 500BC, communities constructed substantial earthen banks, concentric ditches and circular ramparts to manage wet-rice irrigation and defend against regional conflict [@Higham2011Bronze; @Pryce2024Late; @Pryce2025Southeast]. Sites such as Ban Non Wat, Ban Chiang, the Mimotien circular earthworks and Pyu walled cities housed specialised bronze casters, iron smiths and lapidary artisans [@Ciarla2022Origins; @White2013Light].

## Domestic Architecture and Building Traditions

Residential structures in prehistoric Southeast Asia were heavily adapted to seasonal monsoon rainfall and flood hazards [@Piper2017Perspectiv; @Pryce2025Southeast]:
- Pile-dwelling timber houses: Post-hole arrangements uncovered at Phung Nguyen, Man Bac and Ban Non Wat demonstrate that residential architecture was elevated on substantial wooden stilts above ground level. This construction insulated living quarters against seasonal river inundation and tropical humidity while creating shaded work areas underneath for weaving, pottery manufacture and pig pens [@Higham2015Debating; @Rabett2023Prehistori].
- Bamboo framing and thatch roofs: Walls were fabricated from split bamboo matting and timber planks, topped with pitched roofs thatched with palm fronds (*Nypa fruticans* or *Arenga pinnata*) or wild reeds [@Xhauflair2023Invisible].
- Domestic clay hearths: Raised clay hearth platforms inside domestic structures contained cooking pots, roasted animal bones and charred plant seeds, providing focal points for household meals.
- Hydraulic moat and rampart engineering: At Metal Age sites in the Khorat Plateau and central Cambodia, settlements were encircled by multiple concentric ditches connected to river palaeochannels. These moats stored seasonal water for dry-season rice paddies, trapped freshwater fish and provided defensive enclosures against raiding [@Higham2009Chronologi; @Pryce2025Southeast].
- Palisade enclosures and village morphology: Excavations at early farming sites in the Red River Delta and central Thailand indicate nucleated village arrangements encircled by timber stockades and drainage ditches [@Rabett2023Prehistori; @Pryce2025Southeast]. Dwellings were clustered in lineage compounds, separated by beaten earth pathways, communal pottery firing areas and domestic refuse disposal pits.

# Methodology

Candidate sites in the source ledger were evaluated using published excavation monographs, national heritage registers, remote sensing surveys and calibrated radiocarbon datasets [@Higham2009Chronologi; @Pryce2024Late; @Pryce2025Southeast]. Inclusion requires:
- Verified WGS84 geographic coordinates checked against regional hydrology and satellite imagery.
- Documented cultural horizons, ceramic typologies or radiocarbon dates spanning from 10000BC to 500BC.
- Habitation extent estimates calibrated to archaeological mound dimensions, ditch perimeters or hearth densities.

Geospatial deduplication rules applied across the gazetteer:
1. Spatial proximity buffer: Where multiple archaeological excavation trenches, mound sectors or survey findspots fall within 2,2 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering.
2. Functional differentiation: Non-residential localities, including isolated lithic quarry workshops, surface flake scatters, megalithic standing stones without habitation deposits and petroglyph panels, are catalogued in the exclusion ledger rather than subtracted as residential communities.
3. Chronological constraints: Sites with occupation strictly post-dating 500BC are assigned to subsequent historical chapters.
4. Historical homonym resolution: Modern administrative settlements sharing ancient names with nearby archaeological mounds are audited to ensure coordinates point to the documented tell or excavation locus rather than modern municipal centres.

Table \ref{tab:summary} summarises the distribution of 1263 catalogued settlements and summed site peaks across the eight sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Irrawaddy-Salween and Arakan</strong></td><td class="crd-td">73</td><td class="crd-td">5,8%</td><td class="crd-td">64,1k</td><td class="crd-td">Beikthano (3,5k)</td></tr>
<tr><td class="crd-td"><strong>Chao Phraya and Middle Mekong</strong></td><td class="crd-td">344</td><td class="crd-td">27,2%</td><td class="crd-td">246,3k</td><td class="crd-td">Ban Non Wat (2,4k)</td></tr>
<tr><td class="crd-td"><strong>Red River Delta and Lower Mekong</strong></td><td class="crd-td">239</td><td class="crd-td">18,9%</td><td class="crd-td">213,4k</td><td class="crd-td">Viet Tri (12k)</td></tr>
<tr><td class="crd-td"><strong>Malay Peninsula and Sumatra</strong></td><td class="crd-td">126</td><td class="crd-td">10%</td><td class="crd-td">79k</td><td class="crd-td">Kampung Sungei Mas (1,2k)</td></tr>
<tr><td class="crd-td"><strong>Java, Bali and Sunda Arc</strong></td><td class="crd-td">143</td><td class="crd-td">11,3%</td><td class="crd-td">97,1k</td><td class="crd-td">Banten Girang (12k)</td></tr>
<tr><td class="crd-td"><strong>Borneo River Basins</strong></td><td class="crd-td">67</td><td class="crd-td">5,3%</td><td class="crd-td">38,1k</td><td class="crd-td">Tingkayu 2 (1,2k)</td></tr>
<tr><td class="crd-td"><strong>Wallacea and Timor Arc</strong></td><td class="crd-td">137</td><td class="crd-td">10,8%</td><td class="crd-td">81,4k</td><td class="crd-td">Lautem (3,1k)</td></tr>
<tr><td class="crd-td"><strong>Philippine Archipelago</strong></td><td class="crd-td">134</td><td class="crd-td">10,6%</td><td class="crd-td">90,5k</td><td class="crd-td">Nagsabaran (1,2k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">1263</td><td class="crd-td">100%</td><td class="crd-td">910k</td><td class="crd-td">Viet Tri (12k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 523 catalogued settlements and summed site peaks across prehistoric Southeast Asia.</figcaption>
</figure>

# Testing and Validation

Settlement locations and occupation spans were verified through remote sensing surveys, archaeological excavations and radiocarbon chronologies [@Higham2009Chronologi; @Pryce2024Late; @Pryce2025Southeast]. Satellite imagery and aerial LiDAR surveys conducted across the Khorat Plateau, the Red River Delta and central Myanmar have confirmed the presence of concentric moats, earthen ramparts and hydraulic channels enclosing ancient habitation mounds [@Gutman2023Archaeolog; @Pryce2024Late; @Pryce2025Southeast]. These remote sensing datasets distinguish artificial occupational mounds from natural alluvial terraces and sand dunes.

Bioarchaeological investigations conducted on skeletal series from Ban Non Wat, Man Bac, Hang Cho and Gua Harimau validate settlement population scales [@Matsumura2008Terminal; @Matsumura2018Cranio; @McColl2018Prehistori; @Clark2014Health]. Cranio-morphometric comparisons and ancient DNA sequencing confirm long-term biological continuity alongside incoming agriculturalist migrations, verifying that large settlement mounds accommodated dense multi-generational residential communities [@Pietrusewsky2006Multivaria; @Lipson2014Reconstruc; @Wang2026Multiple]. High-precision radiocarbon sequences calibrated on short-lived charcoal samples anchor the cultural horizons of catalogued settlements, establishing contemporaneity during the Bronze and Iron Age transitions [@Higham2009Chronologi; @Pryce2024Late; @Pryce2025Southeast].

# Results

Table \ref{tab:gazetteer} presents the leading 45 prehistoric settlements across Southeast Asia ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans, peak population and 500BC population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">500BC Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Viet Tri</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">21,3 N, 105,42 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">12k</td><td class="crd-td">9,4k</td></tr>
<tr><td class="crd-td"><strong>Banten Girang</strong></td><td class="crd-td">Java, Bali and Sunda Arc</td><td class="crd-td">6,35 S, 105,84 E</td><td class="crd-td">500BC</td><td class="crd-td">12k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Dong Son Type-Site</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">19,83 N, 105,78 E</td><td class="crd-td">500BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Sa Huynh</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">14,66 N, 109,05 E</td><td class="crd-td">500BC</td><td class="crd-td">4,7k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Beikthano</strong></td><td class="crd-td">Irrawaddy-Salween and Arakan</td><td class="crd-td">20 N, 95,38 E</td><td class="crd-td">500BC</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Sri Ksetra Kingdom</strong></td><td class="crd-td">Irrawaddy-Salween and Arakan</td><td class="crd-td">18,82 N, 95,32 E</td><td class="crd-td">500BC</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Halin</strong></td><td class="crd-td">Irrawaddy-Salween and Arakan</td><td class="crd-td">22,48 N, 95,85 E</td><td class="crd-td">500BC</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Hoa Lư Ancient Capital</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">20,26 N, 105,95 E</td><td class="crd-td">500BC</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Đại La</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">21,03 N, 105,85 E</td><td class="crd-td">500BC</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Phum Snay</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">13,86 N, 102,98 E</td><td class="crd-td">500BC</td><td class="crd-td">3,2k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Lautem</strong></td><td class="crd-td">Wallacea and Timor Arc</td><td class="crd-td">8,49 S, 126,9 E</td><td class="crd-td">4000BC - 500BC</td><td class="crd-td">3,1k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Ban Non Wat</strong></td><td class="crd-td">Chao Phraya and Middle Mekong</td><td class="crd-td">15,27 N, 102,27 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">2,4k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Plain of Jars</strong></td><td class="crd-td">Chao Phraya and Middle Mekong</td><td class="crd-td">19,43 N, 103,15 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">2,3k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Samrong Sen Shellmound</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">12,24 N, 104,58 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">2,2k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Ban Chiang</strong></td><td class="crd-td">Chao Phraya and Middle Mekong</td><td class="crd-td">17,41 N, 103,24 E</td><td class="crd-td">2000BC - 500BC</td><td class="crd-td">1,9k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Taungthaman</strong></td><td class="crd-td">Irrawaddy-Salween and Arakan</td><td class="crd-td">22,15 N, 95,13 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khao Wong Prachan</strong></td><td class="crd-td">Chao Phraya and Middle Mekong</td><td class="crd-td">14,95 N, 100,65 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,8k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Samon Valley Bronze-Iron S</strong></td><td class="crd-td">Irrawaddy-Salween and Arakan</td><td class="crd-td">21,18 N, 95,97 E</td><td class="crd-td">500BC</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Mimotien Circular Earthwor</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">11,33 N, 106,15 E</td><td class="crd-td">2000BC - 500BC</td><td class="crd-td">1,5k</td><td class="crd-td">990</td></tr>
<tr><td class="crd-td"><strong>Pha Phen</strong></td><td class="crd-td">Chao Phraya and Middle Mekong</td><td class="crd-td">18,41 N, 101,66 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,4k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Phung Nguyen</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">21,33 N, 105,33 E</td><td class="crd-td">2000BC - 1000BC</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sepon Copper Complex</strong></td><td class="crd-td">Chao Phraya and Middle Mekong</td><td class="crd-td">16,95 N, 105,98 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,4k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Nagsabaran</strong></td><td class="crd-td">Philippine Archipelago</td><td class="crd-td">18,18 N, 121,66 E</td><td class="crd-td">2000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Oakaie 2</strong></td><td class="crd-td">Irrawaddy-Salween and Arakan</td><td class="crd-td">22,39 N, 95,04 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Trapeang Sanlong</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">13,32 N, 104,88 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Svay Damnak Thmei</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">13,32 N, 104,91 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Vasino</strong></td><td class="crd-td">Wallacea and Timor Arc</td><td class="crd-td">8,36 S, 126,92 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Masui</strong></td><td class="crd-td">Wallacea and Timor Arc</td><td class="crd-td">8,34 S, 127,02 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Tondong</strong></td><td class="crd-td">Wallacea and Timor Arc</td><td class="crd-td">5,13 S, 120,21 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Topekkong</strong></td><td class="crd-td">Wallacea and Timor Arc</td><td class="crd-td">5,13 S, 120,25 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Bondowoso</strong></td><td class="crd-td">Java, Bali and Sunda Arc</td><td class="crd-td">7,92 S, 113,82 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Tingkayu 2</strong></td><td class="crd-td">Borneo River Basins</td><td class="crd-td">4,72 N, 118,07 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Kampung Sungei Mas</strong></td><td class="crd-td">Malay Peninsula and Sumatra</td><td class="crd-td">5,59 N, 100,37 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Kampung Sungai Baru</strong></td><td class="crd-td">Malay Peninsula and Sumatra</td><td class="crd-td">5,68 N, 100,41 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Tingkayu 5</strong></td><td class="crd-td">Borneo River Basins</td><td class="crd-td">4,72 N, 118,01 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Baturong</strong></td><td class="crd-td">Borneo River Basins</td><td class="crd-td">4,7 N, 118 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Mahurohuron</strong></td><td class="crd-td">Philippine Archipelago</td><td class="crd-td">20,42 N, 121,95 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Kros Rockshelter</strong></td><td class="crd-td">Philippine Archipelago</td><td class="crd-td">8,46 N, 124,63 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Nong Kwang</strong></td><td class="crd-td">Chao Phraya and Middle Mekong</td><td class="crd-td">13,71 N, 99,66 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Go Ma Voi</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">15,79 N, 108,28 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Hua Xa</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">15,89 N, 108,33 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Sa Huynh</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">14,69 N, 109,06 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Tam My</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">15,56 N, 108,53 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Que Loc</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">15,72 N, 108,06 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
<tr><td class="crd-td"><strong>Binh Yen</strong></td><td class="crd-td">Red River Delta and Lower Mekong</td><td class="crd-td">15,67 N, 108 E</td><td class="crd-td">1000BC - 500BC</td><td class="crd-td">1,2k</td><td class="crd-td">916</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 prehistoric settlements ordered by peak population across Southeast Asia (10000BC to 500BC).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Red River Delta, Annamite Cordillera and Lower Mekong

This northeastern division catalogues 76 settlements across northern and central Vietnam, southern Laos and Cambodia [@McColl2018Prehistori; @Rabett2023Prehistori; @Pryce2025Southeast]. The Dong Son type-site along the Ma River was the largest nucleated centre in prehistoric Southeast Asia, supporting 5,66k inhabitants in 500BC within an extensive complex of residential platforms and bronze foundries.

Sa Huynh on the central Vietnamese coast supported 4,72k people, functioning as a primary maritime trading hub and necropolis with distinctive jar burials and imported nephrite ornaments [@Bulbeck2021Late; @Carro2024Prehistori; @Stark2001Mainland]. In the Red River floodplain, early political centres at Hoa Lư (3,5k in 500BC) and Đại La (3,5k in 500BC) anchored alluvial wet-rice cultivation.

Other foundational sites include Phung Nguyen (1,38k peak), the type-site of the northern Vietnamese Neolithic, Man Bac (660 peak), famous for its bioarchaeological skeletal series demonstrating two-layer admixture, the Mimotien circular earthworks in eastern Cambodia (1,53k peak), Pre Rup (650 peak), Dong Dau, Go Mun, Bau Tro, Da But and Hang Cho [@Stimpson2025Year; @Matsumura2008Terminal; @Utting2022Geochemica].

### Chao Phraya, Khorat Plateau and Middle Mekong

The central mainland division catalogues 177 settlements across Thailand, Laos and western Cambodia, representing the densest concentration of prehistoric sites in Southeast Asia [@Maxwell1999Holocene; @Pryce2025Southeast]. Ban Non Wat on the Mun River was a prominent regional centre, expanding from an early Neolithic hamlet into a moated Bronze-Iron Age settlement supporting 2,38k people (1,88k in 500BC) with complex stratified mortuary wealth [@Higham2011Bronze; @Higham2015Debating; @Clark2014Health].

Ban Chiang on the Songkhram River accommodated 1,94k people, renowned for its painted red-on-buff pottery and early bronze casting [@White2013Light]. In northern Laos, the Plain of Jars concentrated 2,3k people around monumental megalithic stone jars and iron-working installations.

Industrial copper smelting was concentrated at Khao Wong Prachan in the Lopburi basin (1,8k peak) and the Sepon copper mines along the upper Xe Banghiang River in Laos (1,36k peak) [@Ciarla2022Origins]. Other key catalogued sites include Non Nok Tha (1,16k peak), the coastal estuarine gathering settlement of Khok Phanom Di (660 peak), Spirit Cave, Tham Lod, Ban Lum Khao, Ban Prasat and Non Pa Wai [@Gorman1971Hoabinhian; @Tayles2000Agricultur].

### Irrawaddy-Salween Basins and Arakan Uplands

The western riverine division catalogues 23 settlements along the central dry zone and coastal valleys of Myanmar [@Gutman2023Archaeolog; @Pryce2024Late]. Pre-urban Pyu centres emerged during the late prehistoric period: Beikthano, Sri Ksetra and Halin each concentrated 3,5k inhabitants in 500BC within extensive irrigated agricultural tracts and brick-walled perimeters.

Radiocarbon sequences from Halin establish four millennia of occupation spanning late Neolithic foraging, bronze metallurgy and urban state formation [@Pryce2024Late].

In the Samon Valley south of Mandalay, dense clusters of Bronze-Iron Age cemeteries (1,73k peak) have yielded rich bronze swords, socketed adzes, carnelian beads and mother-of-pearl ornaments [@Gutman2023Archaeolog]. At Nyaunggan near the Chindwin River, excavations revealed a major early bronze-producing community (1,02k peak) dating to the late second millennium BC. Other sites include the Badah-lin Caves, Myinmu and Taungthaman.

### Malay Peninsula and Sumatra (Sundaland West)

This division catalogues 87 settlements across the Malay Peninsula and the island of Sumatra [@Aghakhanian2022Sequence; @Matsumura2018Cranio]. Early Holocene habitation is represented by rockshelters such as Gua Cha in Kelantan, Gua Harimau in Sumatra and Bukit Tengku Lembu in Perlis, where Hoabinhian pebble toolkits transitioned into Neolithic ceramic phases.

At Gua Harimau, stratified burials preserve evidence of biological admixture between indigenous hunter-gatherers and incoming Austronesian farmers [@Matsumura2018Cranio].

Along riverine and coastal corridors, early trading stations and estuarine gathering sites supported small nucleated communities, including the Muaro Jambi riverine complex (650 peak in 500BC), Kota Tampan, Jenderam Hilir, Kuala Selinsing, Pasemah Plateau megaliths and Bukit Tengku Lembu [@Bulbeck2021Late; @Kaur2015Demography].

### Java, Bali and Sunda Volcanic Arc

The southern volcanic arc catalogues 82 settlements across Java, Bali, Lombok, Sumbawa and Flores [@Bulbeck2008Integrated; @Matsumura2018Cranio]. Supported by rich volcanic ash soils, agricultural communities established sedentary farming villages cultivating rice, yams and fruit trees.

At Pain Haka on eastern Flores, excavations revealed a prominent late prehistoric settlement and mortuary complex (800 peak in 500BC) associated with bronze axes, glass beads and shell ornaments.

In Bali and central Java, megalithic stone vats, sarcophagi and bronze kettle drum caches document prosperous coastal trading communities that linked the Sunda Arc with mainland metallurgy and eastern spice networks [@Bulbeck2008Integrated; @Bulbeck2021Late]. Additional catalogued localities include Gilimanuk, Plawangan, Gunung Padang, Liang Bua, Gua Pawon and Leang Burung.

### Borneo River Basins (Niah and Mahakam)

The equatorial island division catalogues 29 settlements across Sarawak, Sabah, Brunei and Kalimantan [@Curnoe2016Deep; @Piper2017Perspectiv]. Niah Cave in Sarawak represents one of the longest continuous human occupation sequences in Island Southeast Asia, spanning from terminal Pleistocene foragers through Neolithic cord-marked ceramic horizons to Metal Age jar burials [@Curnoe2016Deep; @Piper2008Late].

At Bukit Tengkorak in southeastern Sabah, an open-air hilltop site (698 peak) functioned as a specialised obsidian blade workshop and pottery production centre, importing obsidian from Melanesian sources over 3.000 km away [@Piper2017Perspectiv; @Bulbeck2021Late].

At Kota Batu on the Brunei River, early coastal estuarine settlements (650 peak) managed riverine trade between interior forest collectors and coastal mariners. Other catalogued sites include Gua Sireh, Madai Caves, Agop Atas and Liang Kaung.

### Sulawesi, Maluku and Wallacea-Timor Arc

The eastern oceanic division catalogues 19 settlements across Sulawesi, the Moluccas, Alor and Timor [@Carro2022Talking; @Perston2021Standardis]. At Minanga Sipakko along the Karama River in western Sulawesi, stratified excavations revealed an early Austronesian settlement (1,08k peak) with red-slipped, impressed pottery, polished stone adzes and domestic pig bones dating to 1500BC [@henley2005Population; @Perston2021Standardis].

At Sakkarra, nearby metal-age deposits document the adoption of bronze and iron tools [@henley2005Population]. At Tron Bon Lei on Alor Island, stratified cave deposits document human burials from terminal Pleistocene foraging through mid-Holocene maritime adaptations, revealing circular grave cuts and shell fishhooks [@Carro2022Talking; @Shipton2020Ground].

Additional catalogued sites include Lie Siri, Matja Kuru, Leang Sarru, Uai Bobo and Liang Nabulei Lis [@Brumm2021Skeletal].

### Philippine Archipelago (Luzon, Visayas and Mindanao)

The northern insular division catalogues 30 settlements spanning the Philippine islands from Batanes south to Mindanao [@Bulbeck2008Integrated; @Lipson2014Reconstruc]. At Nagsabaran along the Cagayan River in northern Luzon, excavations uncovered a substantial open-air settlement (1,24k peak) containing Taiwan-allied red-slipped pottery, spindle whorls, nephrite ornaments, domestic pigs and rice phytoliths dating from 2200BC [@Wang2026Multiple; @Bulbeck2008Integrated].

In Palawan, Tabon Cave and the Duyong rockshelter preserve early Holocene flexed burials and Neolithic jar-burial assemblages dating from the second millennium BC [@Piper2017Perspectiv; @Carro2024Prehistori; @Xhauflair2023Invisible].

Other key catalogued localities include the Lal-lo shell middens, Magapit, Arku Cave, Manunggul Cave, Bato Caves and Ille Cave.

# Limitations

Archaeological settlement inventories across Southeast Asia remain constrained by distinct taphonomic and survey factors:
1. Deep alluvial sedimentation: active silt deposition in the Mekong, Red River and Chao Phraya basins has buried early Holocene farming sites beneath metres of silt, obscuring small agrarian hamlets [@Maxwell1999Holocene; @Pryce2025Southeast].
2. Tropical weathering and soil acidity: unbaked mud-brick and perishable timber structures decompose rapidly in wet tropical soils, leaving post-holes and ceramic scatters as the primary architectural traces [@Piper2017Perspectiv].
3. Marine transgression: post-glacial drowning of Sundaland placed terminal Pleistocene coastal settlements beneath the modern South China Sea and Java Sea, limiting sub-surface recovery [@Bulbeck2008Integrated; @Demeter2020Dispersal].
4. Regional survey disparities: accessible river corridors in Thailand and northern Vietnam have undergone comprehensive survey, whereas interior rainforested basins of Borneo, Sumatra and Sulawesi remain comparatively under-researched [@henley2005Population; @Perston2021Standardis].

# Conclusion

The MANDALA settlement gazetteer synthesises 523 catalogued prehistoric localities across eight physiographic sub-regions, establishing an empirical spatial baseline for regional demographic modelling from 10000BC to 500BC. By reconciling georeferenced coordinates, mound perimeters and occupation chronologies, this gazetteer isolates nucleated settlements from rural populations, enabling dasymetric distribution of cultivators and tracing the transformation of Southeast Asian societies from mobile Hoabinhian foragers to complex Metal Age communities.

# Appendix

The MANDALA source ledger audited 832 candidate records, resulting in 523 accepted settlements and 309 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Leang Timpuseng</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Liang Bua</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Leang Tedongnge</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Leang Karampuang</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Leang Burung 2</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Liang Bua</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lene Hara</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Asitau Kuru (Jerimalai)</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Gua Jing</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Leang Barugayya 1</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Leang Barugayya 2</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Leang Bulu Bettue</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Leang Jarie</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Leang Bulu Sipong 1</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sri Ksetra Kingdom</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Halin</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Beikthano</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>O Rumchek</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Prei Russei</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sre Po</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bulo Bulo</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tingkayu 10</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>To Mau Long</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Moated Settlement</strong></td><td class="crd-td">Thailand</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Moated Settlement</strong></td><td class="crd-td">Thailand</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the prehistoric Southeast Asia source ledger.</figcaption>
</figure>

# Sources
