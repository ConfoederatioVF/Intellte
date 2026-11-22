---
title: "Studies on Population"
subtitle: "INDUS: South Asia, 10000BC-2026AD"
date: "20 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_indus_macro_zones.png"
hero_caption: "Historical macro-zones, major river corridors and principal urban centres of INDUS across the seven sovereign states of South Asia from 10000BC to 2026AD."
hero_label: "fig:hero-indus"
bibliography: studies_on_population.bib
csl: _shared/template/crd-mla-numeric.csl
link-citations: true
output:
  pdf_document:
    latex_engine: xelatex
    template: _shared/template/template.tex
    keep_tex: false
  github_document:
    html_preview: false
    toc: true
    toc_depth: 3
header-includes:
  - \AtBeginDocument{\pretocmd{\abscontent}{\crdneedspace{135pt}}{}{}}
---



# Abstract

Reconstructing the long-run demographic history of South Asia requires integrating prehistoric archaeological site registers, epigraphic and numismatic records, mediaeval administrative chronicles, early modern revenue surveys and modern census statistics. Global historical demographic datasets such as HYDE disaggregate national historical estimates onto 5-arcminute grids primarily through environmental suitability weights and modern population distributions [@KleinGoldewijk2017]. For the Indian subcontinent, where settlement geography underwent radical realignments across the Holocene, from the Bronze Age Indus basin to the Gangetic plain, the Deccan plateau, the southern river deltas and the Himalayan foothills, top-down downscaling models introduce structural distortions. INDUS provides a bottom-up reconstruction spanning all seven sovereign states of South Asia: India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan and Maldives across 4,38M km² from 10000BC to 2026AD. INDUS harmonises 24 constituent research monographs, coupling 11.339 multi-repository archaeological site complexes across 816 HydroBASINS catchments with 336.324 settlement-chapter records across 24 gazetteers (57.812 deduplicated settlements across all epochs; 41.599 contemporary modern settlements). Geostatistical calibration uses a non-stationary Matérn ($\nu = 3/2$) kernel ($\tau_1 = 1,52$, $\tau_2 = 2,78$) with local Voronoi geodesic scaling ($r = 0,63$, median catchment radius 44,94 km), producing continuous habitation intensity surfaces without administrative boundary artefacts. Across the pre-modern era, subcontinental population expanded from 250k in 10000BC (0,057/km²) to 1,4M in 5000BC, 6,2M during the Mature Harappan urban climax (2500BC), 16,5M in 1000BC, 46M under the Mauryan Empire (300BC), 55M at 1AD, 75M in 1000AD, 138M at the Mughal apogee under Akbar (1600AD), and 244M at the onset of direct British Crown governance in 1857AD. Over the modern era, decennial censuses and contemporary vital registries document expansion from 268M in 1881AD to 424M in 1947AD, punctuated by severe famine and epidemic shocks, before accelerating through post-colonial mortality reductions to 1,1B in 1991AD and 1,95B by 2026AD, with 1,47B in India, 254M in Pakistan, 175M in Bangladesh, and 55M across Sri Lanka, Nepal, Bhutan and Maldives.



# Background

Quantitative demographic reconstruction for South Asia faces challenges distinct from those encountered in Western Europe or East Asia. Over the past five decades, global historical demographies have relied heavily on the continental and regional aggregates of McEvedy and Jones (1978) and Maddison (2001) [@McEvedyJones1978; @Maddison2001]. These seminal works established broad benchmarks for the subcontinent, estimating roughly 100k inhabitants in 10000BC, 35M at the turn of the Common Era (1AD), 105M in 1500AD, 165M in 1700AD, and 232M in 1850AD. In the History Database of the Global Environment (HYDE 3.1 and HYDE 3.2), Kees Klein Goldewijk and colleagues advanced spatial demography by allocating national population series to a 5-arcminute raster grid (~9 km at the equator), combining urban point allocations with rural suitability weighting derived from coastlines, river networks, soil qualities, terrain slopes and climate [@KleinGoldewijk2017].

When applied to South Asia, however, global top-down models encounter three major structural difficulties that national-level time series cannot resolve.

First, the demographic centre of gravity of South Asian civilisation shifted geographically across millennia. During the third millennium BC, the primary focus of dense settlement and urbanism lay in the semi-arid northwestern river basins of the Indus, Sarasvati-Ghaggar-Hakra and coastal Gujarat, supporting hundreds of planned settlements including Mohenjo-daro, Harappa, Dholavira and Rakhigarhi [@Petrie2017Adaptation; @Orengo2020Automated]. Following mid-second millennium climatic aridification and hydrological reorganisation, settlement weight shifted eastward into the fertile alluvium of the Indo-Gangetic divide, the Middle Ganga plain and the Bengal delta, where the Second Urbanisation flourished from 600BC onward [@Fuller2011Pathways; @Kumar2023Second]. Later millennia witnessed the parallel agrarian and urban development of peninsular South Asia, including the Kaveri, Krishna and Godavari river basins of Sangam Tamilakam and the Deccan, as well as the hydraulic civilisation of the Sri Lankan Dry Zone [@Stein1966Land; @Coningham2021Urban]. Backward projection of modern population distributions misplaces pre-modern populations into modern industrial belts, while starving ancient cultural hearts that supported dense populations in antiquity.

Second, political frontiers and administrative boundaries altered repeatedly across South Asian history. Sovereign states established in the mid-twentieth century (India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan and Maldives) cut across ancient and mediaeval cultural corridors. The 1947 Partition of British India bifurcated the demographic units of Punjab and Bengal, triggering the forced migration of over 14M people, followed in 1971 by the Bangladesh Liberation War [@Spate1947Partitio; @Chattha2022Communal; @Pardesi2019Violent]. Models tied to post-1947 borders cannot represent the demographic cohesion of the Mauryan, Gupta, Delhi Sultanate, Mughal or British empires, nor can they trace historical interactions across the Himalayan piedmont and the Indian Ocean.

Third, documentary evidence for South Asian population is stratified across distinct historiographical and methodological traditions. Prehistoric and proto-historic numbers depend on systematic archaeological surveys, site area measurements, and environmental carrying capacity models [@Petrie2016Feeding; @Valentine2015Evidence; @Sarkar2016Oxygen]. Early historic and mediaeval estimates rely on epigraphic charters, town fortification perimeters, temple tax records and military levies [@Thapar1981Indian; @Kulke2009Bibliograp; @Bes2022Heirs]. Early modern figures derive from the detailed fiscal revenue surveys of the Mughal Empire, notably the Ain-i-Akbari compiled under Abu al-Fazl in 1595AD, as well as Dutch, Portuguese and English trade registers [@Eaton2019India; @Guha2011Forms; @Chandra2025Akbar]. Colonial and modern demography rests upon the decennial Indian Census series initiated in 1871-1881AD and continued by sovereign national statistical offices through 2026AD [@Roy2014Geography; @Dyson2001Prelimin].

INDUS harmonises these divergent evidentiary traditions into a unified spatial database across 24 regional chapters and five chronological-thematic groups. This paper details the geostatistical methodology, presents the validation diagnostics, and reviews the reconstructed demographic trajectory of South Asia from 10000BC to 2026AD.

# Methodology

## Spatial Scope, Territorial Regimes and Hierarchical Masking

To ensure sub-regional accounting integrity across shifting historical boundaries, INDUS organises its domain of 4.380.000 km² into a multi-tier hierarchical masking system spanning 24 constituent research modules and five regional groups (Table 1 and Figure 1).

The geographic domain encompasses the entire Indian subcontinent and adjacent islands, including the Republic of India, the Islamic Republic of Pakistan, the People's Republic of Bangladesh, the Democratic Socialist Republic of Sri Lanka, the Federal Democratic Republic of Nepal, the Kingdom of Bhutan, and the Republic of Maldives. Cartographic projections follow an upright Lambert Azimuthal Equal-Area projection centred at 21°N, 79°E, with dedicated equal-area inset framing for the Maldives and the Andaman-Nicobar archipelago.

The hierarchy operates across four priority tiers. Priority Tier 1 establishes continuous spatial baselines across macro-regions characterised by early distinct trajectories: the Indus Valley Civilisation in the northwest (1,62M km²), Sangam Tamilakam in the south (167k km²), Sri Lanka and the Maldives (64k km²), and the Himalayan kingdoms of Nepal and Bhutan (184k km²). Priority Tier 2 encompasses regional dynastic and thematic regimes across northern, central and peninsular India from the Vedic era to the British Raj, including the Vedic Period, the Greco-Roman trading network, the Mahajanapadas, the Nanda and Maurya empires, the Gupta classical era, northern polities to 1206AD, the Delhi Sultanate, the Mughal, Vijayanagara and Maratha empires, European trading factories, and regional southern and western transitions.

