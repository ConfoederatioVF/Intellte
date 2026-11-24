---
title: "Safavid, Afsharid and Qajar Iran (1501-1925)"
subtitle: "Caspian Rice, Plateau Qanats, Pastoral Confederations and Famine Shocks, 1501AD to 1925AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: safavid_afsharid_qajar_iran_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_safavid_afsharid_qajar_iran_spatial.png"
hero_caption: "Five-region territorial partition, major river corridors and urban centres of Iran from 1501AD to 1925AD."
hero_label: "fig:hero-safavid-afsharid-qajar-iran"
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

Between the Safavid coronation of Shah Isma'il I at Tabriz in 1501AD and the deposition of Ahmad Shah Qajar in 1925AD, the Iranian plateau experienced two long cycles of demographic expansion separated by an eighteenth-century collapse of nearly a fifth of its inhabitants. Across five ecological and historical macro-regions spanning 1.623.247 km² (22.439 five-arcminute cells), aggregate population rose from 6,35M in 1501AD to an early Safavid zenith of 8,05M around 1600AD under Shah Abbas I, before the Afghan invasion of 1722AD, Nader Shah's Afsharid wars and the Zand-Qajar succession struggles drove totals down to 7,45M in 1722AD and 6,55M by 1800AD [@Rieber2014Struggle; @Kondo2002Iranian; @Bosworth2007Historic]. Nineteenth-century political stabilisation under Qajar rule in Tehran initiated sustained growth to 8,1M in 1850AD, 10,5M in 1900AD and 12,65M in 1925AD, despite severe mortality shocks from Asiatic cholera pandemics, the catastrophic drought and cash-crop famine of 1870AD to 1872AD and the wartime subsistence and influenza crisis of 1917AD to 1919AD [@Shabani2025Natural; @Groot1978Kerman; @Taji2026Most; @Majd2025Historiogr]. Because neither Safavid fiscal rolls (*tumar*) nor Qajar household assessments (*bunicheh*) produced a modern nationwide headcount before the civil registration laws of the 1920s, HANDBOOK reconstructs provincial trajectories by calibrating historical urban accounts, foreign consular estimates and caravan-route tax assessments against ecological carrying capacity across Caspian rice lowlands, Zagros pastoral valleys and *qanat*-fed plateau oases [@Saatsaz2023Technology; @Mashayekhi2019Regimes]. Spatial densities are conditioned across 1.942 active regional catchments and 4.054 documented Iranian archaeological records using non-stationary Paciorek-Schervish Matérn ($\nu = 3/2$) kriging over metric-isotropic radial distance fields, then reconciled with 379 modern Iranian ADM2 (*shahrestan*) boundary polygons via strictly mass-conserving pycnophylactic scaling (65.864 domain-wide unit-year checks, maximum relative error 5,85e-08) [@Runfola2020GeoBoundaries; @Danaei2019Iran]. Across 380 individually assessed settlements led by Safavid Isfahan (335k in 1700AD), Qajar Tehran (252k in 1925AD), Tabriz (212k), Mashhad (105k), Qazvin (88k) and Shiraz (75k), the urban hierarchy conforms closely to a rank-size distribution ($\alpha = 1,11$, $R^2 = 0,87$) while registering the decisive nineteenth-century shift of demographic gravity toward the northern Alborz piedmont and Caspian basin.

# Background

## Imperial Transitions: From Tabriz and Isfahan to Tehran

The demographic history of early modern Iran is inseparable from the shifting geography of imperial capitals and the vulnerability of open plateau cities to steppe and Anatolian warfare [@Rieber2014Struggle; @Bosworth2007Historic]. When Shah Isma'il I unified western and central Iran out of Ardabil and Tabriz in 1501AD, the demographic centre of gravity lay firmly in Azerbaijan and the northwestern basins. Tabriz served as the first Safavid capital until repeated Ottoman campaigns under Selim I (1514AD) and Suleyman the Magnificent exposed the city's proximity to the Anatolian frontier [@Rieber2014Struggle; @Nag2026History]. Under Shah Tahmasp I, Safavid defence relied deliberately on scorched-earth withdrawals (*yatish*) across the Aras and upper Qizil Uzen valleys, depopulating borderland villages to deny forage to invading Ottoman armies before transferring the court southeast to Qazvin in 1555AD [@Wing2016Jalayirids; @Rieber2014Struggle].

A second and far deeper spatial realignment occurred under Shah Abbas I (1587AD to 1629AD), who transferred the imperial capital southward to Isfahan in 1598AD [@Bosworth2007Historic; @Farshi2024Gateways]. Situated in a broad *qanat*- and Zayandeh Rud-irrigated oasis on the central plateau, Isfahan lay beyond easy Ottoman cavalry reach while commanding the caravan corridors linking the Persian Gulf port of Bandar-e Abbas with Khorasan and the Caspian silk provinces. To staff the new capital and secure northern silk revenues, Shah Abbas I forcibly resettled tens of thousands of Armenian merchants and artisans from Julfa on the Aras River to New Julfa on the southern bank of the Zayandeh Rud, alongside Georgian, Circassian and Kurdish contingents planted along the Khorasan frontier to shield Mashhad from Uzbek raids [@Rieber2014Struggle; @Margaryan2024Prostituti]. Under this late sixteenth- and seventeenth-century *Pax Safavica*, aggregate population climbed from 6,35M in 1501AD to 8,05M in 1600AD, while Isfahan swelled into one of the largest cities of Eurasia, flanked by expanding craft quarters in Yazd, Kashan, Tabriz and Shiraz [@Bosworth2007Historic; @Yeler2023Iranian].

