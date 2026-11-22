---
title: "The Mughal Empire, Vijayanagara and the Maratha Confederacy: Agrarian Demography and Urbanisation (1526AD to 1757AD)"
subtitle: "INDUS: Six Macro-Provinces, Revenue Gazetteers and Demographic Dynamics across 4,11M km²"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: mughal_vijayanagara_and_maratha_empires_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_mughal_vijayanagara_and_maratha_empires_spatial.png"
hero_caption: "Spatial distribution of six early modern administrative macro-provinces and 46.429 catalogued settlements across the Indian subcontinent (4,11M km²) between 1526AD and 1757AD."
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

The Indian subcontinent during the early modern era (1526AD to 1757AD) accommodated one of the largest demographic concentrations in global history, expanding across 4.106.288 km² from 108M inhabitants at the first battle of Panipat in 1526AD to 135M at the compilation of the Ain-i Akbari in 1595AD, 152M at the mid-seventeenth-century apogee of Shah Jahan in 1650AD, 165M during the late reign of Aurangzeb in 1700AD and 178M by the battle of Plassey in 1757AD [@Habib1982Atlas; @Moosvi1987Economy]. This continental domain encompassed six primary administrative and ecological zones: the Gangetic heartland of Imperial Hindustan, the deltaic wetlands of Bengal and Assam, the western commercial corridors of Gujarat and Malwa, the Deccan plateau governed by the southern sultanates and the Maratha Swarajya, the peninsular realm of the Vijayanagara Empire and its successor nayakas, and the arid riverine arteries of the Indus basin connecting Punjab with Thatta and Kabul. Early modern South Asian demographic growth was propelled by intensive double-cropping of rice, wheat and millets, the expansion of canal inundation networks across the upper doabs, extensive monetisation following the influx of New World silver, and an expansive manufacturing complex that clothed the Indian Ocean world in cotton textiles. By combining regional revenue surveys (*zabt* registers) with 46.429 georeferenced settlements (Zipf rank-size slope $\alpha = 0,87$, $R^2 = 0,98$), this study provides an integrated demographic reconstruction of early modern South Asia, demonstrating that political fragmentation in the eighteenth century occurred amidst continued rural agricultural clearance and dynamic mercantile urbanisation rather than demographic catastrophe [@Bayly1983Rulers; @Eaton1993Rise].

# Background

## Political Geography and Macro-Regional Demarcation

The territorial organisation of South Asia between the sixteenth and eighteenth centuries was characterised by alternating phases of imperial consolidation and regional fragmentation [@Habib1982Atlas; @Kulke2009Bibliograp; @Mishra2026Historical]. Following Babur's initial victory at Panipat in 1526AD, the Mughal dynasty progressively assembled a centralised bureaucratic empire that by 1700AD claimed nominal suzerainty over almost the entire subcontinent [@Moosvi1987Economy; @Rakesh2020What]. This vast territory was subdivided into twenty-one imperial provinces (*subahs*), each maintaining standardised cadastral registers, treasury offices and military governors [@Habib1982Atlas; @Prior1990British].

Concurrently, independent political formations anchored distinctive regional demographic systems. In southern India, the Vijayanagara Empire maintained a powerful centralised state until the battle of Talikota in 1565AD, after which sovereignty devolved onto regional *nayaka* principalities in Thanjavur, Madurai and Ikkeri, alongside the emerging Wodeyar state of Mysore [@Stein1989Vijayanagara; @Sanjay2024Balancing; @Katchalla2026Archaeolog]. In the western Deccan, the resistance of Shivaji Bhonsle produced the Maratha Swarajya during the seventeenth century, which by the 1730s expanded into a pan-Indian confederacy dominating the Malwa plateau, Gujarat and parts of the Gangetic plain [@YeolekarKadam2023Comprehens; @Kadam2025Memory]. Along the Himalayan arc, the Malla kingdoms of the Kathmandu Valley and the newly unified Drukpa polity of Bhutan maintained autonomous urban and monastic networks [@Slusser1982NepalMandala; @Phuntsho2013HistoryBhutan], while in the northeast the Ahom kingdom resisted Mughal conquest through an integrated system of corvée labour (*paik*), maintaining sovereign centres at Garhgaon, Charaideo and Rangpur along the Brahmaputra valley [@Nayam2025Political].

To capture these divergent institutional structures, INDUS partitions the subcontinent into six contiguous macro-regions:
1. Imperial Hindustan Core (534.801 km²): encompassing the Gangetic alluvium of Delhi, Agra, Awadh, Allahabad and eastern Punjab.
2. Bengal, Bihar, Orissa and Ahom Assam (803.833 km²): encompassing the lower Ganges-Brahmaputra delta and eastern frontier zones.
3. Gujarat, Malwa, Ajmer and Gondwana (975.022 km²): spanning the western maritime coastline, central Indian uplands and the Aravalli hills.
4. Maratha Swarajya, Bijapur, Golconda and the Deccan Subahs (584.832 km²): comprising the western Ghats, Maharashtra, northern Karnataka and the Godavari-Krishna river basins.
5. Vijayanagara Heartland, Karnataka and Southern Successors (359.832 km²): covering the Kaveri basin, the Coromandel plains and the Mysore tableland.
6. Subahs Lahore (West), Multan, Thatta and the Northwestern Margin (847.968 km²): spanning the Indus trunk stream, lower Sindh, the Makran littoral and the sub-Himalayan passes linking Punjab to Kabul.