Priority Tier 3 tracks sovereign post-colonial developments across administrative units from 1947 to 2026AD, including independent India across its states and union territories (3,13M km²), sovereign Bangladesh after 1971 (134k km²), the post-independence trajectories of Nepal, Sri Lanka, Bhutan and Maldives (247k km²), and the political and military crises connecting Pakistan, India and Bangladesh (982k km²). Priority Tier 4 isolates high-intensity regional conflict zones, notably the Northern and Eastern provinces of Sri Lanka during the civil war (1983-2009AD, 17,8k km²).



<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Constituent Module</th><th class="crd-th">Period</th><th class="crd-th">Gazetteer</th><th class="crd-th">Area (km²)</th><th class="crd-th">Population Trajectory</th><th class="crd-th">Primary Archival &amp; Archaeological Substrata</th></tr></thead>
<tbody>
<tr><td class="crd-td">1. Ancient: Indus Valley Civilisation</td><td class="crd-td">10000BC-1300BC</td><td class="crd-td">2.359 records</td><td class="crd-td">1.621.984</td><td class="crd-td">140k (10000BC) to 2,7M (1300BC)</td><td class="crd-td">ASI site surveys, Harappan gazetteers, radiocarbon series</td></tr>
<tr><td class="crd-td">1. Ancient: Vedic Period &amp; Gangetic Iron Age</td><td class="crd-td">1500BC-500BC</td><td class="crd-td">5.905 records</td><td class="crd-td">2.013.529</td><td class="crd-td">5,2M (1500BC) to 18,5M (500BC)</td><td class="crd-td">PGW and NBPW surveys, Vedic toponymy, Gangetic excavations</td></tr>
<tr><td class="crd-td">1. Ancient: Greco-Roman Settlements &amp; Ports</td><td class="crd-td">327BC-500AD</td><td class="crd-td">6.077 records</td><td class="crd-td">2.119.704</td><td class="crd-td">11,2M (327BC) to 20,5M (500AD)</td><td class="crd-td">Periplus of Erythraean Sea, Ptolemy, Sangam ports, Roman coin hoards</td></tr>
<tr><td class="crd-td">1. Ancient: Sixteen Mahajanapadas</td><td class="crd-td">600BC-345BC</td><td class="crd-td">7.547 records</td><td class="crd-td">2.558.835</td><td class="crd-td">21M (600BC) to 32,5M (345BC)</td><td class="crd-td">Buddhist and Jain canonical texts, Mahajanapada urban ramparts</td></tr>
<tr><td class="crd-td">1. Ancient: Nanda Empire</td><td class="crd-td">345BC-321BC</td><td class="crd-td">7.558 records</td><td class="crd-td">2.543.071</td><td class="crd-td">32M (345BC) to 34,5M (321BC)</td><td class="crd-td">Puranic dynastic chronicles, Nanda military and treasury rolls</td></tr>
<tr><td class="crd-td">1. Ancient: Maurya Empire &amp; Ashokan Provinces</td><td class="crd-td">322BC-185BC</td><td class="crd-td">9.518 records</td><td class="crd-td">3.938.787</td><td class="crd-td">39M (322BC) to 46,5M (185BC)</td><td class="crd-td">Ashokan rock and pillar edicts, Megasthenes Indika, Arthaśāstra</td></tr>
<tr><td class="crd-td">1. Ancient: Gupta Empire &amp; Later Guptas</td><td class="crd-td">319AD-750AD</td><td class="crd-td">12.898 records</td><td class="crd-td">3.938.787</td><td class="crd-td">52M (319AD) to 64M (750AD)</td><td class="crd-td">Gupta inscriptions, copper plates, Faxian and Xuanzang travelogues</td></tr>
<tr><td class="crd-td">1. Ancient: Northern India to Ghurid Conquest</td><td class="crd-td">750AD-1206AD</td><td class="crd-td">9.343 records</td><td class="crd-td">2.651.426</td><td class="crd-td">49M (750AD) to 63,5M (1206AD)</td><td class="crd-td">Rajput genealogies, Gurjara-Pratihara and Pala land grants</td></tr>
<tr><td class="crd-td">2. Mediaeval: Sultanate of Delhi &amp; Successors</td><td class="crd-td">1206AD-1526AD</td><td class="crd-td">34.677 records</td><td class="crd-td">3.938.787</td><td class="crd-td">74M (1206AD) to 97M (1526AD)</td><td class="crd-td">Tarikh-i Firuz Shahi, Delhi court chronicles, Ibn Battuta</td></tr>
<tr><td class="crd-td">2. Mediaeval: Mughal, Vijayanagara &amp; Maratha</td><td class="crd-td">1526AD-1757AD</td><td class="crd-td">46.429 records</td><td class="crd-td">4.106.288</td><td class="crd-td">108M (1526AD) to 178M (1757AD)</td><td class="crd-td">Ain-i-Akbari, Mughal revenue ledgers, Vijayanagara epigraphy</td></tr>
<tr><td class="crd-td">2. Mediaeval: Colonial Trading Settlements</td><td class="crd-td">1498AD-1757AD</td><td class="crd-td">19.644 records</td><td class="crd-td">1.316.175</td><td class="crd-td">44M (1498AD) to 71M (1757AD)</td><td class="crd-td">VOC, Portuguese Estado da India and EIC factory records</td></tr>
<tr><td class="crd-td">3. Southern: Tamil Nadu &amp; Kerala to Sangam</td><td class="crd-td">10000BC-300AD</td><td class="crd-td">1.579 records</td><td class="crd-td">167.458</td><td class="crd-td">35k (10000BC) to 5,1M (300AD)</td><td class="crd-td">Sangam corpus, megalithic burials, Adichanallur excavations</td></tr>
<tr><td class="crd-td">3. Southern: Tamil Nadu &amp; Kerala to Mughal Era</td><td class="crd-td">300AD-1526AD</td><td class="crd-td">3.855 records</td><td class="crd-td">167.458</td><td class="crd-td">5,1M (300AD) to 12,8M (1526AD)</td><td class="crd-td">Imperial Chola temple inscriptions, Pandyan grants, Chera rolls</td></tr>
<tr><td class="crd-td">3. Southern: Tamil Nadu &amp; Kerala to British Raj</td><td class="crd-td">1526AD-1801AD</td><td class="crd-td">3.872 records</td><td class="crd-td">167.458</td><td class="crd-td">12,8M (1526AD) to 20,5M (1801AD)</td><td class="crd-td">Nayak revenue rolls, Poligar records, EIC Madras surveys</td></tr>
<tr><td class="crd-td">3. Peripheral: Sri Lanka &amp; Maldives to British</td><td class="crd-td">10000BC-1796AD</td><td class="crd-td">1.642 records</td><td class="crd-td">63.718</td><td class="crd-td">12k (10000BC) to 1,98M (1796AD)</td><td class="crd-td">Mahavamsa, Culavamsa, Dutch VOC censuses, Maldivian tarikhs</td></tr>
<tr><td class="crd-td">3. Peripheral: Pakistan to British Rule</td><td class="crd-td">10000BC-1849AD</td><td class="crd-td">10.940 records</td><td class="crd-td">847.968</td><td class="crd-td">85k (10000BC) to 15,2M (1849AD)</td><td class="crd-td">Punjab settlement reports, Sikh darbar rolls, Sindh gazetteers</td></tr>
<tr><td class="crd-td">3. Peripheral: Nepal &amp; Bhutan to British Rule</td><td class="crd-td">10000BC-1816AD</td><td class="crd-td">4.060 records</td><td class="crd-td">183.712</td><td class="crd-td">15k (10000BC) to 3,65M (1816AD)</td><td class="crd-td">Lalitpur and Kathmandu inscriptions, Gorkha tax and guthi rolls</td></tr>
<tr><td class="crd-td">4. British India: Plassey to 1857 Mutiny</td><td class="crd-td">1757AD-1857AD</td><td class="crd-td">48.838 records</td><td class="crd-td">4.353.693</td><td class="crd-td">185M (1757AD) to 244M (1857AD)</td><td class="crd-td">EIC Fifth Report, decennial district revenues, Buchanan surveys</td></tr>
<tr><td class="crd-td">4. British India: 1857 Raj to Partition</td><td class="crd-td">1857AD-1947AD</td><td class="crd-td">47.049 records</td><td class="crd-td">4.358.484</td><td class="crd-td">244M (1857AD) to 424M (1947AD)</td><td class="crd-td">Imperial Gazetteer of India, Census of India 1871-1941 rounds</td></tr>
<tr><td class="crd-td">5. Contemporary: Republic of India</td><td class="crd-td">1947AD-2026AD</td><td class="crd-td">28.538 records</td><td class="crd-td">3.129.521</td><td class="crd-td">344M (1947AD) to 1,47B (2026AD)</td><td class="crd-td">Census of India 1951-2011, SRS vital registration, 2026 estimates</td></tr>
<tr><td class="crd-td">5. Contemporary: Bangladesh Post-1971</td><td class="crd-td">1971AD-2026AD</td><td class="crd-td">4.487 records</td><td class="crd-td">133.590</td><td class="crd-td">67,5M (1971AD) to 174,5M (2026AD)</td><td class="crd-td">BBS decennial censuses (1974-2022), vital statistics, 2026 update</td></tr>
<tr><td class="crd-td">5. Contemporary: Nepal, Sri Lanka, Bhutan, Maldives</td><td class="crd-td">1947AD-2026AD</td><td class="crd-td">4.523 records</td><td class="crd-td">247.430</td><td class="crd-td">15,1M (1947AD) to 54,5M (2026AD)</td><td class="crd-td">CBS Nepal, Sri Lanka DCS, Bhutan NSB, Maldives NBS census rounds</td></tr>
<tr><td class="crd-td">5. Contemporary: Indo-Pakistani Wars &amp; 1971</td><td class="crd-td">1947AD-2026AD</td><td class="crd-td">14.139 records</td><td class="crd-td">981.558</td><td class="crd-td">73M (1947AD) to 254M (2026AD)</td><td class="crd-td">Pakistan PBS censuses (1951-2023), UNHCR refugee registers</td></tr>
<tr><td class="crd-td">5. Contemporary: Sri Lankan Civil War Zone</td><td class="crd-td">1983AD-2026AD</td><td class="crd-td">847 records</td><td class="crd-td">17.754</td><td class="crd-td">2,15M (1983AD) to 2,92M (2026AD)</td><td class="crd-td">Sri Lanka DCS district tallies, UNHCR conflict displacement data</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Structure of the 24 constituent research modules of INDUS, showing chronological spans, gazetteer record counts, spatial areas, population trajectories and primary evidentiary foundations.</figcaption>
</figure>



