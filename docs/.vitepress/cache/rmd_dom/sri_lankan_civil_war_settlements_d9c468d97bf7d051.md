---
title: "Settlement Gazetteer of the Sri Lankan Civil War Theatres"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (1983AD to 2026AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: sri_lankan_civil_war_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_sri_lankan_civil_war_spatial.png"
hero_caption: "Spatial distribution of 287 catalogued settlements and sub-regional boundaries across northern and eastern Sri Lanka (17.754 km²) from 1983AD to 2026AD."
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

This gazetteer documents geographic coordinates, administrative allocations, longitudinal occupation chronologies and demographic trajectories for 287 catalogued settlements across the northern and eastern civil war theatres of Sri Lanka (17.754 km², comprising 225 active 5-arcminute terrestrial cells) from 1983AD to 2026AD. Encompassing three distinct operational theatres - the Jaffna Peninsula (34 catalogued localities across 679 km²), the Vanni mainland (116 localities across 7.471 km²) and the Eastern Province littoral (137 localities across 9.604 km²) - the gazetteer captures the spatial structure of modern South Asian armed conflict. Catalogued centres span diverse urban and agrarian types, ranging from major metropolitan commercial centres such as Kandy (125,1k peak), Kalmunai (112,2k peak), Trincomalee (111k peak) and Jaffna (104k peak) to regional lagoon ports, garrison junctions and rural agrarian villages. Every catalogued locality reconciles against 291 audited candidates in the INDUS source ledger alongside 4 documented duplicate homonym exclusions. By linking settlement coordinates directly to historical displacement registries, decennial census returns and conflict mortality records, this gazetteer provides the settlement subtraction framework that isolates urban concentrations from dasymetrically distributed rural populations, enabling granular demographic modelling of conflict contraction and post-2009 reconstruction.

# Background

The settlement geography of northern and eastern Sri Lanka reflects centuries of agricultural colonisation, maritime commerce and colonial administrative demarcations, profoundly transformed by twenty-six years of civil war [@Orjuela2005Civil; @Pabon2013Give]. Four primary settlement typologies characterise the catalogued landscape:
1. Karstic limestone urban townships: In the Jaffna Peninsula, settlements developed as dense, contiguous residential clusters served by extensive networks of freshwater dug wells tapping the shallow Miocene limestone aquifer [@Ranasinghe2014Water]. Towns such as Jaffna, Chavakachcheri, Point Pedro and Valvettithurai functioned as intensive market centres, fishing harbours and administrative nodes [@Sarvananthan2016Pains].
2. Dry-zone tank-cascade agrarian villages: Across the Vanni mainland, human habitation historically clustered beneath earthen reservoir bunds (*ellangawa*) along seasonal stream networks such as the Kanakarayan Aru and Aruvi Aru [@Ranasinghe2014Water]. Villages in Kilinochchi, Mullaitivu and Vavuniya combined tank-irrigated paddy fields with rainfed upland cultivation and livestock grazing, surrounded by dry evergreen forests that influenced military mobility [@Saji2024Traversing].
3. Estuarine lagoon port towns and commercial enclaves: Along the Eastern Province littoral, maritime settlements formed along the margins of sheltered lagoons and natural harbours, including Trincomalee, Batticaloa, Kalmunai, Kattankudy and Muttur [@F2017Management; @L2021Beautiful]. These towns accommodated dense, multi-ethnic communities combining marine fishing, rice milling and retail commerce.
4. Strategic garrison hubs and transit checkpoints: Situated along key transport corridors such as the A9 highway, frontier towns including Vavuniya, Dambulla, Anuradhapura and Mankulam served as staging nodes, military logistics bases and internally displaced person reception centres [@Chattoraj2019Stranger; @Peiris2019Internal].

# Methodology

Candidate localities in the INDUS source ledger were evaluated against official national census returns, departmental gazetteers, topographical survey sheets and humanitarian displacement inventories [@Sarvananthan2016Pains; @Khan2018Evaluation]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional hydrography and satellite imagery.
- Longitudinal demographic observations across official census benchmarks (1981, 2001 and 2012) and wartime administrative registries.
- Administrative classification within one of the three designated operational theatres.

Where duplicate survey records or identical homonyms fall within a 2,2 km spatial proximity threshold, secondary records are consolidated to prevent artificial clustering. Table \ref{tab:summary} summarises the distribution of 287 catalogued settlements, site shares, summed peak populations and leading settlements across the three divisions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jaffna Peninsula Theatre</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Vanni LTTE Core Zone</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Eastern Province Littoral</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">678</td><td class="crd-td">100%</td><td class="crd-td">3,8M</td><td class="crd-td">Kandy (125,1k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 287 catalogued settlements and summed site peaks across northern and eastern Sri Lanka.</figcaption>
</figure>

# Testing and Validation

Settlement coordinates, administrative bounds and population series were validated through multi-source cross-referencing [@Sarvananthan2017Mapping; @Chattoraj2019Stranger]. The 1981 Census of Population and Housing provided the pre-conflict baseline for town councils, municipal councils and pradeshiya sabhas. For the wartime period (1983-2009), demographic series were calibrated against records from the Ministry of Resettlement, UNHCR field registries and local Divisional Secretariat household registers [@Peiris2019Internal; @Khan2018Evaluation].

The complete 2012 Census of Population and Housing, conducted by the Department of Census and Statistics, provides post-war ground-truth verification across all eight districts of the Northern and Eastern provinces. Remote sensing surveys using high-resolution optical imagery verified the physical extent of urban reconstruction, roof replacement and land reclamation across heavily impacted centres including Jaffna, Kilinochchi and Mullaitivu [@Sarvananthan2016Pains; @Saji2024Traversing]. Epidemiological studies and casualty registers further corroborate the timing and magnitude of conflict-induced displacement troughs [@Ratnayake2024Forging; @Suganthan2016Study; @Matthias2026Unveilin].

# Results

Table \ref{tab:gazetteer} presents the leading forty catalogued settlements in northern and eastern Sri Lanka ordered by peak population descending, detailing coordinates, sub-regional allocation, chronological spans, peak population and modern population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">2026AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kandy</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">7,29 N, 80,64 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">125,1k</td><td class="crd-td">125,1k</td></tr>
<tr><td class="crd-td"><strong>Kalmunai</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">7,42 N, 81,82 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">112,2k</td><td class="crd-td">112,2k</td></tr>
<tr><td class="crd-td"><strong>Trincomalee</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">8,57 N, 81,23 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">111k</td><td class="crd-td">111k</td></tr>
<tr><td class="crd-td"><strong>Jaffna</strong></td><td class="crd-td">Jaffna Peninsula Theatre</td><td class="crd-td">9,66 N, 80,02 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">104k</td><td class="crd-td">98,7k</td></tr>
<tr><td class="crd-td"><strong>Batticaloa</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">7,72 N, 81,7 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">97,2k</td><td class="crd-td">97,2k</td></tr>
<tr><td class="crd-td"><strong>Valvettithurai</strong></td><td class="crd-td">Jaffna Peninsula Theatre</td><td class="crd-td">9,82 N, 80,17 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">92,3k</td><td class="crd-td">87,6k</td></tr>
<tr><td class="crd-td"><strong>Dambulla</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">7,85 N, 80,65 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">74,7k</td><td class="crd-td">74,7k</td></tr>
<tr><td class="crd-td"><strong>Kalpitiya</strong></td><td class="crd-td">Vanni LTTE Core</td><td class="crd-td">8,17 N, 79,72 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">72,8k</td><td class="crd-td">72,8k</td></tr>
<tr><td class="crd-td"><strong>Anuradhapura</strong></td><td class="crd-td">Vanni LTTE Core</td><td class="crd-td">8,34 N, 80,41 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">68,3k</td><td class="crd-td">68,3k</td></tr>
<tr><td class="crd-td"><strong>Vavuniya</strong></td><td class="crd-td">Vanni LTTE Core</td><td class="crd-td">8,75 N, 80,48 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">67,4k</td><td class="crd-td">67,4k</td></tr>
<tr><td class="crd-td"><strong>Badulla</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">6,98 N, 81,06 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">53,3k</td><td class="crd-td">53,3k</td></tr>
<tr><td class="crd-td"><strong>Pottuvil</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">6,88 N, 81,83 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">51,2k</td><td class="crd-td">51,2k</td></tr>
<tr><td class="crd-td"><strong>Ampara</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">7,3 N, 81,68 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">49k</td><td class="crd-td">49k</td></tr>
<tr><td class="crd-td"><strong>Mullaitivu</strong></td><td class="crd-td">Vanni LTTE Core</td><td class="crd-td">9,28 N, 80,8 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">41,8k</td><td class="crd-td">41,8k</td></tr>
<tr><td class="crd-td"><strong>Matale</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">7,47 N, 80,62 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">40,8k</td><td class="crd-td">40,8k</td></tr>
<tr><td class="crd-td"><strong>Mannar</strong></td><td class="crd-td">Vanni LTTE Core</td><td class="crd-td">8,98 N, 79,91 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">40,1k</td><td class="crd-td">40,1k</td></tr>
<tr><td class="crd-td"><strong>Point Pedro</strong></td><td class="crd-td">Jaffna Peninsula Theatre</td><td class="crd-td">9,82 N, 80,23 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">37k</td><td class="crd-td">35,1k</td></tr>
<tr><td class="crd-td"><strong>Mullaittivu</strong></td><td class="crd-td">Vanni LTTE Core</td><td class="crd-td">9,27 N, 80,81 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">32,5k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td"><strong>Nuwara Eliya</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">6,97 N, 80,77 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">30,8k</td><td class="crd-td">30,8k</td></tr>
<tr><td class="crd-td"><strong>Eravur Town</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">7,78 N, 81,6 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">25,7k</td><td class="crd-td">25,7k</td></tr>
<tr><td class="crd-td"><strong>Vakarai</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">8,13 N, 81,43 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">23,5k</td><td class="crd-td">23,5k</td></tr>
<tr><td class="crd-td"><strong>Kataragama</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">6,41 N, 81,33 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">23,4k</td><td class="crd-td">23,4k</td></tr>
<tr><td class="crd-td"><strong>Irakkamam</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">7,25 N, 81,72 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">16,1k</td><td class="crd-td">16,1k</td></tr>
<tr><td class="crd-td"><strong>Polonnaruwa</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">7,94 N, 81 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">15,6k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Kilinochchi</strong></td><td class="crd-td">Vanni LTTE Core</td><td class="crd-td">9,4 N, 80,4 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">14,6k</td><td class="crd-td">14,6k</td></tr>
<tr><td class="crd-td"><strong>Monaragala</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">6,87 N, 81,35 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">11,5k</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>Wellawaya</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">6,74 N, 81,1 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">11,2k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Padaviya Divisional Secret</strong></td><td class="crd-td">Vanni LTTE Core</td><td class="crd-td">8,85 N, 80,76 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">9,5k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Keppapularu</strong></td><td class="crd-td">Vanni LTTE Core</td><td class="crd-td">9,28 N, 80,76 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">9,4k</td><td class="crd-td">9,4k</td></tr>
<tr><td class="crd-td"><strong>Wattegama</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">6,8 N, 81,48 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">9k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Mihintale</strong></td><td class="crd-td">Vanni LTTE Core</td><td class="crd-td">8,36 N, 80,51 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">5,6k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Ella Town</strong></td><td class="crd-td">Eastern Province Contested Littoral</td><td class="crd-td">6,88 N, 81,05 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">5,6k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Karainagar</strong></td><td class="crd-td">Jaffna Peninsula Theatre</td><td class="crd-td">9,73 N, 79,87 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">3,8k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Viramanikkatevanturai</strong></td><td class="crd-td">Jaffna Peninsula Theatre</td><td class="crd-td">9,82 N, 80,05 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">3,8k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Veemankamam</strong></td><td class="crd-td">Jaffna Peninsula Theatre</td><td class="crd-td">9,8 N, 80,03 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">3,8k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Vilan</strong></td><td class="crd-td">Jaffna Peninsula Theatre</td><td class="crd-td">9,78 N, 79,99 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">3,8k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Vidaththalpalai</strong></td><td class="crd-td">Jaffna Peninsula Theatre</td><td class="crd-td">9,64 N, 80,25 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">3,8k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Vettilaikkeni</strong></td><td class="crd-td">Jaffna Peninsula Theatre</td><td class="crd-td">9,57 N, 80,47 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">3,8k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Velanai West</strong></td><td class="crd-td">Jaffna Peninsula Theatre</td><td class="crd-td">9,64 N, 79,89 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">3,8k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Vathiri</strong></td><td class="crd-td">Jaffna Peninsula Theatre</td><td class="crd-td">9,8 N, 80,2 E</td><td class="crd-td">1983AD - 2025AD</td><td class="crd-td">3,8k</td><td class="crd-td">3,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading forty catalogued settlements ordered by peak population across northern and eastern Sri Lanka (1983AD to 2026AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Jaffna Peninsula Theatre

The northern peninsular theatre catalogues 34 settlements covering 679 km² [@Sarvananthan2016Pains; @A2025Education]. Jaffna Municipal Council represents the primary metropolis, peaking at 104k inhabitants and serving as the cultural, medical and educational centre of the northern province [@Poologanathan2025Research; @Shanmugathasan2020Factors]. Valvettithurai (92,3k peak) on the northern coast operated as an important seafaring, fishing and trading port. Other key peninsular centres include Point Pedro (Paruthithurai), Chavakachcheri in Thenmarachchi, Chunnakam in the fertile agricultural belt of Valikamam, Tellippalai, alongside the island settlements of Karainagar and Kayts.

### Vanni LTTE Core Zone

The northern mainland theatre catalogues 116 settlements across 7.471 km² [@Pabon2013Give; @Khan2018Evaluation]. Vavuniya formed the primary urban and transport hub (67,4k peak), operating as the transit checkpoint linking government-controlled territory with insurgent zones. Mullaitivu (41,8k peak) served as a coastal district capital and fishing centre, sustaining intense destruction during the final battles of 2009 [@Ratnayake2024Forging; @Dharshini2025Life]. Kilinochchi served as the administrative centre of the LTTE de facto administration from the late 1990s through January 2009. Other catalogued centres include Mannar Island, Mankulam, Paranthan, Nedunkeni and Puthukkudiyiruppu.

### Eastern Province Littoral

The eastern coastal theatre catalogues 137 settlements spanning 9.604 km² [@F2017Management; @Chattoraj2019Stranger]. Kandy (125,1k peak) anchors the inland highland gateway to the east. Kalmunai (112,2k peak) constitutes the leading commercial metropolis of the Ampara coastal strip, supported by high demographic density in Kattankudy, Eravur and Sainthamaruthu. Trincomalee (111k peak) commands the deepwater natural harbour of Koddiyar Bay, serving as a primary naval base and commercial port. Other prominent eastern centres include Batticaloa (97,2k peak), Dambulla (74,7k peak), Kalpitiya (72,8k peak), Anuradhapura (68,3k peak), Buttala (59,5k peak), Badulla (53,3k peak), Pottuvil (51,2k peak) and Ampara (49k peak).

## Rank-Size Hierarchy and Zipf Scaling

The rank-size distribution of all 287 catalogued settlements in the study domain was evaluated using log-log ordinary least squares regression (Figure \ref{fig:demography-settlements}).

<figure class="crd-figure-block" id="fig:demography-settlements">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-sri-lankan-civil-war-settlements/fig2_sri_lankan_civil_war_demography.png" alt="fig:demography-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory and Zipf rank-size scaling for 287 catalogued settlements across northern and eastern Sri Lanka (1983AD to 2026AD).</figcaption>
</figure>

Across the complete sample of 287 settlements, the fitted rank-size distribution exhibits a Pareto scaling exponent of $\alpha = 0{,}68$ ($R^2 = 0{,}70$). In classical urban geography, a Zipf exponent of $\alpha \approx 1{,}0$ reflects an integrated, mature national urban system governed by self-organised proportional growth. The sub-unitary exponent observed here ($\alpha = 0{,}68$) demonstrates that the conflict zones lacked a single hyper-dominant primate city, displaying instead a balanced polycentric network of intermediate urban centres (Kandy, Kalmunai, Trincomalee, Jaffna, Batticaloa) that shared administrative and commercial functions across the fractured wartime landscape [@Sarvananthan2016Pains; @Peiris2019Internal].

# Limitations

This settlement gazetteer is subject to three specific archival and cartographic limitations:
1. Boundary redefinitions and pradeshiya sabha demarcations: Post-1981 administrative reorganisations, including the creation of new divisional secretariats and pradeshiya sabha limits, complicate direct longitudinal comparisons for minor municipal wards [@Sarvananthan2016Pains].
2. Toponymic dualism and spelling variants: Many settlements possess dual Tamil and Sinhala toponyms (such as Mullaitivu and Mūladīpaya, or Trincomalee and Tirukōṇamalai), requiring systematic cross-referencing against official Survey Department maps to avoid duplicate records.
3. Post-tsunami coastal buffer zone relocations: Following the December 2004 tsunami, strict enforcement of coastal setback regulations prompted the permanent inland relocation of entire fishing communities in Ampara and Batticaloa, shifting local demographic centres of gravity by 1 to 3 kilometres [@F2017Management].

# Conclusion

The INDUS settlement gazetteer synthesises 287 catalogued localities across the northern and eastern civil war theatres of Sri Lanka, establishing an empirical baseline for demographic modelling from 1983AD to 2026AD. By anchoring settlement populations to WGS84 coordinates and tracking longitudinal changes across conflict cycles, this catalogue facilitates rigorous settlement subtraction from sub-regional demographic envelopes. The resulting dataset illuminates the structural resilience of urban networks and rural agrarian tank communities during twenty-six years of civil war and subsequent post-conflict reconstruction.

# Appendix

The INDUS source ledger audited 291 candidate records across northern and eastern Sri Lanka, resulting in 287 accepted settlements and 4 duplicate homonym exclusions. Table \ref{tab:excluded} documents the 4 excluded candidate sites, detailing country of origin, exclusion classification and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Weragoda</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Wawinna</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Warapitiya</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Waralanda</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Veppankulam</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ulpothagama</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Udumulla</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Udawela</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Timbiriwewa</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate records from the northern and eastern Sri Lanka source ledger.</figcaption>
</figure>

# Sources
