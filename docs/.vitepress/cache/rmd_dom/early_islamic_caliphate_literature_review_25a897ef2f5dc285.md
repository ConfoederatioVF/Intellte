---
title: "Early Islamic Caliphate (AD 632-1000)"
subtitle: "Garrison Towns, Canal Hydraulics and Agrarian Shifts across Ten Regions"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_islamic_caliphate_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_early_islamic_caliphate_spatial.png"
hero_caption: "Ten regional divisions and 140 individually assessed settlements across North Africa, the Near East, Anatolia, Caucasia, Iran and Afghanistan between 632AD and 1000AD."
hero_label: "fig:hero-early-islamic-caliphate"

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

Between the death of the Prophet Muhammad in 632AD and the turn of the first Christian millennium in 1000AD, the lands stretching from the Atlantic coast of the Maghrib to the Hindu Kush and the Anatolian plateau underwent a prolonged demographic realignment rather than a simple post-classical contraction. Drawing on 140 individually assessed settlements across 22 modern national jurisdictions, regional hydraulic histories and non-stationary Matérn kriging anchored to 29 historical and 2.629 modern subadministrative boundaries, HANDBOOK estimates that the aggregate population of the ten macro-regions rose from 41,84M in 632AD to 44,33M at the fall of the Umayyads in 750AD, 47,9M near the Abbasid irrigation zenith in 850AD and 50,35M by 1000AD. Over this 368-year span, mean density across the 12,57M km² study area increased by 20,3%, from 3,33 to 4,01 inhabitants per km². That slow overall rise masks sharp regional divergences driven by imperial capitals, canal maintenance, frontier warfare and agrarian innovation. Bilad al-Sham climbed to an Umayyad peak of 4,65M in 750AD before easing back to 4,15M once the Abbasid court moved east. Iraq and al-Jazira surged from 5,2M in 632AD to 6,85M in 850AD around Basra, Kufa, Baghdad, Samarra and the Sawad canal network, then shed 1,25M inhabitants by 1000AD following the Zanj revolt, Qarmatian raids and the silting of the Nahrawan system. Conversely, Byzantine Anatolia dipped to 7,15M in 750AD under Arab raids and late plague outbreaks before rebounding to 9,15M by 1000AD, while Iran, Khurasan, Egypt, North Africa and Caucasia expanded steadily through oasis qanat investment, Nile basin cultivation and trans-Saharan and Silk Road trade [@Nol2023Arab; @Bessard2018Politics; @Saatsaz2023Technology; @PreiserKapeller2024Medieval; @Runfola2020GeoBoundaries].



# Background

Historical demography for the seventh to tenth centuries across the Early Islamic world and neighbouring Byzantium sits between two very different traditions of evidence. For the early caliphates, chroniclers, geographers and Arabic fiscal treatises preserve abundant qualitative descriptions of troop stipends, land-tax assessments (*kharaj*), urban market halls and royal foundations, yet almost no empire-wide household counts survive outside Egyptian papyrus tax rolls [@Maghraby2025Arab; @Yuksel2024Mecca; @Nol2023Arab]. At the same time, older European historiography long assumed that the Arab conquests triggered rapid urban decay and demographic decline across the Mediterranean littoral, a view now refuted by stratigraphic archaeology from Syria, Jordan, Iraq, Egypt and Khurasan [@Mokranova2025Material; @Bessard2018Politics; @Nol2021Defining]. Rather than emptying the Near East, the Rashidun (632AD to 661AD), Umayyad (661AD to 750AD) and Abbasid (750AD to 1000AD) centuries redistributed labour, capital and agrarian surpluses across old alluvial cores and newly founded garrison cities.

The first demographic shock of the period was institutional rather than destructive. Following the conquests of Iraq, Syria and Egypt in the 630s and 640s, the Rashidun state concentrated Arab tribal armies in planned garrison cities (*amsar*) separated from existing Late Antique populations: al-Basra (638AD) near the Shatt al-Arab estuary, al-Kufa (638AD) beside the Euphrates marsh edge near al-Hira, al-Fustat (641AD) at the apex of the Nile Delta opposite Roman Babylon and al-Qayrawan (670AD) on the central Tunisian steppe [@ALJabri2023Developmen; @Allahham2025Untold; @Nol2023Arab; @Bosworth2007Historic]. Stipend registers (*diwan*) paid cash and grain rations drawn from rural *kharaj* taxes, turning military camps into self-sustaining craft and market towns within two generations. Excavations and textual studies show that Basra, Kufa and Fustat did not displace older ports such as Alexandria or inland hubs such as Damascus and Homs; instead, they added new nodes of concentrated urban demand that pulled agricultural produce, timber, glass and textiles along river and caravan corridors [@Yuksel2024Mecca; @Bessard2018Politics; @Isoldi2026Confluent].

Under the Umayyad caliphs (661AD to 750AD), the political centre of gravity rested in Bilad al-Sham. Damascus expanded as an administrative metropolis while governors and princes invested heavily in planned regional towns such as Wasit (702AD) in lower Iraq and al-Ramla (c. 715AD) on the Palestinian coastal plain, alongside rural agricultural estates (*qusur*) across the Jordanian steppe and the Euphrates valley [@Ali2026Dimensions; @Nol2021Defining; @Stern2025Mamluk]. Archaeological sequences at Tell Abu Sarbut, Jarash and Palmyra reveal dense ceramic, sugar-processing and commercial market (*suq*) activity through the late seventh and eighth centuries, contradicting earlier assumptions of immediate Byzantine-to-Islamic collapse [@Mokranova2025Material; @Bessard2018Politics]. In Egypt, Marwanid tax papyri from the Nile Delta document tight fiscal registration of Coptic villages and growing resistance to capitation levies as Arab settlement spread beyond Fustat into Lower and Upper Egypt [@Maghraby2025Arab; @Sahner2017First]. Syria's demographic ascendancy ended abruptly with the Abbasid revolution of 750AD, compounded by the devastating Galilee-Jordan earthquake of 749AD and the final Mediterranean wave of the Justinianic plague in 747AD to 748AD [@Nol2021Defining; @Mokranova2025Material].

The Abbasid transfer of the capital to Iraq opened the sharpest urban expansion of the early mediaeval Afro-Eurasian world. Al-Mansur founded the Round City of Madinat al-Salam (Baghdad) in 762AD at the narrowest waist between the Tigris and Euphrates, where navigable canals linked both river basins to the Persian Gulf [@ALJabri2023Developmen; @Allahham2025Untold; @Yuksel2024Mecca]. Between 762AD and 850AD, Baghdad grew into a sprawling multi-quarter metropolis ringed by Karkh, Rusafa and Harbiyya, while al-Mu'tasim's monumental military-administrative capital at Samarra (836AD to 892AD) stretched more than 35 km along the east bank of the Tigris [@Wahhab2024Decorative; @Bosworth2007Historic]. Supporting those courts required intensive hydraulic engineering across the Sawad alluvial plain: the Nahrawan trunk canal, the Katul al-Kisrawi, the Dujayl and the Lower Euphrates feeders sustained double-cropped wheat, barley, date palms, rice and cotton [@ALJabri2023Developmen; @Bosworth2007Historic]. Yet this dense hydraulic regime proved brittle once central fiscal oversight fractured. Between 869AD and 883AD, the Zanj rebellion ravaged lower Iraq and Basra; subsequent Qarmatian incursions, civil wars among Turkish commanders and Buyid *iqta'* revenue-farming starved the major canal heads of dredging labour. Salinisation and breached levees steadily shrank cultivated acreage across the Sawad, explaining why Iraq is the sole region in HANDBOOK to lose substantial population between 850AD and 1000AD.

