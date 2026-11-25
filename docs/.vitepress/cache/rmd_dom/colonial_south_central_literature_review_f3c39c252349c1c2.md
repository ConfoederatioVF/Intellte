---
title: "Colonial South-Central Africa and Mozambique"
subtitle: "Northern and Southern Rhodesia, Nyasaland and Portuguese Mozambique"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: colonial_south_central_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Eight colonial sub-regions and 922 individually assessed settlements across South-Central Africa and Mozambique between 1890AD and 1980AD."
hero_label: "fig:hero-colonial-south-central"

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

Between the chartered-company partitions of 1890AD and Zimbabwean independence in 1980AD, South-Central Africa and Mozambique underwent one of the sharpest demographic and urban transformations on the African continent. Across a territorial domain of 2.023.960 km² spanning 11 modern jurisdictions from Katanga and the Zambezi headwaters to Delagoa Bay and the Limpopo, NICETHI reconstructs an aggregate regional population that moved from 5,61M inhabitants in 1890AD and 5,32M in 1920AD to 11,84M in 1950AD, 13,16M at the dissolution of the Federation of Rhodesia and Nyasaland in 1963AD, 20,78M in 1969AD and 30,21M by 1980AD, reaching a mean end-epoch density of 14,93 persons/km². Growth was tightly bound to imperial infrastructure and labour migration: Copperbelt shaft-sinking turned Northern Rhodesia into Sub-Saharan Africa's most urbanised colonial territory outside South Africa, settler farming and Land Apportionment concentrated Mashonaland and Matabeleland around Salisbury and Bulawayo, dense Shire Highlands agrarian pressure propelled Malawian workers across regional borders and Portuguese Mozambique paired chartered-company forced labour in the north and centre with regulated mine-labour exports from the south to the Witwatersrand before protracted liberation wars reshaped rural settlement after 1964AD. These trajectories rest on 922 individually assessed settlements across 4.452 chronological observations, reconciled with colonial territorial and provincial censuses through non-stationary Matérn residual kriging and mass-conserving pycnophylactic disaggregation.



# Background

## Copper Belts, Settler Highveld and Indian Ocean Ports

South-Central Africa and Mozambique straddle the high interior plateau between the Congo-Zambezi watershed and the Indian Ocean littoral. On the western and northern upland plateaus of Northern Rhodesia (Zambia) and southern Katanga, weathered Katangan metasediments hold the world's richest stratiform copper-cobalt deposits, flanked to the west by the seasonal Kalahari sand floodplains of Barotseland and to the north-east by miombo woodland plateaus bordering Lakes Tanganyika and Mweru [@Frederiksen2013SeeingThe; @Hellen1962SomeAspects]. South of the Zambezi gorge, the Southern Rhodesian (Zimbabwean) central watershed rises above 1.200 metres in a fertile, tsetse-free granite highveld stretching from Bulawayo through Gwelo to Salisbury and Umtali, bordered by hotter, drier lowveld troughs toward the Limpopo and Zambezi valleys [@Chingozha2019TheComplementarity; @ThomasJBryan2026BritishSouthern].

Eastward along the Lake Malawi rift and Shire valley, Nyasaland (Malawi) packs volcanic lakeshore plains and humid Shire Highlands tea hills into barely 100.397 km², making it far smaller yet more densely populated than either Rhodesia [@Phiri1988PreColonial; @Sawasawa2014LabourExploitation]. Beyond Nyasaland, Portuguese Mozambique extends over 2.400 kilometres of Indian Ocean coastline from Cape Delgado to Ponta do Ouro, divided by the lower Zambezi delta into heavily populated northern Makua-Lomwe and Zambezian riverine districts, central Manica-Sofala corridors linking the port of Beira to Rhodesian railheads, and southern Save-Limpopo lowlands oriented economically toward Lourenço Marques and the Transvaal goldfields [@Pereira2016CuttingBack; @Weeks2013EricAllina; @Domingos2013DosSuburbios].

Demographic redistribution across these four colonial spheres followed rail lines and labour corridors established between 1890AD and 1930AD. The Cape-to-Katanga railway crossed the Zambezi at Victoria Falls in 1904AD, reached Broken Hill (Kabwe) in 1906AD and entered Élisabethville (Lubumbashi) in 1910AD, while the Beira-Salisbury and Lourenço Marques-Transvaal lines tied interior mines and plantations to Indian Ocean ports [@Frederiksen2013SeeingThe; @Nativel2016LoisirsProductions; @Hassane2026InstrumentosLegais]. Hut taxation, alienated settler land and forced-labour decrees then turned rural reserves in Nyasaland, eastern Northern Rhodesia and central Mozambique into labour reservoirs feeding Salisbury, Bulawayo, the Copperbelt and the Witwatersrand [@CordellGregory1987AfricanPop; @Sawasawa2014LabourExploitation; @Mudeka2016GenderedExclusion].

## Historiography of Colonial Censuses and Migration Systems

Colonial demographic records across British Central Africa and Portuguese Mozambique emerged unevenly and served distinct fiscal ends. In Southern Rhodesia, the British South Africa Company and later settler governments conducted regular European and urban censuses from 1901AD onward (1901AD, 1904AD, 1911AD, 1921AD, 1931AD, 1936AD, 1941AD, 1946AD and 1951AD), yet early African rural totals relied on native-commissioner tax multipliers until sample demographic surveys began in 1948AD and full national African enumerations occurred in 1962AD and 1969AD [@CASO1960FederationCensus; @ThomasJBryan2026BritishSouthern; @Mitchell2007IHS]. Northern Rhodesia followed a parallel path: missionary conference reports and district agricultural surveys tracked village populations and famine years between the world wars, while systematic urban censuses from 1911AD through 1951AD primarily enumerated Europeans and employed African mineworkers until the 1963AD and 1969AD African censuses [@GeneralMissio1931EvangelisationBeing; @NorthernRhodesia1938Report; @Office1949AnnualReport].

Nyasaland carried out protectorate censuses in 1911AD, 1921AD, 1926AD, 1931AD and 1945AD before entering the Central African Statistical Office umbrella during the Federation of Rhodesia and Nyasaland (1953AD to 1963AD) and holding its first post-independence national census in 1966AD and second in 1977AD [@Nyasaland1943AgricultureReport; @CASO1960FederationCensus; @Moyo2012NamingPractices]. In Portuguese Mozambique, early counts were fragmented between state-administered districts in the south and chartered concessions (the Companhia de Moçambique in Manica and Sofala until 1942AD and the Companhia do Niassa in the north until 1929AD) before the Estado Novo instituted decennial general censuses across the entire colony in 1940AD, 1950AD, 1960AD and 1970AD, followed by the 1980AD post-independence census [@Mozambique1940Censo; @Weeks2013EricAllina; @Pereira2016CuttingBack].

Historical scholarship over the past four decades has dismantled earlier colonial assumptions that treated African urbanisation as a temporary male sojourn and rural reserves as static traditional baselines. Studies of Copperbelt mining towns, Southern Rhodesian land alienation and Nyasaland *thangata* labour tenancy show how colonial science, mining capital and tax regimes reshaped gender ratios, settlement permanence and crop cultivation [@Frederiksen2013SeeingThe; @Mudeka2016GenderedExclusion; @Chingozha2019TheComplementarity; @Sawasawa2014LabourExploitation]. Similarly, research on Mozambican *chibalo* forced labour, Islamic coastal policy, Lourenço Marques *caniço* suburbs and the post-1964AD liberation war demonstrates how coercion and wartime *aldeamentos* (strategic hamlets) transformed coastal and northern settlement geography [@Weeks2013EricAllina; @Machaqueiro2013EnsinoPolitica; @Domingos2013DosSuburbios; @Sempijja2025ColonialAnd]. NICETHI harmonises these documentary censuses and urban histories into a single spatial ledger from 1890AD to 1980AD.

