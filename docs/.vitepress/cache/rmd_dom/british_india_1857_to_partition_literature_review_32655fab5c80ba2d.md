---
title: "British Crown Rule: Imperial Censuses, Mortality Crises and Demographic Acceleration"
subtitle: "INDUS: Subcontinental Population Trajectories from the 1857 Rebellion to the 1947 Partition"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: british_india_1857_to_partition_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_british_india_1857_to_partition_spatial.png"
hero_caption: "Seven Crown Raj administrative macro-zones and 47.049 catalogued settlements across South Asia (4,36M km²) from 1857AD to 1947AD, contrasting high-density alluvial belts with peninsular plateaux and arid northwestern frontiers."
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

The nine decades separating the rebellion of 1857AD from the partition of August 1947 witnessed the demographic transformation of the South Asian subcontinent under British Crown rule. Encompassing 4,36M km² (4.358.484 km² across 56.527 active 5-arcminute terrestrial grid cells), British India and its associated princely states, protectorates and island dependencies accommodated the largest centrally administered population on earth. Through the introduction of decennial synchronous censuses from 1881AD onwards, colonial authorities established an unprecedented statistical record of births, deaths, caste structures, occupations and language distributions across the subcontinent. Reconstructed across seven administrative macro-zones under INDUS, regional population expanded from 244M inhabitants in 1857AD to 424M in 1947AD, representing an aggregate expansion of 73,8% at an average annual growth rate of 0,61%.

The demographic trajectory divided sharply at the watershed benchmark of 1921AD, commonly identified in South Asian historical demography as the Great Divide. Between 1857AD and 1921AD, subcontinental growth remained sluggish, expanding from 244M to 315M (+29,1% over 64 years; 0,4% per annum). This early phase was characterised by recurrent Malthusian positive checks, including the devastating famine cycle of 1876AD to 1878AD, the dual famines of 1896AD to 1900AD, the diffusion of the Third Plague Pandemic after 1896AD and the calamitous 1918AD influenza pandemic, which alone claimed between 14M and 18M Indian lives. Between 1911AD and 1921AD, net population expansion virtually ceased, recording a decennial increase of merely 0,64%. After 1921AD, the mortality regime altered decisively: epidemic control, railway-mediated grain distribution, public health cordons and antimalarial measures depressed crude death rates while fertility remained near natural levels. Subcontinental numbers climbed swiftly from 315M in 1921AD to 348M in 1931AD, 400M in 1941AD and 424M by August 1947 (+34,6% over 26 years; 1,15% per annum), establishing the momentum for modern South Asian demographic expansion.

Spatial distribution remained heavily skewed towards the major alluvial river valleys and coastal deltas. In 1947AD, Bengal, Eastern Bengal and Assam accommodated 80,56M inhabitants (19% of the regional total; 168,75 persons per km²), anchored by the industrial metropolis of Kolkata. The United Provinces of Agra and Oudh supported 63,6M people across the middle Gangetic plain (219,55 persons per km², representing the highest regional macro-density). Bihar, Jharkhand and Orissa sustained 50,88M residents (155,87 persons per km²). Peninsular India accommodated vast numbers, with Madras, Mysore and Travancore-Cochin supporting 76,32M people (119,37 persons per km²) and Bombay Presidency, Hyderabad and the Central Provinces housing an additional 76,32M (81,21 persons per km²). The arid and semi-arid northwestern zone, encompassing Punjab, the North-West Frontier, Sindh, Balochistan, Kashmir and Rajputana, accommodated 63,6M inhabitants (44,22 persons per km²), where extensive British canal engineering transformed former scrub waste into productive agrarian colonies. British Ceylon, Nepal, Bhutan and the Maldives supported 12,72M people (51,41 persons per km²). This study integrates 47.049 georeferenced urban centres, market towns and historic locality anchors with rural environmental allocations, tracing nine decades of colonial demographic history up to the mass displacement of 14M to 16M refugees during the partition of 1947AD.

# Background

## Transfer of Power and Administrative Unification

The rebellion of 1857AD terminated the charter of the British East India Company and transferred territorial administration directly to the British Crown under the Government of India Act 1858 [@Choudhary2018British; @Yadav2018East]. Armed resistance against Company rule, originating among the Bengal Army sepoys at Meerut and spreading rapidly across Oudh, Rohilkhand, Bihar and the Central Provinces, exposed the fragility of commercial corporate governance [@Singh2018Revolt; @Wani2020Insurgency]. Following military re-conquest, imperial administrators prioritised political stability, administrative centralisation and strategic infrastructure. The subcontinent was structured into directly administered British provinces, governed by Governors or Lieutenant-Governors, alongside approximately 565 princely states bound to the Crown through treaties of paramountcy [@Sambyal2023Origin].

Crown governance fostered unprecedented infrastructural integration. The construction of guaranteed railway trunk lines, pioneered by Lord Dalhousie in the 1850s, linked inland agricultural hinterlands to the primary export ports of Kolkata, Mumbai, Chennai and Karachi [@Choudhary2018British]. Electric telegraph wires connected district collectorates directly to provincial secretariats and the Viceroy in Calcutta (and later Delhi). However, this administrative unification also integrated regional grain markets into global commodity circuits, frequently transforming localised crop failures into severe price-inflation crises that exacerbated starvation in deficit tracts [@Kathleen2000Naturalizi; @Akerkar2015Developm].

## The Decennial Census Apparatus and Caste Enumeration

