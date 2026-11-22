---
title: "Demographic Trajectory of Korea under Japanese Occupation"
subtitle: "Colonial Censuses, Provincial Dynamics, Industrial Migration and Spatial Distribution, 1905AD to 1945AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: korea_under_japanese_occupation_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_korea_under_japanese_occupation_spatial.png"
hero_caption: "Administrative division and urban centres across the thirteen provinces of Korea from 1905AD to 1945AD."
hero_label: "fig:hero-korea-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the provincial demography, settlement hierarchy and spatial population density of Korea under Japanese colonial rule from the establishment of the Japanese residency-general in 1905AD through annexation in 1910AD to liberation in August 1945. Across thirteen administrative provinces encompassing 226.901 km² (3.462 five-arcminute raster cells), aggregate population expanded from 17,25M (17.250.000) in 1905AD and 17,43M (17.430.000) in 1910AD to 18,07M (18.070.000) in 1920AD, reached 19,52M (19.522.945) at the first modern census in 1925AD, climbed to 21,06M (21.058.305) in 1930AD, 22,9M (22.899.038) in 1935AD, and 24,33M (24.326.327) in 1940AD, culminating in 25,95M (25.950.000) at liberation in 1945AD [@Kwon1977Demography; @KOSIS2021Census; @SBJ2021Census]. This demographic expansion reflected the onset of modern mortality transition, driven by colonial public health infrastructure, quarantine controls, and smallpox vaccinations that lowered infant and crude death rates while fertility remained near traditional high levels [@Kwon1977Demography; @Michell1979Fact; @Shibuya2022Global]. Simultaneously, colonial economic restructuring generated dramatic spatial realignments: whereas southern agrarian provinces experienced rural immiseration and outward displacement under the rice export campaign, northern provinces underwent rapid industrialisation centered on hydroelectric power and heavy chemicals along the Yalu and Pujon rivers, creating manufacturing agglomerations at Pyongyang (310k), Hamhung (118k), Hungnam (29k), Chongjin (198k), Wonsan (111k) and Sinuiju (117k) [@EberstadtBanister1992; @Spoorenberg2012DPRK; @Kong1997Conclusion]. Meanwhile, trunk railways fostered rapid port urbanisation led by Seoul (935k), Busan (281k), Incheon (215k) and Daegu (205k), alongside massive wartime labour migration sending over 2M Koreans to Japan and 1,5M to Manchuria [@Kwon1977Demography; @Sun2019Chinese; @Zhou2025Chinese]. Reconciling official quinquennial censuses with Kwon Tae-hwan's demographic revisions, this study models spatial population surfaces using Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 384 catchments, 9.224 land cells and 618 catalogued settlements [@Paciorek2006Matern].

# Background

## Pre-Colonial Registration and the Late Korean Empire

The demographic foundations of early twentieth-century Korea originated in the administrative practices of the Joseon Dynasty (1392AD to 1910AD) and the short-lived Korean Empire (*Daehan Jeguk*, 1897AD to 1910AD) [@KwonShin1977Joseon; @Michell1979Fact]. Throughout the late Joseon era, the state maintained triennial household registers (*hojeok*) designed primarily to allocate military duties, corvée labour requirements, and grain tribute obligations rather than to enumerate every resident inhabitant [@KwonShin1977Joseon; @Cha2009LivingStandards].

Because local gentry (*yangban*), monastic orders, private slaves, and runaway tenant cultivators successfully evaded fiscal registration, official dynastic returns suffered from persistent structural under-enumeration [@Michell1979Fact; @KwonShin1977Joseon]. The official census of 1904AD reported approximately 5,8M people, an arithmetic artefact reflecting tax quotas rather than living individuals [@Michell1979Fact]. Groundbreaking demographic analysis by Kwon Tae-hwan and Shin Yong-ha established that actual late Joseon population was roughly triple the registered fiscal counts, fluctuating between 16M and 17M persons during the late nineteenth century before nationwide epidemics and droughts in the 1890s temporarily checked agrarian growth [@KwonShin1977Joseon; @Michell1979Fact; @Cha2009LivingStandards].

## The Residency-General and the Police Household Surveys (1905AD to 1910AD)

Following the Russo-Japanese War and the imposition of the Eulsa Protectorate Treaty in November 1905, the Japanese Empire established the Residency-General (*Tonggamfu*) in Seoul, inaugurating direct administrative oversight over Korean internal affairs [@Kwon1977Demography; @Sun2019Chinese]. The Residency-General recognised that accurate cadastral and population registers were indispensable prerequisites for colonial fiscal extraction, land taxation and police surveillance [@Kwon1977Demography; @Cha2009LivingStandards].

In 1909AD, the colonial administration enacted the Civil Registration Law (*Minseok-beop*), assigning the compilation of household registries to the national Police Bureau (*Kyeongmu Guk*) [@Kwon1977Demography; @KwonShin1977Joseon]. The police surveys of 1909AD and 1910AD registered 12.934.282 and 13.128.780 persons respectively [@Kwon1977Demography]. Although vastly more comprehensive than late Joseon tax rolls, these initial police surveys remained deficient [@Kwon1977Demography; @Michell1979Fact]. Widespread popular distrust of Japanese police authorities, fears of military conscription and taxation, logistical difficulties in mountainous frontier districts, and the systematic under-registration of female infants and unmarried daughters resulted in the omission of roughly 25% of total inhabitants [@Kwon1977Demography; @Yoo2019Politics].

Kwon Tae-hwan's demographic reconstructions demonstrate that Korea's true biological population stood at 17,25M in 1905AD and rose to 17,43M at formal annexation in 1910AD [@Kwon1977Demography]. Between 1910AD and 1918AD, the Government-General of Chosen (*Chosen Sotokufu*) executed the comprehensive Land Survey (*Toji Josa Saeop*), establishing cadastral ownership boundaries and modern title deeds across the peninsula [@Cha2009LivingStandards; @KOSIS2021Census]. The land survey accelerated the conversion of traditional customary land tenancy into formal landlord-tenant contracts, producing widespread peasant dispossession while simultaneously tightening civil household surveillance across all thirteen provinces [@Kwon1977Demography; @Cha2009LivingStandards].

## The Thirteen-Province System and Colonial Administrative Restructuring

Following formal annexation in August 1910, the Government-General codified the thirteen-province administrative structure (*13-do*) that had been established during the Gabo Reforms of 1896AD [@Kwon1977Demography; @KOSIS2021Census]. The colonial state retained the provincial boundaries but reorganised the sub-provincial administrative tier to streamline command lines from Seoul [@KOSIS2021Census].

