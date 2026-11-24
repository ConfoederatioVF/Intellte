---
title: "Russian Conquest and Imperial Rule in Transcaucasia"
subtitle: "Demographic Trajectory, Guberniya Censuses and Urbanisation (1801AD to 1917AD)"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: russian_transcaucasia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_russian_transcaucasia_spatial.png"
hero_caption: "Subregions and 4.875 catalogued settlements of Russian Transcaucasia from 1801AD to 1917AD."
hero_label: "fig:hero-russian-transcaucasia"
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
    citation_package: default
  md_document:
    variant: gfm
---



# Abstract

Between the Russian annexation of Kartli-Kakheti in 1801AD and the collapse of the Caucasus Viceroyalty in 1917AD, the population of Transcaucasia across the 185,24k km² territory corresponding to modern Georgia, Armenia and Azerbaijan more than tripled, rising from 1,77M inhabitants in 1801AD to 2,36M in 1835AD, 3,29M in 1865AD, 4,75M at the 1897AD First All-Russian General Census and 6M on the eve of the 1917AD Revolution [@Shafiyev2015Russian; @Taghiyeva2026Social; @Amrahov2025Numeral]. During the first half-century of Tsarist rule, demographic change was driven by Russo-Persian and Russo-Ottoman border wars, the resettlement of Armenian, German and Russian sectarian colonists across the Aras and Kura valleys and the emigration of Muslim communities from newly annexed khanates [@Aliyev2026Impact; @Amrahov2023Ethnic; @Ibishov2023Migrations]. After the peasant emancipations of 1864-1871AD, railway construction linking Poti, Batumi, Tbilisi and Baku (1872-1883AD) and the abolition of the Absheron oil monopoly in 1872AD turned Baku and Tbilisi into transcontinental industrial and administrative centres, lifting Azerbaijan's governorates from 680k to 2,34M (+244,1%) and Georgia's from 780k to 2,65M (+239,7%) [@Anonymous2019Baku; @Anon2026Ethnodemog; @Sadleir2025Spravedliv]. Drawing on imperial cameral surveys, the 1897AD Russian Imperial Census guberniya enumerations across Tiflis, Kutaisi, Baku, Elisabethpol, Erivan, Batumi and Kars, the 1917AD Eastern Georgia enumeration and 4.875 individually assessed urban and rural settlement trajectories, this chapter reconstructs Transcaucasia's spatial population surface through strictly mass-conserving pycnophylactic scaling and non-stationary Matérn kriging [@Runfola2020GeoBoundaries].



# Background

## Ecological Zones and Agrarian Structure

Geography divided Russian Transcaucasia into four sharply contrasting demographic zones south of the Greater Caucasus crest (Figure \ref{fig:hero-russian-transcaucasia}). To the west, the humid Colchian lowlands of the Rioni basin and the Pontic littoral of Ajaria and Abkhazia received more than 1.500 mm of annual rainfall, supporting dense smallholder cultivation of maize, tea, citrus, tobacco and viticulture around Kutaisi, Poti and Batumi [@Khonelidze2022Georgian; @Sadleir2025Spravedliv].

Across the Likhi Range, eastern Georgia's Kartli and Kakheti valleys formed a temperate agricultural corridor anchored on Tbilisi at the narrow Kura defile, linking the Georgian Military Highway over the Darial Pass to Vladikavkaz [@LeDonne2006Building; @Wier2026Conflict]. Further east, the broad alluvial plains of the Kura and Aras rivers widened into the semi-arid Mugan, Shirvan and Mil steppes before meeting the Caspian shore at the hydrocarbon-bearing Absheron Peninsula [@Ibishov2025Resettleme; @Taghiyeva2026Social].

To the south and southwest, the volcanic plateaus of the Armenian Highland around Lake Sevan, Mount Aragats and the Ararat valley combined high-altitude pastoralism with irrigated oasis farming along the Aras frontier [@Chichekian1967Territoria; @Amrahov2025Numeral]. Steep altitudinal gradients compressed settlement into narrow river terraces and intermontane basins while leaving alpine pastures lightly populated outside summer transhumance.

## Imperial Conquest and Administrative Consolidation

Imperial Russian penetration into this fragmented landscape proceeded in three military and diplomatic stages between 1801AD and 1878AD. In January 1801AD, Emperor Paul I issued the manifesto annexing the eastern Georgian kingdom of Kartli-Kakheti following the death of King George XII, an act confirmed by Alexander I in September 1801AD [@LeDonne2006Building; @Khonelidze2022Georgian].

Between 1803AD and 1810AD, Russian forces absorbed the western Georgian principalities of Mingrelia, Imereti, Guria and Abkhazia while fighting the First Russo-Persian War (1804-1813AD) and the Russo-Ottoman War of 1806-1812AD. Under the Treaty of Gulistan (12 October 1813AD), Qajar Iran ceded the khanates of Karabakh, Ganja, Sheki, Shirvan, Baku, Quba and northern Talysh (Lankaran), establishing Russian control over northern Azerbaijan [@Aliyev2026Impact; @Ibishov2023Migrations; @Isaxanli2021Karabakh].

