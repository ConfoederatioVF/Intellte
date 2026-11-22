---
title: "Demographic Trajectory of Tokugawa Japan, the Ryukyu Kingdom and Ezo"
subtitle: "Bakufu Sexennial Censuses, Castle Towns, Agrarian Frontiers and Famine Shocks, 1603AD to 1868AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: tokugawa_japan_ryukyu_and_ezo_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_tokugawa_japan_ryukyu_and_ezo_spatial.png"
hero_caption: "Administrative macro-regions and primary castle-town settlements across the Japanese archipelago, the Ryukyu Kingdom and Ezo from 1603AD to 1868AD."
hero_label: "fig:hero-tokugawa-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the demographic trajectory, settlement hierarchy and spatial population density of Japan under the Tokugawa Shogunate, the Ryukyu Kingdom and the northern frontier of Ezo from the political unification of 1603AD to the Meiji Restoration of 1868AD. Across eleven macro-regional territories covering 390.852 km² and 6.249 raster cells, total population expanded from 12,27M (12.270.000) in 1603AD to 17,5M (17.500.000) in 1650AD, 27,69M (27.690.000) in 1700AD and 31,28M (31.280.000) at the inauguration of nationwide sexennial censuses under the eighth Shogun Tokugawa Yoshimune in 1721AD [@Hayami2001Historical; @Hayami2010Population; @Sekiyama1958Kinsei; @Kito2000Jinko]. Over the succeeding century and a half, population entered a prolonged demographic plateau characterised by low natural increase, deliberate family limitation, and severe famine mortality during the Little Ice Age, fluctuating between 29,87M (in 1792AD, following the Great Tenmei Famine) and 32,3M (in 1846AD), before terminating at 33,3M (33.300.000) in 1868AD [@Sekiyama1958Kinsei; @Kito2000Jinko; @Anon2021Popular]. To reconcile official commoner registers (*hyakusho* and *chonin*) with total biological headcounts, this study applies systematic adjustments for the unrecorded samurai military class (*buke*, ~1,8M to 2M persons), court aristocracy (*kuge*), clergy, outcaste communities (*hinin* and *burakumin*, ~400k to 500k), and omitted infants [@Sekiyama1958Kinsei; @Hayami2001Historical; @Groemer2021Visual]. Spatial densities are calibrated using Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 384 domestic catchments, 9.123 land cells and 1.078 geocoded settlements led by the tripartite metropolises of Edo (1,05M to 1,1M), Osaka (410k) and Kyoto (390k), complemented by the regional castle towns of Kanazawa, Nagoya, Sendai, Kagoshima and Hiroshima, alongside the peripheral polities of the Ryukyu Kingdom (Shuri and Naha, 39k) and Ezo (Hakodate, 25k) [@Smits2019MaritimeRyukyu; @Walker2001ConquestAinu; @Paciorek2006Matern].

# Background

## Unification and the Early Modern State Order

The demographic history of early modern Japan opened with the consolidation of political hegemony under Tokugawa Ieyasu following the decisive Battle of Sekigahara in 1600AD and his investiture as Shogun by the imperial court in 1603AD [@Hayami2001Historical; @Hayami2010Population]. The establishment of the Tokugawa Shogunate (Bakufu) at Edo brought to a close more than a century of endemic warfare that had characterized the Sengoku period [@Farris2006Medieval; @Farris2009DailyLife]. The institutional framework of the resulting *bakuhan* system combined centralized hegemony exercised by the Bakufu over foreign relations, coinage, mining and military affairs with decentralized administrative autonomy exercised by more than two hundred and fifty regional lords (*daimyo*) over their respective territorial domains (*han*) [@Hayami2001Historical; @Sekiyama1958Kinsei].

To secure social stability, the Tokugawa regime consolidated the status segregation initiated during Toyotomi Hideyoshi's regency [@Hayami2001Historical]. Society was formally divided into hereditary status orders: samurai warriors (*shi*), peasant cultivators (*no*), artisans (*ko*) and merchants (*sho*), supplemented by court aristocrats, religious clergy and marginalized outcaste groups [@Sekiyama1958Kinsei; @Groemer2021Visual; @Anon2021Presence]. The military class was systematically separated from agrarian landholding: samurai were concentrated into the castle towns (*jokamachi*) surrounding their daimyo's fortress, where they drew stipends allocated from domain rice treasuries rather than direct peasant dues [@Hayami2001Historical; @Videen1989Dandy].

The fiscal foundation of both Shogunate and domain governance rested on cadastral land surveys (*kenchi*), which assessed the productive capacity of every agricultural parcel in standardised units of brown rice (*koku*, equivalent to approximately 180 litres or 150 kg, theoretically sufficient to sustain one adult for one year) [@Hayami2001Historical; @Kito2000Jinko]. Peasant village communities (*mura*) were made collectively responsible for tax delivery (*murauke-sei*), binding cultivators to their registered holdings and discouraging unauthorized rural out-migration [@Hayami2001Historical; @Sekiyama1958Kinsei].

## The Shumon Aratame-cho and Religious Inhabitation Registers

The primary administrative instrument for recording local populations in early modern Japan was the religious examination register (*shumon aratame-cho*) [@Hayami2001Historical; @Hayami2010Population]. Following the bloody suppression of the Shimabara Rebellion (1637AD to 1638AD), a rural uprising in southwestern Kyushu sparked by severe fiscal exactions and Christian allegiance, the Bakufu decreed the universal suppression of Christianity and instituted the temple certification system (*terauke*) [@Hayami2001Historical; @Sekiyama1958Kinsei].

Under this system, every household across the archipelago was required to register annually with a local Buddhist temple, whose resident priest attested to the family's orthodox Buddhist affiliation and absence of Christian beliefs [@Hayami2001Historical]. Over the course of the 1660s and 1670s, these temple certification rolls evolved into comprehensive local population registers that recorded each household head, family members, resident servants, age, relationships, livestock holdings and changes resulting from births, marriages, adoptions, deaths and authorised migration [@Hayami2001Historical; @Hayami2010Population].

In the twentieth century, the pioneering historical demographer Hayami Akira recognised that surviving *shumon aratame-cho* series constituted a rich repository of pre-modern micro-data comparable to Western European parish registers [@Hayami2001Historical; @Hayami2010Population]. Through family reconstitution of continuous village series across Shinano, Mino and Owari provinces, Hayami established that early modern Japanese peasant households maintained a distinct demographic regime characterised by moderate marital fertility, active parity regulation, delayed female marriage ages and complex stem-family residential patterns [@Hayami2001Historical].

## The Kyoho Nationwide Sexennial Censuses (1721AD to 1846AD)

Building on the established infrastructure of the *shumon aratame-cho*, the eighth Shogun Tokugawa Yoshimune instituted the first nationwide population census in 1721AD as an integral element of his Kyoho administrative reforms (*Kyoho no kaikaku*) [@Sekiyama1958Kinsei; @Kito2000Jinko]. The Bakufu ordered every daimyo domain, direct Shogunal territory (*tenryo*), and ecclesiastical domain to report aggregate commoner population tallies every six years (sexennial censuses), beginning in 1721AD and repeated at six-year intervals through 1846AD [@Sekiyama1958Kinsei; @Kito2000Jinko].

