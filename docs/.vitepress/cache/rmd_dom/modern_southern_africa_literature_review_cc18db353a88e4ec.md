---
title: "Modern Southern Africa (1902-Present)"
subtitle: "South Africa, Namibia, Botswana, Lesotho and Eswatini"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: modern_southern_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Forty-six first-level administrative sub-regions and 1.763 settlements across Modern Southern Africa between 1902AD and 2026AD."
hero_label: "fig:hero-modern-southern-africa"

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

Between 1902AD and 2025AD, Southern Africa underwent an almost ninefold demographic expansion alongside rapid industrial urbanisation and sharp political and epidemiological shocks. Across 2.671.510 km² spanning South Africa, Namibia, Botswana, Lesotho and Eswatini, NICETHI reconstructs an aggregate regional population rising from 8,43M inhabitants in 1910AD to 13,64M in 1952AD, 19,09M in 1970AD, 51,03M in 2001AD and 74,33M by 2025AD, lifting mean regional density to 27,82 persons/km². Growth was shaped by four forces: Witwatersrand gold and diamond industrialisation drawing circular migrant labour across all five territories; Apartheid statistical severance of the Transkei, Bophuthatswana, Venda and Ciskei homelands between 1976AD and 1991AD before unified post-1994AD censuses restored national accounting; post-1966AD diamond-financed urbanisation in Botswana and post-1990AD independence growth in Namibia; and the 1995AD to 2008AD HIV/AIDS mortality surge followed by antiretroviral survival recovery. These results rest on 1.763 individually assessed settlements across 11.016 chronological observations, anchored to national censuses and disaggregated across 46 first-level administrative divisions.



# Background

## Physical Geography, Mining Hearths and Colonial Partition

Southern Africa south of the Kunene, Okavango, Zambezi and Limpopo watersheds spans an environmental gradient from the subtropical KwaZulu-Natal littoral and well-watered Highveld maize plateau to the arid Karoo, Kalahari basin and Namib coastal desert [@Modiba2025PopulationGrowth; @SAHRIS2024SouthAfrica]. At the close of the South African War in May 1902, political consolidation forged five territorial units that remained economically intertwined throughout the twentieth century: the four British settler colonies united in May 1910 as the Union of South Africa, the three British High Commission Territories of Bechuanaland (Botswana), Basutoland (Lesotho) and Swaziland (Eswatini), and German South West Africa (Namibia), placed under South African League of Nations Mandate after 1915AD [@Paiment2025BeyondApartheid; @ChimereDan2013ApartheidAnd].

Urban and rural settlement patterns diverged sharply from older agrarian distributions once diamond extraction at Kimberley (1871AD) and deep-level gold mining along the Witwatersrand (1886AD) created an industrial core on the central Highveld [@Simkins2011SouthAfrica; @Cilliers2012NewEstimates]. Railway lines linking Cape Town, Port Elizabeth, East London, Durban and Maputo to Johannesburg transformed port towns into commercial entrepots while turning rural reserves across the Eastern Cape, KwaZulu-Natal, Lesotho, Eswatini, Botswana and northern Namibia into labour-sending peripheries [@Simkins2011SouthAfrica; @Madhavan2017HouseholdStructure]. Protected conservation corridors such as Kruger National Park along the eastern Lowveld frontier further channelled human settlement into dense peri-reserve margins rather than continuous rural dispersion [@Hughes2017ModelingThe; @Deleu2015ImprovingAfripop].

## Historiography of Twentieth-Century Southern African Censuses

Modern demographic reconstruction in Southern Africa begins with the simultaneous colonial censuses of April 1904 in the Cape, Natal, Transvaal and Orange River Colony, followed by regular Union enumerations in 1911AD, 1921AD, 1936AD, 1946AD, 1951AD and 1960AD [@Garenne2016CenturyNuptiality; @Cilliers2012NewEstimates]. Early twentieth-century counts combined European vital registration with administrative headcounts in African reserves, leaving systematic under-enumeration in remote districts of the Kalahari, Kaokaveld and Transkei [@Caldwell2002HistoricalPopulation]. Even so, longitudinal analyses of marriage, settler lifespan and colonial tax rolls confirm that the 1918AD influenza pandemic produced an acute single-year mortality spike before declining infant mortality and rising fertility accelerated growth from the 1930s onward [@Cilliers2012NewEstimates; @Garenne2016CenturyNuptiality].

Between 1970AD and 1991AD, Apartheid population accounting fractured deliberately. Following the grant of nominal independence to Transkei (1976AD), Bophuthatswana (1977AD), Venda (1979AD) and Ciskei (1981AD), Pretoria's official 1980AD, 1985AD and 1991AD censuses excluded these four TBVC territories, creating an artificial drop in South Africa's reported national population [@ChimereDan2013ApartheidAnd; @Omideyi2013TheDemography]. Unified national counting resumed only in October 1996 under Statistics South Africa, continuing in 2001AD, 2011AD, the 2016AD Community Survey and Census 2022AD [@Udjo2014EstimatingDemographic; @Spencer2017CostBenefit; @StatsSA2023Census2022]. Parallel post-independence statistical agencies established unbroken series in Botswana (1964AD through 2022AD), Lesotho (1966AD through 2016AD), Eswatini (1966AD through 2017AD) and Namibia (1991AD through 2023AD) [@StatsBotswana2022Census; @NSA2024NamibiaCensus; @Monamo2026EstimationDistrict].

# Methodology

## Sub-Regional Territorial Partition and Accounting Domain

The chapter encompasses 2.671.510 km² across 34.572 five-arcminute cells, partitioned into 46 first-level administrative divisions over geoBoundaries polygons [@Runfola2020GeoBoundaries]. Nine provinces compose South Africa (1.218.287 km²), thirteen regions compose Namibia (824.800 km²), ten districts compose Botswana (580.069 km²), ten districts compose Lesotho (30.616 km²) and four regions compose Eswatini (17.739 km²). Because South Africa replaced its four historical provinces and ten Bantustans with nine new provinces in April 1994, NICETHI harmonises historical 1960AD provincial and district lineage polygons across South Africa, Botswana, Lesotho and Eswatini into the contemporary 46-unit grid (Table \ref{tab:countries}).

<figure class="crd-table-figure" id="tab:countries">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Country</th><th class="crd-th">Units</th><th class="crd-th">Area (km²)</th><th class="crd-th">1910AD</th><th class="crd-th">1952AD</th><th class="crd-th">1970AD</th><th class="crd-th">1995AD</th><th class="crd-th">2025AD</th><th class="crd-th">Density 2025AD</th><th class="crd-th">Sites</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>South Africa</strong></td><td class="crd-td">9</td><td class="crd-td">1.218.287</td><td class="crd-td">7,97M</td><td class="crd-td">12,36M</td><td class="crd-td">17M</td><td class="crd-td">41,54M</td><td class="crd-td">65,82M</td><td class="crd-td">54,03</td><td class="crd-td">1.378</td></tr>
<tr><td class="crd-td"><strong>Namibia</strong></td><td class="crd-td">13</td><td class="crd-td">824.800</td><td class="crd-td">126,7k</td><td class="crd-td">212,9k</td><td class="crd-td">247k</td><td class="crd-td">1,53M</td><td class="crd-td">3,08M</td><td class="crd-td">3,73</td><td class="crd-td">125</td></tr>
<tr><td class="crd-td"><strong>Botswana</strong></td><td class="crd-td">10</td><td class="crd-td">580.069</td><td class="crd-td">100,8k</td><td class="crd-td">224,2k</td><td class="crd-td">514,9k</td><td class="crd-td">1,41M</td><td class="crd-td">2,41M</td><td class="crd-td">4,16</td><td class="crd-td">97</td></tr>
<tr><td class="crd-td"><strong>Lesotho</strong></td><td class="crd-td">10</td><td class="crd-td">30.616</td><td class="crd-td">149,8k</td><td class="crd-td">619,4k</td><td class="crd-td">988,3k</td><td class="crd-td">1,62M</td><td class="crd-td">1,93M</td><td class="crd-td">63,03</td><td class="crd-td">70</td></tr>
<tr><td class="crd-td"><strong>Eswatini</strong></td><td class="crd-td">4</td><td class="crd-td">17.739</td><td class="crd-td">85,3k</td><td class="crd-td">214,7k</td><td class="crd-td">340,2k</td><td class="crd-td">800,2k</td><td class="crd-td">1,08M</td><td class="crd-td">61,02</td><td class="crd-td">58</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">46</td><td class="crd-td">2.671.510</td><td class="crd-td">8,43M</td><td class="crd-td">13,64M</td><td class="crd-td">19,09M</td><td class="crd-td">46,91M</td><td class="crd-td">74,33M</td><td class="crd-td">27,82</td><td class="crd-td">1.728</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sovereign country totals across 46 first-level sub-regions from 1910AD to 2025AD, showing area, density (persons/km²) and interior national settlements.</figcaption>
</figure>

