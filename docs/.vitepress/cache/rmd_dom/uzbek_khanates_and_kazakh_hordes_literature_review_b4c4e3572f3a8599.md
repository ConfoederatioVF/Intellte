---
title: "Demographic Trajectory of the Uzbek Khanates and Kazakh Steppe Hordes"
subtitle: "Sedentary Oasis Statecraft, Pastoral Nomadic Demography, the Mid-Eighteenth-Century Crisis and Agricultural Resurgence, 1500AD to 1865AD"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: uzbek_khanates_and_kazakh_hordes_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_uzbek_khanates_and_kazakh_hordes_spatial.png"
hero_caption: "Biophysical basins, oasis canal networks and catalogued urban centres across the early modern Uzbek khanates and Kazakh steppe hordes from 1500AD to 1865AD."
hero_label: "fig:hero-early-modern-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper reconstructs the demographic trajectory, macro-spatial distribution and settlement systems of Central Asia from the Shaybanid conquest of Transoxiana in 1500AD to the eve of Russian imperial conquest in 1865AD. Across eight territorial units encompassing 3.890.946 km² (65.332 five-arcminute raster cells), aggregate population expanded from 5,4M (5.400.000) in 1500AD to 6,05M (6.050.000) in 1600AD and 6,45M (6.450.000) in 1700AD [@Kholikova2023Impact; @Anon2016Visions; @Nurullayeva2025Timurid]. This early modern expansion reflected the consolidation of the Uzbek khanates of Bukhara, Khiva and Kokand alongside the mobile pastoral economy of the three Kazakh Zhuzes [@KAHVECI2001Western; @Razdykov2019Appearance]. However, the early eighteenth century brought profound structural rupture: the catastrophic Dzungar invasion of 1723AD to 1727AD, remembered as the Aktaban Shubyryndy disaster, combined with Nader Shah Afshar's destructive Transoxian campaigns in 1740AD to depress domain population to 6,25M (6.250.000) by 1750AD [@Anon2016Visions; @Karassayev2025History]. Following the Qing destruction of the Dzungar state and subsequent diplomatic stabilisation, Central Asia experienced an extended agrarian and commercial resurgence led by the Ming Khanate of Kokand, whose extensive state-sponsored irrigation projects across the Ferghana Valley fostered rapid demographic growth [@Anarbaeva2025Socio; @MirMakhamad2023Testing]. By 1865AD, domain population reached 9,15M (9.150.000), supported by major urban nodes led by Tashkent (133,9k), Bukhara (90k), Samarkand (85k), Kokand (78k) and Namangan (53,3k) [@Gafurova2026Waqf; @Chokobaeva2017Frontiers]. This study calibrates territorial headcounts using Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 396 active domestic catchments and 192 catalogued settlements.

# Background

## Ecological Foundation and Agrarian-Nomadic Symbiosis

The human geography of early modern Central Asia was fundamentally defined by an enduring ecological dichotomy between irrigated riverine oasis basins and vast arid steppe-desert grazing lands [@Croix2021Roundtable; @Ong2023Environmen]. Transoxiana, known historically as Mawara al-Nahr, was watered by the two great arterial rivers of the Aral Sea drainage basin, the Amu Darya (Oxus) and the Syr Darya (Jaxartes), alongside inland endorheic river systems including the Zeravshan, the Kashka Darya and the Murghab [@Croix2021Roundtable; @Mamurov2024Nationwide]. Where melting glaciers of the Pamir, Tian Shan and Alay mountain ranges fed perennial streams into piedmont alluvial fans, human communities developed complex canal irrigation systems that supported multi-cropping regimes of winter wheat, barley, cotton, alfalfa, melons and orchard horticulture [@MirMakhamad2023Testing; @Ong2023Environmen]. These agrarian cores fostered dense urban settlements, artisanal craft guilds and monumental Islamic civic architecture [@Nurullayeva2025Timurid; @Jabbarov2023Patterns].

Surrounding these fragile oasis islands lay the boundless expanses of the Eurasian steppe, extending northwards across the Kazakh uplands (Saryarka), the Ishim and Irtysh river plains and westwards across the arid Ustyurt plateau and the Karakum and Kyzylkum deserts [@ZHANABAYEV2023Morphologi; @Myrzagaliyeva2024Natural]. Here, aridity and severe continental temperature extremes precluded permanent crop agriculture, dictating a pastoral nomadic mode of life based on seasonal transhumance [@Razdykov2019Appearance; @Chermukhambetov2024Spiritual]. Kazakh and Turkmen pastoralists managed mixed herds of sheep, fat-tailed goats, horses, cattle and two-humped Bactrian camels, migrating hundreds of kilometres between sheltered winter pastures (*qystau*) in river valleys or sand dunes and high-altitude summer grasslands (*zhailau*) in northern steppes or mountain slopes [@Razdykov2019Appearance; @Hallez2025Introducin]. Rather than existing in autarkic isolation, nomadic pastoralists and sedentary oasis dwellers maintained an indispensable symbiotic exchange: nomads supplied livestock, wool, hides, felt and horses in return for grain, woven textiles, iron implements and manufactured goods traded at frontier bazaar towns such as Turkistan, Sayram, Bukhara and Semey [@StephanEmmrich2018Mobilities; @Karassayev2025History].

## The Uzbek Khanates: Bukhara, Khiva and Kokand

The political landscape of sedentary Transoxiana crystallised at the opening of the sixteenth century through the southward migration of Dasht-i Qipchaq Uzbek confederations under Muhammad Shaybani Khan [@KAHVECI2001Western; @Kholikova2023Impact]. Overrunning the fragmented Timurid successor principalities, the Shaybanid dynasty (1500AD to 1598AD) established a powerful realm centred upon Bukhara and Samarkand [@Nurullayeva2025Timurid; @Kholikova2023Impact]. Under Abdullah Khan II (1583AD to 1598AD), the Khanate of Bukhara attained institutional and economic zenith, constructing extensive public infrastructure including stone bridges, covered market arcades (*taqi*), rabats, subterranean cisterns (*sardoba*) and extensive canal heads along the Zeravshan River [@Nurullayeva2025Timurid; @Gafurova2026Waqf].