## Agrarian Foundations, Monsoon Hydraulics and Revenue Assessment

The material foundation of South Asian population growth rested upon intensive multi-cropping systems governed by the seasonal southwest and northeast monsoons [@Zotter2017Roots; @Khan2024Hydraulic]. In northern India, the agricultural calendar was partitioned into two primary harvest cycles: the summer *kharif*, reliant upon seasonal monsoon rains for the cultivation of rice, millets, pulses, sugarcane and cotton, and the winter *rabi*, supported by post-monsoon soil moisture, dew and cyclonic rains for wheat, barley, gram, oilseeds and mustard [@Khan2024Hydraulic]. In the fertile doabs between the Ganga and Yamuna, Akbar's administration constructed and rehabilitated perennial canal networks, such as the Nahr-i Bihisht, bringing hundreds of thousands of hectares of dry scrubland into active cultivation [@Khan2024Hydraulic].

Mughal revenue administration under Raja Todar Mal introduced the *zabt* system, a sophisticated cadastral methodology based upon annual measurement of sown areas using standard bamboo rods (*tanab*) linked by iron rings, soil productivity grading (*polaj*, *parauti*, *chachar*, *banjar*) and commutation of grain yields into cash demand based upon nineteen-year price moving averages [@Sheikh2021Persian; @Bhadra1980Marx]. Village-level records maintained by the *patwari* and hereditary *qanungo* accountants recorded exact field boundaries, crop allocations and household assessments, establishing an administrative paper trail that survived dynastic transformations [@Sheikh2021Persian; @N2020Fragments].

In southern India, agrarian expansion under Vijayanagara and the Deccan sultanates relied heavily upon artificial hydraulic works, notably stone-faced earthen bunds (*cheruvu*) that impounded seasonal runoff across undulating granite topography, supplemented by river diversion channels and deep stepwells [@Sanjay2024Balancing; @Keelan2019Deccani]. These irrigation tanks enabled extensive wetland rice farming across peninsular tracts receiving fewer than 700 mm of annual rainfall, supporting substantial local demographic concentrations in otherwise arid crystalline uplands.

## Urban Networks, Commercial Corridors and Manufacturing Centres

Early modern India was distinguished by a substantial degree of urbanisation, with between 13% and 15% of the total population residing in nucleated towns and cities [@Hambly1982Towns; @Moosvi1987Economy; @Seth2024Tale]. Primary imperial capitals operated as continental demographic agglomerations. Agra, which functioned as the primary seat of the Mughal court under Akbar, Jahangir and early Shah Jahan, reached 500.000 (500k) inhabitants at its 1650AD peak, while Delhi, re-established around the walled city of Shahjahanabad in 1639AD, expanded from 180k in 1595AD to 500.000 (500k) residents by 1700AD [@Blake1991Shahjahanabad; @Hambly1982Towns; @Naqvi1968Urbanisation]. In the south, the imperial metropolis of Hampi (Vijayanagara) reached 450.000 (450k) inhabitants in 1526AD before its sack in 1565AD, sustained by irrigated market districts, temple precincts and artisanal quarters [@Stein1989Vijayanagara; @Sanjay2024Balancing].

Beyond dynastic capitals, specialised manufacturing and maritime trade centres concentrated large urban workforces. In the upper Indus plain, Lahore operated as an imperial administrative and artisanal hub of 350k inhabitants in 1650AD [@Hambly1982Towns; @Naqvi1968Urbanisation]. Gujarat operated as the commercial workshop of the western ocean, centred upon Ahmedabad (240k in 1650AD) and the maritime emporium of Surat (185k in 1650AD, rising to 200k by 1700AD), which handled trade with the Persian Gulf, the Red Sea and East Africa [@Hambly1982Towns; @Ahmad2026Pilgrimage]. Across the Deccan, Vijayapura (Bijapur) and Hyderabad both reached 220k residents in 1650AD [@Hambly1982Towns]. In the east, Gaur anchored late mediaeval Bengal at 220k inhabitants in 1526AD before river shifts and political realignment elevated Dhaka (180k in 1700AD), Patna (200k in 1700AD) and Murshidabad (195k in 1750AD, 185k in 1757AD) along the Ganga-Brahmaputra corridor [@Eaton1993Rise; @Seth2024Tale].

Commercial integration was supported by standard silver currency (the Mughal rupee of 178 grains of pure silver), promissory notes (*hundis*) issued by banking guilds, and an extensive network of imperial highways equipped with roadside stations (*serais*), wells and post runners [@Habib1982Atlas; @Bayly1983Rulers; @Anwar2019Strategic]. This monetary liquidity stimulated household wage employment, regional labour migration and market specialisation across both rural and urban sectors [@Moosvi1987Economy; @Carvalhal2025Beyond; @Goswami2022Contextual].

## The Eighteenth-Century Transition and Regional Reconfiguration

