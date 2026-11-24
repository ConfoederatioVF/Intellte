---
title: "Ancient Iran, Afghanistan and Transcaucasia"
subtitle: "Elam, Medes, Achaemenid Persia, Urartu and Early Caucasia, 3200BC to 330BC"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: ancient_iran_afghanistan_transcaucasia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_ancient_iran_afghanistan_transcaucasia_spatial.png"
hero_caption: "Ten sub-regions and 119 individually assessed ancient settlements across Iran, Afghanistan, eastern Anatolia and Transcaucasia, 3200BC to 330BC."
hero_label: "fig:hero-ancient-iran-afghanistan-transcaucasia"
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

Between the emergence of Proto-Elamite urban accountancy around 3200BC and the Macedonian conquest of the Achaemenid Empire in 330BC, the highland plateaus, piedmont fans and alluvial plains stretching from the Lesser Caucasus and Lake Van across Iran to the Oxus and Helmand basins experienced a nearly fivefold expansion in human numbers. Across ten sub-regions covering 37.831 five-arcminute cells, aggregate population rose from 1,93M inhabitants in 3200BC to 3,64M in 2000BC, reached 5,02M by 1200BC, climbed to 7,2M at 600BC under Median and late Neo-Elamite consolidation, and stood at 9,38M on the eve of Alexander's invasion in 330BC [@Renette2023Historical; @Matthews2025Informatio; @Altaweel2018Revolution]. Early urban concentration in the lowlands of Susiana and the riverine oases of Sistan and Kerman gradually yielded demographic primacy to the intermontane valleys of Media, Northwestern Iran, the Armenian Highlands and Persis as iron metallurgy, horse pastoralism and gravity-fed qanat irrigation opened arid alluvial fans to permanent village agriculture [@Saatsaz2023Technology; @Saatsaz2021Water; @Ozsoy2026Topography]. HANDBOOK disaggregates these regional series across 119 individually assessed settlements and 3.416 domestic catchments through metric-isotropic radial distance fields, non-stationary Paciorek-Schervish Matérn ($\nu = 3/2$) kriging and pycnophylactic scaling anchored to geoBoundaries subadministrative polygons [@Runfola2020GeoBoundaries].

# Background

## Geography, Climate and Corridors of Mobility

The region examined in this chapter comprises a vast upland bridge linking Mesopotamia and Anatolia in the west with Central Asia and the Indus valley in the east. Unlike the continuous floodplains of the Tigris, Euphrates or Nile, settlement across Iran, Afghanistan and Transcaucasia is broken into sharply bounded ecological pockets separated by high folded mountain chains, salt deserts and rain-shadowed steppe [@Petrie2026Hills; @Boucharlat2019Renewal].

In the west, the Zagros Mountains rise in parallel limestone ridges from the Khuzestan plain toward the Iranian plateau, trapping winter cyclones from the Mediterranean and feeding perennial rivers such as the Karun, Karkheh and Diyala. Further north, the Armenian Highlands and the Lesser and Greater Caucasus form a volcanic tableland exceeding 1.500 m in mean elevation, where deep snowpacks nourish the Aras and Kura rivers and surround the endorheic basin of Lake Van [@Ozsoy2026Topography; @Lindsay2026Towards].

Across the interior of Iran, rainfall drops below 200 mm annually along the margins of the Dasht-e Kavir and Dasht-e Lut, confining dense habitation to piedmont aprons along the Alborz, Kopet Dag and Zagros flanks [@Saatsaz2023Technology; @Saatsaz2021Water]. Eastward, the Hindu Kush divides the Oxus (Amu Darya) plains of Bactria from the Helmand and Arghandab river corridors of Arachosia and Sistan, where snowmelt from central Afghanistan sustains fertile inland deltas amid hyper-arid gravel plains [@Petrie2026Hills].

Because arable pockets are separated by mountain passes and desert margins, long-term demographic growth depended on transport corridors and water-management techniques that linked highland raw materials with lowland grain surpluses [@Petrie2026Hills; @Renette2023Historical]. Multi-factor probabilistic corridor modelling demonstrates that Bronze Age exchange routes across the Iranian plateau consistently hugged piedmont spring lines and intermontane river valleys, channelled through passes such as the Khorasan Highway across the central Zagros and the coastal-mountain gates linking Susiana to Fars [@Petrie2026Hills; @Munoz2013Problemas]. Over two and a half millennia, societies across this macro-region shifted from scattered Chalcolithic farming villages and lowland city-states to integrated highland kingdoms and ultimately a continental empire capable of provisioning royal roads, garrison towns and monumental capitals across thousands of kilometres [@Altaweel2018Revolution; @Munoz2013Problemas].

## Elam, Susiana and the Jiroft-Kerman Horizon

In the late fourth millennium BC, the earliest urbanised and literate demographic core lay in southwestern Iran, where the Susiana plain formed the eastern extension of the greater Mesopotamian alluvium [@Karaketir2023Elamtu; @Khorashadi2026Acropolis]. Around 3200BC, Elam and Susiana already held roughly 240k inhabitants, anchored by Susa, Chogha Mish and surrounding survey sites across the Dez and Karun alluvial fans [@Wicks2023Production; @Overmann2021Look].

The Proto-Elamite administrative horizon (c. 3100BC to 2800BC) expanded far beyond lowland Khuzestan, carrying clay numerical tablets, cylinder seals and bevel-rimmed bowls across the Zagros highlands to Tal-i Malyan (ancient Anshan) in Fars, Tepe Sialk on the central plateau, Tepe Yahya in Kerman and Shahr-e Sukhteh in Sistan [@Matthews2025Informatio; @Overmann2021Look]. This dual lowland-highland polarity defined Elamite political geography for over two millennia: Susa governed the irrigated western plains while Anshan commanded the oak-steppe valleys of highland Fars [@Karaketir2023Elamtu; @Renette2023Historical].

During the Sukkalmah and Middle Elamite periods of the second millennium BC, Susiana and adjacent mountain corridors achieved high urban density, marked by the monumental ziggurat city of Chogha Zanbil (Al Untash-Napirisha), fortified tells such as Tall-e Geser and expanding settlement clusters in the central Zagros corridor around Kermanshah and Sahneh [@Mohammadifar2025Redefining; @Mirghaderi2022Chronology]. By 2000BC, Elam and Susiana supported an estimated 420k people, rising to 540k by 1200BC as Elamite kings campaigned into Babylonia and controlled trade along the Zagros piedmont [@Renette2023Historical; @AlvarezMon2024Like].