East of the Zagros, by contrast, demographic growth proved far more resilient. Across Jibal, Fars, Khuzestan and Khurasan, and onward into Tokharistan, Sistan and Kabulistan, agrarian life rested on gravity-fed subterranean *qanat* (*kariz*) aqueducts rather than a single state-managed river trunk [@Saatsaz2023Technology]. Because *qanat* galleries belong to local oasis communes and landed elites (*dihqans*), irrigation survived dynastic transitions from the Abbasid governors to the Tahirids, Saffarids, Buyids and Samanids [@Saatsaz2023Technology; @Michailidis2014Dynastic; @Spooner2019Epilogue]. Under Samanid rule in the ninth and tenth centuries, Nishapur (*Naysabur*), Rayy, Merv (*Marw*), Balkh, Herat and Bukhara flourished as manufacturing and transcontinental exchange centres, exporting plant-ash glass, glazed ceramics, silver coinage and silk along the eastern Silk Roads [@Lu2023Connected; @Cross2023Phantasy; @Mammadli2024Personalit]. Further south, Fars and the Persian Gulf littoral anchored maritime commerce through Shiraz and the entrepôt of Siraf, whose ships traded directly with Oman, Yemen and the Indian Ocean [@Biezeveld2025Quantifyin; @Asif2016Book].

Across the northern and western margins of the Islamic world, two contrasting trajectories unfolded. In Byzantine Anatolia, Thughur and Cyprus, seventh-century Persian and Arab invasions forced the abandonment of exposed lowland classical *poleis* in favour of fortified hilltop *kastra* and nucleated village *choria*, while recurring raids and plague pushed regional population down from 7,4M in 632AD to 7,15M by 750AD [@Coleman2021Poleis; @Mitchell2021Church; @Bakirtzis2023Introducin]. From the mid-ninth century onward, however, stabilisation of the Taurus-Anti-Taurus *Thughur* marchlands, improved climatic moisture during the transition into the Mediaeval Climate Anomaly and middle Byzantine agrarian recovery lifted Anatolian and Cypriot numbers back to 7,95M in 850AD and 9,15M by 1000AD [@PreiserKapeller2024Medieval; @Ozbal2026Diet; @Navruz2024Historical].

North of the Taurus and east of the Black Sea, Arminiya, Gurjistan and Arran formed a rugged highland buffer between Byzantine, Abbasid and Khazar spheres. Despite periodic punitive expeditions and Tribute-state garrisons at Dvin, Bardha'a and Tiflis, Bagratid Armenian and Georgian valley agriculture expanded steadily across the eighth to tenth centuries, supported by monastic terrace clearing, local silver mining and Caspian-Black Sea transit routes [@Navruz2024Historical; @Coleman2021Poleis].

Along the southern and western flanks of the Caliphate, North Africa and the Arabian Peninsula followed distinct ecological rhythms. In Ifriqiya, Tripolitania and Barqa, the conquest of Carthage (698AD) and the foundation of Kairouan reoriented settlement away from Mediterranean grain shipments toward inland olive cultivation, pastoral-sedentary exchange and trans-Saharan gold routes, supporting sustained urban growth under Aghlabid, Rustamid, Idrisid and early Fatimid rule across Ifriqiya and the Maghrib [@Bosworth2007Historic; @Allahham2025Untold]. Across the Red Sea in Arabia, even after political hegemony shifted from Medina to Damascus and Baghdad, pilgrimage provisioning in Mecca and Medina, terraced rainfall agriculture in Yemen and subterranean *falaj* oasis irrigation across Oman kept peninsula numbers rising gently through the turn of the millennium [@Yuksel2024Mecca; @Biezeveld2025Quantifyin].

Every region above also experienced profound social and religious restructuring that left measurable traces in settlement morphology. Early Islamic urban quarters organised craft production, charitable endowments (*waqf*), mosques and covered *suq* markets around fiscal and moral authority [@Yassin2012Architectu; @Ayubi2015Gendered; @Bessard2018Politics]. Even where older Christian or Zoroastrian communities remained a demographic majority well into the ninth or tenth century - as in Upper Egypt, rural Syria, central Anatolia and Fars - new tax assessments, Arabic administrative scribes and shifting trade axes reshaped where people lived and how villages clustered along canals, roads and mountain passes [@Sahner2017First; @Maghraby2025Arab; @Mokranova2025Material].

# Methodology

## Sub-Regional Partition and Gazetteer Compilation

The Early Islamic Caliphate module spans a nominal domain of 12,57M km² (168.112 terrestrial pixels on a 5-arcminute global grid) covering 632AD to 1000AD, corresponding to the historical-dynastic calibration regime of HANDBOOK. To capture distinct ecological and political trajectories without creating artificial frontier boxes, the territory is partitioned into ten contiguous macro-regions: Jibal, Fars, Khuzestan and Khurasan; Byzantine Anatolia, Thughur and Cyprus; Misr (Early Islamic Egypt); Al-Iraq (Sawad) and Al-Jazira; Al-Maghrib al-Aqsa and al-Awsat; Bilad al-Sham (Umayyad and Abbasid Levant); Al-Hijaz, Najd, Al-Yaman and Oman; Tokharistan, Sistan and Kabulistan; Ifriqiya, Tripolitania and Barqa; and Arminiya, Gurjistan and Arran.