## Archaeological Substrata and Non-Stationary Matérn Kriging

Where historical censuses are absent prior to the late nineteenth century, spatial disaggregation cannot project modern population patterns backwards without creating severe historical inaccuracies. INDUS constructs a continuous 5-arcminute (4.320 x 2.160 global grid, WGS84) archaeological habitation intensity surface across the entire subcontinent.

The primary database fuses archaeological site surveys into 11.339 multi-repository site-complex observations grouped across 816 HydroBASINS river catchments covering 57.066 valid land cells (Figure 2). These observations encompass ten major chronological horizons: Palaeolithic-Mesolithic (01), Pre-Harappan and Neolithic (02), Mature Harappan (03), Late Harappan and Vedic (04), Mahajanapadas and Maurya (05), Indo-Greek and Sangam (06), Gupta and Classical (07), Early Mediaeval Tripartite and Chola (08), Delhi Sultanate and Vijayanagara (09), and Mughal, Maratha and Early Colonial (10).

To transform raw site inventories into continuous, anomaly-free habitation surfaces, INDUS applies a geostatistical workflow in five stages [@PaciorekSchervish2006]. First, raw site counts within each catchment are normalised by geodesic Voronoi polygons to derive raw site densities, stabilised through the Freeman-Tukey square-root transformation. Second, empirical Bayes shrinkage adjusts for modern survey disparities, dampening salvage archaeology clustering around urban infrastructure while preserving signals in less accessible tracts. Third, the system calibrates a non-stationary Matérn ($\nu = 3/2$) kernel using geodesic catchment separations scaled by local Voronoi support radii ($r = 0,63$, median catchment radius 44,94 km). The variogram separates into a short-range riverine clustering parameter ($\tau_1 = 1,52$, weight 0,78) reflecting valley corridor settlement and a macro-ecological parameter ($\tau_2 = 2,78$, weight 0,22) capturing broader agro-climatic zones.

Fourth, dual kriging guarantees positive site intensities across all 57.066 valid subcontinental cells. Fifth, weighted least-squares log-linear residual kriging couples the kriged surface with physical covariates (fluvial proximity, coastal access, elevation, terrain slope and natural biome habitability), with an active urban buffer applied around known major historical agglomerations.

<figure class="crd-figure-block" id="fig:kriging-diagnostics">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0/fig2_indus_kriging_diagnostics.png" alt="fig:kriging-diagnostics" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Archaeological substrata and non-stationary Matérn $(\nu = 3/2)$ kriging across South Asia. Panels show 816 HydroBASINS catchments (A), semivariogram calibration (B), Mature Harappan habitation intensity (C) and the 1600AD Mughal-era dasymetric surface (D).</figcaption>
</figure>

## Historical Settlement Gazetteers and Dasymetric Allocation

Disaggregating demographic totals solely through rural archaeological densities risks dispersing compact urban populations across adjacent agrarian hinterlands. To prevent this, every constituent chapter in INDUS integrates a coordinate-anchored historical settlement gazetteer. In total, INDUS traces 336.324 settlement-chapter records across 24 gazetteers, resolving into 57.812 deduplicated settlements across all epochs (41.599 contemporary modern settlements, achieving structural parity with East Asian historical settlement reconstructions) calibrated against primary historical demography rather than synthetic single-peak extrapolations [@Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Bayly1983Rulers].

Each settlement record registers time-stamped population figures alongside settlement classification and historical documentation across four distinct evidentiary regimes. For prehistoric settlements (10000BC to 600BC), estimates derive from geomagnetic site plans, total mounded area in hectares, Indian Archaeology Review Palaeolithic corpora, and ethnographically calibrated house-floor density multipliers (typically 100 to 200 persons per hectare for nucleated mud-brick settlements) [@Petrie2017Adaptation; @Orengo2017Large; @Possehl1999IndusAge; @Kenoyer1998AncientCities]. For early historic and classical cities (600BC to 1200AD), estimates rest on excavated walled circuits, suburb ditch extents, epigraphic records of guild populations and Buddhist monastic residential capacities [@Erdosy1988Urbanisation; @Allchin1995Archaeology; @Champakalakshmi1996Trade; @Chattopadhyaya1994Making; @Kumar2023Second; @Thapar1981Indian].

For mediaeval and early modern metropolises (1200AD to 1800AD), populations are reconstructed from court chronicles, military mobilisation rosters, fiscal *mahal* and *qasba* registers from the Ain-i-Akbari, European traveller accounts, and temple revenue records, anchoring 145 major imperial and regional capitals directly to published scholarly trajectories while scaling secondary *pargana* and *nadu* seats to subcontinental macro-population and urban-share elasticities (approximately 15% urban under Akbar in 1595AD and 11% to 13% in 1800AD) [@Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Blake1991Shahjahanabad; @Stein1989Vijayanagara; @Eaton1993Rise; @Naqvi1968Urbanisation; @Bayly1983Rulers]. Post-1757 planned towns, colonial hill stations, cantonments, canal colonies, railway junctions and post-independence industrial cities are strictly excluded from earlier epochs by foundation-year and chronological toponymy filters. For colonial and modern cities (1800AD to 2026AD), urban populations derive from municipal censuses, the Imperial Gazetteer of India (1908), all six Census of India Table A-04 urban classes (1901-2011AD), Pakistan PBS, Bangladesh BBS, Sri Lanka DCS, Nepal CBS, Bhutan NSB and Maldives NBS enumerations through 2026AD [@ImperialGazetteer1908; @Roy2014Geography; @Dyson2001Prelimin; @Slusser1982NepalMandala; @Phuntsho2013HistoryBhutan].

During dasymetric downscaling at each target horizon, point urban populations inside a territorial mask are allocated directly to their host 5-arcminute cells. The remaining rural population envelope is then distributed across non-urban cells proportionally to the calibrated archaeological and environmental surface.