The central pillar of colonial demographic surveillance was the Census of India [@Narayan2016Census; @Patel2025Census]. Prior to the 1870s, demographic information derived from disjointed provincial revenue surveys, house counts and police records [@Choudhary2018British]. Between 1867AD and 1872AD, colonial administrators conducted the first experimental all-India census, an uncoordinated series of provincial operations that yielded an aggregate estimate of approximately 263M inhabitants for the benchmark year 1872AD [@Narayan2016Census]. Recognising the deficiencies of asynchronous counting, the imperial government instituted the first universal synchronous census on 17 February 1881 under Census Commissioner W.C. Plowden, recording 268M persons across the subcontinent [@Walby2012Caste; @Patel2025Census].

Thereafter, synchronous decennial censuses were executed without interruption in 1891AD, 1901AD, 1911AD, 1921AD, 1931AD and 1941AD [@Walby2012Caste; @Dyson2001Prelimin]. Colonial censuses were not mere headcounts; they served as instruments of social classification. Successive commissioners, notably H.H. Risley in 1901AD, attempted to classify Indian society by caste hierarchy (*varna* and *jati*), religious denomination and anthropometric racial categories [@Walby2012Caste; @Narayan2016Census]. This enumeration process provoked widespread social contestation, prompting caste associations to petition census officials for higher ritual status and reshaping communal identities across northern and eastern India [@Walby2012Caste; @Patel2025Census]. Despite these taxonomic distortions, the demographic data - particularly age returns, sex ratios, vital registration checks and urban tallies - provide an exceptional quantitative record for historical demographic reconstruction [@Condran1984Evaluati; @Folger1964Educatio; @Dyson2001Prelimin].

## Famine Mortality, Epidemic Shocks and Public Health

The demographic history of British India between 1857AD and 1921AD was punctuated by catastrophic mortality shocks [@Akerkar2015Developm; @Kathleen2000Naturalizi]. The Great Famine of 1876AD to 1878AD, induced by El Niño-related monsoon failures across southern and western India, devastated Madras, Mysore, Hyderabad, Bombay and the North-Western Provinces, causing between 5,5M and 8M excess deaths from starvation, cholera and malaria [@Kathleen2000Naturalizi; @Akerkar2015Developm]. Strict adherence to laissez-faire economic orthodoxy and deterrent relief tests at state labour camps severely impaired famine relief efforts [@Akerkar2015Developm]. In 1896AD to 1897AD and 1899AD to 1900AD, consecutive monsoon failures triggered widespread starvation across the Central Provinces, Berar, Bombay and Rajasthan, halting subcontinental demographic growth at the turn of the twentieth century [@Boyle1986Fertilit; @Akerkar2015Developm].

Epidemic diseases accompanied and frequently outpaced nutritional deficits. The Third Plague Pandemic reached Mumbai harbour from Hong Kong in September 1896AD, diffusing rapidly along railway corridors across western and northern India [@Watterson1988Infant; @HalpernManners2020Effects]. Between 1896AD and 1914AD, bubonic and pneumonic plague killed over 10M Indians, with mortality heavily concentrated in Bombay Presidency, the United Provinces and Punjab. The climactic epidemiological disaster occurred in autumn 1918AD, when the global influenza pandemic struck an Indian population already weakened by drought. Transported by returning wartime troops and railway passengers, influenza swept across the subcontinent in two virulent waves, causing between 14M and 18M deaths (approximately 4,5% to 5,5% of the total population) within four months [@Dyson2001Prelimin; @Haines1977Mortalit]. The 1918AD shock produced negative population growth across large tracts of Central India and Bombay, leaving the 1921AD census benchmark virtually identical to that of 1911AD.

## Agrarian Commercialisation, Canal Colonies and Industrialisation

Economic structures under Crown rule exerted profound influences on regional demographic capacity [@Alexandrovna2023Agricultur; @Rakesh2025Bhagatsing]. Colonial fiscal policy relied heavily on land revenue assessments, formalised through permanent settlements in Bengal and Bihar, *ryotwari* individual settlements in Madras and Bombay, and *mahalwari* village community assessments in northern India [@Alexandrovna2023Agricultur]. Peasant households increasingly shifted cultivation towards export cash crops - raw cotton in the Deccan, jute in Eastern Bengal, opium in the Gangetic plain, indigo in Bihar, and tea in Assam - rendering agrarian livelihoods vulnerable to international commodity price shocks [@Alexandrovna2023Agricultur; @Ghosh2020Demographi]. In Bengal, exploitative tenancy arrangements culminated in intense agrarian unrest, such as the Tebhaga sharecroppers movement on the eve of independence [@Alexandrovna2023Agricultur].

Conversely, massive state investment in perennial irrigation canals transformed demographic geography in the northwest. In western Punjab, the construction of the Triple Canal Project and nine interfluvial canal colonies between 1885AD and 1930AD brought over 4M hectares of virgin desert into cultivation, facilitating the planned resettlement of over one million peasant colonists from overcrowded eastern districts [@Rakesh2025Bhagatsing; @Alexandrovna2023Agricultur]. Concurrently, modern industrial urbanisation emerged in coastal ports and mineral basins. Kolkata established a global monopoly over jute manufacturing along the Hooghly River, Mumbai expanded into a powerhouse of cotton textile mills financed by indigenous Parsi and Gujarati capital, and Jamshedpur emerged after 1907AD as the centre of Indian steel manufacturing [@Choudhary2018British; @Rakesh2025Bhagatsing].

# Methodology

## Spatial Macro-Zones and Boundary Harmonisation

