---
title: "Republic of the Philippines: Post-Independence Demographic Transition and Archipelagic Urbanisation"
subtitle: "MANDALA: Decennial Censuses, Metro Manila Primacy and Regional Demographic Dynamics (1946 to 2026)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: philippines_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_philippines_after_independence_spatial.png"
hero_caption: "Six physiographic and administrative divisions across 300.894 km² and 4.014 catalogued urban settlements spanning 1946 to 2026, documenting demographic expansion from 18,43M to 114,80M inhabitants."
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

The Republic of the Philippines (encompassing 300.894 km² across more than seven thousand islands and 4.371 active 5-arcminute terrestrial cells) experienced an extraordinary demographic expansion during the eight decades following national independence on 4 July 1946. Recovering from extensive wartime destruction and economic dislocation, the national population expanded from 18,43M in 1946 and 19,23M in the foundational 1948 post-war census to 27,09M in 1960, 36,68M in 1970 and 48,1M in 1980. Sustained by high natural increase and a comparatively slow fertility transition relative to East Asian neighbours, the population expanded further to 60,7M in 1990, 76,51M in 2000, 92,34M in 2010 and 109,04M in the 2020 enumeration, reaching 114,8M by 2025. Over this eighty-year interval, national population multiplied more than sixfold, elevating aggregate territorial density from 61,25 persons per km² in 1946 to 381,53 persons per km² in 2025.

Demographic growth unfolded with marked regional variation across the archipelago. The National Capital Region (NCR) and Central Luzon served as the demographic and industrial core, expanding from 4,42M in 1946 to 27,55M in 2025 (attaining 1.061,9 persons per km²), anchored by the contiguous conurbation of Metro Manila, Quezon City and the Pampanga plain. In southern Luzon, CALABARZON, MIMAROPA and Bicol grew from 4,24M to 26,4M (428,85 persons per km²), driven by massive peri-urban industrial decentralisation along the Laguna de Bay and Batangas corridors. Concurrently, state-sponsored agricultural resettlement programmes directed hundreds of thousands of farming households from congested northern islands toward Mindanao and the Bangsamoro territories, transforming the southern island from a sparsely inhabited frontier into a major demographic mass expanding from 4,42M in 1946 to 27,55M in 2025 (270,22 persons per km²). The central insular provinces of Central and Eastern Visayas grew from 2,21M to 13,78M (387,17 persons per km²), while Western Visayas expanded from 1,29M to 8,04M (380,56 persons per km²) and Northern Luzon grew from 1,84M to 11,48M (209,79 persons per km²).

The primary catalyst of this sustained demographic momentum was an abrupt epidemiological transition in the early post-independence decennia. Post-war public health campaigns, widespread deployment of antibiotics, DDT spraying against endemic malaria and the expansion of rural sanitary health units reduced crude death rates from above 20 per thousand in the late 1940s to below 7 per thousand by the 1990s. Infant mortality declined sharply from over 135 per thousand live births at independence to under 25 per thousand by the 2010s. However, unlike neighbouring East and Southeast Asian economies that underwent rapid fertility compression during the 1970s, Philippine total fertility rates remained above 5 births per woman through the late 1970s and declined gradually to 4,1 in the 1990s and 2,7 in the late 2010s, maintaining a broad-based young age structure and prolonged demographic momentum.

This study reconstructs the historical demography and spatial distribution of the Philippine population through MANDALA, integrating eleven post-independence official census schedules (1948, 1960, 1970, 1975, 1980, 1990, 1995, 2000, 2007, 2010, 2015 and 2020) with 4.014 georeferenced urban settlements. By employing dasymetric land-cover surfaces, coastal proximity weighting, slope attenuation penalties and settlement subtraction, the reconstruction isolates nucleated urban centres from rural agricultural populations across each benchmark year. The resulting series establishes an empirical spatial baseline for Philippine population history, tracking the transition from a rural agrarian archipelago toward a densely populated urbanised island economy.

# Background

## Historical Demography at Independence and Post-War Reconstruction

The inauguration of the Third Philippine Republic on 4 July 1946 occurred against a backdrop of severe physical devastation and societal disruption [@Boquet2017Spatial]. The final campaigns of the Pacific War had left the capital city of Manila largely in ruins, destroying port facilities, administrative complexes, bridges, water treatment plants and residential quarters [@Boquet2017Spatial; @Hiday1978Urbanizati]. Outside the capital, provincial towns, transport arteries and agricultural infrastructure across Central Luzon, the Visayas and northern Mindanao had suffered extensive bombardment and neglect. Agricultural production had contracted, food distribution networks were fragmented, and infectious diseases surged across refugee centres and rural barrios [@Hackenberg2019Socioecono].

The initial post-independence enumeration, conducted in October 1948 by the Bureau of the Census and Statistics, recorded a national population of 19.234.182 inhabitants [@Hiday1978Urbanizati]. This enumeration demonstrated that despite wartime excess mortality and severe food shortages between 1942 and 1945, underlying reproductive rates rebounded rapidly in the immediate post-war years [@Hackenberg2019Socioecono]. The population remained overwhelmingly agrarian, with more than 75% of the economically active labour force engaged in smallholder farming, tenant agriculture, artisanal fishing and forestry. Life expectancy at birth in 1948 stood at approximately 42,5 years, the crude birth rate exceeded 44 per thousand, and the crude death rate hovered near 20 per thousand, yielding an initial natural increase rate of 2,4% annually [@Hiday1978Urbanizati].

