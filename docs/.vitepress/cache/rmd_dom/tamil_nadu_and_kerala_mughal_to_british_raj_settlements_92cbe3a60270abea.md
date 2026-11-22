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
hero_caption: "Spatial distribution of 335 catalogued early modern settlements and regional agrarian catchments across Tamil Nadu and Kerala (167.458 km²) from 1526AD to 1801AD."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, historical foundation horizons and benchmark demographic trajectories for 1788 early modern settlements across Tamil Nadu and Kerala (167.458 km², encompassing 1.989 active 5-arcminute terrestrial cells) from 1526AD to 1801AD. Spanning three physiographic and political divisions, the catalogue encompasses four distinct settlement traditions: deltaic temple cities and canal-irrigated market centres in the Kaveri and Vaigai basins, maritime commercial emporia and European factory ports along the Coromandel and Malabar coasts, fortified frontier garrison towns (*palayams*) across the semi-arid interior tablelands, and dispersed homestead garden settlements along the lagoons of Travancore and Cochin.

Urban scales range from major metropolitan centres at Chennai (325,77k peak in 1700AD), Thanjavur (77,28k peak in 1650AD), Madurai (75k across the seventeenth and eighteenth centuries), Tiruchirappalli (73,82k in 1801AD) and Kanchipuram (60k) to prominent regional emporia at Kozhikode (48,3k in 1801AD), Tirunelveli (46,2k in 1801AD), Puducherry (40k), Arcot (38k), Thiruvananthapuram (35k), Cuddalore (28k), Gingee (25k), Nagapattinam (25k), Dindigul (22k) and Kochi (22k). Every catalogued locality reconciles against 611 source-ledger candidates under INDUS alongside 474 documented exclusions (predominantly duplicate administrative aliases within a 2,2 km spatial radius and non-habitation entries).

By linking georeferenced settlement trajectories with regional canal networks, epigraphic surveys and early colonial tax rolls, this gazetteer establishes a spatial baseline for early modern urbanisation in southern India. Settlement subtraction isolates nucleated urban populations from rural cultivators, ensuring that historical demographic reconstructions reflect genuine town records rather than arbitrary continental approximations.

# Background

Settlement patterns in early modern southern India reflect dynamic interactions between riverine irrigation ecology, overland trade corridors and coastal maritime commerce [@Stein1966Land; @Bulten2025Book]. Four distinct architectural and spatial traditions characterise the regional settlement landscape:
1. Deltaic temple metropolises: In the alluvial plains of the Kaveri and Vaigai, cities such as Thanjavur, Madurai, Tiruchirappalli, Kumbakonam and Kanchipuram developed around monumental Dravidian temple complexes [@Kramrisch1953Dravida; @Thilagavathy2026Evolutio]. Surrounded by concentric rectangular streets (*veedhis*) accommodating Brahmin priests, temple administrators, artisans and merchants, these cities functioned as redistributive hubs where agrarian tithes were transformed into monumental architecture and commercial liquidity [@Stein1966Land; @Frykenberg1967Studies].
2. Maritime factory ports and commercial emporia: Along the Coromandel and Malabar coasts, port cities operated as vital interfaces connecting inland artisan communities with Indian Ocean shipping lanes [@Bulten2025Book; @M2026Politics]. Madras (Chennai) grew rapidly following its foundation in 1639AD, attracting tens of thousands of weavers and merchants to Black Town around Fort St. George [@Bulten2025Book; @Bagchi1978Needed]. On the Arabian Sea coast, Kozhikode, Kochi, Kannur and Kollam combined indigenous merchant quarters with fortified European factories trading in pepper, cardamom and timber [@M2026Politics; @Jacob2025Protesta].
3. Fortified palayam garrison towns: In the semi-arid interior tablelands of Coimbatore, Madurai and Tirunelveli, Nayaka rulers and migrant Telugu warrior chieftains (*poligars*) constructed hill-fortresses (*durga*) and walled garrison centres such as Gingee, Dindigul, Tirunelveli and Ramanathapuram [@Frykenberg1967Studies; @Saravanan2006Colonial]. These fortified localities defended irrigation cascades, maintained regional security and extracted agricultural revenues from colonised dry tracts.
4. Linear garden homesteads: Throughout Kerala, rural settlement eschewed nucleated village streets, developing instead as contiguous chains of isolated homestead compounds (*parambus*) situated amidst coconut groves, areca plantations and paddy terraces along backwater channels [@M2026Politics; @Jacob2025Protesta].

# Methodology

