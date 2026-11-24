---
title: "Post-Colonial East Africa (1961-Present)"
subtitle: "Uganda, Kenya, Tanzania, Rwanda and Burundi Since Independence"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: postcolonial_east_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "One hundred first-level administrative units and 1.880 assessed settlements across Uganda, Kenya, Tanzania, Rwanda and Burundi from 1961AD to 2025AD."
hero_label: "fig:hero-east-africa"

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

Between Tanganyika's independence in 1961AD and the contemporary censuses of the mid-2020s, East Africa experienced one of the most rapid demographic expansions in world history. Across an administrative domain of 1.743.957 km² spanning 100 first-level territorial units in Uganda, Kenya, Tanzania (including Zanzibar), Rwanda and Burundi, NICETHI reconstructs an aggregate regional population that increased more than eightfold from 22,13M inhabitants in 1961AD to 40,48M in 1971AD, 50,44M in 1981AD, 63,19M in 1991AD, 95,52M in 2000AD, 123,02M in 2010AD, 155,71M in 2020AD and 182,78M by 2025AD, reaching a mean end-epoch density of 104,81 persons/km². Expansion varied sharply by demographic regime and political stability. Kenya moved from a world-record total fertility rate exceeding eight births per woman in the late 1970s into a rapid fertility decline paired with Nairobi metropolitan primacy and 47-county devolution. Tanzania combined the 1964 Zanzibar union and the *Ujamaa* villagisation drive of 1973-1976 with Dar es Salaam's transformation into an Indian Ocean megacity exceeding five million municipal inhabitants and Dodoma's rise as administrative capital. Uganda weathered civil war and severe early HIV/AIDS mortality before rebounding into sustained youth growth across the Kampala-Wakiso-Entebbe urban belt, whereas densely populated Rwanda and Burundi endured catastrophic conflict shocks - most acutely the 1994 genocide in Rwanda - alongside intense rural land pressure exceeding 500 persons/km². These series integrate 1.880 individually assessed settlements across 6.133 dated observations with historical administrative census benchmarks and mass-conserving spatial disaggregation across five-arcminute cells.



# Background

## Independence Frontiers, Highland Cradles and Ecological Zones

When Tanganyika achieved independence in December 1961, followed by Rwanda and Burundi in July 1962, Uganda in October 1962 and Kenya in December 1963, the five republics inherited sharply contrasted ecological and demographic landscapes [@Bank2012EastAfrican; @Runfola2020GeoBoundaries]. A fertile crescent of volcanic and alluvial highlands - stretching from the Kikuyu ridges and Rift Valley escarpments of central Kenya across Mount Kilimanjaro and the Lake Victoria littoral into Buganda and the steep interlacustrine hills of Rwanda and Burundi - already carried dense smallholder populations supported by maize, bananas, highland coffee, tea and dairy cattle [@Tatem2007HighResolution; @Masanja2014RuralUrban]. By contrast, northern and north-eastern Kenya (Turkana, Marsabit, Wajir, Garissa and Mandera) and the vast central and southern plateaus of Tanzania (Tabora, Singida, Lindi and Ruvuma) supported sparse pastoralist and dry-savanna farming populations constrained by semi-arid rainfall and tsetse belts [@Bank2012EastAfrican; @KNBS2019KenyaCensus].

Along the Indian Ocean shore, the coral-rag ports of Mombasa, Tanga, Zanzibar Town, Dar es Salaam and Mtwara linked interior rail corridors to maritime trade [@Hayashi2007LongTerm; @OECD2024Africapolis]. In April 1964, following the January 1964 Zanzibar Revolution, Tanganyika and the islands of Unguja and Pemba merged to form the United Republic of Tanzania, uniting a large continental republic with a compact, densely settled island polity whose clove economy and urban population remained statistically tracked through both Union and Zanzibar offices [@NBSTanzania2022Census]. Inland around Lake Tanganyika and Lake Kivu, Bujumbura and Kigali entered the 1960s as modest colonial administrative towns of well under 100k residents, anchoring nations where more than 90% of households tilled terraced hillsides [@Bank2017RwandaEconomic; @Verwimp2020ForcedDisplacement].

Post-colonial demographic change quickly outpaced colonial expectations. Declining infant and child mortality from vaccination campaigns, malaria control and basic rural clinics interacted with early marriage and persistently high desired family size to push natural population growth rates above 3% per annum across Kenya, Tanzania and Uganda by the 1970s [@Omariba2008CorrelatedMortality; @Susuman2016BioDemographic; @Ikamari2024LevelsAnd]. At the same time, rural-to-urban migration accelerated toward capital regions and secondary provincial towns, while civil wars, forced population transfers and epidemiological crises periodically displaced millions across national and provincial borders [@Kathare2024TheRole; @Nzabona2018CorrelatesYouth; @Rutayisire2013RoleConflict].

## Historiography of Post-Colonial East African Censuses and Spatial Demography

Unlike earlier epochs dependent on archaeological site counts or patchy colonial tax rolls, post-colonial East African demography rests on modern national census series supplemented by Demographic and Health Surveys (DHS), World Bank spatial analyses and satellite-assisted urban morphological inventories [@Tatem2007HighResolution; @Bank2012EastAfrican; @OECD2024Africapolis]. Kenya established the earliest regular decennial sequence after independence, enumerating 8,63M inhabitants in 1962 before conducting counts in 1969, 1979, 1989, 1999, 2009 and August 2019 under the Kenya National Bureau of Statistics (KNBS) [@KNBS2019KenyaCensus; @Ikamari2024LevelsAnd]. Tanzania carried out national enumerations in 1967, 1978, 1988, 2002, 2012 and August 2022 through the National Bureau of Statistics (NBS) and the Office of Chief Government Statistician (OCGS) in Zanzibar, capturing both the institutional restructuring of *Ujamaa* villages in the 1970s and the explosive urban expansion of Dar es Salaam and Mwanza [@NBSTanzania2022Census; @Masanja2014RuralUrban; @Susuman2016BioDemographic].

Uganda's census record reflects its turbulent post-1971 political history: after the 1969 enumeration, the troubled 1980 census suffered severe under-enumeration in conflict-affected northern and central districts before the Uganda Bureau of Statistics (UBOS) restored rigorous national coverage in 1991, 2002, 2014 and May 2024 [@UBOS2024UgandaCensus; @Statistics2026UgandaNational; @Statistics2026UgandaMultidimensional]. In Rwanda, the National Institute of Statistics of Rwanda (NISR) conducted modern censuses in 1978, 1991, 2002, 2012 and August 2022, with the 2022 round adopting digital geospatial census mapping across every *umudugudu* village [@Shipsey2022MakingThe; @Muhoza2022FertilityTransition; @Habyarimana2015AnalysisDemographic]. Burundi's statistical series comprises national censuses in 1979, 1990, 2008 and 2024, bracketed by violent conflict episodes in 1972 and 1993-2005 that deeply reshaped provincial settlement and fertility trajectories [@Verwimp2020ForcedDisplacement; @Hayashi2007LongTerm].

Alongside official national enumerations, high-resolution spatial demography has transformed how scholars reconcile administrative totals with urban settlement footprints. Tatem and colleagues demonstrated how combining land-cover classifications with census enumeration areas improves sub-national population mapping across Kenya, Tanzania and Uganda [@Tatem2007HighResolution]. More recently, Africapolis integrated census counts with continuous 300-metre built-up satellite footprints across Africa, revealing how densely populated rural-urban continua around Lake Victoria, Mount Kenya and the Burundian highlands merge into vast morphological agglomerations far larger than statutory municipal boundaries [@OECD2024Africapolis; @Bank2017RwandaEconomic]. NICETHI brings these census registers, morphological urban series and sub-administrative polygons into a unified 1961AD-2025AD framework.

