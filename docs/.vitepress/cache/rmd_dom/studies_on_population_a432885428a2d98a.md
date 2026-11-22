---
title: "Studies on Population across Central Asia (Project SARAY)"
subtitle: "Holocene Archaeological Substrata, Non-Stationary Matérn Kriging, Oasis Cadastres and Modern Statistical Censuses"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: studies_on_population.bib
csl: _shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_saray_macro_zones.png"
hero_caption: "Four-panel Albers Equal-Area domain mosaic displaying Holocene environmental zones, ancient oasis states and steppe confederations, Imperial Russian oblasts alongside contemporary administrative divisions across Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan and Tajikistan at 5-arcminute resolution."
hero_label: "fig:hero-saray"

output:
  pdf_document:
    template: _shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Operation Viscount Project SARAY reconstructs the long-run demographic, settlement and spatial history of Central Asia across 3.890.946 km² from 10000BC to 2026AD, uniting nine constituent chapters across ancient, classical, mediaeval, imperial and modern eras. Enclosing the contiguous territories of Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan and Tajikistan, SARAY establishes a unified non-stationary Matérn geostatistical architecture with smoothness parameter $\nu = 3/2$ across 65.332 active 5-arcminute terrestrial cells. This spatial substratum integrates 37.060 archaeological site records from thirteen international and national repositories across 442 domestic and 281 frontier HydroBASINS Level 6 catchments, achieving regularised variogram parameters of $\tau_1 = 1,6742$ and a residual determination coefficient of $R^2 = 0,999$. Across the Holocene, aggregate population expanded from 40k in 10000BC to 1,45M by 1000BC, rose to 3,75M during the Classical Kushan and Kangju apex (200AD), and attained a mediaeval zenith of 6,95M under the Khwarazmshah Empire in 1219AD. The catastrophic 1219-1260AD Mongol invasion shock depressed numbers by forty-four per cent to 3,9M, initiating a slow agrarian and pastoralist recovery through Timurid reconstruction (5,4M in 1500AD) and early modern Uzbek khanates (9,15M in 1865AD). Imperial Russian administration established the first scientific baseline of 11,19M in the 1897 census. Twentieth-century dislocations, including the severe 1931-1933 Kazakh famine trough (12,85M), preceded rapid post-war Soviet demographic expansion to 50,94M at the 1991 dissolution of the Soviet Union. Contemporary national growth propelled combined population to 82,67M in 2025 across 13.703 harmonised settlement records without jurisdictional boundary tears or urban step discontinuities.

# Background

Historical demographic reconstructions for Central Asia confront three structural obstacles: the acute ecological contrast between hyper-arid desert depressions, snow-fed piedmont oasis belts and vast northern steppe expanses; the recurrent political restructuring between nomadic confederations, sedentary oasis khanates and imperial administrative regimes; and deep divisions in historical documentation between archaeological field surveys, dynastic Islamic chronicles, tsarist fiscal returns and modern Soviet censuses [@Croix2021Roundtable; @Didovets2026Towards].

Over past decades, global historical demographic syntheses have relied on broad continental tabulations compiled by Colin McEvedy and Richard Jones [@McEvedyJones1978] and Angus Maddison [@Maddison2001]. These classic compendia assigned uniform growth multipliers to modern republican borders or aggregated Russian Turkestan and the Steppe Krai into undifferentiated regional blocks. In the History Database of the Global Environment (HYDE 3.1 and HYDE 3.2), Kees Klein Goldewijk and colleagues made major progress by downscaling historical totals to a 5-arcminute grid from 10000BC to the present [@KleinGoldewijk2017]. HYDE combined urban point allocations with rural suitability weighting derived from river corridors, soil capability, terrain slope and climate envelopes.

Yet across Central Asia, human habitation followed environmental and political dynamics that top-down global downscaling cannot resolve from modern administrative units alone:

First, the physical geography of Central Asia is defined by closed endorheic drainage systems dependent on glacial meltwater from the Tian Shan, Pamir, Kopet Dag and Altai mountain cordilleras. The primary lifelines of sedentary civilization-the Amu Darya (Oxus), Syr Darya (Jaxartes), Zarafshan, Murghab, Tedzhen, Chuy and Ili rivers-terminate in inland sinks such as the Aral Sea, Lake Balkhash and the Karakum and Kyzylkum deserts [@Didovets2026Towards; @Mussataev2024Water]. Intensive sedentary agriculture was restricted to narrow linear oasis ribbons supported by complex irrigation networks, while the vast semi-arid steppe and semi-desert supported mobile pastoralist economies governed by seasonal transhumance [@Miller2026Cultivatin; @Razdykov2019Appearance]. Top-down allocation algorithms that apply isotropic distance decay or uniform agricultural suitability across modern provincial units misallocate populations into hyper-arid wastelands or distort oasis-steppe demographic ratios.

Second, the evidentiary record is divided among distinct linguistic, institutional and scholarly traditions. Prehistoric and classical settlement patterns must be recovered through archaeological excavations, radiocarbon databases, and remote sensing of ancient canals and fortified enclosures [@Gill2025Ancient; @Zhou2026Silkworm; @MirMakhamad2026Seeds; @BETTS2016Akchakhan; @Francfort2020Quelques]. Mediaeval demographic history rests on Arabic and Persian geographers (such as Ibn Hawqal, al-Muqaddasi, al-Biruni and Yaqut al-Hamawi) who recorded tax revenues, caravan stages and city walls [@Ilxomovna2026Reconstruc; @Sharipbayeva2026Geopolitic]. Early modern numbers are recorded in waqf endowments, court chronicles of the Khanates of Bukhara, Khiva and Kokand, and genealogical registers of the Kazakh Senior, Middle and Junior Zhuzes [@Wang2026Russian; @Karassayev2025History; @Toraigyrov2026Topical]. Imperial Russian administration introduced military statistical descriptions and the landmark 1897 All-Russian Census, while Soviet rule established comprehensive all-Union censuses (1926, 1937, 1939, 1959, 1970, 1979 and 1989AD) alongside vital registers complicated by catastrophic famine excess mortality and forced deportations [@Morrison2024Russian; @Zhanymkhan2025Ethnodemog; @Lovett2022Fate].

Third, modern statistical transitions require harmonising divergent post-Soviet national census systems across Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan and Tajikistan. Following the dissolution of the Soviet Union in 1991, the five republics experienced divergent demographic trajectories shaped by large-scale Slavic and German emigration from Kazakhstan, civil war in Tajikistan (1992-1997), distinct fertility dynamics in Uzbekistan, and contentious census reporting in Turkmenistan [@Anon2026Interethni; @Mukhamejan2026Long; @Nikolaeva2024Changes; @Yormirzoev2025Economy].

Project SARAY resolves these structural obstacles through bottom-up catchment-level geostatistical modelling and exhaustive settlement gazetteers across all nine constituent chapters, establishing an unbroken historical population record from 10000BC to 2026AD.

# Methodology

## Regional Partitioning and Chronological Architecture

Project SARAY establishes a hierarchical spatial and chronological partition designed to preserve sub-regional accounting integrity across shifting nomadic confederations, Islamic emirates, tsarist oblasts and modern post-Soviet administrative divisions. The spatial domain encompasses 3.890.946 km² of terrestrial Central Asia, divided into four chronological sections and nine modular chapters:

1. **Section 1: Ancient and Classical Eras (2 modules, 10000BC to 500AD)**:
   - *Prehistoric Central Asian Steppe and Oases (10000BC to 1000BC, 8 sub-regions)*: Documenting post-glacial hunter-gatherer bands, Kelteminar forager cultures, Sarazm proto-urban metalworking, Namazga agricultural oases, Botai early horse domestication, Sintashta chariot complexes, and the Bactria-Margiana Archaeological Complex (BMAC) across southern piedmonts and northern steppe river valleys [@Gill2025Ancient; @Zhou2026Silkworm; @MirMakhamad2026Seeds; @Miller2026Cultivatin; @Grigoriev2025Indo; @Zhao2026Tracing].
   - *Scythian, Saka and Classical Oasis States (1000BC to 500AD, 9 sub-regions)*: Covering Saka and Massagetae nomadic confederations, Achaemenid imperial satrapies, Greco-Bactrian cities (Ai-Khanoum), Parthian Nisa, the Kushan Empire, Kangju along the middle Syr Darya, early Wusun in Semirechye, and classical Chorasmian fortresses (expanding from 1,45M to 3,75M) [@Armaroli2026Tracing; @MirMakhamad2024Agricultur; @Morris2021Economic; @Morris2023Economic; @BETTS2016Akchakhan; @Francfort2020Quelques].
