---
title: "Afghanistan after 1919"
subtitle: "Partial Censuses, War Mortality, Mass Exile and Urbanisation, 1919AD-2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: modern_afghanistan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_modern_afghanistan_spatial.png"
hero_caption: "Provincial territorial divisions and major urban centres across Afghanistan from 1919AD to 2026AD."
hero_label: "fig:hero-modern-afghanistan"
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

Between the achievement of full diplomatic independence in 1919AD and the present day, Afghanistan has undergone one of the most turbulent demographic histories in Asia, expanding nearly sevenfold from 6,28M inhabitants in 1919AD to 42,65M in 2025AD across 34 provincial territories covering roughly 638,54k km² (9.006 five-arcminute cells). Unlike neighbouring Iran or the Soviet republics to the north, Afghanistan has never completed a nationwide door-to-door population census: its sole partial enumeration, conducted in June 1979 on the eve of the Soviet-Afghan War, counted roughly 13,05M settled inhabitants while leaving nomadic pastoralists and contested districts partially estimated. Subsequent decades of civil war, foreign intervention, drought and state collapse inflicted heavy excess mortality and drove more than 5M refugees across the borders into Pakistan and Iran, temporarily retarding domestic growth before a massive post-2001 returnee wave and persistently high marital fertility accelerated expansion from 20,13M in 2000AD to 33,83M in 2015AD and 42,65M in 2025AD. Urban concentration shifted decisively toward Kabul, which grew more than 63-fold from 75k in 1920AD to 4,76M in 2025AD, dominating a steep rank-size hierarchy ($\alpha = 1{,}473$, $R^2 = 0{,}831$) across 1.148 catalogued settlements. Drawing upon historical monographs, partial census returns, National Statistics and Information Authority (NSIA) provincial and district projections across 355 matched second-order districts, non-stationary Matérn ($\nu = 3/2$) spatial kriging over metric-isotropic radial catchments and strictly mass-conserving pycnophylactic GIS disaggregation, HANDBOOK reconstructs the long-run demographic trajectory of modern Afghanistan from 1919AD to 2026AD.

<figure class="crd-figure-block" id="fig:hero-modern-afghanistan">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-afghanistan/fig1_modern_afghanistan_spatial.png" alt="fig:hero-modern-afghanistan" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Provincial territorial divisions and major urban centres across Afghanistan from 1919AD to 2026AD.</figcaption>
</figure>

# Background

Modern Afghan demography begins in the wake of the Third Anglo-Afghan War of May 1919, when Amir Amanullah Khan secured sovereign control over foreign policy and set about forging a centralised bureaucratic state out of the tribal confederacy consolidated by his grandfather Amir Abd al-Rahman Khan between 1880AD and 1896AD [@Kakar1968Consolidat; @Anonymous1989Afghanista]. In 1919AD, the country remained overwhelmingly rural and agrarian, holding approximately 6,28M people at an average density of just 9,8 inhabitants per km². Geography dictated where people could live. The Hindu Kush massif cuts diagonally across the country from Wakhan and Badakhshan toward Hazarajat and Ghor, dividing the loess foothills and irrigated plains of Afghan Turkestan in the north from the Kabul river basin in the east and the vast arid basins of Helmand, Kandahar, Farah and Nimroz in the south and west [@Anonymous1989Afghanista; @Anonymous2000Afghanistab]. Across these highland valleys and desert margins, livelihood depended on snowmelt irrigation—whether by open river canals along the Hari Rud, Kunduz, Balkh and Helmand rivers or by subterranean *karez* galleries tapping piedmont aquifers—supplemented by dry-farmed wheat in favourable northern basins and transhumant sheep and goat pastoralism across high summer pastures [@Anonymous2000Understand; @Anonymous2000Production; @Anonymous2000Afghanistab].

From 1919AD to the 1970s, Afghanistan experienced steady but unspectacular demographic growth by modern Asian standards, rising 29,8% from 6,28M in 1919AD to 8,15M in 1950AD and a further 60,1% to 13,05M in 1979AD. Crude birth rates stayed high, above 45 per thousand, sustained by early female marriage, patrilocal household structure and agrarian labour demand, yet crude death rates declined slowly because public sanitation, rural midwifery and transport infrastructure lagged behind those of Iran or Soviet Central Asia [@Anonymous2000Education; @Sharp2002Challenges; @Wafayezada2025Demographi]. State-directed development projects of the mid-twentieth century did, however, reshape local population maps. In the north, malaria control and swamp drainage in the Kunduz and Baghlan valleys during the 1930s and 1940s opened fertile cotton and sugar-beet lands to northern migrants and Pashtun settlers, raising new industrial towns such as Pul-e Khumri, founded in 1936AD around textile and cement works [@Pain2000Afghanista; @Anonymous1989Afghanista]. In the south-west, the Helmand and Arghandab Valley Authority (HAVA), backed by American engineering from 1946AD onward, constructed the Kajaki and Arghandab dams and established Lashkargah in 1953AD as a planned administrative oasis in the arid Helmand basin [@Anonymous2000Afghanistab; @Anonymous2000Understand].

Between 1962AD and 1978AD, preliminary demographic surveys—the Greater Kabul Census of 1965AD and the National Demographic and Family Guidance Survey of 1972AD to 1974AD—attempted to replace guesswork with sampling frames, culminating in the country's first national census attempt in June 1979 under the Democratic Republic of Afghanistan [@Wafayezada2025Demographi; @Anonymous2014Municipali]. Conducted fourteen months after the Saur Revolution of April 1978, when armed insurrection was already spreading through Kunar, Paktia, Herat and Hazarajat, the 1979AD census achieved only partial field coverage. Enumerators reached settled households in accessible provincial capitals and river valleys, recording roughly 13,05M settled inhabitants, while inaccessible rural districts and nomadic *kuchi* pastoralists had to be extrapolated from household lists and aerial cartography [@Anonymous1990Herat; @Anonymous1991Afghanista; @Wafayezada2025Demographi]. Before the results could be fully tabulated, the Soviet military intervention of December 1979 plunged Afghanistan into more than four decades of intermittent war, preventing any second national census from ever taking place.

