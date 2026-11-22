---
title: "Demographic Trajectory of Prehistoric and Food-Gathering Korea and Japan"
subtitle: "Forager Demography, Incipient Cultivation, the Middle Jomon Climacteric and the Mumun Agrarian Transition, 10000BC to 250BC"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: prehistoric_and_food_gathering_korea_and_japan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_prehistoric_and_food_gathering_korea_and_japan_spatial.png"
hero_caption: "Biophysical catchments, archaeological density and catalogued prehistoric settlements across Korea and Japan from 10000BC to 250BC."
hero_label: "fig:hero-prehistoric-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper reconstructs the demographic trajectory, macro-spatial distribution and settlement systems of prehistoric Korea and Japan from the termination of the Younger Dryas in 10000BC to the threshold of intensive wet-rice agrarian state formation in 250BC. Across fourteen territorial units encompassing 617.753 km² (9.711 five-arcminute raster cells), aggregate population expanded from 32k (32.000) in 10000BC to 38k (38.000) in 8000BC, climbed to 87k (87.000) by 5000BC, and reached a mid-Holocene forager apex of 371k (371.000) around 3000BC [@Koyama1978Jomon; @Habu2004AncientJomon; @Crema2020Jomon]. This dramatic middle Holocene expansion was heavily concentrated in the rich deciduous forests of central and northeastern Japan, where the Kanto, Shinano and Tohoku highlands sustained dense semi-sedentary pit-house communities dependent on intensive nut collection, salmonid runs and managed chestnut groves [@Habu2004AncientJomon; @Crema2016Summed]. Following the post-climatic cooling of the Neoglacial oscillation after 2500BC, catastrophic resource depletion across central Honshu contracted Japanese archipelago populations from 261k to 150k in 2000BC, bottoming at approximately 75k to 80k around 1000BC [@Koyama1978Jomon; @Crema2020Jomon; @Kudo2023JapanC14]. Concurrently, the southern Korean peninsula underwent an inverse agrarian transformation: after millennia of low-density coastal and riverine Chulmun foraging, the adoption of rainfed millet cultivation and the subsequent arrival of intensive wet-rice agriculture during the Mumun Bronze Age drove sustained demographic acceleration [@Oh2017KoreaC14; @Kim2021NeolithicKorea; @Barnes2015Archaeology; @Choe2002Mumun]. Korean population surged from 110k in 3000BC to 396k in 1000BC, reaching 700k by 250BC across the Amnok, Taedong, Han, Geum and Nakdong river basins [@Oh2017KoreaC14; @Barnes2015Archaeology]. Transmitted across the Tsushima Strait around 800BC, wet-rice technology sparked the early Yayoi expansion in northern Kyushu and western Japan, lifting combined domain population to 820k (820.000) in 250BC [@Crema2021Bayesian; @Silva2015Modelling]. This study calibrates territorial headcounts using Bayesian radiocarbon summed probability distributions, Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 384 domestic catchments, and 821 catalogued prehistoric settlements led by Daepyeong-ri (1.450), Songguk-ri (1.200), Geomdan-ri (780), Sannai-Maruyama (650), Gochang (650), Hwasun (580) and Namgyong (550).

# Background

## Palaeoenvironmental Setting and Foraging Baselines

The prehistoric human ecology of the Korean Peninsula and the Japanese Archipelago was shaped by the climatic amelioration of the early Holocene [@Imamura1996Prehistoric; @Barnes2015Archaeology]. During the Last Glacial Maximum (c. 20000BC to 18000BC), lowered sea levels exposed extensive land bridges connecting western Japan to the southern Korean margin and Sakhalin to northern Hokkaido, enabling Upper Palaeolithic hunter-gatherers equipped with microblade technologies to track large steppe and forest mammals [@Imamura1996Prehistoric; @Morisaki2025More].

With the termination of the Younger Dryas around 9600BC, rapid warming and the post-glacial marine transgression (locally termed the Jomon Transgression in Japan) inundated the Yellow Sea basin and the Tsushima and Korea straits, insulating Japan as an archipelagic maritime domain by approximately 8000BC [@Imamura1996Prehistoric; @Pearson2006Jomon]. Marine warming and strengthened East Asian summer monsoons established pronounced ecological zoning across the archipelago [@Habu2004AncientJomon; @Koyama1978Jomon].

Northeastern Japan and the central highlands (Tohoku, Kanto, Shinano-Chubu and Hokuriku) developed highly productive temperate deciduous broadleaf forests dominated by oak (*Quercus mongolica*, *Quercus crispula*), beech (*Fagus crenata*), chestnut (*Castanea crenata*) and walnut (*Juglans ailanthifolia*) [@Habu2004AncientJomon; @Crema2016Summed]. These nut-bearing deciduous forests supported abundant ungulate herds (sika deer *Cervus nippon* and wild boar *Sus scrofa*) and prolific autumn salmonid runs along major river channels draining into the Sea of Japan and the Pacific Ocean [@Habu2004AncientJomon; @Imamura1996Prehistoric].

In contrast, southwestern Japan (western Honshu, Shikoku and Kyushu) transitioned into warm-temperate evergreen broadleaf laurel forests dominated by evergreen oaks (*Cyclobalanopsis*) and chinquapin (*Castanopsis*) [@Koyama1978Jomon; @Pearson2006Jomon]. While ecologically stable, laurel forest biomes yielded lower harvestable carbohydrate biomass per square kilometre for non-agricultural foragers than deciduous oak-chestnut zones, imposing lower carrying capacities on western populations [@Koyama1978Jomon; @Imamura1996Prehistoric]. On the Korean peninsula, cold-temperate coniferous and mixed deciduous forests in the northern highlands gave way to fertile alluvial basins along the Han, Geum, Taedong and Nakdong river valleys, which offered expansive coastal mudflats, estuarine fish runs and productive river terraces [@Kim2021NeolithicKorea; @Barnes2015Archaeology].

## The Jomon Forager Tradition in Japan

The Japanese Jomon culture represents one of the most long-lived and complex forager traditions documented in world prehistory [@Habu2004AncientJomon; @Imamura1996Prehistoric]. Ceramic vessels appeared in Japan among the earliest in the world, with Incipient Jomon pottery documented at Odai Yamamoto in Aomori and sites on Tanegashima Island dating to before 12000BC [@Morisaki2025More; @Yoshida2013Dating]. Early pottery was utilized primarily for processing aquatic foods, boiling meat and detoxifying plant starchy tubers [@Yoshida2013Dating; @Horiuchi2015Dietary].

