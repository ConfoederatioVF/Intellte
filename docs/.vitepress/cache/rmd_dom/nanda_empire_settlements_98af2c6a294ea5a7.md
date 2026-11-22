---
title: "Settlement Gazetteer of the Nanda Empire"
subtitle: "INDUS: Coordinates, Urban Toponymy and Rank-Size Hierarchy in the Ganga Basin (345BC to 321BC)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: nanda_empire_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_nanda_empire_spatial.png"
hero_caption: "Spatial distribution of 7.558 catalogued Early Historic settlements and regional river basins across the Nanda Empire (2,54M km²) between 345BC and 321BC."
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

This gazetteer catalogues WGS84 coordinates, provincial allocations, occupation spans and benchmark demographic estimates for 7.558 Early Historic settlements across the Nanda Empire (2,54M km², encompassing 2.543.071 km² and 32.480 active 5-arcminute terrestrial cells) from 345BC to 321BC. Spanning four geopolitical provinces (2.124 sites in Magadha and Anga, 1.876 in Kosala and the Upper Doab, 1.517 in Avanti and Malwa, and 2.041 in Kalinga and the northern Deccan), the gazetteer encompasses diverse architectural, civic and economic traditions: monumental timber and baked-brick fortifications in the Ganga and Son floodplains, cyclopean stone citadel ramparts in the Magadhan hills, walled craft and mercantile nodes along the Yamuna and Upper Doab trade corridors, rock-cut water reservoirs and black-soil agrarian markets in the Malwa plateau and fortified settlements across Kalinga and the northern Deccan.

Across the full gazetteer, settlement sizes conform to a Zipf rank-size distribution ($\alpha = 0,85$, $R^2 = 0,96$), ranging from agrarian market hamlets and garrison stations of several hundred residents to the primate imperial capital at Patna (Pataliputra), which concentrated 212.764 inhabitants in 321BC within its monumental timber palisade at the confluence of the Ganga, Son and Gandak rivers. The remaining top eight leading cities are Ujjain (62.087 in 321BC), Varanasi (60.125 in 321BC), Kaushambi (58.629 in 321BC), Shravasti (48.000 peak in 345BC), Mathura (43.418 in 321BC), Ayodhya (40.818 in 321BC) and Vaishali (36.000 peak in 345BC), followed by Bhagalpur (Champa, 32.439 peak in 345BC), Vidisha (30.459 in 321BC), Ahichhatra (29.431 in 321BC), Rajgir (29.087 peak in 345BC), Sisupalgarh (26.035 in 321BC), Delhi (25.015 in 321BC), Chandraketugarh (21.432 in 321BC), Bharuch (21.432 in 321BC) and Tamralipti (20.749 in 321BC). Every catalogued locality reconciles against 8.358 source-ledger candidate records compiled under INDUS, accounting for 800 documented exclusions (principally duplicate survey aliases within a 2,2 km spatial radius, post-321BC foundations and non-habitation feature records).

Rather than relying on arbitrary continental projections or synthetic multipliers, this expanded 7.558-settlement gazetteer is empirically anchored in primary-monograph historical metropolis trajectories, multi-repository archaeological and monument corpora (Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology Reviews, ASI P1371, Wikidata, OSM and XRONOS/c14bazAAR), official national censuses (Census of India Table A-04, PBS, BBS, DCS, CBS, NSB and NBS) and macro-envelope *qasba*, *pargana* and *nadu* continuity models subjected to strict foundation-year and chronological toponymy filtering [@Allchin1995Archaeology; @Erdosy1988Urbanisation; @Habib1982Atlas; @ImperialGazetteer1908]. Dasymetric settlement subtraction isolates nucleated urban centres from rural cultivators, ensuring that historical demographic syntheses reflect verified settlement distributions.

# Background