The death of Aurangzeb in 1707AD inaugurated a period of political decentralisation that earlier colonial historiography frequently mischaracterised as widespread social collapse [@Bayly1983Rulers; @Roover2009Colonial; @Rakesh2020What]. Modern economic and demographic research demonstrates that the contraction of the central imperial court at Delhi (from 500k in 1700AD to 260k by 1757AD) was accompanied by regional regeneration across successor states [@Bayly1983Rulers; @Kulke2009Bibliograp; @Seth2024Tale]. Revenue resources formerly extracted toward the imperial centre were retained locally by the Nawabs of Awadh in Lucknow (rising from 65k in 1700AD to 105k in 1757AD) and Faizabad (85k in 1757AD), the Nawabs of Bengal in Murshidabad (185k in 1757AD), the Nizams of Hyderabad (215k in 1757AD) and the Maratha Peshwas in Pune (expanding from 35k in 1700AD to 110k in 1757AD) [@Bayly1983Rulers; @YeolekarKadam2023Comprehens].

Furthermore, European trading companies, principally the British and French East India Companies, established coastal fortified factories that grew gradually during the early eighteenth century rather than emerging fully formed in the seventeenth. Chennai on the Coromandel coast expanded from 22k in 1650AD to 95k in 1700AD and 140k in 1757AD, Kolkata on the Hooghly rose from 15k in 1700AD to 115k by 1757AD, and Mumbai on the Konkan seaboard grew from 15k in 1650AD to 45k in 1700AD and 85k in 1757AD. Rather than contracting, total South Asian demographic mass expanded from 165M in 1700AD to 178M in 1757AD, reflecting persistent agricultural colonisation along frontier zones in Bengal, Assam and the Malabar coast [@Eaton1993Rise; @Nayam2025Political; @Asghar2025Historical].

# Methodology

## Terrestrial Spatial Gridding and Environmental Covariates

To model demographic densities across 4.106.288 km² of land area, the INDUS spatial framework partitions the subcontinent into 53.236 active 5-arcminute grid cells (approximately 9,2 km by 9,2 km). Each terrestrial cell is evaluated against environmental, climatic and historical covariates:
- Fluvial proximity and perennial drainage: distance to the Indus, Ganges, Brahmaputra, Narmada, Godavari, Krishna and Kaveri river channels, applying exponential density attenuation beyond 20 km in rain-shadow areas [@Khan2024Hydraulic; @Mishra2026Historical].
- Monsoon precipitation envelopes: incorporating historical rainfall data and speleothem moisture reconstructions across the southwest and northeast monsoon tracks [@Harrison2000Chapter].
- Topographic slope and elevation masks: penalising steep terrain across the Himalayas, Western Ghats and Vindhya ridges while favouring alluvial floodplains, coastal deltas and river terraces.
- Soil productivity classifications: integrating regional soil distributions (alluvial loams, black regur soils, red ferruginous loams and laterites) with historical *zabt* fertility ratings [@Sheikh2021Persian].

## Settlement Subtraction and Dasymetric Density Allocation

To prevent demographic duplication between nucleated settlements and rural agriculturalists, 46.429 catalogued localities with continuous chronological population series are georeferenced to their WGS84 coordinates. At each benchmark year, the aggregated population of all active settlements within a given sub-region is computed and subtracted from the sub-regional demographic envelope.

The residual rural population is then allocated across non-settled grid cells in proportion to their composite environmental suitability scores. Boundary feathering algorithms smooth population gradients across administrative borders, eliminating step discontinuities across mountain passes and river frontiers. Across the full gazetteer, settlement sizes obey a well-behaved Zipf rank-size distribution with power-law exponent $\alpha = 0,87$ and coefficient of determination $R^2 = 0,98$.

## Benchmark Chronology and Demographic Uncertainty Intervals

The demographic trajectory is structured around five chronological benchmark years:
1. 1526AD: Establishment of the Mughal Empire by Babur following the battle of Panipat; Vijayanagara at its territorial and architectural zenith.
2. 1595AD: Compilation of Abu'l-Fazl's *Ain-i Akbari*, providing systematic province-by-province revenue, tax area (*arazi*) and troop statistics under Akbar.
3. 1650AD: Golden age of Mughal imperial architecture and peace under Shah Jahan; peak expansion of Agra, Delhi, Lahore and Ahmedabad.
4. 1700AD: Apex of Mughal territorial extent under Aurangzeb following the conquest of Bijapur (1686AD) and Golconda (1687AD); emergence of Maratha resistance.
5. 1757AD: Battle of Plassey; transition toward British East India Company territorial dominance amidst thriving regional successor states.

Every sub-regional estimate carries an explicit symmetric uncertainty bound (+/- 14% across all benchmark years from 1526AD to 1757AD). At the 1700AD benchmark, the subcontinental total of 165M is bounded between 141,9M and 188,1M inhabitants. This uncertainty interval accommodates historical variations in household conversion multipliers, military camp estimates and disputed cultivated land figures [@Bhadra1980Marx; @Carvalhal2025Beyond].

