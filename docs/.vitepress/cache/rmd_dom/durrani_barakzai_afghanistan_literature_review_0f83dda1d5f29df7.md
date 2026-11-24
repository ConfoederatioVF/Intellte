---
title: "Durrani and Barakzai Afghanistan until 1919"
subtitle: "Oasis Agriculture, Tribal Polity and Demographic Growth from Ahmad Shah to Amanullah"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: durrani_barakzai_afghanistan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_durrani_barakzai_afghanistan_spatial.png"
hero_caption: "Subregional catchments, hydrological corridors and catalogued settlements across Durrani and Barakzai Afghanistan, 1747AD to 1919AD."
hero_label: "fig:hero-durrani-barakzai-afghanistan"
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

This study reconstructs the population history, subregional carrying capacities and urban hierarchy of Afghanistan from the coronation of Ahmad Shah Durrani at Kandahar in 1747AD to the restoration of full external sovereignty under Amanullah Khan in 1919AD. Across five macro-regional basins encompassing 641.887 km² (9.006 five-arcminute raster cells) within the modern borders of Afghanistan, total population nearly doubled over 172 years, climbing from 3,25M inhabitants in 1747AD to 3,75M in 1800AD, 4,36M in 1850AD, 5,4M in 1900AD and 6,28M by 1919AD, representing a cumulative expansion of 93,2% and an annual compound growth rate of 0,38%. Throughout the period, demographic weight concentrated sharply within snowmelt-fed river oases and subterranean karez belts rather than across the arid southern steppes or high Hindu Kush ridges. Kabul and the Eastern Provinces expanded from 980k to 2,05M inhabitants (+109,2%), consolidating political primacy after Timur Shah shifted the Durrani court from Kandahar to Kabul in 1775AD. Kandahar and Helmand doubled from 680k to 1,35M (+98,5%), Afghan Turkestan (Balkh and Badakhshan) rose from 640k to 1,28M (+100%) and Herat and the Western Provinces grew from 540k to 1,02M (+88,9%). By contrast, the Hazarajat and Central Highlands expanded modestly from 410k in 1747AD to 520k in 1850AD, suffered severe demographic arrest between 1850AD and 1900AD during Amir Abdur Rahman Khan's 1891AD to 1893AD military subjugation and recovered only to 580k by 1919AD (+41,5% overall). Spatial disaggregation pairs non-stationary Matérn ($\nu = 3/2$) kriging across 3.416 HANDBOOK domestic catchments and 592 regional archaeological records in Afghanistan with 75 catalogued settlements (Zipf $\alpha = 1,116$, $R^2 = 0,857$) and strictly mass-conserving pycnophylactic scaling across 355 modern Afghan ADM2 districts.

# Background

## Geography, Hydrological Oases and Karez Agriculture

Afghanistan's demographic geography is governed by relief and water rather than latitude [@Rahil2026Communicat; @Anonymous2015Rural]. Extending westward from the Pamir Knot, the Hindu Kush and Koh-i-Baba ranges bisect the country into an elevated central spine above 2.500 m flanked by four distinct drainage basins: the Kabul River system flowing eastward into the Indus, the Helmand and Arghandab rivers draining south-westward into the endorheic Sistan marshes, the Hari Rud and Murghab basins descending westward toward Herat and Merv and the Amu Darya (Oxus) piedmont receiving the Kokcha, Kunduz and Balkh rivers in the north [@Rahil2026Communicat; @Nourzhanov2013Tajikistan]. Roughly three-quarters of the 641.887 km² domain consists of rugged mountain pastures, stony reg desert or salt-crusted depressions incapable of supporting dense sedentary settlement without engineered irrigation [@Anonymous2015Rural; @Anonymous2000Understand].

Human numbers therefore clustered in two contrasting hydraulic regimes. Along the perennial snowmelt rivers of Kabul, Kohdaman, Jalalabad, Herat and the northern Balkh–Khulm–Kunduz piedmont, gravity-fed surface canals (*juy*) diverted spring meltwater across broad alluvial fans, sustaining double-cropped winter wheat, barley, rice, cotton, melons and orchards [@Lally2020Landscape; @Anonymous2000Understand; @Akbari2024Research]. In the drier piedmont aprons of Kandahar, Ghazni, Qalat and Farah, where seasonal streams ran dry by midsummer, agrarian communities depended on subterranean *karez* (*qanat*) galleries tunnelled into alluvial fans to tap mountain water tables without evaporative loss [@Lally2020Landscape; @Anonymous2015Rural]. Maintenance of *karez* shafts required continuous collective labour and political stability; whenever dynastic wars or punitive raids disrupted rural *mirab* (water-master) organisation, subterranean tunnels silted up within a decade and surrounding villages reverted to seasonal grazing [@Akbari2024Research; @Anonymous2000Understand].

Above the irrigated valley floors, semi-nomadic and fully nomadic pastoralists (*kuchi*), predominantly Ghilzai and Durrani Pashtuns, moved sheep and camel herds seasonally between winter pastures on the Indus plains or Sistan margins and summer alpine meadows across the central highlands [@Barfield2012Centraliza; @Lally2020Landscape; @Anonymous2015Rural]. This vertical symbiosis exchanged pastoral wool, clarified butter and pack transport for valley grain and bazaar ironware, binding highland pastures to lowland oasis towns even during periods of acute political fragmentation [@Barfield2012Centraliza; @Anonymous2000Understand].

## Ethno-Ecological Distribution: Pashtun, Tajik, Hazara and Uzbek Belts