That demographic ceiling shattered in 1722AD when Mahmud Hotak's Ghilzai Afghan army besieged and starved Isfahan into surrender, inaugurating six decades of military anarchy [@Rieber2014Struggle; @Kondo2002Iranian]. Simultaneous Ottoman invasions across Kurdistan and Azerbaijan and Russian occupations of Gilan and Mazandaran fractured the realm, while Nader Shah Afshar's relentless campaigns from India to Dagestan (1736AD to 1747AD) drained the plateau of silver, draft animals and peasant conscripts [@Rieber2014Struggle; @Nag2026History]. Although Karim Khan Zand restored regional peace in Fars and the south from his capital at Shiraz between 1751AD and 1779AD, renewed civil war between the Zands and Qajars culminated in Agha Mohammad Khan's sack of Kerman in 1794AD and Tbilisi in 1795AD [@Groot1978Kerman; @Rieber2014Struggle]. By 1800AD, when Fath-Ali Shah Qajar consolidated the court at Tehran near the Alborz foothills—chosen for its proximity to Qajar tribal pastures in Astarabad and Mazandaran—Iran's total population had fallen back to 6,55M, barely above its 1501AD baseline [@Mashayekhi2019Regimes; @Bosworth2007Historic].

## Caspian, Zagros and Qanat Ecology

Behind these dynastic reversals stood three sharply contrasting agrarian and ecological regimes that governed carrying capacity across Iran's 1.623.247 km² landmass [@Saatsaz2023Technology; @Sadan2023Masters]. Along the narrow littoral between the Alborz crest and the Caspian Sea, Gilan and Mazandaran receive between 800 mm and 1.800 mm of annual rainfall. Here, dense alluvial forests supported wet-rice cultivation, citrus orchards and raw silk (*abresham*) production, sustaining rural population densities several times higher than the arid plateau [@Sadan2023Masters; @Saatsaz2023Technology]. Yet Caspian abundance carried a heavy epidemiological penalty: stagnant paddy water and marshy deltaic lagoons around Rasht, Lahijan, Amol and Sari fostered hyperendemic malaria and parasitic infections that depressed natural increase and deterred plateau troops from prolonged lowland garrisons [@Nezamabadi2014Contributi; @KashaniSabet2006Politics].

Across the central plateau and Khorasan—encompassing Tehran, Qazvin, Qom, Kashan, Isfahan, Yazd, Kerman and Mashhad—annual precipitation rarely exceeds 100 mm to 250 mm, falling chiefly as winter snow on surrounding mountain ranges. Sedentary agriculture and urban life depended entirely on gravity-fed subterranean aqueducts (*qanats* or *kariz*) tapped into alluvial fans at mountain margins [@Saatsaz2023Technology]. Engineered and maintained by hereditary specialist guilds (*muqanni*), individual *qanats* stretched 15 km to 50 km underground, delivering perennial snowmelt without mechanical pumping [@Saatsaz2023Technology]. This hydraulic infrastructure made oasis settlements resilient to seasonal heat, yet acutely fragile during protracted warfare or dynastic collapse: once rural flight interrupted annual shaft clearance, tunnel roofs collapsed, salinisation crept across fields and whole villages vanished from tax rolls within a single generation [@Saatsaz2023Technology; @Groot1978Kerman].

In the western Zagros arc—stretching from Kermanshah, Sanandaj and Hamadan through Luristan to Fars—and along the eastern steppes of Khorasan, rugged relief and winter pasture cycles favoured vertical pastoral transhumance over purely sedentary village farming [@Cabi2019Impact; @Sadan2023Masters]. Tribal confederations including the Kurds, Lurs, Bakhtiari, Qashqa'i, Khamseh, Shahsevan, Turkmen and Baluch migrated annually between lowland winter pastures (*qishlaq*) and alpine summer meadows (*yaylaq*). Estimates by nineteenth-century fiscal observers and modern historical demographers indicate that semi-nomadic pastoralists constituted between 25% and 33% of Iran's population around 1800AD, declining gradually toward 15% to 20% by 1925AD as Qajar land-registration practices, commercial agriculture and early Pahlavi pacification encouraged sedentarisation [@Cabi2019Impact; @Sadan2023Masters; @Groot1978Kerman].

## Nineteenth-Century Epidemics, Famines and the First World War

Once the Russo-Persian wars ended with the Treaties of Golestan (1813AD) and Turkmenchay (1828AD) and the Ottoman-Persian frontier stabilised after the 1847AD Treaty of Erzurum, Iran entered a century of sustained demographic recovery [@Rieber2014Struggle; @Akhmedov2019British]. Total population climbed from 6,55M in 1800AD to 8,1M in 1850AD and 10,5M by 1900AD. Nevertheless, expansion remained erratic because Iran lacked quarantine stations, paved roads or mechanical grain transport until the final decades of Qajar rule [@Shabani2025Natural; @Mashayekhi2019Regimes].

Epidemic disease struck repeatedly along pilgrimage roads to Mashhad and Qom and maritime routes from Baku, Astrakhan and the Persian Gulf [@Shabani2025Natural; @Nezamabadi2014Contributi]. A devastating outbreak of bubonic plague and Asiatic cholera in 1830AD and 1831AD decimated Rasht, Tabriz and Shiraz, followed by major cholera epidemics in 1851AD to 1853AD, 1867AD to 1872AD, 1892AD and 1904AD [@Shabani2025Natural; @KashaniSabet2006Politics]. Urban sanitation remained rudimentary, reliant on open *jub* water channels and shared courtyard cisterns (*ab-anbar*) that propagated waterborne pathogens whenever summer drought concentrated urban populations around contaminated wells [@Mashayekhi2019Regimes; @Vahdat2017Occidental].