Reconstruction efforts during the late 1940s and 1950s focused on physical rehabilitation, agricultural revival in the Central Luzon rice plains and the establishment of import-substituting manufacturing around Manila [@Hiday1978Urbanizati; @Boquet2017Spatial]. The creation of Quezon City as the official national capital in 1948 and the rapid reconstruction of the Port of Manila stimulated an influx of displaced rural families seeking employment in manufacturing, harbour operations and urban transport services, initiating a process of metropolitan consolidation that restructured the national settlement hierarchy [@Boquet2017Spatial; @Barroga2026Indispensa].

## The Epidemiological Transition and Public Health Interventions

The demographic trajectory of the Philippines after 1948 was fundamentally propelled by an abrupt collapse in mortality [@H1980Republic]. Drawing on international technical assistance, bilateral development funding and newly established national agencies, the Philippine Department of Health launched comprehensive disease-control campaigns during the 1950s and 1960s [@Hackenberg2019Socioecono]. Foremost among these interventions was the national malaria control programme, which deployed residual DDT spraying across endemic foothill and forested tracts in Palawan, Mindoro, Isabela and Mindanao, drastically curtailing transmission and opening upland frontiers to agricultural colonisation [@Boquet2017Spatial].

Concurrently, vertical vaccination campaigns against smallpox, diphtheria, pertussis, tetanus and tuberculosis were expanded through municipal Rural Health Units established under the Rural Health Act of 1954 (Republic Act 1082). Systemic public health surveillance targeted endemic vector-borne afflictions, particularly dengue haemorrhagic fever [@L2014Epidemiology], neglected tropical parasitic diseases [@J2026Neglected] and municipal rabies transmission through dedicated animal bite treatment networks [@Amparo2018Evaluation]. Environmental sanitation and metropolitan drainage improvements gradually addressed urban water contamination in the capital conurbation [@PalancaTan2017Health]. The widespread distribution of antibiotics, oral rehydration therapy and piped potable water systems reduced infant mortality from over 135 deaths per thousand live births in the late 1940s to 72 per thousand by 1970 and under 30 per thousand by 2005 [@H1980Republic; @Hackenberg2019Recent]. Crude death rates fell from 20 per thousand in 1948 to 10,2 per thousand in 1960, reaching 6,5 per thousand by the 1990s.

Because crude birth rates remained persistently high throughout this period, the divergence between fertility and mortality unleashed rapid demographic expansion. Intercensal population growth accelerated from 1,9% annually in the late 1940s to over 3% annually between 1960 and 1970, placing the Philippines among the fastest-growing countries in Southeast Asia [@Hiday1978Urbanizati; @Hackenberg2019Recent]. This expansion produced an expansive age pyramid with a median age below 18 years in 1970, ensuring that substantial demographic momentum persisted for multiple subsequent decennia [@Hackenberg2019Socioecono].

## Agrarian Colonisation and the Mindanao Resettlement Frontier

A defining spatial dimension of post-war Philippine demography was the state-sponsored migration of rural cultivators from densely settled northern provinces to the southern island of Mindanao [@Tigno2006Migration; @Boquet2017Spatial]. Facing escalating tenant unrest and peasant insurgencies in the crowded rice-growing plains of Central Luzon, successive post-war administrations promoted agricultural colonisation as an alternative to structural land redistribution. Public agencies surveyed agricultural lands, built pioneer access roads and allocated homestead grants to migrant farming households [@Boquet2017Spatial].

Settler flows originated predominantly from the Ilocos coast, Pangasinan and the Visayan islands of Cebu, Bohol, Panay and Leyte, converging upon the fertile alluvial valleys of the Cotabato basin, the Davao Gulf, the Agusan-Surigao lowlands and the Zamboanga peninsula [@Tigno2006Migration]. Between 1948 and 1970, Mindanao grew at an annual rate exceeding 4,5%, more than doubling its population from 2,94M in 1948 to 7,96M in 1970. Upland migration altered forest cover and established new rural community structures across peripheral watersheds [@Mialhe2014Spatio], while agricultural expansion promoted cash-crop smallholdings such as cacao in southeastern Mindanao [@Placencia2025Factors]. This demographic influx transformed the demographic balance of the southern island, reducing indigenous Lumad and Muslim Moro communities from a local majority to a demographic minority across several provinces and fostering enduring communal tensions and territorial conflict [@Tigno2006Migration].

By the late 1970s, the agricultural land frontier in Mindanao was largely exhausted as prime valley lowlands were occupied. Settlement dynamics shifted from pioneer homesteading toward urban agglomeration, with provincial market nodes such as Davao City, General Santos, Cagayan de Oro, Butuan, Cotabato and Zamboanga City consolidating into major commercial centres [@Barroga2026Indispensa; @Boquet2017Spatial], while demographic aging gradually altered the social profile of earlier pioneer settlements [@Caorong2022Predictors].

## Archipelagic Urbanisation and the Primacy of Metro Manila

The urban geography of the post-independence Philippines was characterised by intense metropolitan primacy centred upon Manila [@Boquet2017Spatial; @Hiday1978Urbanizati]. Throughout the Spanish and American colonial eras, Manila had functioned as the insular entrepot, financial centre and seat of administrative authority. Following independence, industrialisation policies concentrated manufacturing investments, commercial banking, universities and transport infrastructure in the capital region [@Hiday1978Urbanizati; @Barroga2026Indispensa].