Altitude, irrigation ecology and historical migration sorted Afghanistan's population into overlapping ethno-linguistic belts whose spatial boundaries remained remarkably persistent across the eighteenth and nineteenth centuries [@Fuoli2017Colonialis; @Anonymous2005Ethnoscape; @Barfield2012Centraliza]. Pashtun confederations formed the demographic majority across the southern and eastern crescent: Abdali (later Durrani) clans anchored the Kandahar–Helmand *karez* and river oases as well as the western Farah and Sabzawar plains, whereas Ghilzai confederations held the Ghazni–Kabul corridor and eastern pastoral routes, and eastern hill tribes populated the Sulaiman foothills and Ningarhar–Khost valleys [@Lally2018Beyond; @Khan2022Good; @Lally2020Landscape].

Persian-speaking Tajiks constituted the core sedentary peasantry and urban artisanry of the irrigated northern and western basins, predominating in Kabul, Kohdaman, Panjshir, Badakhshan and the Hari Rud oasis around Herat, where intensive horticulture and silk weaving supported high rural densities [@Anonymous2015Rural; @Nourzhanov2013Tajikistan; @MacLeod2020Iran]. Across the northern Oxus steppe between Meymaneh, Balkh, Khulm and Kunduz, Turkic Uzbeks and Turkmen combined irrigated oasis cultivation along the piedmont fans with horse and karakul sheep herding across the semi-arid loess plains [@Fitzhardinge1968Establishm; @Nourzhanov2013Tajikistan].

Between these lowland rings, Hazara and Chahar Aimaq agro-pastoralists occupied the cold, snowbound basins of the central Hindu Kush and Paropamisus—stretching from Bamyan and Behsud across Daykundi and Lal-wa-Sarjangal to Ghor [@Kakar1968Consolidat; @Fuoli2017Colonialis; @Anonymous2015Rural]. Isolated by winter snows that closed mountain passes for four to five months each year, the Hazarajat operated as a de facto autonomous highland refuge until the final decade of the nineteenth century, sustaining moderate densities through terraced spring wheat, barley and hardy upland pastoralism [@Kakar1968Consolidat; @Rahil2026Communicat]. In the forested eastern valleys of the Hindukush north of Jalalabad, Kafirs (modern Nuristanis) maintained independent acephalous communities until forcible conversion and incorporation in 1895AD to 1896AD [@Kakar1968Consolidat; @Yassari2012Sharia].

## Durrani Ascendancy and Barakzai Fragmentation (1747AD to 1863AD)

The political chronology of this chapter opens in 1747AD with the assassination of Nadir Shah Afshar and the election of Ahmad Khan Abdali—renamed Ahmad Shah Durrani—at Kandahar [@Lally2018Beyond; @Gill2026Struggle]. Inheriting Afsharid military cadres and treasury networks, Ahmad Shah forged an expansive empire stretching from Khorasan and Balkh across the Indus valley to Kashmir, Punjab and Delhi [@Lally2018Beyond; @Mahajan2025Kashmir; @Khan2022Good]. Within the Afghan heartland, imperial tribute financed the foundation of New Kandahar (Ahmad Shahi) on an orthogonal plan fed by Arghandab canals, while Peshawar and Kabul functioned as alternating winter and summer administrative seats [@Lally2018Beyond; @Khan2022Good; @Bosworth2007Historic].

Under Ahmad Shah's successor Timur Shah (1772AD to 1793AD), rising Abdali tribal friction in Kandahar prompted the transfer of the royal capital to Kabul in 1775AD, permanently anchoring the state's fiscal and demographic centre of gravity in the Kabul–Jalalabad–Peshawar corridor [@Dzhandosova2023Reign; @Lally2018Beyond]. Timur Shah's son Zaman Shah (1793AD to 1800AD) struggled to preserve trans-Indus revenue bases against Sikh resurgence in Punjab and internal Sadozai succession rivalries [@Dzhandosova2023Reign; @Mahajan2025Kashmir]. After 1800AD, prolonged fratricidal civil wars shattered Durrani imperial unity: Kashmir fell to the Sikhs in 1819AD, Peshawar followed in 1834AD and the Afghan heartland fragmented into competing Barakzai (Muhammadzai) principalities centred on Kabul, Kandahar and Herat [@Khan2022Good; @Gill2026Struggle; @Barfield2012Centraliza].

Dost Muhammad Khan seized Kabul in 1826AD and gradually reconstructed a unified Barakzai emirate inside Afghanistan's contemporary boundaries [@Barfield2012Centraliza; @Yad2025State]. During his second reign (1842AD to 1863AD), he subdued the petty Uzbek khanates of Balkh, Khulm, Kunduz and Badakhshan between 1850AD and 1859AD, established Mazār-e Sharīf as the administrative hub of Afghan Turkestan and recovered Kandahar (1855AD) and Herat (1863AD) shortly before his death [@MacLeod2020Iran; @Barfield2012Centraliza]. Although civil conflict recurred during the succession crisis of 1863AD to 1869AD under Sher Ali Khan, the territorial framework of a single Kabul-centred Afghan state had largely crystallised [@Fuoli2017Colonialis; @Drephal2024Colonial].

## Anglo-Afghan Wars, Frontier Delimitation and the Iron Amir (1839AD to 1919AD)

External imperial rivalry between British India and Tsarist Russia imposed acute demographic and institutional shocks across nineteenth-century Afghanistan [@Morrison2013Twin; @Drephal2024Colonial]. During the First Anglo-Afghan War (1839AD to 1842AD), British-Indian forces occupied Kandahar, stormed Ghazni and installed Shah Shuja in Kabul [@Morrison2013Twin; @Honnen2013Securitizi]. Popular insurgency in November 1841 culminated in the annihilation of the retreating Kabul garrison in January 1842, followed by British punitive expeditions that burned Charikar, Istalif and Kabul's covered bazaar, inflicting severe local urban displacement across the Kohdaman and Kabul basins [@Morrison2013Twin; @Honnen2013Securitizi].