# Methodology

## First-Level Administrative Partition and Accounting Domain

The study domain encompasses 1.743.957 km² across 20.395 five-arcminute grid cells, partitioned into 100 contiguous first-level administrative sub-regions derived from geoBoundaries [@Runfola2020GeoBoundaries]. These comprise all 47 post-2013 counties of Kenya (587.170 km²), 25 mainland regions and two Zanzibar island divisions in Tanzania (897.925 km² combined), 17 provinces of Burundi (25.029 km²), five provinces of Rwanda including the City of Kigali (25.056 km²) and four statistical regions of Uganda (208.777 km²) (Table \ref{tab:country-summary}).

<figure class="crd-table-figure" id="tab:country-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Polity</th><th class="crd-th">Units</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Area Share (%)</th><th class="crd-th">1961AD</th><th class="crd-th">2025AD</th><th class="crd-th">2025AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kenya</strong></td><td class="crd-td">47</td><td class="crd-td">587.170</td><td class="crd-td">6.844</td><td class="crd-td">33,7</td><td class="crd-td">6,46M</td><td class="crd-td">53,19M</td><td class="crd-td">90,6</td></tr>
<tr><td class="crd-td"><strong>Tanzania (Mainland)</strong></td><td class="crd-td">25</td><td class="crd-td">895.618</td><td class="crd-td">10.507</td><td class="crd-td">51,4</td><td class="crd-td">5,63M</td><td class="crd-td">64,41M</td><td class="crd-td">71,9</td></tr>
<tr><td class="crd-td"><strong>Zanzibar</strong></td><td class="crd-td">2</td><td class="crd-td">2.307</td><td class="crd-td">27</td><td class="crd-td">0,1</td><td class="crd-td">134k</td><td class="crd-td">888,6k</td><td class="crd-td">385,2</td></tr>
<tr><td class="crd-td"><strong>Uganda</strong></td><td class="crd-td">4</td><td class="crd-td">208.777</td><td class="crd-td">2.433</td><td class="crd-td">12</td><td class="crd-td">6,19M</td><td class="crd-td">39,84M</td><td class="crd-td">190,8</td></tr>
<tr><td class="crd-td"><strong>Rwanda</strong></td><td class="crd-td">5</td><td class="crd-td">25.056</td><td class="crd-td">292</td><td class="crd-td">1,4</td><td class="crd-td">2,03M</td><td class="crd-td">11,35M</td><td class="crd-td">452,8</td></tr>
<tr><td class="crd-td"><strong>Burundi</strong></td><td class="crd-td">17</td><td class="crd-td">25.029</td><td class="crd-td">292</td><td class="crd-td">1,4</td><td class="crd-td">1,68M</td><td class="crd-td">13,11M</td><td class="crd-td">523,8</td></tr>
<tr><td class="crd-td"><strong>Total Study Area</strong></td><td class="crd-td">100</td><td class="crd-td">1.743.957</td><td class="crd-td">20.395</td><td class="crd-td">100</td><td class="crd-td">22,13M</td><td class="crd-td">182,78M</td><td class="crd-td">104,8</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Territorial partition of the Post-Colonial East Africa domain across 100 first-level administrative units from 1961AD to 2025AD (density in persons per km²).</figcaption>
</figure>

Population trajectories are evaluated across 14 benchmark years (1961, 1966, 1971, 1976, 1981, 1986, 1991, 1995, 2000, 2005, 2010, 2015, 2020 and 2025), with six core checkpoints reported in comparative tables: 1961AD (independence onset), 1976AD (post-colonial fertility acceleration and Tanzanian villagisation), 1991AD (pre-genocide Rwanda, Uganda recovery onset and Structural Adjustment era), 2000AD (turn-of-the-millennium census synthesis), 2015AD (devolution and East African Community urban boom) and 2025AD (contemporary post-2022/2024 census horizon) [@KNBS2019KenyaCensus; @NBSTanzania2022Census; @UBOS2024UgandaCensus].

## Settlement Ledger Screening and Scope Classification

To capture urban growth alongside rural regional trajectories, 1.950 candidate urban places and agglomerations inside the East African bounding domain were screened from KNBS, NBS, UBOS, NISR and ISTEEBU municipal census returns, UNSD Demographic Yearbook tables and Africapolis [@KNBS2019KenyaCensus; @NBSTanzania2022Census; @UBOS2024UgandaCensus; @OECD2024Africapolis]. After merging or removing 70 duplicate alias records, 1.880 assessed settlements were retained across 6.133 dated observations (Figure \ref{fig:hero-east-africa}). Because the rectangular chapter bounding window extends slightly beyond the five EAC borders, the settlement register also incorporates 145 border-zone towns in neighbouring jurisdictions - led by 112 settlements in eastern Democratic Republic of the Congo (such as Goma and Bukavu), ten in northern Malawi, six in Zambia, six in South Sudan, four in Somalia, four in Ethiopia and three in northern Mozambique - while keeping territorial area totals strictly bounded to the 100 East African admin-1 polygons [@Runfola2020GeoBoundaries; @OECD2024Africapolis].

Crucially, every entry in the settlement ledger carries an explicit spatial scope label: 1.838 entries record city-proper or municipal counts, while 42 entries record metropolitan agglomerations [@OECD2024Africapolis]. Separating municipal capitals from continuous built-up agglomerations prevents double counting of peri-urban belts and clarifies sharp divergences between statutory city limits and satellite-derived conurbations. Where Africapolis links dense rural-urban agricultural corridors into a single continuous 300-metre built-up footprint - notably around Kisumu along the Winam Gulf, Embu on the southern slopes of Mount Kenya, Mbale on Mount Elgon and Kayanza in northern Burundi - the resulting agglomeration series reaches several million residents in 2020AD-2025AD, far above statutory municipal headcounts [@OECD2024Africapolis; @KNBS2019KenyaCensus; @UBOS2024UgandaCensus].

## Gridded Disaggregation and Sub-Administrative Reconciliation

Within NICETHI Regime 3 (1961AD-2025AD), historical provincial and county census frames are reconciled across changing post-independence boundaries using mass-conserving pycnophylactic disaggregation onto five-arcminute cells [@Tatem2007HighResolution; @Runfola2020GeoBoundaries]. Twelve historical sub-administrative benchmark tables anchor the sequence, beginning with colonial-era provincial frames from Tanganyika (1958, 9,08M across 12 provinces), Zanzibar Protectorate (1958, 299.111 across Unguja and Pemba), Uganda (1959, 21 districts/provinces) and Kenya (1962, 8,63M across eight provinces), continuing through Zanzibar (1967, 354.360), Burundi (1978, 3,59M across eight provinces), Tanzania (1988, 23,17M) and Uganda (1991), and concluding with Kenya (1999 and 2023), Tanzania (2022, 61,74M) and Uganda (2024, 45,91M) [@KNBS2019KenyaCensus; @NBSTanzania2022Census; @UBOS2024UgandaCensus]. Twenty-four Regime 3 historical GIS polygon frames from 1960 and 2000 track boundary splits across Kenya's transition from colonial districts to eight provinces and 47 counties, as well as the creation of newer Tanzanian regions such as Geita, Katavi, Manyara, Njombe, Simiyu and Songwe [@Runfola2020GeoBoundaries].