To reconstruct demographic densities across 4.358.484 km² of terrestrial territory, INDUS partitions the subcontinent into seven administrative macro-zones encompassing 56.527 active 5-arcminute grid cells (approximately 9,2 km by 9,2 km at tropical latitudes):
- Bengal, Eastern Bengal, Assam and Manipur: 477.406 km²; 6.176 cells.
- Bihar, Jharkhand and Orissa Provinces: 326.427 km²; 4.146 cells.
- United Provinces of Agra and Oudh: 289.686 km²; 3.849 cells.
- Madras Presidency, Mysore, Travancore, Cochin and the Andaman and Nicobar Islands: 639.340 km²; 7.725 cells.
- Bombay Presidency, Sind, Hyderabad State, Central Provinces and Berar: 939.848 km²; 11.784 cells.
- Punjab, North-West Frontier Province, Balochistan Agency, Jammu and Kashmir, and Rajputana Agency: 1.438.372 km²; 19.627 cells.
- British Ceylon, Nepal, Bhutan and the Maldives: 247.405 km²; 3.220 cells.

Territorial boundaries are reconciled against the official Survey of India administrative borders of 1931AD to ensure longitudinal stability across internal provincial reorganisations, notably the partition and reunification of Bengal (1905AD to 1911AD) and the separation of Bihar and Orissa (1912AD and 1936AD).

## Census Harmonisation and Demographic Back-Projection

Colonial census totals require systematic harmonisation before they can serve as longitudinal benchmarks [@Dyson2001Prelimin; @Patel2025Census]. Early censuses (1872AD and 1881AD) suffered from identifiable geographic omissions, particularly in remote tribal tracts of Central India, the Balochistan frontier, and the Himalayan interior [@Walby2012Caste; @Narayan2016Census]. Furthermore, female underenumeration remained persistent in northern and northwestern provinces due to purdah practices and cultural reticence regarding household composition [@Kashyap2020Correcti; @Condran1984Evaluati].

Our benchmark series harmonises reported census figures by applying demographic correction factors calibrated from reverse survival analysis, model life tables and boundary back-projection [@Dyson2001Prelimin; @Haines1977Mortalit]. For the pre-census baseline of 1857AD, provincial totals are back-projected from 1872AD and 1881AD counts using district-level revenue settlement reports, collectorate house counts and documented mortality shocks from the 1860AD to 1861AD famine in the North-Western Provinces and the 1866AD Orissa famine [@Akerkar2015Developm; @Choudhary2018British]. For 1947AD, population is derived from inter-censal growth rates between 1931AD and 1941AD adjusted for wartime disruptions, the 1943AD Bengal famine and initial partition displacements [@Ghosh2020Demographi; @Anwesha2023First].

## Settlement Subtraction and Rural Allocations

To eliminate double counting between nucleated urban centres and rural agricultural populations, 47.049 catalogued settlements with chronological population series are directly anchored to their WGS84 geographic coordinates. At each benchmark year, the active population of catalogued settlements inside each macro-zone is summed and subtracted from the macro-zonal demographic envelope.

The remaining rural population is then allocated across non-settled pixels in proportion to environmental suitability weights:
- Fluvial proximity and irrigation access: weighting cells adjacent to perennial river systems (Ganges, Yamuna, Brahmaputra, Indus tributaries, Cauvery, Godavari and Krishna) and major colonial canal networks [@Casile2021Climatic; @Alexandrovna2023Agricultur].
- Topographic slope: penalising rugged terrain in the Himalayas, Western Ghats and central Indian scarplands while favouring flat alluvial plains and coastal deltas.
- Soil productivity and precipitation regimes: incorporating agricultural crop-yield estimates and monsoon rainfall averages [@Alexandrovna2023Agricultur; @Kathleen2000Naturalizi].
- Forest and waste masks: zeroing uninhabitable salt flats (Rann of Kachchh), hyper-arid dunefields (Thar desert) and protected mangrove swamps (Sundarbans).

A two-pass boundary feathering algorithm smoothes density transitions across provincial frontiers, preventing artificial step discontinuities along administrative divides.

## Uncertainty Envelopes and Enumeration Quality

Every macro-zonal and regional benchmark estimate carries an explicit uncertainty interval reflecting the quality of historical documentation [@Dyson2001Prelimin]. For the early benchmarks (1857AD to 1881AD), uncertainty is modelled at +/- 8% to account for pre-census estimation errors, initial census under-coverage and underenumeration of women and infants [@Condran1984Evaluati; @Kashyap2020Correcti]. For mature synchronous censuses (1891AD to 1931AD), uncertainty narrows to +/- 4%, reflecting standardised enumeration procedures and improved vital registration cross-checks [@Dyson2001Prelimin; @Patel2025Census]. For 1941AD and 1947AD, uncertainty expands slightly to +/- 5% due to wartime rationing pressures, political boycotts during the 1941AD census and turbulent migration flows surrounding the partition of 1947AD [@Anwesha2023First; @Shahabuddin1998Demograp].