The official census returns provide a continuous macro-level index of Japan's recorded commoner population across the eighteenth and early nineteenth centuries [@Sekiyama1958Kinsei; @Kito2000Jinko]. The inaugural survey of 1721AD recorded 26.065.422 commoners, rising to a recorded maximum of 26.252.540 in 1726AD [@Sekiyama1958Kinsei]. Subsequent censuses documented the severe demographic impacts of regional famines: recorded commoners fell to 25.084.384 in 1786AD and dipped to 24.891.441 in 1792AD following the Great Tenmei Famine, before experiencing a gradual nineteenth-century recovery to 27.201.400 in 1828AD and 26.907.625 in 1846AD [@Sekiyama1958Kinsei; @Kito2000Jinko; @Anon2021Popular].

## Under-Enumeration and Social Omissions in Bakufu Returns

While the Bakufu sexennial censuses represent a remarkable administrative achievement, modern historical demography demonstrates that raw official tallies substantially understate the true biological population of early modern Japan [@Sekiyama1958Kinsei; @Hayami2001Historical; @Kito2000Jinko]. Official counts were designed for fiscal and ideological supervision rather than demographic enumeration, resulting in several systematic omissions:

First, the entire military class (*buke*) and their resident dependents were excluded from standard census returns [@Sekiyama1958Kinsei; @Hayami2001Historical]. This group encompassed the Shogun, daimyo lords, direct Shogunal bannermen (*hatamoto*), housemen (*gokenin*), domain samurai retainers, and their immediate families, estimated by Sekiyama Naotaro and Kito Hiroshi at approximately 6% to 7% of national inhabitants (1,8M to 2M persons) [@Sekiyama1958Kinsei; @Kito2000Jinko].

Second, the imperial court aristocracy (*kuge*) resident in Kyoto, Shinto shrine officials (*shinshoku*), and ordained Buddhist monastic clergy (*shukke*) were exempt from commoner registration rolls, removing approximately 300k to 400k individuals nationwide [@Sekiyama1958Kinsei; @Kito2000Jinko].

Third, outcaste and socially stigmatised populations (*eta*, *hinin*, wandering entertainers and day labourers) were systematically omitted from civil registers in most domains, adding approximately 400k to 500k uncounted inhabitants [@Sekiyama1958Kinsei; @Groemer2021Visual; @Anon2021Popular; @Anon2021Presence].

Fourth, domains applied divergent minimum age thresholds for recording children [@Sekiyama1958Kinsei; @Hayami2001Historical]. While some domains registered newborns immediately, others omitted infants until age one, two, or even seven, and certain northeastern domains recorded only individuals aged fifteen and older [@Sekiyama1958Kinsei; @Kito2000Jinko]. Correcting for these omissions, Sekiyama (1958) and Kito (2000) established that Japan's biological population at the benchmark of 1721AD stood at 31,28M rather than the raw recorded 26,07M commoners (Table \ref{tab:validation-tokugawa}).

# Methodology

## Territorial Division and Macro-Regional Masking

To capture historical reality across the archipelago while maintaining spatial consistency across the Tokugawa era, this study partitions Japan, the Ryukyu Kingdom and Ezo into eleven macro-regional territories covering 390.852 km² across 6.249 raster cells (Table \ref{tab:regions-tokugawa}):

1. Kinai and Surrounding Provinces (24.662 km², 382 cells): Yamashiro, Yamato, Kawachi, Izumi, Settsu, Tanba, Tango, Harima, Omi, Wakasa and Awaji, centered on Kyoto and Osaka.
2. Kanto Eight Provinces and Edo (30.108 km², 453 cells): Musashi, Sagami, Kazusa, Shimosa, Hitachi, Kozuke, Shimotsuke and Awa, centered on the Shogunal capital at Edo.
3. Tokai Corridor (17.642 km², 259 cells): Owari, Mikawa, Totomi, Suruga, Izu, Ise and Shima, linking the two great urban centres along the Tokaido transit axis.
4. Tosan Central Highlands (30.485 km², 435 cells): Kai, Shinano, Hida and Mino, encompassing alpine basins, sericulture valleys and the Nakasendo highway.
5. Hokuriku Sea of Japan (29.231 km², 496 cells): Echizen, Kaga, Noto, Etchu, Echigo and Sado Island, forming the northern maritime agricultural and shipping belt.
6. Tohoku (Mutsu and Dewa) (72.145 km², 1.130 cells): The vast northeastern frontier comprising Mutsu and Dewa provinces, exposed to cold summer maritime winds.
7. Chugoku (San'in and San'yo) (34.807 km², 551 cells): The western Honshu provinces bordering the Seto Inland Sea and the Sea of Japan.
8. Shikoku (20.683 km², 316 cells): Awa, Sanuki, Iyo and Tosa provinces, characterised by intense agricultural commercialisation and coastal fisheries.
9. Kyushu (46.372 km², 728 cells): The nine southwestern provinces encompassing Chikuzen, Chikugo, Buzen, Bungo, Hizen, Higo, Hyuga, Osumi and Satsuma, alongside Tsushima and Iki islands.
10. Ryukyu Kingdom (4.509 km², 98 cells): The southern archipelago comprising the Okinawa, Amami, Miyako and Yaeyama island chains, under Satsuma domain hegemony and Qing tributary relations [@Smits2019MaritimeRyukyu; @Castle2012Ryukyu].
11. Ezo (Matsumae and Ainu) (80.208 km², 1.401 cells): Hokkaido and adjacent insular territories, comprising the southern Japanese settlement enclave (*Wajinchi*) and northern Indigenous Ainu lands (*Ezochi*) [@Walker2001ConquestAinu].

At each historical benchmark year $t$, total regional population $P_r(t)$ synthesises recorded commoner populations $C_r(t)$, domain-specific child under-enumeration adjustments $\alpha_r(t)$, samurai military households $S_r(t)$, and unrecorded marginal populations $M_r(t)$:

$$P_r(t) = C_r(t) \cdot \alpha_r(t) + S_r(t) + M_r(t)$$

where $\alpha_r(t)$ ranges between 1,08 and 1,18 depending on documented domain age-registration thresholds [@Sekiyama1958Kinsei; @Kito2000Jinko].

## Social Class Multipliers and Under-Enumeration Corrections

Following the methodology established by Sekiyama Naotaro and Kito Hiroshi, provincial civil totals depart systematically from raw census registers [@Sekiyama1958Kinsei; @Kito2000Jinko]. For the benchmark year 1721AD, registered commoners totaled 26,07M across the sixty-eight provinces [@Sekiyama1958Kinsei]. Adding 1,9M samurai personnel and dependents (concentrated heavily in Edo, castle towns and garrison districts), 350k court nobles and clergy, 450k outcaste inhabitants, and 2,51M uncounted infants and young children produces the harmonised nationwide total of 31,28M (Table \ref{tab:validation-tokugawa}) [@Sekiyama1958Kinsei; @Kito2000Jinko; @Groemer2021Visual].

For seventeenth-century benchmarks prior to 1721AD, population totals draw on cadastral assessed yields (*kokudaka*), local *shumon aratame-cho* parish survivals, and domain military registers harmonised by Hayami Akira and Kito Hiroshi [@Hayami2001Historical; @Hayami2010Population; @Kito2000Jinko]. These show that Japan's biological population grew from 12,27M in 1603AD to 17,5M in 1650AD, climbing to 27,69M by 1700AD and reaching 31,28M in 1721AD [@Kito2000Jinko]. For the late Tokugawa period, official census returns are adjusted using domain-level multipliers up to 1846AD, with the terminal benchmark of 1868AD calibrated against the initial Meiji civil registrations of 1872AD (34,8M) [@SBJ2021Census; @NSTAC2026SSDSE].

## Non-Stationary Kriging and Biophysical Covariates

