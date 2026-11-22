---
title: "Settlement Gazetteer of Funan, Chenla, Champa and the Khmer Empire"
subtitle: "MANDALA: Coordinates, Toponymy and Demographic Trajectories (500BC to 1862AD)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: funan_chenla_champa_khmer_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_funan_chenla_champa_khmer_spatial.png"
hero_caption: "Spatial distribution of 156 catalogued historical and archaeological settlements across four physiographic catchments in Cambodia and southern Vietnam (243.324 km²) from 500BC to 1862AD."
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

This gazetteer catalogues geographic coordinates, administrative allocations, chronological spans and benchmark demographic estimates for 156 historical and archaeological settlements across Cambodia and southern Vietnam (243.324 km², encompassing 3.018 active 5-arcminute terrestrial cells) from 500BC to 1862AD. Distributed across four physiographic divisions, the catalogued localities capture the evolution of settlement forms in mainland South-East Asia: proto-historic moated wetland citadels in the Transbassac, monumental brick temple-cities along the middle Mekong, the vast low-density agro-urban complex of Greater Angkor and walled coastal trading ports along the Annamite littoral.

Settlement magnitudes range from early Iron Age trade posts and regional monastic centres to pre-industrial metropolises. The urban climax is represented by Greater Angkor (Yasodharapura), which covered over 1.000 km² and reached an estimated peak population of 700.185 inhabitants in 1200AD, supported by an integrated network of reservoirs (*baray*), canals and bunded rice fields. Major coastal centres include Da Nang (216,41k peak in 1862AD), Khanh Hoa (97,75k peak in 1862AD), Binh Thuan (97,6k peak in 1862AD), Phu Yen (68,34k peak in 1862AD), Ninh Thuan (46,67k peak in 1862AD) and Nha Trang (45,86k peak in 1862AD). Lower Mekong riverine capitals encompass Phnom Penh (93,02k peak in 1862AD), Chaktomuk (45,04k peak in 1600AD), Longvek (27,52k peak in 1600AD) and Angkor Borei (21,1k peak in 200AD). Secondary Angkorian regional hubs comprise Koh Ker (33,86k in 1000AD), Preah Khan of Kompong Svay (30k in 1200AD), Sambor Prei Kuk (24,85k in 700AD) and Banteay Chhmar (22,19k in 1200AD).

Every catalogued settlement reconciles against 268 source-ledger candidates under MANDALA alongside 112 documented exclusions. Excluded entities consist primarily of secondary temple shrines or suburbs collapsed within a 2,2 km spatial buffer of primary urban nodes, ensuring that nucleated settlement subtraction accurately distinguishes dense urban occupation from the surrounding rural agrarian landscape.

This gazetteer establishes a georeferenced foundation for regional demographic analysis. By linking spatial coordinates with documented occupation chronologies, LiDAR earthwork surveys and epigraphic records, the catalogue enables precise dasymetric allocation of rural cultivators across active terrestrial cells while preserving the distinct demographic signatures of urban metropolises.

# Background

## Settlement Typologies and Hydraulic Nucleation

The historical landscape of the Tonle Sap and Mekong basins is characterised by two distinct traditions of settlement nucleation [@Marko2020Historical; @Sarah2021Provisioni]:
1. Low-density agro-urban complexes: exemplified by Greater Angkor, these settlements dispersed residential quarters, house gardens and village ponds across extensive grids of bunded rice fields, integrated by transport causeways and canals [@Sarah2021Provisioni; @Asmita2021Challenges]. Monumental temple enclosures stood at the centre of these agricultural zones, serving concurrently as civic administrative nodes and ritual centres.
2. Compact moated citadels: characteristic of proto-historic Funan and pre-Angkorian Chenla, these sites featured concentric earthen ramparts and water-filled moats enclosing elevated habitation mounds [@Owen2022Small]. Settlements such as Angkor Borei and Sambor Prei Kuk utilised brick masonry for administrative and religious enclosures, with populations concentrated within or adjacent to defensive perimeters.

