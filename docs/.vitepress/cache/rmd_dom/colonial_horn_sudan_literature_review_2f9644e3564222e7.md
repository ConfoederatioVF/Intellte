---
title: "Colonial Horn of Africa and Anglo-Egyptian Sudan"
subtitle: "Ethiopia, Eritrea, Somalilands and Anglo-Egyptian Sudan (1880s-1960)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: colonial_horn_sudan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Nine colonial and imperial sub-regions and 1.452 individually assessed settlements across the Horn of Africa and Anglo-Egyptian Sudan between 1880AD and 1960AD."
hero_label: "fig:hero-colonial-horn"

header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{10pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{10pt plus 2pt minus 2pt}
  - \raggedbottom

output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between 1880AD and 1960AD, imperial state consolidation in Ethiopia, the Mahdist upheaval and subsequent Anglo-Egyptian Condominium in Sudan, and European coastal partition across Eritrea and the Somali littoral reshaped population geography across Northeast Africa. Across a territorial domain of 4.407.073 km² spanning eleven modern jurisdictions, NICETHI reconstructs an aggregate regional population that dipped slightly from 11,8M inhabitants in 1880AD to 11,6M in 1890AD during the Ethiopian Great Famine (*Kefu Qan*) and Mahdist wars before recovering to 12,36M in 1910AD, 13,61M in 1930AD, 21,49M in 1950AD, 23,07M in 1956AD and 24,13M by 1960AD, reaching a mean end-epoch density of 5,48 persons/km². Growth diverged sharply between highland agrarian cores and arid pastoral lowlands. Addis Ababa expanded from 20k in 1890AD to 444k city-proper (541,7k metropolitan agglomeration) by 1960AD, while Khartoum, Omdurman and Khartoum North recovered from wartime devastation to form a 342,7k tri-city capital alongside Port Sudan, Atbara and Gezira irrigation towns, and Asmara grew to 123,5k under Italian and British administration. These estimates integrate 1.452 individually assessed settlements across 7.004 chronological observations with colonial province censuses, non-stationary Matérn residual kriging and mass-conserving sub-administrative disaggregation.



# Background

## Imperial Expansion, Railway Corridors and Famine Recovery

At the opening of the 1880s, Northeast Africa comprised an intricate patchwork of highland Ethiopian principalities, the Egyptian-held Sudan sliding into the Mahdist revolt, Ottoman-Egyptian Red Sea ports and autonomous Somali clan confederacies along the Gulf of Aden and Benadir coast [@Caulk1972FirearmsAnd; @Omar2001ScrambleHorn; @Division1922HandbookThe]. Within three decades, military conquest and railway engineering bound these regions into sharply defined political territories. Under Emperor Menelik II, Shewan armies armed with European breechloaders incorporated Harar in 1887AD alongside Oromo, Kaffa, Wolayta and Sidamo provinces in the south and west, transferring the imperial court from Entoto down to the hot springs at Addis Ababa in 1886AD [@Caulk1972FirearmsAnd; @Pankhurst1968EconomicHistory]. Scarcely had the new capital taken root when the 1888AD to 1892AD Great Famine (*Kefu Qan*), triggered by rinderpest cattle mortality, locust swarms and drought, decimated livestock herds and rural households across northern and central Ethiopia as well as neighbouring Eritrea [@Pankhurst1968EconomicHistory; @Taddia2013ModernEthiopia].

Recovery after 1892AD coincided with major transport and urban realignments. The Franco-Ethiopian railway from Djibouti reached the newly founded junction of Dire Dawa in 1902AD and entered Addis Ababa in 1917AD, shifting external commerce away from older Massawa and Zeila caravan trails toward the Gulf of Aden [@Pankhurst1968EconomicHistory; @Darwich2025PortInfrastructures]. In Italian Eritrea, declared a formal colony in 1890AD, the administration shifted its capital from coastal Massawa to highland Asmara, investing in roads, segregated residential quarters and port expansion before using Eritrea as the staging ground for the 1935AD invasion and 1936AD to 1941AD occupation of Italian East Africa [@Fuller2011ItalyColonial; @Yi2026TheRole; @Braukamper2013IndigenousViews]. Across the Somali peninsula, French Somaliland anchored Djibouti's harbour, British Somaliland administered Hargeisa and Berbera as livestock-export hubs for Aden, and Italian Somaliland consolidated plantation agriculture along the Shabelle and Juba rivers behind Mogadishu, Marka and Kismaayo [@Omar2001ScrambleHorn; @Darwich2025PortInfrastructures; @Agency1948BritishProposal].

In the Nile basin, the Mahdist State concentrated tens of thousands of soldiers, administrators and displaced families at Omdurman while largely abandoning Turkish-era Khartoum until Anglo-Egyptian forces retook the confluence in 1898AD [@Division1922HandbookThe]. Under the 1899AD Condominium Agreement, British administrators rebuilt Khartoum as a planned administrative grid across the Blue Nile from Omdurman, constructed a new deep-water Red Sea terminal at Port Sudan after 1905AD to replace coral-choked Suakin, centralised railway workshops at Atbara, annexed the Sultanate of Darfur in 1916AD and launched the Gezira cotton irrigation scheme south of Wad Madanī following completion of the Sennar Dam in 1925AD [@Division1922HandbookThe; @Abdelgadir2024AssessmentImplementation]. Together, these fiscal, hydraulic and rail investments redrew the urban and rural settlement map ahead of Sudanese independence in 1956AD and Somali and British Somaliland independence in 1960AD [@Sudan1956Census; @Omar2001ScrambleHorn].

## Historiography of Colonial Censuses and Urban Records

Quantitative reconstruction across this macro-region faces stark disparities in documentary density between coastal enclaves and inland provinces. Italian Eritrea possesses the earliest systematic enumerations, compiled by colonial municipal offices and published in Rome through the 1905AD, 1931AD and 1939AD censuses alongside the 1938AD *Guida dell'Africa Orientale Italiana* [@Fuller2011ItalyColonial; @Taddia2013ModernEthiopia; @Yi2026TheRole]. British Military Administration records for 1941AD to 1952AD document post-war demobilisation, Italian settler repatriation and urban unemployment across Asmara, Massawa, Keren and Dek'emhāre prior to Eritrea's 1952AD federation with Ethiopia [@Beyan2021UnemploymentAnd; @Olusesan2020SecessionOutside; @Muller2020ColonialBorders]. For British Somaliland and the Anglo-Egyptian Sudan prior to the 1950s, colonial Blue Books, the 1922AD Admiralty *Handbook* and Robert René Kuczynski's *Demographic Survey* compile district tax rolls, tribal estimates and municipal counts while warning candidly against treating early poll-tax lists as complete headcounts [@Division1922HandbookThe; @Kuczynski1949DemographicSurvey2; @Jambir1950StrategicImportance].

Two major mid-century advances anchor the upper end of the period. In Sudan, the Department of Statistics executed the First Population Census of Sudan in 1955AD to 1956AD, enumerating 10.262.536 residents across all nine Condominium provinces through stratified household sampling and nomad cluster frames [@Sudan1956Census]. That census revealed that pre-war Condominium estimates had substantially undercounted both Darfur-Kordofan and the three southern provinces of Bahr el Ghazal, Upper Nile and Equatoria [@Sudan1956Census; @Division1922HandbookThe]. In Ethiopia, where no national census occurred before 1984AD, urban trajectories rely on Richard Pankhurst's synthesis of consular reports, Italian occupation municipal surveys, 1950s Central Statistical Office municipal tallies, heritage inventories and modern spatial agglomeration footprints [@Pankhurst1968EconomicHistory; @Demisse2024UrbanLand; @Kitessa2020QuantifyingWater; @ARCCH2020EthiopiaInventory]. NICETHI harmonises these heterogeneous archives into a single territorial ledger from 1880AD to 1960AD.

# Methodology

## Sub-Regional Territorial Partition and Accounting Domain

The study area covers 4.407.073 km² across 52.581 five-arcminute cells spanning eleven modern jurisdictions: Sudan, South Sudan, Ethiopia, Eritrea, Djibouti, Somalia and Somaliland, together with narrow border-edge settlements in Chad, the Central African Republic, Uganda and Kenya [@Runfola2020GeoBoundaries]. Within NICETHI, the chapter occupies the colonial demographic regime (1880AD to 1960AD), bridging nineteenth-century pre-partition states with post-colonial national statistical series. Nine historical-administrative sub-regions partition the territory along Condominium provincial groups, Imperial Ethiopian macro-provinces, Italian Eritrea, Italian Somaliland and the French and British Somaliland protectorates (Table \ref{tab:subregions}).

Population trajectories are evaluated across 14 benchmark years between 1880AD and 1960AD (1880, 1890, 1910, 1920, 1930, 1950, 1951, 1952, 1953, 1955, 1956, 1957, 1959 and 1960), with six core checkpoints reported in comparative tables: 1880AD (pre-Mahdist and Menelik expansion baseline), 1910AD (post-famine recovery and early railway era), 1930AD (Gezira irrigation and interwar colonial peak), 1950AD (post-Second World War and BMA transition), 1956AD (Sudanese independence and 1955-1956 census alignment) and 1960AD (Somali independence and chapter close). All sub-regional figures represent full resident populations encompassing towns, rural cultivating villages and nomadic or transhumant pastoral groups [@Sudan1956Census; @Pankhurst1968EconomicHistory; @Kuczynski1949DemographicSurvey2].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Era</th><th class="crd-th">Assessed Sites</th><th class="crd-th">Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Northern and Central Highlands</strong></td><td class="crd-td">349.815</td><td class="crd-td">4.164</td><td class="crd-td">1880AD-1960AD</td><td class="crd-td">210</td><td class="crd-td">7,9</td></tr>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Oromo, Kaffa and Southwest</strong></td><td class="crd-td">465.467</td><td class="crd-td">5.467</td><td class="crd-td">1880AD-1960AD</td><td class="crd-td">307</td><td class="crd-td">10,6</td></tr>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Hararghe, Bale and Ogaden</strong></td><td class="crd-td">314.626</td><td class="crd-td">3.693</td><td class="crd-td">1887AD-1960AD</td><td class="crd-td">46</td><td class="crd-td">7,1</td></tr>
<tr><td class="crd-td"><strong>Italian Eritrea and BMA Eritrea</strong></td><td class="crd-td">122.349</td><td class="crd-td">1.478</td><td class="crd-td">1890AD-1960AD</td><td class="crd-td">97</td><td class="crd-td">2,8</td></tr>
<tr><td class="crd-td"><strong>French Somaliland and British Somaliland</strong></td><td class="crd-td">187.798</td><td class="crd-td">2.221</td><td class="crd-td">1884AD-1960AD</td><td class="crd-td">98</td><td class="crd-td">4,3</td></tr>
<tr><td class="crd-td"><strong>Italian Somaliland (Somalia Italiana / AFIS)</strong></td><td class="crd-td">472.620</td><td class="crd-td">5.532</td><td class="crd-td">1889AD-1960AD</td><td class="crd-td">111</td><td class="crd-td">10,7</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Nile, Khartoum and Kassala</strong></td><td class="crd-td">971.251</td><td class="crd-td">11.898</td><td class="crd-td">1899AD-1956AD</td><td class="crd-td">231</td><td class="crd-td">22</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Darfur and Kordofan</strong></td><td class="crd-td">895.473</td><td class="crd-td">10.755</td><td class="crd-td">1899AD-1956AD</td><td class="crd-td">186</td><td class="crd-td">20,3</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Southern Provinces</strong></td><td class="crd-td">627.673</td><td class="crd-td">7.373</td><td class="crd-td">1899AD-1956AD</td><td class="crd-td">125</td><td class="crd-td">14,2</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Nine colonial and imperial sub-regions of the Horn of Africa and Anglo-Egyptian Sudan, showing surface area, 5-arcminute pixel counts, eras and interior assessed sites.</figcaption>
</figure>

## Settlement Screening and Metropolitan Reconciliation

Urban hierarchies were built from 2.039 candidate towns, railway stations, garrison posts, ports and provincial capitals screened from the 1955-1956 Sudanese census, Italian ISTAT colonial censuses, British Somaliland Blue Books, Ethiopian municipal surveys, heritage inventories and Africapolis agglomeration series [@Sudan1956Census; @Fuller2011ItalyColonial; @Pankhurst1968EconomicHistory; @ARCCH2020EthiopiaInventory]. Removing 587 duplicate transliteration aliases (such as parallel colonial English and Arabic spellings for Khartoum, Omdurman, El Fasher, El Obeid, Kassala and Wau) left 1.452 individually assessed settlements backed by 7.004 chronological observations (Figure \ref{fig:hero-colonial-horn}).

Both city-proper municipal cores and post-1950 metropolitan agglomerations are tracked explicitly to avoid confounding administrative boundaries with built-up urban footprints. Of the 239 retained records, 1.445 carry city-proper municipal scope and 7 represent metropolitan agglomerations beginning in 1950AD: Addis Ababa (363,4k in 1950AD to 541,7k in 1960AD), Khartoum (229,4k to 342,7k), Asmara (99,3k to 123,5k), Mogadishu (47,5k to 101,5k), Hargeisa (30,4k to 38,4k), Djibouti (31,9k to 37,4k) and Juba (18k to 17k) [@Demisse2024UrbanLand; @Darwich2025PortInfrastructures; @Beyan2021UnemploymentAnd]. In keeping with NICETHI accounting rules, metropolitan agglomerations appear alongside their constituent municipal cores (such as Al-Kharṭūm, Umm Durmān and Al-Kharṭūm Baḥrī inside greater Khartoum) with explicit scope tags rather than merging distinct historical series.

## Residual Kriging Substrata and Sub-Administrative Disaggregation

To distribute rural farming and pastoral populations continuously across 4.407.073 km², NICETHI pairs colonial territorial envelopes with non-stationary Paciorek-Schervish Matérn ($\nu = 3/2$) residual kriging calibrated across 11.199 domestic archaeological and historical site records (6.970 unique-coordinate sites) within 6.431 Voronoi catchments across Sub-Saharan Africa [@Runfola2020GeoBoundaries; @Sulas2014AksumWater]. Within the East and Horn archaeological sector, regional registers and monograph tables supply 93,91% of 2.708 site records (zero crowd-sourced records; pan-regional share 82,94%). Catchment geometry scales locally with combined HYDE 3.5 and KK10 density surfaces beneath a 25.000 km² ceiling (median Voronoi radius 31,72 km, 90th percentile 49,29 km).

In the late precolonial nineteenth-century kriging horizon directly preceding the 1880AD baseline, weighted least-squares variogram fitting fixes dimensionless short-range correlation at $\tau_1 = 1,35$ (raw 1,3757), secondary range $\tau_2 = 2,9025$ and nugget-to-sill ratio 0,04, yielding an effective short-range correlation distance of 43,63 km ($R^2 = 0,9992$) with positive fluvial ($\beta_3 = 0,0342$) and coastal ($\beta_4 = 0,0475$) trend weights shielded by a two-pixel urban buffer mask [@Sulas2014AksumWater; @ARCCH2020EthiopiaInventory]. For the colonial and independence era, pycnophylactic dasymetric disaggregation across historical regime polygons (1914AD colonial provinces, 1925AD and 1940AD interwar territories, and 1950AD and 1960AD administrative layers) preserves total mass within 0,01% across 30.911 unit-year checks over 81 years, with a worst unit relative error of $5,603 \times 10^{-8}$ [@Runfola2020GeoBoundaries].

# Testing and Validation

## Condominium and Trusteeship Census Benchmarks

Direct confrontation against published provincial censuses tests how faithfully the spatial model recovers sub-national population distributions. Table \ref{tab:sudan-1956} reproduces the official nine-province tally of the 1955-1956 First Population Census of Sudan (10.262.536 inhabitants) [@Sudan1956Census]. Summing the three Sudanese sub-regions in NICETHI for 1956AD yields 4.391.864 in Nile, Khartoum and Kassala (comparable to Blue Nile, Kassala, Northern and Khartoum provinces combined: 4.388.667), 3.117.149 in Darfur and Kordofan (comparable to 3.090.733 enumerated) and 2.744.080 in the Southern Provinces (comparable to Bahr el Ghazal, Equatoria and Upper Nile combined: 2.783.136), giving an aggregate discrepancy of under 0,1% across the entire Condominium footprint [@Sudan1956Census; @Division1922HandbookThe].

<figure class="crd-table-figure" id="tab:sudan-1956">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province</th><th class="crd-th">Level</th><th class="crd-th">Enumerated Pop.</th><th class="crd-th">Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Blue Nile</strong></td><td class="crd-td">ADM1</td><td class="crd-td">2.069.646</td><td class="crd-td">20,2</td></tr>
<tr><td class="crd-td"><strong>Kordofan</strong></td><td class="crd-td">ADM1</td><td class="crd-td">1.761.968</td><td class="crd-td">17,2</td></tr>
<tr><td class="crd-td"><strong>Darfur</strong></td><td class="crd-td">ADM1</td><td class="crd-td">1.328.765</td><td class="crd-td">12,9</td></tr>
<tr><td class="crd-td"><strong>Bahr el Ghazal</strong></td><td class="crd-td">ADM1</td><td class="crd-td">991.022</td><td class="crd-td">9,7</td></tr>
<tr><td class="crd-td"><strong>Kassala</strong></td><td class="crd-td">ADM1</td><td class="crd-td">941.039</td><td class="crd-td">9,2</td></tr>
<tr><td class="crd-td"><strong>Equatoria</strong></td><td class="crd-td">ADM1</td><td class="crd-td">903.503</td><td class="crd-td">8,8</td></tr>
<tr><td class="crd-td"><strong>Upper Nile</strong></td><td class="crd-td">ADM1</td><td class="crd-td">888.611</td><td class="crd-td">8,7</td></tr>
<tr><td class="crd-td"><strong>Northern</strong></td><td class="crd-td">ADM1</td><td class="crd-td">873.059</td><td class="crd-td">8,5</td></tr>
<tr><td class="crd-td"><strong>Khartoum</strong></td><td class="crd-td">ADM1</td><td class="crd-td">504.923</td><td class="crd-td">4,9</td></tr>
<tr><td class="crd-td"><strong>Total Sudan (1955-1956)</strong></td><td class="crd-td">ADM0</td><td class="crd-td">10.262.536</td><td class="crd-td">100</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> First Population Census of Sudan (1955-1956) provincial totals across all nine Condominium provinces.</figcaption>
</figure>

Cross-border consistency is likewise checked against the 1961AD Somali regional compilation (1.863.584 residents across eight provinces including Burao and Hargeisa in former British Somaliland and Banaadir, Alto Giuba, Hiiraan, Mudug, Basso Giuba and Migiurtinia in former Italian Somaliland) and the Northern Frontier Province counts in Kenya's 1948AD (187.451) and 1962AD (268.900 North-Eastern) censuses [@Kuczynski1949DemographicSurvey2; @Omar2001ScrambleHorn; @Jambir1950StrategicImportance]. These cross-checks confirm that lowland pastoral densities remain consistent across colonial partition lines separating Italian Somaliland, the Ogaden, British Somaliland and northern Kenya [@Agency1948BritishProposal].

## Settlement Rank-Size Calibration and Urban Hierarchy Diagnostics

Across the 1.452 individually assessed settlements, ordinary least-squares rank-size regression on the upper half of the urban distribution (119 entries) yields a Zipf exponent of $q = 1,07$ ($R^2 = 0,99$), while full-sample regression across all 1.452 entries yields $q = 1,21$ ($R^2 = 0,96$). Figure \ref{fig:rank-size} plots the 230 spatially deduplicated settlement peaks ($q = 0,98$, $R^2 = 0,99$) alongside 1960AD sub-regional densities. That near-unit upper-tier slope ($q \approx 1$) reflects a balanced multi-polar hierarchy anchored by imperial and colonial capitals - Addis Ababa (541,7k), Khartoum (342,7k), Asmara (123,5k) and Mogadishu (101,5k) - paired with resilient secondary ports and provincial hubs such as Port Sudan (62,7k), Marka (61,6k), Al-Ubayyiḍ (58,2k), Wad Madanī (56,9k), Kassalā (50,7k), Dese (46,9k), Harar (45k), Dire Dawa (42,1k), Atbara (42k), Hargeisa (38,4k) and Djibouti (37,4k) [@Pankhurst1968EconomicHistory; @Fuller2011ItalyColonial; @Darwich2025PortInfrastructures].

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-horn-sudan/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Settlement rank-size distribution across 230 spatially deduplicated sites (q = 0,98, R² = 0,99) and mean sub-regional densities in 1960AD.</figcaption>
</figure>

Below the 35k to 542k metropolitan and primary-town tier lies a dense middle rank of 10k to 34k district centres: Al-Fāshir (33,5k), Gonder (22,8k), Jima (22k), Nyālā (18,8k), al-Nuhud (18,5k), Berbera (18,1k), Juba (18k), Massawa (17,2k), Al-Junaynah (15,6k), Mekele (15,3k), Debere Markos (15k), Keren (15k), Qoryoley (15k), Afgoye (14,9k), Jowhar (14,5k), Malakal (13,8k), Wau (13,6k), Aksum (13k), Jijiga (12,8k) and Dek'emhāre (12,8k) [@Sudan1956Census; @Sulas2014AksumWater; @Beyan2021UnemploymentAnd]. The steeper downward curvature beyond rank 120 in Figure \ref{fig:rank-size} captures small frontier garrisons, Red Sea anchorage villages and southern Sudanese river stations between 550 and 4k inhabitants.

# Results

## Imperial Ethiopia and the Great Famine Recovery (1880AD to 1960AD)

Throughout the eighty-year span, the three Ethiopian sub-regions held the largest share of Northeast African population, climbing from 7,39M combined in 1880AD (62,7% of the study area) to 12,11M in 1960AD (Table \ref{tab:trajectory} and Figure \ref{fig:trends}). During the 1880s, rinderpest epizootic and the 1888AD to 1892AD *Kefu Qan* famine depressed totals across all three Ethiopian zones: North-Central Highlands slipped from 2,81M in 1880AD to 2,76M in 1890AD, Oromo-Kaffa-Southwest eased from 3,82M to 3,78M, and Hararghe-Ogaden fell from 763,7k to 731,9k [@Pankhurst1968EconomicHistory; @Taddia2013ModernEthiopia].

Recovery after 1892AD accelerated along southern agricultural frontiers and the Djibouti railway spine. By 1930AD, Oromo-Kaffa-Southwest reached 4,96M and the Northern-Central Highlands reached 3,55M, buoyed by Addis Ababa's expansion from 20k in 1890AD to 80k in 1930AD and the rise of Dire Dawa (5,1k in 1906AD to 22k in 1938AD), Dese (36k in 1938AD) and Jima (22k in 1938AD) [@Pankhurst1968EconomicHistory; @Caulk1972FirearmsAnd; @Braukamper2013IndigenousViews]. Under the 1936AD to 1941AD Italian occupation, military roadbuilding and segregated urban cantonments boosted Addis Ababa to 150k by 1940AD before post-war rural-to-urban migration lifted the city proper to 444k and the wider agglomeration to 541,7k by 1960AD, raising Northern-Central Highlands to 4,74M and Oromo-Kaffa-Southwest to 6,65M [@Trento2013MadamatoAnd; @Demisse2024UrbanLand; @Kitessa2020QuantifyingWater].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-horn-sudan/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional and attested urban population trajectories, active settlement counts and leading urban centres across the Horn of Africa and Anglo-Egyptian Sudan (1880AD to 1960AD).</figcaption>
</figure>

## Italian Eritrea, Djibouti and the Somalilands

Coastal colonial territories exhibited smaller aggregate populations than the Ethiopian highlands or Nile basin but underwent intense urban concentration around administrative capitals and railhead ports. Italian Eritrea grew from 299,3k in 1880AD to a pre-war plateau of 348,9k in 1930AD before stabilising around 346,1k in 1950AD and 334,8k in 1960AD [@Taddia2013ModernEthiopia; @Olusesan2020SecessionOutside]. Within that modest regional envelope, Asmara exploded from 5,1k in 1893AD and 21.601 in the 1931AD ISTAT census to 98k in 1939AD (during the Ethiopian mobilisation), 120,4k in 1952AD and 123,5k as an agglomeration in 1960AD, drawing highland labour even through the post-1941AD British Military Administration downturn [@Fuller2011ItalyColonial; @Yi2026TheRole; @Beyan2021UnemploymentAnd; @Muller2020ColonialBorders]. Massawa (17,2k peak), Keren (15k) and Dek'emhāre (12,8k) formed Eritrea's secondary urban belt.

Across the southern Red Sea and Gulf of Aden, French and British Somaliland combined held 299,9k in 1880AD and 179,8k in 1960AD, while Italian Somaliland (later UN Trust Territory AFIS) transitioned from 824,3k in 1880AD to 517,9k in 1960AD [@Omar2001ScrambleHorn; @Kuczynski1949DemographicSurvey2]. Although rural pastoral totals in arid Somaliland remained sparse (roughly 1 person/km²), urban port growth accelerated dramatically: Djibouti expanded from a French port foundation in 1888AD to 31,5k city-proper (37,4k agglomeration) by 1960AD, Hargeisa overtook coastal Berbera (18,1k) and Zeila (6k) to reach 38,4k, and Mogadishu climbed from 6,5k in 1895AD and 29,6k in 1931AD to 55k in 1938AD and 101,5k as an agglomeration by 1960AD [@Darwich2025PortInfrastructures; @Jambir1950StrategicImportance; @Agency1948BritishProposal].

## Anglo-Egyptian Sudan from the Mahdiyya to Independence

Sudan's three sub-regions exhibit the most dramatic statistical transformation in the chapter, both from genuine twentieth-century economic growth and from the landmark 1955-1956 census correction of early Condominium undercounts (Table \ref{tab:trajectory}). During the Mahdiyya, Omdurman swelled to 148k by 1895AD while abandoned Khartoum fell from 54,2k in 1884AD to 4.620 in 1898AD, and Kassalā contracted from 15,2k in 1880AD to 9,8k in 1894AD [@Division1922HandbookThe]. After 1898AD, Condominium reconstruction lifted Khartoum to 50k in 1930AD and 124k in 1960AD while Omdurman recovered from 41.592 in 1905AD to 113.551 in the 1955-1956 census, uniting with Khartoum North into a 342,7k metropolitan capital [@Sudan1956Census].

Parallel commercial corridors emerged along the Red Sea and Gezira plain. Port Sudan rose from 4.289 in 1910AD to 47.562 in 1955AD and 62,7k by 1960AD; railway workshops lifted Atbara from 8,5k in 1910AD to 36.298 in 1955AD and 42k in 1960AD; and cotton irrigation raised Wad Madanī from 11,2k in 1885AD to 47.677 in 1955AD and 56,9k in 1960AD [@Division1922HandbookThe; @Sudan1956Census; @Abdelgadir2024AssessmentImplementation]. In the west, Al-Ubayyiḍ recovered from 12,4k in 1905AD to 58,2k in 1960AD alongside Darfur centres at Al-Fāshir (33,5k) and Nyālā (18,8k), bringing Darfur and Kordofan to 3,34M by 1960AD. Meanwhile, the three southern provinces of Bahr el Ghazal, Upper Nile and Equatoria reached 2,74M at the 1956AD census benchmark, led by modest river towns at Juba (18k agglomeration), Malakal (13,8k) and Wau (13,6k) [@Sudan1956Census].

<figure class="crd-table-figure" id="tab:trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1956AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Northern and Central Highlands</strong></td><td class="crd-td">2,81M</td><td class="crd-td">3,01M</td><td class="crd-td">3,55M</td><td class="crd-td">4,27M</td><td class="crd-td">4,55M</td><td class="crd-td">4,74M</td></tr>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Oromo, Kaffa and Southwest</strong></td><td class="crd-td">3,82M</td><td class="crd-td">4,18M</td><td class="crd-td">4,96M</td><td class="crd-td">6,04M</td><td class="crd-td">6,42M</td><td class="crd-td">6,65M</td></tr>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Hararghe, Bale and Ogaden</strong></td><td class="crd-td">763,7k</td><td class="crd-td">734,7k</td><td class="crd-td">696,6k</td><td class="crd-td">701,7k</td><td class="crd-td">716,4k</td><td class="crd-td">722,9k</td></tr>
<tr><td class="crd-td"><strong>Italian Eritrea and BMA Eritrea</strong></td><td class="crd-td">299,3k</td><td class="crd-td">324,6k</td><td class="crd-td">348,9k</td><td class="crd-td">346,1k</td><td class="crd-td">344,1k</td><td class="crd-td">334,8k</td></tr>
<tr><td class="crd-td"><strong>French Somaliland and British Somaliland</strong></td><td class="crd-td">299,9k</td><td class="crd-td">288,4k</td><td class="crd-td">251,5k</td><td class="crd-td">199,7k</td><td class="crd-td">199,2k</td><td class="crd-td">179,8k</td></tr>
<tr><td class="crd-td"><strong>Italian Somaliland (Somalia Italiana / AFIS)</strong></td><td class="crd-td">824,3k</td><td class="crd-td">812,8k</td><td class="crd-td">726,2k</td><td class="crd-td">586,1k</td><td class="crd-td">579,2k</td><td class="crd-td">517,9k</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Nile, Khartoum and Kassala</strong></td><td class="crd-td">1,02M</td><td class="crd-td">1,04M</td><td class="crd-td">1,18M</td><td class="crd-td">3,76M</td><td class="crd-td">4,39M</td><td class="crd-td">4,9M</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Darfur and Kordofan</strong></td><td class="crd-td">1,15M</td><td class="crd-td">1,15M</td><td class="crd-td">1,08M</td><td class="crd-td">2,82M</td><td class="crd-td">3,12M</td><td class="crd-td">3,34M</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Southern Provinces</strong></td><td class="crd-td">811,3k</td><td class="crd-td">823k</td><td class="crd-td">822k</td><td class="crd-td">2,77M</td><td class="crd-td">2,74M</td><td class="crd-td">2,75M</td></tr>
<tr><td class="crd-td"><strong>Total Study Area</strong></td><td class="crd-td">11,8M</td><td class="crd-td">12,36M</td><td class="crd-td">13,61M</td><td class="crd-td">21,49M</td><td class="crd-td">23,07M</td><td class="crd-td">24,13M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional and total population trajectories across six benchmark years from 1880AD to 1960AD.</figcaption>
</figure>

## Leading Urban Centres and Regional Density Gradients

Table \ref{tab:top-centres} lists the fifteen largest individually assessed urban records in the ledger alongside their chronological coverage and peak populations. Highland Ethiopia retained by far the highest rural and urban densities in the Horn, closing 1960AD at 14,29 persons/km² in Oromo-Kaffa-Southwest and 13,54 persons/km² in the Northern-Central Highlands [@Pankhurst1968EconomicHistory; @Sulas2014AksumWater]. By contrast, Nile-Khartoum-Kassala averaged 5,05 persons/km² across vast desert margins, Southern Sudan stood at 4,37 persons/km², Darfur-Kordofan at 3,73 persons/km², Eritrea at 2,74 persons/km², Hararghe-Ogaden at 2,3 persons/km², Italian Somaliland at 1,1 persons/km² and French and British Somaliland at 0,96 persons/km² [@Sudan1956Census; @Kuczynski1949DemographicSurvey2; @Omar2001ScrambleHorn].

<figure class="crd-table-figure" id="tab:top-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Date</th><th class="crd-th">Obs</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Addis Ababa (Agglomeration)</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">1950AD-1960AD</td><td class="crd-td">541,7k</td><td class="crd-td">1960AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Adis Abeba</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">1890AD-1960AD</td><td class="crd-td">444k</td><td class="crd-td">1960AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Khartoum (Agglomeration)</strong></td><td class="crd-td">Sudan</td><td class="crd-td">1950AD-1960AD</td><td class="crd-td">342,7k</td><td class="crd-td">1960AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Umm Durmān</strong></td><td class="crd-td">Sudan</td><td class="crd-td">1885AD-1955AD</td><td class="crd-td">148k</td><td class="crd-td">1895AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm</strong></td><td class="crd-td">Sudan</td><td class="crd-td">1880AD-1960AD</td><td class="crd-td">124k</td><td class="crd-td">1960AD</td><td class="crd-td">16</td></tr>
<tr><td class="crd-td"><strong>Asmara (Agglomeration)</strong></td><td class="crd-td">Eritrea</td><td class="crd-td">1950AD-1960AD</td><td class="crd-td">123,5k</td><td class="crd-td">1960AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Āsmera</strong></td><td class="crd-td">Eritrea</td><td class="crd-td">1893AD-1952AD</td><td class="crd-td">120,4k</td><td class="crd-td">1952AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Mogadishu (Agglomeration)</strong></td><td class="crd-td">Somalia</td><td class="crd-td">1950AD-1960AD</td><td class="crd-td">101,5k</td><td class="crd-td">1960AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Djibouti</strong></td><td class="crd-td">Djibouti</td><td class="crd-td">1890AD-1955AD</td><td class="crd-td">100k</td><td class="crd-td">1940AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Kassalā</strong></td><td class="crd-td">Sudan</td><td class="crd-td">1880AD-1960AD</td><td class="crd-td">72k</td><td class="crd-td">1938AD</td><td class="crd-td">16</td></tr>
<tr><td class="crd-td"><strong>Muqdisho</strong></td><td class="crd-td">Somalia</td><td class="crd-td">1895AD-1953AD</td><td class="crd-td">70k</td><td class="crd-td">1948AD</td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>Al-Ubayyiḍ</strong></td><td class="crd-td">Sudan</td><td class="crd-td">1882AD-1960AD</td><td class="crd-td">65,8k</td><td class="crd-td">1948AD</td><td class="crd-td">17</td></tr>
<tr><td class="crd-td"><strong>Būr Sūdān</strong></td><td class="crd-td">Sudan</td><td class="crd-td">1907AD-1960AD</td><td class="crd-td">62,7k</td><td class="crd-td">1960AD</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm Baḥrī</strong></td><td class="crd-td">Sudan</td><td class="crd-td">1900AD-1955AD</td><td class="crd-td">62k</td><td class="crd-td">1900AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Marka</strong></td><td class="crd-td">Somalia</td><td class="crd-td">1890AD-1960AD</td><td class="crd-td">61,6k</td><td class="crd-td">1950AD</td><td class="crd-td">10</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Fifteen largest individually assessed urban records in the Horn of Africa and Anglo-Egyptian Sudan (1880AD to 1960AD).</figcaption>
</figure>

# Limitations

Three methodological constraints govern these reconstructions. First, the sharp rise in Sudanese sub-regional totals between 1930AD (3,08M across all three Condominium zones) and 1950AD to 1956AD (9,35M to 10,25M) reflects a structural regime shift from incomplete pre-war poll-tax estimates to the 1955-1956 First Population Census and post-1950 annual series [@Division1922HandbookThe; @Sudan1956Census; @Kuczynski1949DemographicSurvey2]. While the 1956AD provincial totals directly reflect the census, pre-1930AD rural figures in Darfur, Kordofan and the southern Sudd wetlands carry substantially wider uncertainty margins than highland Ethiopia or Italian Eritrea.

Second, maintaining strict fidelity to source series introduces deliberate scope pairings and a small number of residual transliteration overlaps inside the 1.452-entry urban ledger. Seven major capitals carry separate 1950AD to 1960AD metropolitan agglomeration rows alongside their municipal city-proper records (such as Addis Ababa and Khartoum), while two regional towns retain distinct historical-orthographic series in the ledger (Wad Madanī alongside Wad Medani, and Harar alongside an agglomeration-derived Harare entry in Hararghe) [@Pankhurst1968EconomicHistory; @Demisse2024UrbanLand]. Users summing urban populations should therefore filter by scope or consult the companion gazetteer rather than aggregating raw ledger peaks indiscriminately.

Third, pastoralist mobility across arid lowlands poses persistent enumeration challenges. In British and Italian Somaliland, the Ogaden, Danakil and northern Darfur, seasonal migrations across colonial boundaries meant that single-date town counts (28 of the 1.452 entries) and regional Blue Book estimates varied sharply with drought cycles and border-rectification disputes [@Omar2001ScrambleHorn; @Agency1948BritishProposal; @Jambir1950StrategicImportance].

# Conclusion

Between 1880AD and 1960AD, the Horn of Africa and Anglo-Egyptian Sudan more than doubled in population from 11,8M to 24,13M inhabitants across 4.407.073 km². Following the demographic trough of the 1888AD to 1892AD Ethiopian Great Famine and Mahdist conflicts, expansion clustered along railway corridors, irrigated cotton plains and colonial port-capitals: Addis Ababa surged past half a million metropolitan inhabitants, Khartoum-Omdurman surpassed 340k, Asmara topped 123k and Mogadishu passed 101k. By pairing 1.452 individually assessed settlements with the 1955-1956 Sudanese census, Italian Eritrean enumerations and mass-conserving spatial interpolation, NICETHI supplies a continuous demographic baseline directly preceding post-colonial independence.

# Appendix

## Sub-Regional Density and Share Series

Table \ref{tab:density-appendix} reports mean population density in persons per km² across all nine sub-regions from 1880AD to 1960AD, quantifying the sustained ten- to fifteen-fold gradient between highland Ethiopia and the Somali littoral. Table \ref{tab:shares-appendix} tracks each sub-region's percentage share of the total study area, illustrating how the post-1950 integration of the 1955-1956 Sudanese census shifted Sudan's combined share from roughly one-quarter in 1880AD to 45,5% by 1960AD.

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1956AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Northern and Central Highlands</strong></td><td class="crd-td">8,02</td><td class="crd-td">8,61</td><td class="crd-td">10,15</td><td class="crd-td">12,19</td><td class="crd-td">13,01</td><td class="crd-td">13,54</td></tr>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Oromo, Kaffa and Southwest</strong></td><td class="crd-td">8,22</td><td class="crd-td">8,98</td><td class="crd-td">10,65</td><td class="crd-td">12,97</td><td class="crd-td">13,8</td><td class="crd-td">14,29</td></tr>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Hararghe, Bale and Ogaden</strong></td><td class="crd-td">2,43</td><td class="crd-td">2,34</td><td class="crd-td">2,21</td><td class="crd-td">2,23</td><td class="crd-td">2,28</td><td class="crd-td">2,3</td></tr>
<tr><td class="crd-td"><strong>Italian Eritrea and BMA Eritrea</strong></td><td class="crd-td">2,45</td><td class="crd-td">2,65</td><td class="crd-td">2,85</td><td class="crd-td">2,83</td><td class="crd-td">2,81</td><td class="crd-td">2,74</td></tr>
<tr><td class="crd-td"><strong>French Somaliland and British Somaliland</strong></td><td class="crd-td">1,6</td><td class="crd-td">1,54</td><td class="crd-td">1,34</td><td class="crd-td">1,06</td><td class="crd-td">1,06</td><td class="crd-td">0,96</td></tr>
<tr><td class="crd-td"><strong>Italian Somaliland (Somalia Italiana / AFIS)</strong></td><td class="crd-td">1,74</td><td class="crd-td">1,72</td><td class="crd-td">1,54</td><td class="crd-td">1,24</td><td class="crd-td">1,23</td><td class="crd-td">1,1</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Nile, Khartoum and Kassala</strong></td><td class="crd-td">1,05</td><td class="crd-td">1,07</td><td class="crd-td">1,21</td><td class="crd-td">3,87</td><td class="crd-td">4,52</td><td class="crd-td">5,05</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Darfur and Kordofan</strong></td><td class="crd-td">1,28</td><td class="crd-td">1,28</td><td class="crd-td">1,2</td><td class="crd-td">3,15</td><td class="crd-td">3,48</td><td class="crd-td">3,73</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Southern Provinces</strong></td><td class="crd-td">1,29</td><td class="crd-td">1,31</td><td class="crd-td">1,31</td><td class="crd-td">4,42</td><td class="crd-td">4,37</td><td class="crd-td">4,37</td></tr>
<tr><td class="crd-td"><strong>Mean Study Area</strong></td><td class="crd-td">2,68</td><td class="crd-td">2,81</td><td class="crd-td">3,09</td><td class="crd-td">4,88</td><td class="crd-td">5,23</td><td class="crd-td">5,48</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Mean population density (persons per km²) across the nine sub-regions from 1880AD to 1960AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:shares-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1880AD (%)</th><th class="crd-th">1910AD (%)</th><th class="crd-th">1930AD (%)</th><th class="crd-th">1950AD (%)</th><th class="crd-th">1956AD (%)</th><th class="crd-th">1960AD (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Northern and Central Highlands</strong></td><td class="crd-td">23,8</td><td class="crd-td">24,3</td><td class="crd-td">26,1</td><td class="crd-td">19,8</td><td class="crd-td">19,7</td><td class="crd-td">19,6</td></tr>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Oromo, Kaffa and Southwest</strong></td><td class="crd-td">32,4</td><td class="crd-td">33,8</td><td class="crd-td">36,4</td><td class="crd-td">28,1</td><td class="crd-td">27,9</td><td class="crd-td">27,6</td></tr>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Hararghe, Bale and Ogaden</strong></td><td class="crd-td">6,5</td><td class="crd-td">5,9</td><td class="crd-td">5,1</td><td class="crd-td">3,3</td><td class="crd-td">3,1</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Italian Eritrea and BMA Eritrea</strong></td><td class="crd-td">2,5</td><td class="crd-td">2,6</td><td class="crd-td">2,6</td><td class="crd-td">1,6</td><td class="crd-td">1,5</td><td class="crd-td">1,4</td></tr>
<tr><td class="crd-td"><strong>French Somaliland and British Somaliland</strong></td><td class="crd-td">2,5</td><td class="crd-td">2,3</td><td class="crd-td">1,8</td><td class="crd-td">0,9</td><td class="crd-td">0,9</td><td class="crd-td">0,7</td></tr>
<tr><td class="crd-td"><strong>Italian Somaliland (Somalia Italiana / AFIS)</strong></td><td class="crd-td">7</td><td class="crd-td">6,6</td><td class="crd-td">5,3</td><td class="crd-td">2,7</td><td class="crd-td">2,5</td><td class="crd-td">2,1</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Nile, Khartoum and Kassala</strong></td><td class="crd-td">8,7</td><td class="crd-td">8,4</td><td class="crd-td">8,7</td><td class="crd-td">17,5</td><td class="crd-td">19</td><td class="crd-td">20,3</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Darfur and Kordofan</strong></td><td class="crd-td">9,7</td><td class="crd-td">9,3</td><td class="crd-td">7,9</td><td class="crd-td">13,1</td><td class="crd-td">13,5</td><td class="crd-td">13,8</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Southern Provinces</strong></td><td class="crd-td">6,9</td><td class="crd-td">6,7</td><td class="crd-td">6</td><td class="crd-td">12,9</td><td class="crd-td">11,9</td><td class="crd-td">11,4</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Percentage share of total regional population by sub-region across six benchmark years from 1880AD to 1960AD.</figcaption>
</figure>

## Somali Administrative Benchmarks and Colonial Provincial Regimes

Table \ref{tab:somalia-1961} documents the eight-province 1961AD Somali regional population distribution across former Italian Somaliland and British Somaliland (1.863.584 persons), while Table \ref{tab:hgis-units} summarises representative Condominium provincial polygons across the 1914AD, 1925AD and 1940AD territorial regimes [@Omar2001ScrambleHorn; @Division1922HandbookThe; @Runfola2020GeoBoundaries].

<figure class="crd-table-figure" id="tab:somalia-1961">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province</th><th class="crd-th">Level</th><th class="crd-th">Population (1961AD)</th><th class="crd-th">Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Banaadir</strong></td><td class="crd-td">ADM1</td><td class="crd-td">387.600</td><td class="crd-td">20,8</td></tr>
<tr><td class="crd-td"><strong>Alto Giuba</strong></td><td class="crd-td">ADM1</td><td class="crd-td">362.234</td><td class="crd-td">19,4</td></tr>
<tr><td class="crd-td"><strong>Burao</strong></td><td class="crd-td">ADM1</td><td class="crd-td">330.000</td><td class="crd-td">17,7</td></tr>
<tr><td class="crd-td"><strong>Hargeisa</strong></td><td class="crd-td">ADM1</td><td class="crd-td">270.000</td><td class="crd-td">14,5</td></tr>
<tr><td class="crd-td"><strong>Hiiraan</strong></td><td class="crd-td">ADM1</td><td class="crd-td">176.528</td><td class="crd-td">9,5</td></tr>
<tr><td class="crd-td"><strong>Mudug</strong></td><td class="crd-td">ADM1</td><td class="crd-td">141.120</td><td class="crd-td">7,6</td></tr>
<tr><td class="crd-td"><strong>Basso Giuba</strong></td><td class="crd-td">ADM1</td><td class="crd-td">113.449</td><td class="crd-td">6,1</td></tr>
<tr><td class="crd-td"><strong>Migiurtinia</strong></td><td class="crd-td">ADM1</td><td class="crd-td">82.653</td><td class="crd-td">4,4</td></tr>
<tr><td class="crd-td"><strong>Total Somalia (1961AD)</strong></td><td class="crd-td">ADM0</td><td class="crd-td">1.863.584</td><td class="crd-td">100</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Somali regional benchmark populations (1961AD) spanning former Italian Somaliland and British Somaliland provinces.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:hgis-units">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Regime</th><th class="crd-th">Span</th><th class="crd-th">Province Unit</th><th class="crd-th">Area (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Colonial (1914AD)</strong></td><td class="crd-td">1900AD-1910AD</td><td class="crd-td">Kordofan</td><td class="crd-td">48.866</td></tr>
<tr><td class="crd-td"><strong>Colonial (1914AD)</strong></td><td class="crd-td">1900AD-1910AD</td><td class="crd-td">Kassala</td><td class="crd-td">11.777</td></tr>
<tr><td class="crd-td"><strong>Colonial (1914AD)</strong></td><td class="crd-td">1900AD-1910AD</td><td class="crd-td">Blue Nile</td><td class="crd-td">137.391</td></tr>
<tr><td class="crd-td"><strong>Colonial (1914AD)</strong></td><td class="crd-td">1900AD-1910AD</td><td class="crd-td">Khartoum</td><td class="crd-td">20.889</td></tr>
<tr><td class="crd-td"><strong>Colonial (1914AD)</strong></td><td class="crd-td">1900AD-1910AD</td><td class="crd-td">Abyei PCA</td><td class="crd-td">10.795</td></tr>
<tr><td class="crd-td"><strong>Mandates (1925AD)</strong></td><td class="crd-td">1920AD-1930AD</td><td class="crd-td">Kordofan</td><td class="crd-td">48.866</td></tr>
<tr><td class="crd-td"><strong>Mandates (1925AD)</strong></td><td class="crd-td">1920AD-1930AD</td><td class="crd-td">Kassala</td><td class="crd-td">11.777</td></tr>
<tr><td class="crd-td"><strong>Mandates (1925AD)</strong></td><td class="crd-td">1920AD-1930AD</td><td class="crd-td">Blue Nile</td><td class="crd-td">137.391</td></tr>
<tr><td class="crd-td"><strong>Mandates (1925AD)</strong></td><td class="crd-td">1920AD-1930AD</td><td class="crd-td">Khartoum</td><td class="crd-td">20.889</td></tr>
<tr><td class="crd-td"><strong>Mandates (1925AD)</strong></td><td class="crd-td">1920AD-1930AD</td><td class="crd-td">Abyei PCA</td><td class="crd-td">10.795</td></tr>
<tr><td class="crd-td"><strong>Colonial (1940AD)</strong></td><td class="crd-td">1940AD</td><td class="crd-td">Kordofan</td><td class="crd-td">48.866</td></tr>
<tr><td class="crd-td"><strong>Colonial (1940AD)</strong></td><td class="crd-td">1940AD</td><td class="crd-td">Kassala</td><td class="crd-td">11.857</td></tr>
<tr><td class="crd-td"><strong>Colonial (1940AD)</strong></td><td class="crd-td">1940AD</td><td class="crd-td">Blue Nile</td><td class="crd-td">137.391</td></tr>
<tr><td class="crd-td"><strong>Colonial (1940AD)</strong></td><td class="crd-td">1940AD</td><td class="crd-td">Khartoum</td><td class="crd-td">20.889</td></tr>
<tr><td class="crd-td"><strong>Colonial (1940AD)</strong></td><td class="crd-td">1940AD</td><td class="crd-td">Abyei PCA</td><td class="crd-td">10.795</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Representative Anglo-Egyptian Sudan colonial provincial polygon regimes in the NICETHI historical boundary archive.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Of the 1.452 individually assessed settlements in the chapter ledger, 237 lie strictly inside the nine 5-arcminute sub-regional pixel zones reported in Table \ref{tab:subregions}, while two frontier settlements (Birao in neighbouring Central African Republic and Faza on the Lamu archipelago margin) fall immediately outside the raster perimeter and are assigned to their adjacent sub-regions in the companion settlement gazetteer so all 1.452 entries are catalogued.