# Methodology

## Sub-Regional Territorial Partition and Accounting Domain

The study area covers 2.023.960 km² across 24.580 five-arcminute cells spanning 11 modern states: Zambia, Zimbabwe, Malawi and Mozambique at the core, together with adjacent frontier sectors of the Democratic Republic of the Congo (Katanga), Tanzania, Botswana, South Africa, Namibia and eSwatini. Within NICETHI, the chapter occupies Regime 2 (1890AD to 1980AD), bridging the pre-colonial nineteenth-century polities of East and Southern Africa with the post-1980AD national census era. Eight colonial sub-regions partition the domain along British protectorate, Southern Rhodesian provincial and Portuguese district lines clipped to CShapes 2 and geoBoundaries coastlines [@Runfola2020GeoBoundaries] (Table \ref{tab:subregions}).

Population trajectories are evaluated across 14 benchmark years tracked in the regional cache (1890AD, 1920AD, 1950AD, 1952AD, 1955AD, 1958AD, 1961AD, 1963AD, 1966AD, 1969AD, 1972AD, 1974AD, 1977AD and 1980AD) and reported in compact tables at six historical checkpoints: 1890AD (British South Africa Company entry and Anglo-Portuguese border treaties), 1920AD (post-war railway consolidation and early mine towns), 1950AD (post-1945 copper and settler immigration boom), 1963AD (dissolution of the Federation of Rhodesia and Nyasaland), 1969AD (Rhodesian Unilateral Declaration of Independence era and Zambian Copperbelt peak) and 1980AD (Zimbabwean independence and post-colonial Mozambican census). Sub-regional figures represent full resident populations across towns, mining compounds, commercial estates, African reserves and peasant villages [@CASO1960FederationCensus; @Mozambique1940Censo; @Mitchell2007IHS].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Era</th><th class="crd-th">Interior Sites</th><th class="crd-th">All Sites</th><th class="crd-th">Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Rhodesia: Copperbelt and Central</strong></td><td class="crd-td">164.788</td><td class="crd-td">1.981</td><td class="crd-td">1891AD-1964AD</td><td class="crd-td">47</td><td class="crd-td">14</td><td class="crd-td">8,1</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Barotseland and Southern</strong></td><td class="crd-td">322.324</td><td class="crd-td">3.886</td><td class="crd-td">1891AD-1964AD</td><td class="crd-td">48</td><td class="crd-td">14</td><td class="crd-td">15,9</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Northern, Luapula and East</strong></td><td class="crd-td">263.014</td><td class="crd-td">3.124</td><td class="crd-td">1891AD-1964AD</td><td class="crd-td">91</td><td class="crd-td">10</td><td class="crd-td">13</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Mashonaland and Manicaland</strong></td><td class="crd-td">155.139</td><td class="crd-td">1.897</td><td class="crd-td">1890AD-1980AD</td><td class="crd-td">86</td><td class="crd-td">8</td><td class="crd-td">7,7</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Matabeleland and Midlands</strong></td><td class="crd-td">237.061</td><td class="crd-td">2.936</td><td class="crd-td">1890AD-1980AD</td><td class="crd-td">74</td><td class="crd-td">17</td><td class="crd-td">11,7</td></tr>
<tr><td class="crd-td"><strong>Nyasaland Protectorate</strong></td><td class="crd-td">100.397</td><td class="crd-td">1.203</td><td class="crd-td">1891AD-1964AD</td><td class="crd-td">195</td><td class="crd-td">23</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: North and Zambezia</strong></td><td class="crd-td">481.881</td><td class="crd-td">5.801</td><td class="crd-td">1890AD-1975AD</td><td class="crd-td">186</td><td class="crd-td">15</td><td class="crd-td">23,8</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: Central and South</strong></td><td class="crd-td">299.357</td><td class="crd-td">3.752</td><td class="crd-td">1890AD-1975AD</td><td class="crd-td">120</td><td class="crd-td">21</td><td class="crd-td">14,8</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Eight colonial sub-regions of South-Central Africa and Mozambique showing surface area, 5-arcminute pixels, era span, interior mask matches (113) and full gazetteer site counts (122).</figcaption>
</figure>

## Settlement Screening and Urban Enumeration Scope

Urban trajectories were assembled across four screening waves from 1.301 candidate colonial towns, mining camps, port cities, mission stations and border centres [@CASO1960FederationCensus; @Mozambique1940Censo; @Mitchell2007IHS]. Deduplication removed 379 duplicate alias records, including colonial-to-postcolonial name pairs such as Salisbury and Harare, Lourenço Marques and Maputo, Fort Jameson and Chipata, Broken Hill and Kabwe, Umtali and Mutare, Gwelo and Gweru, Fort Johnston and Mangochi, and Ilha de Moçambique aliases, leaving 922 individually assessed settlements across 4.452 dated observations (Figure \ref{fig:hero-colonial-south-central}) [@Moyo2012NamingPractices]. A final gap sweep added 2 frontier entries (0,43% marginal gain), leaving zero empty inhabited sub-regions.

Jurisdictionally, Zambia leads the ledger with 29 settlements (145 observations), followed by Mozambique with 28 settlements (105 observations), Zimbabwe with 22 settlements (138 observations) and Malawi with 19 settlements (78 observations). Border-corridor towns adjacent to the colonial frontier add 7 settlements each in Katanga (Democratic Republic of the Congo, 31 observations) and southern Tanzania (19 observations), 4 in eSwatini (8 observations), 3 in Botswana (10 observations), 2 in northern South Africa (4 observations) and 1 in the Caprivi Strip of Namibia (3 observations). Unlike pre-colonial chapters, the late colonial urban ledger distinguishes 915 city-proper series from 7 metropolitan agglomerations (Maputo, Harare, Lubumbashi, Lusaka, Bulawayo, Blantyre and Lilongwe) derived from OECD/SWAC Africapolis post-1950AD footprints alongside national census city limits so municipal and suburban counts can be compared explicitly without conflating administrative definitions [@Domingos2013DosSuburbios; @Hassane2026InstrumentosLegais].

## Spatial Interpolation and Sub-Administrative Disaggregation

Because early colonial censuses rarely enumerated every rural ward in the same year, NICETHI couples sub-regional territorial totals with continuous five-arcminute spatial allocation calibrated against colonial provincial enumerations, ecological habitability, railway corridors and river valleys [@Frederiksen2013SeeingThe; @Chingozha2019TheComplementarity]. Non-stationary Matérn ($\nu = 3/2$) residual kriging smooths inter-census rural densities across Voronoi catchments bounded below 25.000 km², shielded from post-1980AD metropolitan distortion around Harare, Maputo and Lusaka while preserving coastal and fluvial attraction along the Zambezi, Shire and Indian Ocean ports [@Runfola2020GeoBoundaries].