In March 1914, the Government-General promulgated a sweeping amalgamation of local districts, consolidating hundreds of traditional historical magistrates into 218 unified counties (*gun*) and 12 designated municipal prefectures (*bu*) [@KOSIS2021Census; @NSTAC2026SSDSE]. The newly designated *bu* encompassed the primary commercial, administrative and treaty port settlements: Keijo (Seoul), Jinsen (Incheon), Kaijo (Kaesong), Heijo (Pyongyang), Chinnampo (Nampo), Shingishu (Sinuiju), Genzan (Wonsan), Fusan (Busan), Taikyu (Daegu), Mokpo, Kunsan (Gunsan), and Seishin (Chongjin) [@KOSIS2021Census; @NSTAC2026SSDSE].

Below the county level, the colonial state grouped traditional natural hamlets (*dong* and *ri*) into standardised rural townships (*myeon*), each administered by an appointed township chief (*myeon-jang*) working under the direct supervision of the county police station [@KOSIS2021Census; @Yoo2019Politics]. This three-tiered hierarchy of province, county or municipality, and township provided the administrative grid through which subsequent quinquennial censuses and vital registration statistics were compiled [@Kwon1977Demography; @KOSIS2021Census].

## The Transport Infrastructure and the Colonial Railway Grid

The physical integration of the peninsular population was accelerated by the construction of a comprehensive standard-gauge railway network administered by the Railway Bureau of the Government-General (*Chosen Sotokufu Tetsudo*) [@Xia2024Impact; @Ao2026Tracing]. Construction had begun under private Japanese concessionaires prior to annexation, opening the Gyeongbu Line connecting Seoul and Busan in 1905AD and the Gyeongui Line linking Seoul to Sinuiju on the Manchurian frontier in 1906AD [@KOSIS2021Census; @Xia2024Impact].

In 1911AD, the completion of the Yalu River Bridge linked the Korean railway network directly to the South Manchuria Railway (*Mantetsu*) at Dandong (Andong), establishing an unbroken overland rail corridor between Busan and Mukden, Changchun, Harbin and Beijing [@Sun2019Chinese; @Xia2024Impact]. The Government-General subsequently constructed the Honam Line (1914AD) through the southwestern agricultural plains of Chungcheong and Jeolla, the Gyeongwon Line (1914AD) cutting through the central mountains to Wonsan on the Sea of Japan, and the Hamgyeong Line (completed in 1928AD) hugging the northeastern coastline to Chongjin and Hoeryong [@KOSIS2021Census; @Ao2026Tracing].

These railway corridors dramatically curtailed transit times across the peninsula, reducing the journey from Seoul to Busan from more than a week of overland travel to less than twelve hours [@Xia2024Impact]. Transport integration facilitated the long-distance haulage of rice and timber, enabled large-scale seasonal labour migration from southern villages to northern industrial zones, and channeled demographic growth into designated railway junction towns such as Daejeon, Iri (Iksan) and Suncheon [@Kwon1977Demography; @Xia2024Impact; @Dyrting2024Estimating].

## The Quinquennial Colonial Census System (1925AD to 1944AD)

