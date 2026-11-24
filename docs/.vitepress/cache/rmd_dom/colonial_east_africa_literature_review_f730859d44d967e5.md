---
title: "Colonial East Africa (1880s-1963)"
subtitle: "Uganda, Kenya, Tanganyika, Zanzibar and Ruanda-Urundi"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: colonial_east_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Eight colonial sub-regions and 181 individually assessed settlements across East Africa between 1880AD and 1963AD."
hero_label: "fig:hero-colonial-east-africa"

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

Between the 1880s and the eve of independence in 1963AD, European partition, railway construction, export agriculture, epidemic shocks and late-colonial census enumeration reshaped the population geography of Uganda, Kenya, Tanganyika, Zanzibar and Ruanda-Urundi. Across a territorial domain of 1.746.275 km² spanning 10 modern jurisdictions, NICETHI reconstructs an aggregate regional population that contracted from 9,87M inhabitants in 1880AD to 9,62M in 1900AD and 9,11M in 1910AD under rinderpest, sleeping sickness, pacification campaigns and early colonial dislocation. After the First World War, demographic recovery accelerated across every territory, carrying regional population to 11,83M in 1930AD, 13,77M in 1940AD, 19,16M in 1951AD and 25,63M by 1963AD, at a mean end-epoch density of 14,68 persons per km². Urbanisation followed railway corridors and administrative hubs rather than pre-colonial caravan towns alone: Nairobi expanded from a Uganda Railway depot founded in 1899AD to 315k city-proper residents by 1960AD, outstripping Mombasa, Dar es Salaam, Kampala and Zanzibar while older entrepots such as Bagamoyo, Kilwa Kivinje and Tabora stagnated or grew slowly. Meanwhile, highland Ruanda-Urundi retained the highest rural crowding on the East African plateau (77,4 persons per km² in 1963AD) despite the 1943-1944 Ruzagayura famine. These estimates integrate 181 individually assessed settlements across 635 chronological observations with colonial administrative Blue Books, League of Nations mandate reports, the 1948AD East African census, territorial enumerations of 1957AD to 1962AD and mass-conserving pycnophylactic spatial disaggregation.



# Background

## Partition, Ecological Shocks and the First World War (1880AD to 1919AD)

On the eve of European partition in 1880AD, East Africa combined densely cultivated interlacustrine kingdoms, Swahili coastal towns linked to Zanzibar's clove and ivory economy, pastoral rift plains and long-distance Nyamwezi and Arab caravan corridors [@Gilbert1970CoastalEast; @Issa2023FromStinkibar]. Within fifteen years, Anglo-German treaties (1886AD and 1890AD) and Belgian Congo boundary conventions partitioned the region into the Uganda Protectorate, the East Africa Protectorate (later Kenya Colony and Protectorate), German East Africa (mainland Tanganyika alongside Ruanda and Urundi) and the British Protectorate of Zanzibar [@Johnston1902TheUganda; @Kuczynski1949DemographicSurvey2].

Partition coincided with acute biological and subsistence crises. In the early 1890s, panzootic rinderpest swept across Kenya, Tanganyika and Uganda, destroying pastoral cattle herds and triggering severe famine among Maasai, Kikuyu, Kamba and interlacustrine communities [@Kuczynski1949DemographicSurvey2; @Office1933AnnualReport]. Between 1901AD and 1910AD, a catastrophic sleeping sickness (*Trypanosoma brucei gambiense*) epidemic around the northern shores and islands of Lake Victoria killed an estimated 200k to 300k inhabitants of Buganda and Busoga, prompting forced lakeside evacuations by the Uganda Protectorate administration [@Johnston1902TheUganda; @UgandaBlueBook1918]. Simultaneously, German military suppression of the Maji Maji uprising in southern Tanganyika (1905AD to 1907AD) caused widespread scorched-earth famine and depopulation across the Rufiji, Ruvuma and Songea basins [@Office1938ReportHis; @Ruiz2012AculturizacionDiferenciacion].

The East African Campaign of 1914AD to 1918AD compounded those losses. Unlike the European Western Front, military logistics across bush tracks lacking motor roads relied on conscripted African porters (the Carrier Corps in British territories and *Träger* levies in German East Africa). Wartime requisitioning of grain and livestock, dysentery, malaria and the 1918-1919 influenza pandemic produced heavy excess mortality across Kenya, Tanganyika, Uganda and Ruanda-Urundi [@UgandaBlueBook1918; @Kuczynski1949DemographicSurvey2; @Ozkose2022TheHumanity]. Under the 1919-1922 League of Nations mandate settlement, Britain assumed Tanganyika Territory while Belgium administered Ruanda-Urundi [@Office1938ReportHis; @Ozkose2022TheHumanity].

## Railways, Settler Alienation, Cash Crops and Post-1945 Censuses

Interwar recovery rested on sharply contrasting colonial political economies. In Uganda, African smallholders expanded cotton and Robusta coffee cultivation along Lake Victoria and the Busoga-Teso rail spurs, while Nubian garrison settlements and northern labour reserves reshaped urban and rural districts [@Amone2018ContestedCitizenship; @UgandaBlueBook1923; @Okoboi2012ConstraintsFertilizer]. In Kenya, completion of the Uganda Railway from Mombasa to Kisumu (1901AD) anchored Nairobi (founded 1899AD) and alienated central and Rift Valley lands as the White Highlands, confining Kikuyu, Luo, Luhya and Kamba farmers to crowded reserves and generating male labour migration to settler farms and towns [@Office1933AnnualReport; @Mashara2016FactorsInfluencing]. Land hunger and forced villagisation culminated in the Mau Mau Emergency of 1952AD to 1960AD across central Kenya [@Kuczynski1949DemographicSurvey2; @Martin1961EastAfrica].

In Tanganyika, sisal estates along the Tanga and Central railways, Chagga coffee on Kilimanjaro and Sukuma cotton south of Lake Victoria coexisted with forest reserve displacements in the Southern Highlands and uneven labour recruitment [@Tanganyika1930AgricultureReport; @Tanganyika1940AgricultureReport; @Mwandete2025ColonialScientific]. Zanzibar shifted from nineteenth-century slave-worked clove plantations toward urban sanitation reforms, migrant mainland labour and post-1945 population stabilisation on Unguja and Pemba [@Issa2023FromStinkibar; @Salum2026ReclaimingDarajani]. In Belgian Ruanda-Urundi, extreme highland population densities collided with mandatory coffee cultivation, *corvée* labour and drought in 1943-1944, producing the Ruzagayura famine that killed roughly 200k to 300k people and drove large-scale migration into Uganda and eastern Belgian Congo [@Ozkose2022TheHumanity; @Atozo2024TheImpact].

