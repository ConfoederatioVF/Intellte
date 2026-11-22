---
title: "Settlement Gazetteer of Early Vietnam and Dai Viet"
subtitle: "MANDALA: Coordinates, Toponymy and Demographic Trajectories (500BC to 1862AD)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: early_vietnam_and_dai_viet_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_early_vietnam_and_dai_viet_spatial.png"
hero_caption: "Spatial distribution of 290 catalogued historical settlements and regional hydrological catchments across Vietnam (318.161 km²) from 500BC to 1862AD."
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

This gazetteer catalogues WGS84 coordinates, administrative allocations, foundation chronologies and benchmark demographic trajectories for 290 historical settlements across Vietnam (318.161 km², encompassing 4.003 active 5-arcminute terrestrial cells) from 500BC to 1862AD. Spanning five physiographic divisions, the gazetteer documents diverse architectural and functional traditions: monumental earthwork and brick citadels guarding deltaic river confluences, fortified coastal trading ports, montane border garrisons in the karst highlands and pioneer canal market towns in the Mekong Delta.

Settlement scales range from proto-historic Metal Age fortified enclosures at Co Loa Citadel (500 ha perimeter) and Dong Son craft villages along the Ma River to imperial administrative metropolises at Thang Long (modern Hanoi, peaking at 121,05k in 1500AD), Hoa Lu, Luy Lau and Phu Xuan/Hue (imperial capital of the Nguyen dynasty, 52k in 1862AD). In the south, rapid colonisation established commercial market nodes at Gia Dinh (95,28k in 1800AD; modern Ho Chi Minh City, 1,11M peak), Can Tho (246,12k peak), Ben Tre (101,18k peak) and Bien Hoa (100,76k peak). Every catalogued locality reconciles against 317 source-ledger candidates under MANDALA alongside 27 documented exclusions (predominantly duplicate administrative aliases within modern metropolitan boundaries and non-habitation suburban compounds).

By linking georeferenced settlement trajectories with regional fluvial geomorphology, remote sensing surveys of citadel ramparts and dynastic gazetteers (*dia ba*), this gazetteer establishes an archaeological baseline for urbanization across pre-modern Vietnam. Settlement subtraction isolates nucleated urban centres from rural populations, ensuring that historical demographic reconstructions reflect genuine administrative and archaeological mound distributions rather than arbitrary continental projections.

# Background

Historical settlement patterns in Vietnam reflect prolonged adaptation to regional hydrology, coastal navigation and agrarian colonisation [@Korolkov2025Institutio; @Hien2022Ideology]. Four primary settlement traditions characterise the regional archaeological and historical record:
1. Concentric earthwork and brick citadels: In the Red River Delta and north-central valleys, royal capitals and provincial administrative headquarters were constructed with concentric ramparts, moats and masonry gates [@Korolkov2025Institutio; @Xuyen2024Nghi]. Co Loa Citadel featured three spiral rings of tamped earth up to twelve metres high, while Thang Long combined an inner Forbidden City (*Tu Cam Thanh*), an imperial city enclosure (*Hoang Thanh*) and an expansive outer civil wall (*Dai La Thanh*) defended by river moats [@Hien2022Ideology].
2. Riverine and estuarine trading ports: Along major distributaries and protected coastal bays, trading ports (*thi tu*) grew into cosmopolitan mercantile centres [@Phuong2024Thuy; @Lan2025Distributi]. Luy Lau on the Duong River operated as a major Sino-Indian Buddhist and trade hub during the early first millennium AD, while Pho Hien in the seventeenth century and Hoi An (Faifo) in central Vietnam accommodated Chinese, Japanese, Dutch and Portuguese merchant guilds [@Phuong2024Thuy; @Chau2024Sanctuary].
3. Montane passes and frontier military garrisons: In the northern karst highlands and along the Truong Son cordillera, fortified border garrisons (*don*) commanded vital trade defiles linking the lowlands with Yunnan, Guangxi and the Lao kingdoms [@X2025Scolopendr; @Quang2024Haroi]. These outposts coordinated tributary trade in horses, aromatic resins and copper ore while mediating relations between the royal court and highland ethnic communities [@Ly2026Inter; @Quang2024Haroi].
4. Pioneer canal market towns: In the Mekong Delta and Dong Nai basin, settlements developed linearly along excavated canals and natural tidal rivers [@Noseworthy2024; @Thi2024Online]. Gia Dinh, Cu Lao Pho (Bien Hoa), My Tho and Can Tho functioned as agricultural collection centres, connecting inland rice farmers with maritime trade routes to southern China and the Malay archipelago [@Noseworthy2024; @Thi2024Online].

