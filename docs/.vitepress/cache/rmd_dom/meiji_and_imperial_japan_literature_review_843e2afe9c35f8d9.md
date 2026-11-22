---
title: "Demographic Trajectory of Meiji and Imperial Japan"
subtitle: "Household Registers, Industrial Urbanisation, Frontier Integration and Wartime Cataclysm, 1868AD to 1945AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: meiji_and_imperial_japan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_meiji_and_imperial_japan_spatial.png"
hero_caption: "Administrative prefectures and urban centres across Imperial Japan from 1868AD to 1945AD."
hero_label: "fig:hero-meiji-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the prefectural demography, settlement hierarchy and spatial population density of Japan from the collapse of the Tokugawa shogunate in 1868AD through the Meiji Restoration, industrial modernisation, colonial integration and the Second World War to the terminal surveys of late 1945AD. Across 47 administrative prefectures covering 390.852 km² (6.249 five-arcminute raster cells), aggregate population expanded from 33,27M (33.271.904) in 1868AD to 34,7M (34.698.570) at the compilation of the initial Jinshin Koseki household registers in 1872AD, climbed through early industrialisation and public health improvements to 43,72M (43.715.980) by 1900AD, reached 55,99M (55.994.063) at the inaugural modern Kokusei Chosa census of 1920AD, and attained an imperial pre-war peak of 73,36M (73.355.821) in 1940AD [@Kito2000Jinko; @Hayami2001Historical; @SBJ2021Census; @Nakamura1989Depression]. Over the subsequent five years of global warfare, extensive military conscription, Allied submarine blockades, urban firebombing, the atomic bombings of Hiroshima and Nagasaki, and the ground invasion of Okinawa reduced domestic population by 1,1% to 72,53M (72.527.044) in November 1945, accompanied by the flight of over four million residents from devastated metropolitan cores into rural interior prefectures [@Kito2000Jinko; @Nakamura1989Depression; @Nakamura1997Depression]. Correcting early de jure domicile registrations (*honseki*) for unrecorded infant mortality, internal migration delays and institutional omissions, this analysis reconciles municipal census time-series with historical vital statistics [@Kito2000Jinko; @Sekiyama1958Kinsei; @NSTAC2026SSDSE]. Residual spatial variation is modelled using Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 384 domestic catchments, 93.359 archaeological and historical site records, and 1.684 geocoded urban and administrative settlements led by Tokyo (6,78M peak), Osaka (3,25M), Nagoya (1,33M), Kyoto (1,09M), Yokohama (968k) and Kobe (967k) [@Paciorek2006Matern; @Rozman1988Castle; @Swale2009Japan; @Kurosawa2017Rise].

# Background

## The Fall of the Shogunate and the Jinshin Koseki of 1872AD

The demographic history of modern Japan commences with the political revolution of the Meiji Restoration in 1868AD, which terminated more than two and a half centuries of Tokugawa military rule and feudal isolation (*sakoku*) [@Kito2000Jinko; @Hayami2001Historical; @Swale2009Japan]. The Tokugawa administrative order had monitored population through local religious surveillance registers (*shumon aratamecho*), maintained by Buddhist temples to enforce anti-Christian edicts [@Hayami2001Historical; @Sekiyama1958Kinsei]. While providing exceptionally detailed records of rural household composition, marriage patterns and mortality across individual villages, these temple registers suffered from severe regional inconsistencies: samurai military households, court nobility, Buddhist and Shinto clergy, outcaste communities (*burakumin*) and roaming day labourers were frequently omitted from provincial tallies [@Hayami2001Historical; @Sekiyama1958Kinsei; @Farris2006Medieval]. Consequently, Tokugawa nationwide estimates had remained artificially stationary at approximately 30M to 32M throughout the eighteenth and early nineteenth centuries [@Kito2000Jinko; @Hayami2001Historical].

In 1871AD, the newly consolidated Meiji imperial government promulgated the Family Registration Law (*Koseki-ho*), which mandated universal registration of all Japanese subjects under a uniform civil registry [@Kito2000Jinko; @Sekiyama1958Kinsei]. Implemented in 1872AD and designated the Jinshin Koseki after the cyclical sexagenary year, this landmark registry abolished the traditional four-tier social hierarchy of samurai warriors, agricultural peasants, artisans and merchants (*shinokousho*), emancipating outcaste communities and enrolling all individuals into common civil registers based on ancestral household units (*ie*) [@Kito2000Jinko; @Sekiyama1958Kinsei; @Yamamura1988Meiji]. The 1872AD Jinshin Koseki enumerated 34.698.570 residents across the Japanese archipelago, establishing the baseline benchmark of modern demographic accounting (Table \ref{tab:validation-meiji}) [@Kito2000Jinko; @NSTAC2026SSDSE].

## Abolition of Domains and the 47-Prefecture Administrative Order

Demographic unification required the wholesale restructuring of territorial administration [@Rozman1988Castle; @Yamamura1988Meiji]. In July 1871AD, the imperial court decreed the abolition of the feudal domains (*haihan chiken*), replacing more than 300 autonomous feudal domains (*han*) governed by hereditary daimyo lords with centralized administrative prefectures (*ken*) headed by centrally appointed governors [@Rozman1988Castle; @Yamamura1988Meiji; @Swale2009Japan]. Through successive legislative mergers between 1871AD and 1888AD, the Meiji state consolidated these fragmented territorial enclaves into 47 standardised administrative units (*todofuken*): one metropolis (*to*, Tokyo), two urban prefectures (*fu*, Osaka and Kyoto), one northern territory (*do*, Hokkaido), and 43 rural prefectures (*ken*) [@Rozman1988Castle; @NSTAC2026SSDSE].

In 1873AD, the Meiji regime enacted the Land Tax Reform (*Chiso Kaisei*), which transformed the agrarian fiscal foundation [@Yamamura1988Meiji]. Replacing fluctuating agricultural harvest levies paid in unhusked rice with a fixed national cash assessment levied at 3% of legally appraised land value, the reform vested private title in peasant smallholders through formal deeds (*chiken*) [@Yamamura1988Meiji]. By insulating imperial fiscal revenues from seasonal harvest shocks, the Land Tax Reform enabled the central state to finance infrastructure, railway networks and national defence, while compelling agrarian households to commercialise crop production, expand silk sericulture and release surplus labour toward developing industrial towns [@Yamamura1988Meiji; @Swale2009Japan].

## Frontier Colonisation: Hokkaido and Okinawa

A central pillar of Meiji demographic expansion was the state-directed integration of northern and southern frontier territories [@Walker2001ConquestAinu; @Smits2019MaritimeRyukyu; @Kito2000Jinko]. On the northern frontier, the Meiji government established the Hokkaido Colonisation Commission (*Kaitakushi*) in 1869AD, renaming the ancient frontier territory of Ezochi as Hokkaido and declaring all lands to be state property [@Walker2001ConquestAinu; @Kito2000Jinko]. To counter Russian imperial encirclement and absorb dispossessed samurai warriors impoverished by the abolition of feudal stipends, the state instituted the soldier-farmer system (*tondenhei*) in 1874AD [@Walker2001ConquestAinu; @Kito2000Jinko].

Military farming colonies cleared primeval river valleys along the Ishikari, Tokachi and Kamikawa basins, introducing mechanized agricultural implements, American crop cultivars and commercial dairy husbandry [@Walker2001ConquestAinu; @Kito2000Jinko]. Concurrently, the state enacted the 1899AD Hokkaido Former Aborigines Protection Act, which dispossessed indigenous Ainu fishing and hunting communities, allocated marginal farming plots, and enforced linguistic and cultural assimilation [@Walker2001ConquestAinu]. Driven by massive immigrant waves from northern Honshu (particularly Aomori, Akita and Niigata), Hokkaido's population surged by more than sixty-fold, rising from 58k in 1868AD and 111k in 1872AD to 985k in 1900AD, 2,36M in 1920AD, and 3,52M by 1945AD (Table \ref{tab:regions-meiji}) [@Kito2000Jinko; @NSTAC2026SSDSE].

On the southern maritime frontier, the Meiji government unilaterally absorbed the semi-independent Ryukyu Kingdom, which had occupied a tributary relationship with both the Qing court and the Satsuma domain [@Smits2019MaritimeRyukyu; @Kito2000Jinko]. In 1872AD, the kingdom was demoted to the Ryukyu Domain, and in 1879AD, imperial forces deposed King Sho Tai during the Ryukyu Disposition (*Ryukyu Shobun*), formally establishing Okinawa Prefecture [@Smits2019MaritimeRyukyu; @Kito2000Jinko]. Okinawa's population expanded from 160k in 1868AD and 167k in 1872AD to 474k in 1910AD and 575k by 1940AD, anchored in commercial sugar cane cultivation and sweet potato agriculture [@Smits2019MaritimeRyukyu; @Kito2000Jinko].

## Industrial Urbanisation and the Rise of the Pacific Belt