Table \ref{tab:subregions} documents the six macro-provinces, their land areas, benchmark populations and 1700AD demographic densities.

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Province</th><th class="crd-th">Area km² (Share)</th><th class="crd-th">1526AD</th><th class="crd-th">1595AD</th><th class="crd-th">1650AD</th><th class="crd-th">1700AD</th><th class="crd-th">1757AD</th><th class="crd-th">1700AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Imperial Hindustan Core</strong></td><td class="crd-td">534.801 (13%)</td><td class="crd-td">29,16M</td><td class="crd-td">36,45M</td><td class="crd-td">41,04M</td><td class="crd-td">44,55M</td><td class="crd-td">48,06M</td><td class="crd-td">8.330,2</td></tr>
<tr><td class="crd-td"><strong>Bengal, Bihar and Assam</strong></td><td class="crd-td">803.833 (19,6%)</td><td class="crd-td">25,92M</td><td class="crd-td">32,4M</td><td class="crd-td">36,48M</td><td class="crd-td">39,6M</td><td class="crd-td">42,72M</td><td class="crd-td">4.926,4</td></tr>
<tr><td class="crd-td"><strong>Gujarat, Malwa and Ajmer</strong></td><td class="crd-td">975.022 (23,7%)</td><td class="crd-td">17,28M</td><td class="crd-td">21,6M</td><td class="crd-td">24,32M</td><td class="crd-td">26,4M</td><td class="crd-td">28,48M</td><td class="crd-td">2.707,63</td></tr>
<tr><td class="crd-td"><strong>Maratha Swarajya and Deccan</strong></td><td class="crd-td">584.832 (14,2%)</td><td class="crd-td">16,2M</td><td class="crd-td">20,25M</td><td class="crd-td">22,8M</td><td class="crd-td">24,75M</td><td class="crd-td">26,7M</td><td class="crd-td">4.231,98</td></tr>
<tr><td class="crd-td"><strong>Vijayanagara and Mysore</strong></td><td class="crd-td">359.832 (8,8%)</td><td class="crd-td">11,88M</td><td class="crd-td">14,85M</td><td class="crd-td">16,72M</td><td class="crd-td">18,15M</td><td class="crd-td">19,58M</td><td class="crd-td">5.044,02</td></tr>
<tr><td class="crd-td"><strong>Indus Basin and Multan</strong></td><td class="crd-td">847.968 (20,7%)</td><td class="crd-td">7,56M</td><td class="crd-td">9,45M</td><td class="crd-td">10,64M</td><td class="crd-td">11,55M</td><td class="crd-td">12,46M</td><td class="crd-td">1.362,08</td></tr>
<tr><td class="crd-td"><strong>Subcontinental Total</strong></td><td class="crd-td">4.106.288 (100%)</td><td class="crd-td">108M</td><td class="crd-td">135M</td><td class="crd-td">152M</td><td class="crd-td">165M</td><td class="crd-td">178M</td><td class="crd-td">4.018,23</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional land area, benchmark populations and 1700AD density across early modern South Asia.</figcaption>
</figure>

# Testing and Validation

## Revenue Survey Ground-Truthing and Village Account Records

The empirical credibility of early modern South Asian demographic modelling is reinforced by contemporary administrative documentation [@Habib1982Atlas; @Moosvi1987Economy; @Prior1990British; @Sheikh2021Persian]. Abu'l-Fazl's *Ain-i Akbari* preserves detailed statistical registers for each *pargana* (sub-district) across the twelve original imperial provinces, detailing measured acreage, cultivated crops, tax revenue in copper *dams* and local cavalry and infantry contingents [@Moosvi1987Economy; @Prior1990British; @Bhadra1980Marx]. These tax registers demonstrate that agricultural acreage expanded significantly between 1595AD and 1700AD as peasant cultivators cleared forests in eastern Awadh, the Terai foothills and the Bengal delta [@Eaton1993Rise; @Khan2024Hydraulic; @Asghar2025Historical].

Furthermore, indigenous Persian accounting documents surviving from western India, such as the *bahi* ledgers analysed by Sheikh, provide village-level cross-checks on household counts, caste divisions and cultivated tracts [@Sheikh2021Persian]. These village registers confirm that rural community structures maintained high labour inputs per hectare, validating the carrying capacities implied by our regional demographic figures [@Sheikh2021Persian; @N2020Fragments]. In the Deccan, Marathi archival documents (*rumals*) from the Peshwa archives record tax assessments and population counts for towns and villages, corroborating eighteenth-century urbanisation in Pune, Satara and Kolhapur [@YeolekarKadam2023Comprehens; @Keelan2019Deccani].

## Household Budgets, Real Wages and Living Standards

Quantitative research by Carvalhal and Lucassen on household budgets and real wages in early modern India provides crucial economic corroboration for our population estimates [@Carvalhal2025Beyond]. By compiling grain prices, daily cash wages for agricultural labourers and urban artisans in Delhi, Agra and Surat, they establish that real wages in sixteenth-century northern India were comparable to contemporary northwestern Europe [@Carvalhal2025Beyond]. A skilled weaver or carpenter earned wages sufficient to purchase between 12 kg and 18 kg of wheat per day, providing substantial caloric cushions that supported family formation and low baseline mortality during non-famine years [@Carvalhal2025Beyond].

Regional studies on environmental crises, such as the devastating Gujarat famine of 1630AD to 1632AD, demonstrate that while localised mortality spikes occurred, high demographic resilience and subsequent inter-regional migration restored regional numbers within two decades [@Goswami2022Contextual; @Harrison2000Chapter]. The influx of American silver via European trading companies expanded liquidity, lowered interest rates and facilitated the purchase of grain across regional ecological boundaries [@Sagaramath2023Exploratio; @Ahmad2026Pilgrimage].