The single worst peacetime demographic catastrophe of the Qajar century was the Great Persian Famine of 1870AD to 1872AD [@Shabani2025Natural; @Groot1978Kerman]. Triggered by two consecutive winters of failed snowfall across the Zagros and central plateau, the harvest failure was gravely compounded by agrarian commercialisation: in Isfahan, Yazd, Kerman and Fars, landlords had diverted scarce *qanat*-irrigated wheat acreage to exportable opium poppy following the collapse of Iranian silk output under pébrine silkworm blight in the 1860s [@Groot1978Kerman; @Shabani2025Natural]. Without railways or coastal-to-plateau roads, grain surpluses in Gilan or Kermanshah could not reach starving interior cities, while speculative hoarding by provincial notables inflated bread prices tenfold. Contemporary consular reports and demographic reconstructions estimate excess mortality at 1,5M to 2M deaths—roughly 15% to 20% of the national population—with cities such as Qom, Kashan, Yazd, Kerman and Mashhad losing up to a third of their residents to starvation, typhus and cholera [@Shabani2025Natural; @Groot1978Kerman; @Kondo2002Iranian].

A final violent shock struck during the First World War (1914AD to 1918AD) and its immediate aftermath [@Taji2026Most; @Majd2025Historiogr]. Despite Iran's formal neutrality, Russian, Ottoman and British forces fought across Azerbaijan, Kurdistan, Kermanshah, Hamadan and Khorasan, requisitioning pack camels, mules and standing grain harvests [@Akhmedov2019British; @Rieber2014Struggle; @Cabi2019Impact]. Severe drought in 1917AD coincided with wartime transport breakdown, hyperinflation and the global 1918AD influenza pandemic, producing intense famine and typhus mortality across the western and central provinces [@Taji2026Most; @Majd2024Historiogr; @Majd2025Historiogr]. Modern scholarship debates the precise toll, with conservative demographic estimates placing wartime excess deaths between 1M and 2M while higher revisionist tallies suggest still greater losses in northwestern and central districts [@Taji2026Most; @Majd2024Historiogrb; @Majd2025Historiogr]. Rapid post-war recovery, supported by Reza Khan's fiscal centralisation, road building and sanitary reforms after 1921AD, lifted aggregate population back to 12,65M by 1925AD [@Danaei2019Iran; @KashaniSabet2006Politics; @Sadan2023Masters].

# Methodology

## Sub-Regional Territorial Partition

To capture the divergent demographic trajectories of Iran's humid littoral, arid interior oases, tribal mountain zones and eastern marches across 1501AD to 1925AD, HANDBOOK partitions the 1.623.247 km² domain (22.439 five-arcminute cells) into five contiguous ecological and administrative macro-regions (Table \ref{tab:subregions-iran}). Boundaries follow major drainage divides and historical Qajar *eyalat* and *velayat* groupings, ensuring continuity from the Safavid conquest of Tabriz to the end of the Qajar dynasty within modern Iranian national limits after the 1813AD, 1828AD and 1881AD frontier treaties [@Rieber2014Struggle; @Akhmedov2019British].

1. Azerbaijan, Gilan and Mazandaran (165.064 km², 2.394 cells): The densely settled northwestern basin and humid Caspian littoral, anchored by Tabriz, Ardabil, Urmia, Rasht, Sari, Amol and Astarabad (Gorgan).
2. Central Plateau (267.654 km², 3.790 cells): The *qanat*-fed interior basins from Qazvin, Tehran, Qom and Kashan through Isfahan and Yazd to Kerman, bounded inwardly by the Dasht-e Kavir and Dasht-e Lut deserts.
3. Western Zagros (146.537 km², 2.072 cells): The rugged mountain valleys of Kurdistan, Kermanshah, Hamadan, Arak and Luristan, dominated by mixed village grain farming and Kurdish-Lur transhumant pastoralism.
4. Fars, Khuzestan and Persian Gulf Littoral (313.029 km², 4.188 cells): The southwestern lowland rivers of the Karun and Karkheh alongside the Shiraz basin, Bushehr and the maritime entrepôt of Bandar-e Abbas.
5. Khorasan, Sistan and Baluchestan (730.963 km², 9.995 cells): The vast northeastern and southeastern borderlands centred on Mashhad, Nishapur, Sabzevar, Birjand and Zahedan, linking the plateau to Central Asia and the Indus frontier.

## Fiscal Source Calibration and Reverse-Anchored Series

Neither Safavid central chanceries nor Qajar provincial governors conducted universal household censuses before the late 1920s [@Kondo2002Iranian; @Danaei2019Iran]. Fiscal documentation instead rested on *tumar* revenue scrolls and the Qajar *bunicheh* tax system, under which provincial assessments were apportioned collectively by village, guild or tribal *tira* rather than enumerated per capita [@Kondo2002Iranian; @Groot1978Kerman]. Raw tax lists routinely under-counted women, young children, nomadic lineages evading *maliyat* assessors and urban poor exempted from guild dues [@Nemati2026Iranian; @Bayat1998Street]. Where municipal tallies survive—most notably the 1868AD and 1884AD counts of Tehran under Nasir al-Din Shah, late nineteenth-century consular registers for Tabriz, Isfahan, Shiraz and Kerman, and early *vaqf* property inventories—they require adjustment for unenumerated floating migrants and suburban gardens [@Mashayekhi2019Regimes; @Kondo2002Iranian; @Groot1978Kerman].

Aggregate population $P_r(t)$ in macro-region $r$ at benchmark year $t$ combines sedentary rural populations $R_r(t)$, pastoral confederation numbers $N_r(t)$ and urban totals $U_r(t)$ derived from historical gazetteers:

$$P_r(t) = R_r(t) + N_r(t) + U_r(t)$$

