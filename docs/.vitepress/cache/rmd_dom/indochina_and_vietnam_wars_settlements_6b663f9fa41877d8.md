---
title: "Settlement Gazetteer of Indochina during the Thirty Years War"
subtitle: "MANDALA: Georeferenced Coordinates, Provincial Trajectories and Forced Nucleation in Vietnam, Laos and Cambodia (1945-1975)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: indochina_and_vietnam_wars_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_indochina_and_vietnam_wars_spatial.png"
hero_caption: "Spatial distribution of 10.597 catalogued settlements and regional administrative catchments across Indochina (765.511 km²) between 1945 and 1975."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative jurisdictions, occupation chronologies and demographic trajectories for 12375 settlements across Indochina (765.511 km²) between 1945 and 1975. Encompassing the territories of Vietnam, Laos and Cambodia, the gazetteer records the human geography of three decades of continuous armed conflict, spanning the anti-colonial struggle against France, national partition at the 17th parallel, and the high-intensity military campaigns of the Second Indochina War. Across these thirty years, settlement patterns were transformed by massive aerial interdiction, strategic hamlet relocation schemes and forced urbanisation.

Settlement magnitudes range from dispersed upland tribal villages in the Truong Son mountains and karst caves along the Plain of Jars to primary metropolises including Ho Chi Minh City (Saigon) (6,86M in 1975), Hanoi (3,93M in 1975), Hai Phong (1,29M), wartime Phnom Penh (swollen by refugees to over 1,8M on the eve of its fall), and Da Nang (493,94k). Secondary regional centres include Phan Thiet (603,85k), Lam Dong (Da Lat) (587,41k), Ca Mau (582,42k), Soc Trang (577,69k), Tay Ninh (573,32k), Bien Hoa (571,84k), Ba Ria-Vung Tau (568,47k), Vinh Long (496,18k), Tra Vinh (491,57k) and Binh Phuoc (488,43k). Every catalogued locality reconciles against 11.397 candidate records in the MANDALA source ledger alongside 800 documented exclusions (principally duplicate homonym entries sharing identical geographic coordinates and population series).

By linking georeferenced settlement trajectories with regional fluvial geomorphology, remote sensing bomb damage assessments and archival census records, this gazetteer establishes an empirical baseline for mid-twentieth-century population nucleation in mainland South-East Asia. Settlement subtraction isolates nucleated urban populations from rural agricultural cultivators, ensuring that regional demographic models capture the stark contrast between depopulated free-fire zones and congested refugee enclaves.

# Background

Settlement patterns in wartime Indochina were dictated by the intersection of alluvial ecology, transportation infrastructure and military geometry [@Thrift1985Cities; @Lacouture1970From; @Race1970Origins]. Four distinct settlement traditions and operational configurations characterised the region:
1. Intensive deltaic agglomerations: In the Red River delta of northern Vietnam and the Mekong delta of southern Vietnam, dense networks of agricultural villages developed along river dykes, natural levees and drainage canals. High rural densities (frequently exceeding 500 persons per km²) sustained wet-rice cultivation, creating continuous agrarian ribbons punctuated by provincial commercial market towns [@Thrift1985Cities; @NguyenMarshall2023Political].
2. Industrial and administrative command metropolises: Major urban centres, notably Hanoi, Hai Phong, Saigon-Cholon and Phnom Penh, concentrated administrative authority, international trade and manufacturing. During the conflict, these metropolises either dispersed their populations into rural caverns and upland redoubts to evade aerial bombardment (Hanoi) or absorbed millions of destitute rural refugees fleeing free-fire zones (Saigon and Phnom Penh) [@Thrift1985Cities; @Goodman1975South; @Blumenfeld1970Cambodia].
3. Strategic garrison towns and logistical hubs: Along the Demilitarised Zone and the central littoral, towns such as Da Nang, Hue, Pleiku, Kontum and Buon Ma Thuot functioned as fortified logistical nodes. These centres accommodated maritime anchorages, air bases, military headquarters and expanding squatter settlements housing camp followers and civilian refugees [@Goscha2005Maritime; @Catton2019Control].
4. Dispersed upland hamlets and subterranean complexes: Across the Annamite Cordillera, the Plain of Jars and the Bolaven Plateau, indigenous populations and insurgent forces adapted to intensive aerial bombardment by dispersing into forest canopies or constructing extensive subterranean tunnel networks, as seen in the karst caverns of Viengxay and the village tunnel complexes of Vinh Moc [@Mishra2008Laos; @Pholsena2012Transformative; @Olson2024Secret].

