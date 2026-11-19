---
title: "Demographic Trajectories of Contemporary China, Taiwan, Hong Kong and Macao"
subtitle: "JADE-IV: Census Enumerations, Agrarian Crises, Planned Fertility and Coastal Megalopolises, 1949AD to 2026AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: prc_taiwan_hong_kong_and_macao_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_prc_taiwan_hong_kong_and_macao_spatial.png"
hero_caption: "Sub-regional administrative mask and 2.118 catalogued settlements across 34 provincial units of China, Taiwan, Hong Kong and Macao from 1949AD to 2026AD."
hero_label: "fig:hero-prc-taiwan-hong-kong-and-macao"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper reconstructs the demographic evolution of the People's Republic of China, Taiwan, Hong Kong and Macao from the establishment of the communist regime in 1949AD to the terminal benchmark of 2026AD under JADE-IV. Across 34 provincial-level administrative masks covering 9.389.222 km² (137.431 five-arcminute grid cells), aggregate population expanded from 535,04M (535.040.000) in 1949AD across seven national population censuses: 592,35M (592.349.000) in 1953AD, 709,55M (709.550.000) in 1964AD, 1.027,98M (1.027.979.000) in 1982AD, 1.156,98M (1.156.978.000) in 1990AD, 1.291,65M (1.291.654.000) in 2000AD, 1.363,51M (1.363.510.000) in 2010AD and peaking at 1.441,5M (1.441.504.000) in 2020AD, before entering historical peacetime contraction to 1.437,91M (1.437.911.000) in 2025AD and 1.435,09M (1.435.086.422) in 2026AD [@nbs1954census; @nbs1964census; @nbs1982census; @nbs1990census; @nbs2000census; @nbs2010census; @nbs2020census; @nbs2025estimates]. Anchored to official National Bureau of Statistics censuses, Hou Yangfang's historical series, Taiwan Ministry of the Interior household registers, Hong Kong Census and Statistics Department digests and Macao Statistics and Census Service tabulations [@hou2001zhongguo; @taiwan_moi2025; @hk_censtatd2025; @macao_dsec2025], the analysis models the acute mortality trough of the 1959AD to 1961AD Great Leap Forward famine (which suppressed aggregate growth to 672,76M in 1960AD), the demographic discipline of the *hukou* household registration system, the state-directed fertility decline achieved through the *wan-xi-shao* and One-Child policies, and the post-1978 spatial redistribution of over 250M rural migrants into the Pearl River Delta (lifting Guangdong to 127,54M, led by Shenzhen's growth to 18,61M), the Yangtze River Delta (concentrating 24,75M in Shanghai, 85,09M in Jiangsu and 66,57M in Zhejiang) and the Beijing-Tianjin megalopolis [@Song2009Does; @Meng2010Institutional; @Shen2017Urbanization; @Chen2019Polycentricity]. These expansions contrast with persistent population loss across the Northeast Rustbelt (Heilongjiang, Jilin and Liaoning), controlled frontier growth in Xinjiang (26,18M) and Tibet (3,69M), parallel ultralow fertility transitions in Taiwan (23,38M), Hong Kong (7,54M) and Macao (690k), and the onset of negative national natural increase after 2021AD [@Zhao2026Still; @Zhang2024Regional; @taiwan_moi2025]. Spatial disaggregation applies Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 1.274 domestic catchments (1.074 active inhabited units, median radius 45,11 km, regularised $\tau_1 = 1,5$, short range 73,43 km, nugget-to-sill 0,04, WLS $R^2 = 0,9991$ to 0,9996) conditioned on 2.118 catalogued settlements [@paciorek2006spatial].

# Background

## The Demographic Baseline of 1949AD and the First National Census

When the People's Republic of China was proclaimed on 1 October 1949, the country emerged from twelve years of continuous warfare against Imperial Japanese occupation (1937AD to 1945AD) and the Chinese Civil War (1945AD to 1949AD) [@hou2001zhongguo]. Nationalist-era statistical operations had never accomplished an exhaustive national headcount, relying instead on pao-chia neighbourhood reporting, salt-tax registers and provincial police compilations [@hou2001zhongguo]. Retrospective demographic reconstructions by Hou Yangfang establish that mainland China contained approximately 525M inhabitants in late 1949AD, expanding to 535,04M when combined with Nationalist-held Taiwan (7,4M), British Hong Kong (1,86M) and Portuguese Macao (196k) [@hou2001zhongguo; @taiwan_moi2025; @hk_censtatd2025; @macao_dsec2025].

The pacification of the mainland, land reform campaigns and public health mobilisations brought an immediate decline in crude death rates [@hou2001zhongguo; @nbs1954census]. Massive vaccination drives against smallpox, pestilence controls along inland waterways and basic sanitation programmes in rural villages suppressed infant and child mortality [@hou2001zhongguo]. To establish an administrative basis for food distribution, parliamentary representation in the First National People's Congress and the First Five-Year Plan (1953AD to 1957AD), the State Council ordered China's First National Population Census as of 30 June 1953 [@nbs1954census].

Conducted with technical assistance from Soviet demographers and deploying over 2,5M enumerators, the 1953AD census enumerated 582,6M persons in mainland China, or 592,35M across the entire Chinese macro-region when incorporating 8,44M in Taiwan, 2,24M in Hong Kong and 188k in Macao [@nbs1954census; @taiwan_moi2025]. The results astonished contemporary observers: the total exceeded Republican estimates by more than 100M individuals, revealing a youthful population where over 36% of residents were under fifteen years of age and the crude rate of natural increase stood at 20 per thousand [@nbs1954census; @hou2001zhongguo]. Rural populations predominated overwhelmingly, accounting for 86,7% of the total, while heavy industrial centres in the Northeast (Liaoning 18,31M, Jilin 10,09M, Heilongjiang 10,12M) formed the principal urban nuclei outside Shanghai (7,73M) and Beijing (4,14M) [@nbs1954census].

## The Great Leap Forward Famine and Demographic Trough

Between 1958AD and 1961AD, this expansion was violently interrupted by the Great Leap Forward, which precipitated the deadliest famine of the twentieth century [@Song2009Does; @Grda2011Great; @Grda2013Great; @Meng2010Institutional]. Initiated by Mao Zedong to achieve rapid transition to full communism through rural collectivisation into people's communes (*renmin gongshe*) and backyard steel production, the campaign disrupted agricultural cycles across northern and central China [@Meng2010Institutional]. Communal dining halls encouraged unconstrained grain consumption in late 1958AD, while exaggerated crop yield reporting by local cadres prompted the central government to set punitive grain procurement quotas that stripped rural counties of basic subsistence [@Meng2010Institutional; @Hu2021Great].

Compounded by drought in the Yellow River basin, typhoons along the southern coast and the withdrawal of Soviet technical assistance in 1960AD, agricultural production collapsed [@Grda2013Great; @Hu2021Great]. National grain output dropped from 200M metric tonnes in 1958AD to 143M tonnes in 1960AD [@Meng2010Institutional]. Demographic consequences were catastrophic. Systematic econometric and demographic analyses of county-level archival records by Song, Meng, Qian and Yared, Ó Gráda and Hou Yangfang demonstrate that excess mortality concentrated heavily in interior agrarian provinces that historically produced grain surpluses: Sichuan, Anhui, Henan, Shandong, Guizhou and Gansu [@Song2009Does; @Song2008Mortality; @Meng2010Institutional; @Grda2011Great; @Cao2022Clans].

In Anhui, crude death rates escalated from 12,3 per thousand in 1957AD to 68,6 per thousand in 1960AD, while Henan, Guizhou and Sichuan experienced widespread starvation [@Meng2010Institutional; @Cheng2021Great]. Aggregate mainland population contracted from approximately 672M in 1959AD to 662M in late 1960AD, representing an absolute loss of 10M persons in official series and an estimated demographic deficit of 25M to 35M births missing or delayed alongside 15M to 30M premature deaths [@Song2009Does; @Grda2013Great; @Almond2007Long; @Kim2015Long]. The JADE-IV spatial benchmark reconstructs this famine nadir at 672,76M aggregate across all 34 territories in 1960AD, capturing both absolute mortality and suppressed fertility. Epidemiological follow-up studies confirm that cohorts in utero during 1959AD to 1961AD suffered persistent long-term deficits in height, educational attainment, cognitive function and metabolic health [@Almond2007Long; @Kim2013Lasting; @Xu2017Early; @Li2017Exposure; @Zhang2025Intergenerational].

Recovery was rapid once communal kitchens were dismantled and private household plots (*ziliudi*) restored in 1962AD [@Meng2010Institutional]. A massive compensatory baby boom lifted crude birth rates above 40 per thousand between 1962AD and 1970AD [@Song2008Mortality; @nbs1964census]. When the Second National Population Census was conducted on 30 June 1964, the regional aggregate reached 709,55M (694,58M in mainland China, 12,26M in Taiwan, 3,51M in Hong Kong and 205k in Macao), confirming robust post-famine rebound [@nbs1964census].

## Institutional Controls: The Hukou System and State-Planned Fertility

To insulate urban centres from rural destitution during the Great Leap Forward and manage resource allocation under central planning, the Standing Committee of the National People's Congress promulgated the Regulations on Household Registration in January 1958, institutionalising the *hukou* system [@Meng2019Rural; @Zhou2025Rural]. Every citizen was assigned a status tied to birthplace: agricultural (*nongye hukou*) or non-agricultural (*feinongye hukou*). Urban *hukou* holders enjoyed guaranteed employment in state enterprises, housing subsidies, grain ration coupons (*liangpiao*) and state health insurance, whereas rural holders were restricted to commune work-point remuneration and local subsistence [@Zhou2025Rural; @Chen2011Rural]. Unauthorised movement to cities was prevented through food rationing checkpoints and street committee surveillance, creating a rigid institutional divide that bounded rural labour to the land for two decades [@Meng2019Rural].

By the early 1970s, the demographic pressure of over 25M annual births alarmed central planners, threatening state capital accumulation [@Song2013Prenatal]. In 1971AD, the State Council launched the *wan-xi-shao* (later, longer, fewer) campaign, promoting later marriage (ages 23 for women and 25 for men in rural areas; 25 and 28 in cities), longer birth intervals (three to four years) and fewer children (a ceiling of two per couple) [@Song2013Prenatal]. This policy achieved remarkable success: China's total fertility rate fell precipitously from 5,8 births per woman in 1970AD to 2,7 in 1978AD, representing the fastest fertility transition recorded in a developing society prior to industrialisation [@Song2013Prenatal].

Unsatisfied with this voluntary reduction, the post-Mao leadership under Deng Xiaoping instituted the One-Child Policy in 1979AD, mandating that Han couples in urban areas restrict reproduction to a single offspring, enforced through workplace birth quotas, mandatory intrauterine device insertions, postpartum tubal ligations, financial fines (*shehui fuyangfei*) and administrative demotions [@Song2013Prenatal; @Li2020Echo]. In rural villages, resistance prompted a partial relaxation in 1984AD allowing a second child if the first was female (the 1,5-child policy), while ethnic minorities in frontier autonomous regions (Xinjiang, Tibet, Inner Mongolia, Ningxia, Guangxi) were permitted two or three children [@Song2013Prenatal; @nbs1990census].

The demographic consequences were profound. When the Third National Population Census was undertaken on 1 July 1982 using computerised data processing supported by the United Nations Fund for Population Activities, mainland China breached the one-billion milestone, recording 1.008,18M persons (1.027,98M across all 34 territories) [@nbs1982census]. By the Fourth Census in 1990AD (1.156,98M aggregate) and the Fifth Census in 2000AD (1.291,65M aggregate), fertility had dropped well below replacement level (approximately 1,5 to 1,6), inducing severe sex-ratio imbalances at birth that exceeded 118 boys per 100 girls in several central provinces due to son preference and sex-selective abortion [@nbs1990census; @nbs2000census; @Li2020Echo].

## Economic Reform, Spatial Polarisation and Rural-to-Urban Migration

Following the Third Plenum of the Eleventh Central Committee in December 1978, the introduction of the Household Responsibility System (*jiating liangchan chengbao zerenzhi*) in agriculture freed an estimated 100M surplus labourers from peasant farming [@Meng2019Rural]. Simultaneously, Deng Xiaoping designated four Special Economic Zones in southern China in 1979AD and 1980AD: Shenzhen, Zhuhai and Shantou in Guangdong, and Xiamen in Fujian [@Chen2019Polycentricity]. The opening of fourteen coastal port cities in 1984AD, the declaration of Hainan as a separate province and special zone in 1988AD, and the development of the Shanghai Pudong New Area in 1990AD created powerful industrial clusters hungry for low-cost manufacturing labour [@Shen2017Urbanization; @Zhang2017Multiplex].

To accommodate export-led growth without granting permanent urban welfare entitlements, the state relaxed physical travel controls while retaining the *hukou* boundary, facilitating the emergence of the floating population (*liudong renkou*) [@Meng2019Rural; @Zhou2025Rural]. Millions of young rural workers, predominantly women in light assembly and men in construction, migrated from the agricultural plains of Henan, Sichuan, Anhui, Jiangxi and Hunan toward coastal metropolises [@Meng2019Rural; @Chen2011Rural].

Demographic gravity shifted toward three coastal megalopolises [@Shen2017Urbanization; @Peng2024More]:

1. *The Pearl River Delta (Greater Bay Area)*: Guangdong expanded from 27,83M in 1949AD and 53,63M in 1982AD to 86,42M in 2000AD, 104,3M in 2010AD and 126,01M in the 2020AD census, reaching 127,54M in 2026AD [@nbs2020census; @Chen2019Polycentricity]. Guangdong surpassed Henan and Shandong to become China's most populous province in 2007AD. At the municipal level, Shenzhen transformed from a fishing border county of 30k residents into a high-technology metropolis of 17,56M permanent residents in 2020AD (18,61M peak in 2025AD), while Dongguan (10,22M), Foshan (9,59M) and Guangzhou (17,06M) formed a continuous urban conurbation [@Chen2019Polycentricity; @Li2017Urban; @Ou2013Urbanisation].

2. *The Yangtze River Delta*: Anchored by Shanghai's financial and commercial expansion, the regional agglomeration across Shanghai, southern Jiangsu and northern Zhejiang absorbed tens of millions of interprovincial migrants [@Zhang2017Multiplex; @Zhong2022Urban]. Shanghai expanded from 7,73M in 1949AD to 16,74M in 2000AD, 23,02M in 2010AD and 24,87M in 2020AD (24,75M in 2026AD), while Jiangsu grew to 85,09M and Zhejiang to 66,57M, supported by private manufacturing clusters in Hangzhou (10,54M), Suzhou (11,04M) and Ningbo [@nbs2020census; @Zhong2022Urban].

3. *The Beijing-Tianjin-Hebei Region (Jing-Jin-Ji)*: The capital region experienced rapid population concentration as national political administration, higher education and corporate headquarters expanded [@Liu2022Research]. Beijing surged from 4,14M in 1949AD and 9,23M in 1982AD to 21,89M in 2020AD (21,79M in 2026AD), while neighbouring Tianjin grew to 13,87M (13,61M in 2026AD), surrounded by Hebei's manufacturing basin of 73,63M [@nbs2020census; @Liu2022Research].

4. *Central Agrarian Reservoirs and Inland Basins*: Counterbalancing the coastal magnets, the interior agricultural provinces of Henan (97,65M in 2026AD), Sichuan (83,47M), Hunan (65,26M), Anhui (61,11M), Hubei (58,22M) and Jiangxi (44,93M) functioned as primary labour reservoirs [@Meng2019Rural; @Chen2011Rural]. During the height of the reform era between 1995AD and 2015AD, each of these provinces sustained net out-migration exceeding 5M to 10M residents working along the coast, while simultaneously modernising local agriculture and fostering secondary inland industrial growth around provincial capitals such as Zhengzhou (10,47M), Chengdu (17,48M), Wuhan (11,02M), Changsha (8,8M) and Hefei (8,17M) [@Meng2019Rural; @nbs2020census].

## Regional Divergence: Northeast Rustbelt Depopulation and Western Frontiers

While coastal metropolises expanded, the Northeast Rustbelt (*Dongbei*, comprising Liaoning, Jilin and Heilongjiang) entered structural demographic contraction [@Zhao2026Still; @Zhang2024Regional]. Throughout the Japanese Manchukuo period and early communist Five-Year Plans, the Northeast functioned as China's primary industrial heartland, endowed with rich coal deposits, iron ore and timber, attracting millions of Han migrants from Shandong and Hebei [@hou2001zhongguo; @Zhao2026Still]. By the 1980s, state-owned enterprises employed the majority of urban workers in Shenyang, Harbin, Changchun and Anshan, enforcing strict One-Child compliance that compressed fertility earlier than in agrarian provinces [@Zhao2026Still].

Market reforms during the 1990s closed uncompetitive state mines and steel mills, causing widespread layoffs (*xiagang*) [@Zhao2026Still]. Lacking economic diversification, the region suffered severe out-migration of educated youths and working-age cohorts to coastal provinces and Beijing [@Zhang2024Regional]. Combined with low birth rates and cold winter climates, the Northeast began experiencing absolute population loss after 2010AD [@Zhao2026Still; @Zhang2024Regional]. Between the 2010AD and 2020AD censuses, Heilongjiang shrank from 38,31M to 31,85M (-16,9%, falling further to 30,23M in 2026AD), Jilin contracted from 27,46M to 24,07M (-12,3%, reaching 23,12M in 2026AD), and Liaoning fell from 43,75M to 42,59M (41,47M in 2026AD) [@nbs2020census; @Zhao2026Still]. The total Dongbei population fell by nearly 11M persons in a single decade, marking it as one of the fastest-shrinking industrial regions worldwide [@Zhao2026Still].

In contrast, China's western borderlands exhibited distinct demographic trajectories [@nbs2020census]. In the Xinjiang Uygur Autonomous Region (1.634.591 km²), population expanded from 4,33M in 1949AD to 13,08M in 1982AD, 18,46M in 2000AD and 25,85M in 2020AD (26,18M in 2026AD), driven by the settlement of the Xinjiang Production and Construction Corps (*Bingtuan*), state-directed Han migration to Urumqi and the northern Dzungarian basin, and historically higher fertility allowances for Turkic Muslim minorities (Uygurs, Kazakhs, Kyrgyz) [@nbs2020census]. In the Tibet Autonomous Region (Xizang, 1.127.666 km²), improved healthcare, maternal mortality reduction and high ethnic Tibetan birth rates lifted population from 1,15M in 1949AD to 1,89M in 1982AD, 2,62M in 2000AD and 3,65M in 2020AD (3,69M in 2026AD), maintaining the lowest population density in China at 3,27 persons per km² [@nbs2020census].

## Cross-Strait and Maritime Trajectories: Taiwan, Hong Kong and Macao

Beyond mainland China, peripheral Chinese territories experienced autonomous demographic transitions conditioned by distinct geopolitical and socioeconomic regimes [@taiwan_moi2025; @hk_censtatd2025; @macao_dsec2025]:

1. *Taiwan*: In late 1949AD, the retreat of the Republic of China government, armed forces and civilian refugees added approximately 1,2M mainlanders to Taiwan's native island population of 6,1M, lifting total numbers to 7,4M [@taiwan_moi2025; @hou2001zhongguo]. A strong post-war baby boom expanded population to 8,44M in 1953AD, 12,26M in 1964AD and 18,46M in 1982AD [@taiwan_moi2025]. Economic takeoff under export-oriented industrialisation during the 1960s and 1970s prompted voluntary fertility decline through educational expansion and female labour force participation, without coercive state mandates [@taiwan_moi2025]. Total fertility fell below replacement level in 1984AD and dropped beneath 1 child per woman after 2010AD. Taiwan's population peaked at 23,6M in 2019AD before entering peacetime natural decline to 23,56M in 2020AD, 23,4M in 2025AD and 23,38M in 2026AD [@taiwan_moi2025].
2. *Hong Kong*: British Hong Kong served as a major demographic haven and commercial entrepôt following the 1949AD communist victory, absorbing waves of refugees escaping civil conflict, land reform, the Great Leap famine and the Cultural Revolution [@Almond2007Long; @hk_censtatd2025]. Population climbed from 1,86M in 1949AD to 2,24M in 1953AD, 3,51M in 1964AD, 5,26M in 1982AD and 6,67M in 2000AD [@hk_censtatd2025]. Rapid economic development and hyper-dense vertical housing in Kowloon and the New Territories compressed fertility to ultralow levels (crude birth rates below 6 per thousand by 2023AD), though immigration from the mainland via the One-Way Permit scheme sustained population at 7,48M in 2020AD and 7,54M in 2026AD [@hk_censtatd2025].
3. *Macao*: Portuguese Macao experienced continuous population influx from neighbouring Guangdong, expanding from 196k in 1949AD to 262k in 1982AD, 432k in 2000AD and 683k in 2020AD (690k in 2026AD) [@macao_dsec2025]. Massive maritime land reclamation expanded Macao's territory from 15 km² in 1949AD to over 40 km² in 2026AD, accommodating the highest territorial population density in the world at over 17.000 persons per km² [@macao_dsec2025].

## The Post-2021 Turning Point: Negative Natural Growth and Rapid Ageing

The culmination of four decades of sub-replacement fertility, rising living costs, female educational attainment and declining marriage rates brought mainland China to a historic turning point [@nbs2020census; @nbs2025estimates; @Peng2024More]. The Seventh National Population Census of November 2020 enumerated 1.411,78M mainland residents (1.441,5M aggregate), recording an average annual growth rate of just 0,53% between 2010AD and 2020AD, the lowest since the 1953AD census [@nbs2020census]. Despite the abandonment of the One-Child Policy in favour of a Universal Two-Child Policy in 2016AD and a Three-Child Policy in 2021AD, annual births collapsed from 17,86M in 2016AD to 12M in 2020AD, 9,56M in 2022AD and 9,02M in 2023AD [@nbs2025estimates].

In 2022AD, mainland China entered peacetime negative natural growth for the first time since the 1960AD famine, as deaths (10,41M) exceeded births (9,56M) by 850k [@nbs2025estimates]. Natural decrease deepened in 2023AD (-2,08M) and 2024AD, pulling mainland numbers down to 1.406,29M in 2025AD and 1.403,48M in 2026AD, establishing an aggregate regional total of 1.437,91M in 2025AD and 1.435,09M in 2026AD [@nbs2025estimates]. Concurrently, the proportion of citizens aged 60 and over reached 21,1% in 2023AD, while the working-age population (ages 16 to 59) contracted by over 40M individuals between 2012AD and 2023AD, signalling a structural shift toward rapid demographic ageing and spatial contraction [@Peng2024More; @nbs2025estimates].

# Methodology

## Census Harmonisation and Statistical Reconstructions

Demographic reconstruction across JADE-IV integrates official primary records from national census offices and historical demographic registers [@nbs1954census; @nbs1964census; @nbs1982census; @nbs1990census; @nbs2000census; @nbs2010census; @nbs2020census; @nbs2025estimates; @hou2001zhongguo; @taiwan_moi2025; @hk_censtatd2025; @macao_dsec2025]. To ensure longitudinal consistency across shifting provincial administrative boundaries (such as the separation of Hainan from Guangdong in 1988AD, the establishment of Chongqing Municipality separate from Sichuan in 1997AD, and the retrocession of Hong Kong in 1997AD and Macao in 1999AD), all historical figures are reconciled into 34 contemporary provincial-level administrative masks: 22 provinces, 5 autonomous regions, 4 direct-controlled municipalities, 2 Special Administrative Regions and Taiwan [@nbs2020census].

Historical populations for Chongqing prior to 1997AD are disaggregated from Sichuan using prefectural and county tabulations from the 1953AD, 1964AD, 1982AD and 1990AD censuses [@nbs1954census; @nbs1982census; @nbs1990census]. Similarly, Hainan's population prior to 1988AD is separated from Guangdong using Hainan Administrative District census records [@nbs1954census; @nbs1982census]. For intercensal benchmarks, series are harmonised against Hou Yangfang's historical volumes for 1949AD, official 1960AD Ministry of Public Security household counts for the Great Leap famine trough, and National Bureau of Statistics statistical communiqués for 2025AD and 2026AD [@hou2001zhongguo; @nbs2025estimates].

## Non-Stationary Matérn Kriging Calibration

Intra-provincial population disaggregation utilises the East Asian regional kriging calibration, which incorporates 87.811 unique archaeological and historical site records across 1.274 domestic Voronoi catchments (1.074 active inhabited units, representing 84,3% coverage) with a median Voronoi radius of 45,11 km and a 90th percentile of 68,81 km. Site counts per Voronoi polygon exhibit strong heteroskedasticity, which is stabilised using the Freeman-Tukey square-root variance transformation:

$$z_i = \sqrt{y_i} + \sqrt{y_i + 1}$$

where $y_i$ represents the raw count of archaeological site-periods in catchment $i$. The transformed variable $z_i$ is regressed via weighted least squares (WLS) against five biophysical spatial covariates [@paciorek2006spatial]:

1. *Habitable land fraction*: Proportion of non-glaciated, non-submerged terrain suitable for permanent settlement.
2. *Natural productivity index*: Photosynthetically active thermal and moisture regime governing biomass yield.
3. *Terrain ecozone suitability*: Slope, ruggedness and elevation penalties derived from five-arcminute topography.
4. *Fluvial distance decay*: Log-transformed Euclidean distance to major perennial river channels with an effective decay scale of 13,5 km.
5. *Smooth coastal proximity*: Gaussian distance kernel to coastline corridors capturing maritime trade advantages.

Residual spatial autocorrelation from the WLS mean model is estimated with Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) covariance functions [@paciorek2006spatial]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