# Testing and Validation

## Census Benchmark Alignment and Morphological Cross-Checks

Cross-checking the gridded regional series against official census enumerations confirms close alignment across the core growth trajectory while exposing specific enumeration gaps and extrapolation step-changes (Table \ref{tab:census-benchmarks}). In Kenya, the gridded county sum moves from 6,46M in 1961AD and 9,81M in 1966AD (bracketing the 8,63M 1962 census) to 22,57M in 1991AD (close to the 1989 census of 21,45M), 29,41M in 2000AD (matching the 1999 census of 28,69M) and 48,13M in 2020AD (within 1,2% of the August 2019 KNBS census of 47,56M) [@KNBS2019KenyaCensus; @Clark2013TransitionsAdulthood]. Across Tanzania (mainland plus Zanzibar), the gridded sum tracks 13,64M in 1971AD, 23,47M in 1991AD (matching the 1988 census of 23,17M), 56,07M in 2020AD and 65,3M in 2025AD (bracketing the August 2022 NBS census of 61,74M) [@NBSTanzania2022Census; @Susuman2016BioDemographic].

<figure class="crd-table-figure" id="tab:census-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Polity</th><th class="crd-th">Year</th><th class="crd-th">Units</th><th class="crd-th">Headline Total</th><th class="crd-th">Leading Division</th><th class="crd-th">Primary Archive</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>TZA</strong></td><td class="crd-td">1958</td><td class="crd-td">12</td><td class="crd-td">9,08M</td><td class="crd-td">Lake (1,73M)</td><td class="crd-td">Statoids official census archive (TZA)</td></tr>
<tr><td class="crd-td"><strong>TZA</strong></td><td class="crd-td">1988</td><td class="crd-td">104</td><td class="crd-td">23,17M</td><td class="crd-td">Mwanza (1,88M)</td><td class="crd-td">CityPopulation official census mirror (TZA)</td></tr>
<tr><td class="crd-td"><strong>TZA</strong></td><td class="crd-td">2022</td><td class="crd-td">227</td><td class="crd-td">61,74M</td><td class="crd-td">Dar es Salaam (5,38M)</td><td class="crd-td">CityPopulation official census mirror (TZA)</td></tr>
<tr><td class="crd-td"><strong>ZNZ</strong></td><td class="crd-td">1958</td><td class="crd-td">2</td><td class="crd-td">299,1k</td><td class="crd-td">Unguja (Zanzibar Island) (165,3k)</td><td class="crd-td">Zanzibar Protectorate Censuses 1910-1958 &amp; Tanzania/OCGS 1967 Census</td></tr>
<tr><td class="crd-td"><strong>ZNZ</strong></td><td class="crd-td">1967</td><td class="crd-td">2</td><td class="crd-td">354,4k</td><td class="crd-td">Unguja (Zanzibar Island) (190,1k)</td><td class="crd-td">Zanzibar Protectorate Censuses 1910-1958 &amp; Tanzania/OCGS 1967 Census</td></tr>
<tr><td class="crd-td"><strong>UGA</strong></td><td class="crd-td">1959</td><td class="crd-td">21</td><td class="crd-td">13,07M</td><td class="crd-td">Eastern (1,9M)</td><td class="crd-td">Statoids official census archive (UGA)</td></tr>
<tr><td class="crd-td"><strong>UGA</strong></td><td class="crd-td">1991</td><td class="crd-td">56</td><td class="crd-td">14,52M</td><td class="crd-td">Iganga (944k)</td><td class="crd-td">Statoids official census archive (UGA)</td></tr>
<tr><td class="crd-td"><strong>UGA</strong></td><td class="crd-td">2024</td><td class="crd-td">164</td><td class="crd-td">45,91M</td><td class="crd-td">Buganda (11,17M)</td><td class="crd-td">CityPopulation official census mirror (UGA)</td></tr>
<tr><td class="crd-td"><strong>KEN</strong></td><td class="crd-td">1962</td><td class="crd-td">8</td><td class="crd-td">8,63M</td><td class="crd-td">Rift Valley (1,74M)</td><td class="crd-td">Statoids official census archive (KEN)</td></tr>
<tr><td class="crd-td"><strong>KEN</strong></td><td class="crd-td">1999</td><td class="crd-td">53</td><td class="crd-td">28,69M</td><td class="crd-td">Rift Valley (6,99M)</td><td class="crd-td">CityPopulation official census mirror (KEN)</td></tr>
<tr><td class="crd-td"><strong>KEN</strong></td><td class="crd-td">2023</td><td class="crd-td">55</td><td class="crd-td">51,53M</td><td class="crd-td">Rift Valley (13,91M)</td><td class="crd-td">CityPopulation official census mirror (KEN)</td></tr>
<tr><td class="crd-td"><strong>BDI</strong></td><td class="crd-td">1978</td><td class="crd-td">8</td><td class="crd-td">3,59M</td><td class="crd-td">Ngozi (714,5k)</td><td class="crd-td">Statoids official census archive (BDI)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Historical sub-administrative census benchmark tables anchored in NICETHI across Kenya, Tanzania, Zanzibar, Uganda and Burundi (1958AD to 2024AD).</figcaption>
</figure>

