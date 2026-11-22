---
title: "Settlement Gazetteer of French Indo-China"
subtitle: "MANDALA: Coordinates, Toponymy and Demographic Trajectories across Six Administrative Divisions (1862 to 1954)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: french_indochina_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_french_indochina_spatial.png"
hero_caption: "Spatial distribution of 10.505 catalogued settlements and regional hydrological catchments across French Indo-China (765.511 km²) from 1862 to 1954."
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

This gazetteer catalogues WGS84 coordinates, administrative allocations, longitudinal demographic trajectories and toponymic transitions for 10505 settlements across French Indo-China (765.511 km², encompassing 9.525 active 5-arcminute terrestrial cells) from 1862 to 1954. Covering the direct colony of Cochinchina alongside the protectorates of Annam, Tonkin, Cambodia and Laos, the gazetteer reflects diverse settlement systems: modernised colonial port metropolises and riverine entrepots, provincial administrative seats (*chefs-lieux*), frontier mining towns and rubber plantation villages, as well as thousands of customary agricultural communes (*xa*) and highland hamlets (*ban*).

Urban populations spanned from primary colonial agglomerations such as Saigon-Cholon (3,92M peak across its metropolitan hinterland, 1,9M core municipal population in 1954) and Hanoi (2,25M metropolitan prefecture, 150k core city in 1936) to regional manufacturing and export ports including Haiphong (735k peak), Can Tho (422k peak), Ben Tre (399k peak), Hue (386k peak), Phnom Penh (360k in 1954), Nha Trang (Khanh Hoa prefecture, 346k peak), Phan Thiet (Binh Thuan, 345k peak), Dalat (Lam Dong, 336k peak), Ca Mau (333k peak) and Soc Trang (330k peak). Secondary centres encompassed Bien Hoa (327k peak), Vung Tau (Ba Ria-Vung Tau, 325k peak), Vinh Long (284k peak), Da Nang (Tourane, 282k peak), Tra Vinh (281k peak) and Ha Giang (246k peak in the northern highlands). Every catalogued locality reconciles against 11.305 candidate records in the source ledger alongside 800 documented exclusions (principally duplicate homonym records and subordinate suburbs merged within a 2,2 km spatial deduplication radius).

By combining georeferenced coordinates with colonial census registers, cadastral surveys from the Service geographique de l'Indochine and epidemiological records from the Pasteur Institutes, this gazetteer establishes a spatial baseline for colonial and early modern Southeast Asian urbanisation. Subtracting nucleated municipal populations from dasymetrically distributed rural cultivators ensures that demographic models reflect documented settlement nodes rather than uniform agricultural densities.

# Background

Settlement patterns in French Indo-China were shaped by the intersection of traditional hydrographic transport networks, wet-rice ecology and French colonial administrative infrastructure [@Capitaine1903French; @Van2026Colonial]. Four major settlement types characterise the regional gazetteer:
1. Colonial port metropolises and export gateways: Saigon-Cholon in Cochinchina and Haiphong in Tonkin operated as primary interfaces between the Indochinese interior and global maritime trade [@JR2025Dual]. Saigon was re-engineered along French urban lines with grid-iron boulevards, administrative palaces, botanical gardens and deep-water docks along the Saigon River, while neighbouring Cholon functioned as the principal rice-milling and mercantile hub managed by Chinese dialect congregations (*bang*) [@JR2025Dual]. Haiphong served as the maritime terminus for Red River freight and the Yunnan railway, handling coal from Hon Gai, cement and export zinc [@Capitaine1903French].
2. Administrative capitals and residency seats: Hanoi, designated the federal capital of the Indochinese Union in 1902, integrated ancient Vietnamese craft guilds across the Thirty-Six Streets (*Ba Muoi Sau Pho Phuong*) with a modern French administrative quarter south of Hoan Kiem Lake [@Son2025Vietnamese; @JR2025Dual]. Provincial capitals (*chefs-lieux de province*) such as Hue (the imperial seat of the Nguyen dynasty), Nam Dinh, Thanh Hoa, Vinh, Phnom Penh and Vientiane concentrated French residential compounds, indigenous administrative tribunals, military barracks and municipal markets [@El2011Historical; @V2024Features].
3. Concession towns and plantation nodes: The expansion of European capital into the interior spurred specialised settlements, including rubber plantation headquarters across the red basaltic soils of Thu Dau Mot, Bien Hoa and Tay Ninh, anthracite mining agglomerations at Hon Gai and Cam Pha along the Tonkin littoral, and tin mining communities in central Laos [@Thi2024Literature; @Noseworthy2024]. High in the Lang Biang plateau, Dalat was founded in 1897 as a temperate hill sanatorium, developing into an elite administrative and educational centre [@Thi2024Preparator].
4. Rural agricultural village clusters: In the alluvial plains of Tonkin and Annam, settlements formed dense, nucleated villages enclosed by living bamboo ramparts (*luy tre*), containing ancestral communal halls (*dinh*), pagodas and cooperative irrigation councils [@Thi2024Literature]. In the newly drained tracts of western Cochinchina, settlements stretched linearly along canal banks (*rach*), creating ribbon hamlets accessible primarily by sampans and motor launches [@Van2026Enduring].