The demographic shock of 1979AD to 1992AD was catastrophic. Aerial bombardment, counter-insurgency sweeps, landmine contamination and the collapse of irrigation systems shattered the rural agrarian base in the eastern borderlands, Logar, Parwan, Baghlan, Herat and Kandahar [@Anonymous1990Herat; @Anonymous1991Afghanista; @Pain2000Afghanista]. War-related mortality between 1978AD and the early 1990s is widely placed between 1M and 1,5M deaths, accompanied by a sharp rise in infant and maternal mortality as rural clinics ceased functioning [@Sharp2002Challenges; @Wafayezada2025Demographi]. Even larger than wartime mortality was forced external displacement: by 1990AD, more than 5M to 6M Afghans lived abroad as refugees, roughly 3,3M in Pakistan's North-West Frontier Province (now Khyber Pakhtunkhwa) and Balochistan and over 2,3M in Iran [@Bukhari2025Pakistan; @Mohani2025Afghanista; @Abbasi2024Displaceme]. Inside Afghanistan, surviving rural families crowded into garrison cities—above all Kabul—or fled to highland sanctuaries in Hazarajat [@Abbasi2024Displaceme; @Anonymous2014Municipali].

Despite war, exile and the severe drought of 1998AD to 2001AD, Afghanistan's resident population continued to climb because fertility remained extraordinarily high (total fertility exceeding seven children per woman through the 1990s) and infant survival slowly improved through humanitarian immunisation campaigns [@Sharp2002Challenges; @Wafayezada2025Demographi]. Total population reached 20,13M by 2000AD. Following the collapse of the first Taliban regime in late 2001AD, one of the largest repatriation movements in modern history unfolded: over 5M Afghan refugees returned from Pakistan and Iran between 2002AD and 2012AD, even as protracted conflict, unemployment and later the 2021AD political transition generated fresh waves of circular labour migration and secondary displacement toward Iran, Pakistan, Türkiye, Europe and North America [@Bukhari2025Pakistan; @Hakeemi2026Migration; @Hashimy2024Goodbye; @Shafaq2024Driving; @Bauer2026Partnershi]. Returnees disproportionately settled in urban and peri-urban belts rather than war-damaged villages, fuelling an expansion of Kabul, Herat, Mazar-e Sharif, Kandahar and Jalalabad while driving national population from 20,13M in 2000AD to 33,83M in 2015AD and 42,65M in 2025AD [@Hugo2019Patterns; @Anonymous2014Municipali; @Wafayezada2025Demographi].

# Methodology

HANDBOOK models Afghanistan from 1919AD to 2026AD under Regime 3 (the modern census and statistical projection regime), partitioning the national territory into 34 provincial sub-regions aligned with Afghanistan's modern first-order administrative structure and covering 9.006 five-arcminute cells across roughly 638.543 km². Because two provinces—Panjshir (carved out of Parwan) and Daykundi (carved out of Uruzgan)—were administratively created only in 2004AD, the longitudinal territorial mask preserves all 34 spatial polygons throughout the 1919AD to 2026AD span so that provincial time-series remain strictly comparable over identical geographic boundaries without artificial step jumps at 2004AD. In tabular summaries, those two post-2004 territories appear alongside their historical parent provinces as Parwan (Panjshir) and Uruzgan (Daykundi).

Where most modern states provide decennial census series for every province and district, Afghanistan's statistical archive rests on three uneven pillars: the partial census of June 1979, provincial socio-economic repatriation profiles compiled during the 1990s [@Anonymous1990Herat; @Anonymous1991Afghanista; @Anonymous2000Afghanista], and the annual population projections published by the Central Statistics Organisation and its successor, the National Statistics and Information Authority (NSIA), from 2003AD to 2021AD [@Anonymous2014Municipali; @Wafayezada2025Demographi]. To bridge the missing pre-1979 decades and the war years of the 1980s and 1990s without relying on unadjusted extrapolations, provincial and national trajectories are harmonised across six primary benchmark anchors: 1919AD (sovereign independence), 1950AD (mid-century pre-development baseline), 1979AD (partial national census), 2000AD (late civil war and drought trough prior to mass repatriation), 2015AD (post-repatriation urban expansion) and 2025AD (terminal NSIA-aligned projection).

Sub-national disaggregation exploits authoritative administrative boundary polygons from geoBoundaries [@Runfola2020GeoBoundaries], pairing all 34 provincial polygons with 355 matched second-order (ADM2) districts out of 398 district polygons in the national boundary layer (alongside NSIA district schedules that expanded from roughly 363 to 422 administrative districts through post-2004 subdivisions). Provincial and district counts for 1979AD, 2006AD and 2020AD are transferred onto the 5-arcminute raster grid using strictly mass-conserving pycnophylactic scaling. Rather than smearing district inhabitants uniformly across rock, glacier and sand desert, the disaggregation weights each grid cell by an underlying habitability and settlement intensity surface derived from metric-isotropic radial distance fields and non-stationary Matérn ($\nu = 3/2$) kriging across the broader MENA-Iran-Afghanistan domain.

Across that wider continental domain, 83.857 weighted historical and archaeological records—including 592 domestic sites inside Afghanistan—populate 3.416 Voronoi catchments (1.942 active catchments per horizon, with a median catchment radius of 32,51 km and a 90th-percentile radius of 40,25 km) over 168.112 valid continental cells. Biophysical covariates in the weighted least-squares trend capture habitable land fraction, natural vegetative productivity, ecozone suitability and fluvial proximity along perennial river corridors, while an explicit two-cell urban mask buffer isolates dense municipal cores from surrounding pastures. Pycnophylactic rescaling then enforces exact mass conservation within every subadministrative polygon so that disaggregated cell sums reproduce recorded provincial and district totals to machine precision.

# Testing and Validation