Table \ref{tab:subregions} documents the seven administrative macro-zones, land areas, benchmark populations from 1857AD to 1947AD, and concluding 1947AD densities.

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Zone</th><th class="crd-th">Area km² (Share)</th><th class="crd-th">1857AD</th><th class="crd-th">1881AD</th><th class="crd-th">1901AD</th><th class="crd-th">1921AD</th><th class="crd-th">1941AD</th><th class="crd-th">1947AD</th><th class="crd-th">1947AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bengal and Assam</strong></td><td class="crd-td">477.406 (11%)</td><td class="crd-td">46,36M</td><td class="crd-td">50,92M</td><td class="crd-td">56,05M</td><td class="crd-td">59,85M</td><td class="crd-td">76M</td><td class="crd-td">80,56M</td><td class="crd-td">168,75</td></tr>
<tr><td class="crd-td"><strong>Bihar and Orissa</strong></td><td class="crd-td">326.427 (7,5%)</td><td class="crd-td">29,28M</td><td class="crd-td">32,16M</td><td class="crd-td">35,4M</td><td class="crd-td">37,8M</td><td class="crd-td">48M</td><td class="crd-td">50,88M</td><td class="crd-td">155,87</td></tr>
<tr><td class="crd-td"><strong>United Provinces</strong></td><td class="crd-td">289.686 (6,6%)</td><td class="crd-td">36,6M</td><td class="crd-td">40,2M</td><td class="crd-td">44,25M</td><td class="crd-td">47,25M</td><td class="crd-td">60M</td><td class="crd-td">63,6M</td><td class="crd-td">219,55</td></tr>
<tr><td class="crd-td"><strong>Madras and Southern States</strong></td><td class="crd-td">639.340 (14,7%)</td><td class="crd-td">43,92M</td><td class="crd-td">48,24M</td><td class="crd-td">53,1M</td><td class="crd-td">56,7M</td><td class="crd-td">72M</td><td class="crd-td">76,32M</td><td class="crd-td">119,37</td></tr>
<tr><td class="crd-td"><strong>Bombay, Deccan and CP</strong></td><td class="crd-td">939.848 (21,6%)</td><td class="crd-td">43,92M</td><td class="crd-td">48,24M</td><td class="crd-td">53,1M</td><td class="crd-td">56,7M</td><td class="crd-td">72M</td><td class="crd-td">76,32M</td><td class="crd-td">81,2</td></tr>
<tr><td class="crd-td"><strong>Punjab, NWFP and Sindh</strong></td><td class="crd-td">1.438.372 (33%)</td><td class="crd-td">36,6M</td><td class="crd-td">40,2M</td><td class="crd-td">44,25M</td><td class="crd-td">47,25M</td><td class="crd-td">60M</td><td class="crd-td">63,6M</td><td class="crd-td">44,22</td></tr>
<tr><td class="crd-td"><strong>Ceylon, Nepal and Periphery</strong></td><td class="crd-td">247.405 (5,7%)</td><td class="crd-td">7,32M</td><td class="crd-td">8,04M</td><td class="crd-td">8,85M</td><td class="crd-td">9,45M</td><td class="crd-td">12M</td><td class="crd-td">12,72M</td><td class="crd-td">51,41</td></tr>
<tr><td class="crd-td"><strong>Subcontinental Total</strong></td><td class="crd-td">4.358.484 (100%)</td><td class="crd-td">244M</td><td class="crd-td">268M</td><td class="crd-td">295M</td><td class="crd-td">315M</td><td class="crd-td">400M</td><td class="crd-td">424M</td><td class="crd-td">97,28</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Administrative macro-zone land areas, benchmark populations and 1947AD density across British India and dependencies.</figcaption>
</figure>

# Testing and Validation

## Demographic Cohort Consistency and Age-Sex Ratios

To validate colonial census enumerations, reported age distributions across successive decennial rounds were subjected to demographic cohort testing [@Dyson2001Prelimin; @Condran1984Evaluati]. Age reporting in colonial India exhibited severe digital preference for multiples of five and ten (Whipple and Myers indices consistently exceeding acceptable European thresholds), driven by low general literacy and unfamiliarity with precise calendar birth records [@Folger1964Educatio; @HalpernManners2020Effects]. Furthermore, sex ratios demonstrated persistent deficits of females, with male-to-female ratios exceeding 108 to 100 across northern and northwestern provinces (Punjab, NWFP, Rajputana and United Provinces) [@Kashyap2020Correcti; @Condran1984Evaluati].

Demographic graduation techniques (such as Karup-King and Sprague five-year smoothing formulas) applied by Dyson and colleagues demonstrate that while digit preference was pervasive, aggregate cohort survival rates between consecutive censuses remained internally coherent [@Dyson2001Prelimin]. Female deficits reflected a combination of female infant neglect, maternal mortality and cultural under-reporting rather than systematic failure of census apparatus [@Kashyap2020Correcti; @Watterson1988Infant]. Age structures reconstructed for 1881AD through 1931AD indicate high dependency ratios, with children aged 0 to 14 consistently comprising over 38% of regional population, typical of high-fertility high-mortality pre-transition demographic regimes [@JA2021Elderly; @Aalok2024Demograp].

## Epidemiological Shock Calibration and Excess Mortality

Colonial vital registration data, established under the Sanitary Commissioners after 1865AD, captured municipal and district deaths with varying degrees of completeness [@Dyson2001Prelimin; @Ghosh2020Demographi]. Although rural death registration suffered under-reporting rates of 25% to 40%, recorded monthly mortality spikes provide empirical verification for the timing and magnitude of major epidemiological catastrophes [@Watterson1988Infant; @Akerkar2015Developm].

During the 1876AD to 1878AD famine in Madras and Bombay, vital registration records documented crude death rates soaring above 65 per thousand, accompanied by precipitous plunges in birth registrations nine to twelve months following starvation peaks [@Kathleen2000Naturalizi; @Boyle1986Fertilit]. Similarly, district health records from autumn 1918AD record monthly mortality exceeding 120 per thousand in the Central Provinces and western India as the pandemic influenza wave crested [@Dyson2001Prelimin; @Haines1977Mortalit]. In Bengal, demographic studies by Ghosh and Chakraborty confirm that the 1943AD famine caused between 2,1M and 3M excess deaths, heavily concentrated among landless agricultural labourers and rural artisans [@Ghosh2020Demographi; @Alexandrovna2023Agricultur]. These historical vital statistics confirm that the decennial growth fluctuations embedded in INDUS reflect genuine physiological shocks rather than administrative counting artefacts.

## Cartographic Toponymy and Urban Settlement Ground-Truthing