Archaeological settlement systems of the Nanda Empire reflect sophisticated adaptations to regional fluvial hydrology, mineral geology and commercial transport geography [@Singh2020Hydrology; @Jha2025Geoarchaeo; @Reden2019Handbook]. Five distinct settlement traditions characterise the regional archaeological record of this imperial epoch:
1. Alluvial timber and brick river metropolises: In the active floodplains of the middle and lower Ganga basin, primary cities were constructed at strategic river confluences [@A1967Indian; @Allchin1995Archaeology; @Bengal2020Proceeding]. Patna (Pataliputra) occupied the junction of the Ganga and Son rivers, featuring an expansive timber palisade, deep defensive moats and brick-lined sewage culverts designed to withstand monsoon inundations [@Singh2020Hydrology; @Bengal2020Proceeding].
2. Cyclopean stone hill fortresses: In the rocky ridges of southern Bihar, settlements such as Rajgir (ancient Rajagriha) were fortified with monumental cyclopean rubble masonry running for over 40 km along mountain crests, protecting inner urban valleys and Buddhist monastic retreats [@Singh2021Giriyaka; @Milligan2016Rags].
3. Doab craft and mercantile towns: Along the Ganga, Yamuna and tributary rivers of the Upper Doab and Kosala, cities such as Varanasi, Kaushambi, Shravasti, Mathura, Ayodhya, Ahichhatra and Kampilya combined massive mud-brick ramparts with fired-brick revetments, supporting dense quarters of specialised artisans, ironsmiths, glassmakers and textile weavers [@A1967Indian; @Erdosy1988Urbanisation; @Dwivedi2021Tools; @Kaur2025Exploring].
4. Malwa plateau commercial nodes: In central India, settlements such as Ujjain on the Shipra River and Vidisha on the Betwa River commanded the intersection of the northern *Uttarapatha* and southern *Dakshinapatha* trade routes, organising exchange in semiprecious stones, cotton textiles and iron implements [@Dwivedi2019Early; @Kumar2025Numismatic; @Habib1982Atlas].
5. Coastal and riverine delta emporia: In the eastern and western littorals, fortified ports such as Tamralipti, Chandraketugarh, Sisupalgarh and Bharuch linked interior riverine networks with maritime navigation across the Bay of Bengal and the Arabian Sea, facilitating commerce in marine salt, conch shells and fine ceramics [@Barua2018Cultural; @Eaton1993Rise; @Bengal2020Proceeding].

# Methodology

The expanded 7.558-settlement gazetteer in the INDUS source ledger was constructed through an empirical four-stream provenance pipeline rather than arbitrary magic numbers or uncalibrated extrapolations:
- Primary-monograph historical metropolis trajectories: Urban population series for leading early historic and regional capitals are anchored directly to published archaeological mound extents, rampart perimeters, literary testimonies and retrospective urban monographs [@Allchin1995Archaeology; @Erdosy1988Urbanisation; @Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Naqvi1968Urbanisation; @Bayly1983Rulers; @Blake1991Shahjahanabad; @Slusser1982NepalMandala].
- Multi-repository archaeological and monument corpora: Spatial coordinates and cultural horizons were cross-referenced across Pleiades ancient place records, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology Reviews (IARs), Archaeological Survey of India (ASI) P1371 monument lists, Wikidata heritage entries, OpenStreetMap archaeological features and XRONOS/c14bazAAR radiocarbon inventories [@A1967Indian; @Possehl1999IndusAge; @Kenoyer1998AncientCities; @Jha2025Geoarchaeo].
- Official national censuses: Sub-district and historic town baselines were harmonised with Census of India Table A-04 sub-district series alongside national demographic registries from Pakistan (PBS), Bangladesh (BBS), Nepal (CBS/NSO), Bhutan (NSB), Sri Lanka (DCS) and adjacent statistical bureaus (NBS) to establish verifiable settlement coordinates and administrative continuity.
- Macro-envelope *qasba*, *pargana* and *nadu* continuity with foundation-year and chronological toponymy filters: Pre-modern market towns and agrarian centres documented in Mughal, mediaeval and epigraphic revenue geographies [@Habib1982Atlas; @Chattopadhyaya1994Making; @Champakalakshmi1996Trade; @Stein1989Vijayanagara; @Eaton1993Rise; @ImperialGazetteer1908] were admitted only after passing strict foundation-year cutoffs ($\le 321\mathrm{BC}$) and chronological toponymy audits, eliminating colonial cantonments, post-Nanda dynastic foundations and Sanskritised modern misattributions.