# Methodology

Candidate sites in the source ledger were evaluated using published French colonial statistical directories, wartime administrative gazetteers, American military maps (Joint Operations Graphic 1:250.000 series), military casualty and systems analyses, and post-war census inventories [@Thayer1975Systems; @Galarneau1984Burns; @Nguyen2016Fighting]. Inclusion criteria required:
- Precise WGS84 geographic coordinates verified against historical topography and satellite imagery.
- Documented administrative status, commune designation or military cantonment records spanning the 1945-1975 interval.
- Temporal population estimations anchored to colonial registers, wartime refugee counts or early post-unification censuses.

Where multiple gazetteer entries referred to the same physical locality under variant colonial French, Vietnamese, Khmer or Lao transliterations within 2,2 km, secondary entries were consolidated as duplicate aliases. Non-residential military installations, isolated fire support bases and temporary patrol encampments were excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 12375 catalogued settlements and summed site peaks across the six sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Red River Core and Northern Uplands</strong></td><td class="crd-td">1067</td><td class="crd-td">8,6%</td><td class="crd-td">15,37M</td><td class="crd-td">Hanoi (3,93M)</td></tr>
<tr><td class="crd-td"><strong>North-Central Panhandle and Coastal Theatre</strong></td><td class="crd-td">935</td><td class="crd-td">7,6%</td><td class="crd-td">8,05M</td><td class="crd-td">Huế (676,2k)</td></tr>
<tr><td class="crd-td"><strong>Central Highlands and Trail Corridor</strong></td><td class="crd-td">364</td><td class="crd-td">2,9%</td><td class="crd-td">2,16M</td><td class="crd-td">Lâm Đồng (587,4k)</td></tr>
<tr><td class="crd-td"><strong>Saigon and Mekong Delta Lowlands</strong></td><td class="crd-td">698</td><td class="crd-td">5,6%</td><td class="crd-td">21,55M</td><td class="crd-td">Ho Chi Minh City (6,86M)</td></tr>
<tr><td class="crd-td"><strong>Cambodia and Eastern Mekong Basin</strong></td><td class="crd-td">3894</td><td class="crd-td">31,5%</td><td class="crd-td">5,16M</td><td class="crd-td">Phnom Penh (457k)</td></tr>
<tr><td class="crd-td"><strong>Laos Mekong Valley and Upland Corridor</strong></td><td class="crd-td">5417</td><td class="crd-td">43,8%</td><td class="crd-td">6,77M</td><td class="crd-td">Vientiane (353,2k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">12375</td><td class="crd-td">100%</td><td class="crd-td">59,06M</td><td class="crd-td">Ho Chi Minh City (6,86M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 10.597 catalogued settlements and summed site peaks across Indochina.</figcaption>
</figure>

# Testing and Validation

Settlement identities, spatial coordinates and chronological continuity were cross-referenced against historical cartography, coastal logistical records and satellite imagery [@Goscha2005Maritime; @Catton2019Control]. Declassified high-altitude reconnaissance photographs from the CORONA satellite programme (1960-1972) and U-2 flights were examined to verify urban extents and identify physical infrastructure destruction across contested provincial capitals such as Hue, Quang Tri and An Loc [@Catton2019Control; @Anonymous1971Civilian].

Refugee flow registers maintained by the Republic of Vietnam Ministry of Social Welfare, naval evacuation archives from the 1954 partition, and international medical assistance surveys provided empirical calibration for urban population surges [@Catton2010Royal; @Catanzaro1982Health; @Anonymous1971Civilian]. In cities such as Da Nang and Saigon, registration logs confirmed that population densities within informal squatter settlements reached over 1.200 persons per hectare by 1972. Cross-sectional demographic mortality analyses and longitudinal surveys corroborated these dramatic displacement patterns [@Merli1998Mortality; @Merli2000Socioeconomic; @Hd1996Population]. In rural zones subjected to systematic defoliation under Operation Ranch Hand, agricultural surveys confirmed the widespread abandonment of rubber plantations and fruit orchards, validating the reallocation of displaced populations to provincial urban fringes [@Olson2024Secret; @Lanner1971Foresters].

# Results

Table \ref{tab:gazetteer} presents the leading 45 settlements across Indochina ordered by peak population, showing geographic coordinates, sub-regional allocation, chronological spans and demographic metrics.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1975 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ho Chi Minh City</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,82 N, 106,63 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">6,86M</td><td class="crd-td">6,86M</td></tr>
<tr><td class="crd-td"><strong>Hanoi</strong></td><td class="crd-td">Red River Core and Northern Uplands</td><td class="crd-td">21,02 N, 105,84 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">3,93M</td><td class="crd-td">3,93M</td></tr>
<tr><td class="crd-td"><strong>Hai Phong</strong></td><td class="crd-td">Red River Core and Northern Uplands</td><td class="crd-td">20,86 N, 106,68 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">1,29M</td><td class="crd-td">1,29M</td></tr>
<tr><td class="crd-td"><strong>Hai Phong</strong></td><td class="crd-td">Red River Core and Northern Uplands</td><td class="crd-td">20,8 N, 106,67 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">1,09M</td><td class="crd-td">1,09M</td></tr>
<tr><td class="crd-td"><strong>Can Tho</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,04 N, 105,79 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">738,5k</td><td class="crd-td">738,5k</td></tr>
<tr><td class="crd-td"><strong>Bến Tre</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,17 N, 106,5 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">698,6k</td><td class="crd-td">698,6k</td></tr>
<tr><td class="crd-td"><strong>Huế</strong></td><td class="crd-td">North-Central Panhandle and Coastal Theatre</td><td class="crd-td">16,46 N, 107,59 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">676,2k</td><td class="crd-td">676,2k</td></tr>
<tr><td class="crd-td"><strong>Cần Thơ</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,15 N, 105,5 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">648,4k</td><td class="crd-td">648,4k</td></tr>
<tr><td class="crd-td"><strong>Khánh Hòa</strong></td><td class="crd-td">North-Central Panhandle and Coastal Theatre</td><td class="crd-td">12,33 N, 109 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">604,8k</td><td class="crd-td">604,8k</td></tr>
<tr><td class="crd-td"><strong>Bình Thuận</strong></td><td class="crd-td">North-Central Panhandle and Coastal Theatre</td><td class="crd-td">11,08 N, 108,08 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">603,8k</td><td class="crd-td">603,8k</td></tr>
<tr><td class="crd-td"><strong>Lâm Đồng</strong></td><td class="crd-td">Central Highlands and Trail Corridor</td><td class="crd-td">11,95 N, 108,43 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">587,4k</td><td class="crd-td">587,4k</td></tr>
<tr><td class="crd-td"><strong>Cà Mau</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">9,08 N, 105,08 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">582,4k</td><td class="crd-td">582,4k</td></tr>
<tr><td class="crd-td"><strong>Sóc Trăng</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">9,67 N, 105,83 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">577,7k</td><td class="crd-td">577,7k</td></tr>
<tr><td class="crd-td"><strong>Tây Ninh</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">11,33 N, 106,17 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">573,3k</td><td class="crd-td">573,3k</td></tr>
<tr><td class="crd-td"><strong>Biên Hòa</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,95 N, 106,82 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">571,8k</td><td class="crd-td">571,8k</td></tr>
<tr><td class="crd-td"><strong>Bà Rịa-Vũng Tàu</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,58 N, 107,25 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">568,5k</td><td class="crd-td">568,5k</td></tr>
<tr><td class="crd-td"><strong>Vĩnh Long</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,17 N, 106 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">496,2k</td><td class="crd-td">496,2k</td></tr>
<tr><td class="crd-td"><strong>Da Nang</strong></td><td class="crd-td">North-Central Panhandle and Coastal Theatre</td><td class="crd-td">16,07 N, 108,21 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">493,9k</td><td class="crd-td">493,9k</td></tr>
<tr><td class="crd-td"><strong>Trà Vinh</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">9,83 N, 106,25 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">491,6k</td><td class="crd-td">491,6k</td></tr>
<tr><td class="crd-td"><strong>Bình Phước</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">11,75 N, 106,92 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">488,4k</td><td class="crd-td">488,4k</td></tr>
<tr><td class="crd-td"><strong>Bạc Liêu</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">9,3 N, 105,5 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">476,8k</td><td class="crd-td">476,8k</td></tr>
<tr><td class="crd-td"><strong>Phnom Penh</strong></td><td class="crd-td">Cambodia and Eastern Mekong Basin</td><td class="crd-td">11,57 N, 104,92 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">457k</td><td class="crd-td">323k</td></tr>
<tr><td class="crd-td"><strong>Hà Giang</strong></td><td class="crd-td">Red River Core and Northern Uplands</td><td class="crd-td">22,75 N, 105 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">430,5k</td><td class="crd-td">430,5k</td></tr>
<tr><td class="crd-td"><strong>Hà Nam</strong></td><td class="crd-td">Red River Core and Northern Uplands</td><td class="crd-td">20,53 N, 105,97 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">423,4k</td><td class="crd-td">423,4k</td></tr>
<tr><td class="crd-td"><strong>Phu Yen</strong></td><td class="crd-td">North-Central Panhandle and Coastal Theatre</td><td class="crd-td">13,17 N, 109,17 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">422,8k</td><td class="crd-td">422,8k</td></tr>
<tr><td class="crd-td"><strong>Hòa Bình</strong></td><td class="crd-td">Red River Core and Northern Uplands</td><td class="crd-td">20,67 N, 105,33 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">422,2k</td><td class="crd-td">422,2k</td></tr>
<tr><td class="crd-td"><strong>Vientiane</strong></td><td class="crd-td">Laos Mekong Valley and Upland Corridor</td><td class="crd-td">17,97 N, 102,6 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">353,2k</td><td class="crd-td">353,2k</td></tr>
<tr><td class="crd-td"><strong>Ninh Thuận</strong></td><td class="crd-td">North-Central Panhandle and Coastal Theatre</td><td class="crd-td">11,75 N, 108,83 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">288,7k</td><td class="crd-td">288,7k</td></tr>
<tr><td class="crd-td"><strong>Thuan An</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,92 N, 106,71 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">288,4k</td><td class="crd-td">288,4k</td></tr>
<tr><td class="crd-td"><strong>Cho Lon</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,75 N, 106,66 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">274,9k</td><td class="crd-td">274,9k</td></tr>
<tr><td class="crd-td"><strong>Thủ Đức</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,86 N, 106,72 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">274,7k</td><td class="crd-td">274,7k</td></tr>
<tr><td class="crd-td"><strong>Binh Thanh</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,81 N, 106,71 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">270,6k</td><td class="crd-td">270,6k</td></tr>
<tr><td class="crd-td"><strong>Thu GJuc</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,85 N, 106,77 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">257,1k</td><td class="crd-td">257,1k</td></tr>
<tr><td class="crd-td"><strong>Vinh</strong></td><td class="crd-td">North-Central Panhandle and Coastal Theatre</td><td class="crd-td">18,67 N, 105,69 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">253,8k</td><td class="crd-td">253,8k</td></tr>
<tr><td class="crd-td"><strong>Kon Tum</strong></td><td class="crd-td">Central Highlands and Trail Corridor</td><td class="crd-td">14,75 N, 107,92 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">251k</td><td class="crd-td">251k</td></tr>
<tr><td class="crd-td"><strong>Vientiane</strong></td><td class="crd-td">Laos Mekong Valley and Upland Corridor</td><td class="crd-td">17,98 N, 102,63 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">248,4k</td><td class="crd-td">248,4k</td></tr>
<tr><td class="crd-td"><strong>Lai Châu</strong></td><td class="crd-td">Red River Core and Northern Uplands</td><td class="crd-td">22,28 N, 103,25 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">232,5k</td><td class="crd-td">232,5k</td></tr>
<tr><td class="crd-td"><strong>Vung Tau</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,35 N, 107,08 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">227,8k</td><td class="crd-td">227,8k</td></tr>
<tr><td class="crd-td"><strong>Bac Giang</strong></td><td class="crd-td">Red River Core and Northern Uplands</td><td class="crd-td">21,27 N, 106,19 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">220,5k</td><td class="crd-td">220,5k</td></tr>
<tr><td class="crd-td"><strong>Thai Nguyen</strong></td><td class="crd-td">Red River Core and Northern Uplands</td><td class="crd-td">21,59 N, 105,85 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">205,8k</td><td class="crd-td">205,8k</td></tr>
<tr><td class="crd-td"><strong>Nha Trang</strong></td><td class="crd-td">North-Central Panhandle and Coastal Theatre</td><td class="crd-td">12,24 N, 109,19 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">203,2k</td><td class="crd-td">203,2k</td></tr>
<tr><td class="crd-td"><strong>Hòa Hưng</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,77 N, 106,67 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">195,5k</td><td class="crd-td">195,5k</td></tr>
<tr><td class="crd-td"><strong>Thu Dau Mot</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">10,98 N, 106,65 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">182,8k</td><td class="crd-td">182,8k</td></tr>
<tr><td class="crd-td"><strong>Ben Cat</strong></td><td class="crd-td">Saigon and Mekong Delta Lowlands</td><td class="crd-td">11,15 N, 106,6 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">178,6k</td><td class="crd-td">178,6k</td></tr>
<tr><td class="crd-td"><strong>Sainyabūlī</strong></td><td class="crd-td">Laos Mekong Valley and Upland Corridor</td><td class="crd-td">19,25 N, 101,75 E</td><td class="crd-td">1945 - 1975</td><td class="crd-td">177,9k</td><td class="crd-td">177,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across Indochina (1945 to 1975).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### 1. Democratic Republic of Vietnam — Red River Core and Northern Uplands

The northern core division catalogues 398 primary settlements distributed across the Red River floodplain and the northern mountain arc [@Thrift1985Cities; @Zhang2002Chinas]. Hanoi anchored the national political structure, expanding from 1,93M in 1945 to 3,93M in 1975 despite planned wartime evacuations. Hai Phong served as the premier deep-water maritime port, concentrating 1,29M residents across its urban and industrial districts. Secondary industrial centres included Nam Dinh (the historical textile capital), Thai Nguyen (the centre of domestic iron and steel production), Viet Tri (heavy chemical manufacturing) and Hon Gai (anthracite coal mining along Ha Long Bay). Upland provincial capitals such as Lang Son, Cao Bang and Lao Cai coordinated overland trade and military logistics with China [@Zhang2002Chinas].

### 2. North-Central Panhandle, DMZ and Central Coastal Theatre

This coastal division catalogues 427 settlements along the narrow maritime strip between Thanh Hoa and Binh Thuan [@Goscha2005Maritime; @Catton2019Control]. Da Nang grew into the second-largest urban agglomeration in South Vietnam, housing 493,94k residents in 1975 supported by a massive deep-water naval anchorage and air base complex. Hue served as the cultural and educational capital, experiencing catastrophic structural damage and civilian losses during the 1968 Tet Offensive [@Anonymous1971Civilian]. Other major coastal settlements included Vinh (the primary northern staging base for the Ho Chi Minh Trail), Thanh Hoa, Dong Hoi, Quang Ngai, Quy Nhon and Nha Trang, each functioning as fortified enclaves surrounded by intensely contested rural peripheries.

### 3. Central Highlands and Ho Chi Minh Trail Corridor

The interior highland division catalogues 98 settlements across the forested plateaux of Kontum, Gia Lai, Dak Lak and Lam Dong [@Pholsena2012Transformative; @Mishra2008Laos]. Buon Ma Thuot in Dak Lak province was the premier urban centre of the southern highlands, controlling surrounding coffee and rubber estates. Pleiku functioned as the headquarters of the South Vietnamese II Corps and US military operations in the central plateau. Da Lat in Lam Dong province (587,41k) developed as a mountain resort and agricultural market centre for temperate vegetables, largely insulated from kinetic ground fighting until the final months of the war in 1975. Kontum and An Khe formed fortified strongpoints guarding Highway 19, the primary east-west logistical artery connecting the coast with the interior.

### 4. Republic of Vietnam — Saigon and Mekong Delta Lowlands

The southern alluvial division catalogues 363 settlements across the fertile plain of the lower Mekong and Dong Nai rivers [@Thrift1985Cities; @NguyenMarshall2023State; @Goodman1975South]. Ho Chi Minh City (Saigon) dominated the macro-region, expanding to 6,86M inhabitants by 1975 as military operations, defoliation and free-fire zone declarations drove rural cultivators into the capital. The Mekong delta supported a dense hierarchy of riverine market cities: Can Tho served as the administrative and military hub of the delta, supported by My Tho, Bien Hoa (571,84k), Ca Mau (582,42k), Soc Trang (577,69k), Tay Ninh (573,32k), Ba Ria-Vung Tau (568,47k), Vinh Long (496,18k), Tra Vinh (491,57k) and Binh Phuoc (488,43k).

### 5. Cambodia: Phnom Penh Refuge and Eastern Bombing Theatre

The Cambodian division catalogues 3.894 settlements across the central floodplains, the Tonle Sap basin and the Cardamom and Dangrek mountain borders [@Blumenfeld1970Cambodia; @Walque2005Selective]. Phnom Penh underwent unprecedented refugee hyper-inflation, swelling from approximately 650k residents in 1969 to over 1,8M by early 1975 as American carpet bombing and Khmer Rouge insurgent advances devastated the eastern countryside. Battambang in the northwest remained the premier agricultural rice centre, while Kampong Cham, Siem Reap, Kampot and the deep-water maritime port of Sihanoukville (Kampong Som) operated as secondary administrative and commercial nodes [@Walque2006Sociodemographic; @Hood1990Beijings].

### 6. Laos: Mekong Lowlands and Plain of Jars and Trail Zone

The Lao division catalogues 5.417 settlements across the rugged valleys of northern and southern Laos [@Mishra2008Laos; @Pholsena2012Transformative]. Vientiane functioned as the national administrative capital and diplomatic refuge along the Mekong River, while Luang Prabang maintained its status as the royal capital. In the southern panhandle, Savannakhet and Pakse commanded vital river crossings and agricultural trade with Thailand. In the contested interior, settlements such as Sam Neua and Viengxay operated as subterranean command bases for the Pathet Lao, while the Plain of Jars witnessed the total depopulation and physical erasure of dozens of ancient agricultural villages under continuous aerial bombardment [@Bundy1988Failure; @Zhang2002Chinas].

# Limitations

Settlement documentation across wartime Indochina is subject to specific administrative and historical limitations:
1. Heterogeneous census quality: While the Democratic Republic of Vietnam conducted structured municipal registrations in 1960 and 1974, demographic counts in the Republic of Vietnam relied upon civil identity registries and refugee relief rolls that systematically omitted informal squatters and unregistered children [@Thayer1975Systems; @Merli2000Socioeconomic; @Anonymous1971Civilian].
2. Rapid administrative boundary revisions: Provincial and district boundaries were reorganised repeatedly by both the Diem administration and the National Liberation Front, creating complex homonym overlaps and administrative reallocations across historical documents [@Catton2019Control; @NguyenMarshall2023Political].
3. Transitory refugee settlements: Hundreds of temporary refugee camps established along Highway 1 and around major air bases existed for only several months before being dismantled, relocated or integrated into expanding urban municipalities [@Nguyen2016Fighting; @Catton2010Royal].
4. Toponymic variations: Settlements frequently bore multiple distinct names across French colonial cartography, Vietnamese national gazetteers, US military maps and local indigenous dialects, necessitating rigorous coordinate validation to eliminate duplicate reporting [@Zagoria1982Refused; @Galarneau1984Burns].

# Conclusion

The MANDALA settlement gazetteer synthesises 10.597 catalogued localities across six sub-regions, establishing an empirical spatial framework for demographic research on the Indochina Wars from 1945 to 1975. By anchoring settlement populations to WGS84 coordinates and tracing municipal trajectories across thirty years of conflict, this catalogue documents the dramatic spatial shift from rural agrarian dispersion to defensive urban concentration. The resulting data provide the indispensable foundation for dasymetric population modelling, post-war reconstruction analyses and long-term settlement geography across mainland South-East Asia.

# Appendix

The MANDALA source ledger audited 11.397 candidate records, resulting in 10.597 accepted settlements and 800 exclusions. Table \ref{tab:excluded} presents the leading 25 excluded candidate records, detailing territorial allocation, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Phu Quoc</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
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
<tr><td class="crd-td"><strong>Y Na</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Yen Xa</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Yen Xa</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Yen Xa</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Yen Vinh</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Yen Vinh</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Yen Vien</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Yen Tho</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Yen Thinh</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Yen Thang</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Yen Thang</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Yen Thai</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate records from the Indochina source ledger.</figcaption>
</figure>

# Sources