Spatial population allocation within the eleven territorial masks employs non-stationary kriging across 384 domestic catchments and 9.123 valid land cells [@Paciorek2006Matern; @Kawai2023Exploring]. Residual spatial dependence is modelled with Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) covariance [@Paciorek2006Matern]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,4211$ and $\tau_2 = 2,6291$, with nugget-to-sill ratios constrained across all nine archaeological and historical horizons (Table \ref{tab:kriging-tokugawa}). The model incorporates five biophysical covariates: arable alluvial soil suitability, natural vegetative productivity index, terrain slope ecozone suitability, 13,5 km fluvial decay along major river channels (particularly the Tone, Yodo, Shinano, Kitakami, Kiso and Chikugo systems), and coastal marine proximity [@Paciorek2006Matern; @Takeuchi2017Finescale; @Nishiyama2012Detailed]. High-density populations from 1.078 catalogued settlements (led by Edo, Osaka, Kyoto, Nagoya and Kanazawa) anchor urban nodes, with urban masks subtracted to preserve rural totals inside each territorial boundary [@Sekiyama1958Kinsei; @Kurosawa2017Rise].

# Testing and Validation

Arithmetic reconciliation confirms exact parity between the territorial totals presented here and the regional reconstructions established by Sekiyama Naotaro (1958), Hayami Akira (2001, 2010) and Kito Hiroshi (2000). Table \ref{tab:validation-tokugawa} presents the longitudinal trajectory across all thirteen benchmark years from 1603AD to 1868AD, decomposed into macro-regional groupings.

<figure class="crd-table-figure" id="tab:validation-tokugawa">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Kinai and Kanto</th><th class="crd-th">Central and Western</th><th class="crd-th">Tohoku</th><th class="crd-th">Shikoku and Kyushu</th><th class="crd-th">Ryukyu and Ezo</th><th class="crd-th">Archipelago Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1603AD</strong></td><td class="crd-td">4,05M</td><td class="crd-td">4,54M</td><td class="crd-td">1,29M</td><td class="crd-td">2,27M</td><td class="crd-td">122,7k</td><td class="crd-td">12,27M</td></tr>
<tr><td class="crd-td"><strong>1650AD</strong></td><td class="crd-td">5,76M</td><td class="crd-td">6,45M</td><td class="crd-td">1,87M</td><td class="crd-td">3,27M</td><td class="crd-td">147,1k</td><td class="crd-td">17,5M</td></tr>
<tr><td class="crd-td"><strong>1700AD</strong></td><td class="crd-td">9,09M</td><td class="crd-td">10,15M</td><td class="crd-td">3,02M</td><td class="crd-td">5,24M</td><td class="crd-td">185,9k</td><td class="crd-td">27,69M</td></tr>
<tr><td class="crd-td"><strong>1721AD</strong></td><td class="crd-td">10,26M</td><td class="crd-td">11,45M</td><td class="crd-td">3,44M</td><td class="crd-td">5,94M</td><td class="crd-td">187,7k</td><td class="crd-td">31,28M</td></tr>
<tr><td class="crd-td"><strong>1750AD</strong></td><td class="crd-td">9,93M</td><td class="crd-td">11,65M</td><td class="crd-td">3,23M</td><td class="crd-td">6,09M</td><td class="crd-td">199,3k</td><td class="crd-td">31,1M</td></tr>
<tr><td class="crd-td"><strong>1786AD</strong></td><td class="crd-td">9,29M</td><td class="crd-td">11,6M</td><td class="crd-td">2,9M</td><td class="crd-td">6,1M</td><td class="crd-td">208,2k</td><td class="crd-td">30,1M</td></tr>
<tr><td class="crd-td"><strong>1792AD</strong></td><td class="crd-td">9,17M</td><td class="crd-td">11,56M</td><td class="crd-td">2,84M</td><td class="crd-td">6,09M</td><td class="crd-td">209,1k</td><td class="crd-td">29,87M</td></tr>
<tr><td class="crd-td"><strong>1804AD</strong></td><td class="crd-td">9,33M</td><td class="crd-td">11,81M</td><td class="crd-td">2,94M</td><td class="crd-td">6,21M</td><td class="crd-td">211,1k</td><td class="crd-td">30,5M</td></tr>
<tr><td class="crd-td"><strong>1828AD</strong></td><td class="crd-td">9,72M</td><td class="crd-td">12,41M</td><td class="crd-td">3,16M</td><td class="crd-td">6,49M</td><td class="crd-td">216,4k</td><td class="crd-td">32M</td></tr>
<tr><td class="crd-td"><strong>1834AD</strong></td><td class="crd-td">9,73M</td><td class="crd-td">12,46M</td><td class="crd-td">3,19M</td><td class="crd-td">6,5M</td><td class="crd-td">215,8k</td><td class="crd-td">32,1M</td></tr>
<tr><td class="crd-td"><strong>1840AD</strong></td><td class="crd-td">9,44M</td><td class="crd-td">12,11M</td><td class="crd-td">3,12M</td><td class="crd-td">6,32M</td><td class="crd-td">208,5k</td><td class="crd-td">31,2M</td></tr>
<tr><td class="crd-td"><strong>1846AD</strong></td><td class="crd-td">9,76M</td><td class="crd-td">12,55M</td><td class="crd-td">3,25M</td><td class="crd-td">6,53M</td><td class="crd-td">214,6k</td><td class="crd-td">32,3M</td></tr>
<tr><td class="crd-td"><strong>1868AD</strong></td><td class="crd-td">9,99M</td><td class="crd-td">12,95M</td><td class="crd-td">3,43M</td><td class="crd-td">6,71M</td><td class="crd-td">216,4k</td><td class="crd-td">33,3M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional demographic benchmarks across Tokugawa Japan, Ryukyu and Ezo, 1603AD to 1868AD, harmonised from Sekiyama (1958), Hayami (2001) and Kito (2000).</figcaption>
</figure>

Across all nine horizons in the Japanese and Korean kriging domain, Table \ref{tab:kriging-tokugawa} documents tightly constrained Matérn variogram parameters. Residual $R^2$ exceeds 0,93 across all epochs, with the late Edo and Joseon horizon displaying residual $R^2 = 0,9315$, regularised nugget-to-sill ratio 0,22, and effective short range 35,66 km.