Throughout the Initial and Early Jomon stages (c. 8000BC to 5000BC), human groups developed semi-sedentary seasonal base camps, constructed circular pit-houses with hearths, and accumulated coastal shellmounds that recorded intensive littoral foraging for clams, oysters and marine fish [@Imamura1996Prehistoric; @Pearson2006Jomon; @Yoneda2002Radiocarbon].

During the Middle Jomon period (c. 3500BC to 2500BC), corresponding to the Mid-Holocene Climatic Optimum (*Hypsithermal*), warmer mean annual temperatures (1 to 2 degrees Celsius above modern levels) elevated environmental productivity across central and eastern Honshu to historic maxima [@Habu2004AncientJomon; @Crema2020Jomon]. Foragers established large nucleated settlements boasting dozens of contemporary pit-dwellings arranged in circular or horseshoe configurations around central plazas, storage pit batteries and communal burial grounds [@Habu2004AncientJomon; @Crema2016Summed].

At sites such as Sannai-Maruyama in Aomori Prefecture, communities engaged in arboriculture, tending managed groves of cultivated chestnuts (*Castanea crenata*) and harvesting lacquer trees, supplemented by extensive regional exchange networks trading jade from the Itoigawa basin and obsidian from Shinshu and Kozushima [@Habu2004AncientJomon; @Crema2020Jomon; @Imamura1996Prehistoric]. Lavish decorative ceramic traditions, notably the sculptural flame-style vessels (*kaen-doki*) of the Shinano River basin, attest to rich symbolic systems and substantial economic surplus [@Habu2004AncientJomon; @Imamura1996Prehistoric].

However, the Middle Jomon socio-ecological regime was fragile. Climatic cooling associated with the Bond 3 event and Neoglacial oscillations around 2500BC degraded high-altitude deciduous nut yields, leading to widespread site abandonment across Nagano, Yamanashi and Tokyo [@Crema2020Jomon; @Crema2016Summed; @Kudo2023JapanC14]. Late and Final Jomon populations contracted sharply, dispersing into smaller maritime and riverine hamlets characterized by ritual stone arrangements (e.g. Oyu stone circles in Akita) and elaborate fine-line ceramics (Kamegaoka culture) [@Habu2004AncientJomon; @Imamura1996Prehistoric; @Horiuchi2015Dietary].

## The Korean Chulmun and Mumun Horizons

On the Korean Peninsula, the Neolithic sequence opened with the Chulmun (Jeulmun) culture around 8000BC, characterized by geometric incised and comb-pattern ceramics (*chulmun togi*) [@Kim2021NeolithicKorea; @Oh2017KoreaC14; @Barnes2015Archaeology]. Chulmun adaptations were initially oriented toward marine gathering, littoral hunting and riverine fishing, evidenced by massive shellmiddens at Dongsam-dong in Busan and coastal hamlets at Osan-ri in Gangwon [@Kim2021NeolithicKorea; @Barnes2015Archaeology]. Along interior river corridors, sites such as Amsa-dong on the Han River featured semi-subterranean pit-houses where foragers processed acorns in storage pits and hunted wild boar and roe deer [@Kim2021NeolithicKorea; @Barnes2015Archaeology].

Around 3500BC to 3000BC, during the Middle Chulmun stage, charred macro-botanical remains confirm the incipient cultivation of broomcorn millet (*Panicum miliaceum*) and foxtail millet (*Setaria italica*), alongside cultivated soybeans (*Glycine max*) [@Kim2021NeolithicKorea; @Lee2011Archaeological]. While millet cultivation initially served as a minor dietary supplement within a predominant broad-spectrum foraging regime, it established the technical foundation for subsequent agricultural intensification [@Kim2021NeolithicKorea; @Oh2017KoreaC14].

The critical demographic turning point on the peninsula occurred with the transition to the Mumun pottery period around 1500BC [@Choe2002Mumun; @Oh2017KoreaC14; @Barnes2015Archaeology]. Characterized by plain, undecorated flat-bottomed pottery (*mumun togi*), polished stone harvesting sickles, perforated stone knives and grooved adzes, the Mumun horizon witnessed the rapid spread of dry-field crop complexes (millets, barley, wheat, legumes) and the decisive establishment of intensive wet-rice farming (*Oryza sativa*) across southern alluvial lowlands [@Choe2002Mumun; @Lee2011Archaeological; @Barnes2015Archaeology].

By the Middle Mumun period (c. 800BC to 400BC), sedentary farming communities established extensive nucleated villages containing hundreds of rectangular pit-houses, specialized storage granaries, surrounding defensive ditches and palisades [@Choe2002Mumun; @Barnes2015Archaeology]. Prominent sites include Daepyeong-ri along the Nam River (Nakdong basin), Songguk-ri in the Geum River valley, and Geomdan-ri near Ulsan [@Choe2002Mumun; @Barnes2015Archaeology].

The socio-political landscape of Mumun Korea became markedly hierarchical, materialized by thousands of megalithic stone dolmens (*goindol*) that marked elite burials containing polished stone daggers, Liaoning-style curved bronze daggers and amazonite comma-shaped beads (*gogok*) [@Barnes2015Archaeology; @Choe2002Mumun]. Large dolmen concentrations at Gochang and Hwasun in the Honam region and Ganghwa Island near the Han River mouth reflect high regional population densities and coordinated communal labour mobilization [@Barnes2015Archaeology].

## The Trans-Strait Transmission and the Yayoi Horizon

During the eighth to fifth centuries BC, interactions between Middle Mumun agriculturalists in the southern Korean peninsula and Final Jomon populations in the Tsushima Strait culminated in the transmission of irrigated wet-rice agriculture, bronze metallurgy and weaving technologies into northern Kyushu [@Barnes2015Archaeology; @Crema2021Bayesian; @Silva2015Modelling]. This cultural and demographic transition marks the inception of the Yayoi period in Japan [@Imamura1996Prehistoric; @Crema2021Bayesian].

Early Yayoi sites such as Itazuke and Nabatake in northern Kyushu exhibit complex irrigation canals, paddies with wooden revetments, stone reaping knives derived from Korean Mumun prototypes, and carbonized rice grains, initiating a demographic transition that fundamentally reversed Japan's macro-spatial distribution [@Imamura1996Prehistoric; @Crema2021Bayesian; @Silva2015Modelling]. While eastern Japan remained locked in the Final Jomon foraging regime, western Japan embarked on sustained agrarian population growth that paved the way for proto-historic state formation [@Koyama1978Jomon; @Barnes2015Archaeology; @Crema2021Bayesian].

# Methodology

## Territorial Partition and Biophysical Basins