Assessing reliability in an un-censused country requires cross-checking national aggregates, subadministrative district matches and spatial conservation audits against independent field profiles and humanitarian surveys. Across the entire continental subadministrative layer (29 historical units and 2.629 modern administrative units disaggregated over 83 benchmark years), 65.864 unit-year conservation checks confirm 100% pass compliance within a 0,01% tolerance, with a global maximum relative error of 5,845e-08. Within Afghanistan specifically, Table 1 summarises the geoBoundaries second-order administrative coverage and benchmark matching from 1979AD to 2020AD [@Runfola2020GeoBoundaries].

<figure class="crd-table-figure" id="tab:subadmin-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Admin Level</th><th class="crd-th">Matched ADM2</th><th class="crd-th">Total ADM2</th><th class="crd-th">Provinces</th><th class="crd-th">Matched Benchmarks</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Afghanistan (AFG)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">355</td><td class="crd-td">398</td><td class="crd-td">34</td><td class="crd-td">1979AD, 2006AD, 2020AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Subadministrative GIS matching summary for Afghanistan across geoBoundaries polygons and NSIA census-projection benchmarks.</figcaption>
</figure>

Note the distinction between full provincial coverage and matched second-order district coverage across the three benchmarks in Table 1. For 2020AD, all 355 matched ADM2 units carry explicit NSIA district-level projections summing to 34,05M across matched polygons (with the remaining districts reflecting post-2004 boundary splits and municipal wards in Kabul and major provincial capitals). For 1979AD and 2006AD, eight major provincial core units—Kabul, Balkh, Kandahar, Ghazni, Kunduz, Sari Pul, Farah and Bamyan—provide direct longitudinal subadministrative anchors spanning the entire 1979AD to 2020AD interval, as detailed in Table 2 [@Runfola2020GeoBoundaries; @Anonymous2014Municipali].

<figure class="crd-table-figure" id="tab:top-units-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Matched Unit</th><th class="crd-th">Level</th><th class="crd-th">Core Area (km²)</th><th class="crd-th">1979AD</th><th class="crd-th">2006AD</th><th class="crd-th">2020AD (Ratio)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kabul</strong></td><td class="crd-td">ADM2</td><td class="crd-td">355</td><td class="crd-td">1,37M</td><td class="crd-td">3,14M</td><td class="crd-td">5,2M (3,8x)</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">ADM2</td><td class="crd-td">483</td><td class="crd-td">580,1k</td><td class="crd-td">1,1M</td><td class="crd-td">1,51M (2,6x)</td></tr>
<tr><td class="crd-td"><strong>Kandahar</strong></td><td class="crd-td">ADM2</td><td class="crd-td">740</td><td class="crd-td">575k</td><td class="crd-td">1,01M</td><td class="crd-td">1,4M (2,4x)</td></tr>
<tr><td class="crd-td"><strong>Ghazni</strong></td><td class="crd-td">ADM2</td><td class="crd-td">432</td><td class="crd-td">646,6k</td><td class="crd-td">1,06M</td><td class="crd-td">1,36M (2,1x)</td></tr>
<tr><td class="crd-td"><strong>Kunduz</strong></td><td class="crd-td">ADM2</td><td class="crd-td">621</td><td class="crd-td">555,4k</td><td class="crd-td">851,3k</td><td class="crd-td">1,14M (2x)</td></tr>
<tr><td class="crd-td"><strong>Sari Pul</strong></td><td class="crd-td">ADM2</td><td class="crd-td">1.960</td><td class="crd-td">324,5k</td><td class="crd-td">482,9k</td><td class="crd-td">621k (1,9x)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Longitudinal subadministrative enumerations for Afghanistan's leading matched units across the 1979AD partial census and NSIA projections for 2006AD and 2020AD.</figcaption>
</figure>

These six leading matched series confirm the dramatic spatial divergence between metropolitan Kabul and provincial Afghanistan. Whereas Kabul expanded 3,79-fold between 1979AD (1,37M) and 2020AD (5,2M), agrarian northern and central provinces grew at far steadier paces: Balkh rose 2,6-fold (from 580,1k to 1,51M), Kandahar 2,43-fold (from 575k to 1,4M), Farah 2,4-fold (from 234,6k to 563k), Ghazni 2,11-fold (from 646,6k to 1,36M), Kunduz 2,05-fold (from 555,4k to 1,14M) and Sari Pul 1,91-fold (from 324,5k to 621k) [@Anonymous1991Afghanista; @Anonymous2014Municipali]. Because NSIA projections extrapolate fixed natural growth rates forward from 1979AD provincial baselines without capturing unrecorded internal migration into Kabul's informal hillside wards, official district figures understate Kabul's true de facto primacy relative to rural districts that lost population during drought and insurgency [@Pain2000Afghanista; @Anonymous2014Municipali].

Provincial socio-economic surveys undertaken by the Data Collection for Afghan Repatriation Project in 1990AD and 1991AD offer an independent ground check on wartime depopulation [@Anonymous1990Herat; @Anonymous1991Afghanista]. In Herat and Kandahar provinces, village-by-village agricultural and household inventories recorded extensive abandonment of irrigated *karez* settlements along the Hari Rud and Arghandab corridors, matching the severe refugee outflows documented in Pakistani and Iranian camps [@Anonymous1990Herat; @Anonymous1991Afghanista; @Bukhari2025Pakistan]. Similarly, humanitarian epidemiological surveys in the late 1990s and early 2000s confirmed acute under-five mortality, infectious disease vulnerability and severe drought displacement across Ghor, Badghis and Hazarajat, justifying the widened uncertainty band around the 1980s and 1990s demographic trajectory [@Sharp2002Challenges; @Abbasi2024Displaceme].

# Results

Over the 106-year span from 1919AD to 2025AD, Afghanistan's population multiplied 6,79-fold, rising from 6,28M to 42,65M at an average compound growth rate of 1,82% per year (Figure 1). Growth divided into five sharply distinct demographic phases governed by public health modernisation, war, mass exile and post-2001 repatriation.

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-afghanistan/fig2_modern_afghanistan_trajectory.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Aggregate demographic trajectory of Afghanistan from 1919AD to 2025AD with uncertainty interval (left) and leading provincial totals in 2025AD (right).</figcaption>
</figure>