<figure class="crd-table-figure" id="tab:kriging-tokugawa">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Jomon / Chulmun (before 3500BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00505</td><td class="crd-td">0,22</td><td class="crd-td">0,9513</td><td class="crd-td">5,3239</td><td class="crd-td">21,4223</td></tr>
<tr><td class="crd-td"><strong>2. Middle Jomon and Chulmun (3500BC to 2000BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,002807</td><td class="crd-td">0,16</td><td class="crd-td">0,9749</td><td class="crd-td">4,2696</td><td class="crd-td">15,7542</td></tr>
<tr><td class="crd-td"><strong>3. Late Jomon and Mumun Bronze (2000BC to 800BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001557</td><td class="crd-td">0,13</td><td class="crd-td">0,9791</td><td class="crd-td">4,0592</td><td class="crd-td">14,1882</td></tr>
<tr><td class="crd-td"><strong>4. Yayoi and Gojoseon Eras (800BC to 250AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00078</td><td class="crd-td">0,04</td><td class="crd-td">0,9984</td><td class="crd-td">6,0037</td><td class="crd-td">26,4645</td></tr>
<tr><td class="crd-td"><strong>5. Kofun and Three Kingdoms (250AD to 645AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000584</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">5,1228</td><td class="crd-td">18,1845</td></tr>
<tr><td class="crd-td"><strong>6. Nara, Early Heian and Unified Silla (645AD to 935AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000499</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">4,1561</td><td class="crd-td">15,8748</td></tr>
<tr><td class="crd-td"><strong>7. Late Heian, Kamakura and Goryeo (935AD to 1336AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00033</td><td class="crd-td">0,04</td><td class="crd-td">0,9979</td><td class="crd-td">3,5177</td><td class="crd-td">10,5668</td></tr>
<tr><td class="crd-td"><strong>8. Muromachi, Sengoku and Early Joseon (1336AD to 1603AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000357</td><td class="crd-td">0,04</td><td class="crd-td">0,998</td><td class="crd-td">3,4683</td><td class="crd-td">10,3268</td></tr>
<tr><td class="crd-td"><strong>9. Edo, Late Joseon and Modern Eras (1603AD to 1868AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001773</td><td class="crd-td">0,22</td><td class="crd-td">0,9315</td><td class="crd-td">3,2751</td><td class="crd-td">8,8717</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Kriging variogram diagnostics across nine chronological horizons in the Korea and Japan domain (9.123 valid land cells, tau1 = 1,42, tau2 = 2,63).</figcaption>
</figure>

Table \ref{tab:source-corpora-tokugawa} details the component archaeological, heritage and historical registries aggregated into the regional database, highlighting the contribution of national archaeological inventories from Japan and Korea totaling 93.358 records.

<figure class="crd-table-figure" id="tab:source-corpora-tokugawa">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>National Museum of Japanese History (Rekihaku) C14 Compendium</strong></td><td class="crd-td">14.536</td><td class="crd-td">15,57%</td></tr>
<tr><td class="crd-td"><strong>Rekihaku Nationwide Archaeological Site Gazetteer</strong></td><td class="crd-td">12.717</td><td class="crd-td">13,62%</td></tr>
<tr><td class="crd-td"><strong>Japanese Association for Study of Site Remnants (Kanto)</strong></td><td class="crd-td">20.209</td><td class="crd-td">21,65%</td></tr>
<tr><td class="crd-td"><strong>Tokyo Metropolitan Archaeological Remains Survey</strong></td><td class="crd-td">6.388</td><td class="crd-td">6,84%</td></tr>
<tr><td class="crd-td"><strong>Ministry of Land, Infrastructure, Transport Historic Sites Register</strong></td><td class="crd-td">17.728</td><td class="crd-td">18,99%</td></tr>
<tr><td class="crd-td"><strong>National Designated Cultural Properties of Japan</strong></td><td class="crd-td">5.651</td><td class="crd-td">6,05%</td></tr>
<tr><td class="crd-td"><strong>Korea Heritage Service National Cultural Heritage Database</strong></td><td class="crd-td">10.696</td><td class="crd-td">11,46%</td></tr>
<tr><td class="crd-td"><strong>Korean Neolithic and Bronze Age Radiocarbon Corpus</strong></td><td class="crd-td">437</td><td class="crd-td">0,47%</td></tr>
<tr><td class="crd-td"><strong>Hanseong Baekje Museum Accelerator Mass Spectrometry Corpus</strong></td><td class="crd-td">77</td><td class="crd-td">0,08%</td></tr>
<tr><td class="crd-td"><strong>South Korean Historic Sites and Monument Corpus</strong></td><td class="crd-td">1.173</td><td class="crd-td">1,26%</td></tr>
<tr><td class="crd-td"><strong>North Korean Historic Relics and Monuments Compendium</strong></td><td class="crd-td">129</td><td class="crd-td">0,14%</td></tr>
<tr><td class="crd-td"><strong>National Research Institute of Cultural Heritage (NRICH) Survey</strong></td><td class="crd-td">85</td><td class="crd-td">0,09%</td></tr>
<tr><td class="crd-td"><strong>Sejong Sillok Jiriji Northern Fortress Register</strong></td><td class="crd-td">217</td><td class="crd-td">0,23%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">2.082</td><td class="crd-td">2,23%</td></tr>
<tr><td class="crd-td"><strong>East Asian Continental Frontier Buffer Sites</strong></td><td class="crd-td">1.234</td><td class="crd-td">1,32%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Component archaeological, heritage and historical gazetteer registries aggregated into the regional domain (93.358 total records).</figcaption>
</figure>

# Results

## The Seventeenth-Century Agrarian Expansion (1603AD to 1721AD)

Between 1603AD and 1721AD, Japan experienced a tremendous demographic expansion, more than doubling in population from 12,27M to 31,28M (+155%) across 118 years (Figure \ref{fig:traj-tokugawa}) [@Hayami2001Historical; @Hayami2010Population; @Sekiyama1958Kinsei; @Kito2000Jinko]. This sustained growth represented an average annual compound growth rate of 0,8% across the seventeenth century, a rate of increase unprecedented in Japanese history and unequalled in contemporary Eurasia [@Hayami2001Historical; @Kito2000Jinko].

<figure class="crd-figure-block" id="fig:traj-tokugawa">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-tokugawa-japan-ryukyu-and-ezo/fig2_tokugawa_japan_ryukyu_and_ezo_trajectory.png" alt="fig:traj-tokugawa" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Tokugawa Japan, the Ryukyu Kingdom and Ezo from 1603AD to 1868AD across core, western, northern and peripheral territories with historical uncertainty bands.</figcaption>
</figure>

Several structural developments powered this demographic surge. First, the cessation of endemic Sengoku warfare liberated massive peasant labour previously diverted into military levies, enabling continuous rural reclamation [@Farris2006Medieval; @Hayami2001Historical]. Second, the Bakufu and regional daimyo undertook vast land reclamation projects (*shinden kaihatsu*), dyking alluvial river plains, clearing upland terraces and draining marshlands [@Hayami2001Historical]. Across Japan, cultivated acreage expanded from approximately 2,06M *cho* (20.400 km²) at Hideyoshi's cadastral surveys around 1598AD to over 2,97M *cho* (29.500 km²) by 1700AD, an increase in agricultural land area exceeding 44% [@Hayami2001Historical; @Kito2000Jinko].

Third, agricultural productivity intensified through technological innovations: double-cropping of winter wheat or barley following summer wet-rice; deep ploughing using improved iron-edged spades (*kuwa*) and ox-drawn ploughs; and the widespread application of commercial fertilisers, notably dried sardine meal (*hoshika*) transported from coastal fisheries and night soil collected from growing cities [@Hayami2001Historical; @Hayami2010Population].

Fourth, commercial crop specialization transformed rural cash economies: cotton cultivation spread across the Kinai, Mikawa and Seto Inland Sea plains; sericulture and mulberry orchards expanded in Kai, Shinano and Kozuke; and rapeseed oil, indigo, tobacco and sugar cane flourished across Shikoku and Kyushu [@Hayami2001Historical; @Anon2021Popular].

By 1721AD, the Kanto plain had expanded from 2,02M in 1603AD to 5,63M, fueled by the explosive growth of Edo and rural settlement across Musashi and Shimosa [@Sekiyama1958Kinsei; @Kito2000Jinko]. Kinai grew from 2,02M to 4,63M, Kyushu climbed from 1,47M to 3,88M, Chugoku rose from 1,41M to 3,38M, Tohoku expanded from 1,29M to 3,44M, and the Tokai corridor increased from 1,29M to 3,19M (Table \ref{tab:regions-tokugawa}) [@Sekiyama1958Kinsei; @Kito2000Jinko].

## The Eighteenth-Century Demographic Plateau and Famine Crises (1721AD to 1846AD)

Following the benchmark census of 1721AD, Japan entered an extraordinary 125-year demographic plateau (Figure \ref{fig:shares-tokugawa}). Between 1721AD (31,28M) and 1846AD (32,3M), aggregate population expanded by only 3,3%, remaining bounded within a narrow range between 29,87M and 32,3M across five generations [@Sekiyama1958Kinsei; @Kito2000Jinko].

<figure class="crd-figure-block" id="fig:shares-tokugawa">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-tokugawa-japan-ryukyu-and-ezo/fig3_tokugawa_japan_ryukyu_and_ezo_shares.png" alt="fig:shares-tokugawa" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Macro-regional population shares and comparative peak versus 1868AD terminal totals across the eleven territories.</figcaption>
</figure>

Historical demographers attribute this stationary regime to the confluence of environmental ceilings, behavioural adaptation and severe climatic shocks [@Hayami2001Historical; @Kito2000Jinko]:

1. Ecological Frontiers and Saturation: By the early eighteenth century, easily reclaimable alluvial plains and gravity-fed irrigation sources had been fully exploited under existing hydraulic technology [@Hayami2001Historical]. Further land clearance pushed cultivation onto marginal slopes vulnerable to erosion, soil exhaustion and drought [@Hayami2001Historical; @Kito2000Jinko].

2. Deliberate Parity Regulation: Micro-demographic reconstructions from village *shumon aratame-cho* demonstrate that peasant households consciously regulated fertility to maintain living standards and prevent the fragmentation of family holdings (*ie* system) [@Hayami2001Historical]. Methods included abortion, infanticide (*mabiki*), delayed female marriage age (averaging 22 to 25 years in central and western domains), extended birth spacing, and non-biological adult adoptions [@Hayami2001Historical; @Kakishima2011Year].

3. Climatic Deterioration and Famine Mortality: The Little Ice Age brought frequent unseasonable rains, volcanic ash clouds and cold summer winds (*yamase*) that repeatedly devastated rice harvests [@Hayami2001Historical; @Kito2000Jinko]:
   - The Kyoho Famine (1732AD): Unusually cool and rainy weather in western Japan triggered catastrophic leafhopper (*unkawa*) swarms across the Seto Inland Sea and northern Kyushu, destroying rice crops and causing an estimated 100k to 150k starvation deaths [@Sekiyama1958Kinsei; @Kito2000Jinko].
   - The Great Tenmei Famine (1782AD to 1788AD): The most destructive subsistence crisis of early modern Japan, initiated by prolonged summer rains and unseasonable cold, followed by the catastrophic explosive eruption of Mount Asama in central Honshu in 1783AD [@Sekiyama1958Kinsei; @Kito2000Jinko]. Volcanic ash blanketed eastern provinces, blocking solar radiation and causing midsummer frosts across Mutsu and Dewa [@Sekiyama1958Kinsei]. Rice crops failed completely across northern Honshu for successive seasons. Epidemic typhus and starvation caused widespread depopulation; between 1750AD and 1786AD, national population fell by 1M from 31,1M to 30,1M, bottoming at 29,87M in 1792AD (Table \ref{tab:validation-tokugawa}) [@Sekiyama1958Kinsei; @Kito2000Jinko]. Tohoku alone lost 393k people (-12,2% of its population) between 1750AD and 1792AD [@Sekiyama1958Kinsei; @Kito2000Jinko].
   - The Great Tenpo Famine (1833AD to 1837AD): Incessant rain and cold summer weather caused repeated harvest collapses across northern and central Japan [@Sekiyama1958Kinsei; @Anon2021Popular]. National population declined from 32,1M in 1834AD to 31,2M in 1840AD (-900k people), provoking violent peasant uprisings (*hyakusho ikki*), urban rice riots (*uchikowashi*), and Oshio Heihachiro's armed rebellion in Osaka in 1837AD [@Sekiyama1958Kinsei; @Anon2021Popular].

<figure class="crd-table-figure" id="tab:regions-tokugawa">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">1603AD</th><th class="crd-th">1650AD</th><th class="crd-th">1700AD</th><th class="crd-th">1721AD</th><th class="crd-th">1750AD</th><th class="crd-th">1786AD</th><th class="crd-th">1804AD</th><th class="crd-th">1828AD</th><th class="crd-th">1846AD</th><th class="crd-th">1868AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kinai and Surrounding Provinces</strong></td><td class="crd-td">24.662</td><td class="crd-td">2,02M</td><td class="crd-td">2,77M</td><td class="crd-td">4,18M</td><td class="crd-td">4,63M</td><td class="crd-td">4,53M</td><td class="crd-td">4,29M</td><td class="crd-td">4,3M</td><td class="crd-td">4,45M</td><td class="crd-td">4,45M</td><td class="crd-td">4,53M</td></tr>
<tr><td class="crd-td"><strong>Kanto Eight Provinces and Edo</strong></td><td class="crd-td">30.108</td><td class="crd-td">2,02M</td><td class="crd-td">2,99M</td><td class="crd-td">4,91M</td><td class="crd-td">5,63M</td><td class="crd-td">5,41M</td><td class="crd-td">5M</td><td class="crd-td">5,03M</td><td class="crd-td">5,26M</td><td class="crd-td">5,31M</td><td class="crd-td">5,46M</td></tr>
<tr><td class="crd-td"><strong>Tokai Corridor</strong></td><td class="crd-td">17.642</td><td class="crd-td">1,29M</td><td class="crd-td">1,82M</td><td class="crd-td">2,84M</td><td class="crd-td">3,19M</td><td class="crd-td">3,18M</td><td class="crd-td">3,1M</td><td class="crd-td">3,14M</td><td class="crd-td">3,28M</td><td class="crd-td">3,3M</td><td class="crd-td">3,4M</td></tr>
<tr><td class="crd-td"><strong>Tosan Central Highlands</strong></td><td class="crd-td">30.485</td><td class="crd-td">797,5k</td><td class="crd-td">1,16M</td><td class="crd-td">1,87M</td><td class="crd-td">2,13M</td><td class="crd-td">2,14M</td><td class="crd-td">2,1M</td><td class="crd-td">2,14M</td><td class="crd-td">2,26M</td><td class="crd-td">2,28M</td><td class="crd-td">2,36M</td></tr>
<tr><td class="crd-td"><strong>Hokuriku Sea of Japan</strong></td><td class="crd-td">29.231</td><td class="crd-td">1,04M</td><td class="crd-td">1,51M</td><td class="crd-td">2,42M</td><td class="crd-td">2,75M</td><td class="crd-td">2,83M</td><td class="crd-td">2,84M</td><td class="crd-td">2,92M</td><td class="crd-td">3,12M</td><td class="crd-td">3,18M</td><td class="crd-td">3,33M</td></tr>
<tr><td class="crd-td"><strong>Tohoku (Mutsu and Dewa)</strong></td><td class="crd-td">72.145</td><td class="crd-td">1,29M</td><td class="crd-td">1,87M</td><td class="crd-td">3,02M</td><td class="crd-td">3,44M</td><td class="crd-td">3,23M</td><td class="crd-td">2,9M</td><td class="crd-td">2,94M</td><td class="crd-td">3,16M</td><td class="crd-td">3,25M</td><td class="crd-td">3,43M</td></tr>
<tr><td class="crd-td"><strong>Chugoku (San'in and San'yo)</strong></td><td class="crd-td">34.807</td><td class="crd-td">1,41M</td><td class="crd-td">1,96M</td><td class="crd-td">3,03M</td><td class="crd-td">3,38M</td><td class="crd-td">3,5M</td><td class="crd-td">3,55M</td><td class="crd-td">3,62M</td><td class="crd-td">3,76M</td><td class="crd-td">3,77M</td><td class="crd-td">3,86M</td></tr>
<tr><td class="crd-td"><strong>Shikoku</strong></td><td class="crd-td">20.683</td><td class="crd-td">797,5k</td><td class="crd-td">1,14M</td><td class="crd-td">1,82M</td><td class="crd-td">2,06M</td><td class="crd-td">2,13M</td><td class="crd-td">2,15M</td><td class="crd-td">2,2M</td><td class="crd-td">2,32M</td><td class="crd-td">2,35M</td><td class="crd-td">2,43M</td></tr>
<tr><td class="crd-td"><strong>Kyushu</strong></td><td class="crd-td">46.372</td><td class="crd-td">1,47M</td><td class="crd-td">2,13M</td><td class="crd-td">3,41M</td><td class="crd-td">3,88M</td><td class="crd-td">3,96M</td><td class="crd-td">3,95M</td><td class="crd-td">4,01M</td><td class="crd-td">4,17M</td><td class="crd-td">4,18M</td><td class="crd-td">4,28M</td></tr>
<tr><td class="crd-td"><strong>Ryukyu Kingdom</strong></td><td class="crd-td">4.509</td><td class="crd-td">98,2k</td><td class="crd-td">119,1k</td><td class="crd-td">153,2k</td><td class="crd-td">156,4k</td><td class="crd-td">161,9k</td><td class="crd-td">164,3k</td><td class="crd-td">163,9k</td><td class="crd-td">163,9k</td><td class="crd-td">159,3k</td><td class="crd-td">156,5k</td></tr>
<tr><td class="crd-td"><strong>Ezo (Matsumae and Ainu)</strong></td><td class="crd-td">80.208</td><td class="crd-td">24,5k</td><td class="crd-td">28k</td><td class="crd-td">32,6k</td><td class="crd-td">31,3k</td><td class="crd-td">37,5k</td><td class="crd-td">43,9k</td><td class="crd-td">47,2k</td><td class="crd-td">52,5k</td><td class="crd-td">55,3k</td><td class="crd-td">59,9k</td></tr>
<tr><td class="crd-td"><strong>Archipelago Total</strong></td><td class="crd-td">390.852</td><td class="crd-td">12,27M</td><td class="crd-td">17,5M</td><td class="crd-td">27,69M</td><td class="crd-td">31,28M</td><td class="crd-td">31,1M</td><td class="crd-td">30,1M</td><td class="crd-td">30,5M</td><td class="crd-td">32M</td><td class="crd-td">32,3M</td><td class="crd-td">33,3M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Provincial population benchmarks across eleven territories in Tokugawa Japan, Ryukyu and Ezo, 1603AD to 1868AD.</figcaption>
</figure>

## Regional Trajectories and Spatial Variations

Demographic trends across the eighteenth century diverged sharply between eastern and western Japan (Table \ref{tab:density-tokugawa}) [@Hayami2001Historical; @Sekiyama1958Kinsei]. While northeastern Japan suffered stagnation and recurrent depopulation, western Japan maintained resilient rural economies and modest demographic growth [@Hayami2001Historical].

<figure class="crd-table-figure" id="tab:density-tokugawa">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Sites</th><th class="crd-th">1603AD</th><th class="crd-th">1721AD</th><th class="crd-th">1868AD</th><th class="crd-th">1868AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kinai and Surrounding Provinces</strong></td><td class="crd-td">121</td><td class="crd-td">2,02M</td><td class="crd-td">4,63M</td><td class="crd-td">4,53M</td><td class="crd-td">183,6</td></tr>
<tr><td class="crd-td"><strong>Kanto Eight Provinces and Edo</strong></td><td class="crd-td">212</td><td class="crd-td">2,02M</td><td class="crd-td">5,63M</td><td class="crd-td">5,46M</td><td class="crd-td">181,4</td></tr>
<tr><td class="crd-td"><strong>Tokai Corridor</strong></td><td class="crd-td">87</td><td class="crd-td">1,29M</td><td class="crd-td">3,19M</td><td class="crd-td">3,4M</td><td class="crd-td">192,5</td></tr>
<tr><td class="crd-td"><strong>Tosan Central Highlands</strong></td><td class="crd-td">86</td><td class="crd-td">797,5k</td><td class="crd-td">2,13M</td><td class="crd-td">2,36M</td><td class="crd-td">77,6</td></tr>
<tr><td class="crd-td"><strong>Hokuriku Sea of Japan</strong></td><td class="crd-td">66</td><td class="crd-td">1,04M</td><td class="crd-td">2,75M</td><td class="crd-td">3,33M</td><td class="crd-td">113,9</td></tr>
<tr><td class="crd-td"><strong>Tohoku (Mutsu and Dewa)</strong></td><td class="crd-td">151</td><td class="crd-td">1,29M</td><td class="crd-td">3,44M</td><td class="crd-td">3,43M</td><td class="crd-td">47,5</td></tr>
<tr><td class="crd-td"><strong>Chugoku (San'in and San'yo)</strong></td><td class="crd-td">78</td><td class="crd-td">1,41M</td><td class="crd-td">3,38M</td><td class="crd-td">3,86M</td><td class="crd-td">111</td></tr>
<tr><td class="crd-td"><strong>Shikoku</strong></td><td class="crd-td">57</td><td class="crd-td">797,5k</td><td class="crd-td">2,06M</td><td class="crd-td">2,43M</td><td class="crd-td">117,5</td></tr>
<tr><td class="crd-td"><strong>Kyushu</strong></td><td class="crd-td">166</td><td class="crd-td">1,47M</td><td class="crd-td">3,88M</td><td class="crd-td">4,28M</td><td class="crd-td">92,3</td></tr>
<tr><td class="crd-td"><strong>Ryukyu Kingdom</strong></td><td class="crd-td">41</td><td class="crd-td">98,2k</td><td class="crd-td">156,4k</td><td class="crd-td">156,5k</td><td class="crd-td">34,7</td></tr>
<tr><td class="crd-td"><strong>Ezo (Matsumae and Ainu)</strong></td><td class="crd-td">13</td><td class="crd-td">24,5k</td><td class="crd-td">31,3k</td><td class="crd-td">59,9k</td><td class="crd-td">0,7</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements, 1603AD, 1721AD and 1868AD population benchmarks, and terminal 1868AD density (persons per km²).</figcaption>
</figure>

### Kinai and the Kanto Plain

Kinai and Kanto formed the dual metropolitan poles of early modern Japan [@Hayami2001Historical; @Sekiyama1958Kinsei]. Kinai (24.662 km²), the traditional political and cultural heartland, grew from 2,02M in 1603AD to 4,63M in 1721AD, exhibiting the highest provincial population densities in Japan (187,7 persons per km² in 1721AD and 183,6 in 1868AD) [@Sekiyama1958Kinsei]. High urbanization, commercial cotton agriculture and dense handicrafts sustained stable rural populations despite low marital fertility [@Hayami2001Historical].

The Kanto plain (30.108 km²), encompassing Musashi and the surrounding seven provinces, grew from 2,02M in 1603AD to 5,63M in 1721AD, becoming Japan's most populous macro-region [@Sekiyama1958Kinsei; @Kito2000Jinko]. Edo's voracious demand for grain, charcoal, vegetables and labour drew tens of thousands of seasonal migrants (*dekasegi*) from neighbouring provinces [@Hayami2001Historical; @Videen1989Dandy]. Following the Tenmei famine, Kanto population contracted to 4,93M in 1792AD, before recovering to 5,46M by 1868AD (181,4 persons per km²) [@Sekiyama1958Kinsei].

### Central and Western Honshu: Tokai, Tosan, Hokuriku and Chugoku

The central and western provinces formed an integrated agricultural and commercial continuum [@Hayami2001Historical; @Sekiyama1958Kinsei]:

The Tokai corridor (17.642 km²) expanded from 1,29M in 1603AD to 3,19M in 1721AD and 3,4M in 1868AD (192,5 persons per km², the highest density in the realm), benefiting from intense road traffic along the Tokaido highway and commercial cotton production in Owari and Mikawa [@Sekiyama1958Kinsei].

The Tosan highlands (30.485 km²), encompassing Shinano, Kai and Hida, expanded from 798k in 1603AD to 2,13M in 1721AD and 2,36M in 1868AD (77,6 persons per km²), driven by sericulture, silk reeling, and terrace agriculture [@Hayami2001Historical; @Sekiyama1958Kinsei].

The Hokuriku Sea of Japan belt (29.231 km²), anchored by the powerful Maeda clan's Kaga domain and Echigo's vast rice plains, grew from 1,04M in 1603AD to 2,75M in 1721AD and 3,33M in 1868AD (113,9 persons per km²), sustained by intensive fertilizer use and the thriving *kitamaebune* shipping route connecting Hokkaido fisheries to Osaka [@Sekiyama1958Kinsei; @Kito2000Jinko].

Chugoku (34.807 km²), spanning the San'in and San'yo coasts, expanded from 1,41M in 1603AD to 3,38M in 1721AD and reached 3,86M by 1868AD (111 persons per km²), leveraging Seto Inland Sea shipping, wax tree harvesting, tatami rush cultivation and salt refining [@Hayami2001Historical; @Sekiyama1958Kinsei].

### Tohoku: Northern Climate Vulnerability

Tohoku (Mutsu and Dewa, 72.145 km²) was the most climate-vulnerable macro-region in Japan [@Sekiyama1958Kinsei; @Kito2000Jinko]. Population expanded from 1,29M in 1603AD to 3,44M in 1721AD under extensive early domain reclamations conducted by the Date clan of Sendai and the Tsugaru domain of Hirosaki [@Sekiyama1958Kinsei]. However, the region lay directly in the path of the cold summer northeasterly *yamase* winds blowing from the Sea of Okhotsk [@Sekiyama1958Kinsei].

During the eighteenth century, Tohoku experienced catastrophic famines: between 1721AD (3,44M) and 1792AD (2,84M), the region lost 603k inhabitants (-17,5%), with entire villages abandoned (*tsubure-ya*) and widespread infanticide recorded in local chronicles [@Sekiyama1958Kinsei; @Kito2000Jinko]. Tohoku required more than seven decades to regain its early eighteenth-century peak, reaching 3,43M only on the eve of the Meiji Restoration in 1868AD (47,5 persons per km²) [@Sekiyama1958Kinsei].

### Shikoku and Kyushu: Agrarian Commercialisation

Shikoku (20.683 km²) and Kyushu (46.372 km²) demonstrated remarkable demographic stability and commercial dynamism [@Sekiyama1958Kinsei; @Kito2000Jinko]. Shikoku grew from 798k in 1603AD to 2,06M in 1721AD and 2,43M in 1868AD (117,5 persons per km²), driven by Tokushima's monopoly over indigo dyeing (*ai*), Sanuki's refined white sugar (*wasanbon*), and coastal fishing in Tosa [@Sekiyama1958Kinsei; @Anon2021Popular].

Kyushu grew from 1,47M in 1603AD to 3,88M in 1721AD and 4,28M in 1868AD (92,3 persons per km²) [@Sekiyama1958Kinsei]. Benefiting from diversified agro-ecological environments and milder winters, southwestern domains such as Satsuma and Saga developed specialized export commodities (sweet potatoes, wax, tobacco, Arita porcelain) and maintained strong domestic grain reserves [@Sekiyama1958Kinsei; @Castle2012Ryukyu]. Nagasaki served as the Shogunate's sole window for licensed foreign trade with Dutch VOC merchants at Dejima and Chinese traders at the Shinchi warehouse quarter [@Sekiyama1958Kinsei].

### The Ryukyu Kingdom: Satsuma Subordination and Maritime Trade

The Ryukyu Kingdom (4.509 km², 98 cells) occupied a unique geopolitical position in early modern East Asia [@Smits2019MaritimeRyukyu; @Castle2012Ryukyu; @McComack2016Year]. In 1609AD, troops from the Satsuma domain under Shimazu Tadatsune invaded the islands, capturing King Sho Nei and incorporating the kingdom into the Japanese feudal hierarchy [@Smits2019MaritimeRyukyu; @Castle2012Ryukyu]. However, the Bakufu and Satsuma deliberately preserved Ryukyu's external trappings of independence to maintain lucrative indirect trade with Qing China: Ryukyu retained its king at Shuri Castle, continued to dispatch tribute missions to Beijing, and observed Chinese calendar eras in diplomatic correspondence, while secretly paying heavy sugar and grain taxes to Satsuma [@Smits2019MaritimeRyukyu; @Castle2012Ryukyu; @Habibi2026From].

Ryukyu's population expanded from 98k in 1603AD to 156k in 1721AD, peaking at 164k in 1786AD and concluding at 157k in 1868AD (34,7 persons per km²) [@Smits2019MaritimeRyukyu; @Castle2012Ryukyu]. The kingdom's food security was fundamentally transformed by the introduction of the sweet potato (*karaimo*) from Fujian by Noguni Sokan in 1605AD and its active promotion by government scholar Saion [@Smits2019MaritimeRyukyu; @Osozawa2021Phylogeography]. Resistant to severe typhoons and drought that periodically ravaged millet and rice crops, sweet potato cultivation enabled island populations to maintain food security on thin coral soils [@Smits2019MaritimeRyukyu; @Nishikawa2022Cultural; @Nishiyama2012Detailed]. The royal capital of Shuri and the neighbouring commercial port of Naha formed a contiguous urban concentration supporting 39k residents [@Castle2012Ryukyu].

### Ezo: The Matsumae Domain, Ainu Trade and the Northern Frontier

The northern frontier of Ezo (80.208 km², 1.401 cells) encompassed Hokkaido and adjacent sub-arctic islands [@Walker2001ConquestAinu]. Under Tokugawa governance, Ezo was placed under the authority of the Matsumae clan, who resided at Fukuyama (Matsumae) Castle on the Oshima Peninsula [@Walker2001ConquestAinu]. In 1604AD, Tokugawa Ieyasu granted Matsumae Yoshihiro an exclusive black-seal charter (*kuroinjō*) granting monopoly trading rights with the Indigenous Ainu people [@Walker2001ConquestAinu].

The territory was divided into two distinct administrative zones: the Japanese settlement district (*Wajinchi*) on the southern tip of the Oshima Peninsula, and the extensive Indigenous territory (*Ezochi*) encompassing the remainder of Hokkaido [@Walker2001ConquestAinu]. Over the seventeenth and eighteenth centuries, the Matsumae domain transitioned from direct trade (*akinaiba-chigyo-sei*) to commercial contracting (*basho ukeoi-sei*), leasing trading posts (*basho*) to merchant syndicates from Omi and Osaka [@Walker2001ConquestAinu].

These contractors transformed the Ainu economy from subsistence hunting and salmon fishing into forced commercial fisheries supplying herring fertilizer (*kasuka*) and marine delicacies (*tawaramono*) for Honshu agriculture [@Walker2001ConquestAinu]. Contact brought recurrent epidemics of smallpox and measles that devastated Indigenous communities: Ainu populations in Ezo declined from an estimated 25k to 30k in the early seventeenth century to fewer than 15k by the mid-nineteenth century [@Walker2001ConquestAinu].

Simultaneously, seasonal and permanent Japanese migration to coastal fisheries increased: total population in Ezo grew from 24,5k in 1603AD to 31k in 1721AD, 47k in 1804AD and 60k by 1868AD [@Walker2001ConquestAinu; @Sekiyama1958Kinsei]. Hakodate emerged as the leading northern port, growing from 6k in 1750AD to 25k in 1868AD following its opening to foreign trade under the Treaty of Kanagawa in 1854AD [@Walker2001ConquestAinu].

## Castle Towns, Metropolises and Urban Networks

The Tokugawa era established a sophisticated, multi-tiered urban hierarchy that made Japan one of the most urbanised societies in the pre-industrial world (Figure \ref{fig:sett-tokugawa}) [@Hayami2001Historical; @Sekiyama1958Kinsei; @Videen1989Dandy]. By 1721AD, more than 10% to 12% of Japan's population lived in cities exceeding 10k inhabitants [@Hayami2001Historical; @Kito2000Jinko].

<figure class="crd-figure-block" id="fig:sett-tokugawa">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-tokugawa-japan-ryukyu-and-ezo/fig4_tokugawa_japan_ryukyu_and_ezo_settlements.png" alt="fig:sett-tokugawa" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading castle-town metropolises across Tokugawa Japan, Ryukyu and Ezo.</figcaption>
</figure>

At the apex of this urban system stood the Three Great Cities (*Santo*):

1. Edo (Tokyo): Expanding from a provincial fortress town of 150k in 1603AD to 430k in 1650AD, 850k in 1700AD, 1M in 1721AD, and an eighteenth-century peak of 1,05M to 1,1M between 1750AD and 1800AD, Edo was the most populous city in the world [@Sekiyama1958Kinsei; @Kito2000Jinko; @Videen1989Dandy; @Anon2021Presence]. The city's population was divided between approximately 500k registered commoners (*chonin*) living in densely packed merchant wards (*machiya*) and an equivalent number of samurai retainers, daimyo families and transient labourers maintained by the alternate attendance system (*sankin-kotai*), which compelled every daimyo to reside in Edo in alternate years [@Hayami2001Historical; @Sekiyama1958Kinsei].

2. Osaka: The commercial and financial hub of Japan, known as the 'Kitchen of the Empire' (*tenka no daidokoro*), expanded from 200k in 1603AD to 380k in 1700AD and peaked at 410k in 1750AD [@Sekiyama1958Kinsei; @Kurosawa2017Rise]. Centered on the Dojima Rice Exchange (the world's first formal futures market), Osaka processed domain tax rice, managed nationwide credit networks and distributed consumer goods across the archipelago [@Hayami2001Historical; @Sekiyama1958Kinsei].

3. Kyoto: The historic imperial capital and centre of cultural prestige, maintaining 305k residents in 1603AD and peaking at 390k in 1700AD [@Sekiyama1958Kinsei; @Kito2000Jinko]. Kyoto specialized in high-value luxury artisanal manufacturing, including Nishijin silk textiles, lacquerware, copper refining, book publishing and Buddhist arts [@Hayami2001Historical].

Below the *Santo*, the second tier comprised the great regional castle towns (*jokamachi*) serving as domain administrative headquarters:
- Kanazawa (Maeda clan, Kaga domain): The largest provincial castle town, supporting 120k residents at its 1700AD peak [@Sekiyama1958Kinsei].
- Nagoya (Owari Tokugawa branch): Reaching 115k in 1850AD and 123k by 1868AD [@Sekiyama1958Kinsei].
- Hiroshima (Asano clan, Aki domain): Reaching 70k in 1850AD and 73,5k in 1868AD [@Sekiyama1958Kinsei].
- Kagoshima (Shimazu clan, Satsuma domain): Reaching 68k in 1850AD [@Sekiyama1958Kinsei; @Castle2012Ryukyu].
- Sendai (Date clan, Mutsu domain): Reaching 65k in 1700AD [@Sekiyama1958Kinsei].
- Wakayama (Kii Tokugawa branch): Supporting 55k in 1750AD and 59,5k in 1868AD [@Sekiyama1958Kinsei].
- Kumamoto (Hosokawa clan, Higo domain): Maintaining 45k residents [@Sekiyama1958Kinsei].
- Fukuoka (Kuroda clan, Chikuzen domain): Supporting 44k residents [@Sekiyama1958Kinsei].
- Okayama (Ikeda clan, Bizen domain): Reaching 40k residents [@Sekiyama1958Kinsei].

A third tier encompassed specialised commercial ports and trading towns:
- Nagasaki: The sole foreign trade port, peaking at 64k in 1700AD before settling between 30k and 35k as import quotas were tightened [@Sekiyama1958Kinsei].
- Sakai: The historic Free Port of Izumi province, contracting from 65k in 1603AD to 39k in 1868AD as Osaka captured regional riverine trade [@Sekiyama1958Kinsei].
- Niigata: The leading shipping haven on the Sea of Japan, growing from 18k in 1650AD to 33k in 1868AD through the *kitamaebune* grain trade [@Sekiyama1958Kinsei].
- Shuri and Naha: The royal capital and port of the Ryukyu Kingdom, maintaining 39k residents [@Castle2012Ryukyu].
- Hakodate: The northern deep-water haven in Ezo, expanding from 6k in 1750AD to 25k in 1868AD [@Walker2001ConquestAinu].

Below these major centres, over five hundred post stations (*shukuba*) along the Five Highways (*Gokaido* led by the Tokaido and Nakasendo) and coastal harbours mediated exchange between rural farming villages and metropolitan markets [@Hayami2001Historical; @Sekiyama1958Kinsei].

# Limitations

Three principal constraints govern demographic precision across the Tokugawa era. First, the Bakufu sexennial censuses recorded only commoners, requiring historical demographers to estimate samurai, outcaste, clerical and infant populations through social multipliers rather than direct complete enumerations [@Sekiyama1958Kinsei; @Kito2000Jinko]. While corroborated by domain military payrolls (*buke bungencho*) and cadastral returns, aggregate figures carry an estimated uncertainty interval of $\pm 5\%$ to $\pm 8\%$ during the 1721AD to 1846AD era [@Sekiyama1958Kinsei; @Hayami2001Historical].

Second, surviving *shumon aratame-cho* parish registers are geographically uneven [@Hayami2001Historical]. Village archives have survived in abundance across central and western Honshu (notably Nagano, Gifu, Aichi, Kyoto and Osaka prefectures), but are far sparser across northeastern Honshu (Mutsu and Dewa) where recurrent famines and rural flight disrupted archive preservation [@Hayami2001Historical; @Sekiyama1958Kinsei].

Third, demographic estimates for the peripheral territories of the Ryukyu Kingdom and Ezo rely on disparate source traditions [@Smits2019MaritimeRyukyu; @Walker2001ConquestAinu]. In Ryukyu, parish registers (*koseki*) were maintained under Satsuma oversight but survive imperfectly [@Smits2019MaritimeRyukyu; @Castle2012Ryukyu]. In Ezo, Ainu numbers reflect trading post logs and epidemic reports rather than regular household registrations, introducing wider uncertainty into pre-1800AD Indigenous estimates [@Walker2001ConquestAinu].

# Sources

<div id="refs"></div>