A generation later, the Second Anglo-Afghan War (1878AD to 1880AD) brought renewed British occupation of Jalalabad, Kabul and Kandahar, collapsing Sher Ali Khan's fledgling fiscal institutions and elevating Abdur Rahman Khan (1880AD to 1901AD) to the throne under British diplomatic suzerainty and subsidy [@Drephal2024Colonial; @Kakar1968Consolidat; @Fuoli2017Colonialis]. Known as the Iron Amir, Abdur Rahman broke regional tribal autonomy through systematic centralisation, permanent garrisons, codified statutory-sharia administration and state monopolies on trade [@Kakar1968Consolidat; @Yassari2012Sharia; @Barfield2012Centraliza].

Three state-directed demographic interventions defined his reign. First, between 1885AD and 1896AD, Abdur Rahman deported rebellious Ghilzai Pashtun clans and incentivised southern Pashtun colonists to settle across Afghan Turkestan and Badghis, permanently altering the ethno-demographic balance of the northern steppe and securing the newly delimited Oxus frontier [@Kakar1968Consolidat; @Fuoli2017Colonialis; @Fitzhardinge1968Establishm]. Second, after crushing Shinwari and Ghilzai rebellions, he waged a protracted three-year war of conquest against the Hazarajat (1891AD to 1893AD), deploying regular regiments and tribal levies that caused heavy battle and famine mortality, widespread enslavement of captives in Kabul markets and substantial Hazara flight to Quetta in British Baluchistan and Mashhad in Qajar Khorasan [@Kakar1968Consolidat; @Fuoli2017Colonialis; @MacLeod2020Iran]. Third, in 1895AD to 1896AD, Afghan forces conquered Kafiristan, integrating its valleys into the Kabul fiscal grid as Nuristan [@Kakar1968Consolidat].

Simultaneously, Anglo-Russian and Anglo-Afghan boundary commissions fixed Afghanistan's external perimeter: the Joint Afghan Boundary Commission delimited the north-west frontier from the Hari Rud to the Amu Darya between 1884AD and 1888AD [@Fitzhardinge1968Establishm; @Nourzhanov2013Tajikistan], while the 1893AD Durand Line partitioned eastern Pashtun borderlands between Kabul and British India [@Caron2016Sufism; @Lally2020Landscape]. Under Habibullah Khan (1901AD to 1919AD), relative internal peace, road construction and nascent small-scale manufacturing in Kabul sustained steady demographic recovery until Amanullah Khan's brief Third Anglo-Afghan War in May 1919 secured full diplomatic independence [@Gill2026Struggle; @Yad2025State; @Caron2016Sufism].

# Methodology

## Subregional Partition and Territorial Calibration

To evaluate internal demographic shifts without obscuring ecological barriers, HANDBOOK partitions Durrani and Barakzai Afghanistan into five hydrological and historical subregions totalling 641.887 km² across 9.006 five-arcminute grid cells:

1. Kabul and Eastern Provinces (64.700,7 km², 915 cells), encompassing the Kabul, Logar, Kohdaman, Panjshir, Jalalabad, Laghman, Kunar, Khost, Paktia and Nuristan valleys.
2. Kandahar and Helmand (271.841,3 km², 3.724 cells), spanning the Arghandab–Helmand river oases, Ghazni–Zabul *karez* corridor, Registan steppe and Farah–Sistan basin.
3. Afghan Turkestan (Balkh and Badakhshan, 158.740,2 km², 2.299 cells), covering the Amu Darya piedmont from Meymaneh and Andkhoy through Balkh, Mazār-e Sharīf, Khulm and Kunduz to the Kokcha valleys of Badakhshan.
4. Herat and Western Provinces (75.823,5 km², 1.071 cells), comprising the Hari Rud irrigated plain, Badghis and the western Murghab frontier.
5. Hazarajat and Central Highlands (70.781,3 km², 997 cells), encompassing Bamyan, Ghor, Daykundi, Behsud and the upper Helmand watershed.

Aggregate territorial population $P_r(t)$ at benchmark years $t \in \{1747, 1800, 1850, 1900, 1919\}$ integrates irrigated arable capacity, urban market multipliers and pastoral carrying capacity:

$$P_r(t) = A_r^{\text{irr}}(t) \cdot d_r^{\text{agr}}(t) + U_r(t) + N_r(t)$$

where $A_r^{\text{irr}}(t)$ represents actively irrigated valley and *karez* acreage, $d_r^{\text{agr}}(t)$ denotes rural agrarian density per irrigated unit, $U_r(t)$ captures nucleated bazaar and garrison populations calibrated from historical chronicles and nineteenth-century intelligence estimates, and $N_r(t)$ accounts for nomadic and semi-nomadic *kuchi* and highland pastoralists [@Anonymous2015Rural; @Anonymous2000Understand; @Kakar1968Consolidat].

## Subadministrative Disaggregation and Pycnophylactic Scaling

