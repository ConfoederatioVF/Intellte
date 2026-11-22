---
title: "Settlement Gazetteer of Vietnam, Laos and Cambodia after 1975"
subtitle: "MANDALA: Coordinates, Administrative Allocations and Population Trajectories across Eastern Indochina (1975 to 2026)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: vietnam_laos_cambodia_after_1975_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_vietnam_laos_cambodia_after_1975_spatial.png"
hero_caption: "Spatial distribution of 10.635 catalogued modern settlements and municipal administrative boundaries across Vietnam, Laos and Cambodia (765.511 km²) from 1975 to 2026."
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

This gazetteer catalogues WGS84 coordinates, administrative allocations, longitudinal census series and benchmark demographic trajectories for 10635 modern settlements across Vietnam, Laos and Cambodia (765.511 km², encompassing 9.525 active 5-arcminute terrestrial cells) from 1975 to 2026. Encompassing eight administrative and physiographic macro-divisions, the gazetteer captures diverse urban and rural settlement morphologies: high-density deltaic communes in the Red River and Mekong basins, sprawling coastal port metropolises along the South China Sea, planned upland agricultural settlements across the Central Highlands, riverine provincial capitals along the Mekong trunk stream in Laos and revitalised municipal centres across Cambodia.

Settlement hierarchies range from primary international megacities at Ho Chi Minh City (14,56M peak, 14,56M in 2025) and Hanoi (8,72M peak, 8,72M in 2025) to major regional metropolises at Can Tho (3,12M), Da Nang (2,82M), Hai Phong (2,73M), Phnom Penh (1,7M) and Vientiane (1M). Secondary provincial capitals include Hue (1,38M), Bien Hoa (1,32M), Khanh Hoa (Nha Trang, 1,28M), Binh Thuan (Phan Thiet, 1,28M), Ben Tre (1,25M), Ca Mau (1,24M), Soc Trang (1,23M), Tay Ninh (1,22M), Ba Ria-Vung Tau (1,21M), Lam Dong (Da Lat, 1,2M), Binh Phuoc (1,06M), Sainyabuli (453k), Siem Reap (160k) and Battambang (140k). Every catalogued locality reconciles against 11.435 source-ledger records under MANDALA alongside 800 documented exclusions (predominantly duplicate administrative aliases within a 2,2 km spatial buffer and non-habitation survey records).

By anchoring georeferenced settlement series to national statistical censuses, multi-temporal remote sensing footprints and regional river drainage basins, this gazetteer establishes a spatial baseline for modern settlement dynamics in eastern Indochina. Settlement subtraction isolates nucleated urban centres from dasymetrically distributed rural cultivators, ensuring that regional demographic models reflect genuine administrative and demographic realities rather than arbitrary spatial smoothing.

# Background

Modern settlement systems in eastern Indochina reflect profound physical geography, riverine hydrology and twentieth-century post-war restructuring [@Moon2020Addressing; @Chang2019Developmen]. Four primary settlement traditions characterise the regional landscape:
1. Intensive deltaic agricultural settlements: In the Red River Delta and Mekong River Delta, settlement is organised around dense networks of village communes (*làng*, *xã*) bounded by centuries-old earthen dyke networks and canal grids. In the Red River Delta, high rural population densities exceeding 1.000 persons per km² created continuous agro-urban corridors connecting Hanoi with Haiphong and Nam Dinh.
2. Coastal trading ports and industrial clusters: Along the central and southern Vietnamese coastline, port cities such as Da Nang, Quy Nhon, Nha Trang, Vung Tau and Haiphong grew into major industrial hubs, mediating international container shipping, deep-sea fisheries and offshore petroleum logistics.
3. Upland agricultural colonies and planned market towns: In the Central Highlands (*Tây Nguyên*) and northern border mountains, post-1975 state programmes established New Economic Zones and commercial plantation centres that evolved into bustling provincial capitals such as Buon Ma Thuot, Pleiku, Kon Tum and Da Lat.
4. Riverine administrative corridors: Along the Mekong River trunk stream in Laos and Cambodia, capital cities and market towns including Vientiane, Luang Prabang, Savannakhet, Pakse, Phnom Penh and Kampong Cham developed as transport hubs linking agricultural hinterlands with fluvial navigation lanes, maintaining continuity with historical settlement nodes documented across classical epigraphic inventories [@Philip1980Chrestomat; @Philip1981Chrestomat; @Philip1982Chronologi; @Philip1988Chrestomat; @Fumiaki2017Recent].

