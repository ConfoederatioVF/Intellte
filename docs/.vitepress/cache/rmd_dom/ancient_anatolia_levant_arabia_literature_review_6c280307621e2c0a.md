---
title: "Ancient Anatolia, the Levant and Arabia"
subtitle: "Settlement, Agrarian Plains and Oasis Kingdoms, 3200BC-539BC"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: ancient_anatolia_levant_arabia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_ancient_anatolia_levant_arabia_spatial.png"
hero_caption: "Ten ecological and political sub-regions across Anatolia, Cyprus, the Levant and the Arabian Peninsula between 3200BC and 539BC, showing the contrast between rain-fed Mediterranean plains, terraced Yemeni highlands and arid interior steppe."
hero_label: "fig:hero-ancient-anatolia-levant-arabia"
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

Between 3200BC and the Persian capture of Babylon in 539BC, the lands stretching from the Aegean coast of Anatolia across Cyprus and the Levantine littoral to the terraced mountains of Yemen and the copper-bearing valleys of Oman grew from roughly 1,98M inhabitants to 8,17M. Unlike the single-trunk river valleys of Egypt and Lower Mesopotamia, human settlement across this 3,62M km² domain rested on rain-fed Mediterranean coastal plains, intermontane Anatolian basins, Levantine limestone uplands, monsoon-fed Yemeni agricultural terraces and discrete Arabian oases. Population climbed steadily through the Early and Middle Bronze Ages, from 1,98M in 3200BC to 3,55M in 2000BC and 5,32M in 1300BC, as urban networks linked Kültepe-Kanesh, Hattusa, Ebla, Ugarit, Byblos and Dilmun across overland caravan trails and copper-tin sea lanes. The political collapse of the Late Bronze Age around 1200BC broke the Hittite central state and coastal palace economies, yet rural village life and Iron Age successor polities in Phrygia, Lydia, Phoenicia, Aramean Syria, Israel, Judah and Saba drove total numbers onward to 6,8M by 800BC and 8,17M by 539BC. Only the Southern Levant suffered a marked late-period contraction, dropping from 690k in 800BC to 560k in 539BC under repeated Assyrian and Babylonian deportations. HANDBOOK reconstructs these ten sub-regions using 820 individually assessed ancient settlements, non-stationary Matérn ($\nu = 3/2$) spatial kriging over metric-isotropic radial catchments and strictly mass-conserving pycnophylactic disaggregation across 29 historical and 2.629 modern administrative units.

<figure class="crd-figure-block" id="fig:hero-ancient-anatolia-levant-arabia">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ancient-anatolia-levant-arabia/fig1_ancient_anatolia_levant_arabia_spatial.png" alt="fig:hero-ancient-anatolia-levant-arabia" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Ten ecological and political sub-regions across Anatolia, Cyprus, the Levant and the Arabian Peninsula between 3200BC and 539BC, showing the contrast between rain-fed Mediterranean plains, terraced Yemeni highlands and arid interior steppe.</figcaption>
</figure>

# Background

From the standpoint of historical demography, Anatolia, the Levant, Cyprus and Arabia form the great rain-fed and oasis-studded bridge between the riverine civilisations of the Nile and the Tigris-Euphrates and the wider Mediterranean and Indian Ocean worlds. Where Egypt and southern Iraq squeezed dense millions onto narrow strips of irrigated mud, this vast territory of roughly 3,62M km² dispersed its people across a mosaic of rainfall gradients, mountain valleys and desert-margin springs. Almost everywhere north of the Syrian desert and west of the Anatolian salt steppe, annual winter precipitation above 300 mm permitted dry-farming of emmer, einkorn, barley, olives and vines without canal networks [@Massa2020Landscape; @Fairbairn2018Ceremonial]. Further south, across the Hijaz, Najd and the Empty Quarter, population thinned to nomadic pastoral bands and walled caravan wells, before thickening again dramatically along the south-western escarpment of Yemen, where summer monsoon rains caught by stone terrace walls and earthen barrages like the Great Dam of Ma'rib supported dense agrarian kingdoms [@EfratKowalsky2022Text].

The Bronze Age trajectory between 3200BC and 1300BC was shaped by the interlocking economies of highland metal, lowland grain and maritime trade. On the Anatolian plateau, the third millennium BC saw walled citadel towns emerge at Troy, Poliochni, Beycesultan, Alişar Höyük and Karahöyük on the Konya plain, feeding on mixed cereal cultivation and sheep-goat pastoralism [@Massa2020Landscape; @Dede2026Orta]. By 2000BC, when regional population reached 3,55M, long-distance donkey caravans linked Assur in northern Mesopotamia to the merchant quarter at Kültepe-Kanesh, trading Anatolian silver and copper for tin and fine textiles [@Veenhof2008Mesopotami; @Ghazaryan2022Administra; @Kaderli2024Evaluation]. In the Northern Levant, Early and Middle Bronze Age urbanism flourished at Ebla, Aleppo, Tell Tayinat and Ugarit, while coastal Byblos shipped Lebanese cedar directly to Old Kingdom Memphis [@Manning2020Beyond; @Massa2017Change]. Across the Persian Gulf, Dilmun on Bahrain and Magan in Oman prospered on copper mining at Bat, Salut and Al-Khasbah, linking Mesopotamian ports to the Indus [@Massa2017Change].

Between 1650BC and 1200BC, the Hittite Old and New Kingdoms forged the first unified territorial empire of the Anatolian plateau from their capital at Hattusa in the Kızılırmak bend [@Hetherington1962Hittite; @Gilan2018Search; @Archi2023Shaping]. Hittite administration relied on regional granaries, temple estates and vassal treaties spanning from Western Anatolia and Cilicia into northern Syria [@Burgin2016Aspects; @Torri2016Sacred; @Warbinek2023Theonyms]. Royal annals and provincial inventories record systematic resettlement of conquered rural populations onto crown estates in Hatti to offset labour shortages across the semi-arid plateau, reinforcing the central basin's demographic peak of 980k inhabitants by 1300BC.