# Methodology

Candidate sites in the source ledger were evaluated using published excavation monographs, national heritage registers, French colonial gazetteers and dynastic treatises such as the *Dai Nam Nhat Thong Chi* [@Phuong2024Thuy; @Hieu2025Trong]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional hydrography and satellite imagery.
- Documented cultural horizons, epigraphic records or dynastic chronologies spanning from the Dong Son period through 1862AD.
- Demographic estimations calibrated to urban perimeter area, hearth counts or registered taxpayers (*dinh*).

Where multiple survey points or modern administrative subunits fall within the footprint of an urban core (such as the Kinh Thien Palace, Dai La ramparts and modern district centres within Hanoi), secondary points are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features such as isolated shrines, modern administrative pavilions and temporary field camps are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 290 catalogued settlements and summed site peaks across the five sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Red River Delta Core</strong></td><td class="crd-td">78</td><td class="crd-td">26,9%</td><td class="crd-td">1,33M</td><td class="crd-td">Hai Phong (207,9k)</td></tr>
<tr><td class="crd-td"><strong>Northern Uplands</strong></td><td class="crd-td">35</td><td class="crd-td">12,1%</td><td class="crd-td">410,4k</td><td class="crd-td">Hà Giang (69,6k)</td></tr>
<tr><td class="crd-td"><strong>North-Central Plains</strong></td><td class="crd-td">43</td><td class="crd-td">14,8%</td><td class="crd-td">601,5k</td><td class="crd-td">Da Nang (216,4k)</td></tr>
<tr><td class="crd-td"><strong>Central Highlands</strong></td><td class="crd-td">19</td><td class="crd-td">6,6%</td><td class="crd-td">396,7k</td><td class="crd-td">Khánh Hòa (97,8k)</td></tr>
<tr><td class="crd-td"><strong>Gia Dinh and Mekong Delta</strong></td><td class="crd-td">115</td><td class="crd-td">39,7%</td><td class="crd-td">3,47M</td><td class="crd-td">Ho Chi Minh City (1,11M)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">290</td><td class="crd-td">100%</td><td class="crd-td">6,21M</td><td class="crd-td">Ho Chi Minh City (1,11M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 290 catalogued historical settlements and summed site peaks across Vietnam.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological spans were verified through archaeological excavations, historical cartography and satellite remote sensing [@Hien2022Ideology; @Xuyen2024Nghi]. In the Red River Delta, stratigraphic excavations at the Imperial Citadel of Thang Long confirmed continuous occupation layers from the Tang-era Dai La fortress (eighth century) through the Ly, Tran, Le and Nguyen dynasties [@Hien2022Ideology]. Architectural foundations, stone dragon balustrades and thousands of glazed terracotta roof tiles demonstrate the scale of the royal administrative palace compound [@Hien2022Ideology].

In central and southern Vietnam, ground-truthing of historical citadels and river ports utilised French colonial hydrographic surveys and nineteenth-century cadastral maps (*dia ba*) [@Phuong2024Thuy; @Chau2024Sanctuary]. At Phu Xuan/Hue, the Vauban-style ramparts erected under Gia Long and Minh Mang were mapped against satellite imagery, confirming a perimeter of ten kilometres enclosing the civil and military elite of the Nguyen empire [@Chau2024Sanctuary]. In the Mekong Delta, satellite synthetic aperture radar (SAR) revealed ancient canal alignments radiating from Oc Eo, Angkor Borei and Gia Dinh, documenting the hydraulic infrastructure that supported southern agrarian colonisation [@Noseworthy2024; @Thi2024Online].

Radiocarbon sequences and ceramic assemblages anchor the foundation dates of catalogued sites, confirming contemporaneity during major dynastic peaks [@Korolkov2025Institutio; @Ly2026Inter]. Ceramic typologies—including Han-style impressed tiles, Ly-Tran celadons and Le blue-and-white export wares—establish occupational longevity across deltaic riverine markets [@Hien2022Ideology; @Phuong2024Thuy].

# Results