Three known reconciliation discontinuities emerge clearly from testing. First, Uganda's gridded sum drops from 7,7M in 1971AD to 5,07M in 1991AD before jumping to 18,94M in 1995AD and 22,13M in 2000AD, reflecting the transition between older conflict-depressed historical interpolation surfaces and post-1995 UBOS-reconciled population rasters [@UBOS2024UgandaCensus; @Nzabona2018CorrelatesYouth]. Second, Rwanda's gridded series captures the sharp 1994 genocide rupture - falling from 6,59M in 1991AD to 5,58M in 1995AD before recovering to 9,79M in 2000AD and 11,35M in 2025AD (slightly below NISR's 2022 census of 13,25M) [@Shipsey2022MakingThe; @Rutayisire2013RoleConflict]. Third, Burundi displays both a sharp 1961AD-1966AD baseline step (1,68M to 5,18M) and an artificial 2020AD-2025AD leap (7,3M to 13,11M) driven by a 5,15M assignment to Bujumbura Mairie and Rural in the 2025 projection layer [@Verwimp2020ForcedDisplacement]. Flagging these discontinuities alongside official census anchors prevents misreading grid-transition artefacts as literal five-year fertility surges.

## Urban Rank-Size Calibration and Density Concentration

Across the 1.880 individually assessed settlements, ordinary least-squares rank-size regression on the upper 180 urban peaks yields a Zipf exponent of $q = 1,06$ ($R^2 = 0,99$), while full-sample regression across all 1.880 settlements yields $q = 1,14$ ($R^2 = 0,95$) (Figure \ref{fig:rank-size}). Across the 1.764 spatially deduplicated settlements plotted in Panel A of Figure \ref{fig:rank-size}, the upper tier follows the classic Zipf reference line ($q = 1$) tightly down to the 100k threshold before dropping more steeply across smaller district towns and rural market centres below 15k [@Hayashi2007LongTerm; @OECD2024Africapolis].

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-postcolonial-east-africa/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Settlement rank-size distribution across 1.764 spatially deduplicated urban centres (upper-tier q = 1,06, R² = 0,99) and top ten sub-regional densities in 2025AD.</figcaption>
</figure>

This near-unitary upper-tier exponent reflects a polycentric five-nation urban system rather than a single continental primate city. Multiple national and cross-border poles occupy the upper ranks: Kisumu and Nairobi in Kenya, Dar es Salaam in Tanzania, Kampala in Uganda, Kigali in Rwanda, Bujumbura in Burundi, and Goma and Bukavu on the Lake Kivu border [@Bank2012EastAfrican; @OECD2024Africapolis]. Panel B of Figure \ref{fig:rank-size} confirms that by 2025AD the highest sub-regional densities concentrate in metropolitan enclaves and densely farmed highland districts: Bujumbura Mairie and Rural (5.467 persons/km²), Nairobi (4.354 persons/km²), Dar es Salaam (3.235 persons/km²), Kiambu (1.409 persons/km²), City of Kigali (1.329 persons/km²), Gitega (1.175 persons/km²), Rumonge (965 persons/km²), Mombasa (954 persons/km²), Kisii (902 persons/km²) and Bungoma (823 persons/km²).

# Results

## Regional Demographic Trajectory (1961AD to 2025AD)

Between 1961AD and 2025AD, East Africa's aggregate population grew from 22,13M to 182,78M, while active assessed settlements in the urban ledger climbed from 157 in 1961AD to 250 in 1991AD, 501 in 2000AD and 1.379 in 2020AD before 1.240 entries carry explicit 2025AD estimates (Table \ref{tab:country-trajectory} and Figure \ref{fig:trends}). Panel A of Figure \ref{fig:trends} illustrates how total attested urban population converged rapidly toward the regional aggregate after 1990AD, rising from roughly 11M in 1991AD to more than 140M in 2025AD as secondary towns multiplied and dense highland settlements crossed urban morphological thresholds [@OECD2024Africapolis; @Hayashi2007LongTerm].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-postcolonial-east-africa/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional and attested urban population trajectories, active settlement counts and leading urban centres across East Africa from 1961AD to 2025AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:country-trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Polity</th><th class="crd-th">1961AD</th><th class="crd-th">1976AD</th><th class="crd-th">1991AD</th><th class="crd-th">2000AD</th><th class="crd-th">2015AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kenya</strong></td><td class="crd-td">6,46M</td><td class="crd-td">13,8M</td><td class="crd-td">22,57M</td><td class="crd-td">29,41M</td><td class="crd-td">43,26M</td><td class="crd-td">53,19M</td></tr>
<tr><td class="crd-td"><strong>Tanzania (Mainland)</strong></td><td class="crd-td">5,63M</td><td class="crd-td">16,19M</td><td class="crd-td">23,08M</td><td class="crd-td">27,16M</td><td class="crd-td">47,17M</td><td class="crd-td">64,41M</td></tr>
<tr><td class="crd-td"><strong>Zanzibar</strong></td><td class="crd-td">134k</td><td class="crd-td">261,3k</td><td class="crd-td">382,5k</td><td class="crd-td">582,9k</td><td class="crd-td">752,8k</td><td class="crd-td">888,6k</td></tr>
<tr><td class="crd-td"><strong>Uganda</strong></td><td class="crd-td">6,19M</td><td class="crd-td">6,77M</td><td class="crd-td">5,07M</td><td class="crd-td">22,13M</td><td class="crd-td">33,63M</td><td class="crd-td">39,84M</td></tr>
<tr><td class="crd-td"><strong>Rwanda</strong></td><td class="crd-td">2,03M</td><td class="crd-td">4,5M</td><td class="crd-td">6,59M</td><td class="crd-td">9,79M</td><td class="crd-td">10,54M</td><td class="crd-td">11,35M</td></tr>
<tr><td class="crd-td"><strong>Burundi</strong></td><td class="crd-td">1,68M</td><td class="crd-td">4,8M</td><td class="crd-td">5,5M</td><td class="crd-td">6,45M</td><td class="crd-td">7,49M</td><td class="crd-td">13,11M</td></tr>
<tr><td class="crd-td"><strong>Total Study Area</strong></td><td class="crd-td">22,13M</td><td class="crd-td">46,33M</td><td class="crd-td">63,19M</td><td class="crd-td">95,52M</td><td class="crd-td">142,84M</td><td class="crd-td">182,78M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Population trajectories by polity across six post-colonial benchmark years from 1961AD to 2025AD.</figcaption>
</figure>

## Kenya: Fertility Peak, Rapid Transition and County Devolution

Kenya provides the clearest benchmark in post-colonial East Africa of both explosive late twentieth-century population growth and a subsequent fertility transition [@KNBS2019KenyaCensus; @Ikamari2024LevelsAnd]. In the gridded series, Kenya's 47 counties rose from 6,46M in 1961AD to 13,8M in 1976AD, 22,57M in 1991AD, 29,41M in 2000AD, 43,26M in 2015AD and 53,19M by 2025AD. Official KNBS decennial censuses record an almost identical curve: 8,63M in 1962, 10,94M in 1969, 15,33M in 1979, 21,45M in 1989, 28,69M in 1999, 38,61M in 2009 and 47,56M in August 2019 [@KNBS2019KenyaCensus]. During the late 1970s, declining infant and sibling mortality combined with universal marriage and short birth intervals produced a world-record total fertility rate above eight children per woman around the 1979 census [@Omariba2008CorrelatedMortality; @Ikamari2024LevelsAnd]. Thereafter, rising female schooling, delayed marriage, urban housing pressures and expanding family-planning programmes drove one of the fastest fertility declines on the continent, bringing national fertility below 3,5 births per woman by the 2020s alongside rising nonmarital and delayed union patterns [@Ikamari2024LevelsAnd; @Clark2013TransitionsAdulthood].

Spatially, Kenya's demographic transformation concentrated population along the central highland-Rift axis and the Lake Victoria basin. Nairobi expanded from a city-proper population of roughly 295,2k in 1960AD and 509k in 1969 to 4,4M in the 2019 KNBS census, while its metropolitan agglomeration reached 15,95M in 2025AD (spillover into neighbouring Kiambu pushed Kiambu County to 3,63M at 1.409,17 persons/km²) [@KNBS2019KenyaCensus; @Madhavan2018MeasuringExtended]. Rapid rural-to-urban migration filled informal settlements such as Kibera, Mathare and Korogocho, where longitudinal demographic studies document high residential mobility, precarious transition to adulthood and elevated infant survival risks compared with established estates [@Clark2013TransitionsAdulthood; @Madhavan2018MeasuringExtended; @Kathare2024TheRole]. Outside the capital, Mombasa anchored the Indian Ocean coast (2,13M agglomeration), Nakuru grew into the primary Rift Valley metropolis (2,31M in 2025AD; 2,67M county), Eldoret led Uasin Gishu (1,79M county) and Kisumu anchored western Kenya (397.957 city-proper in 2019; 1,44M county; 17,56M in the wider Lake Victoria Africapolis conurbation) [@KNBS2019KenyaCensus; @OECD2024Africapolis]. The 2010 constitution and 2013 devolution into 47 county governments redirected fiscal transfers toward county capitals such as Embu, Kakamega, Bungoma (2,33M county, 823,28 persons/km²) and Kisii (901,91 persons/km²), reinforcing secondary-town growth [@Bank2012EastAfrican].

## Tanzania and Zanzibar: Union, Villagisation and Coastal Megacity Growth

Tanzania's post-colonial trajectory was shaped by the 1964 union of Tanganyika and Zanzibar, state-directed rural resettlement in the 1970s and rapid coastal urbanisation after 1990AD [@NBSTanzania2022Census; @Masanja2014RuralUrban]. Across the 25 mainland regions and two Zanzibar island divisions, gridded population expanded more than elevenfold from 5,77M in 1961AD (5,63M mainland and 134k Zanzibar) to 16,45M in 1976AD, 23,47M in 1991AD, 27,74M in 2000AD, 47,93M in 2015AD and 65,3M in 2025AD (64,41M mainland and 888,6k across Unguja and Pemba). Official NBS/OCGS enumerations closely bracket this curve, rising from 12,31M in 1967 (11,96M mainland, 354.360 Zanzibar) to 17,51M in 1978, 23,17M in 1988, 34,44M in 2002, 44,93M in 2012 and 61,74M in August 2022 [@NBSTanzania2022Census; @Susuman2016BioDemographic].

Between 1973 and 1976, the *Ujamaa* villagisation campaign (*Operesheni Vijiji*) relocated several million rural Tanzanians from dispersed homesteads into nucleated planned villages equipped with schools and dispensaries [@NBSTanzania2022Census; @Masanja2014RuralUrban]. Although villagisation disrupted agricultural output in some interior provinces, subsequent expansion of primary healthcare steadily reduced child mortality across mainland regions, while fertility declines remained slower in rural western and lake zones than in urban wards [@Susuman2016BioDemographic; @Masanja2014RuralUrban]. Meanwhile, Dar es Salaam transformed from a colonial port of roughly 159,5k in 1960AD into an Indian Ocean megacity of 1,36M in 1988, 5,38M municipal residents in the 2022 census and 6,89M across its metropolitan agglomeration in 2025AD (3.234,77 persons/km² inside Dar es Salaam Region, alongside 3,32M in neighbouring Pwani) [@NBSTanzania2022Census; @OECD2024Africapolis]. Secondary hubs grew vigorously around Lake Victoria at Mwanza (1,25M urban; 4,03M region) and Geita (3,34M region), in the northern highland corridor at Arusha (1,16M urban; 2,6M region), and in the central plateau at Dodoma (765,2k urban; 3,46M region) following the multi-decade transfer of national ministries and parliament from Dar es Salaam to Dodoma [@NBSTanzania2022Census; @Masanja2014RuralUrban]. On the islands, Zanzibar Town reached 840,1k by 2025AD, lifting Unguja to 558,5k (408,86 persons/km²) and Pemba to 330,1k (350,96 persons/km²).

## Uganda: Post-Independence Turmoil, Epidemic Shock and Metropolitan Belt

Uganda's demographic record exhibits the sharpest contrast between sustained high fertility and severe mid-epoch mortality and enumeration disruptions [@UBOS2024UgandaCensus; @Statistics2026UgandaNational]. Official UBOS censuses trace steady long-run growth from 6,54M in 1959 and 9,55M in 1969 to 12,64M in 1980, 16,67M in 1991, 24,23M in 2002, 34,63M in 2014 and 45,91M in May 2024 [@UBOS2024UgandaCensus; @Statistics2026UgandaMultidimensional]. By contrast, the gridded historical series across Uganda's four statistical regions dips from 6,19M in 1961AD and 7,7M in 1971AD down to 5,07M in 1991AD during the Amin, Obote II and Luwero conflict years before stepping up to 18,94M in 1995AD, 22,13M in 2000AD, 33,63M in 2015AD and 39,84M in 2025AD. During the 1970s and 1980s, political violence, the 1972 expulsion of the Asian commercial community, internal displacement and the early emergence of the HIV/AIDS epidemic in south-central districts around Rakai and Masaka severely depressed urban growth and raised adult mortality, leaving grandparents and older adults bearing heavy intergenerational childcare burdens [@Schatz2018IntergenerationalCare; @Nzabona2018CorrelatesYouth].

After 1986, macroeconomic stabilisation, antiretroviral expansion and persistently high rural fertility restored rapid demographic growth across all four regions [@UBOS2024UgandaCensus; @Statistics2026UgandaNational]. By 2025AD, the Eastern Region held 10,97M residents (344,47 persons/km²), the Western Region 10,53M (205,5 persons/km²), the Central Region 9,36M (231,36 persons/km²) and the Northern Region 8,98M (105,34 persons/km², absorbing both post-war returnees after 2006 and large refugee settlements from South Sudan). Youthful age structures drove intense internal migration toward the Kampala-Wakiso-Entebbe metropolitan belt: Kampala city-proper reached 1,8M in the 2024 UBOS census (with neighbouring Wakiso District alone enumerating 3,41M), while the continuous metropolitan agglomeration reached 6,11M in 2025AD [@UBOS2024UgandaCensus; @Nzabona2018CorrelatesYouth; @OECD2024Africapolis]. Secondary urban clusters expanded rapidly in Mbale (290,4k city-proper in 2024; 4,15M in the Mount Elgon Africapolis conurbation), Fort Portal (1,01M), Jinja (755,5k) and the DRC border town of Bunagana (1,49M cluster).

## Rwanda and Burundi: Highland Density, Genocide Rupture and Recovery

Rwanda and Burundi form the densest rural heartland in Sub-Saharan Africa, sharing small highland territories of 25.056 km² and 25.029 km² respectively [@Bank2017RwandaEconomic; @Verwimp2020ForcedDisplacement]. In Rwanda, pre-1994 growth lifted the gridded population from 2,03M in 1961AD to 4,5M in 1976AD and 6,59M in 1991AD, closely tracking NISR's 1978 (4,83M) and 1991 (7,15M) censuses [@Rutayisire2013RoleConflict; @Shipsey2022MakingThe]. Between April and July 1994, the genocide against the Tutsi and the accompanying mass flight of refugees into Zaire and Tanzania produced an immediate demographic rupture: the gridded series falls to 5,58M in 1995AD, with steep contractions across Southern (1,84M to 1,53M), Western (1,67M to 1,36M), Northern (1,44M to 1,18M) and Eastern (1,32M to 1,14M) provinces, while Kigali buffered inward displacement (317,4k to 363,9k).

Post-1994 refugee repatriation, *imidugudu* rural settlement regrouping, healthcare reform and later family-planning expansion drove a swift demographic rebound followed by a pronounced fertility transition [@Muhoza2022FertilityTransition; @Habyarimana2015AnalysisDemographic; @Bank2017RwandaEconomic]. NISR censuses rose from 8,13M in 2002 to 10,52M in 2012 and 13,25M in August 2022 (the gridded series stands at 11,35M in 2025AD), while rising age at marriage and delayed childbearing lowered total fertility steadily after 2005 [@Shipsey2022MakingThe; @Muhoza2022FertilityTransition]. By 2025AD, rural provincial densities remained extraordinary - 586,37 persons/km² in Northern Province, 452,79 in Western, 452,55 in Southern and 337,52 in Eastern - while Kigali expanded from 76,8k in 1961AD to 1,52M city-proper in 2022 (3,62M agglomeration in 2025AD; 1.328,77 persons/km² inside City of Kigali), supported by secondary hubs at Gisenyi (1,47M), Ruhango (944,2k) and Rubavu [@Bank2017RwandaEconomic; @OECD2024Africapolis].

Burundi followed a parallel trajectory of extreme rural crowding punctuated by recurrent political violence in 1972 and the 1993-2005 civil war [@Verwimp2020ForcedDisplacement]. Official enumerations recorded 4,03M in 1979, 5,29M in 1990 and 8,05M in 2008 before the 2024 census cycle, while longitudinal demographic research shows how forced displacement during the 1993-2005 war initially disrupted births and later raised fertility among displaced rural households [@Verwimp2020ForcedDisplacement]. In the gridded series, Burundi stands at 4,8M in 1976AD, dips to 4,22M in 1981AD, recovers to 5,5M in 1991AD and 7,51M in 2010AD, and registers 13,11M in 2025AD after an inflated 5,15M assignment to Bujumbura Mairie and Rural (5.467,31 persons/km²). Nationally, urban primacy remained anchored along Lake Tanganyika in Bujumbura (497,2k city-proper in 2008; 2,25M agglomeration in 2025AD), complemented by the central highland plateau around Gitega (1.175,48 persons/km² in 2025AD, reinstated as political capital in 2019) and Rumonge (965,05 persons/km²), as well as dense northern hillside clusters around Kayanza (3,86M Africapolis conurbation), Muyinga and Kirundo [@OECD2024Africapolis; @Hayashi2007LongTerm].

## Leading Urban Centres and Spatial Density Contrasts

Table \ref{tab:top-centres} lists the 20 largest assessed urban entries in the chapter ledger alongside their scope, chronological span and peak populations. Reading municipal city-proper records alongside metropolitan agglomerations clarifies East Africa's urban hierarchy: Dar es Salaam (5,38M municipal, 6,89M metro), Nairobi (4,4M municipal, 15,95M metro), Kampala (1,8M municipal, 6,11M metro), Kigali (1,52M municipal, 3,62M metro) and Bujumbura (497,2k municipal, 2,25M metro) form the five statutory capital anchors, joined across the Lake Kivu frontier by Goma (1,77M) and Bukavu (1,48M) in eastern Democratic Republic of the Congo [@KNBS2019KenyaCensus; @NBSTanzania2022Census; @UBOS2024UgandaCensus; @OECD2024Africapolis].

<figure class="crd-table-figure" id="tab:top-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Polity</th><th class="crd-th">Scope</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Year</th><th class="crd-th">Obs</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kisumu</strong></td><td class="crd-td">Kenya</td><td class="crd-td">City</td><td class="crd-td">1960-2025</td><td class="crd-td">17,56M</td><td class="crd-td">2025AD</td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>Nairobi (Agglomeration)</strong></td><td class="crd-td">Kenya</td><td class="crd-td">Metro</td><td class="crd-td">1960-2025</td><td class="crd-td">15,95M</td><td class="crd-td">2025AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Dar es Salaam (Agglomeration)</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">Metro</td><td class="crd-td">1960-2025</td><td class="crd-td">6,89M</td><td class="crd-td">2025AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Kampala (Agglomeration)</strong></td><td class="crd-td">Uganda</td><td class="crd-td">Metro</td><td class="crd-td">1960-2025</td><td class="crd-td">6,11M</td><td class="crd-td">2025AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Dar es Salaam</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">City</td><td class="crd-td">1960-2022</td><td class="crd-td">5,38M</td><td class="crd-td">2022AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Embu</strong></td><td class="crd-td">Kenya</td><td class="crd-td">City</td><td class="crd-td">1969-2020</td><td class="crd-td">4,46M</td><td class="crd-td">2020AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Nairobi</strong></td><td class="crd-td">Kenya</td><td class="crd-td">City</td><td class="crd-td">1960-2019</td><td class="crd-td">4,4M</td><td class="crd-td">2019AD</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Mbale</strong></td><td class="crd-td">Uganda</td><td class="crd-td">City</td><td class="crd-td">1960-2025</td><td class="crd-td">4,15M</td><td class="crd-td">2025AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Kayanza (Agglomeration)</strong></td><td class="crd-td">Burundi</td><td class="crd-td">Metro</td><td class="crd-td">1990-2025</td><td class="crd-td">3,86M</td><td class="crd-td">2025AD</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Kigali (Agglomeration)</strong></td><td class="crd-td">Rwanda</td><td class="crd-td">Metro</td><td class="crd-td">1950-2025</td><td class="crd-td">3,62M</td><td class="crd-td">2025AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Nakuru</strong></td><td class="crd-td">Kenya</td><td class="crd-td">City</td><td class="crd-td">1960-2025</td><td class="crd-td">2,31M</td><td class="crd-td">2025AD</td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>Bujumbura (Agglomeration)</strong></td><td class="crd-td">Burundi</td><td class="crd-td">Metro</td><td class="crd-td">1960-2025</td><td class="crd-td">2,25M</td><td class="crd-td">2025AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Mombasa (Agglomeration)</strong></td><td class="crd-td">Kenya</td><td class="crd-td">Metro</td><td class="crd-td">1960-2025</td><td class="crd-td">2,13M</td><td class="crd-td">2025AD</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Kampala</strong></td><td class="crd-td">Uganda</td><td class="crd-td">City</td><td class="crd-td">1960-2024</td><td class="crd-td">1,8M</td><td class="crd-td">2024AD</td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>Goma</strong></td><td class="crd-td">DR Congo</td><td class="crd-td">City</td><td class="crd-td">1960-2025</td><td class="crd-td">1,77M</td><td class="crd-td">2025AD</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Kigali</strong></td><td class="crd-td">Rwanda</td><td class="crd-td">City</td><td class="crd-td">1948-2022</td><td class="crd-td">1,52M</td><td class="crd-td">2022AD</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Bunagana</strong></td><td class="crd-td">Uganda</td><td class="crd-td">City</td><td class="crd-td">2010-2025</td><td class="crd-td">1,49M</td><td class="crd-td">2025AD</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Bukavu</strong></td><td class="crd-td">DR Congo</td><td class="crd-td">City</td><td class="crd-td">1960-2025</td><td class="crd-td">1,48M</td><td class="crd-td">2025AD</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Gisenyi</strong></td><td class="crd-td">Rwanda</td><td class="crd-td">City</td><td class="crd-td">1978-2025</td><td class="crd-td">1,47M</td><td class="crd-td">2025AD</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Mwanza</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">City</td><td class="crd-td">1960-2025</td><td class="crd-td">1,25M</td><td class="crd-td">2025AD</td><td class="crd-td">14</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Twenty largest urban settlements and metropolitan agglomerations in the Post-Colonial East Africa ledger (1961AD to 2025AD).</figcaption>
</figure>

In sharp contrast to these dense metropolitan cores and interlacustrine highlands, semi-arid northern and eastern counties retained sparse densities even after rapid percentage growth since 1961AD. Marsabit (72.795 km², 7,53 persons/km² in 2025AD), Tana River (10,6 persons/km²), Turkana (15,68 persons/km²), Wajir (16,03 persons/km²) and Garissa (21,53 persons/km²) in Kenya, together with Lindi (19,79 persons/km²) and Katavi (28,31 persons/km²) in Tanzania, exhibit densities two orders of magnitude below Nairobi, Bujumbura, Kigali or Kiambu [@KNBS2019KenyaCensus; @NBSTanzania2022Census].

# Limitations

Three structural constraints govern these reconstructions. First, morphological urban agglomeration definitions diverge sharply from statutory municipal boundaries in densely farmed highland and lakeside belts. Africapolis merges contiguous rural-urban settlements within 300-metre building buffers into vast conurbations - assigning 17,56M to the Kisumu cluster, 4,46M to Embu in 2020AD, 4,15M to Mbale and 3,86M to Kayanza in 2025AD - whereas municipal census divisions record 397.957 in Kisumu (2019), 64.979 in Embu (2019) and 290.414 in Mbale (2024) [@OECD2024Africapolis; @KNBS2019KenyaCensus; @UBOS2024UgandaCensus]. Users must therefore distinguish city-proper administrative headcounts from morphological conurbation totals when comparing urban ranks.

Second, historical census discontinuities and raster-epoch transitions create step changes in specific national sub-series. Uganda's gridded sum contracts between 1971AD (7,7M) and 1991AD (5,07M) before jumping to 18,94M in 1995AD when modern UBOS-reconciled surfaces begin, understating Uganda's true population during the 1980s [@UBOS2024UgandaCensus]. Similarly, Burundi's 1961AD-1966AD step (1,68M to 5,18M) and 2020AD-2025AD leap (7,3M to 13,11M, driven by 5,15M in Bujumbura Mairie and Rural) reflect archival baseline shifts and 2025 urban-cluster allocation rather than natural increase alone [@Verwimp2020ForcedDisplacement].

Third, five-arcminute grid resolution and rectangular bounding windows affect small coastal divisions and peripheral frontiers. On the Kenyan coast, Mombasa County's narrow island-and-creek geometry spans only 85,7 km² of land pixels (81,8k in 2025AD), shifting most of Mombasa's 2,13M agglomeration onto adjacent coastal cells, while Zanzibar (2.306,6 km²) captures 888,6k across two island cells relative to OCGS's 1,89M 2022 census count [@NBSTanzania2022Census; @Runfola2020GeoBoundaries]. Conversely, 145 settlement records in eastern DR Congo, northern Malawi, Zambia, South Sudan, Somalia, Ethiopia and Mozambique fall inside the chapter bounding rectangle but outside the 100-unit territorial area sum.

# Conclusion

Between 1961AD and 2025AD, post-colonial East Africa expanded eightfold from 22,13M to 182,78M inhabitants across 1.743.957 km². Far from a single uniform boom, regional population growth followed five distinct national pathways: Kenya's post-1979 fertility transition and 47-county devolution around Nairobi; Tanzania's *Ujamaa* villagisation and coastal megacity growth around Dar es Salaam alongside Dodoma and Zanzibar; Uganda's recovery from 1971-1986 turmoil and HIV/AIDS mortality into youthful expansion across the Kampala-Wakiso belt; Rwanda's post-1994 reconstruction and fertility transition amid extreme highland density; and Burundi's conflict-punctuated crowding between Bujumbura and Gitega. By uniting 1.880 assessed urban records with 100 admin-1 census series, NICETHI provides a continuous quantitative synthesis of contemporary East African demography.

# Appendix

## Leading Sub-Regions and Regime 3 Benchmark Units

Table \ref{tab:top-subregions} documents the 18 most populous first-level administrative units in 2025AD across Uganda, Kenya, Tanzania, Rwanda and Burundi, while Table \ref{tab:hgis-units} records the 24 Regime 3 historical GIS polygon frames from 1960AD and 2000AD used to reconcile colonial and post-independence boundary revisions.

<figure class="crd-table-figure" id="tab:top-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Area (km²)</th><th class="crd-th">1961AD</th><th class="crd-th">1976AD</th><th class="crd-th">1991AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Density (2025)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Eastern Region (UGA)</strong></td><td class="crd-td">31.846</td><td class="crd-td">2,06M</td><td class="crd-td">2,36M</td><td class="crd-td">1,67M</td><td class="crd-td">5,88M</td><td class="crd-td">10,97M</td><td class="crd-td">344,5</td></tr>
<tr><td class="crd-td"><strong>Western Region (UGA)</strong></td><td class="crd-td">51.252</td><td class="crd-td">1,66M</td><td class="crd-td">1,91M</td><td class="crd-td">1,31M</td><td class="crd-td">5,76M</td><td class="crd-td">10,53M</td><td class="crd-td">205,5</td></tr>
<tr><td class="crd-td"><strong>Central Region (UGA)</strong></td><td class="crd-td">40.438</td><td class="crd-td">1,16M</td><td class="crd-td">1,12M</td><td class="crd-td">1,12M</td><td class="crd-td">5,64M</td><td class="crd-td">9,36M</td><td class="crd-td">231,4</td></tr>
<tr><td class="crd-td"><strong>Northern Region (UGA)</strong></td><td class="crd-td">85.241</td><td class="crd-td">1,32M</td><td class="crd-td">1,39M</td><td class="crd-td">975k</td><td class="crd-td">4,86M</td><td class="crd-td">8,98M</td><td class="crd-td">105,3</td></tr>
<tr><td class="crd-td"><strong>Bujumbura Mairie and Rural (BDI)</strong></td><td class="crd-td">943</td><td class="crd-td">142,8k</td><td class="crd-td">560k</td><td class="crd-td">912,7k</td><td class="crd-td">783,6k</td><td class="crd-td">5,15M</td><td class="crd-td">5.467,3</td></tr>
<tr><td class="crd-td"><strong>Dar es Salaam (TZA)</strong></td><td class="crd-td">1.449</td><td class="crd-td">120,8k</td><td class="crd-td">620,1k</td><td class="crd-td">1,37M</td><td class="crd-td">2,06M</td><td class="crd-td">4,69M</td><td class="crd-td">3.234,8</td></tr>
<tr><td class="crd-td"><strong>Mwanza (TZA)</strong></td><td class="crd-td">14.152</td><td class="crd-td">452,7k</td><td class="crd-td">1,04M</td><td class="crd-td">1,36M</td><td class="crd-td">1,35M</td><td class="crd-td">4,03M</td><td class="crd-td">285,1</td></tr>
<tr><td class="crd-td"><strong>Tabora (TZA)</strong></td><td class="crd-td">75.920</td><td class="crd-td">226,6k</td><td class="crd-td">748,5k</td><td class="crd-td">1,15M</td><td class="crd-td">1,59M</td><td class="crd-td">3,8M</td><td class="crd-td">50,1</td></tr>
<tr><td class="crd-td"><strong>Kiambu (KEN)</strong></td><td class="crd-td">2.576</td><td class="crd-td">302,1k</td><td class="crd-td">844,2k</td><td class="crd-td">1,54M</td><td class="crd-td">2,03M</td><td class="crd-td">3,63M</td><td class="crd-td">1.409,2</td></tr>
<tr><td class="crd-td"><strong>Morogoro (TZA)</strong></td><td class="crd-td">70.236</td><td class="crd-td">192,8k</td><td class="crd-td">886,3k</td><td class="crd-td">1,32M</td><td class="crd-td">1,66M</td><td class="crd-td">3,57M</td><td class="crd-td">50,8</td></tr>
<tr><td class="crd-td"><strong>Dodoma (TZA)</strong></td><td class="crd-td">42.016</td><td class="crd-td">359,3k</td><td class="crd-td">917,9k</td><td class="crd-td">1,32M</td><td class="crd-td">1,62M</td><td class="crd-td">3,46M</td><td class="crd-td">82,3</td></tr>
<tr><td class="crd-td"><strong>Nairobi (KEN)</strong></td><td class="crd-td">773</td><td class="crd-td">76,5k</td><td class="crd-td">465,6k</td><td class="crd-td">881,3k</td><td class="crd-td">1,4M</td><td class="crd-td">3,36M</td><td class="crd-td">4.354,5</td></tr>
<tr><td class="crd-td"><strong>Kagera (TZA)</strong></td><td class="crd-td">27.115</td><td class="crd-td">406,3k</td><td class="crd-td">1,1M</td><td class="crd-td">1,52M</td><td class="crd-td">1,87M</td><td class="crd-td">3,35M</td><td class="crd-td">123,5</td></tr>
<tr><td class="crd-td"><strong>Geita (TZA)</strong></td><td class="crd-td">20.574</td><td class="crd-td">142,8k</td><td class="crd-td">321,5k</td><td class="crd-td">557,6k</td><td class="crd-td">678,1k</td><td class="crd-td">3,34M</td><td class="crd-td">162,2</td></tr>
<tr><td class="crd-td"><strong>Pwani (TZA)</strong></td><td class="crd-td">32.281</td><td class="crd-td">162,6k</td><td class="crd-td">600k</td><td class="crd-td">860,8k</td><td class="crd-td">1,06M</td><td class="crd-td">3,32M</td><td class="crd-td">102,7</td></tr>
<tr><td class="crd-td"><strong>Eastern Province (RWA)</strong></td><td class="crd-td">9.526</td><td class="crd-td">341,3k</td><td class="crd-td">792,5k</td><td class="crd-td">1,32M</td><td class="crd-td">2,73M</td><td class="crd-td">3,22M</td><td class="crd-td">337,5</td></tr>
<tr><td class="crd-td"><strong>Tanga (TZA)</strong></td><td class="crd-td">26.678</td><td class="crd-td">238,1k</td><td class="crd-td">981,2k</td><td class="crd-td">1,35M</td><td class="crd-td">1,58M</td><td class="crd-td">2,84M</td><td class="crd-td">106,4</td></tr>
<tr><td class="crd-td"><strong>Southern Province (RWA)</strong></td><td class="crd-td">6.177</td><td class="crd-td">576,6k</td><td class="crd-td">1,3M</td><td class="crd-td">1,84M</td><td class="crd-td">3,15M</td><td class="crd-td">2,8M</td><td class="crd-td">452,5</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Eighteen most populous first-level administrative sub-regions in 2025AD, showing trajectories from 1961AD to 2025AD and end-epoch density (persons per km²).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:hgis-units">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Polity</th><th class="crd-th">Code</th><th class="crd-th">Administrative Unit</th><th class="crd-th">Area (km²)</th><th class="crd-th">Lineage Frame</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">KEN</td><td class="crd-td">KEN_EG_03</td><td class="crd-td">Northern Frontier Province</td><td class="crd-td">285.119</td><td class="crd-td">Lineage KEN 1950 1962 colonial provinces</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">UGA</td><td class="crd-td">UGA_L_002</td><td class="crd-td">Northern Region</td><td class="crd-td">84.794</td><td class="crd-td">Lineage UGA 1960</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">KEN</td><td class="crd-td">KEN_EG_04</td><td class="crd-td">Southern Province</td><td class="crd-td">84.538</td><td class="crd-td">Lineage KEN 1950 1962 colonial provinces</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">KEN</td><td class="crd-td">KEN_EG_02</td><td class="crd-td">Coast Province</td><td class="crd-td">81.956</td><td class="crd-td">Lineage KEN 1950 1962 colonial provinces</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">KEN</td><td class="crd-td">KEN_EG_06</td><td class="crd-td">Rift Valley Province</td><td class="crd-td">70.201</td><td class="crd-td">Lineage KEN 1950 1962 colonial provinces</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">UGA</td><td class="crd-td">UGA_L_003</td><td class="crd-td">Western Region</td><td class="crd-td">50.579</td><td class="crd-td">Lineage UGA 1960</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">UGA</td><td class="crd-td">UGA_L_000</td><td class="crd-td">Central Region</td><td class="crd-td">39.575</td><td class="crd-td">Lineage UGA 1960</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">UGA</td><td class="crd-td">UGA_L_001</td><td class="crd-td">Eastern Region</td><td class="crd-td">30.715</td><td class="crd-td">Lineage UGA 1960</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">KEN</td><td class="crd-td">KEN_EG_05</td><td class="crd-td">Nyanza Province</td><td class="crd-td">25.548</td><td class="crd-td">Lineage KEN 1950 1962 colonial provinces</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">KEN</td><td class="crd-td">KEN_EG_01</td><td class="crd-td">Central Province</td><td class="crd-td">25.093</td><td class="crd-td">Lineage KEN 1950 1962 colonial provinces</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">ZNZ</td><td class="crd-td">TANG_07</td><td class="crd-td">Zanzibar Protectorate</td><td class="crd-td">2.013</td><td class="crd-td">Tanganyika Colonial 1960</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">KEN</td><td class="crd-td">KEN_EG_00</td><td class="crd-td">Nairobi Extra-Provincial District</td><td class="crd-td">1.634</td><td class="crd-td">Lineage KEN 1950 1962 colonial provinces</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">KEN</td><td class="crd-td">KEN_EG_06</td><td class="crd-td">Rift Valley</td><td class="crd-td">173.203</td><td class="crd-td">Lineage KEN 1963 2012 eight provinces</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">KEN</td><td class="crd-td">KEN_EG_03</td><td class="crd-td">Eastern</td><td class="crd-td">153.546</td><td class="crd-td">Lineage KEN 1963 2012 eight provinces</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">KEN</td><td class="crd-td">KEN_EG_04</td><td class="crd-td">North Eastern</td><td class="crd-td">129.000</td><td class="crd-td">Lineage KEN 1963 2012 eight provinces</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">TZA</td><td class="crd-td">TZA_L_000</td><td class="crd-td">Arusha</td><td class="crd-td">83.888</td><td class="crd-td">Lineage TZA 2000</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">UGA</td><td class="crd-td">UGA_L_002</td><td class="crd-td">Northern Region</td><td class="crd-td">84.794</td><td class="crd-td">Lineage UGA 2000</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">KEN</td><td class="crd-td">KEN_EG_02</td><td class="crd-td">Coast</td><td class="crd-td">81.870</td><td class="crd-td">Lineage KEN 1963 2012 eight provinces</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">TZA</td><td class="crd-td">TZA_L_020</td><td class="crd-td">Tabora</td><td class="crd-td">76.155</td><td class="crd-td">Lineage TZA 2000</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">TZA</td><td class="crd-td">TZA_L_015</td><td class="crd-td">Rukwa</td><td class="crd-td">66.444</td><td class="crd-td">Lineage TZA 2000</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">TZA</td><td class="crd-td">TZA_L_010</td><td class="crd-td">Morogoro</td><td class="crd-td">70.664</td><td class="crd-td">Lineage TZA 2000</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">TZA</td><td class="crd-td">TZA_L_007</td><td class="crd-td">Lindi</td><td class="crd-td">66.496</td><td class="crd-td">Lineage TZA 2000</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">TZA</td><td class="crd-td">TZA_L_016</td><td class="crd-td">Ruvuma</td><td class="crd-td">63.146</td><td class="crd-td">Lineage TZA 2000</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">TZA</td><td class="crd-td">TZA_L_009</td><td class="crd-td">Mbeya</td><td class="crd-td">59.919</td><td class="crd-td">Lineage TZA 2000</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Twenty-four representative Regime 3 historical GIS administrative polygon frames from 1960AD and 2000AD overlapping the East African study domain.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Era labels in prose and tables use 1961AD through 2025AD to maintain uniform notation across NICETHI volumes; month-year historical dates omit the era suffix. Territorial totals sum strictly across the 100 geoBoundaries Admin-1 polygons of Kenya, Tanzania (including Zanzibar), Uganda, Rwanda and Burundi, whereas the 1.880-entry settlement ledger retains 145 border-zone towns inside the chapter's rectangular geographic frame and distinguishes city-proper counts from Africapolis metropolitan agglomerations.