Before 1948AD, territorial population figures rested largely on hut-and-poll tax registers compiled in Colonial Office annual reports and Uganda Blue Books [@UgandaBlueBook1918; @UgandaBlueBook1923; @Office1933AnnualReport; @Office1938ReportHis]. In 1948AD, the East African Statistical Department under C. J. Martin carried out the first synchronised African population census across Kenya, Tanganyika and Uganda alongside Zanzibar's parallel enumeration, establishing the modern baseline later refined in Tanganyika (1957AD), Uganda (1959AD) and Kenya (1962AD) [@EastAfrica1948Census; @Martin1961EastAfrica; @Golaz2011TheVulnerability].

# Methodology

## Sub-Regional Territorial Partition and Accounting Domain

The study area covers 1.746.275 km² across 20.422 five-arcminute cells spanning 10 modern jurisdictions. Within NICETHI, Chapter 14 occupies Regime 2 (1880AD to 1963AD), bridging nineteenth-century Swahili-Omani and interlacustrine baselines with post-independence national censuses. Eight contiguous colonial administrative sub-regions partition the territory along protectorate, colony, provincial and League of Nations mandate boundaries (Table \ref{tab:subregions}).

Kenya is divided between the Highlands, Rift and Nyanza core (231.339 km²) and the Coast Protectorate and Northern Frontier (349.330 km²). Mainland Tanganyika is split into three provincial groupings reflecting agro-ecological and transport corridors: Lake, Northern and Tanga provinces (223.806 km²), Eastern, Central and Western provinces (444.469 km²), and Southern and Southern Highlands (229.894 km²). Uganda Protectorate (215.131 km²), Ruanda-Urundi (49.657 km²) and the Zanzibar Protectorate islands of Unguja and Pemba (2.648 km²) round out the eight-part partition [@Runfola2020GeoBoundaries].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Era</th><th class="crd-th">Interior Sites</th><th class="crd-th">Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Uganda Protectorate</strong></td><td class="crd-td">215.131</td><td class="crd-td">2.507</td><td class="crd-td">1894AD-1962AD</td><td class="crd-td">30</td><td class="crd-td">12,3</td></tr>
<tr><td class="crd-td"><strong>Kenya Colony: Highlands, Rift and Nyanza</strong></td><td class="crd-td">231.339</td><td class="crd-td">2.696</td><td class="crd-td">1895AD-1963AD</td><td class="crd-td">33</td><td class="crd-td">13,2</td></tr>
<tr><td class="crd-td"><strong>Kenya Coast Protectorate and Northern Frontier</strong></td><td class="crd-td">349.330</td><td class="crd-td">4.072</td><td class="crd-td">1895AD-1963AD</td><td class="crd-td">20</td><td class="crd-td">20</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Lake, Northern and Tanga Provinces</strong></td><td class="crd-td">223.806</td><td class="crd-td">2.611</td><td class="crd-td">1885AD-1961AD</td><td class="crd-td">15</td><td class="crd-td">12,8</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Eastern, Central and Western</strong></td><td class="crd-td">444.469</td><td class="crd-td">5.210</td><td class="crd-td">1885AD-1961AD</td><td class="crd-td">34</td><td class="crd-td">25,5</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Southern and Southern Highlands</strong></td><td class="crd-td">229.894</td><td class="crd-td">2.716</td><td class="crd-td">1885AD-1961AD</td><td class="crd-td">14</td><td class="crd-td">13,2</td></tr>
<tr><td class="crd-td"><strong>Sultanate and British Protectorate of Zanzibar</strong></td><td class="crd-td">2.648</td><td class="crd-td">31</td><td class="crd-td">1890AD-1963AD</td><td class="crd-td">4</td><td class="crd-td">0,2</td></tr>
<tr><td class="crd-td"><strong>German East Africa / Belgian Ruanda-Urundi</strong></td><td class="crd-td">49.657</td><td class="crd-td">579</td><td class="crd-td">1890AD-1962AD</td><td class="crd-td">24</td><td class="crd-td">2,8</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Eight colonial sub-regions of East Africa, showing surface area, 5-arcminute pixel counts, historical eras, interior assessed settlements and area shares.</figcaption>
</figure>

## Settlement Screening and Urban Scope Reconciliation

To reconstruct the colonial urban hierarchy across 186 candidate towns, railway stations, *bomas*, mining camps and ports, five duplicate Wave-3 alias records (Moyale in Kenya, Karonga in Malawi, and Malindi, Manda and Pate along the Kenya coast) were merged into canonical entries, leaving 181 individually assessed settlements across 635 chronological observations (Figure \ref{fig:hero-colonial-east-africa}). Every settlement time series rests on colonial census returns, Deutsch-Ostafrika annual reports, Belgian Congo and Ruanda-Urundi administrative reports, East African Institute of Social Research urban surveys, National Museums of Kenya coastal inventories or Africapolis mid-century town delimitations [@EastAfrica1948Census; @NMK2021KenyaSites; @Issa2023FromStinkibar; @Office1938ReportHis].

Unlike pre-colonial chapters where all settlements share a city-proper footprint, late-colonial urban growth around 1950AD to 1960AD created multi-node suburban agglomerations. The ledger therefore maintains 175 city-proper series alongside 6 explicitly labelled metropolitan agglomerations: Nairobi, Mombasa, Dar es Salaam, Kampala, Bujumbura and Kigali [@Martin1961EastAfrica; @Salum2026ReclaimingDarajani]. Keeping city-proper and agglomeration records separate prevents artificial breaks between 1948AD municipal boundaries and 1950AD to 1960AD built-up urban extents while ensuring that regional totals never double-count peri-urban populations.

## Sub-Administrative Census Harmonisation and Spatial Disaggregation

Rural populations were anchored to colonial tax-roll revisions prior to 1948AD and directly to official provincial enumerations from 1948AD onward [@Kuczynski1949DemographicSurvey2; @EastAfrica1948Census; @Martin1961EastAfrica]. Kuczynski's critical audit of early British East African censuses demonstrated that pre-1948AD tax-based multipliers systematically undercounted women, children and pastoralists in northern Kenya, Karamoja and central Tanganyika [@Kuczynski1949DemographicSurvey2]. Accordingly, the 1948AD census serves as the primary calibration anchor from which interwar series are back-projected with territory-specific growth corrections for sleeping sickness, First World War porter losses and the 1943-1944 Ruanda-Urundi famine [@UgandaBlueBook1918; @Tanganyika1930AgricultureReport; @Ozkose2022TheHumanity].