Across the wider HANDBOOK macro-region, historical census integration spans 29 documented historical subadministrative units (such as Russian Transcaucasian guberniyas, Ottoman vilayets and Egyptian mudiriyas) alongside 2.645 modern subadministrative polygons across 83 disaggregated years, audited across 66.308 unit-year checks with a global maximum unit relative error of 5,84e-08. For Afghanistan specifically prior to 1919AD, neither the Durrani chancellery nor the Barakzai emirate compiled surviving empire-wide cadastral household censuses; even Abdur Rahman Khan's tax and conscription registers (*daftar-i maliyat*) recorded revenue assessments and military quotas (*hasht-nafari*) rather than universal headcounts [@Kakar1968Consolidat; @Fuoli2017Colonialis]. Consequently, the regional historical subadministrative register contains zero pre-1919AD cadastral polygons for Afghanistan.

To anchor spatial allocation inside Afghanistan without distorting relief, disaggregation employs 355 modern Afghan ADM2 districts compiled from geoBoundaries [@Runfola2020GeoBoundaries] and matched to subnational enumerations for 1979, 2006 and 2020 (Table \ref{tab:subadmin-afg}). Backward pycnophylactic scaling preserves exact subregional population totals at each historical benchmark while redistributing rural mass along habitable river terraces, *karez* fans and historic bazaar corridors via metric-isotropic radial distance fields rather than uniform district averaging [@Runfola2020GeoBoundaries].

## Non-Stationary Matérn Kriging and Settlement Conditioning

Continuous spatial population surfaces across HANDBOOK draw on 39.196 domestic assigned records and 18.006 cross-frontier buffer records distributed across 3.416 domestic catchments (1.942 active, ADM2 coverage ratio 0,5685), with a median Voronoi catchment radius of 32,51 km (90th percentile 40,25 km). Within Afghanistan itself, the archaeological and historical site substrate encompasses 592 geolocated records forming part of a 1.619-site northeastern frontier cluster (573 regional register entries, 930 academic monograph sites, 116 global radiocarbon records and 0 crowd-sourced records).

Spatial residuals are interpolated via Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging conditioned on five weighted least squares biophysical covariates: habitable land fraction ($\beta_{\text{hab}}$), natural vegetative productivity ($\beta_{\text{nat}}$), ecozone suitability ($\beta_{\text{eco}}$), fluvial proximity ($\beta_{\text{fluvial}}$) and coastal distance ($\beta_{\text{coastal}}$) [@Akbari2024Research]. For the early modern horizon (1.941 active sites across 1.309 active domestic catchments), regularised variogram parameters stabilise at $\tau_1 = 1,35$ (raw $\tau_1 = 1,51$), $\tau_2 = 2,9025$, effective short range 49,17 km, nugget-to-sill ratio 0,04 and residual $R^2 = 0,9993$ (Table \ref{tab:kriging-afg}). A 2-cell urban mask buffer isolates 75 catalogued settlements from rural background densities so major centres such as Kabul, Kandahar and Herat preserve authentic urban gradients [@Bosworth2007Historic; @Rezvan2012Physical].

# Testing and Validation

Arithmetic reconciliation confirms exact conservation between the five subregional series and the headline domain totals across all five benchmark years (Table \ref{tab:validation-afg}). Domain population rises monotonically from 3,25M in 1747AD to 6,28M in 1919AD, with every subregional cell sum matching the staged regional cache without residual discrepancy.

<figure class="crd-table-figure" id="tab:validation-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1747AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1919AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kabul and Eastern Provinces</strong></td><td class="crd-td">980k</td><td class="crd-td">1,15M</td><td class="crd-td">1,35M</td><td class="crd-td">1,75M</td><td class="crd-td">2,05M</td></tr>
<tr><td class="crd-td"><strong>Kandahar and Helmand</strong></td><td class="crd-td">680k</td><td class="crd-td">780k</td><td class="crd-td">920k</td><td class="crd-td">1,15M</td><td class="crd-td">1,35M</td></tr>
<tr><td class="crd-td"><strong>Afghan Turkestan (Balkh and Badakhshan)</strong></td><td class="crd-td">640k</td><td class="crd-td">740k</td><td class="crd-td">860k</td><td class="crd-td">1,1M</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Herat and Western Provinces</strong></td><td class="crd-td">540k</td><td class="crd-td">620k</td><td class="crd-td">710k</td><td class="crd-td">880k</td><td class="crd-td">1,02M</td></tr>
<tr><td class="crd-td"><strong>Hazarajat and Central Highlands</strong></td><td class="crd-td">410k</td><td class="crd-td">460k</td><td class="crd-td">520k</td><td class="crd-td">520k</td><td class="crd-td">580k</td></tr>
<tr><td class="crd-td"><strong>Afghanistan Total</strong></td><td class="crd-td">3,25M</td><td class="crd-td">3,75M</td><td class="crd-td">4,36M</td><td class="crd-td">5,4M</td><td class="crd-td">6,28M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Subregional demographic benchmarks across Durrani and Barakzai Afghanistan, 1747AD to 1919AD.</figcaption>
</figure>

Table \ref{tab:kriging-afg} reports the HANDBOOK Matérn variogram parameters across the five classical-to-early-modern chronological horizons underpinning the spatial habitability substrate. Residual $R^2$ exceeds 0,999 across every horizon while nugget-to-sill ratios remain anchored at 0,04, confirming smooth spatial covariance convergence across arid oasis corridors and mountain basins alike.