The turning point in Korean demographic record-keeping occurred on 1 October 1925, when the Government-General instituted the modern quinquennial census system (*Kokusei Chosa*), synchronised with the imperial census apparatus in the Japanese home islands [@Kwon1977Demography; @SBJ2021Census]. The 1925AD First Simplified Census (*Kan'i Kokusei Chosa*) was the first genuine enumerative census conducted across the peninsula, deploying trained civilian enumerators who visited every household to register de facto resident populations on a single reference day [@Kwon1977Demography; @KOSIS2021Census].

The 1925AD census enumerated 19.522.945 persons, providing an indispensable empirical anchor for all modern historical demography [@Kwon1977Demography; @KOSIS2021Census; @SBJ2021Census]. Five years later, on 1 October 1930, the colonial government conducted a comprehensive general census that collected detailed data on age, sex, marital status, place of birth, nationality, occupation, industry, literacy and mother tongue [@Kwon1977Demography; @KOSIS2021Census]. The 1930AD census counted 21.058.305 inhabitants, followed by the quinquennial census of 1 October 1935, which registered 22.899.038 persons [@Kwon1977Demography; @KOSIS2021Census].

The 1940AD census, conducted amidst expanding wartime economic controls following the outbreak of the Second Sino-Japanese War in 1937AD, recorded 24.326.327 persons [@Kwon1977Demography; @KOSIS2021Census]. The final wartime simplified census of 1 May 1944 enumerated 25.900.000 people [@Kwon1977Demography; @SBJ2021Census]. At liberation in August 1945, the peninsula held an estimated 25,95M residents [@Kwon1977Demography; @EberstadtBanister1992].

Through rigorous backward projection and cohort-survival analysis, Kwon Tae-hwan evaluated the completeness of these colonial censuses [@Kwon1977Demography]. While early colonial police tallies omitted millions of people, the 1925AD and 1930AD censuses attained high coverage rates exceeding 97% to 98%, with omissions concentrated almost entirely among infants under one year of age and seasonal itinerant agricultural workers [@Kwon1977Demography; @Dyrting2024Estimating].

## Mortality Decline and the Epidemiological Transition

The four decades between 1905AD and 1945AD witnessed the initial phase of Korea's modern demographic transition, marked by a pronounced divergence between declining mortality and persistent high fertility [@Kwon1977Demography; @Shibuya2022Global]. Prior to 1910AD, life expectancy at birth in Korea hovered between 24 and 30 years, reflecting endemic infectious diseases, recurrent smallpox epidemics, gastrointestinal infections, and seasonal malnutrition [@Kwon1977Demography; @Cha2009LivingStandards; @Michell1979Fact].

The Government-General established a centralized colonial hygiene and police medicine infrastructure [@Kwon1977Demography; @Shibuya2022Global]. Maritime quarantine stations at Busan, Incheon, Gunsan, Mokpo, Wonsan and Chongjin intercepted cholera and plague outbreaks arriving from continental Chinese and Russian ports [@Ao2026Tracing; @Shibuya2022Global]. Provincial charity hospitals (*do-rip uiwon*) were established in all thirteen provincial capitals, serving as regional bases for epidemic surveillance, disinfection and medical certification [@Kwon1977Demography; @Shibuya2022Global]. Compulsory vaccination campaigns against smallpox, introduced systematically across elementary schools and rural police stations, reduced smallpox mortality to negligible levels by the 1920s [@Kwon1977Demography]. Concurrently, municipal authorities constructed chlorinated piped water networks and drainage channels in major cities such as Seoul, Busan, Daegu and Pyongyang, mitigating waterborne enteric diseases [@KOSIS2021Census; @NSTAC2026SSDSE].

As documented by Kwon Tae-hwan, the crude death rate fell steadily from approximately 34 to 36 per thousand around 1910AD to 24 per thousand during the 1925--1930 intercensal quinquennium, and further declined to 18--20 per thousand by 1940AD [@Kwon1977Demography]. Infant mortality dropped from over 220 infant deaths per thousand live births before 1920AD to approximately 140 per thousand by 1940AD, lifting female life expectancy at birth to 45 years and male life expectancy to 42 years [@Kwon1977Demography; @Lee2022Household].

In contrast to falling mortality, fertility remained largely untouched by modern family limitation [@Kwon1977Demography; @Yoo2019Politics]. Universal female marriage, early marriage ages (averaging 16 to 18 years for females before the 1930s), and the cultural premium placed on male lineage continuity sustained crude birth rates above 40 to 45 per thousand throughout the colonial era [@Kwon1977Demography; @Yoo2019Politics; @Bien2013High]. Consequently, natural population growth accelerated from less than 0,5% per annum before 1910AD to 1,5% annually in the 1920s and exceeded 1,7% annually during the 1930s, generating a classic demographic transition boom [@Kwon1977Demography; @Cha2009LivingStandards].

# Methodology

## Territorial Masking and the Thirteen-Province System

To maintain spatial and administrative consistency across the colonial epoch, this study adopts the thirteen-province administrative partition (*13-do*) codified by imperial decree in 1896AD and maintained with minor boundary adjustments by the Government-General of Chosen through 1945AD (Table \ref{tab:validation-korea}) [@Kwon1977Demography; @KOSIS2021Census]. The peninsular landmass covers 226.901 km² across 3.462 five-arcminute raster cells, grouped into three macro-regions:

1. Northern Industrial and Frontier Provinces (four territories, 94.520 km², 41,7% of peninsular area): South Pyongan (Heian-nan, 14.819 km²), North Pyongan (Heian-hoku, 27.824 km²), South Hamgyong (Kankyo-nan, 34.010 km²), and North Hamgyong (Kankyo-hoku, 18.677 km²).
2. Central Corridor Provinces (three territories, 60.468 km², 26,6% of peninsular area): Gyeonggi-do encompassing Seoul and Incheon (Keiki, 9.974 km²), Gangwon-do spanning the Taebaek crest (Kogen, 32.478 km²), and Hwanghae-do (Kokai, 18.016 km²).
3. Southern Agricultural Core Provinces (six territories, 71.913 km², 31,7% of peninsular area): North Chungcheong (Chusei-hoku, 5.606 km²), South Chungcheong (Chusei-nan, 9.342 km²), North Jeolla (Zenra-hoku, 8.161 km²), South Jeolla encompassing Jeju Island (Zenra-nan, 15.408 km²), North Gyeongsang (Keisho-hoku, 18.729 km²), and South Gyeongsang (Keisho-nan, 13.857 km²).

At each benchmark year $t \in \{1905, 1910, 1915, 1920, 1925, 1930, 1935, 1940, 1944, 1945\}$, regional population $P_r(t)$ harmonises enumerated civil totals $C_r(t)$, unrecorded infant fractions $\alpha_r(t)$, and net inter-provincial and external migration flows $M_r(t)$:

$$P_r(t) = C_r(t) \cdot \left[1 + \alpha_r(t)\right] + M_r(t)$$

where $\alpha_r(t)$ represents the age-specific under-enumeration correction factor derived from Kwon Tae-hwan's demographic evaluations, declining from 0,25 in 1905AD to 0,02 by 1935AD [@Kwon1977Demography].

## Census Correction and Analytical Harmonisation

Official colonial statistics present two distinct analytical challenges: the massive under-registration of early police surveys (1909AD to 1920AD) and the distortion of late colonial censuses (1940AD and 1944AD) by wartime military conscription and labour mobilisation [@Kwon1977Demography; @SBJ2021Census].

For the pre-census benchmarks of 1905AD, 1910AD, 1915AD and 1920AD, this study calibrates regional baselines against the reverse-survival projections developed by Kwon Tae-hwan (1977) and reconstructed agricultural labour models by Cha Myung Soo (2009) [@Kwon1977Demography; @Cha2009LivingStandards]. These adjustments reveal that official police figures in 1910AD undercounted Korea's inhabitants by 4,3M persons, with omission rates running highest in rugged northern interior counties and among landless southern agricultural tenants [@Kwon1977Demography; @Michell1979Fact].

For the quinquennial census benchmarks (1925AD to 1940AD), official tallies require only minor upward adjustments for infant under-registration (ranging from 1,8% to 2,5% nationally) [@Kwon1977Demography]. However, during the final wartime phase (1940AD to 1945AD), rapid industrialisation and compulsory labour drafts transferred over 1,5M Korean workers into Japanese mines and factories and another 800k into Manchurian construction projects [@Kwon1977Demography; @Sun2019Chinese; @Zhou2025Chinese]. Harmonised totals account for both resident civilian populations and mobilised cohorts, yielding 25,9M in 1944AD and 25,95M at liberation in 1945AD (Table \ref{tab:validation-korea}) [@Kwon1977Demography; @EberstadtBanister1992].

## Non-Stationary Kriging and Biophysical Covariates

Spatial population density across the peninsula is calibrated using the East Asian and peninsular kriging domain, integrating 90.926 geocoded archaeological, architectural and historical records across 384 domestic catchments and 9.224 valid land cells [@Paciorek2006Matern]. Catchment Voronoi tessellations exhibit a median radius of 25,09 km and a 90th percentile radius of 28,32 km, ensuring dense spatial control across rugged peninsular terrain [@Paciorek2006Matern]. Residual spatial autocorrelation is modelled through Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) covariance functions [@Paciorek2006Matern]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless bandwidths stand at $\tau_1 = 1,4211$ and $\tau_2 = 2,6291$, with residual variogram determination coefficient $R^2 = 0,9315$ for the late Joseon and imperial horizon (Table \ref{tab:kriging-korea}). Five biophysical and infrastructural covariates condition spatial allocation: habitable land fraction, vegetative net primary productivity, terrain slope and elevation suitability, 13,5 km fluvial decay along primary river corridors (notably the Han, Nakdong, Geum, Daedong and Yalu rivers), and coastal access [@Leipe2017Barley; @Ao2026Tracing; @Choi2020Changes].

To prevent double-counting between dense urban populations and rural hinterlands, 618 catalogued settlements led by Seoul (935k), Pyongyang (310k), Busan (281k), Incheon (215k) and Daegu (205k) condition focal population cores, with urban masks subtracted to preserve rural densities inside each provincial boundary [@Kwon1977Demography; @KOSIS2021Census].