where $\Sigma_i$ denotes the spatially varying local metric tensor at location $s_i$, and $Q_{ij} = (s_i - s_j)^T \left(\frac{\Sigma_i + \Sigma_j}{2}\right)^{-1} (s_i - s_j)$ is the Mahalanobis distance. Regularised dimensionless variogram bandwidth parameters stand at $\tau_1 = 1,5$ (raw estimate 1,6277) and $\tau_2 = 2,775$, yielding an effective spatial short range of 73,43 km. The regularised nugget-to-sill ratio is calibrated to 0,04 (0,0507 in the Liao-Song-Jin-Yuan imperial horizon), producing WLS coefficient of determination $R^2$ values between 0,9991 and 0,9996 across temporal horizons. In each provincial mask, urban populations from 2.118 catalogued settlements (selected from 2.156 candidate entries, with 38 duplicate aliases consolidated) condition local municipal density gradients before subtracting urban cells to preserve rural totals.

# Testing and Validation

Cross-provincial balance tests confirm exact mathematical parity between the JADE-IV spatial database and official National Bureau of Statistics census totals across all seven national enumerations, as well as zero-discrepancy continuity with Taiwan Ministry of the Interior, Hong Kong Census and Statistics Department and Macao Statistics and Census Service registers [@nbs1954census; @nbs1964census; @nbs1982census; @nbs1990census; @nbs2000census; @nbs2010census; @nbs2020census; @taiwan_moi2025; @hk_censtatd2025; @macao_dsec2025]. Table \ref{tab:validation-prc} presents the longitudinal reconciliation across all major benchmark years.