Cyprus, known in contemporary diplomatic correspondence as Alashiya, supplied much of the eastern Mediterranean's copper from Troodos smelting centres while growing from 28k inhabitants in 3200BC to 120k in 1300BC [@Kelder2022Thutmose]. Around 1200BC, a convergence of multi-year drought signals, maritime raids and internal fiscal strain brought down Hattusa, Ugarit and the palace redistribution hubs [@Manning2020Beyond; @Anon2022; @Drews2017Militarism]. Yet demographic recovery during the Iron Age was swift. Luwian rump states such as Hartapu's domain at Türkmen-Karahöyük and Tabal in Cappadocia held the south-central plains [@Osborne2020City; @KORKMAZ2021Modern; @Goedegebuure2024Luwian], while Phrygia at Gordion and Kerkenes and Lydia at Sardis lifted Western Anatolia to 1,45M people by 539BC [@Ross2019Anatolian].

Along the Levantine coast, Tyre, Sidon, Beirut and Tripolis turned maritime silver and purple-dye commerce into a Mediterranean colonial network [@Eshel2024Thousand; @Koiv2022Monarchy], inland Aramean states centred on Damascus and Hamath stabilised the Syrian steppe edge [@Routledge2017There], Israel and Judah filled the central highlands before suffering Assyrian and Babylonian devastation [@Dziadosz2023Covenants], and South Arabia's caravan kingdoms of Saba, Ma'in, Qataban and Hadhramaut expanded to 1,25M inhabitants by the Achaemenid conquest of 539BC. In each of these successor zones, decentralised iron metallurgy and terraced arboriculture allowed smallholders to colonise hill slopes that Bronze Age palace chariots could scarcely tax.

# Methodology