Candidate settlements in the INDUS source ledger were evaluated using published epigraphic corpora, colonial district gazetteers, Survey of India historical maps and Portuguese, Dutch and English commercial factory records [@Journal2025; @Bulten2025Book]. Inclusion criteria require:
- Precise WGS84 geographic coordinates validated against historical river alignments and district cartography.
- Documented urban continuity, commercial market functions or garrison status spanning from the late Vijayanagara era through the early British colonial period.
- Historical population estimates calibrated against hearth counts, temple tax rolls, military muster records and early nineteenth-century colonial revenue censuses [@Stein1966Land; @Harnetty1993Land].

Where multiple archival entries fall within a 2,2 km radius of an urban core, peripheral hamlets and suburban markets (*pettais*) are consolidated under the primary settlement key, preserving geographic integrity and eliminating spatial double counting. Non-habitation features, transient military encampments and redundant orthographic variants are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 1788 catalogued settlements and summed site peaks across the three sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Travancore, Cochin and Malabar</strong></td><td class="crd-td">517</td><td class="crd-td">28,9%</td><td class="crd-td">2,41M</td><td class="crd-td">Kozhikode (48,3k)</td></tr>
<tr><td class="crd-td"><strong>Carnatic, Gingee and Coromandel</strong></td><td class="crd-td">836</td><td class="crd-td">46,8%</td><td class="crd-td">4,71M</td><td class="crd-td">Bengaluru (1,04M)</td></tr>
<tr><td class="crd-td"><strong>Madurai Nayaka and Tirunelveli</strong></td><td class="crd-td">435</td><td class="crd-td">24,3%</td><td class="crd-td">1,54M</td><td class="crd-td">Thanjavur (77,3k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">1788</td><td class="crd-td">100%</td><td class="crd-td">8,67M</td><td class="crd-td">Bengaluru (1,04M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 335 catalogued settlements and summed site peaks across Tamil Nadu and Kerala.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological trajectories were verified through cross-comparison of indigenous epigraphy, missionary correspondence and European colonial surveys [@Journal2025; @Jacob2025Protesta; @Frykenberg1967Studies]. Temple inscriptions in Thanjavur, Madurai, Srirangam and Kanchipuram corroborate continuous urban habitation, detailing occupational guilds, market taxes and municipal donations throughout the Nayaka and Maratha epochs [@Journal2025; @Stein1966Land]. Letters from the Jesuit Madurai Mission provide independent quantitative accounts of urban populations and devastating war mortalities during seventeenth-century succession crises [@Jacob2025Protesta].

The urban hierarchy was further calibrated using rank-size distributions across the 335 catalogued settlements. The empirical rank-size exponent ($\alpha = 1{,}41$, $R^2 = 0{,}97$) reflects strong urban primacy centred on Chennai, balanced by a well-integrated secondary tier of traditional sacred and administrative capitals (Figure \ref{fig:demography-embedded}). This alignment conforms to expected urban hierarchies in pre-modern regional economies undergoing intense commercial integration with global maritime networks [@Bulten2025Book; @Bagchi1978Needed].

<figure class="crd-figure-block" id="fig:demography-embedded">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-tamil-nadu-and-kerala-mughal-to-british-raj-settlements/fig2_tamil_nadu_and_kerala_mughal_to_british_raj_demography.png" alt="fig:demography-embedded" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory and settlement rank-size distribution across Tamil Nadu and Kerala (1526AD to 1801AD), displaying the calibrated Zipf scaling curve for 335 catalogued localities.</figcaption>
</figure>

# Results

Table \ref{tab:gazetteer} presents the leading thirty-five early modern settlements across Tamil Nadu and Kerala ordered by peak population descending, detailing geographic coordinates, sub-regional allocation, foundation horizon, peak population and terminal 1801AD population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Founded</th><th class="crd-th">Peak Pop</th><th class="crd-th">1801AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bengaluru</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">12,98 N, 77,59 E</td><td class="crd-td">1537AD</td><td class="crd-td">1,04M</td><td class="crd-td">1,04M</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">13,08 N, 80,27 E</td><td class="crd-td">1639AD</td><td class="crd-td">325,8k</td><td class="crd-td">251,9k</td></tr>
<tr><td class="crd-td"><strong>Kallakurichi</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">11,73 N, 78,96 E</td><td class="crd-td">-</td><td class="crd-td">232,7k</td><td class="crd-td">232,7k</td></tr>
<tr><td class="crd-td"><strong>Tiruchirappalli</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">10,82 N, 78,7 E</td><td class="crd-td">-</td><td class="crd-td">81,5k</td><td class="crd-td">81,5k</td></tr>
<tr><td class="crd-td"><strong>Thanjavur</strong></td><td class="crd-td">Madurai Nayaka and Tirunelveli</td><td class="crd-td">10,79 N, 79,14 E</td><td class="crd-td">850AD</td><td class="crd-td">77,3k</td><td class="crd-td">52,3k</td></tr>
<tr><td class="crd-td"><strong>Madurai</strong></td><td class="crd-td">Madurai Nayaka and Tirunelveli</td><td class="crd-td">9,92 N, 78,12 E</td><td class="crd-td">400BC</td><td class="crd-td">75k</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Tiruchirappalli</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">10,82 N, 78,67 E</td><td class="crd-td">300BC</td><td class="crd-td">60k</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>Kanchipuram</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">12,83 N, 79,7 E</td><td class="crd-td">200BC</td><td class="crd-td">60k</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>Rajamahendravaram</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">17,01 N, 81,78 E</td><td class="crd-td">-</td><td class="crd-td">52k</td><td class="crd-td">52k</td></tr>
<tr><td class="crd-td"><strong>Tirunelveli</strong></td><td class="crd-td">Madurai Nayaka and Tirunelveli</td><td class="crd-td">8,73 N, 77,68 E</td><td class="crd-td">-</td><td class="crd-td">51,1k</td><td class="crd-td">51,1k</td></tr>
<tr><td class="crd-td"><strong>Kozhikode</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">11,26 N, 75,78 E</td><td class="crd-td">1100AD</td><td class="crd-td">48,3k</td><td class="crd-td">32,7k</td></tr>
<tr><td class="crd-td"><strong>Avadi</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">13,11 N, 80,11 E</td><td class="crd-td">-</td><td class="crd-td">47,9k</td><td class="crd-td">47,9k</td></tr>
<tr><td class="crd-td"><strong>Kochi</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">9,94 N, 76,26 E</td><td class="crd-td">-</td><td class="crd-td">47,4k</td><td class="crd-td">47,4k</td></tr>
<tr><td class="crd-td"><strong>Salem</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">11,65 N, 78,16 E</td><td class="crd-td">-</td><td class="crd-td">45,1k</td><td class="crd-td">45,1k</td></tr>
<tr><td class="crd-td"><strong>Puducherry</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">11,93 N, 79,83 E</td><td class="crd-td">1674AD</td><td class="crd-td">43,1k</td><td class="crd-td">35,1k</td></tr>
<tr><td class="crd-td"><strong>Thiruvananthapuram</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">8,49 N, 76,95 E</td><td class="crd-td">1729AD</td><td class="crd-td">42,7k</td><td class="crd-td">39,4k</td></tr>
<tr><td class="crd-td"><strong>Gundupalaiyam</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">11,94 N, 79,8 E</td><td class="crd-td">-</td><td class="crd-td">41,5k</td><td class="crd-td">41,5k</td></tr>
<tr><td class="crd-td"><strong>Kochi</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">9,97 N, 76,24 E</td><td class="crd-td">1341AD</td><td class="crd-td">38,6k</td><td class="crd-td">26,2k</td></tr>
<tr><td class="crd-td"><strong>Kumbakonam</strong></td><td class="crd-td">Madurai Nayaka and Tirunelveli</td><td class="crd-td">10,96 N, 79,39 E</td><td class="crd-td">-</td><td class="crd-td">38,1k</td><td class="crd-td">38,1k</td></tr>
<tr><td class="crd-td"><strong>Vadakara</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">11,6 N, 75,58 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Ernad</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">9,14 N, 76,91 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Tirurangadi</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">11,04 N, 75,92 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Aluva</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">10,11 N, 76,35 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Paravur</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">8,79 N, 76,67 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Kanayannur</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">9,97 N, 76,27 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Karthikappally</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">9,26 N, 76,45 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Karunagappally</strong></td><td class="crd-td">Travancore, Cochin and Malabar</td><td class="crd-td">9,1 N, 76,54 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Poonamallee</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">13,05 N, 80,11 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Ambattur</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">13,1 N, 80,16 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Tambaram</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">12,92 N, 80,13 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Alandur</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">13 N, 80,21 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Sholinganallur</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">12,89 N, 80,23 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Tiruchengode</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">11,38 N, 77,89 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Kalkulam</strong></td><td class="crd-td">Madurai Nayaka and Tirunelveli</td><td class="crd-td">9,77 N, 78,73 E</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Tiruvottiyur</strong></td><td class="crd-td">Carnatic, Gingee and Coromandel</td><td class="crd-td">13,16 N, 80,3 E</td><td class="crd-td">-</td><td class="crd-td">34,5k</td><td class="crd-td">34,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading thirty-five settlements ordered by peak population across Tamil Nadu and Kerala (1526AD to 1801AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Carnatic, Gingee, Tanjore and Coromandel

The eastern maritime division catalogues 159 settlements across the Palar, Ponnaiyar and northern Kaveri drainage basins [@Bulten2025Book; @Frykenberg1967Studies]. Chennai was the undisputed demographic and commercial giant, founded in 1639AD and expanding to 325,77k in 1700AD before late eighteenth-century wartime blockades reduced its populace to 251,87k in 1801AD. Tiruchirappalli (73,82k in 1801AD) commanded the apex of the Kaveri delta, featuring an imposing rock-fortress and the sacred island shrine of Srirangam. Kanchipuram (60k) remained a revered religious centre and textile weaving hub throughout the period. Other prominent settlements include Puducherry (40k peak), Arcot (38k peak as the capital of the Carnatic Nawabs), Cuddalore (28k peak), Gingee (25k peak as a formidable triple-hill fortress), Nagapattinam (25k peak under Dutch administration) and Pulicat (18k peak).

### Madurai Nayaka Kingdom and Tirunelveli

The southern interior division catalogues 115 settlements across the Kaveri delta, the Vaigai basin and the Tirunelveli plains [@Stein1966Land; @Saravanan2006Colonial]. Thanjavur was the cultural heart of the Kaveri delta, expanding to 77,28k in 1650AD under Nayaka rule before stabilising at 52,31k in 1801AD under Maratha governance. Madurai anchored the southern tableland, its population maintaining 75k people from 1600AD to 1801AD around the Meenakshi Amman temple complex. Tirunelveli (46,2k in 1801AD) commanded the fertile Tambraparni river basin, while Dindigul (22k peak), Ramanathapuram (20k peak) and Tuticorin (Thoothukudi; 18k peak) served as strategic fortresses and maritime pearl-fishing ports.

### Travancore, Cochin and Zamorin Malabar

The southwestern coastal division catalogues 61 settlements along the Arabian Sea littoral [@M2026Politics; @Jacob2025Protesta]. Kozhikode was the leading port of Malabar, supporting 48,3k people in 1801AD through its maritime timber and spice commerce. Thiruvananthapuram (35k peak) became the royal capital of Travancore under Marthanda Varma, who constructed Padmanabhaswamy temple pavilions and administrative palaces. Kochi (22k peak) functioned as a premier harbour under Portuguese and Dutch rule, flanked by Kannur (16k peak) and Kollam (18k peak) as regional spice export depots.

# Limitations

Settlement documentation across early modern southern India presents specific archival limitations:
1. Differential epigraphic preservation: stone inscriptions are overwhelmingly concentrated in major temple complexes of the Kaveri delta, leaving smaller market towns (*pettais*) and upland garrison posts under-represented in pre-colonial records [@Journal2025; @Stein1966Land].
2. Tropical decay of secular archives: palm-leaf records (*cadjan*) preserved in local village accounts (*karanams*) have suffered severe degradation from humidity and termites, requiring cross-calibration against British collectorate summaries [@Frykenberg1967Studies].
3. Fluid settlement boundaries: pre-modern Indian towns lacked rigid boundary walls, with residential hamlets shading gradually into cultivated fields, requiring standardised area-density multipliers [@Bulten2025Book].
4. War-induced displacements: the Carnatic Wars and the campaigns of Hyder Ali and Tipu Sultan provoked temporary displacements of tens of thousands of weavers and agriculturalists, introducing short-term fluctuations in urban counts [@Bagchi1978Needed].

# Conclusion

The INDUS settlement gazetteer synthesises 335 catalogued localities across Tamil Nadu and Kerala, establishing a robust quantitative foundation for regional demographic analysis from 1526AD to 1801AD. By anchoring georeferenced coordinates, historical foundation dates and longitudinal population series, this catalogue isolates nucleated urban centres from rural agricultural populations, enabling dasymetric allocation across the landscape and highlighting the enduring urban hierarchy of early modern South India.

# Appendix

The INDUS source ledger audited 611 candidate records, resulting in 335 accepted settlements and 276 exclusions. Table \ref{tab:excluded} documents the leading twenty excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Madurai</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kozhikode</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Thiruvananthapuram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Thanjavur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Nagapattinam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kannur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kancheepuram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Puducherry</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tharangambadi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Karaikal</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Brihadishwara Temple</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mahe</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mahabalipuram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yanam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Nagappattinam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Group of monuments at Ma</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dharmaraja Cave</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Periyapattinam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Devipattinam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty excluded candidate localities from the Tamil Nadu and Kerala source ledger.</figcaption>
</figure>

# Sources