# Testing and Validation

## Variogram Calibration, HydroBASINS Catchments and Kriging Diagnostics

To assess the stability of the archaeological kriging mosaic, Table 2 compiles the cross-validation diagnostics across the ten chronological horizons.



<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Archaeological Horizon</th><th class="crd-th">Chronology</th><th class="crd-th">Support Nodes</th><th class="crd-th">Short Scale (τ₁)</th><th class="crd-th">Macro Scale (τ₂)</th><th class="crd-th">Nugget/Sill</th><th class="crd-th">Skill (R²)</th><th class="crd-th">Coastal Weight (β₄)</th></tr></thead>
<tbody>
<tr><td class="crd-td">01. Palaeolithic-Mesolithic</td><td class="crd-td">10000BC-2600BC</td><td class="crd-td">816 HydroBASINS</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td><td class="crd-td">0,071</td></tr>
<tr><td class="crd-td">02. Pre-Harappan &amp; Neolithic</td><td class="crd-td">7000BC-2600BC</td><td class="crd-td">816 HydroBASINS</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td><td class="crd-td">0,079</td></tr>
<tr><td class="crd-td">03. Mature Harappan</td><td class="crd-td">2600BC-1900BC</td><td class="crd-td">816 HydroBASINS</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td><td class="crd-td">0,079</td></tr>
<tr><td class="crd-td">04. Late Harappan &amp; Vedic</td><td class="crd-td">1900BC-600BC</td><td class="crd-td">816 HydroBASINS</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td><td class="crd-td">0,083</td></tr>
<tr><td class="crd-td">05. Mahajanapadas &amp; Maurya</td><td class="crd-td">600BC-185BC</td><td class="crd-td">816 HydroBASINS</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td><td class="crd-td">0,082</td></tr>
<tr><td class="crd-td">06. Indo-Greek &amp; Sangam</td><td class="crd-td">185BC-300AD</td><td class="crd-td">816 HydroBASINS</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td><td class="crd-td">0,03</td></tr>
<tr><td class="crd-td">07. Gupta &amp; Classical</td><td class="crd-td">319AD-750AD</td><td class="crd-td">816 HydroBASINS</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td><td class="crd-td">0,085</td></tr>
<tr><td class="crd-td">08. Tripartite &amp; Imperial Chola</td><td class="crd-td">750AD-1206AD</td><td class="crd-td">816 HydroBASINS</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td><td class="crd-td">0,01</td></tr>
<tr><td class="crd-td">09. Delhi Sultanate &amp; Vijayanagara</td><td class="crd-td">1206AD-1526AD</td><td class="crd-td">816 HydroBASINS</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td><td class="crd-td">0,01</td></tr>
<tr><td class="crd-td">10. Mughal &amp; Early Colonial</td><td class="crd-td">1526AD-1757AD</td><td class="crd-td">816 HydroBASINS</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">0,16</td><td class="crd-td">0,985</td><td class="crd-td">0,092</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Geostatistical parameters, semivariogram calibration, nugget-to-sill ratios and residual skill for the non-stationary Matérn archaeological kriging mosaic across all ten chronological horizons.</figcaption>
</figure>



The diagnostics highlight key spatial features of the subcontinental calibration.

First, when inter-catchment geodesic separations are normalised by local Voronoi support radii, empirical semivariances collapse onto consistent non-dimensional correlation scales (Figure 2, Panel B). The short-range riverine clustering parameter aligns at $\tau_1 = 1,50$ (dimensionless lag, equivalent to an effective physical distance of 68,5 km), while the macro-ecological scale settles at $\tau_2 = 2,78$. The nugget-to-sill ratio remains exceptionally low across early horizons (0,04), indicating that over 96% of variance in transformed site density is spatially structured across river catchments rather than reflecting recording noise. In the Mughal and Early Colonial horizon (10), the nugget ratio rises to 0,16, capturing the spatial dispersion of proto-industrial cottage manufacturing and small market towns outside traditional alluvial corridors.

Second, the coastal covariate weight ($\beta_4$) responds dynamically to known maritime shifts. During the Indo-Greek and Sangam horizon (06), coastal weighting stabilises at 0,03 as maritime trade expanded through peninsular emporia like Muziris, Arikamedu and Korkai [@Lakshminarayan2018Great]. In the Mughal and Early Colonial era (10), coastal access weight rises to 0,092, capturing the growth of European trading factories and port settlements along the Coromandel, Malabar and Gujarat coastlines [@BurtonPage2008Documentat].

Third, the dasymetric surface successfully eliminates artificial border cliffs. Because the 816 HydroBASINS catchments reflect hydrological boundaries rather than modern national frontiers, the kriged surface transitions smoothly across international boundaries, connecting the Pakistani Punjab with Indian Punjab and West Bengal with Bangladesh without boundary seam artefacts (Figure 2, Panels C and D).

## Comparative Baselines: INDUS versus HYDE 3.2, McEvedy & Jones, and Maddison

Figure 3 (Panel A) and Table 3 compare the subcontinental population trajectory of INDUS against the classical baselines of McEvedy and Jones (1978), Maddison (2001) and HYDE 3.2 [@McEvedyJones1978; @Maddison2001; @KleinGoldewijk2017].



<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">INDUS Reconstructed</th><th class="crd-th">McEvedy &amp; Jones</th><th class="crd-th">HYDE 3.2</th><th class="crd-th">Maddison</th><th class="crd-th">Mean Density</th></tr></thead>
<tbody>
<tr><td class="crd-td">10000BC</td><td class="crd-td">250k</td><td class="crd-td">100k</td><td class="crd-td">172k</td><td class="crd-td">-</td><td class="crd-td">0,06/km²</td></tr>
<tr><td class="crd-td">5000BC</td><td class="crd-td">1,4M</td><td class="crd-td">700k</td><td class="crd-td">1,15M</td><td class="crd-td">-</td><td class="crd-td">0,32/km²</td></tr>
<tr><td class="crd-td">2500BC</td><td class="crd-td">6,2M</td><td class="crd-td">4M</td><td class="crd-td">4,8M</td><td class="crd-td">-</td><td class="crd-td">1,42/km²</td></tr>
<tr><td class="crd-td">1000BC</td><td class="crd-td">16,5M</td><td class="crd-td">12M</td><td class="crd-td">14,2M</td><td class="crd-td">-</td><td class="crd-td">3,77/km²</td></tr>
<tr><td class="crd-td">300BC</td><td class="crd-td">46M</td><td class="crd-td">30M</td><td class="crd-td">38,5M</td><td class="crd-td">-</td><td class="crd-td">10,5/km²</td></tr>
<tr><td class="crd-td">1AD</td><td class="crd-td">55M</td><td class="crd-td">35M</td><td class="crd-td">42M</td><td class="crd-td">55M</td><td class="crd-td">12,56/km²</td></tr>
<tr><td class="crd-td">500AD</td><td class="crd-td">63M</td><td class="crd-td">50M</td><td class="crd-td">54M</td><td class="crd-td">-</td><td class="crd-td">14,38/km²</td></tr>
<tr><td class="crd-td">1000AD</td><td class="crd-td">75M</td><td class="crd-td">79M</td><td class="crd-td">72M</td><td class="crd-td">75M</td><td class="crd-td">17,12/km²</td></tr>
<tr><td class="crd-td">1500AD</td><td class="crd-td">106M</td><td class="crd-td">105M</td><td class="crd-td">102M</td><td class="crd-td">110M</td><td class="crd-td">24,2/km²</td></tr>
<tr><td class="crd-td">1600AD</td><td class="crd-td">138M</td><td class="crd-td">135M</td><td class="crd-td">132M</td><td class="crd-td">135M</td><td class="crd-td">31,51/km²</td></tr>
<tr><td class="crd-td">1700AD</td><td class="crd-td">168M</td><td class="crd-td">165M</td><td class="crd-td">160M</td><td class="crd-td">165M</td><td class="crd-td">38,36/km²</td></tr>
<tr><td class="crd-td">1800AD</td><td class="crd-td">204M</td><td class="crd-td">190M</td><td class="crd-td">188M</td><td class="crd-td">-</td><td class="crd-td">46,58/km²</td></tr>
<tr><td class="crd-td">1857AD</td><td class="crd-td">244M</td><td class="crd-td">232M</td><td class="crd-td">238M</td><td class="crd-td">-</td><td class="crd-td">55,71/km²</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Comparison of long-run subcontinental population estimates between INDUS, McEvedy and Jones (1978), HYDE 3.2 (Klein Goldewijk et al. 2017) and Maddison (2001) across pre-modern benchmarks from 10000BC to 1857AD.</figcaption>
</figure>