<figure class="crd-table-figure" id="tab:kriging-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Range (km)</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>6. Roman, Parthian and Kushan</strong></td><td class="crd-td">49,44</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,1764</td><td class="crd-td">1,4414</td></tr>
<tr><td class="crd-td"><strong>7. Late Antiquity and Sassanid</strong></td><td class="crd-td">49,88</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,1242</td><td class="crd-td">0,9437</td></tr>
<tr><td class="crd-td"><strong>8. Early Islamic Caliphate</strong></td><td class="crd-td">49,93</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0674</td><td class="crd-td">0,5054</td></tr>
<tr><td class="crd-td"><strong>9. Mediaeval Seljuk and Timurid</strong></td><td class="crd-td">48,93</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0349</td><td class="crd-td">0,2536</td></tr>
<tr><td class="crd-td"><strong>10. Early Modern Horizon</strong></td><td class="crd-td">49,17</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0285</td><td class="crd-td">0,1985</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> HANDBOOK Matérn variogram diagnostics across the final five chronological horizons (168.112 valid land cells, regularised tau1 = 1,35).</figcaption>
</figure>

Table \ref{tab:subadmin-afg} summarises the six largest modern Afghan ADM2 districts matched to geoBoundaries polygons [@Runfola2020GeoBoundaries] across the 1979, 2006 and 2020 enumerations. These modern polygon anchor weights establish the provincial spatial hierarchy—led by Kabul, Balkh, Kandahar, Ghazni, Kunduz and Sari Pul—used to verify pycnophylactic mass conservation across the 355 matched Afghan districts.

<figure class="crd-table-figure" id="tab:subadmin-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">District</th><th class="crd-th">Level</th><th class="crd-th">Area (km²)</th><th class="crd-th">1979</th><th class="crd-th">2006</th><th class="crd-th">2020</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kabul</strong></td><td class="crd-td">ADM2</td><td class="crd-td">355</td><td class="crd-td">1,37M</td><td class="crd-td">3,14M</td><td class="crd-td">5,2M</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">ADM2</td><td class="crd-td">483</td><td class="crd-td">580,1k</td><td class="crd-td">1,1M</td><td class="crd-td">1,51M</td></tr>
<tr><td class="crd-td"><strong>Kandahar</strong></td><td class="crd-td">ADM2</td><td class="crd-td">740</td><td class="crd-td">575k</td><td class="crd-td">1,01M</td><td class="crd-td">1,4M</td></tr>
<tr><td class="crd-td"><strong>Ghazni</strong></td><td class="crd-td">ADM2</td><td class="crd-td">432</td><td class="crd-td">646,6k</td><td class="crd-td">1,06M</td><td class="crd-td">1,36M</td></tr>
<tr><td class="crd-td"><strong>Kunduz</strong></td><td class="crd-td">ADM2</td><td class="crd-td">621</td><td class="crd-td">555,4k</td><td class="crd-td">851,3k</td><td class="crd-td">1,14M</td></tr>
<tr><td class="crd-td"><strong>Sari Pul</strong></td><td class="crd-td">ADM2</td><td class="crd-td">1.960</td><td class="crd-td">324,5k</td><td class="crd-td">482,9k</td><td class="crd-td">621k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Top six modern Afghan ADM2 districts from geoBoundaries across 1979, 2006 and 2020 benchmarks (355 matched units).</figcaption>
</figure>

# Results

## Durrani Expansion and Imperial Realignment (1747AD to 1826AD)

Between 1747AD and 1800AD, the aggregate population of Afghanistan within its modern borders increased from 3,25M to 3,75M (+15,4%), averaging roughly 0,27% annual growth (Figure \ref{fig:traj-durrani}). Growth during Ahmad Shah's reign and the early decades of Timur Shah reflected relative internal peace across the major river oases alongside sustained fiscal inflows from the Durrani Empire's wealthier eastern provinces in Kashmir, Punjab, Multan and Sindh [@Lally2018Beyond; @Mahajan2025Kashmir; @Khan2022Good]. Tribute and cavalry stipends paid to Abdali and Ghilzai chieftains stimulated bazaar construction, orchard expansion and urban artisan immigration into Kandahar and Kabul [@Lally2018Beyond; @Bosworth2007Historic].

<figure class="crd-figure-block" id="fig:traj-durrani">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-durrani-barakzai-afghanistan/fig2_durrani_barakzai_afghanistan_trajectory.png" alt="fig:traj-durrani" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Durrani and Barakzai Afghanistan from 1747AD to 1919AD across five hydrological subregions.</figcaption>
</figure>

Crucially, the royal decision in 1775AD to move the Durrani capital from Kandahar to Kabul initiated a lasting eastward shift in urban primacy [@Dzhandosova2023Reign; @Lally2018Beyond]. Kabul and the Eastern Provinces grew from 980k in 1747AD to 1,15M in 1800AD (+17,3%), outpacing Kandahar and Helmand (680k to 780k, +14,7%), Afghan Turkestan (640k to 740k, +15,6%), Herat (540k to 620k, +14,8%) and Hazarajat (410k to 460k, +12,2%). Sitting at 1.790 m elevation at the hub of the Kohdaman, Logar and Khyber routes, Kabul commanded shorter military and commercial lines to both the Peshawar winter capital and the northern passes over the Hindu Kush [@Khan2022Good; @Rahil2026Communicat].

After 1800AD, dynastic breakdown slowed demographic momentum across the western and southern basins. As Sadozai princes contended for Kabul, Kandahar and Herat, rural tax extraction mounted, caravan security deteriorated along the Bolan and Khyber corridors and external Indian revenues evaporated following the loss of Kashmir (1819AD) and trans-Indus plains [@Dzhandosova2023Reign; @Mahajan2025Kashmir; @Lally2018Beyond]. Yet despite recurrent armed campaigns between rival contenders, major agrarian valleys remained resilient: the absence of sustained industrial-scale siege artillery meant that rural *karez* and river-canal peasants largely rebuilt between campaigning seasons rather than suffering permanent demographic collapse [@Barfield2012Centraliza; @Anonymous2015Rural].