## Maritime Port Enclaves and Estuarine Embayments

Along the central and southern coast of Vietnam, Cham settlement patterns adhered to riverine and estuarine topography [@Mupiza2016Pengaruh]. Cham principalities established fortified administrative citadels near the mouths of short, swift coastal rivers, where ships could shelter from seasonal monsoons:
- Estuarine port towns: sites such as Hoi An (Faifo) and Da Nang on the Han River estuary mediated maritime trade between the South China Sea and interior forest basins.
- River valley citadel capitals: inland fortified centres such as Tra Kieu (Simhapura) in Quang Nam and Cha Ban (Vijaya) in Binh Dinh commanded fertile alluvial plains, surrounded by satellite villages dedicated to wet-rice cultivation [@Mupiza2016Pengaruh].
- Coastal defensive fortresses: fortified promontory strongholds and island redoubts guarded sea lanes and protected salt-evaporation pans and coastal fisheries.

# Methodology

Candidate localities in the source ledger were audited using published excavation reports, heritage registers, high-resolution satellite remote sensing and epigraphic inventories [@S2018Automated; @Dominik2024Traismaure]. Inclusion within the active settlement catalogue requires:
- Precise WGS84 coordinates verified against satellite imagery and historical cartography.
- Documented habitation phases spanning the period between 500BC and 1862AD, confirmed by stratigraphic excavations, architectural remains or datable inscriptions.
- Demographically constrained population estimations based on enclosed area, residential mound counts and documented urban carrying capacity [@Sarah2021Provisioni].