During the first phase, from 1919AD to 1950AD, population grew slowly from 6,28M to 8,15M (+29,8%, or 0,84% annually). Tribal rebellions against King Amanullah's 1928AD reforms, the brief 1929AD civil war and the persistence of endemic malaria, cholera and typhus kept crude mortality high, leaving rural densities scarcely changed outside the Kabul basin, Kandahar and the northern river oases [@Anonymous1989Afghanista; @Sharp2002Challenges]. During the second phase, from 1950AD to 1979AD, expansion accelerated sharply: total numbers climbed 60,1% to 13,05M (1,64% annually) as road links through the Salang Tunnel (opened 1964AD), malaria eradication in Kunduz and Baghlan, urban sanitation and elementary clinics reduced epidemic mortality while birth rates remained near biological maxima [@Anonymous2000Education; @Anonymous2000Understand; @Wafayezada2025Demographi].

Table 3 presents the complete national and regional breakdown across the six primary benchmarks for Afghanistan's 34 provincial sub-regions, grouped here into the country's leading provinces and regional belts. Note that the provincial sub-region allocations in HANDBOOK distribute national demographic totals proportionally across provincial territorial polygons to enforce continuous spatial mass balance from 1919AD to 2025AD, whereas Table 2 reported raw NSIA and 1979AD census enumerations for specific matched administrative units.

<figure class="crd-table-figure" id="tab:provinces-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">1919AD</th><th class="crd-th">1979AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hirat</strong></td><td class="crd-td">55.192</td><td class="crd-td">345,7k</td><td class="crd-td">718,5k</td><td class="crd-td">1,11M</td><td class="crd-td">2,35M</td></tr>
<tr><td class="crd-td"><strong>Hilmand</strong></td><td class="crd-td">56.685</td><td class="crd-td">345,7k</td><td class="crd-td">718,4k</td><td class="crd-td">1,11M</td><td class="crd-td">2,35M</td></tr>
<tr><td class="crd-td"><strong>Kandahar</strong></td><td class="crd-td">52.935</td><td class="crd-td">333,8k</td><td class="crd-td">693,7k</td><td class="crd-td">1,07M</td><td class="crd-td">2,27M</td></tr>
<tr><td class="crd-td"><strong>Farah</strong></td><td class="crd-td">49.121</td><td class="crd-td">323,4k</td><td class="crd-td">672,2k</td><td class="crd-td">1,04M</td><td class="crd-td">2,2M</td></tr>
<tr><td class="crd-td"><strong>Badakhshan</strong></td><td class="crd-td">43.596</td><td class="crd-td">312,3k</td><td class="crd-td">649k</td><td class="crd-td">1M</td><td class="crd-td">2,12M</td></tr>
<tr><td class="crd-td"><strong>Nimroz</strong></td><td class="crd-td">41.740</td><td class="crd-td">295,8k</td><td class="crd-td">614,7k</td><td class="crd-td">948,1k</td><td class="crd-td">2,01M</td></tr>
<tr><td class="crd-td"><strong>Ghor</strong></td><td class="crd-td">36.039</td><td class="crd-td">279k</td><td class="crd-td">579,9k</td><td class="crd-td">894,5k</td><td class="crd-td">1,9M</td></tr>
<tr><td class="crd-td"><strong>Ghazni</strong></td><td class="crd-td">21.956</td><td class="crd-td">217k</td><td class="crd-td">450,9k</td><td class="crd-td">695,5k</td><td class="crd-td">1,47M</td></tr>
<tr><td class="crd-td"><strong>Faryab</strong></td><td class="crd-td">20.692</td><td class="crd-td">213,8k</td><td class="crd-td">444,4k</td><td class="crd-td">685,4k</td><td class="crd-td">1,45M</td></tr>
<tr><td class="crd-td"><strong>Badghis</strong></td><td class="crd-td">20.458</td><td class="crd-td">211,9k</td><td class="crd-td">440,4k</td><td class="crd-td">679,3k</td><td class="crd-td">1,44M</td></tr>
<tr><td class="crd-td"><strong>Paktika</strong></td><td class="crd-td">18.797</td><td class="crd-td">199,5k</td><td class="crd-td">414,6k</td><td class="crd-td">639,5k</td><td class="crd-td">1,36M</td></tr>
<tr><td class="crd-td"><strong>Baghlan</strong></td><td class="crd-td">17.739</td><td class="crd-td">198,1k</td><td class="crd-td">411,8k</td><td class="crd-td">635,1k</td><td class="crd-td">1,35M</td></tr>
<tr><td class="crd-td"><strong>Bamyan</strong></td><td class="crd-td">17.675</td><td class="crd-td">196,2k</td><td class="crd-td">407,8k</td><td class="crd-td">629k</td><td class="crd-td">1,33M</td></tr>
<tr><td class="crd-td"><strong>Uruzgan (Daykundi)</strong></td><td class="crd-td">17.093</td><td class="crd-td">192,2k</td><td class="crd-td">399,4k</td><td class="crd-td">616k</td><td class="crd-td">1,31M</td></tr>
<tr><td class="crd-td"><strong>Zabul</strong></td><td class="crd-td">17.085</td><td class="crd-td">190,1k</td><td class="crd-td">395k</td><td class="crd-td">609,2k</td><td class="crd-td">1,29M</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">15.915</td><td class="crd-td">188,7k</td><td class="crd-td">392,2k</td><td class="crd-td">604,9k</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Sari Pul</strong></td><td class="crd-td">16.038</td><td class="crd-td">188,2k</td><td class="crd-td">391,2k</td><td class="crd-td">603,4k</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Samangan</strong></td><td class="crd-td">13.187</td><td class="crd-td">170,6k</td><td class="crd-td">354,5k</td><td class="crd-td">546,8k</td><td class="crd-td">1,16M</td></tr>
<tr><td class="crd-td"><strong>Takhar</strong></td><td class="crd-td">12.175</td><td class="crd-td">164,8k</td><td class="crd-td">342,5k</td><td class="crd-td">528,2k</td><td class="crd-td">1,12M</td></tr>
<tr><td class="crd-td"><strong>Jawzjan</strong></td><td class="crd-td">11.193</td><td class="crd-td">158,4k</td><td class="crd-td">329,2k</td><td class="crd-td">507,8k</td><td class="crd-td">1,08M</td></tr>
<tr><td class="crd-td"><strong>Uruzgan</strong></td><td class="crd-td">11.274</td><td class="crd-td">154,9k</td><td class="crd-td">321,9k</td><td class="crd-td">496,6k</td><td class="crd-td">1,05M</td></tr>
<tr><td class="crd-td"><strong>Wardak</strong></td><td class="crd-td">10.118</td><td class="crd-td">148,1k</td><td class="crd-td">307,8k</td><td class="crd-td">474,7k</td><td class="crd-td">1,01M</td></tr>
<tr><td class="crd-td"><strong>Nuristan</strong></td><td class="crd-td">8.837</td><td class="crd-td">139,4k</td><td class="crd-td">289,7k</td><td class="crd-td">446,8k</td><td class="crd-td">946,6k</td></tr>
<tr><td class="crd-td"><strong>Kunduz</strong></td><td class="crd-td">7.902</td><td class="crd-td">133,5k</td><td class="crd-td">277,5k</td><td class="crd-td">428k</td><td class="crd-td">906,9k</td></tr>
<tr><td class="crd-td"><strong>Nangarhar</strong></td><td class="crd-td">7.273</td><td class="crd-td">125,9k</td><td class="crd-td">261,5k</td><td class="crd-td">403,4k</td><td class="crd-td">854,7k</td></tr>
<tr><td class="crd-td"><strong>Parwan</strong></td><td class="crd-td">5.586</td><td class="crd-td">110,5k</td><td class="crd-td">229,6k</td><td class="crd-td">354,2k</td><td class="crd-td">750,4k</td></tr>
<tr><td class="crd-td"><strong>Paktya</strong></td><td class="crd-td">5.362</td><td class="crd-td">107,7k</td><td class="crd-td">223,7k</td><td class="crd-td">345,1k</td><td class="crd-td">731,1k</td></tr>
<tr><td class="crd-td"><strong>Kunar</strong></td><td class="crd-td">4.662</td><td class="crd-td">100,7k</td><td class="crd-td">209,2k</td><td class="crd-td">322,7k</td><td class="crd-td">683,7k</td></tr>
<tr><td class="crd-td"><strong>Logar</strong></td><td class="crd-td">4.417</td><td class="crd-td">97,9k</td><td class="crd-td">203,5k</td><td class="crd-td">314k</td><td class="crd-td">665,2k</td></tr>
<tr><td class="crd-td"><strong>Kabul</strong></td><td class="crd-td">4.413</td><td class="crd-td">97,8k</td><td class="crd-td">203,3k</td><td class="crd-td">313,6k</td><td class="crd-td">664,4k</td></tr>
<tr><td class="crd-td"><strong>Khost</strong></td><td class="crd-td">4.007</td><td class="crd-td">92,8k</td><td class="crd-td">192,9k</td><td class="crd-td">297,5k</td><td class="crd-td">630,4k</td></tr>
<tr><td class="crd-td"><strong>Laghman</strong></td><td class="crd-td">3.887</td><td class="crd-td">91,9k</td><td class="crd-td">191,1k</td><td class="crd-td">294,7k</td><td class="crd-td">624,4k</td></tr>
<tr><td class="crd-td"><strong>Parwan (Panjshir)</strong></td><td class="crd-td">3.645</td><td class="crd-td">89,8k</td><td class="crd-td">186,7k</td><td class="crd-td">288k</td><td class="crd-td">610,2k</td></tr>
<tr><td class="crd-td"><strong>Kapisa</strong></td><td class="crd-td">1.849</td><td class="crd-td">63,6k</td><td class="crd-td">132,2k</td><td class="crd-td">203,9k</td><td class="crd-td">432,1k</td></tr>
<tr><td class="crd-td"><strong>Afghanistan Total (34 Units)</strong></td><td class="crd-td">638.543</td><td class="crd-td">6,28M</td><td class="crd-td">13,05M</td><td class="crd-td">20,13M</td><td class="crd-td">42,65M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Provincial territorial area and reconstructed population trajectory across 34 sub-regions of Afghanistan, 1919AD to 2025AD.</figcaption>
</figure>