<figure class="crd-figure-block" id="fig:trajectories">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0/fig3_indus_long_run_trajectories.png" alt="fig:trajectories" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Long-run demographic trajectories and comparative baselines across South Asia from 10000BC to 2026AD. Panel A compares INDUS against McEvedy and Jones (1978) and HYDE 3.2 across the pre-modern eras, while Panel B traces modern population growth reaching 1,95B across the seven sovereign states.</figcaption>
</figure>

At the subcontinental scale, INDUS demonstrates broad agreement with earlier scholars across major historical markers, such as the turn of the era (55M in INDUS and Maddison versus 35M in McEvedy and Jones), the mediaeval baseline at 1000AD (75M in INDUS and Maddison versus 79M in McEvedy and Jones), and the Mughal high point in 1600AD (138M in INDUS versus 135M in McEvedy and Jones and Maddison).

However, INDUS departs significantly from global baselines in resolving three key demographic transformations.

First, during the Bronze Age Mature Harappan climax (2600-1900BC), INDUS estimates a subcontinental total of 6,2M, with the Greater Indus basin, Cholistan and Gujarat supporting roughly 3,4M to 4,5M inhabitants. This is substantially higher than the 4M subcontinental estimate of McEvedy and Jones, reflecting extensive multi-tier settlement hierarchies revealed by satellite remote sensing and ground surveys across northwest India and Pakistan [@Petrie2017Adaptation; @Orengo2020Automated].

Second, during the Second Urbanisation and the Mauryan Empire (600BC to 185BC), INDUS documents an earlier demographic acceleration in the Gangetic plain, reaching 46M by 300BC. This contrasts with McEvedy and Jones' estimate of 30M, which underestimates the carrying capacity of intensive wet-rice agriculture, iron-axe forest clearance and the vast urban centres of Magadha like Pataliputra [@Fuller2011Pathways; @Sharma2018Mauryan].

Third, INDUS captures the dynamic demographic shifts of the Deccan and southern peninsular India. While earlier models treated the south as a passive demographic background growing at uniform multipliers, INDUS captures the expansion of Sangam Tamilakam (supporting 5,1M by 300AD) and the hydraulic tank networks of the Cholas and Vijayanagara, which supported over 20M inhabitants in southern India by the sixteenth century [@Stein1966Land; @Bes2022Heirs].

# Results

## Early Holocene Forager Baselines and Pre-Harappan Settlement (10000BC-2600BC)

At the transition to the Holocene (10000BC), human population across the 4,38M km² South Asian domain is estimated at approximately 250.000, representing an average density of 0,057 inhabitants/km² (Table 3). Late Palaeolithic and Mesolithic hunter-gatherer bands clustered along rock shelters in the Vindhyan and central Indian hills (such as Bhimbetka), limestone caves in Sri Lanka (Fa-Hien Lena and Batadombalena), and sand dunes (*teris*) of coastal Tamil Nadu and Kerala [@Jha2025Geoarchaeo; @Coningham2025Village]. The Indus basin supported approximately 140k people, peninsular South Asia roughly 35k, the Sri Lankan and Maldivian littoral 12k, the Himalayan foothills 15k, and the broader Gangetic-peninsular forests the remainder.

During the Holocene climatic optimum (8000-5000BC), enhanced south-west monsoonal rainfall expanded river systems and facilitated the emergence of settled agro-pastoral communities. At Mehrgarh in the Kachi plain of Balochistan, aceramic and ceramic Neolithic strata (7000-5000BC) provide evidence for the early domestication of zebu cattle (*Bos indicus*), naked barley and emmer wheat, supported by mud-brick granaries [@Khan2021Hydro; @Petrie2016Feeding]. Subcontinental numbers rose to 1,4M by 5000BC (0,32/km²).

Between 4000BC and 2600BC, early agricultural villages spread throughout the alluvial floodplains of the Indus, Hakra and Sarasvati drainages. Distinct regional cultural traditions, including Kot Diji, Amri, Sothi-Siswal and Hakra Wares, established nucleated villages with specialised pottery kilns and copper metallurgy [@Angourakis2020Downsize; @Kumari2025Late]. By 3000BC, subcontinental population surpassed 3,5M, climbing to 6,2M by 2500BC (1,42/km²).

## The Mature Harappan Urban Network and Bronze Age De-urbanisation (2600BC-1500BC)

The Mature Harappan period (2600-1900BC) represents the first urban climax in South Asia. Covering over 1,6M km² across modern Pakistan and northwestern India, the Indus Valley Civilisation developed a planned urban hierarchy organised into five major regional metropolises: Mohenjo-daro (Sindh), Harappa (Punjab), Rakhigarhi (Haryana), Dholavira (Kachchh) and Ganweriwala (Cholistan), supported by dozens of fortified secondary towns (such as Lothal, Kalibangan, Chanhudaro and Banawali) and over a thousand rural agricultural hamlets [@Petrie2017Adaptation; @Orengo2020Automated]. At its height around 2200BC, the Greater Indus basin supported approximately 4,5M inhabitants, with Mohenjo-daro and Rakhigarhi housing 40k to 42k people each and Harappa 35k [@Possehl1999IndusAge; @Kenoyer1998AncientCities].

The civilisational infrastructure relied on baked-brick architecture, sophisticated street grid layouts, public baths, hydraulic wells, covered drainage systems, standardised weights and measures, and long-distance maritime exchange with Dilmun (Bahrain), Magan (Oman) and Mesopotamia [@Valentine2015Evidence; @Khan2013Bricks]. Oxygen isotope records from archaeological bioapatites and speleothems demonstrate that Mature Harappan agriculture adapted to dual-monsoon rain regimes by combining winter wheat and barley with summer millets and rice [@Sarkar2016Oxygen; @Petrie2016Feeding].

Between 1900BC and 1300BC, weakening of the southwest summer monsoon and hydrological changes along the Ghaggar-Hakra system triggered a major settlement reorganisation. Urban public architecture and script disappeared, while populations shifted eastward into the fertile tributaries of the upper Yamuna-Ganga interfluve and southward into Gujarat. By 1300BC, population in the Indus regional mask contracted to 2,7M, while expanding rapidly in the Gangetic basin.

## The Gangetic Iron Age, Second Urbanisation and the Mauryan Climax (1500BC-185BC)

Between 1500BC and 600BC, the demographic centre of gravity shifted decisively to northern and eastern India. The introduction of iron technology around 1200BC facilitated large-scale forest clearance in the dense monsoonal woodlands of the Indo-Gangetic divide and the Middle Ganga plain [@Witzel2008Developmen; @Kumari2025Late]. The Painted Grey Ware (PGW) culture, associated with the early Vedic period, established thousands of permanent agrarian hamlets along river bluffs in Punjab, Haryana and western Uttar Pradesh, lifting regional numbers from 5,2M in 1500BC to 18,5M in 500BC (Table 1).

From 600BC onward, the widespread adoption of wet-rice transplantation (*ropana*) in the floodplains of Bihar and eastern Uttar Pradesh produced an agricultural surplus that underpinned the Second Urbanisation [@Fuller2011Pathways; @Kumar2023Second]. The Northern Black Polished Ware (NBPW) horizon witnessed the emergence of the sixteen Mahajanapadas (great territorial states), including Magadha, Kosala, Vatsa and Kuru. Fortified urban capitals expanded at Pataliputra, Rajgir, Kausambi, Varanasi, Ujjain, Sravasti, Ayodhya and Champa, with Pataliputra growing into an imperial metropolis covering over 1.500 hectares with an estimated population of 150k to 250k. Subcontinental population expanded from 21M in 600BC to 32,5M in 345BC.

Under the Nanda dynasty (345-321BC) and the subsequent Maurya Empire (322-185BC) founded by Chandragupta Maurya and consolidated by Ashoka, the subcontinent experienced its first political unification, encompassing almost the entire territory of modern India, Pakistan, Bangladesh and eastern Afghanistan [@Sharma2018Mauryan; @Thapar1981Indian]. Ashokan pillar and major rock edicts demarcated an integrated fiscal and transportation network, supported by the imperial Grand Trunk Road (*Uttarapatha*) connecting Taxila in the northwest to Tamralipti in the Bengal delta. By 300BC, subcontinental population reached 46M (10,5/km²), including 39M within the Mauryan core domain.