# Methodology

Candidate settlements in the source ledger were evaluated using published decennial census registers, provincial gazetteers and geoname databases from Vietnam, Laos and Cambodia. Inclusion criteria require:
- Precise WGS84 geographic coordinates validated against modern satellite imagery and official administrative boundaries.
- Continuous multi-decadal census observations or official population estimates covering benchmarks between 1975 and 2025.
- Administrative classification as a municipal city, provincial capital, district capital (*thị trấn*), ward or nucleated commune centre.

Where multiple administrative points or suburb records fall within a 2,2 km buffer of a primary municipal centre, secondary coordinates are consolidated as duplicate aliases, preserving spatial integrity and avoiding artificial double counting. Non-habitation features such as industrial parks without permanent residents, national park stations and isolated geographic points are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 10635 catalogued settlements and summed site peaks across the eight sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Red River Delta</strong></td><td class="crd-td">200</td><td class="crd-td">1,9%</td><td class="crd-td">25,72M</td><td class="crd-td">Hanoi (8,72M)</td></tr>
<tr><td class="crd-td"><strong>Northern Midlands and Mountains</strong></td><td class="crd-td">200</td><td class="crd-td">1,9%</td><td class="crd-td">6,8M</td><td class="crd-td">Hà Giang (913,8k)</td></tr>
<tr><td class="crd-td"><strong>North and South Central Coast</strong></td><td class="crd-td">436</td><td class="crd-td">4,1%</td><td class="crd-td">18,78M</td><td class="crd-td">Da Nang (2,82M)</td></tr>
<tr><td class="crd-td"><strong>Central Highlands</strong></td><td class="crd-td">101</td><td class="crd-td">0,9%</td><td class="crd-td">4,79M</td><td class="crd-td">Lâm Đồng (1,2M)</td></tr>
<tr><td class="crd-td"><strong>Southeast</strong></td><td class="crd-td">149</td><td class="crd-td">1,4%</td><td class="crd-td">35,34M</td><td class="crd-td">Ho Chi Minh City (14,56M)</td></tr>
<tr><td class="crd-td"><strong>Mekong River Delta</strong></td><td class="crd-td">220</td><td class="crd-td">2,1%</td><td class="crd-td">20,09M</td><td class="crd-td">Cần Thơ (3,12M)</td></tr>
<tr><td class="crd-td"><strong>Cambodia</strong></td><td class="crd-td">3908</td><td class="crd-td">36,7%</td><td class="crd-td">12,46M</td><td class="crd-td">Phnom Penh (1,7M)</td></tr>
<tr><td class="crd-td"><strong>Laos</strong></td><td class="crd-td">5421</td><td class="crd-td">51%</td><td class="crd-td">17,4M</td><td class="crd-td">Vientiane (1M)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">10635</td><td class="crd-td">100%</td><td class="crd-td">141,38M</td><td class="crd-td">Ho Chi Minh City (14,56M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 10.635 catalogued settlements and summed site peaks across Vietnam, Laos and Cambodia.</figcaption>
</figure>

# Testing and Validation