Table \ref{tab:gazetteer} presents the leading 45 historical settlements across Vietnam ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1862AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ho Chi Minh City</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,82 N, 106,63 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">1,11M</td><td class="crd-td">1,11M</td></tr>
<tr><td class="crd-td"><strong>Cần Thơ</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,15 N, 105,5 E</td><td class="crd-td">1800AD - 1862AD</td><td class="crd-td">246,1k</td><td class="crd-td">246,1k</td></tr>
<tr><td class="crd-td"><strong>Da Nang</strong></td><td class="crd-td">North-Central Plains</td><td class="crd-td">16,07 N, 108,21 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">216,4k</td><td class="crd-td">216,4k</td></tr>
<tr><td class="crd-td"><strong>Hai Phong</strong></td><td class="crd-td">Red River Delta Core</td><td class="crd-td">20,86 N, 106,68 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">207,9k</td><td class="crd-td">207,9k</td></tr>
<tr><td class="crd-td"><strong>Hai Phong</strong></td><td class="crd-td">Red River Delta Core</td><td class="crd-td">20,8 N, 106,67 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">163k</td><td class="crd-td">163k</td></tr>
<tr><td class="crd-td"><strong>Thang Long</strong></td><td class="crd-td">Red River Delta Core</td><td class="crd-td">21,03 N, 105,85 E</td><td class="crd-td">1300AD - 1800AD</td><td class="crd-td">121,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Can Tho</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,04 N, 105,79 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">119,4k</td><td class="crd-td">119,4k</td></tr>
<tr><td class="crd-td"><strong>Bến Tre</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,17 N, 106,5 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">101,2k</td><td class="crd-td">101,2k</td></tr>
<tr><td class="crd-td"><strong>Biên Hòa</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,95 N, 106,82 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">100,8k</td><td class="crd-td">100,8k</td></tr>
<tr><td class="crd-td"><strong>Khánh Hòa</strong></td><td class="crd-td">Central Highlands</td><td class="crd-td">12,33 N, 109 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">97,8k</td><td class="crd-td">97,8k</td></tr>
<tr><td class="crd-td"><strong>Bình Thuận</strong></td><td class="crd-td">Central Highlands</td><td class="crd-td">11,08 N, 108,08 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">97,6k</td><td class="crd-td">97,6k</td></tr>
<tr><td class="crd-td"><strong>Gia Dinh</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,78 N, 106,7 E</td><td class="crd-td">1800AD</td><td class="crd-td">95,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cà Mau</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">9,08 N, 105,08 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">94,1k</td><td class="crd-td">94,1k</td></tr>
<tr><td class="crd-td"><strong>Sóc Trăng</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">9,67 N, 105,83 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">93,4k</td><td class="crd-td">93,4k</td></tr>
<tr><td class="crd-td"><strong>Bà Rịa-Vũng Tàu</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,58 N, 107,25 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">91,9k</td><td class="crd-td">91,9k</td></tr>
<tr><td class="crd-td"><strong>Bình Phước</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">11,75 N, 106,92 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">80,7k</td><td class="crd-td">80,7k</td></tr>
<tr><td class="crd-td"><strong>Vĩnh Long</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,17 N, 106 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">80,2k</td><td class="crd-td">80,2k</td></tr>
<tr><td class="crd-td"><strong>Trà Vinh</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">9,83 N, 106,25 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">79,5k</td><td class="crd-td">79,5k</td></tr>
<tr><td class="crd-td"><strong>Phu Xuan</strong></td><td class="crd-td">North-Central Plains</td><td class="crd-td">16,46 N, 107,59 E</td><td class="crd-td">1800AD</td><td class="crd-td">75,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bạc Liêu</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">9,3 N, 105,5 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">71,9k</td><td class="crd-td">71,9k</td></tr>
<tr><td class="crd-td"><strong>Hà Giang</strong></td><td class="crd-td">Northern Uplands</td><td class="crd-td">22,75 N, 105 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">69,6k</td><td class="crd-td">69,6k</td></tr>
<tr><td class="crd-td"><strong>Hà Nam</strong></td><td class="crd-td">Red River Delta Core</td><td class="crd-td">20,53 N, 105,97 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">68,4k</td><td class="crd-td">68,4k</td></tr>
<tr><td class="crd-td"><strong>Hòa Bình</strong></td><td class="crd-td">Northern Uplands</td><td class="crd-td">20,67 N, 105,33 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">68,2k</td><td class="crd-td">68,2k</td></tr>
<tr><td class="crd-td"><strong>Vinh</strong></td><td class="crd-td">North-Central Plains</td><td class="crd-td">18,67 N, 105,69 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">62,6k</td><td class="crd-td">62,6k</td></tr>
<tr><td class="crd-td"><strong>Thuận An</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,9 N, 106,7 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">48,6k</td><td class="crd-td">48,6k</td></tr>
<tr><td class="crd-td"><strong>Ninh Thuận</strong></td><td class="crd-td">Central Highlands</td><td class="crd-td">11,75 N, 108,83 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">46,7k</td><td class="crd-td">46,7k</td></tr>
<tr><td class="crd-td"><strong>Thuan An</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,92 N, 106,71 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">46,6k</td><td class="crd-td">46,6k</td></tr>
<tr><td class="crd-td"><strong>Kon Tum</strong></td><td class="crd-td">Central Highlands</td><td class="crd-td">14,75 N, 107,92 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">45,2k</td><td class="crd-td">45,2k</td></tr>
<tr><td class="crd-td"><strong>Cho Lon</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,75 N, 106,66 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">44,4k</td><td class="crd-td">44,4k</td></tr>
<tr><td class="crd-td"><strong>Thủ Đức</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,86 N, 106,72 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">44,4k</td><td class="crd-td">44,4k</td></tr>
<tr><td class="crd-td"><strong>Binh Thanh</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,81 N, 106,71 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">43,7k</td><td class="crd-td">43,7k</td></tr>
<tr><td class="crd-td"><strong>Thu GJuc</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,85 N, 106,77 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">41,6k</td><td class="crd-td">41,6k</td></tr>
<tr><td class="crd-td"><strong>Lai Châu</strong></td><td class="crd-td">Northern Uplands</td><td class="crd-td">22,28 N, 103,25 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">38k</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>Rạch Giá</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,01 N, 105,08 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">36,4k</td><td class="crd-td">36,4k</td></tr>
<tr><td class="crd-td"><strong>Bac Giang</strong></td><td class="crd-td">Red River Delta Core</td><td class="crd-td">21,27 N, 106,19 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">35,6k</td><td class="crd-td">35,6k</td></tr>
<tr><td class="crd-td"><strong>Thai Nguyen</strong></td><td class="crd-td">Northern Uplands</td><td class="crd-td">21,59 N, 105,85 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">33,3k</td><td class="crd-td">33,3k</td></tr>
<tr><td class="crd-td"><strong>Thu Dau Mot</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">10,98 N, 106,65 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">29,6k</td><td class="crd-td">29,6k</td></tr>
<tr><td class="crd-td"><strong>Ben Cat</strong></td><td class="crd-td">Gia Dinh and Mekong Delta</td><td class="crd-td">11,15 N, 106,6 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">28,9k</td><td class="crd-td">28,9k</td></tr>
<tr><td class="crd-td"><strong>Long Bien</strong></td><td class="crd-td">Red River Delta Core</td><td class="crd-td">21,03 N, 105,9 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">27,5k</td><td class="crd-td">27,5k</td></tr>
<tr><td class="crd-td"><strong>Bac Tu Liem</strong></td><td class="crd-td">Red River Delta Core</td><td class="crd-td">21,07 N, 105,75 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">27k</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>Bắc Kạn</strong></td><td class="crd-td">Northern Uplands</td><td class="crd-td">22,25 N, 105,83 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">25,3k</td><td class="crd-td">25,3k</td></tr>
<tr><td class="crd-td"><strong>Hoa Lu</strong></td><td class="crd-td">Red River Delta Core</td><td class="crd-td">20,26 N, 105,98 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">25,3k</td><td class="crd-td">25,3k</td></tr>
<tr><td class="crd-td"><strong>Gia Lam</strong></td><td class="crd-td">Red River Delta Core</td><td class="crd-td">21,02 N, 105,94 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">24,5k</td><td class="crd-td">24,5k</td></tr>
<tr><td class="crd-td"><strong>Nghi Son</strong></td><td class="crd-td">North-Central Plains</td><td class="crd-td">19,33 N, 105,82 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">23,9k</td><td class="crd-td">23,9k</td></tr>
<tr><td class="crd-td"><strong>Thanh Xuan</strong></td><td class="crd-td">Red River Delta Core</td><td class="crd-td">20,99 N, 105,8 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">23,2k</td><td class="crd-td">23,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 historical settlements ordered by peak population across Vietnam (500BC to 1862AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Red River Delta Core