A second Russo-Persian War (1826-1828AD) ended with the Treaty of Turkmenchay (22 February 1828AD), transferring the Erivan and Nakhchivan khanates along the Aras River, while the Treaty of Adrianople (14 September 1829AD) following the Russo-Ottoman War of 1828-1829AD brought the Akhaltsikhe and Akhalkalaki districts into Russian Georgia [@Chichekian1967Territoria; @Amrahov2023Ethnic; @Shafiyev2015Russian]. Half a century later, the Russo-Ottoman War of 1877-1878AD and the Congress of Berlin (1878AD) added Kars Oblast, Ardahan, Artvin and the Black Sea port of Batumi to the Caucasus Viceroyalty [@Hajiyev2017Socio; @Chichekian1967Territoria].

Imperial administrators experimented repeatedly with provincial boundaries before settling on the late nineteenth-century guberniya framework. Under General Aleksei Ermolov and Viceroy Mikhail Vorontsov (appointed in 1844AD as head of the newly created Caucasus Viceroyalty, *Namestnichestvo*), Saint Petersburg replaced an aborted 1840AD centralising merger (the Georgia-Imeretia Governorate and Caspian Oblast) with culturally and economically distinct provinces [@LeDonne2006Building; @Chichekian1967Territoria; @Sadleir2025Spravedliv].

By 1868AD, Transcaucasia comprised five principal governorates - Tiflis, Kutaisi, Baku, Elisabethpol (carved out of Tiflis and Baku in 1868AD) and Erivan (established in 1849AD) - alongside the special military okrugs of Zakataly and Sukhumi, joined after 1878AD by Kars Oblast and the Batumi district (constituted as a separate oblast in 1903AD) [@Chichekian1967Territoria; @Hajiyev2017Socio; @Taghiyeva2026Social].

## Emancipation, Resettlement and Minorities

Demographic dynamics under Tsarist rule rested on two structural transformations: agrarian reform and state-sponsored or economic migration. Unlike European Russia, where serfdom ended in February 1861AD, Georgian peasant emancipation unfolded in stages between 1864AD (Tiflis Governorate) and 1871AD (Abkhazia and Mingrelia), while Muslim peasants in Azerbaijan and Erivan remained mostly state peasants (*gosudarstvennye krestyane*) until the land-settlement decrees of 1870AD and 1912AD [@Taghiyeva2026Social; @Sadleir2025Spravedliv; @Asadov2025Socio].

Meanwhile, Saint Petersburg actively reshaped frontier ethno-demography: settling Württemberg Germans in Helenendorf and Katharinenfeld (1817-1819AD), relocating roughly 40k Persian Armenians and 90k Ottoman Armenians into Erivan, Karabakh and Akhaltsikhe (1828-1830AD), planting Russian *Dukhobor* and *Molokan* sectarians across Javakheti, Mugan and Kars and absorbing tens of thousands of Muslim *muhajir* departures to Ottoman Anatolia and Qajar Iran [@Shafiyev2015Russian; @Amrahov2023Ethnic; @Ibishov2025Resettleme; @HamedTroyansky2021Becoming].

Smaller confessional and linguistic communities further enriched the regional mosaic. Indigenous Mountain Jews in Quba (Krasnaya Sloboda), Oghuz and Shamakhi, Georgian Jews in Kutaisi, Tskhinvali and Oni and newly arrived Ashkenazi artisans in Baku and Tbilisi formed distinct commercial and craft quarters enumerated separately in imperial town censuses [@Levin2025Jews]. Similarly, Yazidi Kurdish pastoralists migrated northward from Ottoman Anatolia into Erivan Governorate, Aleksandropol uyezd and Kars Oblast during the 1828-1829AD and 1877-1878AD wars [@PobedonostsevaKa2022Soviet], while Tsarist judicial and educational reforms gradually replaced Persian- and Georgian-language chancellery traditions and local Islamic *qadi* courts with imperial Russian bureaucracy [@Sadleir2025Spravedliv; @Amrahov2026History; @Anon2025Education].

# Methodology

Quantitative reconstruction across the 116-year span from 1801AD to 1917AD synthesises three tiers of imperial statistical records. For the conquest and early Viceroyalty decades (1801-1865AD), provincial totals derive from Russian military cameral descriptions (*kameralnye opisaniya*) compiled in 1823AD, 1831-1832AD and 1842AD, supplemented by the Ministry of Internal Affairs soul revisions and the annual *Kavkazskiy kalendar* directories published in Tiflis from 1845AD onward [@Amrahov2023Ethnic; @Amrahov2025Numeral; @Taghiyeva2026Social]. Because Transcaucasia was exempted from the European Russian poll-tax soul revisions (*revizii*) prior to the 1860s, cameral household enumerations (*dymy*, or hearths) form the indispensable baseline for early nineteenth-century densities, adjusted for seasonal pastoralist mobility and female under-counting [@Shafiyev2015Russian; @Aliyev2026Impact].

For the high imperial era (1886-1914AD), our chronology locks onto the 1886AD Transcaucasian family-list household surveys (*posemeynye spiski*), the First All-Russian General Census of 28 January 1897AD directed by Petr Semenov-Tyan-Shanskii and edited by Nikolai Troinitskii (1905AD) and the 1914AD *Kavkazskiy kalendar* administrative returns compiled on the eve of the First World War [@Shafiyev2015Russian; @Belova2018Dmitriy; @Hajiyev2017Socio; @Taghiyeva2026Social]. Because the 1897AD Census recorded actual present population (*nalichnoe naselenie*) by mother tongue, confession, estate and birthplace across every *uyezd* and city, it provides the primary structural anchor for our entire late imperial curve. Post-1914AD figures adjust the 1914AD returns for First World War military conscription, Anatolian refugee inflows into Erivan, Kars and Tiflis during 1915-1916AD and typhus mortality prior to the February 1917 Revolution [@Hajiyev2017Socio; @Chichekian1967Territoria].

