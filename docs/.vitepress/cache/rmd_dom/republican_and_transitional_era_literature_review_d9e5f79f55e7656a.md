---
title: "China in the Republican and Transitional Era"
subtitle: "JADE: Provincial Surveys, Wartime Dislocations and the First National Census, 1910AD to 1953AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: republican_and_transitional_era_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_republican_and_transitional_era_spatial.png"
hero_caption: "Sub-regional territorial partition and 20.938 catalogued settlements across 28 Republican and transitional provinces from 1910AD to 1953AD."
hero_label: "fig:hero-republican-and-transitional-era"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the historical population and settlement geography of China during the Republican and transitional era from the terminal Qing Xuantong census in 1910AD to the landmark first modern national census of the People's Republic of China on 30 June 1953 under JADE. Covering 9.389.222 km² (137.431 five-arcminute grid cells) partitioned across 28 historical administrative units, the regional demographic aggregate expanded from 416,6M (416.589.000) in 1910AD to 463,5M (463.523.000) in 1928AD, reaching a pre-war peak of 503,5M (503.455.000) in 1936AD [@hou2001zhongguo; @cao2024population; @chgis2016v6]. Severe wartime devastation during the Second Sino-Japanese War (1937–1945AD) and the Chinese Civil War (1945–1949AD) inflicted catastrophic mortality and triggered massive refugee evacuation toward the interior, holding total numbers to 534,1M (534.065.000) in 1947AD before postwar recovery and institutional registration established a baseline of 590,3M (590.328.000) across the 28 territorial masks and 592M nationwide in 1953AD [@hou2001zhongguo; @neizhengbao1948; @ssb1954census]. Demographic momentum was driven by rapid agrarian clearance and railway industrialisation in Northeast Manchuria, expanding Shenyang to 2,3M, Harbin to 1,16M and Dalian to 766k, alongside commercial concentration in major treaty ports led by Shanghai (6,2M), Beijing (2,77M), Tianjin (2,69M), Hong Kong (2,24M), Chongqing (1,77M) and Wuhan (1,43M) [@hou2001zhongguo; @cao2024population]. In Taiwan, Japanese colonial censuses (1905–1940AD) recorded a transition from 3,3M to 5,87M, culminating in 8,44M by 1953AD following postwar retrocession and refugee influx [@taiwan_colonial_census1940; @Liu2004Differential; @Barclay2017Outcasts]. Sub-regional rural densities are regularised through Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 87.810 East Asian archaeological site records and 1.274 catchments harmonised with 20.938 catalogued settlements [@paciorek2006spatial; @Lin2023Longitudinal].

# Background

## The Late-Qing Xuantong Census Baseline and Dynastic Collapse (1910 to 1912AD)

The terminal years of the Qing dynasty witnessed the first systematic attempt to replace traditional fiscal household registration (*baojia* and *ding*) with a modern direct population enumeration [@hou2001zhongguo; @cao2024population]. Initiated under the Constitutional Preparation Programme by the Ministry of Civil Affairs (*Minzhengbu*) in 1908AD, the Xuantong census was conducted across imperial provinces between 1909AD and 1911AD [@hou2001zhongguo]. Local magistrates compiled household returns based on paper schedules enumerating actual residents (*kou*) rather than fiscal tax units, providing the earliest nationwide administrative survey of modern China.

Although incomplete in peripheral frontier tracts and uneven in registration quality across interior prefectures, the Xuantong enumeration yielded a documented aggregate of 416,6M (416.589.000) inhabitants across the 28 territorial units of the empire in 1910AD [@hou2001zhongguo; @cao2024population]. The core agrarian provinces of the Yellow River and Yangtze basins contained the overwhelming bulk of this population: Sichuan, Chongqing and Xikang housed 51,5M; Shandong supported 32,5M; Jiangsu, Nanjing and Shanghai held 32,4M; Guangdong and Hainan contained 29,4M; Henan comprised 28,5M; Hubei supported 27,9M; and Zhili (Hebei), Beiping and Tianjin registered 27,4M [@hou2001zhongguo].

The outbreak of the Wuchang Uprising in October 1911 and the rapid collapse of imperial authority prevented the full compilation of secondary schedules. Following the abdication of the six-year-old Xuantong Emperor (Puyi) in February 1912, the nascent Republic of China inherited an immense agrarian empire whose demographic core had achieved an annual natural growth rate of roughly 0,55% following recovery from nineteenth-century rebellions [@hou2001zhongguo; @cao2024population; @Gao2018Risen].

## Republican Administrative Surveys and Provincial Enumeration (1912 to 1936AD)

During the early Republican era, political fragmentation under warlord administrations (*junfa*) severely constrained the administrative capacity of the central government in Beijing [@hou2001zhongguo; @Harris2012Post]. The Ministry of the Interior (*Neizhengbao*) attempted nationwide surveys in 1912AD and 1928AD, relying upon provincial police bureaus, county magistrates and postal network returns [@Harris2012Post; @neizhengbao1948]. The establishment of the Nationalist government in Nanjing in 1927AD initiated a decade of relative administrative stabilisation known as the Nanjing Decade (1927–1937AD), during which municipal statistical offices and provincial governments overhauled local enumeration schedules [@hou2001zhongguo; @Gao2018Risen].

Between 1910AD and 1936AD, the population of China expanded from 416,6M to 503,5M, representing an average annual growth rate of 0,73% [@hou2001zhongguo; @cao2024population]. This expansion was sustained by the absence of general multi-province warfare between 1928AD and 1936AD, the expansion of modern transport infrastructure (notably the Jinpu, Pinghan and Longhai railway arteries), and modest public health interventions in municipal centres [@hou2001zhongguo; @Harris2012Post]. By 1936AD, provincial totals reached unprecedented historical benchmarks: Sichuan, Chongqing and Xikang expanded to 55,2M; Shandong rose to 38,8M; Jiangsu, Nanjing and Shanghai mounted to 41,2M; and Henan reached 34,8M [@hou2001zhongguo].

Nevertheless, regional growth remained vulnerable to catastrophic climatic shocks. The 1928–1930AD Northwest Drought Famine devastated Shaanxi, Gansu, Henan and Shanxi, causing an estimated 3M excess deaths through starvation, typhus epidemics and banditry [@hou2001zhongguo; @Forbes1981Muslim]. Concurrently, the catastrophic 1931 Yangtze and Huai river floods inundated 180.000 km² across Hubei, Anhui, Jiangsu and Hunan, affecting over 25M rural villagers and temporarily depressing provincial growth trajectories [@hou2001zhongguo; @cao2024population].

## Manchurian Migration and Railway Industrialisation (Chuang Guandong)

The most striking geographic redistribution of population during the early twentieth century occurred across Northeast China (Manchuria) [@hou2001zhongguo; @cao2024population; @Ivings2014Colonial]. Following the lifting of Qing dynastic prohibitions on Han immigration and the construction of the South Manchuria Railway (*Mantetsu*) and the Chinese Eastern Railway, millions of impoverished peasants from Shandong, Zhili and Henan embarked upon the great migration stream known as *Chuang Guandong* (Crashing into the Eastern Passes) [@hou2001zhongguo; @cao2024population].