## Classical Polities, Sangam Tamilakam and the Early Mediaeval Tripartite Era (185BC-1206AD)

Following the fragmentation of the Maurya Empire around 185BC, political decentralisation fostered regional economic expansion. In the northwest, Indo-Greek, Indo-Scythian and Kushan rulers unified trading circuits linking Central Asia with the Gangetic basin through Gandhara, fostering urban prosperity at Taxila, Mathura and Peshawar [@Fauconnier2015Occidente; @Kumar2026Environmen]. Concurrently, the Satavahana Empire in the Deccan built thriving urban market networks at Pratishthana, Amaravati and Junnar, participating in vigorous maritime commerce with the Roman Empire [@Reden2019Handbook].

In the deep south, the Sangam era (300BC to 300AD) marked the classical urban emergence of Tamilakam, governed by the Chera, Chola and Pandya dynasties. Classical ports like Muziris (Pattanam) on the Malabar coast, Poompuhar (Kaveripattinam) at the mouth of the Kaveri, Korkai and Arikamedu served as international trading emporia exchanging pepper, textiles, beryls and pearls for Roman bullion, glassware and wine [@Lakshminarayan2018Great; @Coningham2021Urban]. By 300AD, the Tamil Nadu and Kerala regional mask supported 5,1M inhabitants, bringing the subcontinental total to 55M at 1AD and 63M by 500AD.

The classical apogee of northern India under the Gupta Empire (319-550AD) and Harsha (606-647AD) witnessed flourishing agrarian estates, supported by royal and monastic land grants (*brahmadeya* and *devadana*) that brought marginal forests into agricultural cultivation [@Thapar1979Indian; @Kulke2009Bibliograp]. Between 750AD and 1206AD, the early mediaeval period was characterised by tripartite competition between the Gurjara-Pratiharas in the north, the Palas in Bengal and Bihar, and the Rashtrakutas in the Deccan. In the south, the Imperial Cholas (985-1215AD) constructed sophisticated stone anicuts and irrigation tank systems in the Kaveri delta, enabling dense rural settlement and launching naval expeditions across the Bay of Bengal to Srivijaya [@Stein1966Land; @Champakalakshmi1996Trade]. By 1000AD, subcontinental numbers reached 75M, rising to 97M by the eve of the Delhi Sultanate in 1206AD.

## The Delhi Sultanate, Vijayanagara and the Mughal Peak (1206AD-1757AD)

The establishment of the Delhi Sultanate in 1206AD inaugurated an era of centralised administrative taxation and urban transformation. Consecutive dynasties (Mamluk, Khalji, Tughlaq, Sayyid and Lodi) developed monetised revenue extraction systems based on the *iqta* assignment, stimulating urban craftsmanship and market centralisation in capitals like Delhi (reaching 340k in 1350AD), Daulatabad, Jaunpur, Gaur (220k) and Lahore [@Aamir2026Slave; @Eaton2019India; @Eaton1993Rise]. Sultan Firuz Shah Tughlaq (1351-1388AD) constructed extensive canal networks in the Yamuna-Sutlej interfluve, extending agrarian settlement in eastern Punjab and Haryana. In southern India, the Vijayanagara Empire (1336-1565AD) consolidated control over the Deccan and the Tamil plain, building massive stone fortifications and hydraulic reservoirs at Hampi that supported an urban population reaching 420k to 450k [@Bes2022Heirs; @Stein1989Vijayanagara]. Domain population climbed from 74M in 1206AD to 106M by 1500AD.

The Mughal Empire, established by Babur in 1526AD and consolidated under Akbar (1556-1605AD), created the largest, most centralised agrarian fiscal state in early modern Afro-Eurasia [@Chandra2025Akbar; @Eaton2019India; @Habib1982Atlas; @Moosvi1987Economy]. Akbar's *zabt* system established detailed cadastral land surveys measuring arable land in *bighas*, classifying soil productivity, and fixing revenue collections in cash. As documented in the Ain-i-Akbari (1595AD), the empire spanned fifteen *subahs* (provinces) maintaining registers of cultivated acreage, village counts and military contingents.

Under Jahangir, Shah Jahan and Aurangzeb, Mughal urbanisation reached an unprecedented scale. Delhi (Shahjahanabad) housed 500k inhabitants by 1700AD, Agra peaked at 500k to 550k in 1620-1650AD, and Lahore reached 350k, while regional manufacturing centres like Dhaka (Bengal muslin, 180k-200k), Ahmedabad (textiles, 240k), Surat (maritime trade, 200k), Vijayapura (220k), Hyderabad (220k), Burhanpur (145k) and Patna (200k) formed interconnected commercial networks [@Hambly1982Towns; @Blake1991Shahjahanabad; @Naqvi1968Urbanisation; @BurtonPage2008Documentat; @Guha2011Forms]. Subcontinental population rose from 108M in 1526AD to 138M in 1600AD (31,51/km²), 168M in 1700AD (38,36/km²), and 178M by 1757AD.

Concurrently, European trading companies founded coastal enclaves: the Portuguese Estado da India at Goa, Daman and Diu; the Dutch VOC at Cochin and Pulicat; the French at Pondicherry and Chandernagore; and the English East India Company at Madras (1639), Bombay (1668) and Calcutta (1690).

## Colonial Expansion, Famine Shocks and the Census Era (1757AD-1947AD)

The British East India Company's victory at Plassey in 1757AD and the acquisition of the *Diwani* of Bengal in 1765AD marked the transition to colonial rule. Over the following century, the Company established military dominance across the subcontinent through the Subsidiary Alliance system, defeating the Maratha Confederacy, Tipu Sultan's Mysore, the Sikh Empire of Punjab, and the Kingdom of Kandy in Ceylon.

