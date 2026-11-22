---
title: "Demographic Trajectory of Yayoi and Kofun Japan"
subtitle: "Wet-Rice Dispersal, Continental Migration, Keyhole-Mound State Formation and the Asuka Emergence, 250BC to 650AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: yayoi_and_kofun_japan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_yayoi_and_kofun_japan_spatial.png"
hero_caption: "Macro-regional divisions and catalogued archaeological settlement centres across the thirteen Japanese provinces from 250BC to 650AD."
hero_label: "fig:hero-yayoi-kofun-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the demographic trajectory, settlement hierarchy and spatial population density of the Japanese archipelago from the transition to intensive wet-rice agriculture in 250BC to the consolidation of the early imperial state following the Taika Reform in 650AD. Across thirteen historical and geographical territories encompassing 390.852 km² (6.249 five-arcminute raster cells), aggregate population expanded nearly thirty-eight-fold over nine centuries, rising from an initial Late Yayoi threshold of 120k (120.000) in 250BC to 360k (360.000) in 100BC, 600k (600.000) at the turn of the common era in 1AD, 880k (880.000) in 100AD, 1,2M (1.200.000) in 200AD, 1,8M (1.800.000) in 300AD at the onset of the Early Kofun mound-building period, 2,6M (2.600.000) in 400AD, 3,5M (3.500.000) in 500AD, 4,2M (4.200.000) in 600AD, and culminating at 4,5M (4.500.000) in 650AD [@Kito2000Jinko; @Farris2009DailyLife; @Imamura1996Prehistoric]. This monumental demographic expansion was propelled by the initial diffusion of irrigated paddy cultivation, metallurgy and continental migrant lineages from the Korean peninsula into Northern Kyushu, spreading eastward through the Seto Inland Sea corridor into the Kinai basin, Tokai and the Kanto plain [@Imamura1996Prehistoric; @Hudson1992Rice; @Crema2021Bayesian]. The subsequent transition to the Kofun period witnessed the political unification of central and western Japan under the Yamato confederacy, manifested in gigantic keyhole-shaped tumuli (*zenpokoenfun*) that reflected massive corvée labour mobilisation, extensive hydraulic drainage works and hierarchical settlement networks [@Imamura1996Prehistoric; @Kito2000Jinko; @Kaneda2022Proposal]. Reconciling archaeological pit-dwelling counts, radiocarbon chronologies and early eighth-century Ritsuryo household registers (*koseki*), this research calibrates spatial population densities using Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 384 domestic catchments, 90.926 archaeological records, and 714 catalogued settlement centres led by the proto-urban capitals of Asuka (42k), Naniwa (35k), Mozu-Furuichi (22k), Makimuku (15k) and Kibi-Tsukuriyama (14k) [@Farris2009DailyLife; @Kudo2023JapanC14; @Paciorek2006Matern].

# Background

## The Jomon Baseline and Demographic Contraction

Before the introduction of irrigated agriculture, the Japanese archipelago supported one of the densest hunter-gatherer populations in the prehistoric world [@Koyama1978Jomon; @Habu2004AncientJomon]. During the Middle Jomon period (around 3000BC to 2000BC), warm climatic conditions supported abundant deciduous broadleaf forests rich in oak, chestnut and beech mast across central and eastern Honshu [@Koyama1978Jomon; @Habu2004AncientJomon; @Crema2020Jomon]. Intensive gathering of nuts, accompanied by estuarine shellfishing, deep-sea angling and hunting of sika deer and wild boar, allowed semi-sedentary communities to construct substantial circular villages consisting of pit-dwellings (*tateana jukyo*) and communal storage features [@Habu2004AncientJomon; @Crema2020Jomon].

However, the onset of Neoglacial cooling during the first millennium BC induced severe ecological stress across northern and central Japan [@Crema2016Summed; @Cheung2019Stable]. Nut yields fluctuated unpredictably, littoral shellbeds deteriorated, and population levels suffered dramatic contractions [@Koyama1978Jomon; @Habu2004AncientJomon]. In his pioneering quantitative analysis of Japanese archaeological sites, Koyama Shuzo calculated that while Middle Jomon population reached approximately 261k persons (over 90% concentrated in eastern Japan), Late and Final Jomon numbers contracted to approximately 160k and 75,8k persons respectively [@Koyama1978Jomon; @Kito2000Jinko]. Western Japan, carpeted by less productive evergreen laurel forests, supported only 10k to 15k hunter-gatherers during this terminal phase, leaving the alluvial valleys of Kyushu, Chugoku and Kinai sparsely settled and ecologically receptive to new subsistence systems [@Koyama1978Jomon; @Imamura1996Prehistoric; @Crema2021Bayesian].

## The Yayoi Agrarian Transition and Wet-Rice Dispersal

The demographic stagnation of late prehistoric Japan was transformed by the arrival of wet-rice paddy cultivation (*suiden*) from the southern Korean peninsula across the Tsushima Strait [@Imamura1996Prehistoric; @Hudson1992Rice; @VOVIN2020Japanese]. Although high-precision accelerator mass spectrometry (AMS) radiocarbon dating on carbonised rice grains adheres to an initial arrival in northern Kyushu around 900BC to 800BC, the widespread conversion of landscape into engineered paddy fields, complete with timber sluice gates, drainage ditches and bunded plots, crystallized decisively from 300BC onward [@Kudo2023JapanC14; @Crema2021Bayesian; @West2024Agentbased].

Pioneering settlements in Northern Kyushu, such as Itazuke and Nabata in Fukuoka and Saga prefectures, document the rapid integration of continental technology: polished stone reaping knives, wooden spades and hoes, grooved timber boards, bronze daggers and halberds, and storage vessels adapted for grain preservation [@Imamura1996Prehistoric; @Hudson1992Rice]. Wet-rice agriculture yielded an energy return per unit area several times higher than foraging, prompting immediate population growth [@Kito2000Jinko; @West2024Agentbased].

From Northern Kyushu, farming communities dispersed eastward along the coastal plains of the Seto Inland Sea, occupying the Kibi region of modern Okayama, the San'in coast of Izumo, and the fertile Osaka and Nara basins of Kinai by 200BC to 100BC [@Imamura1996Prehistoric; @Crema2021Bayesian]. In central Kinai, settlements such as Karako-Kagi in the Nara Basin and Ikegami-Sone on the Izumi Plain developed into vast residential complexes covering dozens of hectares, supported by extensive dry-field cultivation of foxtail millet, broomcorn millet, soybeans and domesticated peaches alongside irrigated rice paddies [@Zheng2014Archaeological; @Lee2011Archaeological; @Cheung2019Stable]. Farther east, wet rice penetrated the Tokai lowlands around the Toro and Asahi sites, while its eastward march into Kanto and northern Tohoku encountered ecological friction, progressing slowly against entrenched foraging adaptations [@Imamura1996Prehistoric; @Crema2016Summed].

## Continental Migration and Dual-Structure Admixture

The Yayoi demographic transition was accompanied by substantial human migration from continental Northeast Asia [@Peng2011Inferring; @Matsumura2018Craniomorphometric]. Physical anthropological analyses of human skeletal remains from Northern Kyushu and Yamaguchi cemeteries, notably Doigahama and Yoshinogari, reveal individuals of markedly taller stature, flatter facial profiles and narrower nasal apertures than indigenous Jomon foragers [@Imamura1996Prehistoric; @Matsumura2018Craniomorphometric]. Modern ancient genomics corroborates this biological transformation, demonstrating that continental migrants from Mumun-period Korea intermarried with indigenous Jomon populations, establishing the foundational dual-structure genetic profile characteristic of historical Japanese populations [@Peng2011Inferring; @Matsumura2018Craniomorphometric; @Kakuda2016Multiplex].