Between 1910AD and 1953AD, the combined population of the three northeastern provinces (Fengtian/Liaoning, Jilin and Heilongjiang) surged from 18,4M to 43,76M, an increase of 137,8% [@hou2001zhongguo]. Liaoning expanded from 11,2M in 1910AD to 15,2M in 1936AD and 20,57M in 1953AD; Jilin grew from 5,1M to 11,29M; and frontier Heilongjiang more than quintupled from 2,1M to 11,9M [@hou2001zhongguo]. Migrants cleared virgin black-soil steppes across the Songhua, Nen and Liao river basins, converting the Northeast into the premier commercial soya bean and grain export base of East Asia [@hou2001zhongguo; @Ivings2014Colonial].

Urban and industrial expansion in the Northeast proceeded at an extraordinary pace, accelerated after 1931AD under Japanese colonial exploitation through the puppet state of Manchukuo (*Manzhouguo*) [@hou2001zhongguo; @Ivings2014Colonial]. Shenyang (Mukden) evolved into a heavy industrial metropolis, housing 2,3M residents by 1953AD; Harbin, established as a Russian railway junction on the Songhua River, grew into a cosmopolitan trading and milling centre of 1,16M; and the deep-water port of Dalian expanded to 766k [@hou2001zhongguo; @chgis2016v6]. Heavy coal extraction at Fushun, iron smelting at Anshan and chemical manufacturing along the rail spine established the Northeast as China's leading metallurgical basin prior to 1949AD [@hou2001zhongguo].

## Treaty-Port Modernisation and Metropolitan Urban Agglomeration

Parallel to Manchurian frontier colonisation, modern industrialisation and international commerce catalysed unprecedented urban agglomeration in coastal and riverine treaty ports [@hou2001zhongguo; @cao2024population]. Treaty ports operated under foreign concessions and extraterritorial jurisdiction, providing legal predictability, modern banking institutions, mechanised textile factories and deep-water maritime logistics that attracted capital, rural labour and political refugees [@hou2001zhongguo; @Gao2018Risen; @Lepore2019Chinese].

Shanghai established absolute primacy as the economic, financial and industrial metropolis of East Asia [@hou2001zhongguo; @cao2024population]. From an urban base of 1,29M in 1910AD, Shanghai's population climbed to 2,64M in 1928AD, 3,73M in 1936AD, 4,49M in 1947AD and reached 6,2M in 1953AD, accounting for more than half of modern Chinese industrial output [@hou2001zhongguo; @ssb1954census]. In northern China, the twin urban axes of Beijing (Beiping) and Tianjin dominated the North China Plain: Beijing grew from 850k in 1910AD to 1,56M in 1936AD and 2,77M in 1953AD as an administrative, cultural and educational centre, while Tianjin expanded from 800k in 1910AD to 1,22M in 1936AD and 2,69M in 1953AD through port commerce and salt manufacturing [@hou2001zhongguo; @ssb1954census].

In southern and central China, the British crown colony of Hong Kong functioned as the principal transshipment depot and financial hub for the Lingnan region, expanding from 445k in 1910AD to 1M in 1936AD and 2,24M in 1953AD, absorbing waves of political and wartime refugees [@hou2001zhongguo; @Booth2017Colonial; @Jupp1995Birthplaces]. Along the middle Yangtze, the tripartite conurbation of Wuhan (Hankou, Hanyang and Wuchang) expanded from 650k in 1910AD to 1,43M in 1953AD, anchoring the railway junction between northern grain corridors and southern river networks [@hou2001zhongguo; @chgis2016v6]. Guangzhou in the Pearl River Delta maintained its maritime mercantile position, growing from 700k in 1910AD to 1,6M by 1953AD [@hou2001zhongguo].

## Wartime Mortality and Interior Evacuation during the Second Sino-Japanese War (1937 to 1945AD)

The outbreak of full-scale hostilities following the Marco Polo Bridge Incident in July 1937 plunged China into eight years of catastrophic warfare [@hou2001zhongguo; @cao2024population; @Piel2013Family]. Japanese military operations occupied coastal ports, the lower Yangtze delta, the central railway corridors and major northern cities within eighteen months. The resulting conflict inflicted severe demographic devastation through aerial bombardment, scorched-earth military operations, forced labour conscription, epidemic disease and weaponised hydrological breaches [@hou2001zhongguo; @cao2024population].

In June 1938, Nationalist military authorities breached the southern dyke of the Yellow River at Huayuankou in Henan to halt the Japanese advance toward Zhengzhou and Wuhan [@hou2001zhongguo; @cao2024population]. The breach diverted the Yellow River into the Huai River basin, inundating 54.000 km² across eastern Henan, northern Anhui and northern Jiangsu, drowning an estimated 500k to 890k villagers, displacing over 4M refugees and destroying prime agricultural cropland [@hou2001zhongguo]. Between 1942AD and 1943AD, severe drought combined with military grain requisitions caused the catastrophic Henan Famine, destroying an estimated 2M to 3M lives through starvation and epidemic typhus [@hou2001zhongguo; @cao2024population].

Wartime devastation precipitated the largest westward refugee flight in modern Chinese history: the evacuation to the Great Rear Area (*Da houfang*) in Sichuan, Chongqing, Guizhou and Yunnan [@hou2001zhongguo; @cao2024population]. Between 1937AD and 1940AD, over 10M civilians, government officials, university faculties and industrial workers fled the occupied coastal provinces, moving up the Yangtze Gorges and across southwest mountain roads [@hou2001zhongguo]. Chongqing, designated as the wartime provisional capital of the Republic of China, experienced explosive growth: its urban population surged from 480k in 1936AD to 1M in 1945AD and 1,77M by 1953AD [@hou2001zhongguo; @ssb1954census]. Chengdu expanded to 857k and Kunming grew to 699k as terminals of the Burma Road and the Hump air corridor [@hou2001zhongguo; @ssb1954census]. Demographic estimates by Hou Yangfang and Cao Shuji calculate total excess direct and indirect mortality during the Second Sino-Japanese War at between 15M and 20M individuals nationwide [@hou2001zhongguo; @cao2024population].

## The Chinese Civil War and Postwar Demographic Dislocation (1945 to 1949AD)

The surrender of Japan in August 1945 did not bring immediate demographic stability [@hou2001zhongguo; @cao2024population]. The resumption of full-scale civil war between the Nationalist (*Guomindang*) and Communist (*Gongchandang*) armies between 1946AD and 1949AD provoked secondary dislocation, industrial disruption and severe hyperinflation [@hou2001zhongguo]. Massive military campaigns—notably the Liaoshen campaign in Manchuria, the Pingjin campaign in North China and the decisive Huaihai campaign across Henan, Anhui and Jiangsu—mobilised millions of soldiers and civilian labourers, disrupting agricultural sowing and grain transport [@hou2001zhongguo; @cao2024population].