Within this domain, HANDBOOK compiles 140 individually assessed urban centres out of 340 evaluated candidate entries (200 excluded during vetting to remove unquantified minor scatters, merged subordinate suburbs, duplicate aliases and non-settlement architectural fragments). Each retained city was assessed on a case-by-case basis from excavated walled and suburban footprints paired with period urban densities, *diwan* garrison registers, early Islamic geographical itineraries (al-Ya'qubi, al-Istakhri, Ibn Hawqal, al-Muqaddasi) and primary archaeological and morphological scholarship [@Nol2021Defining; @Nol2023Arab; @ALJabri2023Developmen; @Coleman2021Poleis], with Bosworth's urban reference compendium [@Bosworth2007Historic] consulted strictly as a supplemental cross-check. All toponyms follow clean Latin transliteration across 22 modern national jurisdictions. Rather than applying mechanical tier defaults, each settlement follows its own historically dated trajectory between 632AD and 1000AD - capturing foundation dates (such as Basra and Kufa in 638AD, Fustat in 641AD, Kairouan in 670AD, Shiraz in 693AD, Wasit in 702AD, Ramla in 715AD, Baghdad in 762AD, Fez in 789AD, Samarra in 836AD and Al-Qahira in 969AD) alongside dated seismic, military and hydraulic shocks - reconciled against four regional benchmarks at 632AD, 750AD, 850AD and 1000AD.

## Radial Distance Fields and Non-Stationary Matérn Kriging

Because archaeological site catalogues and early Arabic geographic itineraries never sample rural villages uniformly across deserts, mountains and alluvial floodplains, HANDBOOK avoids raw kernel density smoothing of point coordinates. Instead, spatial disaggregation proceeds via a non-stationary Matérn residual kriging surface calibrated across ten chronological horizons of the broader HANDBOOK domain (168.112 valid grid cells grouped into 3.416 domestic Voronoi catchments, of which 1.942 are active and carry 83.857,2 weighted domestic site units). Catchment geometry is evaluated on metric-isotropic geodesic distances rather than warped equirectangular degrees: the median Voronoi catchment radius is 32,51 km and the 90th percentile radius is 40,25 km, preventing arid desert catchments from inflating the spatial range of dense riverine zones.

To stabilise variance across extreme density contrasts between the Nile Delta or the Sawad and the Rub' al-Khali or Libyan Sahara, site intensities undergo a Freeman-Tukey square-root transformation prior to weighted least-squares trend fitting against four biophysical covariates: baseline habitability ($\beta_{0,\text{hab}}$), natural vegetation productivity ($\beta_{1,\text{nat}}$), eco-climatic niche ($\beta_{2,\text{eco}}$), fluvial proximity ($\beta_{3,\text{fluvial}}$) and coastal access ($\beta_{4,\text{coastal}}$). Residuals are then interpolated via a two-component Matérn covariance function of smoothness $\nu = 3/2$:

$$\gamma(u) = c_0 + (1 - c_0)\left[1 - c_1\left(1 + \frac{\sqrt{3}\,u}{\tau_1}\right)\exp\left(-\frac{\sqrt{3}\,u}{\tau_1}\right) - c_2\left(1 + \frac{\sqrt{3}\,u}{\tau_2}\right)\exp\left(-\frac{\sqrt{3}\,u}{\tau_2}\right)\right]$$

where $u$ denotes dimensionless geodesic lag normalised by local catchment radius, $c_0$ is the micro-scale nugget variance, $c_1 = 0,8$ and $c_2 = 0,2$ partition short- and medium-range spatial correlation, and $\tau_1$ and $\tau_2$ define the dimensionless correlation scales. For the Early Islamic Caliphate horizon, weighted least-squares fitting yields $\beta_{0,\text{hab}} = 0,01$, $\beta_{3,\text{fluvial}} = 0,0508$ and $\beta_{4,\text{coastal}} = 0,0494$, capturing the strong pull of Tigris-Euphrates, Nile and coastal trade corridors alongside an active two-pixel urban exclusion buffer that prevents metropolitan centres from bleeding artificially into surrounding rural catchments.

## Subadministrative Census Anchoring and Pycnophylactic Scaling

While seventh- to tenth-century macro-totals rest on historical fiscal estimates, urban footprint models and agrarian carrying-capacity reconstructions, long-run spatial consistency across HANDBOOK requires that pre-modern population surfaces reconcile cleanly with modern subadministrative demographic constraints. HANDBOOK therefore anchors the late-nineteenth- and twentieth-century end of the continuum to 29 historical subadministrative enumerations (Ottoman vilayets of 1881AD to 1927AD, British-mandate Iraqi *liwas* of 1920AD and 1947AD, French Mandate Syrian enumerations, Egyptian *mudiriyas* and *muhafazas* from 1882AD to 1947AD, and French North African *départements*, *régions* and *contrôles civils* from 1880AD to 1960AD) paired with 2.629 modern first- and second-order administrative polygons from the geoBoundaries database [@Runfola2020GeoBoundaries].

Disaggregation from macro-regional totals onto the 5-arcminute grid enforces strict pycnophylactic mass conservation: at every benchmark year, the sum of disaggregated pixel populations inside each sub-regional or administrative polygon matches its assigned target exactly, while preserving smooth gradients across internal boundaries. Across the complete HANDBOOK domain, 65.864 subadministrative unit-year checks achieve a maximum relative mass error of $5{,}845 \times 10^{-8}$, guaranteeing that neither coastal pixel clipping nor desert habitability masking alters regional totals.

# Testing and Validation

Diagnostic checks across the spatial model, subadministrative mass-conservation tables and urban settlement hierarchy confirm internal consistency across the 632AD to 1000AD span. On the kriged Early Islamic archaeological horizon (68.199 active cells out of 168.112 valid domain cells), the calibrated Matérn ($\nu = 3/2$) variogram attains a residual $R^2$ of 0,9992, with dimensionless correlation parameters $\tau_1 = 1,35$ (raw $\tau_1 = 1,536$, equivalent to an effective short range of 49,93 km) and $\tau_2 = 2,9$, and a low nugget-to-sill ratio of 0,04 ($c_0 = 0,000015$). The resulting continuous intensity surface records a mean of 0,0674, a median of 0,0357, a 90th percentile of 0,1477, a 99th percentile of 0,5054 and a peak intensity of 9,8079 along the Baghdad-Samarra and Nile Delta corridors. Relative to the Late Antique Sassanid-Byzantine horizon (mean intensity 0,1242, 99th percentile 0,9437) and the subsequent Seljuk-Mamluk-Timurid horizon (mean intensity 0,0349, 99th percentile 0,2536), the Early Islamic surface reflects a broader spatial redistribution toward garrison cities, Khurasani oases and inland Maghribi routes rather than uniform rural intensification.

<figure class="crd-figure-block" id="fig:density-early-islamic-caliphate">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-early-islamic-caliphate/fig3_early_islamic_caliphate_density.png" alt="fig:density-early-islamic-caliphate" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Kriged Early Islamic intensity surface on a Lambert Azimuthal Equal-Area canvas alongside mean 1000AD population density across leading regions.</figcaption>
</figure>

Figure \ref{fig:density-early-islamic-caliphate} pairs this continuous kriged intensity surface against mean regional population densities in 1000AD. Because uncultivated hyper-arid deserts are explicitly masked out of habitability covariates, high-density ribbons trace the Tigris-Euphrates alluvium, the Levant littoral, the Nile Valley, the Anatolian river valleys and the Iranian piedmonts, while mean densities calculated over gross territorial polygons remain modest in Arabia (1,31 inhabitants per km²), the Maghrib (1,39 per km²) and Ifriqiya (1,54 per km²).

<figure class="crd-table-figure" id="tab:hist-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ISO</th><th class="crd-th">Historical Enumeration Unit</th><th class="crd-th">First Year</th><th class="crd-th">Start Pop.</th><th class="crd-th">Last Year</th><th class="crd-th">End Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>IRQ</strong></td><td class="crd-td">Baghdad Vilayet (Central Liwas: Baghdad, Diyala, Anbar, Babil, Karbala, Kut)</td><td class="crd-td">1881AD</td><td class="crd-td">850k</td><td class="crd-td">1947AD</td><td class="crd-td">2,31M</td></tr>
<tr><td class="crd-td"><strong>IRQ</strong></td><td class="crd-td">Basra Vilayet (Southern Liwas: Basra, Muntafiq/Dhi Qar, Amara/Maysan)</td><td class="crd-td">1881AD</td><td class="crd-td">470k</td><td class="crd-td">1947AD</td><td class="crd-td">1,15M</td></tr>
<tr><td class="crd-td"><strong>IRQ</strong></td><td class="crd-td">Mosul Vilayet (Northern Liwas: Mosul, Erbil, Kirkuk, Sulaymaniyah)</td><td class="crd-td">1881AD</td><td class="crd-td">480k</td><td class="crd-td">1947AD</td><td class="crd-td">1,36M</td></tr>
<tr><td class="crd-td"><strong>SYR</strong></td><td class="crd-td">Vilayets of Aleppo &amp; Syria (Damascus)</td><td class="crd-td">1881AD</td><td class="crd-td">1,45M</td><td class="crd-td">1947AD</td><td class="crd-td">3,04M</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Upper Egypt (Sa'id &amp; Frontier Mudiriyas)</td><td class="crd-td">1882AD</td><td class="crd-td">2,79M</td><td class="crd-td">1947AD</td><td class="crd-td">7,17M</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Cairo, Alexandria &amp; Suez Canal Muhafazas</td><td class="crd-td">1882AD</td><td class="crd-td">675k</td><td class="crd-td">1947AD</td><td class="crd-td">3,34M</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Lower Egypt (Nile Delta Mudiriyas)</td><td class="crd-td">1882AD</td><td class="crd-td">3,34M</td><td class="crd-td">1947AD</td><td class="crd-td">8,51M</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Erzurum, Van, Bitlis, Mamuretulaziz &amp; Diyarbakir Vilayets (Eastern Anatolia)</td><td class="crd-td">1881AD</td><td class="crd-td">2,15M</td><td class="crd-td">1927AD</td><td class="crd-td">1,67M</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Konya &amp; Adana Vilayets (South-Central Anatolia)</td><td class="crd-td">1881AD</td><td class="crd-td">1,34M</td><td class="crd-td">1927AD</td><td class="crd-td">1,92M</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Ankara &amp; Kastamonu Vilayets (North-Central Anatolia)</td><td class="crd-td">1881AD</td><td class="crd-td">1,81M</td><td class="crd-td">1927AD</td><td class="crd-td">2,31M</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Trabzon &amp; Sivas Vilayets (Black Sea &amp; Upper Kizilirmak)</td><td class="crd-td">1881AD</td><td class="crd-td">2,04M</td><td class="crd-td">1927AD</td><td class="crd-td">2,45M</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Hudavendigar Vilayet (NW Anatolia)</td><td class="crd-td">1881AD</td><td class="crd-td">1,32M</td><td class="crd-td">1927AD</td><td class="crd-td">1,79M</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Aydin Vilayet (Western Aegean)</td><td class="crd-td">1881AD</td><td class="crd-td">1,41M</td><td class="crd-td">1927AD</td><td class="crd-td">1,99M</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Istanbul &amp; Edirne (Marmara/Thrace)</td><td class="crd-td">1881AD</td><td class="crd-td">1,21M</td><td class="crd-td">1927AD</td><td class="crd-td">1,51M</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Morocco (French &amp; Spanish Protectorate Régions)</td><td class="crd-td">1880AD</td><td class="crd-td">4,2M</td><td class="crd-td">1960AD</td><td class="crd-td">11,63M</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Territoires du Sud (Algerian Sahara)</td><td class="crd-td">1886AD</td><td class="crd-td">280k</td><td class="crd-td">1954AD</td><td class="crd-td">850k</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Département d'Alger (Central Algeria)</td><td class="crd-td">1886AD</td><td class="crd-td">1,38M</td><td class="crd-td">1954AD</td><td class="crd-td">3,09M</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Département de Constantine (Eastern Algeria)</td><td class="crd-td">1886AD</td><td class="crd-td">1,57M</td><td class="crd-td">1954AD</td><td class="crd-td">3,44M</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Département d'Oran (Western Algeria)</td><td class="crd-td">1886AD</td><td class="crd-td">870,5k</td><td class="crd-td">1954AD</td><td class="crd-td">2,15M</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">Protectorate of Tunisia (Contrôles Civils)</td><td class="crd-td">1881AD</td><td class="crd-td">1,5M</td><td class="crd-td">1956AD</td><td class="crd-td">3,78M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Historical subadministrative census enumerations (1880AD to 1960AD) anchoring the long-run pycnophylactic carrying-capacity envelope across 29 regional divisions.</figcaption>
</figure>

Table \ref{tab:hist-subadmin} summarises the 29 historical subadministrative census units used to verify spatial carrying-capacity ceilings across Iraq, Syria, Egypt, Anatolia, Morocco, Algeria and Tunisia, while Table \ref{tab:modern-subadmin} reports the 20 national sets of modern geoBoundaries polygons (2.629 units across the domain audit) verified during the mass-conservation audit (65.864 unit-year checks, maximum relative error $5{,}845 \times 10^{-8}$) [@Runfola2020GeoBoundaries].

The historical census anchor series spans pivotal regional transitions. In Iraq, the three Ottoman vilayets of Baghdad (850k in 1881AD to 2,31M in 1947AD), Basra (470k to 1,15M) and Mosul (480k to 1,37M) establish the late pre-industrial baseline distribution between central Sawad alluvium, southern marshlands and northern Jazira rain-fed plains. In Egypt, the 1882AD to 1947AD *mudiriya* and *muhafaza* series tracks Upper Egypt (2,79M to 7,17M), Lower Egypt (3,34M to 8,51M) and the Cairo-Alexandria-Suez Canal urban governorates (675k to 3,34M), providing direct empirical ratios between rural Nile basin density and metropolitan concentration.

Across Anatolia, Ottoman 1881AD/1893AD and 1914AD enumerations paired with the 1927AD Republican census capture the sharp demographic shock in the eastern vilayets of Erzurum, Van, Bitlis, Mamuretulaziz and Diyarbakir (falling from 2,79M in 1914AD to 1,67M in 1927AD) alongside steadier trajectories in western Aydin, Hudavendigar and Konya. In the Maghrib, French colonial *département* censuses in Alger, Constantine, Oran and the *Territoires du Sud* (1886AD to 1954AD), Tunisian *contrôles civils* (1921AD to 1956AD) and Moroccan protectorate *régions* (1936AD to 1960AD) anchor the carrying-capacity contrast between coastal Tell agriculture and Saharan oasis belts.

<figure class="crd-table-figure" id="tab:modern-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Admin Level</th><th class="crd-th">Matched Units</th><th class="crd-th">Census Count</th><th class="crd-th">Span</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>AFG</strong></td><td class="crd-td">ADM2</td><td class="crd-td">355</td><td class="crd-td">3</td><td class="crd-td">1979 to 2020</td></tr>
<tr><td class="crd-td"><strong>ARM</strong></td><td class="crd-td">ADM1</td><td class="crd-td">11</td><td class="crd-td">17</td><td class="crd-td">1959 to 2025</td></tr>
<tr><td class="crd-td"><strong>AZE</strong></td><td class="crd-td">ADM2</td><td class="crd-td">78</td><td class="crd-td">32</td><td class="crd-td">1959 to 2026</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">ADM2</td><td class="crd-td">44</td><td class="crd-td">4</td><td class="crd-td">1977 to 2008</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">ADM2</td><td class="crd-td">296</td><td class="crd-td">5</td><td class="crd-td">1986 to 2023</td></tr>
<tr><td class="crd-td"><strong>GEO</strong></td><td class="crd-td">ADM2</td><td class="crd-td">61</td><td class="crd-td">26</td><td class="crd-td">1959 to 2026</td></tr>
<tr><td class="crd-td"><strong>IRN</strong></td><td class="crd-td">ADM2</td><td class="crd-td">379</td><td class="crd-td">5</td><td class="crd-td">1996 to 2023</td></tr>
<tr><td class="crd-td"><strong>IRQ</strong></td><td class="crd-td">ADM2</td><td class="crd-td">88</td><td class="crd-td">5</td><td class="crd-td">1977 to 2024</td></tr>
<tr><td class="crd-td"><strong>ISR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">14</td><td class="crd-td">5</td><td class="crd-td">1983 to 2021</td></tr>
<tr><td class="crd-td"><strong>JOR</strong></td><td class="crd-td">ADM1</td><td class="crd-td">12</td><td class="crd-td">5</td><td class="crd-td">1994 to 2021</td></tr>
<tr><td class="crd-td"><strong>LBN</strong></td><td class="crd-td">ADM2</td><td class="crd-td">21</td><td class="crd-td">5</td><td class="crd-td">1970 to 2017</td></tr>
<tr><td class="crd-td"><strong>LBY</strong></td><td class="crd-td">ADM1</td><td class="crd-td">17</td><td class="crd-td">2</td><td class="crd-td">2006 to 2020</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">63</td><td class="crd-td">4</td><td class="crd-td">1994 to 2024</td></tr>
<tr><td class="crd-td"><strong>OMN</strong></td><td class="crd-td">ADM2</td><td class="crd-td">53</td><td class="crd-td">4</td><td class="crd-td">1993 to 2020</td></tr>
<tr><td class="crd-td"><strong>PSE</strong></td><td class="crd-td">ADM2</td><td class="crd-td">16</td><td class="crd-td">4</td><td class="crd-td">1997 to 2023</td></tr>
<tr><td class="crd-td"><strong>SAU</strong></td><td class="crd-td">ADM2</td><td class="crd-td">136</td><td class="crd-td">4</td><td class="crd-td">1992 to 2022</td></tr>
<tr><td class="crd-td"><strong>SYR</strong></td><td class="crd-td">ADM1</td><td class="crd-td">13</td><td class="crd-td">4</td><td class="crd-td">1981 to 2021</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">ADM1</td><td class="crd-td">24</td><td class="crd-td">5</td><td class="crd-td">1984 to 2024</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">968</td><td class="crd-td">8</td><td class="crd-td">1990 to 2023</td></tr>
<tr><td class="crd-td"><strong>YEM</strong></td><td class="crd-td">ADM1</td><td class="crd-td">21</td><td class="crd-td">2</td><td class="crd-td">1994 to 2004</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Modern subadministrative polygon coverage from geoBoundaries across 20 jurisdictions used in pycnophylactic scaling checks.</figcaption>
</figure>

Turning to the urban settlement hierarchy, Figure \ref{fig:settlements-early-islamic-caliphate} plots the log-log rank-size distribution across the 140 individually assessed urban centres (138 within the contiguous spatial mask). Ordinary least-squares regression yields a Zipf slope $\alpha = 0,72$ with $R^2 = 0,96$, a tight power-law fit characteristic of a mature, polycentric imperial network in which a single primate capital stands above a deep tier of regional metropolises and garrison foundations rather than an artificially flattened shelf.

Examining individual metropolitan records inside the gazetteer shows how that smooth rank-size curve emerges from distinct historical trajectories. At the apex stands Baghdad, founded in 762AD by Caliph al-Mansur and surging across its Round City, Karkh, Harbiyya and East Bank Rusafa quarters to a peak of 695k in 900AD before tenth-century civil wars and Buyid fiscal contraction lowered it to 360k by 1000AD. Beneath Baghdad sits a closely graded band of eleven regional capitals exceeding 120k at their respective peaks: Rayy (194k in 1000AD under Buyid rule), Samarra (founded 836AD, peaking at 178k in 860AD before collapsing to 13,2k by 1000AD after the court returned to Baghdad in 892AD), Fustat (founded 641AD, reaching 174k in 900AD and forming a 230k twin metropolis with Fatimid Al-Qahira, founded 969AD at 62k by 1000AD), Basra (founded 638AD, peaking at 168k in 750AD before falling to 48k after the 871AD Zanj and 923AD Qarmatian sacks), Nishapur (156k in 1000AD across its *qanat*-fed Tahirid-Samanid quarters), Al-Mada'in (145k in 632AD, receding to 4,6k as Baghdad absorbed the central Tigris urban base), Alexandria (142k in 632AD, easing to 72,5k by 1000AD), Kufa (founded 638AD, peaking at 132k in 750AD before declining to 33k), Isfahan (132k in 1000AD), Damascus (126k at its 745AD Umayyad capital peak before easing to 74k) and Kairouan (founded 670AD, peaking at 124k in 950AD). Immediately below them follow Shiraz (114k, founded 693AD), Balkh (114k), Herat (91,4k), Mosul (91k), Fez (88,5k, founded 789AD), Raqqa (78k at Harun al-Rashid's 800AD capital peak), Hamadan (76,5k), Zaranj (76,5k) and Ghazni (74,5k) [@Bosworth2007Historic; @Nol2021Defining; @ALJabri2023Developmen].

<figure class="crd-figure-block" id="fig:settlements-early-islamic-caliphate">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-early-islamic-caliphate/fig4_early_islamic_caliphate_settlements.png" alt="fig:settlements-early-islamic-caliphate" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Rank-size distribution across 140 individually assessed settlements and peak populations of the twelve highest-ranked urban centres.</figcaption>
</figure>

# Results

Across the entire Early Islamic Caliphate and Byzantine Anatolian frontier domain, population increased by 8,51M inhabitants between 632AD and 1000AD, rising from 41,84M in 632AD to 44,33M in 750AD (+5,95%), 47,9M in 850AD (+8,05%) and 50,35M in 1000AD (+5,11%). Viewed at the macro-scale, average annual compound growth stood at 0,05% across the 368-year period, accelerating briefly to 0,077% between 750AD and 850AD during the height of Abbasid canal and Silk Road prosperity before moderating to 0,033% per year between 850AD and 1000AD. Figure \ref{fig:trajectory-early-islamic-caliphate} and Table \ref{tab:subregion-trajectories} break down this aggregate arc across all ten constituent regions.

<figure class="crd-figure-block" id="fig:trajectory-early-islamic-caliphate">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-early-islamic-caliphate/fig2_early_islamic_caliphate_trajectory.png" alt="fig:trajectory-early-islamic-caliphate" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Aggregate population trajectory with uncertainty bounds (632AD to 1000AD) and regional distribution across leading territorial units in 1000AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:subregion-trajectories">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">632AD</th><th class="crd-th">750AD</th><th class="crd-th">850AD</th><th class="crd-th">1000AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jibal, Fars, Khuzestan and Khurasan</strong></td><td class="crd-td">1.623.351</td><td class="crd-td">7,6M</td><td class="crd-td">7,95M</td><td class="crd-td">8,65M</td><td class="crd-td">9,35M</td></tr>
<tr><td class="crd-td"><strong>Byzantine Anatolia, Thughur and Cyprus</strong></td><td class="crd-td">788.963</td><td class="crd-td">7,4M</td><td class="crd-td">7,15M</td><td class="crd-td">7,95M</td><td class="crd-td">9,15M</td></tr>
<tr><td class="crd-td"><strong>Misr (Early Islamic Egypt)</strong></td><td class="crd-td">1.003.010</td><td class="crd-td">4,85M</td><td class="crd-td">5,05M</td><td class="crd-td">5,35M</td><td class="crd-td">5,75M</td></tr>
<tr><td class="crd-td"><strong>Al-Iraq (Sawad) and Al-Jazira</strong></td><td class="crd-td">437.723</td><td class="crd-td">5,2M</td><td class="crd-td">6,1M</td><td class="crd-td">6,85M</td><td class="crd-td">5,6M</td></tr>
<tr><td class="crd-td"><strong>Al-Maghrib al-Aqsa and al-Awsat</strong></td><td class="crd-td">2.996.152</td><td class="crd-td">2,95M</td><td class="crd-td">3,25M</td><td class="crd-td">3,65M</td><td class="crd-td">4,15M</td></tr>
<tr><td class="crd-td"><strong>Bilad al-Sham (Umayyad and Abbasid Levant)</strong></td><td class="crd-td">313.332</td><td class="crd-td">4,15M</td><td class="crd-td">4,65M</td><td class="crd-td">4,35M</td><td class="crd-td">4,15M</td></tr>
<tr><td class="crd-td"><strong>Al-Hijaz, Najd, Al-Yaman and Oman</strong></td><td class="crd-td">2.793.206</td><td class="crd-td">3,1M</td><td class="crd-td">3,25M</td><td class="crd-td">3,45M</td><td class="crd-td">3,65M</td></tr>
<tr><td class="crd-td"><strong>Tokharistan, Sistan and Kabulistan</strong></td><td class="crd-td">642.478</td><td class="crd-td">2,55M</td><td class="crd-td">2,65M</td><td class="crd-td">2,85M</td><td class="crd-td">3,15M</td></tr>
<tr><td class="crd-td"><strong>Ifriqiya, Tripolitania and Barqa</strong></td><td class="crd-td">1.784.090</td><td class="crd-td">2,09M</td><td class="crd-td">2,18M</td><td class="crd-td">2,45M</td><td class="crd-td">2,75M</td></tr>
<tr><td class="crd-td"><strong>Arminiya, Gurjistan and Arran</strong></td><td class="crd-td">185.339</td><td class="crd-td">1,95M</td><td class="crd-td">2,1M</td><td class="crd-td">2,35M</td><td class="crd-td">2,65M</td></tr>
<tr><td class="crd-td"><strong>Total Study Domain (10 regions)</strong></td><td class="crd-td">12.567.642</td><td class="crd-td">41,84M</td><td class="crd-td">44,33M</td><td class="crd-td">47,9M</td><td class="crd-td">50,35M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Estimated regional population across all ten divisions from 632AD to 1000AD with geodesic land area.</figcaption>
</figure>

To highlight structural shifts in carrying capacity and settlement density, Table \ref{tab:subregion-growth} reports net percentage change across each sub-period alongside mean 1000AD population density. Four distinct regional patterns emerge from these figures.

<figure class="crd-table-figure" id="tab:subregion-growth">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">632 to 750AD</th><th class="crd-th">750 to 850AD</th><th class="crd-th">850 to 1000AD</th><th class="crd-th">Net Change</th><th class="crd-th">Density (inh./km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jibal, Fars, Khuzestan and Khurasan</strong></td><td class="crd-td">+4,6%</td><td class="crd-td">+8,8%</td><td class="crd-td">+8,1%</td><td class="crd-td">+23%</td><td class="crd-td">5,76</td></tr>
<tr><td class="crd-td"><strong>Byzantine Anatolia, Thughur and Cyprus</strong></td><td class="crd-td">-3,4%</td><td class="crd-td">+11,2%</td><td class="crd-td">+15,1%</td><td class="crd-td">+23,6%</td><td class="crd-td">11,6</td></tr>
<tr><td class="crd-td"><strong>Misr (Early Islamic Egypt)</strong></td><td class="crd-td">+4,1%</td><td class="crd-td">+5,9%</td><td class="crd-td">+7,5%</td><td class="crd-td">+18,6%</td><td class="crd-td">5,73</td></tr>
<tr><td class="crd-td"><strong>Al-Iraq (Sawad) and Al-Jazira</strong></td><td class="crd-td">+17,3%</td><td class="crd-td">+12,3%</td><td class="crd-td">-18,2%</td><td class="crd-td">+7,7%</td><td class="crd-td">12,79</td></tr>
<tr><td class="crd-td"><strong>Al-Maghrib al-Aqsa and al-Awsat</strong></td><td class="crd-td">+10,2%</td><td class="crd-td">+12,3%</td><td class="crd-td">+13,7%</td><td class="crd-td">+40,7%</td><td class="crd-td">1,39</td></tr>
<tr><td class="crd-td"><strong>Bilad al-Sham (Umayyad and Abbasid Levant)</strong></td><td class="crd-td">+12%</td><td class="crd-td">-6,5%</td><td class="crd-td">-4,6%</td><td class="crd-td">+0%</td><td class="crd-td">13,24</td></tr>
<tr><td class="crd-td"><strong>Al-Hijaz, Najd, Al-Yaman and Oman</strong></td><td class="crd-td">+4,8%</td><td class="crd-td">+6,2%</td><td class="crd-td">+5,8%</td><td class="crd-td">+17,7%</td><td class="crd-td">1,31</td></tr>
<tr><td class="crd-td"><strong>Tokharistan, Sistan and Kabulistan</strong></td><td class="crd-td">+3,9%</td><td class="crd-td">+7,5%</td><td class="crd-td">+10,5%</td><td class="crd-td">+23,5%</td><td class="crd-td">4,9</td></tr>
<tr><td class="crd-td"><strong>Ifriqiya, Tripolitania and Barqa</strong></td><td class="crd-td">+4,3%</td><td class="crd-td">+12,4%</td><td class="crd-td">+12,2%</td><td class="crd-td">+31,6%</td><td class="crd-td">1,54</td></tr>
<tr><td class="crd-td"><strong>Arminiya, Gurjistan and Arran</strong></td><td class="crd-td">+7,7%</td><td class="crd-td">+11,9%</td><td class="crd-td">+12,8%</td><td class="crd-td">+35,9%</td><td class="crd-td">14,3</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Inter-benchmark population growth rates and 1000AD mean territorial density (inhabitants per km²) by macro-region.</figcaption>
</figure>

First, the central Semitic crescent of Bilad al-Sham and Al-Iraq followed an inverted-U curve tied directly to imperial patronage and hydraulic capital. Bilad al-Sham (313.332 km²) rose 12,1% from 4,15M in 632AD to a peak of 4,65M in 750AD (14,84 inhabitants per km²) while Damascus functioned as Umayyad capital and *jund* garrisons, coastal shipyards and Jordan valley estates received metropolitan stipends [@Ali2026Dimensions; @Bessard2018Politics; @Mokranova2025Material]. After 750AD, the removal of the court to Iraq and seismic damage reduced Levantine numbers to 4,35M in 850AD and 4,15M by 1000AD (13,24 per km²), leaving Syria with zero net gain over the four-century span. Al-Iraq and Al-Jazira (437.723 km²) climbed even more steeply in the early caliphal phase, expanding from 5,2M in 632AD to 6,1M in 750AD (+17,3%) and reaching 6,85M in 850AD (15,65 per km²) as Basra, Kufa, Wasit, Baghdad, Raqqa and Samarra concentrated court consumption and Sawad irrigation reached its mediaeval high-water mark [@ALJabri2023Developmen; @Yuksel2024Mecca; @Wahhab2024Decorative]. Yet once the Zanj uprising (869AD to 883AD), Qarmatian disruptions and tenth-century Buyid fiscal fragmentation disrupted dredging of the Nahrawan and Euphrates-Tigris cross-canals, Iraq fell by 18,2% to 5,6M in 1000AD (12,79 per km²), losing roughly 1,25M inhabitants in 150 years.

Second, the eastern Iranian-Afghan world maintained uninterrupted expansion. Jibal, Fars, Khuzestan and Khurasan (1,62M km²) began as the most populous region at 7,6M in 632AD and rose steadily through 7,95M (750AD) and 8,65M (850AD) to 9,35M in 1000AD (+23%), propelled by *qanat*-irrigated piedmont oases around Rayy, Hamadan, Isfahan, Shiraz and Nishapur and industrial exports along the Silk Roads [@Saatsaz2023Technology; @Lu2023Connected; @Michailidis2014Dynastic]. Adjacent Tokharistan, Sistan and Kabulistan (642.478 km²) followed the same trajectory, advancing 23,5% from 2,55M in 632AD to 3,15M in 1000AD around Balkh, Merv al-Rudh, Herat and Ghazna as Samanid urban prosperity spilled eastward [@Cross2023Phantasy; @Mammadli2024Personalit; @Spooner2019Epilogue].

Third, Byzantine Anatolia, Thughur and Cyprus (788.963 km²) traced a clear U-shaped curve. Starting at 7,4M in 632AD, sustained Umayyad and early Abbasid campaigning across Cilicia and central Anatolia, combined with rural fortification into *kastra* and late plague mortality, lowered the regional total by 3,4% to 7,15M in 750AD [@Coleman2021Poleis; @Mitchell2021Church]. Recovery began once the frontier stabilised along the Taurus-Anti-Taurus *Thughur* zone: numbers rebounded by 11,2% to 7,95M in 850AD and surged another 15,1% to 9,15M in 1000AD (11,6 per km²), narrowing the demographic lead of Iranian lands to just 200k inhabitants [@Bakirtzis2023Introducin; @PreiserKapeller2024Medieval; @Ozbal2026Diet]. Neighbouring Arminiya, Gurjistan and Arran (185.339 km²) grew even faster in proportional terms, advancing 35,9% from 1,95M to 2,65M (14,3 per km², the highest gross density in the 1000AD table) as Bagratid Armenian and Georgian highland valleys prospered alongside Shirvan and Arran [@Navruz2024Historical].

Fourth, Misr, North Africa and the Arabian Peninsula exhibited steady, lower-amplitude growth rooted in ecological continuity. Misr (1M km² gross, though packed into the Nile floodplain and Delta) increased 18,6% from 4,85M in 632AD to 5,75M in 1000AD, anchored by Fustat's expansion into a Nile entrepôt under Tulunid, Ikhshidid and early Fatimid rule [@Isoldi2026Confluent; @Maghraby2025Arab]. Ifriqiya, Tripolitania and Barqa (1,78M km²) expanded 31,6% from 2,09M to 2,75M around Kairouan, Tunis, Mahdiyya and Tripoli, while Al-Maghrib al-Aqsa and al-Awsat (3M km²) recorded the largest proportional gain of any division (+40,7%, from 2,95M to 4,15M) as Idrisi Fez, Sijilmasa and Tahert integrated Atlas agriculture with trans-Saharan caravan trade [@Bosworth2007Historic; @Allahham2025Untold]. Finally, Al-Hijaz, Najd, Al-Yaman and Oman (2,79M km²) rose gently by 17,7% from 3,1M to 3,65M, sustained by Meccan and Medinan pilgrimage provisioning, Yemeni highland terraces and *falaj*-fed Omani oases [@Yuksel2024Mecca; @Biezeveld2025Quantifyin].

Within the 140-site settlement gazetteer, active individually assessed centres expanded from 122 cities housing 2,4M inhabitants in 632AD (mean 19.641) to 130 active centres housing 3,39M in 750AD following the Rashidun and Umayyad foundation wave, 135 active centres housing 4,92M at the 850AD Abbasid zenith (mean 36.471) and 140 centres housing 5,35M in 1000AD (mean 38.229). Over the whole period, these individually assessed cities account for 5,7% of total regional population in 632AD, climbing to 10,3% in 850AD and 10,6% in 1000AD, reflecting the sustained rise of early Islamic metropolises across Turkey (23 centres), Iran (20), Egypt (12), Iraq (10), Afghanistan (10) and Syria (7).

Equally instructive is the geographic breadth of the major urban network between 650AD and 1000AD. Rather than concentrating exclusively in a single imperial capital, cities assessed in the gazetteer distributed along four interconnected corridors: the Tigris-Euphrates axis (Baghdad, Samarra, Basra, Kufa, Wasit, Mosul, Al-Mada'in, Raqqa, Amid), the Nile-Levantine littoral (Fustat, Al-Qahira, Alexandria, Tinnis, Damascus, Aleppo, Antioch, Jerusalem, Ramla, Tyre), the Iranian-Khorasani-Afghan plateau (Rayy, Nishapur, Isfahan, Shiraz, Hamadan, Jurjan, Ahvaz, Ardabil, Siraf, Balkh, Herat, Zaranj, Ghazni) and the Maghrib-Hijaz-Indian Ocean network (Kairouan, Fez, Tunis, Al-Mahdiyya, Tahert, Tripoli, Mecca, Medina, Sanaa, Zabid, Sohar) [@Bosworth2007Historic; @Yuksel2024Mecca; @Allahham2025Untold]. By 1000AD, this multipolar urban grid proved durable enough to weather the fragmentation of Abbasid central authority into Buyid, Fatimid, Samanid and Byzantine successor spheres without reversing long-term demographic growth outside lower Iraq.

# Limitations

Three methodological constraints govern the precision of these estimates and should be weighed when comparing sub-periods or individual cities. First, because the 140 settlement trajectories are individually assessed from excavated walled areas, suburban survey extents, *diwan* troop registers and Arabic geographical descriptions rather than uniform tier defaults, metropolitan uncertainty bands remain wider for vast discontinuous agglomerations such as Abbasid Baghdad (peaking at 695k in 900AD across roughly 7.000 ha of built and garden quarters) or Samarra (178k in 860AD across low-density palace cantonments) than for compact walled cities such as Damascus, Amid or Ramla.

While rejecting exaggerated chroniclers' claims of 1M to 2M residents in Baghdad preserves a realistic Zipf gradient ($\alpha = 0,72$, $R^2 = 0,96$), intra-urban housing densities between dense multi-storey cores such as Fustat or Tinnis and sprawling oasis *rabads* such as Rayy, Nishapur or Balkh can still shift individual metropolitan totals by 20% to 35% [@ALJabri2023Developmen; @Bosworth2007Historic].

Second, archaeological survey coverage across the 22 modern national jurisdictions of the study domain remains uneven. Syria, Jordan, Israel, Palestine, western Anatolia and the Nile Delta benefit from intensive multi-decade field walking and chronometric corpora [@Mokranova2025Material; @Mitchell2021Church; @Ozbal2026Diet], whereas inner Arabia, desert Libya, western Afghanistan and interior Algeria rely much more heavily on historical itineraries and selective oasis excavations.

Non-stationary Matérn kriging corrects for catchment spacing via geodesic Voronoi normalisation, yet sparse arid interiors inevitably carry wider local uncertainty than the Levant, Egypt or the Tigris-Euphrates valley, and smaller unquantified rural towns below roughly 10k peak population are absorbed into the continuous rural density surface rather than tabulated as individual gazetteer rows.

Third, historical census anchors are wholly absent prior to the nineteenth century outside fragmentary Egyptian papyri [@Maghraby2025Arab]. Using 1880AD to 1960AD Ottoman, Mandate and colonial subadministrative counts alongside modern geoBoundaries polygons [@Runfola2020GeoBoundaries] ensures strict pycnophylactic mass conservation and realistic ecological carrying capacities across watersheds, yet long-run backward projection cannot directly observe brief localised shocks - such as tenth-century Qarmatian raids in Bahrain and the Syrian desert or short-lived Samanid border famines - at finer than sub-regional resolution.

# Conclusion

Between 632AD and 1000AD, the lands of the Early Islamic Caliphate and Byzantine Anatolia added roughly 8,51M inhabitants, moving from 41,84M to 50,35M across 12,57M km². Rather than a uniform demographic wave, those four centuries redistributed urban and agrarian weight across three successive axes: an Umayyad Levantine crest peaking in 750AD, an Abbasid Iraqi irrigation and metropolitan zenith peaking around 850AD before breaking down under civil conflict and canal salinisation, and a durable tenth-century balance led by *qanat*-fed Iran and Khurasan (9,35M), recovering Byzantine Anatolia (9,15M), Egypt (5,75M) and an expanding North African littoral.

Combining 140 individually assessed settlements ($\alpha = 0,72$, $R^2 = 0,96$) with metric-isotropic Matérn ($\nu = 3/2$) residual kriging ($R^2 = 0,9992$) and pycnophylactic subadministrative anchoring reconciles textual fiscal traditions with excavated settlement archaeology across ten macro-regions. As historical censuses and geoBoundaries administrative polygons anchor the modern carrying-capacity tail with sub-part-per-ten-million mass conservation, the resulting trajectory offers a consistent baseline for comparing post-1000AD Seljuk, Fatimid, Crusader and Mongol demographic shifts across the Middle East and North Africa.

# Appendix

Table \ref{tab:modern-top-units} lists the leading modern subadministrative districts (ADM1 and ADM2) from geoBoundaries [@Runfola2020GeoBoundaries] lying inside the HANDBOOK Early Islamic domain, illustrating the contemporary carrying-capacity poles along the Nile, Tehran-Rayy, Hijaz, Aleppo, Damascus and Basra corridors, while Table \ref{tab:top-settlements} reports the top fifteen individually assessed settlements from the 632AD to 1000AD urban dataset.

<figure class="crd-table-figure" id="tab:modern-top-units">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ISO</th><th class="crd-th">District</th><th class="crd-th">Level</th><th class="crd-th">Area (km²)</th><th class="crd-th">Latest Census</th><th class="crd-th">Density (inh./km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>IRN</strong></td><td class="crd-td">Tehran</td><td class="crd-td">ADM2</td><td class="crd-td">980</td><td class="crd-td">2023 (14,44M)</td><td class="crd-td">14.732</td></tr>
<tr><td class="crd-td"><strong>SAU</strong></td><td class="crd-td">Riyadh</td><td class="crd-td">ADM2</td><td class="crd-td">8.568</td><td class="crd-td">2022 (8,59M)</td><td class="crd-td">1.003</td></tr>
<tr><td class="crd-td"><strong>SAU</strong></td><td class="crd-td">Makkah Al Mukarramah</td><td class="crd-td">ADM2</td><td class="crd-td">4.017</td><td class="crd-td">2022 (7,77M)</td><td class="crd-td">1.934</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Markz Al Minya</td><td class="crd-td">ADM2</td><td class="crd-td">304</td><td class="crd-td">2023 (6,34M)</td><td class="crd-td">20.847</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Kesm Al-minya</td><td class="crd-td">ADM2</td><td class="crd-td">76</td><td class="crd-td">2023 (6,34M)</td><td class="crd-td">83.389</td></tr>
<tr><td class="crd-td"><strong>IRN</strong></td><td class="crd-td">Isfahan</td><td class="crd-td">ADM2</td><td class="crd-td">292</td><td class="crd-td">2023 (5,48M)</td><td class="crd-td">18.767</td></tr>
<tr><td class="crd-td"><strong>AFG</strong></td><td class="crd-td">Kabul</td><td class="crd-td">ADM2</td><td class="crd-td">355</td><td class="crd-td">2020 (5,2M)</td><td class="crd-td">14.661</td></tr>
<tr><td class="crd-td"><strong>SYR</strong></td><td class="crd-td">Aleppo</td><td class="crd-td">ADM1</td><td class="crd-td">19.765</td><td class="crd-td">2021 (4,12M)</td><td class="crd-td">208</td></tr>
<tr><td class="crd-td"><strong>JOR</strong></td><td class="crd-td">Amman</td><td class="crd-td">ADM1</td><td class="crd-td">8.407</td><td class="crd-td">2021 (4,64M)</td><td class="crd-td">552</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Fayyum</td><td class="crd-td">ADM2</td><td class="crd-td">375</td><td class="crd-td">2023 (4,08M)</td><td class="crd-td">10.882</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Fayyum City</td><td class="crd-td">ADM2</td><td class="crd-td">75</td><td class="crd-td">2023 (4,08M)</td><td class="crd-td">54.409</td></tr>
<tr><td class="crd-td"><strong>SAU</strong></td><td class="crd-td">Jiddah</td><td class="crd-td">ADM2</td><td class="crd-td">3.306</td><td class="crd-td">2022 (3,75M)</td><td class="crd-td">1.135</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Kafr Al-Shaykh</td><td class="crd-td">ADM2</td><td class="crd-td">222</td><td class="crd-td">2023 (3,72M)</td><td class="crd-td">16.749</td></tr>
<tr><td class="crd-td"><strong>IRQ</strong></td><td class="crd-td">Al-Basrah</td><td class="crd-td">ADM2</td><td class="crd-td">1.181</td><td class="crd-td">2024 (3,66M)</td><td class="crd-td">3.103</td></tr>
<tr><td class="crd-td"><strong>IRN</strong></td><td class="crd-td">Kerman</td><td class="crd-td">ADM2</td><td class="crd-td">45.302</td><td class="crd-td">2023 (3,46M)</td><td class="crd-td">76</td></tr>
<tr><td class="crd-td"><strong>IRN</strong></td><td class="crd-td">Mashhad</td><td class="crd-td">ADM2</td><td class="crd-td">9.279</td><td class="crd-td">2016 (3,37M)</td><td class="crd-td">363</td></tr>
<tr><td class="crd-td"><strong>SYR</strong></td><td class="crd-td">Rural Damascus</td><td class="crd-td">ADM1</td><td class="crd-td">26.517</td><td class="crd-td">2021 (3,37M)</td><td class="crd-td">127</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading modern subadministrative districts inside the study domain, showing area and latest census density (inhabitants per km²).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:top-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Coords</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Baghdad</td><td class="crd-td">Iraq</td><td class="crd-td">33,34, 44,37</td><td class="crd-td">765-1000AD</td><td class="crd-td">695k (900AD)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Rayy</td><td class="crd-td">Iran</td><td class="crd-td">35,6, 51,43</td><td class="crd-td">632-1000AD</td><td class="crd-td">194k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Samarra</td><td class="crd-td">Iraq</td><td class="crd-td">34,2, 43,87</td><td class="crd-td">840-1000AD</td><td class="crd-td">178k (860AD)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Fustat</td><td class="crd-td">Egypt</td><td class="crd-td">30,01, 31,23</td><td class="crd-td">645-1000AD</td><td class="crd-td">174k (900AD)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Basra</td><td class="crd-td">Iraq</td><td class="crd-td">30,39, 47,71</td><td class="crd-td">640-1000AD</td><td class="crd-td">168k (750AD)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Nishapur</td><td class="crd-td">Iran</td><td class="crd-td">36,21, 58,8</td><td class="crd-td">632-1000AD</td><td class="crd-td">156k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Al-Mada'in</td><td class="crd-td">Iraq</td><td class="crd-td">33,09, 44,58</td><td class="crd-td">632-1000AD</td><td class="crd-td">145k (632AD)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Alexandria</td><td class="crd-td">Egypt</td><td class="crd-td">31,2, 29,92</td><td class="crd-td">632-1000AD</td><td class="crd-td">142k (632AD)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Kufa</td><td class="crd-td">Iraq</td><td class="crd-td">32,03, 44,4</td><td class="crd-td">640-1000AD</td><td class="crd-td">132k (750AD)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Isfahan</td><td class="crd-td">Iran</td><td class="crd-td">32,65, 51,67</td><td class="crd-td">632-1000AD</td><td class="crd-td">132k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Damascus</td><td class="crd-td">Syria</td><td class="crd-td">33,51, 36,31</td><td class="crd-td">632-1000AD</td><td class="crd-td">126k (745AD)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Kairouan</td><td class="crd-td">Tunisia</td><td class="crd-td">35,68, 10,1</td><td class="crd-td">675-1000AD</td><td class="crd-td">124k (950AD)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Shiraz</td><td class="crd-td">Iran</td><td class="crd-td">29,61, 52,53</td><td class="crd-td">700-1000AD</td><td class="crd-td">114k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Balkh</td><td class="crd-td">Afghanistan</td><td class="crd-td">36,76, 66,9</td><td class="crd-td">632-1000AD</td><td class="crd-td">114k (950AD)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Herat</td><td class="crd-td">Afghanistan</td><td class="crd-td">34,34, 62,2</td><td class="crd-td">632-1000AD</td><td class="crd-td">91,4k (1000AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Top fifteen individually assessed settlements in the 632AD to 1000AD gazetteer by peak population.</figcaption>
</figure>

# Sources

::: {#refs}
:::
