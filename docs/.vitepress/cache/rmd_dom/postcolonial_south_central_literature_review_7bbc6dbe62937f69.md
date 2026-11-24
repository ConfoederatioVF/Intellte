---
title: "Post-Colonial South-Central Africa and Mozambique"
subtitle: "Zambia, Zimbabwe, Malawi and Mozambique from Independence to the Present"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: postcolonial_south_central_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Thirty-three first-level administrative divisions across Zambia, Zimbabwe, Malawi and Mozambique with 838 individually assessed settlements between 1964AD and 2025AD."
hero_label: "fig:hero-postcolonial-sc"

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

Between 1964AD and 2025AD, the four neighbouring territories of Zambia, Zimbabwe, Malawi and Mozambique grew more than fivefold in aggregate population, climbing from 17,79M inhabitants at the close of British rule in Northern Rhodesia and Nyasaland to 91,03M across 2.015.507 km². Mean regional density rose over the same six decades from 8,83 to 45,17 persons per km², yet growth diverged sharply by ecological zone, mining cycle, war and public health. Zambia shifted from early Copperbelt industrialisation toward Lusaka administrative primacy after the 1975AD copper price collapse. Zimbabwe experienced rapid post-1980AD fertility decline followed by severe HIV mortality in the 1990s and economic emigration during the 2000s, slowing core city growth in Harare and Bulawayo while spilling population into peri-urban townships. Malawi retained the highest rural crowding in the region, exceeding 250 persons per km² across its Southern and Central regions while relocating its capital from Zomba to Lilongwe. Mozambique suffered prolonged wartime displacement between 1977AD and 1992AD before sustaining brisk coastal and northern expansion across Maputo-Matola, Beira, Nampula and Cabo Delgado. NICETHI reconciles 838 individually assessed settlements across 3.300 chronological observations with provincial census benchmarks and mass-conserving spatial disaggregation across 33 first-level administrative divisions.



# Background

## Post-Colonial Frontiers, Resource Corridors and Highland Cores

South-Central Africa and Mozambique span 2.015.507 km² from the upper Congo-Zambezi watershed and the Kafue copper belt to the Shire Highlands, Lake Malawi and the Indian Ocean littoral between Cabo Delgado and Ponta do Ouro [@Runfola2020GeoBoundaries]. At the start of 1964AD, political sovereignty remained fractured along colonial lines. Zambia and Malawi gained independence in 1964AD following the dissolution of the Central African Federation, whereas Southern Rhodesia resisted majority rule until 1980AD and Mozambique fought a decade-long liberation struggle before independence in June 1975 [@INEMozambique2019RGPH; @ZIMSTAT2023ZimbabweCensus; @NSOMalawi2019Census]. Those staggered transitions left sharply different infrastructural endowments, urban settlement patterns and administrative enumerations across the four states [@Bank2022ZambiaUrbanization; @Bank2021MozambiqueNorthern].

Population distribution across this expanse has never reflected land area alone. Malawi occupies only 4,7% of the study area (95.200 km²), yet held 21,3% of regional inhabitants in 1964AD (3,79M) and maintained 22,8% (20,79M) by 2025AD [@NSOMalawi2019Census; @Maviko2025ImpactSustainable]. Its fertile Rift Valley alluvial plains and Shire Highlands contrast with Zambia's thinly settled Kalahari sandveld in Western and North-Western provinces, where large mining towns along the Copperbelt and the railway line from Livingstone to Lusaka created one of Sub-Saharan Africa's earliest urbanised corridors [@ZamStats2023ZambiaCensus; @Bank2022ZambiaUrbanization].

In Zimbabwe, colonial land apportionment concentrated peasant agriculture on rocky communal reserves across Mashonaland, Manicaland and Masvingo while confining commercial estates and industrial towns to the central Highveld plateau linking Bulawayo, Gweru, Harare and Mutare [@ZIMSTAT2023ZimbabweCensus; @Muzondi2014UrbanizationAnd]. In Mozambique, Portuguese settlement and port railways oriented demographic gravity toward three east-west corridors: Maputo in the far south, Beira along the Pungwe-Zambezi outlet toward Zimbabwe and Malawi, and Nacala-Nampula across the populous northern plateau [@INEMozambique2019RGPH; @Shannon2018SustainableUrbanization; @Bank2021MozambiqueNorthern].

## Census Historiography and Spatial Demographic Sources

Modern national statistical offices in all four states established regular decennial or near-decennial censuses after independence, though political upheaval interrupted several counts. Zambia conducted national enumerations in 1969AD, 1980AD, 1990AD, 2000AD, 2010AD and 2022AD, charting both the rapid post-independence expansion of Copperbelt towns and the subsequent shift of growth toward Lusaka and rural agricultural frontiers [@ZamStats2023ZambiaCensus; @Wotela2025UsingCensus]. Malawi enumerated its population in 1966AD, 1977AD, 1987AD, 1998AD, 2008AD and 2018AD, supplemented by official intercensal projections to 2023AD [@NSOMalawi2019Census]. Zimbabwe's post-independence series runs through 1982AD, 1992AD, 2002AD, 2012AD and 2022AD, capturing an early fertility transition alongside later HIV mortality and hyperinflation-driven cross-border emigration [@ZIMSTAT2023ZimbabweCensus; @Wekwete2014TheAssociation].

Mozambique's statistical trajectory was far more disrupted. Late colonial censuses in 1960AD and 1970AD were followed by an initial post-independence enumeration in 1980AD, after which civil war prevented a national count until 1997AD, with regular ten-year rounds resuming in 2007AD and 2017AD [@INEMozambique2019RGPH; @Hayford2011UncertainFuture]. Between census benchmarks, demographic and health surveys, community sampling frames built from open satellite imagery and longitudinal vital-registration studies have bridged gaps in maternal mortality, fertility timing and informal urban density across Maputo, Beira, rural Gaza, central Zambia and Malawi [@Wagenaar2018DevelopingRepresentative; @Li2026SimilarLong; @Singh2022ComparisonApproaches; @Chola2016ExaminingUnderlying]. Combining those national enumerations with historical monument and settlement registers provides a continuous post-colonial demographic record [@NMMZ2022ZimbabweSites; @Runfola2020GeoBoundaries].

# Methodology

## Administrative Partition and Territorial Accounting

The chapter domain covers 2.015.507 km² partitioned across 24.477 five-arcminute raster cells into 33 first-level administrative divisions drawn from geoBoundaries: 10 provinces in Zambia, 10 provinces in Zimbabwe, 3 regions in Malawi and 10 provincial units in Mozambique, where Maputo City and Maputo Province are merged into a single provincial cell footprint (23.010 km²) to preserve spatial continuity at five-arcminute resolution [@Runfola2020GeoBoundaries]. Table \ref{tab:subregions} lists all 33 units with their surface areas, pixel counts, interior assessed settlements and shares of total territory.

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Assessed Sites</th><th class="crd-th">Area Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lusaka (ZMB)</strong></td><td class="crd-td">23.508</td><td class="crd-td">284</td><td class="crd-td">15</td><td class="crd-td">1,2</td></tr>
<tr><td class="crd-td"><strong>Copperbelt (ZMB)</strong></td><td class="crd-td">31.608</td><td class="crd-td">378</td><td class="crd-td">21</td><td class="crd-td">1,6</td></tr>
<tr><td class="crd-td"><strong>Central (ZMB)</strong></td><td class="crd-td">109.924</td><td class="crd-td">1.322</td><td class="crd-td">10</td><td class="crd-td">5,5</td></tr>
<tr><td class="crd-td"><strong>Eastern (ZMB)</strong></td><td class="crd-td">51.660</td><td class="crd-td">619</td><td class="crd-td">11</td><td class="crd-td">2,6</td></tr>
<tr><td class="crd-td"><strong>Southern (ZMB)</strong></td><td class="crd-td">67.730</td><td class="crd-td">824</td><td class="crd-td">16</td><td class="crd-td">3,4</td></tr>
<tr><td class="crd-td"><strong>Northern (ZMB)</strong></td><td class="crd-td">76.154</td><td class="crd-td">900</td><td class="crd-td">12</td><td class="crd-td">3,8</td></tr>
<tr><td class="crd-td"><strong>Luapula (ZMB)</strong></td><td class="crd-td">47.654</td><td class="crd-td">565</td><td class="crd-td">26</td><td class="crd-td">2,4</td></tr>
<tr><td class="crd-td"><strong>Western (ZMB)</strong></td><td class="crd-td">128.219</td><td class="crd-td">1.551</td><td class="crd-td">8</td><td class="crd-td">6,4</td></tr>
<tr><td class="crd-td"><strong>North-Western (ZMB)</strong></td><td class="crd-td">125.883</td><td class="crd-td">1.505</td><td class="crd-td">14</td><td class="crd-td">6,2</td></tr>
<tr><td class="crd-td"><strong>Muchinga (ZMB)</strong></td><td class="crd-td">87.210</td><td class="crd-td">1.036</td><td class="crd-td">11</td><td class="crd-td">4,3</td></tr>
<tr><td class="crd-td"><strong>Harare (ZWE)</strong></td><td class="crd-td">981</td><td class="crd-td">12</td><td class="crd-td">4</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>Bulawayo (ZWE)</strong></td><td class="crd-td">564</td><td class="crd-td">7</td><td class="crd-td">2</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>Mashonaland East (ZWE)</strong></td><td class="crd-td">32.093</td><td class="crd-td">393</td><td class="crd-td">10</td><td class="crd-td">1,6</td></tr>
<tr><td class="crd-td"><strong>Manicaland (ZWE)</strong></td><td class="crd-td">35.867</td><td class="crd-td">442</td><td class="crd-td">12</td><td class="crd-td">1,8</td></tr>
<tr><td class="crd-td"><strong>Mashonaland West (ZWE)</strong></td><td class="crd-td">57.334</td><td class="crd-td">699</td><td class="crd-td">13</td><td class="crd-td">2,8</td></tr>
<tr><td class="crd-td"><strong>Midlands (ZWE)</strong></td><td class="crd-td">49.118</td><td class="crd-td">605</td><td class="crd-td">20</td><td class="crd-td">2,4</td></tr>
<tr><td class="crd-td"><strong>Masvingo (ZWE)</strong></td><td class="crd-td">56.989</td><td class="crd-td">710</td><td class="crd-td">8</td><td class="crd-td">2,8</td></tr>
<tr><td class="crd-td"><strong>Mashonaland Central (ZWE)</strong></td><td class="crd-td">28.865</td><td class="crd-td">351</td><td class="crd-td">10</td><td class="crd-td">1,4</td></tr>
<tr><td class="crd-td"><strong>Matabeleland North (ZWE)</strong></td><td class="crd-td">74.677</td><td class="crd-td">919</td><td class="crd-td">5</td><td class="crd-td">3,7</td></tr>
<tr><td class="crd-td"><strong>Matabeleland South (ZWE)</strong></td><td class="crd-td">54.579</td><td class="crd-td">681</td><td class="crd-td">10</td><td class="crd-td">2,7</td></tr>
<tr><td class="crd-td"><strong>Southern Region (MWI)</strong></td><td class="crd-td">32.445</td><td class="crd-td">392</td><td class="crd-td">106</td><td class="crd-td">1,6</td></tr>
<tr><td class="crd-td"><strong>Central Region (MWI)</strong></td><td class="crd-td">35.797</td><td class="crd-td">429</td><td class="crd-td">53</td><td class="crd-td">1,8</td></tr>
<tr><td class="crd-td"><strong>Northern Region (MWI)</strong></td><td class="crd-td">26.958</td><td class="crd-td">320</td><td class="crd-td">24</td><td class="crd-td">1,3</td></tr>
<tr><td class="crd-td"><strong>Nampula (MOZ)</strong></td><td class="crd-td">78.631</td><td class="crd-td">948</td><td class="crd-td">71</td><td class="crd-td">3,9</td></tr>
<tr><td class="crd-td"><strong>Zambézia (MOZ)</strong></td><td class="crd-td">102.084</td><td class="crd-td">1.241</td><td class="crd-td">61</td><td class="crd-td">5,1</td></tr>
<tr><td class="crd-td"><strong>Tete (MOZ)</strong></td><td class="crd-td">99.108</td><td class="crd-td">1.198</td><td class="crd-td">18</td><td class="crd-td">4,9</td></tr>
<tr><td class="crd-td"><strong>Cabo Delgado (MOZ)</strong></td><td class="crd-td">78.300</td><td class="crd-td">934</td><td class="crd-td">40</td><td class="crd-td">3,9</td></tr>
<tr><td class="crd-td"><strong>Sofala (MOZ)</strong></td><td class="crd-td">67.918</td><td class="crd-td">837</td><td class="crd-td">21</td><td class="crd-td">3,4</td></tr>
<tr><td class="crd-td"><strong>Maputo (MOZ)</strong></td><td class="crd-td">23.010</td><td class="crd-td">297</td><td class="crd-td">34</td><td class="crd-td">1,1</td></tr>
<tr><td class="crd-td"><strong>Niassa (MOZ)</strong></td><td class="crd-td">124.091</td><td class="crd-td">1.484</td><td class="crd-td">25</td><td class="crd-td">6,2</td></tr>
<tr><td class="crd-td"><strong>Manica (MOZ)</strong></td><td class="crd-td">63.126</td><td class="crd-td">778</td><td class="crd-td">17</td><td class="crd-td">3,1</td></tr>
<tr><td class="crd-td"><strong>Inhambane (MOZ)</strong></td><td class="crd-td">67.979</td><td class="crd-td">859</td><td class="crd-td">25</td><td class="crd-td">3,4</td></tr>
<tr><td class="crd-td"><strong>Gaza (MOZ)</strong></td><td class="crd-td">75.444</td><td class="crd-td">957</td><td class="crd-td">29</td><td class="crd-td">3,7</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Thirty-three first-level administrative divisions across Zambia, Zimbabwe, Malawi and Mozambique from 1964AD to 2025AD.</figcaption>
</figure>