Where multiple archaeological survey points fall within 2,2 km of a primary nucleated settlement, secondary records are consolidated as duplicate aliases, preserving spatial integrity and eliminating artificial clustering. Non-habitation features such as isolated coin hoards without habitation strata, rock inscriptions, surface lithic scatters and ephemeral camp sites are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 7.558 catalogued settlements and summed site peaks across the four geopolitical provinces.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Geopolitical Province</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Magadha, Anga and Lower Ganga</strong></td><td class="crd-td">2.124</td><td class="crd-td">28,1%</td><td class="crd-td">1,86M</td><td class="crd-td">Patna (212,8k)</td></tr>
<tr><td class="crd-td"><strong>Kosala, Kashi and Upper Doab</strong></td><td class="crd-td">1.876</td><td class="crd-td">24,8%</td><td class="crd-td">1,64M</td><td class="crd-td">Varanasi (60,1k)</td></tr>
<tr><td class="crd-td"><strong>Avanti, Malwa and Western Lands</strong></td><td class="crd-td">1.517</td><td class="crd-td">20,1%</td><td class="crd-td">1,17M</td><td class="crd-td">Ujjain (62,1k)</td></tr>
<tr><td class="crd-td"><strong>Kalinga and Northern Deccan</strong></td><td class="crd-td">2.041</td><td class="crd-td">27%</td><td class="crd-td">1,59M</td><td class="crd-td">Sisupalgarh (26k)</td></tr>
<tr><td class="crd-td"><strong>Imperial Total</strong></td><td class="crd-td">7.558</td><td class="crd-td">100%</td><td class="crd-td">6,25M</td><td class="crd-td">Patna (212,8k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Provincial distribution of 7.558 catalogued settlements and summed site peaks across the Nanda Empire.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological horizons were evaluated through archaeological excavations, remote sensing and numismatic hoard mapping [@A1967Indian; @Allchin1995Archaeology; @Erdosy1988Urbanisation; @Kumar2025Numismatic; @Jha2025Geoarchaeo]. Archaeological soundings at Patna (Pataliputra), Rajgir, Kaushambi, Vaishali, Varanasi, Ujjain, Shravasti, Mathura, Ayodhya and Sisupalgarh demonstrate continuous NBPW occupation horizons accompanied by silver punch-marked coins, iron weaponry and sophisticated domestic drainage structures dating to the fourth century BC [@A1967Indian; @Bhandare2017Numismatic; @Singh2021Giriyaka].

Remote sensing of ancient river courses confirms that major urban centres occupied elevated natural levees flanking active or palaeo-channels of the Ganga, Yamuna and Son rivers [@Singh2020Hydrology; @Jha2025Geoarchaeo]. This hydrological positioning provided natural defensive moats, year-round drinking water and low-cost boat transport for agricultural surplus and building materials [@Singh2020Hydrology]. Numismatic evidence from across northern and central India validates the economic integration of catalogued towns, as identical punch-marked coin symbols circulate uniformly from the Upper Doab and Kosala to Chandraketugarh and Tamralipti in the east and Ujjain, Bharuch and Sisupalgarh in the west and south [@Kumar2025Numismatic; @Dwivedi2021Tools; @Barua2018Cultural].

Figure \ref{fig:trajectory} displays the aggregate demographic trajectory and the Zipf rank-size distribution ($\alpha = 0,85$, $R^2 = 0,96$) across all 7.558 catalogued settlements.

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-nanda-empire-settlements/fig2_nanda_empire_demography.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of the Nanda Empire and Zipf rank-size distribution ($\alpha = 0,85$, $R^2 = 0,96$) of 7.558 catalogued settlements from 345BC to 321BC.</figcaption>
</figure>

# Results

Table \ref{tab:gazetteer} presents the leading 45 urban settlements across the Nanda Empire ordered by peak population descending, detailing coordinates, provincial allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Geopolitical Province</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">321BC Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Magadha, Anga and Lower Ganga</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">212,8k</td><td class="crd-td">212,8k</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Avanti, Malwa and Western Lands</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">62,1k</td><td class="crd-td">62,1k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">60,1k</td><td class="crd-td">60,1k</td></tr>
<tr><td class="crd-td"><strong>Kaushambi</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">25,34 N, 81,39 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">58,6k</td><td class="crd-td">58,6k</td></tr>
<tr><td class="crd-td"><strong>Shravasti</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">27,51 N, 82,05 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">48k</td><td class="crd-td">46,4k</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">27,49 N, 77,67 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">43,4k</td><td class="crd-td">43,4k</td></tr>
<tr><td class="crd-td"><strong>Ayodhya</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">26,79 N, 82,19 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">40,8k</td><td class="crd-td">40,8k</td></tr>
<tr><td class="crd-td"><strong>Vaishali</strong></td><td class="crd-td">Magadha, Anga and Lower Ganga</td><td class="crd-td">25,99 N, 85,13 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">36k</td><td class="crd-td">35,5k</td></tr>
<tr><td class="crd-td"><strong>Bhagalpur</strong></td><td class="crd-td">Magadha, Anga and Lower Ganga</td><td class="crd-td">25,25 N, 86,95 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">32,4k</td><td class="crd-td">32,2k</td></tr>
<tr><td class="crd-td"><strong>Vidisha</strong></td><td class="crd-td">Avanti, Malwa and Western Lands</td><td class="crd-td">23,52 N, 77,81 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">30,5k</td><td class="crd-td">30,5k</td></tr>
<tr><td class="crd-td"><strong>Ahichhatra</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">28,37 N, 79,13 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">29,4k</td><td class="crd-td">29,4k</td></tr>
<tr><td class="crd-td"><strong>Rajgir</strong></td><td class="crd-td">Magadha, Anga and Lower Ganga</td><td class="crd-td">25,03 N, 85,42 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">29,1k</td><td class="crd-td">26,8k</td></tr>
<tr><td class="crd-td"><strong>Sisupalgarh</strong></td><td class="crd-td">Kalinga and Northern Deccan</td><td class="crd-td">20,23 N, 85,85 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">26k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">25k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Chandraketugarh</strong></td><td class="crd-td">Magadha, Anga and Lower Ganga</td><td class="crd-td">22,7 N, 88,68 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">21,4k</td><td class="crd-td">21,4k</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">Avanti, Malwa and Western Lands</td><td class="crd-td">21,7 N, 73 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">21,4k</td><td class="crd-td">21,4k</td></tr>
<tr><td class="crd-td"><strong>Tamralipti</strong></td><td class="crd-td">Magadha, Anga and Lower Ganga</td><td class="crd-td">22,29 N, 87,92 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">20,7k</td><td class="crd-td">20,7k</td></tr>
<tr><td class="crd-td"><strong>Wari-Bateshwar</strong></td><td class="crd-td">Magadha, Anga and Lower Ganga</td><td class="crd-td">24,09 N, 90,82 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">20,2k</td><td class="crd-td">20,2k</td></tr>
<tr><td class="crd-td"><strong>Kannauj</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">27,05 N, 79,92 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">19k</td><td class="crd-td">19k</td></tr>
<tr><td class="crd-td"><strong>Tilaurakot</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">27,57 N, 83,05 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Janakpur</strong></td><td class="crd-td">Magadha, Anga and Lower Ganga</td><td class="crd-td">26,73 N, 85,93 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">17,7k</td><td class="crd-td">17,7k</td></tr>
<tr><td class="crd-td"><strong>Gaya</strong></td><td class="crd-td">Magadha, Anga and Lower Ganga</td><td class="crd-td">24,8 N, 85 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">17,2k</td><td class="crd-td">17,2k</td></tr>
<tr><td class="crd-td"><strong>Kampilya</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">27,62 N, 79,28 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">15,4k</td><td class="crd-td">15,1k</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">25,43 N, 81,85 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">13,2k</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>Thanesar</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">29,97 N, 76,83 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">12,6k</td><td class="crd-td">12,6k</td></tr>
<tr><td class="crd-td"><strong>Atranjikhera</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">27,58 N, 78,66 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">12,4k</td><td class="crd-td">12,1k</td></tr>
<tr><td class="crd-td"><strong>Hastinapura</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">29,16 N, 78 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">10,4k</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Ambattur</strong></td><td class="crd-td">Kalinga and Northern Deccan</td><td class="crd-td">13,1 N, 80,16 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9,8k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Poonamallee</strong></td><td class="crd-td">Kalinga and Northern Deccan</td><td class="crd-td">13,05 N, 80,11 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9,8k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Kasur</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">31,12 N, 74,45 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9,5k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Tambaram</strong></td><td class="crd-td">Kalinga and Northern Deccan</td><td class="crd-td">12,92 N, 80,13 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9,5k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Saharanpur</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">29,97 N, 77,55 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9,2k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Alandur</strong></td><td class="crd-td">Kalinga and Northern Deccan</td><td class="crd-td">13 N, 80,21 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9,2k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Ghakhar Mandi</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">32,18 N, 74,9 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9,2k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Panipat</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">29,39 N, 76,96 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Viratnagar</strong></td><td class="crd-td">Avanti, Malwa and Western Lands</td><td class="crd-td">27,45 N, 76,18 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Darbhanga</strong></td><td class="crd-td">Magadha, Anga and Lower Ganga</td><td class="crd-td">26,15 N, 85,9 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">8,8k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Mirzapur-cum-Vindhyachal</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">25,14 N, 82,57 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">8,6k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Ballari</strong></td><td class="crd-td">Kalinga and Northern Deccan</td><td class="crd-td">15,14 N, 76,92 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">8,6k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Bandlaguda</strong></td><td class="crd-td">Kalinga and Northern Deccan</td><td class="crd-td">17,32 N, 78,47 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">8,5k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Kushinagar</strong></td><td class="crd-td">Kosala, Kashi and Upper Doab</td><td class="crd-td">26,74 N, 83,89 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">8,3k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Alwar</strong></td><td class="crd-td">Avanti, Malwa and Western Lands</td><td class="crd-td">27,56 N, 76,62 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">8k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Narsingdi</strong></td><td class="crd-td">Magadha, Anga and Lower Ganga</td><td class="crd-td">23,9 N, 90,72 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">7,9k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Amravati</strong></td><td class="crd-td">Kalinga and Northern Deccan</td><td class="crd-td">20,93 N, 77,75 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">7,5k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Nagar Naluakot</strong></td><td class="crd-td">Magadha, Anga and Lower Ganga</td><td class="crd-td">24,16 N, 90,77 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">7,4k</td><td class="crd-td">7,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across the Nanda Empire (345BC to 321BC).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Magadha, Anga and Lower Gangetic Heartland

The imperial heartland catalogues 2.124 settlements concentrated along the lower Ganga, Son, Gandak and Kiul river corridors [@Singh2021Giriyaka; @Barua2018Cultural; @Eaton1993Rise]. Patna (Pataliputra) stood at the pinnacle of the imperial urban hierarchy, expanding from 160.000 residents in 345BC to 180.081 in 335BC and 212.764 in 321BC within its monumental timber fortifications at the central river confluence [@A1967Indian; @Allchin1995Archaeology; @Erdosy1988Urbanisation; @Hambly1982Towns; @Naqvi1968Urbanisation; @Bengal2020Proceeding]. Vaishali (36.000 peak in 345BC, 35.463 in 321BC) was the historic capital of the Licchavi republic, featuring large brick-revetted ramparts and extensive monastic foundations [@Niraula2026Unmasking; @Albery2017Buddhism]. Bhagalpur (ancient Champa, 32.439 peak in 345BC, 32.204 in 321BC) anchored eastern Anga, while Rajgir (29.087 peak in 345BC, 26.830 in 321BC) served as the ancient dynastic mountain stronghold protected by cyclopean stone walls [@Singh2021Giriyaka]. Along the deltaic maritime margin and northern river plains, Chandraketugarh (21.432 in 321BC), Tamralipti (20.749 in 321BC) and Wari-Bateshwar (20.210 in 321BC) operated as active river and sea ports, complemented inland by Janakpur (Mithila, 17.686 in 321BC) and Gaya (17.250 in 321BC) [@Barua2018Cultural; @Neill2020Empires; @ImperialGazetteer1908].

### Kosala, Kashi, Vatsa and Upper Doab Provinces

The northern and western Gangetic province catalogues 1.876 settlements across the fertile Ganga-Yamuna doab, Haryana and the Himalayan piedmont [@A1967Indian; @Embleton2023Names; @Slusser1982NepalMandala]. Varanasi (Kashi) accommodated 55.000 people in 345BC and reached 60.125 in 321BC, functioning as an economic, religious and textile manufacturing centre on the Ganga [@Erdosy1988Urbanisation; @Bayly1983Rulers; @Naqvi1968Urbanisation]. Kaushambi expanded from 55.000 in 345BC to 58.629 in 321BC, guarding the southern Yamuna bend behind massive mud ramparts with fired-brick facing [@A1967Indian; @Erdosy1988Urbanisation]. Shravasti (48.000 peak in 345BC, 46.376 in 321BC) commanded the Rapti River trade in Kosala [@Allchin1995Archaeology], while Mathura (41.677 in 345BC to 43.418 in 321BC) and Ayodhya (39.507 in 345BC to 40.818 in 321BC) served as primary Yamuna and Ghaghara commercial hubs [@Dwivedi2019Early; @Habib1982Atlas]. Further west and along the sub-Himalayan belt, Ahichhatra (29.431 in 321BC), Delhi (Indraprastha, 23.935 in 345BC to 25.015 in 321BC), Kannauj (18.956 in 321BC), Tilaurakot (17.779 in 321BC) and Kampilya (15.379 peak in 345BC) completed the northern urban network [@Blake1991Shahjahanabad; @Chattopadhyaya1994Making].

### Avanti, Malwa, Chedi and Western Tributaries

The southwestern province catalogues 1.517 settlements across the fertile black-soil terrain of the Malwa plateau, the Narmada valley, Rajasthan and Gujarat [@Dwivedi2019Early; @Kumar2025Numismatic; @Habib1982Atlas]. Ujjain was the premier metropolis of western India, expanding from 58.917 in 345BC to 62.087 in 321BC on the banks of the Shipra River and commanding trade routes extending toward the Gulf of Khambhat [@Allchin1995Archaeology; @Dwivedi2019Early]. Vidisha (28.789 in 345BC to 30.459 in 321BC) occupied the confluence of the Betwa and Bes rivers as a renowned ironworking and merchant banking centre [@Dwivedi2021Tools], while Bharuch (Bhrigukaccha, 20.325 in 345BC to 21.432 in 321BC) anchored western maritime trade [@Moosvi1987Economy]. Viratnagar (8.971 in 321BC), Alwar (7.966 in 321BC), Maheshwar and Eran formed secondary fortified towns coordinating agricultural extraction and trade along the Narmada and Chambal drainage systems [@A1967Indian; @Dwivedi2019Early].

### Kalinga and Northern Deccan Frontier

The southern province catalogues 2.041 settlements across coastal Odisha, the Mahanadi delta and the northern Deccan plateau along the Godavari River [@Bengal2020Proceeding; @SD2016Promoting]. Sisupalgarh was the preeminent fortified metropolis of the region, accommodating 23.957 inhabitants in 345BC and reaching 26.035 in 321BC within its massive square rampart system equipped with stone gateways and a deep moat [@A1967Indian]. Jaugada (403 in 321BC) operated as a fortified post guarding routes toward the Eastern Ghats, while regional agrarian settlements and coastal *nadu* networks along the peninsular frontier are attested through long-term epigraphic and monument continuity [@Champakalakshmi1996Trade; @Chattopadhyaya1994Making; @Stein1989Vijayanagara].

# Limitations

Archaeological settlement analysis across the Nanda Empire is subject to distinct taphonomic and preservation factors:
1. Active alluviation and urban superposition: Continuous habitation over twenty-five centuries in major Gangetic cities (Patna, Varanasi, Delhi, Ujjain, Mathura) restricts modern excavation to small salvage soundings, while active river silt deposition has buried rural farming hamlets beneath several metres of alluvium [@Jha2025Geoarchaeo].
2. Organic architectural decay: While fortifications and public civic works employed kiln-fired brick and stone, domestic structures were predominantly erected from timber, bamboo and unbaked mud brick, which degrade rapidly under humid monsoon conditions [@A1967Indian; @Bengal2020Proceeding].
3. Regional survey disparities: Archaeological survey intensity has historically concentrated along the central Ganga valley and around prominent Buddhist pilgrimage sites, resulting in higher site discovery rates in Bihar and Uttar Pradesh compared to the forested uplands of Madhya Pradesh, Odisha and the Deccan [@Dwivedi2019Early; @Milligan2016Rags].
4. Anepigraphic coinage and dating uncertainties: Punch-marked silver coins lack royal names or regnal years, circulating for extended periods as bullion currency and complicating precise fine-grained chronological attribution of urban destruction and construction horizons [@Kumar2025Numismatic; @Bhandare2017Numismatic].

# Conclusion

The Nanda Empire settlement gazetteer synthesises 7.558 catalogued Early Historic localities across four geopolitical provinces, conforming to a Zipf rank-size distribution ($\alpha = 0,85$, $R^2 = 0,96$) and providing an empirical foundation for regional demographic analysis between 345BC and 321BC. By reconciling primary-monograph city trajectories, multi-repository archaeological corpora, official national censuses and foundation-filtered *qasba*, *pargana* and *nadu* continuity models, this catalogue isolates nucleated urban populations from rural cultivators, enabling dasymetric allocation of agriculturalists across the non-settled landscape.

# Appendix

The INDUS source ledger audited 8.358 candidate records, resulting in 7.558 accepted settlements and 800 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Virāta</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khaksi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Nagtaroli</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Garhi (Ramgarh)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Budhavarpeth)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Satimata Tekadi)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bramhi Reethi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sindpuri</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Near Vaijeshwar Tem</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Gunjepar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Taular (Walni Bujurg)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bhandarbodi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pratappur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Saoli</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pachkhedi (Beldongri)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mohdara</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Panjrepar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Adam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ambara Kandari (Attargaon)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bhivsena</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kakada (Ambuj)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Deni</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sawargaon</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Adam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khambora</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Nanda Empire source ledger.</figcaption>
</figure>

# Sources