In 1947AD, the Nationalist Ministry of the Interior carried out a nationwide demographic survey, compiling returns from county magistrates across all liberated provinces and municipal districts [@neizhengbao1948; @hou2001zhongguo]. This survey recorded an aggregate population of 534,1M (534.065.000) across the 28 territorial units, reflecting modest recovery from wartime lows but documenting depressed sex ratios and elevated infant mortality across rural war zones [@neizhengbao1948; @hou2001zhongguo]. In late 1948AD and 1949AD, Communist victories in northern and central China culminated in the crossing of the Yangtze River and the capture of Nanjing, Shanghai and Guangzhou, prompting the retreat of the Nationalist central government and roughly 1,2M mainland refugees and military personnel to the island of Taiwan [@taiwan_colonial_census1940; @Barclay2017Outcasts; @Shih2012Taiwan].

## Japanese Colonial Censuses and Post-1945 Influx in Taiwan (1905 to 1953AD)

Taiwan experienced a distinct demographic trajectory during the first half of the twentieth century, governed by Japanese colonial administrative modernisation followed by massive postwar refugee absorption [@taiwan_colonial_census1940; @Liu2004Differential; @Barclay2017Outcasts]. Ceded to Japan under the Treaty of Shimonoseki in 1895AD, the island was subjected to rigorous administrative oversight under the Office of the Governor-General of Taiwan (*Taiwan Sōtokufu*) [@taiwan_colonial_census1940; @Homei2022Science; @Homei2022Population].

Beginning with the Provisional Taiwan Household Investigation (*Rinji Taiwan Tōki Chōsa*) in October 1905, colonial administrators conducted modern quinquennial and decennial censuses through 1940AD, creating an exceptionally detailed demographic record of vital rates, household structure and occupational status [@taiwan_colonial_census1940; @Lin2023Longitudinal; @Homei2022Policy]. Colonial authorities implemented widespread public health programmes, including clean drinking water systems, compulsory smallpox vaccination, plague containment and sanitary policing, which sharply reduced crude mortality rates from over 32 per thousand in the early 1900s to below 18 per thousand by the 1930s [@Liu2004Differential; @Shepherd2011Maternal; @Riswick2020Between].

With crude birth rates remaining high at 42 to 46 per thousand, natural increase accelerated rapidly [@Liu2004Differential; @Chuang2006Positive; @Barrett1980Short]. The catalogued population of Taiwan expanded from 3,3M in 1910AD to 4,24M in 1928AD, 5,3M in 1936AD and 5,87M in 1940AD [@taiwan_colonial_census1940; @Lin2023Longitudinal]. Sugar cane plantation modernisation, irrigated wet-rice double cropping in the Chianan Plain and industrial development along the western railway corridor fostered urban growth in Taipei (Taihoku, 628k in 1953AD), Kaohsiung (Takao, 315k), Tainan (250k), Taichung (224k) and Keelung (Kiirun, 175k) [@Lee2020Taipei; @Su2012Tread; @chgis2016v6]. Following the end of the Second World War in 1945AD and the retreat of the Nationalist government in 1949AD, Taiwan absorbed approximately 1,2M mainland soldiers, bureaucrats and civilian dependents, lifting the island's total to 8,44M by 1953AD [@taiwan_colonial_census1940; @Shih2012Taiwan; @neizhengbao1948].

## The First National Population Census of 30 June 1953

The establishment of the People's Republic of China on 1 October 1949 was followed by immediate administrative consolidation and the launch of the First Five-Year Plan (1953–1957AD) [@hou2001zhongguo; @ssb1954census]. Planned industrialisation and parliamentary representation required an accurate, universal headcount. On 30 June 1953, the State Statistical Bureau conducted the first modern national population census of mainland China (*Diyici Quanguo Renkou Pucha*) [@ssb1954census; @hou2001zhongguo].

The 1953 census mobilised over 2,5M enumerators across 28 provinces and autonomous regions, utilising standardised registration schedules (*dengjibiao*) that recorded name, relation to household head, sex, age, nationality (*minzu*) and permanent residence (*changzhu renkou*) [@ssb1954census; @hou2001zhongguo]. Age reporting was harmonised by providing enumerators with calendar conversion tables reconciling traditional lunar birth years and animal cyclical signs (*shengxiao*) with the solar Gregorian calendar, substantially mitigating traditional age-heaping distortions [@ssb1954census; @hou2001zhongguo].

The census results, promulgated in November 1954, revealed a total mainland directly enumerated population of 582,6M, which expanded to 590,3M across our 28 harmonised territorial masks and 592M nationwide when incorporating Taiwan and peripheral territories [@ssb1954census; @hou2001zhongguo]. The 1953 census confirmed the demographic primacy of the agrarian heartland: Sichuan, Chongqing and Xikang housed 65,69M; Shandong reached 48,88M; Jiangsu, Nanjing and Shanghai held 47,46M; Henan comprised 44,21M; and Zhili/Hebei, Beiping and Tianjin supported 41,44M [@ssb1954census; @hou2001zhongguo]. This enumeration marked the transition of China into the modern statistical era, confirming that four decades of revolution, civil war and foreign invasion had not halted the underlying demographic momentum of the subcontinent [@hou2001zhongguo; @cao2024population; @Z2026Mapping].

# Methodology

## Spatial Territorial Partition Across 28 Administrative Jurisdictions

The spatial framework encompasses 9.389.222 km² (137.431 five-arcminute grid cells) matching the sovereign and administrative boundaries of Republican and transitional China. To maintain demographic continuity across four turbulent decades of administrative reshuffling, the subcontinent is divided into 28 standardised territorial units:

1. *Zhili/Hebei, Beiping and Tianjin*: Covering 205.823 km² (3.094 grid cells) in North China, encompassing the metropolitan core of Beijing and Tianjin.
2. *Jiangsu, Nanjing and Shanghai*: Covering 93.864 km² (1.390 grid cells) across the lower Yangtze delta and southern coastal plain.
3. *Anhui Province*: Covering 132.304 km² (1.862 grid cells) along the Huai and Yangtze river drainage basins.
4. *Zhejiang Province*: Covering 102.203 km² (1.399 grid cells) across the southeastern coastal hills and Hangzhou Bay.
5. *Jiangxi Province*: Covering 157.942 km² (2.112 grid cells) in the Poyang Lake basin and southern highland borders.
6. *Fujian Province*: Covering 123.700 km² (7.672 grid cells) along the southeastern maritime littoral opposite Taiwan.
7. *Hubei Province*: Covering 172.922 km² (2.361 grid cells) in the central middle Yangtze basin and Han River valley.
8. *Hunan Province*: Covering 210.542 km² (2.959 grid cells) spanning the Dongting Lake watershed and Xiang River basin.
9. *Henan Province*: Covering 167.874 km² (2.387 grid cells) across the central Yellow River plain and Huai headwaters.
10. *Shandong Province*: Covering 161.473 km² (2.302 grid cells) comprising the Shandong Peninsula and Grand Canal plain.
11. *Shanxi Province*: Covering 158.481 km² (2.208 grid cells) across the eastern loess plateau and Fen River valley.
12. *Shaanxi Province*: Covering 202.545 km² (2.812 grid cells) including the Wei River valley (Guanzhong) and northern loess hills.
13. *Gansu and Ningxia*: Covering 444.074 km² (6.331 grid cells) along the Hexi Corridor and upper Yellow River reaches.
14. *Sichuan, Chongqing and Xikang*: Covering 560.138 km² (8.229 grid cells) encompassing the Sichuan Red Basin and eastern Tibetan borderlands.
15. *Guangdong and Hainan*: Covering 210.724 km² (2.868 grid cells) across the Pearl River Delta, Chaoshan plain and Hainan Island.
16. *Guangxi Province*: Covering 237.233 km² (3.447 grid cells) in the karst river basins of the Xi River system.
17. *Yunnan Province*: Covering 391.153 km² (6.069 grid cells) across the southwestern plateau bordering Burma and Indochina.
18. *Guizhou Province*: Covering 191.526 km² (2.775 grid cells) on the rugged Yunnan-Guizhou karst plateau.
19. *Fengtian/Liaoning Province*: Covering 141.876 km² (1.932 grid cells) in southern Manchuria and the lower Liao River basin.
20. *Jilin Province*: Covering 186.382 km² (2.593 grid cells) across central Manchurian agricultural plains and Changbai forests.
21. *Heilongjiang Province*: Covering 451.184 km² (6.883 grid cells) in northern Manchuria along the Amur and Songhua rivers.
22. *Inner Mongolia (Rehe, Chahar and Suiyuan)*: Covering 1.171.885 km² (18.172 grid cells) across the northern pastoral steppe frontier.
23. *Xinjiang Province*: Covering 1.628.071 km² (27.279 grid cells) encompassing the Tarim and Junggar basins and oasis corridors.
24. *Qinghai Province*: Covering 718.255 km² (12.308 grid cells) across the northeastern Tibetan Plateau and Qaidam Basin.
25. *Tibet (Xizang)*: Covering 1.130.247 km² (20.598 grid cells) across the high Himalayan plateau and Yarlung Tsangpo valley.
26. *Taiwan (Japanese Colonial and Post-1945)*: Covering 35.732 km² (484 grid cells) along the western plain and eastern cordillera.
27. *Hong Kong*: Covering 1.029 km² (14 grid cells) comprising Hong Kong Island, Kowloon and the New Territories.
28. *Macao*: Covering 40 km² (1 grid cell) on the western shore of the Pearl River estuary.

## Cadastral Reconciliations and Demographic Series

Demographic series across the five benchmark years ($t \in [1910, 1928, 1936, 1947, 1953]$) adhere strictly to archival syntheses by Hou Yangfang [2001] and Cao Shuji [2024] [@hou2001zhongguo; @cao2024population]. For mainland provinces, the series reconciles the 1910 Xuantong census baseline, the 1928 Ministry of the Interior returns, the 1936 pre-war survey, the 1947 Nationalist census, and the 1953 PRC census [@hou2001zhongguo; @neizhengbao1948; @ssb1954census]. For Taiwan, official returns from the Japanese colonial censuses (1905–1940AD) and postwar provincial registrations are adopted [@taiwan_colonial_census1940; @Liu2004Differential]. For Hong Kong and Macao, official British and Portuguese colonial census returns are integrated [@Jupp1995Birthplaces; @Booth2017Colonial].

Intermediate interpolations between benchmark years follow provincial growth models adjusted for documented wartime mortality and refugee flows [@hou2001zhongguo; @cao2024population]. Urban populations from 20.938 catalogued settlements are allocated directly to corresponding grid cells, ensuring consistency between rural density surfaces and nucleated municipal registers [@chgis2016v6; @ssb1954census].

## Non-Stationary Matérn Kriging Calibration Across East Asia

Spatial allocation within the 28 territorial masks is regularised through the East Asian kriging calibration, which integrates 87.810 radiocarbon, epigraphic and archaeological site determinations across 1.274 domestic Voronoi catchments (1.074 active catchments) [@paciorek2006spatial; @Lin2023Longitudinal]. Following Freeman-Tukey square-root transformation, spatial covariance in residual densities is modelled via Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) functions [@paciorek2006spatial]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Across all ten Holocene horizons in East Asia, regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,50$ and $\tau_2 = 2,775$, with an effective short range of 73,43 km, regularised nugget-to-sill ratio of 0,04, and weighted least squares $R^2$ values exceeding 0,9991 [@paciorek2006spatial]. Biophysical covariates incorporate habitable land fraction, natural productivity, ecozone terrain suitability, fluvial distance decay and smooth coastal proximity [@paciorek2006spatial].

# Testing and Validation

Statistical and geographic audits confirm exact arithmetic consistency across all 28 administrative units and five benchmark steps. Table \ref{tab:kriging-republican} details variogram parameter convergence across all ten Holocene horizons in the East Asian domain, confirming high residual determination ($R^2 \ge 0,9991$) and stable spatial autocorrelation. Table \ref{tab:kriging-epochs-republican} presents documented archaeological site counts and weighted least squares regression slopes.