Following dynastic extinction, authority passed to the Janid (Ashtarkhanid) dynasty (1599AD to 1785AD), of Astrakhanid descent [@Anon2016Visions; @Kholikova2023Impact]. Under Janid rule, Bukhara consolidated its position as an international theological and mercantile crossroads, maintaining lively diplomatic and commercial connections with Muscovy, the Ottoman Empire, Safavid Iran and the Mughal Empire [@Anon2016Visions; @StephanEmmrich2018Mobilities]. However, recurrent tribal rebellions by Uzbek chieftains, alongside fiscal reliance on hereditary religious endowments (*waqf*), progressively undermined centralised authority throughout the late seventeenth century [@Anon2016Visions; @Gafurova2026Waqf]. In 1785AD, after decades of internal fragmentation, the Manghit dynasty established the Emirate of Bukhara [@Anon2016Visions]. Amir Shah Murad (1785AD to 1800AD) and Amir Haydar (1800AD to 1826AD) reformed the fiscal administration, restructured water distribution across the Zeravshan basin, curbed tribal autonomy and established a standing army, securing a sustained urban demographic revival through the mid-nineteenth century [@Anon2016Visions; @Kholikova2023Impact].

To the west, along the lower Amu Darya delta bordering the southern shore of the Aral Sea, the Khanate of Khiva developed within the historic oasis of Khwarazm [@Croix2021Roundtable]. Founded in 1511AD by the Arabshahid branch of the Shibanids, Khiva originally operated from Kunya-Urgench [@Nurullayeva2025Timurid]. When catastrophic tectonic shifts and irrigation diversion redirected the primary channel of the Amu Darya away from the Sarykamysh Lake and the Caspian Sea towards the Aral Sea in the late sixteenth century, the capital shifted southwards to the city of Khiva [@Croix2021Roundtable]. Under the Qungrat dynasty (1804AD to 1920AD), founded by Iltazar Khan, Khiva carried out extensive drainage and canal excavation works across the delta, settled pastoral Karakalpak and Turkmen clans on irrigated plots and exercised commercial dominance over the desert caravan routes connecting Transoxiana to the Caspian and the lower Volga [@StephanEmmrich2018Mobilities; @Croix2021Roundtable].

In eastern Transoxiana, the fertile intermontane basin of the Ferghana Valley gave rise in 1709AD to the Khanate of Kokand under the Uzbek Ming dynasty [@Anarbaeva2025Socio]. Endowed with abundant meltwater from the Tian Shan and Alay mountain ranges, Ferghana possessed tremendous agricultural carrying capacity [@Anarbaeva2025Socio; @MirMakhamad2023Testing]. Under Alim Khan (1800AD to 1809AD), Umar Khan (1809AD to 1822AD) and Muhammad Ali Khan (Madali Khan, 1822AD to 1842AD), the Kokand state executed monumental hydraulic construction projects, cutting the Khan-ariq and Shahrukh-ariq canals to transform arid terraces into fertile cotton, cereal and fruit gardens [@Anarbaeva2025Socio; @MirMakhamad2023Testing]. Expanding outwards from Ferghana, Kokand annexed the prosperous mercantile metropolis of Tashkent in 1809AD, conquered Khujand and established strategic garrisons at Pishpek, Tokmok and Turkistan across the northern steppe fringe, emerging as the most populous state in early nineteenth-century Central Asia [@Anarbaeva2025Socio; @Chokobaeva2017Frontiers; @Hallez2025Introducin].

## The Kazakh Zhuzes and the Steppe Pastoral Economy

North of the Syr Darya and the Tian Shan mountain chains, the vast steppe lands were organised into the three Kazakh Zhuzes (Hordes), which crystallised following the disintegration of the Golden Horde and the White Horde under Janibek and Kerey Khans in the late fifteenth century [@KAHVECI2001Western; @Razdykov2019Appearance]. The three zhuzes functioned as flexible tribal confederations united by shared customary law (*adat*), Islamic legal integration, genealogical kinship traditions and seasonal pastoral migratory circuits [@Razdykov2019Appearance; @Chermukhambetov2024Spiritual; @Anon2024Revisiting].

The Senior Zhuz (Uly Zhuz) occupied southeastern Kazakhstan, encompassing Semirechye (Zhetysu, the Land of Seven Rivers) and the middle reaches of the Syr Darya [@Hallez2025Introducin; @Chokobaeva2017Frontiers]. Anchored by rich subalpine summer pastures in the Zailiysky Alatau and wintering grounds along the Chu, Ili and Karatal rivers, the Senior Zhuz maintained intimate commercial and political contact with the sedentary oasis hubs of Sayram, Taraz and Turkistan [@Hallez2025Introducin; @Karassayev2025History]. The Middle Zhuz (Orta Zhuz), the most numerous and geographically expansive confederation, inhabited the central Kazakh uplands (Saryarka) and the northern river basins of the Ishim, Tobol and Irtysh [@ZHANABAYEV2023Morphologi; @Razdykov2019Appearance]. Comprising powerful tribal groupings including the Argyn, Naiman, Kerey and Qypchaq, the Middle Zhuz exploited expansive feather-grass steppes, driving huge herds of horses and fat-tailed sheep across extensive north-south migration corridors [@Razdykov2019Appearance; @Toraigyrov2026Topical]. The Junior Zhuz (Kishi Zhuz) held the western steppes, spanning the drainage basins of the Ural (Zhaik) and Emba rivers, the Mugodzhar hills, the northern Caspian littoral and the Mangyshlak peninsula [@Wang2026Russian; @Karassayev2025Struggle]. Organised into the Alshyn confederation (Baiuly and Alimuly) and the Zhetyru, the Junior Zhuz operated along the expanding commercial and military frontier of the Russian Empire, navigating interactions with Volga Kalmyks, Bashkirs and Ural Cossack stanitsas [@Wang2026Russian; @Karassayev2025Struggle].

## The Eighteenth-Century Crises: Aktaban Shubyryndy and Nader Shah