Settlement coordinates and population series were validated through multi-temporal remote sensing and municipal boundary reconciliation [@Moon2020Addressing; @Chang2019Developmen]. High-resolution satellite imagery from Landsat, Sentinel-2 and commercial providers verified the physical footprint of catalogued settlements, distinguishing contiguous urban built-up areas from surrounding agricultural fields and seasonal water bodies. Night-time light radiometry from VIIRS confirms the geographic concentration of economic activity along major inter-provincial highway corridors.

In Cambodia, settlement histories were reconciled against historical village registers and post-conflict reconstruction records [@J2026Experience; @Weichun2026Cambodia]. Following the forced de-urbanisation of 1975-1979 and subsequent recovery under the People's Republic of Kampuchea, municipal populations were validated through administrative headcounts and UNHCR repatriation files from border camps [@MagaliAn2024Silk]. In Laos, settlement trajectories were checked against the 1985, 1995, 2005 and 2015 national censuses, confirming steady urban consolidation in Vientiane and secondary Mekong river towns.

# Results

Table \ref{tab:gazetteer} presents the leading 45 modern settlements across Vietnam, Laos and Cambodia ordered by peak population descending, detailing coordinates, sub-regional allocation, observation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">2025 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ho Chi Minh City</strong></td><td class="crd-td">Southeast</td><td class="crd-td">10,82 N, 106,63 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">14,56M</td><td class="crd-td">14,56M</td></tr>
<tr><td class="crd-td"><strong>Hanoi</strong></td><td class="crd-td">Red River Delta</td><td class="crd-td">21,02 N, 105,84 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">8,72M</td><td class="crd-td">8,72M</td></tr>
<tr><td class="crd-td"><strong>Ho Chi Minh City</strong></td><td class="crd-td">Southeast</td><td class="crd-td">10,78 N, 106,7 E</td><td class="crd-td">1979 - 2025</td><td class="crd-td">7,65M</td><td class="crd-td">7,65M</td></tr>
<tr><td class="crd-td"><strong>Cần Thơ</strong></td><td class="crd-td">Mekong River Delta</td><td class="crd-td">10,15 N, 105,5 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">3,12M</td><td class="crd-td">3,12M</td></tr>
<tr><td class="crd-td"><strong>Da Nang</strong></td><td class="crd-td">North and South Central Coast</td><td class="crd-td">16,07 N, 108,21 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">2,82M</td><td class="crd-td">2,82M</td></tr>
<tr><td class="crd-td"><strong>Hai Phong</strong></td><td class="crd-td">Red River Delta</td><td class="crd-td">20,86 N, 106,68 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">2,73M</td><td class="crd-td">2,73M</td></tr>
<tr><td class="crd-td"><strong>Hai Phong</strong></td><td class="crd-td">Red River Delta</td><td class="crd-td">20,8 N, 106,67 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">2,12M</td><td class="crd-td">2,12M</td></tr>
<tr><td class="crd-td"><strong>Phnom Penh</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">11,57 N, 104,92 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,7M</td><td class="crd-td">1,7M</td></tr>
<tr><td class="crd-td"><strong>Can Tho</strong></td><td class="crd-td">Mekong River Delta</td><td class="crd-td">10,04 N, 105,79 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,57M</td><td class="crd-td">1,57M</td></tr>
<tr><td class="crd-td"><strong>Huế</strong></td><td class="crd-td">North and South Central Coast</td><td class="crd-td">16,46 N, 107,59 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,38M</td><td class="crd-td">1,24M</td></tr>
<tr><td class="crd-td"><strong>Biên Hòa</strong></td><td class="crd-td">Southeast</td><td class="crd-td">10,95 N, 106,82 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,32M</td><td class="crd-td">1,32M</td></tr>
<tr><td class="crd-td"><strong>Khánh Hòa</strong></td><td class="crd-td">North and South Central Coast</td><td class="crd-td">12,33 N, 109 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,28M</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Bình Thuận</strong></td><td class="crd-td">North and South Central Coast</td><td class="crd-td">11,08 N, 108,08 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,28M</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Bến Tre</strong></td><td class="crd-td">Mekong River Delta</td><td class="crd-td">10,17 N, 106,5 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,25M</td><td class="crd-td">1,25M</td></tr>
<tr><td class="crd-td"><strong>Cà Mau</strong></td><td class="crd-td">Mekong River Delta</td><td class="crd-td">9,08 N, 105,08 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,24M</td><td class="crd-td">1,24M</td></tr>
<tr><td class="crd-td"><strong>Sóc Trăng</strong></td><td class="crd-td">Mekong River Delta</td><td class="crd-td">9,67 N, 105,83 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,23M</td><td class="crd-td">1,23M</td></tr>
<tr><td class="crd-td"><strong>Tây Ninh</strong></td><td class="crd-td">Southeast</td><td class="crd-td">11,33 N, 106,17 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,22M</td><td class="crd-td">1,22M</td></tr>
<tr><td class="crd-td"><strong>Bà Rịa-Vũng Tàu</strong></td><td class="crd-td">Southeast</td><td class="crd-td">10,58 N, 107,25 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,21M</td><td class="crd-td">1,21M</td></tr>
<tr><td class="crd-td"><strong>Lâm Đồng</strong></td><td class="crd-td">Central Highlands</td><td class="crd-td">11,95 N, 108,43 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,2M</td><td class="crd-td">479,5k</td></tr>
<tr><td class="crd-td"><strong>Bình Phước</strong></td><td class="crd-td">Southeast</td><td class="crd-td">11,75 N, 106,92 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,06M</td><td class="crd-td">1,06M</td></tr>
<tr><td class="crd-td"><strong>Vĩnh Long</strong></td><td class="crd-td">Mekong River Delta</td><td class="crd-td">10,17 N, 106 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,05M</td><td class="crd-td">1,05M</td></tr>
<tr><td class="crd-td"><strong>Trà Vinh</strong></td><td class="crd-td">Mekong River Delta</td><td class="crd-td">9,83 N, 106,25 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1,04M</td><td class="crd-td">1,04M</td></tr>
<tr><td class="crd-td"><strong>Vientiane</strong></td><td class="crd-td">Laos</td><td class="crd-td">17,98 N, 102,63 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">1M</td><td class="crd-td">1M</td></tr>
<tr><td class="crd-td"><strong>Bạc Liêu</strong></td><td class="crd-td">Mekong River Delta</td><td class="crd-td">9,3 N, 105,5 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">943,6k</td><td class="crd-td">943,6k</td></tr>
<tr><td class="crd-td"><strong>Hà Giang</strong></td><td class="crd-td">Northern Midlands and Mountains</td><td class="crd-td">22,75 N, 105 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">913,8k</td><td class="crd-td">913,8k</td></tr>
<tr><td class="crd-td"><strong>Vientiane</strong></td><td class="crd-td">Laos</td><td class="crd-td">17,97 N, 102,6 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">899,8k</td><td class="crd-td">899,8k</td></tr>
<tr><td class="crd-td"><strong>Hà Nam</strong></td><td class="crd-td">Red River Delta</td><td class="crd-td">20,53 N, 105,97 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">898,7k</td><td class="crd-td">898,7k</td></tr>
<tr><td class="crd-td"><strong>Phu Yen</strong></td><td class="crd-td">North and South Central Coast</td><td class="crd-td">13,17 N, 109,17 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">897,3k</td><td class="crd-td">897,3k</td></tr>
<tr><td class="crd-td"><strong>Hòa Bình</strong></td><td class="crd-td">Northern Midlands and Mountains</td><td class="crd-td">20,67 N, 105,33 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">896,1k</td><td class="crd-td">896,1k</td></tr>
<tr><td class="crd-td"><strong>Vinh</strong></td><td class="crd-td">North and South Central Coast</td><td class="crd-td">18,67 N, 105,69 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">821,6k</td><td class="crd-td">821,6k</td></tr>
<tr><td class="crd-td"><strong>Đắk Nông</strong></td><td class="crd-td">Central Highlands</td><td class="crd-td">11,98 N, 107,7 E</td><td class="crd-td">2009 - 2025</td><td class="crd-td">686,4k</td><td class="crd-td">686,4k</td></tr>
<tr><td class="crd-td"><strong>Điện Biên</strong></td><td class="crd-td">Northern Midlands and Mountains</td><td class="crd-td">21,38 N, 103,02 E</td><td class="crd-td">2009 - 2025</td><td class="crd-td">656,7k</td><td class="crd-td">656,7k</td></tr>
<tr><td class="crd-td"><strong>Ninh Thuận</strong></td><td class="crd-td">North and South Central Coast</td><td class="crd-td">11,75 N, 108,83 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">612,8k</td><td class="crd-td">612,8k</td></tr>
<tr><td class="crd-td"><strong>Thuan An</strong></td><td class="crd-td">Southeast</td><td class="crd-td">10,92 N, 106,71 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">612,2k</td><td class="crd-td">612,2k</td></tr>
<tr><td class="crd-td"><strong>Nha Trang</strong></td><td class="crd-td">North and South Central Coast</td><td class="crd-td">12,24 N, 109,19 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">602,2k</td><td class="crd-td">602,2k</td></tr>
<tr><td class="crd-td"><strong>Kon Tum</strong></td><td class="crd-td">Central Highlands</td><td class="crd-td">14,75 N, 107,92 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">593,6k</td><td class="crd-td">593,6k</td></tr>
<tr><td class="crd-td"><strong>Cho Lon</strong></td><td class="crd-td">Southeast</td><td class="crd-td">10,75 N, 106,66 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">583,4k</td><td class="crd-td">583,4k</td></tr>
<tr><td class="crd-td"><strong>Thủ Đức</strong></td><td class="crd-td">Southeast</td><td class="crd-td">10,86 N, 106,72 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">583k</td><td class="crd-td">583k</td></tr>
<tr><td class="crd-td"><strong>Binh Thanh</strong></td><td class="crd-td">Southeast</td><td class="crd-td">10,81 N, 106,71 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">574,3k</td><td class="crd-td">574,3k</td></tr>
<tr><td class="crd-td"><strong>Thu GJuc</strong></td><td class="crd-td">Southeast</td><td class="crd-td">10,85 N, 106,77 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">545,7k</td><td class="crd-td">545,7k</td></tr>
<tr><td class="crd-td"><strong>Quy Nhon</strong></td><td class="crd-td">North and South Central Coast</td><td class="crd-td">13,77 N, 109,23 E</td><td class="crd-td">1989 - 2025</td><td class="crd-td">540k</td><td class="crd-td">540k</td></tr>
<tr><td class="crd-td"><strong>Lai Châu</strong></td><td class="crd-td">Northern Midlands and Mountains</td><td class="crd-td">22,28 N, 103,25 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">495,5k</td><td class="crd-td">495,5k</td></tr>
<tr><td class="crd-td"><strong>Vung Tau</strong></td><td class="crd-td">Southeast</td><td class="crd-td">10,35 N, 107,08 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">483,5k</td><td class="crd-td">483,5k</td></tr>
<tr><td class="crd-td"><strong>Rạch Giá</strong></td><td class="crd-td">Mekong River Delta</td><td class="crd-td">10,01 N, 105,08 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">478,3k</td><td class="crd-td">478,3k</td></tr>
<tr><td class="crd-td"><strong>Bac Giang</strong></td><td class="crd-td">Red River Delta</td><td class="crd-td">21,27 N, 106,19 E</td><td class="crd-td">1975 - 2025</td><td class="crd-td">468k</td><td class="crd-td">468k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 modern settlements ordered by peak population across Vietnam, Laos and Cambodia (1975 to 2026).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Vietnam - Red River Delta (Hanoi and Haiphong)