## Barakzai Consolidation and the Anglo-Afghan Shocks (1826AD to 1880AD)

By 1850AD, total population reached 4,36M, up 16,3% over the half-century from 1800AD (Table \ref{tab:validation-afg}). The First Anglo-Afghan War (1839AD to 1842AD) inflicted acute local destruction along the invasion corridors—particularly around Ghazni, Kabul, Charikar and Istalif in 1842—yet did not reverse long-term valley growth [@Morrison2013Twin; @Honnen2013Securitizi]. Dost Muhammad Khan's restoration in 1842AD ushered in two decades of gradual commercial recovery and administrative reintegration [@Barfield2012Centraliza; @Yad2025State].

Between 1850AD and 1880AD, Barakzai consolidation united the northern Uzbek khanates with Kabul and Kandahar, while Herat withstood repeated Qajar sieges (1837AD to 1838AD and 1856AD) before entering the Kabul polity in 1863AD [@MacLeod2020Iran; @Barfield2012Centraliza]. During this mid-century phase, Kabul and the Eastern Provinces climbed from 1,35M in 1850AD toward 1,75M by 1900AD, Kandahar and Helmand rose from 920k to 1,15M, and Afghan Turkestan expanded rapidly from 860k to 1,1M as overland trade with Bukhara and Russian Central Asia intensified across the Amu Darya crossings at Kelif and Patta Keser [@Nourzhanov2013Tajikistan; @Fitzhardinge1968Establishm].

<figure class="crd-figure-block" id="fig:density-durrani">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-durrani-barakzai-afghanistan/fig3_durrani_barakzai_afghanistan_density.png" alt="fig:density-durrani" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Subregional population shares, net growth and spatial density across Durrani and Barakzai Afghanistan, 1747AD and 1919AD.</figcaption>
</figure>

Table \ref{tab:density-afg} contrasts territorial area, absolute population and crude arithmetic density across the five subregions at the 1747AD and 1919AD bookends. Because Kandahar and Helmand encompasses vast expanses of the arid Registan desert and Dasht-i Margo, its domain-wide arithmetic density remained the lowest in Afghanistan, rising from 2,5 persons per km² in 1747AD to 4,97 persons per km² in 1919AD despite dense oasis clusters along the Arghandab and Helmand floodplains. Conversely, the compact irrigated valleys of Kabul and the Eastern Provinces rose from 15,15 to 31,68 persons per km², carrying nearly one-third of the country's entire population on barely one-tenth of its land area.

<figure class="crd-table-figure" id="tab:density-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Area (km²)</th><th class="crd-th">1747AD (km²)</th><th class="crd-th">1919AD Pop.</th><th class="crd-th">1919AD (km²)</th><th class="crd-th">Net Growth</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kabul and Eastern Provinces</strong></td><td class="crd-td">64.701</td><td class="crd-td">15,15</td><td class="crd-td">2,05M</td><td class="crd-td">31,68</td><td class="crd-td">+109,2%</td></tr>
<tr><td class="crd-td"><strong>Kandahar and Helmand</strong></td><td class="crd-td">271.841</td><td class="crd-td">2,5</td><td class="crd-td">1,35M</td><td class="crd-td">4,97</td><td class="crd-td">+98,5%</td></tr>
<tr><td class="crd-td"><strong>Afghan Turkestan (Balkh and Badakhshan)</strong></td><td class="crd-td">158.740</td><td class="crd-td">4,03</td><td class="crd-td">1,28M</td><td class="crd-td">8,06</td><td class="crd-td">+100%</td></tr>
<tr><td class="crd-td"><strong>Herat and Western Provinces</strong></td><td class="crd-td">75.824</td><td class="crd-td">7,12</td><td class="crd-td">1,02M</td><td class="crd-td">13,45</td><td class="crd-td">+88,9%</td></tr>
<tr><td class="crd-td"><strong>Hazarajat and Central Highlands</strong></td><td class="crd-td">70.781</td><td class="crd-td">5,79</td><td class="crd-td">580k</td><td class="crd-td">8,19</td><td class="crd-td">+41,5%</td></tr>
<tr><td class="crd-td"><strong>Afghanistan Total</strong></td><td class="crd-td">641.887</td><td class="crd-td">5,06</td><td class="crd-td">6,28M</td><td class="crd-td">9,78</td><td class="crd-td">+93,2%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Subregional area, population density (persons per km²) in 1747AD and 1919AD and cumulative net demographic growth.</figcaption>
</figure>

## The Iron Amir, Internal Resettlement and Hazarajat Divergence (1880AD to 1919AD)

The sharp divergence between lowland expansion and highland stagnation between 1850AD and 1900AD marks the central demographic finding of the Barakzai century (Figure \ref{fig:density-durrani}; Table \ref{tab:validation-afg}). Whereas domain population grew by 23,9% from 4,36M in 1850AD to 5,4M in 1900AD, the Hazarajat and Central Highlands recorded zero net growth across the entire fifty-year interval, standing at 520k in both 1850AD and 1900AD [@Kakar1968Consolidat; @Fuoli2017Colonialis]. Modest natural growth between 1850AD and 1890AD was wiped out during the Hazarajat wars of 1891AD to 1893AD, when Abdur Rahman Khan's armies crushed autonomous Hazara *mirs*, confiscated upland summer pastures for allocation to nomadic Ghilzai *kuchis*, enslaved thousands of captives in Kabul and triggered mass emigration into British Baluchistan and Iranian Khorasan [@Kakar1968Consolidat; @Fuoli2017Colonialis; @MacLeod2020Iran]. Consequently, Hazarajat's share of the Afghan population fell from 12,6% in 1747AD to 9,2% in 1919AD.