Further southeast, the third-millennium florescence of the Halil Rud valley (Jiroft) and Kerman (Tepe Yahya, Shahdad and Khabiṣ) sustained dense craft-producing oases trading carved chlorite vessels, copper and lapis lazuli across the Persian Gulf and Central Asia [@Petrie2026Hills; @Boucharlat2019Renewal]. Yet Elamite lowland prosperity proved vulnerable to hydro-climatic stress and Assyrian imperial warfare. Late Neo-Elamite cuneiform tablets from the Susa Acropolis archive reveal acute grain shortages, drought-induced boat blockades and fractured regional principalities in the seventh century BC [@Khorashadi2026Acropolis; @Gorris2023Boats]. Following Ashurbanipal's destructive sack of Susa in 647BC, Elam and Susiana experienced a rare demographic contraction from 540k in 1200BC to 520k in 600BC, even as Neo-Elamite and early Persian elites persisted in highland Khuzestan and eastern Fars [@Bartelmus2025Chapter; @Wicks2024Tomb].

## Urartu, Kura-Aras and Early Transcaucasia

North of the Zagros, the Early Bronze Age Kura-Araxes cultural complex (c. 3500BC to 2400BC) bound together the volcanic basins of eastern Anatolia, the Ararat plain, Georgia and Azerbaijan in a remarkably uniform tradition of burnished black-and-red pottery, circular mudbrick-and-stone houses and transhumant pastoralism [@OZFIRAT2021Ernis; @Lindsay2026Towards]. Settlements such as Shengavit on the Hrazdan river, Samshvilde in southern Georgia and Ernis on the northern shore of Lake Van supported growing agropastoral villages, lifting Urartu and the Armenian Highlands from 210k in 3200BC to 390k in 2000BC, while Colchis, Iberia and Caucasian Albania rose from 180k to 340k over the same interval [@OZFIRAT2021Ernis].

During the Middle Bronze Age (c. 2200BC to 1500BC), a pronounced shift toward mobile pastoralism and kurgan funerary monuments reduced permanent tell visibility across parts of the South Caucasus, before Late Bronze and Iron 1 highland polities re-concentrated populations around cyclopean stone hillforts [@Lindsay2026Towards; @Sevin2004Erken]. Excavations at upland strongholds demonstrate that hillfort chiefs mobilised substantial stone-masonry labour and stored surplus grain against steppe raiding and inter-valley competition [@Lindsay2026Towards].

From the ninth to seventh centuries BC, the confederation of Nairi and Uruatri coalesced into the centralised Kingdom of Urartu (Bianili), centred on Tushpa (Van) along the eastern shore of Lake Van [@Ozsoy2026Topography; @Cavusoglu2024Bianili]. Urartian monarchs transformed the demographic carrying capacity of the high country through state-directed hydraulic engineering and fortress construction. The Menua (Shamram) Canal, stretching over 50 km to water the Van plain, and stone fortresses such as Körzüt in the Muradiye plain, Erebuni and Teishebaini (Karmir Blur) in the Ararat valley, and upland bastions in Hakkari anchored royal granaries, wine cellars and resettled agrarian populations [@Dan2024Data; @COSKUN2026Hakkari; @Gokce2021Lake].

Urartian road surveys demonstrate that royal fortresses were spaced along predictable day-march stages linking Lake Van, the Aras corridor and northwestern Iran around Lake Urmia [@Gokce2021Lake; @Ozsoy2026Topography]. As a result, Urartu and the Armenian Highlands expanded from 580k inhabitants in 1200BC to 820k in 600BC, while neighbouring Colchis, Iberia and Caucasian Albania grew from 480k to 680k as iron ploughs cleared Colchian wetlands and Iberian river terraces [@Lindsay2026Towards]. After Urartu fell around 590BC, Orontid Armenia, Iberia and Caucasian Albania continued this upward trajectory under Achaemenid provincial tribute, reaching 960k and 840k respectively by 330BC [@Dan2024Data; @Ozsoy2026Topography].

## Medes, Qanat Irrigation and the Achaemenid Empire

The demographic centre of gravity on the Iranian plateau shifted decisively during the Iron Age (c. 1200BC to 550BC). Across western Iran, sites such as Hasanlu Tepe south of Lake Urmia and Godin Tepe in the Kangavar valley illustrate the rise of fortified manors, horse breeding and iron-working among Iranian-speaking populations [@Mirghaderi2022Chronology; @Renette2023Historical]. By the eighth and seventh centuries BC, the Median confederation consolidated the intermontane plains from Hamadan (Ecbatana) to Rayy (Rhaga) and Kermanshah, raising the population of Media and the Western Zagros from 680k in 1200BC to 1,05M by 600BC, while Northwestern Iran and the Caspian littoral climbed from 560k to 840k [@Altaweel2018Revolution; @Boucharlat2019Renewal].

Underpinning this plateau expansion was the invention and rapid diffusion of the qanat (kariz), a gently sloping subterranean gallery excavated into alluvial piedmont fans to tap mountain aquifers without evaporative loss [@Saatsaz2023Technology; @Saatsaz2021Water]. Unlike open river canals, which suffered heavy seepage and seasonal desiccation on arid plateau fringes, qanats allowed year-round cultivation of wheat, barley, orchards and lucerne across previously uninhabitable gravel aprons in Media, central Iran, Kerman and eastern Khorasan [@Saatsaz2023Technology; @Saatsaz2021Water].

When Cyrus the Great united Fars and Media after 550BC and conquered Babylon in 539BC, the Achaemenid Persian Empire harnessed both royal irrigation works and a continent-wide road network [@Bartelmus2025Chapter; @Munoz2013Problemas]. Persepolis and Pasargadae rose in the Marvdasht and Morghab plains of Fars, transforming Persis from a modest Elamite-pastoral province of 380k in 1200BC into an imperial heartland of 920k inhabitants by 330BC [@Munoz2013Problemas; @Salaris2026Some]. Along the Royal Road connecting Susa to Persepolis and Ecbatana, Persepolis Fortification tablets document state-rationed agricultural estates, road stations and multi-ethnic labour forces moving across the plateau [@Munoz2013Problemas; @Kulikov2023Cheetah]. By 330BC, Media and the Western Zagros reached 1,32M, Northwestern Iran and the Caspian littoral 1,08M, and the Central Iranian Plateau and Kerman 850k [@Boucharlat2019Renewal; @Saatsaz2023Technology].

## Bronze and Iron Age Afghanistan, Sistan and Bactria

East of the Iranian deserts, settlement concentrated along snow-fed river deltas and foothill oases. In the early Bronze Age (c. 3000BC to 2000BC), the Helmand basin supported major proto-urban centres at Shahr-e Sukhteh in Iranian Sistan and Mundigak north of Kandahar, each housing several thousand craft specialists in alabaster, lapis lazuli and bronze metallurgy [@Petrie2026Hills; @Boucharlat2019Renewal].