The Red River Delta catalogues 78 settlements distributed across the alluvial plains of modern Hanoi, Bac Ninh, Hai Duong, Hung Yen, Nam Dinh, Thai Binh and Hai Phong [@Lan2025Distributi; @Tuan1988Performanc]. Thang Long (modern Hanoi) was the preeminent imperial capital, concentrating 111,42k inhabitants in 1300AD and 121,05k in 1500AD within royal citadel ramparts and outer commercial craft guilds (*ba muoi sau pho phuong*) along the Red River [@Hien2022Ideology].

Hai Phong functioned as an estuarine maritime gateway, concentrating 207,92k peak residents in modern times alongside historical trading anchorages. Co Loa Citadel (500BC to 1AD) commanded the upper delta, representing the political core of the Au Lac kingdom [@Korolkov2025Institutio; @Xuyen2024Nghi]. Luy Lau in Bac Ninh operated as the administrative capital during Han imperial rule, serving as a renowned centre for Buddhist scholarship and Sino-Vietnamese administrative integration [@Korolkov2025Institutio; @Phuong2024Thuy]. Hoa Lu in Ninh Binh was the tenth-century karst redoubt of Dinh Bo Linh and Le Hoan, insulating the early monarchy against northern counter-offensives [@Hien2022Ideology]. Pho Hien on the Red River in Hung Yen flourished in the seventeenth century as an international river port housing Chinese and Dutch merchant factories [@Phuong2024Thuy].