To capture the stark environmental and cultural boundaries across insular and peninsular East Asia without distortion, this study partitions the domain into fourteen territorial and biophysical units encompassing 617.753 km² across 9.711 five-arcminute grid cells (Table \ref{tab:validation-prehistoric}):

1. The Five Korean River Basins: Amnok-Taedong Northwestern Basin (53.936 km²), Tumen-Hamgyong Northeastern Highlands (24.515 km²), Han-Geum Central Alluvial Basin (96.027 km²), Nakdong Southeastern Basin (29.213 km²), and Yeongsan-Honam Plains and Jeju (23.210 km²).
2. The Four Central and Eastern Japanese Territories: Tohoku Northern Honshu (79.292 km²), Kanto and Shinano-Chubu Highlands (59.121 km²), Hokuriku and Tokai Basins (10.179 km²), and San'in Western Honshu (201 km²).
3. The Three Western and Insular Japanese Regions: Kinki and Setouchi Inland Sea (90.287 km²), Shikoku Island (20.683 km²), and Kyushu and Tsushima Strait (46.372 km²).
4. The Two Northern and Subtropical Peripheries: Hokkaido (Ezo) Boreal Archipelago (80.208 km²) and Ryukyu-Amami Subtropical Arc (4.509 km²).

At each historical benchmark year $t \in \{-10000, -8000, -6000, -5000, -4000, -3000, -2000, -1000, -500, -250\}$, total regional population $P_r(t)$ synthesises archaeological site counts, pit-house habitation multipliers, and Bayesian radiocarbon summed probability distribution (SPD) proxies:

$$P_r(t) = S_r(t) \cdot h_r(t) \cdot \omega_r(t) + F_r(t)$$

where $S_r(t)$ is the estimated number of concurrently occupied settlement pit-dwellings, $h_r(t)$ represents the mean household size (calibrated between 4,5 and 5,5 persons per pit-dwelling), $\omega_r(t)$ denotes the residential contemporaneity correction factor, and $F_r(t)$ accounts for mobile foraging bands occupying transient campsites lacking deep pit features [@Koyama1978Jomon; @Crema2020Jomon; @Oh2017KoreaC14].

## Multi-Proxy Demographic Calibration

Calibrating prehistoric demographic scales requires harmonising pioneering settlement density estimates with contemporary chronometric data [@Koyama1978Jomon; @Crema2020Jomon; @Oh2017KoreaC14]. Shuzo Koyama's classic census of Jomon sites catalogued over 28.000 archaeological locations across Japan, deriving regional population figures by applying site-to-pit-house ratios and five-person family multipliers [@Koyama1978Jomon]. Koyama calculated an Initial Jomon population of 21,9k, an Early Jomon total of 105,9k, a Middle Jomon peak of 261,3k, contracting to 160,3k in the Late Jomon and 75,8k in the Final Jomon [@Koyama1978Jomon].

Modern critical archaeology has refined Koyama's static calculations by identifying two offsetting biases: contemporaneity over-estimation (not all pit-dwellings at a given multi-phase site were occupied simultaneously) and site-discovery under-estimation (thousands of small, deeply buried or alluvially covered sites remain unexcavated) [@Habu2004AncientJomon; @Crema2020Jomon; @Imamura1996Prehistoric]. Crema and Kobayashi (2020) demonstrated through Bayesian mark-recapture phase models that typical Middle Jomon pit-houses possessed functional lifespans of only 15 to 25 years, meaning that a site showing fifty excavated pit-dwellings likely sustained an active village of four to eight concurrent households [@Crema2020Jomon].

In this study, Koyama's baseline carrying-capacity envelopes are dynamically weighted against empirical radiocarbon summed probability distributions (SPDs) derived from the comprehensive Rekihaku radiocarbon database (45.382 dates) for Japan [@Kudo2023JapanC14; @Crema2020Jomon] and Korean Neolithic-Bronze radiocarbon corpora (13.112 dates) [@Oh2017KoreaC14; @Kim2021NeolithicKorea]. Following established taphonomic correction protocols, raw date frequencies are adjusted for sampling intensity, marine reservoir effects and calibration plateau distortions [@Oh2017KoreaC14; @Pori2016Demography].

For the Korean sequence, Oh et al. (2017) demonstrated that radiocarbon SPDs remained subdued throughout the Chulmun period, fluctuating around 10k to 50k before experiencing an exponential fourfold surge during the Middle Mumun period (c. 1000BC to 500BC), directly tracing the rapid expansion of sedentary agricultural settlements across southern river basins [@Oh2017KoreaC14; @Choe2002Mumun].

## Non-Stationary Kriging and Biophysical Covariates

Spatial population allocation across the fourteen territorial units draws on the regional kriging domain, integrating 90.926 domestic assigned records across 384 domestic catchments (covering 9.224 valid land cells, with 9.123 active raster cells) [@Paciorek2006Matern]. Residual spatial dependence is modelled with Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging [@Paciorek2006Matern]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,4211$ and $\tau_2 = 2,6291$, with effective short ranges spanning 35,66 km across all horizons (Table \ref{tab:kriging-prehistoric}). The model incorporates five biophysical covariates: habitable land fraction ($\beta_{\text{hab}}$), natural vegetative productivity index ($\beta_{\text{nat}}$), ecozone terrain suitability ($\beta_{\text{eco}}$), fluvial proximity decay ($\beta_{\text{fluvial}}$), and coastal buffer proximity ($\beta_{\text{coastal}}$) [@Paciorek2006Matern]. High-density settlement cores from 821 catalogued sites (led by Daepyeong-ri, Songguk-ri and Sannai-Maruyama) condition local density clusters, with urban masks applied to preserve rural population baselines [@Kudo2023JapanC14; @Oh2017KoreaC14].

# Testing and Validation

Arithmetic reconciliation confirms exact parity between the territorial totals and regional aggregates harmonised from Koyama (1978), Crema and Kobayashi (2020), Oh et al. (2017), and Barnes (2015). Table \ref{tab:validation-prehistoric} documents the longitudinal demographic trajectory across all ten benchmark years from 10000BC to 250BC, decomposed into macro-regional groupings.