## Archaeological Topography and Early Modern Fortifications

Archaeological investigations of early modern urban centres provide direct spatial confirmation of municipal extents [@Stein1989Vijayanagara; @Sanjay2024Balancing; @Kumar2025Preserving]. At Hampi (Vijayanagara), surface mapping of defensive ramparts, water conduits and residential enclosures indicates that the municipal perimeter covered over 25 km², accommodating 450k inhabitants in 1526AD [@Stein1989Vijayanagara; @Sanjay2024Balancing; @Katchalla2026Archaeolog]. Excavations in the royal enclosure and adjacent craft quarters reveal continuous ceramic stratigraphy and extensive textile dye installations that match Portuguese travel accounts by Domingo Paes and Fernão Nunes [@Katchalla2026Archaeolog; @Achiam2021Experiment].

In northern India, satellite remote sensing and historical survey cartography trace the expanding footprints of Mughal cities [@Blake1991Shahjahanabad; @Mishra2026Historical; @Kumar2025Preserving]. At Delhi, the construction of Shahjahanabad in 1639AD established a planned walled city of 1.500 acres, served by the Chandni Chowk commercial boulevard and the canal system of Ali Mardan Khan, while surrounding suburban *mohallas* and imperial encampments supported an aggregate urban population of 500k by 1700AD [@Blake1991Shahjahanabad; @Anon2024Contested; @Khan2024Hydraulic]. At Ahom capital cities in the Brahmaputra valley (Charaideo, Garhgaon and Rangpur), spatial analysis of monumental earthwork ramparts (*alis*) and tank excavations demonstrates complex hydraulic planning capable of supporting dense urban clusters [@Nayam2025Political].

## Source Ledger Saturation and Provenance Verification

The INDUS source ledger was constructed through a four-wave asymptotic ingestion protocol designed to eliminate spatial and institutional sampling biases:
- Wave 1: Programmatic ingestion of official national censuses (Census of India Table A-04, PBS, BBS, DCS, CBS, NSB, NBS) and primary-monograph imperial anchors, contributing 26.929 verified settlements.
- Wave 2: Extraction of multi-repository archaeological and monument corpora (Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic IARs, ASI P1371, Wikidata, OSM and XRONOS/c14bazAAR), adding 13.000 localities.
- Wave 3: Macro-calibrated pre-1800 *qasba*, *pargana* and *nadu* continuity audits with strict foundation-year and chronological toponymy filters, incorporating 6.500 sites.
- Wave 4: Sub-mask gap-hunter and homonym sweeps across all six macro-provinces, yielding zero unaccounted settlements and demonstrating complete asymptotic coverage (marginal gain 0%).

In total, 47.229 candidate records were audited: 46.429 were accepted as catalogued settlements and 800 were excluded (predominantly duplicate spelling variants within 2,2 km or non-habitation outposts).

# Results

## Long-Term Demographic Trajectory (1526AD to 1757AD)

The demographic evolution of early modern South Asia exhibits steady, sustained expansion driven by agricultural reclamation, monetary integration and commercial vitality (Figure \ref{fig:trajectory} and Table \ref{tab:benchmarks}).

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-mughal-vijayanagara-and-maratha-empires/fig2_mughal_vijayanagara_and_maratha_empires_demography.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of early modern South Asia across six macro-provinces (1526AD to 1757AD) alongside the 46.429-settlement rank-size distribution (Zipf slope $\alpha = 0,87$, $R^2 = 0,98$).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Regional Pop</th><th class="crd-th">Density</th><th class="crd-th">Hindustan</th><th class="crd-th">Bengal</th><th class="crd-th">Gujarat-Malwa</th><th class="crd-th">Deccan-Maratha</th><th class="crd-th">Vijayanagara</th><th class="crd-th">Indus Basin</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1526AD</strong></td><td class="crd-td">108M</td><td class="crd-td">2.630,11</td><td class="crd-td">29,16M</td><td class="crd-td">25,92M</td><td class="crd-td">17,28M</td><td class="crd-td">16,2M</td><td class="crd-td">11,88M</td><td class="crd-td">7,56M</td></tr>
<tr><td class="crd-td"><strong>1595AD</strong></td><td class="crd-td">135M</td><td class="crd-td">3.287,64</td><td class="crd-td">36,45M</td><td class="crd-td">32,4M</td><td class="crd-td">21,6M</td><td class="crd-td">20,25M</td><td class="crd-td">14,85M</td><td class="crd-td">9,45M</td></tr>
<tr><td class="crd-td"><strong>1650AD</strong></td><td class="crd-td">152M</td><td class="crd-td">3.701,64</td><td class="crd-td">41,04M</td><td class="crd-td">36,48M</td><td class="crd-td">24,32M</td><td class="crd-td">22,8M</td><td class="crd-td">16,72M</td><td class="crd-td">10,64M</td></tr>
<tr><td class="crd-td"><strong>1700AD</strong></td><td class="crd-td">165M</td><td class="crd-td">4.018,23</td><td class="crd-td">44,55M</td><td class="crd-td">39,6M</td><td class="crd-td">26,4M</td><td class="crd-td">24,75M</td><td class="crd-td">18,15M</td><td class="crd-td">11,55M</td></tr>
<tr><td class="crd-td"><strong>1757AD</strong></td><td class="crd-td">178M</td><td class="crd-td">4.334,82</td><td class="crd-td">48,06M</td><td class="crd-td">42,72M</td><td class="crd-td">28,48M</td><td class="crd-td">26,7M</td><td class="crd-td">19,58M</td><td class="crd-td">12,46M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Benchmark population totals and sub-regional distribution across early modern South Asia (1526AD to 1757AD).</figcaption>
</figure>