Downward allocation onto colonial and post-colonial administrative units uses mass-conserving pycnophylactic scaling across 12 territorial and provincial census tables archived in the chapter summary (Federation of Rhodesia and Nyasaland 1956AD, Northern Rhodesia 1950AD and Zambia 1980AD, Nyasaland 1945AD and Malawi 1977AD, Southern Rhodesia 1941AD and Zimbabwe 1982AD, Mozambique 1940AD, 1960AD and 1980AD, and neighbouring Katanga in 1938AD and 1984AD) [@CASO1960FederationCensus; @Mozambique1940Censo; @Mitchell2007IHS]. In 1950AD and 1952AD, pre-Federation colonial district estimates govern the spatial shares; between 1955AD and 1963AD, Federation of Rhodesia and Nyasaland provincial totals and Mozambique's 1955AD overseas-province district harmonisation govern sub-regional weights; and from 1966AD through 1980AD, post-independence national censuses in Zambia, Malawi, Mozambique and Zimbabwe anchor sub-regional disaggregation.

# Testing and Validation

## Colonial and Post-Colonial Census Reconciliation

Table \ref{tab:validation-censuses} checks the chapter's demographic totals against official territorial and provincial census benchmarks compiled from the Central African Statistical Office, colonial statistical yearbooks and post-independence national statistical offices [@CASO1960FederationCensus; @Mozambique1940Censo; @Mitchell2007IHS]. Across the Federation of Rhodesia and Nyasaland in 1956AD, official enumerations record 7.264.960 residents across Nyasaland (2.595.200), Southern Rhodesia (2.468.000) and Northern Rhodesia (2.201.760). Adding Mozambique's 1960AD provincial sum (6.604.000) yields roughly 13,87M inhabitants across the four core territories in the late 1950s, closely flanking NICETHI's 1958AD (12,2M), 1961AD (12,67M) and 1963AD (13,16M) regional totals once census under-enumeration of rural Africans in pre-1962AD Southern Rhodesia and Northern Rhodesia is considered [@CASO1960FederationCensus; @Office1949AnnualReport].

<figure class="crd-table-figure" id="tab:validation-censuses">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Polity</th><th class="crd-th">Year</th><th class="crd-th">Units</th><th class="crd-th">Enumerated Pop.</th><th class="crd-th">Exact Total</th><th class="crd-th">Basis</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Federation of Rhodesia and Nyasaland</strong></td><td class="crd-td">1956AD</td><td class="crd-td">3</td><td class="crd-td">7,26M</td><td class="crd-td">7.264.960</td><td class="crd-td">CASO 1956 census (3 territories)</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia (6 provinces)</strong></td><td class="crd-td">1950AD</td><td class="crd-td">6</td><td class="crd-td">1,82M</td><td class="crd-td">1.816.000</td><td class="crd-td">Colonial provincial tax &amp; census roll</td></tr>
<tr><td class="crd-td"><strong>Zambia (9 provinces)</strong></td><td class="crd-td">1980AD</td><td class="crd-td">9</td><td class="crd-td">5,66M</td><td class="crd-td">5.661.801</td><td class="crd-td">1980AD national census</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia (2 regions)</strong></td><td class="crd-td">1941AD</td><td class="crd-td">2</td><td class="crd-td">1,43M</td><td class="crd-td">1.426.581</td><td class="crd-td">Mashonaland &amp; Matabeleland</td></tr>
<tr><td class="crd-td"><strong>Zimbabwe (8 provinces)</strong></td><td class="crd-td">1982AD</td><td class="crd-td">8</td><td class="crd-td">7,55M</td><td class="crd-td">7.546.041</td><td class="crd-td">1982AD first post-independence census</td></tr>
<tr><td class="crd-td"><strong>Nyasaland (3 provinces)</strong></td><td class="crd-td">1945AD</td><td class="crd-td">3</td><td class="crd-td">2,05M</td><td class="crd-td">2.050.051</td><td class="crd-td">1945AD protectorate census</td></tr>
<tr><td class="crd-td"><strong>Malawi (3 provinces, ADM1)</strong></td><td class="crd-td">1977AD</td><td class="crd-td">3</td><td class="crd-td">5,55M</td><td class="crd-td">5.547.460</td><td class="crd-td">1977AD census ADM1 provincial sum</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique (Colony)</strong></td><td class="crd-td">1940AD</td><td class="crd-td">1</td><td class="crd-td">5,09M</td><td class="crd-td">5.085.630</td><td class="crd-td">1940AD general population census</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique (9 districts)</strong></td><td class="crd-td">1960AD</td><td class="crd-td">9</td><td class="crd-td">6,6M</td><td class="crd-td">6.604.000</td><td class="crd-td">1960AD provincial census</td></tr>
<tr><td class="crd-td"><strong>Mozambique (10 provinces)</strong></td><td class="crd-td">1980AD</td><td class="crd-td">10</td><td class="crd-td">10,93M</td><td class="crd-td">10.934.648</td><td class="crd-td">1980AD post-independence census</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Official territorial and provincial census benchmarks used to anchor South-Central African and Mozambican population reconstructions.</figcaption>
</figure>

At the end of the study window, the four national censuses of Malawi 1977AD (5.547.460), Zambia 1980AD (5.661.801), Mozambique 1980AD (10.934.648) and Zimbabwe 1982AD (7.546.041) sum to 29,69M inhabitants, excluding neighbouring Katanga (Haut-Katanga, Lualaba and Tanganyika held 3.088.333 in 1984AD). That national aggregate aligns directly with NICETHI's 1980AD regional total of 30,21M across the eight sub-regions, confirming that sub-regional interpolation introduces no systematic drift across the colonial-to-postcolonial transition [@Mitchell2007IHS; @Pereira2016CuttingBack].

## Settlement Rank-Size Calibration and Urban Hierarchy Diagnostics

Rank-size diagnostics across the 922 individually assessed settlements test whether colonial capitals, mining towns and secondary administrative centres form a coherent urban hierarchy (Figure \ref{fig:rank-size}). Across the full 922-entry ledger, ordinary least-squares regression on the upper half ($n = 61$) yields a Zipf exponent of $q = 1,3$ ($R^2 = 0,98$), while full-sample regression across all 922 entries yields $q = 1,09$ ($R^2 = 0,96$). When city-proper and metropolitan duplicates at identical coordinates are deduplicated into the 111 distinct urban peaks plotted in Figure \ref{fig:rank-size}, the upper-tier fit tightens to $q = 1,12$ ($R^2 = 0,97$).

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-south-central/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Settlement rank-size distribution across 111 spatially deduplicated sites (q = 1,12, R² = 0,97) and mean sub-regional population densities in 1980AD.</figcaption>
</figure>

Unlike the polycentric pre-colonial hierarchy ($q < 1$), a colonial exponent slightly above unity ($q = 1,12$) captures multi-polar colonial primacy: five major cities, namely Maputo agglomeration (718,4k), Harare city-proper (656k), Lubumbashi (604k), Lusaka (536k) and Bulawayo agglomeration (378k), towered over colonial capitals and rail hubs, yet no single metropolis monopolised the whole macro-region because four separate colonial capitals and two mining hubs divided urban growth [@Domingos2013DosSuburbios; @Frederiksen2013SeeingThe; @ThomasJBryan2026BritishSouthern]. Beneath that top quintet, a dense Copperbelt and secondary-port tier between 100k and 285k encompasses Ndola (281,3k), Kitwe (266,3k), Blantyre (248k agglomeration; 222,2k city-proper), Beira (213,4k), Nampula (145,6k), Kabwe (136k), Mufulira (135,5k), Chingola (130,9k), Lilongwe (127,9k agglomeration; 102,9k city-proper) and Luanshya (110,9k), before smaller district *bomas*, gold towns and rail sidings taper downward toward 1k in Figure \ref{fig:rank-size} (interquartile range $\log_{10} = 0,39$).