Further north, the Bactria-Margiana Archaeological Complex (BMAC) flourished around 2200BC to 1700BC across irrigated oasis fans south of the Amu Darya, while Shortugai at the confluence of the Kokcha and Oxus functioned as a northern Indus-affiliated outpost trading Badakhshan lapis lazuli [@Petrie2026Hills; @Wood2012After]. Climate aridification and shifts in Helmand distributary channels around 1800BC triggered the contraction of Shahr-e Sukhteh, temporarily slowing demographic growth in Sistan and Khorasan before Iron Age irrigation systems re-stabilised oasis agriculture [@Saatsaz2023Technology].

During the first millennium BC, Achaemenid satrapal administration integrated Bactria (centred on Bactra, modern Balkh), Aria (Herat), Arachosia (Kandahar) and Gandhara into the eastern imperial economy [@Wood2012After; @Coloru2013Seleukid]. Fortified oasis citadels such as Nad-i Ali in Sistan and Bala Hisar at Bactra anchored grain tribute, cavalry recruitment and caravan traffic across the Hindu Kush passes [@Wood2012After; @Kulikov2023Cheetah].

Between 1200BC and 330BC, population more than doubled in both Aria, Arachosia and Kabul-Gandhara (from 520k to 1,06M) and Bactria and Northern Afghanistan (from 380k to 780k), while Parthia, Khorasan and Sistan doubled from 440k to 880k [@Petrie2026Hills; @Wood2012After]. By the arrival of Alexander of Macedon in 330BC, the eastern Iranian world possessed a mature network of walled oasis cities and kariz-watered hinterlands that survived intact into the Seleukid and Graeco-Bactrian eras [@Wood2012After; @Coloru2013Seleukid].

# Methodology

## Sub-Regional Partition and Benchmark Calibration

To capture ecological and political contrasts without distorting local demographic signals, HANDBOOK partitions the macro-region into ten contiguous sub-regions spanning 37.831 five-arcminute raster cells across modern Iran, Afghanistan, eastern Anatolia, Armenia, Georgia and Azerbaijan. Regional totals are reconstructed at five primary chronological benchmarks ($t \in \{-3200, -2000, -1200, -600, -330\}$) reflecting major shifts in urbanism, highland state formation and imperial integration: the Proto-Elamite and Kura-Araxes horizon (3200BC), the Middle Bronze Sukkalmah and BMAC florescence (2000BC), the Late Bronze to Early Iron transition (1200BC), the Median, Urartian-Orontid and Neo-Elamite zenith (600BC) and the late Achaemenid terminal benchmark (330BC).

For each sub-region $r$ and benchmark year $t$, population $P_r(t)$ is calibrated from excavated site-size hierarchies, surface survey settlement counts (such as the Susiana, Marvdasht, Kangavar and Muradiye surveys), cuneiform ration or tribute archives where available, and carrying-capacity constraints imposed by rainfall and irrigation technology [@Renette2023Historical; @Mohammadifar2025Redefining; @Dan2024Data]. Urban and semi-urban point totals from the 119 individually assessed settlements are reconciled against rural agricultural hinterlands so that neither isolated monumental citadels nor unexcavated village landscapes distort regional aggregates [@Lindsay2026Towards; @Boucharlat2019Renewal].

## Radial Distance Fields and Non-Stationary Matérn Kriging

Point-level archaeological discoveries across Iran, Afghanistan and Transcaucasia suffer from severe spatial sampling bias, reflecting uneven twentieth-century survey intensity around Susiana, Fars, Lake Van and western Iran compared with mountainous Hazarajat or desert margins [@Boucharlat2019Renewal; @Petrie2026Hills]. To convert uneven archaeological evidence into a continuous dasymetric habitability surface, HANDBOOK distributes regional population totals over 168.112 valid macro-domain land cells (3.416 domestic catchments and 83.857 unique domestic site records across ten macro-historical horizons) using metric-isotropic radial distance fields combined with non-stationary Paciorek-Schervish Matérn ($\nu = 3/2$) residual kriging.

Rather than relying on distorted equirectangular latitude-longitude radii, pairwise distances between settlement centroids and catchment nodes are measured along true geodesic metres in local equal-area frames, normalised by each catchment's empirical Voronoi radius (median 32,51 km, ninetieth percentile 40,25 km) to yield dimensionless geodesic lags $u_{ij}$. Prior to residual kriging, weighted least squares regression conditions local intensity on five biophysical covariates: habitable land fraction ($\beta_0$), natural vegetative productivity ($\beta_1$), ecozone terrain suitability ($\beta_2$), fluvial proximity decay ($\beta_3$) and coastal buffer proximity ($\beta_4$). Across all horizons relevant to this chapter, fluvial proximity exerts the strongest positive spatial pull ($\beta_3 = 0,0693$ to $0,1099$), reflecting the strict dependence of ancient Near Eastern agriculture on perennial rivers, alluvial fans and piedmont springs [@Saatsaz2023Technology]. An urban buffer mask (radius 2 cells around high-density urban cores) prevents modern or classical metropolitan haloes from artificially inflating surrounding rural pastures.

Residual spatial dependence is then interpolated using a dual-range Matérn ($\nu = 3/2$) covariance kernel with regularised dimensionless bandwidths $\tau_1 = 1,35$ (raw $\tau_1 = 1,518$) and $\tau_2 = 2,9025$, combining a short-range component ($c_1 = 0,8$) and a long-range regional gradient ($c_2 = 0,2$) over a low nugget-to-sill ratio of $0,04$. Effective short ranges remain tightly clustered between 48,29 km and 50,66 km across the prehistoric, Bronze, Iron and Achaemenid horizons, with residual semivariogram fits achieving $R^2 = 0,9992$ to $0,9993$ (Table \ref{tab:kriging-iran}).

## Subadministrative GIS Framework and Pycnophylactic Scaling

Although ancient polities operated without modern cadastral borders, linking ancient regional surfaces to later historical and modern census baselines requires an exact spatial bridge free of border-cliff artefacts. HANDBOOK embeds its spatial layers within geoBoundaries administrative polygons [@Runfola2020GeoBoundaries] spanning both historical provinces (29 units across the macro-domain, including Ottoman vilayets and Russian Imperial guberniyas) and modern districts (2.629 ADM1 and ADM2 units across the macro-domain, including 379 Iranian shahrestans, 355 Afghan districts, 968 Turkish districts, 78 Azerbaijani rayons, 61 Georgian municipalities and 11 Armenian marzer).