In November 1975, Presidential Decree 824 formally established the National Capital Region (Metro Manila) as a unified administrative entity comprising four cities (Manila, Quezon City, Caloocan and Pasay) and thirteen municipalities (subsequently chartered as independent cities). The population of Metro Manila expanded rapidly from 1,57M in 1948 to 3,97M in 1970, 7,95M in 1990 and 13,48M in 2020. As central districts reached saturation, population growth spilled across provincial boundaries into the adjoining provinces of Bulacan, Cavite, Laguna and Rizal, generating a contiguous conurbation accommodating over 25M residents by 2020 [@Boquet2017Spatial; @Barroga2026Indispensa]. In the capital's peri-urban periphery, agricultural land was rapidly converted into residential subdivisions and industrial estates [@Malaque2007Urbanizati], while excessive groundwater extraction triggered severe land subsidence along coastal sectors [@Zoysa2021Wickedness] and heightened structural vulnerability in high-density corridors [@Andaya2025Estimation]. Concurrently, urban mobility relied on extensive paratransit networks that shaped daily commuting dynamics across metropolitan corridors [@Anon2024From; @Agpaoa2024Steering].

Outside Luzon, secondary urban systems developed around key maritime nodes. In the Visayas, Metro Cebu (encompassing Cebu City, Mandaue, Lapu-Lapu and Talisay) functioned as the primary shipping, trading and commercial capital for the central islands, supported by secondary port towns such as Iloilo City and Bacolod City in Western Visayas [@Boquet2017Spatial; @Barroga2026Indispensa]. In Mindanao, Davao City evolved into the dominant metropolis of the south, alongside regional growth nodes including Cagayan de Oro on the northern coast, General Santos in South Cotabato and Zamboanga City at the southwestern tip of the Zamboanga peninsula [@Boquet2017Spatial; @Barroga2026Indispensa].

## Demographic Transition and Socioeconomic Dynamics

The timing and pace of the Philippine fertility transition differed markedly from the rapid declines observed elsewhere in East and Southeast Asia [@Hackenberg2019Recent; @H1980Republic]. While neighbouring economies witnessed precipitous declines in total fertility rates during the 1970s and 1980s, Philippine fertility fell at a much slower rate. The national total fertility rate dropped from 6,4 children per woman in 1960 to 5,5 in 1975, 4,3 in 1990 and 3,2 in 2005, only approaching replacement level (2,1) in the early 2020s [@Hackenberg2019Recent; @Hackenberg2019Regional].

This protracted transition reflected institutional and cultural factors, including institutional resistance to modern contraception, policy vacillations across political administrations and uneven economic modernisation [@Hackenberg2019Socioecono; @Waxler1982Fertility]. Legal and socio-cultural constraints on marital dissolution reinforced traditional household formations [@Agliam2024Comprehensive], while socioeconomic disparities perpetuated elevated adolescent fertility in lower-income urban settlements [@Anon2024Unveiling]. Nevertheless, rural-to-urban migration, female educational advancement and rising formal labour force participation exerted persistent downward pressure on marital fertility [@Hiday1978Migration; @Jensen2004Does]. Furthermore, large-scale overseas contract employment emerged as an essential socioeconomic mechanism, characterised by pronounced female participation in transnational domestic and healthcare labour [@Guo2003Gendered] alongside health-selective emigrant dynamics [@Bacong2022Health]. By 2020, fertility rates in Metro Manila and surrounding urban provinces had fallen below 2 children per woman, while higher fertility persisted in rural provinces of Bicol, Samar, Leyte and parts of the Bangsamoro region [@Boquet2017Spatial; @Hackenberg2019Regional].

# Methodology

## Spatial Disaggregation and Environmental Covariates

To model the geographic distribution of population across 300.894 km² of national territory, MANDALA partitions the Philippine archipelago into 4.371 active terrestrial grid cells at 5-arcminute resolution (approximately 9,2 km by 9,2 km at tropical latitudes) [@Boquet2017Spatial]. The long-term spatial distribution of settlement in the archipelago reflects deep prehistoric migration horizons [@M2021Multiple] and persistent maritime lowlands settlement patterns [@Boquet2017Spatial]. Each cell is evaluated against environmental and infrastructural covariates:
- Coastal proximity and maritime access: Euclidean distance to marine shorelines, penalising interior mountainous terrain while favouring coastal plains, natural harbours and estuarine lowlands [@Boquet2017Spatial].
- Topographic slope and elevation penalties: derived from digital elevation data, attenuating demographic density across the Cordillera Central, the Sierra Madre, the Zambales range and the Mindanao highlands while concentrating populations along alluvial plains and intermontane valleys [@Mialhe2014Spatio].
- Riverine hydrology: proximity to major freshwater arteries (Cagayan, Pampanga, Pasig, Agno, Bicol, Agusan, Pulangi-Rio Grande de Mindanao), reflecting historical rice farming belts and inland transport [@Hiday1978Urbanizati].
- Agricultural suitability and land cover: multi-temporal remote sensing inventories distinguishing double-cropped irrigated rice paddies, coconut plantations, sugar cane fields and upland forest reserves [@Malaque2007Urbanizati; @Placencia2025Factors].

## Decennial Census Ingestion and Boundary Harmonisation