# Results

## Chartered Partition, Hut Taxes and Early Urban Nodes (1890AD to 1920AD)

At 1890AD, the combined population of the eight sub-regions stood at 5,61M, dipping slightly to 5,32M in 1920AD under the combined shock of colonial conquest wars, the 1890s rinderpest panzootic, sleeping sickness outbreaks, forced porterage during the 1914AD to 1918AD East African campaign and the 1918AD influenza pandemic (Table \ref{tab:trajectory} and Figure \ref{fig:trends}) [@CordellGregory1987AfricanPop; @Weeks2013EricAllina; @Phiri1988PreColonial]. In 1890AD, population was still overwhelmingly rural and concentrated along coastal Mozambique and the Shire-Lake Malawi corridor: Northern Mozambique and Zambezia held 1,86M, Central and Southern Mozambique held 1,2M and Nyasaland held 1,11M (11,07 persons/km², already the highest density in the region).

By 1920AD, early railway towns and settler farms had begun to re-order urban geography, lifting active documented settlements in the gazetteer from 1 in 1890AD (Nkhotakota, 6,4k) to 810 by 1920AD (Figure \ref{fig:trends}). In Southern Rhodesia, Mashonaland expanded from 275,2k in 1890AD to 469,9k in 1920AD and Matabeleland rose from 251,9k to 409,4k, anchored by Bulawayo (18,5k in 1921AD), Salisbury (16,4k), Umtali (4,1k) and Gwelo (3,6k) [@ThomasJBryan2026BritishSouthern; @NMMZ2022ZimbabweSites]. Across the border in Mozambique, Lourenço Marques surged from 4,9k in 1894AD to 26,1k in 1912AD after becoming the colony's capital and Transvaal railway port, while Beira grew from 1,45k in 1891AD to 7,8k in 1912AD and Élisabethville (Lubumbashi) jumped from 4,1k at its 1911AD foundation to 16,1k by 1920AD [@Domingos2013DosSuburbios; @Hassane2026InstrumentosLegais].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-south-central/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional and attested urban population trajectories, active settlement counts and leading urban centres across South-Central Africa and Mozambique from 1890AD to 1980AD.</figcaption>
</figure>

## Copperbelt Industrialisation, Land Apportionment and Federation (1920AD to 1963AD)

Between 1920AD and 1950AD, regional population more than doubled from 5,32M to 11,84M, and active urban sites reached 488 before rising to 13,16M at the close of the Federation of Rhodesia and Nyasaland in 1963AD (Table \ref{tab:trajectory}). Three distinct economic motors drove this mid-century surge. First, deep-shaft sulphide copper extraction transformed Northern Rhodesia's Copperbelt after 1928AD [@Frederiksen2013SeeingThe; @Office1949AnnualReport]. Between 1931AD and 1960AD, Kitwe grew from 11,6k to 107,8k, Ndola from 10,9k to 88,2k, Mufulira from 7,4k to 74,1k, Luanshya from 14,2k to 71,2k and Chingola from 5,8k to 50,2k, while the new territorial capital at Lusaka (designated in 1931AD to replace Livingstone) expanded from 4,3k in 1931AD to 132k by 1960AD [@Macola2008OneZambia; @CASO1960FederationCensus]. Meanwhile, rural eastern reserves such as the Ngoni districts around Fort Jameson experienced mounting soil erosion and labour out-migration as young men left for Copperbelt shafts and Southern Rhodesian farms [@Hellen1962SomeAspects; @NorthernRhodesia1938Report; @GeneralMissio1931EvangelisationBeing].

Second, in Southern Rhodesia, the Land Apportionment Act of 1930AD and the Native Land Husbandry Act of 1951AD partitioned rural land between European commercial estates along the rail line and crowded African reserves, while post-war industrial investment drew tens of thousands of European immigrants and Malawian or Mozambican workers to Salisbury and Bulawayo [@Chingozha2019TheComplementarity; @Mudeka2016GenderedExclusion; @ThomasJBryan2026BritishSouthern]. Salisbury climbed from 28,8k in 1931AD to 118,8k in 1951AD and 226k in 1960AD (375,6k in its wider agglomeration), while Bulawayo expanded from 31,1k in 1931AD to 92,2k in 1951AD and 279,1k in the 1960AD agglomeration, joined by industrial secondary towns at Gwelo, Umtali, Que Que (Kwekwe), Gatooma (Kadoma) and the Wankie (Hwange) coalfield [@CASO1960FederationCensus; @Mudeka2016GenderedExclusion].

Third, Nyasaland and Mozambique supplied much of the regional wage-labour force. In Nyasaland, dense peasant settlement in the Shire Highlands (2,46M total territorial population in 1950AD) coexisted with tea and tobacco estates under *thangata* labour tenancy, pushing tens of thousands of migrants southward while Blantyre-Limbe consolidated from separate twin townships (18,4k and 15,2k in 1951AD) into a 76,3k urban agglomeration by 1960AD [@Sawasawa2014LabourExploitation; @Nyasaland1943AgricultureReport; @CASO1960FederationCensus]. In Mozambique, the Estado Novo abolished chartered company administration in Niassa (1929AD) and Manica-Sofala (1942AD), institutionalised *chibalo* forced cotton and rice cultivation in the north and centre, and formalised regulated Witwatersrand mine recruitment in Gaza and Inhambane while Lourenço Marques reached 93,3k in 1950AD and 183,8k in 1960AD and Beira grew to 58,2k [@Mozambique1940Censo; @Weeks2013EricAllina; @CordellGregory1987AfricanPop; @Nativel2016LoisirsProductions].

<figure class="crd-table-figure" id="tab:trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1890AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1969AD</th><th class="crd-th">1980AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Rhodesia: Copperbelt and Central</strong></td><td class="crd-td">246,6k</td><td class="crd-td">223,5k</td><td class="crd-td">332k</td><td class="crd-td">390,1k</td><td class="crd-td">1,16M</td><td class="crd-td">2,41M</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Barotseland and Southern</strong></td><td class="crd-td">256,8k</td><td class="crd-td">226,3k</td><td class="crd-td">809,3k</td><td class="crd-td">336,1k</td><td class="crd-td">1,14M</td><td class="crd-td">1,45M</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Northern, Luapula and East</strong></td><td class="crd-td">404,1k</td><td class="crd-td">362,3k</td><td class="crd-td">805,4k</td><td class="crd-td">533,2k</td><td class="crd-td">1,39M</td><td class="crd-td">1,74M</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Mashonaland and Manicaland</strong></td><td class="crd-td">275,2k</td><td class="crd-td">469,9k</td><td class="crd-td">3,11M</td><td class="crd-td">1,22M</td><td class="crd-td">1,72M</td><td class="crd-td">3,95M</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Matabeleland and Midlands</strong></td><td class="crd-td">251,9k</td><td class="crd-td">409,4k</td><td class="crd-td">1,5M</td><td class="crd-td">1,04M</td><td class="crd-td">2,07M</td><td class="crd-td">3,36M</td></tr>
<tr><td class="crd-td"><strong>Nyasaland Protectorate</strong></td><td class="crd-td">1,11M</td><td class="crd-td">1,1M</td><td class="crd-td">2,46M</td><td class="crd-td">2,4M</td><td class="crd-td">4,47M</td><td class="crd-td">6,37M</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: North and Zambezia</strong></td><td class="crd-td">1,86M</td><td class="crd-td">1,57M</td><td class="crd-td">1,42M</td><td class="crd-td">4,29M</td><td class="crd-td">4,71M</td><td class="crd-td">6,82M</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: Central and South</strong></td><td class="crd-td">1,2M</td><td class="crd-td">964,3k</td><td class="crd-td">1,4M</td><td class="crd-td">2,95M</td><td class="crd-td">4,13M</td><td class="crd-td">4,1M</td></tr>
<tr><td class="crd-td"><strong>Total Study Area</strong></td><td class="crd-td">5,61M</td><td class="crd-td">5,32M</td><td class="crd-td">11,84M</td><td class="crd-td">13,16M</td><td class="crd-td">20,78M</td><td class="crd-td">30,21M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional and total population trajectories across six benchmark years from 1890AD to 1980AD.</figcaption>
</figure>