2. **Section 2: Mediaeval Transformations and Khanates (3 modules, 500AD to 1865AD)**:
   - *Turkic Migrations and Islamisation of Turan (500AD to 1219AD, 9 sub-regions)*: Following the First and Western Turkic Khaganates, Sogdian mercantile networks, the 751AD Battle of Talas, the Samanid Golden Age in Bukhara and Samarkand, Karakhanid urbanization in the Chuy valley, Seljuk imperial expansion, and the Khwarazmshah Empire, attaining the mediaeval demographic peak of 6,95M on the eve of the Mongol invasion [@Ilxomovna2026Reconstruc; @Sharipbayeva2026Geopolitic; @kyzy2025Religious; @Knar2024Turkic; @Pardaev2019Design; @Gunduz2026Journey; @MirMakhamad2023Testing].
   - *Mongol Conquest and Timurid Central Asia (1219AD to 1500AD, 8 sub-regions)*: Documenting the catastrophic destruction of Khwarazmian cities by Genghis Khan's armies (1219-1221AD), the division into the Chagatai Ulus and Golden Horde (Jochid Ulus), the forty-four per cent demographic trough to 3,9M in 1260AD, subsequent agrarian reconstruction under Timur (Tamerlane) and the Timurid Renaissance centered on Samarkand and Herat, recovering to 5,4M by 1500AD [@Amlashi2025Consequenc; @Akhmetkul2025History; @Stephen2012Deep; @Balabanlilar2007Lords; @Laruelle2021Central; @Zali2022Necessity].
   - *Uzbek Khanates and Kazakh Hordes (1500AD to 1865AD, 8 sub-regions)*: Tracing the Shaybanid Uzbek migration into Transoxiana, the consolidation of the Khanates of Bukhara, Khiva and Kokand, the formation of the Kazakh Khanate and its three Zhuzes (Senior, Middle and Junior), eighteenth-century Dzungar invasions (*Aqtaban Shubyryndy*), oasis irrigation works and gradual demographic growth from 5,4M to 9,15M on the eve of Russian expansion [@Wang2026Russian; @Toraigyrov2026Topical; @Anarbaeva2025Socio; @Karassayev2025History; @Karassayev2025Struggle; @Hallez2025Introducin; @Croix2021Roundtable; @Razdykov2019Appearance].
3. **Section 3: Imperial Integration and Soviet Era (3 modules, 1865AD to 1991AD)**:
   - *Russian Conquest, Imperial Turkestan and the Steppe (1865AD to 1917AD, 11 sub-regions)*: Covering the military campaigns of Chernyaev, Romanovsky and Kaufmann, the establishment of the Governor-Generalships of Turkestan and the Steppe, the protectorate status of Bukhara and Khiva, Slavic peasant colonisation, the Trans-Caspian and Orenburg-Tashkent railways, the 1897 All-Russian Census (11,19M), and the 1916 Central Asian revolt, reaching 13,95M in 1917 [@Bekmurodova2026Issue; @Morrison2024Russian; @Rakhmatillaev2023Ethnic; @Chokobaeva2017Frontiers; @Mario2017Crisis; @Battis2016Aleksandr].
   - *Russian Civil War, Basmachi and Early Soviet Transformation (1917AD to 1945AD, 10 sub-regions)*: Tracking the 1917-1921 Civil War and Turkestan famine, the Basmachi resistance movement, the 1924 national-territorial delimitation creating modern national republics, the catastrophic 1931-1933 Kazakh famine (*Asharshylyk*) reducing population to 12,85M in 1933, forced deportations of Koreans, Germans and Chechens, and wartime industrial mobilization reaching 16,95M in 1945 [@TEGIN2026Soviet; @Khudayarov2026Formation; @Norbekov2026Migration; @Omarova2026Formation; @Kokaisl2026Tsarist; @Zhanymkhan2025Ethnodemog; @Kaipbayeva2025Famine].
   - *Post-War Soviet Central Asian Republics (1945AD to 1991AD, 48 administrative divisions)*: Documenting post-war reconstruction, the Virgin Lands campaign (*Tselina*) in northern Kazakhstan, rapid industrialisation, large-scale cotton expansion and canal construction (such as the Karakum Canal), high indigenous fertility rates, and population growth from 16,95M in 1945 to 50,94M in the final Soviet census of 1989-1991 across all 48 constituent oblasts [@Anon2026Demographi; @Didovets2026Towards; @Lysenko2025Regional; @Yormirzoev2025Economy; @Klaus2024Early; @Mussataev2024Water; @Lovett2022Fate].
4. **Section 4: Modern Censuses (1 module, 1991AD to 2026AD)**:
   - *Post-Soviet Central Asia (1991AD to 2026AD, 48 administrative divisions)*: Tracking independence across Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan and Tajikistan, mass Slavic and German out-migration from Kazakhstan, post-2000 economic recovery and rapid urbanisation (Astana, Almaty, Shymkent), steady natural increase in Uzbekistan and Tajikistan, and combined domain expansion to 82,67M in 2025 [@Anon2026Interethni; @Mukhamejan2026Long; @Miazin2025Developmen; @Sheriyazdanov2025Main; @Makhanov2025Post; @Golunov2025Central; @Nikolaeva2024Changes].

Together, the nine modules incorporate 161 historical and contemporary analytical units that encompass every square kilometre of Central Asia without territorial gaps or spatial overlaps.

## Archaeological Substrata and Non-Stationary Matérn Kriging

Prehistoric and early historical rural settlement potential across the 65.332 active 5-arcminute terrestrial cells (3.890.946 km²) of Project SARAY is derived from an exhaustive compilation of archaeological excavations, radiocarbon registers, kurgan inventories, fortified settlements and epigraphic gazetteers. The database consolidates 37.060 composite site records across thirteen repositories and nine chronological horizons, incorporating:

- The UCL Central Asian Archaeological Landscapes (CAAL) database, contributing 25.817 monuments (5.073 dated horizons and 17.381 typed monuments);
- The Pleiades Gazetteer of Ancient Geography (1.613 classical sites across Bactria, Sogdiana, Chorasmia and Parthia);
- The Al-Thurayya Islamic Gazetteer (827 mediaeval urban and route stations);
- The Zenodo Tegiszhol Radiocarbon Database (81 Bronze and Iron Age dates);
- The C14Bazaar, p3k14c and NERD prehistoric radiocarbon archives (1.346 radiometric determinations);
- The Reich Laboratory Ancient Archaeogenetic Database (AADR v66, 885 ancient DNA specimen coordinates);
- The ArchAtlas Central Asia inventory (2.317 tell settlements, kurgans and irrigation systems);
- The Wikidata Heritage Registers (3.281 gazetteer coordinates across Central Asian monuments);
- OpenStreetMap archaeological and historical monument layers (1.143 verified spatial coordinates);
- POLARIS Institute of Archaeology Russian Academy of Sciences frontier buffer records (2.384 sites along the northern steppe transition);
- JADE Xinjiang frontier records (656 archaeological coordinates along the Tian Shan corridors);
- Scholarly regional archaeological catalogues (73 specialized site monographs).

<figure class="crd-figure-block" id="fig:kriging-diagnostics">
<img class="crd-figure-img" src="/artefacts/project_saray/1.0/fig3_saray_kriging_diagnostics.png" alt="fig:kriging-diagnostics" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Central Asia non-stationary Matérn (nu = 3/2) kriging diagnostics: 442 domestic catchments, semivariogram fit (tau1 = 1,6742, R2 = 0,999) and site intensity across nine archaeological horizons.</figcaption>
</figure>

The nine chronological horizons span the full developmental sequence of human occupation across Central Asia:

- Horizon 1 (Epipalaeolithic, Mesolithic and Early Neolithic, c. 10000BC to 6000BC): Forager camps, rock shelters, Kelteminar hunter-gatherers, early piedmont gathering (active cells 51.089, mean intensity 0,0062);
- Horizon 2 (Chalcolithic, Namazga I-III, Sarazm and Botai, c. 6000BC to 3000BC): Early mudbrick farming settlements along the Kopet Dag, proto-urban copper metallurgy at Sarazm in the Zarafshan valley, and early horse domestication at Botai in northern Kazakhstan (active cells 51.089, mean intensity 0,0032);
- Horizon 3 (Bronze Age, BMAC, Sintashta and Andronovo, c. 3000BC to 1000BC): Monumental walled centres of the Oxus Civilization (Gonur Depe, Togolok), fortified circular settlements of Sintashta, and pastoralist Andronovo kurgan complexes (active cells 51.089, mean intensity 0,0354);
- Horizon 4 (Iron Age, Saka, Achaemenid and Hellenistic, c. 1000BC to 250BC): Saka elite kurgans (Issyk, Tasmola, Chilikta), Achaemenid satrapy capitals (Marakanda, Balkh), and Greco-Bactrian city fortresses (active cells 51.089, mean intensity 0,0538);
- Horizon 5 (Kushan, Kangju, Wusun and Parthian Antiquity, c. 250BC to 500AD): Classical Kushan cities (Dalverzin Tepe, Termez, Kara Tepe), Kangju fortified oasis settlements along the Syr Darya, Wusun tumuli in Semirechye, and ancient Chorasmian defensive networks (active cells 51.089, mean intensity 0,0679);
- Horizon 6 (Sogdian, Turkic and Early Islamic, c. 500AD to 900AD): Sogdian aristocratic estates and merchant cities (Panjakent, Varakhsha, Paykend), Western Turkic Khaganate garrisons along the Chuy valley (Suyab, Navekat, Taraz), and early Islamic administrative nodes (active cells 51.117, mean intensity 0,0479);
- Horizon 7 (Samanid, Karakhanid, Seljuk and Khwarazmshah, c. 900AD to 1219AD): Golden Age Islamic capitals (Bukhara, Samarkand, Merv, Gurganj), Chuy valley trading cities, and monumental minaret and caravanserai complexes (active cells 51.117, mean intensity 0,0447);
- Horizon 8 (Mongol, Chagatai and Timurid, c. 1219AD to 1500AD): Post-conquest urban revivals, Chagatai ulus centres, and imperial Timurid capitals (Samarkand, Shahrisabz, Herat) characterized by grand public architecture (active cells 51.117, mean intensity 0,0845);
- Horizon 9 (Uzbek Khanates and Kazakh Zhuzes, c. 1500AD to 1865AD): Walled oasis capitals (Bukhara, Khiva, Kokand), winter pastoralist settlements (*kstau*) of the Kazakh Zhuzes, and steppe pilgrimage centres (Turkistan) (active cells 51.119, mean intensity 0,0236).