Population totals assigned to administrative polygons are disaggregated onto the five-arcminute habitability grid via strictly mass-conserving pycnophylactic scaling. Across 65.864 unit-year checks over 83 historical and modern census years, 100% of units conserve administrative mass within 0,01%, with a global maximum relative error of $5,845 \times 10^{-8}$. This strict conservation ensures that late-nineteenth-century Ottoman and Russian Imperial sub-provincial baselines—and modern district enumerations—can be compared directly against ancient highland and oasis catchment densities without leakage across national frontiers [@Runfola2020GeoBoundaries].

# Testing and Validation

Arithmetic reconciliation across all ten sub-regions confirms exact parity between individual territorial series and the macro-regional totals from 3200BC to 330BC (Table \ref{tab:validation-iran}). Growth accelerates smoothly across successive millennia without implausible step jumps, with one historically attested exception: Elam and Susiana contracts by 3,7% between 1200BC and 600BC (540k to 520k) following seventh-century drought crises and Assyrian campaigns [@Gorris2023Boats; @Bartelmus2025Chapter], before rebounding by 32,7% under Achaemenid imperial patronage to 690k in 330BC.

<figure class="crd-table-figure" id="tab:validation-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">3200BC</th><th class="crd-th">2000BC</th><th class="crd-th">1200BC</th><th class="crd-th">600BC</th><th class="crd-th">330BC</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Media and Western Zagros</strong></td><td class="crd-td">260k</td><td class="crd-td">480k</td><td class="crd-td">680k</td><td class="crd-td">1,05M</td><td class="crd-td">1,32M</td></tr>
<tr><td class="crd-td"><strong>Northwestern Iran and Caspian Littoral</strong></td><td class="crd-td">220k</td><td class="crd-td">390k</td><td class="crd-td">560k</td><td class="crd-td">840k</td><td class="crd-td">1,08M</td></tr>
<tr><td class="crd-td"><strong>Aria, Arachosia and Kabul-Gandhara</strong></td><td class="crd-td">190k</td><td class="crd-td">380k</td><td class="crd-td">520k</td><td class="crd-td">790k</td><td class="crd-td">1,06M</td></tr>
<tr><td class="crd-td"><strong>Urartu and Armenian Highlands</strong></td><td class="crd-td">210k</td><td class="crd-td">390k</td><td class="crd-td">580k</td><td class="crd-td">820k</td><td class="crd-td">960k</td></tr>
<tr><td class="crd-td"><strong>Fars (Persis)</strong></td><td class="crd-td">150k</td><td class="crd-td">280k</td><td class="crd-td">380k</td><td class="crd-td">620k</td><td class="crd-td">920k</td></tr>
<tr><td class="crd-td"><strong>Parthia, Khorasan and Sistan</strong></td><td class="crd-td">170k</td><td class="crd-td">310k</td><td class="crd-td">440k</td><td class="crd-td">660k</td><td class="crd-td">880k</td></tr>
<tr><td class="crd-td"><strong>Central Iranian Plateau and Kerman</strong></td><td class="crd-td">180k</td><td class="crd-td">340k</td><td class="crd-td">460k</td><td class="crd-td">640k</td><td class="crd-td">850k</td></tr>
<tr><td class="crd-td"><strong>Colchis, Iberia and Caucasian Albania</strong></td><td class="crd-td">180k</td><td class="crd-td">340k</td><td class="crd-td">480k</td><td class="crd-td">680k</td><td class="crd-td">840k</td></tr>
<tr><td class="crd-td"><strong>Bactria and Northern Afghanistan</strong></td><td class="crd-td">130k</td><td class="crd-td">310k</td><td class="crd-td">380k</td><td class="crd-td">580k</td><td class="crd-td">780k</td></tr>
<tr><td class="crd-td"><strong>Elam and Susiana</strong></td><td class="crd-td">240k</td><td class="crd-td">420k</td><td class="crd-td">540k</td><td class="crd-td">520k</td><td class="crd-td">690k</td></tr>
<tr><td class="crd-td"><strong>Chapter Total</strong></td><td class="crd-td">1,93M</td><td class="crd-td">3,64M</td><td class="crd-td">5,02M</td><td class="crd-td">7,2M</td><td class="crd-td">9,38M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional population benchmarks across Iran, Afghanistan and Transcaucasia, 3200BC to 330BC (10 sub-regions, 37.831 cells).</figcaption>
</figure>

Variogram diagnostics for the five chronological kriging horizons spanning late prehistory through the Achaemenid period demonstrate consistent spatial calibration (Table \ref{tab:kriging-iran}). Across these five horizons, raw dimensionless ranges $\tau_1$ vary narrowly between 1,4855 and 1,5584 before regularisation to 1,35, while mean cell site intensity climbs from 0,0216 in the Epipalaeolithic-Neolithic baseline to 0,1382 during the Late Bronze and Iron Age fortress expansion, moderating slightly to 0,1032 during the Achaemenid-Hellenistic consolidation as populations nucleated into larger satrapal towns.

<figure class="crd-table-figure" id="tab:kriging-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Raw Tau1</th><th class="crd-th">Range (km)</th><th class="crd-th">Nugget/Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Epipalaeolithic and Early Neolithic</strong></td><td class="crd-td">1,486</td><td class="crd-td">48,29</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0216</td></tr>
<tr><td class="crd-td"><strong>2. Late Neolithic and Chalcolithic</strong></td><td class="crd-td">1,529</td><td class="crd-td">49,71</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0829</td></tr>
<tr><td class="crd-td"><strong>3. Early and Middle Bronze Age</strong></td><td class="crd-td">1,507</td><td class="crd-td">48,98</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,1054</td></tr>
<tr><td class="crd-td"><strong>4. Late Bronze and Iron Age</strong></td><td class="crd-td">1,558</td><td class="crd-td">50,66</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,1382</td></tr>
<tr><td class="crd-td"><strong>5. Achaemenid and Hellenistic</strong></td><td class="crd-td">1,536</td><td class="crd-td">49,91</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,1032</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Matérn kriging variogram parameters across five prehistoric to Achaemenid horizons (168.112 valid domain cells, regularised tau1 = 1,35).</figcaption>
</figure>

To anchor ancient carrying capacities against pre-industrial cadastral realities, Table \ref{tab:hist-subadmin-iran} tabulates the historical Ottoman vilayet and Russian Imperial guberniya enumerations relevant to Eastern Anatolia and Transcaucasia, and Table \ref{tab:mod-subadmin-iran} summarises modern geoBoundaries ADM1/ADM2 subadministrative coverage across all six constituent states [@Runfola2020GeoBoundaries]. Even before modern mechanised pumping, the Eastern Anatolian vilayets (Erzurum, Van, Bitlis, Mamuretulaziz and Diyarbakir) held 2,79M inhabitants in 1914AD, while the three Transcaucasian guberniya groupings (Erivan, Tiflis-Kutais and Baku-Elizavetpol) supported 5,94M inhabitants in 1914AD—illustrating the substantial agrarian ceiling of the Armenian Highlands and the Kura-Aras lowlands when political stability and irrigation coincide.