Secondary monuments, satellite temple shrines and suburban wards situated within 2,2 km of a primary settlement centre are consolidated under the parent settlement to eliminate artificial spatial clustering. Non-habitation features such as isolated caves, megalithic alignments and ceremonial quarries are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 156 catalogued settlements and summed site peaks across the four sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tonle Sap and Angkor Basin</strong></td><td class="crd-td">55</td><td class="crd-td">35,3%</td><td class="crd-td">873,7k</td><td class="crd-td">Greater Angkor (700,2k)</td></tr>
<tr><td class="crd-td"><strong>Lower Mekong and Angkor Borei</strong></td><td class="crd-td">44</td><td class="crd-td">28,2%</td><td class="crd-td">344,3k</td><td class="crd-td">Phnom Penh (93k)</td></tr>
<tr><td class="crd-td"><strong>Champa Maritime Corridor</strong></td><td class="crd-td">44</td><td class="crd-td">28,2%</td><td class="crd-td">943k</td><td class="crd-td">Da Nang (216,4k)</td></tr>
<tr><td class="crd-td"><strong>Cardamom Coast and Upper Mekong</strong></td><td class="crd-td">13</td><td class="crd-td">8,3%</td><td class="crd-td">36,3k</td><td class="crd-td">Hà Tiên (8k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">156</td><td class="crd-td">100%</td><td class="crd-td">2,2M</td><td class="crd-td">Greater Angkor (700,2k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 156 catalogued settlements and summed site peaks across Cambodia and southern Vietnam.</figcaption>
</figure>

# Testing and Validation

Settlement chronologies and spatial extents were verified through multi-sensor remote sensing, geoarchaeological coring and epigraphic analysis [@Diaz2022Prospecci; @Terry2018Evidence]. Airborne LiDAR campaigns conducted across northwestern Cambodia have demonstrated that low-relief earthen features—including residential occupation mounds, field dykes and domestic water tanks—form dense, continuous networks surrounding central temple complexes [@Edisa2016Arheolo; @Maria2025Pholidalta]. These survey data confirm that population density was distributed across expansive peri-urban agro-ecosystems rather than confined solely within temple walls [@Sarah2021Provisioni].

Radiocarbon determinations and pottery chronologies from stratified excavations anchor the temporal occupation bounds of major urban centres. At Angkor Borei and Oc Eo, radiocarbon sequences corroborate early historic occupation beginning in the late first millennium BC and continuing through the sixth century AD [@Owen2022Small]. At Greater Angkor, luminescence and radiocarbon dating of canal sediments establish that major hydraulic modifications and urban expansion occurred between the tenth and twelfth centuries AD, followed by severe canal breaches and siltation in the fourteenth century [@Terry2018Evidence; @G2015Reassessme].

Epigraphic surveys provide independent documentation of settlement hierarchies [@Thomas2009Khmer]. Inscriptions recording the foundation of hospitals (*arogyasala*) and rest-houses (*dharmasala*) along the imperial highways of Jayavarman VII confirm the continuous occupation of provincial hubs such as Phimai, Phanom Rung and Preah Khan of Kompong Svay during the imperial climax [@Thomas2009Khmer; @Thun2026Khmer].

# Results

Table \ref{tab:gazetteer} presents the leading 45 historical and archaeological settlements across Cambodia and southern Vietnam ordered by peak population descending, detailing coordinates, sub-regional allocation, chronological spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1200AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Greater Angkor</strong></td><td class="crd-td">Tonle Sap and Angkor Basin</td><td class="crd-td">13,41 N, 103,87 E</td><td class="crd-td">1000AD - 1431AD</td><td class="crd-td">700,2k</td><td class="crd-td">700,2k</td></tr>
<tr><td class="crd-td"><strong>Da Nang</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">16,07 N, 108,21 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">216,4k</td><td class="crd-td">15,4k</td></tr>
<tr><td class="crd-td"><strong>Khánh Hòa</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">12,33 N, 109 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">97,8k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Bình Thuận</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">11,08 N, 108,08 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">97,6k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Phnom Penh</strong></td><td class="crd-td">Lower Mekong and Angkor Borei</td><td class="crd-td">11,57 N, 104,92 E</td><td class="crd-td">1431AD - 1862AD</td><td class="crd-td">93k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Phu Yen</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">13,17 N, 109,17 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">68,3k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Ninh Thuận</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">11,75 N, 108,83 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">46,7k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Nha Trang</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">12,24 N, 109,19 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">45,9k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Chaktomuk</strong></td><td class="crd-td">Lower Mekong and Angkor Borei</td><td class="crd-td">11,56 N, 104,93 E</td><td class="crd-td">1600AD - 1800AD</td><td class="crd-td">45k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Koh Ker</strong></td><td class="crd-td">Tonle Sap and Angkor Basin</td><td class="crd-td">13,78 N, 104,54 E</td><td class="crd-td">1000AD</td><td class="crd-td">33,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Preah Khan of Kompong Svay</strong></td><td class="crd-td">Tonle Sap and Angkor Basin</td><td class="crd-td">13,44 N, 104,75 E</td><td class="crd-td">1200AD</td><td class="crd-td">30k</td><td class="crd-td">30k</td></tr>
<tr><td class="crd-td"><strong>Hoi An</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">15,88 N, 108,34 E</td><td class="crd-td">1600AD - 1800AD</td><td class="crd-td">29,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Longvek</strong></td><td class="crd-td">Lower Mekong and Angkor Borei</td><td class="crd-td">11,86 N, 104,75 E</td><td class="crd-td">1600AD - 1862AD</td><td class="crd-td">27,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sambor Prei Kuk</strong></td><td class="crd-td">Tonle Sap and Angkor Basin</td><td class="crd-td">12,87 N, 105,04 E</td><td class="crd-td">700AD</td><td class="crd-td">24,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>An Nhon</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">13,89 N, 109,11 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">24,4k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Vijaya</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">13,82 N, 109,12 E</td><td class="crd-td">1000AD - 1431AD</td><td class="crd-td">23,3k</td><td class="crd-td">23,3k</td></tr>
<tr><td class="crd-td"><strong>Banteay Chhmar</strong></td><td class="crd-td">Tonle Sap and Angkor Basin</td><td class="crd-td">14,07 N, 103,09 E</td><td class="crd-td">1200AD</td><td class="crd-td">22,2k</td><td class="crd-td">22,2k</td></tr>
<tr><td class="crd-td"><strong>Quang Ngai</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">15,12 N, 108,79 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">22,1k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Angkor Borei</strong></td><td class="crd-td">Lower Mekong and Angkor Borei</td><td class="crd-td">10,99 N, 104,98 E</td><td class="crd-td">200AD - 700AD</td><td class="crd-td">21,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Xuan Loc</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">10,93 N, 107,23 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">20k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Ninh Hoa</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">12,49 N, 109,12 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">18,3k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Phan Thiet</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">10,93 N, 108,1 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">18,1k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>GJien Ban</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">15,89 N, 108,25 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">17,9k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Tan Chau</strong></td><td class="crd-td">Lower Mekong and Angkor Borei</td><td class="crd-td">10,8 N, 105,24 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">13,9k</td><td class="crd-td">988</td></tr>
<tr><td class="crd-td"><strong>Tra Kieu</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">15,82 N, 108,23 E</td><td class="crd-td">200AD - 1000AD</td><td class="crd-td">13,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Trang Bang</strong></td><td class="crd-td">Lower Mekong and Angkor Borei</td><td class="crd-td">11,03 N, 106,36 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">12,8k</td><td class="crd-td">912</td></tr>
<tr><td class="crd-td"><strong>GJuc Trong</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">11,74 N, 108,37 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">12,8k</td><td class="crd-td">909</td></tr>
<tr><td class="crd-td"><strong>La Gi</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">10,66 N, 107,77 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">12,7k</td><td class="crd-td">906</td></tr>
<tr><td class="crd-td"><strong>Châu Đốc</strong></td><td class="crd-td">Lower Mekong and Angkor Borei</td><td class="crd-td">10,68 N, 105,09 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">12,5k</td><td class="crd-td">887</td></tr>
<tr><td class="crd-td"><strong>Tuy Hòa</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">13,09 N, 109,31 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">12,3k</td><td class="crd-td">879</td></tr>
<tr><td class="crd-td"><strong>GJuc Pho</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">14,81 N, 108,96 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">12,3k</td><td class="crd-td">878</td></tr>
<tr><td class="crd-td"><strong>Dong Duong</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">15,65 N, 108,42 E</td><td class="crd-td">1000AD</td><td class="crd-td">12k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hoa Thanh</strong></td><td class="crd-td">Lower Mekong and Angkor Borei</td><td class="crd-td">11,29 N, 106,13 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">11,7k</td><td class="crd-td">832</td></tr>
<tr><td class="crd-td"><strong>Tinh Bien</strong></td><td class="crd-td">Lower Mekong and Angkor Borei</td><td class="crd-td">10,6 N, 104,94 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">11,3k</td><td class="crd-td">807</td></tr>
<tr><td class="crd-td"><strong>Panduranga</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">11,56 N, 108,99 E</td><td class="crd-td">1000AD - 1800AD</td><td class="crd-td">11,1k</td><td class="crd-td">11,1k</td></tr>
<tr><td class="crd-td"><strong>Tay Ninh</strong></td><td class="crd-td">Lower Mekong and Angkor Borei</td><td class="crd-td">11,31 N, 106,1 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">10,7k</td><td class="crd-td">762</td></tr>
<tr><td class="crd-td"><strong>Phanom Rung</strong></td><td class="crd-td">Tonle Sap and Angkor Basin</td><td class="crd-td">14,53 N, 102,94 E</td><td class="crd-td">1000AD - 1200AD</td><td class="crd-td">10,6k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Hai Chau</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">15,92 N, 108,13 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">10,4k</td><td class="crd-td">741</td></tr>
<tr><td class="crd-td"><strong>Vân Phong Economic Zone</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">12,71 N, 109,38 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">10k</td><td class="crd-td">715</td></tr>
<tr><td class="crd-td"><strong>Chon Thanh</strong></td><td class="crd-td">Lower Mekong and Angkor Borei</td><td class="crd-td">11,43 N, 106,64 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">9,6k</td><td class="crd-td">682</td></tr>
<tr><td class="crd-td"><strong>Hoa Cuong</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">16,04 N, 108,18 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">9,5k</td><td class="crd-td">673</td></tr>
<tr><td class="crd-td"><strong>Kauthara</strong></td><td class="crd-td">Champa Maritime Corridor</td><td class="crd-td">12,27 N, 109,19 E</td><td class="crd-td">700AD - 1600AD</td><td class="crd-td">9,4k</td><td class="crd-td">9,4k</td></tr>
<tr><td class="crd-td"><strong>Siem Reap</strong></td><td class="crd-td">Tonle Sap and Angkor Basin</td><td class="crd-td">13,36 N, 103,86 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">8,7k</td><td class="crd-td">622</td></tr>
<tr><td class="crd-td"><strong>Hong Ngu</strong></td><td class="crd-td">Lower Mekong and Angkor Borei</td><td class="crd-td">10,8 N, 105,35 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">8k</td><td class="crd-td">570</td></tr>
<tr><td class="crd-td"><strong>Hà Tiên</strong></td><td class="crd-td">Cardamom Coast and Upper Mekong</td><td class="crd-td">10,38 N, 104,48 E</td><td class="crd-td">1000AD - 1862AD</td><td class="crd-td">8k</td><td class="crd-td">567</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 historical settlements ordered by peak population across Cambodia and southern Vietnam (500BC to 1862AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Tonle Sap and Angkor Hydraulic Basin

The Tonle Sap and Angkor hydraulic basin catalogues 55 settlements situated across the lacustrine plains and surrounding alluvial slopes [@Sarah2021Provisioni]. Greater Angkor represents the preeminent urban centre, attaining a climactic population of 700.185 inhabitants in 1200AD across its integrated network of temple complexes, residential wards and hydraulic reservoirs. Koh Ker served as the imperial capital between 928AD and 944AD, reaching 33,86k inhabitants around its vast Rahal reservoir. Preah Khan of Kompong Svay concentrated 30k people as a strategic eastern fortress and industrial iron-working centre. Sambor Prei Kuk (Isanapura) anchored the pre-Angkorian Chenla kingdom along the Sen River, housing 24,85k residents in 700AD within concentric brick-walled enclosures. Banteay Chhmar accommodated 22,19k inhabitants guarding the northwest frontier against Siamese incursions [@Thomas2009Khmer]. Other key centres include the upland redoubt of Phnom Kulen (Mahendraparvata), the regional temple complex of Phanom Rung (10,65k peak) and provincial market towns such as Battambang and Siem Reap.

### Lower Mekong and Angkor Borei-Chaktomuk Core

The Lower Mekong and Angkor Borei-Chaktomuk core catalogues 44 settlements distributed along the Mekong trunk stream and deltaic distributaries [@Owen2022Small]. Phnom Penh developed into the primary riverport capital following the abandonment of Angkor, expanding to 93,02k inhabitants by 1862AD at the confluence of the Mekong, Tonle Sap and Bassac rivers. Chaktomuk supported 45,04k residents in 1600AD as an early post-Angkorian administrative centre, while Longvek housed 27,52k people during the sixteenth century as a fortified royal capital. Angkor Borei represented the foundational urban centre of Funan, housing 21,1k people in 200AD defended by brick walls and navigable canals connecting to the coastal port of Oc Eo [@Owen2022Small]. Secondary agricultural and market centres in this alluvial tract include Tan Chau (13,88k in 1862AD), Trang Bang (12,82k in 1862AD), Chau Doc (9,6k in 1862AD) and Banteay Prei Nokor (8,5k peak).

### Champa Maritime Corridor

The Champa maritime corridor catalogues 44 settlements positioned along the coastal river deltas of central and southern Vietnam [@Mupiza2016Pengaruh]. Da Nang functioned as a primary maritime trade port and commercial hub, expanding to 216,41k inhabitants by 1862AD. Provincial coastal centres include Khanh Hoa (97,75k in 1862AD), Binh Thuan (97,6k in 1862AD), Phu Yen (68,34k in 1862AD), Ninh Thuan (Panduranga, 46,67k in 1862AD) and Nha Trang (45,86k in 1862AD). Historical Cham capitals include Vijaya (Cha Ban) in Binh Dinh, which concentrated 23,3k people at its 1200AD climax, and Tra Kieu (Simhapura), which supported 12,5k residents as the early political capital of Amaravati. Hoi An (Faifo) operated as an international maritime trading port accommodating 29,29k people in 1800AD, hosting Japanese, Chinese, Dutch and Portuguese merchant quarters.

### Cardamom Coast and Upper Mekong Uplands

The Cardamom coast and upper Mekong uplands catalogue 13 settlements situated along the southwestern maritime coast and the forested riverine margins of eastern Cambodia. Ha Tien served as a pivotal coastal trading entrepot on the Gulf of Thailand, supporting 7,96k inhabitants in 1862AD under the semi-autonomous administration of the Mac family. Snuol (4,34k in 1862AD), Preaek Prasab (3,81k in 1862AD), Kratie (3,55k in 1862AD) and Sambour (3,43k in 1862AD) functioned as riverbank market stations on the upper Mekong, mediating commercial exchange in forest resins, cardamom, elephant ivory and aromatic woods. Along the southern coast, Kampot (2,32k in 1862AD) provided maritime anchorage and trade connections with the Malay peninsula.

# Limitations

Settlement gazetteering and demographic estimation across the lower Mekong and coastal Vietnam remain subject to distinct archaeological and historical biases:
1. Differential canopy penetration: while airborne LiDAR has transformed archaeological discovery in northwestern Cambodia, comparable high-resolution coverage remains incomplete for the Cardamom uplands and portions of the lower Mekong delta, resulting in potential undercounting of small rural settlements [@Edisa2016Arheolo].
2. Fluvial burial in deltaic environments: heavy sediment deposition across the Mekong delta has buried early Funan-period canal settlements beneath metres of recent silt, requiring reliance on remote sensing palaeochannel mapping [@Marko2020Historical].
3. Urban sprawl and modern redevelopment: modern urbanisation in Da Nang, Nha Trang, Phnom Penh and secondary Vietnamese provincial cities has covered or disturbed pre-colonial Cham and Khmer archaeological strata, complicating precise surface area measurements.
4. Documentary disparity between epochs: while the Angkorian climax is extensively documented by stone epigraphy, the post-fifteenth-century era relies primarily on later royal chronicles and European merchant accounts, requiring careful cross-calibration [@Thomas2009Khmer; @Hue2022Young].

# Conclusion

The MANDALA settlement gazetteer synthesises 156 catalogued historical and archaeological localities across four physiographic sub-regions, establishing a rigorous spatial framework for demographic modelling from 500BC to 1862AD. By reconciling georeferenced coordinates, documented occupation chronologies and urban population estimates, this catalogue distinguishes nucleated urban centres from rural populations, enabling dasymetric distribution of cultivators across the agricultural landscape and illuminating the structural transformations of mainland South-East Asian settlement systems across more than two millennia.

# Appendix

The source ledger audited 268 candidate records across Cambodia and southern Vietnam, resulting in 156 accepted primary settlements and 112 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Angkor Wat</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Angkor Wat</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Angkor Thom</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ta Prohm</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bat Chum</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kutisvara</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Prasat Kravan</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>West Mebon</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ta Keo</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yasodharapura</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ta Som</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Srah Srang</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bayon</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ta Nei</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Preah Ko</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Preah Palilay</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Prasat Chrung</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Hariharalaya</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Preah Khan</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khleangs</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Phimeanakas</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Neak Pean</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Thommanon</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Terrace of the Leper King</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Preah Pithu</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the source ledger.</figcaption>
</figure>

# Sources