<figure class="crd-table-figure" id="tab:validation-prehistoric">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Korean Basins</th><th class="crd-th">East and Central Japan</th><th class="crd-th">Western Japan</th><th class="crd-th">Peripheries</th><th class="crd-th">Domain Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">12k</td><td class="crd-td">11,6k</td><td class="crd-td">6,2k</td><td class="crd-td">2,2k</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">16k</td><td class="crd-td">14,1k</td><td class="crd-td">5,6k</td><td class="crd-td">2,2k</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">25k</td><td class="crd-td">18,3k</td><td class="crd-td">5,2k</td><td class="crd-td">2,4k</td><td class="crd-td">51k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">45k</td><td class="crd-td">31k</td><td class="crd-td">7,3k</td><td class="crd-td">3,7k</td><td class="crd-td">87k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">80k</td><td class="crd-td">81,5k</td><td class="crd-td">15,6k</td><td class="crd-td">8,9k</td><td class="crd-td">186k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">110k</td><td class="crd-td">208,8k</td><td class="crd-td">31,3k</td><td class="crd-td">20,9k</td><td class="crd-td">371k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">150k</td><td class="crd-td">112k</td><td class="crd-td">32k</td><td class="crd-td">16k</td><td class="crd-td">310k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">320k</td><td class="crd-td">45,6k</td><td class="crd-td">21,3k</td><td class="crd-td">9,1k</td><td class="crd-td">396k</td></tr>
<tr><td class="crd-td"><strong>500BC</strong></td><td class="crd-td">520k</td><td class="crd-td">46,9k</td><td class="crd-td">38k</td><td class="crd-td">10,1k</td><td class="crd-td">615k</td></tr>
<tr><td class="crd-td"><strong>250BC</strong></td><td class="crd-td">700k</td><td class="crd-td">52,8k</td><td class="crd-td">55,2k</td><td class="crd-td">12k</td><td class="crd-td">820k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional demographic benchmarks across Korea and Japan, 10000BC to 250BC, harmonised from archaeological surveys and radiocarbon models.</figcaption>
</figure>

Across all nine horizons in the regional kriging domain, Table \ref{tab:kriging-prehistoric} documents tightly constrained Matérn variogram parameters. Residual $R^2$ exceeds 0,95 across early horizons and surpasses 0,998 across later epochs, with regularised nugget-to-sill ratios stabilizing from 0,22 in the Palaeolithic horizon to 0,04 in late prehistoric horizons.