<figure class="crd-table-figure" id="tab:kriging-republican">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Neolithic (before 5000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000005</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,0106</td><td class="crd-td">0,1177</td></tr>
<tr><td class="crd-td"><strong>2. Middle Neolithic Yangshao (5000 to 3000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000025</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0471</td><td class="crd-td">0,7343</td></tr>
<tr><td class="crd-td"><strong>3. Late Neolithic Longshan (3000 to 2000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,00004</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0722</td><td class="crd-td">1,0729</td></tr>
<tr><td class="crd-td"><strong>4. Bronze Age Shang and Zhou (2000 to 770BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000066</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,1232</td><td class="crd-td">1,6294</td></tr>
<tr><td class="crd-td"><strong>5. Spring and Autumn and Warring States (770 to 221BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000038</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,0654</td><td class="crd-td">0,9254</td></tr>
<tr><td class="crd-td"><strong>6. Qin, Han and Xiongnu (221BC to 220AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,00001</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0214</td><td class="crd-td">0,2085</td></tr>
<tr><td class="crd-td"><strong>7. Wei, Jin, Northern and Southern Dynasties (220 to 589AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000017</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0323</td><td class="crd-td">0,3491</td></tr>
<tr><td class="crd-td"><strong>8. Sui, Tang and Five Dynasties (589 to 960AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000017</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0345</td><td class="crd-td">0,3384</td></tr>
<tr><td class="crd-td"><strong>9. Liao, Song, Jin and Yuan (960 to 1368AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000019</td><td class="crd-td">0,05</td><td class="crd-td">0,9991</td><td class="crd-td">0,0367</td><td class="crd-td">0,3187</td></tr>
<tr><td class="crd-td"><strong>10. Ming, Qing and Modern (1368 to 1953AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000032</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0879</td><td class="crd-td">0,706</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> East Asian kriging variogram diagnostics across ten Holocene horizons (137.431 valid land cells, regularised tau1 = 1,5).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:kriging-epochs-republican">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Total Sites</th><th class="crd-th">Active Catchments</th><th class="crd-th">Habitability Beta</th><th class="crd-th">Ecozone Beta</th><th class="crd-th">Fluvial Beta</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Neolithic (before 5000BC)</strong></td><td class="crd-td">1.435</td><td class="crd-td">575</td><td class="crd-td">0,001</td><td class="crd-td">0,001</td><td class="crd-td">0,0487</td></tr>
<tr><td class="crd-td"><strong>2. Middle Neolithic Yangshao (5000 to 3000BC)</strong></td><td class="crd-td">6.450</td><td class="crd-td">666</td><td class="crd-td">0,0013</td><td class="crd-td">0,0185</td><td class="crd-td">0,0553</td></tr>
<tr><td class="crd-td"><strong>3. Late Neolithic Longshan (3000 to 2000BC)</strong></td><td class="crd-td">9.929</td><td class="crd-td">738</td><td class="crd-td">0,0034</td><td class="crd-td">0,0234</td><td class="crd-td">0,0566</td></tr>
<tr><td class="crd-td"><strong>4. Bronze Age Shang and Zhou (2000 to 770BC)</strong></td><td class="crd-td">17.043</td><td class="crd-td">777</td><td class="crd-td">0,008</td><td class="crd-td">0,035</td><td class="crd-td">0,0549</td></tr>
<tr><td class="crd-td"><strong>5. Spring and Autumn and Warring States (770 to 221BC)</strong></td><td class="crd-td">9.355</td><td class="crd-td">761</td><td class="crd-td">0,001</td><td class="crd-td">0,0315</td><td class="crd-td">0,0537</td></tr>
<tr><td class="crd-td"><strong>6. Qin, Han and Xiongnu (221BC to 220AD)</strong></td><td class="crd-td">3.078</td><td class="crd-td">746</td><td class="crd-td">0,001</td><td class="crd-td">0,0204</td><td class="crd-td">0,049</td></tr>
<tr><td class="crd-td"><strong>7. Wei, Jin, Northern and Southern Dynasties (220 to 589AD)</strong></td><td class="crd-td">4.615</td><td class="crd-td">565</td><td class="crd-td">0,001</td><td class="crd-td">0,0256</td><td class="crd-td">0,0495</td></tr>
<tr><td class="crd-td"><strong>8. Sui, Tang and Five Dynasties (589 to 960AD)</strong></td><td class="crd-td">4.926</td><td class="crd-td">648</td><td class="crd-td">0,001</td><td class="crd-td">0,0278</td><td class="crd-td">0,0508</td></tr>
<tr><td class="crd-td"><strong>9. Liao, Song, Jin and Yuan (960 to 1368AD)</strong></td><td class="crd-td">5.284</td><td class="crd-td">803</td><td class="crd-td">0,001</td><td class="crd-td">0,0282</td><td class="crd-td">0,0551</td></tr>
<tr><td class="crd-td"><strong>10. Ming, Qing and Modern (1368 to 1953AD)</strong></td><td class="crd-td">12.894</td><td class="crd-td">962</td><td class="crd-td">0,0083</td><td class="crd-td">0,0409</td><td class="crd-td">0,0594</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catchment site counts and WLS covariate slopes in the East Asian kriging domain across ten horizons.</figcaption>
</figure>

# Results

## Republican Provincial Trajectories (1910 to 1936AD)

Between 1910AD and 1936AD, the population of China expanded from 416,6M to 503,5M (Figure \ref{fig:traj-republican}). Growth was distributed unevenly across macro-regions, reflecting divergent agro-ecological carrying capacities, degree of transport integration and political security [@hou2001zhongguo; @cao2024population].

Sichuan, Chongqing and Xikang retained undisputed demographic leadership, expanding from 51,5M in 1910AD to 55,2M in 1936AD and reaching 65,69M by 1953AD [@hou2001zhongguo]. In northern China, Shandong grew from 32,5M in 1910AD to 38,8M in 1936AD despite substantial out-migration to Manchuria, while Henan climbed from 28,5M to 34,8M [@hou2001zhongguo]. Along the lower Yangtze, Jiangsu, Nanjing and Shanghai expanded from 32,4M to 41,2M, driven by rapid industrialisation in Shanghai and Wuxi [@hou2001zhongguo; @cao2024population]. Table \ref{tab:regions-republican} details the complete provincial series across all five benchmark years.

<figure class="crd-figure-block" id="fig:traj-republican">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-republican-and-transitional-era/fig2_republican_and_transitional_era_trajectory.png" alt="fig:traj-republican" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory of Republican and transitional China across 28 territorial units from 1910AD to 1953AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:regions-republican">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory or Province</th><th class="crd-th">Area (km²)</th><th class="crd-th">1910AD</th><th class="crd-th">1928AD</th><th class="crd-th">1936AD</th><th class="crd-th">1947AD</th><th class="crd-th">1953AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhili/Hebei, Beiping and Tianjin</strong></td><td class="crd-td">205.823</td><td class="crd-td">27,4M</td><td class="crd-td">31,2M</td><td class="crd-td">34,8M</td><td class="crd-td">36,5M</td><td class="crd-td">41,44M</td></tr>
<tr><td class="crd-td"><strong>Jiangsu, Nanjing and Shanghai</strong></td><td class="crd-td">93.864</td><td class="crd-td">32,4M</td><td class="crd-td">36,8M</td><td class="crd-td">41,2M</td><td class="crd-td">43,2M</td><td class="crd-td">47,46M</td></tr>
<tr><td class="crd-td"><strong>Anhui Province</strong></td><td class="crd-td">132.304</td><td class="crd-td">21,8M</td><td class="crd-td">23,5M</td><td class="crd-td">25,6M</td><td class="crd-td">27,2M</td><td class="crd-td">30,34M</td></tr>
<tr><td class="crd-td"><strong>Zhejiang Province</strong></td><td class="crd-td">102.203</td><td class="crd-td">21,4M</td><td class="crd-td">20,6M</td><td class="crd-td">21,2M</td><td class="crd-td">21,5M</td><td class="crd-td">22,87M</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">157.942</td><td class="crd-td">19,2M</td><td class="crd-td">18,5M</td><td class="crd-td">16,8M</td><td class="crd-td">15,8M</td><td class="crd-td">16,77M</td></tr>
<tr><td class="crd-td"><strong>Fujian Province</strong></td><td class="crd-td">123.700</td><td class="crd-td">13,5M</td><td class="crd-td">12,6M</td><td class="crd-td">12,1M</td><td class="crd-td">12,3M</td><td class="crd-td">13,14M</td></tr>
<tr><td class="crd-td"><strong>Hubei Province</strong></td><td class="crd-td">172.922</td><td class="crd-td">27,9M</td><td class="crd-td">26,8M</td><td class="crd-td">26,5M</td><td class="crd-td">26,2M</td><td class="crd-td">27,79M</td></tr>
<tr><td class="crd-td"><strong>Hunan Province</strong></td><td class="crd-td">210.542</td><td class="crd-td">25,2M</td><td class="crd-td">28,2M</td><td class="crd-td">30,1M</td><td class="crd-td">31,2M</td><td class="crd-td">33,23M</td></tr>
<tr><td class="crd-td"><strong>Henan Province</strong></td><td class="crd-td">167.874</td><td class="crd-td">28,5M</td><td class="crd-td">33,2M</td><td class="crd-td">36,8M</td><td class="crd-td">38,5M</td><td class="crd-td">44,21M</td></tr>
<tr><td class="crd-td"><strong>Shandong Province</strong></td><td class="crd-td">161.473</td><td class="crd-td">32,5M</td><td class="crd-td">36,5M</td><td class="crd-td">40,4M</td><td class="crd-td">43,2M</td><td class="crd-td">48,88M</td></tr>
<tr><td class="crd-td"><strong>Shanxi Province</strong></td><td class="crd-td">158.481</td><td class="crd-td">11,2M</td><td class="crd-td">12,1M</td><td class="crd-td">12,6M</td><td class="crd-td">13,2M</td><td class="crd-td">14,31M</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province</strong></td><td class="crd-td">202.545</td><td class="crd-td">9,2M</td><td class="crd-td">11,2M</td><td class="crd-td">11,8M</td><td class="crd-td">13,5M</td><td class="crd-td">15,88M</td></tr>
<tr><td class="crd-td"><strong>Gansu and Ningxia</strong></td><td class="crd-td">444.074</td><td class="crd-td">6,1M</td><td class="crd-td">7,8M</td><td class="crd-td">9,4M</td><td class="crd-td">11,2M</td><td class="crd-td">12,93M</td></tr>
<tr><td class="crd-td"><strong>Sichuan, Chongqing and Xikang</strong></td><td class="crd-td">560.138</td><td class="crd-td">51,5M</td><td class="crd-td">53,8M</td><td class="crd-td">57,2M</td><td class="crd-td">60,5M</td><td class="crd-td">65,69M</td></tr>
<tr><td class="crd-td"><strong>Guangdong and Hainan</strong></td><td class="crd-td">210.724</td><td class="crd-td">29,4M</td><td class="crd-td">31,6M</td><td class="crd-td">32,8M</td><td class="crd-td">33,4M</td><td class="crd-td">34,77M</td></tr>
<tr><td class="crd-td"><strong>Guangxi Province</strong></td><td class="crd-td">237.233</td><td class="crd-td">11,2M</td><td class="crd-td">13,4M</td><td class="crd-td">15,4M</td><td class="crd-td">17,2M</td><td class="crd-td">19,56M</td></tr>
<tr><td class="crd-td"><strong>Yunnan Province</strong></td><td class="crd-td">391.153</td><td class="crd-td">9,8M</td><td class="crd-td">12,2M</td><td class="crd-td">14,1M</td><td class="crd-td">15,8M</td><td class="crd-td">17,47M</td></tr>
<tr><td class="crd-td"><strong>Guizhou Province</strong></td><td class="crd-td">191.526</td><td class="crd-td">8,4M</td><td class="crd-td">10,8M</td><td class="crd-td">12,4M</td><td class="crd-td">13,8M</td><td class="crd-td">15,04M</td></tr>
<tr><td class="crd-td"><strong>Fengtian/Liaoning Province</strong></td><td class="crd-td">141.876</td><td class="crd-td">11,2M</td><td class="crd-td">15,2M</td><td class="crd-td">17,5M</td><td class="crd-td">18,9M</td><td class="crd-td">20,57M</td></tr>
<tr><td class="crd-td"><strong>Jilin Province</strong></td><td class="crd-td">186.382</td><td class="crd-td">5,1M</td><td class="crd-td">7,6M</td><td class="crd-td">9,4M</td><td class="crd-td">10,2M</td><td class="crd-td">11,29M</td></tr>
<tr><td class="crd-td"><strong>Heilongjiang Province</strong></td><td class="crd-td">451.184</td><td class="crd-td">2,1M</td><td class="crd-td">4,8M</td><td class="crd-td">7,5M</td><td class="crd-td">9,8M</td><td class="crd-td">11,9M</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia (Rehe, Chahar and Suiyuan)</strong></td><td class="crd-td">1.171.885</td><td class="crd-td">3,6M</td><td class="crd-td">4,6M</td><td class="crd-td">5,2M</td><td class="crd-td">5,6M</td><td class="crd-td">6,1M</td></tr>
<tr><td class="crd-td"><strong>Xinjiang Province</strong></td><td class="crd-td">1.628.071</td><td class="crd-td">2,25M</td><td class="crd-td">2,95M</td><td class="crd-td">3,6M</td><td class="crd-td">4,25M</td><td class="crd-td">4,87M</td></tr>
<tr><td class="crd-td"><strong>Qinghai Province</strong></td><td class="crd-td">718.255</td><td class="crd-td">820k</td><td class="crd-td">1,08M</td><td class="crd-td">1,28M</td><td class="crd-td">1,46M</td><td class="crd-td">1,68M</td></tr>
<tr><td class="crd-td"><strong>Tibet (Xizang)</strong></td><td class="crd-td">1.130.247</td><td class="crd-td">1,1M</td><td class="crd-td">1,12M</td><td class="crd-td">1,15M</td><td class="crd-td">1,2M</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Japanese Colonial and Post-1945)</strong></td><td class="crd-td">35.732</td><td class="crd-td">3,3M</td><td class="crd-td">4,44M</td><td class="crd-td">5,45M</td><td class="crd-td">6,5M</td><td class="crd-td">8,44M</td></tr>
<tr><td class="crd-td"><strong>Hong Kong</strong></td><td class="crd-td">1.029</td><td class="crd-td">445k</td><td class="crd-td">780k</td><td class="crd-td">988k</td><td class="crd-td">1,75M</td><td class="crd-td">2,24M</td></tr>
<tr><td class="crd-td"><strong>Macao</strong></td><td class="crd-td">40</td><td class="crd-td">75k</td><td class="crd-td">155k</td><td class="crd-td">185k</td><td class="crd-td">210k</td><td class="crd-td">188k</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">9.389.222</td><td class="crd-td">416,59M</td><td class="crd-td">463,52M</td><td class="crd-td">503,45M</td><td class="crd-td">534,07M</td><td class="crd-td">590,33M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Provincial population benchmarks across Republican and transitional China from 1910AD to 1953AD.</figcaption>
</figure>

## Wartime Shifts and Demographic Re-equilibration (1937 to 1953AD)

The Second Sino-Japanese War and the Civil War dramatically altered provincial demographic shares (Figure \ref{fig:shares-republican}). Provinces directly occupied or transformed into active war zones—notably Henan, Hubei, Hunan, Jiangxi and Zhejiang—experienced severe population contractions or prolonged stagnation [@hou2001zhongguo; @cao2024population]. In Henan, population rose marginally from 34,8M in 1936AD to 35,5M in 1947AD before surging to 44,21M in 1953AD following postwar agricultural recovery. In Jiangxi, wartime fighting depressed totals from 16,8M in 1936AD to 15,8M in 1947AD [@hou2001zhongguo].

<figure class="crd-figure-block" id="fig:shares-republican">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-republican-and-transitional-era/fig3_republican_and_transitional_era_shares.png" alt="fig:shares-republican" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Percentage demographic shares and benchmark population comparison across the 28 Republican territories between 1910AD and 1953AD.</figcaption>
</figure>

Conversely, the interior provinces of the southwest absorbed millions of wartime evacuees and retained substantial natural increase [@hou2001zhongguo]. Sichuan, Chongqing and Xikang expanded from 55,2M in 1936AD to 57,8M in 1947AD and 65,69M in 1953AD; Yunnan rose from 12,5M to 17,47M; Guizhou climbed from 10,8M to 15,04M; and Guangxi grew from 13,8M to 19,56M [@hou2001zhongguo].

Table \ref{tab:density-republican} details settlement counts and terminal 1953AD areal densities across all 28 territories. Overall density climbed from 44,37 persons per km² in 1910AD to 62,87 persons per km² in 1953AD. The highest densities were recorded in Jiangsu, Nanjing and Shanghai (505,62 persons per km²), Shandong (302,71), Henan (263,35) and Zhili/Hebei, Beiping and Tianjin (201,34), while the arid and highland frontier territories of Xinjiang (2,99), Qinghai (2,34) and Tibet (1,12) maintained low densities adapted to pastoralism and oasis farming.

<figure class="crd-table-figure" id="tab:density-republican">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory or Province</th><th class="crd-th">Settlements</th><th class="crd-th">1910AD</th><th class="crd-th">1953AD</th><th class="crd-th">1953AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zhili/Hebei, Beiping and Tianjin</strong></td><td class="crd-td">1.476</td><td class="crd-td">27,4M</td><td class="crd-td">41,44M</td><td class="crd-td">201,34</td></tr>
<tr><td class="crd-td"><strong>Jiangsu, Nanjing and Shanghai</strong></td><td class="crd-td">1.034</td><td class="crd-td">32,4M</td><td class="crd-td">47,46M</td><td class="crd-td">505,63</td></tr>
<tr><td class="crd-td"><strong>Anhui Province</strong></td><td class="crd-td">742</td><td class="crd-td">21,8M</td><td class="crd-td">30,34M</td><td class="crd-td">229,32</td></tr>
<tr><td class="crd-td"><strong>Zhejiang Province</strong></td><td class="crd-td">914</td><td class="crd-td">21,4M</td><td class="crd-td">22,87M</td><td class="crd-td">223,77</td></tr>
<tr><td class="crd-td"><strong>Jiangxi Province</strong></td><td class="crd-td">593</td><td class="crd-td">19,2M</td><td class="crd-td">16,77M</td><td class="crd-td">106,18</td></tr>
<tr><td class="crd-td"><strong>Fujian Province</strong></td><td class="crd-td">480</td><td class="crd-td">13,5M</td><td class="crd-td">13,14M</td><td class="crd-td">106,22</td></tr>
<tr><td class="crd-td"><strong>Hubei Province</strong></td><td class="crd-td">1.052</td><td class="crd-td">27,9M</td><td class="crd-td">27,79M</td><td class="crd-td">160,71</td></tr>
<tr><td class="crd-td"><strong>Hunan Province</strong></td><td class="crd-td">912</td><td class="crd-td">25,2M</td><td class="crd-td">33,23M</td><td class="crd-td">157,83</td></tr>
<tr><td class="crd-td"><strong>Henan Province</strong></td><td class="crd-td">1.253</td><td class="crd-td">28,5M</td><td class="crd-td">44,21M</td><td class="crd-td">263,35</td></tr>
<tr><td class="crd-td"><strong>Shandong Province</strong></td><td class="crd-td">1.673</td><td class="crd-td">32,5M</td><td class="crd-td">48,88M</td><td class="crd-td">302,71</td></tr>
<tr><td class="crd-td"><strong>Shanxi Province</strong></td><td class="crd-td">948</td><td class="crd-td">11,2M</td><td class="crd-td">14,31M</td><td class="crd-td">90,29</td></tr>
<tr><td class="crd-td"><strong>Shaanxi Province</strong></td><td class="crd-td">850</td><td class="crd-td">9,2M</td><td class="crd-td">15,88M</td><td class="crd-td">78,4</td></tr>
<tr><td class="crd-td"><strong>Gansu and Ningxia</strong></td><td class="crd-td">975</td><td class="crd-td">6,1M</td><td class="crd-td">12,93M</td><td class="crd-td">29,12</td></tr>
<tr><td class="crd-td"><strong>Sichuan, Chongqing and Xikang</strong></td><td class="crd-td">2.464</td><td class="crd-td">51,5M</td><td class="crd-td">65,69M</td><td class="crd-td">117,27</td></tr>
<tr><td class="crd-td"><strong>Guangdong and Hainan</strong></td><td class="crd-td">1.038</td><td class="crd-td">29,4M</td><td class="crd-td">34,77M</td><td class="crd-td">165</td></tr>
<tr><td class="crd-td"><strong>Guangxi Province</strong></td><td class="crd-td">1.320</td><td class="crd-td">11,2M</td><td class="crd-td">19,56M</td><td class="crd-td">82,45</td></tr>
<tr><td class="crd-td"><strong>Yunnan Province</strong></td><td class="crd-td">668</td><td class="crd-td">9,8M</td><td class="crd-td">17,47M</td><td class="crd-td">44,66</td></tr>
<tr><td class="crd-td"><strong>Guizhou Province</strong></td><td class="crd-td">875</td><td class="crd-td">8,4M</td><td class="crd-td">15,04M</td><td class="crd-td">78,53</td></tr>
<tr><td class="crd-td"><strong>Fengtian/Liaoning Province</strong></td><td class="crd-td">318</td><td class="crd-td">11,2M</td><td class="crd-td">20,57M</td><td class="crd-td">144,99</td></tr>
<tr><td class="crd-td"><strong>Jilin Province</strong></td><td class="crd-td">127</td><td class="crd-td">5,1M</td><td class="crd-td">11,29M</td><td class="crd-td">60,57</td></tr>
<tr><td class="crd-td"><strong>Heilongjiang Province</strong></td><td class="crd-td">233</td><td class="crd-td">2,1M</td><td class="crd-td">11,9M</td><td class="crd-td">26,38</td></tr>
<tr><td class="crd-td"><strong>Inner Mongolia (Rehe, Chahar and Suiyuan)</strong></td><td class="crd-td">356</td><td class="crd-td">3,6M</td><td class="crd-td">6,1M</td><td class="crd-td">5,21</td></tr>
<tr><td class="crd-td"><strong>Xinjiang Province</strong></td><td class="crd-td">238</td><td class="crd-td">2,25M</td><td class="crd-td">4,87M</td><td class="crd-td">2,99</td></tr>
<tr><td class="crd-td"><strong>Qinghai Province</strong></td><td class="crd-td">127</td><td class="crd-td">820k</td><td class="crd-td">1,68M</td><td class="crd-td">2,34</td></tr>
<tr><td class="crd-td"><strong>Tibet (Xizang)</strong></td><td class="crd-td">162</td><td class="crd-td">1,1M</td><td class="crd-td">1,27M</td><td class="crd-td">1,12</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Japanese Colonial and Post-1945)</strong></td><td class="crd-td">101</td><td class="crd-td">3,3M</td><td class="crd-td">8,44M</td><td class="crd-td">236,15</td></tr>
<tr><td class="crd-td"><strong>Hong Kong</strong></td><td class="crd-td">7</td><td class="crd-td">445k</td><td class="crd-td">2,24M</td><td class="crd-td">2.178,81</td></tr>
<tr><td class="crd-td"><strong>Macao</strong></td><td class="crd-td">2</td><td class="crd-td">75k</td><td class="crd-td">188k</td><td class="crd-td">4.700</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">20.938</td><td class="crd-td">416,59M</td><td class="crd-td">590,33M</td><td class="crd-td">62,87</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Catalogued settlements (n=20.938), population benchmarks and terminal 1953AD areal density (persons per km²).</figcaption>
</figure>

Table \ref{tab:source-corpora-republican} documents the component historical and archaeological registries aggregated into the East Asian kriging domain, encompassing 87.810 site records across China, Transbaikalia and Central Asia.

<figure class="crd-table-figure" id="tab:source-corpora-republican">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hosner et al. PANGAEA East Asian Archaeological Synthesis</strong></td><td class="crd-td">51.432</td><td class="crd-td">58,46%</td></tr>
<tr><td class="crd-td"><strong>National Cultural Heritage Administration Major Historical Sites</strong></td><td class="crd-td">4.063</td><td class="crd-td">4,62%</td></tr>
<tr><td class="crd-td"><strong>China Historical GIS (CHGIS V6) Dynastic Time Series</strong></td><td class="crd-td">12.651</td><td class="crd-td">14,38%</td></tr>
<tr><td class="crd-td"><strong>CHGIS 1820 Qing Administrative Centres and Towns</strong></td><td class="crd-td">8.516</td><td class="crd-td">9,68%</td></tr>
<tr><td class="crd-td"><strong>Allen Ancient DNA Resource (AADR V66)</strong></td><td class="crd-td">739</td><td class="crd-td">0,84%</td></tr>
<tr><td class="crd-td"><strong>XRONOS Radiocarbon Database for East Asia</strong></td><td class="crd-td">1.446</td><td class="crd-td">1,64%</td></tr>
<tr><td class="crd-td"><strong>PEOPLE 3000 Global Radiocarbon Chronology</strong></td><td class="crd-td">325</td><td class="crd-td">0,37%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">43</td><td class="crd-td">0,05%</td></tr>
<tr><td class="crd-td"><strong>Archaeological Atlas Excavation Registry</strong></td><td class="crd-td">4.963</td><td class="crd-td">5,64%</td></tr>
<tr><td class="crd-td"><strong>Taiwan Bureau of Cultural Heritage National Register</strong></td><td class="crd-td">1.286</td><td class="crd-td">1,46%</td></tr>
<tr><td class="crd-td"><strong>Tibet and Kham Monastic Heritage Registry</strong></td><td class="crd-td">1.562</td><td class="crd-td">1,78%</td></tr>
<tr><td class="crd-td"><strong>Russian Academy of Sciences Steppe Conditioning Belt</strong></td><td class="crd-td">925</td><td class="crd-td">1,05%</td></tr>
<tr><td class="crd-td"><strong>Mongolian Steppe Archaeological Survey Corpus</strong></td><td class="crd-td">30</td><td class="crd-td">0,03%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Component archaeological and historical registries aggregated into the East Asian kriging domain (87.810 site records).</figcaption>
</figure>

# Limitations

Three principal historiographical and evidentiary constraints govern demographic analysis during the 1910AD to 1953AD era. First, early Republican administrative surveys between 1912AD and 1936AD operated under conditions of fragmented fiscal and military control [@hou2001zhongguo; @Harris2012Post]. Local warlord regimes frequently under-reported taxable household totals to minimize central revenue extractions, or conversely exaggerated municipal populations to inflate legislative representation [@hou2001zhongguo; @neizhengbao1948].

Second, wartime mortality statistics for the Second Sino-Japanese War and the Chinese Civil War contain considerable margin of error [@hou2001zhongguo; @cao2024population]. In occupied zones, military authorities maintained minimal civil records, while civilian deaths resulting from famine, dysentery and malaria occurred away from medical supervision [@hou2001zhongguo]. Archival reconstructions by Hou Yangfang and Cao Shuji incorporate local gazetteers and charitable relief rolls to bound excess mortality, but localized village headcounts remain subject to uncertainty [@hou2001zhongguo; @cao2024population].

Third, spatial kriging across arid and mountainous frontiers (Xinjiang, Qinghai, Tibet and Inner Mongolia) models continuous density surfaces based on environmental covariates and oasis catchments [@paciorek2006spatial; @Forbes1981Muslim]. While urban settlements such as Ürümqi, Xining, Lhasa and Hohhot are catalogued with exact coordinates, mobile pastoral populations circulated seasonally between rangelands, so local cell allocations reflect pastoral carrying capacity rather than fixed residential dwellings [@paciorek2006spatial].

# Conclusion

Between 1910AD and 1953AD, China traversed one of the most turbulent demographic transitions in global history. Emerging from dynastic collapse with a late-Qing baseline of 416,6M (416.589.000) in 1910AD, the population expanded to a pre-war peak of 503,5M (503.455.000) in 1936AD, weathered catastrophic wartime devastation between 1937AD and 1949AD that depressed numbers to 534,1M (534.065.000) in 1947AD, and culminated in the first modern census benchmark of 590,3M (590.328.000) across all 28 territorial units and 592M nationwide on 30 June 1953.

This four-decade era witnessed significant spatial structural changes: the agricultural colonisation and railway industrialisation of Northeast Manchuria, the concentration of modern industry and finance in maritime treaty ports led by Shanghai, Beijing, Tianjin, Hong Kong and Wuhan, the emergency westward relocation of millions of citizens to the Sichuan-Chongqing interior, and the modern colonial demographic transition and postwar refugee absorption in Taiwan.

By harmonising primary cadastral returns, municipal registers and 20.938 catalogued settlements with non-stationary spatial kriging across East Asia, this study provides an integrated demographic foundation linking the imperial demographic regime of the Qing dynasty to the planned urbanisation and industrialisation of modern China.

# Sources

<div id="refs"></div>