## Settlement Screening, Scope Separation and Spatial Disaggregation

Across the study domain and its immediate northern and eastern borderlands, 2.508 candidate towns, townships, mining camps and rural centres were screened from national census gazettes, OECD/SWAC Africapolis urban polygons, the UNSD Demographic Yearbook and historical statistical compendia [@StatsSA2023Census2022; @NSA2024NamibiaCensus; @StatsBotswana2022Census]. Removing 745 duplicate alias records and overlapping boundary shells left 1.763 individually assessed settlements across 11.016 chronological observations (Figure \ref{fig:hero-modern-southern-africa}). Of these, 1.742 records track city-proper or municipal units and 21 track metropolitan agglomerations, preventing rural hinterlands from being double-counted against municipal cores [@Bakker2020MigrationAnd; @Bank2021NigerUrbanization].

Twenty-two cross-border settlements lie in adjoining corridors of Mozambique (10, led by Maputo and Matola), Angola (6), Zambia (3) and Zimbabwe (3) to stabilise spatial edge interpolation along the Limpopo, Kunene, Zambezi and Komati frontiers [@Deleu2015ImprovingAfripop]. Within the five sovereign territories, 1.477 settlements anchor urban peaks while rural populations are distributed across the 46 administrative polygons using mass-conserving pycnophylactic disaggregation weighted by baseline habitability, satellite settlement footprints and protected-area exclusions such as Kruger National Park [@Deleu2015ImprovingAfripop; @Hughes2017ModelingThe]. Benchmarking runs across 14 chronological slices from 1910AD to 2025AD (1910AD, 1952AD, 1958AD, 1964AD, 1970AD, 1976AD, 1982AD, 1989AD, 1995AD, 2001AD, 2007AD, 2013AD, 2019AD, 2025AD), capturing both pre-1994AD administrative divisions and post-1994AD unified enumerations [@Spencer2017CostBenefit; @Mkhatha2024ResponseMoultrie].

# Testing and Validation

## Colonial, Apartheid and Post-1994 Census Continuity Checks

Comparing NICETHI's reconstructed 46-unit trajectories against sub-national census tables exposes the decisive impact of Apartheid territorial fragmentation on South African historical series (Table \ref{tab:zaf-bantustans}). In 1904AD, the four British colonies enumerated 5,18M inhabitants across the Cape (2,41M), Transvaal (1,27M), Natal (1,11M) and Orange River Colony (387,3k). By 1970AD, official Republic tables split 17,09M residents across the four provinces from 7,04M residents enumerated inside the ten ethnic homelands led by KwaZulu (2,1M), Transkei (1,73M) and Lebowa (1,08M) [@ChimereDan2013ApartheidAnd; @Omideyi2013TheDemography]. When Transkei, Bophuthatswana, Venda and Ciskei were excluded from Republic counts after 1976AD, reported metropolitan South Africa stalled near 17,89M in 1989AD even as homeland populations climbed to 17,12M by 1991AD [@ChimereDan2013ApartheidAnd; @Bakker2020MigrationAnd]. Reintegrating those territories in 1995AD explains the apparent discontinuity from 21,93M (1989AD) to 46,91M (1995AD) in the unadjusted raw provincial mask series, whereas unified national totals rose smoothly from 22,1M (1970AD) to 40,58M (1996AD) and 62,03M (2022AD) [@StatsSA2023Census2022; @Udjo2014EstimatingDemographic].

<figure class="crd-table-figure" id="tab:zaf-bantustans">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Homeland</th><th class="crd-th">1970AD Pop.</th><th class="crd-th">1991AD Pop.</th><th class="crd-th">Growth (%)</th><th class="crd-th">Post-1994 Province</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>KwaZulu</strong></td><td class="crd-td">2,1M</td><td class="crd-td">5,2M</td><td class="crd-td">148</td><td class="crd-td">KwaZulu-Natal</td></tr>
<tr><td class="crd-td"><strong>Transkei</strong></td><td class="crd-td">1,73M</td><td class="crd-td">3,8M</td><td class="crd-td">119,1</td><td class="crd-td">Eastern Cape</td></tr>
<tr><td class="crd-td"><strong>Lebowa</strong></td><td class="crd-td">1,08M</td><td class="crd-td">2,8M</td><td class="crd-td">158,3</td><td class="crd-td">Limpopo</td></tr>
<tr><td class="crd-td"><strong>Bophuthatswana</strong></td><td class="crd-td">884k</td><td class="crd-td">2M</td><td class="crd-td">126,8</td><td class="crd-td">North West / Free State</td></tr>
<tr><td class="crd-td"><strong>Ciskei</strong></td><td class="crd-td">523k</td><td class="crd-td">850k</td><td class="crd-td">62,5</td><td class="crd-td">Eastern Cape</td></tr>
<tr><td class="crd-td"><strong>Gazankulu</strong></td><td class="crd-td">267k</td><td class="crd-td">720k</td><td class="crd-td">169,7</td><td class="crd-td">Limpopo</td></tr>
<tr><td class="crd-td"><strong>Venda</strong></td><td class="crd-td">264k</td><td class="crd-td">558,8k</td><td class="crd-td">111,7</td><td class="crd-td">Limpopo</td></tr>
<tr><td class="crd-td"><strong>KaNgwane</strong></td><td class="crd-td">118k</td><td class="crd-td">480k</td><td class="crd-td">306,8</td><td class="crd-td">Mpumalanga</td></tr>
<tr><td class="crd-td"><strong>KwaNdebele</strong></td><td class="crd-td">40k</td><td class="crd-td">365k</td><td class="crd-td">812,5</td><td class="crd-td">Mpumalanga</td></tr>
<tr><td class="crd-td"><strong>QwaQwa</strong></td><td class="crd-td">24k</td><td class="crd-td">342,9k</td><td class="crd-td">1.328,7</td><td class="crd-td">Free State</td></tr>
<tr><td class="crd-td"><strong>Total Ten Homelands</strong></td><td class="crd-td">7,04M</td><td class="crd-td">17,12M</td><td class="crd-td">143,4</td><td class="crd-td">Reintegrated April 1994</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> South African Bantu Homeland (TBVC and self-governing territory) enumerated populations in 1970AD and 1991AD prior to April 1994 reintegration.</figcaption>
</figure>

Cross-checking neighbouring censuses confirms broad structural coherence alongside post-1990AD boundary realignments (Table \ref{tab:nam-bwa-censuses}). In Namibia, South African Mandate counts in 1946AD recorded 360k residents (184,1k in northern Kaokaveld and Ovamboland), rising to 1,83M in 2001AD and 3,02M in 2023AD [@NSA2024NamibiaCensus]. In Botswana, colonial district counts rose from 265,8k in 1936AD to 1,33M in 1991AD and 2,36M in 2022AD [@StatsBotswana2022Census; @Monamo2026EstimationDistrict]. Similarly, Basutoland enumerated 563,9k in 1946AD, aligning with NICETHI's 619,4k Lesotho interpolation for 1952AD [@Caldwell2002HistoricalPopulation].