Spatially, the 185.236,9 km² domain (2.969 five-arcminute cells) is partitioned into three analytical subregions aligned to contemporary national frontiers (Table \ref{tab:subregions}): Tiflis, Kutaisi and Batumi Governorates (Georgia, 69.425,8 km²), Baku and Elisabethpol Governorates (Azerbaijan, 86.203 km²) and Erivan Governorate and Kars Oblast (Armenian-frontier core, 29.608,1 km²). To disaggregate aggregate provincial counts onto continuous 5-arcminute grids without arbitrary administrative step cliffs, historical and modern census polygons from geoBoundaries [@Runfola2020GeoBoundaries] are scaled through strictly mass-conserving pycnophylactic redistribution over metric-isotropic radial distance fields combined with non-stationary Matérn ($\nu = 3/2$) residual kriging. Across the broader MENA and Caucasian macro-domain, this pipeline calibrates against 29 historical subadministrative units and 2.629 modern subadministrative polygons over 83 benchmark years, achieving a 100% pass rate across 65.864 unit-year conservation checks within 0,01% tolerance and a global maximum relative error of $5{,}85 \times 10^{-8}$.

On the early-modern residual variogram surface underpinning the 1801-1917AD spatial priors, Freeman-Tukey variance stabilisation yields a raw dimensionless short-range correlation scale of $\tau_1 = 1{,}52$ (effective short range 49,17 km, residual $R^2 = 0{,}999$), weighted by fluvial ($\beta_3 = 0{,}0334$) and coastal ($\beta_4 = 0{,}0282$) habitability covariates alongside an active urban-footprint mask that prevents modern metropolitan sprawl from distorting pre-industrial rural surfaces. As Figure \ref{fig:trajectory} shows, demographic expansion remained measured across all three subregions until the 1860s before accelerating sharply with railway integration and oil extraction between 1865AD and 1917AD.

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Area (km²)</th><th class="crd-th">1801AD</th><th class="crd-th">1865AD</th><th class="crd-th">1897AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tiflis, Kutaisi and Batumi Governorates (Georgia)</strong></td><td class="crd-td">69.425,8</td><td class="crd-td">780k</td><td class="crd-td">1,45M</td><td class="crd-td">2,11M</td><td class="crd-td">2,65M</td></tr>
<tr><td class="crd-td"><strong>Baku and Elisabethpol Governorates (Azerbaijan)</strong></td><td class="crd-td">86.203</td><td class="crd-td">680k</td><td class="crd-td">1,25M</td><td class="crd-td">1,81M</td><td class="crd-td">2,34M</td></tr>
<tr><td class="crd-td"><strong>Erivan Governorate and Kars Oblast</strong></td><td class="crd-td">29.608,1</td><td class="crd-td">310k</td><td class="crd-td">590k</td><td class="crd-td">829k</td><td class="crd-td">1,01M</td></tr>
<tr><td class="crd-td"><strong>Total Transcaucasia</strong></td><td class="crd-td">185.236,9</td><td class="crd-td">1,77M</td><td class="crd-td">3,29M</td><td class="crd-td">4,75M</td><td class="crd-td">6M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Subregional land areas and benchmark population totals across Georgia, Azerbaijan and Armenia from 1801AD to 1917AD.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-russian-transcaucasia/fig2_russian_transcaucasia_trajectory.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate population growth across Transcaucasia from 1801AD to 1917AD (left) and subregional population totals in 1917AD (right).</figcaption>
</figure>

# Testing and Validation

To test the internal coherence of our three-subregion series against raw Tsarist enumerations, Table \ref{tab:guberniya-audit} compiles the historical subadministrative series from the 1886AD family-list survey, the 1897AD Troinitskii Census and the 1914AD Viceroyalty estimates. Across the five core governorates of the South Caucasus, the 1897AD Imperial Census enumerated exactly 1.051.032 inhabitants in Tiflis Governorate and 1.058.241 in Kutaisi Governorate (which then encompassed Batumi Okrug with 88.444 residents, Artvin Okrug with 56.140 and Sukhumi Okrug with 106.179), yielding a combined Georgian-zone count of 2.109.273 inhabitants [@Shafiyev2015Russian; @Hajiyev2017Socio].

Erivan Governorate recorded 829.556 inhabitants in 1897AD [@Amrahov2025Numeral; @Shafiyev2015Russian], while Baku Governorate (826.716) and Elisabethpol Governorate (878.415) totalled 1.705.131 inhabitants before adding Zakataly Okrug (84.224) and harmonising borderland uyezds to reach the 1,81M Azerbaijani subregion benchmark [@Taghiyeva2026Social; @Asadov2025Socio]. Kars Oblast, annexed from the Ottoman Empire in 1878AD and returned to Turkey in 1921AD, enumerated a further 290.654 inhabitants in 1897AD outside the three-republic mask [@Chichekian1967Territoria; @Hajiyev2017Socio].