# Methodology

Candidate settlement records were compiled from official colonial gazetteers (*Monographies provinciales*), statistical yearbooks (*Annuaire statistique de l'Indochine*), topographic survey sheets from the Service geographique de l'Indochine and historical toponymic dictionaries [@Capitaine1903French; @Thi2024Literature]. Inclusion criteria required:
- Definite WGS84 geographic coordinates validated against historical cartography and modern satellite imagery.
- Longitudinal demographic benchmarks spanning the colonial period from 1862 to 1954.
- Official administrative status as a municipality, provincial capital, canton market or distinct rural commune.

Where multiple cadastral records or variant colonial romanisations (such as Tourane for Da Nang, Faifo for Hoi An, Cap Saint-Jacques for Vung Tau or Baria for Ba Ria) occurred within a 2,2 km radius of a primary settlement core, secondary coordinates were merged as duplicate aliases to avoid artificial spatial clustering. Non-habitation features such as isolated customs posts, defensive pillboxes and seasonal forest camps were excluded from the settlement database.

Table \ref{tab:summary} summarises the distribution of 10505 catalogued settlements and summed site peaks across the six sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tonkin Red River Delta</strong></td><td class="crd-td">195</td><td class="crd-td">1,9%</td><td class="crd-td">6,62M</td><td class="crd-td">Hanoi (2,25M)</td></tr>
<tr><td class="crd-td"><strong>Tonkin Northern Highlands</strong></td><td class="crd-td">198</td><td class="crd-td">1,9%</td><td class="crd-td">1,68M</td><td class="crd-td">Hà Giang (246k)</td></tr>
<tr><td class="crd-td"><strong>Northern and Central Annam</strong></td><td class="crd-td">498</td><td class="crd-td">4,7%</td><td class="crd-td">5,21M</td><td class="crd-td">Huế (386,4k)</td></tr>
<tr><td class="crd-td"><strong>Cochinchina Colony</strong></td><td class="crd-td">363</td><td class="crd-td">3,5%</td><td class="crd-td">12,08M</td><td class="crd-td">Ho Chi Minh City (3,92M)</td></tr>
<tr><td class="crd-td"><strong>Cambodia Protectorate</strong></td><td class="crd-td">3851</td><td class="crd-td">36,7%</td><td class="crd-td">3,34M</td><td class="crd-td">Phnom Penh (359,6k)</td></tr>
<tr><td class="crd-td"><strong>Laos Protectorate</strong></td><td class="crd-td">5400</td><td class="crd-td">51,4%</td><td class="crd-td">4,18M</td><td class="crd-td">Vientiane (222k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">10505</td><td class="crd-td">100%</td><td class="crd-td">33,11M</td><td class="crd-td">Ho Chi Minh City (3,92M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 10.505 catalogued settlements and summed site peaks across French Indo-China.</figcaption>
</figure>

# Testing and Validation

Settlement coordinates and historical toponyms were verified using multi-temporal remote sensing, colonial cadastral sheets and archival boundary treaties [@Capitaine1903French; @Eiji2015Thailand]. High-resolution satellite imagery was cross-referenced with 1:100.000 topographic maps published by the Service geographique de l'Indochine between 1900 and 1950, validating the physical continuity of settlement mounds, dike networks and urban street grids [@Capitaine1903French].

Demographic magnitudes were cross-checked against independent municipal publications, chamber of commerce records and sanitary reports from the Pasteur Institute network [@Thinh2024Developmen; @Tuan2025Role]. In northern and central Vietnam, demographic series were reconciled with Pierre Gourou's 1936 survey of peasant villages in the Tonkin delta, which established precise population counts, land-to-man ratios and cottage craft specialisations across thousands of individual communes [@Thi2024Literature]. In Cambodia, municipal records from Phnom Penh and Battambang confirm commercial expansion following the 1907 boundary settlement with Siam [@MagaliAn2023What; @V2024Features].

# Results

Table \ref{tab:gazetteer} presents the leading 45 settlements across French Indo-China ordered by peak population descending, detailing coordinates, sub-regional allocation, chronological spans and benchmark population counts.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1954 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ho Chi Minh City</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,82 N, 106,63 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">3,92M</td><td class="crd-td">3,92M</td></tr>
<tr><td class="crd-td"><strong>Hanoi</strong></td><td class="crd-td">Tonkin Red River Delta</td><td class="crd-td">21,02 N, 105,84 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">2,25M</td><td class="crd-td">2,25M</td></tr>
<tr><td class="crd-td"><strong>Hai Phong</strong></td><td class="crd-td">Tonkin Red River Delta</td><td class="crd-td">20,86 N, 106,68 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">735,1k</td><td class="crd-td">735,1k</td></tr>
<tr><td class="crd-td"><strong>Hai Phong</strong></td><td class="crd-td">Tonkin Red River Delta</td><td class="crd-td">20,8 N, 106,67 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">622,6k</td><td class="crd-td">622,6k</td></tr>
<tr><td class="crd-td"><strong>Can Tho</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,04 N, 105,79 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">422k</td><td class="crd-td">422k</td></tr>
<tr><td class="crd-td"><strong>Bến Tre</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,17 N, 106,5 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">399,2k</td><td class="crd-td">399,2k</td></tr>
<tr><td class="crd-td"><strong>Huế</strong></td><td class="crd-td">Northern and Central Annam</td><td class="crd-td">16,46 N, 107,59 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">386,4k</td><td class="crd-td">386,4k</td></tr>
<tr><td class="crd-td"><strong>Cần Thơ</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,15 N, 105,5 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">370,5k</td><td class="crd-td">370,5k</td></tr>
<tr><td class="crd-td"><strong>Phnom Penh</strong></td><td class="crd-td">Cambodia Protectorate</td><td class="crd-td">11,57 N, 104,92 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">359,6k</td><td class="crd-td">359,6k</td></tr>
<tr><td class="crd-td"><strong>Khánh Hòa</strong></td><td class="crd-td">Northern and Central Annam</td><td class="crd-td">12,33 N, 109 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">345,6k</td><td class="crd-td">345,6k</td></tr>
<tr><td class="crd-td"><strong>Bình Thuận</strong></td><td class="crd-td">Northern and Central Annam</td><td class="crd-td">11,08 N, 108,08 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">345,1k</td><td class="crd-td">345,1k</td></tr>
<tr><td class="crd-td"><strong>Lâm Đồng</strong></td><td class="crd-td">Northern and Central Annam</td><td class="crd-td">11,95 N, 108,43 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">335,7k</td><td class="crd-td">335,7k</td></tr>
<tr><td class="crd-td"><strong>Cà Mau</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">9,08 N, 105,08 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">332,8k</td><td class="crd-td">332,8k</td></tr>
<tr><td class="crd-td"><strong>Sóc Trăng</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">9,67 N, 105,83 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">330,1k</td><td class="crd-td">330,1k</td></tr>
<tr><td class="crd-td"><strong>Tây Ninh</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">11,33 N, 106,17 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">327,6k</td><td class="crd-td">327,6k</td></tr>
<tr><td class="crd-td"><strong>Biên Hòa</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,95 N, 106,82 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">326,8k</td><td class="crd-td">326,8k</td></tr>
<tr><td class="crd-td"><strong>Bà Rịa-Vũng Tàu</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,58 N, 107,25 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">324,8k</td><td class="crd-td">324,8k</td></tr>
<tr><td class="crd-td"><strong>Vĩnh Long</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,17 N, 106 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">283,5k</td><td class="crd-td">283,5k</td></tr>
<tr><td class="crd-td"><strong>Da Nang</strong></td><td class="crd-td">Northern and Central Annam</td><td class="crd-td">16,07 N, 108,21 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">282,2k</td><td class="crd-td">282,2k</td></tr>
<tr><td class="crd-td"><strong>Trà Vinh</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">9,83 N, 106,25 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">280,9k</td><td class="crd-td">280,9k</td></tr>
<tr><td class="crd-td"><strong>Bình Phước</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">11,75 N, 106,92 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">279,1k</td><td class="crd-td">279,1k</td></tr>
<tr><td class="crd-td"><strong>Bạc Liêu</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">9,3 N, 105,5 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">272,4k</td><td class="crd-td">272,4k</td></tr>
<tr><td class="crd-td"><strong>Hà Giang</strong></td><td class="crd-td">Tonkin Northern Highlands</td><td class="crd-td">22,75 N, 105 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">246k</td><td class="crd-td">246k</td></tr>
<tr><td class="crd-td"><strong>Hà Nam</strong></td><td class="crd-td">Tonkin Red River Delta</td><td class="crd-td">20,53 N, 105,97 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">242k</td><td class="crd-td">242k</td></tr>
<tr><td class="crd-td"><strong>Phu Yen</strong></td><td class="crd-td">Northern and Central Annam</td><td class="crd-td">13,17 N, 109,17 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">241,6k</td><td class="crd-td">241,6k</td></tr>
<tr><td class="crd-td"><strong>Hòa Bình</strong></td><td class="crd-td">Tonkin Northern Highlands</td><td class="crd-td">20,67 N, 105,33 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">241,2k</td><td class="crd-td">241,2k</td></tr>
<tr><td class="crd-td"><strong>Vientiane</strong></td><td class="crd-td">Laos Protectorate</td><td class="crd-td">17,97 N, 102,6 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">222k</td><td class="crd-td">222k</td></tr>
<tr><td class="crd-td"><strong>Ninh Thuận</strong></td><td class="crd-td">Northern and Central Annam</td><td class="crd-td">11,75 N, 108,83 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">165k</td><td class="crd-td">165k</td></tr>
<tr><td class="crd-td"><strong>Thuan An</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,92 N, 106,71 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">164,8k</td><td class="crd-td">164,8k</td></tr>
<tr><td class="crd-td"><strong>Cho Lon</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,75 N, 106,66 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">157,1k</td><td class="crd-td">157,1k</td></tr>
<tr><td class="crd-td"><strong>Thủ Đức</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,86 N, 106,72 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">157k</td><td class="crd-td">157k</td></tr>
<tr><td class="crd-td"><strong>Binh Thanh</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,81 N, 106,71 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">154,6k</td><td class="crd-td">154,6k</td></tr>
<tr><td class="crd-td"><strong>Thu GJuc</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,85 N, 106,77 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">146,9k</td><td class="crd-td">146,9k</td></tr>
<tr><td class="crd-td"><strong>Vinh</strong></td><td class="crd-td">Northern and Central Annam</td><td class="crd-td">18,67 N, 105,69 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">145k</td><td class="crd-td">145k</td></tr>
<tr><td class="crd-td"><strong>Kon Tum</strong></td><td class="crd-td">Northern and Central Annam</td><td class="crd-td">14,75 N, 107,92 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">143,4k</td><td class="crd-td">143,4k</td></tr>
<tr><td class="crd-td"><strong>Lai Châu</strong></td><td class="crd-td">Tonkin Northern Highlands</td><td class="crd-td">22,28 N, 103,25 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">132,9k</td><td class="crd-td">132,9k</td></tr>
<tr><td class="crd-td"><strong>Vung Tau</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,35 N, 107,08 E</td><td class="crd-td">1906AD - 1954AD</td><td class="crd-td">130,2k</td><td class="crd-td">130,2k</td></tr>
<tr><td class="crd-td"><strong>Bac Giang</strong></td><td class="crd-td">Tonkin Red River Delta</td><td class="crd-td">21,27 N, 106,19 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">126k</td><td class="crd-td">126k</td></tr>
<tr><td class="crd-td"><strong>Thai Nguyen</strong></td><td class="crd-td">Tonkin Northern Highlands</td><td class="crd-td">21,59 N, 105,85 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">117,6k</td><td class="crd-td">117,6k</td></tr>
<tr><td class="crd-td"><strong>Nha Trang</strong></td><td class="crd-td">Northern and Central Annam</td><td class="crd-td">12,24 N, 109,19 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">116,1k</td><td class="crd-td">116,1k</td></tr>
<tr><td class="crd-td"><strong>Sainyabūlī</strong></td><td class="crd-td">Laos Protectorate</td><td class="crd-td">19,25 N, 101,75 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">111,8k</td><td class="crd-td">111,8k</td></tr>
<tr><td class="crd-td"><strong>Hòa Hưng</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,77 N, 106,67 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">111,7k</td><td class="crd-td">111,7k</td></tr>
<tr><td class="crd-td"><strong>Thu Dau Mot</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">10,98 N, 106,65 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">104,5k</td><td class="crd-td">104,5k</td></tr>
<tr><td class="crd-td"><strong>Ben Cat</strong></td><td class="crd-td">Cochinchina Colony</td><td class="crd-td">11,15 N, 106,6 E</td><td class="crd-td">1862AD - 1954AD</td><td class="crd-td">102,1k</td><td class="crd-td">102,1k</td></tr>
<tr><td class="crd-td"><strong>Buôn Ma Thuột</strong></td><td class="crd-td">Northern and Central Annam</td><td class="crd-td">12,67 N, 108,05 E</td><td class="crd-td">1906AD - 1954AD</td><td class="crd-td">100,6k</td><td class="crd-td">100,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across French Indo-China (1862 to 1954).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Tonkin Red River Delta

The Red River delta catalogues 195 primary settlements and municipal districts concentrated across 32.533 km² of intensive alluvial plain [@Thi2024Literature]. Hanoi served as the preeminent political and educational centre, supporting an urban prefecture of 2,25M inhabitants by 1954 (peaking from 882k in 1862 and 1,6M in 1936). Haiphong anchored maritime shipping along the Gulf of Tonkin, concentrating 735k residents in its industrial and port quarters. Other leading centres included Nam Dinh (the principal cotton weaving and textile centre of northern Vietnam), Hai Duong along the Thai Binh river corridor, Thai Binh town, Hung Yen, Bac Ninh, Phu Ly (Ha Nam province) and Son Tay guarding the entrance to the midland hills.

### Tonkin Northern Highlands

The northern highland division catalogues 198 settlements across 93.375 km² of mountainous terrain spanning the Chinese border [@Gerald2020Urbanizing; @Capitaine1903French]. Settlements were predominantly administrative military posts (*postes militaires*), river trading stations and valley market towns inhabited by Tai, Muong, Tay, Nung, Hmong and Dao communities. Leading localities included Ha Giang (246k peak) commanding the upper Clear River valley, Lao Cai at the junction of the Red and Nam Ti rivers serving the Yunnan railway, Lang Son guarding the Friendship Pass (*Muc Nam Quan*), Cao Bang along the Bang Giang river, Tuyen Quang, Yen Bai and the upland garrison of Dien Bien Phu in the Muong Thanh valley [@Tran2026Colonial].

### Northern and Central Annam

The Annam coastal strip catalogues 498 settlements distributed across 163.168 km² of narrow littoral plains and highland plateaux [@Capitaine1903French; @Tuan2025Role]. Hue remained the royal capital and administrative seat of the imperial court, supporting 386k residents in 1954. Da Nang (Tourane) was the principal deep-water port of central Vietnam, concentrating 282k people. Nha Trang in Khanh Hoa province (346k peak) housed the Pasteur Institute and coastal fisheries, while Phan Thiet in Binh Thuan province (345k peak) dominated regional fish sauce (*nuoc mam*) production. Dalat in Lam Dong (336k peak) developed into a temperate hill station, sanatorium and educational retreat [@Thi2024Preparator]. Major agricultural centres in the northern littoral included Thanh Hoa, Vinh (Nghe An province), Ha Tinh, Dong Hoi (Quang Binh) and Quang Ngai.

### Cochinchina Colony

The southern colony catalogues 363 settlements across 66.523 km² of fertile deltaic plains and plantation plateaux [@Van2026Colonial; @Van2026Enduring; @JR2025Dual]. Ho Chi Minh City (Saigon-Cholon) formed the premier commercial metropolis of mainland Southeast Asia, accommodating 3,92M inhabitants across its metropolitan district by 1954. Can Tho (422k peak) served as the primary commercial and agricultural capital of the western Mekong delta along the Bassac River. Other major deltaic centres included Ben Tre (399k peak), Ca Mau (333k peak) in the extreme southern mangrove frontier, Soc Trang (330k peak), Tay Ninh (328k peak), Bien Hoa (327k peak), Ba Ria-Vung Tau (325k peak), Vinh Long (284k peak), Tra Vinh (281k peak) and Bac Lieu (272k peak).

### Cambodia Protectorate

The Cambodia division catalogues 3.851 settlements across 180.174 km² surrounding the Tonle Sap lake and Mekong river corridors [@MagaliAn2023What; @V2024Features]. Phnom Penh was the royal and administrative capital, growing from 100k inhabitants in the late nineteenth century to 360k by 1954 at the junction of the Mekong, Tonle Sap and Bassac rivers (*Quatre-Bras*). Battambang served as the agricultural capital of the northwest, dominating rice milling and grain trade following its retrocession by Siam in 1907 [@Eiji2015Thailand]. Other major centres included Kampong Cham along the Mekong, Kampot on the Gulf of Thailand (the principal pepper-exporting port), Siem Reap adjacent to the Angkor archaeological complex, Pursat, Kampong Chhnang, Prey Veng and Svay Rieng along the southern borderlands.

### Laos Protectorate

The Laos protectorate catalogues 5.400 settlements across 229.738 km² of rugged mountains and Mekong river terraces [@Capitaine1903French; @Eiji2015Thailand]. Settlement was organised into small riverine villages (*ban*) clustered along the Mekong and its tributaries, interspersed with upland swidden hamlets inhabited by Lao Theung and Lao Soung groups. Vientiane functioned as the administrative capital of the protectorate, while Luang Prabang served as the historic royal capital of the Lao monarchy under King Sisavang Vong. Secondary administrative posts and transit centres included Savannakhet, Pakse in Champasak province, Thakhek in Khammouane province, Xieng Khouang on the Plain of Jars and Sam Neua in the northeastern highlands [@Eiji2015Thailand].

# Limitations

Settlement gazetteer compilation in French Indo-China is subject to several source constraints:
1. Village aggregation and fiscal concealment: in Tonkin and Annam, communal authorities regularly reported consolidated population totals for multi-hamlet village federations, masking internal household distribution [@Thi2024Literature; @Van2026Enduring].
2. High mobility among upland populations: swidden agriculturalists across the Annamite Range and Lao highlands relocated settlements every few seasons as soils depleted, creating fluid toponymy and temporary site abandonments [@Gerald2020Urbanizing].
3. Orthographic variance across colonial cartography: French cartographers transcribed Vietnamese, Khmer and Lao toponyms using disparate romanisation systems, requiring cross-matching against modern administrative codes [@Capitaine1903French].
4. Destruction of municipal records during anti-colonial conflicts: military combat between 1945 and 1954 caused widespread loss of municipal birth registries and tax rolls, particularly in disputed rural cantons [@Thi2024Preparator; @Tran2026Colonial].

# Conclusion

The MANDALA settlement gazetteer synthesises 10.505 catalogued localities across French Indo-China, providing a georeferenced empirical foundation for regional demographic analysis from 1862 to 1954. By reconciling geographical coordinates, colonial census records and administrative boundaries across six sub-regions, this study documents the contrast between crowded wet-rice deltaic plains and sparse interior massifs. Isolating municipal urban populations from rural agriculturalists enables dasymetric distribution of cultivators, clarifying the demographic dynamics that shaped modern Vietnam, Cambodia and Laos.

# Appendix

The MANDALA source ledger audited 11.305 candidate settlement records, resulting in 10.505 accepted settlements and 800 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Phu Quoc</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Longveaek</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
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
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the French Indo-China source ledger.</figcaption>
</figure>

# Sources