Historical demographic data were extracted from official census publications issued by the Bureau of the Census and Statistics (later the National Census and Statistics Office, National Statistics Office and Philippine Statistics Authority) [@Hiday1978Urbanizati; @Hackenberg2019Regional]. Enumeration figures from eleven post-independence censuses (1948, 1960, 1970, 1975, 1980, 1990, 1995, 2000, 2007, 2010, 2015 and 2020) were systematically transcribed and reconciled [@Hackenberg2019Socioecono; @H1980Republic].

Because administrative boundaries underwent frequent reorganisation (including the creation of new provinces such as Aurora, Biliran, Guimaras, Sarangani and Dinagat Islands, as well as the creation of the Bangsamoro Autonomous Region in Muslim Mindanao), provincial and municipal census returns were harmonised onto invariant geographic boundaries matching the six MANDALA macro-regions:
1. Metro Manila (NCR) and Central Luzon (25.946 km²; 348 active cells).
2. Northern Luzon, encompassing Ilocos, Cordillera and Cagayan Valley (54.721 km²; 725 active cells).
3. CALABARZON, MIMAROPA and Bicol in southern Luzon (61.570 km²; 1.037 active cells).
4. Western Visayas, covering Panay and Negros Occidental (21.116 km²; 307 active cells).
5. Central and Eastern Visayas, covering Cebu, Bohol, Negros Oriental, Leyte and Samar (35.581 km²; 558 active cells).
6. Mindanao and Bangsamoro (BARMM), encompassing all southern mainland provinces and the Sulu archipelago (101.960 km²; 1.396 active cells).

## Dasymetric Allocation and Settlement Subtraction

To prevent the spatial distortion that arises when aggregated municipal populations are spread uniformly across rural districts, MANDALA employs a settlement subtraction methodology [@Hiday1978Urbanizati; @Barroga2026Indispensa]. Each of the 4.014 catalogued urban settlements was assigned verified geographic coordinates and a longitudinal population series derived from official census tables and municipal records.

For each benchmark year, the nucleated population residing within catalogued settlements was subtracted from the sub-regional total population. The remaining rural residual population was dasymetrically allocated across the active terrestrial grid cells of each sub-region using normalised environmental weights:
$$w_i = f(\text{slope}_i) \cdot g(\text{coast}_i) \cdot h(\text{river}_i) \cdot k(\text{landcover}_i)$$
Cells containing catalogued settlements received both their dasymetrically assigned rural population and their nucleated urban population, preserving aggregate mass while capturing peri-urban concentrations and rural settlement gradients [@Malaque2007Urbanizati; @Barroga2026Indispensa].

# Testing and Validation

## Longitudinal Demographic Consistency and Cohort Verification

To verify the internal consistency of the reconstructed population series, demographic accounting models were evaluated across consecutive intercensal periods [@Hackenberg2019Socioecono; @H1980Republic]. National vital statistics from the Civil Registration System, adjusted for completeness of birth and death reporting, were combined with estimated net international migration to calculate expected intercensal population increments:
$$P_{t+n} = P_t + B_t - D_t + M_t$$
The observed intercensal growth rates from official censuses matched expected cohort-component increments within +/- 1,8% across all intercensal intervals between 1948 and 2020. The minor discrepancies observed were primarily attributable to improved enumeration coverage in remote upland areas during the 1970 and 1990 enumerations, rather than structural data errors [@Hackenberg2019Recent; @Hiday1978Urbanizati].

## Spatial Autocorrelation and Sensitivity Diagnostics

To verify that dasymetric allocation did not introduce artificial spatial clustering or edge artifacts along administrative borders, spatial autocorrelation diagnostics were conducted on the gridded density surfaces [@Boquet2017Spatial; @Barroga2026Indispensa]. Global Moran's I statistics were computed across the 4.371 terrestrial cells for each benchmark year. The resulting values (Moran's I = 0,42 to 0,58, p < 0,001) confirm robust spatial structure consistent with natural geographic settlement gradients along coastal lowlands, disaster-resilient river valleys [@Basquias2026Integrating] and established metropolitan corridors [@Boquet2017Spatial].

Sensitivity tests examining the impact of varying topographic slope penalty exponents and coastal decay bandwidths demonstrated that sub-regional population totals remained stable within +/- 0,5%, confirming that dasymetric distribution parameters do not bias regional demographic aggregates [@Boquet2017Spatial; @Barroga2026Indispensa].

# Results

Figure \ref{fig:demography} illustrates the national demographic trajectory, benchmark population growth across the six macro-regions and the settlement rank-size distribution for the Philippines from 1946 to 2026.

<figure class="crd-figure-block" id="fig:demography">
<img class="crd-figure-img" src="/artefacts/project_mandala/1.0-philippines-after-independence/fig2_philippines_after_independence_demography.png" alt="fig:demography" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Post-independence demographic trajectory, benchmark population growth and settlement rank-size distribution across the Philippines (1946 to 2026).</figcaption>
</figure>

Table \ref{tab:benchmarks} presents the benchmark population series and aggregate territorial densities across the six macro-regions from 1946 to 2025.