The Red River Delta division catalogues 200 primary settlements concentrated across 32.533 km² of intensive alluvial floodplain. Hanoi anchors the national administrative and cultural hierarchy, expanding from 3,93M in 1975 to 8,72M in 2025 across an extensive metropolitan core. Hai Phong (2,73M peak) operates as the preeminent deep-water seaport and heavy manufacturing hub of northern Vietnam. Secondary industrial centres include Nam Dinh (280k peak), Hai Duong (260k peak), Thai Binh (220k peak) and Bac Ninh (270k peak), forming a tightly integrated polycentric urban cluster connected by expressways and river waterways.

### Vietnam - Northern Midlands and Mountains

This northern upland division catalogues 200 settlements spanning 93.375 km² of rugged limestone karst, upland valleys and international border zones. Thai Nguyen (340k peak) serves as the primary metallurgical and educational centre, while Viet Tri (315k peak) commands the confluence of the Red and Black rivers. Key border trading hubs include Lang Son (205k peak), Lao Cai (175k peak) and Mong Cai (145k peak), mediating cross-border overland commerce. Mountainous provincial capitals such as Ha Giang, Cao Bang, Son La, Dien Bien Phu and Yen Bai anchor multi-ethnic district market networks.

### Vietnam - North and South Central Coast

The central coastal division catalogues 436 settlements distributed along 107.840 km² of narrow coastal plains backed by the Truong Son mountains. Da Nang is the regional metropolis, expanding from 494k in 1975 to 2,82M in 2025 as a centre of high-technology industry, container logistics and tourism. Hue (1,38M peak) preserves its historic cultural role, while Khanh Hoa (Nha Trang, 1,28M) and Binh Thuận (Phan Thiet, 1,28M) anchor maritime commerce and fisheries. Other significant centres include Quy Nhon (480k peak), Vinh (340k peak), Thanh Hoa (410k peak), Quang Ngai (260k peak) and Tuy Hoa (210k peak).