Within NICETHI, the chapter spans 1964AD to 2026AD and reports 14 benchmark horizons: 1964AD, 1969AD, 1973AD, 1978AD, 1983AD, 1987AD, 1992AD, 1997AD, 2002AD, 2006AD, 2011AD, 2016AD, 2020AD and 2025AD. Sub-regional series track total resident population combining city-proper municipalities, expanding extra-municipal suburbs and dispersed agricultural villages [@INEMozambique2019RGPH; @ZamStats2023ZambiaCensus; @ZIMSTAT2023ZimbabweCensus; @NSOMalawi2019Census].

## Settlement Screening and Metropolitan Reconciliation

To anchor urban hierarchies across the four countries and their immediate borderlands, 897 candidate settlement entries were screened from national census gazetteers, colonial late-period enumerations and satellite-delineated urban agglomeration ledgers [@ZamStats2023ZambiaCensus; @ZIMSTAT2023ZimbabweCensus; @NSOMalawi2019Census; @INEMozambique2019RGPH; @Wagenaar2018DevelopingRepresentative]. Removal of 59 duplicate alias records and overlapping district fragments left 838 individually assessed settlements across 3.300 chronological observations (Figure \ref{fig:hero-postcolonial-sc}).

Strict spatial-scope tagging distinguishes 828 city-proper settlements from 10 metropolitan agglomerations, namely Lubumbashi, Lusaka, Maputo, Harare, Lilongwe, Blantyre, Bulawayo, Francistown and the two remaining cross-border agglomerations, preventing municipal cores and suburban satellites from being double-counted during spatial gridding [@Mottelson2023UrbanDensity; @Jorge2014ProcessosDinamicas; @Muzondi2014UrbanizationAnd]. For example, Maputo city proper held 1,09M inhabitants in 2007AD and 1,08M in 2017AD inside fixed municipal limits, whereas adjacent Matola expanded from 424,7k in 1997AD to 1,03M in 2017AD, lifting the wider Maputo agglomeration to 2,98M by 2025AD [@INEMozambique2019RGPH; @Mottelson2023UrbanDensity; @Biza2025SanitaryCivility]. Likewise, Harare's municipal boundary held 1,49M in 2022AD while extra-municipal Chitungwiza (371,2k) and Epworth (206,4k) absorbed much of the capital's growth within the 2,92M Harare agglomeration [@ZIMSTAT2023ZimbabweCensus; @Muzondi2014UrbanizationAnd].

## Matérn Residual Kriging and Pycnophylactic Disaggregation

Because urban agglomerations and gazetted towns capture roughly half of regional inhabitants by 2025AD (Figure \ref{fig:trends}A), continuous rural population surfaces are reconstructed across all 24.477 cells via non-stationary Matérn residual kriging paired with mass-conserving pycnophylactic disaggregation across historical provincial and district census tables [@Runfola2020GeoBoundaries; @Wagenaar2018DevelopingRepresentative]. Historical administrative tables span colonial 1960AD-1969AD divisions (such as Zambia's pre-Muchinga provinces and Zimbabwe's 7 Rhodesian provinces including Victoria and Mashonaland North and South) alongside post-1997AD provincial and district boundaries across all four states [@ZamStats2023ZambiaCensus; @ZIMSTAT2023ZimbabweCensus; @NSOMalawi2019Census; @INEMozambique2019RGPH].

Where census counts were disrupted by war or delayed enumeration, notably across rural Mozambique during the 1980s and early 1990s or in post-2017AD Cabo Delgado, sub-national survey denominators, refugee return records and satellite settlement frames guide spatial allocation without imposing uniform provincial growth multipliers [@Wagenaar2018DevelopingRepresentative; @Bank2021MozambiqueNorthern; @Hayford2011UncertainFuture; @Li2026SimilarLong]. Heritage and protected monument coordinates in Zimbabwe and neighbouring plateaus are incorporated into non-residential buffer masks so uninhabited parks and archaeological reserves are not assigned false urban spillover [@NMMZ2022ZimbabweSites].

# Testing and Validation

## Census Reconciliation and Administrative Lineage Coverage

Cross-checking the settlement ledger against national and borderland jurisdictions demonstrates broad coverage across all four core states and six adjacent frontier buffers (Table \ref{tab:jurisdictions}). Mozambique accounts for 317 settlements and 1.065 observations (32,3% of ledger observations), Malawi contributes 184 settlements and 603 observations, Zambia 127 settlements and 616 observations, and Zimbabwe 86 settlements and 487 observations. Another 124 settlements (529 observations) sit along immediate border corridors in Tanzania, South Africa, the Democratic Republic of the Congo (anchored by Lubumbashi at 3,92M agglomeration population in 2025AD), Botswana, eSwatini and Namibia, eliminating edge cliffs during spatial interpolation [@Runfola2020GeoBoundaries; @Bank2022ZambiaUrbanization].

<figure class="crd-table-figure" id="tab:jurisdictions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Settlements</th><th class="crd-th">City Proper</th><th class="crd-th">Metro</th><th class="crd-th">Observations</th><th class="crd-th">Obs. Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mozambique</strong></td><td class="crd-td">317</td><td class="crd-td">316</td><td class="crd-td">1</td><td class="crd-td">1.065</td><td class="crd-td">32,3</td></tr>
<tr><td class="crd-td"><strong>Malawi</strong></td><td class="crd-td">184</td><td class="crd-td">182</td><td class="crd-td">2</td><td class="crd-td">603</td><td class="crd-td">18,3</td></tr>
<tr><td class="crd-td"><strong>Zambia</strong></td><td class="crd-td">127</td><td class="crd-td">125</td><td class="crd-td">2</td><td class="crd-td">616</td><td class="crd-td">18,7</td></tr>
<tr><td class="crd-td"><strong>Zimbabwe</strong></td><td class="crd-td">86</td><td class="crd-td">83</td><td class="crd-td">3</td><td class="crd-td">487</td><td class="crd-td">14,8</td></tr>
<tr><td class="crd-td"><strong>Tanzania</strong></td><td class="crd-td">39</td><td class="crd-td">39</td><td class="crd-td">0</td><td class="crd-td">154</td><td class="crd-td">4,7</td></tr>
<tr><td class="crd-td"><strong>South Africa</strong></td><td class="crd-td">28</td><td class="crd-td">28</td><td class="crd-td">0</td><td class="crd-td">96</td><td class="crd-td">2,9</td></tr>
<tr><td class="crd-td"><strong>Democratic Republic of the Congo</strong></td><td class="crd-td">25</td><td class="crd-td">24</td><td class="crd-td">1</td><td class="crd-td">120</td><td class="crd-td">3,6</td></tr>
<tr><td class="crd-td"><strong>Botswana</strong></td><td class="crd-td">18</td><td class="crd-td">17</td><td class="crd-td">1</td><td class="crd-td">113</td><td class="crd-td">3,4</td></tr>
<tr><td class="crd-td"><strong>eSwatini</strong></td><td class="crd-td">12</td><td class="crd-td">12</td><td class="crd-td">0</td><td class="crd-td">34</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Namibia</strong></td><td class="crd-td">2</td><td class="crd-td">2</td><td class="crd-td">0</td><td class="crd-td">12</td><td class="crd-td">0,4</td></tr>
<tr><td class="crd-td"><strong>Total Ledger</strong></td><td class="crd-td">838</td><td class="crd-td">828</td><td class="crd-td">10</td><td class="crd-td">3.300</td><td class="crd-td">100</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement and chronological observation coverage by modern jurisdiction across the four core states and six border buffers.</figcaption>
</figure>