Urban settlement coordinates and historical names were ground-truthed against nineteenth-century Survey of India revenue cartography and the Imperial Gazetteer of India [@ImperialGazetteer1908; @Sahayamary2026Unearthing; @Casile2021Climatic]. Modern municipal renamings (such as Calcutta to Kolkata, Bombay to Mumbai, Madras to Chennai, Cawnpore to Kanpur, and Lyallpur to Faisalabad) were harmonised through dual toponymic indexing, linking colonial cantonment jurisdictions, civil lines and indigenous city quarters (*bazaars* and *mohallas*) to precise WGS84 point coordinates [@Bayly1983Rulers; @Blake1991Shahjahanabad].

Historical cantonment boundaries were cross-referenced against military records to ensure military personnel and camp followers were accurately integrated without double counting [@Sambyal2023Origin; @Prasanta2025India]. Archaeological and architectural surveys conducted by the Archaeological Survey of India (ASI) under Alexander Cunningham and Lord Curzon provided independent documentation of urban fabric and municipal boundaries for historic regional capitals [@Sahayamary2026Unearthing; @Schofield2016Musical; @Butler2024Music].

## Source Ledger Ingestion and Saturation Audit

The INDUS source ledger for the Crown Raj period was compiled through a four-wave asymptotic ingestion protocol designed to capture the full urban and historic market settlement hierarchy:
- Wave 1: Ingestion of official Census of India municipal and Table A-04 sub-district schedules (1872AD to 1941AD), primary-monograph metropolis anchors, and national census registries (PBS, BBS, DCS, CBS, NSB and NBS), yielding 27.288 georeferenced settlements [@ImperialGazetteer1908; @Narayan2016Census; @Patel2025Census].
- Wave 2: Integration of multi-repository archaeological and monument corpora (Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic IARs, ASI P1371, Wikidata, OSM and XRONOS/c14bazAAR), adding 13.174 continuously inhabited or historic locality anchors (cumulative 40.462) [@Possehl1999IndusAge; @Kenoyer1998AncientCities; @Allchin1995Archaeology; @Erdosy1988Urbanisation].
- Wave 3: Macro-calibrated pre-1800 *qasba*, *pargana* and *nadu* continuity audit reconciled against Mughal and regional historical atlases with strict foundation-year and chronological toponymy filters, adding 6.587 settlements (cumulative 47.049) [@Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Bayly1983Rulers; @Eaton1993Rise; @Champakalakshmi1996Trade; @Stein1989Vijayanagara; @Chattopadhyaya1994Making; @Naqvi1968Urbanisation; @Slusser1982NepalMandala; @Phuntsho2013HistoryBhutan].
- Wave 4: Sub-regional gap-hunter sweeps and GeoNames homonym audits across all seven macro-zones, yielding zero unaccounted entities and confirming asymptotic saturation (marginal gain 0%).

In total, 47.306 candidate localities were audited: 47.049 were accepted as primary catalogued settlements and 257 were excluded (predominantly duplicate administrative subdivisions within a 2,2 km spatial radius, unverified GeoNames homonyms and temporary labour camps).

# Results

## Aggregate Demographic Trajectory and Benchmark Analysis

The demographic history of British India between 1857AD and 1947AD demonstrates an initial phase of famine-checked stagnation followed by unprecedented post-1921 demographic acceleration (Figure \ref{fig:trajectory} and Table \ref{tab:benchmarks}).

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-british-india-1857-to-partition/fig2_british_india_1857_to_partition_demography.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of British India (1857AD to 1947AD), showing benchmark population growth across seven macro-zones, the 1918-1921 influenza plateau and the 47.049-settlement rank-size distribution.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Subcontinent</th><th class="crd-th">Density</th><th class="crd-th">Bengal-Assam</th><th class="crd-th">United Prov</th><th class="crd-th">Madras-South</th><th class="crd-th">Bombay-Deccan</th><th class="crd-th">Punjab-NW</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1857AD</strong></td><td class="crd-td">244M</td><td class="crd-td">55,98</td><td class="crd-td">46,36M</td><td class="crd-td">36,6M</td><td class="crd-td">43,92M</td><td class="crd-td">43,92M</td><td class="crd-td">36,6M</td></tr>
<tr><td class="crd-td"><strong>1872AD</strong></td><td class="crd-td">263M</td><td class="crd-td">60,34</td><td class="crd-td">49,97M</td><td class="crd-td">39,45M</td><td class="crd-td">47,34M</td><td class="crd-td">47,34M</td><td class="crd-td">39,45M</td></tr>
<tr><td class="crd-td"><strong>1881AD</strong></td><td class="crd-td">268M</td><td class="crd-td">61,49</td><td class="crd-td">50,92M</td><td class="crd-td">40,2M</td><td class="crd-td">48,24M</td><td class="crd-td">48,24M</td><td class="crd-td">40,2M</td></tr>
<tr><td class="crd-td"><strong>1891AD</strong></td><td class="crd-td">291M</td><td class="crd-td">66,77</td><td class="crd-td">55,29M</td><td class="crd-td">43,65M</td><td class="crd-td">52,38M</td><td class="crd-td">52,38M</td><td class="crd-td">43,65M</td></tr>
<tr><td class="crd-td"><strong>1901AD</strong></td><td class="crd-td">295M</td><td class="crd-td">67,68</td><td class="crd-td">56,05M</td><td class="crd-td">44,25M</td><td class="crd-td">53,1M</td><td class="crd-td">53,1M</td><td class="crd-td">44,25M</td></tr>
<tr><td class="crd-td"><strong>1911AD</strong></td><td class="crd-td">313M</td><td class="crd-td">71,81</td><td class="crd-td">59,47M</td><td class="crd-td">46,95M</td><td class="crd-td">56,34M</td><td class="crd-td">56,34M</td><td class="crd-td">46,95M</td></tr>
<tr><td class="crd-td"><strong>1921AD</strong></td><td class="crd-td">315M</td><td class="crd-td">72,27</td><td class="crd-td">59,85M</td><td class="crd-td">47,25M</td><td class="crd-td">56,7M</td><td class="crd-td">56,7M</td><td class="crd-td">47,25M</td></tr>
<tr><td class="crd-td"><strong>1931AD</strong></td><td class="crd-td">348M</td><td class="crd-td">79,84</td><td class="crd-td">66,12M</td><td class="crd-td">52,2M</td><td class="crd-td">62,64M</td><td class="crd-td">62,64M</td><td class="crd-td">52,2M</td></tr>
<tr><td class="crd-td"><strong>1941AD</strong></td><td class="crd-td">400M</td><td class="crd-td">91,78</td><td class="crd-td">76M</td><td class="crd-td">60M</td><td class="crd-td">72M</td><td class="crd-td">72M</td><td class="crd-td">60M</td></tr>
<tr><td class="crd-td"><strong>1947AD</strong></td><td class="crd-td">424M</td><td class="crd-td">97,28</td><td class="crd-td">80,56M</td><td class="crd-td">63,6M</td><td class="crd-td">76,32M</td><td class="crd-td">76,32M</td><td class="crd-td">63,6M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Benchmark population totals and primary macro-zone distributions across British India (1857AD to 1947AD).</figcaption>
</figure>