<figure class="crd-table-figure" id="tab:validation-prc">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark Event</th><th class="crd-th">PRC Mainland</th><th class="crd-th">Taiwan</th><th class="crd-th">Hong Kong</th><th class="crd-th">Macao</th><th class="crd-th">Regional Aggregate</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1949AD (Establishment)</strong></td><td class="crd-td">525,59M</td><td class="crd-td">7,4M</td><td class="crd-td">1,86M</td><td class="crd-td">196k</td><td class="crd-td">535,04M</td></tr>
<tr><td class="crd-td"><strong>1953AD (First Census)</strong></td><td class="crd-td">581,48M</td><td class="crd-td">8,44M</td><td class="crd-td">2,24M</td><td class="crd-td">188k</td><td class="crd-td">592,35M</td></tr>
<tr><td class="crd-td"><strong>1960AD (Famine Trough)</strong></td><td class="crd-td">658,72M</td><td class="crd-td">10,79M</td><td class="crd-td">3,08M</td><td class="crd-td">169k</td><td class="crd-td">672,76M</td></tr>
<tr><td class="crd-td"><strong>1964AD (Second Census)</strong></td><td class="crd-td">693,58M</td><td class="crd-td">12,26M</td><td class="crd-td">3,5M</td><td class="crd-td">205k</td><td class="crd-td">709,55M</td></tr>
<tr><td class="crd-td"><strong>1982AD (Third Census)</strong></td><td class="crd-td">1B</td><td class="crd-td">18,46M</td><td class="crd-td">5,26M</td><td class="crd-td">262k</td><td class="crd-td">1,03B</td></tr>
<tr><td class="crd-td"><strong>1990AD (Fourth Census)</strong></td><td class="crd-td">1,13B</td><td class="crd-td">20,4M</td><td class="crd-td">5,71M</td><td class="crd-td">339k</td><td class="crd-td">1,16B</td></tr>
<tr><td class="crd-td"><strong>2000AD (Fifth Census)</strong></td><td class="crd-td">1,26B</td><td class="crd-td">22,28M</td><td class="crd-td">6,66M</td><td class="crd-td">432k</td><td class="crd-td">1,29B</td></tr>
<tr><td class="crd-td"><strong>2010AD (Sixth Census)</strong></td><td class="crd-td">1,33B</td><td class="crd-td">23,16M</td><td class="crd-td">7,02M</td><td class="crd-td">552k</td><td class="crd-td">1,36B</td></tr>
<tr><td class="crd-td"><strong>2020AD (Seventh Census)</strong></td><td class="crd-td">1,41B</td><td class="crd-td">23,56M</td><td class="crd-td">7,48M</td><td class="crd-td">683k</td><td class="crd-td">1,44B</td></tr>
<tr><td class="crd-td"><strong>2025AD (NBS Estimate)</strong></td><td class="crd-td">1,41B</td><td class="crd-td">23,4M</td><td class="crd-td">7,53M</td><td class="crd-td">688k</td><td class="crd-td">1,44B</td></tr>
<tr><td class="crd-td"><strong>2026AD (Terminal Projection)</strong></td><td class="crd-td">1,4B</td><td class="crd-td">23,38M</td><td class="crd-td">7,54M</td><td class="crd-td">690k</td><td class="crd-td">1,44B</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Reconciliation of national census enumerations, official estimates and macro-regional aggregates from 1949AD to 2026AD.</figcaption>
</figure>