Sub-administrative census totals reconcile closely across the 12 official benchmark snapshots stored in the regional archive: Mozambique grew from 6,6M across 9 provinces in 1960AD to 15,28M in 1997AD and 26,9M in 2017AD across 11 provincial units [@INEMozambique2019RGPH]; Malawi climbed from 4,04M in 1966AD to 9,93M in 1998AD and 19,81M in 2023AD [@NSOMalawi2019Census]; Zambia rose from 4,06M across 9 provinces in 1969AD to 9,89M in 2000AD and 19,69M in 2022AD across 10 provinces [@ZamStats2023ZambiaCensus]; and Zimbabwe expanded from 5,04M across 7 colonial provinces in 1969AD to 11,63M in 2002AD and 15,18M in 2022AD across 10 provinces [@ZIMSTAT2023ZimbabweCensus]. Maternal mortality and fertility cross-checks in Zambia and Mozambique confirm that census-derived denominators track survey series closely once wartime under-enumeration and rural recall lags are taken into account [@Banda2015RuralUrban; @Li2026SimilarLong; @Singh2022ComparisonApproaches].

## Settlement Rank-Size Calibration and Urban Primacy

Rank-size testing across the 838 assessed settlements shows close conformity to a balanced Zipf hierarchy rather than extreme single-city macrocephaly. Across the upper fitted sample (n=180), ordinary least-squares regression gives a slope of $q = 1,04$ ($R^2 = 0,98$), while full-sample regression across all 838 sites yields $q = 1,06$ ($R^2 = 0,97$). Figure \ref{fig:rank-size} plots the 766 spatially deduplicated urban peaks ($q = 0,98$, $R^2 = 0,99$) alongside the ten densest administrative divisions in 2025AD.

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-postcolonial-south-central/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 766 spatially deduplicated settlements (q = 0,98, R² = 0,99) and top ten sub-regional densities in 2025AD.</figcaption>
</figure>

Four metropolitan systems anchor the upper tier between 2,9M and 3,9M inhabitants: Lubumbashi on the Congolese border (3,92M), Lusaka (3,23M), Maputo (2,98M) and Harare (2,92M). Immediately below them sit Lilongwe (1,38M) and Blantyre (1,31M) agglomerations, followed by Nampula (1,04M), Kitwe (816,3k), Cidade da Beira (803,9k), Ndola (683,7k) and Bulawayo (666k city proper) [@Bank2022ZambiaUrbanization; @Bank2021MozambiqueNorthern; @ZIMSTAT2023ZimbabweCensus]. The steep drop beyond rank 600 in Figure \ref{fig:rank-size}A marks the 10k-inhabitant urban agglomeration threshold where small district centres transition into dispersed rural settlements [@Wagenaar2018DevelopingRepresentative]. In Figure \ref{fig:rank-size}B, metropolitan city-provinces Harare (2.010 persons per km²) and Bulawayo (909 persons per km²) stand above Malawi's rural-and-urban Southern (283 persons per km²) and Central (251 persons per km²) regions, Lusaka Province (143 persons per km²) and Maputo (113 persons per km²).

# Results

## Regional Trajectory and Country Shares (1964AD to 2025AD)

Aggregate population across the 33 administrative divisions expanded fivefold from 17,79M in 1964AD to 32,15M in 1983AD, 49,14M in 2002AD and 91,03M in 2025AD (Table \ref{tab:country-trajectory} and Figure \ref{fig:trends}). Over the same span, active attested settlements in the regional gazetteer rose nearly tenfold from 72 in 1964AD to 182 in 1992AD and 694 in 2025AD (Figure \ref{fig:trends}B), while attested urban inhabitants climbed above 45M as rural-to-urban migration accelerated after 1990AD (Figure \ref{fig:trends}A).

<figure class="crd-table-figure" id="tab:country-trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Country</th><th class="crd-th">1964AD</th><th class="crd-th">1973AD</th><th class="crd-th">1983AD</th><th class="crd-th">1992AD</th><th class="crd-th">2002AD</th><th class="crd-th">2011AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zambia (10 divisions)</strong></td><td class="crd-td">3,26M</td><td class="crd-td">4,57M</td><td class="crd-td">6,22M</td><td class="crd-td">8,06M</td><td class="crd-td">9,97M</td><td class="crd-td">13,54M</td><td class="crd-td">21,73M</td></tr>
<tr><td class="crd-td"><strong>Zimbabwe (10 divisions)</strong></td><td class="crd-td">3,37M</td><td class="crd-td">6,6M</td><td class="crd-td">7,6M</td><td class="crd-td">8,31M</td><td class="crd-td">11,65M</td><td class="crd-td">12,93M</td><td class="crd-td">15,9M</td></tr>
<tr><td class="crd-td"><strong>Malawi (3 divisions)</strong></td><td class="crd-td">3,79M</td><td class="crd-td">4,94M</td><td class="crd-td">6,9M</td><td class="crd-td">8,82M</td><td class="crd-td">11,07M</td><td class="crd-td">14,25M</td><td class="crd-td">20,79M</td></tr>
<tr><td class="crd-td"><strong>Mozambique (10 divisions)</strong></td><td class="crd-td">7,38M</td><td class="crd-td">9,44M</td><td class="crd-td">11,43M</td><td class="crd-td">13,16M</td><td class="crd-td">16,45M</td><td class="crd-td">21,43M</td><td class="crd-td">32,61M</td></tr>
<tr><td class="crd-td"><strong>Regional Total (33 divisions)</strong></td><td class="crd-td">17,79M</td><td class="crd-td">25,55M</td><td class="crd-td">32,15M</td><td class="crd-td">38,35M</td><td class="crd-td">49,14M</td><td class="crd-td">62,15M</td><td class="crd-td">91,03M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Country-level and total regional population trajectories across seven benchmark years from 1964AD to 2025AD.</figcaption>
</figure>

National trajectories diverged sharply after 1980AD. Zimbabwe rose fastest during the late colonial and early post-independence years, jumping from 3,37M in 1964AD to 7,6M in 1983AD and 11,65M in 2002AD before decelerating to 15,9M in 2025AD, shrinking its regional share from 23,7% in 2002AD to 17,5% in 2025AD [@ZIMSTAT2023ZimbabweCensus]. By contrast, Zambia grew nearly sevenfold from 3,26M in 1964AD to 21,73M in 2025AD, Malawi rose more than fivefold from 3,79M to 20,79M, and Mozambique recovered from slow wartime growth between 1973AD (9,44M) and 1992AD (13,16M) to reach 32,61M by 2025AD [@ZamStats2023ZambiaCensus; @NSOMalawi2019Census; @INEMozambique2019RGPH].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-postcolonial-south-central/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional and urban population trajectories, active settlement counts and leading urban centres across South-Central Africa and Mozambique (1964AD to 2025AD).</figcaption>
</figure>

## Zambia: Copperbelt Reversal and Lusaka Primacy

Zambia's post-colonial demography turned on the rise, crisis and partial recovery of copper mining alongside sustained rural-urban fertility gradients [@Bank2022ZambiaUrbanization; @Wotela2025UsingCensus]. At independence in October 1964, Zambia's 3,26M inhabitants were concentrated along the Copperbelt (678,1k), Eastern (453,7k) and Southern (394,5k) provinces, while Lusaka held only 93,7k provincial residents (132k in the urban municipality). Rapid post-independence industrial investment and lifted colonial movement controls initially pulled migrants into Kitwe (107,8k in 1960AD to 266,3k in 1980AD), Ndola (88,2k to 281,3k), Chingola (50,2k to 130,9k), Mufulira (74,1k to 135,5k) and Luanshya (71,2k to 110,9k) [@ZamStats2023ZambiaCensus; @Bank2022ZambiaUrbanization].

The 1975AD copper price crash reversed that trajectory across the older mining towns. Between 1980AD and 2000AD, Mufulira contracted from 135,5k to 122,3k, Chingola stalled from 130,9k to 147,4k and Luanshya hovered near 115,6k as mine layoffs triggered temporary counter-urbanisation toward Central, Eastern and Northern farming districts [@Bank2022ZambiaUrbanization]. Lusaka, by contrast, never stalled: anchored by government administration, wholesale trade and services, the capital expanded from 536k in 1980AD to 1,08M in 2000AD and 2,21M in the 2022AD ZamStats census (3,23M agglomeration by 2025AD), pushing Lusaka Province from 93,7k in 1964AD to 3,37M in 2025AD [@ZamStats2023ZambiaCensus; @Bank2022ZambiaUrbanization].

Fertility and mortality data from successive censuses and the 2007AD ZDHS explain why overall Zambian growth remained brisk despite Copperbelt stagnation [@Wotela2025UsingCensus; @Chola2016ExaminingUnderlying]. While urban Lusaka and Copperbelt households initiated fertility decline in the 1980s through female schooling and delayed marriage, rural provinces such as Northern, Luapula, Eastern and Muchinga sustained total fertility above five to six births per woman well into the 2000s, even as maternal and pregnancy-related mortality remained markedly higher in rural districts than in towns [@Wotela2025UsingCensus; @Chola2016ExaminingUnderlying; @Banda2015RuralUrban]. After 2005AD, renewed copper investment in North-Western Province (Solwezi and Kansanshi) and the 2011AD creation of Muchinga Province reshaped northern growth, carrying Zambia to 21,73M inhabitants by 2025AD [@ZamStats2023ZambiaCensus].