Continuous five-arcminute surfaces over the 14 benchmark years (1880AD to 1963AD) combine historical colonial province polygons (1914AD Colonial Africa, 1925AD League of Nations Mandates, 1940AD Colonial Africa and 1950AD to 1963AD modern provincial outlines), HYDE 3.5 and KK10 agricultural suitability priors and pycnophylactic mass-conserving disaggregation over geoBoundaries administrative outlines [@Runfola2020GeoBoundaries]. Across 81 disaggregated years and 30.911 administrative unit-year checks in the continental pipeline, 100% of units satisfy mass conservation within 0,01%, with a worst-case unit relative error of $5,603 \times 10^{-8}$ and zero residual boundary leakage.

# Testing and Validation

## Colonial Provincial Enumerations vs. Regional Reconstructions

Comparing NICETHI sub-regional aggregates against published colonial census tables tests both territorial completeness and provincial boundary alignment (Table \ref{tab:colonial-censuses}). In 1948AD, the East African Statistical Department enumerated 5.405.966 inhabitants across Kenya's six provinces, 4.955.176 across Uganda's four provinces and 7.477.677 on mainland Tanganyika (7.741.839 including Zanzibar and Pemba's 264.162 residents) [@EastAfrica1948Census; @Martin1961EastAfrica]. That combined British East African census total of 18.103.001 in 1948AD aligns closely with NICETHI's 1951AD total of 19,16M once Ruanda-Urundi (3,2M in 1951AD) and three years of post-war demographic growth (roughly 1,8% to 2,2% per year) are incorporated [@Kuczynski1949DemographicSurvey2; @Martin1961EastAfrica].

<figure class="crd-table-figure" id="tab:colonial-censuses">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Census Year</th><th class="crd-th">Units</th><th class="crd-th">Enumerated Pop.</th><th class="crd-th">Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Uganda Protectorate</strong></td><td class="crd-td">1948AD</td><td class="crd-td">4</td><td class="crd-td">4.955.176</td><td class="crd-td">East African Census (UGA)</td></tr>
<tr><td class="crd-td"><strong>Uganda Protectorate</strong></td><td class="crd-td">1959AD</td><td class="crd-td">4 (ADM1)</td><td class="crd-td">6.536.531</td><td class="crd-td">Uganda Census 1959 (ADM1)</td></tr>
<tr><td class="crd-td"><strong>Kenya Colony and Protectorate</strong></td><td class="crd-td">1948AD</td><td class="crd-td">6</td><td class="crd-td">5.405.966</td><td class="crd-td">East African Census (KEN)</td></tr>
<tr><td class="crd-td"><strong>Kenya Colony and Protectorate</strong></td><td class="crd-td">1962AD</td><td class="crd-td">8</td><td class="crd-td">8.633.700</td><td class="crd-td">Kenya Population Census 1962</td></tr>
<tr><td class="crd-td"><strong>Tanganyika and Zanzibar</strong></td><td class="crd-td">1948AD</td><td class="crd-td">10</td><td class="crd-td">7.741.839</td><td class="crd-td">East African Census (TZA+ZNZ)</td></tr>
<tr><td class="crd-td"><strong>Tanganyika and Zanzibar</strong></td><td class="crd-td">1967AD</td><td class="crd-td">25</td><td class="crd-td">12.313.469</td><td class="crd-td">Tanzania Census 1967</td></tr>
<tr><td class="crd-td"><strong>Zanzibar Protectorate</strong></td><td class="crd-td">1910AD</td><td class="crd-td">2</td><td class="crd-td">197.199</td><td class="crd-td">Zanzibar Protectorate Census</td></tr>
<tr><td class="crd-td"><strong>Zanzibar Protectorate</strong></td><td class="crd-td">1948AD</td><td class="crd-td">2</td><td class="crd-td">264.162</td><td class="crd-td">Zanzibar Protectorate Census</td></tr>
<tr><td class="crd-td"><strong>Zanzibar Protectorate</strong></td><td class="crd-td">1967AD</td><td class="crd-td">2</td><td class="crd-td">354.360</td><td class="crd-td">Tanzania/OCGS Census 1967</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Official colonial and immediate post-colonial sub-administrative census enumerations across British East Africa.</figcaption>
</figure>

Subsequent territorial censuses confirm the late-colonial acceleration recorded in the spatial series. Uganda's 1959AD census counted 6.536.531 inhabitants across its four provinces (exceeding NICETHI's 1958AD estimate of 5,76M and reaching 6,85M by 1963AD), while Kenya's 1962AD census recorded 8.633.700 inhabitants against NICETHI's 1963AD combined Kenyan total of 8,88M [@Martin1961EastAfrica; @Golaz2011TheVulnerability]. Across Tanganyika, the 1948AD baseline of 7.477.677 mainland residents rose by 1967AD to 11.959.109 (12.313.469 with Zanzibar), bracketing NICETHI's 1963AD mainland Tanganyika total of 5,9M [@EastAfrica1948Census; @Ruiz2012AculturizacionDiferenciacion].

Cross-checking against continental historical demography syntheses confirms both level and slope. Frankema and Jerven's backward-projected series estimates total Sub-Saharan and North African population rising from 127,7M in 1880AD to 137,1M in 1900AD, 141,9M in 1910AD, 166,4M in 1930AD, 221,8M in 1950AD and 279,2M in 1960AD, matching the post-1920AD inflection observed across all eight East African sub-regions while noting sharper pre-1914AD East African contractions from rinderpest and sleeping sickness [@Kuczynski1949DemographicSurvey2; @Martin1961EastAfrica].

## Urban Rank-Size Calibration and Hierarchy Diagnostics

Across the 181 individually assessed settlements, ordinary least-squares rank-size regression on the upper half (n=90) yields a Zipf exponent of $q = 1,18$ ($R^2 = 0,98$), and full-sample regression across all 181 entries yields $q = 1,18$ ($R^2 = 0,99$). Figure \ref{fig:rank-size} plots the 174 spatially interior settlements against an OLS fit of $q = 1,06$ ($R^2 = 0,99$) beside end-epoch sub-regional population densities in 1963AD.

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-east-africa/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 174 spatially interior settlements (OLS slope q = 1,06, R² = 0,99) and mean 1963AD population density across the eight colonial sub-regions.</figcaption>
</figure>