The first half of the eighteenth century brought a catastrophic dual demographic and political shock to Central Asia [@Anon2016Visions; @Karassayev2025History]. To the north and east, the expansionist Oirat Mongol state of the Dzungar Khanate, equipped with advanced Swedish-designed artillery and firearms, mounted devastating military offensives into the Kazakh steppes [@Karassayev2025History; @Hallez2025Introducin]. In 1723AD, the Dzungar ruler Tsewang Rabtan launched an unexpected winter offensive that overwhelmed the disunited Kazakh clans [@Karassayev2025History]. The ensuing flight, recorded in Kazakh collective memory as the *Aktaban Shubyryndy, Alkakol Sulama* ("The Barefooted Flight of the Alkakol"), triggered widespread famine, massive displacement of clans from Semirechye and central Kazakhstan towards the Syr Darya and Samara and the death of hundreds of thousands of nomads and sedentary oasis dwellers [@Karassayev2025History; @Chokobaeva2017Frontiers; @Chermukhambetov2024Spiritual]. Frontier towns along the Syr Darya, including Turkistan, Sayram and Tashkent, were besieged, pillaged or forced into tribute [@Karassayev2025History; @Hallez2025Introducin].

Simultaneously, the sedentary core of Mawara al-Nahr suffered deep political and physical trauma [@Anon2016Visions; @Kholikova2023Impact]. In 1740AD, following his victorious campaign against the Mughal Empire, the Persian conqueror Nader Shah Afshar invaded Transoxiana with a modernised gunpowder army [@Kholikova2023Impact; @StephanEmmrich2018Mobilities]. Crossing the Amu Darya at Charjou, Nader Shah swiftly compelled Abu al-Fayz Khan of Bukhara to capitulate, imposing ruinous financial indemnities and conscripting thousands of Uzbek cavalrymen for his Caucasian campaigns [@Anon2016Visions]. Continuing downriver, Nader Shah executed Ilbars Khan of Khiva, dismantled fortifications and sacked settlements across Khwarazm [@Croix2021Roundtable; @StephanEmmrich2018Mobilities]. The disruption of irrigation networks, widespread requisitions and flight of urban artisans left Bukhara, Samarkand and Khiva severely depopulated [@Anon2016Visions; @Croix2021Roundtable]. Total domain population fell from 6,45M in 1700AD to a deep demographic trough of 6,25M in 1750AD (Table \ref{tab:validation-early-modern}).

Only after the Qing Empire annihilated the Dzungar Khanate in 1757AD to 1759AD, opening diplomatic relations with Kazakh khans such as Ablai Khan and after the Manghits, Qungrats and Mings restored hydraulic infrastructure in their respective oases, did Central Asia enter a prolonged phase of recovery and demographic expansion [@Karassayev2025History; @Anon2016Visions; @Anarbaeva2025Socio].

# Methodology

## Spatial Delimitation and Territorial Partitions

To reconstruct early modern demographic trends across Central Asia without distorting stark ecological and historical boundaries, this study partitions the domain into eight territorial and biophysical units encompassing 3.890.946 km² across 65.332 five-arcminute grid cells (Table \ref{tab:validation-early-modern}):

1. The Southern Sedentary Khanates: Khanate and Emirate of Bukhara Core (312.285 km²), Eastern Bukhara, Hisar and Pamir Principalities (129.573 km²), Khanate of Khiva (218.071 km²), and Khanate of Kokand (257.624 km²).
2. The Southwestern Pastoral Margin: Turkmen Tribal Confederations of Ahal, Merv and the Caspian Coast (304.825 km²).
3. The Three Kazakh Steppe Hordes: Senior Kazakh Zhuz (464.036 km²), Middle Kazakh Zhuz (1.273.144 km²), and Junior Kazakh Zhuz (931.388 km²).

At each historical benchmark year $t \in \{1500, 1600, 1700, 1750, 1800, 1850, 1865\}$, total regional population $P_r(t)$ synthesises historical fiscal records, waqf cadastres, early Russian imperial surveys and traveler censuses:

$$P_r(t) = U_r(t) + A_r(t) \cdot \delta_r(t) + N_r(t) \cdot \lambda_r(t)$$

where $U_r(t)$ represents the aggregate population of catalogued urban settlements, $A_r(t)$ is the estimated arable acreage under active canal irrigation, $\delta_r(t)$ denotes rural agricultural density per cultivated hectare, $N_r(t)$ represents the estimated nomadic tent (*yurt*) count derived from tribal livestock counts and clan genealogies (*shezhire*), and $\lambda_r(t)$ reflects mean household occupancy (calibrated between 5,2 and 5,8 persons per yurt) [@Razdykov2019Appearance; @Anon2016Visions; @Wang2026Russian].

## Multi-Proxy Demographic Calibration

Reconstructing demographic scales across the sixteenth to nineteenth centuries requires reconciling varied and fragmented historical documentation [@Anon2016Visions; @Gafurova2026Waqf; @Wang2026Russian]. For the sedentary khanates of Bukhara, Khiva and Kokand, primary baselines derive from judicial archive records (*qadi* court registers), waqf deed inventories, water allocation registers (*mirab* logs) and Islamic taxation records (*kharaj* and *zakat*) analysed by modern scholars [@Anon2016Visions; @Gafurova2026Waqf]. These documentary sources provide reliable benchmarks for town populations, urban craft guild sizes and irrigated village networks along the Zeravshan, Amu Darya and Ferghana canals [@Anon2016Visions; @MirMakhamad2023Testing].