## War, Mass Exile and Fertility Momentum (1979AD to 2000AD)

Between 1979AD and 2000AD, Afghanistan suffered twenty-one years of continuous armed conflict—first the Soviet-Afghan War (1979AD to 1989AD), then the Najibullah regime's collapse and the factional civil war of 1992AD to 1996AD, followed by the Taliban-Northern Alliance conflict and the severe drought of 1998AD to 2001AD [@Pain2000Afghanista; @Sharp2002Challenges; @Abbasi2024Displaceme]. Over five million Afghans fled across the Durand Line into Pakistan and westward into Iran [@Bukhari2025Pakistan; @Mohani2025Afghanista; @Irfan2024Persecuted]. In Pakistan, dense refugee camps in Khyber Pakhtunkhwa (such as Hazara Division, Peshawar and Nowshera) and Balochistan evolved into semi-permanent settlements that reshaped regional labour markets and education networks over two generations [@Shah2024Role; @Mohani2025Afghanista; @Abbas2024Floods]. Minority religious communities—including Afghan Sikhs and Hindus in Kabul, Jalalabad and Ghazni—experienced near-total emigration during the civil war and subsequent crises [@Singh2026Kabul], while Hazara communities from the central highlands endured both internal displacement and transnational flight to Iran, Pakistan and Australia [@Abbasi2024Displaceme].

