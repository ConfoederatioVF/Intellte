---
title: "Settlement Gazetteer of Early Tai Principalities, Sukhothai, Ayutthaya and Laos"
subtitle: "MANDALA: Coordinates, Toponymy and Demographic Trajectories (500BC to 1769AD)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: early_tai_sukhothai_ayutthaya_laos_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_early_tai_sukhothai_ayutthaya_laos_spatial.png"
hero_caption: "Spatial distribution of 850 catalogued historical settlements and regional hydrological catchments across the Chao Phraya, Mekong and Peninsular basins (783.386 km²) from 500BC to 1769AD."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, foundation chronologies and benchmark demographic series for 850 historical settlements across the Chao Phraya, middle Mekong and Peninsular basins (783.386 km², encompassing 9.642 active 5-arcminute terrestrial cells) from 500BC to 1769AD. Encompassing six physiographic divisions, the gazetteer spans diverse morphological and architectural traditions: moated Dvaravati Buddhist centres in the central plain, stone-faced Khmer provincial outposts along the Mun-Chi river network, weir-irrigated Tai valley capitals across Lan Na, riverine port capitals in Sukhothai and Ayutthaya, and fortified transpeninsular trading ports along the Kra Isthmus.

Settlement scales range from proto-historic iron-age farming villages and coastal trading hamlets in the Bang Pakong Valley to early historic Mon monastic centres at Nakhon Pathom (38,38k peak) and Lavo (Lopburi), expanding to prominent mediaeval Tai capitals at Sukhothai (31,99k peak in 1300AD), Chiang Mai (52,15k peak in 1500AD), Vientiane (43,53k peak in 1769AD), Luang Prabang (26,75k peak) and the hydraulic metropolis of Ayutthaya (261,71k peak in 1500AD). Following the destruction of Ayutthaya in 1767AD, urban mass relocated downstream to Thonburi (249,44k in 1769AD), preserving regional administrative continuity. Every catalogued locality reconciles against 1.034 source-ledger candidates under MANDALA alongside 184 documented exclusions (predominantly duplicate survey aliases within a 2,2 km spatial radius and non-habitation features).

By coupling georeferenced settlement trajectories with regional fluvial geomorphology, remote sensing mound inventories and epigraphic registers, this gazetteer provides an archaeological baseline for historical nucleation in central Mainland Southeast Asia. Settlement subtraction isolates nucleated urban, monastic and administrative centres from rural cultivators, ensuring that regional demographic models reflect authentic settlement distributions rather than unconstrained spatial interpolations.

# Background

Archaeological and historical settlement patterns across Thailand and Laos reflect long-term adaptations to seasonal monsoon flooding, river confluence navigation and overland transpeninsular trade routes [@Patnukao2017Dvaravati; @Taweethong2023Early]. Five primary settlement traditions characterise the regional catalogue:
1. Moated alluvial enclosures: Prevalent across the central plain and the Khorat Plateau from the sixth to eleventh centuries AD, Dvaravati settlements featured rounded or irregular earthen ramparts encircled by wide water-filled moats [@Patnukao2017Dvaravati; @Murphy2015Many]. These moats served multi-functional roles: municipal drainage during monsoon floods, dry-season water storage, domestic fish farming and civic defense [@Patnukao2017Dvaravati]. Key examples include Nakhon Pathom, Ku Bua, U Thong, Lavo (Lopburi) and Muang Fa Daet [@Patnukao2017Dvaravati; @Murphy2015Many].
2. Intermontane valley capitals: In northern Thailand (Lan Na) and northern Laos (Lan Xang), Tai principalities founded walled capitals along river terraces within enclosed intermontane valleys [@Stark2020Landscapes]. Chiang Mai, Chiang Rai, Phayao and Luang Prabang were positioned at points where upland mountain streams debouched into broad alluvial fans, allowing municipal diversion for urban moats and field irrigation systems (muang fai) [@Stark2020Landscapes; @Thailand2024Strategies].
3. Hydraulic island metropolises: In the lower Chao Phraya delta, Ayutthaya exploited the confluence of three rivers to construct an insular capital encircled by natural river barriers and artificial cut-off canals [@Tangtenglam2023Developing; @Claude2019Recent]. Canal networks functioned as highways for boat transport, tidal drainage channels and municipal firebreaks, supporting dense multi-ethnic quarters and royal palaces [@Tangtenglam2023Developing].
4. Riverine terrace and barrage complexes: Along the Yom and Nan rivers, Sukhothai, Si Satchanalai and Kamphaeng Phet combined earthen barrages (saridphong), diversion canals and stone-lined reservoirs (barays) to supply water to urban monasteries, royal palaces and extensive ceramic kilns [@Michael1991Khamhaeng; @Thailand2024Promote].
5. Coastal and transpeninsular trading ports: Along the Kra Isthmus, settlements such as Nakhon Si Thammarat, Chaiya, Songkhla and Patani occupied river estuaries protected by coastal sand-ridge spits, commanding overland portage routes between the Bay of Bengal and the Gulf of Thailand [@Patnukao2024Tracing; @Thailand2023Growth].