For the pre-1800AD centuries, regional levels are anchored to ecological carrying capacity under *qanat* and rain-fed agrarian regimes, scaled upward by 26,8% during the seventeenth-century Safavid peace (6,35M to 8,05M) and adjusted downward across 1722AD to 1800AD to reflect documented urban abandonment in Isfahan, Tabriz, Kerman and Khorasan [@Bosworth2007Historic; @Groot1978Kerman]. Post-1800AD benchmarks reconcile consular provincial estimates (Malcolm, Kinneir, Rawlinson, Schindler, Curzon and Sobotsinskii) with twentieth-century Iranian demographic back-projections, explicitly damping short-term growth rates across the 1870AD to 1872AD famine and 1917AD to 1919AD wartime crisis [@Shabani2025Natural; @Taji2026Most; @Danaei2019Iran].

## Subadministrative Polygons and Non-Stationary Kriging

To translate macro-regional population totals onto a uniform five-arcminute spatial grid without artificial province-border cliffs, HANDBOOK integrates modern subadministrative boundaries from geoBoundaries [@Runfola2020GeoBoundaries] with non-stationary archaeological and settlement kriging. Across Iran, 379 modern ADM2 (*shahrestan*) districts spanning the 1996, 2006, 2011, 2016 and 2023 census rounds provide a high-resolution administrative prior, supplemented across the broader regional domain by 29 historical and 2.629 modern subadministrative units [@Runfola2020GeoBoundaries]. Disaggregation employs strictly mass-conserving pycnophylactic scaling across 65.864 unit-year verification checks, achieving 100% pass compliance within 0,01% and a maximum unit relative error of 5,85e-08.

Spatial habitability weights inside each unit are estimated across 1.942 active domestic catchments (56,85% of 3.416 total regional catchments) and 4.054 documented Iranian archaeological sites drawn from nine primary registers and monograph corpora—including 1.860 regional register records, 2.091 published excavation atlas entries and 103 chronometric sites, with zero crowd-sourced fallback records. Residual spatial intensity is modelled using Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) covariance evaluated over metric-isotropic radial distance fields (median catchment radius 32,51 km; p90 radius 40,25 km), combined with five biophysical covariates: habitable terrain fraction, natural vegetative productivity, ecozone suitability, fluvial proximity and coastal buffer distance. Urban populations from the 380 individually assessed Iranian settlements condition local high-density cores, with urban footprints subtracted cleanly prior to rural redistribution.

# Testing and Validation

Arithmetic reconciliation across all seven macro-historical benchmarks confirms full mass conservation between the five ecological macro-regions and the national trajectory from 1501AD to 1925AD (Table \ref{tab:subregions-iran} and Table \ref{tab:validation-iran}). Between 1501AD and 1600AD, aggregate population expanded by 1,7M (26,8%), led by the Central Plateau (+500k, or +34,5%) and Azerbaijan-Caspian (+500k, or +28,6%) as Safavid court patronage concentrated silk weaving, royal workshops and *qanat* investment around Qazvin, Isfahan, Kashan and Rasht [@Bosworth2007Historic; @Farshi2024Gateways]. The eighteenth-century crisis reversed nearly all of those gains: by 1800AD, the Central Plateau had fallen by 500k (-25,6% relative to 1600AD) back to its 1501AD floor of 1,45M, while Fars-Khuzestan (-22,2%) and Azerbaijan-Caspian (-13,3%) also contracted substantially.

<figure class="crd-table-figure" id="tab:subregions-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">1501AD</th><th class="crd-th">1722AD</th><th class="crd-th">1800AD</th><th class="crd-th">1925AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Azerbaijan, Gilan and Mazandaran</strong></td><td class="crd-td">165.064</td><td class="crd-td">1,75M</td><td class="crd-td">2,15M</td><td class="crd-td">1,95M</td><td class="crd-td">3,85M</td></tr>
<tr><td class="crd-td"><strong>Central Plateau</strong></td><td class="crd-td">267.654</td><td class="crd-td">1,45M</td><td class="crd-td">1,75M</td><td class="crd-td">1,45M</td><td class="crd-td">3,05M</td></tr>
<tr><td class="crd-td"><strong>Western Zagros</strong></td><td class="crd-td">146.537</td><td class="crd-td">1,15M</td><td class="crd-td">1,25M</td><td class="crd-td">1,15M</td><td class="crd-td">2,15M</td></tr>
<tr><td class="crd-td"><strong>Fars, Khuzestan and Gulf</strong></td><td class="crd-td">313.029</td><td class="crd-td">1,05M</td><td class="crd-td">1,25M</td><td class="crd-td">1,05M</td><td class="crd-td">1,85M</td></tr>
<tr><td class="crd-td"><strong>Khorasan, Sistan and Baluchestan</strong></td><td class="crd-td">730.963</td><td class="crd-td">950k</td><td class="crd-td">1,05M</td><td class="crd-td">950k</td><td class="crd-td">1,75M</td></tr>
<tr><td class="crd-td"><strong>Total Iran Domain</strong></td><td class="crd-td">1.623.247</td><td class="crd-td">6,35M</td><td class="crd-td">7,45M</td><td class="crd-td">6,55M</td><td class="crd-td">12,65M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Five-region surface areas and headline population benchmarks at dynastic turning points, 1501AD to 1925AD.</figcaption>
</figure>

Figure \ref{fig:trajectory-iran} plots the aggregate demographic curve from 1501AD to 1925AD alongside the 1925AD regional breakdown, illustrating the two-peak trajectory and the widening gap between the northern littoral-plateau heartland and the arid eastern marches.

<figure class="crd-figure-block" id="fig:trajectory-iran">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-safavid-afsharid-qajar-iran/fig2_safavid_afsharid_qajar_iran_trajectory.png" alt="fig:trajectory-iran" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate demographic trajectory and 1925AD regional composition across Iran from 1501AD to 1925AD.</figcaption>
</figure>