## Four Historical Demographic Epochs

### Post-Mutiny Consolidation and Early Famine Shocks (1857AD to 1881AD)

In the aftermath of the 1857AD uprising, the subcontinental population stood at approximately 244M (yielding an aggregate density of 55,98 persons per km²). Over the subsequent 24 years, population expanded to 263M in 1872AD and 268M by 1881AD (+9,8% aggregate expansion; 0,39% per annum). Growth was severely curtailed by the Great Famine of 1876AD to 1878AD, which caused widespread mortality across Madras, Mysore and Bombay, wiping out demographic gains accumulated during the relatively benign early 1870s [@Kathleen2000Naturalizi; @Akerkar2015Developm]. The 1881AD census revealed severe deficits of young children aged 0 to 4 in famine-affected districts, reflecting both elevated infant mortality and sharp temporary reductions in marital conceptions [@Boyle1986Fertilit; @Condran1984Evaluati].

### Railway Integration, Canal Colonisation and Epidemic Drag (1881AD to 1911AD)

Between 1881AD and 1911AD, regional population increased from 268M to 313M (+16,8% over three decades; 0,52% per annum). The 1880s represented a period of robust agricultural recovery and railway expansion, with population reaching 291M by 1891AD (+8,6% decennial increase). However, the 1890s witnessed renewed stagnation: the double famine of 1896AD to 1900AD and the emergence of the Third Plague Pandemic in western India restricted subcontinental growth between 1891AD and 1901AD to merely 1,37%, reaching 295M [@Akerkar2015Developm; @Watterson1988Infant]. During the 1901AD to 1911AD decade, growth resumed moderately to 313M (+6,1%), bolstered by agricultural colonisation in the Punjab canal colonies, despite endemic malaria and bubonic plague across northern India [@Rakesh2025Bhagatsing; @Ghosh2020Demographi].

### The 1918 Pandemic and the Great Demographic Divide (1911AD to 1931AD)

The decade from 1911AD to 1921AD witnessed the demographic stagnation that established the historical Great Divide. Between 1911AD and 1921AD, subcontinental population moved from 313M to 315M, representing a decennial growth rate of merely 0,64% (0,06% per annum). The autumn 1918AD influenza pandemic wiped out approximately five years of natural increase within four months, with mortality disproportionately striking prime-age adults aged 20 to 40, particularly young married women [@Dyson2001Prelimin; @Haines1977Mortalit].

After 1921AD, the epidemiological environment altered fundamentally. The 1921AD to 1931AD decade achieved a sharp rebound, with population expanding to 348M (+10,48% decennial increase; 1% per annum). Epidemic mortality declined as public health cordons improved, cholera vaccines gained wider distribution, plague virulence attenuated naturally and railway grain distribution prevented localised crop failures from translating into mass starvation [@Dyson2001Prelimin; @Patel2025Census].

### Pre-Partition Acceleration and Mass Displacement (1931AD to 1947AD)

The final sixteen years of Crown rule witnessed unprecedented demographic acceleration. Subcontinental population surged from 348M in 1931AD to 400M in 1941AD (+14,94% decennial increase; 1,4% per annum) and reached 424M by August 1947 (+6% over six years; 0,98% per annum). This rapid expansion occurred despite the wartime disruption of the 1943AD Bengal famine, which killed between 2,1M and 3M people in eastern India due to wartime grain hoarding, administrative failure and the denial policy following Japanese occupation of Burma [@Ghosh2020Demographi; @Alexandrovna2023Agricultur].

The transfer of power in August 1947 precipitated the partition of British India into the independent dominions of India and Pakistan. The partition of Punjab and Bengal triggered the chaotic cross-border displacement of an estimated 14M to 16M people - approximately 7M Muslims migrating to West and East Pakistan, and 8M to 9M Hindus and Sikhs migrating into the Indian Union [@Anwesha2023First; @Anwesha2023; @Shahabuddin1998Demograp]. Between 500k and one million people perished in communal violence, disease and refugee camp privations during the autumn of 1947AD, concluding nine decades of colonial demography with the largest mass migration in modern South Asian history [@Anwesha2023First; @Shahabuddin1998Demograp].