## Decolonisation, Liberation Wars and Post-1964AD Urban Surge (1963AD to 1980AD)

Following the break-up of the Federation in December 1963, independence in Malawi and Zambia in 1964AD contrasted sharply with settler rule in Rhodesia after its November 1965 Unilateral Declaration of Independence and Portugal's retention of Mozambique until June 1975 [@Macola2008OneZambia; @Sempijja2025ColonialAnd; @Pereira2016CuttingBack]. Aggregate regional population more than doubled again from 13,16M in 1963AD to 20,78M in 1969AD and 30,21M in 1980AD, while documented active settlements climbed toward 72 in 1977AD and 71 in 1980AD (Table \ref{tab:trajectory} and Figure \ref{fig:trends}).

In independent Zambia, lifted colonial pass controls triggered explosive migration to Lusaka (jumping from 132k in 1960AD to 262k in 1970AD and 536k in 1980AD) and across the Copperbelt (Ndola 281,3k, Kitwe 266,3k, Mufulira 135,5k, Chingola 130,9k and Luanshya 110,9k in 1980AD), raising the Copperbelt and Central sub-region to 2,41M by 1980AD [@Macola2008OneZambia; @Mitchell2007IHS]. In Malawi, transfer of the administrative capital from Zomba (28,8k in 1980AD) to Lilongwe in 1975AD accelerated central plateau urbanisation, lifting Lilongwe from 8,5k in 1951AD to 102,9k in 1977AD (127,9k agglomeration by 1980AD) while Blantyre reached 222,2k (248k agglomeration) and national population reached 6,37M (63,43 persons/km²) [@Moyo2012NamingPractices].

South of the Zambezi and in Mozambique, guerrilla warfare and late-colonial counter-insurgency reshaped settlement patterns before independence. In Mozambique, FRELIMO's war in Cabo Delgado, Niassa and Tete prompted Portuguese forces to concentrate rural populations into fortified *aldeamentos* and expand garrison towns such as Nampula (growing from 23,1k in 1970AD to 145,6k in 1980AD) and Nacala Porto (74,9k), while Lourenço Marques (Maputo) surged from 444,5k in 1970AD to 718,4k in 1980AD and Beira expanded to 213,4k despite the post-1975AD departure of Portuguese settlers [@Sempijja2025ColonialAnd; @Domingos2013DosSuburbios; @Hassane2026InstrumentosLegais; @Machaqueiro2013EnsinoPolitica]. In Rhodesia, intensification of the liberation war after 1972AD pushed rural refugees into Salisbury (climbing from 386k in 1970AD to 656k at independence in 1980AD) and Bulawayo (378k agglomeration), lifting Mashonaland to 3,95M and Matabeleland-Midlands to 3,36M [@ThomasJBryan2026BritishSouthern; @Chingozha2019TheComplementarity].

## Urban Centres and Sub-Regional Density Contrasts

Table \ref{tab:top-centres} summarises the twelve largest individually assessed entries in the chapter ledger alongside their spatial scopes, chronological spans and peak populations. Every entry among the top twelve peaked in 1980AD (or 1977AD for Blantyre city-proper, outside the table at rank 14), reflecting continuous late-colonial and early post-independence urban acceleration across all four core states [@Mitchell2007IHS; @Domingos2013DosSuburbios].

<figure class="crd-table-figure" id="tab:top-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Scope</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Obs</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Maputo (Agglomeration)</strong></td><td class="crd-td">Mozambique</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1980AD</td><td class="crd-td">718,4k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Harare</strong></td><td class="crd-td">Zimbabwe</td><td class="crd-td">City</td><td class="crd-td">1891AD-1980AD</td><td class="crd-td">656k</td><td class="crd-td">18</td></tr>
<tr><td class="crd-td"><strong>Lubumbashi</strong></td><td class="crd-td">DR Congo</td><td class="crd-td">City</td><td class="crd-td">1911AD-1980AD</td><td class="crd-td">604k</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Harare (Agglomeration)</strong></td><td class="crd-td">Zimbabwe</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1980AD</td><td class="crd-td">596,5k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Lusaka</strong></td><td class="crd-td">Zambia</td><td class="crd-td">City</td><td class="crd-td">1911AD-1980AD</td><td class="crd-td">536k</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Lusaka (Agglomeration)</strong></td><td class="crd-td">Zambia</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1980AD</td><td class="crd-td">535,8k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Lubumbashi (Agglomeration)</strong></td><td class="crd-td">DR Congo</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1980AD</td><td class="crd-td">435,4k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Bulawayo (Agglomeration)</strong></td><td class="crd-td">Zimbabwe</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1980AD</td><td class="crd-td">378k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Ndola</strong></td><td class="crd-td">Zambia</td><td class="crd-td">City</td><td class="crd-td">1911AD-1980AD</td><td class="crd-td">281,3k</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Kitwe</strong></td><td class="crd-td">Zambia</td><td class="crd-td">City</td><td class="crd-td">1931AD-1980AD</td><td class="crd-td">266,3k</td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>Blantyre (Agglomeration)</strong></td><td class="crd-td">Malawi</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1980AD</td><td class="crd-td">248k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Blantyre</strong></td><td class="crd-td">Malawi</td><td class="crd-td">City</td><td class="crd-td">1891AD-1977AD</td><td class="crd-td">222,2k</td><td class="crd-td">8</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Twelve largest individually assessed settlement records in South-Central Africa and Mozambique (all peaking in 1980AD).</figcaption>
</figure>

End-epoch population density in 1980AD spans a fourteenfold ecological gradient across the eight sub-regions (Figure \ref{fig:rank-size}). Nyasaland reached 63,43 persons/km², more than double the next-densest zone, Southern Rhodesia Mashonaland-Manicaland (25,46 persons/km²). Four intermediate sub-regions clustered narrowly between 13,7 and 14,7 persons/km²: Northern Rhodesia Copperbelt-Central (14,65), Southern Rhodesia Matabeleland-Midlands (14,16), Northern Mozambique and Zambezia (14,16) and Central-Southern Mozambique (13,69), while Northern and Eastern Zambia (6,62 persons/km²) and the Kalahari-sand plains of Barotseland and North-Western Zambia (4,51 persons/km²) remained sparsely inhabited [@Hellen1962SomeAspects; @Frederiksen2013SeeingThe].

# Limitations

Three structural constraints govern these colonial demographic series. First, pre-1960AD rural African totals in both Rhodesias and chartered Mozambique carry uneven enumeration coverage. Early Southern Rhodesian tax registers multiplied adult male taxpayers by fixed household factors until the 1962AD census revealed a larger rural population than previously projected, while Northern Rhodesia's first territorial African census did not occur until 1963AD and Mozambique's 1940AD and 1950AD censuses faced tax-evasion undercounting in remote Niassa, Tete and Zambezia [@CASO1960FederationCensus; @Mozambique1940Censo; @Pereira2016CuttingBack].