That near-unit Zipf slope ($q \approx 1,06$ to $1,18$) reflects a polycentric colonial urban system anchored by five distinct administrative and port capitals rather than a single primate metropolis: Nairobi (315k city-proper; 295,2k agglomeration), Mombasa (161,3k agglomeration; 84,7k city-proper in 1948AD), Dar es Salaam (159,5k agglomeration; 129k city-proper), Kampala (158k city-proper; 134,8k agglomeration) and Zanzibar (60,8k), followed closely by eastern Congolese border hub Bukavu (57,3k) and Ruanda-Urundi's capital Bujumbura (49,2k agglomeration) [@Issa2023FromStinkibar; @Salum2026ReclaimingDarajani; @Gilbert1970CoastalEast]. Below the 40k threshold, secondary provincial headquarters, railway junctions and agricultural market towns (Tanga, Nakuru, Jinja, Tabora, Mwanza, Kisumu, Kigali, Eldoret, Arusha, Moshi and Mbeya) form a smooth log-linear cascade down to 1k-seat *bomas* [@Tanganyika1930AgricultureReport; @UgandaBlueBook1923].

# Results

## Demographic Contraction and Early Colonial Dislocation (1880AD to 1910AD)

At the onset of partition in 1880AD, East Africa held 9,87M inhabitants (Table \ref{tab:trajectory} and Figure \ref{fig:trends}). Over the ensuing three decades, regional population declined by 7,7% to 9,62M in 1900AD and 9,11M in 1910AD. Every mainland Tanganyika corridor contracted sharply during the rinderpest panzootic, German conquest and the Maji Maji aftermath: Tanganyika's Eastern, Central and Western provinces fell from 1,11M to 988,6k (-11,3%), Lake, Northern and Tanga provinces dropped from 1,02M to 910,3k (-10,9%), and the Southern and Southern Highlands declined from 481,6k to 429k (-10,9%) [@Office1938ReportHis; @Mwandete2025ColonialScientific].

Across the interlacustrine north, Buganda and Busoga suffered severe sleeping sickness mortality after 1901AD, reversing late nineteenth-century gains in Uganda Protectorate from 2,26M in 1900AD to 2,12M in 1910AD [@Johnston1902TheUganda; @UgandaBlueBook1918]. Simultaneously, Ruanda-Urundi fell from 2,03M to 1,88M, while Kenya's Coast Protectorate and Northern Frontier dropped from 686,9k to 605,5k as the abolition of slave plantations and interior caravan shifts reduced coastal agricultural labour [@Gilbert1970CoastalEast; @Office1933AnnualReport]. Zanzibar town likewise declined from 58k in 1885AD to 35,3k in 1910AD (when the island protectorate enumerated 197.199 inhabitants across Unguja and Pemba) as mainland trade diverted toward Mombasa and Dar es Salaam [@Issa2023FromStinkibar; @Salum2026ReclaimingDarajani].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-east-africa/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional total and attested urban population trajectories, active recorded settlement counts peaking near 162 in 1951 to 1952, and growth of five leading East African centres from 1880AD to 1963AD.</figcaption>
</figure>

## Interwar Railway Economy and Agricultural Recovery (1910AD to 1940AD)

Between 1910AD and 1940AD, despite First World War carrier mortality and the 1918-1919 influenza shock, aggregate population expanded by 51,2% from 9,11M to 13,77M (Table \ref{tab:trajectory}). Uganda Protectorate led early growth, climbing from 2,12M in 1910AD to 2,93M in 1930AD and 3,42M in 1940AD (+61,2%) as smallholder cotton and coffee revenues improved household nutrition and public health administration [@UgandaBlueBook1923; @Adong2013WhatFactors]. Kenya's Highlands, Rift and Nyanza sub-region expanded even faster (+66,1% over the same span), rising from 1,83M to 3,04M as rail extensions to Eldoret, Kitale and Nanyuki stimulated commercial maize, tea and sisal estates [@Office1933AnnualReport; @NMK2021KenyaSites].

In Tanganyika, recovery was strongest in the Lake, Northern and Tanga provinces (910,3k to 1,52M, +67,2%), driven by Kilimanjaro arabica coffee, Tanga sisal plantations and Mwanza-Shinyanga cotton and goldfields (Geita) [@Tanganyika1930AgricultureReport; @Tanganyika1940AgricultureReport]. Eastern, Central and Western Tanganyika grew more modestly (988,6k to 1,48M), as did the Southern and Southern Highlands (429k to 716,6k), where tsetse-infested miombo woodland and colonial forest reserve restrictions constrained arable settlement [@Office1938ReportHis; @Mwandete2025ColonialScientific]. Belgian Ruanda-Urundi rose from 1,88M to 2,65M prior to the devastating 1943-1944 Ruzagayura famine [@Ozkose2022TheHumanity].