## Zimbabwe: Fertility Transition, HIV Mortality and Hyperinflation Emigration

Zimbabwe's demographic curve between 1964AD and 2025AD comprises three distinct regimes: late-colonial and early-independence expansion, rapid fertility decline coupled with severe HIV mortality, and hyperinflation-era emigration after 2000AD [@ZIMSTAT2023ZimbabweCensus; @Wekwete2014TheAssociation]. From 3,37M in 1964AD, population climbed to 7,6M by 1983AD and 11,65M by 2002AD. Expanded primary healthcare, girls' education and family-planning access after 1980AD drove one of the earliest sustained fertility transitions in continental Sub-Saharan Africa, bringing total fertility down well ahead of Zambia or Malawi [@ZIMSTAT2023ZimbabweCensus; @Wekwete2014TheAssociation].

That fertility drop collided in the 1990s with a severe HIV/AIDS epidemic and, after 2000AD, hyperinflation and economic contraction. National growth slowed sharply between 2002AD (11,65M) and 2011AD (12,93M) as elevated adult mortality and large-scale labour emigration toward South Africa, Botswana and the United Kingdom removed prime working-age cohorts [@ZIMSTAT2023ZimbabweCensus]. Urban trajectories reflect both demographic shock and boundary effects: Harare city proper grew from 226k in 1960AD to 1,19M in 1992AD and 1,44M in 2002AD, then virtually plateaued at 1,49M in both 2012AD and 2022AD [@ZIMSTAT2023ZimbabweCensus; @Muzondi2014UrbanizationAnd]. Bulawayo similarly peaked at 676,7k in 2002AD before dipping to 653,3k in 2012AD and recovering only to 666k in 2022AD, reflecting industrial decline in Matabeleland and out-migration across the Limpopo [@ZIMSTAT2023ZimbabweCensus].

Population expansion around Harare did not cease; rather, it spilled beyond municipal borders into high-density dormitories where water and sanitation infrastructure lagged behind household formation [@Muzondi2014UrbanizationAnd]. Chitungwiza grew from 172,6k in 1982AD to 371,2k in 2022AD, while Epworth nearly doubled from 114,1k in 2002AD to 206,4k in 2022AD, lifting the functional Harare agglomeration to 2,92M by 2025AD [@ZIMSTAT2023ZimbabweCensus; @Muzondi2014UrbanizationAnd]. Provincial series in the 1992AD benchmark also register boundary re-allocations around Mashonaland East, Harare and Matabeleland North prior to full stabilisation under the 2002AD-2022AD provincial frame [@ZIMSTAT2023ZimbabweCensus; @Runfola2020GeoBoundaries].

## Malawi: Shire Highlands Hyper-Density and the Lilongwe Shift

Malawi stands apart from its three larger neighbours as an overwhelmingly rural, smallholder-dense society whose population multiplied 5,5-fold on a territory of just 95.200 km² [@NSOMalawi2019Census]. From 3,79M inhabitants in 1964AD (39,8 persons per km²), Malawi climbed to 6,9M in 1983AD, 11,07M in 2002AD and 20,79M in 2025AD, reaching 218,35 persons per km² nationally [@NSOMalawi2019Census]. Density remains concentrated in the Southern Region (1,93M in 1964AD to 9,18M in 2025AD, or 282,79 persons per km²) and Central Region (1,38M to 8,98M, or 250,72 persons per km²), where Shire Highlands and Lilongwe plain districts such as Dedza sustain intensive maize and legume cultivation on shrinking family plots [@NSOMalawi2019Census; @Maviko2025ImpactSustainable]. Northern Region remained less crowded (472,7k in 1964AD to 2,64M in 2025AD, 97,79 persons per km²), anchored by Mzuzu (10,7k in 1970AD to 221,3k in 2018AD and 307,1k by 2025AD).

At the household level, Malawi's rapid expansion reflects persistently high rural fertility moderated only gradually by female schooling, contraceptive diffusion and digital communication networks, alongside kinship-based child fostering to cushion HIV mortality and agricultural income shocks [@Billari2020MobilePhones; @Bachan2014AnticipatoryChild; @Maviko2025ImpactSustainable]. Longitudinal evidence from the Malawi Longitudinal Study of Families and Health demonstrates that mobile-phone connectivity accelerated fertility reduction among educated women while leaving remote rural households with higher desired family sizes [@Billari2020MobilePhones]. Anticipatory fostering of orphans and nieces across extended kin networks similarly buffered rural-urban dependency ratios during the height of the 1990s-2000s AIDS crisis [@Bachan2014AnticipatoryChild].

Urbanisation in Malawi remained comparatively low in share but underwent a decisive geographical pivot after 1975AD when Lilongwe replaced Zomba as the national capital [@NSOMalawi2019Census]. In 1977AD, commercial Blantyre (222,2k) more than doubled administrative Lilongwe (102,9k). Over the next four decades, state employment, agricultural trade and peri-urban settlements propelled Lilongwe past Blantyre: by the 2018AD census, Lilongwe city proper reached 989,3k against Blantyre's 800,3k (1,16M versus 871,8k in 2023AD official estimates), and by 2025AD the Lilongwe agglomeration stood at 1,38M ahead of Blantyre's 1,31M while former colonial capital Zomba sat at 116,8k city proper in 2023AD [@NSOMalawi2019Census].

## Mozambique: Civil War Displacement, Coastal Corridors and Cabo Delgado

Mozambique's demographic history from 1964AD to 2025AD falls into three contrasting phases: late-colonial decolonisation, the 1977AD-1992AD civil war and post-1992AD reconstruction alongside renewed northern insurgency [@INEMozambique2019RGPH; @Hayford2011UncertainFuture; @Bank2021MozambiqueNorthern]. Between 1964AD and 1973AD, total population rose from 7,38M to 9,44M under late Portuguese rule. The abrupt departure of Portuguese settlers around 1974AD-1975AD—captured in individual return-migration histories from Maputo—temporarily depressed southern urban counts, before sixteen years of civil war devastated rural Gaza, Inhambane, Manica, Sofala, Zambézia and Tete [@Cachado2012TransnacionalidadeHistoria; @Hayford2011UncertainFuture]. Across war-torn central and southern provinces, millions fled rural villages into fortified towns, Maputo's peri-urban periphery and refugee camps in Malawi, Zimbabwe and South Africa: Manica fell from 1,05M in 1969AD to 642,2k in 1983AD, and Maputo Province dropped from 758,1k to 549,7k before refugee concentration and post-war growth lifted it back to 704,9k in 1992AD and 2,6M by 2025AD [@INEMozambique2019RGPH; @Jorge2014ProcessosDinamicas; @Maida2025MigracaoDesenvolvimento].

Following the 1992AD peace accord, Mozambican population growth accelerated sharply from 13,16M in 1992AD to 16,45M in 2002AD, 21,43M in 2011AD and 32,61M in 2025AD, sustained by high rural fertility—documented in Gaza surveys showing cautious, non-numeric reproductive spacing—and declining infant and maternal mortality despite measurement gaps between censuses and civil registration [@Hayford2011UncertainFuture; @Li2026SimilarLong; @Singh2022ComparisonApproaches]. Demographically, northern provinces carried the largest share of absolute expansion: Nampula climbed from 1,55M in 1964AD to 7,07M in 2025AD (89,9 persons per km²) and Zambézia from 1,51M to 6,17M (60,43 persons per km²), together accounting for 40,6% of Mozambique's 2025AD inhabitants [@INEMozambique2019RGPH].

Urban growth followed coastal ports and transport hubs where informal densification outpaced municipal planning [@Mottelson2023UrbanDensity; @Biza2025SanitaryCivility; @Shannon2018SustainableUrbanization]. Greater Maputo grew to 2,98M in 2025AD as high-density informal neighbourhoods expanded across Matola (1,03M by 2017AD) and peri-urban corridors hosting both internal and foreign migrants [@Mottelson2023UrbanDensity; @Jorge2014ProcessosDinamicas; @Maida2025MigracaoDesenvolvimento; @Cachado2012TransnacionalidadeHistoria]. In the centre, Cidade da Beira reached 803,9k in 2025AD despite severe tidal flooding and resettlement disputes exacerbated by Cyclone Idai in March 2019 [@Shannon2018SustainableUrbanization; @Wagenaar2018DevelopingRepresentative], while Chimoio rose to 476,3k, Tete to 468,2k and Quelimane to 253,8k. In the north, Nampula crossed 1,04M in 2025AD, while post-2017AD armed conflict in Cabo Delgado displaced coastal communities into Pemba (200,5k in 2017AD to 321,6k in 2025AD) and inland Montepuez (96,9k in 2015AD to 171,8k in 2025AD) [@Bank2021MozambiqueNorthern; @INEMozambique2019RGPH].

## Leading Urban Agglomerations and City-Proper Hierarchies

Table \ref{tab:top-centres} lists the 15 largest settlement entries in the chapter ledger, retaining both metropolitan agglomerations and underlying city-proper municipalities so readers can track municipal boundary spillover directly. Lusaka, Maputo and Harare sit tightly clustered around 3M inhabitants as agglomerations, whereas Nampula, Kitwe, Beira, Ndola and Bulawayo form a strong second tier between 650k and 1,05M [@Bank2022ZambiaUrbanization; @Bank2021MozambiqueNorthern; @ZIMSTAT2023ZimbabweCensus].