Colonial fiscal consolidation imposed rigid land revenue settlements: the Permanent Settlement of Bengal (1793), the Ryotwari system in Madras and Bombay, and the Mahalwari system in the North-Western Provinces [@Roy2014Geography; @Frykenberg1967Studies]. These fiscal extractions, combined with commercial crop enforcement, severely undermined traditional agrarian grain reserves. The Great Bengal Famine of 1770 resulted in the death of an estimated 10M people (one third of Bengal's population). Between 1757AD and 1857AD, subcontinental population grew moderately from 185M to 244M (0,27% per annum), held back by recurring regional famines and de-industrialisation of traditional artisanal textile production [@Roy2007Globalisat; @Roy2018State].

Following the 1857 Rebellion, the British Crown assumed direct governance. The colonial state constructed extensive railway networks (reaching 65.000 km by 1947) and perennial canal colonies in the Punjab (reclaiming over 4M hectares of scrubland) [@Spate1947Partitio]. The decennial Imperial Census of India was inaugurated between 1871 and 1881AD, establishing a systematic statistical record across all provinces and princely states (Table 4).



<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Census Horizon</th><th class="crd-th">Republic of India</th><th class="crd-th">Pakistan</th><th class="crd-th">Bangladesh</th><th class="crd-th">Other 4 Polities</th><th class="crd-th">INDUS Total</th><th class="crd-th">Mean Density</th></tr></thead>
<tbody>
<tr><td class="crd-td">1881AD (First Synchronous)</td><td class="crd-td">212M</td><td class="crd-td">16M</td><td class="crd-td">25M</td><td class="crd-td">15M</td><td class="crd-td">268M</td><td class="crd-td">61,19/km²</td></tr>
<tr><td class="crd-td">1901AD (Early Imperial)</td><td class="crd-td">238M</td><td class="crd-td">17M</td><td class="crd-td">29M</td><td class="crd-td">11M</td><td class="crd-td">295M</td><td class="crd-td">67,35/km²</td></tr>
<tr><td class="crd-td">1921AD (Interwar Post-Flu)</td><td class="crd-td">251M</td><td class="crd-td">21M</td><td class="crd-td">33M</td><td class="crd-td">10M</td><td class="crd-td">315M</td><td class="crd-td">71,92/km²</td></tr>
<tr><td class="crd-td">1941AD (Pre-Partition Peak)</td><td class="crd-td">319M</td><td class="crd-td">28M</td><td class="crd-td">42M</td><td class="crd-td">11M</td><td class="crd-td">400M</td><td class="crd-td">91,32/km²</td></tr>
<tr><td class="crd-td">1951AD (Post-Partition Base)</td><td class="crd-td">361M</td><td class="crd-td">34M</td><td class="crd-td">44M</td><td class="crd-td">16M</td><td class="crd-td">455M</td><td class="crd-td">103,88/km²</td></tr>
<tr><td class="crd-td">1971AD (Pre-Bangladesh War)</td><td class="crd-td">548M</td><td class="crd-td">65M</td><td class="crd-td">68M</td><td class="crd-td">25M</td><td class="crd-td">706M</td><td class="crd-td">161,19/km²</td></tr>
<tr><td class="crd-td">1991AD (Post-Colonial Climax)</td><td class="crd-td">846M</td><td class="crd-td">114M</td><td class="crd-td">106M</td><td class="crd-td">37M</td><td class="crd-td">1.103M</td><td class="crd-td">251,83/km²</td></tr>
<tr><td class="crd-td">2011AD (Contemporary Census)</td><td class="crd-td">1.211M</td><td class="crd-td">185M</td><td class="crd-td">144M</td><td class="crd-td">48M</td><td class="crd-td">1.588M</td><td class="crd-td">362,56/km²</td></tr>
<tr><td class="crd-td">2026AD (INDUS Benchmark)</td><td class="crd-td">1.465M</td><td class="crd-td">254M</td><td class="crd-td">175M</td><td class="crd-td">55M</td><td class="crd-td">1.949M</td><td class="crd-td">444,98/km²</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Decennial census trajectory and contemporary population expansion across the constituent sovereign polities of South Asia from the first synchronous imperial census in 1881AD to 2026AD.</figcaption>
</figure>



However, the late nineteenth century was scarred by catastrophic mortality crises (Table 5). The Great Famine of 1876-1878 caused between 6M and 10M excess deaths across Madras, Mysore and Bombay, while the double famine of 1896-1897 and 1899-1900 claimed a further 4M to 8M lives. In 1918-1919, the global influenza pandemic swept through South Asia, killing approximately 17M to 20M people (roughly 5% of the total population), resulting in an absolute subcontinental demographic stagnation between 1911 and 1921AD (growing from 303M to only 315M) [@Dyson2001Prelimin].

During the Second World War, the 1943 Bengal Famine claimed 2M to 3M lives, driven by wartime grain denials, Japanese occupation of Burma, inflation and administrative failure. On the eve of independence in 1947, subcontinental population stood at 424M.



<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Historical Shock Event</th><th class="crd-th">Time Horizon</th><th class="crd-th">Estimated Impact</th><th class="crd-th">Demographic Significance</th></tr></thead>
<tbody>
<tr><td class="crd-td">Great Bengal Famine of 1770</td><td class="crd-td">1769-1773AD</td><td class="crd-td">~10M excess deaths (one-third of Bengal)</td><td class="crd-td">Mass depopulation of western Bengal; jungle encroachment</td></tr>
<tr><td class="crd-td">Chalisa and Doji Bara Famines</td><td class="crd-td">1783-1792AD</td><td class="crd-td">~11M excess deaths across northern and western India</td><td class="crd-td">Severe rural desertion in Rajasthan, Mewat and Maratha lands</td></tr>
<tr><td class="crd-td">Great Famine of 1876-1878</td><td class="crd-td">1876-1878AD</td><td class="crd-td">6,1M to 10,3M excess deaths (El Niño drought)</td><td class="crd-td">Creation of Famine Codes; sharp fertility troughs in Madras</td></tr>
<tr><td class="crd-td">Indian Famines of 1896-1900</td><td class="crd-td">1896-1900AD</td><td class="crd-td">4,5M to 8M excess deaths</td><td class="crd-td">First recorded census contraction in Bombay and Central Provinces</td></tr>
<tr><td class="crd-td">Third Plague Pandemic (Bombay)</td><td class="crd-td">1896-1914AD</td><td class="crd-td">~10M plague deaths across western and northern India</td><td class="crd-td">Urban flight from Bombay; port quarantine measures</td></tr>
<tr><td class="crd-td">Influenza Pandemic of 1918-1919</td><td class="crd-td">1918-1919AD</td><td class="crd-td">17M to 20M excess deaths (~5% of subcontinental population)</td><td class="crd-td">The Great Divide (1921): transition from high to low mortality</td></tr>
<tr><td class="crd-td">Bengal Famine of 1943</td><td class="crd-td">1943-1944AD</td><td class="crd-td">2,1M to 3M excess deaths in rural Bengal</td><td class="crd-td">Severe rural destitution; urban displacement into Calcutta</td></tr>
<tr><td class="crd-td">Partition of India (1947)</td><td class="crd-td">1947-1948AD</td><td class="crd-td">~1M deaths, 14M to 15M forced cross-border refugees</td><td class="crd-td">Demographic polarisation of Punjab and Bengal into two states</td></tr>
<tr><td class="crd-td">Bangladesh Liberation War (1971)</td><td class="crd-td">1971AD</td><td class="crd-td">1,5M to 3M deaths, 10M refugees to India</td><td class="crd-td">Creation of sovereign Bangladesh; massive cross-border return</td></tr>
<tr><td class="crd-td">Sri Lankan Civil War (1983-2009)</td><td class="crd-td">1983-2009AD</td><td class="crd-td">80k to 100k deaths, 800k displaced Tamils</td><td class="crd-td">Depopulation of Northern Province; international diaspora</td></tr>
<tr><td class="crd-td">Indian Ocean Tsunami (2004)</td><td class="crd-td">December 2004</td><td class="crd-td">~45k deaths across Sri Lanka, India and Maldives</td><td class="crd-td">Coastal relocation; devastation of fishing communities</td></tr>
<tr><td class="crd-td">COVID-19 Pandemic (2020-2022)</td><td class="crd-td">2020-2022AD</td><td class="crd-td">3,5M to 5M estimated excess mortality</td><td class="crd-td">Temporary life expectancy decline; urban-to-rural reverse migration</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Major demographic crises, catastrophic famines, pandemics, partitions and conflict dislocations across South Asia from 1770AD to 2026AD.</figcaption>
</figure>



## Partition, Post-Colonial Transition and Contemporary Urban Concentration (1947AD-2026AD)

The Partition of British India in August 1947 created the sovereign dominions of India and Pakistan (encompassing West and East Pakistan). Partition triggered unprecedented communal violence and forced displacement, displacing approximately 14M to 15M people across the Punjab and Bengal borders, with estimated casualties between 500k and 1M [@Spate1947Partitio; @Chattha2022Communal; @Iqbal2026Forced].

In 1971, the Bangladesh Liberation War and military operations in East Pakistan resulted in 1,5M to 3M deaths and the displacement of over 10M refugees into eastern India, culminating in the independence of Bangladesh [@Sarkar2024Indian; @Pardesi2019Violent]. In Sri Lanka, ethnic tensions erupted into a 26-year civil war (1983-2009AD) between state forces and the Liberation Tigers of Tamil Eelam, causing over 80k to 100k deaths and displacing hundreds of thousands of residents from the Northern and Eastern provinces [@Manogaran1987Ethnic; @Sarvananthan2016Pains].

Despite these crises, the post-colonial period was characterised by rapid demographic expansion driven by modern public health interventions, DDT malaria eradication campaigns, vaccination programmes and the Green Revolution's high-yielding crop varieties [@Dyson2001Prelimin]. Subcontinental population surged from 455M in 1951AD to 706M in 1971AD, 1,1B in 1991AD, 1,59B in 2011AD, and 1,95B by 2026AD (Table 4 and Figure 3, Panel B).

India grew from 361M in 1951AD to 1,47B in 2026AD, establishing itself as the world's most populous sovereign state. Pakistan grew from 34M to 254M, while Bangladesh expanded from 44M to 175M. Nepal expanded to 31M, Sri Lanka to 22,5M, Bhutan to 790k, and Maldives to 525k.

Contemporary South Asian settlement is characterised by intense metropolitan concentration. Fitting a Pareto rank-size distribution across the core urban hierarchy (settlements above 20k inhabitants) within the 41.599 contemporary geocoded settlements in INDUS reveals a classical Zipf power-law alignment ($\alpha = 0,92$, $R^2 = 1,00$) across the urban hierarchy (Figure 4, Panel A).

<figure class="crd-figure-block" id="fig:urban-hierarchy">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0/fig4_indus_urban_hierarchy.png" alt="fig:urban-hierarchy" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Settlement hierarchy and contemporary urban rank-size distribution across South Asia. Panel A plots the Pareto rank-size distribution for 41.599 contemporary geocoded settlements, while Panel B displays the twelve largest contemporary metropolitan agglomerations.</figcaption>
</figure>

Table 6 details the twelve largest contemporary metropolitan agglomerations in INDUS, headed by Dhaka (23,8M), Mumbai (22,35M), Delhi National Capital Region (19,86M), Karachi (19,65M) and Kolkata (17,08M).



<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Metropolitan Agglomeration</th><th class="crd-th">Polity</th><th class="crd-th">Population (2025)</th><th class="crd-th">Economic &amp; Spatial Specialisation</th></tr></thead>
<tbody>
<tr><td class="crd-td">1</td><td class="crd-td">Dhaka</td><td class="crd-td">Bangladesh</td><td class="crd-td">23,8M</td><td class="crd-td">National capital of Bangladesh; manufacturing, garments and delta financial core</td></tr>
<tr><td class="crd-td">2</td><td class="crd-td">Mumbai</td><td class="crd-td">India</td><td class="crd-td">22,35M</td><td class="crd-td">Commercial and financial capital of India; banking, film industry and deepwater port</td></tr>
<tr><td class="crd-td">3</td><td class="crd-td">Delhi NCR</td><td class="crd-td">India</td><td class="crd-td">19,86M</td><td class="crd-td">National capital; political, industrial and service centre of northern India</td></tr>
<tr><td class="crd-td">4</td><td class="crd-td">Karachi</td><td class="crd-td">Pakistan</td><td class="crd-td">19,65M</td><td class="crd-td">Maritime gateway and industrial financial capital of Pakistan; Arabian Sea port</td></tr>
<tr><td class="crd-td">5</td><td class="crd-td">Kolkata</td><td class="crd-td">India</td><td class="crd-td">17,08M</td><td class="crd-td">Historic colonial capital; industrial, maritime and literary hub of eastern India</td></tr>
<tr><td class="crd-td">6</td><td class="crd-td">Lahore</td><td class="crd-td">Pakistan</td><td class="crd-td">13,55M</td><td class="crd-td">Cultural and historic capital of Punjab; academic and industrial centre</td></tr>
<tr><td class="crd-td">7</td><td class="crd-td">Chennai</td><td class="crd-td">India</td><td class="crd-td">10,51M</td><td class="crd-td">Gateway to South India; automobile manufacturing, software and medical hub</td></tr>
<tr><td class="crd-td">8</td><td class="crd-td">Bengaluru</td><td class="crd-td">India</td><td class="crd-td">10,35M</td><td class="crd-td">Silicon Plateau; information technology, aerospace and biotechnology hub</td></tr>
<tr><td class="crd-td">9</td><td class="crd-td">Hyderabad</td><td class="crd-td">India</td><td class="crd-td">9,33M</td><td class="crd-td">Pharmaceutical manufacturing, IT services and historic Deccan core</td></tr>
<tr><td class="crd-td">10</td><td class="crd-td">Ahmedabad</td><td class="crd-td">India</td><td class="crd-td">7,72M</td><td class="crd-td">Textile, chemical and financial metropolis of Gujarat; Sabarmati corridor</td></tr>
<tr><td class="crd-td">11</td><td class="crd-td">Pune</td><td class="crd-td">India</td><td class="crd-td">6,14M</td><td class="crd-td">Automotive manufacturing, education, defence and software engineering centre</td></tr>
<tr><td class="crd-td">12</td><td class="crd-td">Surat</td><td class="crd-td">India</td><td class="crd-td">5,58M</td><td class="crd-td">Global diamond cutting and synthetic textile manufacturing centre</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> The twelve largest contemporary metropolitan agglomerations in INDUS, showing rank, sovereign polity, contemporary population (2025) and economic specialisation.</figcaption>
</figure>



# Limitations

Reconstructing twelve millennia of human demography across South Asia carries inherent empirical uncertainties. Four specific caveats apply to the data presented here.

First, prehistoric and proto-historic population estimates prior to 600BC depend upon archaeological recovery rates, site area preservation and ethnographic density multipliers. In alluvial floodplains like the Punjab, Sindh, Bengal and the Ganga doab, millennia of riverine deposition and channel migration have buried or eroded hundreds of ancient settlements under metres of silt [@Petrie2017Adaptation; @Orengo2017Large]. Conversely, survey coverage is denser along semi-arid margins like Cholistan and Saurashtra. While non-stationary Matérn kriging and empirical Bayes shrinkage dampen survey disparities, absolute demographic totals carry uncertainty margins of ±35% to 45% during the third millennium BC, narrowing to ±20% to 25% during the Classical and Mediaeval eras (Figure 3, Panel A).

Second, chronological attribution in historical site registers is occasionally coarse. Of the 11.339 site-complex observations, roughly 18% represent multi-period mounds whose exact occupational boundaries between successive phases (such as Late Harappan and early PGW) remain subject to ongoing stratigraphic re-evaluation.

Third, translating mediaeval and early modern revenue registers into resident population requires household multipliers and fiscal conversion factors. In the Ain-i-Akbari (1595AD), revenue measurements are recorded in cultivated *bighas* and revenue dams rather than resident heads [@Chandra2025Akbar; @Eaton2019India; @Moosvi1987Economy]. Estimating subcontinental population from these records requires assumptions regarding average household size (typically 5,5 to 6,2 persons), tax incidence rates, and the proportion of uncultivated waste, producing an estimated margin of ±10% to 15% around our 1600AD estimate of 138M.

Fourth, partition and conflict mortality figures carry unavoidable historiographical debate. In both the 1947 Partition and the 1971 Bangladesh Liberation War, administrative chaos and rapid population movements prevented synchronous statistical enumerations. Scholarly estimates for Partition deaths range from 500k to 1,5M, while estimates for 1971 wartime excess deaths range from 1,5M to 3M [@Spate1947Partitio; @Sarkar2024Indian; @Pardesi2019Violent]. The figures adopted in INDUS represent mid-point demographic reconciliations consistent with intercensal survival rate analysis.

# Conclusion

The demographic trajectory of South Asia over the past twelve millennia is the story of human adaptation to diverse ecological niches, shaped by the rhythms of the monsoonal climate and transformed by successive waves of urbanisation, technological innovation and political organisation.

At the Pleistocene-Holocene transition (10000BC), fewer than 250.000 hunter-gatherers inhabited the subcontinent (0,057/km²). The adoption of farming and pastoralism in the northwestern piedmont at Mehrgarh initiated an agrarian revolution that culminated in the Mature Harappan urban network (2600-1900BC), which supported 6,2M people across a sophisticated grid of planned brick metropolises, fortified ports and agricultural villages.

Climatic aridification prompted an eastward and southward settlement realignment, paving the way for the Gangetic Second Urbanisation (600-300BC). The expansion of wet-rice cultivation, iron tools and imperial integration under the Mauryan Empire raised domain population to 46M by 300BC and 55M at the turn of the Common Era. Classical and early mediaeval polities across northern India, the Deccan and Sangam Tamilakam consolidated this agrarian base, lifting numbers to 75M in 1000AD.

Under the Delhi Sultanate and the Mughal Empire, monetised taxation, canal infrastructure and artisanal manufacturing supported a flourishing proto-industrial economy, lifting population to 138M by 1600AD and 178M by 1757AD.

The colonial period brought contradictory demographic forces. While British rule introduced railway networks, perennial canal colonies and synchronous census statistics, rigid land revenue extractions, export commercialisation and administrative inflexibility precipitated recurring catastrophic famines, including the 1770 Bengal famine, the 1876-1878 Great Famine, and the 1918 influenza pandemic, keeping subcontinental growth to modest rates.

The post-independence era witnessed a dramatic demographic transformation. Overcoming the severe dislocations of the 1947 Partition, the 1971 Bangladesh war and regional conflicts, the combination of modern medical infrastructure, epidemic eradication and the Green Revolution lowered infant mortality and spurred population growth. Between 1951 and 2026AD, South Asian population quadrupled from 455M to 1,95B, establishing the subcontinent as the demographic core of humanity, crowned by twelve mega-urban agglomerations that house tens of millions of citizens. INDUS provides the empirical, geostatistical and cartographic foundation for understanding this extraordinary civilisational journey.

# Sources

<div id="refs"></div>