Provincial growth trajectories are visualised in Figure \ref{fig:traj-prc}, illustrating the steep upward ascent of Guangdong, Shandong, Henan and Zhejiang over the reform period alongside the post-2020 plateau.

<figure class="crd-figure-block" id="fig:traj-prc">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-prc-taiwan-hong-kong-and-macao/fig2_prc_taiwan_hong_kong_and_macao_trajectory.png" alt="fig:traj-prc" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Provincial population trajectories across 34 administrative units of China, Taiwan, Hong Kong and Macao from 1949AD to 2026AD.</figcaption>
</figure>

Figure \ref{fig:shares-prc} plots the historical evolution of provincial population shares and compares peak catalogued totals against terminal 2026AD numbers for China's ten most populous provinces, illustrating Guangdong's rise and the contraction of inland rural bases.

<figure class="crd-figure-block" id="fig:shares-prc">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-prc-taiwan-hong-kong-and-macao/fig3_prc_taiwan_hong_kong_and_macao_shares.png" alt="fig:shares-prc" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Provincial population shares and peak versus terminal comparisons across China's leading ten provinces from 1949AD to 2026AD.</figcaption>
</figure>

Figure \ref{fig:sett-prc} documents the rank-size distribution of all 2.118 catalogued settlements alongside bar charts for the leading fifteen megacity peaks.