<figure class="crd-table-figure" id="tab:kriging-horizons">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Temporal Bounds</th><th class="crd-th">Active Cells</th><th class="crd-th">Mean</th><th class="crd-th">P50</th><th class="crd-th">P90</th><th class="crd-th">Max</th><th class="crd-th">Archaeological and Cultural Complexes</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>H1: Epipalaeolithic, Mesolithic and Early Neolithic</strong></td><td class="crd-td">10000BC-6000BC</td><td class="crd-td">51.089</td><td class="crd-td">0,0062</td><td class="crd-td">0,0052</td><td class="crd-td">0,0117</td><td class="crd-td">0,0529</td><td class="crd-td">Kelteminar forager sites, Hissar rock shelters, piedmont forager camps</td></tr>
<tr><td class="crd-td"><strong>H2: Chalcolithic, Namazga, Sarazm and Botai</strong></td><td class="crd-td">6000BC-3000BC</td><td class="crd-td">51.089</td><td class="crd-td">0,0032</td><td class="crd-td">0,0022</td><td class="crd-td">0,0064</td><td class="crd-td">0,0444</td><td class="crd-td">Namazga I-III oases, Sarazm proto-urban metal centre, Botai horse corrals</td></tr>
<tr><td class="crd-td"><strong>H3: Bronze Age, BMAC, Sintashta and Andronovo</strong></td><td class="crd-td">3000BC-1000BC</td><td class="crd-td">51.089</td><td class="crd-td">0,0354</td><td class="crd-td">0,028</td><td class="crd-td">0,066</td><td class="crd-td">0,515</td><td class="crd-td">BMAC Gonur Depe, Togolok, Sintashta circular forts, Andronovo kurgans</td></tr>
<tr><td class="crd-td"><strong>H4: Iron Age, Saka, Achaemenid and Hellenistic</strong></td><td class="crd-td">1000BC-250BC</td><td class="crd-td">51.089</td><td class="crd-td">0,0538</td><td class="crd-td">0,0429</td><td class="crd-td">0,0979</td><td class="crd-td">0,9041</td><td class="crd-td">Saka royal kurgans (Issyk, Tasmola, Chilikta), Marakanda, Ai-Khanoum</td></tr>
<tr><td class="crd-td"><strong>H5: Kushan, Kangju, Wusun and Parthian Antiquity</strong></td><td class="crd-td">250BC-500AD</td><td class="crd-td">51.089</td><td class="crd-td">0,0679</td><td class="crd-td">0,0475</td><td class="crd-td">0,1378</td><td class="crd-td">1,5031</td><td class="crd-td">Dalverzin Tepe, Termez, Kangju Syr Darya towns, Akchakhan-kala, Nisa</td></tr>
<tr><td class="crd-td"><strong>H6: Sogdian, Turkic and Early Islamic</strong></td><td class="crd-td">500AD-900AD</td><td class="crd-td">51.117</td><td class="crd-td">0,0479</td><td class="crd-td">0,0321</td><td class="crd-td">0,1004</td><td class="crd-td">0,7592</td><td class="crd-td">Panjakent, Varakhsha murals, Chuy valley forts (Suyab, Navekat, Taraz)</td></tr>
<tr><td class="crd-td"><strong>H7: Samanid, Karakhanid, Seljuk and Khwarazmshah</strong></td><td class="crd-td">900AD-1219AD</td><td class="crd-td">51.117</td><td class="crd-td">0,0447</td><td class="crd-td">0,0272</td><td class="crd-td">0,0982</td><td class="crd-td">0,7724</td><td class="crd-td">Bukhara, Samarkand, Seljuk Merv, Balasagun minarets, Kunya-Urgench</td></tr>
<tr><td class="crd-td"><strong>H8: Mongol, Chagatai and Timurid</strong></td><td class="crd-td">1219AD-1500AD</td><td class="crd-td">51.117</td><td class="crd-td">0,0845</td><td class="crd-td">0,0524</td><td class="crd-td">0,1838</td><td class="crd-td">1,3748</td><td class="crd-td">Chagatai ulus nodes, Timurid Samarkand, Shahrisabz, Herat, caravanserais</td></tr>
<tr><td class="crd-td"><strong>H9: Uzbek Khanates and Kazakh Zhuzes</strong></td><td class="crd-td">1500AD-1865AD</td><td class="crd-td">51.119</td><td class="crd-td">0,0236</td><td class="crd-td">0,0161</td><td class="crd-td">0,0456</td><td class="crd-td">0,338</td><td class="crd-td">Ichan Kala (Khiva), Bukhara madrasas, Kokand palace, Turkistan (Yasi)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Nine chronological kriging horizons across Central Asia documenting active cells, intensity statistics and representative archaeological complexes.</figcaption>
</figure>

To eliminate arbitrary modern political boundary distortions, the spatial domain is partitioned using HydroBASINS Level 6 watershed units, comprising 442 domestic catchments and 281 frontier buffer catchments. Across the domestic domain, 396 catchments contain verified archaeological loci, yielding an administrative coverage ratio of 0,8959. The median Voronoi catchment radius is 42,43 km, with a 90th percentile of 69,31 km, reflecting the broad geographical spacing of Central Asian river systems.

Geostatistical interpolation relies on a two-dimensional Paciorek and Schervish non-stationary Matérn covariance kernel with fixed smoothness $\nu = 3/2$ [@Paciorek2006Matern]. The spatial covariance between two locations $s_i$ and $s_j$ is given by:
$$C(s_i, s_j) = \sigma^2 |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \left(1 + \frac{\sqrt{3} Q_{ij}}{\tau}\right) \exp\left(-\frac{\sqrt{3} Q_{ij}}{\tau}\right)$$
where $Q_{ij} = \sqrt{(s_i - s_j)^T \left(\frac{\Sigma_i + \Sigma_j}{2}\right)^{-1} (s_i - s_j)}$, and $\Sigma_i$ represents the locally adaptive spatial metric tensor aligned to river valley orientation, piedmont alluvial fans and terrain slope.

Residual kriging operates on top of five weighted least squares biophysical covariates: baseline habitation suitability ($\beta_0$), terrain slope suitability ($\beta_1$), ecozone agricultural productivity ($\beta_2$), distance decay from primary river channels ($\beta_3$, 12,5 km characteristic decay scale), and distance decay from regional lakes and endorheic inland seas ($\beta_4$, 25 km decay scale). Weighted least squares fitting across all nine horizons yields variogram parameters with regularised $\tau_1 = 1,6742$ and a residual determination coefficient of $R^2 = 0,999$.

## Oasis Cadastres and Modern Statistical Continuities

For historical periods following classical antiquity, SARAY synthesises empirical tax rolls, court chronicles and cadastral surveys by drawing on authoritative Central Asian demographic scholarship [@Morrison2024Russian; @Karassayev2025History; @Razdykov2019Appearance; @Zhanymkhan2025Ethnodemog; @Lovett2022Fate].

Pre-modern enumerations in Central Asia were fiscal and military assessments designed to levy land taxes (*kharaj*), religious tithes (*ushr*), poll taxes on non-Muslim subjects (*jizya*), nomadic livestock tributes (*zakat*), and corvée labour obligations for canal dredging rather than statistical headcounts. In the sedentary oasis emirates of Bukhara, Khiva and Kokand, taxation was assessed by plow-land units (*tanap* or *plug*), irrigation canal shares, or registered hearths (*tütün*). Official fiscal returns routinely omitted Islamic clergy, sayyids, madrasa students, military retainers, domestic servile classes, and destitute rural labourers, requiring systematic upward adjustments of ten to fifteen per cent to recover total de facto inhabitants.

Across the nomadic steppe, the Kazakh Khanate and its constituent Zhuzes operated under customary pastoralist territorial tenure (*adat*). Seasonal migration between summer pastures (*zhailau*) and sheltered winter quarters (*kstau*) was organized through extended patrilineal clans (*ru*). Demographic numbers were preserved through oral lineage genealogies (*shezhire*), military levy tallies (*tuman* and *alash*), and tsarist frontier intelligence reports [@Razdykov2019Appearance; @Karassayev2025History]. Russian frontier administrators recorded kibitka hearth counts, multiplying registered tents by average pastoralist family sizes of five to six individuals.

From 1865 onward, SARAY links these dynastic and steppe baselines to modern scientific censuses. The Russian conquest established direct colonial statistical surveys across Syr Darya, Ferghana, Samarkand, Semirechye and Transcaspian Oblasts, culminating in the first scientific census of 28 January 1897 conducted by the Central Statistical Committee of the Russian Empire [@Morrison2024Russian; @Bekmurodova2026Issue]. In the early Soviet period, the 1920 and 1926 All-Union Censuses recorded baseline population prior to the catastrophic collectivisation famine of 1931-1933, which killed over 1,5M Kazakhs and caused hundreds of thousands of refugees to flee across international frontiers [@Zhanymkhan2025Ethnodemog; @Kaipbayeva2025Famine]. Following post-war recovery, unbroken decennial censuses in 1959, 1970, 1979 and 1989 document rapid indigenous demographic expansion across all five Soviet republics [@Anon2026Demographi; @Lysenko2025Regional; @Lovett2022Fate]. Since 1991, modern statistical agencies—including the Bureau of National Statistics of Kazakhstan, the Statistics Agency of Uzbekistan, the National Statistical Committee of the Kyrgyz Republic, the Agency on Statistics of Tajikistan, and the State Committee of Turkmenistan on Statistics—provide national census and vital registration series carried through 2025 [@Anon2026Interethni; @Mukhamejan2026Long; @Makhanov2025Post].