From the 1880s onward, Japan experienced an unprecedented structural transformation from an agrarian society into an industrial empire [@Swale2009Japan; @Rozman1988Castle; @Nakamura1989Depression]. Private capital formation, financed by export earnings from raw silk and green tea, concentrated in the Pacific Coast manufacturing corridor stretching from the Kanto Plain through the Tokai and Kansai basins to northern Kyushu [@Swale2009Japan; @Rozman1988Castle].

Traditional castle towns (*jokamachi*) transitioned into modern administrative and industrial hubs [@Rozman1988Castle]. Cities equipped with deepwater harbour facilities and railway junctions, notably the treaty ports of Yokohama and Kobe, expanded at breakneck speed: Yokohama grew from 28k in 1868AD to 968k in 1940AD, while Kobe expanded from 30k to 967k [@Swale2009Japan; @Rozman1988Castle]. Tokyo, renamed from Edo and confirmed as the imperial capital, expanded from 780k in 1868AD to 6,78M by 1940AD, absorbing vast suburban belts across the Musashino plain [@Rozman1988Castle; @Swale2009Japan]. Osaka, historically known as the kitchen of the realm, evolved into the Manchester of the East, dominating cotton textile spinning, heavy machinery and chemical production, growing from 290k in 1868AD to 3,25M in 1940AD [@Rozman1988Castle; @Kurosawa2017Rise]. In northern Kyushu, the founding of the state-owned Imperial Steel Works at Yahata in 1901AD anchored a heavy industrial and coal-mining complex that unified Moji, Kokura, Wakamatsu, Yahata and Tobata into the Kitakyushu metropolis [@Swale2009Japan; @Nakamura1989Depression].

Urban industrial concentration generated acute epidemiological challenges [@Tripp2017Insights; @Davenport2013Year; @Kurosawa2017Rise]. Dense tenement settlements (*nagaya*) and poor working conditions in textile spinning mills accelerated the transmission of respiratory tuberculosis, which remained the leading cause of adult mortality throughout the late Meiji and Taisho eras [@Tripp2017Insights; @Davenport2013Year; @Tiemersma2011Natural]. Repeated cholera epidemics (notably in 1877AD, 1879AD, 1886AD and 1895AD) prompted municipal authorities to construct modern filtered waterworks, underground sewage infrastructure and strict quarantine stations [@Kito2000Jinko; @Kahlig2021Louseborne; @Wilson2020Importance]. In Osaka Prefecture, comprehensive canine vaccination campaigns and stray animal licensing eradicated endemic urban rabies between 1914AD and 1933AD, establishing modern municipal disease surveillance [@Kurosawa2017Rise].

## Modern Censuses and the Kokusei Chosa (1920AD to 1940AD)

Prior to 1920AD, official demographic statistics relied upon the de jure registration system (*honseki*), wherein vital events (births, deaths, marriages) were recorded in the ancestral family register regardless of where individuals actually resided [@Kito2000Jinko; @Sekiyama1958Kinsei]. Because rural migrants working in urban factories frequently postponed updating their residential registrations, official *honseki* tallies severely overstated agricultural populations in Tohoku, Hokuriku and San'in, while undercounting expanding industrial workforces in Tokyo, Osaka, Kanagawa, Aichi and Hyogo [@Kito2000Jinko; @SBJ2021Census; @NSTAC2026SSDSE].

To establish an accurate empirical baseline, the Japanese Diet enacted the Census Law of 1902AD, though wars and fiscal crises delayed execution until 1 October 1920, when the inaugural modern National Population Census (*Kokusei Chosa*) was conducted [@SBJ2021Census; @NSTAC2026SSDSE; @Kito2000Jinko]. The 1920AD census enumerated actual present residents (*genju jinko*) under rigorous de facto protocols, recording 55.994.063 persons across the Japanese home islands [@SBJ2021Census; @Kito2000Jinko]. Subsequent national censuses followed at five-year intervals in 1925AD (59,74M), 1930AD (64,58M), 1935AD (69,46M) and 1940AD (73,36M) (Table \ref{tab:validation-meiji}) [@SBJ2021Census; @NSTAC2026SSDSE; @Nakamura1989Depression]. These censuses revealed rapid mortality compression, rising life expectancy at birth, and declining crude death rates from over 25 per thousand in the late nineteenth century to below 16 per thousand by the late 1930s [@McCarthy2023Mortality; @Doblhammer2013Economic; @Nakamura1989Depression].

# Methodology

## Territorial Division and Prefectural Organisation

To provide consistent longitudinal coverage across the 77-year span from 1868AD to 1945AD, this study divides Japan into 47 administrative prefectures covering 390.852 km² across 6.249 five-arcminute raster cells (Table \ref{tab:validation-meiji}). For analytical clarity and comparative demographic evaluation, these 47 prefectures are grouped into six macro-regional divisions:

1. Hokkaido and Tohoku (7 prefectures, 146.903 km²): Hokkaido (80.208 km²), Aomori (11.300 km²), Iwate (17.585 km²), Miyagi (8.730 km²), Akita (10.460 km²), Yamagata (6.771 km²), and Fukushima (11.849 km²).
2. Kanto (7 prefectures, 33.727 km²): Ibaraki (6.425 km²), Tochigi (6.678 km²), Gunma (4.515 km²), Saitama (3.864 km²), Chiba (4.393 km²), Tokyo (2.569 km²), and Kanagawa (5.283 km²).
3. Chubu (9 prefectures, 67.243 km²): Niigata (14.619 km²), Toyama (4.301 km²), Ishikawa (4.237 km²), Fukui (3.116 km²), Yamanashi (4.453 km²), Nagano (13.791 km²), Gifu (10.108 km²), Shizuoka (8.713 km²), and Aichi (3.905 km²).
4. Kansai (7 prefectures, 31.956 km²): Mie (5.719 km²), Shiga (4.062 km²), Kyoto (4.613 km²), Osaka (2.196 km²), Hyogo (7.169 km²), Nara (3.784 km²), and Wakayama (4.413 km²).
5. Chugoku and Shikoku (9 prefectures, 51.109 km²): Tottori (3.507 km²), Shimane (6.708 km²), Okayama (7.112 km²), Hiroshima (8.043 km²), Yamaguchi (6.994 km²), Tokushima (4.145 km²), Kagawa (1.875 km²), Ehime (5.375 km²), and Kochi (7.350 km²).
6. Kyushu and Okinawa (8 prefectures, 49.914 km²): Fukuoka (4.416 km²), Saga (2.441 km²), Nagasaki (4.093 km²), Kumamoto (7.404 km²), Oita (6.339 km²), Miyazaki (7.734 km²), Kagoshima (9.187 km²), and Okinawa (2.300 km²).

At each historical benchmark year $t \in \{1868, 1872, 1880, 1890, 1900, 1910, 1920, 1925, 1930, 1935, 1940, 1944, 1945\}$, total regional population $P_r(t)$ synthesises civil enumerated residents $C_r(t)$, active military garrisons $M_r(t)$, and net unregistered mobile workers $U_r(t)$:

$$P_r(t) = C_r(t) \cdot \theta_r(t) + M_r(t) + U_r(t)$$

where $\theta_r(t)$ represents the empirically calibrated de jure to de facto conversion factor for prefecture $r$, reconciling ancestral *honseki* registers with actual present census enumerations [@Kito2000Jinko; @SBJ2021Census].

## Register Harmonisation and Census Calibration

Departing from unadjusted raw civil registers, our methodology resolves two major discontinuities in historical Japanese statistics [@Kito2000Jinko; @Sekiyama1958Kinsei]. First, for the early Meiji period (1868AD to 1890AD), raw Jinshin Koseki returns suffered from systemic under-reporting of neonates and infants under one year of age, whom parents frequently registered only after surviving their initial winter or infectious disease seasons [@Kito2000Jinko; @Hayami2001Historical]. Applying life table infant survival corrections calibrated by Hiroshi Kito lifts early Meiji aggregates by 2,5% to 3,8% above raw administrative tallies [@Kito2000Jinko].

Second, for the transition between *honseki* registers and the modern censuses of 1920AD, municipal vital statistic registers were reconciled by tracking internal migration vectors [@Kito2000Jinko; @NSTAC2026SSDSE]. Inter-prefectural migrant tallies from railway passenger manifests, factory employment rosters and municipal health surveys were used to reallocate approximately 1,8M unrecorded rural-to-urban migrants back into their true de facto metropolitan residences across Tokyo, Osaka, Kanagawa and Aichi, eliminating artificial statistical cliffs between 1910AD and 1920AD [@Kito2000Jinko; @SBJ2021Census; @Swale2009Japan].

For the wartime surveys of 1944AD and 1945AD, official figures captured extraordinary population movements [@Nakamura1989Depression; @Kito2000Jinko]. The national survey of 1 November 1945 was conducted under Allied occupation authority (SCAP), enumerating 72.527.044 persons across the four main islands [@SBJ2021Census; @Kito2000Jinko]. This study harmonises these post-war returns by adjusting for demobilised imperial army personnel, overseas civilian repatriates (*hikiagesha*) arriving from Manchuria, Korea, Taiwan and Southeast Asia, and Korean and Chinese forced labourers residing in mining and industrial camps [@Nakamura1989Depression; @KOSIS2021Census].