<figure class="crd-table-figure" id="tab:trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1880AD</th><th class="crd-th">1900AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1940AD</th><th class="crd-th">1951AD</th><th class="crd-th">1963AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Uganda Protectorate</strong></td><td class="crd-td">2,2M</td><td class="crd-td">2,26M</td><td class="crd-td">2,12M</td><td class="crd-td">2,93M</td><td class="crd-td">3,42M</td><td class="crd-td">5M</td><td class="crd-td">6,85M</td></tr>
<tr><td class="crd-td"><strong>Kenya Colony: Highlands, Rift and Nyanza</strong></td><td class="crd-td">1,9M</td><td class="crd-td">1,91M</td><td class="crd-td">1,83M</td><td class="crd-td">2,54M</td><td class="crd-td">3,04M</td><td class="crd-td">4,98M</td><td class="crd-td">7,03M</td></tr>
<tr><td class="crd-td"><strong>Kenya Coast Protectorate and Northern Frontier</strong></td><td class="crd-td">686,9k</td><td class="crd-td">673,9k</td><td class="crd-td">605,5k</td><td class="crd-td">658,8k</td><td class="crd-td">701,2k</td><td class="crd-td">1,09M</td><td class="crd-td">1,84M</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Lake, Northern and Tanga Provinces</strong></td><td class="crd-td">1,02M</td><td class="crd-td">936,3k</td><td class="crd-td">910,3k</td><td class="crd-td">1,19M</td><td class="crd-td">1,52M</td><td class="crd-td">1,95M</td><td class="crd-td">2,43M</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Eastern, Central and Western</strong></td><td class="crd-td">1,11M</td><td class="crd-td">1,02M</td><td class="crd-td">988,6k</td><td class="crd-td">1,25M</td><td class="crd-td">1,48M</td><td class="crd-td">1,85M</td><td class="crd-td">2,31M</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Southern and Southern Highlands</strong></td><td class="crd-td">481,6k</td><td class="crd-td">440,2k</td><td class="crd-td">429k</td><td class="crd-td">582,1k</td><td class="crd-td">716,6k</td><td class="crd-td">914,2k</td><td class="crd-td">1,17M</td></tr>
<tr><td class="crd-td"><strong>Sultanate and British Protectorate of Zanzibar</strong></td><td class="crd-td">428,5k</td><td class="crd-td">375,1k</td><td class="crd-td">344,5k</td><td class="crd-td">358,7k</td><td class="crd-td">243,7k</td><td class="crd-td">176,7k</td><td class="crd-td">151k</td></tr>
<tr><td class="crd-td"><strong>German East Africa / Belgian Ruanda-Urundi</strong></td><td class="crd-td">2,03M</td><td class="crd-td">2,01M</td><td class="crd-td">1,88M</td><td class="crd-td">2,33M</td><td class="crd-td">2,65M</td><td class="crd-td">3,2M</td><td class="crd-td">3,85M</td></tr>
<tr><td class="crd-td"><strong>Total Study Area</strong></td><td class="crd-td">9,87M</td><td class="crd-td">9,62M</td><td class="crd-td">9,11M</td><td class="crd-td">11,83M</td><td class="crd-td">13,77M</td><td class="crd-td">19,16M</td><td class="crd-td">25,63M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional and total population trajectories across seven benchmark years from 1880AD to 1963AD.</figcaption>
</figure>

## Post-War Acceleration, Mau Mau Disruption and Independence (1940AD to 1963AD)

After 1940AD, declining infant mortality, smallpox and malaria control, and expanded cassava and maize cultivation drove unprecedented demographic acceleration, nearly doubling the regional total from 13,77M in 1940AD to 25,63M in 1963AD (Table \ref{tab:trajectory}). Uganda Protectorate doubled from 3,42M to 6,85M (31,9 persons per km²), supported by high fertility and rising cross-border labour inflows from Rwanda, Burundi and northern Congo [@Golaz2011TheVulnerability; @Olamijuwon2016FertilityBehaviour; @Atozo2024TheImpact].

In Kenya's Highlands, Rift and Nyanza sub-region, expansion from 3,04M in 1940AD to 4,98M in 1951AD paused sharply during the Mau Mau Emergency (4,99M in 1955AD and 5,06M in 1958AD) as detention camps and emergency villagisation disrupted Central Province before full census reconciliation in 1962-1963AD lifted the sub-region to 7,03M (30,4 persons per km²) [@Martin1961EastAfrica; @Mashara2016FactorsInfluencing]. Meanwhile, Kenya's Coast and Northern Frontier climbed from 701,2k to 1,84M (5,3 persons per km²), and Tanganyika's three mainland zones reached a combined 5,9M [@Ruiz2012AculturizacionDiferenciacion].

## Urban Concentration and Leading Colonial Centres

Table \ref{tab:top-centres} lists the fifteen largest individually assessed urban records in the chapter ledger. Colonial transport infrastructure decisively reordered East Africa's urban map (Figure \ref{fig:trends}C). Nairobi expanded from 1.350 railway workers in 1901AD to 14.161 in 1911AD, 47.919 in 1931AD, 118.976 in 1948AD and 315k city-proper inhabitants by 1960AD, overtaking Mombasa (84.746 in 1948AD; 161,3k agglomeration in 1960AD) [@Office1933AnnualReport; @EastAfrica1948Census]. Dar es Salaam rose from 4,5k in 1887AD and 22,5k in 1913AD to 69.227 in 1948AD and 129k city-proper (159,5k agglomeration) by 1960AD [@Office1938ReportHis].

<figure class="crd-table-figure" id="tab:top-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Scope</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Date</th><th class="crd-th">Obs</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nairobi</strong></td><td class="crd-td">Kenya</td><td class="crd-td">City</td><td class="crd-td">1901AD-1960AD</td><td class="crd-td">315k</td><td class="crd-td">1960AD</td><td class="crd-td">13</td></tr>
<tr><td class="crd-td"><strong>Nairobi (Agglomeration)</strong></td><td class="crd-td">Kenya</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1960AD</td><td class="crd-td">295,2k</td><td class="crd-td">1960AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Mombasa (Agglomeration)</strong></td><td class="crd-td">Kenya</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1960AD</td><td class="crd-td">161,3k</td><td class="crd-td">1960AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Dar es Salaam (Agglomeration)</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1960AD</td><td class="crd-td">159,5k</td><td class="crd-td">1960AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Kampala</strong></td><td class="crd-td">Uganda</td><td class="crd-td">City</td><td class="crd-td">1895AD-1960AD</td><td class="crd-td">158k</td><td class="crd-td">1960AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Kampala (Agglomeration)</strong></td><td class="crd-td">Uganda</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1960AD</td><td class="crd-td">134,8k</td><td class="crd-td">1960AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Dar es Salaam</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">City</td><td class="crd-td">1887AD-1960AD</td><td class="crd-td">129k</td><td class="crd-td">1960AD</td><td class="crd-td">13</td></tr>
<tr><td class="crd-td"><strong>Mombasa</strong></td><td class="crd-td">Kenya</td><td class="crd-td">City</td><td class="crd-td">1897AD-1948AD</td><td class="crd-td">84,7k</td><td class="crd-td">1948AD</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Zanzibar</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">City</td><td class="crd-td">1885AD-1960AD</td><td class="crd-td">60,8k</td><td class="crd-td">1960AD</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Bukavu</strong></td><td class="crd-td">DR Congo</td><td class="crd-td">City</td><td class="crd-td">1912AD-1960AD</td><td class="crd-td">57,3k</td><td class="crd-td">1960AD</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Bujumbura (Agglomeration)</strong></td><td class="crd-td">Burundi</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1960AD</td><td class="crd-td">49,2k</td><td class="crd-td">1960AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Tanga 1</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">City</td><td class="crd-td">1950AD-1960AD</td><td class="crd-td">43,5k</td><td class="crd-td">1960AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Nakuru</strong></td><td class="crd-td">Kenya</td><td class="crd-td">City</td><td class="crd-td">1911AD-1960AD</td><td class="crd-td">34,2k</td><td class="crd-td">1960AD</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Kibuga</strong></td><td class="crd-td">Uganda</td><td class="crd-td">City</td><td class="crd-td">1885AD</td><td class="crd-td">34k</td><td class="crd-td">1885AD</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Jinja</strong></td><td class="crd-td">Uganda</td><td class="crd-td">City</td><td class="crd-td">1911AD-1960AD</td><td class="crd-td">33,6k</td><td class="crd-td">1960AD</td><td class="crd-td">6</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Fifteen largest individually assessed urban records in Colonial East Africa (1880AD to 1963AD).</figcaption>
</figure>