Second, regime transitions between pre-1953AD colonial district baselines, the 1953AD to 1963AD Federation provincial structure, Mozambique's 1955AD district harmonisation and post-1964AD national censuses introduce visible step-changes in sub-regional shares between 1952AD and 1955AD and again between 1963AD, 1966AD and 1972AD (for instance across Barotseland, Mashonaland, Nyasaland and Northern Mozambique in the full 14-benchmark series). Because sub-regional polygons changed administrative attribution across Federation and independence realignments, single sub-regional series should be read alongside the smooth macro-regional aggregate and the Appendix census tables [@CASO1960FederationCensus; @Mitchell2007IHS].

Third, municipal boundary definitions shift sharply between colonial European-only or core town limits and post-independence or Africapolis agglomerations. Harare, Bulawayo, Maputo, Lusaka, Lubumbashi, Blantyre and Lilongwe therefore appear in the ledger as paired city-proper and metropolitan entries, while Beira shifts from the colonial city-proper series (ending 1950AD at 42,5k) to the post-1950AD *Cidade da Beira* series reaching 213,4k in 1980AD [@Domingos2013DosSuburbios; @Hassane2026InstrumentosLegais]. Care is required not to sum paired city-proper and agglomeration rows when computing regional urban totals.

# Conclusion

Between 1890AD and 1980AD, South-Central Africa and Mozambique quintupled in population from 5,61M to 30,21M inhabitants while building an urban network anchored by Maputo, Harare, Lubumbashi, Lusaka, Bulawayo, the Copperbelt mining towns, Blantyre, Beira and Nampula. Early demographic stagnation under conquest, rinderpest and First World War porterage gave way after 1920AD to rapid mine-led urbanisation on the Copperbelt, settler-industrial concentration along the Rhodesian highveld, intense agrarian pressure in the Shire Highlands of Nyasaland and coerced labour migration circuits across Mozambique. After 1963AD, decolonisation in Zambia and Malawi removed colonial pass restrictions while liberation wars in Mozambique and Zimbabwe displaced rural households toward towns and fortified settlements. Reconciling 922 settlement series with 12 colonial and early post-colonial census tables, NICETHI supplies a continuous spatial baseline leading directly into the post-1980AD era.

# Appendix

## Sub-Regional Density and Share Series