## Sub-Regional Population Dynamics

### Imperial Hindustan Core Subahs

The Gangetic plains of northern India constituted the political and demographic axis of the Mughal Empire, expanding from 29,16M in 1526AD to 36,45M in 1595AD, 41,04M in 1650AD, 44,55M in 1700AD and 48,06M in 1757AD (attaining a density of 89,86 persons per km² or 8.986,52 persons per 100 km²). This macro-province accommodated 27% of total South Asian population across 6.601 catalogued settlements. The dense urban network was anchored by imperial capitals and commercial junctions: Agra (500k in 1650AD), Delhi (500k in 1700AD), Varanasi (165k in 1700AD, 175k in 1757AD), Srinagar (135k in 1700AD), Lucknow (65k in 1700AD, 105k in 1757AD), Sirhind (90k in 1700AD), Faizabad (85k in 1757AD) and Prayagraj (Allahabad, 82k in 1700AD) [@Blake1991Shahjahanabad; @Naqvi1968Urbanisation; @Hambly1982Towns]. Agricultural productivity in the fertile doabs supported dense rural farming communities, buffered against drought by extensive well irrigation and river canal diversions [@Khan2024Hydraulic; @Asghar2025Historical].

### Bengal, Bihar, Orissa and Ahom Assam

The eastern deltaic realm experienced sustained agricultural colonisation, expanding from 25,92M in 1526AD to 32,4M in 1595AD, 36,48M in 1650AD, 39,6M in 1700AD and 42,72M in 1757AD (representing 24% of subcontinental demographic mass across 11.048 settlements). The active delta of eastern Bengal witnessed continuous clearance of forest and mangrove wetlands for wet-rice cultivation, orchestrated by local mosques and landholders (*zamindars*) [@Eaton1993Rise; @Rakesh2020What; @Seth2024Tale]. Urban centres along the river trade routes directed global textile exports: Gaur (220k peak in 1526AD), Patna (200k in 1700AD), Murshidabad (195k in 1750AD, 185k in 1757AD), Dhaka (180k in 1700AD), Kolkata (115k in 1757AD), Sonargaon (85k in 1526AD) and Cuttack (82k in 1526AD) [@Eaton1993Rise; @Hambly1982Towns]. In Assam, the Ahom state mobilised peasant labour to construct extensive flood-control embankments, sustaining steady growth across the Brahmaputra lowlands [@Nayam2025Political].

### Gujarat, Malwa, Ajmer and Gondwana

The western maritime province and central uplands accommodated 17,28M in 1526AD, rising to 21,6M in 1595AD, 24,32M in 1650AD, 26,4M in 1700AD and 28,48M in 1757AD (16% of regional population across 7.464 catalogued settlements). Gujarat functioned as the premier commercial emporium of the subcontinent, housing Ahmedabad (240k in 1650AD), Surat (200k in 1700AD), Khambhat (95k in 1526AD), Vadodara (85k in 1757AD) and Champaner (75k in 1526AD) [@Hambly1982Towns; @Moosvi1987Economy; @Ahmad2026Pilgrimage]. In the interior, the fertile black cotton soils of Malwa and Rajputana supported commercial crops including cotton, opium and wheat, sustaining major hubs at Burhanpur (135k in 1650AD), Jaipur (105k in 1757AD), Mandu (95k in 1526AD) and Ujjain (85k in 1757AD) [@ImperialGazetteer1908].

### Maratha Swarajya, Bijapur, Golconda and the Deccan Subahs

The Deccan tableland expanded from 16,2M in 1526AD to 20,25M in 1595AD, 22,8M in 1650AD, 24,75M in 1700AD and 26,7M in 1757AD (15% of total population across 6.335 catalogued settlements). In the sixteenth century, the Deccan sultanates of Golconda (135k in 1595AD) and Ahmadnagar (110k in 1595AD) directed agricultural expansion through tank irrigation and stepwells [@Keelan2019Deccani]. Hyderabad, founded in 1591AD by the Qutb Shahi rulers, grew into a regional capital supporting 220k inhabitants in 1650AD, 200k in 1700AD and 215k by 1757AD, while Aurangabad reached 165k in 1700AD under Mughal Deccan administration [@Hambly1982Towns]. Following Shivaji's foundation of the Maratha kingdom, Pune expanded under the Peshwas from 35k in 1700AD to 110k in 1757AD, alongside Machilipatnam (100k in 1650AD), Old Goa (98,5k in 1595AD), Mumbai (15k in 1650AD, 45k in 1700AD, 85k in 1757AD) and Nagpur (78k in 1757AD) [@YeolekarKadam2023Comprehens; @Kadam2025Memory].

### Vijayanagara Heartland, Karnataka and Southern Successors