<figure class="crd-table-figure" id="tab:guberniya-audit">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Guberniya Grouping</th><th class="crd-th">ISO3</th><th class="crd-th">1886AD</th><th class="crd-th">1897AD Census</th><th class="crd-th">1914AD</th><th class="crd-th">1886-1914AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tiflis &amp; Kutais Guberniyas (Georgia)</strong></td><td class="crd-td">GEO</td><td class="crd-td">1,68M</td><td class="crd-td">2.109.273</td><td class="crd-td">2,6M</td><td class="crd-td">+54,8%</td></tr>
<tr><td class="crd-td"><strong>Erivan Guberniya (Armenia)</strong></td><td class="crd-td">ARM</td><td class="crd-td">670k</td><td class="crd-td">829.556</td><td class="crd-td">1M</td><td class="crd-td">+49,3%</td></tr>
<tr><td class="crd-td"><strong>Baku &amp; Elizavetpol Guberniyas (Azerbaijan)</strong></td><td class="crd-td">AZE</td><td class="crd-td">1,41M</td><td class="crd-td">1.705.131</td><td class="crd-td">2,34M</td><td class="crd-td">+65,9%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Historical guberniya enumerations across Transcaucasia from 1886AD to 1914AD, showing exact 1897AD Troinitskii Census totals and inter-censal expansion.</figcaption>
</figure>

Table \ref{tab:guberniya-1897} disaggregates the 1897AD Troinitskii Census into all seven constituent imperial provinces and frontier oblasts, pairing official present population counts with male, female and urban shares [@Shafiyev2015Russian; @Taghiyeva2026Social; @Hajiyev2017Socio]. The pronounced male surplus in Baku Governorate (55,7% male) and Batumi Okrug (60,1% male) directly reflects young male labour immigration into the Absheron oilfields and the Batumi port-rail terminus, whereas Kars Oblast's high male ratio (55,2%) mirrors large frontier military garrisons stationed along the Anatolian border.