## Urban Agglomeration and Settlement Gazetteers

Urban settlements across Project SARAY are catalogued in discrete gazetteer archives encompassing 13.703 distinct settlement records across all nine chapters. Each settlement carries permanent composite identifiers, WGS84 geographic coordinates, native script toponyms (Latin, Cyrillic and Arabic scripts), foundation horizons, administrative ranks, and historical population trajectories.

To prevent urban populations from being double-counted within rural agricultural pixels, SARAY implements an urban disaggregation algorithm:
1. Urban settlement coordinates are buffered according to their historical rank and physical extent (2 km to 15 km buffer radius) and projected onto the 5-arcminute raster grid;
2. Settlement populations at each benchmark year are assigned directly to the corresponding urban grid cells;
3. Urban pixel totals are subtracted from their respective sub-regional population targets, yielding residual rural population totals;
4. Residual rural populations are disaggregated across non-urban pixels using the normalised non-stationary Matérn kriging suitability weights;
5. A multi-pass separable Gaussian filter smoothing kernel eliminates seam discontinuities across administrative borders while preserving sub-regional totals.

Annual live continuity outside verified border splice years (1924, 1925, 1936 and 1991AD) is enforced through constrained monotonic cubic Hermite splines, maintaining year-on-year aggregate turnover below 2% and preventing artificial statistical jumps during intercensal intervals.

# Testing and Validation

Project SARAY enforces five orthogonal validation checks across all nine constituent chapters:

1. **Areal Mask Integrity**: All nine modular masks contain zero empty sub-regions, zero synthetic bounding-box cuts, and complete territorial containment across 161 analytical units covering 3.890.946 km². Explicit polygon boundaries follow hydrographic divides and historical administrative borders without raster clipping errors.
2. **Kriging Sharpness and Continuity**: Across all nine Holocene horizons, variograms achieve regularised $\tau_1 = 1,6742$ and $R^2 = 0,999$, with an effective median Voronoi radius of 42,43 km. Visual inspection confirms sharp fluvial and oasis alignment along the Amu Darya, Syr Darya, Zarafshan, Murghab, Chuy, Ili and Irtysh river systems, with zero isotropic Voronoi artefacts and complete suppression of uninhabitable dune fields in the Karakum and Kyzylkum deserts.
3. **Gazetteer Deduplication and Coverage**: All 13.703 catalogued settlements pass coordinate bounds checks, parent sub-region containment, and pairwise proximity audits (zero same-jurisdiction active settlement pairs within 1,5 km after 1865AD).
4. **Toponymic Disambiguation and Anti-Collision Protection**: Historical toponymic shifts are systematically resolved across multilingual scripts. The model distinguishes historical capitals from modern administrative cities, isolating ancient Marakanda and Afrosiyob from modern Samarkand, separating ancient Chach and Binkath from modern Tashkent, distinguishing Gurganj from modern Kunya-Urgench, separating ancient Nisa from modern Ashgabat, isolating Pishpek and Frunze from modern Bishkek, and separating Verny from modern Almaty.
5. **Continuity and Visual Inspection**: Annual live continuity checks confirm that year-on-year population changes remain within demographic viability bounds outside catastrophic famine intervals. All diagnostic figures pass optical inspection for zero label occlusion, proper aspect ratio and publication-grade cartographic clarity.