# Testing and Validation

Regional totals harmonise precisely with the longitudinal census revisions established by Kwon Tae-hwan (1977) and the historical compendia of Statistics Korea and the Statistics Bureau of Japan [@Kwon1977Demography; @KOSIS2021Census; @SBJ2021Census]. Table \ref{tab:validation-korea} details population trajectories across all ten benchmark years from 1905AD to 1945AD, decomposed into macro-regions.

<figure class="crd-table-figure" id="tab:validation-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Northern Provinces</th><th class="crd-th">Central Corridor</th><th class="crd-th">Southern Agricultural Core</th><th class="crd-th">Total Population</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1905AD</strong></td><td class="crd-td">4,02M</td><td class="crd-td">4,24M</td><td class="crd-td">8,99M</td><td class="crd-td">17,25M</td></tr>
<tr><td class="crd-td"><strong>1910AD</strong></td><td class="crd-td">4,11M</td><td class="crd-td">4,28M</td><td class="crd-td">9,03M</td><td class="crd-td">17,43M</td></tr>
<tr><td class="crd-td"><strong>1915AD</strong></td><td class="crd-td">4,22M</td><td class="crd-td">4,34M</td><td class="crd-td">9,1M</td><td class="crd-td">17,66M</td></tr>
<tr><td class="crd-td"><strong>1920AD</strong></td><td class="crd-td">4,37M</td><td class="crd-td">4,43M</td><td class="crd-td">9,26M</td><td class="crd-td">18,07M</td></tr>
<tr><td class="crd-td"><strong>1925AD</strong></td><td class="crd-td">4,78M</td><td class="crd-td">4,79M</td><td class="crd-td">9,95M</td><td class="crd-td">19,52M</td></tr>
<tr><td class="crd-td"><strong>1930AD</strong></td><td class="crd-td">5,22M</td><td class="crd-td">5,16M</td><td class="crd-td">10,68M</td><td class="crd-td">21,06M</td></tr>
<tr><td class="crd-td"><strong>1935AD</strong></td><td class="crd-td">5,72M</td><td class="crd-td">5,79M</td><td class="crd-td">11,38M</td><td class="crd-td">22,9M</td></tr>
<tr><td class="crd-td"><strong>1940AD</strong></td><td class="crd-td">6,13M</td><td class="crd-td">6,35M</td><td class="crd-td">11,85M</td><td class="crd-td">24,33M</td></tr>
<tr><td class="crd-td"><strong>1944AD</strong></td><td class="crd-td">6,57M</td><td class="crd-td">6,93M</td><td class="crd-td">12,41M</td><td class="crd-td">25,9M</td></tr>
<tr><td class="crd-td"><strong>1945AD</strong></td><td class="crd-td">6,59M</td><td class="crd-td">6,98M</td><td class="crd-td">12,38M</td><td class="crd-td">25,95M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional demographic benchmarks across Korea, 1905AD to 1945AD, harmonised from colonial census returns and demographic reconstructions by Kwon Tae-hwan (1977).</figcaption>
</figure>

Across the nine chronological horizons in the peninsular and archipelagic kriging domain, Table \ref{tab:kriging-korea} documents tightly regularised Matérn variogram parameters. Residual determination coefficients exceed 0,93 across all epochs, with effective short ranges spanning 35,66 km.

