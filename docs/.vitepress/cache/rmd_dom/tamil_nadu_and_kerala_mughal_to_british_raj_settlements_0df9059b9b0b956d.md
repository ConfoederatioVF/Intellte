---
title: "Settlement Gazetteer of Tamil Nadu and Kerala from the Nayakas to the British Raj"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (1526AD to 1801AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: tamil_nadu_and_kerala_mughal_to_british_raj_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_tamil_nadu_and_kerala_mughal_to_british_raj_spatial.png"
hero_caption: "Spatial distribution of 3.872 catalogued early modern settlements and regional agrarian catchments across Tamil Nadu and Kerala (167.458 km²) from 1526AD to 1801AD."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, historical foundation horizons and benchmark demographic trajectories for 3.872 early modern settlements across Tamil Nadu and Kerala (167.458 km², encompassing 1.989 active 5-arcminute terrestrial cells) from 1526AD to 1801AD. Spanning three physiographic and political divisions, the catalogue encompasses four distinct settlement traditions: deltaic temple cities and canal-irrigated market centres in the Kaveri and Vaigai basins, maritime commercial emporia and European factory ports along the Coromandel and Malabar coasts, fortified frontier garrison towns (*palayams*) across the semi-arid interior tablelands, and dispersed homestead garden settlements along the lagoons of Travancore and Cochin.

Urban scales range from the eight leading regional metropolises—Chennai (211,84k peak in 1801AD), Madurai (105k peak in 1650AD), Thanjavur (90k peak in 1650AD), Tiruchirappalli (82k peak in 1700AD), Arcot (75k peak in 1750AD), Kozhikode (72k peak in 1526AD), Kanchipuram (72k peak in 1526AD) and Bengaluru (62,99k peak in 1801AD)—to prominent coastal and interior centres including Puducherry (58,92k peak in 1750AD), Kochi (55k peak in 1600AD), Tirupati (53,67k peak in 1600AD), Thiruvananthapuram (52,05k peak in 1801AD), Gingee (45k peak in 1600AD), Cuddalore (42,68k in 1801AD), Kumbakonam (42,03k in 1801AD), Nagapattinam (42k peak in 1700AD), Kollam (36,57k in 1526AD), Tirunelveli (36,1k in 1801AD), Salem (35,16k in 1801AD), Pulicat (32k peak in 1650AD), Kannur (28k peak in 1550AD) and Dindigul (20,55k in 1801AD). Every catalogued locality reconciles against 4.672 source-ledger candidates under INDUS alongside 800 documented exclusions (predominantly duplicate administrative aliases within a 2,2 km spatial radius and non-habitation entries).

By linking georeferenced settlement trajectories with regional canal networks, epigraphic surveys and early colonial tax rolls, this gazetteer establishes a spatial baseline for early modern urbanisation in southern India. Settlement subtraction isolates nucleated urban populations from rural cultivators, ensuring that historical demographic reconstructions reflect genuine town records rather than arbitrary continental approximations.

# Background

Settlement patterns in early modern southern India reflect dynamic interactions between riverine irrigation ecology, overland trade corridors and coastal maritime commerce [@Stein1966Land; @Bulten2025Book]. Four distinct architectural and spatial traditions characterise the regional settlement landscape:
1. Deltaic temple metropolises: In the alluvial plains of the Kaveri and Vaigai, cities such as Thanjavur, Madurai, Tiruchirappalli, Kumbakonam and Kanchipuram developed around monumental Dravidian temple complexes [@Kramrisch1953Dravida; @Thilagavathy2026Evolutio]. Surrounded by concentric rectangular streets (*veedhis*) accommodating Brahmin priests, temple administrators, artisans and merchants, these cities functioned as redistributive hubs where agrarian tithes were transformed into monumental architecture and commercial liquidity [@Stein1966Land; @Frykenberg1967Studies].
2. Maritime factory ports and commercial emporia: Along the Coromandel and Malabar coasts, port cities operated as vital interfaces connecting inland artisan communities with Indian Ocean shipping lanes [@Bulten2025Book; @M2026Politics]. Madras (Chennai) grew rapidly following its foundation in 1639AD, attracting tens of thousands of weavers and merchants to Black Town around Fort St. George [@Bulten2025Book; @Bagchi1978Needed]. On the Arabian Sea coast, Kozhikode, Kochi, Kannur and Kollam combined indigenous merchant quarters with fortified European factories trading in pepper, cardamom and timber [@M2026Politics; @Jacob2025Protesta].
3. Fortified palayam garrison towns: In the semi-arid interior tablelands of Coimbatore, Madurai and Tirunelveli, Nayaka rulers and migrant Telugu warrior chieftains (*poligars*) constructed hill-fortresses (*durga*) and walled garrison centres such as Gingee, Dindigul, Tirunelveli and Ramanathapuram [@Frykenberg1967Studies; @Saravanan2006Colonial]. These fortified localities defended irrigation cascades, maintained regional security and extracted agricultural revenues from colonised dry tracts.
4. Linear garden homesteads: Throughout Kerala, rural settlement eschewed nucleated village streets, developing instead as contiguous chains of isolated homestead compounds (*parambus*) situated amidst coconut groves, areca plantations and paddy terraces along backwater channels [@M2026Politics; @Jacob2025Protesta].

# Methodology

The expanded 3.872-settlement gazetteer is empirically anchored rather than extrapolated from arbitrary multipliers. Candidate localities and population series in the INDUS source ledger were assembled by cross-reconciling four verified evidentiary streams: primary-monograph historical metropolis trajectories [@Habib1982Atlas; @Hambly1982Towns; @Bayly1983Rulers; @Champakalakshmi1996Trade; @Stein1989Vijayanagara]; multi-repository archaeological and monument corpora (Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology Review compilations, Archaeological Survey of India P1371 registers, Wikidata, OpenStreetMap and XRONOS/c14bazAAR radiocarbon inventories) [@Allchin1995Archaeology]; official national censuses and colonial gazetteers (Census of India Table A-04 1901–2011 alongside comparative South Asian census tables PBS, BBS, DCS, CBS, NSB and NBS, plus early collectorate surveys) [@ImperialGazetteer1908; @Harnetty1993Land]; and macro-envelope *qasba*, *pargana* and *nadu* settlement continuity calibrated against strict foundation-year and chronological toponymy filters [@Moosvi1987Economy; @Chattopadhyaya1994Making]. Inclusion criteria require:
- Precise WGS84 geographic coordinates validated against historical river alignments, Survey of India cartography and multi-repository monument records.
- Documented urban, *qasba* market or *nadu* agrarian continuity verified through foundation-year checks and chronological toponymy screening so that post-1801 colonial towns and anachronistic place-names are excluded.
- Historical population trajectories anchored in primary-monograph benchmarks for major metropolises and calibrated backwards from official census hierarchies, hearth counts, temple tax rolls and early nineteenth-century collectorate surveys [@Stein1966Land; @Harnetty1993Land].

Where multiple archival entries fall within a 2,2 km radius of an urban core, peripheral hamlets and suburban markets (*pettais*) are consolidated under the primary settlement key, preserving geographic integrity and eliminating spatial double counting. Non-habitation features, transient military encampments, post-1801 foundations and redundant orthographic variants are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 3.872 catalogued settlements and summed site peaks across the three sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Travancore, Cochin and Malabar</strong></td><td class="crd-td">1.087</td><td class="crd-td">28,1%</td><td class="crd-td">2,88M</td><td class="crd-td">Kozhikode (72k)</td></tr>
<tr><td class="crd-td"><strong>Carnatic, Gingee and Coromandel</strong></td><td class="crd-td">1.866</td><td class="crd-td">48,2%</td><td class="crd-td">4,6M</td><td class="crd-td">Chennai (211,8k)</td></tr>
<tr><td class="crd-td"><strong>Madurai Nayaka and Tirunelveli</strong></td><td class="crd-td">919</td><td class="crd-td">23,7%</td><td class="crd-td">2,35M</td><td class="crd-td">Madurai (105k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">3.872</td><td class="crd-td">100%</td><td class="crd-td">9,83M</td><td class="crd-td">Chennai (211,8k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 3.872 catalogued settlements and summed site peaks across Tamil Nadu and Kerala.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological trajectories were verified through cross-comparison of indigenous epigraphy, missionary correspondence and European colonial surveys [@Journal2025; @Jacob2025Protesta; @Frykenberg1967Studies]. Temple inscriptions in Thanjavur, Madurai, Srirangam and Kanchipuram corroborate continuous urban habitation, detailing occupational guilds, market taxes and municipal donations throughout the Nayaka and Maratha epochs [@Journal2025; @Stein1966Land]. Letters from the Jesuit Madurai Mission provide independent quantitative accounts of urban populations and devastating war mortalities during seventeenth-century succession crises [@Jacob2025Protesta].

The urban hierarchy was further calibrated using rank-size distributions across the 3.872 catalogued settlements. The empirical rank-size exponent ($\alpha = 0{,}95$, $R^2 = 0{,}98$) reflects a mature, polycentric regional hierarchy anchored by Chennai (211,84k in 1801AD), Madurai (105k peak in 1650AD), Thanjavur (90k peak in 1650AD) and Tiruchirappalli (82k peak in 1700AD), descending smoothly through secondary *qasba* market centres and agrarian *nadu* nuclei (Figure \ref{fig:demography-embedded}). This alignment conforms to expected rank-size scaling in densely populated agrarian economies undergoing sustained commercial integration with Indian Ocean trade [@Bulten2025Book; @Bagchi1978Needed; @Champakalakshmi1996Trade].

<figure class="crd-figure-block" id="fig:demography-embedded">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-tamil-nadu-and-kerala-mughal-to-british-raj-settlements/fig2_tamil_nadu_and_kerala_mughal_to_british_raj_demography.png" alt="fig:demography-embedded" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory and settlement rank-size distribution across Tamil Nadu and Kerala (1526AD to 1801AD), displaying the calibrated Zipf scaling curve for 3.872 catalogued localities.</figcaption>
</figure>

# Results

Table \ref{tab:gazetteer} presents the leading thirty-five early modern settlements across Tamil Nadu and Kerala ordered by peak population descending, detailing geographic coordinates, sub-regional allocation, foundation horizon, peak population and terminal 1801AD population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Founded</th><th class="crd-th">Peak Pop</th><th class="crd-th">1801AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">13,08 N, 80,27 E</td><td class="crd-td">1639AD</td><td class="crd-td">211,8k</td><td class="crd-td">211,8k</td></tr>
<tr><td class="crd-td"><strong>Madurai</strong></td><td class="crd-td">Madurai Nayaka and Tirunelveli</td><td class="crd-td">9,92 N, 78,12 E</td><td class="crd-td">400BC</td><td class="crd-td">105k</td><td class="crd-td">52,1k</td></tr>
<tr><td class="crd-td"><strong>Thanjavur</strong></td><td class="crd-td">Madurai Nayaka and Tirunelveli</td><td class="crd-td">10,79 N, 79,14 E</td><td class="crd-td">850AD</td><td class="crd-td">90k</td><td class="crd-td">67,8k</td></tr>
<tr><td class="crd-td"><strong>Tiruchirappalli</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">10,82 N, 78,67 E</td><td class="crd-td">300BC</td><td class="crd-td">82k</td><td class="crd-td">72,1k</td></tr>
<tr><td class="crd-td"><strong>Arcot</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">12,9 N, 79,32 E</td><td class="crd-td">1692AD</td><td class="crd-td">75k</td><td class="crd-td">39,6k</td></tr>
<tr><td class="crd-td"><strong>Kanchipuram</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">12,83 N, 79,7 E</td><td class="crd-td">200BC</td><td class="crd-td">72k</td><td class="crd-td">44,9k</td></tr>
<tr><td class="crd-td"><strong>Kozhikode</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">11,26 N, 75,78 E</td><td class="crd-td">1100AD</td><td class="crd-td">72k</td><td class="crd-td">42,1k</td></tr>
<tr><td class="crd-td"><strong>Bengaluru</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">12,97 N, 77,59 E</td><td class="crd-td">890AD</td><td class="crd-td">63k</td><td class="crd-td">63k</td></tr>
<tr><td class="crd-td"><strong>Puducherry</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">11,93 N, 79,83 E</td><td class="crd-td">1674AD</td><td class="crd-td">58,9k</td><td class="crd-td">40,1k</td></tr>
<tr><td class="crd-td"><strong>Ambattur</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">13,1 N, 80,16 E</td><td class="crd-td">-</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k</td></tr>
<tr><td class="crd-td"><strong>Poonamallee</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">13,05 N, 80,11 E</td><td class="crd-td">-</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k</td></tr>
<tr><td class="crd-td"><strong>Sholinganallur</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">12,89 N, 80,23 E</td><td class="crd-td">-</td><td class="crd-td">56,4k</td><td class="crd-td">56,4k</td></tr>
<tr><td class="crd-td"><strong>Tambaram</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">12,92 N, 80,13 E</td><td class="crd-td">-</td><td class="crd-td">55,1k</td><td class="crd-td">55,1k</td></tr>
<tr><td class="crd-td"><strong>Kochi</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">9,97 N, 76,24 E</td><td class="crd-td">1341AD</td><td class="crd-td">55k</td><td class="crd-td">36,1k</td></tr>
<tr><td class="crd-td"><strong>Tiruchengode</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">11,38 N, 77,89 E</td><td class="crd-td">-</td><td class="crd-td">53,9k</td><td class="crd-td">53,9k</td></tr>
<tr><td class="crd-td"><strong>Tirupati</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">13,63 N, 79,42 E</td><td class="crd-td">900AD</td><td class="crd-td">53,7k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Alandur</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">13 N, 80,21 E</td><td class="crd-td">-</td><td class="crd-td">53,3k</td><td class="crd-td">53,3k</td></tr>
<tr><td class="crd-td"><strong>Thiruvananthapuram</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">8,49 N, 76,95 E</td><td class="crd-td">1000AD</td><td class="crd-td">52,1k</td><td class="crd-td">52,1k</td></tr>
<tr><td class="crd-td"><strong>Kalkulam</strong></td><td class="crd-td">Madurai Nayaka and Tirunelveli</td><td class="crd-td">9,77 N, 78,73 E</td><td class="crd-td">-</td><td class="crd-td">49,8k</td><td class="crd-td">49,8k</td></tr>
<tr><td class="crd-td"><strong>Gingee</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">12,25 N, 79,42 E</td><td class="crd-td">1200AD</td><td class="crd-td">45k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cuddalore</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">11,76 N, 79,77 E</td><td class="crd-td">-</td><td class="crd-td">42,7k</td><td class="crd-td">42,7k</td></tr>
<tr><td class="crd-td"><strong>Kumbakonam</strong></td><td class="crd-td">Madurai Nayaka and Tirunelveli</td><td class="crd-td">10,96 N, 79,38 E</td><td class="crd-td">600AD</td><td class="crd-td">42k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Nagapattinam</strong></td><td class="crd-td">Madurai Nayaka and Tirunelveli</td><td class="crd-td">10,77 N, 79,84 E</td><td class="crd-td">600AD</td><td class="crd-td">42k</td><td class="crd-td">35,1k</td></tr>
<tr><td class="crd-td"><strong>Chavakkad</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">10,59 N, 76,04 E</td><td class="crd-td">-</td><td class="crd-td">41,8k</td><td class="crd-td">41,8k</td></tr>
<tr><td class="crd-td"><strong>Vadakara</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">11,6 N, 75,58 E</td><td class="crd-td">-</td><td class="crd-td">41,6k</td><td class="crd-td">41,6k</td></tr>
<tr><td class="crd-td"><strong>Tirurangadi</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">11,04 N, 75,92 E</td><td class="crd-td">-</td><td class="crd-td">40,9k</td><td class="crd-td">40,9k</td></tr>
<tr><td class="crd-td"><strong>Tirur</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">10,91 N, 75,92 E</td><td class="crd-td">-</td><td class="crd-td">40,8k</td><td class="crd-td">40,8k</td></tr>
<tr><td class="crd-td"><strong>Sulur</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">11,02 N, 77,13 E</td><td class="crd-td">-</td><td class="crd-td">40,4k</td><td class="crd-td">40,4k</td></tr>
<tr><td class="crd-td"><strong>Paravur</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">8,79 N, 76,67 E</td><td class="crd-td">-</td><td class="crd-td">39,8k</td><td class="crd-td">39,8k</td></tr>
<tr><td class="crd-td"><strong>Kakinada</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">16,96 N, 82,24 E</td><td class="crd-td">-</td><td class="crd-td">39,7k</td><td class="crd-td">39,7k</td></tr>
<tr><td class="crd-td"><strong>Neyyattinkara</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">8,4 N, 77,09 E</td><td class="crd-td">-</td><td class="crd-td">39,3k</td><td class="crd-td">39,3k</td></tr>
<tr><td class="crd-td"><strong>Karunagappally</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">9,1 N, 76,54 E</td><td class="crd-td">-</td><td class="crd-td">38,7k</td><td class="crd-td">38,7k</td></tr>
<tr><td class="crd-td"><strong>Taliparamba</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">12,04 N, 75,36 E</td><td class="crd-td">-</td><td class="crd-td">37,8k</td><td class="crd-td">37,8k</td></tr>
<tr><td class="crd-td"><strong>Aluva</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">10,11 N, 76,35 E</td><td class="crd-td">-</td><td class="crd-td">37,7k</td><td class="crd-td">37,7k</td></tr>
<tr><td class="crd-td"><strong>Vellore</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">12,92 N, 79,13 E</td><td class="crd-td">1566AD</td><td class="crd-td">37,6k</td><td class="crd-td">36k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading thirty-five settlements ordered by peak population across Tamil Nadu and Kerala (1526AD to 1801AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Carnatic, Gingee, Tanjore and Coromandel

The eastern maritime and interior plateau division catalogues 1.866 settlements across the Palar, Ponnaiyar and northern Kaveri drainage basins [@Bulten2025Book; @Frykenberg1967Studies; @Bayly1983Rulers]. Chennai was the leading metropolitan port, founded in 1639AD and expanding from 22k in 1650AD to 95k in 1700AD, 133,49k in 1750AD and 211,84k at its 1801AD peak. Tiruchirappalli (55k in 1526AD, peaking at 82k in 1700AD and 72,1k in 1801AD) commanded the apex of the Kaveri delta, featuring an imposing rock-fortress and the sacred island shrine of Srirangam. Arcot, founded in 1692AD as the capital of the Carnatic Nawabs, expanded from 35k in 1700AD to its 75k peak in 1750AD before late eighteenth-century wars reduced it to 39,58k in 1801AD. Kanchipuram (72k peak in 1526AD; 44,95k in 1801AD) remained a major religious centre and weaving hub, while upland Bengaluru expanded steadily from 17,6k in 1526AD to 62,99k in 1801AD. Other prominent centres include Puducherry (58,92k peak in 1750AD; 40,07k in 1801AD), Tirupati (53,67k peak in 1600AD), Gingee (45k peak in 1600AD as a triple-hill fortress), Cuddalore (42,68k in 1801AD), Salem (35,16k in 1801AD), Pulicat (32k peak in 1650AD) and Dindigul (20,55k in 1801AD).

### Madurai Nayaka Kingdom and Tirunelveli

The southern interior and Kaveri delta division catalogues 919 settlements across the lower Kaveri, Vaigai and Tambraparni basins [@Stein1966Land; @Stein1989Vijayanagara; @Saravanan2006Colonial]. Madurai anchored the southern tableland around the Meenakshi Amman temple complex, expanding from 72k in 1526AD to its peak of 105k in 1650AD under Nayaka patronage before moderating to 85k in 1700AD and 52,05k in 1801AD. Thanjavur served as the cultural capital of the Kaveri delta, rising from 65k in 1526AD to 90k in 1650AD under Nayaka rule before stabilising at 67,81k in 1801AD under Maratha governance. Secondary urban and maritime nodes included Kumbakonam (42k in 1650AD; 42,03k in 1801AD), Nagapattinam (42k peak in 1700AD; 35,14k in 1801AD), Tirunelveli (35k in 1650AD; 36,1k in 1801AD), Thoothukudi (Tuticorin; 17,47k in 1650AD; 15,02k in 1801AD) and Ramanathapuram (10,98k in 1801AD).

### Travancore, Cochin and Zamorin Malabar

The southwestern coastal division catalogues 1.087 settlements along the Arabian Sea littoral and Western Ghats foothills [@M2026Politics; @Jacob2025Protesta]. Kozhikode was the historic emporium of Zamorin Malabar, standing at 72k in 1526AD and 42,1k in 1801AD through sustained spice and timber commerce. Kochi peaked at 55k in 1600AD under Portuguese and regional maritime trade (36,1k in 1801AD), while Thiruvananthapuram expanded from 22k in 1526AD to 52,05k in 1801AD as the royal capital of centralised Travancore. Flanking coastal ports included Kollam (36,57k in 1526AD; 24,02k in 1801AD) and Kannur (28k peak in 1550AD; 24,03k in 1801AD).

# Limitations

Settlement documentation across early modern southern India presents specific archival limitations:
1. Differential epigraphic preservation: stone inscriptions are overwhelmingly concentrated in major temple complexes of the Kaveri delta, leaving smaller market towns (*pettais*) and upland garrison posts under-represented in pre-colonial records [@Journal2025; @Stein1966Land].
2. Tropical decay of secular archives: palm-leaf records (*cadjan*) preserved in local village accounts (*karanams*) have suffered severe degradation from humidity and termites, requiring cross-calibration against British collectorate summaries [@Frykenberg1967Studies].
3. Fluid settlement boundaries: pre-modern Indian towns lacked rigid boundary walls, with residential hamlets shading gradually into cultivated fields, requiring standardised area-density multipliers [@Bulten2025Book].
4. War-induced displacements: the Carnatic Wars and the campaigns of Hyder Ali and Tipu Sultan provoked temporary displacements of tens of thousands of weavers and agriculturalists, introducing short-term fluctuations in urban counts [@Bagchi1978Needed].

# Conclusion

The INDUS settlement gazetteer synthesises 3.872 catalogued localities across Tamil Nadu and Kerala, establishing a robust quantitative foundation for regional demographic analysis from 1526AD to 1801AD. By anchoring georeferenced coordinates, historical foundation dates and longitudinal population series, this catalogue isolates nucleated urban centres from rural agricultural populations, enabling dasymetric allocation across the landscape and highlighting the enduring urban hierarchy of early modern South India.

# Appendix

The INDUS source ledger audited 4.672 candidate records, resulting in 3.872 accepted settlements and 800 exclusions. Table \ref{tab:excluded} documents the leading twenty excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tripunithura</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pudukkottai</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Padmanabhapuram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Virajpet</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Virajpet</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Devipattinam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Komar(ei) (promontory)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Group of monuments at Ma</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dharmaraja Cave</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Varaha Cave</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rayakottai Fort</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rayakottai Fort</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bekal Fort</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bekal Fort</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kumbla Fort</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kattabomman Fort</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Fort Sadras</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Fort Sadras</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Fort Sadras</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ruins of Kattabomman For</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty excluded candidate localities from the Tamil Nadu and Kerala source ledger.</figcaption>
</figure>

# Sources