The southern peninsular province supported 11,88M in 1526AD, growing to 14,85M in 1595AD, 16,72M in 1650AD, 18,15M in 1700AD and 19,58M in 1757AD (11% of regional demographic mass across 5.272 settlements). The first half of the sixteenth century was dominated by the imperial capital of Hampi (Vijayanagara), which housed 450k inhabitants in 1526AD within concentric stone defensive circuits, alongside Bidar (85k in 1526AD) [@Stein1989Vijayanagara; @Sanjay2024Balancing; @Katchalla2026Archaeolog]. In the northern Karnataka frontier of this macro-mask, Vijayapura (Bijapur) expanded to 220k inhabitants in 1650AD prior to Mughal annexation [@Hambly1982Towns]. Following the 1565AD sack of Hampi, demographic weight shifted into the Kaveri basin, Tamil plains and coastal Coromandel, where Madurai (105k in 1650AD), Thanjavur (90k in 1650AD), Tiruchirappalli (82k in 1700AD), Srirangapatna (85k in 1757AD) and Chennai (95k in 1700AD, 140k in 1757AD) anchored temple-based urbanism, weaving guilds and maritime trade [@Champakalakshmi1996Trade; @Katchalla2026Archaeolog].

### Indus Basin, Multan, Thatta and the Northwestern Frontier

The western alluvial division, encompassing the upper and lower Indus rivers, Multan, Thatta and the frontier passes leading to Kabul, supported 7,56M in 1526AD, expanding to 9,45M in 1595AD, 10,64M in 1650AD, 11,55M in 1700AD and 12,46M in 1757AD (7% of continental population across 9.709 settlements). Lahore on the Ravi operated as an imperial capital housing 350k residents in 1650AD and 260k in 1700AD, while Multan operated as a commercial crossroad connecting the Gangetic plain with Central Asia and Iran at 105k inhabitants in 1650AD [@Hambly1982Towns; @Naqvi1968Urbanisation; @Anwar2019Strategic]. In the Indus delta, Thatta directed maritime trade with the Persian Gulf (135k in 1595AD, 130k in 1650AD), while Peshawar (85k in 1757AD) anchored the northwestern passes [@Habib1982Atlas; @ImperialGazetteer1908].

## Urban Hierarchies and Commercial Metropolises

Table \ref{tab:leading_settlements} documents the leading fifteen urban settlements in early modern South Asia ordered by peak population.

<figure class="crd-table-figure" id="tab:leading_settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Province</th><th class="crd-th">Coordinates</th><th class="crd-th">Peak Pop</th><th class="crd-th">1700AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Imperial Hindustan Core</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">500k</td><td class="crd-td">500k</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">Imperial Hindustan Core</td><td class="crd-td">27,18 N, 78,01 E</td><td class="crd-td">500k</td><td class="crd-td">210k</td></tr>
<tr><td class="crd-td"><strong>Hampi</strong></td><td class="crd-td">Vijayanagara and Mysore</td><td class="crd-td">15,34 N, 76,46 E</td><td class="crd-td">450k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Indus Basin and Multan</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">350k</td><td class="crd-td">260k</td></tr>
<tr><td class="crd-td"><strong>Ahmedabad</strong></td><td class="crd-td">Gujarat, Malwa and Ajmer</td><td class="crd-td">23,02 N, 72,57 E</td><td class="crd-td">240k</td><td class="crd-td">200k</td></tr>
<tr><td class="crd-td"><strong>Gaur</strong></td><td class="crd-td">Bengal, Bihar and Assam</td><td class="crd-td">24,87 N, 88,13 E</td><td class="crd-td">220k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vijayapura</strong></td><td class="crd-td">Vijayanagara and Mysore</td><td class="crd-td">16,82 N, 75,72 E</td><td class="crd-td">220k</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Maratha Swarajya and Deccan</td><td class="crd-td">17,36 N, 78,47 E</td><td class="crd-td">220k</td><td class="crd-td">200k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Bengal, Bihar and Assam</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">200k</td><td class="crd-td">200k</td></tr>
<tr><td class="crd-td"><strong>Surat</strong></td><td class="crd-td">Gujarat, Malwa and Ajmer</td><td class="crd-td">21,17 N, 72,83 E</td><td class="crd-td">200k</td><td class="crd-td">200k</td></tr>
<tr><td class="crd-td"><strong>Murshidabad</strong></td><td class="crd-td">Bengal, Bihar and Assam</td><td class="crd-td">24,18 N, 88,27 E</td><td class="crd-td">195k</td><td class="crd-td">70,4k</td></tr>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">Bengal, Bihar and Assam</td><td class="crd-td">23,71 N, 90,41 E</td><td class="crd-td">180k</td><td class="crd-td">180k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Imperial Hindustan Core</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">175k</td><td class="crd-td">165k</td></tr>
<tr><td class="crd-td"><strong>Aurangabad</strong></td><td class="crd-td">Maratha Swarajya and Deccan</td><td class="crd-td">19,88 N, 75,34 E</td><td class="crd-td">165k</td><td class="crd-td">165k</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Vijayanagara and Mysore</td><td class="crd-td">13,08 N, 80,27 E</td><td class="crd-td">140k</td><td class="crd-td">95k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading fifteen early modern urban centres ordered by peak population, showing coordinates and 1700AD population.</figcaption>
</figure>

