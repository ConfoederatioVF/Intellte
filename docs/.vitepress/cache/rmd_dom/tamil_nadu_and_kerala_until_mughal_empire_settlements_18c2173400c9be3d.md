---
title: "Settlement Gazetteer of Tamil Nadu and Kerala"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (300AD to 1526AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: tamil_nadu_and_kerala_until_mughal_empire_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_tamil_nadu_and_kerala_until_mughal_empire_spatial.png"
hero_caption: "Spatial distribution of 457 catalogued historical settlements and regional drainage catchments across Tamil Nadu and Kerala (167.458 km²) from 300AD to 1526AD."
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

This gazetteer catalogues geographic coordinates, administrative allocations, occupation chronologies and benchmark demographic trajectories for 1195 historical settlements across Tamil Nadu and Kerala (167.458 km², encompassing 1.989 active 5-arcminute terrestrial cells) from 300AD to 1526AD. Spanning three physiographic and dynastic divisions, the catalogue encompasses diverse settlement types: irrigated temple metropolises in the Kaveri delta, fortified administrative capitals in Tondaimandalam and Pandya Nadu, agrarian market towns (*nagaram*) supported by cascading tank networks, and oceanic emporia along the Malabar and Coromandel coasts. Settlement scales range from late antique trading ports at Kaveripattinam (19,62k in 300AD), Arikamedu (16,54k) and Pattanam (16,35k) to imperial capitals at Thanjavur (79,02k peak in 1200AD), Madurai (58,5k peak), Kozhikode (Calicut, 46,99k peak in 1350AD), Tiruchirappalli (46,8k peak), Kanchipuram (46,8k peak) and Gangaikonda Cholapuram (36,22k in 1200AD). Major commercial ports include Nagapattinam (32,1k in 1200AD), Kollam (Quilon, 28,94k in 1200AD), Kochi (Cochin, 28,44k in 1350AD), Kodungallur (Muziris, 23,76k in 1200AD) and Kannur (Cannanore, 23,79k in 1526AD). Every catalogued locality reconciles against 831 candidate records in the INDUS source ledger alongside 639 documented exclusions (predominantly duplicate survey aliases within a 2,2 km spatial radius and non-habitation monuments).

# Background

Historical settlement patterns across southern South Asia reflect distinct adaptations to regional hydrography, monsoon precipitation regimes and oceanic trade routes [@Shanmugasundaram2017North; @Rita2022River]. Four primary settlement traditions characterise the regional archaeological and historical record:
1. Kaveri delta temple metropolises and corporate agrarian nucleations: In the fertile alluvial floodplains of the Kaveri and Coleroon, settlements were structured around royal palace enclosures, monumental stone temples and tax-exempt *brahmadeya* colonies [@Mala2025Agricultur; @SHOBA2022Cholas]. Thanjavur, Gangaikonda Cholapuram and Kumbakonam functioned as multi-functional hubs combining imperial administration, ritual redistribution, artisanal manufacturing and grain storage [@Thamilarasi2024Architectu; @Kala2021Saranathap].
2. Tondaimandalam administrative capitals and weaving centres: In the northern granitic plains of the Palar and Cheyyar basins, major urban centres such as Kanchipuram and Tiruchirappalli developed as fortified dynastic seats and religious pilgrimage destinations, surrounded by extensive lattices of rainfed tank-irrigated villages supervised by corporate councils (*sabhas*) [@Kumar2024Architectu; @Ridisha2026Contributi].
3. Pandya urban centres in the Vaigai and Tambraparani valleys: In the southern Tamil plains, settlements such as Madurai, Korkai and Tirunelveli integrated riverine wet-rice agriculture with overland commerce and marine pearl fisheries along the Gulf of Mannar [@Journal2025; @Mathar2025Echoes].
4. Malabar littoral ports and rivermouth emporia: Along the Arabian Sea coast, settlements such as Kozhikode, Kollam, Kodungallur, Kochi and Kannur developed as linear urban corridors oriented toward estuarine river mouths, where sheltered anchorages facilitated long-distance pepper trade with West Asia, Africa and China [@Kooria2022Encounters; @S2021Historical; @Paleri2023Elections].

# Methodology

Candidate localities in the INDUS source ledger were evaluated using published epigraphic registers (*South Indian Inscriptions*, *Epigraphia Indica*), official archaeological survey inventories, regional dynastic histories and historical travel accounts [@Shin2024Claiming; @THALINJA2026Rare; @Bes2022Sources]. Inclusion in the gazetteer requires:
- Precise WGS84 geographic coordinates cross-referenced against historical cartography and satellite imagery.
- Documented epigraphic, architectural or literary attestation spanning the period from 300AD to 1526AD.
- Population estimates calibrated against urban settlement area, room counts, tax-roll assessments or residential quarters (*cheris*) documented in inscriptional sources [@Mala2025Agricultur; @RamadeviSekhar2026Inheritanc].

Where multiple survey points or epigraphic monuments fall within a 2,2 km radius of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving spatial integrity and preventing artificial clustering. Non-habitation features such as isolated boundary stones, wayside hero stones (*natukal*) without adjoining habitation mounds, and detached watchtowers are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 1195 catalogued settlements and summed site peaks across the three sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chera Perumal, Venad and Calicut Malabar</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Pallava Tondaimandalam, Chola Kaveri and Kongu</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Pandya Nadu and Southern Tamil Plains</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">1195</td><td class="crd-td">100%</td><td class="crd-td">3,04M</td><td class="crd-td">Chennai (143,3k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 457 catalogued settlements and summed site peaks across Tamil Nadu and Kerala.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological spans were verified through cross-referencing stone and copper-plate inscriptions with remote sensing and field archaeology [@Baskar2026Regional; @Ali2025Rural]. Thousands of published Tamil and Malayalam inscriptions record the donation of land, villages, tanks and irrigation sluices to temples, establishing unambiguous geographic coordinates and contemporary toponyms for catalogued localities [@Cox2016Conclusion; @Udayakumar2019Architectu]. For example, inscriptions at Uthiramerur, Cholapuram, Thirukurukkai and Tirucherai provide detailed micro-geographical accounts of village boundaries, residential quarters (*ur-nattam*), artisan lanes and irrigation channels [@Ridisha2026Contributi; @Thamilarasi2024Architectu; @Mangalam2022Sculptures; @Kala2021Saranathap].

Archaeological excavations at stratified sites such as Pattanam (Muziris) in Kerala and Vembakottai in southern Tamil Nadu corroborate continuous occupation and material prosperity from late antiquity through the mediaeval epoch [@S2021Historical; @Baskar2026Regional]. At Pattanam, maritime wharf structures, Roman amphora sherds, West Asian torpedo jars and Chinese celadon wares confirm continuous oceanic trade linking the Malabar coast to the Mediterranean and the South China Sea [@S2021Historical; @Kooria2022Encounters]. At Vembakottai on the Vaippar River, excavations yielded evidence of shell-bangle crafting, terracotta pipe manufacture and continuous urban habitation from the Sangam period into the Vijayanagara era [@Baskar2026Regional].

Urban rank-size analysis across the 457 catalogued settlements (well above the minimum sample floor of 25 localities) confirms a log-linear Zipf distribution characteristic of integrated regional settlement systems. The primate metropolises of Thanjavur (79,02k) and Madurai (58,5k) anchored the apex of the hierarchy, supported by regional secondary centres (Tiruchirappalli, Kanchipuram, Kozhikode, Gangaikonda Cholapuram) and tertiary market towns (*nagaram*) that mediated commodity flows between agricultural hinterlands and oceanic ports (Figure \ref{fig:trajectory}).

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-tamil-nadu-and-kerala-until-mughal-empire-settlements/fig2_tamil_nadu_and_kerala_until_mughal_empire_demography.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory and urban expansion of Tamil Nadu and Kerala (300AD to 1526AD), contrasting sub-regional growth rates and urbanisation phases.</figcaption>
</figure>

# Results

Table \ref{tab:gazetteer} presents the leading 45 historical settlements across Tamil Nadu and Kerala ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation chronologies and benchmark demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1200AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">13,09 N, 80,28 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">143,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kallakurichi</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">11,73 N, 78,96 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">87,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Thanjavur</strong></td><td class="crd-td">Pandya Nadu and Southern Tamil Plains</td><td class="crd-td">10,79 N, 79,14 E</td><td class="crd-td">900AD - 1526AD</td><td class="crd-td">79k</td><td class="crd-td">79k</td></tr>
<tr><td class="crd-td"><strong>Madurai</strong></td><td class="crd-td">Pandya Nadu and Southern Tamil Plains</td><td class="crd-td">9,92 N, 78,12 E</td><td class="crd-td">300AD - 1526AD</td><td class="crd-td">58,5k</td><td class="crd-td">58,5k</td></tr>
<tr><td class="crd-td"><strong>Kozhikode</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">11,26 N, 75,78 E</td><td class="crd-td">1200AD - 1526AD</td><td class="crd-td">47k</td><td class="crd-td">40,8k</td></tr>
<tr><td class="crd-td"><strong>Tiruchirappalli</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">10,82 N, 78,67 E</td><td class="crd-td">300AD - 1526AD</td><td class="crd-td">46,8k</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Kanchipuram</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">12,83 N, 79,7 E</td><td class="crd-td">300AD - 1526AD</td><td class="crd-td">46,8k</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Gangaikonda Cholapuram</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">11,21 N, 79,45 E</td><td class="crd-td">1050AD - 1200AD</td><td class="crd-td">36,2k</td><td class="crd-td">36,2k</td></tr>
<tr><td class="crd-td"><strong>Nagapattinam</strong></td><td class="crd-td">Pandya Nadu and Southern Tamil Plains</td><td class="crd-td">10,77 N, 79,84 E</td><td class="crd-td">1050AD - 1526AD</td><td class="crd-td">32,1k</td><td class="crd-td">32,1k</td></tr>
<tr><td class="crd-td"><strong>Tiruchirappalli</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">10,82 N, 78,7 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">30,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kollam</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">8,89 N, 76,61 E</td><td class="crd-td">900AD - 1526AD</td><td class="crd-td">28,9k</td><td class="crd-td">28,9k</td></tr>
<tr><td class="crd-td"><strong>Kochi</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">9,97 N, 76,24 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">28,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kannur</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">11,87 N, 75,37 E</td><td class="crd-td">1526AD</td><td class="crd-td">23,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kodungallur</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">10,23 N, 76,2 E</td><td class="crd-td">900AD - 1350AD</td><td class="crd-td">23,8k</td><td class="crd-td">23,8k</td></tr>
<tr><td class="crd-td"><strong>Rajamahendravaram</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">17,01 N, 81,78 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">19,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kaveripattinam</strong></td><td class="crd-td">Pandya Nadu and Southern Tamil Plains</td><td class="crd-td">11,14 N, 79,86 E</td><td class="crd-td">300AD - 600AD</td><td class="crd-td">19,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tirunelveli</strong></td><td class="crd-td">Pandya Nadu and Southern Tamil Plains</td><td class="crd-td">8,73 N, 77,68 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">19,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Avadi</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">13,11 N, 80,11 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">18,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kochi</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">9,94 N, 76,26 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">17,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Salem</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">11,65 N, 78,16 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">17k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Arikamedu</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">11,9 N, 79,82 E</td><td class="crd-td">300AD</td><td class="crd-td">16,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pattanam</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">10,16 N, 76,21 E</td><td class="crd-td">300AD</td><td class="crd-td">16,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gundupalaiyam</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">11,94 N, 79,8 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">15,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kumbakonam</strong></td><td class="crd-td">Pandya Nadu and Southern Tamil Plains</td><td class="crd-td">10,96 N, 79,39 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">14,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Thiruvananthapuram</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">8,49 N, 76,95 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">14k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vadakara</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">11,6 N, 75,58 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ernad</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">9,14 N, 76,91 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tirurangadi</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">11,04 N, 75,92 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Paravur</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">8,79 N, 76,67 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kanayannur</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">9,97 N, 76,27 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Karthikappally</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">9,26 N, 76,45 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Karunagappally</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">9,1 N, 76,54 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Poonamallee</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">13,05 N, 80,11 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ambattur</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">13,1 N, 80,16 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tambaram</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">12,92 N, 80,13 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Alandur</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">13 N, 80,21 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sholinganallur</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">12,89 N, 80,23 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kalkulam</strong></td><td class="crd-td">Pandya Nadu and Southern Tamil Plains</td><td class="crd-td">9,77 N, 78,73 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tiruvottiyur</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">13,16 N, 80,3 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">13k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Coimbatore</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">11,01 N, 76,97 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">12,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pallavaram</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">12,97 N, 80,15 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">12,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kakinada</strong></td><td class="crd-td">Pallava Tondaimandalam</td><td class="crd-td">16,96 N, 82,24 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">11,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Palakkad</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">10,77 N, 76,65 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">10,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mangaluru</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">12,92 N, 74,86 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">10,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kunnathunad</strong></td><td class="crd-td">Chera Perumal and Venad</td><td class="crd-td">10,04 N, 76,42 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">10,6k</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 historical settlements ordered by peak population across Tamil Nadu and Kerala (300AD to 1526AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Chera Perumal, Venad and Calicut Malabar

The western coastal division catalogues 79 settlements situated along the Arabian Sea littoral, the brackish backwater system and the lower river valleys of the Periyar, Bharathappuzha and Chaliyar [@Kooria2022Encounters; @Rita2022River]. Kozhikode (Calicut) was the leading urban metropolis of the division, peaking at 46,99k inhabitants in 1350AD as the capital of the Samoothiri (Zamorin) and the commercial focal point of the trans-oceanic Indian Ocean pepper trade [@Paleri2023Elections; @Bes2022Introducti]. Kollam (Quilon) in southern Kerala served as an ancient commercial hub for Syrian Christian and Jewish trading guilds, concentrating 28,94k inhabitants at its 1200AD peak [@Kooria2022Encounters]. Following the Periyar flood of 1341AD, Kochi (Cochin) developed into a deep-water natural harbour, housing 28,44k inhabitants by 1350AD [@Rita2022River]. Kodungallur (Muziris or Mahodayapuram), the historic royal capital of the Chera Perumals, concentrated 23,76k inhabitants at its 1200AD apex before river siltation reduced its maritime accessibility [@S2021Historical]. Kannur (Cannanore) in northern Malabar accommodated 23,79k inhabitants by 1526AD as the fortified port of the Kolathiri rajas [@Kooria2022Encounters].

### Pallava Tondaimandalam, Chola Kaveri Delta and Kongu Nadu

The central and northern division catalogues 218 settlements across the Palar, Pennaiyar and Kaveri basins, representing the most densely urbanised division of the macro-region [@Mala2025Agricultur; @Kumar2024Architectu]. Kanchipuram was the preeminent northern metropolis, supporting 46,8k inhabitants from 900AD through 1526AD as a silk-weaving centre and sacred capital for Pallavas, Cholas and Vijayanagara nayakas [@Kumar2024Architectu]. Tiruchirappalli (46,8k peak) commanded the strategic apex of the Kaveri delta near the island fortress of Srirangam [@KN2026Epigraphs]. Gangaikonda Cholapuram, constructed by Rajendra I, served as the imperial Chola capital from 1025AD until the thirteenth century, concentrating 36,22k inhabitants at its 1200AD peak [@Thamilarasi2024Architectu]. Secondary centres include Kumbakonam, an ancient religious and commercial centre on the Kaveri, Karur (Vanji) in Kongu Nadu, and Uthiramerur (12,4k peak), renowned for its detailed epigraphic descriptions of rural democratic village councils [@Ridisha2026Contributi]. Ancient ports along the Coromandel coast include Arikamedu (16,54k in 300AD) and Mamallapuram, which served as the royal port of the Pallavas [@Careem2024Goddesses].

### Pandya Nadu and Southern Tamil Plains

The southern division catalogues 160 settlements across the Vaigai, Tambraparani and Vaippar drainage basins [@Journal2025]. Thanjavur, located in the fertile transitional zone between the Kaveri delta and southern plains, stood as the supreme imperial metropolis of the macro-region, concentrating 79,02k inhabitants at its 1200AD apex around the monumental Brihadisvara temple complex [@Kala2021Saranathap]. Madurai, the historic capital of the Sangam and Mediaeval Pandyas, accommodated 58,5k residents from 900AD through 1526AD, organised around the central Meenakshi temple complex [@Journal2025]. Nagapattinam on the Coromandel coast operated as the premier maritime port of the Chola and Pandya empires, concentrating 32,1k inhabitants in 1200AD and maintaining active commercial ties with Srivijaya and China [@Careem2024Goddesses]. Kaveripattinam (Poompuhar) anchored early coastal commerce with 19,62k residents in 300AD-600AD before marine transgressions led to its gradual abandonment [@Mathar2025Echoes]. Korkai (9,81k in 300AD-600AD) operated as the primary pearl-fishing emporium on the Gulf of Mannar before deltaic siltation shifted maritime activity to Kayalpatnam [@Mathar2025Echoes].

# Limitations

Archaeological and demographic reconstructions across Tamil Nadu and Kerala are subject to several documented preservation constraints:
1. Differential epigraphic preservation: epigraphic survivorship is heavily skewed toward stone temples in the Kaveri delta and Tondaimandalam, where stone was widely used for monumental architecture, whereas secular mud-brick dwellings have largely disintegrated [@Cox2016Conclusion; @Mala2025Agricultur].
2. Fluvial and coastal geomorphological alterations: river avulsion along the Kaveri distributaries and estuarine flooding in Kerala (notably the 1341AD Periyar flood) obscured ancient harbour structures and redistributed maritime populations [@Rita2022River; @S2021Historical].
3. Continuous modern urban occupation: metropolises such as Madurai, Kanchipuram, Tiruchirappalli and Kozhikode have been continuously occupied for over twenty centuries, preventing large-scale horizontal archaeological excavations of mediaeval domestic sectors [@Kumar2024Architectu].
4. Perishable archival media: outside of stone inscriptions, the widespread reliance upon palm-leaf manuscripts (*oles*) in Kerala resulted in the loss of early administrative registers, requiring reliance on foreign traveller accounts and temple land charters [@Kooria2022Encounters].

# Conclusion

The INDUS settlement gazetteer synthesises 457 catalogued historical localities across three sub-regions, establishing a georeferenced foundation for regional demographic modelling in Tamil Nadu and Kerala from 300AD to 1526AD. By reconciling geographic coordinates, inscriptional attestations and occupational spans, this gazetteer distinguishes nucleated urban centres from rural populations, enabling dasymetric distribution of cultivators across the non-settled landscape. The catalogued settlement trajectories confirm that peninsular South Asia maintained dense urban networks through successive dynastic epochs, anchored by deltaic agriculture, tank hydraulic engineering and Indian Ocean maritime commerce.

# Appendix

The INDUS source ledger audited 831 candidate records across Tamil Nadu and Kerala, resulting in 457 accepted settlements and 374 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Templum Augusti</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Brihadishwara Temple</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Nagappattinam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Malanga</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Group of monuments at Maha</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dharmaraja Cave</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Azanos (river)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Musiris L</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Korkai/Kolchoi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Galiboi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kaveripumpattinam/Poombuha</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Thanjavur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Modoura</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Varaha Cave</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tynnas (river)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Annamalai</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kalindoia</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Galiba</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pandipatna</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Podouke/Arikamedu</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Alagankulam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Karoura</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kottayam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Muziris</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dharmaraja Ratha</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Tamil Nadu and Kerala source ledger.</figcaption>
</figure>

# Sources