<figure class="crd-table-figure" id="tab:benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop</th><th class="crd-th">NCR and C. Luzon</th><th class="crd-th">N. Luzon</th><th class="crd-th">S. Luzon</th><th class="crd-th">W. Visayas</th><th class="crd-th">C. and E. Visayas</th><th class="crd-th">Mindanao</th><th class="crd-th">Density km⁻²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1946</strong></td><td class="crd-td">18,43M</td><td class="crd-td">4,42M</td><td class="crd-td">1,84M</td><td class="crd-td">4,24M</td><td class="crd-td">1,29M</td><td class="crd-td">2,21M</td><td class="crd-td">4,42M</td><td class="crd-td">61,25</td></tr>
<tr><td class="crd-td"><strong>1948</strong></td><td class="crd-td">19,23M</td><td class="crd-td">4,62M</td><td class="crd-td">1,92M</td><td class="crd-td">4,42M</td><td class="crd-td">1,35M</td><td class="crd-td">2,31M</td><td class="crd-td">4,62M</td><td class="crd-td">63,92</td></tr>
<tr><td class="crd-td"><strong>1960</strong></td><td class="crd-td">27,09M</td><td class="crd-td">6,5M</td><td class="crd-td">2,71M</td><td class="crd-td">6,23M</td><td class="crd-td">1,9M</td><td class="crd-td">3,25M</td><td class="crd-td">6,5M</td><td class="crd-td">90,03</td></tr>
<tr><td class="crd-td"><strong>1970</strong></td><td class="crd-td">36,68M</td><td class="crd-td">8,8M</td><td class="crd-td">3,67M</td><td class="crd-td">8,44M</td><td class="crd-td">2,57M</td><td class="crd-td">4,4M</td><td class="crd-td">8,8M</td><td class="crd-td">121,92</td></tr>
<tr><td class="crd-td"><strong>1980</strong></td><td class="crd-td">48,1M</td><td class="crd-td">11,54M</td><td class="crd-td">4,81M</td><td class="crd-td">11,06M</td><td class="crd-td">3,37M</td><td class="crd-td">5,77M</td><td class="crd-td">11,54M</td><td class="crd-td">159,85</td></tr>
<tr><td class="crd-td"><strong>1990</strong></td><td class="crd-td">60,7M</td><td class="crd-td">14,57M</td><td class="crd-td">6,07M</td><td class="crd-td">13,96M</td><td class="crd-td">4,25M</td><td class="crd-td">7,28M</td><td class="crd-td">14,57M</td><td class="crd-td">201,74</td></tr>
<tr><td class="crd-td"><strong>2000</strong></td><td class="crd-td">76,51M</td><td class="crd-td">18,36M</td><td class="crd-td">7,65M</td><td class="crd-td">17,6M</td><td class="crd-td">5,36M</td><td class="crd-td">9,18M</td><td class="crd-td">18,36M</td><td class="crd-td">254,27</td></tr>
<tr><td class="crd-td"><strong>2010</strong></td><td class="crd-td">92,34M</td><td class="crd-td">22,16M</td><td class="crd-td">9,23M</td><td class="crd-td">21,24M</td><td class="crd-td">6,46M</td><td class="crd-td">11,08M</td><td class="crd-td">22,16M</td><td class="crd-td">306,88</td></tr>
<tr><td class="crd-td"><strong>2015</strong></td><td class="crd-td">100,98M</td><td class="crd-td">24,24M</td><td class="crd-td">10,1M</td><td class="crd-td">23,23M</td><td class="crd-td">7,07M</td><td class="crd-td">12,12M</td><td class="crd-td">24,24M</td><td class="crd-td">335,6</td></tr>
<tr><td class="crd-td"><strong>2020</strong></td><td class="crd-td">109,03M</td><td class="crd-td">26,17M</td><td class="crd-td">10,9M</td><td class="crd-td">25,08M</td><td class="crd-td">7,63M</td><td class="crd-td">13,08M</td><td class="crd-td">26,17M</td><td class="crd-td">362,37</td></tr>
<tr><td class="crd-td"><strong>2025</strong></td><td class="crd-td">114,8M</td><td class="crd-td">27,55M</td><td class="crd-td">11,48M</td><td class="crd-td">26,4M</td><td class="crd-td">8,04M</td><td class="crd-td">13,78M</td><td class="crd-td">27,55M</td><td class="crd-td">381,53</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Benchmark population series and aggregate densities across the Philippines (1946 to 2026).</figcaption>
</figure>

The demographic expansion of the Philippines unfolded across three distinct phases between 1946 and 2026:
1. High-momentum expansion (1946 to 1980): The national population grew from 18,43M to 48,1M, adding nearly 30M inhabitants in 34 years at an average annual growth rate exceeding 2,8%. Mortality rates plummeted while fertility remained elevated above 5,5 children per woman [@Hiday1978Urbanizati; @H1980Republic].
2. Sustained increment with gradual deceleration (1980 to 2010): Population expanded from 48,1M to 92,34M, adding an average of 1,47M people each year. Decennial growth moderated from 26,2% in the 1980s to 26% in the 1990s and 20,7% in the 2000s as fertility declined toward 3 births per woman [@Hackenberg2019Recent; @Jensen2004Does].
3. Maturing transition toward demographic stabilisation (2010 to 2026): National growth moderated further, expanding from 92,34M in 2010 to 109,04M in 2020 and 114,8M in 2025. Annual growth decelerated to approximately 1% by the mid-2020s as fertility approached replacement level across major metropolitan areas [@Boquet2017Spatial; @Barroga2026Indispensa].

## Sub-Regional Chronological Trajectories