### Vietnam - Central Highlands (Tay Nguyen)

The Central Highlands division catalogues 101 settlements across 55.328 km² of basalt plateaus. Buon Ma Thuot in Dac Lac province is the regional capital, expanding from 110k in 1975 to over 420k in 2025 as the global capital of robusta coffee production. Pleiku (260k peak) commands the northern plateau of Gia Lai, Kon Tum (175k peak) anchors the upper valley, and Da Lat in Lam Dong (1,2M peak administrative division) functions as an upland agricultural centre. The settlement network reflects rapid post-1975 migration and commercial cash-crop expansion.

### Vietnam - Southeast (Ho Chi Minh City and Dong Nai)

The Southeast division catalogues 149 settlements across 25.423 km², forming the most economically dynamic urban agglomeration in mainland Southeast Asia. Ho Chi Minh City is the primary megacity, expanding from 6,86M in 1975 to 14,56M in 2025. Surrounding satellite cities form an expansive industrial sprawl: Bien Hoa in Dong Nai (1,32M in 2025), Thu Dau Mot in Binh Duong (350k peak), Ba Ria-Vung Tau (1,21M), Tay Ninh (1,22M) and Binh Phuoc (1,06M). These centres host thousands of export processing factories and container logistics parks.

### Vietnam - Mekong River Delta