HANDBOOK partitions the domain from 3200BC to 539BC into ten contiguous ecological and historical sub-regions under Regime 2, reconciling regional archaeological settlement trajectories with continuous continental raster surfaces and subadministrative census benchmarks. Rather than forcing a single uniform density curve across contrasting biomes, each sub-region is bounded by smooth vector polygons matched to a 5-arcminute grid comprising 48.289 habitable cells across 3,62M km². Five benchmark horizons anchor the temporal series: 3200BC (Early Bronze Age I urban origins), 2000BC (Middle Bronze Age karum and Levantine city-state expansion), 1300BC (Hittite New Kingdom and Late Bronze Age imperial zenith), 800BC (Iron Age kingdoms of Phrygia, Lydia, Phoenicia, Aramean Syria, Israel, Judah and Saba) and 539BC (the Achaemenid threshold following Cyrus's campaigns in Anatolia and Mesopotamia).

Because ancient texts yield only scattered royal levies, ration lists and treaty enumerations, demographic reconstruction depends on three converging lines of evidence: excavated settlement areas, regional pedestrian survey intensities and calibrated radiocarbon site counts. Excavated urban mounds and lower towns across Anatolia and the Levant are converted to resident inhabitants using regionally calibrated residential density multipliers of 100 to 180 persons per hectare for densely packed Bronze and Iron Age tell centres such as Kültepe, Tell Tayinat and Ashqelon, and 40 to 80 persons per hectare for dispersed highland villages and terraced Sabaean compounds [@Palmisano2017Confrontin; @Massa2020Landscape; @Osborne2020City]. Where extensive regional surveys provide multi-period sherd scatters rather than full architectural plans, site counts are weighted by occupation duration and adjusted for rural hinterland shares so that fortified capitals never obscure the surrounding agrarian countryside.

To project sparse archaeological point records onto continuous 5-arcminute surfaces without producing artificial polygonal cliffs or backprojected modern metropolitan halos, HANDBOOK models spatial settlement intensity over metric-isotropic radial distance fields combined with non-stationary Matérn ($\nu = 3/2$) residual kriging. Across the wider MENA and Anatolian domain, 83.857 weighted domestic archaeological records are aggregated into 3.416 Voronoi catchments (1.942 active catchments in any given horizon, with a median Voronoi catchment radius of 32,51 km and a 90th-percentile radius of 40,25 km) across 168.112 valid continental cells. Biophysical covariates capture ecological suitability, natural land cover, proximity to perennial streams and coastal access through weighted least-squares regression before kriging the Freeman-Tukey transformed residuals. Critically, an explicit urban mask buffer of two cells prevents monumental citadels from inflating surrounding semi-arid pastures, ensuring that rain-fed Mediterranean plains and terraced Yemeni uplands retain high rural baselines while the Arabian interior remains realistically sparse.

Finally, to ground ancient carrying capacities against recorded administrative geography and prevent anachronistic spatial drift, HANDBOOK integrates historical and modern subadministrative census polygons from geoBoundaries [@Runfola2020GeoBoundaries]. Disaggregation from regional totals onto 5-arcminute cells follows a strictly mass-conserving pycnophylactic scaling law that preserves every recorded census unit total while inheriting biophysical suitability gradients inside each polygon. Across 29 historical subadministrative regions and 2.629 modern first- and second-order administrative districts disaggregated over 83 benchmark years, 65.864 unit-year conservation checks confirm exact numerical fidelity, with 100% of units matching within 0,01% and a global maximum relative error of 5,85e-08.

# Testing and Validation

Evaluating demographic reconstructions across three millennia of pre-census history requires testing both the archaeological settlement ledger and the spatial interpolation parameters against independent geological, epigraphic and administrative benchmarks. Table 1 summarises the provenance of the 820 individually assessed settlements incorporated into Chapter 4 out of 1.073 candidates screened during archaeological auditing; 253 duplicate, unquantified or non-settlement monument records were excluded prior to modelling. Enriching the baseline monograph corpus with empirical regional registers—including the Near East Holocene Urban Settlement Database (Palmisano et al. 2021), From Villages to Empires (Titolo and Palmisano 2025), the Near East Radiocarbon Database (NERD), the C-Turkey chronometric register, the Stanford POLIS Greek *poleis* inventory and late Archaic-classical continuity anchors from the OXREP Roman Cities Database (Hanson 2016)—substantially deepens village, tell and coastal *polis* coverage across all ten sub-regions.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Evidence Stream</th><th class="crd-th">Assessed Sites</th><th class="crd-th">Geographic Coverage</th><th class="crd-th">Analytical Role</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Anatolian Excavations, Plateau Surveys and POLIS</strong></td><td class="crd-td">309</td><td class="crd-td">Western, Central, Southern and Pontic Turkey with Aegean littoral</td><td class="crd-td">Excavated citadels, NERD/C-Turkey tells, Stanford POLIS and OXREP anchors</td></tr>
<tr><td class="crd-td"><strong>Northern Levantine, Euphrates and Phoenician Archives</strong></td><td class="crd-td">138</td><td class="crd-td">Syria, Phoenician Lebanon and upper Euphrates</td><td class="crd-td">Palace archives, tell surveys (Palmisano et al. 2021; Titolo and Palmisano 2025) and ports</td></tr>
<tr><td class="crd-td"><strong>Southern Levantine and Transjordanian Surveys</strong></td><td class="crd-td">297</td><td class="crd-td">Israel, Jordan, Palestine and northeastern Sinai</td><td class="crd-td">Stratified tells, Pentapolis ports and Iron II surveys</td></tr>
<tr><td class="crd-td"><strong>Arabian Oasis and Gulf Monographs</strong></td><td class="crd-td">43</td><td class="crd-td">Saudi Arabia, Yemen, Oman, UAE, Bahrain, Kuwait and Qatar</td><td class="crd-td">Walled oasis circuits, dam command areas and aflaj</td></tr>
<tr><td class="crd-td"><strong>Cypriot Copper-Belt and Kingdom Excavations</strong></td><td class="crd-td">33</td><td class="crd-td">Mesaoria, Troodos foothills and Cypriot ports</td><td class="crd-td">LBA smelting hubs and Archaic city-kingdoms</td></tr>
<tr><td class="crd-td"><strong>Total Included Settlements (253 Excluded)</strong></td><td class="crd-td">820</td><td class="crd-td">13 modern jurisdictions (3200BC-539BC)</td><td class="crd-td">Evidence-assessed settlement hierarchy and Zipf sample</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Regional archaeological evidence streams contributing to the 820 individually assessed settlements across Anatolia, Cyprus, the Levant and Arabia (3200BC-539BC).</figcaption>
</figure>

Notice the breadth across all 13 modern jurisdictions represented in the enriched settlement ledger: Turkey (309), Israel (252), Syria (125), Cyprus (33), Palestine (25), Jordan (20), Yemen (17), Saudi Arabia (14), Lebanon (13), Oman (5), United Arab Emirates (4), Bahrain (2) and Kuwait (1). Unlike riverine zones where archaeological work clusters tightly along one floodplain, evidence-assessed coverage here bridges Anatolia's Konya, Gediz and Kızılırmak basins, the Aegean and Propontic Greek *poleis*, the Amuq and Orontes valleys, the Phoenician littoral, the Galilean and Judaean hills, the Cypriot copper belt and the wadi and oasis systems of Saba, Hejaz, Dilmun and Magan [@Massa2020Landscape; @Manning2020Beyond; @Osborne2020City].

Cross-checking the Matérn ($\nu = 3/2$) semivariogram fits across the two main archaeological horizons covered by this chapter demonstrates strong spatial coherence without overfitting. For the Early and Middle Bronze Age horizon, the raw dimensionless range parameter reaches $\tau_1 = 1{,}51$ with secondary scale $\tau_2 = 2{,}9$, nugget-to-sill ratio $0{,}04$ and residual $R^2 = 0{,}999$. For the Late Bronze and Iron Age horizon, $\tau_1 = 1{,}56$, $\tau_2 = 2{,}9$, nugget-to-sill ratio $0{,}04$ and residual $R^2 = 0{,}999$ closely match the pan-regional calibrated baseline ($\tau_1 = 1{,}35$). Crucially, the weighted least-squares biophysical regression shows positive habitability intercepts ($\beta_{0,\text{hab}} = 0{,}015$ in the Early-Middle Bronze Age and $0{,}01$ in the Late Bronze-Iron Age) alongside balanced fluvial ($\beta_{3,\text{fluvial}} = 0{,}087$ and $0{,}083$) and coastal ($\beta_{4,\text{coastal}} = 0{,}083$ and $0{,}08$) weights. Unlike river-trunk societies where fluvial proximity overwhelms every other predictor, coastal and rain-fed upland predictors carry nearly equal weight across Anatolia, Cyprus, Phoenicia and Yemen.

Subadministrative census calibration provides a crucial modern structural check on ancient carrying-capacity ceilings. Figure 3 displays the continuous Late Bronze and Iron Age intensity surface alongside regional mean densities, while Table 2 and Table 3 record the historical subadministrative benchmarks and modern administrative granularity derived from geoBoundaries [@Runfola2020GeoBoundaries].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Code</th><th class="crd-th">Historical Administrative Unit</th><th class="crd-th">1881</th><th class="crd-th">1914</th><th class="crd-th">Later Benchmark</th><th class="crd-th">Census Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Erzurum, Van, Bitlis, Mamuretulaziz &amp; Diyarbakir Vilayets (Eastern Anatolia)</td><td class="crd-td">2,15M</td><td class="crd-td">2,79M</td><td class="crd-td">1,67M (1927)</td><td class="crd-td">Ottoman Official Censuses 1881/93 &amp; 1914 (Karpat 1985; McCarthy 1983)</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Konya &amp; Adana Vilayets (South-Central Anatolia)</td><td class="crd-td">1,34M</td><td class="crd-td">1,76M</td><td class="crd-td">1,92M (1927)</td><td class="crd-td">Ottoman Official Censuses 1881/93 &amp; 1914 (Karpat 1985)</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Ankara &amp; Kastamonu Vilayets (North-Central Anatolia)</td><td class="crd-td">1,81M</td><td class="crd-td">2,14M</td><td class="crd-td">2,31M (1927)</td><td class="crd-td">Ottoman Official Censuses 1881/93 &amp; 1914 (Karpat 1985)</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Trabzon &amp; Sivas Vilayets (Black Sea &amp; Upper Kizilirmak)</td><td class="crd-td">2,04M</td><td class="crd-td">2,6M</td><td class="crd-td">2,45M (1927)</td><td class="crd-td">Ottoman Official Censuses 1881/93 &amp; 1914 (Karpat 1985)</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Hudavendigar Vilayet (NW Anatolia)</td><td class="crd-td">1,32M</td><td class="crd-td">1,62M</td><td class="crd-td">1,79M (1927)</td><td class="crd-td">Ottoman Official Censuses 1881/93 &amp; 1914 (Karpat 1985)</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Aydin Vilayet (Western Aegean)</td><td class="crd-td">1,41M</td><td class="crd-td">1,72M</td><td class="crd-td">1,99M (1927)</td><td class="crd-td">Ottoman Official Censuses 1881/93 &amp; 1914 (Karpat 1985)</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Istanbul &amp; Edirne (Marmara/Thrace)</td><td class="crd-td">1,21M</td><td class="crd-td">1,54M</td><td class="crd-td">1,51M (1927)</td><td class="crd-td">Ottoman Official Censuses 1881/93 &amp; 1914 (Karpat 1985)</td></tr>
<tr><td class="crd-td"><strong>CYP</strong></td><td class="crd-td">Cyprus (6 British Colonial Districts)</td><td class="crd-td">186,2k</td><td class="crd-td">-</td><td class="crd-td">573,6k (1960)</td><td class="crd-td">British Colonial Censuses of Cyprus 1881-1960</td></tr>
<tr><td class="crd-td"><strong>SYR</strong></td><td class="crd-td">Vilayets of Aleppo &amp; Syria (Damascus)</td><td class="crd-td">1,45M</td><td class="crd-td">1,95M</td><td class="crd-td">3,04M (1947)</td><td class="crd-td">Ottoman 1914 Census &amp; French Mandate Enumeration (1922-1947)</td></tr>
<tr><td class="crd-td"><strong>LBN</strong></td><td class="crd-td">Mutasarrifate of Mount Lebanon &amp; Beirut</td><td class="crd-td">520k</td><td class="crd-td">680k</td><td class="crd-td">1,15M (1945)</td><td class="crd-td">Ottoman 1914 &amp; Lebanese 1932 Official Census</td></tr>
<tr><td class="crd-td"><strong>JOR</strong></td><td class="crd-td">Transjordan (Sanjaks of Karak &amp; Balqa)</td><td class="crd-td">185k</td><td class="crd-td">225k</td><td class="crd-td">586,9k (1952)</td><td class="crd-td">British Mandate Transjordan Estimates &amp; 1952 Housing Census</td></tr>
<tr><td class="crd-td"><strong>ISR</strong></td><td class="crd-td">Mandate Palestine (Northern, Coastal &amp; Negev Sub-Districts)</td><td class="crd-td">310k</td><td class="crd-td">460k</td><td class="crd-td">872,7k (1948)</td><td class="crd-td">British Mandate Palestine Censuses 1922, 1931 &amp; Village Statistics 1945</td></tr>
<tr><td class="crd-td"><strong>PSE</strong></td><td class="crd-td">Mandate Palestine (Jerusalem, Hebron, Nablus &amp; Gaza Sub-Districts)</td><td class="crd-td">190k</td><td class="crd-td">262k</td><td class="crd-td">1,02M (1952)</td><td class="crd-td">British Mandate Palestine Censuses 1922, 1931 &amp; Village Statistics 1945</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Historical subadministrative census enumerations across Anatolia, Cyprus and the Levant (1881-1960) used to constrain pre-industrial carrying capacities.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ISO3</th><th class="crd-th">Admin Level</th><th class="crd-th">Matched Units</th><th class="crd-th">Census Span</th><th class="crd-th">Series Count</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">968</td><td class="crd-td">1990-2023</td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>CYP</strong></td><td class="crd-td">ADM1</td><td class="crd-td">5</td><td class="crd-td">1982-2021</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>SYR</strong></td><td class="crd-td">ADM1</td><td class="crd-td">13</td><td class="crd-td">1981-2021</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>LBN</strong></td><td class="crd-td">ADM2</td><td class="crd-td">21</td><td class="crd-td">1970-2017</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>JOR</strong></td><td class="crd-td">ADM1</td><td class="crd-td">12</td><td class="crd-td">1994-2021</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>ISR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">14</td><td class="crd-td">1983-2021</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>PSE</strong></td><td class="crd-td">ADM2</td><td class="crd-td">16</td><td class="crd-td">1997-2023</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>SAU</strong></td><td class="crd-td">ADM2</td><td class="crd-td">136</td><td class="crd-td">1992-2022</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>YEM</strong></td><td class="crd-td">ADM1</td><td class="crd-td">21</td><td class="crd-td">1994-2004</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>OMN</strong></td><td class="crd-td">ADM2</td><td class="crd-td">53</td><td class="crd-td">1993-2020</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>ARE</strong></td><td class="crd-td">ADM1</td><td class="crd-td">7</td><td class="crd-td">1980-2023</td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>QAT</strong></td><td class="crd-td">ADM1</td><td class="crd-td">6</td><td class="crd-td">1986-2020</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>BHR</strong></td><td class="crd-td">ADM1</td><td class="crd-td">4</td><td class="crd-td">2001-2024</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>KWT</strong></td><td class="crd-td">ADM1</td><td class="crd-td">6</td><td class="crd-td">1995-2021</td><td class="crd-td">4</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Modern geoBoundaries subadministrative district coverage across fourteen states and territories supporting pycnophylactic spatial validation.</figcaption>
</figure>

Inspection of these historical series reveals why late Ottoman and early Mandate provincial counts serve as indispensable reality checks on ancient regional proportions. In 1914, before wartime mortality, forced marches and post-war border adjustments, the seven Anatolian vilayet groupings held 14,17M people, with Western Anatolia (Aydin and Hudavendigar) and the Black Sea and central plateau dense relative to the rugged east; Cyprus held 274,1k in 1911 under British district enumerations; Syria and Mount Lebanon together held 2,63M; and Mandate Palestine plus Transjordan held roughly 947k. Those relative shares mirror the geographical gradient of rain-fed arable land rather than modern hydrocarbon or service-sector agglomerations, confirming that ancient ratios—where Anatolia held 4,08M and the Levant 1,74M by 539BC—conform to long-term agro-ecological structure.

# Results

Between 3200BC and 539BC, total population across Anatolia, Cyprus, the Levant and Arabia multiplied slightly over fourfold, rising from 1,98M to 8,17M at an average compound rate of 0,053% per year. Growth was neither uniform in time nor evenly spread in space. The sharpest proportional gains came during the Early and Middle Bronze Ages (3200BC to 2000BC), when regional numbers rose 78,8% from 1,98M to 3,55M as plough agriculture, bronze metallurgy and donkey-caravan commerce crystallised urban hierarchies across every arable basin [@Massa2017Change; @Palmisano2017Confrontin]. A second sustained surge of 50,1% between 2000BC and 1300BC carried the total to 5,32M under the Hittite New Kingdom, Egyptian-Levantine imperial administration and the flowering of Late Bronze Age Ugarit, Alashiya and Sabaean terrace irrigation. Even after the palace destructions of c. 1200BC, population expanded by 27,7% between 1300BC and 800BC (to 6,8M) and by a further 20,2% between 800BC and 539BC (to 8,17M), propelled by iron tools, olive-and-vine cash cropping, Phoenician maritime trade and overland frankincense caravans [@Eshel2024Thousand; @Koiv2022Monarchy].

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ancient-anatolia-levant-arabia/fig2_ancient_anatolia_levant_arabia_trajectory.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Aggregate demographic trajectory from 3200BC to 539BC with uncertainty envelope (left) and leading sub-regional totals at the 539BC Achaemenid threshold (right).</figcaption>
</figure>

Table 4 reports the complete benchmark trajectory across all ten sub-regions from 3200BC to 539BC, drawn directly from the staged chapter dataset.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">3200BC</th><th class="crd-th">2000BC</th><th class="crd-th">1300BC</th><th class="crd-th">800BC</th><th class="crd-th">539BC (Ratio)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Western Anatolia and Aegean Coast</strong></td><td class="crd-td">290k</td><td class="crd-td">520k</td><td class="crd-td">780k</td><td class="crd-td">1,1M</td><td class="crd-td">1,45M (5x)</td></tr>
<tr><td class="crd-td"><strong>Central Anatolia (Hatti)</strong></td><td class="crd-td">350k</td><td class="crd-td">620k</td><td class="crd-td">980k</td><td class="crd-td">1,05M</td><td class="crd-td">1,28M (3,7x)</td></tr>
<tr><td class="crd-td"><strong>South Arabian Kingdoms (Saba, Ma'in, Qataban, Hadramawt)</strong></td><td class="crd-td">220k</td><td class="crd-td">410k</td><td class="crd-td">650k</td><td class="crd-td">950k</td><td class="crd-td">1,25M (5,7x)</td></tr>
<tr><td class="crd-td"><strong>Northern Levant (Syria and Phoenicia)</strong></td><td class="crd-td">310k</td><td class="crd-td">580k</td><td class="crd-td">840k</td><td class="crd-td">1,02M</td><td class="crd-td">1,18M (3,8x)</td></tr>
<tr><td class="crd-td"><strong>Southern Anatolia (Cilicia and Luwia)</strong></td><td class="crd-td">180k</td><td class="crd-td">310k</td><td class="crd-td">490k</td><td class="crd-td">620k</td><td class="crd-td">740k (4,1x)</td></tr>
<tr><td class="crd-td"><strong>Northern Anatolia and Pontus</strong></td><td class="crd-td">160k</td><td class="crd-td">270k</td><td class="crd-td">390k</td><td class="crd-td">480k</td><td class="crd-td">610k (3,8x)</td></tr>
<tr><td class="crd-td"><strong>North and Central Arabia</strong></td><td class="crd-td">160k</td><td class="crd-td">240k</td><td class="crd-td">340k</td><td class="crd-td">460k</td><td class="crd-td">580k (3,6x)</td></tr>
<tr><td class="crd-td"><strong>Southern Levant (Israel, Judah and Transjordan)</strong></td><td class="crd-td">190k</td><td class="crd-td">340k</td><td class="crd-td">490k</td><td class="crd-td">690k</td><td class="crd-td">560k (2,9x)</td></tr>
<tr><td class="crd-td"><strong>Dilmun and Magan (Oman and Gulf)</strong></td><td class="crd-td">95k</td><td class="crd-td">190k</td><td class="crd-td">240k</td><td class="crd-td">280k</td><td class="crd-td">340k (3,6x)</td></tr>
<tr><td class="crd-td"><strong>Cyprus (Alashiya)</strong></td><td class="crd-td">28k</td><td class="crd-td">65k</td><td class="crd-td">120k</td><td class="crd-td">145k</td><td class="crd-td">180k (6,4x)</td></tr>
<tr><td class="crd-td"><strong>Total Domain (10 Sub-Regions)</strong></td><td class="crd-td">1,98M</td><td class="crd-td">3,54M</td><td class="crd-td">5,32M</td><td class="crd-td">6,79M</td><td class="crd-td">8,17M (4,1x)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population estimates across Anatolia, Cyprus, the Levant and Arabia at five Bronze and Iron Age horizons, 3200BC to 539BC.</figcaption>
</figure>

## Anatolia and Cyprus

Anatolia formed the demographic centre of gravity throughout the chapter, rising from 980k inhabitants in 3200BC (49,4% of the entire macro-region) to 2,64M in 1300BC and 4,08M in 539BC (49,9%). Within the peninsula, however, balance shifted steadily from the central plateau toward the western river valleys and the Aegean coast. In 3200BC and 2000BC, Central Anatolia (Hatti) led every sub-region with 350k and 620k people respectively, reflecting the dense Early and Middle Bronze Age mound clusters of the Kızılırmak basin, the Konya-Karaman plain and the Kayseri-Kanesh corridor [@Massa2020Landscape; @Palmisano2017Confrontin; @Ghazaryan2022Administra]. Under the Hittite New Kingdom, Central Anatolia peaked at 980k in 1300BC, sustained by royal granaries, dependent deportee communities (*NAM.RA*) and administrative centres at Hattusa, Büklükale, Çadır Höyük and Karahöyük [@Burgin2016Aspects; @Fairbairn2018Ceremonial; @Ross2019Anatolian; @Dardeniz2026Beyond].

After the collapse of Hattusa around 1180BC, Central Anatolia's growth stalled for nearly four centuries, nudging upward only from 980k in 1300BC to 1,05M in 800BC before Phrygian consolidation at Gordion and Kerkenes and Neo-Hittite towns in Tabal and Cappadocia lifted it to 1,28M by 539BC [@Osborne2020City; @KORKMAZ2021Modern]. Western Anatolia and the Aegean coast experienced no comparable plateau deceleration. Favoured by mild winters, rich alluvial plains along the Gediz, Küçük Menderes and Büyük Menderes rivers and Ionian-Aeolian maritime colonisation, Western Anatolia climbed from 290k in 3200BC to 780k in 1300BC, overtook Central Anatolia around 900BC to reach 1,1M in 800BC and stood at 1,45M in 539BC—roughly 9,6 persons per km² across 150,6k km² [@Grigoriev2024Indo]. Southern Anatolia (Cilicia and Luwia), blessed with the broad alluvial Çukurova plain around Tarsus and Kizzuwatna, quadrupled from 180k to 740k (7,9 persons per km²), while rugged Pontus and Northern Anatolia along the Black Sea rain belt expanded from 160k to 610k (5,1 persons per km²). Across the water, Cyprus (Alashiya) exhibited the highest proportional growth in the northern basin, multiplying more than sixfold from 28k in 3200BC to 180k in 539BC—nearly 19,3 persons per km² on an island of 9,35k km²—driven by Troodos copper extraction, Mycenaean-era urban foundation at Enkomi, Kition and Pyla-Kokkinokremos and Archaic Phoenician-Greek city-kingdoms [@Kelder2022Thutmose].

## The Levant: Syria, Phoenicia, Israel and Judah

Across the Levant, demographic fortunes split cleanly along a north-south political fault line after the ninth century BC. Together, the Northern and Southern Levant started with 500k inhabitants in 3200BC, expanded vigorously to 920k in 2000BC and reached 1,33M in 1300BC. In the north, Syria and Phoenicia benefited from three complementary ecological belts: the rain-fed Orontes and Amuq plains around Tell Tayinat and Alalakh, the cedar-backed coastal ports of Byblos, Sidon, Beirut, Tyre and Tripolis, and the interior steppe-margin oases of Aleppo, Damascus and Palmyra [@Manning2020Beyond; @Gimenez2021Toponym]. Despite the Late Bronze Age destruction of Ugarit and coastal disruptions around 1190BC [@Anon2022], Iron Age Phoenician maritime commerce and Aramean state consolidation carried the Northern Levant from 840k in 1300BC to 1,02M in 800BC and 1,18M in 539BC (9,2 persons per km²). Silver isotope studies confirm that Levantine ports acted as the western Mediterranean's primary bullion clearinghouse from the late second millennium through the sixth century BC [@Eshel2024Thousand].

Equally striking was the linguistic and civic continuity across the Syro-Anatolian borderlands during the transition from the Bronze Age to the Iron Age. Excavations at Tell Tayinat and Aleppo show how Neo-Hittite and Aramean dynasties rebuilt monumental citadels on the ruins of Late Bronze Age palaces, preserving Luwian and West Semitic civic titles alongside alphabetic administrative scripts [@Goedegebuure2024Luwian; @Warbinek2023Theonyms]. Along the Phoenician littoral, limited coastal plain widths between Mount Lebanon and the sea forced cities such as Tyre, Sidon and Byblos to combine intensive hillside terracing with maritime timber exports and overseas silver prospecting, enabling dense coastal populations to thrive despite small agrarian hinterlands [@Eshel2024Thousand; @Koiv2022Monarchy].

<figure class="crd-figure-block" id="fig:density">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ancient-anatolia-levant-arabia/fig3_ancient_anatolia_levant_arabia_density.png" alt="fig:density" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Continuous Late Bronze and Iron Age kriged settlement intensity surface (left) and sub-regional population densities at 539BC (right).</figcaption>
</figure>

In the Southern Levant (Israel, Judah and Transjordan), the trajectory followed a sharp inverted curve. After growing steadily from 190k in 3200BC to 340k in 2000BC and 490k in 1300BC across Canaanite city-states such as Hazor, Megiddo, Ashqelon and Tel Bet Yerah, the highland interior filled rapidly during Iron Age I and II. By 800BC, the kingdoms of Israel and Judah together with Moab, Ammon and Edom across the Jordan supported roughly 690k inhabitants (5,9 persons per km²), anchored by Samaria, Jerusalem, Beersheba and terraced olive-and-grain villages [@Dziadosz2023Covenants; @Routledge2017There]. Between 734BC and 586BC, however, repeated Neo-Assyrian and Neo-Babylonian campaigns devastated Galilee, deported the population of Samaria and burned Jerusalem, Lachish and coastal Philistine towns. Consequently, the Southern Levant is the only sub-region in this chapter whose population fell before 539BC, dropping 18,8% from 690k in 800BC to 560k at the dawn of the Persian period.

## Arabia: Saba, Ma'in, Qataban, Hadhramaut, Dilmun and Magan

Southern and Eastern Arabia reveal how sharply localised water-harvesting technology reshaped ancient carrying capacities outside the major river basins. South Arabia—comprising the kingdoms of Saba, Ma'in, Qataban and Hadhramaut across modern Yemen and Najran—began with 220k inhabitants in 3200BC on rain-fed highland terraces and wadi floors. As check-dams, stone terraces and large-scale flood-diversion barrages matured along the eastern desert fringe at Ma'rib, Sirwah, Timna and Shabwa, population climbed to 410k in 2000BC, 650k in 1300BC and 950k in 800BC, reaching 1,25M by 539BC. That figure made the South Arabian Kingdoms the third most populous sub-region in the entire chapter, ahead of the Northern Levant and nearly equal to Central Anatolia, supported by a combination of monsoon-fed sorghum, millet and barley cultivation and a monopoly over frankincense and myrrh exports along the western Arabian caravan trail [@EfratKowalsky2022Text].

Along the Persian Gulf and Oman Sea, Dilmun (centred on Bahrain and Failaka) and Magan (the Hajar mountains and interior oases of Oman and the eastern Emirates) rose from 95k in 3200BC to 190k in 2000BC on Bronze Age copper smelting and date-palm *aflaj* irrigation at Bat, Hili, Salut and Qalat al-Bahrain, advancing more modestly to 240k in 1300BC, 280k in 800BC and 340k in 539BC. In interior Oman, early third-millennium tower settlements of the Hafit and Umm an-Nar horizons tapped piedmont gravel aquifers through gravity-fed underground channels, creating durable oasis islands amid arid limestone ridges.

Meanwhile, North and Central Arabia—covering nearly 1,94M km², or 53,7% of the chapter's total land area—held only 160k people in 3200BC and 580k in 539BC (barely 0,3 persons per km²), concentrated in camel-herding confederations and walled incense-route oases such as Tayma, Dedan, Qurayyah, Yathrib and Dumat al-Jandal. The domestication and widespread adoption of the dromedary camel after 1200BC transformed these scattered desert wells from isolated survival stations into lucrative way-stations linking Hadhramaut and Ma'rib directly to Damascus, Gaza and Assyrian frontier garrisons, explaining why interior Arabian numbers rose more rapidly between 1300BC and 539BC (70,6%) than during the preceding millennium.

## Urban Hierarchy and Leading Settlements

Across all 820 individually assessed settlements in Chapter 4, the peak-size distribution yields a steep, well-fitted Zipf rank-size exponent of $\alpha = 1{,}31$ ($R^2 = 0{,}89$). Incorporating hundreds of smaller Bronze and Iron Age tell mounds and survey villages from the Near East Holocene Urban Settlement Database (Palmisano et al. 2021), From Villages to Empires (Titolo and Palmisano 2025), NERD and C-Turkey alongside Archaic Greek coastal *poleis* from Stanford POLIS produces a steeper tail than a capitals-only sample while preserving a polycentric urban summit. Figure 4 illustrates this multi-centred urban hierarchy: rather than one imperial metropolis dominating the entire macro-region, rival capitals, Aegean-Propontic maritime *poleis*, Phoenician ports and South Arabian oasis centres reached 34,2k to 64,4k inhabitants above a deep base of regional towns and farming tells.

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ancient-anatolia-levant-arabia/fig4_ancient_anatolia_levant_arabia_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 5.</span> Rank-size distribution across 820 individually assessed ancient settlements (left) and the twelve largest urban centres by peak population before 539BC (right).</figcaption>
</figure>

At the apex of the hierarchy, late Archaic Aegean and Propontic *poleis*—Chios (64,4k in 539BC), Kalchedon (60k), Lampsakos (55,4k) and Parion (46,2k)—stand alongside Lydian Sardis (44,5k in 560BC), imperial Hittite Hattusa (41,5k in 1300BC), Phoenician Tyre (41,2k in 650BC), Apollonia (38,4k), Kios (38,4k), Skepsis (38,4k), Ionian Miletus (34,5k in 539BC) and Sabaean Marib (34,2k in 539BC) to form the twelve highest-peaking centres across the macro-region. Immediately below them stood Halicarnassus (34,2k), Byzantium (32,9k), Aramean Damascus (32,5k in 820BC), Sidon (31,5k in 750BC), Cypriot Karpasia (29,7k), Old Assyrian-period Kanesh (29,4k in 1800BC), Rhodos (29k), Tyrodiza (25,2k), Phrygian Gordium (24,8k), Amorite-era Qatna (24,6k), Cypriot Salamis (24,4k), Erythrae (24k), Luwian Türkmen-Karahöyük (23,2k), Keryneia (22,7k), Aleppo (22,4k), late monarchic Jerusalem (21,8k), Ephesus (21,4k) and Carchemish (21,4k). Even at their late Archaic and imperial zeniths, these rain-fed plateau capitals, maritime city-states and dam-fed oases peaked below 65k inhabitants, reflecting the tighter provisioning ceilings of overland pack transport and dry-farmed agrarian hinterlands compared with barge-fed alluvial metropolises on the Nile and Euphrates.

To account for multi-tier settlement scaling without distorting rural background densities, HANDBOOK pairs these 820 individually assessed settlements with 48.289 continuous grid cells across the ten sub-regions. Where river-trunk models concentrate over half of regional population inside a single valley floor, the polycentric urban belt running from Ionia and Cilicia through Aleppo, Tyre and Damascus to Ma'rib leaves broad expanses of cultivated hill country and piedmont villages between walled towns, producing smoother density gradients across both coastal plains and upland basins.

# Limitations

Four structural uncertainties govern these estimates and justify uncertainty margins of roughly $\pm 15\%$ to $\pm 25\%$ around individual sub-regional series. First, residential density multipliers on tell mounds remain sensitive to internal non-residential space: palaces, temples, fortifications and open courtyards occupied anywhere from 25% to 45% of walled urban footprints at Hattusa, Ugarit and Kerkenes [@Palmisano2017Confrontin; @Osborne2020City]. Where excavation exposures cover less than 5% of a lower town, total resident figures carry unavoidable variance.

Second, survey intensity varies sharply across modern national frontiers. Intensive pedestrian coverage in central Turkey, coastal Israel, western Syria and northern Oman records dense scatters of 1-hectare hamlets, whereas Yemen, interior Saudi Arabia and rugged Pontic valleys remain far more lightly surveyed. Although non-stationary Matérn kriging bridges un-surveyed gaps via biophysical covariates and 250 km cross-frontier conditioning buffers, low-density pastoral regions in Najd, Rub' al-Khali and eastern Jordan rest on thinner primary archaeological counts than the Mediterranean littoral.

Third, chronological resolution in multi-period surface surveys blurs rapid short-term shocks. A century-long drought around 2200BC or the Assyrian devastations of 734-701BC can be isolated cleanly at stratified radiocarbon sites such as Tell Tayinat or Çadır Höyük [@Manning2020Beyond; @Ross2019Anatolian], yet unstratified Iron Age pottery scatters blend growth and contraction across two-century ceramic phases. Finally, pastoral nomads along the Syrian steppe and northern Arabian desert left ephemeral stone camps and rock inscriptions rather than tell mounds, requiring ecological carrying-capacity ceilings rather than direct house counts.

# Conclusion

Between 3200BC and 539BC, Anatolia, Cyprus, the Levant and Arabia grew from 1,98M to 8,17M inhabitants without relying on a single great alluvial trunk river. Instead, demographic expansion rested on a diversified mosaic of rain-fed Mediterranean valleys, Anatolian plateau basins, terraced Yemeni mountain slopes and irrigated Gulf oases. Early and Middle Bronze Age urbanisation doubled regional numbers by 2000BC and pushed them to 5,32M by 1300BC under Hittite and Levantine palace administration. When the Late Bronze Age system broke around 1200BC, population did not collapse across the macro-region as a whole: growth shifted toward Aegean Western Anatolia, Phoenician port cities, Aramean Syria and the frankincense-trading kingdoms of Saba and Qataban, raising total numbers to 8,17M by 539BC even as Neo-Assyrian and Neo-Babylonian deportations temporarily depressed the Southern Levant. Grounded in 820 individually assessed settlements, Matérn ($\nu = 3/2$) radial kriging and mass-conserving subadministrative GIS scaling, these ten series establish the pre-Achaemenid baseline for the Hellenistic and Roman Near East.

# Appendix

## Biophysical Covariates and Kriging Diagnostics

Table 5 documents the calibrated Matérn ($\nu = 3/2$) semivariogram parameters and weighted least-squares biophysical regression coefficients governing the spatial interpolation of Bronze and Iron Age archaeological site intensity across the chapter domain.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Tau1 (Tau2)</th><th class="crd-th">Nugget / R2</th><th class="crd-th">Beta Hab / Eco</th><th class="crd-th">Beta Fluvial / Coast</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Early &amp; Middle Bronze Age (03)</strong></td><td class="crd-td">1,51 (2,9)</td><td class="crd-td">0,04 / 0,999</td><td class="crd-td">0,015 / 0,01</td><td class="crd-td">0,087 / 0,083</td></tr>
<tr><td class="crd-td"><strong>Late Bronze &amp; Iron Age (04)</strong></td><td class="crd-td">1,56 (2,9)</td><td class="crd-td">0,04 / 0,999</td><td class="crd-td">0,01 / 0,01</td><td class="crd-td">0,083 / 0,08</td></tr>
<tr><td class="crd-td"><strong>Pan-Domain Calibrated Baseline</strong></td><td class="crd-td">1,35 (2,9)</td><td class="crd-td">0,04 / 0,999</td><td class="crd-td">0,01 / 0,01</td><td class="crd-td">0,075 / 0,076</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Calibrated Matérn (nu = 3/2) semivariogram range parameters and biophysical covariate weights for Bronze and Iron Age spatial disaggregation.</figcaption>
</figure>

## Sub-Regional Area and Density Benchmarks at 539BC

Table 6 pairs the ten sub-regions' estimated geodesic land areas (derived from the smooth vector boundary GeoJSON polygons) with their 3200BC and 539BC population densities, highlighting the stark ecological gradient between maritime Cyprus, Aegean Anatolia and the northern Levant on one hand and the vast Arabian interior on the other.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">3200BC/km²</th><th class="crd-th">539BC/km²</th><th class="crd-th">Primary Economic Base</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cyprus (Alashiya)</strong></td><td class="crd-td">9,35k</td><td class="crd-td">3</td><td class="crd-td">19,3</td><td class="crd-td">Troodos copper, olive-grain farming, coastal ports</td></tr>
<tr><td class="crd-td"><strong>Western Anatolia and Aegean Coast</strong></td><td class="crd-td">150,6k</td><td class="crd-td">1,9</td><td class="crd-td">9,6</td><td class="crd-td">Alluvial valley farming, Aegean-Lydian trade</td></tr>
<tr><td class="crd-td"><strong>Northern Levant (Syria and Phoenicia)</strong></td><td class="crd-td">128,7k</td><td class="crd-td">2,4</td><td class="crd-td">9,2</td><td class="crd-td">Orontes grain, Phoenician silver &amp; cedar ports</td></tr>
<tr><td class="crd-td"><strong>Southern Anatolia (Cilicia and Luwia)</strong></td><td class="crd-td">93,4k</td><td class="crd-td">1,9</td><td class="crd-td">7,9</td><td class="crd-td">Cilician plain irrigation, Taurus silver &amp; timber</td></tr>
<tr><td class="crd-td"><strong>Central Anatolia (Hatti)</strong></td><td class="crd-td">204,1k</td><td class="crd-td">1,7</td><td class="crd-td">6,3</td><td class="crd-td">Dry-farmed plateau cereals, pastoral flocks</td></tr>
<tr><td class="crd-td"><strong>Northern Anatolia and Pontus</strong></td><td class="crd-td">120,5k</td><td class="crd-td">1,3</td><td class="crd-td">5,1</td><td class="crd-td">Pontic timber, valley orchards, Black Sea littoral</td></tr>
<tr><td class="crd-td"><strong>Southern Levant (Israel, Judah, Transjordan)</strong></td><td class="crd-td">117,1k</td><td class="crd-td">1,6</td><td class="crd-td">4,8</td><td class="crd-td">Highland terraces, olive-wine-barley estates</td></tr>
<tr><td class="crd-td"><strong>South Arabian Kingdoms</strong></td><td class="crd-td">454,5k</td><td class="crd-td">0,5</td><td class="crd-td">2,8</td><td class="crd-td">Monsoon terraced highlands, Ma'rib dam, incense</td></tr>
<tr><td class="crd-td"><strong>Dilmun and Magan (Oman and Gulf)</strong></td><td class="crd-td">395,2k</td><td class="crd-td">0,2</td><td class="crd-td">0,9</td><td class="crd-td">Copper metallurgy, oasis aflaj, Gulf sea trade</td></tr>
<tr><td class="crd-td"><strong>North and Central Arabia</strong></td><td class="crd-td">1,94M</td><td class="crd-td">0,1</td><td class="crd-td">0,3</td><td class="crd-td">Oasis date gardens, camel herding, caravan trails</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Geodesic area, population density (inhabitants per km²) at 3200BC and 539BC, and dominant agrarian bases across the ten sub-regions.</figcaption>
</figure>

# Sources

::: {#refs}
:::