Yet despite massive emigration and roughly 1,5M conflict deaths, Afghanistan's domestic population rose 54,2% between 1979AD and 2000AD, from 13,05M to 20,13M (2,08% annually). Two mechanisms explain this seeming paradox. First, fertility remained among the highest in the world: rural women averaged seven or more births, creating a broad youth bulge that continually replenished cohorts depleted by war and exile [@Wafayezada2025Demographi]. Second, refugee flows were partially cyclical even during the 1990s: approximately 1,5M to 2M refugees repatriated briefly after the Soviet withdrawal of 1989AD and the fall of Najibullah in 1992AD before renewed factional shelling of Kabul triggered fresh outflows [@Bukhari2025Pakistan; @Pain2000Afghanista].

## Post-2001 Repatriation and Recent Mobility (2000AD to 2026AD)

The years from 2000AD to 2015AD witnessed Afghanistan's fastest recorded demographic expansion, jumping 68,1% from 20,13M to 33,83M (3,52% annually). Between 2002AD and 2012AD, UNHCR and host governments facilitated the return of more than 5M Afghans from Pakistan and Iran, temporarily adding net immigration on top of natural increase exceeding 2,5% per year [@Bukhari2025Pakistan; @Mohani2025Afghanista; @Bahar2024Forced]. Returning families, alongside young rural men fleeing insecurity and drought, poured into provincial capitals and above all into the Kabul basin, driving rapid peri-urban sprawl across steep mountain slopes and former agricultural gardens [@Anonymous2014Municipali; @Hugo2019Patterns].

From 2015AD to 2025AD, growth moderated slightly to 26,1% (2,34% annually), lifting total numbers from 33,83M to 42,65M. Fertility began a gradual decline in major cities as female literacy and delayed marriage spread, though national total fertility remained near 4,5 to 5 births per woman, sustaining a massive youth bulge [@Wafayezada2025Demographi; @Hakeemi2026Migration]. Following the August 2021 political transition, economic contraction, banking disruption and renewed insecurity triggered fresh emigration of educated professionals, youth and vulnerable minorities toward Iran, Pakistan, Türkiye, Germany and North America [@Hashimy2024Goodbye; @Shafaq2024Driving; @Bauer2026Partnershi; @Razavian2025Supporting], compounded from late 2023AD onward by large-scale forced expulsions of undocumented Afghans from Pakistan [@Bukhari2025Pakistan; @Ali2026Migrations].

## Spatial Density, Agrarian Structure and Urban Primacy

Figure 2 maps the continuous dasymetric population surface in 2010AD alongside regional mean densities in 2025AD. National average density climbed nearly sevenfold over the century, from 9,8 inhabitants per km² in 1919AD to 20,4 in 1979AD and 66,8 in 2025AD, yet the spatial gradient between highland core and arid periphery remained stark. Across the densely irrigated eastern and central valleys—Kapisa, Khost, Laghman, Kabul, Logar, Nangarhar and Parwan—mean densities exceed 150 to 230 inhabitants per km², whereas arid Nimroz, Farah, Hilmand and Kandahar and rugged Ghor and Badakhshan average far lower ratios outside narrow river ribbons and oasis basins [@Anonymous2000Afghanistab; @Anonymous2000Understand].

<figure class="crd-figure-block" id="fig:density">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-afghanistan/fig3_modern_afghanistan_density.png" alt="fig:density" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Continuous subadministrative population density surface in 2010AD (left) and mean provincial density in 2025AD (right).</figcaption>
</figure>

Urbanisation transformed the country's settlement hierarchy without turning Afghanistan into a majority-urban nation (Figure 3). Across the 1.148 catalogued cities, provincial seats and district centres (Zipf $\alpha = 1{,}473$, $R^2 = 0{,}831$), combined enumerated urban population rose from 1,22M in 1920AD to 1,57M in 1950AD, 2,13M in 1979AD, 6,12M in 2000AD and 13,1M in 2025AD. Within that urban hierarchy, primacy shifted dramatically toward the capital. Kabul grew more than 63-fold from 75k in 1920AD to 206k in 1950AD, 913,2k in 1979AD, 2,02M in 2000AD and 4,76M in 2025AD, absorbing 36,3% of the 2025AD total across catalogued settlements [@Anonymous2014Municipali; @Hugo2019Patterns]. Far behind Kabul stood the four regional metropolises of the ring road: Herat in the west (40k in 1920AD to 615,9k in 2025AD), Kandahar in the south (42k to 561,2k), Mazar-e Sharif in the north (30k to a 2015AD peak of 523,3k and 519,6k in 2025AD) and Jalalabad in the eastern gateway toward Peshawar (15k to 291,6k), followed in peak population by Taloqan (258,8k in 2020AD), Kunduz (203k in 2025AD), Sheberghan (175,6k peak in 2015AD), Charikar (171,2k peak in 2015AD), Ghazni (143,4k peak in 2015AD), Pul-e Khumri (132,7k in 2025AD) and Paghman (120k peak in 2002AD).

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-afghanistan/fig4_modern_afghanistan_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 5.</span> Rank-size distribution across 1.148 catalogued Afghan settlements (left, Zipf alpha = 1,473, R² = 0,831) and the twelve largest settlements by peak population (right).</figcaption>
</figure>

# Limitations

Four structural uncertainties govern these estimates. First, because Afghanistan never completed a full national census after the partial June 1979 enumeration, all post-1979 national and provincial totals depend on demographic projection models rather than universal household counts [@Wafayezada2025Demographi; @Anonymous2014Municipali]. Projections from 1979AD baselines cannot directly measure unreported wartime deaths, birth-registration omissions in remote mountain valleys, or informal squatter settlements around Kabul, Herat and Mazar-e Sharif. Second, cross-border circular migration between Afghanistan, Pakistan and Iran—involving millions of undocumented labourers, seasonal pastoralists and sudden expulsion waves—blurs the boundary between de jure provincial totals and de facto resident headcounts [@Bukhari2025Pakistan; @Hakeemi2026Migration].