In Uganda, the pre-colonial Buganda royal capital of Kibuga (34k around 1885AD) gave way to colonial Kampala (2.400 in 1895AD, 24.203 in 1948AD and 158k by 1960AD), industrial Jinja (33,6k by 1960AD following the Owen Falls dam) and administrative Entebbe (7.942 in 1948AD) [@Johnston1902TheUganda; @UgandaBlueBook1923]. Along the western borderlands, eastern Congolese administrative and mining centres at Bukavu (57,3k in 1960AD), Bunia (13,3k) and Butembo (13k) grew alongside Bujumbura (49,2k agglomeration) on Lake Tanganyika [@Ozkose2022TheHumanity]. Conversely, pre-colonial caravan and dhow ports bypassed by trunk railways declined or stagnated: Bagamoyo fell from 18,5k in 1885AD to 5.112 in 1948AD, Kilwa Kivinje shrank, and Tabora peaked at 25k in 1913AD before settling at 16,8k in 1960AD [@Gilbert1970CoastalEast; @Salum2026ReclaimingDarajani].

# Limitations

Three structural constraints govern these reconstructions. First, pre-1948AD demographic series rely heavily on colonial hut-and-poll tax rolls and administrative estimates that systematically undercounted women, children and mobile pastoralists in northern Kenya, Karamoja and central Tanganyika [@Kuczynski1949DemographicSurvey2; @Martin1961EastAfrica]. Although backward calibration from the 1948AD East African census removes most systematic undercount bias, year-to-year mortality spikes during the 1890s rinderpest panzootic, the 1901-1910 sleeping sickness epidemic and First World War carrier conscription retain uncertainty margins of 15% to 25% [@UgandaBlueBook1918; @Office1938ReportHis].

Second, settlement observation density drops abruptly after 1952AD (Figure \ref{fig:trends}B, falling from 162 active entries in 1951-1952AD to 30 in 1957-1960AD) because district *bomas* and smaller townships enumerated in 1948AD colonial tables transition into post-colonial national census ledgers beginning in 1961AD to 1969AD, while mid-century Africapolis series focus on towns above 10k inhabitants [@EastAfrica1948Census; @Golaz2011TheVulnerability]. Six settlements hold only single-date observations (including Kibuga at 1885AD and Bweranyange at 1890AD), limiting longitudinal interpolation for late nineteenth-century courts.

Third, colonial census boundaries shifted across protectorate reorganisations, notably Kenya's 1962-1963 creation of Western and North-Eastern regions out of Nyanza and Northern Frontier, and Zanzibar's island-level versus mainland provincial aggregation [@Martin1961EastAfrica; @Runfola2020GeoBoundaries]. Discrepancies in Zanzibar's five-arcminute coastal pixel series (where coarse 31-pixel island raster aggregation understates the 1948AD and 1967AD official island counts of 264.162 and 354.360 shown in Table \ref{tab:colonial-censuses}) are flagged in the Appendix so readers use official island census totals for Zanzibar alongside mainland sub-regional series.

# Conclusion

Between 1880AD and 1963AD, East Africa experienced an initial three-decade demographic contraction from 9,87M to 9,11M under ecological and wartime shocks, followed by an almost three-fold recovery to 25,63M inhabitants on the eve of decolonisation. Growth remained strongly uneven across space: by 1963AD, Ruanda-Urundi (77,4 persons per km²), Uganda (31,9 persons per km²) and the Kenya Highlands-Nyanza belt (30,4 persons per km²) carried four to fifteen times the density of Tanganyika's central and southern woodlands or Kenya's northern frontier. Integrating 181 colonial urban series with provincial census tables and mass-conserving spatial interpolation, NICETHI connects late nineteenth-century baselines directly to post-1961AD national demographic series.

# Appendix

## Sub-Regional Density, Share and Provincial Census Tables