Table \ref{tab:validation-iran} details the intermediate Safavid apex (1600AD) and Qajar expansion benchmarks (1850AD, 1900AD and 1925AD) together with compound population densities in 1925AD. Notice the stark ecological gradient: Azerbaijan, Gilan and Mazandaran reached 23,3 inhabitants/km² in 1925AD—nearly ten times the density of Khorasan, Sistan and Baluchestan (2,4 inhabitants/km²)—while the Western Zagros (14,7 inhabitants/km²) and Central Plateau (11,4 inhabitants/km²) occupied intermediate positions shaped by rain-fed mountain agriculture and *qanat* irrigation.

<figure class="crd-table-figure" id="tab:validation-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Region</th><th class="crd-th">1600AD</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1925AD</th><th class="crd-th">1925AD (/km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Azerbaijan, Gilan and Mazandaran</strong></td><td class="crd-td">2,25M</td><td class="crd-td">2,45M</td><td class="crd-td">3,25M</td><td class="crd-td">3,85M</td><td class="crd-td">23,3</td></tr>
<tr><td class="crd-td"><strong>Central Plateau</strong></td><td class="crd-td">1,95M</td><td class="crd-td">1,85M</td><td class="crd-td">2,45M</td><td class="crd-td">3,05M</td><td class="crd-td">11,4</td></tr>
<tr><td class="crd-td"><strong>Western Zagros</strong></td><td class="crd-td">1,35M</td><td class="crd-td">1,45M</td><td class="crd-td">1,8M</td><td class="crd-td">2,15M</td><td class="crd-td">14,7</td></tr>
<tr><td class="crd-td"><strong>Fars, Khuzestan and Gulf</strong></td><td class="crd-td">1,35M</td><td class="crd-td">1,2M</td><td class="crd-td">1,55M</td><td class="crd-td">1,85M</td><td class="crd-td">5,9</td></tr>
<tr><td class="crd-td"><strong>Khorasan, Sistan and Baluchestan</strong></td><td class="crd-td">1,15M</td><td class="crd-td">1,15M</td><td class="crd-td">1,45M</td><td class="crd-td">1,75M</td><td class="crd-td">2,4</td></tr>
<tr><td class="crd-td"><strong>Total Iran Domain</strong></td><td class="crd-td">8,05M</td><td class="crd-td">8,1M</td><td class="crd-td">10,5M</td><td class="crd-td">12,65M</td><td class="crd-td">7,8</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Safavid apex and Qajar expansion benchmarks across the five macro-regions, 1600AD to 1925AD.</figcaption>
</figure>

Across all ten chronological horizons of the macro-regional kriging framework, fitted non-stationary Matérn ($\nu = 3/2$) variograms achieve residual $R^2$ values exceeding 0,998 (Table \ref{tab:kriging-iran}), with the early modern horizon registering $\tau_1 = 1,35$, $\tau_2 = 2,9$, an effective short range of 49,17 km and a regularised nugget-to-sill ratio of 0,04. In parallel, Table \ref{tab:subadmin-iran} summarises the six largest modern Iranian ADM2 (*shahrestan*) units out of 379 matched geoBoundaries polygons used to anchor spatial disaggregation priors, confirming mass conservation across the Tehran, Isfahan, Kerman and Mashhad metropolitan basins [@Runfola2020GeoBoundaries].

<figure class="crd-table-figure" id="tab:kriging-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Chronological Horizon</th><th class="crd-th">Nugget/Sill</th><th class="crd-th">Range (km)</th><th class="crd-th">Tau 1</th><th class="crd-th">Tau 2</th><th class="crd-th">Residual R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Epipalaeolithic and Early Neolithic</strong></td><td class="crd-td">0,04</td><td class="crd-td">48,29</td><td class="crd-td">1,35</td><td class="crd-td">2,9</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>2. Late Neolithic and Chalcolithic</strong></td><td class="crd-td">0,04</td><td class="crd-td">49,71</td><td class="crd-td">1,35</td><td class="crd-td">2,9</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>3. Early and Middle Bronze Age</strong></td><td class="crd-td">0,04</td><td class="crd-td">48,98</td><td class="crd-td">1,35</td><td class="crd-td">2,9</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>4. Late Bronze and Iron Age</strong></td><td class="crd-td">0,04</td><td class="crd-td">50,66</td><td class="crd-td">1,35</td><td class="crd-td">2,9</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>5. Achaemenid and Hellenistic</strong></td><td class="crd-td">0,04</td><td class="crd-td">49,91</td><td class="crd-td">1,35</td><td class="crd-td">2,9</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>6. Roman, Parthian and Kushan</strong></td><td class="crd-td">0,04</td><td class="crd-td">49,44</td><td class="crd-td">1,35</td><td class="crd-td">2,9</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>7. Sassanid and Byzantine</strong></td><td class="crd-td">0,04</td><td class="crd-td">49,88</td><td class="crd-td">1,35</td><td class="crd-td">2,9</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>8. Early Islamic Caliphate</strong></td><td class="crd-td">0,04</td><td class="crd-td">49,93</td><td class="crd-td">1,35</td><td class="crd-td">2,9</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>9. Seljuk, Ilkhanid and Timurid</strong></td><td class="crd-td">0,04</td><td class="crd-td">48,93</td><td class="crd-td">1,35</td><td class="crd-td">2,9</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>10. Ottoman, Safavid and Qajar</strong></td><td class="crd-td">0,04</td><td class="crd-td">49,17</td><td class="crd-td">1,35</td><td class="crd-td">2,9</td><td class="crd-td">0,9993</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Non-stationary Matérn variogram parameters across the ten regional kriging horizons.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:subadmin-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subadministrative Unit</th><th class="crd-th">Area (km²)</th><th class="crd-th">1996AD</th><th class="crd-th">2006AD</th><th class="crd-th">2016AD</th><th class="crd-th">2023AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tehran (ADM2)</strong></td><td class="crd-td">980</td><td class="crd-td">10,34M</td><td class="crd-td">11,35M</td><td class="crd-td">13,27M</td><td class="crd-td">14,44M</td></tr>
<tr><td class="crd-td"><strong>Isfahan (ADM2)</strong></td><td class="crd-td">292</td><td class="crd-td">3,92M</td><td class="crd-td">4,56M</td><td class="crd-td">5,12M</td><td class="crd-td">5,48M</td></tr>
<tr><td class="crd-td"><strong>Kerman (ADM2)</strong></td><td class="crd-td">45.302</td><td class="crd-td">2M</td><td class="crd-td">2,65M</td><td class="crd-td">3,16M</td><td class="crd-td">3,46M</td></tr>
<tr><td class="crd-td"><strong>Mashhad (ADM2)</strong></td><td class="crd-td">9.279</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,37M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Alborz (ADM2)</strong></td><td class="crd-td">560</td><td class="crd-td">-</td><td class="crd-td">2,08M</td><td class="crd-td">2,71M</td><td class="crd-td">3,05M</td></tr>
<tr><td class="crd-td"><strong>Isfahan County (ADM2)</strong></td><td class="crd-td">15.653</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,24M</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading Iranian ADM2 units from the 379 geoBoundaries polygons used for pycnophylactic spatial scaling.</figcaption>
</figure>