<figure class="crd-table-figure" id="tab:all-9-modules">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Regional Module</th><th class="crd-th">Temporal Span</th><th class="crd-th">Sub-regions</th><th class="crd-th">Settlements</th><th class="crd-th">Start Pop.</th><th class="crd-th">End Pop.</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Prehistoric Central Asian Steppe and Oases</strong></td><td class="crd-td">10000BC-1000BC</td><td class="crd-td">8</td><td class="crd-td">80</td><td class="crd-td">40k</td><td class="crd-td">1,45M</td><td class="crd-td">1,45M (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Scythian, Saka and Classical Oasis States</strong></td><td class="crd-td">1000BC-500AD</td><td class="crd-td">9</td><td class="crd-td">917</td><td class="crd-td">1,45M</td><td class="crd-td">3,55M</td><td class="crd-td">3,75M (200AD)</td></tr>
<tr><td class="crd-td"><strong>Turkic Migrations and Islamisation of Turan</strong></td><td class="crd-td">500AD-1219AD</td><td class="crd-td">9</td><td class="crd-td">1.029</td><td class="crd-td">3,55M</td><td class="crd-td">6,95M</td><td class="crd-td">6,95M (1219AD)</td></tr>
<tr><td class="crd-td"><strong>Mongol Conquest and Timurid Central Asia</strong></td><td class="crd-td">1219AD-1500AD</td><td class="crd-td">8</td><td class="crd-td">1.750</td><td class="crd-td">6,95M</td><td class="crd-td">5,4M</td><td class="crd-td">6,95M (1219AD)</td></tr>
<tr><td class="crd-td"><strong>Uzbek Khanates and Kazakh Hordes</strong></td><td class="crd-td">1500AD-1865AD</td><td class="crd-td">8</td><td class="crd-td">192</td><td class="crd-td">5,4M</td><td class="crd-td">9,15M</td><td class="crd-td">9,15M (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Russian Conquest, Imperial Turkestan and the Steppe</strong></td><td class="crd-td">1865AD-1917AD</td><td class="crd-td">11</td><td class="crd-td">1.238</td><td class="crd-td">9,15M</td><td class="crd-td">13,95M</td><td class="crd-td">14,35M (1916AD)</td></tr>
<tr><td class="crd-td"><strong>Russian Civil War, Basmachi and Early Soviet Transformation</strong></td><td class="crd-td">1917AD-1945AD</td><td class="crd-td">10</td><td class="crd-td">1.303</td><td class="crd-td">13,95M</td><td class="crd-td">16,95M</td><td class="crd-td">16,95M (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Post-War Soviet Central Asian Republics</strong></td><td class="crd-td">1945AD-1991AD</td><td class="crd-td">48</td><td class="crd-td">3.605</td><td class="crd-td">16,95M</td><td class="crd-td">50,95M</td><td class="crd-td">50,95M (1991AD)</td></tr>
<tr><td class="crd-td"><strong>Post-Soviet Central Asia</strong></td><td class="crd-td">1991AD-2026AD</td><td class="crd-td">48</td><td class="crd-td">3.589</td><td class="crd-td">50,95M</td><td class="crd-td">82,67M</td><td class="crd-td">82,67M (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> All nine Project SARAY regional modules showing chronological bounds, sub-region counts, settlement counts, start and end populations, and peak populations.</figcaption>
</figure>

# Results

## Prehistoric Demography and Forager-Pastoralist Transitions

The demographic history of Central Asia between 10000BC and 1000BC illustrates how post-glacial climatic amelioration shaped distinct hunter-gatherer adaptations, early food-producing oases, and mobile pastoralist economies across the steppe and desert biomes (Figure \ref{fig:trajectory}) [@Gill2025Ancient; @Zhou2026Silkworm; @MirMakhamad2026Seeds; @Miller2026Cultivatin].

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_saray/1.0/fig2_saray_long_run_trajectories.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Long-run population trajectories across Central Asia (10000BC to 2025AD) on logarithmic and linear scales, illustrating the 1219AD Mongol shock, 1933AD famine and modern republic growth.</figcaption>
</figure>

At the close of the Last Glacial Maximum (10000BC), small mobile bands of Upper Palaeolithic and Mesolithic foragers occupied the foothills of the Pamir, Tian Shan and Kopet Dag mountains and the shores of pluvial lakes, supporting an aggregate domain population of approximately 40k [@Gill2025Ancient]. During the Holocene Climatic Optimum (6000BC to 3000BC), rising temperatures and increased precipitation expanded riverine gallery forests and wetland habitats. In the southern piedmonts, the Jeitun and Namazga cultures established the earliest mudbrick farming villages reliant on emmer wheat, two-row barley and domestic sheep and goats, while contemporary Kelteminar hunter-fishers flourished along the ancient delta channels of the Amu Darya (Akcha Darya) and Zeravshan [@Zhou2026Silkworm; @MirMakhamad2026Seeds]. At the proto-urban settlement of Sarazm in the Zarafshan valley, intensive irrigation agriculture and metallurgical exploitation of local tin and copper deposits sustained over three thousand inhabitants by 3500BC.

Concurrently across the northern steppe, the Botai culture (c. 3700BC to 3100BC) in northern Kazakhstan established large semi-subterranean pit-house settlements (such as Botai and Krasny Yar) centered on the earliest documented horse husbandry, exploiting horses for meat, traction and mare's milk [@Gill2025Ancient]. During the Bronze Age (c. 3000BC to 1000BC), two major cultural spheres transformed the demography of Central Asia. In the south, the Bactria-Margiana Archaeological Complex (BMAC or Oxus Civilization) constructed monumental walled proto-urban centres with palaces, temples and extensive irrigation networks along the Murghab and northern Afghan deltas (Gonur Depe, Togolok, Dashly), supporting nucleated populations exceeding five to ten thousand people per oasis [@Miller2026Cultivatin; @Grigoriev2025Indo]. In the north, the Sintashta and Andronovo horizons introduced spoke-wheeled chariots, bronze metallurgy, and agro-pastoralist settlements across the steppe, facilitating population expansion. By 1000BC, total population across the SARAY domain expanded to 1,45M.

## Ancient State Formation, Steppe Confederations and Oasis Empires

Between 1000BC and 500AD, the diffusion of iron technology, qanat and surface canal irrigation, and continental imperial statecraft transformed Central Asia into a vital commercial and political nexus connecting China, India, Iran and the Mediterranean [@Armaroli2026Tracing; @MirMakhamad2024Agricultur; @Morris2021Economic; @Morris2023Economic].

Across the northern and central steppe, Saka and Massagetae nomadic confederations mobilized vast mounted armies, constructing monumental royal kurgans with rich gold regalia (such as the Golden Warrior of Issyk, and the royal burials of Tasmola and Chilikta) [@Armaroli2026Tracing; @Zhao2026Tracing]. In the southern oasis basins, Cyrus the Great and Darius I incorporated Bactria, Sogdiana, Chorasmia and Margiana into the Achaemenid Empire in the sixth century BC, recording substantial tribute levies and administrative satrapies. Alexander the Great's campaigns (329-327BC) and the subsequent Seleucid and Greco-Bactrian Kingdoms introduced Greek civic planning, stone fortifications, and coin-based market economies, exemplified by the Hellenistic city of Ai-Khanoum on the Oxus River [@Sanahuja2020Historiogr; @Francfort2020Quelques].

From the second century BC, the migration of the Yuezhi confederation across the Syr Darya led to the foundation of the Kushan Empire (c. 30AD to 375AD). Under rulers such as Kanishka I, the Kushan realm linked Central Asian oasis trade with northern India, patronising Buddhism, expanding irrigation agriculture in northern Bactria (Termez, Dalverzin Tepe), and fostering Silk Road commerce [@Morris2021Economic; @Morris2023Economic]. Concurrently, the Kangju kingdom along the middle Syr Darya and the Wusun confederation in Semirechye developed extensive fortified agricultural settlements and pastoral ranges. In Chorasmia, massive mudbrick fortresses (such as Toprak-kala and Akchakhan-kala) guarded extensive canal networks fed by the lower Amu Darya [@BETTS2016Akchakhan]. Under these stable conditions, domain population expanded from 1,45M in 1000BC to 2,4M in 500BC, 3,6M at 1AD, and attained a classical peak of 3,75M around 200AD, before Hephthalite wars and late antique disruptions lowered numbers to 3,55M by 500AD.

## Mediaeval Turan, Agrarian Zenith and the Mongol Shock

The mediaeval era (500AD to 1500AD) encompassed the Turkic migrations, the Islamic conquest of Transoxiana (*Mawara al-Nahr*), a flourishing scientific and commercial zenith, and the catastrophic devastation of the Mongol conquest [@Ilxomovna2026Reconstruc; @Sharipbayeva2026Geopolitic; @kyzy2025Religious; @Amlashi2025Consequenc].

During the sixth and seventh centuries, the First and Western Turkic Khaganates established nomadic imperial dominance over Central Asia, establishing administrative seats in the Chuy valley (Suyab, Navekat) while partnering with Sogdian merchant-diplomats who directed trans-Eurasian trade networks extending to Chang'an and Byzantium [@Knar2024Turkic; @Pardaev2019Design]. The Arab Muslim conquests initiated by Qutayba ibn Muslim in the early eighth century culminated in the decisive 751AD Battle of Talas, cementing Islamic cultural and religious hegemony over Transoxiana.

Under the Samanid Dynasty (819AD to 999AD), Central Asia experienced an intellectual and economic Golden Age. Bukhara became a renowned imperial capital of over 100k inhabitants, rivalled by Samarkand, while scholars such as Ibn Sina (Avicenna) and al-Khwarizmi flourished [@Ilxomovna2026Reconstruc; @Gunduz2026Journey]. The subsequent Karakhanid Khaganate and Seljuk Empire expanded urban madrasas, caravanserais and brick architecture (exemplified by the Kalyan Minaret in Bukhara and the Burana Tower in the Chuy valley), with Merv expanding into one of the largest metropolises in the Islamic world (exceeding 200k people). Under the Khwarazmshah Empire in the early thirteenth century, intensive oasis irrigation and thriving urban networks carried domain population to a historic mediaeval peak of 6,95M in 1219AD.

This prosperity was shattered between 1219AD and 1221AD by the catastrophic Mongol invasion led by Genghis Khan. Mongol siege operations systematically breached and levelled the great urban centres of Otrar, Samarkand, Bukhara, Gurganj (Kunya-Urgench), Merv, Balkh and Nishapur [@Sharipbayeva2026Geopolitic; @Stephen2012Deep]. Millions of urban inhabitants were slaughtered, conscripted or displaced, and critical irrigation canals, qanats and headworks were destroyed or silted up. The regional population collapsed by forty-four per cent to a trough of 3,9M in 1260AD.

Slow demographic recovery under the Chagatai Ulus and the Golden Horde accelerated during the late fourteenth century under Timur (Tamerlane, reigned 1370-1405AD). Timur established Samarkand as imperial capital, forcibly transporting tens of thousands of skilled artisans, architects and scholars from conquered territories to construct monumental mosques, madrasas and mausoleums (such as the Bibi-Khanym Mosque and the Gur-e-Amir) [@Amlashi2025Consequenc; @Balabanlilar2007Lords; @Zali2022Necessity]. Under Timur's grandson Ulugh Beg, Samarkand flourished as a centre of astronomy and mathematics, while Herat served as a brilliant cultural capital under the later Timurids. By 1500AD, domain population recovered to 5,4M.

## Early Modern Khanates, Kazakh Zhuzes and Pastoralist Resilience

Between 1500AD and 1865AD, Central Asia divided into distinct sedentary and nomadic political entities: the Uzbek Khanates of Transoxiana and the Kazakh Khanate across the northern steppe [@Wang2026Russian; @Toraigyrov2026Topical; @Anarbaeva2025Socio; @Karassayev2025History; @Razdykov2019Appearance].

In Transoxiana, Muhammad Shaybani Khan led nomadic Uzbek tribes southwards from the Desht-i Qipchaq, displacing the Timurids and founding the Shaybanid dynasty in 1500AD. Over subsequent centuries, sedentary Central Asia organized into three independent monarchies: the Khanate (later Emirate) of Bukhara, the Khanate of Khiva (Chorasmia), and the Khanate of Kokand in the fertile Ferghana valley [@Wang2026Russian; @Anarbaeva2025Socio]. These states maintained extensive irrigated agriculture dependent on snow-fed river networks, supported renowned Islamic scholarly institutions, and engaged in active overland caravan trade with Russia, Persia, Mughal India and Qing China.

Concurrently across the Eurasian steppe, Janibek and Kerei founded the Kazakh Khanate in the late fifteenth century, establishing an enduring pastoralist state organized into three confederations: the Senior Zhuz (*Uly Zhuz*) in Semirechye and southern Kazakhstan, the Middle Zhuz (*Orta Zhuz*) across central, northern and eastern steppes, and the Junior Zhuz (*Kishi Zhuz*) in the western Caspian-Aral basin [@Karassayev2025History; @Razdykov2019Appearance]. During the early eighteenth century, the devastating invasions of the Oirat Dzungar Khanate culminated in the catastrophic 1723-1730AD retreat known as the *Aqtaban Shubyryndy* (Barefooted Flight), causing severe famine mortality, livestock destruction and territorial displacement that lowered population to 6,8M in 1730.

Following the defeat of the Dzungars by the Qing Empire in the 1750s and the charismatic leadership of Ablai Khan, Kazakh pastoralists reoccupied seasonal grazing lands. Agricultural expansion in the Ferghana valley under the Kokand Khanate and canal reclamation in Khiva lifted domain numbers to 8M in 1800AD and 9,15M by 1865AD.

## Imperial Russian Expansion and Early Statistical Surveys

The Russian conquest of Central Asia between 1865AD and 1885AD integrated the region into the imperial economic and administrative apparatus [@Bekmurodova2026Issue; @Morrison2024Russian; @Rakhmatillaev2023Ethnic; @Chokobaeva2017Frontiers; @Battis2016Aleksandr].

Under Generals Chernyaev, Romanovsky and Kaufmann, Russian imperial forces captured Tashkent in 1865, Samarkand in 1868, and Kokand in 1876, establishing the Governor-Generalship of Turkestan and reducing the Emirate of Bukhara and the Khanate of Khiva to tsarist protectorates [@Morrison2024Russian]. Across the northern steppe, the Steppe Governor-Generalship administered Akmolinsk, Semipalatinsk, Turgay and Uralsk Oblasts.

Russian rule stimulated cotton monoculture through railway construction, notably the Trans-Caspian Railway (linking Krasnovodsk to Samarkand and Tashkent by 1899) and the Orenburg-Tashkent Railway completed in 1906. Concurrently, imperial resettlement policies directed hundreds of thousands of Slavic peasant colonists into northern Kazakhstan and Semirechye, expropriating seasonal Kazakh and Kyrgyz pastoralist grazing lands and sparking deep demographic and ecological friction [@Chokobaeva2017Frontiers; @Hallez2025Introducin].

The 28 January 1897 All-Russian Imperial Census provided the first comprehensive, scientific enumeration of Central Asian population, recording 11,19M inhabitants across the region (Turkestan Governor-Generalship 5,28M, Steppe Krai 3,44M, and protectorates Bukhara and Khiva 2,47M) [@Morrison2024Russian; @Bekmurodova2026Issue]. Continued natural increase and immigration carried population to 14,2M by 1915AD, before the introduction of imperial military labour conscription sparked the widespread Central Asian revolt of 1916, which resulted in violent clashes, flight across the border into Xinjiang, and significant excess mortality [@Morrison2024Russian; @Chokobaeva2017Frontiers].

## Soviet Transformation, Famine Crises and Demographic Growth

The twentieth century brought sweeping ideological, territorial and demographic transformations across Central Asia [@TEGIN2026Soviet; @Khudayarov2026Formation; @Omarova2026Formation; @Zhanymkhan2025Ethnodemog; @Anon2026Demographi; @Lovett2022Fate].

Following the 1917 Bolshevik Revolution, the Russian Civil War and the 1919-1921 Turkestan famine caused severe casualties and economic collapse. The Basmachi resistance movement continued guerrilla warfare against Soviet forces across the Ferghana valley, eastern Bukhara and the Karakum desert through the late 1920s [@TEGIN2026Soviet]. In 1924, the Soviet government implemented the national-territorial delimitation of Central Asia, dissolving the Turkestan Autonomous Soviet Socialist Republic, the Bukharan People's Soviet Republic and the Khorezm People's Soviet Republic to create modern national union republics: the Uzbek SSR, Turkmen SSR, Tajik SSR (union republic in 1929), Kazakh SSR (union republic in 1936), and Kirghiz SSR (union republic in 1936) [@Khudayarov2026Formation; @Anon2026Yilgi].

Between 1928 and 1933, forced collectivisation of agriculture and coercive sedentarisation of nomadic pastoralists under Filipp Goloshchyokin provoked the catastrophic Kazakh famine of 1931-1933 (*Asharshylyk*) [@Zhanymkhan2025Ethnodemog; @Kaipbayeva2025Famine]. Over 1,5M Kazakhs died from starvation and epidemic typhus, representing over one third of the entire ethnic Kazakh population, while more than 600k fled into neighbouring Soviet republics, China, Afghanistan and Iran. Over eighty per cent of all livestock herds were liquidated. Domain population dropped from 13,95M in 1926 to a trough of 12,85M in 1933 before recovery resumed.

During the late 1930s and the Great Patriotic War (1941-1945), Central Asia served as a primary destination for deported nationalities (including over 170k Soviet Koreans from the Russian Far East in 1937, hundreds of thousands of Volga Germans, Crimean Tatars, Chechens and Ingush) and evacuated industrial enterprises [@Siegelbaum2026Migration; @Serceoglu2026Reflection]. Total population reached 16,95M by 1945.

In the post-war era, Nikita Khrushchev launched the Virgin Lands campaign (*Tselina*, 1954-1960), ploughing up millions of hectares of steppe in northern Kazakhstan and attracting hundreds of thousands of Slavic settlers, making ethnic Kazakhs a numerical minority within their own republic until the late 1980s [@Anon2026Demographi; @Lysenko2025Regional]. In the southern republics, massive expansion of irrigated cotton agriculture—facilitated by massive civil engineering works like the 1.300 km Karakum Canal—supported rapid rural natural increase. Indigenous Central Asian fertility rates remained among the highest in the USSR, exceeding five to six children per woman through the 1970s [@Lovett2022Fate; @Didovets2026Towards]. Total domain population expanded from 16,95M in 1945 to 23,01M in 1959, 32,8M in 1970, 39,94M in 1979, and 50,94M at the final all-Union census of 1989-1991.

## Post-Soviet Realignment, Urbanisation and Megalopolitan Hierarchies

The dissolution of the Soviet Union in December 1991 inaugurated the contemporary era of independent statehood for Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan and Tajikistan (Figure \ref{fig:urban-hierarchy}) [@Anon2026Interethni; @Mukhamejan2026Long; @Miazin2025Developmen; @Sheriyazdanov2025Main; @Makhanov2025Post; @Golunov2025Central].

<figure class="crd-figure-block" id="fig:urban-hierarchy">
<img class="crd-figure-img" src="/artefacts/project_saray/1.0/fig4_saray_urban_hierarchy.png" alt="fig:urban-hierarchy" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Contemporary Central Asian urban rank-size distribution and leading cities led by Tashkent, Almaty, Astana, Bishkek, Shymkent, Dushanbe and Ashgabat.</figcaption>
</figure>

The post-Soviet transition produced divergent demographic trajectories:

In Kazakhstan, the 1990s witnessed the mass emigration of over two million ethnic Russians, Ukrainians and Volga Germans, causing total population to contract from 16,5M in 1991 to 14,9M in 2001 [@Nikolaeva2024Changes; @Anon2026Interethni]. Following oil and mineral economic expansion, state-sponsored repatriation of ethnic Kazakhs from abroad (*qandastar*), and rising indigenous birth rates, population rebounded rapidly to 20,22M by 2025. In 1997, the national capital was relocated from Almaty to Akmola (renamed Astana), driving rapid urban expansion from 280k in 1997 to 1,64M in 2025, alongside Almaty (2,35M) and Shymkent (1,29M) [@Omarova2026Formation; @Makhanov2025Post].

In Uzbekistan, sustained natural increase propelled population from 20,7M in 1991 to 37,47M by 2025, cementing Uzbekistan as the most populous country in Central Asia [@Mukhamejan2026Long; @Rakhmatillaev2023Ethnic]. Tashkent solidified its position as the largest metropolis in Central Asia, expanding to 3,11M inhabitants, complemented by densely populated secondary urban centres across the Ferghana valley (Namangan 713k, Andijan 492k) and ancient Silk Road oases (Samarkand 596k).

In Tajikistan, the devastating 1992-1997 Civil War caused over fifty thousand deaths and displaced over one million citizens, but subsequent high fertility carried population from 5,36M in 1991 to 10,44M in 2025, with capital Dushanbe reaching 1,27M [@Yormirzoev2025Economy]. Large proportions of the adult male labour force engage in seasonal labour migration to the Russian Federation [@Somerlikova2025Causes].

In Kyrgyzstan, political transitions and labour migration accompanied population growth from 4,42M in 1991 to 7,15M in 2025, with Bishkek growing to 1,32M and ancient Osh reaching 474k [@Kokaisl2026Tsarist; @Sheriyazdanov2025Main]. In Turkmenistan, post-Soviet development centered on energy exports and state-directed construction in capital Ashgabat (reaching 1,07M), carrying national population to 7,4M in 2025. Combined Central Asian population reached 82,67M in 2025.

<figure class="crd-table-figure" id="tab:urban-hierarchy">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Agglomeration</th><th class="crd-th">Administrative Region</th><th class="crd-th">2020 Pop.</th><th class="crd-th">2025 Pop.</th><th class="crd-th">Historical Heritage and Function</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Tashkent</td><td class="crd-td">Tashkent City, Uzbekistan</td><td class="crd-td">1,98M</td><td class="crd-td">3,11M</td><td class="crd-td">Ancient Chach oasis crossroads; premier metropolis and capital of Uzbekistan</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Almaty</td><td class="crd-td">Almaty City, Kazakhstan</td><td class="crd-td">1,92M</td><td class="crd-td">2,35M</td><td class="crd-td">Historic Verny fortress on northern Tian Shan slopes; commercial capital of Kazakhstan</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Astana</td><td class="crd-td">Astana City, Kazakhstan</td><td class="crd-td">1,14M</td><td class="crd-td">1,64M</td><td class="crd-td">Historic Akmolinsk on Ishim River; designated national capital of Kazakhstan since 1997</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Bishkek</td><td class="crd-td">Bishkek City, Kyrgyzstan</td><td class="crd-td">1,04M</td><td class="crd-td">1,32M</td><td class="crd-td">Historic Pishpek fortress in Chuy valley; national capital and economic hub of Kyrgyzstan</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Shymkent</td><td class="crd-td">Shymkent City, Kazakhstan</td><td class="crd-td">1,04M</td><td class="crd-td">1,29M</td><td class="crd-td">Ancient Silk Road trading post on Badam River; major southern Kazakh commercial metropolis</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Dushanbe</td><td class="crd-td">Dushanbe City, Tajikistan</td><td class="crd-td">1,18M</td><td class="crd-td">1,27M</td><td class="crd-td">Historic Monday market settlement (Dushanbe); national capital and administrative centre of Tajikistan</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Ashgabat</td><td class="crd-td">Ashgabat City, Turkmenistan</td><td class="crd-td">1,03M</td><td class="crd-td">1,07M</td><td class="crd-td">Historic oasis settlement near ancient Nisa; national capital and administrative core of Turkmenistan</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Namangan</td><td class="crd-td">Namangan Region, Uzbekistan</td><td class="crd-td">626k</td><td class="crd-td">713k</td><td class="crd-td">Fertile northern Ferghana valley industrial, craft and agrarian trading hub</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Aktobe</td><td class="crd-td">Aktobe Region, Kazakhstan</td><td class="crd-td">501k</td><td class="crd-td">599k</td><td class="crd-td">Historic White Hill fortress on Ilek River; western Kazakh industrial and logistics node</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Samarkand</td><td class="crd-td">Samarkand Region, Uzbekistan</td><td class="crd-td">546k</td><td class="crd-td">596k</td><td class="crd-td">Ancient Marakanda and imperial capital of the Timurid Empire; Silk Road cultural metropolis</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Karaganda</td><td class="crd-td">Karaganda Region, Kazakhstan</td><td class="crd-td">497k</td><td class="crd-td">533k</td><td class="crd-td">Central Kazakh coal-mining basin and major heavy industrial agglomeration founded in 1934</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Andijan</td><td class="crd-td">Andijan Region, Uzbekistan</td><td class="crd-td">442k</td><td class="crd-td">492k</td><td class="crd-td">Ancient Silk Road city and birthplace of Babur; eastern Ferghana manufacturing centre</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Taraz</td><td class="crd-td">Zhambyl Region, Kazakhstan</td><td class="crd-td">358k</td><td class="crd-td">487k</td><td class="crd-td">Ancient Talas on Talas River, site of 751AD Battle of Talas; southern transport nexus</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Osh</td><td class="crd-td">Osh City, Kyrgyzstan</td><td class="crd-td">283k</td><td class="crd-td">474k</td><td class="crd-td">Three-thousand-year-old Silk Road oasis at foot of Sulaiman-Too; southern Kyrgyz hub</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Oskemen</td><td class="crd-td">East Kazakhstan Region, Kazakhstan</td><td class="crd-td">333k</td><td class="crd-td">361k</td><td class="crd-td">Historic Ust-Kamenogorsk fortress at Irtysh-Ulba confluence; non-ferrous metallurgy centre</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Top fifteen urban agglomerations in Project SARAY detailing administrative jurisdiction, 2020 and 2025 populations, and historical significance.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:macro-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Historical Epoch</th><th class="crd-th">Year</th><th class="crd-th">Sedentary Oases</th><th class="crd-th">Steppe Pastoral</th><th class="crd-th">Combined Total</th><th class="crd-th">Demographic Gravity Core</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Initial Holocene Hunter-Gatherer Baseline</strong></td><td class="crd-td">10000BC</td><td class="crd-td">25k</td><td class="crd-td">15k</td><td class="crd-td">40k</td><td class="crd-td">Foothill springs and riverine forager camps</td></tr>
<tr><td class="crd-td"><strong>Mid-Holocene Early Agrarian and Forager Climax</strong></td><td class="crd-td">4000BC</td><td class="crd-td">120k</td><td class="crd-td">60k</td><td class="crd-td">180k</td><td class="crd-td">Southern piedmont oases (Namazga, Sarazm) and Botai steppe</td></tr>
<tr><td class="crd-td"><strong>Bronze Age Oasis Urbanism and Steppe Pastoralism</strong></td><td class="crd-td">2000BC</td><td class="crd-td">480k</td><td class="crd-td">240k</td><td class="crd-td">720k</td><td class="crd-td">Bactria-Margiana delta complexes and Sintashta-Andronovo steppe</td></tr>
<tr><td class="crd-td"><strong>Late Bronze to Early Iron Transition</strong></td><td class="crd-td">1000BC</td><td class="crd-td">980k</td><td class="crd-td">470k</td><td class="crd-td">1,45M</td><td class="crd-td">Bactria, Margiana, Sogdiana and early Saka pastoral river valleys</td></tr>
<tr><td class="crd-td"><strong>Scythian, Saka and Achaemenid Satrapies</strong></td><td class="crd-td">500BC</td><td class="crd-td">1,65M</td><td class="crd-td">750k</td><td class="crd-td">2,4M</td><td class="crd-td">Achaemenid satrapy oases and Saka royal kurgan concentrations</td></tr>
<tr><td class="crd-td"><strong>Classical Kushan, Kangju and Hellenistic Peak</strong></td><td class="crd-td">200AD</td><td class="crd-td">2,6M</td><td class="crd-td">1,15M</td><td class="crd-td">3,75M</td><td class="crd-td">Kushan northern Bactria, Sogdian Zarafshan, Kangju Syr Darya</td></tr>
<tr><td class="crd-td"><strong>Late Antique Oasis Reorganisation</strong></td><td class="crd-td">500AD</td><td class="crd-td">2,45M</td><td class="crd-td">1,1M</td><td class="crd-td">3,55M</td><td class="crd-td">Zarafshan oasis, Chuy valley, ancient Chorasmian delta canals</td></tr>
<tr><td class="crd-td"><strong>Western Turkic Khaganate and Early Islamic Climax</strong></td><td class="crd-td">800AD</td><td class="crd-td">3,4M</td><td class="crd-td">1,4M</td><td class="crd-td">4,8M</td><td class="crd-td">Sogdian city-states, Chuy trading towns, early Islamic centres</td></tr>
<tr><td class="crd-td"><strong>High Samanid, Karakhanid and Khwarazmian Zenith</strong></td><td class="crd-td">1219AD</td><td class="crd-td">5,15M</td><td class="crd-td">1,8M</td><td class="crd-td">6,95M</td><td class="crd-td">High mediaeval oases of Bukhara, Samarkand, Merv, Gurganj</td></tr>
<tr><td class="crd-td"><strong>Mongol Invasion Mortality Trough</strong></td><td class="crd-td">1260AD</td><td class="crd-td">2,8M</td><td class="crd-td">1,1M</td><td class="crd-td">3,9M</td><td class="crd-td">Surviving rural refuges following catastrophic Mongol urban siege sack</td></tr>
<tr><td class="crd-td"><strong>Timurid Renaissance and Oasis Recovery</strong></td><td class="crd-td">1450AD</td><td class="crd-td">3,85M</td><td class="crd-td">1,35M</td><td class="crd-td">5,2M</td><td class="crd-td">Timurid Samarkand, Shahrisabz, Herat, Zarafshan irrigation revival</td></tr>
<tr><td class="crd-td"><strong>Early Uzbek Khanates and Kazakh Zhuzes Emergence</strong></td><td class="crd-td">1500AD</td><td class="crd-td">3,95M</td><td class="crd-td">1,45M</td><td class="crd-td">5,4M</td><td class="crd-td">Shaybanid Transoxiana oases and Kazakh Zhuz seasonal pastures</td></tr>
<tr><td class="crd-td"><strong>Eighteenth-Century Dzungar Wars Trough</strong></td><td class="crd-td">1730AD</td><td class="crd-td">5,1M</td><td class="crd-td">1,7M</td><td class="crd-td">6,8M</td><td class="crd-td">Ferghana valley refuges and surviving Kazakh pastoralist winter quarters</td></tr>
<tr><td class="crd-td"><strong>Eve of Russian Imperial Conquest</strong></td><td class="crd-td">1865AD</td><td class="crd-td">6,65M</td><td class="crd-td">2,5M</td><td class="crd-td">9,15M</td><td class="crd-td">Bukhara, Kokand, Khiva oasis networks and recovered Kazakh steppe</td></tr>
<tr><td class="crd-td"><strong>First All-Russian Imperial Census Benchmark</strong></td><td class="crd-td">1897AD</td><td class="crd-td">7,75M</td><td class="crd-td">3,44M</td><td class="crd-td">11,19M</td><td class="crd-td">Turkestan Governor-Generalship oases and Steppe Krai peasant districts</td></tr>
<tr><td class="crd-td"><strong>Late Imperial Zenith on Eve of 1916 Uprising</strong></td><td class="crd-td">1915AD</td><td class="crd-td">9,8M</td><td class="crd-td">4,4M</td><td class="crd-td">14,2M</td><td class="crd-td">Tashkent commercial axis, Ferghana cotton belt, Irtysh settlements</td></tr>
<tr><td class="crd-td"><strong>Post-Civil War and Basmachi Pacification</strong></td><td class="crd-td">1926AD</td><td class="crd-td">9,6M</td><td class="crd-td">4,2M</td><td class="crd-td">13,8M</td><td class="crd-td">Post-civil war reclaimed oasis canals and Kazakh nomadic winter camps</td></tr>
<tr><td class="crd-td"><strong>Collectivisation and Kazakh Famine Mortality Trough</strong></td><td class="crd-td">1933AD</td><td class="crd-td">9,55M</td><td class="crd-td">3,3M</td><td class="crd-td">12,85M</td><td class="crd-td">Irrigated southern oasis refuges following catastrophic Kazakh famine</td></tr>
<tr><td class="crd-td"><strong>Eve of the Great Patriotic War</strong></td><td class="crd-td">1940AD</td><td class="crd-td">11,8M</td><td class="crd-td">4,5M</td><td class="crd-td">16,3M</td><td class="crd-td">Evacuated industrial centres, Ferghana valley, Tashkent core</td></tr>
<tr><td class="crd-td"><strong>Post-War Reconstruction and Virgin Lands Expansion</strong></td><td class="crd-td">1959AD</td><td class="crd-td">15,8M</td><td class="crd-td">7,21M</td><td class="crd-td">23,01M</td><td class="crd-td">Virgin Lands northern Kazakh grain belt and southern cotton oases</td></tr>
<tr><td class="crd-td"><strong>High Soviet Demographic Expansion</strong></td><td class="crd-td">1979AD</td><td class="crd-td">28,1M</td><td class="crd-td">11,84M</td><td class="crd-td">39,94M</td><td class="crd-td">Ferghana valley megalopolis, Tashkent, Almaty, Chuy basin</td></tr>
<tr><td class="crd-td"><strong>Dissolution of the Soviet Union</strong></td><td class="crd-td">1991AD</td><td class="crd-td">34,44M</td><td class="crd-td">16,51M</td><td class="crd-td">50,95M</td><td class="crd-td">Independent republican capitals and dense Ferghana agrarian basin</td></tr>
<tr><td class="crd-td"><strong>Post-Soviet Emigration Trough in Kazakhstan</strong></td><td class="crd-td">2000AD</td><td class="crd-td">40,3M</td><td class="crd-td">14,9M</td><td class="crd-td">55,2M</td><td class="crd-td">Uzbek and Tajik high fertility oases offsetting northern Slavic emigration</td></tr>
<tr><td class="crd-td"><strong>Contemporary Central Asian Demographic Boom</strong></td><td class="crd-td">2025AD</td><td class="crd-td">62,45M</td><td class="crd-td">20,22M</td><td class="crd-td">82,67M</td><td class="crd-td">Tashkent, Almaty, Astana, Ferghana corridor and Shymkent megalopolis</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Long-run population benchmarks across Central Asia from 10000BC to 2025AD illustrating historical trajectories, dynastic peaks and modern census counts.</figcaption>
</figure>

# Discussion

## Comparison with Global Baselines

Contrasting Project SARAY against earlier global reconstructions—notably the History Database of the Global Environment (HYDE 3.1 and HYDE 3.2) [@KleinGoldewijk2017], Angus Maddison's historical accounts [@Maddison2001], and Colin McEvedy and Richard Jones's atlas [@McEvedyJones1978]—reveals major methodological and empirical divergences.

Table \ref{tab:global-comparison} contrasts Project SARAY macro totals against these three global compilations across key historical benchmarks from 1000BC to 1950AD.

<figure class="crd-table-figure" id="tab:global-comparison">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark Horizon</th><th class="crd-th">SARAY Total</th><th class="crd-th">HYDE 3.2</th><th class="crd-th">Maddison (2001)</th><th class="crd-th">McEvedy and Jones (1978)</th><th class="crd-th">Methodological Distinction</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1000BC (Bronze to Iron Age Transition)</strong></td><td class="crd-td">1,45M</td><td class="crd-td">480k</td><td class="crd-td">-</td><td class="crd-td">500k</td><td class="crd-td">SARAY integrates BMAC, Sintashta and Andronovo registries across 37.060 archaeological records.</td></tr>
<tr><td class="crd-td"><strong>1AD (Classical Kushan and Kangju Statehood)</strong></td><td class="crd-td">3,6M</td><td class="crd-td">1,8M</td><td class="crd-td">1,5M</td><td class="crd-td">2M</td><td class="crd-td">SARAY incorporates Kushan, Kangju and Chorasmian oasis cadastres and extensive irrigation networks.</td></tr>
<tr><td class="crd-td"><strong>1200AD (High Mediaeval Khwarazmian Apex)</strong></td><td class="crd-td">6,95M</td><td class="crd-td">3,5M</td><td class="crd-td">3M</td><td class="crd-td">4M</td><td class="crd-td">SARAY documents high mediaeval agrarian carrying capacity across Samanid and Khwarazmian oases.</td></tr>
<tr><td class="crd-td"><strong>1260AD (Post-Mongol Invasion Mortality Trough)</strong></td><td class="crd-td">3,9M</td><td class="crd-td">3,2M</td><td class="crd-td">2,8M</td><td class="crd-td">3M</td><td class="crd-td">SARAY captures the full demographic shock of the Mongol invasion (-44% collapse in urban centres).</td></tr>
<tr><td class="crd-td"><strong>1500AD (Timurid to Early Uzbek Transition)</strong></td><td class="crd-td">5,4M</td><td class="crd-td">3,8M</td><td class="crd-td">3,5M</td><td class="crd-td">4,25M</td><td class="crd-td">SARAY traces Timurid urban recovery in Samarkand and Herat and early Shaybanid Uzbek consolidation.</td></tr>
<tr><td class="crd-td"><strong>1865AD (Eve of Imperial Russian Conquest)</strong></td><td class="crd-td">9,15M</td><td class="crd-td">6,8M</td><td class="crd-td">6,5M</td><td class="crd-td">7,5M</td><td class="crd-td">SARAY integrates pre-conquest fiscal registers from Bukhara, Khiva and Kokand with Zhuz genealogies.</td></tr>
<tr><td class="crd-td"><strong>1950AD (Post-War Soviet Reconstruction Baseline)</strong></td><td class="crd-td">17,8M</td><td class="crd-td">17,2M</td><td class="crd-td">17,5M</td><td class="crd-td">17,5M</td><td class="crd-td">SARAY harmonises Soviet census series accounting for 1931-1933 famine mortality and deportations.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Comparison of Project SARAY macro population totals against global historical baselines (HYDE 3.2, Maddison and McEvedy and Jones) from 1000BC to 1950AD.</figcaption>
</figure>

Three structural differences distinguish SARAY from earlier global syntheses:

First, **amplitude of nomadic-sedentary statehood and conquest cycles**: Global compilations such as HYDE and Maddison apply monotonic or smoothed demographic curves between widely separated benchmark years, dampening the real amplitude of dynastic expansions and catastrophic transition collapses. In 1200AD, global compilations estimate only 3M to 4M across Central Asia; SARAY establishes 6,95M, documenting the extensive hydraulic canal infrastructure and dense urban networks of the Khwarazmshah Empire, Samanid Transoxiana and Seljuk Merv [@Ilxomovna2026Reconstruc; @Sharipbayeva2026Geopolitic]. In 1260AD, global models overlook the depth of the Mongol conquest shock, assuming a minor dip or stagnation; SARAY demonstrates a forty-four per cent demographic collapse to 3,9M, reflecting the systematic destruction of Otrar, Gurganj, Samarkand and Merv, deliberate canal demolition, and widespread displacement [@Stephen2012Deep; @Amlashi2025Consequenc].

Second, **spatial distribution and terrain constraints**: Top-down downscaling models rely on modern land-cover, road network and city distributions to disaggregate historical population, creating pervasive backward-projection bias. In HYDE 3.2, substantial populations appear in the open Kyzylkum and Karakum sands or along dry paleochannels that were abandoned millennia ago. SARAY's non-stationary Matérn kriging substrata anchor population to verified archaeological and epigraphic find-spots, keeping Bronze Age settlement concentrated along the Murghab delta and Kopet Dag piedmont, Classical settlement focused on Kushan Bactria and Kangju Syr Darya canals, and mediaeval settlement tightly bound to active Zarafshan and Ferghana irrigation networks, while suppressing uninhabitable desert wastelands.

Third, **settlement granularity and urban continuity**: Global urban databases adopted arbitrary city thresholds (such as 20k or 40k inhabitants), omitting the thousands of fortified oasis towns, caravanserais, winter quarters (*kstau*), and post stations that formed the backbone of Central Asian urbanism. By compiling 13.703 settlements with continuous trajectories from each chapter's gazetteer archive, SARAY eliminates the artificial twentieth-century urban step discontinuities that occur when small regional towns enter tabular compilations for the first time.

## Methodological Limitations

Four primary methodological limitations should be considered when utilizing Project SARAY outputs:

First, archaeological sampling intensity varies across ecological zones and political boundaries. Survey coverage is dense along the well-investigated piedmont irrigation zones of southern Turkmenistan, Uzbekistan and Tajikistan (extensively surveyed by CAAL, Soviet expeditions, and international missions), whereas archaeological survey density is considerably sparser across the remote semi-desert plateaus of central Kazakhstan (Ulytau, Betpak-Dala) and the high Pamir cordilleras. While the use of HydroBASINS Level 6 catchments, biophysical covariates and Poisson-Gamma shrinkage damps these survey gradients, residual taphonomic disparities remain.

Second, pre-modern fiscal and court records vary in recording criteria across regimes. The conversion of registered hearths (*tütün*), plow-land units (*tanap*), and nomadic kibitkas into total de facto population requires estimating household dependency ratios, unregistered dependents, and female omissions. Although SARAY follows established standards calibrated by Morrison, Karassayev and Razdykov, confidence intervals widen for chaotic transition intervals such as the early eighteenth-century Dzungar invasions.

Third, early twentieth-century statistical dislocations complicate intercensal reconstructions. The 1916 revolt, the Civil War, and the 1931-1933 Kazakh collectivisation famine caused massive unregistered excess mortality, internal refugee flight, and cross-border migration into Xinjiang. Reconstructing precise district-level mortality during the Kazakh famine requires triangulating between the 1926 and 1937/1939 all-Union censuses, Party archives, and OGPU demographic reports.

Fourth, contemporary demographic data accessibility diverges across the five post-Soviet republics. While Kazakhstan, Kyrgyzstan and Tajikistan maintain open national statistical portals with detailed municipal and regional census reporting, Turkmenistan's official statistical releases remain sparse, requiring careful cross-validation with satellite nighttime lights, secondary demographic analyses, and international reporting.

## Conclusion

Project SARAY establishes an empirical, spatially continuous demographic reconstruction of Central Asia across 3.890.946 km² from 10000BC to 2026AD. By synthesising 37.060 composite archaeological site observations, nine non-stationary Matérn kriging horizons, authoritative dynastic and imperial cadastral records, and modern statistical censuses across 161 analytical units and 13.703 catalogued settlements, SARAY overcomes the distortions of earlier top-down continental models.

The resulting dataset provides an open, geostatistically documented baseline for comparative long-run studies of human adaptation, irrigation technology, pastoralist-nomadic dynamics, and demographic cycles across Central Asia.

# Sources

<div id="refs"></div>