Table \ref{tab:density-appendix} reports mean population density in persons per km² across all eight colonial sub-regions from 1880AD to 1963AD, while Table \ref{tab:shares-appendix} tracks each sub-region's share of the regional total. Tables \ref{tab:ken-uga-adm1} and \ref{tab:tza-adm1} reproduce the full provincial census returns underlying testing and cross-checking from the chapter sub-administrative benchmark archive [@EastAfrica1948Census; @Martin1961EastAfrica].

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1880AD</th><th class="crd-th">1900AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1940AD</th><th class="crd-th">1951AD</th><th class="crd-th">1963AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Uganda Protectorate</strong></td><td class="crd-td">10,23</td><td class="crd-td">10,52</td><td class="crd-td">9,86</td><td class="crd-td">13,61</td><td class="crd-td">15,9</td><td class="crd-td">23,22</td><td class="crd-td">31,86</td></tr>
<tr><td class="crd-td"><strong>Kenya Colony: Highlands, Rift and Nyanza</strong></td><td class="crd-td">8,22</td><td class="crd-td">8,24</td><td class="crd-td">7,92</td><td class="crd-td">10,96</td><td class="crd-td">13,15</td><td class="crd-td">21,55</td><td class="crd-td">30,4</td></tr>
<tr><td class="crd-td"><strong>Kenya Coast Protectorate and Northern Frontier</strong></td><td class="crd-td">1,97</td><td class="crd-td">1,93</td><td class="crd-td">1,73</td><td class="crd-td">1,89</td><td class="crd-td">2,01</td><td class="crd-td">3,12</td><td class="crd-td">5,27</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Lake, Northern and Tanga Provinces</strong></td><td class="crd-td">4,56</td><td class="crd-td">4,18</td><td class="crd-td">4,07</td><td class="crd-td">5,32</td><td class="crd-td">6,8</td><td class="crd-td">8,71</td><td class="crd-td">10,84</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Eastern, Central and Western</strong></td><td class="crd-td">2,51</td><td class="crd-td">2,29</td><td class="crd-td">2,22</td><td class="crd-td">2,81</td><td class="crd-td">3,33</td><td class="crd-td">4,16</td><td class="crd-td">5,19</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Southern and Southern Highlands</strong></td><td class="crd-td">2,09</td><td class="crd-td">1,91</td><td class="crd-td">1,87</td><td class="crd-td">2,53</td><td class="crd-td">3,12</td><td class="crd-td">3,98</td><td class="crd-td">5,09</td></tr>
<tr><td class="crd-td"><strong>Sultanate and British Protectorate of Zanzibar</strong></td><td class="crd-td">161,79</td><td class="crd-td">141,64</td><td class="crd-td">130,08</td><td class="crd-td">135,45</td><td class="crd-td">92</td><td class="crd-td">66,71</td><td class="crd-td">57,03</td></tr>
<tr><td class="crd-td"><strong>German East Africa / Belgian Ruanda-Urundi</strong></td><td class="crd-td">40,9</td><td class="crd-td">40,54</td><td class="crd-td">37,8</td><td class="crd-td">46,83</td><td class="crd-td">53,35</td><td class="crd-td">64,47</td><td class="crd-td">77,44</td></tr>
<tr><td class="crd-td"><strong>Mean Study Area</strong></td><td class="crd-td">5,65</td><td class="crd-td">5,51</td><td class="crd-td">5,22</td><td class="crd-td">6,77</td><td class="crd-td">7,89</td><td class="crd-td">10,97</td><td class="crd-td">14,68</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Mean population density (persons per km²) across the eight colonial sub-regions from 1880AD to 1963AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:shares-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1880AD (%)</th><th class="crd-th">1900AD (%)</th><th class="crd-th">1910AD (%)</th><th class="crd-th">1930AD (%)</th><th class="crd-th">1940AD (%)</th><th class="crd-th">1951AD (%)</th><th class="crd-th">1963AD (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Uganda Protectorate</strong></td><td class="crd-td">22,3</td><td class="crd-td">23,5</td><td class="crd-td">23,3</td><td class="crd-td">24,7</td><td class="crd-td">24,8</td><td class="crd-td">26,1</td><td class="crd-td">26,7</td></tr>
<tr><td class="crd-td"><strong>Kenya Colony: Highlands, Rift and Nyanza</strong></td><td class="crd-td">19,3</td><td class="crd-td">19,8</td><td class="crd-td">20,1</td><td class="crd-td">21,4</td><td class="crd-td">22,1</td><td class="crd-td">26</td><td class="crd-td">27,4</td></tr>
<tr><td class="crd-td"><strong>Kenya Coast Protectorate and Northern Frontier</strong></td><td class="crd-td">7</td><td class="crd-td">7</td><td class="crd-td">6,6</td><td class="crd-td">5,6</td><td class="crd-td">5,1</td><td class="crd-td">5,7</td><td class="crd-td">7,2</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Lake, Northern and Tanga Provinces</strong></td><td class="crd-td">10,3</td><td class="crd-td">9,7</td><td class="crd-td">10</td><td class="crd-td">10,1</td><td class="crd-td">11</td><td class="crd-td">10,2</td><td class="crd-td">9,5</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Eastern, Central and Western</strong></td><td class="crd-td">11,3</td><td class="crd-td">10,6</td><td class="crd-td">10,9</td><td class="crd-td">10,6</td><td class="crd-td">10,7</td><td class="crd-td">9,7</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Southern and Southern Highlands</strong></td><td class="crd-td">4,9</td><td class="crd-td">4,6</td><td class="crd-td">4,7</td><td class="crd-td">4,9</td><td class="crd-td">5,2</td><td class="crd-td">4,8</td><td class="crd-td">4,6</td></tr>
<tr><td class="crd-td"><strong>Sultanate and British Protectorate of Zanzibar</strong></td><td class="crd-td">4,3</td><td class="crd-td">3,9</td><td class="crd-td">3,8</td><td class="crd-td">3</td><td class="crd-td">1,8</td><td class="crd-td">0,9</td><td class="crd-td">0,6</td></tr>
<tr><td class="crd-td"><strong>German East Africa / Belgian Ruanda-Urundi</strong></td><td class="crd-td">20,6</td><td class="crd-td">20,9</td><td class="crd-td">20,6</td><td class="crd-td">19,7</td><td class="crd-td">19,2</td><td class="crd-td">16,7</td><td class="crd-td">15</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Percentage share of total regional population by colonial sub-region across seven benchmark years from 1880AD to 1963AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:ken-uga-adm1">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Province</th><th class="crd-th">Level</th><th class="crd-th">Population</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kenya (1948AD)</strong></td><td class="crd-td">Central</td><td class="crd-td">ADM1</td><td class="crd-td">2.104.910</td></tr>
<tr><td class="crd-td"><strong>Kenya (1948AD)</strong></td><td class="crd-td">Nyanza</td><td class="crd-td">ADM1</td><td class="crd-td">1.866.677</td></tr>
<tr><td class="crd-td"><strong>Kenya (1948AD)</strong></td><td class="crd-td">Rift Valley</td><td class="crd-td">ADM1</td><td class="crd-td">678.677</td></tr>
<tr><td class="crd-td"><strong>Kenya (1948AD)</strong></td><td class="crd-td">Coast</td><td class="crd-td">ADM1</td><td class="crd-td">501.121</td></tr>
<tr><td class="crd-td"><strong>Kenya (1948AD)</strong></td><td class="crd-td">Northern Frontier</td><td class="crd-td">ADM1</td><td class="crd-td">187.451</td></tr>
<tr><td class="crd-td"><strong>Kenya (1948AD)</strong></td><td class="crd-td">Masai</td><td class="crd-td">ADM1</td><td class="crd-td">67.130</td></tr>
<tr><td class="crd-td"><strong>Kenya (1962AD)</strong></td><td class="crd-td">Rift Valley</td><td class="crd-td">ADM1</td><td class="crd-td">1.739.800</td></tr>
<tr><td class="crd-td"><strong>Kenya (1962AD)</strong></td><td class="crd-td">Nyanza</td><td class="crd-td">ADM1</td><td class="crd-td">1.634.100</td></tr>
<tr><td class="crd-td"><strong>Kenya (1962AD)</strong></td><td class="crd-td">Eastern</td><td class="crd-td">ADM1</td><td class="crd-td">1.556.900</td></tr>
<tr><td class="crd-td"><strong>Kenya (1962AD)</strong></td><td class="crd-td">Central</td><td class="crd-td">ADM1</td><td class="crd-td">1.334.900</td></tr>
<tr><td class="crd-td"><strong>Kenya (1962AD)</strong></td><td class="crd-td">Western</td><td class="crd-td">ADM1</td><td class="crd-td">1.014.500</td></tr>
<tr><td class="crd-td"><strong>Kenya (1962AD)</strong></td><td class="crd-td">Coast</td><td class="crd-td">ADM1</td><td class="crd-td">741.100</td></tr>
<tr><td class="crd-td"><strong>Kenya (1962AD)</strong></td><td class="crd-td">Nairobi Area</td><td class="crd-td">ADM1</td><td class="crd-td">343.500</td></tr>
<tr><td class="crd-td"><strong>Kenya (1962AD)</strong></td><td class="crd-td">North-Eastern</td><td class="crd-td">ADM1</td><td class="crd-td">268.900</td></tr>
<tr><td class="crd-td"><strong>Uganda (1948AD)</strong></td><td class="crd-td">Eastern</td><td class="crd-td">ADM1</td><td class="crd-td">1.514.428</td></tr>
<tr><td class="crd-td"><strong>Uganda (1948AD)</strong></td><td class="crd-td">Buganda</td><td class="crd-td">ADM1</td><td class="crd-td">1.317.705</td></tr>
<tr><td class="crd-td"><strong>Uganda (1948AD)</strong></td><td class="crd-td">Western</td><td class="crd-td">ADM1</td><td class="crd-td">1.177.939</td></tr>
<tr><td class="crd-td"><strong>Uganda (1948AD)</strong></td><td class="crd-td">Northern</td><td class="crd-td">ADM1</td><td class="crd-td">945.104</td></tr>
<tr><td class="crd-td"><strong>Uganda (1959AD)</strong></td><td class="crd-td">Eastern</td><td class="crd-td">ADM1</td><td class="crd-td">1.902.697</td></tr>
<tr><td class="crd-td"><strong>Uganda (1959AD)</strong></td><td class="crd-td">Buganda</td><td class="crd-td">ADM1</td><td class="crd-td">1.881.149</td></tr>
<tr><td class="crd-td"><strong>Uganda (1959AD)</strong></td><td class="crd-td">Western</td><td class="crd-td">ADM1</td><td class="crd-td">1.503.375</td></tr>
<tr><td class="crd-td"><strong>Uganda (1959AD)</strong></td><td class="crd-td">Northern</td><td class="crd-td">ADM1</td><td class="crd-td">1.249.310</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Provincial census enumerations for Kenya (1948AD and 1962AD) and Uganda (1948AD and 1959AD).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:tza-adm1">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Province</th><th class="crd-th">Level</th><th class="crd-th">Population</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tanganyika and Zanzibar (1948AD)</strong></td><td class="crd-td">Lake</td><td class="crd-td">ADM1</td><td class="crd-td">1.853.719</td></tr>
<tr><td class="crd-td"><strong>Tanganyika and Zanzibar (1948AD)</strong></td><td class="crd-td">Western</td><td class="crd-td">ADM1</td><td class="crd-td">952.503</td></tr>
<tr><td class="crd-td"><strong>Tanganyika and Zanzibar (1948AD)</strong></td><td class="crd-td">Eastern</td><td class="crd-td">ADM1</td><td class="crd-td">933.120</td></tr>
<tr><td class="crd-td"><strong>Tanganyika and Zanzibar (1948AD)</strong></td><td class="crd-td">Southern</td><td class="crd-td">ADM1</td><td class="crd-td">917.648</td></tr>
<tr><td class="crd-td"><strong>Tanganyika and Zanzibar (1948AD)</strong></td><td class="crd-td">Southern Highlands</td><td class="crd-td">ADM1</td><td class="crd-td">849.995</td></tr>
<tr><td class="crd-td"><strong>Tanganyika and Zanzibar (1948AD)</strong></td><td class="crd-td">Central</td><td class="crd-td">ADM1</td><td class="crd-td">821.147</td></tr>
<tr><td class="crd-td"><strong>Tanganyika and Zanzibar (1948AD)</strong></td><td class="crd-td">Northern</td><td class="crd-td">ADM1</td><td class="crd-td">592.300</td></tr>
<tr><td class="crd-td"><strong>Tanganyika and Zanzibar (1948AD)</strong></td><td class="crd-td">Tanga</td><td class="crd-td">ADM1</td><td class="crd-td">557.245</td></tr>
<tr><td class="crd-td"><strong>Tanganyika and Zanzibar (1948AD)</strong></td><td class="crd-td">Zanzibar</td><td class="crd-td">ADM1</td><td class="crd-td">149.575</td></tr>
<tr><td class="crd-td"><strong>Tanganyika and Zanzibar (1948AD)</strong></td><td class="crd-td">Pemba</td><td class="crd-td">ADM1</td><td class="crd-td">114.587</td></tr>
<tr><td class="crd-td"><strong>Zanzibar Protectorate (1910AD)</strong></td><td class="crd-td">Unguja (Zanzibar Island)</td><td class="crd-td">ADM1</td><td class="crd-td">114.069</td></tr>
<tr><td class="crd-td"><strong>Zanzibar Protectorate (1910AD)</strong></td><td class="crd-td">Pemba</td><td class="crd-td">ADM1</td><td class="crd-td">83.130</td></tr>
<tr><td class="crd-td"><strong>Zanzibar and Pemba (1967AD)</strong></td><td class="crd-td">Unguja (Zanzibar Island)</td><td class="crd-td">ADM1</td><td class="crd-td">190.117</td></tr>
<tr><td class="crd-td"><strong>Zanzibar and Pemba (1967AD)</strong></td><td class="crd-td">Pemba</td><td class="crd-td">ADM1</td><td class="crd-td">164.243</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Provincial and island census enumerations for Tanganyika (1948AD) and Zanzibar Protectorate (1910AD and 1967AD).</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Seven cross-border or perimeter buffer settlements (Beni, Bunia, Butembo in eastern Belgian Congo; Dolo and Mega in southern Ethiopia; Karonga in northern Nyasaland; and Yei in southern Sudan) plus Mbala in Northern Rhodesia lie along the immediate exterior border of the eight core East African sub-regions (174 strictly interior matches in Table \ref{tab:subregions}) and are assigned to their nearest East African sub-region in the companion settlement gazetteer so all 181 ledger entries are catalogued. Separate city-proper and metropolitan agglomeration records are retained for Nairobi, Mombasa, Dar es Salaam, Kampala, Bujumbura and Kigali to preserve continuity across municipal and built-up statistical definitions.