Conversely, Afghan Turkestan benefited directly from state-sponsored internal colonisation [@Kakar1968Consolidat; @Fitzhardinge1968Establishm]. Beginning in 1885AD, Amir Abdur Rahman transferred thousands of southern Durrani and dissident Ghilzai families northward into Baghlan, Kunduz, Balkh, Meymaneh and Badghis, providing seed advances, canal grants and tax exemptions to reclaim abandoned steppe marshes and anchor the Russian borderland [@Kakar1968Consolidat; @Fuoli2017Colonialis]. Combined with rising cotton, karakul pelt and dried-fruit exports along the Oxus trade route, this resettlement lifted Afghan Turkestan from 860k in 1850AD to 1,1M in 1900AD and 1,28M in 1919AD, matching the 100% cumulative doubling of the wider state [@Kakar1968Consolidat; @Nourzhanov2013Tajikistan].

Herat and the Western Provinces experienced slower cumulative expansion (+88,9%, from 540k to 1,02M), held back by mid-century Qajar incursions, Turkmen slave-raiding along the upper Murghab prior to Russian pacification of Merv in 1884AD, and the Pandjdeh frontier crisis of 1885AD [@Fitzhardinge1968Establishm; @MacLeod2020Iran]. Once Anglo-Russian boundary demarcation stabilised the north-west border in 1888AD, Herat rebounded vigorously from 880k in 1900AD to 1,02M in 1919AD [@Fitzhardinge1968Establishm]. Across Afghanistan as a whole, the final two decades under Habibullah Khan (1901AD to 1919AD) witnessed accelerated growth from 5,4M to 6,28M (+16,3% in nineteen years), aided by internal pacification, improved caravan roads, nascent administrative policing and the absence of major civil wars prior to May 1919 [@Gill2026Struggle; @Yad2025State].

## Urban Network and Rank-Size Hierarchy

Across the 75 settlements catalogued in the regional gazetteer, the Afghan urban system displayed pronounced primacy around Kabul combined with a resilient second tier of regional oasis capitals and Oxus trade towns (Figure \ref{fig:sett-durrani}). Ordinary least-squares regression of log population against log rank yields a Zipf exponent of $\alpha = 1,116$ ($R^2 = 0,857$), reflecting a steep upper hierarchy above 20k inhabitants alongside a dense cluster of small oasis towns and historic mound settlements between 2k and 10k [@Bosworth2007Historic; @Rezvan2012Physical].

<figure class="crd-figure-block" id="fig:sett-durrani">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-durrani-barakzai-afghanistan/fig4_durrani_barakzai_afghanistan_settlements.png" alt="fig:sett-durrani" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading catalogued settlements across Durrani and Barakzai Afghanistan through 1919AD.</figcaption>
</figure>