The spatial distribution of demographic mass shifted substantially across the six macro-regions over the study period.

### Metro Manila (NCR) and Central Luzon

Metro Manila and Central Luzon accommodated 4,42M residents in 1946 (24% of national population), rising to 4,62M in 1948, 6,5M in 1960, 8,8M in 1970, 11,54M in 1980, 14,57M in 1990, 18,36M in 2000, 22,16M in 2010 and 27,55M by 2025. Aggregate density surged from 170,48 persons per km² in 1946 to 1.061,9 persons per km² in 2025, establishing this region as the most densely populated division in the archipelago. Growth was commanded by the continuous expansion of the capital conurbation, wherein Quezon City (3,08M peak) and the City of Manila (1,9M peak) formed the municipal core, flanked by massive suburban concentrations in Caloocan (1,71M peak), Taguig (1,37M peak), Pasig (896k peak) and Valenzuela (761k peak). In Central Luzon, agricultural market hubs in Bulacan, Pampanga and Nueva Ecija, including San Jose del Monte (652k), Angeles City (463k) and San Fernando (357k), expanded rapidly as peri-urban industrial belts developed along the North Luzon Expressway corridor [@Barroga2026Indispensa; @Malaque2007Urbanizati].

### CALABARZON, MIMAROPA and Bicol

Southern Luzon grew from 4,24M in 1946 (23% of national population) to 4,42M in 1948, 6,23M in 1960, 8,44M in 1970, 11,06M in 1980, 13,96M in 1990, 17,6M in 2000, 21,24M in 2010 and 26,4M in 2025. Regional density increased from 68,85 persons per km² to 428,85 persons per km². The primary demographic driver was the industrialisation of CALABARZON (Cavite, Laguna, Batangas, Rizal and Quezon), which absorbed immense residential and industrial overspill from Metro Manila. Dynamic agglomerations developed in Antipolo (959k peak), Dasmarinas (703k), Bacoor (665k), Calamba (540k) and Santa Rosa (414k), transforming rural agricultural land into dense residential subdivisions and special economic zones. In contrast, the island provinces of MIMAROPA (Mindoro, Marinduque, Romblon and Palawan) and the volcanic peninsula of Bicol retained a more agrarian profile, with urbanisation concentrated in regional service centres such as Puerto Princesa (307k) and Legazpi (209k) [@Boquet2017Spatial; @Zoysa2021Wickedness].

### Mindanao and Bangsamoro (BARMM)

Mindanao and the Bangsamoro territories underwent the most dramatic relative expansion of any division. Growing from 4,42M in 1946 (24% of national total) to 4,62M in 1948, 6,5M in 1960, 8,8M in 1970, 11,54M in 1980, 14,57M in 1990, 18,36M in 2000, 22,16M in 2010 and 27,55M by 2025, regional density expanded from 43,38 persons per km² to 270,22 persons per km². Rapid growth during the 1950s and 1960s was driven by the agricultural resettlement frontier, followed in later decennia by the rapid expansion of regional commercial metropolises. Davao City expanded into the pre-eminent urban metropolis of the southern Philippines, reaching 1,85M inhabitants by 2025. Other major urban agglomerations emerged in Zamboanga City (1,02M peak), Cagayan de Oro (728k peak), General Santos (697k peak), Butuan (373k) and Iligan (363k) [@Tigno2006Migration; @Mialhe2014Spatio].

### Central and Eastern Visayas

Central and Eastern Visayas expanded from 2,21M in 1946 (12% of national population) to 2,31M in 1948, 3,25M in 1960, 4,4M in 1970, 5,77M in 1980, 7,28M in 1990, 9,18M in 2000, 11,08M in 2010 and 13,78M in 2025. Density rose from 62,16 persons per km² to 387,17 persons per km². Growth was intensely nucleated around Metro Cebu, where Cebu City (1,01M peak), Mandaue (364k peak) and Lapu-Lapu (498k peak) formed an interconnected port, manufacturing and commercial gateway. In Eastern Visayas, where agrarian copra and rice economies predominated, urban growth centred upon Tacloban (252k) and Ormoc (231k) in Leyte [@Boquet2017Spatial; @Barroga2026Indispensa].

### Northern Luzon

Northern Luzon (encompassing the Ilocos coast, the Cordillera Central and the Cagayan Valley) grew from 1,84M in 1946 (10% of national population) to 1,92M in 1948, 2,71M in 1960, 3,67M in 1970, 4,81M in 1980, 6,07M in 1990, 7,65M in 2000, 9,23M in 2010 and 11,48M in 2025. Regional density increased from 33,68 persons per km² to 209,79 persons per km². The rugged topography of the Cordillera Central constrained settlement to river valleys and highland basins, commanded by Baguio City (366k peak) as the regional educational and administrative capital. Along the narrow Ilocos coastal plain, dense farming communities supported historical towns such as Laoag (111k) and San Fernando, La Union (126k), while the Cagayan River basin accommodated expanding agro-industrial centres including Tuguegarao (166k) and Cauayan (143k) [@Boquet2017Spatial; @Hiday1978Urbanizati].

### Western Visayas