<figure class="crd-table-figure" id="tab:guberniya-1897">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Imperial Province / Oblast</th><th class="crd-th">1897AD Total</th><th class="crd-th">Male</th><th class="crd-th">Female</th><th class="crd-th">Regional Share</th><th class="crd-th">Administrative Seat</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tiflis Governorate</strong></td><td class="crd-td">1.051.032</td><td class="crd-td">575.792</td><td class="crd-td">475.240</td><td class="crd-td">22,1%</td><td class="crd-td">Tiflis (159,6k)</td></tr>
<tr><td class="crd-td"><strong>Kutaisi Governorate (incl. Batumi)</strong></td><td class="crd-td">1.058.241</td><td class="crd-td">549.550</td><td class="crd-td">508.691</td><td class="crd-td">22,3%</td><td class="crd-td">Kutaisi (32,5k)</td></tr>
<tr><td class="crd-td"><strong>Batumi Okrug (Oblast from 1903AD)</strong></td><td class="crd-td">88.444</td><td class="crd-td">53.149</td><td class="crd-td">35.295</td><td class="crd-td">1,9% (in Kutaisi)</td><td class="crd-td">Batumi (28,5k)</td></tr>
<tr><td class="crd-td"><strong>Baku Governorate</strong></td><td class="crd-td">826.716</td><td class="crd-td">460.609</td><td class="crd-td">366.107</td><td class="crd-td">17,4%</td><td class="crd-td">Baku (111,9k)</td></tr>
<tr><td class="crd-td"><strong>Elisabethpol Governorate</strong></td><td class="crd-td">878.415</td><td class="crd-td">479.882</td><td class="crd-td">398.533</td><td class="crd-td">18,5%</td><td class="crd-td">Elisavetpol (33,6k)</td></tr>
<tr><td class="crd-td"><strong>Erivan Governorate</strong></td><td class="crd-td">829.556</td><td class="crd-td">441.889</td><td class="crd-td">387.667</td><td class="crd-td">17,5%</td><td class="crd-td">Erivan (29k)</td></tr>
<tr><td class="crd-td"><strong>Kars Oblast (frontier annex)</strong></td><td class="crd-td">290.654</td><td class="crd-td">160.571</td><td class="crd-td">130.083</td><td class="crd-td">Outside 3-rep. mask</td><td class="crd-td">Kars (20,8k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Exact 1897AD Russian Imperial Census provincial enumerations across Transcaucasia, showing sex ratios and municipal seat populations from Troinitskii (1905AD).</figcaption>
</figure>

Reconciling the 1897AD guberniya totals with our continuous 1900AD population surface (Figure \ref{fig:density}) confirms both mass conservation and spatial fidelity. Mean population density across the 185,24k km² mask rose from 9,6 inhabitants per km² in 1801AD to 25,6 per km² in 1897AD and 32,4 per km² by 1917AD, yet spatial dispersion remained stark. By 1917AD, Georgia's Tiflis and Kutaisi governorates reached 38,2 inhabitants per km² and Armenia's Erivan basin reached 34,1 per km², while Azerbaijan's 86.203 km² domain averaged 27,1 per km² because high-density industrial clusters on the Absheron Peninsula and Ganja foothills offset lightly settled semi-arid pastures along the lower Kura and Shirvan steppe.

Urban hierarchy validation provides a second independent check. Out of 5.125 audited ledger candidates, 4.875 individually assessed settlements met full inclusion criteria across Georgia, Azerbaijan and Armenia, while 250 duplicate variants or co-located localities were excluded. Anchored directly to the 1897AD Russian Imperial Census, the 1917AD Eastern Georgia enumeration and *Kavkazskiy kalendar* municipal returns, a log-log Zipf rank-size regression across all 4.875 peak settlement populations yields an exponent of $\alpha = 1{,}16$ ($R^2 = 0{,}96$), confirming a well-structured imperial urban-rural hierarchy headed by the twin metropoles of Tbilisi and Baku. Post-1917AD administrative continuity is further preserved through 150 matched modern geoBoundaries polygons (61 ADM2 municipalities in Georgia, 11 ADM1 provinces in Armenia and 78 ADM2 districts and cities in Azerbaijan), ensuring continuous temporal linkage across the 1917AD regime boundary [@Runfola2020GeoBoundaries].

<figure class="crd-figure-block" id="fig:density">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-russian-transcaucasia/fig3_russian_transcaucasia_density.png" alt="fig:density" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Disaggregated population density surface at the 1900AD imperial benchmark (left) and mean subregional densities in 1917AD (right).</figcaption>
</figure>

# Results

## Tiflis and Kutaisi Governorates (Georgia)

Across the Georgian provinces (69.425,8 km²), total population grew more than threefold from 780k in 1801AD to 1,05M in 1835AD, 1,45M in 1865AD, 2,11M in 1897AD and 2,65M in 1917AD [@Shafiyev2015Russian; @Khonelidze2022Georgian]. Early nineteenth-century recovery followed the pacification of Lezgin raids from Dagestan and Persian invasions, although eastern Georgia suffered severe disruptions during the 1812AD Kakheti uprising and cholera outbreaks along the military roads in 1830-1831AD, 1847-1848AD and 1892AD [@LeDonne2006Building; @Anonymous2023Demographi].

Abolition of serfdom in Tiflis Governorate in October 1864AD, Kutaisi in 1865AD, Mingrelia in 1867AD and Abkhazia in 1870-1871AD freed rural labour, yet small peasant allotments (*nadely*) and high quitrents (*obrok*) preserved land hunger across Imereti and Guria [@Sadleir2025Spravedliv]. In the southeastern borderland of Borchaly and Gazakh, Armenian, Georgian, Azerbaijani and Greek villages shared mixed mountain-steppe pastures whose administrative allocation shifted repeatedly between Tiflis and Elisabethpol [@Aliyev2026Impact; @Wier2026Conflict].

Meanwhile, western coastal Abkhazia underwent violent demographic rupture: following the 1866AD Lykhny revolt and the 1877-1878AD Russo-Ottoman War, tens of thousands of Muslim Abkhazians emigrated by sea to Ottoman Anatolia, leaving empty coastal tracts subsequently resettled by Mingrelians, Armenians, Greeks, Estonians and Russians [@Shafiyev2015Russian; @HamedTroyansky2021Becoming; @Wier2026Conflict].

Transport integration transformed Georgia's urban spine after 1870AD. The opening of the Poti-Tbilisi railway across the Surami Pass in 1872AD, its extension eastward to Baku and westward to Batumi in 1883AD and the Surami tunnel in 1890AD linked the Black Sea ports directly to the Caspian basin. Recovering from Agha Mohammad Khan's 1795AD sack, Tbilisi expanded from roughly 20k inhabitants in 1801AD to 68k in 1865AD, 104k at the 1876AD municipal census, 159,6k in the 1897AD Imperial Census and 278k by 1917AD, functioning simultaneously as Viceroyalty seat, commercial clearing-house and judicial centre [@Sadleir2025Spravedliv; @Khonelidze2022Georgian].

In western Georgia, Kutaisi climbed from 4k in 1801AD to 32,5k in 1897AD and 52,8k in 1917AD; Batumi expanded from 2k under Ottoman rule and 5k at its 1878AD annexation to 28,5k in 1897AD and a pre-evacuation peak of 44,5k in 1915AD as a duty-free port (1878-1886AD) and kerosene export terminal after the 1907AD Baku-Batumi pipeline opened (before wartime front evacuations reduced it to 31,2k in 1917AD); Sukhumi reached 21,8k by 1917AD; and Poti grew from 1,5k at its chartering in 1858AD to 7,3k in 1897AD and 18,2k in 1915AD [@Hajiyev2017Socio; @Taghiyeva2026Social]. Industrial specialisation and rail transit also elevated inland towns: Chiatura in upper Imereti reached 4,3k in 1897AD and 9,4k in 1915AD after manganese extraction began in 1879AD, supplying more than half of global manganese exports by 1900AD, while Akhaltsikhe (22,4k in 1915AD), Telavi (16,9k in 1917AD), Gori (16,8k), Sighnaghi (11,2k), Ozurgeti (peaking at 11,2k in 1916AD; 6,8k in 1917AD), Samtredia (8,9k), Khashuri (7,2k), Akhalkalaki (7,1k), Tskhinvali (5,3k) and Zugdidi (5,2k) anchored provincial administration and agricultural markets.

## Baku and Elisabethpol Governorates (Azerbaijan)

The Azerbaijani subregion (86.203 km²) recorded the steepest demographic expansion in Transcaucasia, climbing 3,44-fold from 680k in 1801AD to 890k in 1835AD, 1,25M in 1865AD, 1,81M in 1897AD and 2,34M in 1917AD [@Taghiyeva2026Social; @Ibishov2023Migrations]. During the first half-century after Gulistan (1813AD), population distribution remained predominantly rural and pastoral: semi-nomadic Turkic tribes (*elat*) moved seasonally between winter lowlands in the Kura-Aras basin and summer highland pastures in Karabakh and Zangezur, while irrigated silk and cotton cultivation centred on Şəki (Nukha), Shamakhi and Ganja [@Asadov2025Socio; @Aliyev2026Impact; @Isaxanli2021Karabakh].

A devastating earthquake in Shamakhi in 1859AD prompted Tsarist authorities to transfer the provincial capital eastward to Baku, a small walled port of roughly 3,5k residents in 1801AD and 7,4k in 1850AD whose demographic destiny soon reversed [@Anonymous2019Baku; @Anon2026Ethnodemog]. At the same time, rapid demographic recovery across the Russian Empire - analysed by Dmitriy Mendeleev alongside the 1897AD Census returns - elevated Transcaucasia's strategic importance as Russia's primary southern energy and cotton frontier [@Belova2018Dmitriy; @Taghiyeva2026Social].

When the Russian state abolished its restrictive *otkup* oil-leasing monopoly in 1872AD and auctioned Absheron petroleum plots to private capital, Baku entered an industrial expansion unmatched anywhere else in the Empire outside the Donbas and Saint Petersburg [@Anonymous2019Baku; @Anon2026Ethnodemog]. Driven by Nobel Brothers mechanical drilling, Rothschild capital and the 1883AD Transcaucasian railway, Baku's oil output surpassed half of world crude production by 1901AD.

In our census-anchored urban chronology, Baku multiplied from 3,5k inhabitants in 1801AD and 14,5k in 1870AD to 111,9k in the 1897AD Imperial Census, 214,7k in the 1913AD municipal enumeration and 248k by 1917AD (Table \ref{tab:top-settlements}), surrounded by Absheron industrial drilling settlements across Sabunçu, Balaxanı and Suraxanı [@Anon2026Ethnodemog; @BAYRAMOV2026Ideologica]. Oilfield wages drew massive labour migration: in addition to Russian, Armenian, Jewish and Dagestani Lezgin workers, more than 100k seasonal labourers (*amala*) crossed the Aras border from Iranian Azerbaijan (*South Azerbaijan*) between 1890AD and 1914AD [@Ibishov2023Migrations; @Taghiyeva2026Social; @Levin2025Jews].

Outside Absheron, Tsarist agrarian colonisation transformed the Mugan Steppe and western Azerbaijan. State-funded irrigation canals along the lower Aras after 1900AD turned seasonal winter pastures into commercial cotton and wheat settlements populated by Russian peasant colonists alongside Azerbaijani herders [@Ibishov2025Resettleme; @Taghiyeva2026Social]. Across Elisabethpol and Baku governorates, Ganja (officially renamed Elisavetpol in 1804AD) grew from 10k at its 1804AD conquest to 33,6k in 1897AD and 60,2k in 1917AD as a silk, copper and viticulture centre, complemented by Shusha (25,9k in 1897AD; 43,9k in 1917AD), Shaki (Nukha, 24,7k in 1897AD; 38,9k in 1917AD), Quba (24,6k), earthquake-scarred Shamakhi (peaking at 22,4k in 1855AD before the 1859AD and 1902AD quakes, 20k in 1897AD and 21,8k in 1917AD), Salyan (17,2k), Lankaran (16,1k), Nakhchivan (11,9k) and the Siemens copper-smelting settlement of Gadabay (founded 1865AD, peaking at 3,9k in 1915AD) [@Asadov2025Socio; @Aliyev2026Impact].

Yet rapid proletarianisation and competition over land and jobs sharpened communal tensions, erupting during the 1905-1906AD Armenian-Tatar clashes in Baku, Shusha, Ganja and Nakhchivan alongside oilfield strikes that reshaped Azerbaijani political consciousness before 1914AD [@BAYRAMOV2026Ideologica; @Shafiyev2015Russian; @Isaxanli2021Karabakh].

<figure class="crd-table-figure" id="tab:top-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">1801AD</th><th class="crd-th">1897AD</th><th class="crd-th">1917AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Tbilisi</td><td class="crd-td">Georgia</td><td class="crd-td">20k</td><td class="crd-td">159,6k</td><td class="crd-td">278k</td><td class="crd-td">278k (1917)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Baku</td><td class="crd-td">Azerbaijan</td><td class="crd-td">3,5k</td><td class="crd-td">111,9k</td><td class="crd-td">248k</td><td class="crd-td">248k (1917)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Ganja</td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">33,6k</td><td class="crd-td">60,2k</td><td class="crd-td">60,2k (1917)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Kutaisi</td><td class="crd-td">Georgia</td><td class="crd-td">4k</td><td class="crd-td">32,5k</td><td class="crd-td">52,8k</td><td class="crd-td">52,8k (1917)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Gyumri</td><td class="crd-td">Armenia</td><td class="crd-td">-</td><td class="crd-td">30,6k</td><td class="crd-td">51,9k</td><td class="crd-td">51,9k (1917)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Batumi</td><td class="crd-td">Georgia</td><td class="crd-td">2k</td><td class="crd-td">28,5k</td><td class="crd-td">31,2k</td><td class="crd-td">44,5k (1915)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Shusha</td><td class="crd-td">Azerbaijan</td><td class="crd-td">8,5k</td><td class="crd-td">25,9k</td><td class="crd-td">43,9k</td><td class="crd-td">43,9k (1917)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Yerevan</td><td class="crd-td">Armenia</td><td class="crd-td">10,8k</td><td class="crd-td">29k</td><td class="crd-td">42,5k</td><td class="crd-td">42,5k (1917)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Shaki</td><td class="crd-td">Azerbaijan</td><td class="crd-td">11,5k</td><td class="crd-td">24,7k</td><td class="crd-td">38,9k</td><td class="crd-td">38,9k (1917)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Xətai</td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,4k</td><td class="crd-td">31,9k (1914)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Dushetis</td><td class="crd-td">Georgia</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29k</td><td class="crd-td">29,4k (1914)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Shida Kartli</td><td class="crd-td">Georgia</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,9k</td><td class="crd-td">28,3k (1914)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Karki</td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,7k</td><td class="crd-td">25,2k (1914)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Quba</td><td class="crd-td">Azerbaijan</td><td class="crd-td">6,2k</td><td class="crd-td">15,4k</td><td class="crd-td">24,6k</td><td class="crd-td">24,6k (1917)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Samtskhe-Javakheti</td><td class="crd-td">Georgia</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,4k</td><td class="crd-td">23,9k (1914)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Top 15 catalogued urban centres across Russian Transcaucasia ranked by peak population, contrasting 1801AD baselines with exact 1897AD Imperial Census counts and 1917AD totals.</figcaption>
</figure>

## Erivan Governorate and the Armenian Highlands

Smallest in land area (29.608,1 km²) yet strategic as the imperial frontier facing both Ottoman Anatolia and Qajar Iran, the Armenian subregion expanded from 310k in 1801AD to 420k in 1835AD, 590k in 1865AD, 829k in 1897AD and 1,01M in 1917AD (+225,8%) [@Amrahov2023Ethnic; @Amrahov2025Numeral; @Chichekian1967Territoria]. Immediately after the 1828AD Treaty of Turkmenchay, the former Erivan and Nakhchivan khanates underwent rapid demographic restructuring: whereas Muslims formed roughly three-quarters of the highland population prior to Russian conquest, the state-organised migration of 40k Persian Armenians and 90k Ottoman Armenians under General Ivan Paskevich and Alexander Griboyedov, coupled with Muslim out-migration, established an approximate Christian-Muslim parity by the 1830s and lifted the Armenian share in Erivan Governorate to 53,2% by the 1897AD Census [@Shafiyev2015Russian; @Amrahov2025Numeral; @Amrahov2026History].

Urban expansion across Erivan Governorate accelerated only after the Caucasus rail network penetrated the highlands via the Tbilisi-Aleksandropol line in 1899AD, extending to Erivan in 1902AD and reaching Julfa on the Persian frontier in 1908AD [@Chichekian1967Territoria; @Amrahov2025Numeral]. Throughout late imperial rule, the garrison and railway hub of Gyumri (established as the fortress of Aleksandropol in 1837AD) remained the largest city in Russian Armenia, expanding from 3,8k at its founding to 30,6k in 1897AD and 51,9k in 1917AD. Yerevan grew more gradually from 10,8k in 1801AD and 11,5k at the 1828AD cameral survey to 29k in the 1897AD Census and 34,2k in 1915AD, before wartime refugee inflows lifted it to 42,5k in 1917AD. Secondary highland centres included Gavar (refounded as Nor Bayazet in 1830AD, reaching 14,8k in 1917AD), the ecclesiastical seat of Vagharshapat (7,9k), Vanadzor (Karakilisa, settled 1828AD, 6,3k), Ashtarak (5k), the copper-smelting towns of Alaverdi (4k in 1915AD) and Kapan (3,7k in 1915AD) and, across the annexed Kars Oblast frontier, the fortress capital of Kars (20,8k in 1897AD; 31,8k in 1915AD) [@Bosworth2007Historic; @Asadov2025Socio; @Darieva2023Making]. Figure \ref{fig:settlements} charts the resulting 4.875-settlement rank-size distribution alongside the leading urban hubs of Russian Transcaucasia.

The First World War shattered this late imperial equilibrium. Between November 1914 and the autumn of 1917, fighting along the Caucasus Front - beginning with the winter battle of Sarikamish (December 1914 to January 1915) and continuing through the Russian advances into Erzurum, Van and Trabzon in 1916AD - turned Erivan Governorate, Kars Oblast and southern Tiflis into an overcrowded military staging ground [@Hajiyev2017Socio; @Chichekian1967Territoria]. Following the 1915AD Ottoman deportations and massacres in Eastern Anatolia, between 250k and 350k Armenian survivors fled across the frontier into Erivan, Kars and Tiflis, overwhelming local food supplies and sparking deadly typhus and cholera outbreaks throughout 1916-1917AD [@Shafiyev2015Russian; @TerMatevosyan2023Transcauca; @Tunca2026Post]. When the Provisional Government and the Caucasus Front collapsed after October 1917, the dismantling of Tsarist governance left three nascent republics confronting severe famine, displaced populations and contested borders [@Hajiyev2017Socio; @Chichekian1967Territoria].

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-russian-transcaucasia/fig4_russian_transcaucasia_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution across 4.875 Transcaucasian settlements (left) and leading catalogued towns by peak population (right).</figcaption>
</figure>

# Limitations

Three empirical constraints qualify these Transcaucasian reconstructions. First, early nineteenth-century Russian cameral descriptions (1823-1850sAD) were conducted primarily during autumn and winter for fiscal assessment, systematically under-enumerating Muslim women and pastoral *elat* clans dispersed across seasonal winter quarters in the Mugan, Mil and Shirvan plains [@Shafiyev2015Russian; @Amrahov2025Numeral]. Early nineteenth-century benchmarks for 1801AD and 1835AD therefore carry wider uncertainty envelopes ($\pm 10\%$) than the post-1886AD household and census anchors.

Second, a deliberate cartographic boundary distinction separates the imperial administrative perimeter from our analytical mask. Whereas the Caucasus Viceroyalty after 1878AD encompassed Kars Oblast (290.654 inhabitants in 1897AD) and Artvin Okrug (56.140 inhabitants in 1897AD), both territories were retroceded to Turkey under the 1921AD Treaties of Moscow and Kars [@Chichekian1967Territoria; @Hajiyev2017Socio]. To preserve strict spatial comparability with modern Georgian, Armenian and Azerbaijani census units, our 185,24k km² mask tracks the three-republic core rather than the wider 1878-1917AD Viceroyalty footprint. Accordingly, the 4.875-settlement ledger strictly aligns with the three-republic spatial mask across Georgia, Azerbaijan and Armenia, excluding retroceded frontier towns in Kars Oblast, Artvin Okrug and Surmalu uyezd from the point catalogue while documenting their 1897AD Imperial Census governorate totals in Table \ref{tab:guberniya-1897}.

Third, the 1917AD terminal benchmark cannot match the precision of the 1897AD Census. Although imperial authorities planned a Second All-Russian Census for 1915AD, wartime mobilisation forced its cancellation [@Belova2018Dmitriy]. Figures for 1917AD therefore aggregate 1914AD *Kavkazskiy kalendar* district returns adjusted for military conscription, Anatolian refugee inflows into Erivan and Tiflis and epidemic mortality rather than a unified household count [@Hajiyev2017Socio; @Chichekian1967Territoria].

# Conclusion

Imperial Russian rule between 1801AD and 1917AD altered the demographic scale and spatial balance of Transcaucasia more profoundly than any earlier period since antiquity. Rising from 1,77M inhabitants at the annexation of Kartli-Kakheti to 4,75M at the 1897AD Census and 6M in 1917AD, the three South Caucasian territories shifted from frontier khanates and highland principalities into an interconnected agrarian and industrial region tied to Black Sea shipping and Caspian oil [@Taghiyeva2026Social; @Anonymous2019Baku]. At the same time, state-managed Christian and sectarian resettlement, Muslim *muhajir* departures and wartime refugee flights after 1914AD hardened ethnic and territorial fault lines across Karabakh, Zangezur, Nakhchivan, Borchaly and the Ararat plain that outlasted Tsarist collapse [@Shafiyev2015Russian; @Asadov2025Socio; @TerMatevosyan2023Transcauca; @Tunca2026Post].

# Appendix

To document post-imperial administrative continuity across the 1917AD regime transition, Table \ref{tab:modern-units} summarises the ten most populous modern subadministrative polygons (geoBoundaries ADM1 and ADM2 units) intersecting the Transcaucasian mask across 1959-2026AD national and Soviet censuses [@Runfola2020GeoBoundaries]. Note how late twentieth-century demographic concentration in Baku City, Tbilisi, Yerevan, Lankaran and Ganja continues the exact metropolitan and corridor axes forged during the 1872-1914AD railway and petroleum boom.

<figure class="crd-table-figure" id="tab:modern-units">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Modern Unit</th><th class="crd-th">ISO3</th><th class="crd-th">Level</th><th class="crd-th">Area (km²)</th><th class="crd-th">Earliest Census</th><th class="crd-th">Latest Census</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baku City</strong></td><td class="crd-td">AZE</td><td class="crd-td">ADM2</td><td class="crd-td">2.098</td><td class="crd-td">1,53M (1979AD)</td><td class="crd-td">2,64M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tbilisi</strong></td><td class="crd-td">GEO</td><td class="crd-td">ADM2</td><td class="crd-td">324</td><td class="crd-td">703k (1959AD)</td><td class="crd-td">1,37M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>Yerevan</strong></td><td class="crd-td">ARM</td><td class="crd-td">ADM1</td><td class="crd-td">264</td><td class="crd-td">517,7k (1959AD)</td><td class="crd-td">1,14M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Lankaran City</strong></td><td class="crd-td">AZE</td><td class="crd-td">ADM2</td><td class="crd-td">67</td><td class="crd-td">510,2k (1979AD)</td><td class="crd-td">933,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ganja City</strong></td><td class="crd-td">AZE</td><td class="crd-td">ADM2</td><td class="crd-td">66</td><td class="crd-td">426,8k (1979AD)</td><td class="crd-td">637,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sumqayit City</strong></td><td class="crd-td">AZE</td><td class="crd-td">ADM2</td><td class="crd-td">121</td><td class="crd-td">205,7k (1979AD)</td><td class="crd-td">497k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Absheron District</strong></td><td class="crd-td">AZE</td><td class="crd-td">ADM2</td><td class="crd-td">1.706</td><td class="crd-td">38,4k (1970AD)</td><td class="crd-td">435,2k (2026AD)</td></tr>
<tr><td class="crd-td"><strong>Lori</strong></td><td class="crd-td">ARM</td><td class="crd-td">ADM1</td><td class="crd-td">3.718</td><td class="crd-td">219,5k (1959AD)</td><td class="crd-td">229,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shirak</strong></td><td class="crd-td">ARM</td><td class="crd-td">ADM1</td><td class="crd-td">2.746</td><td class="crd-td">218,7k (1959AD)</td><td class="crd-td">242,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shirvan City</strong></td><td class="crd-td">AZE</td><td class="crd-td">ADM2</td><td class="crd-td">65</td><td class="crd-td">194,3k (1979AD)</td><td class="crd-td">316,6k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading modern subadministrative units across Georgia, Armenia and Azerbaijan linked to the historical mask, showing earliest and latest matched census populations.</figcaption>
</figure>

# Sources

::: {#refs}
:::