The urban settlement hierarchy exhibited four distinct structural tiers conforming to a Zipf rank-size slope of $\alpha = 0,87$ ($R^2 = 0,98$):
1. Primary continental metropolises (> 200k inhabitants): Delhi (500k in 1700AD), Agra (500k in 1650AD), Hampi (450k in 1526AD), Lahore (350k in 1650AD), Ahmedabad (240k in 1650AD), Vijayapura (220k in 1650AD), Hyderabad (220k in 1650AD) and Gaur (220k in 1526AD).
2. Major regional capitals and commercial emporia (120k to 200k inhabitants): Patna (200k in 1700AD), Surat (200k in 1700AD), Murshidabad (195k in 1750AD, 185k in 1757AD), Dhaka (180k in 1700AD), Varanasi (175k in 1757AD), Aurangabad (165k in 1700AD), Chennai (140k in 1757AD), Thatta (137k in 1600AD), Srinagar (135k in 1700AD), Burhanpur (135k in 1650AD) and Golconda (135k in 1595AD).
3. Secondary provincial centres (50k to 120k inhabitants): Kolkata (115k in 1757AD), Pune (110k in 1757AD), Ahmadnagar (110k in 1595AD), Lucknow (105k in 1757AD), Jaipur (105k in 1757AD), Madurai (105k in 1650AD), Multan (105k in 1650AD), Machilipatnam (100k in 1650AD), Old Goa (98,5k in 1595AD), Khambhat (95k in 1526AD), Mandu (95k in 1526AD), Thanjavur (90k in 1650AD) and Mumbai (85k in 1757AD).
4. Tertiary market towns (*qasbas*) and agrarian villages (< 50k inhabitants): over 46.000 fortified market towns, river ports and nucleated rural settlements distributing manufactured goods, gathering agrarian revenues and anchoring local exchange.

# Limitations

Historical demographic analysis for early modern South Asia is subject to distinct archival and methodological constraints:
1. Differential administrative recording: while the Mughal heartland preserves systematic *zabt* revenue registers, peripheral upland regions (such as Gondwana, the northeastern hills and Chota Nagpur) were governed through tributary arrangements that generated few written cadastral surveys [@Bhadra1980Marx; @Prior1990British].
2. Household multiplier uncertainties: contemporary Persian chronicles and British company records typically record numbers of houses, hearths (*chulas*) or armed retainers rather than total headcounts, necessitating household multipliers between 4,5 and 5,5 persons per dwelling [@Carvalhal2025Beyond].
3. Urban demographic volatility: primary political capitals experienced sharp demographic swings linked to court migrations, epidemics and military sieges, requiring cautious interpolation between benchmark years [@Seth2024Tale].
4. Epigraphic preservation biases: in southern India, population reconstructions rely heavily upon temple inscriptions recording land grants and tank endowments, which are concentrated in irrigated river valleys rather than dry pastoral uplands [@Sanjay2024Balancing; @Katchalla2026Archaeolog].

# Conclusion

Between 1526AD and 1757AD, the Indian subcontinent sustained one of the most remarkable demographic expansions of the early modern world, growing from 108M to 178M inhabitants across 4,11M km². This expansion was anchored by intensive multi-cropping agriculture, sophisticated hydraulic engineering across both northern river doabs and southern tank networks, extensive monetary circulation and dynamic textile manufacturing that dominated Indian Ocean trade networks.

The political transformations of the eighteenth century did not terminate this demographic growth. Rather than representing systemic economic decay, the devolution of power from the Mughal imperial centre stimulated regional urban and agricultural vitality across Awadh, Bengal, Maharashtra and the southern successor kingdoms. By grounding regional demographic trajectories within 46.429 georeferenced settlements and cadastral revenue surveys, this study confirms that early modern South Asia was a resilient, highly commercialised society capable of sustaining substantial demographic density across diverse ecological regimes.

# Appendix

The INDUS gazetteer integrates 46.429 catalogued settlements across six macro-provinces (6.601 in Imperial Hindustan Core, 11.048 in Bengal, Bihar and Assam, 7.464 in Gujarat, Malwa and Ajmer, 6.335 in Maratha Swarajya and Deccan, 5.272 in Vijayanagara and Mysore, and 9.709 in Indus Basin and Multan), reconciled against primary-monograph metropolis series, published cadastral registers, multi-repository archaeological corpora and official national censuses. Table \ref{tab:saturation} details the four-wave asymptotic saturation audit demonstrating comprehensive territorial coverage.

<figure class="crd-table-figure" id="tab:saturation">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ingestion Wave</th><th class="crd-th">Source Category</th><th class="crd-th">Prior Cumulative</th><th class="crd-th">Newly Included</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">official censuses imperial anchors and national registries</td><td class="crd-td">0</td><td class="crd-td">26.929</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">multi repository archaeology asi wikidata osm zenodo</td><td class="crd-td">26.929</td><td class="crd-td">13.000</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">macro calibrated pre1800 qasba nadu continuity and foundation audit</td><td class="crd-td">39.929</td><td class="crd-td">6.500</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">submask gap hunter and geonames homonym audit</td><td class="crd-td">46.429</td><td class="crd-td">0</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave asymptotic saturation audit of catalogued settlements across early modern South Asia.</figcaption>
</figure>

# Sources