Table \ref{tab:density-appendix} reports mean population density in persons per km² across all eight colonial sub-regions from 1890AD to 1980AD, and Table \ref{tab:shares-appendix} tracks each sub-region's percentage share of the study-area total across the same six benchmarks. Note how Nyasaland's share rose from 19,8% in 1890AD to 21,1% in 1980AD despite occupying only 5% of regional land area, while Northern Mozambique recovered from post-1920AD undercounts to hold 22,6% of total population in 1980AD [@Nyasaland1943AgricultureReport; @Mozambique1940Censo].

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1890AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1969AD</th><th class="crd-th">1980AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Rhodesia: Copperbelt and Central</strong></td><td class="crd-td">1,5</td><td class="crd-td">1,36</td><td class="crd-td">2,01</td><td class="crd-td">2,37</td><td class="crd-td">7,02</td><td class="crd-td">14,65</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Barotseland and Southern</strong></td><td class="crd-td">0,8</td><td class="crd-td">0,7</td><td class="crd-td">2,51</td><td class="crd-td">1,04</td><td class="crd-td">3,53</td><td class="crd-td">4,51</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Northern, Luapula and East</strong></td><td class="crd-td">1,54</td><td class="crd-td">1,38</td><td class="crd-td">3,06</td><td class="crd-td">2,03</td><td class="crd-td">5,28</td><td class="crd-td">6,62</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Mashonaland and Manicaland</strong></td><td class="crd-td">1,77</td><td class="crd-td">3,03</td><td class="crd-td">20,06</td><td class="crd-td">7,85</td><td class="crd-td">11,11</td><td class="crd-td">25,46</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Matabeleland and Midlands</strong></td><td class="crd-td">1,06</td><td class="crd-td">1,73</td><td class="crd-td">6,32</td><td class="crd-td">4,4</td><td class="crd-td">8,73</td><td class="crd-td">14,16</td></tr>
<tr><td class="crd-td"><strong>Nyasaland Protectorate</strong></td><td class="crd-td">11,07</td><td class="crd-td">10,94</td><td class="crd-td">24,48</td><td class="crd-td">23,92</td><td class="crd-td">44,54</td><td class="crd-td">63,43</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: North and Zambezia</strong></td><td class="crd-td">3,86</td><td class="crd-td">3,25</td><td class="crd-td">2,95</td><td class="crd-td">8,9</td><td class="crd-td">9,76</td><td class="crd-td">14,16</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: Central and South</strong></td><td class="crd-td">4,01</td><td class="crd-td">3,22</td><td class="crd-td">4,69</td><td class="crd-td">9,84</td><td class="crd-td">13,78</td><td class="crd-td">13,69</td></tr>
<tr><td class="crd-td"><strong>Mean Study Area</strong></td><td class="crd-td">2,77</td><td class="crd-td">2,63</td><td class="crd-td">5,85</td><td class="crd-td">6,5</td><td class="crd-td">10,27</td><td class="crd-td">14,93</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Mean population density (persons per km²) across eight colonial sub-regions from 1890AD to 1980AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:shares-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1890AD (%)</th><th class="crd-th">1920AD (%)</th><th class="crd-th">1950AD (%)</th><th class="crd-th">1963AD (%)</th><th class="crd-th">1969AD (%)</th><th class="crd-th">1980AD (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Rhodesia: Copperbelt and Central</strong></td><td class="crd-td">4,4</td><td class="crd-td">4,2</td><td class="crd-td">2,8</td><td class="crd-td">3</td><td class="crd-td">5,6</td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Barotseland and Southern</strong></td><td class="crd-td">4,6</td><td class="crd-td">4,3</td><td class="crd-td">6,8</td><td class="crd-td">2,6</td><td class="crd-td">5,5</td><td class="crd-td">4,8</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Northern, Luapula and East</strong></td><td class="crd-td">7,2</td><td class="crd-td">6,8</td><td class="crd-td">6,8</td><td class="crd-td">4,1</td><td class="crd-td">6,7</td><td class="crd-td">5,8</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Mashonaland and Manicaland</strong></td><td class="crd-td">4,9</td><td class="crd-td">8,8</td><td class="crd-td">26,3</td><td class="crd-td">9,3</td><td class="crd-td">8,3</td><td class="crd-td">13,1</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Matabeleland and Midlands</strong></td><td class="crd-td">4,5</td><td class="crd-td">7,7</td><td class="crd-td">12,7</td><td class="crd-td">7,9</td><td class="crd-td">10</td><td class="crd-td">11,1</td></tr>
<tr><td class="crd-td"><strong>Nyasaland Protectorate</strong></td><td class="crd-td">19,8</td><td class="crd-td">20,7</td><td class="crd-td">20,8</td><td class="crd-td">18,3</td><td class="crd-td">21,5</td><td class="crd-td">21,1</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: North and Zambezia</strong></td><td class="crd-td">33,2</td><td class="crd-td">29,4</td><td class="crd-td">12</td><td class="crd-td">32,6</td><td class="crd-td">22,6</td><td class="crd-td">22,6</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: Central and South</strong></td><td class="crd-td">21,4</td><td class="crd-td">18,1</td><td class="crd-td">11,9</td><td class="crd-td">22,4</td><td class="crd-td">19,9</td><td class="crd-td">13,6</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Percentage share of total regional population by colonial sub-region across six benchmark years from 1890AD to 1980AD.</figcaption>
</figure>

## Provincial Census Enumerations and Gazetteer Coverage

Tables \ref{tab:subadmin-bca} and \ref{tab:subadmin-moz-kat} present the provincial-level colonial and early post-colonial census distributions compiled in the regional archive for British Central Africa (Northern Rhodesia, Southern Rhodesia and Nyasaland) and for Portuguese Mozambique alongside neighbouring Katanga [@CASO1960FederationCensus; @Mozambique1940Censo; @Mitchell2007IHS]. Table \ref{tab:subregion-sites-appendix} links those sub-regions to the 922 individually assessed sites in the companion gazetteer.

<figure class="crd-table-figure" id="tab:subadmin-bca">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Census Territory</th><th class="crd-th">Province</th><th class="crd-th">Population</th><th class="crd-th">Pop. (Short)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Federation (1956AD)</strong></td><td class="crd-td">Nyasaland (Malawi)</td><td class="crd-td">2.595.200</td><td class="crd-td">2,6M</td></tr>
<tr><td class="crd-td"><strong>Federation (1956AD)</strong></td><td class="crd-td">Southern Rhodesia (Zimbabwe)</td><td class="crd-td">2.468.000</td><td class="crd-td">2,47M</td></tr>
<tr><td class="crd-td"><strong>Federation (1956AD)</strong></td><td class="crd-td">Northern Rhodesia (Zambia)</td><td class="crd-td">2.201.760</td><td class="crd-td">2,2M</td></tr>
<tr><td class="crd-td"><strong>N. Rhodesia (1950AD)</strong></td><td class="crd-td">Western</td><td class="crd-td">540.000</td><td class="crd-td">540k</td></tr>
<tr><td class="crd-td"><strong>N. Rhodesia (1950AD)</strong></td><td class="crd-td">Northern</td><td class="crd-td">332.000</td><td class="crd-td">332k</td></tr>
<tr><td class="crd-td"><strong>N. Rhodesia (1950AD)</strong></td><td class="crd-td">Eastern</td><td class="crd-td">327.000</td><td class="crd-td">327k</td></tr>
<tr><td class="crd-td"><strong>N. Rhodesia (1950AD)</strong></td><td class="crd-td">Barotse</td><td class="crd-td">218.000</td><td class="crd-td">218k</td></tr>
<tr><td class="crd-td"><strong>N. Rhodesia (1950AD)</strong></td><td class="crd-td">Southern</td><td class="crd-td">215.000</td><td class="crd-td">215k</td></tr>
<tr><td class="crd-td"><strong>N. Rhodesia (1950AD)</strong></td><td class="crd-td">Central</td><td class="crd-td">184.000</td><td class="crd-td">184k</td></tr>
<tr><td class="crd-td"><strong>Zambia (1980AD)</strong></td><td class="crd-td">Copperbelt</td><td class="crd-td">1.251.178</td><td class="crd-td">1,25M</td></tr>
<tr><td class="crd-td"><strong>Zambia (1980AD)</strong></td><td class="crd-td">Lusaka</td><td class="crd-td">691.054</td><td class="crd-td">691,1k</td></tr>
<tr><td class="crd-td"><strong>Zambia (1980AD)</strong></td><td class="crd-td">Northern</td><td class="crd-td">674.750</td><td class="crd-td">674,8k</td></tr>
<tr><td class="crd-td"><strong>Zambia (1980AD)</strong></td><td class="crd-td">Southern</td><td class="crd-td">671.923</td><td class="crd-td">671,9k</td></tr>
<tr><td class="crd-td"><strong>Zambia (1980AD)</strong></td><td class="crd-td">Eastern</td><td class="crd-td">650.902</td><td class="crd-td">650,9k</td></tr>
<tr><td class="crd-td"><strong>Zambia (1980AD)</strong></td><td class="crd-td">Central</td><td class="crd-td">511.905</td><td class="crd-td">511,9k</td></tr>
<tr><td class="crd-td"><strong>Zambia (1980AD)</strong></td><td class="crd-td">Western</td><td class="crd-td">486.455</td><td class="crd-td">486,5k</td></tr>
<tr><td class="crd-td"><strong>Zambia (1980AD)</strong></td><td class="crd-td">Luapula</td><td class="crd-td">420.966</td><td class="crd-td">421k</td></tr>
<tr><td class="crd-td"><strong>Zambia (1980AD)</strong></td><td class="crd-td">North-Western</td><td class="crd-td">302.668</td><td class="crd-td">302,7k</td></tr>
<tr><td class="crd-td"><strong>S. Rhodesia (1941AD)</strong></td><td class="crd-td">Mashonaland</td><td class="crd-td">944.634</td><td class="crd-td">944,6k</td></tr>
<tr><td class="crd-td"><strong>S. Rhodesia (1941AD)</strong></td><td class="crd-td">Matabeleland</td><td class="crd-td">481.947</td><td class="crd-td">481,9k</td></tr>
<tr><td class="crd-td"><strong>Zimbabwe (1982AD)</strong></td><td class="crd-td">Mashonaland East</td><td class="crd-td">1.495.984</td><td class="crd-td">1,5M</td></tr>
<tr><td class="crd-td"><strong>Zimbabwe (1982AD)</strong></td><td class="crd-td">Manicaland</td><td class="crd-td">1.099.202</td><td class="crd-td">1,1M</td></tr>
<tr><td class="crd-td"><strong>Zimbabwe (1982AD)</strong></td><td class="crd-td">Midlands</td><td class="crd-td">1.091.844</td><td class="crd-td">1,09M</td></tr>
<tr><td class="crd-td"><strong>Zimbabwe (1982AD)</strong></td><td class="crd-td">Masvingo</td><td class="crd-td">1.031.697</td><td class="crd-td">1,03M</td></tr>
<tr><td class="crd-td"><strong>Zimbabwe (1982AD)</strong></td><td class="crd-td">Matabeleland North</td><td class="crd-td">885.339</td><td class="crd-td">885,3k</td></tr>
<tr><td class="crd-td"><strong>Zimbabwe (1982AD)</strong></td><td class="crd-td">Mashonaland West</td><td class="crd-td">858.962</td><td class="crd-td">859k</td></tr>
<tr><td class="crd-td"><strong>Zimbabwe (1982AD)</strong></td><td class="crd-td">Mashonaland Central</td><td class="crd-td">563.407</td><td class="crd-td">563,4k</td></tr>
<tr><td class="crd-td"><strong>Zimbabwe (1982AD)</strong></td><td class="crd-td">Matabeleland South</td><td class="crd-td">519.606</td><td class="crd-td">519,6k</td></tr>
<tr><td class="crd-td"><strong>Nyasaland (1945AD)</strong></td><td class="crd-td">Southern</td><td class="crd-td">1.007.802</td><td class="crd-td">1,01M</td></tr>
<tr><td class="crd-td"><strong>Nyasaland (1945AD)</strong></td><td class="crd-td">Central</td><td class="crd-td">751.390</td><td class="crd-td">751,4k</td></tr>
<tr><td class="crd-td"><strong>Nyasaland (1945AD)</strong></td><td class="crd-td">Northern</td><td class="crd-td">290.859</td><td class="crd-td">290,9k</td></tr>
<tr><td class="crd-td"><strong>Malawi (1977AD)</strong></td><td class="crd-td">Southern</td><td class="crd-td">2.754.891</td><td class="crd-td">2,75M</td></tr>
<tr><td class="crd-td"><strong>Malawi (1977AD)</strong></td><td class="crd-td">Central</td><td class="crd-td">2.143.716</td><td class="crd-td">2,14M</td></tr>
<tr><td class="crd-td"><strong>Malawi (1977AD)</strong></td><td class="crd-td">Northern</td><td class="crd-td">648.853</td><td class="crd-td">648,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Colonial and early post-colonial provincial census counts in Northern Rhodesia (Zambia), Southern Rhodesia (Zimbabwe) and Nyasaland (Malawi).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:subadmin-moz-kat">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Census Territory</th><th class="crd-th">Province</th><th class="crd-th">Population</th><th class="crd-th">Pop. (Short)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mozambique (1960AD)</strong></td><td class="crd-td">Nampula</td><td class="crd-td">1.452.000</td><td class="crd-td">1,45M</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1960AD)</strong></td><td class="crd-td">Zambézia</td><td class="crd-td">1.369.000</td><td class="crd-td">1,37M</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1960AD)</strong></td><td class="crd-td">Manica</td><td class="crd-td">780.000</td><td class="crd-td">780k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1960AD)</strong></td><td class="crd-td">Gaza</td><td class="crd-td">682.000</td><td class="crd-td">682k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1960AD)</strong></td><td class="crd-td">Inhambane</td><td class="crd-td">583.000</td><td class="crd-td">583k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1960AD)</strong></td><td class="crd-td">Cabo Delgado</td><td class="crd-td">549.000</td><td class="crd-td">549k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1960AD)</strong></td><td class="crd-td">Tete</td><td class="crd-td">471.000</td><td class="crd-td">471k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1960AD)</strong></td><td class="crd-td">Maputo</td><td class="crd-td">437.000</td><td class="crd-td">437k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1960AD)</strong></td><td class="crd-td">Niassa</td><td class="crd-td">281.000</td><td class="crd-td">281k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1980AD)</strong></td><td class="crd-td">Zambézia</td><td class="crd-td">2.418.851</td><td class="crd-td">2,42M</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1980AD)</strong></td><td class="crd-td">Nampula</td><td class="crd-td">2.241.745</td><td class="crd-td">2,24M</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1980AD)</strong></td><td class="crd-td">Inhambane</td><td class="crd-td">1.023.879</td><td class="crd-td">1,02M</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1980AD)</strong></td><td class="crd-td">Sofala</td><td class="crd-td">990.732</td><td class="crd-td">990,7k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1980AD)</strong></td><td class="crd-td">Gaza</td><td class="crd-td">982.603</td><td class="crd-td">982,6k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1980AD)</strong></td><td class="crd-td">Cabo Delgado</td><td class="crd-td">900.704</td><td class="crd-td">900,7k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1980AD)</strong></td><td class="crd-td">Tete</td><td class="crd-td">780.081</td><td class="crd-td">780,1k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1980AD)</strong></td><td class="crd-td">Manica</td><td class="crd-td">587.345</td><td class="crd-td">587,3k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1980AD)</strong></td><td class="crd-td">Niassa</td><td class="crd-td">507.816</td><td class="crd-td">507,8k</td></tr>
<tr><td class="crd-td"><strong>Mozambique (1980AD)</strong></td><td class="crd-td">Maputo</td><td class="crd-td">500.892</td><td class="crd-td">500,9k</td></tr>
<tr><td class="crd-td"><strong>Belgian Congo (1938AD)</strong></td><td class="crd-td">Élisabethville</td><td class="crd-td">1.023.060</td><td class="crd-td">1,02M</td></tr>
<tr><td class="crd-td"><strong>DR Congo (1984AD)</strong></td><td class="crd-td">Haut-Katanga</td><td class="crd-td">1.391.617</td><td class="crd-td">1,39M</td></tr>
<tr><td class="crd-td"><strong>DR Congo (1984AD)</strong></td><td class="crd-td">Tanganyika</td><td class="crd-td">922.495</td><td class="crd-td">922,5k</td></tr>
<tr><td class="crd-td"><strong>DR Congo (1984AD)</strong></td><td class="crd-td">Lualaba</td><td class="crd-td">774.221</td><td class="crd-td">774,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Colonial district and early post-colonial provincial census counts in Mozambique (1960AD and 1980AD) and southern Katanga (1938AD and 1984AD).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:subregion-sites-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Interior</th><th class="crd-th">Full Ledger</th><th class="crd-th">Obs.</th><th class="crd-th">Peak Sum</th><th class="crd-th">Leading Centres</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Rhodesia: Copperbelt and Central</strong></td><td class="crd-td">47</td><td class="crd-td">14</td><td class="crd-td">263</td><td class="crd-td">2,42M</td><td class="crd-td">Lusaka, Lusaka (Agglomeration), Ndola</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Barotseland and Southern</strong></td><td class="crd-td">48</td><td class="crd-td">14</td><td class="crd-td">234</td><td class="crd-td">301,9k</td><td class="crd-td">Livingstone, Kipushi, Mazabuka</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Northern, Luapula and East</strong></td><td class="crd-td">91</td><td class="crd-td">10</td><td class="crd-td">437</td><td class="crd-td">361,5k</td><td class="crd-td">Kasama, Mansa, Chipata</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Mashonaland and Manicaland</strong></td><td class="crd-td">86</td><td class="crd-td">8</td><td class="crd-td">429</td><td class="crd-td">1,67M</td><td class="crd-td">Harare, Harare (Agglomeration), Mutare</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Matabeleland and Midlands</strong></td><td class="crd-td">74</td><td class="crd-td">17</td><td class="crd-td">382</td><td class="crd-td">842,7k</td><td class="crd-td">Bulawayo (Agglomeration), Bulawayo, Kwekwe</td></tr>
<tr><td class="crd-td"><strong>Nyasaland Protectorate</strong></td><td class="crd-td">195</td><td class="crd-td">23</td><td class="crd-td">1.048</td><td class="crd-td">1,44M</td><td class="crd-td">Blantyre (Agglomeration), Blantyre, Lilongwe (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: North and Zambezia</strong></td><td class="crd-td">186</td><td class="crd-td">15</td><td class="crd-td">752</td><td class="crd-td">1M</td><td class="crd-td">Nampula, Nacala Porto, Quelimane</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: Central and South</strong></td><td class="crd-td">120</td><td class="crd-td">21</td><td class="crd-td">504</td><td class="crd-td">1,76M</td><td class="crd-td">Maputo (Agglomeration), Cidade da Beira, Maputo</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Sub-regional settlement match counts, observation totals, interior peak sums and leading urban centres.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

In Table \ref{tab:subregions}, 113 of the 922 individually assessed settlements fall inside the core 5-arcminute regional mask footprint, whereas 9 border-margin towns (Lubumbashi and Lubumbashi agglomeration in Katanga; Mbinga, Tukuyu and Vwawa in southern Tanzania; Mtwara and Mikindani north of the Ruvuma; Selebi-Phikwe in eastern Botswana; and Tjaneni in north-eastern eSwatini) lie slightly outside the colonial perimeter and are assigned to their adjacent sub-regions in the companion settlement gazetteer so all 122 ledger entries are tabulated.