Third, subadministrative boundary proliferation complicates longitudinal matching. Since 2004AD, the number of provinces rose from 32 to 34 (with the creation of Panjshir and Daykundi), while second-order districts expanded from roughly 355 to 363 historic units to nearly 400 to 422 administrative districts in recent NSIA releases; matching historical data onto stable polygons therefore leaves newly split districts aggregated under parent boundaries [@Runfola2020GeoBoundaries]. Fourth, because HANDBOOK allocates national time-series proportionally across the 34 territorial sub-region masks to preserve smooth spatial continuity, provincial series in Table 3 reflect areal-territorial baselines that diverge from de facto urbanisation spikes in small high-density provinces such as Kabul, which are captured instead in the matched district enumerations of Table 2 and the settlement gazetteer.

# Conclusion

Between 1919AD and 2026AD, Afghanistan's population expanded nearly sevenfold from 6,28M to 42,65M despite never completing a modern national census and enduring over four decades of war, drought and mass displacement. Modest early growth through 1950AD gave way to accelerated expansion after mid-century health and irrigation programmes, reaching 13,05M at the partial census of June 1979. Although the Soviet-Afghan War and subsequent civil conflicts killed more than one million people and drove over 5M refugees into Pakistan and Iran, sustained high fertility kept domestic totals climbing to 20,13M by 2000AD before massive post-2001 repatriation propelled numbers to 33,83M in 2015AD and 42,65M in 2025AD. Urban primacy concentrated disproportionately in Kabul, which expanded from 75k in 1920AD to 4,76M in 2025AD, while secondary regional hubs—Herat, Kandahar, Mazar-e Sharif and Jalalabad—anchored the perimeter along the Hindu Kush ring road. Grounded in partial census anchors, 355 matched ADM2 district enumerations, 1.148 catalogued settlement series and mass-conserving pycnophylactic GIS disaggregation, this chapter provides a unified demographic baseline for modern Afghanistan.

# Appendix

## Biophysical Covariates and Subadministrative Conservation Diagnostics

Table 4 reports the pan-domain Matérn ($\nu = 3/2$) semivariogram calibration and pycnophylactic mass-conservation diagnostics used to construct the underlying dasymetric habitability weights applied to Afghanistan's 34 provincial masks and 355 matched ADM2 districts [@Runfola2020GeoBoundaries]. Across 65.864 subadministrative unit-year checks spanning 83 benchmark years, disaggregation preserves every unit's exact recorded population within 5,845e-08 maximum relative error.

<figure class="crd-table-figure" id="tab:appendix-diag-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Diagnostic Metric</th><th class="crd-th">Calibrated Value</th><th class="crd-th">Analytical Role</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Continental Kriging Domain Cells</strong></td><td class="crd-td">168.112 (5-arcminute cells)</td><td class="crd-td">Continental dasymetric habitability grid</td></tr>
<tr><td class="crd-td"><strong>Domestic Voronoi Catchments (Active)</strong></td><td class="crd-td">3.416 total (1.942 active)</td><td class="crd-td">Metric-isotropic radial spatial basins</td></tr>
<tr><td class="crd-td"><strong>Afghanistan Archaeological Anchors</strong></td><td class="crd-td">592 sites (out of 39.196 domestic)</td><td class="crd-td">Pre-census settlement intensity anchor</td></tr>
<tr><td class="crd-td"><strong>Regularised Range Scale (Tau1 / Tau2)</strong></td><td class="crd-td">1,35 / 2,9 (raw Tau1 = 1,52)</td><td class="crd-td">Non-stationary Matérn (nu = 3/2) fit</td></tr>
<tr><td class="crd-td"><strong>Median / P90 Voronoi Catchment Radius</strong></td><td class="crd-td">32,51 km / 40,25 km</td><td class="crd-td">Catchment spatial resolution bounds</td></tr>
<tr><td class="crd-td"><strong>Subadmin Unit-Year Conservation Checks</strong></td><td class="crd-td">65.864 checks (100% pass &lt;= 0,01%)</td><td class="crd-td">Historical (29) and modern (2.629) GIS</td></tr>
<tr><td class="crd-td"><strong>Global Maximum Relative Mass Error</strong></td><td class="crd-td">5,845e-08</td><td class="crd-td">Pycnophylactic mass-balance verification</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Kriging habitability calibration and pycnophylactic subadministrative mass-conservation diagnostics across the Afghanistan domain.</figcaption>
</figure>

## Provincial Density Benchmarks (1919AD to 2025AD)

Table 5 lists mean population density in inhabitants per km² across all 34 provincial territorial units at the 1919AD, 1979AD and 2025AD benchmarks, illustrating the persistent contrast between densely packed eastern valleys and the vast sparsely settled southern and western deserts.