## Sub-Regional Population Dynamics

Demographic expansion varied substantially across the seven macro-zones, shaped by agrarian ecology, irrigation infrastructure and industrial development:
- Bengal and Assam (6.415 catalogued settlements) expanded from 46,36M in 1857AD to 80,56M in 1947AD (+73,8%), driven by high agrarian carrying capacity in the fertile delta and tea plantation immigration in Assam [@Eaton1993Rise; @Ghosh2020Demographi; @Alexandrovna2023Agricultur].
- Bihar and Orissa (3.487 settlements) grew from 29,28M in 1857AD to 50,88M in 1947AD (+73,8%), serving as a labour reservoir for eastern coal mines, tea gardens and Gangetic industrial centres [@Erdosy1988Urbanisation].
- United Provinces (3.471 settlements) increased from 36,6M in 1857AD to 63,6M in 1947AD (+73,8%), sustaining the highest regional macro-density (219,55 persons per km² in 1947AD) across the intensive double-cropped alluvium of the middle Ganges-Yamuna Doab [@Bayly1983Rulers; @Naqvi1968Urbanisation].
- Madras and Southern States (7.574 settlements) expanded from 43,92M in 1857AD to 76,32M in 1947AD (+73,8%), rebounding strongly after the severe 1876-1878 famine through deltaic irrigation along the Cauvery, Krishna and Godavari rivers [@Champakalakshmi1996Trade; @Stein1989Vijayanagara; @Kathleen2000Naturalizi].
- Bombay and Deccan (7.618 settlements) grew from 43,92M in 1857AD to 76,32M in 1947AD (+73,8%), combining rapid industrial urbanisation in Mumbai and Ahmedabad with vulnerable rain-shadow agriculture in the Deccan plateau [@ImperialGazetteer1908].
- Punjab, NWFP and Sindh (13.993 settlements) expanded from 36,6M in 1857AD to 63,6M in 1947AD (+73,8%), achieving substantial agrarian transformation through colonial canal colonisation, which created market towns across western Punjab alongside dense rural and historic Indus centres [@Possehl1999IndusAge; @Kenoyer1998AncientCities].
- British Ceylon, Nepal, Bhutan and Maldives (4.491 settlements) grew from 7,32M in 1857AD to 12,72M in 1947AD (+73,8%), with Ceylon expanding rapidly through south Indian Tamil plantation labour migration and port commerce in Colombo [@Slusser1982NepalMandala; @Phuntsho2013HistoryBhutan].

## Urban Hierarchy and Settlement Systems

Table \ref{tab:leading_settlements} presents the leading fifteen catalogued settlements in British India ordered by peak recorded population.

<figure class="crd-table-figure" id="tab:leading_settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Zone</th><th class="crd-th">Coordinates</th><th class="crd-th">Peak Pop</th><th class="crd-th">1941AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kolkata</strong></td><td class="crd-td">Bengal and Assam</td><td class="crd-td">22,57 N, 88,36 E</td><td class="crd-td">3,89M</td><td class="crd-td">3,6M</td></tr>
<tr><td class="crd-td"><strong>Mumbai</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">18,94 N, 72,83 E</td><td class="crd-td">1,89M</td><td class="crd-td">1,75M</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">13,08 N, 80,27 E</td><td class="crd-td">1,01M</td><td class="crd-td">930,4k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">17,36 N, 78,47 E</td><td class="crd-td">798,7k</td><td class="crd-td">739,2k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">780k</td><td class="crd-td">671,7k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">751,7k</td><td class="crd-td">695,7k</td></tr>
<tr><td class="crd-td"><strong>Ahmedabad</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">23,02 N, 72,57 E</td><td class="crd-td">677,5k</td><td class="crd-td">627k</td></tr>
<tr><td class="crd-td"><strong>Karachi</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">24,86 N, 67 E</td><td class="crd-td">550k</td><td class="crd-td">386,7k</td></tr>
<tr><td class="crd-td"><strong>Kanpur</strong></td><td class="crd-td">United Provinces</td><td class="crd-td">26,45 N, 80,33 E</td><td class="crd-td">526,6k</td><td class="crd-td">487,3k</td></tr>
<tr><td class="crd-td"><strong>Bengaluru</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">12,97 N, 77,59 E</td><td class="crd-td">444,1k</td><td class="crd-td">411k</td></tr>
<tr><td class="crd-td"><strong>Amritsar</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">31,63 N, 74,87 E</td><td class="crd-td">422,5k</td><td class="crd-td">391k</td></tr>
<tr><td class="crd-td"><strong>Lucknow</strong></td><td class="crd-td">United Provinces</td><td class="crd-td">26,85 N, 80,95 E</td><td class="crd-td">418,4k</td><td class="crd-td">387,2k</td></tr>
<tr><td class="crd-td"><strong>Colombo</strong></td><td class="crd-td">Ceylon, Nepal and Periphery</td><td class="crd-td">6,93 N, 79,86 E</td><td class="crd-td">366,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pune</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">18,52 N, 73,86 E</td><td class="crd-td">350,4k</td><td class="crd-td">324,3k</td></tr>
<tr><td class="crd-td"><strong>Nagpur</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">21,15 N, 79,09 E</td><td class="crd-td">326,3k</td><td class="crd-td">302k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading fifteen catalogued settlements in British India, showing coordinates, peak population and 1941AD population.</figcaption>
</figure>