<figure class="crd-table-figure" id="tab:nam-bwa-censuses">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Country</th><th class="crd-th">Administrative Unit</th><th class="crd-th">Census Pop.</th><th class="crd-th">Share of National (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>South Africa (2022AD)</strong></td><td class="crd-td">Gauteng</td><td class="crd-td">15,1M</td><td class="crd-td">24,3</td></tr>
<tr><td class="crd-td"><strong>South Africa (2022AD)</strong></td><td class="crd-td">KwaZulu-Natal</td><td class="crd-td">12,42M</td><td class="crd-td">20</td></tr>
<tr><td class="crd-td"><strong>South Africa (2022AD)</strong></td><td class="crd-td">Western Cape</td><td class="crd-td">7,43M</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>South Africa (2022AD)</strong></td><td class="crd-td">Eastern Cape</td><td class="crd-td">7,23M</td><td class="crd-td">11,7</td></tr>
<tr><td class="crd-td"><strong>South Africa (2022AD)</strong></td><td class="crd-td">Limpopo (Northern Transvaal)</td><td class="crd-td">6,57M</td><td class="crd-td">10,6</td></tr>
<tr><td class="crd-td"><strong>Namibia (2023AD)</strong></td><td class="crd-td">Khomas</td><td class="crd-td">494,6k</td><td class="crd-td">16,4</td></tr>
<tr><td class="crd-td"><strong>Namibia (2023AD)</strong></td><td class="crd-td">Ohangwena</td><td class="crd-td">337,7k</td><td class="crd-td">11,2</td></tr>
<tr><td class="crd-td"><strong>Namibia (2023AD)</strong></td><td class="crd-td">Omusati</td><td class="crd-td">316,7k</td><td class="crd-td">10,5</td></tr>
<tr><td class="crd-td"><strong>Namibia (2023AD)</strong></td><td class="crd-td">Oshikoto</td><td class="crd-td">257,3k</td><td class="crd-td">8,5</td></tr>
<tr><td class="crd-td"><strong>Namibia (2023AD)</strong></td><td class="crd-td">Erongo</td><td class="crd-td">240,2k</td><td class="crd-td">7,9</td></tr>
<tr><td class="crd-td"><strong>Botswana (2022AD)</strong></td><td class="crd-td">Central</td><td class="crd-td">706,1k</td><td class="crd-td">29,9</td></tr>
<tr><td class="crd-td"><strong>Botswana (2022AD)</strong></td><td class="crd-td">Kweneng</td><td class="crd-td">388k</td><td class="crd-td">16,4</td></tr>
<tr><td class="crd-td"><strong>Botswana (2022AD)</strong></td><td class="crd-td">South East</td><td class="crd-td">387,5k</td><td class="crd-td">16,4</td></tr>
<tr><td class="crd-td"><strong>Botswana (2022AD)</strong></td><td class="crd-td">Southern</td><td class="crd-td">240,7k</td><td class="crd-td">10,2</td></tr>
<tr><td class="crd-td"><strong>Botswana (2022AD)</strong></td><td class="crd-td">North West (Ngamiland)</td><td class="crd-td">198,4k</td><td class="crd-td">8,4</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Five largest first-level census divisions in South Africa (2022AD), Namibia (2023AD) and Botswana (2022AD) from official statistical releases.</figcaption>
</figure>

## Settlement Rank-Size Calibration and Urban Hierarchy Diagnostics

Across all 1.763 individually assessed settlements, ordinary least-squares rank-size regression on the top 180 urban peaks yields a near-Zipf exponent of $q = 0,98$ ($R^2 = 0,9922$), while full-sample regression across all 1.763 entries yields $q = 1,40$ ($R^2 = 0,8893$). Figure \ref{fig:rank-size} plots the 1.414 spatially deduplicated settlement peaks ($q = 0,99$, $R^2 = 0,99$) alongside the ten densest first-level sub-regions in 2025AD. That tight upper-tail alignment mirrors Southern Africa's polycentric urban hierarchy, led by the Witwatersrand-Johannesburg conurbation (11,01M), Cape Town (4,39M) and Durban (3,52M) rather than a single primate capital [@Simkins2011SouthAfrica; @Bakker2020MigrationAnd].

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-modern-southern-africa/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Settlement rank-size distribution across 1.414 spatially deduplicated peaks (q = 0,99, R² = 0,99) and ten densest sub-regions in 2025AD.</figcaption>
</figure>

Two diagnostic features in Figure \ref{fig:trends} merit explicit notice. First, in Panel B, active settlement counts jump from roughly 310 in 1989AD to 960 in 1995AD and 1.275 around 2011AD before falling to 730 in 2025AD: this reflects the fine village- and township-level granularity of the unified 1996AD, 2001AD and 2011AD South African and regional censuses compared with aggregated 2022AD municipal releases and 2025AD Africapolis projections [@Spencer2017CostBenefit; @Mkhatha2024ResponseMoultrie; @Deleu2015ImprovingAfripop]. Second, in Panel C, Johannesburg, Cape Town and Durban dip transiently at 1996AD because municipal city-proper enumerations (987k for Cape Town and 904,2k for Soweto separately) sit alongside post-2000AD metropolitan agglomeration polygons [@Bakker2020MigrationAnd; @Africa2024ProvincialProfile].

# Results

## South Africa: Industrial Urbanisation, Homeland Containment and Democratic Reintegration

South Africa dominates the regional demographic mass, holding roughly 88,6% of Southern Africa's population in 2025AD (65,82M of 74,33M) across 45,6% of its land area (Table \ref{tab:countries} and Table \ref{tab:trajectory}). At 1910AD, demographic weight still rested in the rural agricultural and reserve belt of the Eastern Cape (2,87M), North West (1,84M) and KwaZulu-Natal (1,71M), while Gauteng held just 277,6k residents (15,2 persons/km²). Over the next eight decades, Witwatersrand gold mining, secondary manufacturing in the Pretoria-Witwatersrand-Vereeniging triangle and coastal port expansion reversed that geography [@Simkins2011SouthAfrica; @Paiment2025BeyondApartheid]. Gauteng grew fiftyfold from 277,6k in 1910AD to 14,01M in 2025AD (766,7 persons/km²), anchored by Johannesburg (11,01M agglomeration), Pretoria (1,76M agglomeration in 2011AD), Soshanguve (1,91M) and Evaton (1,09M), while the Western Cape expanded thirty-fourfold from 239,1k to 8,2M around Cape Town (4,39M agglomeration) [@StatsSA2023Census2022; @Africa2024ProvincialProfile].

Between 1948AD and 1990AD, Group Areas zoning, pass laws and forced removals under the Bantu Homelands policy restricted permanent African urbanisation inside industrial corridors and shifted millions into dense peri-urban settlements inside KwaZulu, Bophuthatswana, Lebowa, Transkei and Ciskei [@ChimereDan2013ApartheidAnd; @Bakker2020MigrationAnd]. Consequently, towns such as Soshanguve, Mdantsane, Khayelitsha, Umlazi and Thohoyandou expanded rapidly at the outer margins of metropolitan labour markets, while circular male mine migration reshaped marriage rates and female-headed rural households across Limpopo, Mpumalanga and the Eastern Cape [@Garenne2016CenturyNuptiality; @Madhavan2017HouseholdStructure]. Following the abolition of influx control in 1986AD and the democratic transition of April 1994, net internal migration accelerated sharply toward Gauteng and the Western Cape, lifting South Africa's urban share above two-thirds by 2022AD while moderating growth in the Free State (3,22M) and North West (3,56M) [@Bakker2020MigrationAnd; @StatsSA2023Census2022; @Modiba2025PopulationGrowth].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-modern-southern-africa/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional and urban population trajectories, active settlement counts and five leading urban centres in Southern Africa from 1902AD to 2025AD.</figcaption>
</figure>

## HIV/AIDS Mortality Surge (1995AD to 2008AD), ART Recovery and Fertility Transition

The sharpest post-apartheid demographic shock across all five countries was the generalised HIV/AIDS and tuberculosis epidemic that peaked between 1995AD and 2008AD [@Johnson2006ModellingThe; @Bank2010SouthernAfrica]. Using 2001AD census mortality modules, Garenne, McCaa and Nacro documented severe adult female and maternal mortality surges across South Africa, while actuarial demographic models showed crude death rates more than doubling in KwaZulu-Natal, Free State, Eswatini and Lesotho [@Garenne2008MaternalMortality; @Johnson2006ModellingThe]. In NICETHI's regional series, that mortality crisis slowed net annual growth across the late 1990s and early 2000s: Lesotho rose only modestly from 1,62M (1995AD) to 1,67M (2007AD), and the Free State declined slightly from 2,94M (1995AD) to 2,87M (2001AD) before stabilising [@Udjo2014EstimatingDemographic; @Omideyi2013TheDemography].

Large-scale public antiretroviral therapy rollout after 2005AD reversed the mortality trajectory across South Africa, Botswana, Namibia, Lesotho and Eswatini, restoring life expectancy above 60 years by the mid-2010s [@Johnson2006ModellingThe; @Bank2010SouthernAfrica]. Simultaneously, sustained fertility decline reshaped age structures throughout the subcontinent. South Africa's total fertility rate fell from above 6 births per woman in the 1950s to roughly 2,3 by 2011AD [@Udjo2014EstimatingDemographic; @Omideyi2013TheDemography], while district-level analysis of Botswana's 2022AD census shows urban centres such as Gaborone and Francistown near replacement fertility alongside higher rural rates in Ghanzi and Kgalagadi [@Monamo2026EstimationDistrict].

<figure class="crd-table-figure" id="tab:trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1910AD</th><th class="crd-th">1952AD</th><th class="crd-th">1970AD</th><th class="crd-th">1989AD</th><th class="crd-th">2001AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gauteng (ZAF)</strong></td><td class="crd-td">277,6k</td><td class="crd-td">1,88M</td><td class="crd-td">2,6M</td><td class="crd-td">3,33M</td><td class="crd-td">9,39M</td><td class="crd-td">14,01M</td></tr>
<tr><td class="crd-td"><strong>KwaZulu-Natal (ZAF)</strong></td><td class="crd-td">1,71M</td><td class="crd-td">2,48M</td><td class="crd-td">4,25M</td><td class="crd-td">2,11M</td><td class="crd-td">9,6M</td><td class="crd-td">13,95M</td></tr>
<tr><td class="crd-td"><strong>Western Cape (ZAF)</strong></td><td class="crd-td">239,1k</td><td class="crd-td">720,5k</td><td class="crd-td">798,4k</td><td class="crd-td">1,76M</td><td class="crd-td">4,51M</td><td class="crd-td">8,2M</td></tr>
<tr><td class="crd-td"><strong>Eastern Cape (ZAF)</strong></td><td class="crd-td">2,87M</td><td class="crd-td">2,89M</td><td class="crd-td">3,6M</td><td class="crd-td">3,43M</td><td class="crd-td">6,32M</td><td class="crd-td">8,14M</td></tr>
<tr><td class="crd-td"><strong>Limpopo (ZAF)</strong></td><td class="crd-td">292,2k</td><td class="crd-td">1,65M</td><td class="crd-td">2,2M</td><td class="crd-td">2,55M</td><td class="crd-td">5M</td><td class="crd-td">7,37M</td></tr>
<tr><td class="crd-td"><strong>Mpumalanga (ZAF)</strong></td><td class="crd-td">107,6k</td><td class="crd-td">673,1k</td><td class="crd-td">809,6k</td><td class="crd-td">1,14M</td><td class="crd-td">3,42M</td><td class="crd-td">5,86M</td></tr>
<tr><td class="crd-td"><strong>North West (ZAF)</strong></td><td class="crd-td">1,84M</td><td class="crd-td">774,7k</td><td class="crd-td">901,6k</td><td class="crd-td">1,29M</td><td class="crd-td">3,02M</td><td class="crd-td">3,56M</td></tr>
<tr><td class="crd-td"><strong>Free State (ZAF)</strong></td><td class="crd-td">505,5k</td><td class="crd-td">1,09M</td><td class="crd-td">1,72M</td><td class="crd-td">2,02M</td><td class="crd-td">2,87M</td><td class="crd-td">3,22M</td></tr>
<tr><td class="crd-td"><strong>Northern Cape (ZAF)</strong></td><td class="crd-td">128,5k</td><td class="crd-td">203,3k</td><td class="crd-td">140,1k</td><td class="crd-td">252,3k</td><td class="crd-td">991,9k</td><td class="crd-td">1,52M</td></tr>
<tr><td class="crd-td"><strong>Khomas (NAM)</strong></td><td class="crd-td">4,7k</td><td class="crd-td">7,3k</td><td class="crd-td">5k</td><td class="crd-td">30,5k</td><td class="crd-td">250,3k</td><td class="crd-td">525,9k</td></tr>
<tr><td class="crd-td"><strong>Ohangwena (NAM)</strong></td><td class="crd-td">20,3k</td><td class="crd-td">49,5k</td><td class="crd-td">62,2k</td><td class="crd-td">156,3k</td><td class="crd-td">284k</td><td class="crd-td">382,6k</td></tr>
<tr><td class="crd-td"><strong>Omusati (NAM)</strong></td><td class="crd-td">23,3k</td><td class="crd-td">38,7k</td><td class="crd-td">44k</td><td class="crd-td">112,3k</td><td class="crd-td">229,1k</td><td class="crd-td">331,5k</td></tr>
<tr><td class="crd-td"><strong>Oshikoto (NAM)</strong></td><td class="crd-td">18,9k</td><td class="crd-td">26,5k</td><td class="crd-td">30,7k</td><td class="crd-td">86,3k</td><td class="crd-td">184,9k</td><td class="crd-td">302,5k</td></tr>
<tr><td class="crd-td"><strong>Erongo (NAM)</strong></td><td class="crd-td">3,4k</td><td class="crd-td">3,8k</td><td class="crd-td">3,2k</td><td class="crd-td">14,9k</td><td class="crd-td">107,7k</td><td class="crd-td">259,2k</td></tr>
<tr><td class="crd-td"><strong>Otjozondjupa (NAM)</strong></td><td class="crd-td">8,7k</td><td class="crd-td">15,2k</td><td class="crd-td">18,1k</td><td class="crd-td">54,9k</td><td class="crd-td">135,4k</td><td class="crd-td">237,1k</td></tr>
<tr><td class="crd-td"><strong>Kavango (NAM)</strong></td><td class="crd-td">14,8k</td><td class="crd-td">17,1k</td><td class="crd-td">18,2k</td><td class="crd-td">41,6k</td><td class="crd-td">136,6k</td><td class="crd-td">235,7k</td></tr>
<tr><td class="crd-td"><strong>Oshana (NAM)</strong></td><td class="crd-td">3,6k</td><td class="crd-td">16,2k</td><td class="crd-td">23,2k</td><td class="crd-td">50,2k</td><td class="crd-td">82,1k</td><td class="crd-td">184,3k</td></tr>
<tr><td class="crd-td"><strong>Caprivi (NAM)</strong></td><td class="crd-td">6,7k</td><td class="crd-td">10,1k</td><td class="crd-td">10,7k</td><td class="crd-td">30,6k</td><td class="crd-td">62,2k</td><td class="crd-td">153,5k</td></tr>
<tr><td class="crd-td"><strong>Kunene (NAM)</strong></td><td class="crd-td">5,2k</td><td class="crd-td">7,3k</td><td class="crd-td">8,3k</td><td class="crd-td">27,4k</td><td class="crd-td">69k</td><td class="crd-td">128,1k</td></tr>
<tr><td class="crd-td"><strong>Karas (NAM)</strong></td><td class="crd-td">4,8k</td><td class="crd-td">5,1k</td><td class="crd-td">4,3k</td><td class="crd-td">15k</td><td class="crd-td">69,3k</td><td class="crd-td">116,5k</td></tr>
<tr><td class="crd-td"><strong>Hardap (NAM)</strong></td><td class="crd-td">5k</td><td class="crd-td">5,7k</td><td class="crd-td">5,9k</td><td class="crd-td">19,8k</td><td class="crd-td">68,2k</td><td class="crd-td">112k</td></tr>
<tr><td class="crd-td"><strong>Omaheke (NAM)</strong></td><td class="crd-td">7,1k</td><td class="crd-td">10,4k</td><td class="crd-td">13,2k</td><td class="crd-td">35,7k</td><td class="crd-td">68k</td><td class="crd-td">109,4k</td></tr>
<tr><td class="crd-td"><strong>Central District (BWA)</strong></td><td class="crd-td">41,3k</td><td class="crd-td">46,8k</td><td class="crd-td">214,4k</td><td class="crd-td">456,7k</td><td class="crd-td">582,7k</td><td class="crd-td">753,3k</td></tr>
<tr><td class="crd-td"><strong>Kweneng District (BWA)</strong></td><td class="crd-td">15,9k</td><td class="crd-td">53,2k</td><td class="crd-td">74,7k</td><td class="crd-td">208,1k</td><td class="crd-td">312,7k</td><td class="crd-td">551,9k</td></tr>
<tr><td class="crd-td"><strong>Southern District (BWA)</strong></td><td class="crd-td">14,5k</td><td class="crd-td">25k</td><td class="crd-td">100,5k</td><td class="crd-td">177,3k</td><td class="crd-td">224,2k</td><td class="crd-td">279,9k</td></tr>
<tr><td class="crd-td"><strong>North-West District (BWA)</strong></td><td class="crd-td">9,5k</td><td class="crd-td">40,8k</td><td class="crd-td">47,4k</td><td class="crd-td">88,5k</td><td class="crd-td">124,7k</td><td class="crd-td">214,3k</td></tr>
<tr><td class="crd-td"><strong>South-East District (BWA)</strong></td><td class="crd-td">2k</td><td class="crd-td">9k</td><td class="crd-td">9k</td><td class="crd-td">89,6k</td><td class="crd-td">136,3k</td><td class="crd-td">205,2k</td></tr>
<tr><td class="crd-td"><strong>North-East District (BWA)</strong></td><td class="crd-td">5,9k</td><td class="crd-td">12,6k</td><td class="crd-td">15,4k</td><td class="crd-td">72,1k</td><td class="crd-td">99,4k</td><td class="crd-td">134,1k</td></tr>
<tr><td class="crd-td"><strong>Kgatleng District (BWA)</strong></td><td class="crd-td">4,7k</td><td class="crd-td">16,8k</td><td class="crd-td">22,2k</td><td class="crd-td">42,5k</td><td class="crd-td">56,6k</td><td class="crd-td">122,7k</td></tr>
<tr><td class="crd-td"><strong>Kgalagadi District (BWA)</strong></td><td class="crd-td">2,5k</td><td class="crd-td">8,6k</td><td class="crd-td">14,7k</td><td class="crd-td">30,3k</td><td class="crd-td">42k</td><td class="crd-td">61,4k</td></tr>
<tr><td class="crd-td"><strong>Ghanzi District (BWA)</strong></td><td class="crd-td">3,6k</td><td class="crd-td">6,3k</td><td class="crd-td">11,4k</td><td class="crd-td">22,7k</td><td class="crd-td">33,2k</td><td class="crd-td">60,8k</td></tr>
<tr><td class="crd-td"><strong>Chobe District (BWA)</strong></td><td class="crd-td">888</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k</td><td class="crd-td">12,6k</td><td class="crd-td">18,3k</td><td class="crd-td">29,6k</td></tr>
<tr><td class="crd-td"><strong>Maseru District (LSO)</strong></td><td class="crd-td">29,1k</td><td class="crd-td">146,3k</td><td class="crd-td">248,6k</td><td class="crd-td">345,6k</td><td class="crd-td">419,9k</td><td class="crd-td">621,8k</td></tr>
<tr><td class="crd-td"><strong>Leribe District (LSO)</strong></td><td class="crd-td">32,7k</td><td class="crd-td">112,1k</td><td class="crd-td">177,5k</td><td class="crd-td">258,8k</td><td class="crd-td">277,7k</td><td class="crd-td">372,3k</td></tr>
<tr><td class="crd-td"><strong>Thaba-Tseka District (LSO)</strong></td><td class="crd-td">1,8k</td><td class="crd-td">42,7k</td><td class="crd-td">65k</td><td class="crd-td">165,5k</td><td class="crd-td">181,4k</td><td class="crd-td">209,9k</td></tr>
<tr><td class="crd-td"><strong>Berea District (LSO)</strong></td><td class="crd-td">16,6k</td><td class="crd-td">40,9k</td><td class="crd-td">73,4k</td><td class="crd-td">108k</td><td class="crd-td">157,4k</td><td class="crd-td">161,1k</td></tr>
<tr><td class="crd-td"><strong>Mohale's Hoek District (LSO)</strong></td><td class="crd-td">10,7k</td><td class="crd-td">90,2k</td><td class="crd-td">144,5k</td><td class="crd-td">218,7k</td><td class="crd-td">221,4k</td><td class="crd-td">160,3k</td></tr>
<tr><td class="crd-td"><strong>Mafeteng District (LSO)</strong></td><td class="crd-td">20,5k</td><td class="crd-td">57,9k</td><td class="crd-td">94,7k</td><td class="crd-td">152,1k</td><td class="crd-td">150,6k</td><td class="crd-td">109,6k</td></tr>
<tr><td class="crd-td"><strong>Mokhotlong District (LSO)</strong></td><td class="crd-td">290</td><td class="crd-td">39,7k</td><td class="crd-td">59,7k</td><td class="crd-td">79,4k</td><td class="crd-td">89,3k</td><td class="crd-td">96k</td></tr>
<tr><td class="crd-td"><strong>Quthing District (LSO)</strong></td><td class="crd-td">11,2k</td><td class="crd-td">37,6k</td><td class="crd-td">52,1k</td><td class="crd-td">70,2k</td><td class="crd-td">70,4k</td><td class="crd-td">86,4k</td></tr>
<tr><td class="crd-td"><strong>... plus 7 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Population trajectories across all 46 first-level sub-regions of Southern Africa at six benchmark years from 1910AD to 2025AD (top 40 of 47 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Namibia: Post-Genocide Recovery, Mandate Era and Northern Demographic Weight

Namibia enters the chapter in 1902AD-1910AD immediately after the German colonial war and Herero and Nama genocide of 1904AD to 1908AD, which devastated central and southern pastoral communities across Khomas, Hardap, Karas and Omaheke [@Caldwell2002HistoricalPopulation]. At 1910AD, total reconstructed population across the 13 Namibian regions stood at just 126,7k, concentrated in the northern Ovamboland and Kavango floodplains (Omusati 23,3k, Ohangwena 20,3k, Oshikoto 18,9k, Kavango 14,8k), while southern Karas held 4,8k and Khomas held 4,7k (Table \ref{tab:trajectory}). Under South African Mandate rule (1915AD to 1990AD), colonial Police Zone boundaries restricted African mobility from the northern communal areas into central ranching and diamond zones around Lüderitz and Oranjemund, keeping recorded southern totals low until post-1970AD urban easing [@NSA2024NamibiaCensus].

Following independence in March 1990, Namibia's national population nearly doubled from 1,53M in 1995AD to 3,08M in 2025AD (3,73 persons/km²), matching the 3,02M preliminary count of the 2023AD Population and Housing Census [@NSA2024NamibiaCensus]. Urban growth concentrated strongly in Khomas (525,9k in 2025AD), led by the Windhoek agglomeration (566,2k), alongside coastal logistics and mining towns in Erongo (259,2k, Walvis Bay 102,7k and Swakopmund 99,6k) and northern commercial hubs at Rundu (118,6k) and Oshakati (91,6k) [@NSA2024NamibiaCensus; @Bank2010SouthernAfrica]. Even after rapid urban migration, five northern regions (Ohangwena, Omusati, Oshikoto, Kavango and Oshana) still account for more than two-fifths of Namibia's inhabitants.

## Botswana, Lesotho and Eswatini: Diamond Urbanisation and Labour-Remittance Economies

Botswana experienced the highest proportional growth of any country in Southern Africa after 1966AD, expanding twenty-fourfold from 100,8k in 1910AD to 224,2k in 1952AD, 514,9k in 1970AD, 1,63M in 2001AD and 2,41M by 2025AD (4,16 persons/km²; Table \ref{tab:countries}). At independence in September 1966, Bechuanaland was predominantly pastoral and lacked a major domestic city, having transferred its administrative capital from Mafeking in South Africa to the newly planned city of Gaborone in 1964AD [@StatsBotswana2022Census]. The discovery of kimberlite diamond pipes at Orapa (1967AD), Letlhakane (1975AD) and Jwaneng (1973AD), combined with copper-nickel mining at Selebi-Phikwe, funded rapid infrastructure investment and urban settlement growth across the eastern railway corridor [@Monamo2026EstimationDistrict; @Bank2021NigerUrbanization]. By 2025AD, Gaborone (534,8k agglomeration), adjacent Kweneng (551,9k, including Mogoditshane 88k and Molepolole 78,8k) and Francistown (173,8k agglomeration) formed dense urban nodes surrounded by vast semi-arid grazing districts in Ghanzi (0,52 persons/km²) and Kgalagadi (0,58 persons/km²) [@StatsBotswana2022Census; @Monamo2026EstimationDistrict].

Lesotho and Eswatini present contrasting high-density enclaves embedded within South Africa's economic orbit. Lesotho grew nearly thirteenfold from 149,8k in 1910AD to 619,4k in 1952AD, 988,3k in 1970AD and 1,93M in 2025AD, reaching 63,03 persons/km² overall and 157,2 persons/km² in Maseru District (621,8k; Figure \ref{fig:rank-size}) [@Caldwell2002HistoricalPopulation; @Garenne2016CenturyNuptiality]. For most of the twentieth century, male mine-labour remittances from the Witwatersrand and Free State goldfields sustained rural Basotho households before mine retrenchments after 1990AD drove rapid textile-linked urbanisation along the Maseru (505,7k agglomeration) and Maputsoe (99,2k) lowland strip [@Bank2010SouthernAfrica]. Eswatini followed a similar trajectory from 85,3k in 1910AD to 340,2k in 1970AD and 1,08M in 2025AD (61,02 persons/km²), anchored by the Manzini-Mbabane industrial corridor (328,9k and 127,5k agglomerations respectively) and sugar-estate towns in Lubombo [@Deleu2015ImprovingAfripop; @Bank2010SouthernAfrica].

<figure class="crd-table-figure" id="tab:top-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Scope</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Date</th><th class="crd-th">Obs</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Johannesburg (Agglomeration)</strong></td><td class="crd-td">South Africa</td><td class="crd-td">Metropolitan</td><td class="crd-td">1950AD-2025AD</td><td class="crd-td">11,01M</td><td class="crd-td">2025AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Cape Town (Agglomeration)</strong></td><td class="crd-td">South Africa</td><td class="crd-td">Metropolitan</td><td class="crd-td">1950AD-2025AD</td><td class="crd-td">4,39M</td><td class="crd-td">2025AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Durban (Agglomeration)</strong></td><td class="crd-td">South Africa</td><td class="crd-td">Metropolitan</td><td class="crd-td">1950AD-2025AD</td><td class="crd-td">3,52M</td><td class="crd-td">2025AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Maputo (Agglomeration)</strong></td><td class="crd-td">Mozambique</td><td class="crd-td">Metropolitan</td><td class="crd-td">1950AD-2025AD</td><td class="crd-td">2,98M</td><td class="crd-td">2025AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Soshanguve</strong></td><td class="crd-td">South Africa</td><td class="crd-td">City proper</td><td class="crd-td">1980AD-2025AD</td><td class="crd-td">1,91M</td><td class="crd-td">2025AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Pretoria (Agglomeration)</strong></td><td class="crd-td">South Africa</td><td class="crd-td">Metropolitan</td><td class="crd-td">2001AD-2011AD</td><td class="crd-td">1,76M</td><td class="crd-td">2011AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Maputo</strong></td><td class="crd-td">Mozambique</td><td class="crd-td">City proper</td><td class="crd-td">1904AD-2017AD</td><td class="crd-td">1,09M</td><td class="crd-td">2007AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Evaton</strong></td><td class="crd-td">South Africa</td><td class="crd-td">City proper</td><td class="crd-td">1911AD-2025AD</td><td class="crd-td">1,09M</td><td class="crd-td">2025AD</td><td class="crd-td">17</td></tr>
<tr><td class="crd-td"><strong>Matola</strong></td><td class="crd-td">Mozambique</td><td class="crd-td">City proper</td><td class="crd-td">1997AD-2017AD</td><td class="crd-td">1,03M</td><td class="crd-td">2017AD</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Cape Town</strong></td><td class="crd-td">South Africa</td><td class="crd-td">City proper</td><td class="crd-td">1904AD-2011AD</td><td class="crd-td">987k</td><td class="crd-td">1996AD</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Johannesburg</strong></td><td class="crd-td">South Africa</td><td class="crd-td">City proper</td><td class="crd-td">1904AD-2011AD</td><td class="crd-td">957,4k</td><td class="crd-td">2011AD</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Port Elizabeth</strong></td><td class="crd-td">South Africa</td><td class="crd-td">City proper</td><td class="crd-td">1904AD-2025AD</td><td class="crd-td">957,2k</td><td class="crd-td">2025AD</td><td class="crd-td">20</td></tr>
<tr><td class="crd-td"><strong>Soweto</strong></td><td class="crd-td">South Africa</td><td class="crd-td">City proper</td><td class="crd-td">1904AD-1996AD</td><td class="crd-td">904,2k</td><td class="crd-td">1996AD</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Port Elizabeth (Agglomeration)</strong></td><td class="crd-td">South Africa</td><td class="crd-td">Metropolitan</td><td class="crd-td">2001AD-2011AD</td><td class="crd-td">876,4k</td><td class="crd-td">2011AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Pietermaritzburg</strong></td><td class="crd-td">South Africa</td><td class="crd-td">City proper</td><td class="crd-td">1904AD-2025AD</td><td class="crd-td">759,7k</td><td class="crd-td">2025AD</td><td class="crd-td">17</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Fifteen largest individually assessed settlements and metropolitan agglomerations in the Modern Southern Africa ledger (1902AD to 2025AD).</figcaption>
</figure>

# Limitations

Three structural constraints bound these reconstructions. First, colonial and Apartheid censuses prior to 1991AD suffered from uneven geographic coverage and political manipulation. Early Bechuanaland, Basutoland and South West Africa counts relied heavily on tax registers and administrative estimates in arid or pastoral districts [@Caldwell2002HistoricalPopulation; @Cilliers2012NewEstimates], while Apartheid-era Republic enumerations from 1976AD to 1991AD omitted the four TBVC Bantustans entirely and understated urban informal settlements [@ChimereDan2013ApartheidAnd; @Omideyi2013TheDemography]. Even after reunification, statistical debates surround South Africa's 2022AD Census post-enumeration survey adjustment of roughly 31% and its implications for provincial migration estimates [@Mkhatha2024ResponseMoultrie; @Spencer2017CostBenefit; @Udjo2014EstimatingDemographic].

Second, municipal boundary redefinitions complicate city-level continuity between 1996AD and 2025AD. South Africa's transition to wall-to-wall metropolitan and local municipalities in 2000AD merged formerly segregated townships such as Soweto, Khayelitsha and Umlazi into larger metro structures, while Africapolis footprints isolate contiguous built-up agglomerations that cross administrative borders [@Bakker2020MigrationAnd; @Deleu2015ImprovingAfripop]. In Table \ref{tab:top-centres}, retaining 21 metropolitan agglomerations alongside 1.478 city-proper entries preserves comparability across census regimes but requires keeping both scopes separate when summing urban shares.

Third, 22 cross-border buffer settlements in southern Mozambique, southern Angola, southern Zambia and south-western Zimbabwe, including the Maputo agglomeration (2,98M), appear in the chapter ledger and Figure \ref{fig:trends} to prevent spatial edge distortion along international boundaries [@Deleu2015ImprovingAfripop; @Hughes2017ModelingThe]. Those external entries are excluded from the 46-polygon national sums in Table \ref{tab:countries} and Table \ref{tab:trajectory}, and readers comparing city rankings should separate cross-border buffer towns from the five core states.

# Conclusion

Between 1902AD and 2025AD, Modern Southern Africa expanded nearly ninefold from 8,43M to 74,33M inhabitants across 2,67M km². Gold and diamond extraction anchored an enduring Highveld urban core in Gauteng (14,01M by 2025AD) alongside maritime metropolises at Cape Town and Durban, while post-1966AD diamond revenues transformed Botswana from a sparse pastoral protectorate into an urbanised economy centred on Gaborone. Equally decisive were non-linear demographic shocks: the 1904AD to 1908AD genocide in Namibia, Apartheid homeland containment and TBVC statistical severance between 1970AD and 1994AD, and the 1995AD to 2008AD HIV/AIDS mortality surge followed by antiretroviral recovery. By pairing 1.499 settlement trajectories across 6.006 observations with harmonised 46-unit administrative series, NICETHI provides a continuous quantitative baseline across the twentieth and early twenty-first centuries.

# Appendix

## Sub-Regional Density Series (1910AD to 2025AD)

Table \ref{tab:density-appendix} reports mean population density in persons/km² across all 46 first-level administrative divisions from 1910AD to 2025AD, illustrating the three-order-of-magnitude gradient separating Gauteng (766,68 persons/km²), Maseru District (157,15) and KwaZulu-Natal (150,05) from arid Kalahari and Karoo zones such as Ghanzi (0,52), Kgalagadi (0,58) and Karas (0,72).

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1910AD</th><th class="crd-th">1952AD</th><th class="crd-th">1970AD</th><th class="crd-th">1989AD</th><th class="crd-th">2001AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gauteng (ZAF)</strong></td><td class="crd-td">15,2</td><td class="crd-td">102,85</td><td class="crd-td">142,13</td><td class="crd-td">182,22</td><td class="crd-td">513,94</td><td class="crd-td">766,68</td></tr>
<tr><td class="crd-td"><strong>KwaZulu-Natal (ZAF)</strong></td><td class="crd-td">18,39</td><td class="crd-td">26,65</td><td class="crd-td">45,67</td><td class="crd-td">22,75</td><td class="crd-td">103,3</td><td class="crd-td">150,05</td></tr>
<tr><td class="crd-td"><strong>Western Cape (ZAF)</strong></td><td class="crd-td">1,86</td><td class="crd-td">5,62</td><td class="crd-td">6,22</td><td class="crd-td">13,7</td><td class="crd-td">35,18</td><td class="crd-td">63,94</td></tr>
<tr><td class="crd-td"><strong>Eastern Cape (ZAF)</strong></td><td class="crd-td">17</td><td class="crd-td">17,16</td><td class="crd-td">21,33</td><td class="crd-td">20,35</td><td class="crd-td">37,45</td><td class="crd-td">48,25</td></tr>
<tr><td class="crd-td"><strong>Limpopo (ZAF)</strong></td><td class="crd-td">2,32</td><td class="crd-td">13,08</td><td class="crd-td">17,42</td><td class="crd-td">20,27</td><td class="crd-td">39,65</td><td class="crd-td">58,49</td></tr>
<tr><td class="crd-td"><strong>Mpumalanga (ZAF)</strong></td><td class="crd-td">1,42</td><td class="crd-td">8,85</td><td class="crd-td">10,65</td><td class="crd-td">15,04</td><td class="crd-td">45,06</td><td class="crd-td">77,09</td></tr>
<tr><td class="crd-td"><strong>North West (ZAF)</strong></td><td class="crd-td">17,51</td><td class="crd-td">7,37</td><td class="crd-td">8,58</td><td class="crd-td">12,26</td><td class="crd-td">28,72</td><td class="crd-td">33,86</td></tr>
<tr><td class="crd-td"><strong>Free State (ZAF)</strong></td><td class="crd-td">3,9</td><td class="crd-td">8,42</td><td class="crd-td">13,22</td><td class="crd-td">15,55</td><td class="crd-td">22,1</td><td class="crd-td">24,78</td></tr>
<tr><td class="crd-td"><strong>Northern Cape (ZAF)</strong></td><td class="crd-td">0,34</td><td class="crd-td">0,54</td><td class="crd-td">0,38</td><td class="crd-td">0,68</td><td class="crd-td">2,66</td><td class="crd-td">4,07</td></tr>
<tr><td class="crd-td"><strong>Khomas (NAM)</strong></td><td class="crd-td">0,13</td><td class="crd-td">0,2</td><td class="crd-td">0,13</td><td class="crd-td">0,83</td><td class="crd-td">6,78</td><td class="crd-td">14,24</td></tr>
<tr><td class="crd-td"><strong>Ohangwena (NAM)</strong></td><td class="crd-td">2,05</td><td class="crd-td">5</td><td class="crd-td">6,28</td><td class="crd-td">15,79</td><td class="crd-td">28,67</td><td class="crd-td">38,63</td></tr>
<tr><td class="crd-td"><strong>Omusati (NAM)</strong></td><td class="crd-td">0,9</td><td class="crd-td">1,49</td><td class="crd-td">1,7</td><td class="crd-td">4,33</td><td class="crd-td">8,84</td><td class="crd-td">12,79</td></tr>
<tr><td class="crd-td"><strong>Oshikoto (NAM)</strong></td><td class="crd-td">0,49</td><td class="crd-td">0,68</td><td class="crd-td">0,79</td><td class="crd-td">2,23</td><td class="crd-td">4,77</td><td class="crd-td">7,81</td></tr>
<tr><td class="crd-td"><strong>Erongo (NAM)</strong></td><td class="crd-td">0,05</td><td class="crd-td">0,06</td><td class="crd-td">0,05</td><td class="crd-td">0,23</td><td class="crd-td">1,68</td><td class="crd-td">4,06</td></tr>
<tr><td class="crd-td"><strong>Otjozondjupa (NAM)</strong></td><td class="crd-td">0,08</td><td class="crd-td">0,14</td><td class="crd-td">0,17</td><td class="crd-td">0,52</td><td class="crd-td">1,28</td><td class="crd-td">2,25</td></tr>
<tr><td class="crd-td"><strong>Kavango (NAM)</strong></td><td class="crd-td">0,34</td><td class="crd-td">0,4</td><td class="crd-td">0,42</td><td class="crd-td">0,96</td><td class="crd-td">3,16</td><td class="crd-td">5,46</td></tr>
<tr><td class="crd-td"><strong>Oshana (NAM)</strong></td><td class="crd-td">0,42</td><td class="crd-td">1,89</td><td class="crd-td">2,71</td><td class="crd-td">5,87</td><td class="crd-td">9,6</td><td class="crd-td">21,55</td></tr>
<tr><td class="crd-td"><strong>Caprivi (NAM)</strong></td><td class="crd-td">0,33</td><td class="crd-td">0,5</td><td class="crd-td">0,53</td><td class="crd-td">1,52</td><td class="crd-td">3,09</td><td class="crd-td">7,64</td></tr>
<tr><td class="crd-td"><strong>Kunene (NAM)</strong></td><td class="crd-td">0,04</td><td class="crd-td">0,06</td><td class="crd-td">0,07</td><td class="crd-td">0,24</td><td class="crd-td">0,59</td><td class="crd-td">1,1</td></tr>
<tr><td class="crd-td"><strong>Karas (NAM)</strong></td><td class="crd-td">0,03</td><td class="crd-td">0,03</td><td class="crd-td">0,03</td><td class="crd-td">0,09</td><td class="crd-td">0,43</td><td class="crd-td">0,72</td></tr>
<tr><td class="crd-td"><strong>Hardap (NAM)</strong></td><td class="crd-td">0,05</td><td class="crd-td">0,05</td><td class="crd-td">0,05</td><td class="crd-td">0,18</td><td class="crd-td">0,62</td><td class="crd-td">1,01</td></tr>
<tr><td class="crd-td"><strong>Omaheke (NAM)</strong></td><td class="crd-td">0,08</td><td class="crd-td">0,12</td><td class="crd-td">0,16</td><td class="crd-td">0,42</td><td class="crd-td">0,8</td><td class="crd-td">1,29</td></tr>
<tr><td class="crd-td"><strong>Central District (BWA)</strong></td><td class="crd-td">0,28</td><td class="crd-td">0,32</td><td class="crd-td">1,46</td><td class="crd-td">3,11</td><td class="crd-td">3,97</td><td class="crd-td">5,13</td></tr>
<tr><td class="crd-td"><strong>Kweneng District (BWA)</strong></td><td class="crd-td">0,43</td><td class="crd-td">1,46</td><td class="crd-td">2,05</td><td class="crd-td">5,7</td><td class="crd-td">8,57</td><td class="crd-td">15,12</td></tr>
<tr><td class="crd-td"><strong>Southern District (BWA)</strong></td><td class="crd-td">0,53</td><td class="crd-td">0,92</td><td class="crd-td">3,68</td><td class="crd-td">6,49</td><td class="crd-td">8,2</td><td class="crd-td">10,24</td></tr>
<tr><td class="crd-td"><strong>North-West District (BWA)</strong></td><td class="crd-td">0,08</td><td class="crd-td">0,36</td><td class="crd-td">0,42</td><td class="crd-td">0,79</td><td class="crd-td">1,11</td><td class="crd-td">1,91</td></tr>
<tr><td class="crd-td"><strong>South-East District (BWA)</strong></td><td class="crd-td">1,37</td><td class="crd-td">6,07</td><td class="crd-td">6,05</td><td class="crd-td">60,57</td><td class="crd-td">92,13</td><td class="crd-td">138,72</td></tr>
<tr><td class="crd-td"><strong>North-East District (BWA)</strong></td><td class="crd-td">1,12</td><td class="crd-td">2,38</td><td class="crd-td">2,91</td><td class="crd-td">13,63</td><td class="crd-td">18,8</td><td class="crd-td">25,36</td></tr>
<tr><td class="crd-td"><strong>Kgatleng District (BWA)</strong></td><td class="crd-td">0,62</td><td class="crd-td">2,24</td><td class="crd-td">2,95</td><td class="crd-td">5,65</td><td class="crd-td">7,53</td><td class="crd-td">16,32</td></tr>
<tr><td class="crd-td"><strong>Kgalagadi District (BWA)</strong></td><td class="crd-td">0,02</td><td class="crd-td">0,08</td><td class="crd-td">0,14</td><td class="crd-td">0,29</td><td class="crd-td">0,4</td><td class="crd-td">0,58</td></tr>
<tr><td class="crd-td"><strong>Ghanzi District (BWA)</strong></td><td class="crd-td">0,03</td><td class="crd-td">0,05</td><td class="crd-td">0,1</td><td class="crd-td">0,2</td><td class="crd-td">0,29</td><td class="crd-td">0,52</td></tr>
<tr><td class="crd-td"><strong>Chobe District (BWA)</strong></td><td class="crd-td">0,04</td><td class="crd-td">0,24</td><td class="crd-td">0,24</td><td class="crd-td">0,6</td><td class="crd-td">0,87</td><td class="crd-td">1,4</td></tr>
<tr><td class="crd-td"><strong>Maseru District (LSO)</strong></td><td class="crd-td">7,36</td><td class="crd-td">36,98</td><td class="crd-td">62,83</td><td class="crd-td">87,33</td><td class="crd-td">106,11</td><td class="crd-td">157,15</td></tr>
<tr><td class="crd-td"><strong>Leribe District (LSO)</strong></td><td class="crd-td">11,78</td><td class="crd-td">40,34</td><td class="crd-td">63,88</td><td class="crd-td">93,13</td><td class="crd-td">99,94</td><td class="crd-td">134,01</td></tr>
<tr><td class="crd-td"><strong>Thaba-Tseka District (LSO)</strong></td><td class="crd-td">0,35</td><td class="crd-td">8,41</td><td class="crd-td">12,8</td><td class="crd-td">32,59</td><td class="crd-td">35,72</td><td class="crd-td">41,34</td></tr>
<tr><td class="crd-td"><strong>Berea District (LSO)</strong></td><td class="crd-td">7,92</td><td class="crd-td">19,47</td><td class="crd-td">34,97</td><td class="crd-td">51,48</td><td class="crd-td">75</td><td class="crd-td">76,76</td></tr>
<tr><td class="crd-td"><strong>Mohale's Hoek District (LSO)</strong></td><td class="crd-td">3,28</td><td class="crd-td">27,6</td><td class="crd-td">44,19</td><td class="crd-td">66,89</td><td class="crd-td">67,71</td><td class="crd-td">49,05</td></tr>
<tr><td class="crd-td"><strong>Mafeteng District (LSO)</strong></td><td class="crd-td">8,61</td><td class="crd-td">24,29</td><td class="crd-td">39,73</td><td class="crd-td">63,8</td><td class="crd-td">63,15</td><td class="crd-td">45,94</td></tr>
<tr><td class="crd-td"><strong>Mokhotlong District (LSO)</strong></td><td class="crd-td">0,07</td><td class="crd-td">9,46</td><td class="crd-td">14,23</td><td class="crd-td">18,92</td><td class="crd-td">21,29</td><td class="crd-td">22,88</td></tr>
<tr><td class="crd-td"><strong>Quthing District (LSO)</strong></td><td class="crd-td">3,87</td><td class="crd-td">13</td><td class="crd-td">18,01</td><td class="crd-td">24,29</td><td class="crd-td">24,38</td><td class="crd-td">29,91</td></tr>
<tr><td class="crd-td"><strong>... plus 7 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Mean population density (persons/km²) across all 46 first-level sub-regions of Modern Southern Africa from 1910AD to 2025AD (top 40 of 47 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Historical Administrative Lineage and Regional Macro-Series

Table \ref{tab:hgis-regimes} lists representative 1960AD historical administrative lineage units from the contemporary regime mask linking pre-1994AD South African provinces and protectorate districts to the modern 46-unit grid, while Table \ref{tab:arf-macro} situates Southern Africa within continental long-run series from Frankema-Jerven (1850AD to 1960AD) and Manning (1700AD to 2000AD).

<figure class="crd-table-figure" id="tab:hgis-regimes">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Unit Code</th><th class="crd-th">Historical Lineage Unit</th><th class="crd-th">Country</th><th class="crd-th">Area (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>ZAF_EG_00</strong></td><td class="crd-td">Cape of Good Hope (incl. Transkei &amp; Ciskei)</td><td class="crd-td">ZAF</td><td class="crd-td">671.257</td></tr>
<tr><td class="crd-td"><strong>ZAF_EG_03</strong></td><td class="crd-td">Transvaal (incl. Bophuthatswana, Venda, Lebowa, Gazankulu, KaNgwane, KwaNdebele)</td><td class="crd-td">ZAF</td><td class="crd-td">324.332</td></tr>
<tr><td class="crd-td"><strong>BWA_L_000</strong></td><td class="crd-td">Central District</td><td class="crd-td">BWA</td><td class="crd-td">146.354</td></tr>
<tr><td class="crd-td"><strong>ZAF_EG_02</strong></td><td class="crd-td">Orange Free State (incl. QwaQwa)</td><td class="crd-td">ZAF</td><td class="crd-td">128.273</td></tr>
<tr><td class="crd-td"><strong>BWA_L_002</strong></td><td class="crd-td">Ghanzi District</td><td class="crd-td">BWA</td><td class="crd-td">116.834</td></tr>
<tr><td class="crd-td"><strong>BWA_L_007</strong></td><td class="crd-td">North-West District</td><td class="crd-td">BWA</td><td class="crd-td">113.000</td></tr>
<tr><td class="crd-td"><strong>BWA_L_003</strong></td><td class="crd-td">Kgalagadi District</td><td class="crd-td">BWA</td><td class="crd-td">106.274</td></tr>
<tr><td class="crd-td"><strong>ZAF_EG_01</strong></td><td class="crd-td">Natal (incl. KwaZulu)</td><td class="crd-td">ZAF</td><td class="crd-td">91.944</td></tr>
<tr><td class="crd-td"><strong>BWA_L_005</strong></td><td class="crd-td">Kweneng District</td><td class="crd-td">BWA</td><td class="crd-td">35.867</td></tr>
<tr><td class="crd-td"><strong>BWA_L_009</strong></td><td class="crd-td">Southern District</td><td class="crd-td">BWA</td><td class="crd-td">26.813</td></tr>
<tr><td class="crd-td"><strong>BWA_L_001</strong></td><td class="crd-td">Chobe District</td><td class="crd-td">BWA</td><td class="crd-td">21.238</td></tr>
<tr><td class="crd-td"><strong>BWA_L_004</strong></td><td class="crd-td">Kgatleng District</td><td class="crd-td">BWA</td><td class="crd-td">9.322</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Representative 1960AD historical administrative lineage units bridging colonial and post-1994AD sub-national polygons.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:arf-macro">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Manning Africa (M)</th><th class="crd-th">Frankema-Jerven Raw (M)</th><th class="crd-th">Frankema-Jerven Adj. (M)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1900AD</strong></td><td class="crd-td">151,2</td><td class="crd-td">137,1</td><td class="crd-td">147,4</td></tr>
<tr><td class="crd-td"><strong>1910AD</strong></td><td class="crd-td">157,8</td><td class="crd-td">141,9</td><td class="crd-td">152,6</td></tr>
<tr><td class="crd-td"><strong>1920AD</strong></td><td class="crd-td">163</td><td class="crd-td">147,3</td><td class="crd-td">158,5</td></tr>
<tr><td class="crd-td"><strong>1930AD</strong></td><td class="crd-td">180</td><td class="crd-td">166,4</td><td class="crd-td">179,3</td></tr>
<tr><td class="crd-td"><strong>1940AD</strong></td><td class="crd-td">194,7</td><td class="crd-td">188,7</td><td class="crd-td">203,6</td></tr>
<tr><td class="crd-td"><strong>1950AD</strong></td><td class="crd-td">220,3</td><td class="crd-td">221,8</td><td class="crd-td">240</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">277,9</td><td class="crd-td">279,2</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Continental twentieth-century reference benchmarks comparing Manning and Frankema-Jerven African population series (1900AD to 1960AD).</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

In the underlying spatial database, the Northern Cape sub-region carries the identifier string Nothern Cape; tables and prose above normalise that spelling to Northern Cape while preserving exact numeric aggregations. Across the 1.499 ledger entries, 1.477 sit inside South Africa, Namibia, Botswana, Lesotho and Eswatini, while 22 border settlements in Mozambique, Angola, Zambia and Zimbabwe support edge kriging and are excluded from Table \ref{tab:countries} national sums.