# Results

## Two Growth Cycles and the Eighteenth-Century Demographic Trough

Iran's demographic curve between 1501AD and 1925AD resolves into three sharply defined phases that mirror institutional stability and agricultural investment across the plateau [@Kondo2002Iranian; @Rieber2014Struggle; @Saatsaz2023Technology]. During the first phase (1501AD to 1600AD), Safavid consolidation ended post-Timurid fragmentation, suppressed Turkmen highway brigandage and linked plateau workshops to maritime Indian Ocean trade and Ottoman overland silk routes [@Yeler2023Iranian; @Farshi2024Gateways]. Total population expanded from 6,35M to 8,05M—a net gain of 1,7M inhabitants—concentrated in Azerbaijan, Gilan, Mazandaran and the Isfahan-Kashan-Yazd industrial corridor.

The second phase (1722AD to 1800AD) marks the most severe demographic reversal of Iran's early modern history. Already softened by late Safavid fiscal corruption and Baloch and Afghan border raids in the 1710s, aggregate population stood at 7,45M when Mahmud Hotak's forces blockaded Isfahan in 1722AD. Over the ensuing seventy-eight years, consecutive sieges, forced deportations, currency debasement and *qanat* abandonment drove total population down to 6,55M by 1800AD—an aggregate decline of 1,5M (-18,6%) below the 1600AD peak [@Groot1978Kerman; @Rieber2014Struggle]. The Central Plateau suffered worst, losing nearly a quarter of its inhabitants as Isfahan's craft quarters collapsed into ruinous gardens and Kerman endured repeated Afsharid and Qajar sacks [@Groot1978Kerman; @Bosworth2007Historic].

The third phase (1800AD to 1925AD) witnessed a remarkable recovery that nearly doubled Iran's population within five generations, rising from 6,55M in 1800AD to 8,1M in 1850AD, 10,5M in 1900AD and 12,65M in 1925AD. Even allowing for the catastrophic toll of the 1870AD to 1872AD famine and the 1917AD to 1919AD wartime crisis, mean compound annual growth averaged roughly 0,53% per year across the nineteenth and early twentieth centuries [@Shabani2025Natural; @Taji2026Most; @Danaei2019Iran]. Crucially, this growth remained overwhelmingly rural and semi-pastoral until the 1880s, after which telegraph lines, new carriage roads and customs centralisation accelerated urban concentration in Tehran, Tabriz, Mashhad, Isfahan, Shiraz and the emerging Khuzestan oilfield zone [@Mashayekhi2019Regimes; @Sedighi2025Developmen].

## Spatial Redistribution Toward the Alborz Piedmont and Caspian Littoral