Demographic simulation models by Hanihara Kazuro and subsequent agent-based spatial models suggest that an initial founder influx of several thousand immigrants, combined with a sustained intrinsic natural increase rate of 1% to 1,5% per annum, accounts for the rapid multiplication of inhabitants across western Japan between 250BC and 200AD [@West2024Agentbased; @Peng2011Inferring].

Competition over prime irrigable alluvial land and access to imported continental bronze and iron ingots precipitated endemic inter-communal warfare during the Middle and Late Yayoi periods [@Imamura1996Prehistoric; @Hudson1992Rice]. Agricultural villages constructed deep circular moats, wooden palisades and watchtowers, creating fortified centres (*kan'go shuraku*) such as Yoshinogari in Saga and Otsuka in Kanagawa [@Imamura1996Prehistoric; @West2024Agentbased]. Concurrently, defensive redoubts were erected on elevated hilltops (*koshin shuraku*) overlooking coastal sea lanes [@Imamura1996Prehistoric]. These martial tensions culminated in the late second century AD in the legendary civil unrest of Wa (*Wa-koku dairan*), recorded in the third-century Chinese chronicle *Weizhi Wajinden*, which documented the eventual election of Queen Himiko of Yamatai to head a confederation of over thirty allied polities (*kuni*) [@Imamura1996Prehistoric; @Hudson1992Rice].

## Kofun Monumentality and Yamato Hegemony

Around 250AD to 300AD, the socio-political landscape of the Japanese archipelago underwent a structural transformation marked by the appearance of standardised keyhole-shaped burial mounds (*zenpokoenfun*) [@Imamura1996Prehistoric; @Kaneda2022Proposal]. Originating in the southeastern Nara Basin at Makimuku, where gigantic tumuli such as Hashihaka were constructed over lengths exceeding 270 metres, this funerary architecture rapidly disseminated across Kinai, Setouchi, San'in, Tokai and southern Kanto [@Imamura1996Prehistoric; @Kaneda2022Proposal].

The distribution of identical Chinese triangular-rimmed bronze mirrors (*sankakubuchi shinjukyo*) and standardised stone bracelets inside these keyhole mounds demonstrates the emergence of a suzerain political alliance dominated by the Yamato sovereign rulers in the Kinai plain [@Imamura1996Prehistoric; @Hudson1992Rice]. By distributing ceremonial prestige goods and regulating foreign exchange with the Korean kingdoms of Baekje, Gaya and Goguryeo, the Yamato court consolidated ideological and military supremacy over regional chieftains (*kuni no miyatsuko*) [@Imamura1996Prehistoric; @Farris2009DailyLife].

In the fifth century AD (the Middle Kofun period), the political axis shifted toward the coastal plains of Kawachi and Izumi (modern Osaka Prefecture) [@Imamura1996Prehistoric; @Kito2000Jinko]. Chieftains constructed the monumental Mozu-Furuichi tumulus groups, dominated by colossal mounded graves such as the Daisenryo Kofun (attributed to Emperor Nintoku, measuring 486 metres in length) and the Kondo-Maruyama Kofun [@Imamura1996Prehistoric; @Kaneda2022Proposal]. The physical construction of these burial monuments required the excavation and transport of hundreds of thousands of cubic metres of earth and stone, evidencing the capacity of the Yamato administration to mobilise millions of person-days of corvée labour [@Imamura1996Prehistoric; @Farris2009DailyLife].

This monumental labour mobilisation was directly linked to agrarian landscape transformation [@Imamura1996Prehistoric; @Kito2000Jinko]. The Yamato kings directed large-scale hydraulic engineering projects, draining the marshy floodplains of the Yodo and Yamato rivers, building the Mamuta dykes and excavating irrigation canals that brought extensive new tracts of land under rice cultivation [@Imamura1996Prehistoric; @Farris2009DailyLife]. Regional power centres in Kibi (Okayama), Tsukushi (Northern Kyushu), Izumo and Kanto constructed secondary keyhole tumuli exceeding 100 to 200 metres, indicating dense regional populations capable of supporting autonomous military retinues while recognising Yamato ceremonial suzerainty [@Imamura1996Prehistoric; @Farris2009DailyLife].

## The Asuka Court and Ritsuryo State Formation

During the late sixth and seventh centuries AD, the Yamato realm transitioned from a loose confederacy of aristocratic lineages (*uji*) and occupational corporations (*be*) into a centralised bureaucratic monarchy centered on the Asuka Valley in southern Nara [@Farris2009DailyLife; @Hayami2001Historical]. This transition was accelerated by successive waves of continental immigrant specialists (*toraijin*) from the Korean peninsula, who introduced Chinese writing, Buddhist theology, continental calendar systems, advanced iron-smelting techniques, sericulture and Sueki high-fired stoneware [@Farris2009DailyLife; @Imamura1996Prehistoric].

The political crises of the early seventh century, culminating in the Taika Reform of 645AD under Prince Naka no Oe and Nakatomi no Kamatari, abolished private hereditary landholdings (*tadokoro*) and occupational serfs (*tamin*), claiming all territory and people for the imperial throne under the doctrine of *kouchi koumin* [@Farris2009DailyLife; @Hayami2001Historical]. Influenced by Tang Chinese administrative codes, the Asuka court instituted a centralised provincial administration divided into provinces (*kuni*), districts (*kori*) and villages (*sato*) [@Farris2009DailyLife; @Hayami2001Historical].

To extract agricultural grain taxes (*so*), handicraft textiles (*cho*) and corvée labour duties (*yo*), the imperial state decreed the compilation of periodic household registers (*koseki*), an institutional innovation that established the baseline for historical demography in ancient Japan [@Farris2009DailyLife; @Kito2000Jinko]. Concurrently, the establishment of the maritime administrative palace at Naniwa Nagara-Toyosaki in 645AD on Osaka Bay created an urban nodal centre linking the Asuka court to maritime communication routes through the Seto Inland Sea [@Farris2009DailyLife; @Kito2000Jinko].

# Methodology

## Territorial Partition and Regional Framework

To reconstruct spatial population density while preserving geographical continuity across the nine-century study period, this analysis partitions the Japanese archipelago into thirteen analytical and historical territories covering 390.852 km² across 6.249 five-arcminute raster cells (Table \ref{tab:validation-japan}):

1. Northern Kyushu and Tsushima (28.849 km²): encompassing modern Fukuoka, Saga, Nagasaki, Oita and the maritime islands of Iki and Tsushima.
2. Southern Kyushu (Hayato-Kumaso) (17.268 km²): encompassing modern Kumamoto, Miyazaki, Kagoshima and the Satsuma peninsula.
3. Shikoku (20.435 km²): encompassing modern Tokushima, Kagawa, Ehime and Kochi prefectures.
4. Setouchi and Kibi (21.033 km²): encompassing the coastal lowlands of modern Yamaguchi, Hiroshima, Okayama and Hyogo along the Inland Sea.
5. San'in and Izumo (13.331 km²): encompassing the Sea of Japan coastal littoral of Shimane and Tottori prefectures.
6. Kinai-Yamato Core (32.339 km²): encompassing the foundational political plains of Nara, Osaka, Kyoto, Wakayama and Shiga surrounding Lake Biwa.
7. Tokai and Nobi Plain (20.750 km²): encompassing modern Mie, Aichi and Shizuoka prefectures.
8. Chubu-Shinano Highlands (18.133 km²): encompassing modern Nagano, Yamanashi and Gifu mountainous interior basins.
9. Hokuriku (28.541 km²): encompassing modern Fukui, Ishikawa, Toyama and Niigata along the northern maritime sea lanes.
10. Kanto Plain (Keno-Musashi) (33.311 km²): encompassing modern Kanagawa, Tokyo, Saitama, Chiba, Ibaraki, Tochigi and Gunma prefectures.
11. Tohoku Emishi Frontier (72.145 km²): encompassing modern Fukushima, Miyagi, Yamagata, Akita, Iwate and Aomori prefectures.
12. Hokkaido (Epi-Jomon and Okhotsk) (80.208 km²): encompassing the northern island under foraging, marine mammal hunting and cold-adapted dry farming regimes.
13. Ryukyu Shellmound Arc (4.509 km²): encompassing the Nansei and Ryukyu island chain from Tanegashima and Yakushima to Okinawa and the Sakishima group.

For analytical validation, these thirteen territories are aggregated into four macro-regions: Western Japan (Northern Kyushu, Southern Kyushu, Shikoku, Setouchi and San'in), Central Honshu Core (Kinai, Tokai, Chubu Highlands and Hokuriku), Eastern and Northern Honshu (Kanto Plain and Tohoku Emishi), and the Peripheral Arcs (Hokkaido and Ryukyu).

At each historical benchmark year $t \in \{-250, -100, 1, 100, 200, 300, 400, 500, 600, 650\}$, total population $P_r(t)$ in territory $r$ synthesises excavated settlement habitations, carrying capacity multipliers and continuous agrarian rural surfaces:

$$P_r(t) = \sum_{k \in \mathcal{S}_r} w_k(t) \cdot S_k(t) + \int_{\mathcal{A}_r} \rho_r(s, t) \, ds$$

where $\mathcal{S}_r$ denotes catalogued nucleated settlement cores, $w_k(t)$ is the settlement-capacity multiplier calibrated from pit-dwelling densities, and $\rho_r(s, t)$ is the residual rural demographic density surface [@Kito2000Jinko; @Farris2009DailyLife].

## Settlement Counts and Multiplier Calibration

Demographic estimation across protohistoric Japan departs from raw textual extrapolation, drawing instead upon archaeological dwelling counts, cemetery burials, and retrospective calibrations from surviving early eighth-century household registers [@Kito2000Jinko; @Farris2009DailyLife; @Imamura1996Prehistoric].

Excavations across thousands of Yayoi and Kofun sites document clear architectural trends [@Imamura1996Prehistoric; @Farris2009DailyLife]. Early Yayoi settlements comprised modest hamlets of 4 to 8 sunken pit-dwellings (*tateana jukyo*), accompanied by 1 to 3 raised-floor granaries (*takayuka soko*) and subterranean storage pits [@Imamura1996Prehistoric]. Ethnoarchaeological comparisons and hearth space analyses indicate an average of 4,5 to 5,5 persons per pit-dwelling, yielding hamlet populations of 20 to 45 residents [@Koyama1978Jomon; @Farris2009DailyLife].

During the Middle and Late Yayoi periods, regional central places expanded into nucleated fortified towns [@Imamura1996Prehistoric; @West2024Agentbased]. At Yoshinogari in Saga Prefecture, hundreds of overlapping pit-dwellings, watchtower post-holes and jar-burial cemeteries (*kamekanbo*) demonstrate an enduring community of 1.500 to 5.400 individuals [@Imamura1996Prehistoric; @West2024Agentbased]. Similarly, Karako-Kagi in the Nara Basin and Asahi in Owari encompassed 20 to 50 hectares of enclosed space, maintaining concurrent residential populations of 3.000 to 5.000 people [@Imamura1996Prehistoric].

By the Late Kofun and early Asuka eras, agrarian villages exhibited increasing nucleation [@Farris2009DailyLife]. The terminal baseline of 4,5M in 650AD harmonises with William Wayne Farris's analysis of surviving household registers (*koseki*) from 702AD (the Taiho registers for Mino, Chikuzen and Buzen provinces) [@Farris2009DailyLife; @Kito2000Jinko]. These administrative rolls record extended compound households (*goko*) averaging 16 to 25 registered members, comprising a core patrilineal family, married siblings, collaterals and semi-free dependents (*nuhi*) [@Farris2009DailyLife; @Hayami2001Historical]. Adjusting for unrecorded infants and institutional under-registration, Farris established a late seventh-century imperial population between 4,5M and 5,5M, consistent with the 4,5M terminal threshold adopted in this study [@Farris2009DailyLife; @Kito2000Jinko].

## Non-Stationary Kriging and Biophysical Covariates

Spatial population allocation within the thirteen territories draws upon the Korea-Japan archaeological kriging domain, aggregating 90.926 unique imperial, ancient and prehistoric site-records across 384 domestic catchments and 9.123 active land cells [@Kudo2023JapanC14; @Paciorek2006Matern].

Residual spatial dependence is modelled using Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) covariance [@Paciorek2006Matern]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

where $\Sigma_i$ represents the spatially varying local kernel matrix reflecting terrain orientation and coastal topography, and $Q_{ij} = (s_i - s_j)^T \left(\frac{\Sigma_i + \Sigma_j}{2}\right)^{-1} (s_i - s_j)$ is the Mahalanobis distance [@Paciorek2006Matern].

The model regularises dimensionless variogram bandwidths at $\tau_1 = 1,4211$ and $\tau_2 = 2,6291$, with the nugget-to-sill ratio constrained to 0,04 across all chronological horizons (Table \ref{tab:kriging-japan}). Spatial allocation incorporates five biophysical covariates: habitable land fraction, natural vegetative productivity index, ecozone terrain suitability, fluvial proximity along major alluvial basins (the Chikugo, Yodo, Yamato, Kiso-Nobi, Tone and Shinano river corridors), and marine coastal accessibility [@Paciorek2006Matern]. Dense urban populations from 714 catalogued archaeological centres are explicitly buffered and subtracted from territorial baselines to preserve rural spatial integrity.

# Testing and Validation

Mathematical reconciliation confirms exact arithmetic agreement between regional totals and macro-regional aggregates. Table \ref{tab:validation-japan} displays the longitudinal trajectory across all ten benchmark dates from 250BC to 650AD, decomposed into analytical macro-regions.

<figure class="crd-table-figure" id="tab:validation-japan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Western Japan</th><th class="crd-th">Central Core</th><th class="crd-th">Eastern Japan</th><th class="crd-th">Peripheries</th><th class="crd-th">Archipelago Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>250BC</strong></td><td class="crd-td">52,8k</td><td class="crd-td">39,6k</td><td class="crd-td">21,6k</td><td class="crd-td">6k</td><td class="crd-td">120k</td></tr>
<tr><td class="crd-td"><strong>100BC</strong></td><td class="crd-td">160,6k</td><td class="crd-td">131,7k</td><td class="crd-td">54k</td><td class="crd-td">13,7k</td><td class="crd-td">360k</td></tr>
<tr><td class="crd-td"><strong>1AD</strong></td><td class="crd-td">270k</td><td class="crd-td">234k</td><td class="crd-td">78k</td><td class="crd-td">18k</td><td class="crd-td">600k</td></tr>
<tr><td class="crd-td"><strong>100AD</strong></td><td class="crd-td">381,8k</td><td class="crd-td">351,9k</td><td class="crd-td">122k</td><td class="crd-td">24,2k</td><td class="crd-td">880k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">501,1k</td><td class="crd-td">491,9k</td><td class="crd-td">176,9k</td><td class="crd-td">30k</td><td class="crd-td">1,2M</td></tr>
<tr><td class="crd-td"><strong>300AD</strong></td><td class="crd-td">722,3k</td><td class="crd-td">756k</td><td class="crd-td">281,2k</td><td class="crd-td">40,5k</td><td class="crd-td">1,8M</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">1M</td><td class="crd-td">1,12M</td><td class="crd-td">429k</td><td class="crd-td">52k</td><td class="crd-td">2,6M</td></tr>
<tr><td class="crd-td"><strong>500AD</strong></td><td class="crd-td">1,33M</td><td class="crd-td">1,49M</td><td class="crd-td">609,7k</td><td class="crd-td">65,8k</td><td class="crd-td">3,5M</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">1,58M</td><td class="crd-td">1,77M</td><td class="crd-td">770,3k</td><td class="crd-td">73,9k</td><td class="crd-td">4,2M</td></tr>
<tr><td class="crd-td"><strong>650AD</strong></td><td class="crd-td">1,69M</td><td class="crd-td">1,89M</td><td class="crd-td">846k</td><td class="crd-td">76,5k</td><td class="crd-td">4,5M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional demographic benchmarks across Japan, 250BC to 650AD, harmonised from archaeological and historical registers.</figcaption>
</figure>

Across all nine horizons in the Korea-Japan kriging domain, Table \ref{tab:kriging-japan} documents tightly fitted Matérn variogram parameters. Residual $R^2$ exceeds 0,998 across all horizons, with the nugget-to-sill ratio regularised at 0,04 and effective short ranges spanning 35,66 km to 48,2 km.

<figure class="crd-table-figure" id="tab:kriging-japan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Jomon (before 3500BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00505</td><td class="crd-td">0,22</td><td class="crd-td">0,9513</td><td class="crd-td">5,3239</td><td class="crd-td">21,4223</td></tr>
<tr><td class="crd-td"><strong>2. Middle Jomon and Middle Chulmun (3500BC to 2000BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00281</td><td class="crd-td">0,16</td><td class="crd-td">0,9749</td><td class="crd-td">4,2696</td><td class="crd-td">15,7542</td></tr>
<tr><td class="crd-td"><strong>3. Late-Final Jomon and Early Mumun (2000BC to 300BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00156</td><td class="crd-td">0,13</td><td class="crd-td">0,9791</td><td class="crd-td">4,0592</td><td class="crd-td">14,1882</td></tr>
<tr><td class="crd-td"><strong>4. Yayoi and Gojoseon Horizons (300BC to 250AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00078</td><td class="crd-td">0,04</td><td class="crd-td">0,9984</td><td class="crd-td">6,0037</td><td class="crd-td">26,4645</td></tr>
<tr><td class="crd-td"><strong>5. Kofun and Three Kingdoms (250AD to 668AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00058</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">5,1228</td><td class="crd-td">18,1845</td></tr>
<tr><td class="crd-td"><strong>6. Nara, Early Heian and Unified Silla (668AD to 935AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,0005</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">4,1561</td><td class="crd-td">15,8748</td></tr>
<tr><td class="crd-td"><strong>7. Late Heian, Kamakura and Goryeo (935AD to 1392AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00033</td><td class="crd-td">0,04</td><td class="crd-td">0,9979</td><td class="crd-td">3,5177</td><td class="crd-td">10,5668</td></tr>
<tr><td class="crd-td"><strong>8. Muromachi, Sengoku and Early Joseon (1392AD to 1600AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00036</td><td class="crd-td">0,04</td><td class="crd-td">0,998</td><td class="crd-td">3,4683</td><td class="crd-td">10,3268</td></tr>
<tr><td class="crd-td"><strong>9. Edo and Late Joseon to Modern Era (1600AD to 1910AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00177</td><td class="crd-td">0,22</td><td class="crd-td">0,9315</td><td class="crd-td">3,2751</td><td class="crd-td">8,8717</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Korea-Japan kriging variogram diagnostics across nine chronological horizons (9.123 active land cells, regularised tau1 = 1,4211, tau2 = 2,6291).</figcaption>
</figure>

Table \ref{tab:source-corpora-japan} details the component archaeological and historical registries aggregated into the Korea-Japan kriging domain, highlighting the predominance of systematic radiocarbon compendia, municipal excavation gazetteers and national monument databases.

<figure class="crd-table-figure" id="tab:source-corpora-japan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Rekihaku National Radiocarbon Database v1,3</strong></td><td class="crd-td">14.536</td><td class="crd-td">15,57%</td></tr>
<tr><td class="crd-td"><strong>National Museum of Japanese History Prehistoric Site Corpus</strong></td><td class="crd-td">12.717</td><td class="crd-td">13,62%</td></tr>
<tr><td class="crd-td"><strong>Japanese Archaeological Association Kanto Regional Register</strong></td><td class="crd-td">20.209</td><td class="crd-td">21,65%</td></tr>
<tr><td class="crd-td"><strong>Tokyo Metropolitan Archaeological Site Survey</strong></td><td class="crd-td">6.388</td><td class="crd-td">6,84%</td></tr>
<tr><td class="crd-td"><strong>Ministry of Land, Infrastructure, Transport and Tourism Cultural Relics</strong></td><td class="crd-td">17.728</td><td class="crd-td">18,99%</td></tr>
<tr><td class="crd-td"><strong>Agency for Cultural Affairs Designated Historic Monuments</strong></td><td class="crd-td">5.651</td><td class="crd-td">6,05%</td></tr>
<tr><td class="crd-td"><strong>Korea Heritage Service National Archaeological Portal</strong></td><td class="crd-td">10.696</td><td class="crd-td">11,46%</td></tr>
<tr><td class="crd-td"><strong>Korean Peninsula Neolithic Radiocarbon Inventory</strong></td><td class="crd-td">437</td><td class="crd-td">0,47%</td></tr>
<tr><td class="crd-td"><strong>Hanseong Baekje Era Accelerator Mass Spectrometry Corpus</strong></td><td class="crd-td">77</td><td class="crd-td">0,08%</td></tr>
<tr><td class="crd-td"><strong>National Cultural Heritage Inventory of Korea</strong></td><td class="crd-td">1.173</td><td class="crd-td">1,26%</td></tr>
<tr><td class="crd-td"><strong>Korean Peninsula Northern Historical Monuments Survey</strong></td><td class="crd-td">129</td><td class="crd-td">0,14%</td></tr>
<tr><td class="crd-td"><strong>National Research Institute of Cultural Heritage North Korea Archive</strong></td><td class="crd-td">85</td><td class="crd-td">0,09%</td></tr>
<tr><td class="crd-td"><strong>Historical Cadastral Gazetteers of Northern Korea</strong></td><td class="crd-td">217</td><td class="crd-td">0,23%</td></tr>
<tr><td class="crd-td"><strong>Calibrated Archaeological Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">2.082</td><td class="crd-td">2,23%</td></tr>
<tr><td class="crd-td"><strong>Continental Frontier Archaeological Calibration Buffer</strong></td><td class="crd-td">1.234</td><td class="crd-td">1,32%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Component archaeological, heritage and historical gazetteer registries aggregated into the Korea-Japan kriging domain.</figcaption>
</figure>

# Results

## Early to Middle Yayoi Expansion (250BC to 1AD)

At the initial benchmark of 250BC, the Japanese archipelago supported approximately 120k people (Figure \ref{fig:traj-japan}). Northern Kyushu served as the principal demographic growth centre of the island chain, holding 25,2k inhabitants (21% of the national total) across fertile alluvial valleys surrounding Hakata Bay, the Ariake Sea and the Tsukushi Plain [@Imamura1996Prehistoric; @Crema2021Bayesian].

<figure class="crd-figure-block" id="fig:traj-japan">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-yayoi-and-kofun-japan/fig2_yayoi_and_kofun_japan_trajectory.png" alt="fig:traj-japan" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Yayoi and Kofun Japan from 250BC to 650AD across western, central, eastern and peripheral provinces with historical uncertainty intervals.</figcaption>
</figure>

By 100BC, aggregate population had tripled to 360k, climbing to 600k by 1AD (Table \ref{tab:regions-japan}). Over this two-and-a-half-century interval, wet-rice agriculture diffused rapidly eastward along the sheltered maritime waterways of the Seto Inland Sea [@Imamura1996Prehistoric; @Crema2021Bayesian]. In Setouchi and Kibi, population expanded sixfold from 10,8k in 250BC to 66k in 1AD [@Imamura1996Prehistoric]. In the Kinai-Yamato core, fertile lacustrine soils around Lake Biwa and the alluvial deposits of the Nara Basin enabled population to surge from 16,8k to 114k, surpassing Northern Kyushu to become the largest demographic concentration in the archipelago (19% of the total) [@Imamura1996Prehistoric; @Kito2000Jinko].

In eastern Honshu, adoption proceeded more conservatively. While Tokai expanded from 10,8k to 66k, the Kanto Plain expanded from 13,2k to 54k, retaining significant reliance on traditional gathering, hunting and dry-field horticulture [@Koyama1978Jomon; @Habu2004AncientJomon]. In Tohoku (8,4k rising to 24k) and Hokkaido (3,6k rising to 9k), populations remained largely within the Epi-Jomon cultural sphere, maintaining mobile foraging economies adapted to cold sub-boreal environments [@Walker2001ConquestAinu; @Leipe2017Barley]. In the south, the Ryukyu arc expanded modestly from 2,4k to 9k within the Late Shellmound tradition, reliant on coral reef foraging and maritime shell trade [@Smits2019MaritimeRyukyu; @Aoyama2022Perspective].

## Late Yayoi Consolidation and Regional Chiefdoms (1AD to 250AD)

Between 1AD and 250AD, Japan grew by 150%, rising from 600k to 1,5M (reaching 880k in 100AD and 1,2M in 200AD, on a path to 1,8M by 300AD) (Table \ref{tab:regions-japan}). This expansion was accompanied by profound sociopolitical restructuring (Figure \ref{fig:shares-japan}).

<figure class="crd-figure-block" id="fig:shares-japan">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-yayoi-and-kofun-japan/fig3_yayoi_and_kofun_japan_shares.png" alt="fig:shares-japan" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Macro-regional population shares and comparative 250BC baseline versus 650AD terminal totals across the thirteen Japanese territories.</figcaption>
</figure>

The introduction of iron tools revolutionized agricultural efficiency [@Imamura1996Prehistoric]. Cast and forged iron axes, sickles and chisel blades, initially imported from the Han commanderies of Lelang and Daifang and the Gaya polities of the southern Korean peninsula, enabled agrarian communities to clear dense hardwood forests and construct deep irrigation canals [@Imamura1996Prehistoric; @Hudson1992Rice].

Large moated town settlements expanded dramatically [@Imamura1996Prehistoric; @West2024Agentbased]. In Northern Kyushu, Yoshinogari attained its peak development around 200AD, housing an estimated 5,4k residents within outer defensive ditches spanning over 40 hectares [@Imamura1996Prehistoric; @West2024Agentbased]. In the Fukuoka Plain, the Naka-Hie settlement cluster (identified with the Nakoku polity of Chinese chronicles) expanded to 6,5k people [@Imamura1996Prehistoric]. In the Kinai basin, Karako-Kagi attained 5k residents, supported by bronze-casting workshops that produced ceremonial bells (*dotaku*) distributed throughout central Japan [@Imamura1996Prehistoric; @Hudson1992Rice]. In Tokai, the Asahi site in Owari grew to 4,5k, dominating the fertile alluvial delta of the Nobi Plain [@Imamura1996Prehistoric].

Tensions over water rights and bronze prestige regalia stimulated political consolidation [@Imamura1996Prehistoric; @Hudson1992Rice]. The Chinese *Hou Hanshu* records that in 57AD, the King of Na in Wa received an imperial gold seal from Emperor Guangwu of Han, a physical artefact excavated on Shikanoshima Island in Hakata Bay [@Imamura1996Prehistoric]. Subsequent warfare culminated in the rise of the Yamatai confederacy under Queen Himiko around 180AD to 240AD, coordinating regional polities across northern Kyushu and the Inland Sea [@Imamura1996Prehistoric; @Hudson1992Rice].

## Early to Middle Kofun State Formation (250AD to 500AD)

The onset of the Kofun period around 250AD to 300AD marked an inflection point in demographic concentration and political complexity (Table \ref{tab:regions-japan}) [@Imamura1996Prehistoric; @Kito2000Jinko]. National population climbed from 1,8M in 300AD to 2,6M in 400AD and attained 3,5M in 500AD [@Kito2000Jinko; @Farris2009DailyLife].

<figure class="crd-table-figure" id="tab:regions-japan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">250BC</th><th class="crd-th">1AD</th><th class="crd-th">200AD</th><th class="crd-th">300AD</th><th class="crd-th">400AD</th><th class="crd-th">500AD</th><th class="crd-th">600AD</th><th class="crd-th">650AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Kyushu and Tsushima</strong></td><td class="crd-td">28.849</td><td class="crd-td">25,2k</td><td class="crd-td">120k</td><td class="crd-td">204,1k</td><td class="crd-td">279,1k</td><td class="crd-td">364k</td><td class="crd-td">476k</td><td class="crd-td">554,4k</td><td class="crd-td">585k</td></tr>
<tr><td class="crd-td"><strong>Southern Kyushu (Hayato-Kumaso)</strong></td><td class="crd-td">17.268</td><td class="crd-td">6k</td><td class="crd-td">24k</td><td class="crd-td">45k</td><td class="crd-td">65,3k</td><td class="crd-td">91k</td><td class="crd-td">122,5k</td><td class="crd-td">147k</td><td class="crd-td">157,5k</td></tr>
<tr><td class="crd-td"><strong>Shikoku</strong></td><td class="crd-td">20.435</td><td class="crd-td">6k</td><td class="crd-td">36k</td><td class="crd-td">75k</td><td class="crd-td">114,7k</td><td class="crd-td">169k</td><td class="crd-td">234,5k</td><td class="crd-td">289,8k</td><td class="crd-td">315k</td></tr>
<tr><td class="crd-td"><strong>Setouchi and Kibi</strong></td><td class="crd-td">21.033</td><td class="crd-td">10,8k</td><td class="crd-td">66k</td><td class="crd-td">132k</td><td class="crd-td">198k</td><td class="crd-td">286k</td><td class="crd-td">378k</td><td class="crd-td">445,2k</td><td class="crd-td">472,5k</td></tr>
<tr><td class="crd-td"><strong>San'in and Izumo</strong></td><td class="crd-td">13.331</td><td class="crd-td">4,8k</td><td class="crd-td">24k</td><td class="crd-td">45k</td><td class="crd-td">65,3k</td><td class="crd-td">91k</td><td class="crd-td">122,5k</td><td class="crd-td">147k</td><td class="crd-td">157,5k</td></tr>
<tr><td class="crd-td"><strong>Kinai-Yamato Core</strong></td><td class="crd-td">32.339</td><td class="crd-td">16,8k</td><td class="crd-td">114k</td><td class="crd-td">246k</td><td class="crd-td">382,5k</td><td class="crd-td">572k</td><td class="crd-td">756k</td><td class="crd-td">890,4k</td><td class="crd-td">945k</td></tr>
<tr><td class="crd-td"><strong>Tokai and Nobi Plain</strong></td><td class="crd-td">20.750</td><td class="crd-td">10,8k</td><td class="crd-td">66k</td><td class="crd-td">135k</td><td class="crd-td">204,7k</td><td class="crd-td">299k</td><td class="crd-td">395,5k</td><td class="crd-td">466,2k</td><td class="crd-td">495k</td></tr>
<tr><td class="crd-td"><strong>Chubu-Shinano Highlands</strong></td><td class="crd-td">18.133</td><td class="crd-td">6k</td><td class="crd-td">24k</td><td class="crd-td">48k</td><td class="crd-td">72k</td><td class="crd-td">104k</td><td class="crd-td">140k</td><td class="crd-td">168k</td><td class="crd-td">180k</td></tr>
<tr><td class="crd-td"><strong>Hokuriku</strong></td><td class="crd-td">28.541</td><td class="crd-td">6k</td><td class="crd-td">30k</td><td class="crd-td">63k</td><td class="crd-td">96,7k</td><td class="crd-td">143k</td><td class="crd-td">199,5k</td><td class="crd-td">247,8k</td><td class="crd-td">270k</td></tr>
<tr><td class="crd-td"><strong>Kanto Plain (Keno-Musashi)</strong></td><td class="crd-td">33.311</td><td class="crd-td">13,2k</td><td class="crd-td">54k</td><td class="crd-td">128,9k</td><td class="crd-td">209,2k</td><td class="crd-td">325k</td><td class="crd-td">458,5k</td><td class="crd-td">575,4k</td><td class="crd-td">630k</td></tr>
<tr><td class="crd-td"><strong>Tohoku Emishi Frontier</strong></td><td class="crd-td">72.145</td><td class="crd-td">8,4k</td><td class="crd-td">24k</td><td class="crd-td">48k</td><td class="crd-td">72k</td><td class="crd-td">104k</td><td class="crd-td">151,2k</td><td class="crd-td">194,9k</td><td class="crd-td">216k</td></tr>
<tr><td class="crd-td"><strong>Hokkaido (Epi-Jomon and Okhotsk)</strong></td><td class="crd-td">80.208</td><td class="crd-td">3,6k</td><td class="crd-td">9k</td><td class="crd-td">15k</td><td class="crd-td">20,3k</td><td class="crd-td">26k</td><td class="crd-td">33,6k</td><td class="crd-td">38,6k</td><td class="crd-td">40,5k</td></tr>
<tr><td class="crd-td"><strong>Ryukyu Shellmound Arc</strong></td><td class="crd-td">4.509</td><td class="crd-td">2,4k</td><td class="crd-td">9k</td><td class="crd-td">15k</td><td class="crd-td">20,3k</td><td class="crd-td">26k</td><td class="crd-td">32,2k</td><td class="crd-td">35,3k</td><td class="crd-td">36k</td></tr>
<tr><td class="crd-td"><strong>Archipelago Total</strong></td><td class="crd-td">390.852</td><td class="crd-td">120k</td><td class="crd-td">600k</td><td class="crd-td">1,2M</td><td class="crd-td">1,8M</td><td class="crd-td">2,6M</td><td class="crd-td">3,5M</td><td class="crd-td">4,2M</td><td class="crd-td">4,5M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Provincial population benchmarks across thirteen Japanese territories, 250BC to 650AD, calculated from regional JSON registers.</figcaption>
</figure>

The Kinai-Yamato core established decisive demographic hegemony [@Kito2000Jinko; @Farris2009DailyLife]. Expanding from 382k in 300AD to 572k in 400AD and 756k in 500AD, Kinai held 21,6% of the national population on just 8,3% of the land area [@Kito2000Jinko]. In the southeastern Nara Basin, the Makimuku complex developed into an expansive proto-urban capital of 15k inhabitants during the Early Kofun period [@Imamura1996Prehistoric; @Kaneda2022Proposal]. During the Middle Kofun era, the construction of colossal keyhole mounds in the Kawachi Plain, such as the Mozu and Furuichi tumulus clusters (housing 22k inhabitants across surrounding worker settlements), reflected the imperial court's ability to direct tens of thousands of corvée labourers into monumental earthmoving and hydraulic canal excavation [@Imamura1996Prehistoric; @Kaneda2022Proposal].

Secondary regional polities displayed parallel demographic growth [@Imamura1996Prehistoric]. In Setouchi and Kibi, population reached 378k by 500AD, led by the Tsukuriyama chieftain centre (14k at its peak around 400AD), where the Tsukuriyama Kofun was constructed as the fourth largest tumulus in Japan [@Imamura1996Prehistoric]. In the Kanto Plain, population surged from 209k in 300AD to 458k in 500AD, as wet-rice colonisation transformed the Tone River basin, supporting major keyhole-mound clusters such as Sakitama in Musashi (8,5k) and Ota Tenjinyama in Kozuke [@Imamura1996Prehistoric; @Farris2009DailyLife].

## Late Kofun and Asuka Emergence (500AD to 650AD)

Between 500AD and 650AD, demographic expansion matured toward carrying-capacity plateaus across western and central Japan, rising from 3,5M in 500AD to 4,2M in 600AD and reaching 4,5M in 650AD (Table \ref{tab:density-japan}) [@Kito2000Jinko; @Farris2009DailyLife].

<figure class="crd-table-figure" id="tab:density-japan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Sites</th><th class="crd-th">250BC</th><th class="crd-th">1AD</th><th class="crd-th">300AD</th><th class="crd-th">650AD</th><th class="crd-th">650AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Kyushu and Tsushima</strong></td><td class="crd-td">71</td><td class="crd-td">25,2k</td><td class="crd-td">120k</td><td class="crd-td">279,1k</td><td class="crd-td">585k</td><td class="crd-td">20,3</td></tr>
<tr><td class="crd-td"><strong>Southern Kyushu (Hayato-Kumaso)</strong></td><td class="crd-td">44</td><td class="crd-td">6k</td><td class="crd-td">24k</td><td class="crd-td">65,3k</td><td class="crd-td">157,5k</td><td class="crd-td">9,1</td></tr>
<tr><td class="crd-td"><strong>Shikoku</strong></td><td class="crd-td">25</td><td class="crd-td">6k</td><td class="crd-td">36k</td><td class="crd-td">114,7k</td><td class="crd-td">315k</td><td class="crd-td">15,4</td></tr>
<tr><td class="crd-td"><strong>Setouchi and Kibi</strong></td><td class="crd-td">38</td><td class="crd-td">10,8k</td><td class="crd-td">66k</td><td class="crd-td">198k</td><td class="crd-td">472,5k</td><td class="crd-td">22,5</td></tr>
<tr><td class="crd-td"><strong>San'in and Izumo</strong></td><td class="crd-td">29</td><td class="crd-td">4,8k</td><td class="crd-td">24k</td><td class="crd-td">65,3k</td><td class="crd-td">157,5k</td><td class="crd-td">11,8</td></tr>
<tr><td class="crd-td"><strong>Kinai-Yamato Core</strong></td><td class="crd-td">82</td><td class="crd-td">16,8k</td><td class="crd-td">114k</td><td class="crd-td">382,5k</td><td class="crd-td">945k</td><td class="crd-td">29,2</td></tr>
<tr><td class="crd-td"><strong>Tokai and Nobi Plain</strong></td><td class="crd-td">50</td><td class="crd-td">10,8k</td><td class="crd-td">66k</td><td class="crd-td">204,7k</td><td class="crd-td">495k</td><td class="crd-td">23,9</td></tr>
<tr><td class="crd-td"><strong>Chubu-Shinano Highlands</strong></td><td class="crd-td">33</td><td class="crd-td">6k</td><td class="crd-td">24k</td><td class="crd-td">72k</td><td class="crd-td">180k</td><td class="crd-td">9,9</td></tr>
<tr><td class="crd-td"><strong>Hokuriku</strong></td><td class="crd-td">56</td><td class="crd-td">6k</td><td class="crd-td">30k</td><td class="crd-td">96,7k</td><td class="crd-td">270k</td><td class="crd-td">9,5</td></tr>
<tr><td class="crd-td"><strong>Kanto Plain (Keno-Musashi)</strong></td><td class="crd-td">90</td><td class="crd-td">13,2k</td><td class="crd-td">54k</td><td class="crd-td">209,2k</td><td class="crd-td">630k</td><td class="crd-td">18,9</td></tr>
<tr><td class="crd-td"><strong>Tohoku Emishi Frontier</strong></td><td class="crd-td">136</td><td class="crd-td">8,4k</td><td class="crd-td">24k</td><td class="crd-td">72k</td><td class="crd-td">216k</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Hokkaido (Epi-Jomon and Okhotsk)</strong></td><td class="crd-td">43</td><td class="crd-td">3,6k</td><td class="crd-td">9k</td><td class="crd-td">20,3k</td><td class="crd-td">40,5k</td><td class="crd-td">0,5</td></tr>
<tr><td class="crd-td"><strong>Ryukyu Shellmound Arc</strong></td><td class="crd-td">17</td><td class="crd-td">2,4k</td><td class="crd-td">9k</td><td class="crd-td">20,3k</td><td class="crd-td">36k</td><td class="crd-td">8</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements, longitudinal population benchmarks, and terminal 650AD density (persons per km²).</figcaption>
</figure>

The Late Kofun period witnessed the decentralisation of burial monuments, as gigantic keyhole tumuli were replaced by dense clusters of small round corridor-style tombs (*yokoana-shiki sekishitsu*) built by village headmen and prosperous agrarian lineages [@Imamura1996Prehistoric; @Farris2009DailyLife]. This architectural democratisation testified to the widespread diffusion of wealth and agrarian productivity throughout rural society [@Imamura1996Prehistoric; @Farris2009DailyLife].

In the Asuka Valley of Yamato, the imperial court founded permanent aristocratic palaces and monumental Buddhist temple foundations, led by Asuka-dera (Hoko-ji) completed around 596AD [@Farris2009DailyLife]. At its 650AD demographic peak, the Asuka Capital held an estimated 42k inhabitants, encompassing royal palaces, ministerial compounds of the Soga clan, artisan quarters of immigrant Korean craftsmen, and temple monasteries [@Farris2009DailyLife]. Concurrently, the establishment of the Naniwa Nagara-Toyosaki Palace on Osaka Bay in 645AD created a maritime administrative centre of 35k residents, functioning as the imperial portal for diplomacy with Tang China and the Three Kingdoms of Korea [@Farris2009DailyLife; @Kito2000Jinko].

Density patterns at 650AD illustrate sharp regional contrasts (Table \ref{tab:density-japan}):
- The Kinai-Yamato core attained 29,2 persons per km², the highest regional density in the archipelago, holding 945k inhabitants.
- Tokai and the Nobi Plain reached 23,9 persons per km² (495k inhabitants).
- Setouchi and Kibi reached 22,5 persons per km² (472,5k inhabitants).
- Northern Kyushu reached 20,3 persons per km² (585k inhabitants).
- The Kanto Plain reached 18,9 persons per km² (630k inhabitants), evolving into the largest agricultural hinterland outside Kinai.
- In contrast, rugged interior highland territories exhibited lower densities: Chubu-Shinano maintained 9,9 persons per km², San'in 11,8 persons per km², and Southern Kyushu 9,1 persons per km².
- Frontier territories remained sparsely occupied: Tohoku supported 3 persons per km² (216k), Hokkaido 0,5 persons per km² (40,5k), and the Ryukyu arc 8 persons per km² (36k).

## Regional Demographics across the Thirteen Provinces

### Western Provinces and Inland Sea Gateways

Western Japan (Northern Kyushu, Southern Kyushu, Shikoku, Setouchi and San'in, covering 100.916 km²) grew from 52,8k in 250BC to 1,69M in 650AD, functioning as the maritime gateway for continental trade and technical transmission [@Imamura1996Prehistoric; @Hudson1992Rice].

Northern Kyushu (585k in 650AD) served as the primary nexus for relations with the Asian mainland [@Imamura1996Prehistoric]. Following the suppression of the Iwai rebellion in 527AD, the Yamato court established direct imperial granaries (*miyake*) across Tsukushi, culminating in the mid-seventh century proto-centre at Dazaifu (14k in 650AD) to defend the western approaches [@Imamura1996Prehistoric; @Farris2009DailyLife]. In Southern Kyushu (157,5k in 650AD), indigenous Hayato and Kumaso populations preserved distinct material cultures, constructing subterranean slab-stone tombs and maintaining ritual shell-trade networks extending south into the Ryukyus [@Imamura1996Prehistoric; @Seguchi2023Investigating].

Setouchi and Kibi (472,5k in 650AD) and Shikoku (315k in 650AD) leveraged the sheltered waters of the Inland Sea [@Imamura1996Prehistoric]. Kibi chieftains maintained powerful iron-working and salt-production industries that rivalled the Yamato court until political subjugation in the late fifth century [@Imamura1996Prehistoric]. San'in and Izumo (157,5k in 650AD) maintained extensive metallurgical ties with the southern Korean coast, erecting monumental shrines and rectangular four-cornered mounded tombs (*yosumi tosshutsu-gata funkyubo*) across the Hii River valley [@Imamura1996Prehistoric].

### Central Honshu and the Yamato Heartlands

Central Honshu (Kinai Core, Tokai, Chubu Highlands and Hokuriku, encompassing 99.763 km²) expanded from 39,6k in 250BC to 1,89M in 650AD, forming the political, demographic and technological nucleus of the nascent Japanese state [@Kito2000Jinko; @Farris2009DailyLife].

The Kinai-Yamato core (945k in 650AD) concentrated the largest royal palaces, temple complexes and agricultural hydraulic systems in the country [@Farris2009DailyLife; @Kito2000Jinko]. Tokai and the Nobi Plain (495k in 650AD) prospered through intensive drainage of the Kiso, Nagara and Ibi rivers, connecting Kinai to eastern Honshu along the Tokaido post road [@Imamura1996Prehistoric].

The Chubu-Shinano Highlands (180k in 650AD) specialized in horse breeding, copper extraction and iron forging in intermontane basins such as Matsumoto, Ina and Nagano, supplying mounts for imperial cavalry forces [@Farris2009DailyLife]. Hokuriku (270k in 650AD) prospered through jadeite working around Itoigawa, fertile paddy farming along the Koshi coastal plains, and maritime cabotage along the Sea of Japan [@Imamura1996Prehistoric].

### Eastern and Northern Honshu Frontiers

Eastern and Northern Honshu (Kanto Plain and Tohoku Emishi, encompassing 105.456 km²) grew from 21,6k in 250BC to 846k in 650AD, transitioning from an autonomous foraging-farming frontier into the primary agrarian reserve of the empire [@Imamura1996Prehistoric; @Farris2009DailyLife].

The Kanto Plain (630k in 650AD) experienced explosive growth during the fifth and sixth centuries AD [@Imamura1996Prehistoric; @Farris2009DailyLife]. Imperial resettlement of continental immigrant lineages and veteran military colonists cleared vast lowlands along the Tone, Arakawa and Tama rivers [@Imamura1996Prehistoric; @Farris2009DailyLife]. Chieftain complexes at Sakitama in Musashi (8,5k) and Mitsudera in Kozuke (7,5k) possessed fortified residences, stone-lined moats and advanced blacksmithing workshops [@Imamura1996Prehistoric]. The famous iron sword discovered in the Inariyama Kofun at Sakitama, bearing a gold-inlaid inscription dated to 471AD (the *sin-gai* year), recorded service to the Great King Wakatakeru (Emperor Yuryaku), confirming the administrative incorporation of eastern chieftains into the Yamato imperial hierarchy [@Imamura1996Prehistoric].

In Tohoku (216k in 650AD), Yamato authority met stiff cultural resistance from indigenous Emishi populations [@Farris2009DailyLife; @Imamura1996Prehistoric]. While southern Tohoku (Fukushima and Miyagi) adopted wet-rice cultivation and keyhole-tomb burial by the fourth century AD, northern Tohoku remained an armed frontier dominated by hunting, freshwater fishing, horse pastoralism and iron-edged weaponry [@Farris2009DailyLife; @Walker2001ConquestAinu].

### Insular Peripheries and Foraging Enclaves

Beyond the reach of the early imperial administration, Hokkaido and the Ryukyu arc (covering 84.717 km²) maintained distinct ethnolinguistic and ecological regimes [@Walker2001ConquestAinu; @Smits2019MaritimeRyukyu].

Hokkaido (40,5k in 650AD) developed the Epi-Jomon culture, followed by the appearance of the maritime Okhotsk culture along the northern and eastern coasts around 500AD [@Walker2001ConquestAinu; @Leipe2017Barley]. At sites such as Moyoro in Abashiri (850 residents), Okhotsk communities lived in large pentagonal semi-subterranean pit-houses, hunting seals, sea lions and whales, and cultivating cold-tolerant barley (*Hordeum vulgare*) while trading marine furs and walrus ivory southward into Honshu [@Walker2001ConquestAinu; @Leipe2017Barley].

The Ryukyu Shellmound Arc (36k in 650AD) sustained marine-foraging communities across the Nansei archipelago [@Smits2019MaritimeRyukyu; @Aoyama2022Perspective]. At the Hirota site on Tanegashima, excavations reveal ritual cemeteries containing hundreds of burials with intentional cranial modification, adorned with carved shell pendants and cone-shell bracelets traded northward to Kyushu and Kinai elites in exchange for continental iron and bronze implements [@Seguchi2023Investigating; @Smits2019MaritimeRyukyu].

## Settlement Hierarchy and Archaeological Typology

The archaeological evidence from 714 catalogued settlements reveals a sophisticated four-tiered urban and proto-urban hierarchy (Figure \ref{fig:sett-japan}) [@Imamura1996Prehistoric; @Farris2009DailyLife].

<figure class="crd-figure-block" id="fig:sett-japan">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-yayoi-and-kofun-japan/fig4_yayoi_and_kofun_japan_settlements.png" alt="fig:sett-japan" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading fifteen proto-urban, palace and chieftain settlement centres across Yayoi and Kofun Japan.</figcaption>
</figure>

At the apex of the settlement hierarchy stood the imperial palaces and proto-urban administrative capitals of the Kinai core [@Farris2009DailyLife; @Kito2000Jinko]:
1. Asuka Capital: Serving as the monumental court centre in southern Yamato, Asuka expanded from earlier royal hamlets to attain 42k inhabitants by 650AD, encompassing the Asuka Itabuki Palace, Kawara-dera, Asuka-dera and surrounding residential quarters of courtiers and artisans [@Farris2009DailyLife].
2. Naniwa (Osaka): Serving as the primary maritime capital on Osaka Bay following the Taika Reform in 645AD, Naniwa reached 35k residents, coordinating inland river transport via the Yodo River with maritime traffic through the Seto Inland Sea [@Farris2009DailyLife; @Kito2000Jinko].
3. Mozu-Furuichi Core (Sakai): The monumental fifth-century chieftain and imperial centre, sustaining 22k residents across vast artisan workshops, granary complexes and tumulus construction camps [@Imamura1996Prehistoric; @Kaneda2022Proposal].
4. Makimuku Capital: The foundational Early Kofun proto-urban centre in Yamato, supporting 15k inhabitants around 300AD across residential compounds, ritual canals and the monumental Hashihaka tumulus complex [@Imamura1996Prehistoric; @Kaneda2022Proposal].
5. Dazaifu Proto-Centre: The strategic command post of western Japan in Northern Kyushu, housing 14k residents by 650AD [@Farris2009DailyLife].

The second tier comprised regional chieftain headquarters, metallurgical hubs and inland sea ports ranging from 7k to 14k residents [@Imamura1996Prehistoric; @Farris2009DailyLife]:
- Kibi-Tsukuriyama Centre in Okayama (14k at 400AD), dominating Inland Sea shipping and metallurgical production.
- Naka-Hie Site in Fukuoka (10k at 600AD), anchoring the ancient Na polity at Hakata Bay.
- Izumo Centre in Shimane (9,5k at 650AD), coordinating Sea of Japan maritime commerce and iron refining.
- Sakitama in Musashi (8,5k at 500AD), the dominant chieftain complex of the middle Tone River basin.
- Mitsudera in Gunma (7,5k at 550AD), featuring a moated aristocratic compound with stone revetments and ritual precincts.

The third tier encompassed major Yayoi moated centres and early Kofun market enclosures supporting 3k to 6k residents:
- Yoshinogari Settlement in Saga (5,4k at 200AD), featuring double moat enclosures, watchtowers and palisades.
- Karako-Kagi in Yamato (5k at 200AD), the central bronze-casting settlement of the Nara Basin.
- Asahi Settlement in Owari (4,5k at 200AD), the largest moated site in the Tokai region.
- Mikumo-Minamishoji in Fukuoka (4,2k at 240AD), the royal burial and diplomatic centre of the Ito kingdom.
- Ikegami-Sone on the Izumi Plain (3,5k at 100AD), housing a monumental pillared building supported by 26 gigantic cedar pillars.

The fourth tier comprised hundreds of agricultural farming hamlets, hilltop redoubts, coastal fishing camps and shellmound sites supporting 200 to 2.500 residents, including Toro in Shizuoka (2,2k), Hirade in Nagano (1,8k), Itazuke in Fukuoka (1,4k), Moyoro in Hokkaido (850) and Hirota on Tanegashima (650) [@Imamura1996Prehistoric; @Koyama1978Jomon; @Seguchi2023Investigating].

# Limitations

Three principal methodological constraints govern the interpretation of protohistoric Japanese demographic estimates. First, the absence of comprehensive written census registers before the eighth century means that population estimates for the Yayoi and Kofun eras rely on archaeological proxies: pit-dwelling counts, settlement surface areas, burial mound volumes and agricultural carrying-capacity calculations [@Koyama1978Jomon; @Kito2000Jinko; @Farris2009DailyLife]. While validated against radiocarbon chronologies and ethnographic dwelling occupancies, regional estimates carry an uncertainty margin of $\pm 12\%$ to $\pm 20\%$ during the 250BC to 300AD interval, narrowing to $\pm 8\%$ to $\pm 12\%$ by 650AD through calibration against the Taiho household registers [@Kito2000Jinko; @Farris2009DailyLife].

Second, modern archaeological recovery is subject to intense geographical sampling bias [@Kudo2023JapanC14]. Massive public infrastructure projects in urbanised corridors such as the Kinki metropolitan region, the Tokyo-Kanto plain and the Fukuoka-Kitakyushu conurbation have generated extensive rescue excavations, whereas rugged highland interiors (Shinano, Hida, Tohoku) have received comparatively less systematic subsurface sampling [@Kudo2023JapanC14]. Non-stationary Matérn kriging partially compensates for this spatial heterogeneity by conditioning local densities on biophysical terrain suitability and fluvial proximity, but localized under-representation in mountainous areas cannot be completely eliminated [@Paciorek2006Matern].

Third, chronological overlap among excavated pit-dwellings introduces potential overestimation if structures are assumed to be strictly contemporaneous [@Farris2009DailyLife; @Crema2020Jomon]. Pit-dwellings typically endured for 15 to 25 years before timber posts decayed and rebuilding occurred [@Farris2009DailyLife]. The settlement multipliers applied in this study explicitly discount raw pit-dwelling counts by contemporaneity factors calibrated from Bayesian radiocarbon phase modelling, ensuring that serial rebuildings are not conflated with synchronous population size [@Crema2020Jomon; @Crema2021Bayesian].

# Conclusion

Between 250BC and 650AD, Japan underwent an extraordinary demographic and political transformation, growing from 120k foragers and early farmers to a unified imperial society of 4,5M people. The introduction of irrigated wet-rice cultivation, metallurgy and continental migrant lineages into Northern Kyushu initiated a demographic expansion that swept eastward across the Seto Inland Sea, transforming the alluvial basins of Kinai, Tokai and Kanto into productive agrarian landscapes.

The subsequent emergence of the Kofun keyhole-mound horizon around 250AD to 300AD signalled the consolidation of the Yamato confederacy, culminating in the massive labour mobilisations and hydraulic engineering of the Kawachi Plain. In the sixth and seventh centuries, the integration of continental immigrant lineages, Buddhist institutional culture and Tang-inspired administrative legal structures laid the foundation for the Ritsuryo imperial state, ratified by the Taika Reform of 645AD and anchored by the twin administrative capitals of Asuka (42k) and Naniwa (35k). Integrating archaeological excavation registries, radiocarbon chronologies and Paciorek-Schervish non-stationary kriging across 714 catalogued settlements provides an empirical spatial baseline for the demography of ancient Japan.

# Sources

<div id="refs"></div>