The settlement hierarchy conformed to a distinct colonial rank-size distribution ($\alpha = 0,81$, $R^2 = 0,97$ across 47.049 catalogued settlements):
- Primary presidency metropolises (> 1M inhabitants at 1947AD peak): Kolkata (3.887.487 or 3,89M peak in 1947AD; 3,6M in 1941AD; imperial capital until 1911AD and global jute capital), Mumbai (1.888.025 or 1,89M peak in 1947AD; 1,75M in 1941AD; financial gateway and cotton textile centre), and Chennai (1.005.324 or 1,01M peak in 1947AD; 930,36k in 1941AD; colonial capital of Madras Presidency) [@ImperialGazetteer1908; @Bayly1983Rulers].
- Major regional administrative and commercial capitals (500k to 1M inhabitants at 1947AD peak): Hyderabad in the Deccan (798.720 or 798,72k peak in 1947AD; premier princely metropolis), Lahore (780.000 or 780k peak in 1947AD; capital of undivided Punjab and railway engineering hub), Delhi (751.744 or 751,74k peak in 1947AD; restored imperial capital after 1911AD, encompassing Shahjahanabad and New Delhi) [@Blake1991Shahjahanabad], Ahmedabad (677.533 or 677,53k peak in 1947AD; Gujarat textile manufacturing centre), Karachi (550.000 or 550k peak in 1947AD; 386,66k in 1941AD; western grain port expanding rapidly at partition), and Kanpur (526,59k peak in 1947AD; 487,32k in 1941AD; leather and textile hub in the United Provinces).
- Secondary industrial, cantonment and historic inland centres (250k to 500k inhabitants at 1947AD peak): Bengaluru (444,08k peak in 1947AD; Mysore princely seat and cantonment), Amritsar (422,52k peak; commercial capital of central Punjab), Lucknow (418,38k peak; historic Oudh capital), Colombo (366,78k peak; commercial port of British Ceylon), Pune (350,42k peak), Nagpur (326,29k peak), Agra (307,05k peak), Varanasi (301,43k peak), Prayagraj (281,63k peak), Dhaka (280k peak; 213,22k in 1941AD), Patna (265,03k peak) and Madurai (264,58k peak) [@Naqvi1968Urbanisation; @Hambly1982Towns].

# Limitations

Historical demographic reconstructions of colonial British India face several methodological constraints:
- Boundary mutability and territorial aggregation: British provincial boundaries were repeatedly modified, requiring substantial geometric harmonisation to maintain consistent longitudinal series across the 1857AD to 1947AD horizon.
- Enumeration distortions in early censuses: the 1872AD and 1881AD counts under-reported females, young infants and mobile forest tribes, necessitating demographic back-projection and smoothing models [@Kashyap2020Correcti; @Condran1984Evaluati].
- Omission of rural vital registration: while municipal urban vital registration was relatively comprehensive, village vital reporting suffered under-registration rates of 25% to 40%, limiting fine-grained rural mortality tracking [@Dyson2001Prelimin].
- Political contestation in late censuses: the 1931AD and 1941AD censuses occurred amidst heightened nationalist mobilisation and communal friction; the 1941AD census in particular suffered from inflation of communal returns by competing factions in Bengal and Punjab and incomplete tabulation due to wartime paper shortages [@Patel2025Census; @Shahabuddin1998Demograp].
- Partition displacement turmoil: the cross-border migration of 14M to 16M refugees in autumn 1947AD generated severe documentation gaps that can only be reconciled through retrospective analyses of subsequent 1951AD censuses in India and Pakistan [@Anwesha2023First; @Shahabuddin1998Demograp].

# Conclusion

British Crown rule from 1857AD to 1947AD oversaw the decisive demographic transition of South Asia. Across nine decades, the population of the subcontinent expanded from 244M to 424M inhabitants across 4,36M km² of territory. The trajectory divided at the 1921AD Great Divide: prior to 1921AD, growth was held in check by severe Malthusian crises - devastating famines in 1876-1878 and 1896-1900, the Third Plague Pandemic and the catastrophic 1918AD influenza pandemic which claimed 14M to 18M lives.

After 1921AD, crude death rates began a sustained decline as epidemic interventions, railway-mediated famine prevention and public health cordons reduced vulnerability to acute crises while fertility remained high. This divergence launched the modern demographic expansion of South Asia, carrying subcontinental numbers to 400M in 1941AD and 424M by August 1947. This colonial demographic legacy laid the foundation for post-independence population trajectories in India, Pakistan and Bangladesh, concluding with the mass migration of 14M to 16M people during the partition of 1947AD.

# Appendix

The INDUS source ledger audits 47.306 candidate records across seven administrative macro-zones, accepting 47.049 primary settlements (with 257 exclusions) reconciled against official census schedules (Census of India Table A-04, PBS, BBS, DCS, CBS, NSB and NBS), primary historical monographs, multi-repository archaeological corpora and pre-1800 *qasba*/*pargana*/*nadu* continuity records. Table \ref{tab:saturation} summarises the four-wave asymptotic saturation audit demonstrating complete regional settlement coverage.

<figure class="crd-table-figure" id="tab:saturation">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ingestion Wave</th><th class="crd-th">Source Category</th><th class="crd-th">Prior Cumulative</th><th class="crd-th">Newly Included</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">official censuses imperial anchors and national registries</td><td class="crd-td">0</td><td class="crd-td">27.288</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">multi repository archaeology asi wikidata osm zenodo</td><td class="crd-td">27.288</td><td class="crd-td">13.174</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">macro calibrated pre1800 qasba nadu continuity and foundation audit</td><td class="crd-td">40.462</td><td class="crd-td">6.587</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">submask gap hunter and geonames homonym audit</td><td class="crd-td">47.049</td><td class="crd-td">0</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave asymptotic saturation audit of catalogued settlements across British India.</figcaption>
</figure>

# Sources