The southwestern delta division catalogues 220 settlements across 41.100 km² of criss-crossing canals and fertile alluvium. Can Tho is the regional metropolis, growing from 648k in 1975 to 3,12M in 2025 and serving as the administrative, educational and commercial capital of the delta. Major provincial centres include Ben Tre (1,25M), Ca Mau (1,24M), Soc Trang (1,23M), My Tho in Tien Giang (270k peak), Long Xuyen in An Giang (290k peak), Rach Gia in Kien Giang (250k peak) and Tan An in Long An (210k peak), anchoring intensive rice, fruit and aquaculture processing networks.

### Cambodia (Post-1979 Recovery and Modern Census)

Cambodia catalogues 3.908 settlements across 180.174 km² of the Tonle Sap basin and coastal lowlands. Phnom Penh is the national primate city; completely emptied in April 1975 under Democratic Kampuchea, it repopulated after January 1979 from 26k to 1,7M by 2025, coordinating national commerce and manufacturing [@Weichun2026Cambodia; @Wyatt2023Intergener]. Siem Reap (160k in 2025) anchors global heritage tourism adjacent to Angkor, while Battambang (140k in 2025) serves as the western agricultural capital. Sihanoukville (Preah Sihanouk, 120k peak) operates as the primary deep-water maritime port, and Kampong Cham, Pursat and Kampot serve as regional river and coastal trading centres.