<figure class="crd-table-figure" id="tab:top-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Scope</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Date</th><th class="crd-th">Obs</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lubumbashi (Agglomeration)</strong></td><td class="crd-td">DR Congo</td><td class="crd-td">Metro</td><td class="crd-td">1960AD-2025AD</td><td class="crd-td">3,92M</td><td class="crd-td">2025AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Lusaka (Agglomeration)</strong></td><td class="crd-td">Zambia</td><td class="crd-td">Metro</td><td class="crd-td">1960AD-2025AD</td><td class="crd-td">3,23M</td><td class="crd-td">2025AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Maputo (Agglomeration)</strong></td><td class="crd-td">Mozambique</td><td class="crd-td">Metro</td><td class="crd-td">1960AD-2025AD</td><td class="crd-td">2,98M</td><td class="crd-td">2025AD</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Harare (Agglomeration)</strong></td><td class="crd-td">Zimbabwe</td><td class="crd-td">Metro</td><td class="crd-td">1960AD-2025AD</td><td class="crd-td">2,92M</td><td class="crd-td">2025AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Lusaka</strong></td><td class="crd-td">Zambia</td><td class="crd-td">City</td><td class="crd-td">1960AD-2022AD</td><td class="crd-td">2,21M</td><td class="crd-td">2022AD</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Harare</strong></td><td class="crd-td">Zimbabwe</td><td class="crd-td">City</td><td class="crd-td">1960AD-2022AD</td><td class="crd-td">1,49M</td><td class="crd-td">2022AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Lilongwe (Agglomeration)</strong></td><td class="crd-td">Malawi</td><td class="crd-td">Metro</td><td class="crd-td">1960AD-2025AD</td><td class="crd-td">1,38M</td><td class="crd-td">2025AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Blantyre (Agglomeration)</strong></td><td class="crd-td">Malawi</td><td class="crd-td">Metro</td><td class="crd-td">1960AD-2025AD</td><td class="crd-td">1,31M</td><td class="crd-td">2025AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Lubumbashi</strong></td><td class="crd-td">DR Congo</td><td class="crd-td">City</td><td class="crd-td">1960AD-2004AD</td><td class="crd-td">1,28M</td><td class="crd-td">2004AD</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Lilongwe</strong></td><td class="crd-td">Malawi</td><td class="crd-td">City</td><td class="crd-td">1951AD-2023AD</td><td class="crd-td">1,16M</td><td class="crd-td">2023AD</td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>Maputo</strong></td><td class="crd-td">Mozambique</td><td class="crd-td">City</td><td class="crd-td">1950AD-2017AD</td><td class="crd-td">1,09M</td><td class="crd-td">2007AD</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Nampula</strong></td><td class="crd-td">Mozambique</td><td class="crd-td">City</td><td class="crd-td">1950AD-2025AD</td><td class="crd-td">1,04M</td><td class="crd-td">2025AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Matola</strong></td><td class="crd-td">Mozambique</td><td class="crd-td">City</td><td class="crd-td">1997AD-2017AD</td><td class="crd-td">1,03M</td><td class="crd-td">2017AD</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Blantyre</strong></td><td class="crd-td">Malawi</td><td class="crd-td">City</td><td class="crd-td">1951AD-2023AD</td><td class="crd-td">871,8k</td><td class="crd-td">2023AD</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Kitwe</strong></td><td class="crd-td">Zambia</td><td class="crd-td">City</td><td class="crd-td">1960AD-2025AD</td><td class="crd-td">816,3k</td><td class="crd-td">2025AD</td><td class="crd-td">10</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Fifteen largest individually assessed settlement entries in the South-Central Africa and Mozambique ledger (1964AD to 2025AD).</figcaption>
</figure>

# Limitations

Three structural constraints affect post-colonial demographic reconstruction in this region. First, conflict and political transition disrupted civil registration and census continuity. Mozambique had no national enumeration between 1980AD and 1997AD, while post-2017AD insurgency displacement in Cabo Delgado and cyclone disruption around Beira created rapid short-term population shifts between official census rounds [@INEMozambique2019RGPH; @Bank2021MozambiqueNorthern; @Shannon2018SustainableUrbanization; @Wagenaar2018DevelopingRepresentative]. Incomplete vital registration across rural Zambia and Mozambique likewise leaves adult and maternal mortality trajectories reliant on retrospective census questions and sample surveys [@Banda2015RuralUrban; @Li2026SimilarLong; @Singh2022ComparisonApproaches].

Second, administrative boundary reforms and fixed municipal limits complicate provincial and urban continuity. Zimbabwe's 1992AD provincial subdivisions around Harare, Bulawayo, Mashonaland East and Matabeleland North, as well as Zambia's 2011AD separation of Muchinga from Northern Province, introduce step shifts in historical Admin-1 baselines that must be harmonised against modern polygons [@ZamStats2023ZambiaCensus; @ZIMSTAT2023ZimbabweCensus; @Runfola2020GeoBoundaries]. Similarly, municipal freezing in Harare and Maputo masks rapid demographic expansion in extra-municipal satellites such as Chitungwiza, Epworth and Matola [@Muzondi2014UrbanizationAnd; @Jorge2014ProcessosDinamicas; @Mottelson2023UrbanDensity], while 128 of the 838 ledger entries hold single-date observations.

Third, circular labour migration and economic flight across international borders remain imperfectly captured between decennial censuses. Unenumerated movements from Zimbabwe into South Africa and Botswana during the 2000s hyperinflation crisis, Mozambican refugee flows into Malawi and South Africa during the 1980s, and transnational return migration into Maputo appear in survey micro-studies rather than annual border registers [@Maida2025MigracaoDesenvolvimento; @Cachado2012TransnacionalidadeHistoria; @Wekwete2014TheAssociation; @Bachan2014AnticipatoryChild].

# Conclusion

Across six decades from 1964AD to 2025AD, Zambia, Zimbabwe, Malawi and Mozambique expanded from 17,79M to 91,03M inhabitants, raising regional population density from 8,83 to 45,17 persons per km². Rather than following a single post-colonial growth path, the four countries diverged sharply: Zambia shifted from early Copperbelt mining towns to Lusaka capital primacy after 1975AD; Zimbabwe combined early fertility transition with 1990s HIV mortality, 2000s economic emigration and stalled municipal cores; Malawi compounded extreme rural density across its Southern and Central highlands while pivoting urban administration from Blantyre to Lilongwe; and Mozambique recovered from sixteen years of devastating civil war to drive rapid urban growth along its southern, central and northern coastal corridors despite renewed conflict in Cabo Delgado. By harmonising 838 individually assessed settlements with official census series across 33 administrative divisions, NICETHI provides a continuous quantitative record of post-colonial demographic change across South-Central Africa and Mozambique.

# Appendix

## Sub-Regional Population, Density and Share Series

Tables \ref{tab:subregion-trajectory}, \ref{tab:density-appendix} and \ref{tab:shares-appendix} report full benchmark trajectories, mean population densities in persons per km² and percentage shares of regional total across all 33 first-level administrative divisions from 1964AD to 2025AD.