<figure class="crd-table-figure" id="tab:hist-subadmin-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Historical Province Group</th><th class="crd-th">Country</th><th class="crd-th">Initial Census</th><th class="crd-th">Late 19th C. Census</th><th class="crd-th">1914AD Baseline</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Erzurum, Van, Bitlis, Mamuretulaziz and Diyarbakir Vilayets</strong></td><td class="crd-td">TUR</td><td class="crd-td">2,15M (1881AD)</td><td class="crd-td">2,38M (1893AD)</td><td class="crd-td">2,79M (1914AD)</td></tr>
<tr><td class="crd-td"><strong>Trabzon and Sivas Vilayets</strong></td><td class="crd-td">TUR</td><td class="crd-td">2,04M (1881AD)</td><td class="crd-td">2,21M (1893AD)</td><td class="crd-td">2,6M (1914AD)</td></tr>
<tr><td class="crd-td"><strong>Erivan Guberniya</strong></td><td class="crd-td">ARM</td><td class="crd-td">670k (1886AD)</td><td class="crd-td">829,6k (1897AD)</td><td class="crd-td">1M (1914AD)</td></tr>
<tr><td class="crd-td"><strong>Tiflis and Kutais Guberniyas</strong></td><td class="crd-td">GEO</td><td class="crd-td">1,68M (1886AD)</td><td class="crd-td">2,11M (1897AD)</td><td class="crd-td">2,6M (1914AD)</td></tr>
<tr><td class="crd-td"><strong>Baku and Elizavetpol Guberniyas</strong></td><td class="crd-td">AZE</td><td class="crd-td">1,41M (1886AD)</td><td class="crd-td">1,71M (1897AD)</td><td class="crd-td">2,34M (1914AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Historical Ottoman vilayet and Russian Imperial guberniya enumerations across Eastern Anatolia and Transcaucasia (1881AD to 1914AD).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:mod-subadmin-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Country</th><th class="crd-th">Admin Level</th><th class="crd-th">Matched Units</th><th class="crd-th">Census Span</th><th class="crd-th">Leading Unit</th><th class="crd-th">Latest Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Iran</strong></td><td class="crd-td">ADM2</td><td class="crd-td">379</td><td class="crd-td">1996 to 2023</td><td class="crd-td">Tehran</td><td class="crd-td">14,44M (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Afghanistan</strong></td><td class="crd-td">ADM2</td><td class="crd-td">355</td><td class="crd-td">1979 to 2020</td><td class="crd-td">Kabul</td><td class="crd-td">5,2M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Turkey</strong></td><td class="crd-td">ADM2</td><td class="crd-td">968</td><td class="crd-td">1990 to 2023</td><td class="crd-td">Esenyurt</td><td class="crd-td">978k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Armenia</strong></td><td class="crd-td">ADM1</td><td class="crd-td">11</td><td class="crd-td">1959 to 2025</td><td class="crd-td">Yerevan</td><td class="crd-td">1,14M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">ADM2</td><td class="crd-td">61</td><td class="crd-td">1959 to 2026</td><td class="crd-td">Tbilisi</td><td class="crd-td">1,37M (2026AD)</td></tr>
<tr><td class="crd-td"><strong>Azerbaijan</strong></td><td class="crd-td">ADM2</td><td class="crd-td">78</td><td class="crd-td">1959 to 2026</td><td class="crd-td">Baku City</td><td class="crd-td">2,64M (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Modern geoBoundaries subadministrative coverage and leading enumerated units across the six constituent states of the domain.</figcaption>
</figure>

# Results

## Bronze Age Polarity: Lowland Elam and Eastern Oases (3200BC to 1200BC)

At the opening of the historical window in 3200BC, total population across Iran, Afghanistan and Transcaucasia stood at 1,93M (Figure \ref{fig:traj-iran}). Habitation was weighted toward the western piedmonts and southwestern river valleys, where rainfed cereal agriculture and early canal irrigation yielded reliable harvests [@Renette2023Historical; @Matthews2025Informatio]. Media and the Western Zagros held 260k inhabitants (13,5% of the regional total), closely followed by Elam and Susiana with 240k (12,4%), Northwestern Iran and the Caspian littoral with 220k (11,4%) and Urartu and the Armenian Highlands with 210k (10,9%). Together, these four western and northwestern corridors accounted for nearly half (48,2%) of all inhabitants between the Black Sea and the Hindu Kush.

<figure class="crd-figure-block" id="fig:traj-iran">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ancient-iran-afghanistan-transcaucasia/fig2_ancient_iran_afghanistan_transcaucasia_trajectory.png" alt="fig:traj-iran" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate demographic trajectory (3200BC to 330BC) and sub-regional population ranking in 330BC across Iran, Afghanistan and Transcaucasia.</figcaption>
</figure>

Between 3200BC and 2000BC, population nearly doubled to 3,64M, growing at an implied annualised rate of roughly 0,053% per year. Growth was briskest in the eastern oasis belts as urbanism matured along the Helmand, Halil Rud and Oxus rivers [@Petrie2026Hills; @Boucharlat2019Renewal]. Bactria and Northern Afghanistan surged by 138,5% from 130k to 310k with the rise of BMAC walled oases and lapis lazuli trading hubs such as Shortugai, while Aria, Arachosia and Kabul-Gandhara doubled from 190k to 380k around Mundigak and its satellite villages [@Petrie2026Hills]. Elam and Susiana grew by 75% to 420k as Susa, Chogha Mish and Anshan consolidated state institutions, and the Central Iranian Plateau and Kerman expanded from 180k to 340k under the influence of Tepe Yahya, Shahdad and Jiroft craft networks [@Khorashadi2026Acropolis; @Wicks2023Production].

By 1200BC, aggregate population reached 5,02M (Table \ref{tab:validation-iran}). During this second-millennium expansion, northern and western highland polities outpaced the southeastern deserts. Urartu and the Armenian Highlands climbed to 580k (+48,7% over 2000BC) as fortified hilltop settlements multiplied across the Ararat plain and Lake Van basin [@Lindsay2026Towards; @OZFIRAT2021Ernis]. Media and the Western Zagros expanded to 680k (+41,7%), Northwestern Iran reached 560k (+43,6%) and Elam and Susiana peaked for the Bronze Age at 540k (+28,6%) under Middle Elamite territorial consolidation [@Mohammadifar2025Redefining]. By contrast, Bactria slowed to 380k and Parthia, Khorasan and Sistan rose modestly to 440k after the abandonment of Shahr-e Sukhteh and the disruption of third-millennium long-distance trade networks [@Boucharlat2019Renewal].

## Iron Age Expansion and the Qanat Revolution (1200BC to 600BC)

The six centuries between 1200BC and 600BC witnessed a structural transformation in settlement geography across the Iranian plateau and eastern Anatolia. Total population climbed from 5,02M to 7,2M, adding 2,18M inhabitants despite severe political turbulence along the Assyrian-Elamite and Assyrian-Urartian frontiers [@Altaweel2018Revolution; @Ozsoy2026Topography]. Three technological and institutional innovations drove this expansion: iron agricultural implements capable of breaking heavy highland soils, organised cavalry and infantry states capable of defending valley floors, and the widespread construction of underground qanat galleries across piedmont alluvial fans [@Saatsaz2023Technology; @Saatsaz2021Water].

Media and the Western Zagros became the first sub-region to surpass one million inhabitants, jumping by 54,4% from 680k in 1200BC to 1,05M in 600BC as Ecbatana, Rhaga and the Kermanshah plains consolidated under Median rule [@Mirghaderi2022Chronology; @Altaweel2018Revolution]. Adjacent Northwestern Iran and the Caspian littoral grew by 50% from 560k to 840k, while Fars (Persis) jumped by 63,2% from 380k to 620k as Iranian pastoral-agricultural clans settled permanently across the Kur river basin and Marvdasht [@Salaris2026Some; @Bartelmus2025Chapter]. In the north, royal Urartian irrigation canals, vineyards and fortress-cities raised Urartu and the Armenian Highlands by 41,4% to 820k, and Colchis, Iberia and Caucasian Albania by 41,7% to 680k [@Dan2024Data; @Gokce2021Lake].

East of the central deserts, iron-age irrigation and oasis expansion lifted Aria, Arachosia and Kabul-Gandhara by 51,9% to 790k, Bactria and Northern Afghanistan by 52,6% to 580k, and Parthia, Khorasan and Sistan by 50% to 660k [@Saatsaz2023Technology; @Wood2012After]. Only Elam and Susiana failed to participate in this boom: battered by recurring Neo-Assyrian invasions, civil succession wars and riverine droughts documented in late Susa Acropolis tablets, Susiana dipped from 540k in 1200BC to 520k in 600BC [@Gorris2023Boats; @Khorashadi2026Acropolis].

## Achaemenid Imperial Consolidation and Spatial Density (600BC to 330BC)

Between 600BC and 330BC, the Achaemenid Empire integrated all ten sub-regions into a single imperial fiscal and communications order, pushing total population from 7,2M to 9,38M—a gain of 2,18M in just 270 years (Figure \ref{fig:density-iran}). Imperial peace along the Royal Road, standardised silver and grain taxation, royal paradises (walled agricultural parks) and continued qanat expansion fostered sustained growth across both core satrapies and frontier provinces [@Munoz2013Problemas; @Saatsaz2023Technology; @Altaweel2018Revolution].

<figure class="crd-figure-block" id="fig:density-iran">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ancient-iran-afghanistan-transcaucasia/fig3_ancient_iran_afghanistan_transcaucasia_density.png" alt="fig:density-iran" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Kriged Achaemenid and Elamite population intensity surface and mean sub-regional settlement densities at 330BC.</figcaption>
</figure>

Fars (Persis), the dynastic homeland of Cyrus and Darius, recorded the fastest proportional growth of any sub-region during this imperial era, surging by 48,4% from 620k in 600BC to 920k in 330BC around the monumental complexes of Pasargadae and Persepolis [@Bartelmus2025Chapter; @Munoz2013Problemas]. Media and the Western Zagros remained the single most populous territory at 1,32M (+25,7%), followed by Northwestern Iran and the Caspian littoral at 1,08M (+28,6%) and Aria, Arachosia and Kabul-Gandhara at 1,06M (+34,2%). Bactria and Northern Afghanistan grew by 34,5% to 780k, Parthia, Khorasan and Sistan by 33,3% to 880k, and the Central Iranian Plateau and Kerman by 32,8% to 850k [@Wood2012After; @Saatsaz2021Water]. Even Elam and Susiana recovered vigorously once Susa became the winter administrative capital of the Achaemenid kings, rebounding by 32,7% from 520k to 690k [@Salaris2026Some; @Munoz2013Problemas].

Cell-level spatial density at 330BC highlights the profound contrast between compact piedmont and alluvial cores and expansive desert-steppe basins. Northwestern Iran and the Caspian littoral packed 1,08M inhabitants into 1.372 five-arcminute cells (an average of 787,2 inhabitants per cell), Elam and Susiana held 449,2 per cell (690k across 1.536 cells), Colchis, Iberia and Caucasian Albania held 413,6 per cell (840k across 2.031 cells) and Fars (Persis) held 407,4 per cell (920k across 2.258 cells). By contrast, Media and the Western Zagros spread its 1,32M inhabitants across 5.524 upland cells (239 inhabitants per cell), Urartu and the Armenian Highlands averaged 216,8 per cell (960k across 4.428 cells), and Parthia, Khorasan and Sistan averaged just 76,8 inhabitants per cell (880k across 11.465 cells), because wide expanses of salt desert and arid steppe separated intensely cultivated oasis strips.

## Settlement Network Hierarchy to 330BC

The 119 individually assessed settlements across the domain display a well-formed, polycentric rank-size distribution ($\alpha = 0,78$, $R^2 = 0,95$; Figure \ref{fig:sett-iran}) rather than extreme primate dominance by a single capital. Because topography divided the plateau, eastern Anatolia and the Caucasus into distinct valley and oasis basins, six imperial and regional capitals reached between 33,8k and 62,4k inhabitants at their respective archaeological peaks, supported by nineteen secondary capitals, Bronze Age oasis hubs and royal fortresses above 10k inhabitants [@Petrie2026Hills; @Lindsay2026Towards].

<figure class="crd-figure-block" id="fig:sett-iran">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ancient-iran-afghanistan-transcaucasia/fig4_ancient_iran_afghanistan_transcaucasia_settlements.png" alt="fig:sett-iran" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading individually assessed ancient settlements across Iran, Afghanistan and Transcaucasia through 330BC.</figcaption>
</figure>

In western, southwestern and southern Iran, Bronze and Iron Age urbanism was anchored by Ecbatana (62,4k peak inhabitants in 400BC) and Rayy (23,6k in 330BC) across Media and the northern plateau; Susa (61,2k in 400BC), Chogha Zanbil (11,4k in 1200BC), Haft Tappeh (8,4k in 1400BC) and Chogha Mish (4,5k in 3200BC) in Susiana; Persepolis (41,5k in 400BC), Anshan/Tall-e Malyan (36,5k in 2000BC), Pasargadae (13,2k in 500BC) and Estakhr (11,1k in 330BC) in Fars; and Bastam (13,8k in 640BC), Qalaichi (11,6k in 750BC), Gabae (9,6k in 330BC), Hasanlu (6,8k in 900BC) and Godin Tepe (5,7k in 2000BC) across northwestern and central Iran [@Renette2023Historical; @Mirghaderi2022Chronology; @Khorashadi2026Acropolis]. Across southeastern Iran, Khorasan and Afghanistan, Shahr-i Sokhta (24,8k in 2500BC), Konar Sandal (20,4k in 2400BC), Dahan-i Ghulaman (17,2k in 450BC), Tus (12,2k in 330BC) and Shahdad (11,3k in 2300BC) anchored Kerman, Sistan and Parthia, while Balkh (54,6k in 330BC), Old Kandahar (26,2k in 400BC), Herat (23,4k in 330BC), Kunduz (13,6k in 330BC), Kapisa (9,4k in 330BC), Nad-i Ali (8,9k in 400BC) and Mundigak (8,5k in 2500BC) commanded Bactria, Aria, Arachosia and the Helmand basin [@Petrie2026Hills; @Wood2012After]. In eastern Anatolia and Transcaucasia, Tushpa (33,8k in 680BC), Ayanis (11,2k in 625BC), Rusahinili (9,2k in 650BC) and Korzut (5,3k in 750BC) dominated the Lake Van basin, Argishtikhinili (15,4k in 700BC), Teishebaini (13,4k in 650BC) and Erebuni (10,2k in 700BC) anchored the Ararat plain, and Mtskheta (15,4k in 330BC), Vani (9,1k in 330BC) and Qabala (8,8k in 330BC) formed the urban backbone of Iberia, Colchis and Caucasian Albania [@OZFIRAT2021Ernis; @Dan2024Data].

# Limitations

Three structural constraints govern precision in this reconstruction. First, regional surface survey coverage remains geographically uneven across the macro-domain [@Boucharlat2019Renewal; @Petrie2026Hills]. Intensive multi-decade archaeological surveys in the Susiana plain, the Marvdasht valley of Fars, the central Zagros and the Lake Van basin provide dense settlement hierarchies, whereas large tracts of central Afghanistan, Baluchistan, Khorasan and parts of the Greater Caucasus lack comparable systematic pedestrian transects [@Dan2024Data; @Gokce2021Lake]. Although non-stationary Matérn kriging conditioned on fluvial and terrain covariates bridges unsurveyed valleys objectively, local micro-basin densities in eastern Afghanistan and central Iran carry wider uncertainty margins ($\pm 15\%$ to $\pm 25\%$) than western Iran.

Second, alluvial aggradation and tell reuse obscure early horizons beneath later urban overburden [@Boucharlat2019Renewal; @Renette2023Historical]. Major Achaemenid, Parthian and Islamic cities—including Ecbatana beneath modern Hamadan, Rayy beneath southern Tehran and Balkh beneath its mediaeval ramparts—overlie Bronze and Iron Age occupation layers that remain inaccessible to large-scale horizontal excavation, causing pre-Achaemenid urban populations at continuously inhabited hubs to be inferred partly from surface sherd scatters and regional catchment capacity [@Wood2012After].

Third, translating excavated walled enclosures into resident populations requires distinguishing compact residential tells from dispersed ceremonial, royal-garden or fortress compounds such as Chogha Zanbil, Pasargadae and Ayanis, where substantial intra-mural areas remained unbuilt [@Dan2024Data; @Lindsay2026Towards]. Moreover, modern national borders bisect several integrated ancient settlement networks—including Urartian strongholds across eastern Turkey, Armenia and northwestern Iran, and Helmand oases spanning Iranian Sistan and southern Afghanistan—whereas sub-regional population totals in Table \ref{tab:validation-iran} integrate across vector sub-region masks and are cross-checked against geoBoundaries polygons [@Runfola2020GeoBoundaries].

# Conclusion

Between 3200BC and 330BC, the peoples of ancient Iran, Afghanistan and Transcaucasia expanded from 1,93M to 9,38M inhabitants, transforming a patchwork of riverine Proto-Elamite towns, Kura-Araxes highland villages and Bronze Age desert oases into a continent-wide agrarian and urban network. Whereas lowlands such as Susiana and Sistan led early urbanisation in the third millennium BC, long-run demographic primacy passed during the Iron Age to the intermontane basins of Media, Northwestern Iran, Persis and the Armenian Highlands—a shift powered by iron agriculture, Urartian state hydraulics, plateau qanat engineering and Achaemenid road and tribute organisation [@Saatsaz2023Technology; @Ozsoy2026Topography; @Munoz2013Problemas]. By integrating 119 individually assessed settlements with metric-isotropic radial distance fields, non-stationary Matérn ($\nu = 3/2$) kriging and mass-conserving geoBoundaries subadministrative scaling [@Runfola2020GeoBoundaries], HANDBOOK supplies a continuous spatial baseline bridging Near Eastern prehistory and the Hellenistic era [@Wood2012After; @Coloru2013Seleukid].

# Appendix

## Sub-Regional Area and Density Structure

Table \ref{tab:app-density-iran} records the exact five-arcminute cell counts, cell share, initial 3200BC population, terminal 330BC population and implied growth factor across all ten sub-regions.

<figure class="crd-table-figure" id="tab:app-density-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Raster Cells</th><th class="crd-th">Area Share</th><th class="crd-th">3200BC</th><th class="crd-th">330BC</th><th class="crd-th">Growth</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Media and Western Zagros</strong></td><td class="crd-td">5.524</td><td class="crd-td">14,6%</td><td class="crd-td">260k</td><td class="crd-td">1,32M</td><td class="crd-td">5,08x</td></tr>
<tr><td class="crd-td"><strong>Northwestern Iran and Caspian Littoral</strong></td><td class="crd-td">1.372</td><td class="crd-td">3,6%</td><td class="crd-td">220k</td><td class="crd-td">1,08M</td><td class="crd-td">4,91x</td></tr>
<tr><td class="crd-td"><strong>Aria, Arachosia and Kabul-Gandhara</strong></td><td class="crd-td">3.229</td><td class="crd-td">8,5%</td><td class="crd-td">190k</td><td class="crd-td">1,06M</td><td class="crd-td">5,58x</td></tr>
<tr><td class="crd-td"><strong>Urartu and Armenian Highlands</strong></td><td class="crd-td">4.428</td><td class="crd-td">11,7%</td><td class="crd-td">210k</td><td class="crd-td">960k</td><td class="crd-td">4,57x</td></tr>
<tr><td class="crd-td"><strong>Fars (Persis)</strong></td><td class="crd-td">2.258</td><td class="crd-td">6%</td><td class="crd-td">150k</td><td class="crd-td">920k</td><td class="crd-td">6,13x</td></tr>
<tr><td class="crd-td"><strong>Parthia, Khorasan and Sistan</strong></td><td class="crd-td">11.465</td><td class="crd-td">30,3%</td><td class="crd-td">170k</td><td class="crd-td">880k</td><td class="crd-td">5,18x</td></tr>
<tr><td class="crd-td"><strong>Central Iranian Plateau and Kerman</strong></td><td class="crd-td">2.831</td><td class="crd-td">7,5%</td><td class="crd-td">180k</td><td class="crd-td">850k</td><td class="crd-td">4,72x</td></tr>
<tr><td class="crd-td"><strong>Colchis, Iberia and Caucasian Albania</strong></td><td class="crd-td">2.031</td><td class="crd-td">5,4%</td><td class="crd-td">180k</td><td class="crd-td">840k</td><td class="crd-td">4,67x</td></tr>
<tr><td class="crd-td"><strong>Bactria and Northern Afghanistan</strong></td><td class="crd-td">3.157</td><td class="crd-td">8,3%</td><td class="crd-td">130k</td><td class="crd-td">780k</td><td class="crd-td">6x</td></tr>
<tr><td class="crd-td"><strong>Elam and Susiana</strong></td><td class="crd-td">1.536</td><td class="crd-td">4,1%</td><td class="crd-td">240k</td><td class="crd-td">690k</td><td class="crd-td">2,88x</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Five-arcminute cell counts, territorial share, 3200BC and 330BC benchmarks and growth multipliers across ten sub-regions.</figcaption>
</figure>

## Top Twenty Catalogued Settlements

Table \ref{tab:app-top20-iran} lists the twenty highest-peaking settlements from the chapter catalogue alongside their modern jurisdiction, active occupation span and peak population year.

<figure class="crd-table-figure" id="tab:app-top20-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Occupation Span</th><th class="crd-th">Peak Population</th><th class="crd-th">Peak Year</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ecbatana</strong></td><td class="crd-td">Iran</td><td class="crd-td">1500BC to 330BC</td><td class="crd-td">62,4k</td><td class="crd-td">400BC</td></tr>
<tr><td class="crd-td"><strong>Susa</strong></td><td class="crd-td">Iran</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">61,2k</td><td class="crd-td">400BC</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">2200BC to 330BC</td><td class="crd-td">54,6k</td><td class="crd-td">330BC</td></tr>
<tr><td class="crd-td"><strong>Persepolis</strong></td><td class="crd-td">Iran</td><td class="crd-td">515BC to 330BC</td><td class="crd-td">41,5k</td><td class="crd-td">400BC</td></tr>
<tr><td class="crd-td"><strong>Anshan</strong></td><td class="crd-td">Iran</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">36,5k</td><td class="crd-td">2000BC</td></tr>
<tr><td class="crd-td"><strong>Tushpa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">2500BC to 330BC</td><td class="crd-td">33,8k</td><td class="crd-td">680BC</td></tr>
<tr><td class="crd-td"><strong>Old Kandahar</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">1500BC to 330BC</td><td class="crd-td">26,2k</td><td class="crd-td">400BC</td></tr>
<tr><td class="crd-td"><strong>Shahr-i Sokhta</strong></td><td class="crd-td">Iran</td><td class="crd-td">3200BC to 1850BC</td><td class="crd-td">24,8k</td><td class="crd-td">2500BC</td></tr>
<tr><td class="crd-td"><strong>Rayy</strong></td><td class="crd-td">Iran</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">23,6k</td><td class="crd-td">330BC</td></tr>
<tr><td class="crd-td"><strong>Herat</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">2000BC to 330BC</td><td class="crd-td">23,4k</td><td class="crd-td">330BC</td></tr>
<tr><td class="crd-td"><strong>Konar Sandal</strong></td><td class="crd-td">Iran</td><td class="crd-td">3000BC to 1000BC</td><td class="crd-td">20,4k</td><td class="crd-td">2400BC</td></tr>
<tr><td class="crd-td"><strong>Dahan-i Ghulaman</strong></td><td class="crd-td">Iran</td><td class="crd-td">540BC to 330BC</td><td class="crd-td">17,2k</td><td class="crd-td">450BC</td></tr>
<tr><td class="crd-td"><strong>Argishtikhinili</strong></td><td class="crd-td">Armenia</td><td class="crd-td">775BC to 330BC</td><td class="crd-td">15,4k</td><td class="crd-td">700BC</td></tr>
<tr><td class="crd-td"><strong>Mtskheta</strong></td><td class="crd-td">Georgia</td><td class="crd-td">2400BC to 330BC</td><td class="crd-td">15,4k</td><td class="crd-td">330BC</td></tr>
<tr><td class="crd-td"><strong>Bastam</strong></td><td class="crd-td">Iran</td><td class="crd-td">2500BC to 330BC</td><td class="crd-td">13,8k</td><td class="crd-td">640BC</td></tr>
<tr><td class="crd-td"><strong>Kunduz</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">2000BC to 330BC</td><td class="crd-td">13,6k</td><td class="crd-td">330BC</td></tr>
<tr><td class="crd-td"><strong>Teishebaini</strong></td><td class="crd-td">Armenia</td><td class="crd-td">685BC to 600BC</td><td class="crd-td">13,4k</td><td class="crd-td">650BC</td></tr>
<tr><td class="crd-td"><strong>Pasargadae</strong></td><td class="crd-td">Iran</td><td class="crd-td">540BC to 330BC</td><td class="crd-td">13,2k</td><td class="crd-td">500BC</td></tr>
<tr><td class="crd-td"><strong>Tus</strong></td><td class="crd-td">Iran</td><td class="crd-td">2000BC to 330BC</td><td class="crd-td">12,2k</td><td class="crd-td">330BC</td></tr>
<tr><td class="crd-td"><strong>Qalaichi</strong></td><td class="crd-td">Iran</td><td class="crd-td">1200BC to 330BC</td><td class="crd-td">11,6k</td><td class="crd-td">750BC</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Top twenty catalogued ancient settlements across Iran, Afghanistan and Transcaucasia ordered by peak population (3200BC to 330BC).</figcaption>
</figure>

# Sources

<div id="refs"></div>