Kabul dominated the urban hierarchy, expanding from 58.757 in 1747AD to 152.767 in 1830AD, 194.205 in 1850AD, 353.865 in 1900AD and 398.982 in 1910AD as royal garrisons, ministries, arms workshops (*mashin-khana*) and merchant caravanserais concentrated in the capital [@Kakar1968Consolidat; @Bosworth2007Historic]. Kandahar ranked second at 77.951 in 1910AD (up from 11.480 in 1747AD prior to Ahmad Shah's new foundation reaching maturity), serving as the southern commercial hub for wool, dried fruit and Baluch–Sindh transit trade [@Lally2020Landscape; @Lally2018Beyond]. Herat ranked third at 61.310 in 1910AD, anchoring the western Persianate bazaar and silk-carpet craft economy [@MacLeod2020Iran; @Bosworth2007Historic].

In northern Afghanistan, Mazār-e Sharīf expanded from 6.652 in 1747AD to 45.166 in 1910AD, eclipsing ruined ancient Balkh (3.164 in 1910AD) as malaria outbreaks and Barakzai provincial administration shifted the regional seat to the Hazrat Ali shrine town [@Nourzhanov2013Tajikistan; @Bosworth2007Historic]. Further east along the Oxus piedmont and Hindu Kush passes, Jalālābād (23.557), Kunduz (23.267), Baghlān (17.140), Meymaneh (16.713), Ghaznī (13.293), Khulm (12.268) and Khān Ābād (11.711) formed the middle tier of garrison and agricultural market towns [@Bosworth2007Historic; @Kakar1968Consolidat].

# Limitations

Three evidentiary limitations govern this demographic reconstruction. First, Afghanistan conducted no modern national or subadministrative census prior to the partial enumeration of 1979 [@Anonymous2015Rural; @Runfola2020GeoBoundaries]. All 1747AD to 1919AD totals therefore rest on comparative historical estimation—cross-checking British-Indian military intelligence, Afghan revenue assessments and travellers' household counts against modern district carrying capacities—rather than direct parish or cadastral returns [@Drephal2024Colonial; @Kakar1968Consolidat]. While macro-regional orders of magnitude carry plausible uncertainty margins of $\pm 15\%$ to $\pm 20\%$, short-term decennial fluctuations around the Anglo-Afghan wars remain smoother in interpolated benchmarks than actual wartime mortality and seasonal flight.

Second, nomadic *kuchi* pastoralists and remote mountain populations in Nuristan, Wakhan and the upper Hazarajat eluded systematic pre-1900AD registration [@Kakar1968Consolidat; @Anonymous2015Rural]. Seasonal transhumance across the Durand Line and the Oxus frontier blurred annual headcounts between Afghan territory, British India and Bukhara [@Caron2016Sufism; @Nourzhanov2013Tajikistan].

Third, two compilation artefacts appear in the 75-settlement gazetteer. Because Wave 2 ingestion drew historical site anchors from the Pleiades Ancient World Gazetteer alongside primary national census backprojections, several ancient Bactrian and Gandharan mound sites (such as Ai Khanoum, Takht-i Sangin, Hadda and Aornos) retain flat c. 5k placeholder figures across 1747AD to 1900AD, creating a mild shelf near 5k that depresses the Zipf fit ($R^2 = 0,857$). Additionally, Kabul's individual settlement series records an anomalous trough of 4.965 across 1750AD to 1800AD between its 1747AD (58.757) and 1830AD (152.767) figures; subregional totals for Kabul and the Eastern Provinces properly smooth over this single-site discontinuity, while twentieth-century canal towns founded after 1919AD (such as Lashkargāh in 1953 and Pul-e Khumrī in 1936) are excluded from the domain ledger.

# Conclusion

Between 1747AD and 1919AD, Afghanistan evolved from the contested core of an expansive Durrani conquest empire into a territorially delimited Barakzai buffer state whose population nearly doubled from 3,25M to 6,28M. Demographic growth remained overwhelmingly tied to snowmelt-fed river oases and subterranean *karez* systems, lifting densities in Kabul and the Eastern Provinces to 31,68 persons per km² while keeping arid southern plains sparsely peopled. Political centralisation reshaped the map in two enduring ways: the 1775AD shift of the court to Kabul anchored eastern urban primacy, while Amir Abdur Rahman Khan's northern resettlement campaigns and 1891AD to 1893AD Hazarajat conquest boosted Afghan Turkestan to 1,28M inhabitants even as they froze highland Hazara numbers for half a century. By 1919AD, the spatial distribution of modern Afghanistan—anchored on the Kabul–Kandahar–Herat–Mazār-e Sharīf urban ring—was firmly established.

# Appendix

Table \ref{tab:source-corpora-afg} documents the component archaeological, chronometric and historical gazetteer corpora aggregated across the HANDBOOK domain to condition the regional Matérn habitability surface. Primary academic monograph compilations and regional archaeological surveys account for more than 95% of all catalogued records, with zero reliance on crowd-sourced repositories inside the Afghan and Caucasus frontier cluster.

<figure class="crd-table-figure" id="tab:source-corpora-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Provenance Tier</th><th class="crd-th">Active Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Published Excavations Atlas (Regional Monograph Tables)</strong></td><td class="crd-td">Academic monograph table</td><td class="crd-td">14.974</td><td class="crd-td">38,2%</td></tr>
<tr><td class="crd-td"><strong>Pleiades Ancient World Gazetteer</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">9.930</td><td class="crd-td">25,33%</td></tr>
<tr><td class="crd-td"><strong>EAMENA Western Nafud and Arabian Survey</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">6.708</td><td class="crd-td">17,11%</td></tr>
<tr><td class="crd-td"><strong>Al-Thurayya Early Islamic Gazetteer</strong></td><td class="crd-td">Academic monograph table</td><td class="crd-td">1.876</td><td class="crd-td">4,79%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis</strong></td><td class="crd-td">Global radiocarbon archive</td><td class="crd-td">1.727</td><td class="crd-td">4,41%</td></tr>
<tr><td class="crd-td"><strong>EAMENA Khorasan and Eastern Iranian Survey</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">1.175</td><td class="crd-td">3%</td></tr>
<tr><td class="crd-td"><strong>Near East Radiocarbon Database</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">921</td><td class="crd-td">2,35%</td></tr>
<tr><td class="crd-td"><strong>Egypt Exploration Society Delta Survey</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">723</td><td class="crd-td">1,84%</td></tr>
<tr><td class="crd-td"><strong>Digital Atlas of the Roman Empire</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">578</td><td class="crd-td">1,47%</td></tr>
<tr><td class="crd-td"><strong>Anatolian Chronometric Heritage Register</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">198</td><td class="crd-td">0,51%</td></tr>
<tr><td class="crd-td"><strong>HANDBOOK Regional Monograph Catalogue</strong></td><td class="crd-td">Academic monograph table</td><td class="crd-td">171</td><td class="crd-td">0,44%</td></tr>
<tr><td class="crd-td"><strong>UCL Central Asian Archaeological Landscapes (Afghanistan and Khorasan)</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">88</td><td class="crd-td">0,22%</td></tr>
<tr><td class="crd-td"><strong>Central Asia and MENA Archaeological Site Register</strong></td><td class="crd-td">Academic monograph table</td><td class="crd-td">50</td><td class="crd-td">0,13%</td></tr>
<tr><td class="crd-td"><strong>Central Asian Frontier Transition Buffer</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">38</td><td class="crd-td">0,1%</td></tr>
<tr><td class="crd-td"><strong>Indus and Pakistan Frontier Transition Buffer</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">25</td><td class="crd-td">0,06%</td></tr>
<tr><td class="crd-td"><strong>eamena_gaza_levant</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">6</td><td class="crd-td">0,02%</td></tr>
<tr><td class="crd-td"><strong>eamena_wadi_naqqat_egypt</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">4</td><td class="crd-td">0,01%</td></tr>
<tr><td class="crd-td"><strong>Xinjiang and Pamir Frontier Transition Buffer</strong></td><td class="crd-td">National or regional register</td><td class="crd-td">4</td><td class="crd-td">0,01%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Component archaeological and historical gazetteer registries conditioning the HANDBOOK spatial surface.</figcaption>
</figure>

# Sources

<div id="refs"></div>