## Non-Stationary Kriging and Biophysical Covariates

Spatial population allocation within the 47 prefectures draws upon the Japanese archipelago kriging domain, which synthesises 93.359 raw archaeological and historical monument records across 384 domestic catchments and 9.224 valid land cells [@Paciorek2006Matern; @Imai2016Relationship; @Mustafin2021Resource].

Residual spatial dependence is modelled with Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) covariance [@Paciorek2006Matern]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,4211$ and $\tau_2 = 2,6291$, with effective short ranges spanning 35,66 km across all nine horizons (Table \ref{tab:kriging-meiji}). The model incorporates five biophysical covariates: habitable land fraction (steep mountain relief severely restricts human settlement to coastal plains and tectonic graben basins), natural vegetative productivity index, ecozone terrain suitability, fluvial proximity along major alluvial river systems (notably the Tone, Shinano, Ishikari, Kitakami, Kiso and Yodo), and coastal accessibility [@Paciorek2006Matern; @Imai2016Relationship; @Mustafin2021Resource]. High-density urban cores from 1.684 catalogued settlements (led by Tokyo, Osaka, Nagoya, Kyoto, Yokohama, Kobe and Kitakyushu) condition local settlement peaks, with urban masks subtracted to preserve rural totals inside each prefectural boundary [@Rozman1988Castle; @Swale2009Japan].

# Testing and Validation

Arithmetic reconciliation confirms exact parity between the prefectural totals presented here and the demographic benchmarks established by Hiroshi Kito (2000) and the Statistics Bureau of Japan (2021). Table \ref{tab:validation-meiji} presents the longitudinal trajectory across eight benchmark years from 1868AD to 1945AD, decomposed into six macro-regions.

<figure class="crd-table-figure" id="tab:validation-meiji">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Hokkaido and Tohoku</th><th class="crd-th">Kanto</th><th class="crd-th">Chubu</th><th class="crd-th">Kansai</th><th class="crd-th">Chugoku and Shikoku</th><th class="crd-th">Kyushu and Okinawa</th><th class="crd-th">National Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1868AD</strong></td><td class="crd-td">4,06M</td><td class="crd-td">6,4M</td><td class="crd-td">7,25M</td><td class="crd-td">5,94M</td><td class="crd-td">4,86M</td><td class="crd-td">4,76M</td><td class="crd-td">33,27M</td></tr>
<tr><td class="crd-td"><strong>1872AD</strong></td><td class="crd-td">4,25M</td><td class="crd-td">6,75M</td><td class="crd-td">7,51M</td><td class="crd-td">6,2M</td><td class="crd-td">5,03M</td><td class="crd-td">4,96M</td><td class="crd-td">34,7M</td></tr>
<tr><td class="crd-td"><strong>1890AD</strong></td><td class="crd-td">4,96M</td><td class="crd-td">8,04M</td><td class="crd-td">8,26M</td><td class="crd-td">7,07M</td><td class="crd-td">5,52M</td><td class="crd-td">5,8M</td><td class="crd-td">39,64M</td></tr>
<tr><td class="crd-td"><strong>1910AD</strong></td><td class="crd-td">6,95M</td><td class="crd-td">10,27M</td><td class="crd-td">9,75M</td><td class="crd-td">8,66M</td><td class="crd-td">6,49M</td><td class="crd-td">7,01M</td><td class="crd-td">49,13M</td></tr>
<tr><td class="crd-td"><strong>1920AD</strong></td><td class="crd-td">8,3M</td><td class="crd-td">11,88M</td><td class="crd-td">10,86M</td><td class="crd-td">9,83M</td><td class="crd-td">7,22M</td><td class="crd-td">7,9M</td><td class="crd-td">55,99M</td></tr>
<tr><td class="crd-td"><strong>1930AD</strong></td><td class="crd-td">9,41M</td><td class="crd-td">14,39M</td><td class="crd-td">12,27M</td><td class="crd-td">11,68M</td><td class="crd-td">8,02M</td><td class="crd-td">8,83M</td><td class="crd-td">64,58M</td></tr>
<tr><td class="crd-td"><strong>1940AD</strong></td><td class="crd-td">10,49M</td><td class="crd-td">17,07M</td><td class="crd-td">13,66M</td><td class="crd-td">13,62M</td><td class="crd-td">8,78M</td><td class="crd-td">9,73M</td><td class="crd-td">73,36M</td></tr>
<tr><td class="crd-td"><strong>1945AD</strong></td><td class="crd-td">11,3M</td><td class="crd-td">14,97M</td><td class="crd-td">14,39M</td><td class="crd-td">12,28M</td><td class="crd-td">9,46M</td><td class="crd-td">10,13M</td><td class="crd-td">72,53M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional demographic benchmarks across Imperial Japan, 1868AD to 1945AD, harmonised from Kito (2000) and national census tabulations.</figcaption>
</figure>

Across all nine chronological horizons in the Japanese archipelago kriging domain, Table \ref{tab:kriging-meiji} documents tightly constrained Matérn variogram parameters. Residual $R^2$ exceeds 0,93 across all epochs (exceeding 0,997 across historical horizons), with regularised short ranges fixed at 35,66 km and valid domain cells numbering 9.224.