Figure \ref{fig:density-iran} illustrates the continuous spatial population surface alongside 1925AD regional mean densities. Over four centuries, the most striking geographical shift was the steady rise of the northern arc comprising Azerbaijan, Gilan, Mazandaran and the southern Alborz piedmont around Tehran and Qazvin [@Mashayekhi2019Regimes; @Akhmedov2019British]. In 1501AD, Azerbaijan, Gilan and Mazandaran held 1,75M inhabitants (27,6% of Iran's population); by 1925AD, the region contained 3,85M inhabitants (30,4% of the national total), reaching a density of 23,3 inhabitants/km². Gilan's silk exports to Russia and Europe, Caspian rice expansion and Tabriz's role as Qajar Iran's primary commercial entrepôt on the Trabzon-Istanbul overland route anchored this northern demographic superiority [@Yeler2023Iranian; @Rieber2014Struggle].

<figure class="crd-figure-block" id="fig:density-iran">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-safavid-afsharid-qajar-iran/fig3_safavid_afsharid_qajar_iran_density.png" alt="fig:density-iran" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Continuous kriged population surface and 1925AD regional mean densities across Iran.</figcaption>
</figure>

Meanwhile, the Central Plateau rebounded from 1,45M in 1800AD to 3,05M in 1925AD (24,1% of the national total), driven less by Isfahan—which recovered slowly—than by the explosive rise of Tehran and its surrounding Alborz piedmont districts [@Mashayekhi2019Regimes; @Vahdat2017Occidental]. Fars, Khuzestan and the Persian Gulf littoral grew more modestly from 1,05M in 1800AD to 1,85M in 1925AD (5,9 inhabitants/km²), though the 1908AD oil discovery at Masjed-e Soleyman and construction of the Abadan refinery inaugurated a twentieth-century demographic boom along the lower Karun River [@Sedighi2025Developmen]. Khorasan, Sistan and Baluchestan expanded from 950k in 1800AD to 1,75M in 1925AD once the Qajar suppression of Turkmen *alaman* slave-raiding along the Atrek and Kopet Dagh frontier—assisted indirectly by Russian advances into Merv in 1884AD—allowed ruined oasis villages around Nishapur, Sabzevar and Quchan to re-excavate their *qanats* [@Rieber2014Struggle; @Saatsaz2023Technology].

## Urban Hierarchy and Capital Realignment

Figure \ref{fig:settlements-iran} displays the rank-size curve and top twelve catalogued urban centres across the 380 individually assessed settlements in the regional gazetteer. Fitted across all 380 points, the Zipf power-law exponent stands at $\alpha = 1,11$ ($R^2 = 0,87$), indicating a well-integrated, polycentric national urban network spanning imperial capitals, provincial seats and *qanat*-fed oasis towns despite Iran's formidable mountain barriers and lack of navigable interior rivers. Yet that composite rank-size equilibrium concealed radical rank reversals across the four centuries [@Bosworth2007Historic; @Mashayekhi2019Regimes].

<figure class="crd-figure-block" id="fig:settlements-iran">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-safavid-afsharid-qajar-iran/fig4_safavid_afsharid_qajar_iran_settlements.png" alt="fig:settlements-iran" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading catalogued settlements across Iran from 1501AD to 1925AD.</figcaption>
</figure>

In 1501AD, Tehran (11k) was an unwalled market town subordinated to nearby Rayy, whereas Tabriz (160k), Isfahan (68k), Shiraz (56k), Hormuz (36k), Kashan (36k), Ardabil (34k), Mashhad (31k), Yazd (28k) and Hamadan (28k) commanded regional trade. Royal court transfers reshaped the plateau hierarchy twice: Qazvin peaked at 88k in 1580AD as Shah Tahmasp I's capital, while Safavid Isfahan surged from 68k in 1501AD to an imperial zenith of 335k in 1700AD—flanked by Kashan (62k in 1650AD) and Ardabil (46k in 1650AD)—before the 1722AD Afghan siege cut Isfahan back to 54k by 1750AD (recovering to 96k in 1925AD). After elevation to the Qajar capital in 1786AD, Tehran climbed from 45k in 1800AD through the 1883-1884AD municipal count (147,3k) to 252k by 1925AD, leading the late Qajar urban system alongside Tabriz (212k), Mashhad (105k), Isfahan (96k), Shiraz (75k), Rasht (69k), Hamadan (64k), Kermanshah (60,5k), Kerman (52,4k) and Yazd (51,8k) [@Mashayekhi2019Regimes; @Bosworth2007Historic]. Along the southern littoral and lower Karun basin, maritime steam shipping and petroleum extraction transformed coastal and oilfield settlements—with Abadan reaching 25,4k (founded 1909AD), Bushehr 22,4k, Khorramshahr 18,6k, Masjed Soleyman 16,5k (founded 1908AD), Ahvaz 15,6k and Bandar Abbas 11,6k in 1925AD (following its 16,5k Safavid peak in 1660AD after eclipsing Hormuz, which had peaked at 39k in 1550AD) [@Groot1978Kerman; @Sedighi2025Developmen].

# Limitations

Three evidentiary limitations govern the interpretation of these figures. First, pre-1925AD Iran left no continuous national cadastral series comparable to Ottoman *tahrir defterleri* or Russian imperial censuses [@Kondo2002Iranian; @Rieber2014Struggle]. Early Safavid and Afsharid benchmarks therefore carry wider uncertainty envelopes ($\pm 10\%$ to $15\%$) than late nineteenth-century estimates; within the 380-settlement gazetteer, 108 continuous historical towns carry evidence-assessed trajectories across the entire 1501AD to 1925AD span, 8 documented Safavid, Qajar and early industrial foundations enter immediately after their founding years (from Behshahr in 1612AD and Bandar Abbas in 1622AD to Masjed Soleyman in 1908AD, Abadan in 1909AD and Zahedan in 1916AD), and 264 additional provincial and caravan localities document period-specific early modern occupation from Al-Thurayya, Euratlas and historical Iranian schedules. Second, because individual settlement series are reconstructed case by case from European travelogues, provincial chronicles, Qajar municipal counts and consular gazetteers rather than mechanical twentieth-century back-projection, major urban shocks—including Isfahan's post-1722AD collapse from 335k to 54k, Hormuz's post-1622AD decline, the 1830AD to 1832AD Caspian and Khuzestan plague epidemics, the 1870AD to 1872AD famine and First World War frontier displacement—are explicitly preserved in the settlement trajectories, though smaller interior market towns outside primary consular corridors rely on sparser observations than Tehran, Tabriz, Shiraz or Kerman [@Shabani2025Natural; @Taji2026Most]. Third, because Qajar *eyalat* and *velayat* boundaries were fluid and lacked contiguous pre-1925AD GIS polygons in the archival registry, pre-1925AD spatial disaggregation relies on reverse-calibrated modern Iranian ADM2 (*shahrestan*) geometries and archaeological catchment densities rather than contemporary tax-district boundaries [@Runfola2020GeoBoundaries; @Danaei2019Iran].

# Conclusion

Between 1501AD and 1925AD, Iran's population nearly doubled from 6,35M to 12,65M through two distinct waves of political integration separated by an eighteenth-century crisis of rare severity. Under Safavid rule, territorial consolidation and *qanat*-fed oasis investment pushed population from 6,35M in 1501AD to 8,05M in 1600AD, before the 1722AD Afghan invasion, Nader Shah's wars and Zand-Qajar conflicts erased nearly two centuries of growth and returned the plateau to 6,55M in 1800AD. Qajar reunification around Tehran inaugurated a durable nineteenth-century expansion to 8,1M in 1850AD and 10,5M in 1900AD, resilient enough to absorb repeated cholera epidemics, the devastating 1870AD to 1872AD famine and the 1917AD to 1919AD wartime subsistence crisis before reaching 12,65M in 1925AD. Throughout these four centuries, Iran's demographic geography shifted decisively northward toward the humid Caspian littoral, Azerbaijan and the Tehran-Alborz piedmont, laying the spatial foundations of the modern Iranian state.

# Appendix

Table \ref{tab:shocks-iran} summarises the principal warfare, epidemic and famine shocks that punctuated Iran's demographic trajectory between 1501AD and 1925AD, synthesising archival chronologies and modern historical demography [@Rieber2014Struggle; @Shabani2025Natural; @Groot1978Kerman; @Taji2026Most; @Majd2025Historiogr].

<figure class="crd-table-figure" id="tab:shocks-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Historical Crisis</th><th class="crd-th">Period</th><th class="crd-th">Primary Zone</th><th class="crd-th">Demographic Impact</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ottoman-Safavid Frontier Wars</strong></td><td class="crd-td">1514AD to 1590AD</td><td class="crd-td">Azerbaijan and Western Zagros</td><td class="crd-td">Scorched-earth retreats; court moved from Tabriz to Qazvin</td></tr>
<tr><td class="crd-td"><strong>Afghan Invasion and Nader Shah Wars</strong></td><td class="crd-td">1722AD to 1747AD</td><td class="crd-td">Central Plateau and Khorasan</td><td class="crd-td">Isfahan sacked; plateau population fell below 7M</td></tr>
<tr><td class="crd-td"><strong>Zand-Qajar Succession Wars</strong></td><td class="crd-td">1779AD to 1796AD</td><td class="crd-td">Fars, Kerman and Caucasus Frontier</td><td class="crd-td">Kerman and Tbilisi ravaged; capital fixed at Tehran</td></tr>
<tr><td class="crd-td"><strong>Plague and Cholera Pandemics</strong></td><td class="crd-td">1830AD to 1904AD</td><td class="crd-td">Caspian Littoral and Caravan Towns</td><td class="crd-td">Recurrent cholera and 1830AD plague in Rasht and Tabriz</td></tr>
<tr><td class="crd-td"><strong>Great Persian Famine</strong></td><td class="crd-td">1870AD to 1872AD</td><td class="crd-td">Central Plateau, Fars and Khorasan</td><td class="crd-td">Drought and opium cropping caused 1,5M to 2M excess deaths</td></tr>
<tr><td class="crd-td"><strong>First World War Famine and Influenza</strong></td><td class="crd-td">1917AD to 1919AD</td><td class="crd-td">Western Zagros, Azerbaijan and Plateau</td><td class="crd-td">Requisitions, typhus and influenza caused 1M to 2M deaths</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Principal demographic shocks, affected regions and mortality impacts in Iran, 1501AD to 1925AD.</figcaption>
</figure>

# Sources

This chapter synthesises primary Iranian fiscal, endowment (*vaqf*) and urban records alongside nineteenth-century consular surveys and modern environmental, epidemiological and historical demographic scholarship [@Kondo2002Iranian; @Saatsaz2023Technology; @Shabani2025Natural; @Danaei2019Iran]. Hydraulic ecology and *qanat* irrigation dynamics draw on Saatsaz and Rezaei [@Saatsaz2023Technology] and Sadan [@Sadan2023Masters], while regional urban and provincial case studies integrate Joanna de Groot on late nineteenth-century Kerman [@Groot1978Kerman], Azadeh Mashayekhi on Tehran's urban transformation [@Mashayekhi2019Regimes], Nobuaki Kondo on Qajar urban society [@Kondo2002Iranian], Marouf Cabi on Kurdish Zagros transformations [@Cabi2019Impact], Nourddin Nemati, Cyrus Faizee and Mazhar Advay on minority community demography [@Nemati2026Iranian] and Clifford Edmund Bosworth's urban gazetteer as a supplemental reference [@Bosworth2007Historic]. Frontier geopolitics, Caucasian-Azerbaijani borderlands and overland merchant networks draw on Alfred Rieber [@Rieber2014Struggle], Afgan Akhmedov [@Akhmedov2019British], Akif Nagi [@Nag2026History], Patrick Wing [@Wing2016Jalayirids], Gor Ararat Margaryan and Anush Harutyunyan [@Margaryan2024Prostituti], Abdülkadir Yeler [@Yeler2023Iranian] and Elisabeth Yarbakhsh [@Yarbakhsh2017Placing]. Epidemiological and famine shocks incorporate Masoud Nezamabadi [@Nezamabadi2014Contributi], Firoozeh Kashani-Sabet [@KashaniSabet2006Politics], Jalil Iranmahboob [@Iranmahboob1996Childhood], Emamali Sha'bani, Hadi Bayati and Masoumeh Hajian Khoshdel [@Shabani2025Natural], Zohreh Taji et al. [@Taji2026Most] and Mohammad Gholi Majd [@Majd2024Historiogr; @Majd2024Historiogrb; @Majd2025Historiogr], complemented by cultural and economic studies by Golriz Farshi [@Farshi2024Gateways], Vahid Vahdat [@Vahdat2017Occidental], Somayeh Sedighi [@Sedighi2025Developmen] and Asef Bayat [@Bayat1998Street]. Subadministrative GIS disaggregation employs geoBoundaries polygons [@Runfola2020GeoBoundaries] calibrated through strictly mass-conserving pycnophylactic scaling and non-stationary Matérn kriging.