<figure class="crd-table-figure" id="tab:subregion-trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1964AD</th><th class="crd-th">1978AD</th><th class="crd-th">1992AD</th><th class="crd-th">2002AD</th><th class="crd-th">2011AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lusaka (ZMB)</strong></td><td class="crd-td">93,7k</td><td class="crd-td">610,7k</td><td class="crd-td">1,06M</td><td class="crd-td">1,52M</td><td class="crd-td">2,26M</td><td class="crd-td">3,37M</td></tr>
<tr><td class="crd-td"><strong>Copperbelt (ZMB)</strong></td><td class="crd-td">678,1k</td><td class="crd-td">1,16M</td><td class="crd-td">1,48M</td><td class="crd-td">1,65M</td><td class="crd-td">2,03M</td><td class="crd-td">3,01M</td></tr>
<tr><td class="crd-td"><strong>Central (ZMB)</strong></td><td class="crd-td">208k</td><td class="crd-td">480,2k</td><td class="crd-td">814,8k</td><td class="crd-td">1,07M</td><td class="crd-td">1,37M</td><td class="crd-td">2,53M</td></tr>
<tr><td class="crd-td"><strong>Eastern (ZMB)</strong></td><td class="crd-td">453,7k</td><td class="crd-td">622,7k</td><td class="crd-td">1,06M</td><td class="crd-td">1,38M</td><td class="crd-td">1,75M</td><td class="crd-td">2,7M</td></tr>
<tr><td class="crd-td"><strong>Southern (ZMB)</strong></td><td class="crd-td">394,5k</td><td class="crd-td">634,4k</td><td class="crd-td">1,01M</td><td class="crd-td">1,28M</td><td class="crd-td">1,64M</td><td class="crd-td">2,64M</td></tr>
<tr><td class="crd-td"><strong>Northern (ZMB)</strong></td><td class="crd-td">278,2k</td><td class="crd-td">373,8k</td><td class="crd-td">532,4k</td><td class="crd-td">518k</td><td class="crd-td">1,14M</td><td class="crd-td">1,79M</td></tr>
<tr><td class="crd-td"><strong>Luapula (ZMB)</strong></td><td class="crd-td">295,4k</td><td class="crd-td">402,7k</td><td class="crd-td">601,5k</td><td class="crd-td">814,5k</td><td class="crd-td">1,03M</td><td class="crd-td">1,69M</td></tr>
<tr><td class="crd-td"><strong>Western (ZMB)</strong></td><td class="crd-td">448,7k</td><td class="crd-td">473,6k</td><td class="crd-td">662,2k</td><td class="crd-td">790,9k</td><td class="crd-td">935,2k</td><td class="crd-td">1,53M</td></tr>
<tr><td class="crd-td"><strong>North-Western (ZMB)</strong></td><td class="crd-td">203k</td><td class="crd-td">287,9k</td><td class="crd-td">464k</td><td class="crd-td">609,6k</td><td class="crd-td">762,1k</td><td class="crd-td">1,43M</td></tr>
<tr><td class="crd-td"><strong>Muchinga (ZMB)</strong></td><td class="crd-td">203,5k</td><td class="crd-td">276,5k</td><td class="crd-td">369,1k</td><td class="crd-td">343,7k</td><td class="crd-td">629,7k</td><td class="crd-td">1,03M</td></tr>
<tr><td class="crd-td"><strong>Harare (ZWE)</strong></td><td class="crd-td">122,6k</td><td class="crd-td">728,7k</td><td class="crd-td">485,6k</td><td class="crd-td">1,37M</td><td class="crd-td">1,54M</td><td class="crd-td">1,97M</td></tr>
<tr><td class="crd-td"><strong>Bulawayo (ZWE)</strong></td><td class="crd-td">50,7k</td><td class="crd-td">154,9k</td><td class="crd-td">141,9k</td><td class="crd-td">510,1k</td><td class="crd-td">490,7k</td><td class="crd-td">512,9k</td></tr>
<tr><td class="crd-td"><strong>Mashonaland East (ZWE)</strong></td><td class="crd-td">252,8k</td><td class="crd-td">921,3k</td><td class="crd-td">545,2k</td><td class="crd-td">1,28M</td><td class="crd-td">1,5M</td><td class="crd-td">2,17M</td></tr>
<tr><td class="crd-td"><strong>Manicaland (ZWE)</strong></td><td class="crd-td">665,5k</td><td class="crd-td">983,2k</td><td class="crd-td">1,54M</td><td class="crd-td">1,57M</td><td class="crd-td">1,73M</td><td class="crd-td">2,13M</td></tr>
<tr><td class="crd-td"><strong>Mashonaland West (ZWE)</strong></td><td class="crd-td">252,2k</td><td class="crd-td">773,3k</td><td class="crd-td">1,12M</td><td class="crd-td">1,41M</td><td class="crd-td">1,67M</td><td class="crd-td">2,23M</td></tr>
<tr><td class="crd-td"><strong>Midlands (ZWE)</strong></td><td class="crd-td">615,1k</td><td class="crd-td">961,1k</td><td class="crd-td">1,3M</td><td class="crd-td">1,46M</td><td class="crd-td">1,6M</td><td class="crd-td">1,88M</td></tr>
<tr><td class="crd-td"><strong>Masvingo (ZWE)</strong></td><td class="crd-td">341,3k</td><td class="crd-td">964,2k</td><td class="crd-td">1,22M</td><td class="crd-td">1,32M</td><td class="crd-td">1,47M</td><td class="crd-td">1,69M</td></tr>
<tr><td class="crd-td"><strong>Mashonaland Central (ZWE)</strong></td><td class="crd-td">275,6k</td><td class="crd-td">487,9k</td><td class="crd-td">860,8k</td><td class="crd-td">1,18M</td><td class="crd-td">1,33M</td><td class="crd-td">1,51M</td></tr>
<tr><td class="crd-td"><strong>Matabeleland North (ZWE)</strong></td><td class="crd-td">466,4k</td><td class="crd-td">630,7k</td><td class="crd-td">499,1k</td><td class="crd-td">867,5k</td><td class="crd-td">905,5k</td><td class="crd-td">999,4k</td></tr>
<tr><td class="crd-td"><strong>Matabeleland South (ZWE)</strong></td><td class="crd-td">322,8k</td><td class="crd-td">471k</td><td class="crd-td">601,9k</td><td class="crd-td">669,4k</td><td class="crd-td">700,7k</td><td class="crd-td">809,4k</td></tr>
<tr><td class="crd-td"><strong>Southern Region (MWI)</strong></td><td class="crd-td">1,93M</td><td class="crd-td">2,86M</td><td class="crd-td">4,26M</td><td class="crd-td">5,09M</td><td class="crd-td">6,37M</td><td class="crd-td">9,18M</td></tr>
<tr><td class="crd-td"><strong>Central Region (MWI)</strong></td><td class="crd-td">1,38M</td><td class="crd-td">2,23M</td><td class="crd-td">3,51M</td><td class="crd-td">4,59M</td><td class="crd-td">6,04M</td><td class="crd-td">8,98M</td></tr>
<tr><td class="crd-td"><strong>Northern Region (MWI)</strong></td><td class="crd-td">472,7k</td><td class="crd-td">671,3k</td><td class="crd-td">1,05M</td><td class="crd-td">1,4M</td><td class="crd-td">1,84M</td><td class="crd-td">2,64M</td></tr>
<tr><td class="crd-td"><strong>Nampula (MOZ)</strong></td><td class="crd-td">1,55M</td><td class="crd-td">2,12M</td><td class="crd-td">2,74M</td><td class="crd-td">3,44M</td><td class="crd-td">4,52M</td><td class="crd-td">7,07M</td></tr>
<tr><td class="crd-td"><strong>Zambézia (MOZ)</strong></td><td class="crd-td">1,51M</td><td class="crd-td">2,27M</td><td class="crd-td">2,74M</td><td class="crd-td">3,34M</td><td class="crd-td">4,27M</td><td class="crd-td">6,17M</td></tr>
<tr><td class="crd-td"><strong>Tete (MOZ)</strong></td><td class="crd-td">477,5k</td><td class="crd-td">709,8k</td><td class="crd-td">1,02M</td><td class="crd-td">1,43M</td><td class="crd-td">2,06M</td><td class="crd-td">3,4M</td></tr>
<tr><td class="crd-td"><strong>Cabo Delgado (MOZ)</strong></td><td class="crd-td">536,9k</td><td class="crd-td">785,7k</td><td class="crd-td">1,13M</td><td class="crd-td">1,37M</td><td class="crd-td">1,73M</td><td class="crd-td">2,91M</td></tr>
<tr><td class="crd-td"><strong>Sofala (MOZ)</strong></td><td class="crd-td">220,5k</td><td class="crd-td">960,5k</td><td class="crd-td">1,19M</td><td class="crd-td">1,46M</td><td class="crd-td">1,85M</td><td class="crd-td">2,77M</td></tr>
<tr><td class="crd-td"><strong>Maputo (MOZ)</strong></td><td class="crd-td">561k</td><td class="crd-td">554,4k</td><td class="crd-td">704,9k</td><td class="crd-td">991,5k</td><td class="crd-td">1,46M</td><td class="crd-td">2,6M</td></tr>
<tr><td class="crd-td"><strong>Niassa (MOZ)</strong></td><td class="crd-td">282,7k</td><td class="crd-td">452,5k</td><td class="crd-td">672,7k</td><td class="crd-td">941k</td><td class="crd-td">1,36M</td><td class="crd-td">2,32M</td></tr>
<tr><td class="crd-td"><strong>Manica (MOZ)</strong></td><td class="crd-td">888,3k</td><td class="crd-td">663,4k</td><td class="crd-td">839,5k</td><td class="crd-td">1,17M</td><td class="crd-td">1,57M</td><td class="crd-td">2,3M</td></tr>
<tr><td class="crd-td"><strong>Inhambane (MOZ)</strong></td><td class="crd-td">641,4k</td><td class="crd-td">956,6k</td><td class="crd-td">1,08M</td><td class="crd-td">1,18M</td><td class="crd-td">1,32M</td><td class="crd-td">1,54M</td></tr>
<tr><td class="crd-td"><strong>Gaza (MOZ)</strong></td><td class="crd-td">710,9k</td><td class="crd-td">932,6k</td><td class="crd-td">1,04M</td><td class="crd-td">1,14M</td><td class="crd-td">1,29M</td><td class="crd-td">1,53M</td></tr>
<tr><td class="crd-td"><strong>Total Study Area</strong></td><td class="crd-td">17,79M</td><td class="crd-td">28,56M</td><td class="crd-td">38,35M</td><td class="crd-td">49,14M</td><td class="crd-td">62,15M</td><td class="crd-td">91,03M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Sub-regional and total population trajectories across all 33 administrative divisions from 1964AD to 2025AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1964AD</th><th class="crd-th">1978AD</th><th class="crd-th">1992AD</th><th class="crd-th">2002AD</th><th class="crd-th">2011AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lusaka (ZMB)</strong></td><td class="crd-td">4</td><td class="crd-td">26</td><td class="crd-td">45,1</td><td class="crd-td">64,8</td><td class="crd-td">95,9</td><td class="crd-td">143,5</td></tr>
<tr><td class="crd-td"><strong>Copperbelt (ZMB)</strong></td><td class="crd-td">21,5</td><td class="crd-td">36,7</td><td class="crd-td">46,9</td><td class="crd-td">52,3</td><td class="crd-td">64,2</td><td class="crd-td">95,3</td></tr>
<tr><td class="crd-td"><strong>Central (ZMB)</strong></td><td class="crd-td">1,9</td><td class="crd-td">4,4</td><td class="crd-td">7,4</td><td class="crd-td">9,7</td><td class="crd-td">12,4</td><td class="crd-td">23,1</td></tr>
<tr><td class="crd-td"><strong>Eastern (ZMB)</strong></td><td class="crd-td">8,8</td><td class="crd-td">12,1</td><td class="crd-td">20,5</td><td class="crd-td">26,6</td><td class="crd-td">33,9</td><td class="crd-td">52,3</td></tr>
<tr><td class="crd-td"><strong>Southern (ZMB)</strong></td><td class="crd-td">5,8</td><td class="crd-td">9,4</td><td class="crd-td">14,9</td><td class="crd-td">18,9</td><td class="crd-td">24,3</td><td class="crd-td">39</td></tr>
<tr><td class="crd-td"><strong>Northern (ZMB)</strong></td><td class="crd-td">3,7</td><td class="crd-td">4,9</td><td class="crd-td">7</td><td class="crd-td">6,8</td><td class="crd-td">15</td><td class="crd-td">23,5</td></tr>
<tr><td class="crd-td"><strong>Luapula (ZMB)</strong></td><td class="crd-td">6,2</td><td class="crd-td">8,5</td><td class="crd-td">12,6</td><td class="crd-td">17,1</td><td class="crd-td">21,6</td><td class="crd-td">35,5</td></tr>
<tr><td class="crd-td"><strong>Western (ZMB)</strong></td><td class="crd-td">3,5</td><td class="crd-td">3,7</td><td class="crd-td">5,2</td><td class="crd-td">6,2</td><td class="crd-td">7,3</td><td class="crd-td">11,9</td></tr>
<tr><td class="crd-td"><strong>North-Western (ZMB)</strong></td><td class="crd-td">1,6</td><td class="crd-td">2,3</td><td class="crd-td">3,7</td><td class="crd-td">4,8</td><td class="crd-td">6,1</td><td class="crd-td">11,4</td></tr>
<tr><td class="crd-td"><strong>Muchinga (ZMB)</strong></td><td class="crd-td">2,3</td><td class="crd-td">3,2</td><td class="crd-td">4,2</td><td class="crd-td">3,9</td><td class="crd-td">7,2</td><td class="crd-td">11,8</td></tr>
<tr><td class="crd-td"><strong>Harare (ZWE)</strong></td><td class="crd-td">125</td><td class="crd-td">743</td><td class="crd-td">495,2</td><td class="crd-td">1.396,1</td><td class="crd-td">1.566,8</td><td class="crd-td">2.009,8</td></tr>
<tr><td class="crd-td"><strong>Bulawayo (ZWE)</strong></td><td class="crd-td">89,9</td><td class="crd-td">274,5</td><td class="crd-td">251,4</td><td class="crd-td">904</td><td class="crd-td">869,6</td><td class="crd-td">909</td></tr>
<tr><td class="crd-td"><strong>Mashonaland East (ZWE)</strong></td><td class="crd-td">7,9</td><td class="crd-td">28,7</td><td class="crd-td">17</td><td class="crd-td">39,9</td><td class="crd-td">46,6</td><td class="crd-td">67,8</td></tr>
<tr><td class="crd-td"><strong>Manicaland (ZWE)</strong></td><td class="crd-td">18,6</td><td class="crd-td">27,4</td><td class="crd-td">42,9</td><td class="crd-td">43,7</td><td class="crd-td">48,3</td><td class="crd-td">59,4</td></tr>
<tr><td class="crd-td"><strong>Mashonaland West (ZWE)</strong></td><td class="crd-td">4,4</td><td class="crd-td">13,5</td><td class="crd-td">19,5</td><td class="crd-td">24,7</td><td class="crd-td">29,1</td><td class="crd-td">38,9</td></tr>
<tr><td class="crd-td"><strong>Midlands (ZWE)</strong></td><td class="crd-td">12,5</td><td class="crd-td">19,6</td><td class="crd-td">26,5</td><td class="crd-td">29,8</td><td class="crd-td">32,6</td><td class="crd-td">38,2</td></tr>
<tr><td class="crd-td"><strong>Masvingo (ZWE)</strong></td><td class="crd-td">6</td><td class="crd-td">16,9</td><td class="crd-td">21,4</td><td class="crd-td">23,2</td><td class="crd-td">25,8</td><td class="crd-td">29,6</td></tr>
<tr><td class="crd-td"><strong>Mashonaland Central (ZWE)</strong></td><td class="crd-td">9,5</td><td class="crd-td">16,9</td><td class="crd-td">29,8</td><td class="crd-td">40,9</td><td class="crd-td">46,1</td><td class="crd-td">52,3</td></tr>
<tr><td class="crd-td"><strong>Matabeleland North (ZWE)</strong></td><td class="crd-td">6,2</td><td class="crd-td">8,4</td><td class="crd-td">6,7</td><td class="crd-td">11,6</td><td class="crd-td">12,1</td><td class="crd-td">13,4</td></tr>
<tr><td class="crd-td"><strong>Matabeleland South (ZWE)</strong></td><td class="crd-td">5,9</td><td class="crd-td">8,6</td><td class="crd-td">11</td><td class="crd-td">12,3</td><td class="crd-td">12,8</td><td class="crd-td">14,8</td></tr>
<tr><td class="crd-td"><strong>Southern Region (MWI)</strong></td><td class="crd-td">59,5</td><td class="crd-td">88,1</td><td class="crd-td">131,2</td><td class="crd-td">156,8</td><td class="crd-td">196,2</td><td class="crd-td">282,8</td></tr>
<tr><td class="crd-td"><strong>Central Region (MWI)</strong></td><td class="crd-td">38,6</td><td class="crd-td">62,2</td><td class="crd-td">98,2</td><td class="crd-td">128,2</td><td class="crd-td">168,7</td><td class="crd-td">250,7</td></tr>
<tr><td class="crd-td"><strong>Northern Region (MWI)</strong></td><td class="crd-td">17,5</td><td class="crd-td">24,9</td><td class="crd-td">38,8</td><td class="crd-td">51,8</td><td class="crd-td">68,4</td><td class="crd-td">97,8</td></tr>
<tr><td class="crd-td"><strong>Nampula (MOZ)</strong></td><td class="crd-td">19,7</td><td class="crd-td">27</td><td class="crd-td">34,8</td><td class="crd-td">43,8</td><td class="crd-td">57,5</td><td class="crd-td">89,9</td></tr>
<tr><td class="crd-td"><strong>Zambézia (MOZ)</strong></td><td class="crd-td">14,8</td><td class="crd-td">22,2</td><td class="crd-td">26,9</td><td class="crd-td">32,7</td><td class="crd-td">41,9</td><td class="crd-td">60,4</td></tr>
<tr><td class="crd-td"><strong>Tete (MOZ)</strong></td><td class="crd-td">4,8</td><td class="crd-td">7,2</td><td class="crd-td">10,3</td><td class="crd-td">14,4</td><td class="crd-td">20,8</td><td class="crd-td">34,3</td></tr>
<tr><td class="crd-td"><strong>Cabo Delgado (MOZ)</strong></td><td class="crd-td">6,9</td><td class="crd-td">10</td><td class="crd-td">14,4</td><td class="crd-td">17,4</td><td class="crd-td">22,1</td><td class="crd-td">37,2</td></tr>
<tr><td class="crd-td"><strong>Sofala (MOZ)</strong></td><td class="crd-td">3,2</td><td class="crd-td">14,1</td><td class="crd-td">17,6</td><td class="crd-td">21,4</td><td class="crd-td">27,2</td><td class="crd-td">40,8</td></tr>
<tr><td class="crd-td"><strong>Maputo (MOZ)</strong></td><td class="crd-td">24,4</td><td class="crd-td">24,1</td><td class="crd-td">30,6</td><td class="crd-td">43,1</td><td class="crd-td">63,4</td><td class="crd-td">113,1</td></tr>
<tr><td class="crd-td"><strong>Niassa (MOZ)</strong></td><td class="crd-td">2,3</td><td class="crd-td">3,6</td><td class="crd-td">5,4</td><td class="crd-td">7,6</td><td class="crd-td">11</td><td class="crd-td">18,7</td></tr>
<tr><td class="crd-td"><strong>Manica (MOZ)</strong></td><td class="crd-td">14,1</td><td class="crd-td">10,5</td><td class="crd-td">13,3</td><td class="crd-td">18,6</td><td class="crd-td">24,9</td><td class="crd-td">36,4</td></tr>
<tr><td class="crd-td"><strong>Inhambane (MOZ)</strong></td><td class="crd-td">9,4</td><td class="crd-td">14,1</td><td class="crd-td">15,9</td><td class="crd-td">17,3</td><td class="crd-td">19,4</td><td class="crd-td">22,6</td></tr>
<tr><td class="crd-td"><strong>Gaza (MOZ)</strong></td><td class="crd-td">9,4</td><td class="crd-td">12,4</td><td class="crd-td">13,8</td><td class="crd-td">15,1</td><td class="crd-td">17,1</td><td class="crd-td">20,3</td></tr>
<tr><td class="crd-td"><strong>Mean Study Area</strong></td><td class="crd-td">8,8</td><td class="crd-td">14,2</td><td class="crd-td">19</td><td class="crd-td">24,4</td><td class="crd-td">30,8</td><td class="crd-td">45,2</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Mean population density (persons per km²) across all 33 administrative divisions from 1964AD to 2025AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:shares-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1964AD (%)</th><th class="crd-th">1978AD (%)</th><th class="crd-th">1992AD (%)</th><th class="crd-th">2002AD (%)</th><th class="crd-th">2011AD (%)</th><th class="crd-th">2025AD (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lusaka (ZMB)</strong></td><td class="crd-td">0,5</td><td class="crd-td">2,1</td><td class="crd-td">2,8</td><td class="crd-td">3,1</td><td class="crd-td">3,6</td><td class="crd-td">3,7</td></tr>
<tr><td class="crd-td"><strong>Copperbelt (ZMB)</strong></td><td class="crd-td">3,8</td><td class="crd-td">4,1</td><td class="crd-td">3,9</td><td class="crd-td">3,4</td><td class="crd-td">3,3</td><td class="crd-td">3,3</td></tr>
<tr><td class="crd-td"><strong>Central (ZMB)</strong></td><td class="crd-td">1,2</td><td class="crd-td">1,7</td><td class="crd-td">2,1</td><td class="crd-td">2,2</td><td class="crd-td">2,2</td><td class="crd-td">2,8</td></tr>
<tr><td class="crd-td"><strong>Eastern (ZMB)</strong></td><td class="crd-td">2,6</td><td class="crd-td">2,2</td><td class="crd-td">2,8</td><td class="crd-td">2,8</td><td class="crd-td">2,8</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Southern (ZMB)</strong></td><td class="crd-td">2,2</td><td class="crd-td">2,2</td><td class="crd-td">2,6</td><td class="crd-td">2,6</td><td class="crd-td">2,6</td><td class="crd-td">2,9</td></tr>
<tr><td class="crd-td"><strong>Northern (ZMB)</strong></td><td class="crd-td">1,6</td><td class="crd-td">1,3</td><td class="crd-td">1,4</td><td class="crd-td">1,1</td><td class="crd-td">1,8</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Luapula (ZMB)</strong></td><td class="crd-td">1,7</td><td class="crd-td">1,4</td><td class="crd-td">1,6</td><td class="crd-td">1,7</td><td class="crd-td">1,7</td><td class="crd-td">1,9</td></tr>
<tr><td class="crd-td"><strong>Western (ZMB)</strong></td><td class="crd-td">2,5</td><td class="crd-td">1,7</td><td class="crd-td">1,7</td><td class="crd-td">1,6</td><td class="crd-td">1,5</td><td class="crd-td">1,7</td></tr>
<tr><td class="crd-td"><strong>North-Western (ZMB)</strong></td><td class="crd-td">1,1</td><td class="crd-td">1</td><td class="crd-td">1,2</td><td class="crd-td">1,2</td><td class="crd-td">1,2</td><td class="crd-td">1,6</td></tr>
<tr><td class="crd-td"><strong>Muchinga (ZMB)</strong></td><td class="crd-td">1,1</td><td class="crd-td">1</td><td class="crd-td">1</td><td class="crd-td">0,7</td><td class="crd-td">1</td><td class="crd-td">1,1</td></tr>
<tr><td class="crd-td"><strong>Harare (ZWE)</strong></td><td class="crd-td">0,7</td><td class="crd-td">2,6</td><td class="crd-td">1,3</td><td class="crd-td">2,8</td><td class="crd-td">2,5</td><td class="crd-td">2,2</td></tr>
<tr><td class="crd-td"><strong>Bulawayo (ZWE)</strong></td><td class="crd-td">0,3</td><td class="crd-td">0,5</td><td class="crd-td">0,4</td><td class="crd-td">1</td><td class="crd-td">0,8</td><td class="crd-td">0,6</td></tr>
<tr><td class="crd-td"><strong>Mashonaland East (ZWE)</strong></td><td class="crd-td">1,4</td><td class="crd-td">3,2</td><td class="crd-td">1,4</td><td class="crd-td">2,6</td><td class="crd-td">2,4</td><td class="crd-td">2,4</td></tr>
<tr><td class="crd-td"><strong>Manicaland (ZWE)</strong></td><td class="crd-td">3,7</td><td class="crd-td">3,4</td><td class="crd-td">4</td><td class="crd-td">3,2</td><td class="crd-td">2,8</td><td class="crd-td">2,3</td></tr>
<tr><td class="crd-td"><strong>Mashonaland West (ZWE)</strong></td><td class="crd-td">1,4</td><td class="crd-td">2,7</td><td class="crd-td">2,9</td><td class="crd-td">2,9</td><td class="crd-td">2,7</td><td class="crd-td">2,5</td></tr>
<tr><td class="crd-td"><strong>Midlands (ZWE)</strong></td><td class="crd-td">3,5</td><td class="crd-td">3,4</td><td class="crd-td">3,4</td><td class="crd-td">3</td><td class="crd-td">2,6</td><td class="crd-td">2,1</td></tr>
<tr><td class="crd-td"><strong>Masvingo (ZWE)</strong></td><td class="crd-td">1,9</td><td class="crd-td">3,4</td><td class="crd-td">3,2</td><td class="crd-td">2,7</td><td class="crd-td">2,4</td><td class="crd-td">1,9</td></tr>
<tr><td class="crd-td"><strong>Mashonaland Central (ZWE)</strong></td><td class="crd-td">1,5</td><td class="crd-td">1,7</td><td class="crd-td">2,2</td><td class="crd-td">2,4</td><td class="crd-td">2,1</td><td class="crd-td">1,7</td></tr>
<tr><td class="crd-td"><strong>Matabeleland North (ZWE)</strong></td><td class="crd-td">2,6</td><td class="crd-td">2,2</td><td class="crd-td">1,3</td><td class="crd-td">1,8</td><td class="crd-td">1,5</td><td class="crd-td">1,1</td></tr>
<tr><td class="crd-td"><strong>Matabeleland South (ZWE)</strong></td><td class="crd-td">1,8</td><td class="crd-td">1,6</td><td class="crd-td">1,6</td><td class="crd-td">1,4</td><td class="crd-td">1,1</td><td class="crd-td">0,9</td></tr>
<tr><td class="crd-td"><strong>Southern Region (MWI)</strong></td><td class="crd-td">10,9</td><td class="crd-td">10</td><td class="crd-td">11,1</td><td class="crd-td">10,4</td><td class="crd-td">10,2</td><td class="crd-td">10,1</td></tr>
<tr><td class="crd-td"><strong>Central Region (MWI)</strong></td><td class="crd-td">7,8</td><td class="crd-td">7,8</td><td class="crd-td">9,2</td><td class="crd-td">9,3</td><td class="crd-td">9,7</td><td class="crd-td">9,9</td></tr>
<tr><td class="crd-td"><strong>Northern Region (MWI)</strong></td><td class="crd-td">2,7</td><td class="crd-td">2,4</td><td class="crd-td">2,7</td><td class="crd-td">2,8</td><td class="crd-td">3</td><td class="crd-td">2,9</td></tr>
<tr><td class="crd-td"><strong>Nampula (MOZ)</strong></td><td class="crd-td">8,7</td><td class="crd-td">7,4</td><td class="crd-td">7,1</td><td class="crd-td">7</td><td class="crd-td">7,3</td><td class="crd-td">7,8</td></tr>
<tr><td class="crd-td"><strong>Zambézia (MOZ)</strong></td><td class="crd-td">8,5</td><td class="crd-td">7,9</td><td class="crd-td">7,2</td><td class="crd-td">6,8</td><td class="crd-td">6,9</td><td class="crd-td">6,8</td></tr>
<tr><td class="crd-td"><strong>Tete (MOZ)</strong></td><td class="crd-td">2,7</td><td class="crd-td">2,5</td><td class="crd-td">2,7</td><td class="crd-td">2,9</td><td class="crd-td">3,3</td><td class="crd-td">3,7</td></tr>
<tr><td class="crd-td"><strong>Cabo Delgado (MOZ)</strong></td><td class="crd-td">3</td><td class="crd-td">2,8</td><td class="crd-td">2,9</td><td class="crd-td">2,8</td><td class="crd-td">2,8</td><td class="crd-td">3,2</td></tr>
<tr><td class="crd-td"><strong>Sofala (MOZ)</strong></td><td class="crd-td">1,2</td><td class="crd-td">3,4</td><td class="crd-td">3,1</td><td class="crd-td">3</td><td class="crd-td">3</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Maputo (MOZ)</strong></td><td class="crd-td">3,2</td><td class="crd-td">1,9</td><td class="crd-td">1,8</td><td class="crd-td">2</td><td class="crd-td">2,3</td><td class="crd-td">2,9</td></tr>
<tr><td class="crd-td"><strong>Niassa (MOZ)</strong></td><td class="crd-td">1,6</td><td class="crd-td">1,6</td><td class="crd-td">1,8</td><td class="crd-td">1,9</td><td class="crd-td">2,2</td><td class="crd-td">2,6</td></tr>
<tr><td class="crd-td"><strong>Manica (MOZ)</strong></td><td class="crd-td">5</td><td class="crd-td">2,3</td><td class="crd-td">2,2</td><td class="crd-td">2,4</td><td class="crd-td">2,5</td><td class="crd-td">2,5</td></tr>
<tr><td class="crd-td"><strong>Inhambane (MOZ)</strong></td><td class="crd-td">3,6</td><td class="crd-td">3,3</td><td class="crd-td">2,8</td><td class="crd-td">2,4</td><td class="crd-td">2,1</td><td class="crd-td">1,7</td></tr>
<tr><td class="crd-td"><strong>Gaza (MOZ)</strong></td><td class="crd-td">4</td><td class="crd-td">3,3</td><td class="crd-td">2,7</td><td class="crd-td">2,3</td><td class="crd-td">2,1</td><td class="crd-td">1,7</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Percentage share of regional population by administrative division across six benchmark years from 1964AD to 2025AD.</figcaption>
</figure>

## Official Census Admin-1 Benchmarks and Boundary Lineage

Table \ref{tab:census-adm1} compiles the first-level administrative enumerations from the 12 national benchmark tables stored in the regional archive across Mozambique, Malawi, Zambia and Zimbabwe, documenting boundary continuity from late colonial censuses through contemporary post-2017AD counts [@INEMozambique2019RGPH; @NSOMalawi2019Census; @ZamStats2023ZambiaCensus; @ZIMSTAT2023ZimbabweCensus].

<figure class="crd-table-figure" id="tab:census-adm1">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Country</th><th class="crd-th">Census</th><th class="crd-th">Admin-1 Units</th><th class="crd-th">Enumerated Pop.</th><th class="crd-th">Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>MOZ</strong></td><td class="crd-td">1960AD</td><td class="crd-td">9</td><td class="crd-td">6,6M</td><td class="crd-td">Statoids official census archive (MOZ)</td></tr>
<tr><td class="crd-td"><strong>MOZ</strong></td><td class="crd-td">1997AD</td><td class="crd-td">11</td><td class="crd-td">15,28M</td><td class="crd-td">CityPopulation official census mirror (MOZ)</td></tr>
<tr><td class="crd-td"><strong>MOZ</strong></td><td class="crd-td">2017AD</td><td class="crd-td">11</td><td class="crd-td">26,9M</td><td class="crd-td">CityPopulation official census mirror (MOZ)</td></tr>
<tr><td class="crd-td"><strong>MWI</strong></td><td class="crd-td">1966AD</td><td class="crd-td">3</td><td class="crd-td">4,04M</td><td class="crd-td">Statoids official census archive (MWI)</td></tr>
<tr><td class="crd-td"><strong>MWI</strong></td><td class="crd-td">1998AD</td><td class="crd-td">3</td><td class="crd-td">9,93M</td><td class="crd-td">CityPopulation official census mirror (MWI)</td></tr>
<tr><td class="crd-td"><strong>MWI</strong></td><td class="crd-td">2023AD</td><td class="crd-td">3</td><td class="crd-td">19,81M</td><td class="crd-td">CityPopulation official census mirror (MWI)</td></tr>
<tr><td class="crd-td"><strong>ZMB</strong></td><td class="crd-td">1969AD</td><td class="crd-td">9</td><td class="crd-td">4,06M</td><td class="crd-td">Statoids official census archive (ZMB)</td></tr>
<tr><td class="crd-td"><strong>ZMB</strong></td><td class="crd-td">2000AD</td><td class="crd-td">10</td><td class="crd-td">9,89M</td><td class="crd-td">CityPopulation official census mirror (ZMB)</td></tr>
<tr><td class="crd-td"><strong>ZMB</strong></td><td class="crd-td">2022AD</td><td class="crd-td">10</td><td class="crd-td">19,69M</td><td class="crd-td">CityPopulation official census mirror (ZMB)</td></tr>
<tr><td class="crd-td"><strong>ZWE</strong></td><td class="crd-td">1969AD</td><td class="crd-td">7</td><td class="crd-td">5,04M</td><td class="crd-td">Statoids official census archive (ZWE)</td></tr>
<tr><td class="crd-td"><strong>ZWE</strong></td><td class="crd-td">2002AD</td><td class="crd-td">10</td><td class="crd-td">11,63M</td><td class="crd-td">CityPopulation official census mirror (ZWE)</td></tr>
<tr><td class="crd-td"><strong>ZWE</strong></td><td class="crd-td">2022AD</td><td class="crd-td">10</td><td class="crd-td">15,18M</td><td class="crd-td">CityPopulation official census mirror (ZWE)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> National first-level administrative census benchmark totals used for pycnophylactic disaggregation (1960AD to 2023AD).</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Of the 838 individually assessed settlements in the regional gazetteer, 762 fall strictly inside the 33 five-arcminute administrative sub-regions while 76 border-buffer entries sit along adjacent frontier zones in DR Congo, Tanzania, South Africa, Botswana, eSwatini and Namibia; all 838 entries are catalogued in the companion gazetteer. Maputo City and Maputo Province are combined into one spatial polygon at five-arcminute resolution in Table \ref{tab:subregions} while remaining distinct in Table \ref{tab:census-adm1} and the settlement gazetteer.