<figure class="crd-table-figure" id="tab:kriging-prehistoric">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic, Early Jomon and Early Chulmun (before 5000BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00505</td><td class="crd-td">0,22</td><td class="crd-td">0,9513</td><td class="crd-td">5,3239</td><td class="crd-td">21,4223</td></tr>
<tr><td class="crd-td"><strong>2. Middle Jomon and Middle Chulmun (5000BC to 3000BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,002807</td><td class="crd-td">0,16</td><td class="crd-td">0,9749</td><td class="crd-td">4,2696</td><td class="crd-td">15,7542</td></tr>
<tr><td class="crd-td"><strong>3. Late Jomon and Mumun Bronze Age (3000BC to 1000BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001557</td><td class="crd-td">0,13</td><td class="crd-td">0,9791</td><td class="crd-td">4,0592</td><td class="crd-td">14,1882</td></tr>
<tr><td class="crd-td"><strong>4. Yayoi, Gojoseon and Han Commanderies (1000BC to 220AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00078</td><td class="crd-td">0,04</td><td class="crd-td">0,9984</td><td class="crd-td">6,0037</td><td class="crd-td">26,4645</td></tr>
<tr><td class="crd-td"><strong>5. Kofun and Three Kingdoms (220AD to 668AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000584</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">5,1228</td><td class="crd-td">18,1845</td></tr>
<tr><td class="crd-td"><strong>6. Nara, Heian and Unified Silla (668AD to 935AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000499</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">4,1561</td><td class="crd-td">15,8748</td></tr>
<tr><td class="crd-td"><strong>7. Late Heian, Kamakura and Goryeo (935AD to 1392AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00033</td><td class="crd-td">0,04</td><td class="crd-td">0,9979</td><td class="crd-td">3,5177</td><td class="crd-td">10,5668</td></tr>
<tr><td class="crd-td"><strong>8. Muromachi, Sengoku and Early Joseon (1392AD to 1600AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000357</td><td class="crd-td">0,04</td><td class="crd-td">0,998</td><td class="crd-td">3,4683</td><td class="crd-td">10,3268</td></tr>
<tr><td class="crd-td"><strong>9. Edo, Late Joseon and Imperial Eras (1600AD to 1910AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001773</td><td class="crd-td">0,22</td><td class="crd-td">0,9315</td><td class="crd-td">3,2751</td><td class="crd-td">8,8717</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Regional kriging variogram diagnostics across nine chronological horizons (9.224 valid land cells, regularised tau1 = 1,42, tau2 = 2,63).</figcaption>
</figure>

Table \ref{tab:source-corpora-prehistoric} details the component archaeological and historical registries aggregated into the regional database, highlighting the contribution of comprehensive radiocarbon repositories (Rekihaku, Hanseong Baekje C14) and governmental cultural heritage registries.

<figure class="crd-table-figure" id="tab:source-corpora-prehistoric">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>National Museum of Japanese History Radiocarbon Database (Rekihaku v1,3)</strong></td><td class="crd-td">14.536</td><td class="crd-td">15,57%</td></tr>
<tr><td class="crd-td"><strong>Rekihaku Raw Archaeological Excavation Register (25k series)</strong></td><td class="crd-td">12.717</td><td class="crd-td">13,62%</td></tr>
<tr><td class="crd-td"><strong>Archaeological Sites of the Kanto Region Excavation Register</strong></td><td class="crd-td">20.209</td><td class="crd-td">21,65%</td></tr>
<tr><td class="crd-td"><strong>Tokyo Metropolitan Archaeological Sites Survey</strong></td><td class="crd-td">6.388</td><td class="crd-td">6,84%</td></tr>
<tr><td class="crd-td"><strong>Ministry of Land, Infrastructure, Transport and Tourism Cultural Resources</strong></td><td class="crd-td">17.728</td><td class="crd-td">18,99%</td></tr>
<tr><td class="crd-td"><strong>National Historic Sites of Japan Gazetteer</strong></td><td class="crd-td">5.651</td><td class="crd-td">6,05%</td></tr>
<tr><td class="crd-td"><strong>Korea Heritage Service National Cultural Heritage Database</strong></td><td class="crd-td">10.696</td><td class="crd-td">11,46%</td></tr>
<tr><td class="crd-td"><strong>Korean Neolithic and Bronze Age Radiocarbon Corpus (Hanseong)</strong></td><td class="crd-td">437</td><td class="crd-td">0,47%</td></tr>
<tr><td class="crd-td"><strong>Hanseong Baekje Museum Accelerator Mass Spectrometry Synthesis</strong></td><td class="crd-td">77</td><td class="crd-td">0,08%</td></tr>
<tr><td class="crd-td"><strong>Archaeological Heritage Registry of the Republic of Korea</strong></td><td class="crd-td">1.173</td><td class="crd-td">1,26%</td></tr>
<tr><td class="crd-td"><strong>National Heritage Compendium of the Democratic People's Republic of Korea</strong></td><td class="crd-td">129</td><td class="crd-td">0,14%</td></tr>
<tr><td class="crd-td"><strong>National Research Institute of Cultural Heritage North Korea Excavations</strong></td><td class="crd-td">85</td><td class="crd-td">0,09%</td></tr>
<tr><td class="crd-td"><strong>Sejong Sillok Jiriji Northern Frontier Historical Toponymy</strong></td><td class="crd-td">217</td><td class="crd-td">0,23%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">2.082</td><td class="crd-td">2,23%</td></tr>
<tr><td class="crd-td"><strong>East Asian Archaeological Frontier Transition Buffer</strong></td><td class="crd-td">1.234</td><td class="crd-td">1,32%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Component archaeological, radiocarbon and heritage gazetteer registries aggregated into the Korean and Japanese domain.</figcaption>
</figure>

# Results

## Early Holocene Forager Colonisation (10000BC to 5000BC)

Between 10000BC and 5000BC, human populations across Korea and Japan expanded gradually from low-density post-glacial founder bands into established regional forager populations (Figure \ref{fig:traj-prehistoric}). In 10000BC, total domain population stood at approximately 32k people, including 12k across the Korean peninsula and 20k across the Japanese archipelago [@Koyama1978Jomon; @Oh2017KoreaC14].

<figure class="crd-figure-block" id="fig:traj-prehistoric">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-prehistoric-and-food-gathering-korea-and-japan/fig2_prehistoric_and_food_gathering_korea_and_japan_trajectory.png" alt="fig:traj-prehistoric" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of prehistoric Korea and Japan from 10000BC to 250BC across regional basins with historical uncertainty intervals.</figcaption>
</figure>

Over the succeeding five millennia, warming climates and post-glacial reforestation enabled steady population growth (Table \ref{tab:regions-prehistoric}). By 8000BC, domain population reached 38k, climbing to 51k in 6000BC and 87k in 5000BC [@Koyama1978Jomon; @Kim2021NeolithicKorea]. In Korea, Early Chulmun groups expanded along major river corridors and coastal embayments, lifting Han-Geum population from 3,6k in 10000BC to 13,8k in 5000BC and Amnok-Taedong from 2,6k to 10,5k [@Kim2021NeolithicKorea; @Oh2017KoreaC14].

In Japan, Early Jomon foragers developed sophisticated coastal shellmiddens and seasonal hunting camps [@Habu2004AncientJomon; @Imamura1996Prehistoric]. Population in Kanto and Shinano climbed from 6k in 10000BC to 18k in 5000BC, while Tohoku expanded from 2,8k to 7,1k, reflecting increasing exploitation of rich deciduous nut harvests and salmon runs [@Koyama1978Jomon; @Crema2016Summed].

## The Middle Jomon Climacteric in Central and Eastern Japan (5000BC to 3000BC)

The two millennia between 5000BC and 3000BC witnessed an extraordinary demographic explosion across central and northeastern Honshu, culminating in the Middle Jomon climacteric (Figure \ref{fig:shares-prehistoric}) [@Koyama1978Jomon; @Habu2004AncientJomon; @Crema2020Jomon]. Domain population more than quadrupled, rising from 87k in 5000BC to 186k in 4000BC and attaining an apex of 371k in 3000BC (Table \ref{tab:regions-prehistoric}).

<figure class="crd-figure-block" id="fig:shares-prehistoric">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-prehistoric-and-food-gathering-korea-and-japan/fig3_prehistoric_and_food_gathering_korea_and_japan_shares.png" alt="fig:shares-prehistoric" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Territorial population shares and comparative peak versus 250BC terminal totals across fourteen Korean and Japanese regions.</figcaption>
</figure>

This expansion was overwhelmingly concentrated in the deciduous forests of eastern Japan [@Koyama1978Jomon; @Crema2016Summed]. By 3000BC, the Japanese archipelago sustained 261k people (70,4% of the domain total), with eastern and central Honshu holding 208,8k inhabitants [@Koyama1978Jomon]. Kanto and Shinano-Chubu formed the demographic epicenter of prehistoric Japan, reaching 125,28k people (33,8% of the entire domain) with densities of 2,12 persons per km² across rugged montane and terrace landscapes [@Koyama1978Jomon]. Tohoku supported 46,98k people, while Hokuriku and Tokai held 36,54k [@Koyama1978Jomon].

Large nucleated settlements flourished during this phase [@Habu2004AncientJomon]. In Tohoku, the Sannai-Maruyama site expanded into a permanent regional hub boasting over 500 concurrent inhabitants, multi-tier storage batteries, managed chestnut groves and longhouses exceeding 30 metres in length [@Habu2004AncientJomon; @Crema2020Jomon]. In the Chubu highlands, Togariishi (380 peak residents) and Idojiri (340 peak residents) anchored clusters of upland pit-house hamlets producing elaborate ritual pottery [@Habu2004AncientJomon; @Imamura1996Prehistoric].

In sharp contrast, western Japan remained sparsely populated under dense evergreen laurel canopies [@Koyama1978Jomon; @Imamura1996Prehistoric]. Kinki and Setouchi held only 10,44k residents in 3000BC (0,12 persons per km²), Kyushu held 11,75k, and Shikoku supported 3,92k [@Koyama1978Jomon]. This stark east-west disparity reflected ecological carrying capacity: deciduous oak-chestnut zones yielded orders of magnitude more storable calories than broadleaf evergreen forests [@Koyama1978Jomon; @Habu2004AncientJomon].

<figure class="crd-table-figure" id="tab:regions-prehistoric">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">10000BC</th><th class="crd-th">8000BC</th><th class="crd-th">6000BC</th><th class="crd-th">5000BC</th><th class="crd-th">4000BC</th><th class="crd-th">3000BC</th><th class="crd-th">2000BC</th><th class="crd-th">1000BC</th><th class="crd-th">500BC</th><th class="crd-th">250BC</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Amnok-Taedong Northwestern Basin</strong></td><td class="crd-td">53.936</td><td class="crd-td">2,6k</td><td class="crd-td">3,6k</td><td class="crd-td">5,8k</td><td class="crd-td">10,5k</td><td class="crd-td">19k</td><td class="crd-td">26,4k</td><td class="crd-td">36,5k</td><td class="crd-td">79,1k</td><td class="crd-td">129,5k</td><td class="crd-td">175k</td></tr>
<tr><td class="crd-td"><strong>2. Tumen-Hamgyong Northeastern Highlands</strong></td><td class="crd-td">24.515</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,4k</td><td class="crd-td">4,2k</td><td class="crd-td">7,3k</td><td class="crd-td">9,9k</td><td class="crd-td">12,4k</td><td class="crd-td">24,1k</td><td class="crd-td">37,3k</td><td class="crd-td">49k</td></tr>
<tr><td class="crd-td"><strong>3. Han-Geum Central Alluvial Basin</strong></td><td class="crd-td">96.027</td><td class="crd-td">3,6k</td><td class="crd-td">4,8k</td><td class="crd-td">7,6k</td><td class="crd-td">13,8k</td><td class="crd-td">24,7k</td><td class="crd-td">34,1k</td><td class="crd-td">44,9k</td><td class="crd-td">92,2k</td><td class="crd-td">147k</td><td class="crd-td">196k</td></tr>
<tr><td class="crd-td"><strong>4. Nakdong Southeastern Basin</strong></td><td class="crd-td">29.213</td><td class="crd-td">2,6k</td><td class="crd-td">3,5k</td><td class="crd-td">5,4k</td><td class="crd-td">9,6k</td><td class="crd-td">16,9k</td><td class="crd-td">23,1k</td><td class="crd-td">32,6k</td><td class="crd-td">71,9k</td><td class="crd-td">118,7k</td><td class="crd-td">161k</td></tr>
<tr><td class="crd-td"><strong>5. Yeongsan-Honam Plains and Jeju</strong></td><td class="crd-td">23.210</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3,9k</td><td class="crd-td">6,9k</td><td class="crd-td">12,1k</td><td class="crd-td">16,5k</td><td class="crd-td">23,6k</td><td class="crd-td">52,7k</td><td class="crd-td">87,5k</td><td class="crd-td">119k</td></tr>
<tr><td class="crd-td"><strong>6. Hokkaido (Ezo) Boreal Archipelago</strong></td><td class="crd-td">80.208</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">7,6k</td><td class="crd-td">18,3k</td><td class="crd-td">12,8k</td><td class="crd-td">6,8k</td><td class="crd-td">7,3k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>7. Tohoku Northern Honshu</strong></td><td class="crd-td">79.292</td><td class="crd-td">2,8k</td><td class="crd-td">3,3k</td><td class="crd-td">4,2k</td><td class="crd-td">7,1k</td><td class="crd-td">18,5k</td><td class="crd-td">47k</td><td class="crd-td">33,6k</td><td class="crd-td">18,2k</td><td class="crd-td">17,1k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>8. Kanto and Shinano-Chubu Highlands</strong></td><td class="crd-td">59.121</td><td class="crd-td">6k</td><td class="crd-td">7,7k</td><td class="crd-td">10,5k</td><td class="crd-td">18k</td><td class="crd-td">48,2k</td><td class="crd-td">125,3k</td><td class="crd-td">57,6k</td><td class="crd-td">18,2k</td><td class="crd-td">19k</td><td class="crd-td">21,6k</td></tr>
<tr><td class="crd-td"><strong>9. Hokuriku and Tokai Basins</strong></td><td class="crd-td">10.179</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">3,6k</td><td class="crd-td">5,9k</td><td class="crd-td">14,8k</td><td class="crd-td">36,5k</td><td class="crd-td">20,8k</td><td class="crd-td">9,1k</td><td class="crd-td">10,8k</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>10. Kinki and Setouchi Inland Sea</strong></td><td class="crd-td">90.287</td><td class="crd-td">2k</td><td class="crd-td">1,8k</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k</td><td class="crd-td">5,1k</td><td class="crd-td">10,4k</td><td class="crd-td">9,6k</td><td class="crd-td">6,1k</td><td class="crd-td">10,1k</td><td class="crd-td">14,4k</td></tr>
<tr><td class="crd-td"><strong>11. San'in Western Honshu</strong></td><td class="crd-td">201</td><td class="crd-td">800</td><td class="crd-td">754</td><td class="crd-td">743</td><td class="crd-td">1,1k</td><td class="crd-td">2,4k</td><td class="crd-td">5,2k</td><td class="crd-td">4,8k</td><td class="crd-td">3k</td><td class="crd-td">4,4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>12. Shikoku Island</strong></td><td class="crd-td">20.683</td><td class="crd-td">800</td><td class="crd-td">723</td><td class="crd-td">669</td><td class="crd-td">930</td><td class="crd-td">2k</td><td class="crd-td">3,9k</td><td class="crd-td">3,6k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>13. Kyushu and Tsushima Strait</strong></td><td class="crd-td">46.372</td><td class="crd-td">2,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,1k</td><td class="crd-td">2,9k</td><td class="crd-td">6,1k</td><td class="crd-td">11,7k</td><td class="crd-td">14k</td><td class="crd-td">9,9k</td><td class="crd-td">19,9k</td><td class="crd-td">30k</td></tr>
<tr><td class="crd-td"><strong>14. Ryukyu-Amami Subtropical Arc</strong></td><td class="crd-td">4.509</td><td class="crd-td">600</td><td class="crd-td">535</td><td class="crd-td">483</td><td class="crd-td">660</td><td class="crd-td">1,4k</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,9k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Domain Total</strong></td><td class="crd-td">617.753</td><td class="crd-td">32k</td><td class="crd-td">38k</td><td class="crd-td">51k</td><td class="crd-td">87k</td><td class="crd-td">186k</td><td class="crd-td">371k</td><td class="crd-td">310k</td><td class="crd-td">396k</td><td class="crd-td">615k</td><td class="crd-td">820k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Territorial population benchmarks across fourteen Korean and Japanese regions, 10000BC to 250BC, calculated from regional JSON registers.</figcaption>
</figure>

## Neoglacial Cooling and the Late Jomon Bottleneck (3000BC to 1000BC)

Between 3000BC and 1000BC, central and eastern Japan suffered severe demographic contraction triggered by Neoglacial climatic cooling [@Crema2020Jomon; @Koyama1978Jomon; @Habu2004AncientJomon]. After 2500BC, mean annual temperatures declined by 1 to 2 degrees Celsius, causing widespread failure of montane nut masts, shortening growing seasons and reducing marine molluscan biomass in shallow coastal inlets [@Habu2004AncientJomon; @Crema2020Jomon].

The resulting ecological crisis fell heavily upon high-density forager settlements in the central highlands [@Crema2020Jomon; @Crema2016Summed]. Population in Kanto and Shinano crashed by 54% between 3000BC and 2000BC (falling from 125,28k to 57,6k), and dropped further to 18,24k by 1000BC, representing an aggregate contraction of 85,4% from its mid-Holocene peak (Table \ref{tab:regions-prehistoric}) [@Koyama1978Jomon]. Tohoku fell from 46,98k to 33,6k in 2000BC and 18,24k in 1000BC, while Hokuriku-Tokai fell from 36,54k to 9,12k [@Koyama1978Jomon].

Across the entire Japanese archipelago, population shrank from 261k in 3000BC to 150k in 2000BC and bottomed at approximately 75k to 80k around 1000BC [@Koyama1978Jomon; @Crema2020Jomon]. Sannai-Maruyama and upland Chubu villages were abandoned, giving way to smaller, more mobile coastal hamlets reliant on deep-water fishing and sea-mammal hunting [@Habu2004AncientJomon; @Horiuchi2015Dietary].

## The Mumun Agrarian Boom and Wet-Rice Expansion in Korea (1000BC to 250BC)

While Japan experienced forager retrenchment, the Korean peninsula underwent a transformative agrarian transition that propelled it into unprecedented demographic expansion (Table \ref{tab:regions-prehistoric}) [@Oh2017KoreaC14; @Choe2002Mumun; @Barnes2015Archaeology].

<figure class="crd-table-figure" id="tab:density-prehistoric">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">3000BC</th><th class="crd-th">3000BC (km²)</th><th class="crd-th">250BC</th><th class="crd-th">250BC (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Amnok-Taedong Northwestern Basin</strong></td><td class="crd-td">21</td><td class="crd-td">26,4k</td><td class="crd-td">0,49</td><td class="crd-td">175k</td><td class="crd-td">3,24</td></tr>
<tr><td class="crd-td"><strong>2. Tumen-Hamgyong Northeastern Highlands</strong></td><td class="crd-td">5</td><td class="crd-td">9,9k</td><td class="crd-td">0,4</td><td class="crd-td">49k</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>3. Han-Geum Central Alluvial Basin</strong></td><td class="crd-td">159</td><td class="crd-td">34,1k</td><td class="crd-td">0,36</td><td class="crd-td">196k</td><td class="crd-td">2,04</td></tr>
<tr><td class="crd-td"><strong>4. Nakdong Southeastern Basin</strong></td><td class="crd-td">61</td><td class="crd-td">23,1k</td><td class="crd-td">0,79</td><td class="crd-td">161k</td><td class="crd-td">5,51</td></tr>
<tr><td class="crd-td"><strong>5. Yeongsan-Honam Plains and Jeju</strong></td><td class="crd-td">76</td><td class="crd-td">16,5k</td><td class="crd-td">0,71</td><td class="crd-td">119k</td><td class="crd-td">5,13</td></tr>
<tr><td class="crd-td"><strong>6. Hokkaido (Ezo) Boreal Archipelago</strong></td><td class="crd-td">155</td><td class="crd-td">18,3k</td><td class="crd-td">0,23</td><td class="crd-td">8,4k</td><td class="crd-td">0,1</td></tr>
<tr><td class="crd-td"><strong>7. Tohoku Northern Honshu</strong></td><td class="crd-td">585</td><td class="crd-td">47k</td><td class="crd-td">0,59</td><td class="crd-td">18k</td><td class="crd-td">0,23</td></tr>
<tr><td class="crd-td"><strong>8. Kanto and Shinano-Chubu Highlands</strong></td><td class="crd-td">717</td><td class="crd-td">125,3k</td><td class="crd-td">2,12</td><td class="crd-td">21,6k</td><td class="crd-td">0,37</td></tr>
<tr><td class="crd-td"><strong>9. Hokuriku and Tokai Basins</strong></td><td class="crd-td">68</td><td class="crd-td">36,5k</td><td class="crd-td">3,59</td><td class="crd-td">13,2k</td><td class="crd-td">1,3</td></tr>
<tr><td class="crd-td"><strong>10. Kinki and Setouchi Inland Sea</strong></td><td class="crd-td">693</td><td class="crd-td">10,4k</td><td class="crd-td">0,12</td><td class="crd-td">14,4k</td><td class="crd-td">0,16</td></tr>
<tr><td class="crd-td"><strong>11. San'in Western Honshu</strong></td><td class="crd-td">2</td><td class="crd-td">5,2k</td><td class="crd-td">25,97</td><td class="crd-td">6k</td><td class="crd-td">29,85</td></tr>
<tr><td class="crd-td"><strong>12. Shikoku Island</strong></td><td class="crd-td">113</td><td class="crd-td">3,9k</td><td class="crd-td">0,19</td><td class="crd-td">4,8k</td><td class="crd-td">0,23</td></tr>
<tr><td class="crd-td"><strong>13. Kyushu and Tsushima Strait</strong></td><td class="crd-td">482</td><td class="crd-td">11,7k</td><td class="crd-td">0,25</td><td class="crd-td">30k</td><td class="crd-td">0,65</td></tr>
<tr><td class="crd-td"><strong>14. Ryukyu-Amami Subtropical Arc</strong></td><td class="crd-td">29</td><td class="crd-td">2,6k</td><td class="crd-td">0,58</td><td class="crd-td">3,6k</td><td class="crd-td">0,8</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued prehistoric settlements, 3000BC and 250BC population benchmarks, and territorial densities (persons per km²).</figcaption>
</figure>

In Korea, population grew steadily from 12k in 10000BC to 110k in 3000BC and 150k in 2000BC under Late Chulmun millet cultivation [@Kim2021NeolithicKorea; @Oh2017KoreaC14]. With the onset of the Mumun Bronze Age and the diffusion of intensive wet-rice agriculture after 1500BC, population growth accelerated dramatically [@Choe2002Mumun; @Oh2017KoreaC14]. Korean population surged to 300k in 1000BC, reached 520k by 500BC, and climbed to 700k by 250BC (Table \ref{tab:regions-prehistoric}) [@Oh2017KoreaC14; @Barnes2015Archaeology].

By 250BC, the Han-Geum Central Alluvial Basin became the demographic core of the domain, supporting 196k residents (2,04 persons per km²), anchored by large fortified agrarian villages such as Songguk-ri (1.200 peak residents) and extensive dolmen necropolises at Ganghwa [@Choe2002Mumun; @Barnes2015Archaeology]. The Amnok-Taedong basin reached 175k, supported by sites such as Namgyong (550 residents), while the Nakdong Southeastern Basin expanded to 161k (5,51 persons per km²), led by the nucleated agrarian town of Daepyeong-ri (1.450 residents) [@Choe2002Mumun; @Barnes2015Archaeology]. The Yeongsan-Honam plains and Jeju reached 119k, maintaining the world's highest concentration of megalithic dolmens at Gochang (650 residents) and Hwasun (580 residents) [@Barnes2015Archaeology].

## Early Yayoi Transmission and Western Japanese Rebound

The arrival of irrigated wet-rice agriculture from southern Korea across the Tsushima Strait during the first millennium BC initiated the Yayoi demographic revolution in western Japan [@Crema2021Bayesian; @Silva2015Modelling; @Barnes2015Archaeology].

In Kyushu, population had contracted from 14k in 2000BC to 9,88k in 1000BC [@Koyama1978Jomon]. With the establishment of wet-rice farming villages in northern Kyushu during the Early Yayoi period, population doubled to 19,95k in 500BC and surged to 30k by 250BC (Table \ref{tab:regions-prehistoric}) [@Crema2021Bayesian; @Koyama1978Jomon]. Kinki and Setouchi rebounded from 6,08k in 1000BC to 14,4k in 250BC, while Hokuriku reached 13,2k [@Koyama1978Jomon].

By 250BC, total domain population reached 820k (Table \ref{tab:validation-prehistoric}). Crucially, the demographic centre of gravity had shifted irreversibly: the Korean Peninsula held 85,4% of domain inhabitants (700k), while western Japan was rapidly overtaking the depopulated Jomon heartlands of eastern Honshu [@Koyama1978Jomon; @Barnes2015Archaeology; @Crema2021Bayesian].

## Prehistoric Settlement Hierarchy

The 821 prehistoric settlements catalogued in this study illustrate the dual structural trajectories of peninsular and archipelagic East Asia (Figure \ref{fig:sett-prehistoric}) [@Kudo2023JapanC14; @Oh2017KoreaC14; @Habu2004AncientJomon].

<figure class="crd-figure-block" id="fig:sett-prehistoric">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-prehistoric-and-food-gathering-korea-and-japan/fig4_prehistoric_and_food_gathering_korea_and_japan_settlements.png" alt="fig:sett-prehistoric" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading catalogued prehistoric settlements across Korea and Japan through 250BC.</figcaption>
</figure>

At the apex of the settlement hierarchy stood the large fortified agricultural towns of the Korean Mumun Bronze Age [@Choe2002Mumun; @Barnes2015Archaeology]:
1. Daepyeong-ri: The largest prehistoric settlement documented in the domain, located along the Nam River in the Nakdong basin, housing an estimated 1.450 inhabitants at its peak around 700BC across extensive ditch-enclosed residential precincts, wet-rice field complexes, stone tool workshops and dolmen cemeteries [@Choe2002Mumun].
2. Songguk-ri: The type-site of the Middle Mumun agrarian culture in the Geum River valley, sustaining 1.200 residents around 600BC within circular ditch enclosures, containing distinctive round pit-houses and specialized bronze casting areas [@Choe2002Mumun; @Barnes2015Archaeology].
3. Geomdan-ri: An intensively defended hill-slope village near Ulsan in the southeastern basin, housing 780 residents around 500BC within an unbroken defensive ditch and palisade system [@Choe2002Mumun].

The second tier encompassed major megalithic dolmen centres and northern peninsular hubs:
4. Gochang Dolmen Complex: Located in the Yeongsan-Honam plains, sustaining 650 residents around 500BC, surrounded by over 440 preserved megalithic capstone dolmens [@Barnes2015Archaeology].
5. Sannai-Maruyama Site: The premier Middle Jomon settlement of northeastern Japan, situated on a river terrace overlooking Aomori Bay, sustaining 650 residents at its 3000BC climacteric [@Habu2004AncientJomon; @Crema2020Jomon].
6. Hwasun Dolmen Complex: A major megalithic ceremonial and settlement centre in Honam, supporting 580 residents around 500BC [@Barnes2015Archaeology].
7. Namgyong: An extensive multi-period settlement on the Taedong River near Pyongyang, supporting 550 residents around 500BC with preserved carbonized rice, foxtail millet and barley grains [@Barnes2015Archaeology].
8. Odong: A Bronze Age fortified settlement in the northeastern Tumen River highlands, housing 520 residents around 400BC [@Barnes2015Archaeology].
9. Ganghwa Dolmen Complex: Anchoring the Han River estuary with 520 residents around 500BC, characterized by massive northern-type table dolmens [@Barnes2015Archaeology].
10. Hunam-ri: A pivotal early wet-rice settlement on the Han River, sustaining 450 residents around 800BC [@Choe2002Mumun].

The third tier comprised prominent Middle and Late Jomon pit-house villages and shellmounds in Japan: Kasori Shellmound in Chiba (420 residents in 2500BC), Togariishi in Nagano (380 residents in 2800BC), Idojiri (340 residents in 2800BC), and Kamegaoka in Aomori (260 residents in 1000BC) [@Habu2004AncientJomon; @Imamura1996Prehistoric].

## Analytical Caveats and Preservation Biases

Three methodological constraints govern precision in this prehistoric reconstruction. First, differential soil taphonomy creates pronounced preservation disparities [@Habu2004AncientJomon; @Barnes2015Archaeology]. In Japan, acidic volcanic soils dissolve uncharred faunal and botanical remains unless sheltered within calcareous shellmounds, potentially biasing dietary and chronological reconstructions toward coastal shellmound facies at the expense of interior foraging camps [@Habu2004AncientJomon; @Yoneda2002Radiocarbon].

Second, contemporaneity uncertainty in pit-house villages remains an inherent challenge [@Crema2020Jomon]. While Bayesian phase models reduce over-counting by incorporating pit-dwelling rebuild intervals and ceramic seriation durations, micro-scale village populations carry an estimated uncertainty interval of $\pm 15\%$ to $\pm 25\%$ [@Crema2020Jomon; @Kudo2023JapanC14].

Third, modern urban and agricultural development has heavily impacted site discovery [@Kudo2023JapanC14; @Oh2017KoreaC14]. Intense salvage excavations in the Tokyo metropolitan area and South Korean industrial development zones (e.g. Gyeonggi and Gyeongsang provinces) yield far higher site documentation densities than mountainous northern North Korea or Hokkaido, requiring spatial kriging covariates to smooth modern developmental clustering [@Paciorek2006Matern; @Oh2017KoreaC14].

# Sources

<div id="refs"></div>