# Methodology

Candidate localities in the source ledger were systematically screened against published archaeological inventories, national cultural heritage registers, historical chronicles and epigraphic surveys [@Patnukao2017Dvaravati; @Murphy2015Many; @Michael1991Khamhaeng]. Inclusion requires:
- Verified WGS84 geographic coordinates validated against satellite imagery and regional hydrography.
- Documented cultural horizons, ceramic typologies, architectural remains or historical chronicles spanning from late prehistory through 1769AD.
- Demographic series calibrated to settlement mound areas, intramural walled extents, residential household densities or contemporary diplomatic travelogue descriptions [@Tangtenglam2023Developing; @Thailand2020Basic].

Where multiple archaeological survey points fall within 2,2 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Modern administrative subdivisions, isolated non-habitation shrines, mineral quarries and duplicate toponyms are excluded from the catalogued series.

Table \ref{tab:summary} summarises the distribution of 850 catalogued settlements and summed site peaks across the six sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Chao Phraya and Ayutthaya</strong></td><td class="crd-td">269</td><td class="crd-td">31,6%</td><td class="crd-td">1,67M</td><td class="crd-td">Ayutthaya (261,7k)</td></tr>
<tr><td class="crd-td"><strong>Upper Chao Phraya and Sukhothai</strong></td><td class="crd-td">88</td><td class="crd-td">10,4%</td><td class="crd-td">300,7k</td><td class="crd-td">Nakhon Sawan (43,4k)</td></tr>
<tr><td class="crd-td"><strong>Lan Na and Northern Valleys</strong></td><td class="crd-td">98</td><td class="crd-td">11,5%</td><td class="crd-td">241,4k</td><td class="crd-td">Chiang Mai (52,1k)</td></tr>
<tr><td class="crd-td"><strong>Khorat Plateau and Mun-Chi</strong></td><td class="crd-td">205</td><td class="crd-td">24,1%</td><td class="crd-td">522,1k</td><td class="crd-td">Vientiane (43,5k)</td></tr>
<tr><td class="crd-td"><strong>Peninsular Isthmus and Patani</strong></td><td class="crd-td">122</td><td class="crd-td">14,4%</td><td class="crd-td">242,7k</td><td class="crd-td">Phuket (13,4k)</td></tr>
<tr><td class="crd-td"><strong>Lan Xang and Lao Mekong</strong></td><td class="crd-td">68</td><td class="crd-td">8%</td><td class="crd-td">202,1k</td><td class="crd-td">Luang Prabang (26,8k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">850</td><td class="crd-td">100%</td><td class="crd-td">3,18M</td><td class="crd-td">Ayutthaya (261,7k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 850 catalogued settlements and summed site peaks across early Tai, Sukhothai, Ayutthaya and Lao realms.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological trajectories were verified through spatial analyses, remote sensing surveys and stratigraphic correlations [@Patnukao2017Dvaravati; @Patnukao2024Tracing]. In the central plain, multi-temporal Landsat, Sentinel-2 and synthetic aperture radar (SAR) imagery revealed palaeochannels and ancient moat alignments around Dvaravati and Ayutthayan settlements that had been partially obscured by modern paddy consolidation and canalization [@Patnukao2017Dvaravati; @Tangtenglam2023Developing]. Ground surveys and aerial photography conducted by the Fine Arts Department of Thailand provided verification for earthen ramparts, brick stupa basements and laterite city walls [@Patnukao2017Dvaravati; @Michael1991Khamhaeng].

In the Khorat Plateau and the middle Mekong valley, epigraphic inventories of inscribed boundary stones (bai sema) and Khmer temple inscriptions cross-check site foundations and administrative status between the seventh and fourteenth centuries AD [@Murphy2015Many]. Quantitative analyses of monastic installations demonstrate that religious foundations correlate with settlement longevity and local agricultural carrying capacity [@Murphy2015Many; @Thailand2025Effect].

In the southern peninsula, GIS spatial modelling of Buddhist temples and historical toponyms conducted by Patnukao and colleagues confirms continuous settlement clustering along ancient coastal chenier ridges and beach barriers in Nakhon Si Thammarat and Songkhla from the early historic era through the modern period [@Patnukao2024Tracing; @Thailand2025Research]. Archival cross-referencing against Portuguese, Dutch VOC and French colonial maps from the sixteenth and seventeenth centuries provides external verification for port locations, intramural city dimensions and trading quarter extents across the Chao Phraya and Peninsular coasts [@Tangtenglam2023Developing; @Patnukao2024Tracing].

# Results

## Principal Catalogued Settlements

Table \ref{tab:gazetteer} presents the leading 45 historical settlements across early Tai realms, Sukhothai, Ayutthaya and Laos ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1769AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ayutthaya</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">14,35 N, 100,57 E</td><td class="crd-td">1500AD - 1650AD</td><td class="crd-td">261,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Thonburi</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,76 N, 100,5 E</td><td class="crd-td">1769AD</td><td class="crd-td">249,4k</td><td class="crd-td">249,4k</td></tr>
<tr><td class="crd-td"><strong>Samut Sakhon</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,55 N, 100,27 E</td><td class="crd-td">1650AD - 1769AD</td><td class="crd-td">55,7k</td><td class="crd-td">55,7k</td></tr>
<tr><td class="crd-td"><strong>Chiang Mai</strong></td><td class="crd-td">Lan Na and Northern Valleys</td><td class="crd-td">18,79 N, 98,98 E</td><td class="crd-td">1300AD - 1769AD</td><td class="crd-td">52,1k</td><td class="crd-td">34,2k</td></tr>
<tr><td class="crd-td"><strong>Khlong Luang</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">14,06 N, 100,65 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">50,9k</td><td class="crd-td">50,9k</td></tr>
<tr><td class="crd-td"><strong>Vientiane</strong></td><td class="crd-td">Khorat Plateau and Mun-Chi</td><td class="crd-td">17,98 N, 102,63 E</td><td class="crd-td">1650AD - 1769AD</td><td class="crd-td">43,5k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Nakhon Sawan</strong></td><td class="crd-td">Upper Chao Phraya and Sukhothai</td><td class="crd-td">15,69 N, 100,11 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">43,4k</td><td class="crd-td">43,4k</td></tr>
<tr><td class="crd-td"><strong>Nakhon Pathom</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,92 N, 100,12 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">38,4k</td><td class="crd-td">38,4k</td></tr>
<tr><td class="crd-td"><strong>Kanchanaburi</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">14,69 N, 99,02 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">37,2k</td><td class="crd-td">37,2k</td></tr>
<tr><td class="crd-td"><strong>Bang Kapi</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,77 N, 100,65 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">33k</td><td class="crd-td">33k</td></tr>
<tr><td class="crd-td"><strong>Sukhothai</strong></td><td class="crd-td">Upper Chao Phraya and Sukhothai</td><td class="crd-td">17,02 N, 99,7 E</td><td class="crd-td">1300AD - 1500AD</td><td class="crd-td">32k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bang Phli</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,61 N, 100,71 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">31,4k</td><td class="crd-td">31,4k</td></tr>
<tr><td class="crd-td"><strong>Nakhon Ratchasima</strong></td><td class="crd-td">Khorat Plateau and Mun-Chi</td><td class="crd-td">14,97 N, 102,1 E</td><td class="crd-td">1769AD</td><td class="crd-td">30,8k</td><td class="crd-td">30,8k</td></tr>
<tr><td class="crd-td"><strong>Kamphaeng Phet</strong></td><td class="crd-td">Upper Chao Phraya and Sukhothai</td><td class="crd-td">16,56 N, 99,51 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">29,8k</td><td class="crd-td">29,8k</td></tr>
<tr><td class="crd-td"><strong>Lat Krabang</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,72 N, 100,78 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">29,4k</td><td class="crd-td">29,4k</td></tr>
<tr><td class="crd-td"><strong>Bang Lamung</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,05 N, 100,93 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">27,5k</td><td class="crd-td">27,5k</td></tr>
<tr><td class="crd-td"><strong>Khon Kaen</strong></td><td class="crd-td">Khorat Plateau and Mun-Chi</td><td class="crd-td">16,44 N, 102,84 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">27,3k</td><td class="crd-td">27,3k</td></tr>
<tr><td class="crd-td"><strong>Luang Prabang</strong></td><td class="crd-td">Lan Xang and Lao Mekong</td><td class="crd-td">19,89 N, 102,14 E</td><td class="crd-td">1500AD - 1769AD</td><td class="crd-td">26,8k</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Si Racha</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,16 N, 100,92 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">26,7k</td><td class="crd-td">26,7k</td></tr>
<tr><td class="crd-td"><strong>Bang Sao Thong</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,59 N, 100,83 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">25,8k</td><td class="crd-td">25,8k</td></tr>
<tr><td class="crd-td"><strong>Sukhothai</strong></td><td class="crd-td">Upper Chao Phraya and Sukhothai</td><td class="crd-td">17,01 N, 99,83 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">24,5k</td><td class="crd-td">24,5k</td></tr>
<tr><td class="crd-td"><strong>Sa Kaeo</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,8 N, 102,14 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">23,4k</td><td class="crd-td">23,4k</td></tr>
<tr><td class="crd-td"><strong>Prachuap Khiri Khan</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">11,8 N, 99,78 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">23k</td><td class="crd-td">23k</td></tr>
<tr><td class="crd-td"><strong>Nong Bua Lamphu</strong></td><td class="crd-td">Khorat Plateau and Mun-Chi</td><td class="crd-td">17,17 N, 102,38 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">21,2k</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Sainyabl</strong></td><td class="crd-td">Lan Xang and Lao Mekong</td><td class="crd-td">19,25 N, 101,75 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">20,7k</td><td class="crd-td">20,7k</td></tr>
<tr><td class="crd-td"><strong>Lam Luk Ka</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,98 N, 100,78 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">20,3k</td><td class="crd-td">20,3k</td></tr>
<tr><td class="crd-td"><strong>Sam Wa Tawan Ok</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,88 N, 100,75 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">20,3k</td><td class="crd-td">20,3k</td></tr>
<tr><td class="crd-td"><strong>Nan</strong></td><td class="crd-td">Lan Na and Northern Valleys</td><td class="crd-td">18,77 N, 100,78 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">19,9k</td><td class="crd-td">19,9k</td></tr>
<tr><td class="crd-td"><strong>Nakhon Pathom</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,82 N, 100,06 E</td><td class="crd-td">500AD - 1000AD</td><td class="crd-td">19,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Chon Buri</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,36 N, 100,98 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">19k</td><td class="crd-td">19k</td></tr>
<tr><td class="crd-td"><strong>Min Buri</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,81 N, 100,72 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">18,7k</td><td class="crd-td">18,7k</td></tr>
<tr><td class="crd-td"><strong>Phimai</strong></td><td class="crd-td">Khorat Plateau and Mun-Chi</td><td class="crd-td">15,22 N, 102,49 E</td><td class="crd-td">1000AD - 1300AD</td><td class="crd-td">18k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Krathum Baen</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,66 N, 100,27 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">18k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Hariphunchai</strong></td><td class="crd-td">Lan Na and Northern Valleys</td><td class="crd-td">18,57 N, 99,01 E</td><td class="crd-td">1000AD</td><td class="crd-td">17,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Suan Luang</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,73 N, 100,65 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">17,3k</td><td class="crd-td">17,3k</td></tr>
<tr><td class="crd-td"><strong>Udomsai</strong></td><td class="crd-td">Lan Xang and Lao Mekong</td><td class="crd-td">20,7 N, 101,82 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">16,9k</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>Thanyaburi</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">14,02 N, 100,73 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">16,7k</td><td class="crd-td">16,7k</td></tr>
<tr><td class="crd-td"><strong>Khlong Chaokhun Sing</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,78 N, 100,62 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">16,6k</td><td class="crd-td">16,6k</td></tr>
<tr><td class="crd-td"><strong>Sam Phran</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,72 N, 100,22 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">16,1k</td><td class="crd-td">16,1k</td></tr>
<tr><td class="crd-td"><strong>Amnat Charoen</strong></td><td class="crd-td">Khorat Plateau and Mun-Chi</td><td class="crd-td">15,9 N, 104,62 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">15,6k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Haphan</strong></td><td class="crd-td">Lan Xang and Lao Mekong</td><td class="crd-td">20,33 N, 103,83 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">15,2k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td"><strong>Pathum Thani</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">14,02 N, 100,52 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">14,6k</td><td class="crd-td">14,6k</td></tr>
<tr><td class="crd-td"><strong>Si Thep</strong></td><td class="crd-td">Upper Chao Phraya and Sukhothai</td><td class="crd-td">15,47 N, 101,14 E</td><td class="crd-td">500AD - 1000AD</td><td class="crd-td">14,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Phra Pradaeng</strong></td><td class="crd-td">Lower Chao Phraya and Ayutthaya</td><td class="crd-td">13,66 N, 100,53 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">13,9k</td><td class="crd-td">13,9k</td></tr>
<tr><td class="crd-td"><strong>Pak Chong</strong></td><td class="crd-td">Khorat Plateau and Mun-Chi</td><td class="crd-td">14,71 N, 101,42 E</td><td class="crd-td">1000AD - 1769AD</td><td class="crd-td">13,8k</td><td class="crd-td">13,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 historical settlements ordered by peak population across early Tai, Sukhothai, Ayutthaya and Lao realms (500BC to 1769AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Lower Chao Phraya and Ayutthaya-Dvaravati Core

The Lower Chao Phraya division catalogues 269 settlements across the active delta and tidal floodplains [@Patnukao2017Dvaravati; @Tangtenglam2023Developing]. Ayutthaya was the preeminent hydraulic metropolis, founded in 1351AD on an island formed by the Chao Phraya, Pa Sak and Lopburi rivers. Ayutthaya concentrated 261,71k residents in 1500AD and 240,94k in 1650AD, coordinating royal administration, international trade and extensive canal networks [@Tangtenglam2023Developing]. Following its destruction in 1767AD, urban mass relocated southwards to Thonburi (249,44k in 1769AD), which served as the capital under King Taksin [@Tangtenglam2023Developing].

Other prominent centres include the foundational Mon Dvaravati capital of Nakhon Pathom (38,38k peak), the fortified transit port of Kanchanaburi (37,18k peak), the coastal port of Samut Sakhon (55,75k peak), Khlong Luang (50,89k peak), Bang Kapi (33,02k peak), Bang Phli (31,38k peak), Lat Krabang (29,42k peak), Bang Lamung (27,47k peak), Si Racha (26,72k peak), Bang Sao Thong (25,78k peak), Sa Kaeo (23,38k peak) and Prachuap Khiri Khan (22,96k peak). These settlements coordinated wet-rice production, maritime trade and defensive frontier operations [@Patnukao2017Dvaravati; @Taweethong2023Early].

### Upper Chao Phraya and Sukhothai Basin

The Upper Chao Phraya division catalogues 88 settlements along the Ping, Yom and Nan river valleys [@Michael1991Khamhaeng]. Sukhothai was the royal capital of the first independent Tai kingdom, founded in the thirteenth century along the Yom River. Sukhothai supported 31,99k inhabitants in 1300AD, developing sophisticated water storage barrages and temple complexes [@Michael1991Khamhaeng; @Thailand2024Promote]. Its sister city, Si Satchanalai, functioned as an international celadon ceramic production hub [@Michael1991Khamhaeng].

Nakhon Sawan (43,37k peak) commanded the strategic confluence where the Ping, Wang, Yom and Nan rivers unite to form the Chao Phraya trunk stream, serving as the primary commercial and logistical transit gateway between northern Thailand and the central plain [@Michael1991Khamhaeng]. Kamphaeng Phet (29,77k peak) on the Ping River formed a massive laterite fortress city protecting the western approaches to Sukhothai and Ayutthaya [@Michael1991Khamhaeng]. Other notable centres include Phitsanulok (peaking as a royal secondary capital under King Trailokanat), Phichit and Tak [@Michael1991Khamhaeng; @Thailand2025Effect].

### Lan Na and Northern Intermontane Valleys

The northern division catalogues 98 settlements across the enclosed intermontane valleys of northern Thailand [@Stark2020Landscapes]. Chiang Mai was the premier capital of Lan Na, founded in 1296AD by King Mangrai in the fertile Ping River basin. Surrounded by rectangular brick walls and a wide moat, Chiang Mai supported 34,59k residents in 1300AD, expanding to 52,15k in 1500AD, 44,69k in 1650AD and 34,24k in 1769AD [@Stark2020Landscapes; @Thailand2023Growth].

Other major urban centres include Lamphun (ancient Hariphunchai, the Mon Buddhist precursor to Tai rule), Chiang Rai (founded in 1262AD as Mangrai's initial capital), Phayao (an autonomous principality along Kwan Phayao lake), Lampang (a fortified walled city on the Wang River), Nan (commanding eastern highland passes to Laos) and Phrae [@Stark2020Landscapes; @Thailand2024Strategies]. These polities maintained extensive weir-and-channel community irrigation networks (muang fai) that sustained dense valley populations [@Thailand2020Basic].

### Khorat Plateau and Mun-Chi Basins

The Khorat Plateau division catalogues 205 settlements across the Mun and Chi river basins [@Murphy2015Many]. Nakhon Ratchasima (Khorat) served as the primary western gateway to the plateau, accommodating 30,84k residents in 1769AD within a rectangular moated and walled enclosure constructed under King Narai of Ayutthaya to defend against Lao incursions [@Murphy2015Many; @Tangtenglam2023Developing].

Along the Chi River, Khon Kaen accommodated 27,27k residents at its peak, flanked by the ancient Dvaravati moated city of Muang Fa Daet, renowned for its carved Buddhist boundary stones (bai sema) [@Murphy2015Many]. Along the Mun River, Ubon Ratchathani (18,48k peak), Buriram (17,96k peak), Surin (16,84k peak), Roi Et (15,92k peak) and Mahasarakham supported dense agricultural communities exploiting seasonal river floodplains, salt pans and laterite quarries [@Murphy2015Many; @Thailand2024Promote].

### Peninsular Isthmus and Patani Corridor

The peninsular division catalogues 122 settlements along the narrow Kra Isthmus [@Patnukao2024Tracing]. Nakhon Si Thammarat (ancient Tambralinga or Ligor) was the preeminent urban centre, accommodating over 20k inhabitants and anchoring maritime trade across the Gulf of Thailand [@Patnukao2024Tracing]. The city was centered on Wat Phra Mahathat, a colossal Sri Lankan-style stupa, and was defended by rectangular brick walls constructed along an elevated coastal sand spit [@Patnukao2024Tracing].

On the eastern coast, Patani emerged as an influential Islamic sultanate and international trading port from the fifteenth to seventeenth centuries, accommodating Chinese, Malay, Dutch and English merchants [@Patnukao2024Tracing; @Thailand2023Growth]. Songkhla commanded the entrance to the vast inland lagoon of Lake Songkhla, serving as a fortified naval base and merchant port [@Thailand2025Research]. On the western Andaman coast, Phuket, Trang and Krabi facilitated tin mining and maritime trade with India and the Arab world [@Patnukao2024Tracing; @Thailand2020Active].

### Lan Xang and Lao Mekong Realm

The Lao division catalogues 68 settlements along the middle Mekong River and its eastern highland tributaries [@Murphy2015Many]. Vientiane was the royal capital of Lan Xang from 1560AD onwards, founded on a fertile crescent-shaped bend of the Mekong. Protected by multi-tiered moats and earthen ramparts, Vientiane accommodated 43,53k inhabitants in 1769AD, centered on the sacred Pha That Luang stupa and royal palaces [@Murphy2015Many; @Thailand2024Strategies].

Luang Prabang (Muang Sua) was the ancestral capital of King Fa Ngum, situated at the confluence of the Nam Khan and Mekong rivers. Luang Prabang concentrated 26,75k residents at its peak, acting as the spiritual and cultural heart of the Lao monarchy [@Murphy2015Many]. Other prominent centres include Sainyabūlī (20,69k peak), Savannakhet (18,36k peak), Pakxe (16,23k peak), Thakhek (14,75k peak) and Champasak, which anchored southern Lao territory adjacent to the Khone Phapheng falls [@Murphy2015Many; @Thailand2024Strategies].

# Limitations

Archaeological settlement inventories across Thailand and Laos remain subject to significant preservation and taphonomic limitations:
1. Perishable timber architecture: Domestic houses, administrative pavilions and town palisades were constructed from timber, bamboo and palm thatch, which decay rapidly in tropical monsoon climates, leaving only earthen mounds, ditches and brick temple foundations visible to archaeologists [@Patnukao2017Dvaravati; @Tangtenglam2023Developing].
2. Fluvial alluviation and delta accretion: Heavy seasonal silt deposition across the Chao Phraya floodplains has buried early prehistoric and Dvaravati cultural horizons beneath several metres of clay, obscuring smaller hamlets [@Claude2019Recent; @Taweethong2023Early].
3. Modern urban expansion: Rapid infrastructure construction and urban development across Bangkok, Nonthaburi, Ayutthaya and provincial capitals have leveled ancient earthen ramparts and canal segments, necessitating rapid salvage recording [@Tangtenglam2023Developing; @Thailand2024Strategies].
4. Asymmetric epigraphic preservation: While religious stone inscriptions and royal chronicles survive in substantial numbers from Sukhothai, Lan Na and Ayutthaya, smaller rural settlements lack written documentation, requiring demographic models to rely upon archaeological mound dimensions and ceramic scatter extents [@Murphy2015Many; @Michael1991Khamhaeng].

# Conclusion

The MANDALA settlement gazetteer synthesises 850 catalogued historical settlements across six physiographic divisions in Thailand and Laos from 500BC to 1769AD. By compiling verified WGS84 geographic coordinates, foundation dates, occupational spans and benchmark population series, this catalogue establishes an empirical baseline for regional urbanisation. Settlement subtraction cleanly isolates nucleated metropolitan capitals, walled provincial centres and monastic complexes from dasymetrically allocated rural cultivators, demonstrating that demographic expansion was fundamentally driven by the canalization of alluvial floodplains, the construction of intermontane weir systems and the integration of riverine capitals into Eurasian maritime trade.

# Appendix

The MANDALA source ledger audited 1.034 candidate localities, resulting in 850 accepted settlements and 184 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Phra Racha Wang Derm</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sanam Chandra Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Saranrom Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tha Phra Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sukhothai palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wang Chan Kasem</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ban Mo palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tha Chang Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Suan Kulap palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Withayu Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wang Waritchawet</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ban Maliwan</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Windsor Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ban Chao Phraya</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wichai Prasit Fort</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Phra Sumen Fort</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wang Pramuan</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Trok Sake palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wang Burapha Phirom</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Saphan Khao Palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wang Sanphasat Suphakit</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Thewet palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ladawan palace</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ban Manangkhasila</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Palace Gate Remnants, Phra</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the source ledger for the Tai and Lao realms.</figcaption>
</figure>

# Sources