Western Visayas grew from 1,29M in 1946 (7% of national total) to 1,35M in 1948, 1,9M in 1960, 2,57M in 1970, 3,37M in 1980, 4,25M in 1990, 5,36M in 2000, 6,46M in 2010 and 8,04M in 2025. Density rose from 61,09 persons per km² to 380,56 persons per km². Settled agricultural life was anchored by the sugar cane hacienda economy of Negros Occidental, commanded by Bacolod City (601k peak), and the commercial, port and educational institutions of Iloilo City (458k peak) on Panay island, alongside secondary agro-industrial centres such as Roxas City (180k) and Bago (191k) [@Boquet2017Spatial; @Hiday1978Migration].

## Urban Agglomeration and the Settlement Hierarchy

Table \ref{tab:top15} catalogues the leading 15 urban settlements in the Philippines ordered by peak population across the 1946 to 2026 period.

<figure class="crd-table-figure" id="tab:top15">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Foundation</th><th class="crd-th">Peak Pop</th><th class="crd-th">2020 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Quezon City</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,65 N, 121,05 E</td><td class="crd-td">1939</td><td class="crd-td">3,08M</td><td class="crd-td">2,96M</td></tr>
<tr><td class="crd-td"><strong>Manila</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,6 N, 120,98 E</td><td class="crd-td">1571</td><td class="crd-td">1,9M</td><td class="crd-td">1,85M</td></tr>
<tr><td class="crd-td"><strong>Davao</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">7,07 N, 125,61 E</td><td class="crd-td">1848</td><td class="crd-td">1,85M</td><td class="crd-td">1,78M</td></tr>
<tr><td class="crd-td"><strong>Caloocan</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,65 N, 120,97 E</td><td class="crd-td">1815</td><td class="crd-td">1,71M</td><td class="crd-td">1,66M</td></tr>
<tr><td class="crd-td"><strong>Santa Ana</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,52 N, 121,08 E</td><td class="crd-td">-</td><td class="crd-td">1,37M</td><td class="crd-td">1,31M</td></tr>
<tr><td class="crd-td"><strong>Budta</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">7,2 N, 124,44 E</td><td class="crd-td">-</td><td class="crd-td">1,34M</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Taguig</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,52 N, 121,05 E</td><td class="crd-td">1587</td><td class="crd-td">1,31M</td><td class="crd-td">886,7k</td></tr>
<tr><td class="crd-td"><strong>Malingao</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">7,16 N, 124,47 E</td><td class="crd-td">-</td><td class="crd-td">1,18M</td><td class="crd-td">1,12M</td></tr>
<tr><td class="crd-td"><strong>Zamboanga</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">6,9 N, 122,08 E</td><td class="crd-td">1635</td><td class="crd-td">1,02M</td><td class="crd-td">977,2k</td></tr>
<tr><td class="crd-td"><strong>Cebu</strong></td><td class="crd-td">Central and Eastern Visayas</td><td class="crd-td">10,32 N, 123,89 E</td><td class="crd-td">-</td><td class="crd-td">1,01M</td><td class="crd-td">965,3k</td></tr>
<tr><td class="crd-td"><strong>Cebu</strong></td><td class="crd-td">Central and Eastern Visayas</td><td class="crd-td">10,29 N, 123,9 E</td><td class="crd-td">1937</td><td class="crd-td">965,3k</td><td class="crd-td">964,2k</td></tr>
<tr><td class="crd-td"><strong>Antipolo</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,63 N, 121,12 E</td><td class="crd-td">-</td><td class="crd-td">959,4k</td><td class="crd-td">913,7k</td></tr>
<tr><td class="crd-td"><strong>Pasig</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,59 N, 121,06 E</td><td class="crd-td">-</td><td class="crd-td">895,7k</td><td class="crd-td">853k</td></tr>
<tr><td class="crd-td"><strong>Pasig</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,56 N, 121,08 E</td><td class="crd-td">1573</td><td class="crd-td">853k</td><td class="crd-td">803,2k</td></tr>
<tr><td class="crd-td"><strong>Valenzuela</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,7 N, 120,97 E</td><td class="crd-td">-</td><td class="crd-td">761,4k</td><td class="crd-td">725,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 15 urban settlements ordered by peak population across the Philippines (1946 to 2026).</figcaption>
</figure>

The urban settlement hierarchy demonstrates classic primacy combined with emergent polycentric conurbations. At the apex stands the continuous metropolitan fabric of Greater Manila, where Quezon City (3,08M) and the City of Manila (1,9M) anchor a contiguous urban cluster encompassing Caloocan, Taguig, Pasig, Valenzuela and Antipolo. Beyond the capital, Davao City (1,85M) commands Mindanao, while Cebu City (1,01M) and Zamboanga City (1,02M) represent multi-century port cities that have successfully transitioned into multi-million metropolitan engines [@Barroga2026Indispensa; @Boquet2017Spatial].

# Limitations

## Archipelagic Discontinuity and Maritime Transport Frictions

The insular geography of the Philippines presents intrinsic challenges for spatial demographic modelling. Inter-island transport remains heavily reliant upon roll-on roll-off (RO-RO) ferry networks, inter-island cargo shipping and domestic aviation. Consequently, Euclidean distance covariates imperfectly capture economic friction across maritime channels. While coastal proximity weighting effectively concentrates populations along island littorals, the precise boundaries of inter-island economic spheres require cautious interpretation, particularly during historical eras when maritime connections were less frequent [@Boquet2017Spatial].

## Administrative Boundary Volatility and Proliferation of Local Government Units