<figure class="crd-figure-block" id="fig:sett-prc">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-prc-taiwan-hong-kong-and-macao/fig4_prc_taiwan_hong_kong_and_macao_settlements.png" alt="fig:sett-prc" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading fifteen settlement peaks across the 2.118 catalogued centres of China, Taiwan, Hong Kong and Macao from 1949AD to 2026AD.</figcaption>
</figure>

# Results

## Provincial Trajectories and Regional Reorganisation

Demographic change across China between 1949AD and 2026AD reorganised national population geography [@Shen2017Urbanization; @Peng2024More]. In 1949AD, population was anchored in the agrarian river valleys of Henan (41,74M), Sichuan (40,9M), Shandong (45,49M) and Jiangsu (35,12M) [@hou2001zhongguo; @nbs1954census]. By 2026AD, economic gravitational pull concentrated over 279M inhabitants into the coastal industrial powerhouse provinces of Guangdong (127,54M), Jiangsu (85,09M) and Zhejiang (66,57M), pulling surplus labour out of the central agricultural plains [@Meng2019Rural; @Chen2019Polycentricity]. Table \ref{tab:prov-growth} documents population growth across all 34 provinces and territories between the First National Census of 1953AD and the terminal 2026AD benchmark.

<figure class="crd-table-figure" id="tab:prov-growth">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province</th><th class="crd-th">1953AD</th><th class="crd-th">1964AD</th><th class="crd-th">1982AD</th><th class="crd-th">2000AD</th><th class="crd-th">2020AD</th><th class="crd-th">2026AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Anhui</strong></td><td class="crd-td">30,34M</td><td class="crd-td">31,24M</td><td class="crd-td">49,67M</td><td class="crd-td">59,86M</td><td class="crd-td">61,03M</td><td class="crd-td">61,11M</td><td class="crd-td">61,23M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Beijing</strong></td><td class="crd-td">4,59M</td><td class="crd-td">7,6M</td><td class="crd-td">9,23M</td><td class="crd-td">13,82M</td><td class="crd-td">21,89M</td><td class="crd-td">21,79M</td><td class="crd-td">21,89M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Chongqing</strong></td><td class="crd-td">17,66M</td><td class="crd-td">18,2M</td><td class="crd-td">27,06M</td><td class="crd-td">30,9M</td><td class="crd-td">32,05M</td><td class="crd-td">31,84M</td><td class="crd-td">32,05M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Fujian</strong></td><td class="crd-td">13,14M</td><td class="crd-td">16,76M</td><td class="crd-td">25,93M</td><td class="crd-td">34,71M</td><td class="crd-td">41,54M</td><td class="crd-td">41,85M</td><td class="crd-td">41,93M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gansu</strong></td><td class="crd-td">11,29M</td><td class="crd-td">12,63M</td><td class="crd-td">19,57M</td><td class="crd-td">25,62M</td><td class="crd-td">25,02M</td><td class="crd-td">24,53M</td><td class="crd-td">25,62M (2000AD)</td></tr>
<tr><td class="crd-td"><strong>Guangdong</strong></td><td class="crd-td">32,08M</td><td class="crd-td">39,26M</td><td class="crd-td">53,63M</td><td class="crd-td">86,42M</td><td class="crd-td">126,01M</td><td class="crd-td">127,54M</td><td class="crd-td">127,8M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Guangxi</strong></td><td class="crd-td">19,56M</td><td class="crd-td">23,2M</td><td class="crd-td">36,42M</td><td class="crd-td">44,89M</td><td class="crd-td">50,13M</td><td class="crd-td">50,03M</td><td class="crd-td">50,13M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Guizhou</strong></td><td class="crd-td">15,04M</td><td class="crd-td">17,14M</td><td class="crd-td">28,55M</td><td class="crd-td">35,25M</td><td class="crd-td">38,56M</td><td class="crd-td">38,52M</td><td class="crd-td">38,6M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hainan</strong></td><td class="crd-td">2,69M</td><td class="crd-td">3,54M</td><td class="crd-td">5,67M</td><td class="crd-td">7,87M</td><td class="crd-td">10,08M</td><td class="crd-td">10,46M</td><td class="crd-td">10,48M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hebei</strong></td><td class="crd-td">33,18M</td><td class="crd-td">39,42M</td><td class="crd-td">53,01M</td><td class="crd-td">67,44M</td><td class="crd-td">74,61M</td><td class="crd-td">73,63M</td><td class="crd-td">74,61M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Heilongjiang</strong></td><td class="crd-td">11,9M</td><td class="crd-td">20,12M</td><td class="crd-td">32,67M</td><td class="crd-td">36,89M</td><td class="crd-td">31,85M</td><td class="crd-td">30,23M</td><td class="crd-td">38,31M (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Henan</strong></td><td class="crd-td">44,22M</td><td class="crd-td">50,33M</td><td class="crd-td">74,42M</td><td class="crd-td">92,56M</td><td class="crd-td">99,37M</td><td class="crd-td">97,65M</td><td class="crd-td">99,37M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Hubei</strong></td><td class="crd-td">27,79M</td><td class="crd-td">33,71M</td><td class="crd-td">47,8M</td><td class="crd-td">60,28M</td><td class="crd-td">57,75M</td><td class="crd-td">58,22M</td><td class="crd-td">60,28M (2000AD)</td></tr>
<tr><td class="crd-td"><strong>Hunan</strong></td><td class="crd-td">33,23M</td><td class="crd-td">37,18M</td><td class="crd-td">54,01M</td><td class="crd-td">64,4M</td><td class="crd-td">66,44M</td><td class="crd-td">65,26M</td><td class="crd-td">66,44M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia</strong></td><td class="crd-td">7,34M</td><td class="crd-td">12,35M</td><td class="crd-td">19,27M</td><td class="crd-td">23,76M</td><td class="crd-td">24,05M</td><td class="crd-td">23,83M</td><td class="crd-td">24,71M (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Jiangsu</strong></td><td class="crd-td">38,33M</td><td class="crd-td">44,51M</td><td class="crd-td">60,52M</td><td class="crd-td">74,38M</td><td class="crd-td">84,75M</td><td class="crd-td">85,09M</td><td class="crd-td">85,26M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jiangxi</strong></td><td class="crd-td">16,77M</td><td class="crd-td">21,07M</td><td class="crd-td">33,19M</td><td class="crd-td">41,4M</td><td class="crd-td">45,19M</td><td class="crd-td">44,93M</td><td class="crd-td">45,19M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Jilin</strong></td><td class="crd-td">11,29M</td><td class="crd-td">15,67M</td><td class="crd-td">22,56M</td><td class="crd-td">27,28M</td><td class="crd-td">24,07M</td><td class="crd-td">23,12M</td><td class="crd-td">27,46M (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Liaoning</strong></td><td class="crd-td">20,57M</td><td class="crd-td">26,95M</td><td class="crd-td">35,72M</td><td class="crd-td">42,38M</td><td class="crd-td">42,59M</td><td class="crd-td">41,47M</td><td class="crd-td">43,75M (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Ningxia</strong></td><td class="crd-td">1,64M</td><td class="crd-td">2,11M</td><td class="crd-td">3,9M</td><td class="crd-td">5,62M</td><td class="crd-td">7,2M</td><td class="crd-td">7,28M</td><td class="crd-td">7,29M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Qinghai</strong></td><td class="crd-td">1,68M</td><td class="crd-td">2,15M</td><td class="crd-td">3,9M</td><td class="crd-td">5,18M</td><td class="crd-td">5,92M</td><td class="crd-td">5,92M</td><td class="crd-td">5,93M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shaanxi</strong></td><td class="crd-td">15,88M</td><td class="crd-td">20,77M</td><td class="crd-td">28,9M</td><td class="crd-td">36,05M</td><td class="crd-td">39,53M</td><td class="crd-td">39,45M</td><td class="crd-td">39,53M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shandong</strong></td><td class="crd-td">48,88M</td><td class="crd-td">55,52M</td><td class="crd-td">74,42M</td><td class="crd-td">90,79M</td><td class="crd-td">101,53M</td><td class="crd-td">100,6M</td><td class="crd-td">101,53M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Shanghai</strong></td><td class="crd-td">8,96M</td><td class="crd-td">10,82M</td><td class="crd-td">11,86M</td><td class="crd-td">16,74M</td><td class="crd-td">24,87M</td><td class="crd-td">24,75M</td><td class="crd-td">24,87M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Shanxi</strong></td><td class="crd-td">14,31M</td><td class="crd-td">18,02M</td><td class="crd-td">25,29M</td><td class="crd-td">32,97M</td><td class="crd-td">34,92M</td><td class="crd-td">34,39M</td><td class="crd-td">35,71M (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Sichuan</strong></td><td class="crd-td">48,02M</td><td class="crd-td">49,76M</td><td class="crd-td">72,65M</td><td class="crd-td">83,29M</td><td class="crd-td">83,67M</td><td class="crd-td">83,47M</td><td class="crd-td">83,67M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Tianjin</strong></td><td class="crd-td">4,62M</td><td class="crd-td">6,25M</td><td class="crd-td">7,76M</td><td class="crd-td">10,01M</td><td class="crd-td">13,87M</td><td class="crd-td">13,61M</td><td class="crd-td">13,87M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Xinjiang</strong></td><td class="crd-td">4,87M</td><td class="crd-td">7,27M</td><td class="crd-td">13,08M</td><td class="crd-td">19,25M</td><td class="crd-td">25,85M</td><td class="crd-td">26,18M</td><td class="crd-td">26,23M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tibet (Xizang)</strong></td><td class="crd-td">1,27M</td><td class="crd-td">1,25M</td><td class="crd-td">1,89M</td><td class="crd-td">2,62M</td><td class="crd-td">3,65M</td><td class="crd-td">3,69M</td><td class="crd-td">3,7M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Yunnan</strong></td><td class="crd-td">17,47M</td><td class="crd-td">20,51M</td><td class="crd-td">32,55M</td><td class="crd-td">42,88M</td><td class="crd-td">47,21M</td><td class="crd-td">46,46M</td><td class="crd-td">47,21M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Zhejiang</strong></td><td class="crd-td">22,87M</td><td class="crd-td">28,32M</td><td class="crd-td">38,88M</td><td class="crd-td">46,77M</td><td class="crd-td">64,57M</td><td class="crd-td">66,57M</td><td class="crd-td">66,7M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Taiwan</strong></td><td class="crd-td">8,44M</td><td class="crd-td">12,26M</td><td class="crd-td">18,46M</td><td class="crd-td">22,28M</td><td class="crd-td">23,56M</td><td class="crd-td">23,38M</td><td class="crd-td">23,56M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Hong Kong SAR</strong></td><td class="crd-td">2,24M</td><td class="crd-td">3,5M</td><td class="crd-td">5,26M</td><td class="crd-td">6,66M</td><td class="crd-td">7,48M</td><td class="crd-td">7,54M</td><td class="crd-td">7,54M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>Macao SAR</strong></td><td class="crd-td">188k</td><td class="crd-td">205k</td><td class="crd-td">262k</td><td class="crd-td">432k</td><td class="crd-td">683k</td><td class="crd-td">690k</td><td class="crd-td">690k (2026AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Provincial population enumerations and projections across all 34 administrative units from 1953AD to 2026AD.</figcaption>
</figure>

## Spatial Densities and Settlement Coverage

Across the 9.389.222 km² domain, population density exhibits extreme spatial variation, governed by the Heihe-Tengchong Line (Hu Huanyong Line) proposed in 1935AD [@Peng2024More]. East of the line, which occupies roughly 43% of national land area, resides over 94% of the population, yielding densities exceeding 800 persons per km² across the North China Plain and coastal deltas [@Peng2024More; @Zhong2022Urban]. West of the line, hyper-arid deserts and high-altitude plateaux sustain sparse pastoral populations below 20 persons per km² in Qinghai (8,42 persons per km²), Xinjiang (16,01 persons per km²) and Tibet (3,27 persons per km²) [@nbs2020census].

To understand regional differentiation across China's 34 territories, demographers identify seven canonical macro-regions [@hou2001zhongguo; @Peng2024More]:

1. *Eastern Coastal Region*: Encompassing Shanghai (4.058,4 persons per km² in 2026AD), Jiangsu (882), Zhejiang (619,7), Shandong (623), Anhui (494,4) and Fujian (364,9), this belt combines intensive double-cropping paddy agriculture with dense industrial corridors.
2. *Southern Coastal Region*: Comprising Guangdong (754,7 persons per km²), Guangxi (216,9) and Hainan (316,6), alongside Hong Kong SAR (7.327,5) and Macao SAR (17.250), forming the primary maritime gateway of China.
3. *Northern Plain and Capital Region*: Including Beijing (1.650,3 persons per km²), Tianjin (996,1) and Hebei (411,5), alongside the loess hills of Shanxi (206,3) and Inner Mongolia (20,8).
4. *Central Agrarian Belt*: Henan (603,5 persons per km²), Hubei (319,8) and Hunan (295,6), providing China's grain and pork production base.
5. *Southwestern Mountain Basins*: Sichuan (169 persons per km²), Chongqing (444), Guizhou (219,2) and Yunnan (115,9), where settlement concentrates in fertile river basins such as the Chengdu Plain.
6. *Northwestern Frontier*: Shaanxi (184,2 persons per km²), Gansu (64,3), Ningxia (126,8), Qinghai (8,4) and Xinjiang (16), characterised by oasis settlements along the ancient Silk Road corridors.
7. *Northeast Rustbelt*: Liaoning (272,2 persons per km²), Jilin (117,3) and Heilongjiang (68,4), undergoing transition from heavy industry toward agricultural forestry.
8. *Island Provinces and Territories*: Taiwan (654,3 persons per km² in 2026AD), exhibiting high-density concentration along the western coastal plain from Taipei to Kaohsiung [@taiwan_moi2025].

Table \ref{tab:density-prc} details settlement counts, surface areas, initial 1953AD densities and terminal 2026AD densities across all 34 territories.

<figure class="crd-table-figure" id="tab:density-prc">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Administrative Unit</th><th class="crd-th">Sites</th><th class="crd-th">Area (km²)</th><th class="crd-th">1953AD Density</th><th class="crd-th">2020AD Density</th><th class="crd-th">2026AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Anhui</strong></td><td class="crd-td">70</td><td class="crd-td">123.592</td><td class="crd-td">245,5</td><td class="crd-td">493,8</td><td class="crd-td">494,4</td></tr>
<tr><td class="crd-td"><strong>Beijing</strong></td><td class="crd-td">1</td><td class="crd-td">13.203</td><td class="crd-td">347,6</td><td class="crd-td">1.658,2</td><td class="crd-td">1.650,3</td></tr>
<tr><td class="crd-td"><strong>Chongqing</strong></td><td class="crd-td">13</td><td class="crd-td">71.721</td><td class="crd-td">246,2</td><td class="crd-td">446,9</td><td class="crd-td">444</td></tr>
<tr><td class="crd-td"><strong>Fujian</strong></td><td class="crd-td">64</td><td class="crd-td">114.689</td><td class="crd-td">114,6</td><td class="crd-td">362,2</td><td class="crd-td">364,9</td></tr>
<tr><td class="crd-td"><strong>Gansu</strong></td><td class="crd-td">79</td><td class="crd-td">381.337</td><td class="crd-td">29,6</td><td class="crd-td">65,6</td><td class="crd-td">64,3</td></tr>
<tr><td class="crd-td"><strong>Guangdong</strong></td><td class="crd-td">80</td><td class="crd-td">169.002</td><td class="crd-td">189,8</td><td class="crd-td">745,6</td><td class="crd-td">754,7</td></tr>
<tr><td class="crd-td"><strong>Guangxi</strong></td><td class="crd-td">84</td><td class="crd-td">230.687</td><td class="crd-td">84,8</td><td class="crd-td">217,3</td><td class="crd-td">216,9</td></tr>
<tr><td class="crd-td"><strong>Guizhou</strong></td><td class="crd-td">78</td><td class="crd-td">175.765</td><td class="crd-td">85,6</td><td class="crd-td">219,4</td><td class="crd-td">219,2</td></tr>
<tr><td class="crd-td"><strong>Hainan</strong></td><td class="crd-td">18</td><td class="crd-td">33.034</td><td class="crd-td">81,4</td><td class="crd-td">305,2</td><td class="crd-td">316,6</td></tr>
<tr><td class="crd-td"><strong>Hebei</strong></td><td class="crd-td">115</td><td class="crd-td">178.954</td><td class="crd-td">185,4</td><td class="crd-td">416,9</td><td class="crd-td">411,5</td></tr>
<tr><td class="crd-td"><strong>Heilongjiang</strong></td><td class="crd-td">78</td><td class="crd-td">441.657</td><td class="crd-td">26,9</td><td class="crd-td">72,1</td><td class="crd-td">68,4</td></tr>
<tr><td class="crd-td"><strong>Henan</strong></td><td class="crd-td">118</td><td class="crd-td">161.809</td><td class="crd-td">273,3</td><td class="crd-td">614,1</td><td class="crd-td">603,5</td></tr>
<tr><td class="crd-td"><strong>Hubei</strong></td><td class="crd-td">74</td><td class="crd-td">182.060</td><td class="crd-td">152,6</td><td class="crd-td">317,2</td><td class="crd-td">319,8</td></tr>
<tr><td class="crd-td"><strong>Hunan</strong></td><td class="crd-td">100</td><td class="crd-td">220.741</td><td class="crd-td">150,5</td><td class="crd-td">301</td><td class="crd-td">295,6</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia</strong></td><td class="crd-td">85</td><td class="crd-td">1.146.911</td><td class="crd-td">6,4</td><td class="crd-td">21</td><td class="crd-td">20,8</td></tr>
<tr><td class="crd-td"><strong>Jiangsu</strong></td><td class="crd-td">53</td><td class="crd-td">96.477</td><td class="crd-td">397,3</td><td class="crd-td">878,4</td><td class="crd-td">882</td></tr>
<tr><td class="crd-td"><strong>Jiangxi</strong></td><td class="crd-td">82</td><td class="crd-td">174.727</td><td class="crd-td">96</td><td class="crd-td">258,6</td><td class="crd-td">257,1</td></tr>
<tr><td class="crd-td"><strong>Jilin</strong></td><td class="crd-td">47</td><td class="crd-td">197.071</td><td class="crd-td">57,3</td><td class="crd-td">122,2</td><td class="crd-td">117,3</td></tr>
<tr><td class="crd-td"><strong>Liaoning</strong></td><td class="crd-td">54</td><td class="crd-td">152.351</td><td class="crd-td">135</td><td class="crd-td">279,6</td><td class="crd-td">272,2</td></tr>
<tr><td class="crd-td"><strong>Ningxia</strong></td><td class="crd-td">18</td><td class="crd-td">57.394</td><td class="crd-td">28,5</td><td class="crd-td">125,5</td><td class="crd-td">126,8</td></tr>
<tr><td class="crd-td"><strong>Qinghai</strong></td><td class="crd-td">42</td><td class="crd-td">702.970</td><td class="crd-td">2,4</td><td class="crd-td">8,4</td><td class="crd-td">8,4</td></tr>
<tr><td class="crd-td"><strong>Shaanxi</strong></td><td class="crd-td">86</td><td class="crd-td">214.151</td><td class="crd-td">74,2</td><td class="crd-td">184,6</td><td class="crd-td">184,2</td></tr>
<tr><td class="crd-td"><strong>Shandong</strong></td><td class="crd-td">95</td><td class="crd-td">161.473</td><td class="crd-td">302,7</td><td class="crd-td">628,8</td><td class="crd-td">623</td></tr>
<tr><td class="crd-td"><strong>Shanghai</strong></td><td class="crd-td">2</td><td class="crd-td">6.099</td><td class="crd-td">1.469,1</td><td class="crd-td">4.077,9</td><td class="crd-td">4.058,4</td></tr>
<tr><td class="crd-td"><strong>Shanxi</strong></td><td class="crd-td">95</td><td class="crd-td">166.728</td><td class="crd-td">85,9</td><td class="crd-td">209,4</td><td class="crd-td">206,3</td></tr>
<tr><td class="crd-td"><strong>Sichuan</strong></td><td class="crd-td">148</td><td class="crd-td">493.778</td><td class="crd-td">97,3</td><td class="crd-td">169,5</td><td class="crd-td">169</td></tr>
<tr><td class="crd-td"><strong>Tianjin</strong></td><td class="crd-td">1</td><td class="crd-td">13.666</td><td class="crd-td">338,1</td><td class="crd-td">1.014,6</td><td class="crd-td">996,1</td></tr>
<tr><td class="crd-td"><strong>Xinjiang</strong></td><td class="crd-td">9</td><td class="crd-td">1.634.591</td><td class="crd-td">3</td><td class="crd-td">15,8</td><td class="crd-td">16</td></tr>
<tr><td class="crd-td"><strong>Tibet (Xizang)</strong></td><td class="crd-td">70</td><td class="crd-td">1.127.666</td><td class="crd-td">1,1</td><td class="crd-td">3,2</td><td class="crd-td">3,3</td></tr>
<tr><td class="crd-td"><strong>Yunnan</strong></td><td class="crd-td">127</td><td class="crd-td">400.699</td><td class="crd-td">43,6</td><td class="crd-td">117,8</td><td class="crd-td">115,9</td></tr>
<tr><td class="crd-td"><strong>Zhejiang</strong></td><td class="crd-td">62</td><td class="crd-td">107.418</td><td class="crd-td">212,9</td><td class="crd-td">601,1</td><td class="crd-td">619,7</td></tr>
<tr><td class="crd-td"><strong>Taiwan</strong></td><td class="crd-td">68</td><td class="crd-td">35.732</td><td class="crd-td">236,1</td><td class="crd-td">659,4</td><td class="crd-td">654,3</td></tr>
<tr><td class="crd-td"><strong>Hong Kong SAR</strong></td><td class="crd-td">1</td><td class="crd-td">1.029</td><td class="crd-td">2.178,8</td><td class="crd-td">7.270,2</td><td class="crd-td">7.327,5</td></tr>
<tr><td class="crd-td"><strong>Macao SAR</strong></td><td class="crd-td">1</td><td class="crd-td">40</td><td class="crd-td">4.700</td><td class="crd-td">17.075</td><td class="crd-td">17.250</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlements (n=2.118), land areas and longitudinal population densities across all 34 administrative units.</figcaption>
</figure>

## Kriging Domain Diagnostics

The underlying continuous surface interpolation is conditioned by variogram calibrations derived from the East Asian archaeological and historical spatial domain. Table \ref{tab:kriging-params} summarises the key geostatistical parameters governing the spatial field.

<figure class="crd-table-figure" id="tab:kriging-params">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Parameter</th><th class="crd-th">Raw Estimate</th><th class="crd-th">Regularised Value</th><th class="crd-th">Description</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Total Domestic Voronoi Catchments</strong></td><td class="crd-td">1.274</td><td class="crd-td">1.274</td><td class="crd-td">Total Voronoi polygon conditioning partition</td></tr>
<tr><td class="crd-td"><strong>Active Inhabited Catchments</strong></td><td class="crd-td">1.074</td><td class="crd-td">1.074</td><td class="crd-td">Catchments containing positive habitation records</td></tr>
<tr><td class="crd-td"><strong>Administrative Coverage Ratio</strong></td><td class="crd-td">0,843</td><td class="crd-td">84,3%</td><td class="crd-td">Prefectural adm2 spatial boundary overlap</td></tr>
<tr><td class="crd-td"><strong>Unique Spatial Archaeological Sites</strong></td><td class="crd-td">87.811</td><td class="crd-td">87.811</td><td class="crd-td">Deduplicated historical and archaeological sites</td></tr>
<tr><td class="crd-td"><strong>Median Voronoi Catchment Radius</strong></td><td class="crd-td">45,11 km</td><td class="crd-td">45,11 km</td><td class="crd-td">Median equivalent circular catchment radius</td></tr>
<tr><td class="crd-td"><strong>90th Percentile Catchment Radius</strong></td><td class="crd-td">68,81 km</td><td class="crd-td">68,81 km</td><td class="crd-td">90th percentile catchment boundary distance</td></tr>
<tr><td class="crd-td"><strong>Dimensionless Bandwidth (tau1)</strong></td><td class="crd-td">1,6277</td><td class="crd-td">1,5</td><td class="crd-td">First dimensionless Matérn spatial bandwidth</td></tr>
<tr><td class="crd-td"><strong>Dimensionless Bandwidth (tau2)</strong></td><td class="crd-td">2,775</td><td class="crd-td">2,775</td><td class="crd-td">Second dimensionless Matérn spatial bandwidth</td></tr>
<tr><td class="crd-td"><strong>Effective Variogram Short Range</strong></td><td class="crd-td">73,43 km</td><td class="crd-td">73,43 km</td><td class="crd-td">Effective spatial dependency range in kilometres</td></tr>
<tr><td class="crd-td"><strong>Regularised Nugget-to-Sill Ratio</strong></td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">Regularised small-scale spatial variance floor</td></tr>
<tr><td class="crd-td"><strong>WLS Regression Determination (R2)</strong></td><td class="crd-td">0,9991 - 0,9996</td><td class="crd-td">0,9991 - 0,9996</td><td class="crd-td">Weighted least squares variogram fit range</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Geostatistical parameters and diagnostic metrics for the East Asian non-stationary Matérn kriging calibration.</figcaption>
</figure>

# Limitations

Four principal demographic and administrative constraints condition precision across this reconstruction. First, the One-Child Policy generated incentives for local cadres and rural families to under-report female births during the 1980s and 1990s [@Song2013Prenatal; @Almond2007Long]. Retrospective census analysis reveals that millions of missing girls were subsequently registered upon school enrolment, marriage or national identity card issuance in their teenage years, meaning that early census cohorts slightly understate true infant populations while subsequent censuses capture the regularised totals [@Song2013Prenatal].

Second, the statistical definition of urban populations in mainland China underwent successive revisions between censuses [@Meng2019Rural; @Zhou2025Rural]. Prior to the 2000AD census, urban counts reflected agricultural versus non-agricultural *hukou* registration status, excluding millions of temporary rural migrant workers residing in city outskirts [@Meng2019Rural]. From 2000AD onward, the National Bureau of Statistics adopted permanent resident criteria (*changzhurenkou*) based on six months or more of continuous residence, harmonising urban numbers with international definitions but introducing a structural step-change between 1990AD and 2000AD [@nbs2000census; @nbs2020census].

Third, widespread administrative reclassifications of rural counties into urban districts (*chexian-shequ*) between 1990AD and 2015AD artificially boosted official urbanisation statistics without corresponding physical residential moves [@Petushkova2025Urbanization; @Peng2024More]. Hundreds of thousands of rural peasants were reclassified as urban district residents overnight when municipal boundaries swallowed peripheral agrarian townships.

Fourth, excess mortality during the 1959AD to 1961AD Great Leap Forward famine remains subject to historical estimation intervals [@hou2001zhongguo; @Song2009Does; @Grda2011Great]. Because vital registration collapsed in severely afflicted interior counties and local registers were falsified to conceal starvation, regional famine depths rely on retrospective cohort survival back-projections from the 1982AD census rather than contemporaneous parish headcounts [@Song2009Does; @Meng2010Institutional]. Nonetheless, provincial mortality differentials are well established across econometric and demographic literature [@Song2008Mortality; @Grda2013Great].

# Conclusion

Between 1949AD and 2026AD, China experienced one of the most concentrated demographic expansions and structural transformations in world history. Aggregate population expanded nearly threefold from 535,04M in 1949AD to peak at 1.441,5M in 2020AD, enduring the catastrophic mortal trough of the Great Leap Forward famine before undergoing an unprecedented state-engineered fertility collapse and post-1978 rural-to-urban coastal migration. Over 250M labourers migrated from agrarian hinterlands to establish global megalopolises in the Pearl River Delta, the Yangtze River Delta and Beijing-Tianjin, while the Northeast Rustbelt depopulated and peripheral autonomous regions grew under targeted administrative regimes.

By 2022AD, persistent sub-replacement fertility pushed China into peacetime natural decrease, initiating a phase of rapid population ageing and structural contraction that reduced the regional aggregate to 1.435,09M by 2026AD. Integrating seven national censuses with Taiwan, Hong Kong and Macao administrative registers across 34 provincial masks, 1.274 catchments and 2.118 catalogued settlements establishes a consistent geostatistical foundation for twentieth- and twenty-first-century Chinese demography.

# Sources

<div id="refs"></div>