<figure class="crd-table-figure" id="tab:appendix-dens-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">5' Cells</th><th class="crd-th">1919AD/km²</th><th class="crd-th">1979AD/km²</th><th class="crd-th">2025AD/km²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hirat</strong></td><td class="crd-td">781</td><td class="crd-td">6,3</td><td class="crd-td">13</td><td class="crd-td">42,5</td></tr>
<tr><td class="crd-td"><strong>Hilmand</strong></td><td class="crd-td">781</td><td class="crd-td">6,1</td><td class="crd-td">12,7</td><td class="crd-td">41,4</td></tr>
<tr><td class="crd-td"><strong>Kandahar</strong></td><td class="crd-td">727</td><td class="crd-td">6,3</td><td class="crd-td">13,1</td><td class="crd-td">42,8</td></tr>
<tr><td class="crd-td"><strong>Farah</strong></td><td class="crd-td">686</td><td class="crd-td">6,6</td><td class="crd-td">13,7</td><td class="crd-td">44,7</td></tr>
<tr><td class="crd-td"><strong>Badakhshan</strong></td><td class="crd-td">635</td><td class="crd-td">7,2</td><td class="crd-td">14,9</td><td class="crd-td">48,7</td></tr>
<tr><td class="crd-td"><strong>Nimroz</strong></td><td class="crd-td">570</td><td class="crd-td">7,1</td><td class="crd-td">14,7</td><td class="crd-td">48,1</td></tr>
<tr><td class="crd-td"><strong>Ghor</strong></td><td class="crd-td">509</td><td class="crd-td">7,7</td><td class="crd-td">16,1</td><td class="crd-td">52,6</td></tr>
<tr><td class="crd-td"><strong>Ghazni</strong></td><td class="crd-td">308</td><td class="crd-td">9,9</td><td class="crd-td">20,5</td><td class="crd-td">67,1</td></tr>
<tr><td class="crd-td"><strong>Faryab</strong></td><td class="crd-td">301</td><td class="crd-td">10,3</td><td class="crd-td">21,5</td><td class="crd-td">70,2</td></tr>
<tr><td class="crd-td"><strong>Badghis</strong></td><td class="crd-td">290</td><td class="crd-td">10,4</td><td class="crd-td">21,5</td><td class="crd-td">70,4</td></tr>
<tr><td class="crd-td"><strong>Paktika</strong></td><td class="crd-td">263</td><td class="crd-td">10,6</td><td class="crd-td">22,1</td><td class="crd-td">72,1</td></tr>
<tr><td class="crd-td"><strong>Baghlan</strong></td><td class="crd-td">255</td><td class="crd-td">11,2</td><td class="crd-td">23,2</td><td class="crd-td">75,9</td></tr>
<tr><td class="crd-td"><strong>Bamyan</strong></td><td class="crd-td">246</td><td class="crd-td">11,1</td><td class="crd-td">23,1</td><td class="crd-td">75,4</td></tr>
<tr><td class="crd-td"><strong>Uruzgan (Daykundi)</strong></td><td class="crd-td">242</td><td class="crd-td">11,2</td><td class="crd-td">23,4</td><td class="crd-td">76,4</td></tr>
<tr><td class="crd-td"><strong>Zabul</strong></td><td class="crd-td">233</td><td class="crd-td">11,1</td><td class="crd-td">23,1</td><td class="crd-td">75,6</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">230</td><td class="crd-td">11,9</td><td class="crd-td">24,6</td><td class="crd-td">80,5</td></tr>
<tr><td class="crd-td"><strong>Sari Pul</strong></td><td class="crd-td">229</td><td class="crd-td">11,7</td><td class="crd-td">24,4</td><td class="crd-td">79,7</td></tr>
<tr><td class="crd-td"><strong>Samangan</strong></td><td class="crd-td">192</td><td class="crd-td">12,9</td><td class="crd-td">26,9</td><td class="crd-td">87,9</td></tr>
<tr><td class="crd-td"><strong>Takhar</strong></td><td class="crd-td">175</td><td class="crd-td">13,5</td><td class="crd-td">28,1</td><td class="crd-td">91,9</td></tr>
<tr><td class="crd-td"><strong>Jawzjan</strong></td><td class="crd-td">166</td><td class="crd-td">14,2</td><td class="crd-td">29,4</td><td class="crd-td">96,1</td></tr>
<tr><td class="crd-td"><strong>Uruzgan</strong></td><td class="crd-td">156</td><td class="crd-td">13,7</td><td class="crd-td">28,6</td><td class="crd-td">93,3</td></tr>
<tr><td class="crd-td"><strong>Wardak</strong></td><td class="crd-td">144</td><td class="crd-td">14,6</td><td class="crd-td">30,4</td><td class="crd-td">99,4</td></tr>
<tr><td class="crd-td"><strong>Nuristan</strong></td><td class="crd-td">128</td><td class="crd-td">15,8</td><td class="crd-td">32,8</td><td class="crd-td">107,1</td></tr>
<tr><td class="crd-td"><strong>Kunduz</strong></td><td class="crd-td">116</td><td class="crd-td">16,9</td><td class="crd-td">35,1</td><td class="crd-td">114,8</td></tr>
<tr><td class="crd-td"><strong>Nangarhar</strong></td><td class="crd-td">106</td><td class="crd-td">17,3</td><td class="crd-td">36</td><td class="crd-td">117,5</td></tr>
<tr><td class="crd-td"><strong>Parwan</strong></td><td class="crd-td">77</td><td class="crd-td">19,8</td><td class="crd-td">41,1</td><td class="crd-td">134,3</td></tr>
<tr><td class="crd-td"><strong>Paktya</strong></td><td class="crd-td">76</td><td class="crd-td">20,1</td><td class="crd-td">41,7</td><td class="crd-td">136,4</td></tr>
<tr><td class="crd-td"><strong>Kunar</strong></td><td class="crd-td">65</td><td class="crd-td">21,6</td><td class="crd-td">44,9</td><td class="crd-td">146,6</td></tr>
<tr><td class="crd-td"><strong>Logar</strong></td><td class="crd-td">64</td><td class="crd-td">22,2</td><td class="crd-td">46,1</td><td class="crd-td">150,6</td></tr>
<tr><td class="crd-td"><strong>Kabul</strong></td><td class="crd-td">64</td><td class="crd-td">22,2</td><td class="crd-td">46,1</td><td class="crd-td">150,5</td></tr>
<tr><td class="crd-td"><strong>Khost</strong></td><td class="crd-td">56</td><td class="crd-td">23,2</td><td class="crd-td">48,1</td><td class="crd-td">157,3</td></tr>
<tr><td class="crd-td"><strong>Laghman</strong></td><td class="crd-td">55</td><td class="crd-td">23,7</td><td class="crd-td">49,2</td><td class="crd-td">160,6</td></tr>
<tr><td class="crd-td"><strong>Parwan (Panjshir)</strong></td><td class="crd-td">52</td><td class="crd-td">24,7</td><td class="crd-td">51,2</td><td class="crd-td">167,4</td></tr>
<tr><td class="crd-td"><strong>Kapisa</strong></td><td class="crd-td">28</td><td class="crd-td">34,4</td><td class="crd-td">71,5</td><td class="crd-td">233,6</td></tr>
<tr><td class="crd-td"><strong>Afghanistan Mean</strong></td><td class="crd-td">9.006</td><td class="crd-td">9,8</td><td class="crd-td">20,4</td><td class="crd-td">66,8</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Five-arcminute raster cell counts and mean population density (inhabitants per km²) across Afghanistan's 34 provincial masks.</figcaption>
</figure>

# Sources

::: {#refs}
:::
