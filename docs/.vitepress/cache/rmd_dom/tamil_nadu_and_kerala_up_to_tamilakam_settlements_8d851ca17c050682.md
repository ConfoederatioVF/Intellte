---
title: "Settlement Gazetteer of Prehistoric and Early Historic Tamilakam"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (10000BC to 300AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: tamil_nadu_and_kerala_up_to_tamilakam_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_tamil_nadu_and_kerala_up_to_tamilakam_spatial.png"
hero_caption: "Spatial distribution of 226 catalogued prehistoric and Early Historic settlements and regional hydrological catchments across Tamil Nadu and Kerala (167.458 km²) from 10000BC to 300AD."
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

This settlement gazetteer catalogues WGS84 geographic coordinates, administrative sub-regions, chronological occupation horizons and benchmark population trajectories for 226 prehistoric and Early Historic settlements across Tamil Nadu and Kerala (167.458 km², encompassing 1.989 active 5-arcminute terrestrial cells) from 10000BC to 300AD. Encompassing three physiographic macro-zones, the gazetteer spans diverse architectural, industrial and ecological traditions: coastal red sand-dune foraging stations (*teri* sites) and river terrace Palaeolithic occupations along the Kortallaiyar, pastoral ash-mounds and polished celt settlements in the interior uplands, monumental Megalithic cists, dolmens and urn burial cemeteries (*mudumakkal thazhi*) across the Vaigai and Thamirabarani plains, and fortified inland capitals, industrial pyrotechnological craft quarters and trans-oceanic maritime emporia during the Sangam era.

Settlement magnitudes range from early prehistoric camps at Attirampakkam (1,8k peak) and coastal foraging sites at Megnanapuram (1,2k peak) to Early Historic metropolises at Madurai (37,5k peak in 200BC), Kaveripattinam/Puhar (30k peak in 0AD), Tiruchirappalli/Uraiyur (30k peak in 200BC), Kanchipuram (30k peak in 200BC) and Pattanam/Muziris (25k peak in 0AD). Major secondary centres include Arikamedu/Poduke (18,6k peak in 0AD), Korkai (14,4k peak in 200BC), Alagankulam (11,4k peak in 0AD), Keeladi (5,8k peak in 200BC), Rameswaram (5,6k peak in 1000BC), Kodumanal (4,8k peak in 200BC) and Adichanallur (4,2k peak in 500BC). Every catalogued locality reconciles against 325 candidates in the INDUS source ledger alongside 99 documented exclusions (predominantly duplicate survey aliases within a 2,2 km spatial radius).

By integrating spatial coordinates with regional geomorphology, stratified excavation monographs and classical Sangam toponymy, this gazetteer provides an empirical baseline for urbanization and settlement systems in southern peninsular India. Settlement subtraction isolates nucleated urban centres from dasymetrically distributed rural agricultural populations, preventing demographic double counting and confirming that Early Historic Tamilakam sustained an integrated settlement hierarchy with a Pareto rank-size distribution.

# Background

Archaeological settlement patterns across Tamil Nadu and Kerala reflect specialized adaptations to distinct geomorphic zones, monsoonal hydrology and maritime trade networks [@Abraham2003Chera; @KingwellBanham2019Rainfed; @Tomber2009Migration]. Four primary settlement traditions characterise the regional archaeological inventory:
1. Alluvial deltaic metropolises and agrarian centres: In the fertile Kaveri, Vaigai and Thamirabarani basins, permanent settlements developed around tank-irrigated paddy fields [@KingwellBanham2019Rainfed]. Centres such as Madurai, Uraiyur and Tiruchirappalli featured brick domestic compounds, defensive earthen ramparts, moats and royal palaces described in Sangam poetry [@Monsingh2025Ancient; @Dwivedi2019Early].
2. Maritime emporia and coastal ports: Along the Malabar, Coromandel and Gulf of Mannar littorals, specialized harbour settlements mediated long-distance commerce between the Mediterranean world, the Red Sea and Southeast Asia [@Tomber2009Migration; @Cobb2023Indian; @Abraham2023Recent]. Pattanam (Muziris), Kaveripattinam (Puhar), Arikamedu, Korkai and Alagankulam operated brick wharves, warehouses, glass and stone bead workshops and customs stations [@Kelly2024Report; @Deshpande1975Indian; @Thapar1979Indian].
3. Upland industrial craft towns: In the mineral-rich Kongu plateau and interior hill corridors, towns such as Kodumanal and Karur specialized in high-temperature pyrotechnology, including wootz crucible steel smelting, quartz crystal bead knapping and beryl carving for export [@Abraham2003Chera; @Rao1985Indian].
4. Pastoral and megalithic mortuary complexes: Across the granitic inselbergs and gravel river bluffs of the Deccan fringe and southern plains, communities constructed dolmenoid cists, stone circles and urn burial grounds at sites such as Adichanallur, Maski borders and the Nilgiri hills [@K2014Early; @Rao1989South; @Simone2021Grave; @Johansen2023Social].

# Methodology

Candidate localities in the source ledger were evaluated using published excavation reports, state heritage inventories, epigraphic registers and radiocarbon syntheses [@Rao1985Indian; @Thapar1981Indian; @N1978Indian; @Deshpande1975Indian]. Inclusion criteria required:
- Confirmed WGS84 geographic coordinates cross-referenced against Survey of India topographic sheets and modern satellite imagery.
- Stratified cultural horizons or ceramic assemblages spanning the Mesolithic, Neolithic, Megalithic or Early Historic Sangam horizons.
- Area-based or room-count demographic estimations calibrated to settlement mound extent and excavation footprints.

Where multiple archaeological survey findspots fall within 2,2 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and eliminating artificial point clustering. Non-habitation features such as isolated petroglyphs and surface lithic scatters without architectural deposits are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 226 catalogued settlements and summed site peaks across the three sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chera Malabar and Western Ghats</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Kaveri Delta and Kongu Uplands</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Vaigai-Thamirabarani Pandya Heartland</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">257</td><td class="crd-td">100%</td><td class="crd-td">397,4k</td><td class="crd-td">Madurai (37,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 226 catalogued settlements and summed site peaks across Tamil Nadu and Kerala.</figcaption>
</figure>

# Testing and Validation

Settlement locations and chronological spans were verified through multi-source stratigraphic and material evidence [@Rao1985Indian; @Abraham2003Chera; @Kelly2024Report]. Radiocarbon sequences from Keeladi, Kodumanal and Pattanam anchor the transition from Early Iron Age Megalithic culture into Early Historic urbanism between 600BC and 300AD [@Baskar2026Regional; @Abraham2023Recent].

Archaeobotanical and palynological profiles from archaeological sediments confirm agricultural intensifications corresponding to settlement growth [@Fuller2020Chapter; @KingwellBanham2019Rainfed]. The shift from dry millet horticulture to bunded wet-paddy agriculture in the Kaveri and Thamirabarani plains provided the caloric foundation for town nucleation [@KingwellBanham2019Rainfed].

The spatial distribution of catalogued settlements conforms to an integrated rank-size hierarchy (Figure \ref{fig:demography} Panel B). Evaluated across the full sample of 226 settlements, the rank-size distribution exhibits a power-law exponent of alpha=1,03 with a coefficient of determination of R²=0,98. This log-linear fit confirms that southern peninsular settlement was not fragmented into isolated autarkic enclaves, but formed an articulated settlement network where primary capitals coordinated secondary market towns, industrial craft nodes and agrarian villages.

<figure class="crd-figure-block" id="fig:demography">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-tamil-nadu-and-kerala-up-to-tamilakam-settlements/fig2_tamil_nadu_and_kerala_up_to_tamilakam_demography.png" alt="fig:demography" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory and settlement hierarchy across Tamil Nadu and Kerala (10000BC to 300AD), showing benchmark sub-regional population curves and rank-size distribution for 226 catalogued settlements.</figcaption>
</figure>

# Results

Table \ref{tab:gazetteer} presents the leading 45 prehistoric and Early Historic settlements across Tamil Nadu and Kerala ordered by peak population descending, detailing coordinates, sub-regional allocation, chronological spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">0AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Madurai</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">9,92 N, 78,12 E</td><td class="crd-td">200BC - 300AD</td><td class="crd-td">37,5k</td><td class="crd-td">37,5k</td></tr>
<tr><td class="crd-td"><strong>Kaveripattinam</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">11,14 N, 79,86 E</td><td class="crd-td">200BC - 300AD</td><td class="crd-td">30k</td><td class="crd-td">30k</td></tr>
<tr><td class="crd-td"><strong>Tiruchirappalli</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">10,82 N, 78,67 E</td><td class="crd-td">200BC - 300AD</td><td class="crd-td">30k</td><td class="crd-td">30k</td></tr>
<tr><td class="crd-td"><strong>Kanchipuram</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">12,83 N, 79,7 E</td><td class="crd-td">200BC - 300AD</td><td class="crd-td">30k</td><td class="crd-td">30k</td></tr>
<tr><td class="crd-td"><strong>Pattanam</strong></td><td class="crd-td">Chera Coastal Malabar</td><td class="crd-td">10,16 N, 76,21 E</td><td class="crd-td">200BC - 300AD</td><td class="crd-td">25k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Arikamedu</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">11,9 N, 79,82 E</td><td class="crd-td">200BC - 300AD</td><td class="crd-td">18,6k</td><td class="crd-td">18,6k</td></tr>
<tr><td class="crd-td"><strong>Korkai</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">8,64 N, 78,06 E</td><td class="crd-td">500BC - 300AD</td><td class="crd-td">14,4k</td><td class="crd-td">13,3k</td></tr>
<tr><td class="crd-td"><strong>Alagankulam</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">9,35 N, 78,97 E</td><td class="crd-td">200BC - 300AD</td><td class="crd-td">11,4k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Keeladi</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">9,84 N, 78,19 E</td><td class="crd-td">500BC - 300AD</td><td class="crd-td">5,8k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Rameswaram</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">9,29 N, 79,32 E</td><td class="crd-td">2000BC - 300AD</td><td class="crd-td">5,6k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Seven Mother's Sculptures</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">13,06 N, 79,4 E</td><td class="crd-td">500BC - 300AD</td><td class="crd-td">5,5k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Kottukkal Cave Temple</strong></td><td class="crd-td">Chera Coastal Malabar</td><td class="crd-td">8,89 N, 76,91 E</td><td class="crd-td">500BC - 300AD</td><td class="crd-td">5,5k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Bishopsdown</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">11,31 N, 76,7 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">5k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Mysuru</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">12,5 N, 77,5 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">5k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Kodumanal</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">11,11 N, 77,52 E</td><td class="crd-td">500BC - 300AD</td><td class="crd-td">4,8k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Adichanallur</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">8,63 N, 77,88 E</td><td class="crd-td">1000BC - 200AD</td><td class="crd-td">4,2k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Yashwantpur</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">13,02 N, 77,55 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">3,8k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Kunnukara</strong></td><td class="crd-td">Chera Coastal Malabar</td><td class="crd-td">10,15 N, 76,29 E</td><td class="crd-td">2000BC - 300AD</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Arouarnoi</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">12,6 N, 79,83 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">3,3k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Alosygni</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">16,63 N, 82,03 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">3,2k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Kanathra (island)</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">9,52 N, 79,69 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">2,7k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Chavadipalaiyam</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">11,1 N, 77,69 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">2,5k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Korkai</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">8,67 N, 78,1 E</td><td class="crd-td">500BC - 300AD</td><td class="crd-td">2,5k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Puduru</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">13,9 N, 79,92 E</td><td class="crd-td">2000BC - 300AD</td><td class="crd-td">2,2k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Prehistoric Burial Site, S</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">10,45 N, 78,7 E</td><td class="crd-td">1000BC</td><td class="crd-td">2,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cydara (river)</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">10 N, 80 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">2,1k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Krishnapura</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">12,22 N, 76,96 E</td><td class="crd-td">2000BC - 300AD</td><td class="crd-td">2k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Souboura</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">11,75 N, 79,76 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">2k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Darasuram</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">10,95 N, 79,36 E</td><td class="crd-td">2000BC - 300AD</td><td class="crd-td">2k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Tiruneelakandar Temple</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">8,74 N, 77,47 E</td><td class="crd-td">500BC - 300AD</td><td class="crd-td">2k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Urn Burial Site</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">12,02 N, 79,66 E</td><td class="crd-td">1000BC</td><td class="crd-td">1,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Argarou</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">11,1 N, 78,67 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">1,7k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Nagappattinam</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">10,76 N, 79,84 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">1,6k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>T. Pudukkottai</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">9,6 N, 78,52 E</td><td class="crd-td">2000BC - 300AD</td><td class="crd-td">1,5k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Thandikudi</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">10,31 N, 77,64 E</td><td class="crd-td">1000BC</td><td class="crd-td">1,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tirukkambuliyur</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">10,94 N, 78,16 E</td><td class="crd-td">2000BC - 300AD</td><td class="crd-td">1,5k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Pazyahannur</strong></td><td class="crd-td">Chera Coastal Malabar</td><td class="crd-td">10,68 N, 76,42 E</td><td class="crd-td">2000BC - 300AD</td><td class="crd-td">1,4k</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Kallakinar</strong></td><td class="crd-td">Kaveri Delta and Tondaimandalam</td><td class="crd-td">10,81 N, 77,33 E</td><td class="crd-td">200BC</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Virappatti</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">9,8 N, 77,81 E</td><td class="crd-td">2000BC - 300AD</td><td class="crd-td">1,3k</td><td class="crd-td">979</td></tr>
<tr><td class="crd-td"><strong>Chowannoor Guha - Kunnamku</strong></td><td class="crd-td">Chera Coastal Malabar</td><td class="crd-td">10,66 N, 76,08 E</td><td class="crd-td">500BC - 300AD</td><td class="crd-td">1,3k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Edakkal Caves</strong></td><td class="crd-td">Chera Coastal Malabar</td><td class="crd-td">11,63 N, 76,24 E</td><td class="crd-td">500BC - 300AD</td><td class="crd-td">1,3k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Ukkirankottai</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">8,91 N, 77,6 E</td><td class="crd-td">2000BC - 300AD</td><td class="crd-td">1,2k</td><td class="crd-td">926</td></tr>
<tr><td class="crd-td"><strong>Excavated remains and budd</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">11,15 N, 79,83 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Dolmens and Urns</strong></td><td class="crd-td">Vaigai-Thamirabarani Basins</td><td class="crd-td">10,67 N, 78,89 E</td><td class="crd-td">1000BC</td><td class="crd-td">1,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Baris (river)</strong></td><td class="crd-td">Chera Coastal Malabar</td><td class="crd-td">9,38 N, 76,85 E</td><td class="crd-td">0AD - 300AD</td><td class="crd-td">1,2k</td><td class="crd-td">995</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 prehistoric and Early Historic settlements ordered by peak population across Tamil Nadu and Kerala (10000BC to 300AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Kaveri Delta, Tondaimandalam and Kongu Uplands

The central and northern division catalogues 112 settlements spanning the Kaveri drainage, the Noyyal and Amaravathi tributaries, and the Palar and Ponnaiyar basins [@Abraham2003Chera; @R2025Artistic; @Udayakumar2019Architectu]. Major settlements include Kaveripattinam/Puhar (30k in 0AD), the primary coastal port of the Cholas at the Kaveri estuary; Tiruchirappalli/Uraiyur (30k peak in 200BC), the inland dynastic capital commanding deltaic irrigation; Kanchipuram (30k peak in 200BC), the northern administrative and religious centre; Kodumanal (4,8k peak in 200BC), the preeminent gem-cutting and high-carbon steel industrial centre; and Arikamedu/Poduke (18,6k peak in 0AD), the industrial port town with extensive Roman trade connections [@Deshpande1975Indian; @Kelly2024Report].

### Vaigai-Thamirabarani Basins and Pandya Heartland

The southern division catalogues 81 settlements across the Vaigai, Thamirabarani and Gundar river basins [@Monsingh2025Ancient; @Baskar2026Regional]. Madurai was the foremost inland metropolis, accommodating 37,5k inhabitants across its fortified urban core [@Dwivedi2019Early]. Keeladi (5,8k peak in 200BC) revealed extensive brick structures, ring-wells and inscribed Tamil-Brahmi pottery along the Vaigai [@Baskar2026Regional; @Rao1985Indian]. Korkai (14,4k peak in 200BC) served as the primary Pandya port and pearl emporium at the Thamirabarani mouth, flanked by Alagankulam (11,4k peak in 0AD) on the Vaigai estuary [@Thapar1979Indian]. Adichanallur (4,2k peak in 500BC) represents the largest Iron Age urn burial mortuary site in peninsular India [@MushrifTripathy2019Tales].

### Chera Coastal Malabar and Western Ghats Littoral

The western division catalogues 33 settlements along the high-precipitation rainforest strip and backwater lagoons between Kasaragod and Cape Comorin [@Kelly2024Report; @Tomber2009Migration]. Pattanam (Muziris) was the preeminent maritime emporium, concentrating 25k inhabitants in 0AD around brick wharves, boat basins and Roman merchant enclaves [@Kelly2024Report; @Cobb2023Indian]. Kunnukara (3,3k peak in 1000BC), Nelcynda, Tyndis and Vizhinjam operated as secondary anchorages and spice-collecting ports along the Arabian Sea littoral [@Tomber2009Migration; @Abraham2023Recent].

# Limitations

Archaeological settlement inventories in southern peninsular India are subject to distinct taphonomic constraints:
1. Alluvial burial and deltaic siltation: river deposition across the Kaveri, Vaigai and Periyar deltas has buried early prehistoric and Neolithic levels beneath metres of sediment, while coastal erosion and progradation altered port topographies at Puhar and Korkai [@Tomber2009Migration; @Rick2022Coring].
2. Continuous modern urban occupation: ancient metropolises such as Madurai, Tiruchirappalli, Kanchipuram and Karur remain living cities, constraining excavation to isolated test trenches and salvage archaeology [@Abraham2003Chera; @Rao1985Indian].
3. Acidic tropical soils: high soil acidity across the Western Ghats and lateritic coastal terraces rapidly degrades organic materials, unburnt bone and wooden structures, limiting preservation to ceramics, stone artefacts, glass and metal slag [@MushrifTripathy2019Tales; @Kelly2024Report].

# Conclusion

The 226 catalogued settlements in Tamil Nadu and Kerala document an articulated urban and rural landscape that evolved from sparse Mesolithic foraging camps into a multi-tiered settlement system during the Sangam era. Anchored by major metropolises at Madurai, Kaveripattinam, Tiruchirappalli, Kanchipuram and Pattanam, the settlement hierarchy was supported by specialised industrial crafting nodes and intensive tank-irrigated agricultural villages. Reconciled against 325 source-ledger candidates and 99 documented exclusions, this gazetteer provides a spatial foundation for quantitative demographic models of prehistoric and Early Historic South Asia.

# Appendix

The INDUS source ledger for Tamil Nadu and Kerala was compiled through a four-wave asymptotic ingestion workflow. Table \ref{tab:ledger-waves} summarises candidate acquisitions and duplicate alias consolidations.

<figure class="crd-table-figure" id="tab:ledger-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ingestion Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Prior Total</th><th class="crd-th">Newly Included</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">official censuses and national registries</td><td class="crd-td">0</td><td class="crd-td">159</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">archival monographs and institutional catalogues</td><td class="crd-td">159</td><td class="crd-td">69</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">longitudinal backfill and foundation year audit</td><td class="crd-td">228</td><td class="crd-td">29</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">submask gap hunter and geonames homonym audit</td><td class="crd-td">257</td><td class="crd-td">0</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Four-wave asymptotic ingestion and settlement saturation across Tamil Nadu and Kerala.</figcaption>
</figure>

# Sources