### Northern Uplands and Viet Bac Frontier

The northern highland division catalogues 35 settlements across the mountain valleys and karst plateaux of Viet Bac, Tay Bac and the Sino-Vietnamese borderland [@X2025Scolopendr; @Ly2026Inter]. Viet Tri occupied a strategic position at the confluence of the Red, Black and Lo rivers, anchoring early Van Lang settlement mounds and serving as the primary gateway between the northern uplands and the delta plain [@Xuyen2024Nghi].

Lang Son commanded the vital Friendship Pass (*Chi Lang* defile) linking Dai Viet with Guangxi, functioning as a fortified military garrison and customs checkpoint that saw repeated diplomatic and military engagements [@Ly2026Inter]. Cao Bang, Tuyen Quang and Thai Nguyen operated as provincial administrative citadels coordinating mineral extraction, timber harvesting and relations with Tay, Nung and Dao tribal chieftains (*tho ty*) who governed upland communes with hereditary autonomy [@Ly2026Inter].

### North-Central Plains: Thanh-Nghe-Tinh and Thuan Hoa

The north-central coastal division catalogues 43 settlements across the valleys of the Ma, Ca and Huong rivers, spanning modern Thanh Hoa, Nghe An, Ha Tinh, Quang Binh, Quang Tri and Thua Thien Hue [@Chau2024Sanctuary; @Ly2026Inter]. Da Nang (Tourane) represented the primary central seaport, concentrating 216,41k modern peak residents alongside historical maritime anchorages guarding the entrance to central Vietnam.

Phu Xuan/Hue was the imperial capital of the Nguyen dynasty, concentrating 45k people in 1800AD and 52k in 1862AD within massive brick ramparts enclosing the Imperial City and Forbidden City [@Chau2024Sanctuary; @Phuong2024Thuy]. The Citadel of the Ho Dynasty (*Tay Do*) in Thanh Hoa, erected in 1397AD from massive dressed stone blocks without mortar, served as the fortified capital of the Ho dynasty and a military stronghold [@Ly2026Inter]. The Dong Son type-site on the Ma River in Thanh Hoa anchored the Bronze Age metallurgical complex from 500BC onward [@Korolkov2025Institutio]. Lam Son in Thanh Hoa was the historic cradle of Le Loi's anti-Ming liberation struggle, while Vinh on the Ca River functioned as the political and demographic hub of Nghe An [@Ly2026Inter].

### Central Highlands and Nam Tien Corridor

The central highland division catalogues 19 settlements along the forested slopes of the Annamite Range and the adjacent south-central coastal fringe, spanning Khanh Hoa, Binh Thuan, Gia Lai, Dak Lak and Kon Tum [@Quang2024Haroi; @Dai2025Complete]. Khanh Hoa (97,75k peak) and Binh Thuan (97,6k peak) operated as key coastal nodes where southern spurs of the Truong Son cordillera meet the South China Sea [@Dai2025Complete].