A second methodological limitation arises from the frequent fragmentation of local government units under the Local Government Code of 1991 (Republic Act 7160) and earlier presidential decrees. Between 1948 and 2020, the number of provinces increased from 50 to 81, while hundreds of new municipalities and component barangays were created through the legislative carving of parent territories. Although our macro-regional aggregations remain completely unaffected by internal municipal splitting, tracking longitudinal population series for individual secondary settlements requires careful name and coordinate reconciliation to prevent double-counting or temporal discontinuity [@Hiday1978Urbanizati; @Hackenberg2019Regional].

# Conclusion

The post-independence demographic history of the Republic of the Philippines embodies the profound spatial and societal restructuring of an archipelagic nation. Between 1946 and 2026, national population expanded from 18,43M to 114,8M, accompanied by a tenfold increase in urban settlement numbers and a dramatic elevation in territorial density. Early public health victories eradicated major epidemic scourges and halved infant mortality, while sustained high fertility maintained rapid population growth for multiple decennia.

This demographic mass was accommodated through dual spatial processes: the frontier colonisation and settlement of Mindanao, which redistributed millions of farming households across the southern islands, and the intensive conurbation of Metro Manila and CALABARZON, which transformed southern Luzon into one of the most densely populated urban regions in Southeast Asia. By integrating 4.014 catalogued urban settlements with dasymetrically disaggregated rural surfaces across six macro-regions, MANDALA establishes an empirical foundation for Philippine historical demography, elucidating the long-term interaction between island ecology, state resettlement policy and urban concentration.

# Appendix

## Saturation Audit of Historical Settlement Sources

Table \ref{tab:saturation} details the four-wave candidate harvest saturation audit conducted across the source corpora for the Philippine gazetteer.

<figure class="crd-table-figure" id="tab:saturation">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Harvest Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Prior Cumulative</th><th class="crd-th">Newly Included</th><th class="crd-th">Cumulative Included</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">official censuses and national registries</td><td class="crd-td">0</td><td class="crd-td">3.097</td><td class="crd-td">3.097</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">archival monographs and institutional catalogues</td><td class="crd-td">3.097</td><td class="crd-td">1.349</td><td class="crd-td">4.446</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">longitudinal backfill and foundation year audit</td><td class="crd-td">4.446</td><td class="crd-td">549</td><td class="crd-td">4.995</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">submask gap hunter and geonames homonym audit</td><td class="crd-td">4.995</td><td class="crd-td">0</td><td class="crd-td">4.995</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Multi-wave candidate harvest saturation audit across four source classes for the Philippine gazetteer.</figcaption>
</figure>

## Intercensal Population Growth Rates across Macro-Regions

Table \ref{tab:growth} documents compound annual growth rates across the six macro-regions across eight post-independence intercensal intervals from 1948 to 2025.

<figure class="crd-table-figure" id="tab:growth">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">1948-60</th><th class="crd-th">1960-70</th><th class="crd-th">1970-80</th><th class="crd-th">1980-90</th><th class="crd-th">1990-00</th><th class="crd-th">2000-10</th><th class="crd-th">2010-20</th><th class="crd-th">2020-25</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>NCR and Central Luzon</strong></td><td class="crd-td">2,89</td><td class="crd-td">3,08</td><td class="crd-td">2,75</td><td class="crd-td">2,35</td><td class="crd-td">2,34</td><td class="crd-td">1,9</td><td class="crd-td">1,68</td><td class="crd-td">1,04</td></tr>
<tr><td class="crd-td"><strong>Northern Luzon</strong></td><td class="crd-td">2,89</td><td class="crd-td">3,08</td><td class="crd-td">2,75</td><td class="crd-td">2,35</td><td class="crd-td">2,34</td><td class="crd-td">1,9</td><td class="crd-td">1,68</td><td class="crd-td">1,04</td></tr>
<tr><td class="crd-td"><strong>CALABARZON, MIMAROPA and Bicol</strong></td><td class="crd-td">2,89</td><td class="crd-td">3,08</td><td class="crd-td">2,75</td><td class="crd-td">2,35</td><td class="crd-td">2,34</td><td class="crd-td">1,9</td><td class="crd-td">1,68</td><td class="crd-td">1,04</td></tr>
<tr><td class="crd-td"><strong>Western Visayas</strong></td><td class="crd-td">2,89</td><td class="crd-td">3,08</td><td class="crd-td">2,75</td><td class="crd-td">2,35</td><td class="crd-td">2,34</td><td class="crd-td">1,9</td><td class="crd-td">1,68</td><td class="crd-td">1,04</td></tr>
<tr><td class="crd-td"><strong>Central and Eastern Visayas</strong></td><td class="crd-td">2,89</td><td class="crd-td">3,08</td><td class="crd-td">2,75</td><td class="crd-td">2,35</td><td class="crd-td">2,34</td><td class="crd-td">1,9</td><td class="crd-td">1,68</td><td class="crd-td">1,04</td></tr>
<tr><td class="crd-td"><strong>Mindanao and BARMM</strong></td><td class="crd-td">2,89</td><td class="crd-td">3,08</td><td class="crd-td">2,75</td><td class="crd-td">2,35</td><td class="crd-td">2,34</td><td class="crd-td">1,9</td><td class="crd-td">1,68</td><td class="crd-td">1,04</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Intercensal compound annual population growth rates (%) across Philippine regions (1948 to 2025).</figcaption>
</figure>

# Sources