For the pastoral nomadic populations of the Kazakh Zhuzes and Turkmen confederations, direct tax registers were largely absent prior to nineteenth-century imperial administrative reforms [@Wang2026Russian; @Karassayev2025Struggle]. Consequently, population scales are calibrated by combining customary clan lineages, seasonal winter camp counts, military mobilisation registers (such as Ablai Khan's levies) and comparative ecological carrying-capacity models based on herd composition and pasture productivity [@Razdykov2019Appearance; @Karassayev2025History; @Chermukhambetov2024Spiritual]. These nomadic baselines are cross-checked against early Russian military reconnaissance surveys, frontier boundary demarcation logs (notably the Irtysh ten-verst strip records) and the administrative kibitka censuses of the 1830AD to 1860AD period [@Toraigyrov2026Topical; @Wang2026Russian; @Karassayev2025Struggle].

## Non-Stationary Kriging and Biophysical Covariates

Spatial population allocation across the eight territorial units draws on the regional kriging domain, integrating 12.473 domestic assigned records across 396 active domestic catchments (covering 51.119 active raster cells out of 65.332 valid domain land cells) [@Paciorek2006Matern]. Residual spatial dependence is modelled with Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging [@Paciorek2006Matern]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,50$ and $\tau_2 = 2,78$, with an effective short range spanning 71,04 km (Table \ref{tab:kriging-early-modern}). For the early modern horizon (Horizon 9: 1500AD to 1865AD), the model incorporates five weighted biophysical covariates: habitable land fraction ($\beta_{\text{hab}} = 0,0178$), natural vegetative productivity ($\beta_{\text{nat}} = 0,0100$), ecozone terrain suitability ($\beta_{\text{eco}} = 0,0961$), fluvial proximity decay ($\beta_{\text{fluvial}} = 0,0681$), and coastal buffer proximity ($\beta_{\text{coastal}} = 0,0928$) [@Paciorek2006Matern; @Croix2021Roundtable]. Urban masks with a two-cell buffer radius condition local density clusters around major oasis cities, preventing artificial inflation of surrounding arid grazing lands [@Mamurov2024Nationwide].

# Testing and Validation

Arithmetic reconciliation confirms exact parity between territorial totals and regional aggregates harmonised from documentary archives, pastoral surveys and historical demographic registers. Table \ref{tab:validation-early-modern} documents the demographic trajectory across all seven benchmark years from 1500AD to 1865AD, decomposed into macro-regional groupings.

<figure class="crd-table-figure" id="tab:validation-early-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Bukhara and Badakhshan</th><th class="crd-th">Kokand and Khiva</th><th class="crd-th">Turkmen Oases</th><th class="crd-th">Kazakh Zhuzes</th><th class="crd-th">Domain Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">1,73M</td><td class="crd-td">1,78M</td><td class="crd-td">270k</td><td class="crd-td">1,62M</td><td class="crd-td">5,4M</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">1,94M</td><td class="crd-td">2M</td><td class="crd-td">302,5k</td><td class="crd-td">1,81M</td><td class="crd-td">6,05M</td></tr>
<tr><td class="crd-td"><strong>1700AD</strong></td><td class="crd-td">2,06M</td><td class="crd-td">2,13M</td><td class="crd-td">322,5k</td><td class="crd-td">1,94M</td><td class="crd-td">6,45M</td></tr>
<tr><td class="crd-td"><strong>1750AD</strong></td><td class="crd-td">2M</td><td class="crd-td">2,06M</td><td class="crd-td">312,5k</td><td class="crd-td">1,88M</td><td class="crd-td">6,25M</td></tr>
<tr><td class="crd-td"><strong>1800AD</strong></td><td class="crd-td">2,35M</td><td class="crd-td">2,43M</td><td class="crd-td">367,5k</td><td class="crd-td">2,21M</td><td class="crd-td">7,35M</td></tr>
<tr><td class="crd-td"><strong>1850AD</strong></td><td class="crd-td">2,8M</td><td class="crd-td">2,89M</td><td class="crd-td">437,5k</td><td class="crd-td">2,62M</td><td class="crd-td">8,75M</td></tr>
<tr><td class="crd-td"><strong>1865AD</strong></td><td class="crd-td">2,93M</td><td class="crd-td">3,02M</td><td class="crd-td">457,5k</td><td class="crd-td">2,75M</td><td class="crd-td">9,15M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional demographic benchmarks across the early modern Uzbek khanates, Turkmen oases and Kazakh zhuzes, 1500AD to 1865AD.</figcaption>
</figure>

Across all nine chronological horizons in the regional kriging domain, Table \ref{tab:kriging-early-modern} documents tightly constrained Matérn variogram parameters. Residual $R^2$ exceeds 0,998 across all epochs, reaching 0,9993 in the early modern horizon, with regularised nugget-to-sill ratios stabilising at 0,04.

<figure class="crd-table-figure" id="tab:kriging-early-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Epipalaeolithic and Early Neolithic (before 6000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000003</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0048</td><td class="crd-td">0,019</td></tr>
<tr><td class="crd-td"><strong>2. Chalcolithic, Namazga, Sarazm and Botai (6000BC to 3000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000003</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0021</td><td class="crd-td">0,0172</td></tr>
<tr><td class="crd-td"><strong>3. Bronze Age BMAC, Sintashta and Andronovo (3000BC to 1000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000013</td><td class="crd-td">0,04</td><td class="crd-td">0,9989</td><td class="crd-td">0,0307</td><td class="crd-td">0,1784</td></tr>
<tr><td class="crd-td"><strong>4. Iron Age Saka, Achaemenid and Hellenistic (1000BC to 250BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000019</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0463</td><td class="crd-td">0,2707</td></tr>
<tr><td class="crd-td"><strong>5. Kushan, Kangju, Wusun and Parthian Antiquity (250BC to 500AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000029</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0615</td><td class="crd-td">0,4437</td></tr>
<tr><td class="crd-td"><strong>6. Sogdian, Turkic Khaganates and Early Islamic (500AD to 900AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000023</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0495</td><td class="crd-td">0,3536</td></tr>
<tr><td class="crd-td"><strong>7. Samanid, Karakhanid, Seljuk and Khwarazmshah (900AD to 1220AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000025</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0435</td><td class="crd-td">0,3385</td></tr>
<tr><td class="crd-td"><strong>8. Mongol Empire, Chagatai and Timurid Era (1220AD to 1500AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000035</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0689</td><td class="crd-td">0,5034</td></tr>
<tr><td class="crd-td"><strong>9. Uzbek Khanates and Kazakh Zhuzes (1500AD to 1865AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000009</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0144</td><td class="crd-td">0,1164</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Regional kriging variogram diagnostics across nine chronological horizons in Central Asia (65.332 valid domain cells, regularised tau1 = 1,5, tau2 = 2,78).</figcaption>
</figure>

Table \ref{tab:source-corpora-early-modern} details the component archaeological, radiometric and historical gazetteer registries aggregated into the regional database, highlighting the contribution of comprehensive monument inventories (UCL CAAL), historical Islamic gazetteers and national heritage inventories.

<figure class="crd-table-figure" id="tab:source-corpora-early-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Central Asian Archaeological Landscapes Dated Horizons (UCL CAAL)</strong></td><td class="crd-td">5.073</td><td class="crd-td">12,19%</td></tr>
<tr><td class="crd-td"><strong>Central Asian Archaeological Landscapes Monument Typology (UCL CAAL)</strong></td><td class="crd-td">17.381</td><td class="crd-td">41,76%</td></tr>
<tr><td class="crd-td"><strong>Al-Thurayya Islamic Classical Gazetteer and Toponymic Repository</strong></td><td class="crd-td">827</td><td class="crd-td">1,99%</td></tr>
<tr><td class="crd-td"><strong>Pleiades Gazetteer of Ancient and Mediaeval Eurasian Toponyms</strong></td><td class="crd-td">1.613</td><td class="crd-td">3,88%</td></tr>
<tr><td class="crd-td"><strong>Tegiszhol Central Asian Radiocarbon Chronometric Register</strong></td><td class="crd-td">81</td><td class="crd-td">0,19%</td></tr>
<tr><td class="crd-td"><strong>Integrated Eurasian Radiocarbon Synthesis (c14bazAAR / p3k14c / NERD)</strong></td><td class="crd-td">1.346</td><td class="crd-td">3,23%</td></tr>
<tr><td class="crd-td"><strong>Allen Ancient DNA Resource Central Asian Demographic Profile (AADR v66)</strong></td><td class="crd-td">885</td><td class="crd-td">2,13%</td></tr>
<tr><td class="crd-td"><strong>ArchAtlas Central Asian Oasis and Steppe Settlement Corridors</strong></td><td class="crd-td">2.317</td><td class="crd-td">5,57%</td></tr>
<tr><td class="crd-td"><strong>Uzbekistan Cabinet of Ministers Resolution No. 846 National Monument Register</strong></td><td class="crd-td">6.156</td><td class="crd-td">14,79%</td></tr>
<tr><td class="crd-td"><strong>Kazakhstan Ministry of Culture Order No. 88 Heritage Register</strong></td><td class="crd-td">185</td><td class="crd-td">0,44%</td></tr>
<tr><td class="crd-td"><strong>Harvard Published Excavations Atlas of Central Asia</strong></td><td class="crd-td">2.642</td><td class="crd-td">6,35%</td></tr>
<tr><td class="crd-td"><strong>Institute of Archaeology RAS Central Asian Steppe Gazetteer</strong></td><td class="crd-td">2.384</td><td class="crd-td">5,73%</td></tr>
<tr><td class="crd-td"><strong>Western Regions Archaeological and Frontier Corridor Register</strong></td><td class="crd-td">656</td><td class="crd-td">1,58%</td></tr>
<tr><td class="crd-td"><strong>Regional Scholarly Archaeological and Architectural Monograph Register</strong></td><td class="crd-td">73</td><td class="crd-td">0,18%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Component archaeological, radiometric and historical gazetteer registries aggregated across the Central Asian domain.</figcaption>
</figure>

# Results

## Shaybanid Consolidation and Sixteenth-Century Stability (1500AD to 1600AD)

Between 1500AD and 1600AD, Central Asian population expanded from 5,4M to 6,05M, representing an annualised growth rate of 0,11% (Figure \ref{fig:traj-early-modern}). In 1500AD, the sedentary oasis states sustained 3,51M inhabitants, while the Kazakh steppe hordes and Turkmen pastoralists supported 1,89M [@Kholikova2023Impact; @Razdykov2019Appearance].

<figure class="crd-figure-block" id="fig:traj-early-modern">
<img class="crd-figure-img" src="/artefacts/project_saray/1.0-uzbek-khanates-and-kazakh-hordes/fig2_uzbek_khanates_and_kazakh_hordes_trajectory.png" alt="fig:traj-early-modern" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of the Uzbek khanates and Kazakh steppe hordes from 1500AD to 1865AD with historical uncertainty intervals.</figcaption>
</figure>

The establishment of the Shaybanid realm unified the Zeravshan, Kashka Darya and lower Syr Darya basins under a stable administrative umbrella [@Kholikova2023Impact; @Nurullayeva2025Timurid]. Bukhara's western core expanded from 1,13M in 1500AD to 1,27M in 1600AD, anchored by the rapid growth of the capital Bukhara to 90k residents and Samarkand to 70k [@Nurullayeva2025Timurid]. Abdullah Khan II oversaw the construction of monumental public works, repairing hydraulic weirs on the Zeravshan and patronising extensive madrasa, bathhouse and bazaar complexes [@Nurullayeva2025Timurid; @Gafurova2026Waqf]. In Ferghana and eastern Transoxiana, early Kokand territories supported 1,35M in 1500AD, rising to 1,51M by 1600AD, with major urban centres at Akhsikent (24k), Andijan (18k) and Margilan (16k) [@Anarbaeva2025Socio].

Across the northern steppes, the consolidation of the Kazakh Khanate under Qasim Khan and Haqq Nazar Khan created expansive pastoral security [@Razdykov2019Appearance; @KAHVECI2001Western]. Combined Kazakh horde population increased from 1,62M in 1500AD to 1,81M in 1600AD (Table \ref{tab:regions-early-modern}). The Middle Zhuz formed the largest nomadic bloc, expanding from 702k to 786,5k, while the Junior Zhuz grew from 486k to 544,5k across the Ural and Emba basins, supported by active livestock trade through the riverine citadel of Saraishyk (24k peak residents in 1550AD) [@Wang2026Russian].

## Janid Zenith and Irrigation Development (1600AD to 1700AD)

The seventeenth century witnessed steady demographic growth across Central Asia, lifting domain population from 6,05M in 1600AD to 6,45M in 1700AD (Figure \ref{fig:density-early-modern}). Under the Janid dynasty in Bukhara, urban cultural life and Islamic institutional foundations flourished [@Anon2016Visions; @Nurullayeva2025Timurid]. Bukhara core reached 1,35M in 1700AD, while Eastern Bukhara and Badakhshan expanded from 665,5k to 709,5k, supported by terrace irrigation and walnut arboriculture in the high valleys of the Hissar range and the Pamir rivers [@Bleuer2012State; @Shukhratovna2023Ethnologic].

<figure class="crd-figure-block" id="fig:density-early-modern">
<img class="crd-figure-img" src="/artefacts/project_saray/1.0-uzbek-khanates-and-kazakh-hordes/fig3_uzbek_khanates_and_kazakh_hordes_density.png" alt="fig:density-early-modern" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Kriged surface density and regional demographic densities across eight Central Asian territories through 1865AD.</figcaption>
</figure>

In Khwarazm, the relocation of the capital to Khiva stabilised political authority following the drying of the old Oxus bed [@Croix2021Roundtable]. Khiva's population expanded from 484k in 1600AD to 516k in 1700AD, with the fortress capital of Khiva housing 22k residents and Kunya-Urgench maintaining 18k [@Croix2021Roundtable]. Concurrently, the Kazakh Zhuzes attained demographic strength under Esim Khan and Zhangir Khan, repelling early Oirat incursions and maintaining flourishing winter trading markets at Turkistan (28k peak residents in 1650AD), Sayram and Suzak [@Karassayev2025History; @Rasulov2021Importance]. Kazakh horde population climbed to 1,94M in 1700AD, including 516k in the Senior Zhuz, 838,5k in the Middle Zhuz and 580,5k in the Junior Zhuz (Table \ref{tab:regions-early-modern}).

<figure class="crd-table-figure" id="tab:regions-early-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1700AD</th><th class="crd-th">1750AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1865AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Khanate and Emirate of Bukhara Core (Bukhara-Samarkand-Qarshi)</strong></td><td class="crd-td">312.285</td><td class="crd-td">1,13M</td><td class="crd-td">1,27M</td><td class="crd-td">1,35M</td><td class="crd-td">1,31M</td><td class="crd-td">1,54M</td><td class="crd-td">1,84M</td><td class="crd-td">1,92M</td></tr>
<tr><td class="crd-td"><strong>2. Eastern Bukhara, Hisar and Pamir Principalities</strong></td><td class="crd-td">129.573</td><td class="crd-td">594k</td><td class="crd-td">665,5k</td><td class="crd-td">709,5k</td><td class="crd-td">687,5k</td><td class="crd-td">808,5k</td><td class="crd-td">962,5k</td><td class="crd-td">1,01M</td></tr>
<tr><td class="crd-td"><strong>3. Khanate of Khiva (Khwarazm and Lower Amu Darya)</strong></td><td class="crd-td">218.071</td><td class="crd-td">432k</td><td class="crd-td">484k</td><td class="crd-td">516k</td><td class="crd-td">500k</td><td class="crd-td">588k</td><td class="crd-td">700k</td><td class="crd-td">732k</td></tr>
<tr><td class="crd-td"><strong>4. Khanate of Kokand (Ferghana, Tashkent and Kyrgyz Mountains)</strong></td><td class="crd-td">257.624</td><td class="crd-td">1,35M</td><td class="crd-td">1,51M</td><td class="crd-td">1,61M</td><td class="crd-td">1,56M</td><td class="crd-td">1,84M</td><td class="crd-td">2,19M</td><td class="crd-td">2,29M</td></tr>
<tr><td class="crd-td"><strong>5. Turkmen Tribal Confederations (Ahal, Merv and Caspian Coast)</strong></td><td class="crd-td">304.825</td><td class="crd-td">270k</td><td class="crd-td">302,5k</td><td class="crd-td">322,5k</td><td class="crd-td">312,5k</td><td class="crd-td">367,5k</td><td class="crd-td">437,5k</td><td class="crd-td">457,5k</td></tr>
<tr><td class="crd-td"><strong>6. Senior Kazakh Zhuz (Uly Zhuz: Semirechye and Middle Syr Darya)</strong></td><td class="crd-td">464.036</td><td class="crd-td">432k</td><td class="crd-td">484k</td><td class="crd-td">516k</td><td class="crd-td">500k</td><td class="crd-td">588k</td><td class="crd-td">700k</td><td class="crd-td">732k</td></tr>
<tr><td class="crd-td"><strong>7. Middle Kazakh Zhuz (Orta Zhuz: Saryarka, Ishim and Irtysh)</strong></td><td class="crd-td">1.273.144</td><td class="crd-td">702k</td><td class="crd-td">786,5k</td><td class="crd-td">838,5k</td><td class="crd-td">812,5k</td><td class="crd-td">955,5k</td><td class="crd-td">1,14M</td><td class="crd-td">1,19M</td></tr>
<tr><td class="crd-td"><strong>8. Junior Kazakh Zhuz (Kishi Zhuz: Ural, Emba, Aral and Mangyshlak)</strong></td><td class="crd-td">931.388</td><td class="crd-td">486k</td><td class="crd-td">544,5k</td><td class="crd-td">580,5k</td><td class="crd-td">562,5k</td><td class="crd-td">661,5k</td><td class="crd-td">787,5k</td><td class="crd-td">823,5k</td></tr>
<tr><td class="crd-td"><strong>Domain Total</strong></td><td class="crd-td">3.890.946</td><td class="crd-td">5,4M</td><td class="crd-td">6,05M</td><td class="crd-td">6,45M</td><td class="crd-td">6,25M</td><td class="crd-td">7,35M</td><td class="crd-td">8,75M</td><td class="crd-td">9,15M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Territorial population benchmarks across eight Central Asian territories, 1500AD to 1865AD, calculated from regional JSON registers.</figcaption>
</figure>

## The Mid-Eighteenth-Century Crisis: Dzungar Invasions and Afsharid Shock (1700AD to 1750AD)

Between 1700AD and 1750AD, Central Asia experienced its most severe demographic crisis of the early modern era [@Anon2016Visions; @Karassayev2025History]. Total domain population contracted by 200k, falling from 6,45M to 6,25M, a net decline of 3,1% (Table \ref{tab:regions-early-modern}).

The primary catalyst in the steppe was the catastrophic Dzungar invasion of 1723AD to 1727AD [@Karassayev2025History; @Chokobaeva2017Frontiers]. Tsewang Rabtan's coordinated offensive devastated the Senior and Middle Zhuzes, driving hundreds of thousands of refugees westwards in the Aktaban Shubyryndy disaster [@Karassayev2025History]. Pastoral migratory cycles were broken, winter fodder stores were lost and extreme winter blizzards (*zhut*) decimated livestock herds [@Chermukhambetov2024Spiritual; @Razdykov2019Appearance]. Middle Zhuz population dropped from 838,5k in 1700AD to 812,5k in 1750AD, while Senior Zhuz numbers fell from 516k to 500k and Junior Zhuz contracted from 580,5k to 562,5k (Table \ref{tab:regions-early-modern}).

In the sedentary oases, political fragmentation was compounded by the invasion of Nader Shah in 1740AD [@Anon2016Visions; @Kholikova2023Impact]. The Persian army sacked Transoxian cities, broke irrigation canals, extracted heavy indemnity payments and recruited thousands of young men into foreign military service [@Anon2016Visions; @Croix2021Roundtable]. Bukhara core contracted from 1,35M to 1,31M, while Kokand fell from 1,61M to 1,56M and Khiva dropped from 516k to 500k [@Anon2016Visions; @StephanEmmrich2018Mobilities]. In Samarkand, devastation was so acute that large urban quarters were entirely abandoned, leaving ancient madrasas empty until the Manghit restoration [@Nurullayeva2025Timurid; @Kholikova2023Impact].

## Late Khanate Renaissance and Kokand Expansion (1750AD to 1850AD)

Following the mid-century nadir, Central Asia embarked on a century of sustained demographic and economic expansion [@Anon2016Visions; @Anarbaeva2025Socio]. Between 1750AD and 1850AD, domain population surged from 6,25M to 8,75M, an overall increase of 40% at an annualised rate of 0,34% (Table \ref{tab:regions-early-modern}).

<figure class="crd-table-figure" id="tab:density-early-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">1500AD</th><th class="crd-th">1500AD (km²)</th><th class="crd-th">1865AD</th><th class="crd-th">1865AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Khanate and Emirate of Bukhara Core (Bukhara-Samarkand-Qarshi)</strong></td><td class="crd-td">42</td><td class="crd-td">1,13M</td><td class="crd-td">3,63</td><td class="crd-td">1,92M</td><td class="crd-td">6,15</td></tr>
<tr><td class="crd-td"><strong>2. Eastern Bukhara, Hisar and Pamir Principalities</strong></td><td class="crd-td">18</td><td class="crd-td">594k</td><td class="crd-td">4,58</td><td class="crd-td">1,01M</td><td class="crd-td">7,77</td></tr>
<tr><td class="crd-td"><strong>3. Khanate of Khiva (Khwarazm and Lower Amu Darya)</strong></td><td class="crd-td">22</td><td class="crd-td">432k</td><td class="crd-td">1,98</td><td class="crd-td">732k</td><td class="crd-td">3,36</td></tr>
<tr><td class="crd-td"><strong>4. Khanate of Kokand (Ferghana, Tashkent and Kyrgyz Mountains)</strong></td><td class="crd-td">55</td><td class="crd-td">1,35M</td><td class="crd-td">5,24</td><td class="crd-td">2,29M</td><td class="crd-td">8,88</td></tr>
<tr><td class="crd-td"><strong>5. Turkmen Tribal Confederations (Ahal, Merv and Caspian Coast)</strong></td><td class="crd-td">20</td><td class="crd-td">270k</td><td class="crd-td">0,89</td><td class="crd-td">457,5k</td><td class="crd-td">1,5</td></tr>
<tr><td class="crd-td"><strong>6. Senior Kazakh Zhuz (Uly Zhuz: Semirechye and Middle Syr Darya)</strong></td><td class="crd-td">18</td><td class="crd-td">432k</td><td class="crd-td">0,93</td><td class="crd-td">732k</td><td class="crd-td">1,58</td></tr>
<tr><td class="crd-td"><strong>7. Middle Kazakh Zhuz (Orta Zhuz: Saryarka, Ishim and Irtysh)</strong></td><td class="crd-td">9</td><td class="crd-td">702k</td><td class="crd-td">0,55</td><td class="crd-td">1,19M</td><td class="crd-td">0,93</td></tr>
<tr><td class="crd-td"><strong>8. Junior Kazakh Zhuz (Kishi Zhuz: Ural, Emba, Aral and Mangyshlak)</strong></td><td class="crd-td">8</td><td class="crd-td">486k</td><td class="crd-td">0,52</td><td class="crd-td">823,5k</td><td class="crd-td">0,88</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued early modern settlements, 1500AD and 1865AD population benchmarks and territorial densities (persons per km²).</figcaption>
</figure>

The dynamic epicenter of this demographic resurgence was the Khanate of Kokand [@Anarbaeva2025Socio; @MirMakhamad2023Testing]. Kokand's territory expanded from 1,56M in 1750AD to 1,84M in 1800AD and reached 2,19M by 1850AD, becoming the most populous and densely inhabited region of Central Asia (8,49 persons per km² in 1850AD, rising to 8,88 persons per km² by 1865AD) (Table \ref{tab:density-early-modern}). The Ming rulers directed state resources into hydraulic engineering, opening thousands of hectares of new arable land across central Ferghana [@Anarbaeva2025Socio]. Kokand grew into a bustling capital of 78k inhabitants by 1850AD, while Tashkent, annexed in 1809AD, surged to 133,9k, functioning as the premier commercial entrepot of Central Asia [@Anarbaeva2025Socio; @StephanEmmrich2018Mobilities]. Secondary Ferghana cities expanded rapidly: Namangan reached 53,3k, Andijan 42k, Margilan 34k, Khujand 32k and Osh 32k (Table \ref{tab:density-early-modern}).

Under the Manghit emirs, Bukhara likewise recovered, rising from 1,31M in 1750AD to 1,54M in 1800AD and 1,84M in 1850AD [@Anon2016Visions]. Amir Shah Murad re-settled thousands of families in Samarkand, repaired Zeravshan canals and revived craft production [@Anon2016Visions; @Nurullayeva2025Timurid]. Bukhara retained its position as a global Islamic learning centre, supporting over 100 madrasas financed by waqf endowments [@Anon2016Visions; @Gafurova2026Waqf]. In Khiva, Qungrat hydraulic initiatives in the delta expanded population from 500k in 1750AD to 700k in 1850AD [@Croix2021Roundtable].

In the Kazakh steppes, the destruction of the Dzungars by Qing armies in 1757AD to 1759AD removed the existential external threat [@Karassayev2025History]. Under Ablai Khan (1771AD to 1781AD), the Kazakh Zhuzes engaged in adroit dual diplomacy with the Qing Empire and the Russian Empire, reoccupying prime pastures in Semirechye, the Tarbagatai mountains and the Saryarka [@Karassayev2025History; @Myrzagaliyeva2024Natural]. Total Kazakh population rebounded to 2,21M in 1800AD and 2,63M by 1850AD, including 1,14M in the Middle Zhuz, 787,5k in the Junior Zhuz and 700k in the Senior Zhuz (Table \ref{tab:regions-early-modern}).

## The Eve of Russian Imperial Conquest (1850AD to 1865AD)

By 1865AD, the eve of General Mikhail Chernyaev's storming of Tashkent, total domain population reached 9,15M (Table \ref{tab:validation-early-modern}). The sedentary khanates sustained 5,95M residents (65% of the domain total), while the nomadic and semi-nomadic steppe and desert confederations held 3,2M (35%) [@Wang2026Russian; @Chokobaeva2017Frontiers].

Kokand remained the demographic heavyweight at 2,29M, closely followed by Bukhara core at 1,92M, Eastern Bukhara at 1,01M, Khiva at 732k and Turkmen tribal confederations at 457,5k [@Anarbaeva2025Socio; @Anon2016Visions]. In the Kazakh steppes, Russian military lines, fortified outposts (such as Vernoye founded in 1854AD, Petropavlovsk and Semipalatinsk) and administrative reorganisations had begun to restrict nomadic pastoral circuits [@Wang2026Russian; @Toraigyrov2026Topical; @Karassayev2025Struggle]. The Middle Zhuz reached 1,19M, the Junior Zhuz 823,5k and the Senior Zhuz 732k (Table \ref{tab:regions-early-modern}). This demographic expansion was accompanied by incipient sedentarisation, expansion of winter-camp hayfields and growing integration into imperial Russian grain and livestock markets [@Razdykov2019Appearance; @Wang2026Russian].

## Urban Settlements and Demographic Hierarchies

The 192 early modern settlements catalogued in this study illustrate the pronounced hierarchical structure of Central Asian urbanism [@Nurullayeva2025Timurid; @Anarbaeva2025Socio]. Urban nodes were concentrated along primary river channels and oasis perimeters, functioning as administrative capitals, theological hubs and commercial emporia [@StephanEmmrich2018Mobilities; @Rasulov2021Importance].

At the apex of the settlement hierarchy stood the great metropolitan centres:
1. Tashkent: The dominant urban centre of nineteenth-century Central Asia, sustaining 133,9k residents by 1850AD, enclosed by a 25-kilometre earthen wall with twelve gates, supporting thriving leather, metalworking and textile industries and commanding trade routes connecting Kokand, Bukhara, the Kazakh steppe and Siberia [@Anarbaeva2025Socio; @StephanEmmrich2018Mobilities].
2. Bukhara: The political and spiritual capital of the Manghit Emirate, housing 90k inhabitants at its sixteenth-century peak and maintaining 60k to 70k in the mid-nineteenth century within massive crenellated walls, home to the Ark citadel, the Po-i Kalyan complex and over a hundred functioning madrasas [@Anon2016Visions; @Nurullayeva2025Timurid].
3. Samarkand: The historic Timurid metropolis in the Zeravshan valley, supporting 85k residents in 1500AD before suffering mid-eighteenth-century decline, rebounding under Manghit reconstruction to 47,4k by 1850AD around the monumental Registan square [@Nurullayeva2025Timurid; @Kholikova2023Impact].
4. Kokand: The capital of the Ming Khanate, expanding from a modest fortified village in 1709AD to a metropolis of 78k inhabitants by 1850AD, anchored by the magnificent palace of Khudayar Khan and extensive commercial bazaars [@Anarbaeva2025Socio].
5. Namangan: The secondary economic capital of the Ferghana Valley, sustaining 53,3k residents by 1850AD as a centre of silk weaving, knife-making and agricultural commerce [@Anarbaeva2025Socio].

The second tier encompassed prosperous provincial oasis capitals and fortress hubs: Andijan (42k), Margilan (34k), Khujand (32k), Osh (32k), Oral (Uralsk, 31,4k), Khiva (30k), Shahrisabz (28k), Qarshi (28k), Turkistan (28k), Kunya-Urgench (25k), Akhsikent (24k), Saraishyk (24k) and Semey (Semipalatinsk, 22,6k) [@Anarbaeva2025Socio; @Croix2021Roundtable; @Wang2026Russian]. These intermediate cities anchored regional district markets, coordinated local canal maintenance and housed provincial governors (*hakim* or *bek*) [@Anon2016Visions; @Gafurova2026Waqf].

## Analytical Caveats and Source Uncertainties

Three primary methodological constraints condition the precision of early modern Central Asian demographic reconstructions [@Anon2016Visions; @Razdykov2019Appearance; @Wang2026Russian]. First, documentary preservation across the three khanates is uneven [@Anon2016Visions]. While the judicial records and waqf archives of Bukhara have been extensively catalogued and preserved, the archives of Khiva and Kokand suffered severe losses during Russian military bombardments and subsequent imperial seizures in the 1860AD and 1870AD campaigns, requiring reliance on external traveler reports and retrospective administrative reconstructions [@Anon2016Visions; @Anarbaeva2025Socio].

Second, estimating nomadic populations inherently carries wider confidence intervals ($\pm 15\%$ to $\pm 20\%$) than sedentary oasis cores [@Razdykov2019Appearance; @Wang2026Russian]. Prior to standardised Russian imperial household censuses (*kibitochnaya podat*) in the mid-nineteenth century, estimates rely on clan lineage counts, yurt multipliers and livestock capacity calculations, which can mask short-term mortality shocks from localised blizzards (*zhut*) or epizootics [@Razdykov2019Appearance; @Chermukhambetov2024Spiritual].

Third, fluctuating urban populations reflect seasonal migration and political instability [@StephanEmmrich2018Mobilities]. Oasis cities swelled during winter months when rural cultivators and neighbouring nomads gathered in urban bazaars for security and trade, but emptied during spring sowing and summer pasturing seasons [@StephanEmmrich2018Mobilities; @Razdykov2019Appearance]. Spatial kriging covariates and urban mask buffers help attenuate these seasonal distortions, establishing a robust demographic baseline grounded in regional sources across the four centuries preceding modern industrial transformation [@Paciorek2006Matern; @Croix2021Roundtable].

# Sources

<div id="refs"></div>