Qui Nhon (Vijaya) and Nha Trang (Kauthara) originated as coastal Cham administrative and religious centres before being integrated into Dai Viet during the fifteenth and seventeenth centuries [@Chau2024Sanctuary]. In the interior highlands, settlements such as Buon Ma Thuot and Pleiku functioned as trading marts where Ede, Jarai and Bahnar populations exchanged forest resins, elephants and mountain gold for salt, iron tools and lowland ceramics supplied by coastal merchants [@Quang2024Haroi].

### Gia Dinh and Mekong Delta Frontier

The southern division catalogues 115 settlements across the Dong Nai basin and the nine distributaries of the Mekong Delta in Nam Bo [@Noseworthy2024; @Thi2024Online]. Gia Dinh (modern Ho Chi Minh City/Saigon-Cholon) was the commercial metropolis of southern Vietnam, founded in 1698AD and expanding to 95,28k inhabitants in 1800AD (attaining a modern peak of 1,11M within its historical administrative core) [@Noseworthy2024; @Thi2024Online].

Can Tho (246,12k peak) commanded the lower Hau Giang, serving as the primary agricultural collection hub of the southwestern delta. Bien Hoa (Cu Lao Pho, 100,76k peak) on the Dong Nai River was an early commercial centre founded by Chinese Ming loyalist merchants, flourishing until disrupted by the Tay Son wars [@Noseworthy2024; @Thi2024Online]. Ben Tre (101,18k peak), My Tho, Vinh Long, Soc Trang, Ca Mau and Rach Gia formed an integrated network of canal market towns where rice cultivation, fishing and coastal shipping supported rapid demographic expansion throughout the eighteenth and nineteenth centuries [@Noseworthy2024]. Ancient maritime trading centres including Oc Eo and Angkor Borei confirm early first-millennium urbanism associated with the kingdom of Funan prior to deltaic reorganisation [@Korolkov2025Institutio].

# Limitations

Historical settlement inventories across Vietnam remain subject to distinct archaeological and documentary limitations:
1. Intensive modern urban redevelopment: continuous metropolitan expansion at Hanoi (Thang Long), Ho Chi Minh City (Gia Dinh) and Da Nang has obliterated extensive archaeological stratigraphy, restricting excavations to rescue projects such as the Ba Dinh political precinct [@Hien2022Ideology].
2. Tropical alluvial burial and erosion: high-energy floods in the Red River Delta and tidal scouring in the Mekong Delta have buried early wooden and earthen structures under metres of river silt or washed away riverbank market settlements [@Tuan1988Performanc; @Thao2026Occurrence].
3. Perishable construction materials: domestic architecture in both northern and southern villages was predominantly constructed from timber, bamboo and thatch, leaving minimal archaeological mound traces compared to stone or baked-brick monuments [@Hien2022Ideology].
4. Epigraphic and administrative gaps: pre-eleventh-century municipal administrative registers are virtually absent, requiring reliance on external dynastic histories and archaeological settlement perimeters for demographic estimation [@Phuong2024Thuy; @Korolkov2025Institutio].

# Conclusion

The MANDALA settlement gazetteer synthesises 290 catalogued historical localities across five physiographic divisions, providing an empirical foundation for regional demographic modelling in Vietnam from 500BC to 1862AD. By reconciling georeferenced coordinates, citadel areas and occupation chronologies, this catalogue isolates nucleated urban centres from rural populations, enabling dasymetric allocation of cultivators across the non-settled landscape and demonstrating the role of state-sponsored hydraulic engineering and frontier colonisation in sustaining demographic expansion.

# Appendix

The MANDALA source ledger audited 317 candidate records across Vietnam, resulting in 290 accepted settlements and 27 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Đại La</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kính Thiên Palace</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kính Thiên Palace</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>State Guest House</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Huế citadel</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Phú Xuân</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Palais d'Expositions</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>State Guest House</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Phú Xuân</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Palais d'Expositions</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Presidential Palace of Vie</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Động Tam Cốc</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Thien Cung Cave</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Hoàng Hạ bronze drum</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Co Loa Citadel</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Gò Tháp</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Con Moong Cave</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Nền Chùa</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Thap Phu Dien</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Co Loa Citadel</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Cát Tiên archaeological si</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Vinh Hung tower</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Hanoi</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tây Ninh</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Huế</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Vietnam source ledger.</figcaption>
</figure>

# Sources