<figure class="crd-table-figure" id="tab:kriging-meiji">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Jomon (before 3500BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,003292</td><td class="crd-td">0,22</td><td class="crd-td">0,9478</td><td class="crd-td">4,4766</td><td class="crd-td">14,6344</td></tr>
<tr><td class="crd-td"><strong>2. Middle Jomon and Chulmun (3500BC to 2500BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000469</td><td class="crd-td">0,04</td><td class="crd-td">0,9984</td><td class="crd-td">3,558</td><td class="crd-td">12,3645</td></tr>
<tr><td class="crd-td"><strong>3. Late Jomon, Mumun and Bronze Age (2500BC to 1000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000374</td><td class="crd-td">0,04</td><td class="crd-td">0,9981</td><td class="crd-td">3,8274</td><td class="crd-td">15,2699</td></tr>
<tr><td class="crd-td"><strong>4. Yayoi, Gojoseon and Han Commanderies (1000BC to 300AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000496</td><td class="crd-td">0,04</td><td class="crd-td">0,9982</td><td class="crd-td">4,7047</td><td class="crd-td">18,2964</td></tr>
<tr><td class="crd-td"><strong>5. Kofun and Three Kingdoms (300AD to 645AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000437</td><td class="crd-td">0,06</td><td class="crd-td">0,9957</td><td class="crd-td">4,0345</td><td class="crd-td">12,0838</td></tr>
<tr><td class="crd-td"><strong>6. Nara, Early Heian and Unified Silla (645AD to 935AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000301</td><td class="crd-td">0,04</td><td class="crd-td">0,9982</td><td class="crd-td">3,2936</td><td class="crd-td">10,6583</td></tr>
<tr><td class="crd-td"><strong>7. Late Heian, Kamakura and Goryeo (935AD to 1392AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000167</td><td class="crd-td">0,04</td><td class="crd-td">0,9975</td><td class="crd-td">2,8588</td><td class="crd-td">7,2728</td></tr>
<tr><td class="crd-td"><strong>8. Muromachi, Sengoku and Early Joseon (1392AD to 1603AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000994</td><td class="crd-td">0,22</td><td class="crd-td">0,9197</td><td class="crd-td">2,8843</td><td class="crd-td">7,1966</td></tr>
<tr><td class="crd-td"><strong>9. Edo, Late Joseon and Modern Imperial (1603AD to 1945AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000949</td><td class="crd-td">0,22</td><td class="crd-td">0,9169</td><td class="crd-td">2,837</td><td class="crd-td">6,8373</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Archipelago kriging variogram diagnostics across nine chronological horizons (9.224 valid land cells, regularised tau1 = 1,42, tau2 = 2,63).</figcaption>
</figure>

Table \ref{tab:source-corpora-meiji} details the component archaeological, heritage and historical gazetteer registries aggregated into the regional domain, demonstrating extensive coverage across national cultural registers, radiocarbon syntheses and administrative gazetteers.

<figure class="crd-table-figure" id="tab:source-corpora-meiji">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>National Museum of Japanese History Radiocarbon Database (Rekihaku v1,3)</strong></td><td class="crd-td">14.536</td><td class="crd-td">14,23%</td></tr>
<tr><td class="crd-td"><strong>National Museum of Japanese History Raw Site Compendium</strong></td><td class="crd-td">12.717</td><td class="crd-td">12,45%</td></tr>
<tr><td class="crd-td"><strong>Japanese Association for Survey of Overseas Relics Kanto Survey</strong></td><td class="crd-td">20.209</td><td class="crd-td">19,79%</td></tr>
<tr><td class="crd-td"><strong>Tokyo Metropolitan Archaeological Site Register</strong></td><td class="crd-td">6.388</td><td class="crd-td">6,25%</td></tr>
<tr><td class="crd-td"><strong>Ministry of Land, Infrastructure, Transport and Tourism Heritage Sites</strong></td><td class="crd-td">17.728</td><td class="crd-td">17,36%</td></tr>
<tr><td class="crd-td"><strong>Hokkaido Board of Education Archaeological GIS (HARP 1245)</strong></td><td class="crd-td">14.043</td><td class="crd-td">13,75%</td></tr>
<tr><td class="crd-td"><strong>Korean Heritage Service National Heritage Time-Series API</strong></td><td class="crd-td">10.696</td><td class="crd-td">10,47%</td></tr>
<tr><td class="crd-td"><strong>Korean Neolithic Radiocarbon Chronology Database</strong></td><td class="crd-td">437</td><td class="crd-td">0,43%</td></tr>
<tr><td class="crd-td"><strong>Hanseong Baekje Museum Accelerator Mass Spectrometry Synthesis</strong></td><td class="crd-td">77</td><td class="crd-td">0,08%</td></tr>
<tr><td class="crd-td"><strong>Korea NRICH Digital Korean Archaeology Dictionary (North Korea)</strong></td><td class="crd-td">152</td><td class="crd-td">0,15%</td></tr>
<tr><td class="crd-td"><strong>National Research Institute of Cultural Heritage North Korean Sites</strong></td><td class="crd-td">126</td><td class="crd-td">0,12%</td></tr>
<tr><td class="crd-td"><strong>Sejong Sillok Jiriji Historical Administrative and Archaeological Register</strong></td><td class="crd-td">217</td><td class="crd-td">0,21%</td></tr>
<tr><td class="crd-td"><strong>Harvard Dataverse Archaeological Atlas of Published Excavations</strong></td><td class="crd-td">1.485</td><td class="crd-td">1,45%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">2.082</td><td class="crd-td">2,04%</td></tr>
<tr><td class="crd-td"><strong>East Asian Regional Frontier Buffer Register</strong></td><td class="crd-td">1.234</td><td class="crd-td">1,21%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Component archaeological, heritage and historical gazetteer registries aggregated into the regional kriging domain.</figcaption>
</figure>

# Results

## Early Meiji Consolidation and Demographic Awakening (1868AD to 1890AD)

Following the Boshin War and imperial restoration in 1868AD, Japan entered a period of rapid demographic invigoration (Figure \ref{fig:traj-meiji}). Between 1868AD and 1890AD, total population expanded by 19,1%, growing from 33,27M to 39,64M (Table \ref{tab:validation-meiji}) [@Kito2000Jinko; @Yamamura1988Meiji].

<figure class="crd-figure-block" id="fig:traj-meiji">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-meiji-and-imperial-japan/fig2_meiji_and_imperial_japan_trajectory.png" alt="fig:traj-meiji" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Imperial Japan from 1868AD to 1945AD across macro-regional divisions with historical confidence intervals.</figcaption>
</figure>

This early expansion was spurred by several institutional factors. The abolition of feudal restrictions on peasant movement allowed rural families to seek seasonal employment in expanding regional towns [@Yamamura1988Meiji; @Rozman1988Castle]. The introduction of compulsory smallpox vaccination programmes, quarantine regulations and rudimentary public water filtering curtailed catastrophic epidemic mortality waves that had periodically decimated Edo-period populations [@Kito2000Jinko; @Wilson2020Importance]. In addition, the pacification of feudal conflicts and the elimination of internal transit barriers (*sekisho*) allowed nationwide food distribution during regional crop failures, terminating the recurrent agrarian famines that had characterized the eighteenth century [@Kito2000Jinko; @Yamamura1988Meiji].

By 1890AD, Niigata remained the most populous prefecture in Japan with 1,72M inhabitants (Table \ref{tab:regions-meiji}), reflecting the immense productivity of its Echigo rice plains, followed closely by Tokyo (1,63M), Hyogo (1,57M), Aichi (1,56M), Fukuoka (1,47M), Osaka (1,39M) and Hiroshima (1,33M) [@Kito2000Jinko; @NSTAC2026SSDSE]. In the north, Hokkaido more than quadrupled from 111k in 1872AD to 427k in 1890AD as *tondenhei* settlements expanded across the Oshima peninsula and Ishikari valley [@Walker2001ConquestAinu; @Kito2000Jinko].

## High Meiji Industrialisation and Frontier Colonisation (1890AD to 1910AD)

Between 1890AD and 1910AD, Japan experienced twenty years of rapid industrialisation and military expansion, growing by 23,9% from 39,64M to 49,13M (Table \ref{tab:validation-meiji}) [@Kito2000Jinko; @Swale2009Japan; @Nakamura1989Depression].

<figure class="crd-figure-block" id="fig:shares-meiji">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-meiji-and-imperial-japan/fig3_meiji_and_imperial_japan_shares.png" alt="fig:shares-meiji" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Prefectural population shares and comparative peak versus 1945AD terminal totals across the 47 Japanese prefectures.</figcaption>
</figure>

During this era, Japan defeated Qing China in the First Sino-Japanese War (1894AD to 1895AD) and imperial Russia in the Russo-Japanese War (1904AD to 1905AD), annexing Taiwan in 1895AD, southern Sakhalin (Karafuto) in 1905AD, and Korea in 1910AD [@Swale2009Japan; @Nakamura1989Depression]. The war indemnities extracted from China, notably 230M Kuping taels of silver, were directed into establishing the gold standard, constructing trunk railway networks, and erecting heavy munitions and steel plants [@Swale2009Japan; @Nakamura1989Depression].

Demographically, industrialisation reoriented migration flows from rural agrarian valleys toward the expanding factory belts of the Pacific Coast [@Swale2009Japan; @Rozman1988Castle]. Young female textile workers from Nagano, Niigata and Gifu migrated to silk filatures in Suwa and cotton spinning mills in Osaka, while male labourers clustered around heavy industrial works in Tokyo, Yokohama, Kobe and northern Kyushu [@Swale2009Japan; @Rozman1988Castle; @Nakamura1989Depression]. By 1910AD, Tokyo reached 2,9M, surpassing Niigata (1,87M) as the premier population centre of the empire, while Osaka climbed to 2,16M, Hyogo to 2,05M, and Aichi to 1,86M [@Kito2000Jinko; @NSTAC2026SSDSE]. In Hokkaido, gold rushes, coal extraction in the Yubari ranges, and agricultural homesteading lifted population to 1,61M by 1910AD [@Walker2001ConquestAinu; @Kito2000Jinko].

<figure class="crd-table-figure" id="tab:regions-meiji">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Prefecture</th><th class="crd-th">Area (km²)</th><th class="crd-th">1868AD</th><th class="crd-th">1872AD</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1930AD</th><th class="crd-th">1940AD</th><th class="crd-th">1945AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aichi</strong></td><td class="crd-td">3.905</td><td class="crd-td">1,34M</td><td class="crd-td">1,4M</td><td class="crd-td">1,68M</td><td class="crd-td">2,09M</td><td class="crd-td">2,52M</td><td class="crd-td">2,99M</td><td class="crd-td">2,9M</td></tr>
<tr><td class="crd-td"><strong>Akita</strong></td><td class="crd-td">10.460</td><td class="crd-td">493,3k</td><td class="crd-td">510,5k</td><td class="crd-td">600,9k</td><td class="crd-td">732,6k</td><td class="crd-td">813,7k</td><td class="crd-td">891,3k</td><td class="crd-td">960,2k</td></tr>
<tr><td class="crd-td"><strong>Aomori</strong></td><td class="crd-td">11.300</td><td class="crd-td">602,3k</td><td class="crd-td">623,2k</td><td class="crd-td">733,6k</td><td class="crd-td">894,4k</td><td class="crd-td">993,3k</td><td class="crd-td">1,09M</td><td class="crd-td">1,17M</td></tr>
<tr><td class="crd-td"><strong>Chiba</strong></td><td class="crd-td">4.393</td><td class="crd-td">1,13M</td><td class="crd-td">1,16M</td><td class="crd-td">1,21M</td><td class="crd-td">1,35M</td><td class="crd-td">1,43M</td><td class="crd-td">1,48M</td><td class="crd-td">1,97M</td></tr>
<tr><td class="crd-td"><strong>Ehime</strong></td><td class="crd-td">5.375</td><td class="crd-td">612,4k</td><td class="crd-td">633,7k</td><td class="crd-td">746k</td><td class="crd-td">909,5k</td><td class="crd-td">1,01M</td><td class="crd-td">1,11M</td><td class="crd-td">1,19M</td></tr>
<tr><td class="crd-td"><strong>Fukui</strong></td><td class="crd-td">3.116</td><td class="crd-td">336,2k</td><td class="crd-td">347,8k</td><td class="crd-td">409,5k</td><td class="crd-td">499,2k</td><td class="crd-td">554,4k</td><td class="crd-td">607,3k</td><td class="crd-td">654,2k</td></tr>
<tr><td class="crd-td"><strong>Fukuoka</strong></td><td class="crd-td">4.416</td><td class="crd-td">1,16M</td><td class="crd-td">1,22M</td><td class="crd-td">1,66M</td><td class="crd-td">2,21M</td><td class="crd-td">2,56M</td><td class="crd-td">2,93M</td><td class="crd-td">2,83M</td></tr>
<tr><td class="crd-td"><strong>Fukushima</strong></td><td class="crd-td">11.849</td><td class="crd-td">867,2k</td><td class="crd-td">897,4k</td><td class="crd-td">1,06M</td><td class="crd-td">1,29M</td><td class="crd-td">1,43M</td><td class="crd-td">1,57M</td><td class="crd-td">1,69M</td></tr>
<tr><td class="crd-td"><strong>Gifu</strong></td><td class="crd-td">10.108</td><td class="crd-td">854,6k</td><td class="crd-td">884,3k</td><td class="crd-td">1,04M</td><td class="crd-td">1,27M</td><td class="crd-td">1,41M</td><td class="crd-td">1,54M</td><td class="crd-td">1,66M</td></tr>
<tr><td class="crd-td"><strong>Gunma</strong></td><td class="crd-td">4.515</td><td class="crd-td">814,4k</td><td class="crd-td">842,7k</td><td class="crd-td">992k</td><td class="crd-td">1,21M</td><td class="crd-td">1,34M</td><td class="crd-td">1,47M</td><td class="crd-td">1,59M</td></tr>
<tr><td class="crd-td"><strong>Hiroshima</strong></td><td class="crd-td">8.043</td><td class="crd-td">1,17M</td><td class="crd-td">1,21M</td><td class="crd-td">1,43M</td><td class="crd-td">1,74M</td><td class="crd-td">1,93M</td><td class="crd-td">2,12M</td><td class="crd-td">2,28M</td></tr>
<tr><td class="crd-td"><strong>Hokkaidō</strong></td><td class="crd-td">80.208</td><td class="crd-td">58k</td><td class="crd-td">111,2k</td><td class="crd-td">985,3k</td><td class="crd-td">2,36M</td><td class="crd-td">2,81M</td><td class="crd-td">3,27M</td><td class="crd-td">3,52M</td></tr>
<tr><td class="crd-td"><strong>Hyōgo</strong></td><td class="crd-td">7.169</td><td class="crd-td">1,38M</td><td class="crd-td">1,44M</td><td class="crd-td">1,78M</td><td class="crd-td">2,25M</td><td class="crd-td">2,62M</td><td class="crd-td">3M</td><td class="crd-td">2,85M</td></tr>
<tr><td class="crd-td"><strong>Ibaraki</strong></td><td class="crd-td">6.624</td><td class="crd-td">1,2M</td><td class="crd-td">1,24M</td><td class="crd-td">1,46M</td><td class="crd-td">1,78M</td><td class="crd-td">1,98M</td><td class="crd-td">2,17M</td><td class="crd-td">2,34M</td></tr>
<tr><td class="crd-td"><strong>Ishikawa</strong></td><td class="crd-td">4.871</td><td class="crd-td">479,7k</td><td class="crd-td">496,3k</td><td class="crd-td">584,3k</td><td class="crd-td">712,4k</td><td class="crd-td">791,1k</td><td class="crd-td">866,6k</td><td class="crd-td">933,6k</td></tr>
<tr><td class="crd-td"><strong>Iwate</strong></td><td class="crd-td">16.371</td><td class="crd-td">577k</td><td class="crd-td">597k</td><td class="crd-td">702,8k</td><td class="crd-td">856,9k</td><td class="crd-td">951,7k</td><td class="crd-td">1,04M</td><td class="crd-td">1,12M</td></tr>
<tr><td class="crd-td"><strong>Kagawa</strong></td><td class="crd-td">2.465</td><td class="crd-td">417,5k</td><td class="crd-td">432k</td><td class="crd-td">508,5k</td><td class="crd-td">620k</td><td class="crd-td">688,5k</td><td class="crd-td">754,2k</td><td class="crd-td">812,5k</td></tr>
<tr><td class="crd-td"><strong>Kagoshima</strong></td><td class="crd-td">7.493</td><td class="crd-td">729,3k</td><td class="crd-td">754,6k</td><td class="crd-td">888,3k</td><td class="crd-td">1,08M</td><td class="crd-td">1,2M</td><td class="crd-td">1,32M</td><td class="crd-td">1,42M</td></tr>
<tr><td class="crd-td"><strong>Kanagawa</strong></td><td class="crd-td">1.600</td><td class="crd-td">645,5k</td><td class="crd-td">687,7k</td><td class="crd-td">972,4k</td><td class="crd-td">1,33M</td><td class="crd-td">1,68M</td><td class="crd-td">2,06M</td><td class="crd-td">1,88M</td></tr>
<tr><td class="crd-td"><strong>Kumamoto</strong></td><td class="crd-td">7.782</td><td class="crd-td">756k</td><td class="crd-td">782,2k</td><td class="crd-td">920,8k</td><td class="crd-td">1,12M</td><td class="crd-td">1,25M</td><td class="crd-td">1,37M</td><td class="crd-td">1,47M</td></tr>
<tr><td class="crd-td"><strong>Kyōto</strong></td><td class="crd-td">4.958</td><td class="crd-td">1,07M</td><td class="crd-td">1,11M</td><td class="crd-td">1,3M</td><td class="crd-td">1,59M</td><td class="crd-td">1,76M</td><td class="crd-td">1,93M</td><td class="crd-td">2,08M</td></tr>
<tr><td class="crd-td"><strong>Kōchi</strong></td><td class="crd-td">7.118</td><td class="crd-td">332k</td><td class="crd-td">343,5k</td><td class="crd-td">404,4k</td><td class="crd-td">493k</td><td class="crd-td">547,5k</td><td class="crd-td">599,8k</td><td class="crd-td">646,1k</td></tr>
<tr><td class="crd-td"><strong>Mie</strong></td><td class="crd-td">5.078</td><td class="crd-td">748,5k</td><td class="crd-td">774,5k</td><td class="crd-td">911,7k</td><td class="crd-td">1,11M</td><td class="crd-td">1,23M</td><td class="crd-td">1,35M</td><td class="crd-td">1,46M</td></tr>
<tr><td class="crd-td"><strong>Miyagi</strong></td><td class="crd-td">7.890</td><td class="crd-td">946,6k</td><td class="crd-td">979,5k</td><td class="crd-td">1,15M</td><td class="crd-td">1,41M</td><td class="crd-td">1,56M</td><td class="crd-td">1,71M</td><td class="crd-td">1,84M</td></tr>
<tr><td class="crd-td"><strong>Miyazaki</strong></td><td class="crd-td">8.827</td><td class="crd-td">477,9k</td><td class="crd-td">494,5k</td><td class="crd-td">582,2k</td><td class="crd-td">709,8k</td><td class="crd-td">788,3k</td><td class="crd-td">863,5k</td><td class="crd-td">930,2k</td></tr>
<tr><td class="crd-td"><strong>Nagano</strong></td><td class="crd-td">13.558</td><td class="crd-td">890,9k</td><td class="crd-td">921,9k</td><td class="crd-td">1,09M</td><td class="crd-td">1,32M</td><td class="crd-td">1,47M</td><td class="crd-td">1,61M</td><td class="crd-td">1,73M</td></tr>
<tr><td class="crd-td"><strong>Nagasaki</strong></td><td class="crd-td">5.544</td><td class="crd-td">628k</td><td class="crd-td">649,8k</td><td class="crd-td">764,9k</td><td class="crd-td">932,6k</td><td class="crd-td">1,04M</td><td class="crd-td">1,13M</td><td class="crd-td">1,22M</td></tr>
<tr><td class="crd-td"><strong>Nara</strong></td><td class="crd-td">3.929</td><td class="crd-td">581,6k</td><td class="crd-td">601,8k</td><td class="crd-td">708,4k</td><td class="crd-td">863,7k</td><td class="crd-td">959,3k</td><td class="crd-td">1,05M</td><td class="crd-td">1,13M</td></tr>
<tr><td class="crd-td"><strong>Niigata</strong></td><td class="crd-td">14.608</td><td class="crd-td">1,01M</td><td class="crd-td">1,05M</td><td class="crd-td">1,23M</td><td class="crd-td">1,5M</td><td class="crd-td">1,67M</td><td class="crd-td">1,83M</td><td class="crd-td">1,97M</td></tr>
<tr><td class="crd-td"><strong>Okayama</strong></td><td class="crd-td">6.892</td><td class="crd-td">792,9k</td><td class="crd-td">820,5k</td><td class="crd-td">965,8k</td><td class="crd-td">1,18M</td><td class="crd-td">1,31M</td><td class="crd-td">1,43M</td><td class="crd-td">1,54M</td></tr>
<tr><td class="crd-td"><strong>Okinawa</strong></td><td class="crd-td">4.509</td><td class="crd-td">155k</td><td class="crd-td">167,1k</td><td class="crd-td">460,2k</td><td class="crd-td">571,6k</td><td class="crd-td">577,5k</td><td class="crd-td">574,6k</td><td class="crd-td">580k</td></tr>
<tr><td class="crd-td"><strong>Saga</strong></td><td class="crd-td">3.606</td><td class="crd-td">359,5k</td><td class="crd-td">371,9k</td><td class="crd-td">437,8k</td><td class="crd-td">533,8k</td><td class="crd-td">592,9k</td><td class="crd-td">649,4k</td><td class="crd-td">699,6k</td></tr>
<tr><td class="crd-td"><strong>Saitama</strong></td><td class="crd-td">4.130</td><td class="crd-td">915,8k</td><td class="crd-td">946k</td><td class="crd-td">1,1M</td><td class="crd-td">1,33M</td><td class="crd-td">1,43M</td><td class="crd-td">1,51M</td><td class="crd-td">2,1M</td></tr>
<tr><td class="crd-td"><strong>Shiga</strong></td><td class="crd-td">5.039</td><td class="crd-td">523,1k</td><td class="crd-td">541,3k</td><td class="crd-td">637,2k</td><td class="crd-td">776,9k</td><td class="crd-td">862,8k</td><td class="crd-td">945,1k</td><td class="crd-td">1,02M</td></tr>
<tr><td class="crd-td"><strong>Shimane</strong></td><td class="crd-td">7.380</td><td class="crd-td">313,6k</td><td class="crd-td">324,5k</td><td class="crd-td">381,9k</td><td class="crd-td">465,7k</td><td class="crd-td">517,2k</td><td class="crd-td">566,5k</td><td class="crd-td">610,3k</td></tr>
<tr><td class="crd-td"><strong>Shizuoka</strong></td><td class="crd-td">7.439</td><td class="crd-td">1,52M</td><td class="crd-td">1,57M</td><td class="crd-td">1,85M</td><td class="crd-td">2,26M</td><td class="crd-td">2,51M</td><td class="crd-td">2,74M</td><td class="crd-td">2,96M</td></tr>
<tr><td class="crd-td"><strong>Tochigi</strong></td><td class="crd-td">7.967</td><td class="crd-td">806,6k</td><td class="crd-td">834,6k</td><td class="crd-td">982,5k</td><td class="crd-td">1,2M</td><td class="crd-td">1,33M</td><td class="crd-td">1,46M</td><td class="crd-td">1,57M</td></tr>
<tr><td class="crd-td"><strong>Tokushima</strong></td><td class="crd-td">5.519</td><td class="crd-td">338,4k</td><td class="crd-td">350,1k</td><td class="crd-td">412,1k</td><td class="crd-td">502,5k</td><td class="crd-td">558,1k</td><td class="crd-td">611,3k</td><td class="crd-td">658,5k</td></tr>
<tr><td class="crd-td"><strong>Tokyo</strong></td><td class="crd-td">2.674</td><td class="crd-td">886,2k</td><td class="crd-td">1,04M</td><td class="crd-td">2,28M</td><td class="crd-td">3,69M</td><td class="crd-td">5,2M</td><td class="crd-td">6,92M</td><td class="crd-td">3,52M</td></tr>
<tr><td class="crd-td"><strong>Tottori</strong></td><td class="crd-td">5.740</td><td class="crd-td">250k</td><td class="crd-td">258,6k</td><td class="crd-td">304,5k</td><td class="crd-td">371,2k</td><td class="crd-td">412,3k</td><td class="crd-td">451,6k</td><td class="crd-td">486,5k</td></tr>
<tr><td class="crd-td"><strong>Toyama</strong></td><td class="crd-td">6.052</td><td class="crd-td">456,5k</td><td class="crd-td">472,4k</td><td class="crd-td">556,1k</td><td class="crd-td">678k</td><td class="crd-td">753k</td><td class="crd-td">824,8k</td><td class="crd-td">888,5k</td></tr>
<tr><td class="crd-td"><strong>Wakayama</strong></td><td class="crd-td">4.452</td><td class="crd-td">439,2k</td><td class="crd-td">454,4k</td><td class="crd-td">534,9k</td><td class="crd-td">652,2k</td><td class="crd-td">724,3k</td><td class="crd-td">793,4k</td><td class="crd-td">854,7k</td></tr>
<tr><td class="crd-td"><strong>Yamagata</strong></td><td class="crd-td">11.517</td><td class="crd-td">510,9k</td><td class="crd-td">528,7k</td><td class="crd-td">622,3k</td><td class="crd-td">758,8k</td><td class="crd-td">842,7k</td><td class="crd-td">923,1k</td><td class="crd-td">994,4k</td></tr>
<tr><td class="crd-td"><strong>Yamaguchi</strong></td><td class="crd-td">7.213</td><td class="crd-td">632,3k</td><td class="crd-td">654,3k</td><td class="crd-td">770,2k</td><td class="crd-td">939k</td><td class="crd-td">1,04M</td><td class="crd-td">1,14M</td><td class="crd-td">1,23M</td></tr>
<tr><td class="crd-td"><strong>Yamanashi</strong></td><td class="crd-td">5.968</td><td class="crd-td">358,5k</td><td class="crd-td">371k</td><td class="crd-td">436,7k</td><td class="crd-td">532,4k</td><td class="crd-td">591,3k</td><td class="crd-td">647,7k</td><td class="crd-td">697,8k</td></tr>
<tr><td class="crd-td"><strong>Ōita</strong></td><td class="crd-td">8.449</td><td class="crd-td">500,5k</td><td class="crd-td">517,9k</td><td class="crd-td">609,6k</td><td class="crd-td">743,3k</td><td class="crd-td">825,5k</td><td class="crd-td">904,2k</td><td class="crd-td">974,1k</td></tr>
<tr><td class="crd-td"><strong>Ōsaka</strong></td><td class="crd-td">2.733</td><td class="crd-td">1,19M</td><td class="crd-td">1,28M</td><td class="crd-td">1,87M</td><td class="crd-td">2,6M</td><td class="crd-td">3,52M</td><td class="crd-td">4,55M</td><td class="crd-td">2,89M</td></tr>
<tr><td class="crd-td"><strong>National Total</strong></td><td class="crd-td">390.852</td><td class="crd-td">33,27M</td><td class="crd-td">34,7M</td><td class="crd-td">43,72M</td><td class="crd-td">55,99M</td><td class="crd-td">64,58M</td><td class="crd-td">73,36M</td><td class="crd-td">72,53M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Prefectural population benchmarks across 47 prefectures, 1868AD to 1945AD, calculated from regional JSON registers.</figcaption>
</figure>

## The Interwar Zenith and Modern Census Era (1910AD to 1940AD)

Between 1910AD and 1940AD, Japan experienced its most intense phase of demographic modernisation and metropolitan expansion, growing by 49,3% from 49,13M to 73,36M (Table \ref{tab:validation-meiji}) [@Kito2000Jinko; @SBJ2021Census; @Nakamura1989Depression].

The inaugural 1920AD Kokusei Chosa census recorded 55,99M people [@SBJ2021Census]. Three years later, on 1 September 1923, the Great Kanto Earthquake devastated Tokyo, Yokohama and surrounding districts, killing over 105k people through structural collapse and vast firestorms [@Rozman1988Castle; @Swale2009Japan]. Despite immense physical destruction, reconstruction under Home Minister Goto Shimpei modernised metropolitan infrastructure: wider boulevards, firebreaks, modern concrete bridges and electrified suburban railway arteries (such as the Yamanote loop and private suburban lines) accelerated decentralisation toward suburban wards [@Rozman1988Castle; @Swale2009Japan].

By 1930AD, population reached 64,58M, despite the economic dislocations of the Showa Depression and rural crop crises in Tohoku [@Nakamura1989Depression; @Doblhammer2013Economic]. Following the Manchurian Incident in 1931AD and the outbreak of the Second Sino-Japanese War in 1937AD, the state shifted the economy toward total wartime mobilisation under the National Mobilisation Law (*Kokka Sodoin-ho*) of 1938AD [@Nakamura1989Depression; @Nakamura1997Depression]. Heavy chemical, machinery, aircraft and naval armament industries expanded across the Keihin, Hanshin, Chukyo and Kitakyushu zones, absorbing millions of rural youths into industrial production [@Nakamura1989Depression; @Swale2009Japan].

By the 1940AD census, Japan reached its pre-war demographic peak of 73.355.821 persons (Table \ref{tab:regions-meiji}) [@SBJ2021Census; @Kito2000Jinko]. Tokyo Prefecture held 7,35M residents (with Tokyo City proper containing 6,78M), exhibiting average densities of 2.862 persons per km² across its entire territory [@Rozman1988Castle; @NSTAC2026SSDSE]. Osaka Prefecture attained 4,79M (with Osaka City holding 3,25M, at 2.182 persons per km²), Hyogo reached 3,22M, Hokkaido expanded to 3,27M, Aichi to 2,99M, and Fukuoka to 2,93M [@NSTAC2026SSDSE; @Kito2000Jinko].

## The Pacific War and Demographic Cataclysm (1940AD to 1945AD)

The five years between 1940AD and late 1945AD brought immense human losses and catastrophic urban destruction (Figure \ref{fig:traj-meiji}) [@Nakamura1989Depression; @Nakamura1997Depression; @Kito2000Jinko]. Following the attack on Pearl Harbor in December 1941, the Japanese empire mobilised over 7,4M soldiers and sailors across the Pacific and Asian theatres [@Nakamura1989Depression]. By 1944AD, extensive Allied naval submarine blockades cut maritime trade routes from Southeast Asia, causing severe domestic shortages of petroleum, iron ore, chemical fertilizers and staple foodstuffs [@Nakamura1989Depression; @Nakamura1997Depression].

Beginning in late 1944AD and intensifying through mid-1945AD, the United States Army Air Forces subjected Japanese cities to systematic low-altitude incendiary bombing raids [@Nakamura1989Depression; @Kito2000Jinko]. The Operation Meetinghouse firebombing of Tokyo on 9-10 March 1945 destroyed 41 km² of dense wooden urban fabric, incinerating over 100k civilians in a single night and leaving more than one million homeless [@Rozman1988Castle; @Nakamura1989Depression]. Subsequent incendiary campaigns ravaged Osaka, Nagoya, Kobe, Yokohama, Sendai, Shizuoka, Toyama (99% destroyed) and Fukui [@Nakamura1989Depression; @Rozman1988Castle].

On 6 August 1945, the first atomic bomb was detonated over Hiroshima, instantly killing approximately 70k to 80k civilians and soldiers, with total fatalities exceeding 140k by the end of 1945 due to severe blast injuries, flash burns and acute radiation sickness [@Kito2000Jinko; @Nakamura1989Depression]. Three days later, on 9 August 1945, a second atomic bomb was dropped on Nagasaki, killing an estimated 40k to 70k persons [@Kito2000Jinko; @Nakamura1989Depression]. Concurrently, the Battle of Okinawa (April to June 1945) resulted in catastrophic ground warfare, claiming the lives of over 100k Okinawan civilians---approximately one quarter to one third of the prefecture's pre-war population---alongside 100k Japanese and 12k Allied military casualties [@Smits2019MaritimeRyukyu; @Kito2000Jinko].

The territorial demographic impact of the war was characterized by extreme urban de-densification and rural dispersal (Table \ref{tab:regions-meiji}) [@Kito2000Jinko; @SBJ2021Census]:
- Tokyo contracted by an unprecedented 52,7%, crashing from 7,35M in 1940AD to 3,48M in 1945AD, as over four million urban residents evacuated (*sokai*) to rural relatives or fled bombed ruins.
- Osaka Prefecture plummeted by 41,5%, falling from 4,79M to 2,8M (with Osaka City proper collapsing from 3,25M to 1,1M).
- Aichi declined by 3%, with Nagoya City proper losing more than half its inhabitants from 1,33M to 598k.
- Hyogo fell by 12,5%, from 3,22M to 2,82M, with Kobe City dropping from 967k to 379k.
- Hiroshima City contracted by 60,1%, from 344k in 1940AD to 137k in November 1945.
- Conversely, agrarian interior prefectures absorbing evacuated urbanites and demobilised troops experienced substantial temporary population surges: Nagano grew from 1,71M to 2,12M (+23,9%), Niigata from 2,06M to 2,39M (+15,7%), Fukushima from 1,57M to 1,69M (+7,7%), Gunma from 1,47M to 1,59M (+7,7%), and Chiba from 1,48M to 1,97M (+33%).

Overall home island population stood at 72.527.044 in the Allied census of 1 November 1945 [@SBJ2021Census; @Kito2000Jinko]. Across the entire conflict, Japan suffered an estimated 2,1M to 2,3M military fatalities and approximately 800k civilian deaths from aerial bombardment, atomic strikes, malnutrition and ground combat [@Nakamura1989Depression; @Nakamura1997Depression; @Kito2000Jinko].

<figure class="crd-table-figure" id="tab:density-meiji">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Prefecture</th><th class="crd-th">Sites</th><th class="crd-th">1872AD</th><th class="crd-th">1940AD</th><th class="crd-th">1940AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aichi</strong></td><td class="crd-td">62</td><td class="crd-td">1,4M</td><td class="crd-td">2,99M</td><td class="crd-td">765,4</td></tr>
<tr><td class="crd-td"><strong>Akita</strong></td><td class="crd-td">37</td><td class="crd-td">510,5k</td><td class="crd-td">891,3k</td><td class="crd-td">85,2</td></tr>
<tr><td class="crd-td"><strong>Aomori</strong></td><td class="crd-td">52</td><td class="crd-td">623,2k</td><td class="crd-td">1,09M</td><td class="crd-td">96,3</td></tr>
<tr><td class="crd-td"><strong>Chiba</strong></td><td class="crd-td">71</td><td class="crd-td">1,16M</td><td class="crd-td">1,48M</td><td class="crd-td">337,4</td></tr>
<tr><td class="crd-td"><strong>Ehime</strong></td><td class="crd-td">25</td><td class="crd-td">633,7k</td><td class="crd-td">1,11M</td><td class="crd-td">205,9</td></tr>
<tr><td class="crd-td"><strong>Fukui</strong></td><td class="crd-td">25</td><td class="crd-td">347,8k</td><td class="crd-td">607,3k</td><td class="crd-td">194,9</td></tr>
<tr><td class="crd-td"><strong>Fukuoka</strong></td><td class="crd-td">67</td><td class="crd-td">1,22M</td><td class="crd-td">2,93M</td><td class="crd-td">662,4</td></tr>
<tr><td class="crd-td"><strong>Fukushima</strong></td><td class="crd-td">81</td><td class="crd-td">897,4k</td><td class="crd-td">1,57M</td><td class="crd-td">132,2</td></tr>
<tr><td class="crd-td"><strong>Gifu</strong></td><td class="crd-td">52</td><td class="crd-td">884,3k</td><td class="crd-td">1,54M</td><td class="crd-td">152,7</td></tr>
<tr><td class="crd-td"><strong>Gunma</strong></td><td class="crd-td">33</td><td class="crd-td">842,7k</td><td class="crd-td">1,47M</td><td class="crd-td">325,9</td></tr>
<tr><td class="crd-td"><strong>Hiroshima</strong></td><td class="crd-td">35</td><td class="crd-td">1,21M</td><td class="crd-td">2,12M</td><td class="crd-td">263,1</td></tr>
<tr><td class="crd-td"><strong>Hokkaidō</strong></td><td class="crd-td">222</td><td class="crd-td">111,2k</td><td class="crd-td">3,27M</td><td class="crd-td">40,8</td></tr>
<tr><td class="crd-td"><strong>Hyōgo</strong></td><td class="crd-td">61</td><td class="crd-td">1,44M</td><td class="crd-td">3M</td><td class="crd-td">418,1</td></tr>
<tr><td class="crd-td"><strong>Ibaraki</strong></td><td class="crd-td">69</td><td class="crd-td">1,24M</td><td class="crd-td">2,17M</td><td class="crd-td">327,7</td></tr>
<tr><td class="crd-td"><strong>Ishikawa</strong></td><td class="crd-td">31</td><td class="crd-td">496,3k</td><td class="crd-td">866,6k</td><td class="crd-td">177,9</td></tr>
<tr><td class="crd-td"><strong>Iwate</strong></td><td class="crd-td">50</td><td class="crd-td">597k</td><td class="crd-td">1,04M</td><td class="crd-td">63,7</td></tr>
<tr><td class="crd-td"><strong>Kagawa</strong></td><td class="crd-td">23</td><td class="crd-td">432k</td><td class="crd-td">754,2k</td><td class="crd-td">306</td></tr>
<tr><td class="crd-td"><strong>Kagoshima</strong></td><td class="crd-td">56</td><td class="crd-td">754,6k</td><td class="crd-td">1,32M</td><td class="crd-td">175,8</td></tr>
<tr><td class="crd-td"><strong>Kanagawa</strong></td><td class="crd-td">37</td><td class="crd-td">687,7k</td><td class="crd-td">2,06M</td><td class="crd-td">1.289,6</td></tr>
<tr><td class="crd-td"><strong>Kumamoto</strong></td><td class="crd-td">69</td><td class="crd-td">782,2k</td><td class="crd-td">1,37M</td><td class="crd-td">175,5</td></tr>
<tr><td class="crd-td"><strong>Kyōto</strong></td><td class="crd-td">24</td><td class="crd-td">1,11M</td><td class="crd-td">1,93M</td><td class="crd-td">389,5</td></tr>
<tr><td class="crd-td"><strong>Kōchi</strong></td><td class="crd-td">50</td><td class="crd-td">343,5k</td><td class="crd-td">599,8k</td><td class="crd-td">84,3</td></tr>
<tr><td class="crd-td"><strong>Mie</strong></td><td class="crd-td">48</td><td class="crd-td">774,5k</td><td class="crd-td">1,35M</td><td class="crd-td">266,3</td></tr>
<tr><td class="crd-td"><strong>Miyagi</strong></td><td class="crd-td">51</td><td class="crd-td">979,5k</td><td class="crd-td">1,71M</td><td class="crd-td">216,7</td></tr>
<tr><td class="crd-td"><strong>Miyazaki</strong></td><td class="crd-td">43</td><td class="crd-td">494,5k</td><td class="crd-td">863,5k</td><td class="crd-td">97,8</td></tr>
<tr><td class="crd-td"><strong>Nagano</strong></td><td class="crd-td">94</td><td class="crd-td">921,9k</td><td class="crd-td">1,61M</td><td class="crd-td">118,7</td></tr>
<tr><td class="crd-td"><strong>Nagasaki</strong></td><td class="crd-td">26</td><td class="crd-td">649,8k</td><td class="crd-td">1,13M</td><td class="crd-td">204,6</td></tr>
<tr><td class="crd-td"><strong>Nara</strong></td><td class="crd-td">44</td><td class="crd-td">601,8k</td><td class="crd-td">1,05M</td><td class="crd-td">267,4</td></tr>
<tr><td class="crd-td"><strong>Niigata</strong></td><td class="crd-td">56</td><td class="crd-td">1,05M</td><td class="crd-td">1,83M</td><td class="crd-td">125,1</td></tr>
<tr><td class="crd-td"><strong>Okayama</strong></td><td class="crd-td">38</td><td class="crd-td">820,5k</td><td class="crd-td">1,43M</td><td class="crd-td">207,9</td></tr>
<tr><td class="crd-td"><strong>Okinawa</strong></td><td class="crd-td">63</td><td class="crd-td">167,1k</td><td class="crd-td">574,6k</td><td class="crd-td">127,4</td></tr>
<tr><td class="crd-td"><strong>Saga</strong></td><td class="crd-td">40</td><td class="crd-td">371,9k</td><td class="crd-td">649,4k</td><td class="crd-td">180,1</td></tr>
<tr><td class="crd-td"><strong>Saitama</strong></td><td class="crd-td">87</td><td class="crd-td">946k</td><td class="crd-td">1,51M</td><td class="crd-td">365</td></tr>
<tr><td class="crd-td"><strong>Shiga</strong></td><td class="crd-td">35</td><td class="crd-td">541,3k</td><td class="crd-td">945,1k</td><td class="crd-td">187,6</td></tr>
<tr><td class="crd-td"><strong>Shimane</strong></td><td class="crd-td">26</td><td class="crd-td">324,5k</td><td class="crd-td">566,5k</td><td class="crd-td">76,8</td></tr>
<tr><td class="crd-td"><strong>Shizuoka</strong></td><td class="crd-td">69</td><td class="crd-td">1,57M</td><td class="crd-td">2,74M</td><td class="crd-td">369</td></tr>
<tr><td class="crd-td"><strong>Tochigi</strong></td><td class="crd-td">50</td><td class="crd-td">834,6k</td><td class="crd-td">1,46M</td><td class="crd-td">182,9</td></tr>
<tr><td class="crd-td"><strong>Tokushima</strong></td><td class="crd-td">38</td><td class="crd-td">350,1k</td><td class="crd-td">611,3k</td><td class="crd-td">110,8</td></tr>
<tr><td class="crd-td"><strong>Tokyo</strong></td><td class="crd-td">111</td><td class="crd-td">1,04M</td><td class="crd-td">6,92M</td><td class="crd-td">2.586,7</td></tr>
<tr><td class="crd-td"><strong>Tottori</strong></td><td class="crd-td">30</td><td class="crd-td">258,6k</td><td class="crd-td">451,6k</td><td class="crd-td">78,7</td></tr>
<tr><td class="crd-td"><strong>Toyama</strong></td><td class="crd-td">28</td><td class="crd-td">472,4k</td><td class="crd-td">824,8k</td><td class="crd-td">136,3</td></tr>
<tr><td class="crd-td"><strong>Wakayama</strong></td><td class="crd-td">38</td><td class="crd-td">454,4k</td><td class="crd-td">793,4k</td><td class="crd-td">178,2</td></tr>
<tr><td class="crd-td"><strong>Yamagata</strong></td><td class="crd-td">49</td><td class="crd-td">528,7k</td><td class="crd-td">923,1k</td><td class="crd-td">80,1</td></tr>
<tr><td class="crd-td"><strong>Yamaguchi</strong></td><td class="crd-td">35</td><td class="crd-td">654,3k</td><td class="crd-td">1,14M</td><td class="crd-td">158,4</td></tr>
<tr><td class="crd-td"><strong>Yamanashi</strong></td><td class="crd-td">43</td><td class="crd-td">371k</td><td class="crd-td">647,7k</td><td class="crd-td">108,5</td></tr>
<tr><td class="crd-td"><strong>Ōita</strong></td><td class="crd-td">34</td><td class="crd-td">517,9k</td><td class="crd-td">904,2k</td><td class="crd-td">107</td></tr>
<tr><td class="crd-td"><strong>Ōsaka</strong></td><td class="crd-td">71</td><td class="crd-td">1,28M</td><td class="crd-td">4,55M</td><td class="crd-td">1.663,4</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements, 1872AD and 1940AD population benchmarks, and peak 1940AD density (persons per km²).</figcaption>
</figure>

## Urban Hierarchy and Metropolitan Structure

The demographic modernisation of Meiji and Imperial Japan produced a sophisticated four-tier urban hierarchy (Figure \ref{fig:sett-meiji}) [@Rozman1988Castle; @Swale2009Japan; @Kito2000Jinko]. Across the 1.684 settlements catalogued in this study, total urban inhabitants residing in municipalities exceeding 10k population expanded from 3,2M in 1872AD to over 27,5M by 1940AD, representing an urbanisation ratio expansion from 9,2% to 37,5% [@Kito2000Jinko; @SBJ2021Census].

<figure class="crd-figure-block" id="fig:sett-meiji">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-meiji-and-imperial-japan/fig4_meiji_and_imperial_japan_settlements.png" alt="fig:sett-meiji" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading fifteen prefectural and industrial urban centres across Imperial Japan.</figcaption>
</figure>

At the apex of the national hierarchy stood the primary metropolises [@Rozman1988Castle; @Swale2009Japan; @Nakamura1989Depression]:
1. Tokyo: The imperial capital, which expanded from 780k in 1868AD and 596k in 1872AD to 1,5M in 1900AD, 3,36M in 1920AD, and 6,78M in 1940AD, serving as the financial, corporate, bureaucratic and intellectual core of the empire [@Rozman1988Castle; @Swale2009Japan].
2. Osaka: The premier commercial and manufacturing powerhouse of western Japan, expanding from 290k in 1868AD to 821k in 1900AD, 1,25M in 1920AD, and 3,25M in 1940AD, dominating textiles, metalworking, chemical production and port commerce [@Rozman1988Castle; @Kurosawa2017Rise].
3. Nagoya: The industrial linchpin of the Chukyo region, expanding from 123k in 1868AD to 430k in 1920AD and 1,33M in 1940AD, anchored in porcelain, textile machinery and aircraft production (notably Mitsubishi's Nagoya Works) [@Swale2009Japan; @Rozman1988Castle].
4. Kyoto: The ancient imperial capital, sustaining cultural handicrafts, silk textiles, printing and university education, expanding steadily from 280k in 1868AD to 591k in 1920AD and 1,09M in 1940AD [@Rozman1988Castle; @Swale2009Japan].
5. Yokohama: The premier international seaport of the Kanto plain, expanding from 28k in 1868AD to 423k in 1920AD and 968k in 1940AD, handling silk exports, petroleum refining and heavy automotive engineering [@Swale2009Japan; @Rozman1988Castle].
6. Kobe: The primary deepwater maritime gateway of Kansai, growing from 30k in 1868AD to 609k in 1920AD and 967k in 1940AD, centered on shipbuilding, steel manufacture, rubber fabrication and international trading houses [@Swale2009Japan; @Rozman1988Castle].

The second tier comprised regional industrial and administrative centres [@Rozman1988Castle; @Nakamura1989Depression]:
7. Kitakyushu: The heavy industrial coal and steel hub encompassing Yahata, Moji and Kokura, reaching 750k in 1940AD.
8. Hamamatsu: The mechanical engineering, textile and musical instrument center of Shizuoka, reaching 607k in 1940AD.
9. Hiroshima: The regional military command center of Chugoku, housing the Imperial General Headquarters during the First Sino-Japanese War and the Second Army Headquarters in 1945AD, expanding from 74k in 1868AD to 344k in 1940AD [@Rozman1988Castle; @Kito2000Jinko].
10. Fukuoka: The commercial, financial and cultural metropolis of Kyushu, growing from 42k in 1868AD to 307k in 1940AD [@Rozman1988Castle; @Swale2009Japan].
11. Sapporo: The administrative and educational capital of Hokkaido, founded in 1869AD by the *Kaitakushi*, expanding from 2,6k in 1872AD to 103k in 1920AD and 206k in 1940AD [@Walker2001ConquestAinu; @Kito2000Jinko].
12. Sendai: The military garrison and educational capital of Tohoku, expanding from 52k in 1868AD to 119k in 1920AD and 224k in 1940AD [@Rozman1988Castle; @NSTAC2026SSDSE].

# Sources

<div id="refs"></div>