<figure class="crd-table-figure" id="tab:kriging-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Chulmun Eras (before 3500BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00505</td><td class="crd-td">0,22</td><td class="crd-td">0,9513</td><td class="crd-td">5,3239</td><td class="crd-td">21,4223</td></tr>
<tr><td class="crd-td"><strong>2. Middle Chulmun and Jomon Eras (3500BC to 2000BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,002807</td><td class="crd-td">0,16</td><td class="crd-td">0,9749</td><td class="crd-td">4,2696</td><td class="crd-td">15,7542</td></tr>
<tr><td class="crd-td"><strong>3. Late Mumun Bronze and Jomon Eras (2000BC to 300BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001557</td><td class="crd-td">0,13</td><td class="crd-td">0,9791</td><td class="crd-td">4,0592</td><td class="crd-td">14,1882</td></tr>
<tr><td class="crd-td"><strong>4. Gojoseon, Han Commanderies and Yayoi Eras (300BC to 300AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00078</td><td class="crd-td">0,04</td><td class="crd-td">0,9984</td><td class="crd-td">6,0037</td><td class="crd-td">26,4645</td></tr>
<tr><td class="crd-td"><strong>5. Three Kingdoms and Kofun Eras (300AD to 668AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000584</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">5,1228</td><td class="crd-td">18,1845</td></tr>
<tr><td class="crd-td"><strong>6. Unified Silla and Early Heian Eras (668AD to 935AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000499</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">4,1561</td><td class="crd-td">15,8748</td></tr>
<tr><td class="crd-td"><strong>7. Goryeo and Kamakura Eras (935AD to 1392AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00033</td><td class="crd-td">0,04</td><td class="crd-td">0,9979</td><td class="crd-td">3,5177</td><td class="crd-td">10,5668</td></tr>
<tr><td class="crd-td"><strong>8. Early Joseon and Muromachi Eras (1392AD to 1600AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000357</td><td class="crd-td">0,04</td><td class="crd-td">0,998</td><td class="crd-td">3,4683</td><td class="crd-td">10,3268</td></tr>
<tr><td class="crd-td"><strong>9. Late Joseon and Imperial Eras (1600AD to 1945AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001773</td><td class="crd-td">0,22</td><td class="crd-td">0,9315</td><td class="crd-td">3,2751</td><td class="crd-td">8,8717</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Spatial kriging variogram diagnostics across nine chronological horizons (9.224 valid land cells, regularised tau1 = 1,42, tau2 = 2,63).</figcaption>
</figure>

Table \ref{tab:source-corpora-korea} details the component archaeological, heritage and historical gazetteer registries aggregated into the regional spatial domain.

<figure class="crd-table-figure" id="tab:source-corpora-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>National Museum of Japanese History Radiocarbon Database v1,3</strong></td><td class="crd-td">14.536</td><td class="crd-td">15,57%</td></tr>
<tr><td class="crd-td"><strong>National Museum of Japanese History Archaeological Site Register</strong></td><td class="crd-td">12.717</td><td class="crd-td">13,62%</td></tr>
<tr><td class="crd-td"><strong>Japanese Archaeological Site Survey (Kanto Region)</strong></td><td class="crd-td">20.209</td><td class="crd-td">21,65%</td></tr>
<tr><td class="crd-td"><strong>Japanese Archaeological Site Survey (Tokyo Prefecture)</strong></td><td class="crd-td">6.388</td><td class="crd-td">6,84%</td></tr>
<tr><td class="crd-td"><strong>Ministry of Land, Infrastructure, Transport and Tourism Cultural Assets</strong></td><td class="crd-td">17.728</td><td class="crd-td">18,99%</td></tr>
<tr><td class="crd-td"><strong>National Government Designated Cultural Properties of Japan</strong></td><td class="crd-td">5.651</td><td class="crd-td">6,05%</td></tr>
<tr><td class="crd-td"><strong>Korea Heritage Service National Heritage Portal API</strong></td><td class="crd-td">10.696</td><td class="crd-td">11,46%</td></tr>
<tr><td class="crd-td"><strong>Radiocarbon Chronology of the Korean Neolithic and Bronze Ages</strong></td><td class="crd-td">437</td><td class="crd-td">0,47%</td></tr>
<tr><td class="crd-td"><strong>Hanseong Baekje Museum Accelerator Mass Spectrometry Corpus</strong></td><td class="crd-td">77</td><td class="crd-td">0,08%</td></tr>
<tr><td class="crd-td"><strong>National Heritage Administration Historic Relics and Monuments</strong></td><td class="crd-td">1.173</td><td class="crd-td">1,26%</td></tr>
<tr><td class="crd-td"><strong>DPR Korea National Treasure and Cultural Relic Inventory</strong></td><td class="crd-td">129</td><td class="crd-td">0,14%</td></tr>
<tr><td class="crd-td"><strong>National Research Institute of Cultural Heritage North Korea Survey</strong></td><td class="crd-td">85</td><td class="crd-td">0,09%</td></tr>
<tr><td class="crd-td"><strong>Sejong Sillok Jiriji Northern Fortress and County Cadastre</strong></td><td class="crd-td">217</td><td class="crd-td">0,23%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">2.082</td><td class="crd-td">2,23%</td></tr>
<tr><td class="crd-td"><strong>Continental East Asia Frontier Buffer Archaeological Extract</strong></td><td class="crd-td">1.234</td><td class="crd-td">1,32%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Component archaeological, heritage and historical gazetteer registries aggregated into the regional kriging domain.</figcaption>
</figure>

# Results

## Early Colonial Reorganisation and Demographic Recovery (1905AD to 1920AD)

Between 1905AD and 1920AD, Korea emerged from late nineteenth-century demographic stagnation into renewed population growth, expanding by 4,8% from 17,25M to 18,07M (Figure \ref{fig:traj-korea}) [@Kwon1977Demography; @Cha2009LivingStandards]. The end of internal political instability following the Donghak Peasant War of 1894AD and the Russo-Japanese War of 1904--1905 permitted agrarian rehabilitation across the fertile southern plains [@Cha2009LivingStandards; @Michell1979Fact].

<figure class="crd-figure-block" id="fig:traj-korea">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-korea-under-japanese-occupation/fig2_korea_under_japanese_occupation_trajectory.png" alt="fig:traj-korea" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Korea from 1905AD to 1945AD across northern, central and southern provinces with historical uncertainty intervals.</figcaption>
</figure>

During this initial phase, the demographic center of gravity remained firmly anchored in the southern agricultural provinces, which contained 52,1% of all peninsular inhabitants in 1905AD (8,99M) and 51,3% in 1920AD (9,26M) (Table \ref{tab:validation-korea}) [@Kwon1977Demography]. North Gyeongsang formed the most populous single province with 2,07M residents in 1905AD, followed by South Jeolla (1,93M), South Gyeongsang (1,81M), and Gyeonggi (1,81M) (Table \ref{tab:regions-korea}) [@Kwon1977Demography; @KOSIS2021Census].

However, the colonial Land Survey (1910AD to 1918AD) deeply restructured rural tenancy relations [@Cha2009LivingStandards]. By legally vesting land titles in registered proprietors and disallowing traditional partial cultivation rights (*dohoji*), the colonial cadastral regime strengthened the bargaining power of landlords [@Cha2009LivingStandards]. Farm rents rose to 50% or more of annual harvests, paid in kind [@Cha2009LivingStandards]. Indebted peasant smallholders were progressively demoted to pure tenant cultivators or agricultural day labourers, instigating seasonal food shortages ("spring hunger", *borigogae*) and initiating early migratory outflows into Manchuria and urban centers [@Kwon1977Demography; @Sun2019Chinese; @Zhou2025Chinese].

## Quinquennial Census Era and Agrarian Stagnation in the South (1920AD to 1935AD)

Between 1920AD and 1935AD, natural population increase accelerated sharply across Korea, driving aggregate population from 18,07M to 22,9M, an overall gain of 26,7% (Table \ref{tab:regions-korea}) [@Kwon1977Demography; @KOSIS2021Census]. The five-year intercensal growth rate reached 8% between 1925AD and 1930AD, and 8,7% between 1930AD and 1935AD, corresponding to an annual growth rate of 1,7% [@Kwon1977Demography].

<figure class="crd-figure-block" id="fig:shares-korea">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-korea-under-japanese-occupation/fig3_korea_under_japanese_occupation_shares.png" alt="fig:shares-korea" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Provincial population shares and comparative peak versus 1945AD terminal totals across the thirteen Korean territories.</figcaption>
</figure>

This rapid demographic expansion coincided with the implementation of the Campaign to Increase Rice Production (*Sanmi Jeungsik Gyehoek*, 1920AD to 1934AD) [@Cha2009LivingStandards; @Kwon1977Demography]. To alleviate urban food shortages and industrial wages in Japan following the 1918 Rice Riots, the colonial government financed large-scale irrigation reservoirs, land reclamation, chemical fertilisation and improved seed varieties across the southern rice basket (Jeolla, Chungcheong and Gyeongsang) [@Cha2009LivingStandards].

While agricultural output expanded, rice exports to Japan grew far more rapidly than domestic production, rising from 3,2M *seok* (approximately 580M litres) in 1920AD to over 10M *seok* by 1934AD [@Cha2009LivingStandards]. Per capita domestic rice consumption in Korea dropped by over 40% between 1912AD and the early 1930s, as Korean cultivators substituted cheaper coarse grains (millet imported from Manchuria, barley and sorghum) for rice [@Cha2009LivingStandards; @Leipe2017Barley].

Mounting agrarian immiseration in the southern countryside acted as a powerful push factor, expelling surplus rural labour from the villages [@Kwon1977Demography; @Dyrting2024Estimating; @Zhou2025Chinese]. While southern provinces continued to add absolute population through high natural fertility, their share of total peninsular population fell steadily from 51,3% in 1920AD to 49,7% in 1935AD and 48,7% by 1940AD (Figure \ref{fig:shares-korea}) [@Kwon1977Demography; @Wu2021Spatiality].

<figure class="crd-table-figure" id="tab:regions-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province</th><th class="crd-th">Area (km²)</th><th class="crd-th">1905AD</th><th class="crd-th">1910AD</th><th class="crd-th">1915AD</th><th class="crd-th">1920AD</th><th class="crd-th">1925AD</th><th class="crd-th">1930AD</th><th class="crd-th">1935AD</th><th class="crd-th">1940AD</th><th class="crd-th">1944AD</th><th class="crd-th">1945AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gyeonggi-do (Keiki)</strong></td><td class="crd-td">9.974</td><td class="crd-td">1,81M</td><td class="crd-td">1,82M</td><td class="crd-td">1,83M</td><td class="crd-td">1,86M</td><td class="crd-td">2M</td><td class="crd-td">2,15M</td><td class="crd-td">2,48M</td><td class="crd-td">2,79M</td><td class="crd-td">3,1M</td><td class="crd-td">3,14M</td></tr>
<tr><td class="crd-td"><strong>North Chungcheong (Chusei-hoku)</strong></td><td class="crd-td">5.606</td><td class="crd-td">759k</td><td class="crd-td">763,4k</td><td class="crd-td">770k</td><td class="crd-td">784,2k</td><td class="crd-td">843,4k</td><td class="crd-td">905,5k</td><td class="crd-td">954,1k</td><td class="crd-td">981,2k</td><td class="crd-td">1,02M</td><td class="crd-td">1,01M</td></tr>
<tr><td class="crd-td"><strong>South Chungcheong (Chusei-nan)</strong></td><td class="crd-td">9.342</td><td class="crd-td">1,17M</td><td class="crd-td">1,18M</td><td class="crd-td">1,19M</td><td class="crd-td">1,21M</td><td class="crd-td">1,3M</td><td class="crd-td">1,39M</td><td class="crd-td">1,5M</td><td class="crd-td">1,59M</td><td class="crd-td">1,69M</td><td class="crd-td">1,69M</td></tr>
<tr><td class="crd-td"><strong>North Jeolla (Zenra-hoku)</strong></td><td class="crd-td">8.161</td><td class="crd-td">1,24M</td><td class="crd-td">1,25M</td><td class="crd-td">1,26M</td><td class="crd-td">1,29M</td><td class="crd-td">1,39M</td><td class="crd-td">1,5M</td><td class="crd-td">1,6M</td><td class="crd-td">1,66M</td><td class="crd-td">1,74M</td><td class="crd-td">1,74M</td></tr>
<tr><td class="crd-td"><strong>South Jeolla and Jeju (Zenra-nan)</strong></td><td class="crd-td">15.408</td><td class="crd-td">1,93M</td><td class="crd-td">1,95M</td><td class="crd-td">1,97M</td><td class="crd-td">2,01M</td><td class="crd-td">2,17M</td><td class="crd-td">2,34M</td><td class="crd-td">2,52M</td><td class="crd-td">2,65M</td><td class="crd-td">2,8M</td><td class="crd-td">2,8M</td></tr>
<tr><td class="crd-td"><strong>North Gyeongsang (Keisho-hoku)</strong></td><td class="crd-td">18.729</td><td class="crd-td">2,07M</td><td class="crd-td">2,07M</td><td class="crd-td">2,08M</td><td class="crd-td">2,11M</td><td class="crd-td">2,26M</td><td class="crd-td">2,42M</td><td class="crd-td">2,54M</td><td class="crd-td">2,6M</td><td class="crd-td">2,69M</td><td class="crd-td">2,67M</td></tr>
<tr><td class="crd-td"><strong>South Gyeongsang (Keisho-nan)</strong></td><td class="crd-td">13.857</td><td class="crd-td">1,81M</td><td class="crd-td">1,82M</td><td class="crd-td">1,83M</td><td class="crd-td">1,85M</td><td class="crd-td">1,99M</td><td class="crd-td">2,13M</td><td class="crd-td">2,27M</td><td class="crd-td">2,36M</td><td class="crd-td">2,47M</td><td class="crd-td">2,47M</td></tr>
<tr><td class="crd-td"><strong>Gangwon-do (Kogen)</strong></td><td class="crd-td">32.478</td><td class="crd-td">1,14M</td><td class="crd-td">1,17M</td><td class="crd-td">1,2M</td><td class="crd-td">1,25M</td><td class="crd-td">1,37M</td><td class="crd-td">1,5M</td><td class="crd-td">1,65M</td><td class="crd-td">1,78M</td><td class="crd-td">1,91M</td><td class="crd-td">1,92M</td></tr>
<tr><td class="crd-td"><strong>Hwanghae-do (Kokai)</strong></td><td class="crd-td">18.016</td><td class="crd-td">1,29M</td><td class="crd-td">1,3M</td><td class="crd-td">1,3M</td><td class="crd-td">1,32M</td><td class="crd-td">1,42M</td><td class="crd-td">1,52M</td><td class="crd-td">1,66M</td><td class="crd-td">1,78M</td><td class="crd-td">1,91M</td><td class="crd-td">1,92M</td></tr>
<tr><td class="crd-td"><strong>South Pyongan (Heian-nan)</strong></td><td class="crd-td">14.819</td><td class="crd-td">1,09M</td><td class="crd-td">1,1M</td><td class="crd-td">1,11M</td><td class="crd-td">1,14M</td><td class="crd-td">1,23M</td><td class="crd-td">1,33M</td><td class="crd-td">1,49M</td><td class="crd-td">1,63M</td><td class="crd-td">1,78M</td><td class="crd-td">1,79M</td></tr>
<tr><td class="crd-td"><strong>North Pyongan (Heian-hoku)</strong></td><td class="crd-td">27.824</td><td class="crd-td">1,21M</td><td class="crd-td">1,23M</td><td class="crd-td">1,26M</td><td class="crd-td">1,31M</td><td class="crd-td">1,43M</td><td class="crd-td">1,56M</td><td class="crd-td">1,69M</td><td class="crd-td">1,78M</td><td class="crd-td">1,89M</td><td class="crd-td">1,89M</td></tr>
<tr><td class="crd-td"><strong>South Hamgyong (Kankyo-nan)</strong></td><td class="crd-td">34.010</td><td class="crd-td">1,21M</td><td class="crd-td">1,24M</td><td class="crd-td">1,27M</td><td class="crd-td">1,32M</td><td class="crd-td">1,44M</td><td class="crd-td">1,58M</td><td class="crd-td">1,7M</td><td class="crd-td">1,79M</td><td class="crd-td">1,89M</td><td class="crd-td">1,89M</td></tr>
<tr><td class="crd-td"><strong>North Hamgyong (Kankyo-hoku)</strong></td><td class="crd-td">18.677</td><td class="crd-td">517,5k</td><td class="crd-td">543,8k</td><td class="crd-td">572,2k</td><td class="crd-td">607,2k</td><td class="crd-td">679,4k</td><td class="crd-td">758,1k</td><td class="crd-td">847,3k</td><td class="crd-td">924,4k</td><td class="crd-td">1M</td><td class="crd-td">1,01M</td></tr>
<tr><td class="crd-td"><strong>Peninsula Total</strong></td><td class="crd-td">226.901</td><td class="crd-td">17,25M</td><td class="crd-td">17,43M</td><td class="crd-td">17,66M</td><td class="crd-td">18,07M</td><td class="crd-td">19,52M</td><td class="crd-td">21,06M</td><td class="crd-td">22,9M</td><td class="crd-td">24,33M</td><td class="crd-td">25,9M</td><td class="crd-td">25,95M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Provincial population benchmarks across thirteen Korean territories, 1905AD to 1945AD, calculated from regional JSON registers.</figcaption>
</figure>

## Northern Hydroelectric Industrialisation and Heavy Chemical Complexes (1930AD to 1945AD)

Following the Mukden Incident of September 1931 and the Japanese creation of the puppet state of Manchukuo, the colonial administration fundamentally redirected its economic development policy in Korea [@Kong1997Conclusion; @Kirby1997Korean; @EberstadtBanister1992]. Korea was repositioned from an agricultural rice supplier into a continental logistical spring-board and heavy industrial base supporting military expansion into North China [@Kong1997Conclusion; @Kirby1997Korean].

This structural transformation centered decisively on the northern provinces (South Pyongan, North Pyongan, South Hamgyong and North Hamgyong), which possessed abundant mineral deposits (iron ore at Musan, coal at Sadong and Kaechon, magnesite at Dancheon) and rugged river gradients suited for large-scale hydroelectric exploitation [@EberstadtBanister1992; @Spoorenberg2012DPRK; @Kong1997Conclusion].

Under the leadership of industrialist Noguchi Shitagau and the Nihon Chisso (Nichitsu) conglomerate, the colonial government financed the construction of massive hydroelectric dams along the Pujon and Changjin river basins in South Hamgyong, culminating in the 700.000 kW Sup'ung (Shuifeng) Dam on the Yalu River, completed in 1944AD as one of the largest hydroelectric installations in the world [@EberstadtBanister1992; @Kong1997Conclusion]. Cheap electric power fed sprawling chemical and metallurgical complexes at Hungnam, Hamhung and Chongjin [@EberstadtBanister1992; @Spoorenberg2012DPRK]. The Chosen Nitrogen Fertiliser Company (*Chosen Chisso Hiryo*) complex at Hungnam grew into the largest chemical plant in the Japanese Empire, synthesising ammonium sulphate, nitric acid, explosives and synthetic petroleum [@EberstadtBanister1992; @Kong1997Conclusion].

Hydroelectric industrialisation spurred intense inter-provincial migration from the agrarian south to the industrialising north [@Kwon1977Demography; @Dyrting2024Estimating; @Zhirov2022Demographic]. Between 1925AD and 1944AD, South Hamgyong expanded from 1,44M to 1,89M, North Hamgyong surged from 679k to 1M (a 47,9% expansion), South Pyongan grew from 1,23M to 1,78M, and North Pyongan advanced from 1,43M to 1,89M (Table \ref{tab:regions-korea}) [@KOSIS2021Census; @EberstadtBanister1992]. Overall, the northern macro-region expanded from 4,02M in 1905AD to 6,59M by 1945AD, increasing its share of the peninsular total from 23,3% to 25,4% (Table \ref{tab:validation-korea}) [@Kwon1977Demography].

Urban growth in the north far outpaced national averages: Pyongyang expanded from 72k in 1920AD to 310k in 1945AD; Chongjin surged from 8k to 198k; Hamhung rose from 23k to 118k; Sinuiju expanded to 117k; Wonsan attained 111k; and the twin industrial port of Hungnam reached 29k [@KOSIS2021Census; @EberstadtBanister1992].

## Urban Hierarchy, Railway Corridors and Port Expansion

Alongside northern industrialisation, colonial development reconfigured the peninsular urban hierarchy through the construction of trunk railway networks connecting the Japanese home islands to the Manchurian interior [@Kwon1977Demography; @Ao2026Tracing; @Xia2024Impact]. The primary transport axis was the Gyeongbu (Seoul-Busan, opened 1905AD) and Gyeongui (Seoul-Sinuiju, opened 1906AD) railway corridor, later supplemented by the Gyeongwon (Seoul-Wonsan, 1914AD) and Honam (Daejeon-Mokpo, 1914AD) lines [@KOSIS2021Census; @Xia2024Impact].

These railway corridors channeled trade and administrative functions into a distinctive urban hierarchy led by Keijo (Seoul), which expanded from 225k in 1905AD to 343k in 1925AD, 444k in 1935AD, and reached 935k in the 1940AD census after incorporating industrial suburbs in Yeongdeungpo and surrounding Gyeonggi townships [@Kwon1977Demography; @KOSIS2021Census]. Seoul operated as the undisputed colonial primate city, concentrating government departments, central banking institutions, Japanese trading zaibatsu branches, and imperial educational institutions [@KOSIS2021Census].

Busan (Fusan) served as the primary maritime terminus connecting Korea to Japan via the Shimonoseki railway ferry (*Kampu Renrakusen*), expanding from 38k in 1905AD to 107k in 1925AD, 182k in 1935AD, and 281k in 1945AD [@Kwon1977Demography; @Ao2026Tracing; @KOSIS2021Census]. Incheon (Jinsen), functioning as the maritime outer port for Seoul, grew from 30k to 215k; Daegu (Taikyu), the inland agricultural and textile distribution hub of North Gyeongsang, rose from 32k to 205k; and Daejeon, created as a railway junction between the Gyeongbu and Honam lines, expanded from a rural village of less than 1k inhabitants in 1905AD to 75k by 1945AD [@Kwon1977Demography; @KOSIS2021Census].

Specialised port settlements expanded rapidly along both coastlines [@Ao2026Tracing; @Michel2024Addressing]. On the Yellow Sea, Gunsan (44k) and Mokpo (36k) handled massive rice shipments outbound from the fertile Honam plain, while Chinnampo (81k) channeled coal and mineral ore from the Daedong river basin [@KOSIS2021Census; @Ao2026Tracing]. Along the Sea of Japan, Wonsan (111k) linked the Gyeongwon railway to coastal fishing fleets and mineral refining, while Chongjin (198k) served as the primary deep-water port transferring iron ore from Musan to Japanese blast furnaces [@Ao2026Tracing; @EberstadtBanister1992].

Table \ref{tab:density-korea} demonstrates the resulting spatial population density across the thirteen provinces in 1940AD, contrasting the high rural and urban densities of Gyeonggi and the southern plains with the expansive, lower-density northern territories.

<figure class="crd-table-figure" id="tab:density-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province</th><th class="crd-th">Sites</th><th class="crd-th">1905AD</th><th class="crd-th">1940AD</th><th class="crd-th">1940AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gyeonggi-do (Keiki)</strong></td><td class="crd-td">82</td><td class="crd-td">1,81M</td><td class="crd-td">2,79M</td><td class="crd-td">279,7</td></tr>
<tr><td class="crd-td"><strong>North Chungcheong (Chusei-hoku)</strong></td><td class="crd-td">23</td><td class="crd-td">759k</td><td class="crd-td">981,2k</td><td class="crd-td">175</td></tr>
<tr><td class="crd-td"><strong>South Chungcheong (Chusei-nan)</strong></td><td class="crd-td">43</td><td class="crd-td">1,17M</td><td class="crd-td">1,59M</td><td class="crd-td">170,1</td></tr>
<tr><td class="crd-td"><strong>North Jeolla (Zenra-hoku)</strong></td><td class="crd-td">29</td><td class="crd-td">1,24M</td><td class="crd-td">1,66M</td><td class="crd-td">203,7</td></tr>
<tr><td class="crd-td"><strong>South Jeolla and Jeju (Zenra-nan)</strong></td><td class="crd-td">40</td><td class="crd-td">1,93M</td><td class="crd-td">2,65M</td><td class="crd-td">172,1</td></tr>
<tr><td class="crd-td"><strong>North Gyeongsang (Keisho-hoku)</strong></td><td class="crd-td">60</td><td class="crd-td">2,07M</td><td class="crd-td">2,6M</td><td class="crd-td">139</td></tr>
<tr><td class="crd-td"><strong>South Gyeongsang (Keisho-nan)</strong></td><td class="crd-td">50</td><td class="crd-td">1,81M</td><td class="crd-td">2,36M</td><td class="crd-td">170,3</td></tr>
<tr><td class="crd-td"><strong>Gangwon-do (Kogen)</strong></td><td class="crd-td">66</td><td class="crd-td">1,14M</td><td class="crd-td">1,78M</td><td class="crd-td">54,7</td></tr>
<tr><td class="crd-td"><strong>Hwanghae-do (Kokai)</strong></td><td class="crd-td">51</td><td class="crd-td">1,29M</td><td class="crd-td">1,78M</td><td class="crd-td">99</td></tr>
<tr><td class="crd-td"><strong>South Pyongan (Heian-nan)</strong></td><td class="crd-td">37</td><td class="crd-td">1,09M</td><td class="crd-td">1,63M</td><td class="crd-td">110</td></tr>
<tr><td class="crd-td"><strong>North Pyongan (Heian-hoku)</strong></td><td class="crd-td">60</td><td class="crd-td">1,21M</td><td class="crd-td">1,78M</td><td class="crd-td">64,1</td></tr>
<tr><td class="crd-td"><strong>South Hamgyong (Kankyo-nan)</strong></td><td class="crd-td">39</td><td class="crd-td">1,21M</td><td class="crd-td">1,79M</td><td class="crd-td">52,7</td></tr>
<tr><td class="crd-td"><strong>North Hamgyong (Kankyo-hoku)</strong></td><td class="crd-td">38</td><td class="crd-td">517,5k</td><td class="crd-td">924,4k</td><td class="crd-td">49,5</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements, 1905AD and 1940AD population benchmarks, and 1940AD density (persons per km²).</figcaption>
</figure>

## Wartime Mobilisation, Forced Labour and External Dispersal (1937AD to 1945AD)

The escalation of total war following the Marco Polo Bridge Incident in July 1937 and the Pacific War in December 1941 triggered unprecedented state-directed population displacement [@Kwon1977Demography; @Kirby1997Korean; @Sun2019Chinese]. Enacting the National Mobilisation Law (*Kokka Sodoin-ho*) in 1938AD, the Japanese colonial apparatus instituted coercive labour recruitment (*Choyong*), allocating quotas of Korean rural labourers to war-critical sectors [@Kwon1977Demography; @Kirby1997Korean].

Between 1939AD and 1945AD, the colonial administration mobilised over 1,5M Korean workers for transport to the Japanese home islands, where they were concentrated in coal mines in Kyushu and Hokkaido, steel mills in Yawata and Muroran, and military construction sites across Honshu [@Kwon1977Demography; @Lamanna2018Immigrant]. By mid-1945, the Korean resident population in Japan exceeded 2,1M persons, representing more than 8% of the total ethnic Korean population worldwide [@Kwon1977Demography; @SBJ2021Census]. Concurrently, agricultural migration across the Yalu and Tumen rivers expanded the Korean diaspora in Manchuria (notably the Jiandao and Kando region) to over 1,5M people [@Kwon1977Demography; @Sun2019Chinese; @Zhou2025Chinese].

This massive outward labour drain severely depressed domestic population growth during the final colonial years [@Kwon1977Demography]. While high biological fertility generated approximately 400k net natural births annually, outward migration removed between 250k and 300k persons per year between 1940AD and 1944AD [@Kwon1977Demography]. Consequently, peninsular growth slowed to 1,2% annually between 1940AD (24,33M) and 1944AD (25,9M) (Table \ref{tab:validation-korea}) [@Kwon1977Demography; @KOSIS2021Census]. The demographic hemorrhage was acutely visible in rural sex ratios: by 1944AD, working-age male cohorts (ages 20 to 39) in southern farming counties exhibited sex ratios of only 75 to 85 males per 100 females, reflecting the concentrated conscription of young adult men for external industrial drafts [@Kwon1977Demography; @Bien2013High; @Yoo2019Politics].

At the termination of hostilities on 15 August 1945, the collapse of imperial Japan unleashed a chaotic reverse migration tide, as hundreds of thousands of demobilised soldiers, factory labourers and displaced families sought repatriation across the 38th parallel into southern Korea or returned from Manchuria and Japan [@Kwon1977Demography; @EberstadtBanister1992; @UNFPA2008DPRKCensus].

# Sources

<div id="refs"></div>