### Laos (Lao PDR Modern Census)

Laos catalogues 5.421 settlements distributed across 229.738 km² of mountainous terrain and Mekong river valleys. Vientiane is the national capital and primary metropolis, expanding from 180k in 1975 to 1M in 2025. Sainyabuli (453k peak administrative division) anchors the western agricultural frontier. Major provincial river towns along the Mekong trunk stream include Savannakhet (Kaysone Phomvihane, 125k peak), Pakse in Champasak (90k peak), Luang Prabang (70k peak) and Thakhek in Khammouane (45k peak), while northern centres such as Luang Namtha and Oudomxay manage trade corridors toward China.

# Limitations

Settlement analysis across Vietnam, Laos and Cambodia is subject to specific administrative and historical limitations:
1. Administrative reclassification and city boundary changes: in Vietnam, provincial and municipal authorities frequently upgrade rural communes into urban wards (*phường*) or expand municipal boundary definitions, creating apparent discontinuities in longitudinal urban time series.
2. Informal suburbanisation and registration: rapid peri-urban development around Ho Chi Minh City, Hanoi and Phnom Penh often outpaces formal census registration, resulting in temporary undercounting of transient migrant workers.
3. Historical data gaps in Cambodia (1975-1979): the destruction of municipal archives and suspension of civil administration under the Khmer Rouge precludes systematic census enumeration during that four-year window, necessitating reliance on post-1979 retrospective demographic reconstructions [@Weichun2026Cambodia].
4. Rural settlement dispersion in upland Laos: highly dispersed ethnic minority hamlets across northern and eastern Laos undergo seasonal shifting and consolidation, posing challenges for point-based georeferencing.

# Conclusion

The MANDALA settlement gazetteer synthesises 10.635 catalogued localities across eight sub-regions in Vietnam, Laos and Cambodia, providing an empirical framework for regional demographic analysis from 1975 to 2026. By anchoring georeferenced coordinates, administrative hierarchies and multi-decadal population series, this catalogue isolates nucleated urban centres from rural populations, enabling precise dasymetric allocation of rural cultivators across environmental suitability surfaces and capturing the historic half-century shift from war-torn rural agrarianism toward dynamic metropolitan integration.

# Appendix

The MANDALA source ledger audited 11.435 candidate settlements across eastern Indochina, resulting in 10.635 accepted catalogued localities and 800 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing territory, exclusion reason and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Phu Quoc</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Dien Bien Phu</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yen Lac</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Tan Hiep</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>An Chau</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Phu My</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>An Lao</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Troi</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Thanh My</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Tan Phu</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Chau Thanh</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Chau Thanh</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Chau Thanh</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Aachar Leak</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Vott Angk Chum</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Samraong</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Phumi Vott</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Phum Vatt</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Phumi Voall Preng</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Phumi Veal</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Phumi Veal</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Phumi Veal</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Veal Thum</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Phumi Veal Pring</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Phumi Veal Poah</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Vietnam, Laos and Cambodia source ledger.</figcaption>
</figure>

# Sources
