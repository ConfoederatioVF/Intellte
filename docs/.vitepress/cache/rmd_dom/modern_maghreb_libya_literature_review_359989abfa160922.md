---
title: "The Maghreb and Libya after Independence"
subtitle: "Census Transition, Coastal Metropolises and Saharan Oases, 1951AD-2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: modern_maghreb_libya_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_modern_maghreb_libya_spatial.png"
hero_caption: "Sub-regional administrative framework across Morocco, Algeria, Tunisia, Libya and Western Sahara from 1951AD to 2026AD, contrasting the Mediterranean and Atlantic littoral plains against the Atlas highlands, steppe plateaux and Saharan oasis basins."
hero_label: "fig:hero-modern-maghreb-libya"
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

Between Libyan independence in 1951AD and 2026AD, the combined population of Morocco, Algeria, Tunisia, Libya and Western Sahara more than quadrupled, expanding from 24,6M inhabitants in 1951AD to 31,85M in 1965AD, 43,2M in 1977AD, 55,9M in 1987AD, 73,1M in 2004AD, 87,4M in 2014AD and 103,8M by 2025AD. Across these seven decades, North Africa west of the Egyptian frontier shifted from a predominantly rural agrarian and pastoral society into an urbanised littoral civilization anchored along the Atlantic and Mediterranean coasts from Agadir and Casablanca through Algiers and Tunis to Tripoli and Benghazi. Rapid post-colonial mortality decline drove high natural increase through the 1960s and 1970s before divergent fertility transitions reshaped regional growth rates: Tunisia and Morocco moved swiftly toward replacement-level fertility through rising age at marriage, female schooling and family planning, whereas Algeria experienced a pronounced post-2000 rebound in births that widened its demographic lead over its neighbours. Across the Atlas mountains and the High Plateaux, rural-to-urban migration emptied remote villages while transforming intermediate steppe towns and Saharan administrative oases such as Laâyoune, Tamanrasset, Adrar, Ouargla and Sabhā into fast-growing nodes of hydrocarbon extraction, state employment and trans-Saharan transit. HANDBOOK reconstructs this 110-subregion macro-domain from 3.054 catalogued urban, communal and oasis settlements, non-stationary Matérn ($\nu = 3/2$) kriging over metric-isotropic radial distance fields and strictly mass-conserving pycnophylactic disaggregation across 29 historical and 2.629 modern subadministrative census polygons.

<figure class="crd-figure-block" id="fig:hero-modern-maghreb-libya">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-maghreb-libya/fig1_modern_maghreb_libya_spatial.png" alt="fig:hero-modern-maghreb-libya" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Sub-regional administrative framework across Morocco, Algeria, Tunisia, Libya and Western Sahara from 1951AD to 2026AD, contrasting the Mediterranean and Atlantic littoral plains against the Atlas highlands, steppe plateaux and Saharan oasis basins.</figcaption>
</figure>

# Background

Geographically, the post-colonial Maghreb and Libya form a vast rectangle of roughly 5,78M km² in which nearly nine-tenths of the population lives within a narrow coastal and piedmont ribbon less than 150 km wide. Along the Atlantic plains of Morocco, the Tell Atlas valleys of northern Algeria, the Tunisian Tell and Sahel olive littoral and the Gefara and Jabal al-Akhdar margins of Libya, winter rainfall above 300 mm sustained dense wheat, barley, olive and citrus cultivation long before independence [@Amara2018Rural; @D2026Spatial]. South of the Saharan Atlas and the Tripolitanian escarpment, rainfall drops below 100 mm, confining permanent settlement to artesian oasis chains in the Drâa, Tafilalet, Touat, Gourara, M'zab, Souf and Fezzan basins and along the desert Atlantic littoral of Western Sahara.

Decolonisation arrived in uneven stages between December 1951 and the mid-1970s, leaving distinct administrative and demographic legacies across the five jurisdictions. Libya became an independent kingdom in December 1951 with just over 1M inhabitants scattered between Tripolitania, Cyrenaica and Fezzan, before petroleum exports from the Sirte Basin after 1961AD funded rapid sedentarisation, public health expansion and foreign labour immigration. Tunisia and Morocco achieved independence in March 1956, inheriting modern port infrastructure, railway corridors and cadastral civil registries alongside sharp rural-urban income divides [@Amara2018Rural]. Algeria endured a protracted war of liberation from 1954AD to 1962AD that displaced more than two million rural residents into military regroupment centres and peri-urban bidonvilles, followed at independence by the sudden departure of nearly one million European settlers from Algiers, Oran, Annaba and Constantine [@Kamilia2025Relationsh; @Lamri2020Impact]. In Western Sahara, Spanish administration ended in 1975AD–1976AD amid territorial partition and conflict, splitting the indigenous Sahrawi population between rapidly growing Moroccan-administered coastal towns and refugee camps near Tindouf in southwestern Algeria.

The engine of post-independence expansion across all five polities was the classic mismatch between plunging mortality and delayed fertility decline. Infant mortality fell sharply after independence through vaccination campaigns, penicillin distribution, maternal clinics and piped urban water, lifting life expectancy at birth from roughly 42 to 45 years in the early 1950s to above 74 years by the 2020s [@Conte2024Marriage; @O2026Oncogeriat]. Crude birth rates remained above 45 per thousand well into the 1970s, generating annual population growth exceeding 3% in Algeria and Libya and 2,5% to 2,8% in Morocco and Tunisia.

From the late 1970s onward, however, the Maghreb diverged sharply along national policy lines. Tunisia pioneered an explicit state family-planning programme soon after independence, raising the legal minimum age at marriage, legalising contraception and abortion and expanding female secondary schooling; its total fertility rate fell below 2,1 children per woman around 2000AD [@Conte2024Marriage]. Morocco followed more gradually through spontaneous nuptiality postponement, rising female literacy and urban housing costs, dropping from over 7 children per woman in 1960AD to roughly 2,1 to 2,2 by the 2010s and approaching 1,97 in the 2024 census [@Conte2024Marriage; @O2026Oncogeriat]. Algeria, by contrast, initially pursued a pronatalist industrialisation strategy during the 1960s and 1970s under the slogan that economic development was the best contraceptive, before reversing course in 1983AD [@OuadahBedidi2013Fertility]. Once contraception and delayed marriage took hold during the housing crisis and civil conflict of the 1990s, Algerian fertility plunged from 5,4 children per woman in 1986AD to 2,4 by 2000AD—only to stage an unexpected rebound above 3 children per woman between 2005AD and 2018AD as oil-funded housing programmes, rising marriage rates and improved security spurred a baby boom [@OuadahBedidi2013Fertility; @OuadahBedidi2018Gender; @Kamilia2025Relationsh]. Libya mirrored Algeria's later plateau, with sustained fertility decline moderated by youth marriage subsidies and oil-rentier welfare transfers before civil war after 2011AD disrupted both vital registration and labour migration.

# Methodology

Under Regime 3 of HANDBOOK, the modern demographic reconstruction from 1951AD to 2026AD anchors regional totals directly to official post-colonial census enumerations rather than speculative back-projections. The domain is partitioned into 110 contiguous subadministrative-derived regions across Morocco (16 regions), Algeria (48 wilayas), Tunisia (23 governorate polygons), Libya (22 sha'biyat polygons) and Western Sahara (1 administrative unit), mapped onto 63.278 habitable 5-arcminute grid cells. Seven macro-historical benchmark years anchor the continuous trajectory: 1951AD (Libyan independence and late Protectorate baseline), 1965AD (immediate post-Algerian independence reconstruction), 1977AD (first post-1973 oil-boom census wave), 1987AD (structural adjustment and mid-transition fertility decline), 2004AD (Tunisian and Moroccan replacement-fertility threshold), 2014AD (post-Arab Spring census round) and 2025AD (contemporary demographic horizon incorporating the 2024 Moroccan and Tunisian censuses).

To assemble a unified urban and oasis settlement hierarchy across all five jurisdictions without relying on single global aggregators, HANDBOOK harvests primary municipal and communal enumerations directly from the five national statistical frameworks: the Haut-Commissariat au Plan (HCP Morocco) covering the censuses of 1960, 1971, 1982, 1994, 2004, 2014 and 2024; the Office National des Statistiques (ONS Algeria) covering 1966, 1977, 1987, 1998 and 2008 plus official intercensal municipal projections; the Institut National de la Statistique (INS Tunisia) covering 1956, 1966, 1975, 1984, 1994, 2004, 2014 and 2024; the Bureau of Statistics and Census (BSC Libya) covering 1954, 1964, 1973, 1984, 1995 and 2006 plus 2020 official estimates; and Spanish colonial censuses (1950–1974) linked with HCP regional enumerations (1982–2024) for Western Sahara. Every candidate municipality was checked for spatial coordinates, boundary mergers and subordinate suburban double counting across decennial cohorts.

Spatial disaggregation from national and subadministrative totals onto 5-arcminute continental cells preserves every recorded administrative sum while capturing fine-grained coastal, piedmont and oasis density gradients. Historical colonial enumerations across Morocco, Algeria, Tunisia and Libya (1880AD–1960AD) establish pre-independence provincial shares, while modern first- and second-order administrative polygons from geoBoundaries [@Runfola2020GeoBoundaries] supply exact sub-national constraints for 1977AD–2024AD. Underneath those census polygons, HANDBOOK applies non-stationary Matérn ($\nu = 3/2$) kriging on Freeman-Tukey transformed site residuals calibrated across metric-isotropic radial distance fields and biophysical covariates (natural land cover, ecological suitability, fluvial proximity and coastal access), bounded by a two-cell urban core mask so dense metropolitan enclaves do not bleed artificially into adjacent arid pasture. Disaggregation enforces strictly mass-conserving pycnophylactic scaling across every administrative polygon, guaranteeing that the sum of gridded cells inside each wilaya, province, governorate or sha'biya reproduces its enumerated census total.

# Testing and Validation

Auditing a five-country demographic series spanning 1951AD to 2026AD requires checking both settlement inclusion integrity and administrative mass conservation. Across the chapter domain, 3.309 candidate urban, communal and oasis settlements were screened and deduplicated into 3.054 included settlements, with 255 duplicate aliases and subordinate metropolitan suburbs merged cleanly into canonical urban cores to prevent double counting. Table 1 summarises the provenance of the 3.054 catalogued settlements across the five national census authorities.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Primary Census Authority</th><th class="crd-th">Settlements</th><th class="crd-th">Census Span</th><th class="crd-th">Analytical Role</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Morocco (MAR)</strong></td><td class="crd-td">Haut-Commissariat au Plan (HCP)</td><td class="crd-td">1.433</td><td class="crd-td">1960-2024</td><td class="crd-td">Communes, urban centres &amp; prefectures across Atlantic &amp; Atlas</td></tr>
<tr><td class="crd-td"><strong>Algeria (DZA)</strong></td><td class="crd-td">Office National des Statistiques (ONS)</td><td class="crd-td">1.346</td><td class="crd-td">1966-2008</td><td class="crd-td">Wilaya &amp; commune series across Tell, Steppe &amp; Sahara</td></tr>
<tr><td class="crd-td"><strong>Tunisia (TUN)</strong></td><td class="crd-td">Institut National de la Statistique (INS)</td><td class="crd-td">156</td><td class="crd-td">1956-2024</td><td class="crd-td">Governorates &amp; communes across Tell, Sahel &amp; South</td></tr>
<tr><td class="crd-td"><strong>Libya (LBY)</strong></td><td class="crd-td">Bureau of Statistics and Census (BSC)</td><td class="crd-td">113</td><td class="crd-td">1954-2006</td><td class="crd-td">Sha'biyat &amp; baladiyat series across coast &amp; Fezzan</td></tr>
<tr><td class="crd-td"><strong>Western Sahara (ESH)</strong></td><td class="crd-td">Spanish Colonial &amp; HCP Regional</td><td class="crd-td">6</td><td class="crd-td">1950-2024</td><td class="crd-td">Saharan coastal &amp; interior settlement anchors</td></tr>
<tr><td class="crd-td"><strong>Total Domain</strong></td><td class="crd-td">Five National Statistical Authorities</td><td class="crd-td">3.054</td><td class="crd-td">1950-2024</td><td class="crd-td">Primary urban hierarchy (Zipf alpha = 1,021)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> National census agencies and settlement provenance across Morocco, Algeria, Tunisia, Libya and Western Sahara (1951AD-2026AD).</figcaption>
</figure>

Before independence, colonial statistical offices established the baseline territorial distribution across Moroccan Protectorate regions, the three northern Algerian *départements* plus the *Territoires du Sud*, Tunisian *contrôles civils* and the three Italian Libyan provinces. Table 2 reproduces these historical subadministrative enumerations from the late nineteenth century to 1960AD, providing the structural anchor at the 1951AD opening threshold of this chapter.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Code</th><th class="crd-th">Historical Administrative Unit</th><th class="crd-th">Early Benchmark</th><th class="crd-th">Interwar Benchmark</th><th class="crd-th">Independence Threshold</th><th class="crd-th">Census Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Morocco (French &amp; Spanish Protectorate Régions)</td><td class="crd-td">4,2M (1880)</td><td class="crd-td">7,04M (1936)</td><td class="crd-td">11,63M (1960)</td><td class="crd-td">Recensement Général du Maroc 1936, 1952 &amp; 1960</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Territoires du Sud (Algerian Sahara)</td><td class="crd-td">280k (1886)</td><td class="crd-td">642,7k (1936)</td><td class="crd-td">850k (1954)</td><td class="crd-td">Recensement Général de l'Algérie 1886-1954 (Gouvernement Général)</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Département d'Alger (Central Algeria)</td><td class="crd-td">1,38M (1886)</td><td class="crd-td">2,24M (1936)</td><td class="crd-td">3,09M (1954)</td><td class="crd-td">Recensement Général de l'Algérie 1886-1954 (Gouvernement Général)</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Département de Constantine (Eastern Algeria)</td><td class="crd-td">1,57M (1886)</td><td class="crd-td">2,73M (1936)</td><td class="crd-td">3,44M (1954)</td><td class="crd-td">Recensement Général de l'Algérie 1886-1954 (Gouvernement Général)</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Département d'Oran (Western Algeria)</td><td class="crd-td">870,5k (1886)</td><td class="crd-td">1,62M (1936)</td><td class="crd-td">2,15M (1954)</td><td class="crd-td">Recensement Général de l'Algérie 1886-1954 (Gouvernement Général)</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">Protectorate of Tunisia (Contrôles Civils)</td><td class="crd-td">1,5M (1881)</td><td class="crd-td">2,61M (1936)</td><td class="crd-td">3,78M (1956)</td><td class="crd-td">Dénombrement de la Population de la Tunisie 1921-1956</td></tr>
<tr><td class="crd-td"><strong>LBY</strong></td><td class="crd-td">Italian Libya (Tripolitania, Cyrenaica &amp; Fezzan)</td><td class="crd-td">780k (1880)</td><td class="crd-td">848,6k (1936)</td><td class="crd-td">1,09M (1954)</td><td class="crd-td">ISTAT Censimento della Libia 1931, 1936 &amp; UN/Libya 1954 Census</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Historical subadministrative census enumerations across Morocco, Algeria, Tunisia and Libya (1880AD-1960AD) anchoring the post-independence spatial baseline.</figcaption>
</figure>

For the post-independence period, Table 3 documents the modern geoBoundaries administrative polygon coverage [@Runfola2020GeoBoundaries] matched across the five jurisdictions, spanning second-order prefectures, provinces and wilayas in Morocco and Algeria and first-order governorates and sha'biyat in Tunisia, Libya and Western Sahara.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ISO3</th><th class="crd-th">Admin Level</th><th class="crd-th">Matched Units</th><th class="crd-th">Census Span</th><th class="crd-th">Series Count</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">63</td><td class="crd-td">1994-2024</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">ADM2</td><td class="crd-td">44</td><td class="crd-td">1977-2008</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">ADM1</td><td class="crd-td">24</td><td class="crd-td">1984-2024</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>LBY</strong></td><td class="crd-td">ADM1</td><td class="crd-td">17</td><td class="crd-td">2006-2020</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>ESH</strong></td><td class="crd-td">ADM1</td><td class="crd-td">1</td><td class="crd-td">1994-2024</td><td class="crd-td">4</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Modern geoBoundaries subadministrative district coverage across five Maghreb and Libyan jurisdictions supporting pycnophylactic spatial disaggregation.</figcaption>
</figure>

Across the broader MENA calibration domain, 83.857 weighted domestic records partition into 3.416 Voronoi catchments (1.942 active catchments per horizon, median radius 32,51 km and 90th-percentile radius 40,25 km) across 168.112 continental grid cells, yielding calibrated Matérn ($\nu = 3/2$) semivariogram ranges of $\tau_1 = 1{,}35$ and $\tau_2 = 2{,}90$ with nugget-to-sill ratio $0{,}04$ and $R^2 = 0{,}999$. Across the 29 historical subadministrative regions and 2.629 modern administrative units checked across 83 benchmark years, 65.864 unit-year pycnophylactic conservation audits confirm zero mass drift, with 100% of units matching enumerated totals within 0,01% and a global maximum relative error of 5,845e-08.

Table 4 reports the eighteen largest modern ADM2 and ADM1 enumerations matched in HANDBOOK across Morocco, Algeria, Tunisia and Libya, stripped of non-Latin script tokens for clean typographic rendering and ordered by latest recorded census population.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Code</th><th class="crd-th">Administrative Unit</th><th class="crd-th">Level</th><th class="crd-th">Area</th><th class="crd-th">Earliest Match</th><th class="crd-th">Latest Match</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Prefecture of Casablanca</td><td class="crd-td">ADM2</td><td class="crd-td">141 km²</td><td class="crd-td">2,72M (1994)</td><td class="crd-td">3,22M (2024)</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Préfecture de Marrakech</td><td class="crd-td">ADM2</td><td class="crd-td">2.575 km²</td><td class="crd-td">861,2k (1994)</td><td class="crd-td">1,57M (2024)</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Prefecture of Tangier - Assilah</td><td class="crd-td">ADM2</td><td class="crd-td">956 km²</td><td class="crd-td">591,9k (1994)</td><td class="crd-td">1,49M (2024)</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Province de Kenitra</td><td class="crd-td">ADM2</td><td class="crd-td">3.437 km²</td><td class="crd-td">695,1k (1994)</td><td class="crd-td">1,28M (2024)</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Préfecture de Fès</td><td class="crd-td">ADM2</td><td class="crd-td">360 km²</td><td class="crd-td">796,2k (1994)</td><td class="crd-td">1,26M (2024)</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Tizi Ouzou</td><td class="crd-td">ADM2</td><td class="crd-td">3.192 km²</td><td class="crd-td">702k (1977)</td><td class="crd-td">1,13M (2008)</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Batna</td><td class="crd-td">ADM2</td><td class="crd-td">11.775 km²</td><td class="crd-td">513,5k (1977)</td><td class="crd-td">1,12M (2008)</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Djelfa</td><td class="crd-td">ADM2</td><td class="crd-td">35.146 km²</td><td class="crd-td">332,5k (1977)</td><td class="crd-td">1,09M (2008)</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Prefecture of Salé</td><td class="crd-td">ADM2</td><td class="crd-td">702 km²</td><td class="crd-td">631,8k (1994)</td><td class="crd-td">1,09M (2024)</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">Tunis</td><td class="crd-td">ADM1</td><td class="crd-td">345 km²</td><td class="crd-td">774,4k (1984)</td><td class="crd-td">1,08M (2024)</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">Sfax</td><td class="crd-td">ADM1</td><td class="crd-td">6.675 km²</td><td class="crd-td">578k (1984)</td><td class="crd-td">1,05M (2024)</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Blida</td><td class="crd-td">ADM2</td><td class="crd-td">2.619 km²</td><td class="crd-td">501k (1977)</td><td class="crd-td">1M (2008)</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Chlef</td><td class="crd-td">ADM2</td><td class="crd-td">3.883 km²</td><td class="crd-td">429,8k (1977)</td><td class="crd-td">1M (2008)</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">M'Sila</td><td class="crd-td">ADM2</td><td class="crd-td">18.268 km²</td><td class="crd-td">416,7k (1977)</td><td class="crd-td">990,6k (2008)</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">Nabeul</td><td class="crd-td">ADM1</td><td class="crd-td">2.890 km²</td><td class="crd-td">461,4k (1984)</td><td class="crd-td">863,2k (2024)</td></tr>
<tr><td class="crd-td"><strong>LBY</strong></td><td class="crd-td">Benghazi</td><td class="crd-td">ADM1</td><td class="crd-td">9.709 km²</td><td class="crd-td">675k (2006)</td><td class="crd-td">807,3k (2020)</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">Sousse</td><td class="crd-td">ADM1</td><td class="crd-td">2.638 km²</td><td class="crd-td">322,5k (1984)</td><td class="crd-td">762,3k (2024)</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">Ben Arous</td><td class="crd-td">ADM1</td><td class="crd-td">536 km²</td><td class="crd-td">246,2k (1984)</td><td class="crd-td">722,8k (2024)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading modern ADM2 and ADM1 administrative enumerations matched across Morocco (1994-2024), Algeria (1977-2008), Tunisia (1984-2024) and Libya (2006-2020).</figcaption>
</figure>

These subadministrative enumerations expose sharp internal structural contrasts that national totals alone conceal. In Morocco, the Prefecture of Casablanca (537 km²) peaked at 3.359.818 residents in 2014AD before edging down by 4,2% to 3.218.036 in 2024AD as middle-income households and industrial estates spilled into surrounding Mohammedia, Nouaceur and Médiouna within the wider Casablanca-Settat region (which grew from 5,13M in 1994AD to 7,69M in 2024AD). By contrast, Tangier-Assilah (1.145 km²) surged by 152,5% over thirty years, climbing from 591,9k in 1994AD to 1,49M in 2024AD on port-industrial investment at Tanger-Med, while Rabat prefecture contracted from 627,9k in 2004AD to 515,6k in 2024AD even as its twin-bank commuter city Salé climbed from 631,8k to 1,09M. In Algeria, interior steppe and mountain wilayas such as Djelfa (more than tripling from 332,5k in 1977AD to 1,09M in 2008AD), Batna (513,5k to 1,12M) and M'Sila (416,7k to 990,6k) expanded far faster than dense Kabyle Tizi Ouzou, which plateaued after 1998AD at 1,13M [@Abdelhafid2023Problem; @Abbas2024Impact]. In Tunisia, Greater Tunis spilled outward from the core governorate (774,4k in 1984AD to 1,08M in 2024AD) into Ben Arous (246,2k to 722,8k) and Ariana (up to 668,6k), while coastal Sousse more than doubled from 322,5k to 762,3k [@Amara2018Rural].

# Results

Across the entire macro-region from 1951AD to 2025AD, aggregate population multiplied by a factor of 4,22, rising from 24,6M to 103,8M at an average compound growth rate of 1,97% per year. Figure 2 traces this sustained expansion across the seven benchmark horizons alongside the leading regional subdivisions. Growth peaked in relative terms between 1965AD and 1977AD (+35,6%, or 2,57% per year) and between 1977AD and 1987AD (+29,4%, or 2,61% per year), when post-colonial public health gains coincided with peak cohort sizes entering marriageable age. Deceleration followed between 1987AD and 2004AD (+30,8% over seventeen years, or 1,59% annually) as Tunisian and Moroccan fertility fell rapidly and Algerian childbearing dipped temporarily during the 1990s. Between 2004AD and 2025AD, total population added a further 30,7M inhabitants (+42% over twenty-one years, or 1,68% annually), driven primarily by Algeria's post-2004 fertility rebound and sustained Moroccan and Libyan growth.

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-maghreb-libya/fig2_modern_maghreb_libya_trajectory.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Aggregate demographic trajectory across the Maghreb and Libya from 1951AD to 2025AD (left) and leading sub-regional benchmarks at the contemporary horizon (right).</figcaption>
</figure>

Table 5 pairs the aggregate domain series with the fourteen leading urban metropolises catalogued across the five jurisdictions from their earliest post-independence census through 2025AD. Notice how coastal and near-coastal metropolises expanded far faster than the macro-region as a whole, anchoring the 3.054-locality urban and communal hierarchy alongside rapidly growing peri-urban communes and Saharan administrative towns.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement (Country)</th><th class="crd-th">Early Census</th><th class="crd-th">1970AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD (Ratio)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Casablanca (Morocco)</strong></td><td class="crd-td">682,4k (1952)</td><td class="crd-td">1,45M</td><td class="crd-td">2,9M</td><td class="crd-td">3,26M (4,8x)</td></tr>
<tr><td class="crd-td"><strong>Algiers (Algeria)</strong></td><td class="crd-td">587,6k (1954)</td><td class="crd-td">1,11M</td><td class="crd-td">2,14M</td><td class="crd-td">3M (5,1x)</td></tr>
<tr><td class="crd-td"><strong>Ṭarābulus (Libya)</strong></td><td class="crd-td">129,7k (1954)</td><td class="crd-td">401,9k</td><td class="crd-td">958k</td><td class="crd-td">1,39M (10,7x)</td></tr>
<tr><td class="crd-td"><strong>Tanger (Morocco)</strong></td><td class="crd-td">128,5k (1952)</td><td class="crd-td">183,1k</td><td class="crd-td">604k</td><td class="crd-td">1,29M (10,1x)</td></tr>
<tr><td class="crd-td"><strong>Fès (Morocco)</strong></td><td class="crd-td">179,4k (1952)</td><td class="crd-td">313,5k</td><td class="crd-td">874,6k</td><td class="crd-td">1,2M (6,7x)</td></tr>
<tr><td class="crd-td"><strong>Marrakech (Morocco)</strong></td><td class="crd-td">215,3k (1952)</td><td class="crd-td">323,4k</td><td class="crd-td">759,6k</td><td class="crd-td">1,03M (4,8x)</td></tr>
<tr><td class="crd-td"><strong>Oran (Algeria)</strong></td><td class="crd-td">299k (1954)</td><td class="crd-td">383,4k</td><td class="crd-td">748,3k</td><td class="crd-td">1,02M (3,4x)</td></tr>
<tr><td class="crd-td"><strong>Salé (Morocco)</strong></td><td class="crd-td">46,6k (1952)</td><td class="crd-td">145,7k</td><td class="crd-td">682,1k</td><td class="crd-td">958,4k (20,6x)</td></tr>
<tr><td class="crd-td"><strong>Banghāzī (Libya)</strong></td><td class="crd-td">69,7k (1954)</td><td class="crd-td">221,9k</td><td class="crd-td">564,5k</td><td class="crd-td">806,8k (11,6x)</td></tr>
<tr><td class="crd-td"><strong>Tūnis (Tunisia)</strong></td><td class="crd-td">410k (1956)</td><td class="crd-td">503,6k</td><td class="crd-td">638,2k</td><td class="crd-td">616,4k (1,5x)</td></tr>
<tr><td class="crd-td"><strong>Constantine (Algeria)</strong></td><td class="crd-td">148,7k (1954)</td><td class="crd-td">286,7k</td><td class="crd-td">472,7k</td><td class="crd-td">568,4k (3,8x)</td></tr>
<tr><td class="crd-td"><strong>Meknès (Morocco)</strong></td><td class="crd-td">140,4k (1952)</td><td class="crd-td">240,7k</td><td class="crd-td">444k</td><td class="crd-td">564,4k (4x)</td></tr>
<tr><td class="crd-td"><strong>Rabat (Morocco)</strong></td><td class="crd-td">156,2k (1952)</td><td class="crd-td">351,9k</td><td class="crd-td">624,6k</td><td class="crd-td">522,9k (3,3x)</td></tr>
<tr><td class="crd-td"><strong>Ṣafāqis (Tunisia)</strong></td><td class="crd-td">65,6k (1956)</td><td class="crd-td">138,6k</td><td class="crd-td">262,6k</td><td class="crd-td">294,8k (4,5x)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Fourteen leading urban settlements across Morocco, Algeria, Tunisia and Libya from their earliest post-independence census through 2025AD with expansion multipliers.</figcaption>
</figure>

## Morocco and Western Sahara

Morocco entered independence in 1956AD with roughly 10M inhabitants (reaching 11,63M at the 1960AD HCP census) and climbed steadily to 33,34M in 2014AD and 36,16M in 2024AD within its northern 415.560 km² census bounds, or 36,83M including the Moroccan-administered provinces of Western Sahara. Because Morocco lacks hydrocarbon windfalls, its post-colonial demographic geography was governed by rainfall gradients, agrarian land pressure in the Rif and High Atlas and industrial-service concentration along the Atlantic corridor from Kenitra through Rabat-Salé and Casablanca to El Jadida and Safi [@Bouhoudan2024Impact; @C2026Spatiotemp]. Within the Casablanca-Rabat-Tangier littoral spine, Casablanca expanded from 682,4k in 1952AD to 2,51M in 1990AD and 3,36M inside its prefecture in 2014AD (peaking at 4,37M across its wider agglomeration in 2016AD) before core saturation shifted peripheral growth into Dar Bouazza (307,2k by 2025AD), Sidi Moumen (551,4k in 2024AD) and Settat-Berrechid [@M2026Systematic]. Further north, Rabat peaked in 2004AD at 625,3k (627,9k at the prefecture level) while cross-river Salé multiplied more than sixfold from 154,9k to 958,4k (1,09M in the wider prefecture), Témara rose to 313,5k at its 2014AD peak (301,3k in 2025AD) and Kénitra climbed more than fivefold from 95,2k to 514,9k.

The standout urban phenomenon of twenty-first-century Morocco is the northern Strait corridor. Tanger, an international zone of 128,5k residents in 1952AD, accelerated after 1990AD on free-trade manufacturing, automotive assembly and the Tanger-Med deepwater port, rising from 417k in 1990AD to 1,29M in 2025AD (10,1 times its 1952AD population) alongside neighbouring Tétouan (428,7k in 2025AD). Inland, the historic imperial capitals and regional market poles also crossed the one-million mark: Fès grew nearly fivefold to 1,2M and Marrakech expanded to 1,03M, supported by Oujda on the eastern frontier (peaking at 614k in 2023AD), Meknès (peaking at 601k in 2023AD) and Agadir (peaking at 538k in 2023AD following complete reconstruction after the February 1960 earthquake). Across the disputed Western Sahara territory, urban settlement shifted rapidly from nomadic encampments to garrison, phosphate and fishing towns after 1975AD: the geoBoundaries Western Sahara ADM1 unit rose from 252k in 1994AD to 589,8k in 2024AD (and 671k under full Moroccan regional boundaries, excluding roughly 100k Sahrawi refugees in Tindouf camps), with Boujdour rising from 24,9k in 1975AD to 45,7k in 2025AD (57,4k in the 2024 commune count), Laâyoune reaching 262,8k in 2024AD, Dakhla reaching 165,5k and Es Semara 56,6k.

## Algeria: Tell Littoral, High Plateaux and Saharan Wilayas

Algeria's demographic evolution since 1951AD exhibits sharper structural ruptures than any neighbour. At the 1954AD colonial census, the three northern *départements* (Alger 3,09M, Constantine 3,44M, Oran 2,15M) and the *Territoires du Sud* (850k) totalled 9,53M inhabitants. Wartime displacement and the 1962AD exodus of European settlers briefly depressed urban counts in Algiers and Oran, yet rapid rural influx into vacated housing and one of the highest natural increase rates in the Mediterranean propelled the national census total from roughly 12,1M in 1966AD to 16,95M in 1977AD, 23,04M in 1987AD, 29,1M in 1998AD and 34,08M in 2008AD across 2.381.741 km², approaching 47M by 2025AD [@OuadahBedidi2013Fertility; @Bank2021Algeria].

Figure 3 illustrates the continuous spatial density surface and the dramatic contrast between the densely packed northern Tell littoral and the sparse Saharan expanse. Along the Mediterranean coast, the Algiers-Oran-Constantine triad anchored industrial, port and administrative power. Algiers (El Djazaïr) grew from 587,6k in 1954AD to 1,52M in 1977AD, dipped slightly during state decentralisation policies in the early 1980s (1,51M in 1987AD) and then surged to 2,09M in 1998AD, peaking at 3,42M across its wider urban footprint in 2011AD and standing at 3M in 2025AD, spilling outward into Blida (420,9k; over 1M in Blida wilaya by 2008AD) and Bouira [@Lamri2020Impact]. Oran expanded from 277,6k in 1951AD to 1,02M in 2025AD alongside western steel and agro-industrial satellites like Sidi bel Abbès (266,6k by 2025AD). In eastern Algeria, Constantine rose from 194,4k to 568,4k while Annaba quadrupled from 100,8k to 434,8k and Sétif expanded from 73,2k to 319,9k [@Bousmaha2021Growth; @Bousmaha2024Review].

<figure class="crd-figure-block" id="fig:density">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-maghreb-libya/fig3_modern_maghreb_libya_density.png" alt="fig:density" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Continuous spatial population density surface across the Maghreb and Libya (left) and sub-regional population densities at the contemporary horizon (right).</figcaption>
</figure>

Yet the most striking spatial shift inside independent Algeria occurred not on the coast, where arable land and housing bottlenecks constrained infill, but along the semi-arid High Plateaux and Saharan piedmont. State investments in provincial capitals, administrative subdivisions and steppe road networks multiplied secondary towns across the Hodna and Aurès basins [@Abbas2024Impact; @Saidi2025Role; @Abdelhafid2023Problem]. Djelfa multiplied nearly thirteenfold from 26,8k in 1951AD to 337,3k in 2025AD (with Djelfa wilaya soaring from 332,5k in 1977AD to 1,09M in 2008AD); Batna rose from 58k to 367,3k; Biskra jumped fivefold from 51,1k to 259,7k; and M'Sila wilaya expanded from 416,7k to 990,6k. Further south, hydrocarbon exploitation at Hassi Messaoud and Hassi R'Mel plus border security garrisons turned former caravan posts into substantial cities: Ouargla multiplied ninefold from 23,8k to 215,6k, Ghardaïa grew from 28,2k to 181,3k, Béchar from 41,1k to 209,6k, El Oued from 26,6k to 236,6k, Adrar nearly thirteenfold from 6,7k to 86,6k, Tamanrasset nearly fifteenfold from 7k to 103,7k and Tindouf from 3,4k to 57,9k (excluding the Sahrawi camps).

## Tunisia: Sahel Urbanisation and Interior Disparities

Tunisia's post-independence trajectory combines the earliest fertility transition in the Arab world with a pronounced coastal-interior imbalance [@Amara2018Rural; @Conte2024Marriage]. At the 1956AD census, the former Protectorate held 3,78M people; INS enumerations subsequently recorded 6,97M in 1984AD, 8,79M in 1994AD, 9,91M in 2004AD, 10,98M in 2014AD and 11,97M in 2024AD across 163.610 km² (73,2 persons per km²). Because Tunisia dismantled traditional habous land tenures early, invested heavily in coastal tourism, textiles and light manufacturing and pushed female literacy above regional averages, fertility dropped swiftly from over 7 children per woman in 1960AD to 2 by 2000AD and roughly 1,7 to 1,8 in the early 2020s [@Conte2024Marriage].

Spatially, growth clustered overwhelmingly along the Tunis-Sfax littoral arc and the Gulf of Hammamet. Within Greater Tunis, the central municipality of Tūnis grew modestly from 401,6k in 1951AD to a census peak of 649,1k in 2004AD (616,4k by 2025AD), while suburban municipalities absorbed metropolitan overflow: Sukrah climbed from 47,2k to 157,7k, Sīdī Ḥusayn from 42k to 134k and Rawād from 28,5k to 127,5k, lifting the four governorates of Greater Tunis (Tunis, Ariana, Ben Arous and Manouba) well past 2,9M residents by 2024AD. Further south, the eastern Sahel olive-and-textile belt surged: Sūsah (Sousse) multiplied 4,6-fold from 56,2k to 257,7k (and Sousse governorate more than doubled from 322,5k in 1984AD to 762,3k in 2024AD), Monastir governorate more than doubled from 278,5k to 599,8k, Nabeul climbed from 461,4k to 863,2k and Ṣafāqis (Sfax) rose from 156,1k to 294,8k (1,05M across Sfax governorate in 2024AD). By contrast, interior agricultural and mining governorates such as El Kef (peaking at 272,4k in 1994AD and declining to 237,7k in 2024AD), Siliana and Jendouba stagnated or shrank under sustained out-migration to the littoral [@Amara2018Rural].

## Libya: Oil Urbanisation and the Tripolitania-Cyrenaica-Fezzan Triad

Libya underwent the most abrupt economic and urban transformation in North Africa. Following Italian colonial demographic contraction between 1911AD and 1931AD (when population dropped from 790k to 704,1k under desert pacification campaigns), the 1954AD UN-assisted census enumerated just 1.088.873 inhabitants across 1,68M km² of mostly desert territory, divided between Tripolitania in the west, Cyrenaica in the east and Fezzan in the deep south. Petroleum exports beginning in 1961AD severed population carrying capacity from local rainfall almost overnight. State oil revenues financed free healthcare, public housing, civil-service employment and the Great Man-Made River fossil-aquifer aqueducts bringing Saharan groundwater from Kufra and Sarir to coastal cities, lifting BSC census totals to 5,66M in 2006AD and official 2020AD estimates to 6,93M.

Urban concentration centred overwhelmingly on the two coastal poles of Tripoli and Benghazi. Ṭarābulus (Tripoli) rose more than tenfold from 129,7k in 1954AD to a peak of 1,78M in 2007AD (1,39M in 2025AD), flanked along the Tripolitanian Gefara and littoral by Az-Zāwiyah (184,8k), Janzūr (164,4k), Al-Khums (164,9k), Zlīṭan (217k) and Miṣrātah, whose port and free-zone commerce drove expansion to 378,8k (and 663,9k in Misratah sha'biya by 2020AD). In Cyrenaica, Banghāzī (Benghazi) grew to 806,8k in 2025AD (807,3k across the sha'biya in 2020AD), anchored by Jabal al-Akhdar upland towns such as Al-Bayḍā' and Al-Marj. Across the vast interior of Fezzan and the eastern oases, state transfers and aquifer irrigation lifted Sabhā to 159k in 2025AD (153,5k in Sabha sha'biya in 2020AD), Al-Jawf at Kufra to 44,8k, Awbārī to 35,8k, Marzūq to 32,5k, Ghāt to 15,6k and Ghadāmis to 12,9k.

## Fertility Transitions, Urban Hierarchy and Saharan Oases

Viewed across all 3.054 catalogued settlements, the post-independence Maghreb and Libya evolved a tightly structured urban hierarchy that conforms closely to Zipf's rank-size benchmark. Figure 4 displays the log-log rank-size distribution ($\alpha = 1{,}021$, $R^2 = 0{,}908$) alongside the twelve largest cities by peak population. Unlike earlier colonial or mediaeval eras dominated by a single trading emporium or flattened by dispersed oasis villages, modern industrial, administrative and port networks—captured down to commune and village level through Morocco HCP (2014/2024), Algeria ONS (1998/2008) and Tunisia INS enumerations—produced a near-unitary rank-size slope: Casablanca (peaking at 4,37M in 2016AD; 3,26M in 2025AD) and Algiers (peaking at 3,42M in 2011AD; 3M in 2025AD) sit at the apex as dual national metropolises, followed smoothly by Ṭarābulus (1,78M peak; 1,39M in 2025AD), Tanger (1,29M), Fès (1,2M), Marrakech (1,03M), Oran (1,02M), Salé (958,4k), Banghāzī (806,8k), Tūnis (693,5k peak; 616,4k municipal core in 2025AD, over 2,9M metropolitan agglomeration), Rabat (625,3k peak) and Oujda (614k peak) [@Bousmaha2021Growth; @Bousmaha2024Review].

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-maghreb-libya/fig4_modern_maghreb_libya_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 5.</span> Rank-size distribution across 3.054 catalogued Maghreb and Libyan settlements (left) and the twelve largest urban centres by peak population (right).</figcaption>
</figure>

Behind this balanced urban pyramid lies a profound demographic convergence and divergence. Between 1960AD and 2024AD, total fertility across Tunisia and Morocco fell by roughly 5 children per woman, driving rapid demographic ageing that is already reshaping Tunisian governorates and Moroccan health systems [@Conte2024Marriage; @O2026Oncogeriat]. Algeria traversed the same decline until 2000AD before staging a fifteen-year fertility rebound that kept annual births near one million through the 2010s and raised its 2025AD population well above Morocco's despite starting almost equal in 1951AD [@OuadahBedidi2013Fertility; @Dokali2016Human]. Across all five countries, meanwhile, water stress in semi-arid basins and urban heat and infrastructure pressures along the Atlantic and Mediterranean coastlines are emerging as the decisive ecological constraints of the mid-twenty-first century [@D2026Spatial; @M2026Systematic].

# Limitations

Four empirical and cartographic limitations qualify the post-independence Maghreb and Libyan dataset. First, national census calendars are asynchronous across the five states. Morocco and Tunisia executed modern enumerations in 2014AD and 2024AD, whereas Algeria's last fully published wilaya-and-commune census dates to April 2008 and Libya has conducted no full national census since April 2006, relying on civil-registry updates and 2020AD official estimates disrupted by post-2011AD civil conflict and internal displacement. Post-2008 Algerian and post-2011 Libyan sub-national figures therefore carry wider uncertainty margins ($\pm 5\%$ to $\pm 10\%$) than Moroccan and Tunisian commune counts.

Second, pixel-weighted areal masks behave differently from true dasymetric census densities when vast Saharan provinces are aggregated prior to pycnophylactic scaling. Uncalibrated geometric area shares assign exaggerated mass to sprawling desert divisions such as Tamanghasset, Adrar, Al Kufrah and Murzuq; only pycnophylactic disaggregation constrained by geoBoundaries polygons and biophysical covariates restores true coastal and oasis concentration [@Runfola2020GeoBoundaries].

Third, municipal boundary definitions diverge across jurisdictions. In Greater Tunis and Rabat-Casablanca, statutory central municipalities (Tūnis, Rabat and Casablanca) appear to plateau or contract slightly after 2004AD–2014AD solely because suburban ring communes (Salé, Témara, Dar Bouazza, Sukrah, Rawād, Ben Arous and Ariana) absorb metropolitan expansion, whereas Algerian *wilaya* and Libyan *baladiya* definitions bundle urban cores with surrounding rural belts.

Fourth, Western Sahara presents both statistical and political fragmentation. Moroccan HCP censuses enumerate Laâyoune (262,8k in 2024AD), Dakhla (165,5k), Boujdour (57,4k) and Es Semara (56,6k) within regional totals reaching 671k in 2024AD (589,8k inside the geoBoundaries ADM1 polygon), while the settled point gazetteer records coastal and interior towns across both Moroccan regional and Western Sahara jurisdictional codes and omits the roughly 100k Sahrawi refugees enumerated separately in Algerian camps near Tindouf.

# Conclusion

From 1951AD to 2026AD, Morocco, Algeria, Tunisia, Libya and Western Sahara experienced one of the fastest demographic expansions and spatial reorganisations in the Mediterranean world, multiplying more than fourfold from 24,6M to 103,8M inhabitants. Post-colonial mortality decline sparked rapid population growth across all five territories before national family-planning, educational and economic trajectories split the region into distinct fertility regimes: early replacement-level stabilisation in Tunisia and Morocco versus Algeria's post-2004 fertility rebound and Libya's oil-funded urbanisation. Simultaneously, agrarian push factors and state-led industrial, port and hydrocarbon investments concentrated over half the population into coastal corridors anchored by Casablanca-Rabat-Tangier, Algiers-Oran-Constantine, Tunis-Sfax and Tripoli-Benghazi, while turning remote Saharan caravan posts at Sabhā, Tamanrasset, Adrar, Ouargla and Laâyoune into permanent administrative and logistical cities. Reconciled across 3.054 catalogued settlements, Matérn ($\nu = 3/2$) spatial kriging and 65.864 mass-conserving pycnophylactic polygon checks, these series provide a consistent sub-regional baseline from decolonisation to the present.

# Appendix

## Saharan Oasis and Steppe Urbanisation Benchmarks

Table 6 documents the rapid post-1951AD expansion of seventeen principal Saharan oasis and semi-arid steppe towns catalogued in HANDBOOK across Algeria, Libya, Morocco and Western Sahara, illustrating how state administration, aquifer pumping and hydrocarbon logistics transformed desert outposts into urban centres.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Oasis or Steppe Town</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Baseline</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD (Ratio)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Djelfa (Algeria)</strong></td><td class="crd-td">34,67, 3,26</td><td class="crd-td">10,4k (1954)</td><td class="crd-td">175,9k</td><td class="crd-td">337,3k (32,3x)</td></tr>
<tr><td class="crd-td"><strong>Biskra (Algeria)</strong></td><td class="crd-td">34,85, 5,73</td><td class="crd-td">52,5k (1954)</td><td class="crd-td">182,3k</td><td class="crd-td">259,7k (4,9x)</td></tr>
<tr><td class="crd-td"><strong>El Oued (Algeria)</strong></td><td class="crd-td">33,36, 6,86</td><td class="crd-td">14,7k (1954)</td><td class="crd-td">153,8k</td><td class="crd-td">236,6k (16,1x)</td></tr>
<tr><td class="crd-td"><strong>Ouargla (Algeria)</strong></td><td class="crd-td">31,95, 5,33</td><td class="crd-td">13,6k (1954)</td><td class="crd-td">145k</td><td class="crd-td">215,6k (15,8x)</td></tr>
<tr><td class="crd-td"><strong>Béchar (Algeria)</strong></td><td class="crd-td">31,62, -2,22</td><td class="crd-td">14,8k (1954)</td><td class="crd-td">140,2k</td><td class="crd-td">209,6k (14,1x)</td></tr>
<tr><td class="crd-td"><strong>Ghardaïa (Algeria)</strong></td><td class="crd-td">32,49, 3,67</td><td class="crd-td">14,9k (1954)</td><td class="crd-td">130,8k</td><td class="crd-td">181,3k (12,1x)</td></tr>
<tr><td class="crd-td"><strong>Laghouat (Algeria)</strong></td><td class="crd-td">33,8, 2,87</td><td class="crd-td">11,5k (1954)</td><td class="crd-td">105,7k</td><td class="crd-td">170,5k (14,9x)</td></tr>
<tr><td class="crd-td"><strong>Sabhā (Libya)</strong></td><td class="crd-td">27,04, 14,43</td><td class="crd-td">3,5k (1954)</td><td class="crd-td">104,4k</td><td class="crd-td">159k (45,4x)</td></tr>
<tr><td class="crd-td"><strong>Tamanrasset (Algeria)</strong></td><td class="crd-td">22,79, 5,52</td><td class="crd-td">2,3k (1954)</td><td class="crd-td">68,4k</td><td class="crd-td">103,7k (44,3x)</td></tr>
<tr><td class="crd-td"><strong>Errachidia (Morocco)</strong></td><td class="crd-td">31,93, -4,43</td><td class="crd-td">6,2k (1952)</td><td class="crd-td">70,7k</td><td class="crd-td">99,1k (16x)</td></tr>
<tr><td class="crd-td"><strong>Adrar (Algeria)</strong></td><td class="crd-td">27,87, -0,29</td><td class="crd-td">4,6k (1954)</td><td class="crd-td">46,9k</td><td class="crd-td">86,6k (18,7x)</td></tr>
<tr><td class="crd-td"><strong>Ouarzazate (Morocco)</strong></td><td class="crd-td">30,92, -6,89</td><td class="crd-td">4,4k (1952)</td><td class="crd-td">48,9k</td><td class="crd-td">80,3k (18,3x)</td></tr>
<tr><td class="crd-td"><strong>Tindouf (Algeria)</strong></td><td class="crd-td">27,67, -8,15</td><td class="crd-td">2k (1954)</td><td class="crd-td">28,2k</td><td class="crd-td">57,9k (29,2x)</td></tr>
<tr><td class="crd-td"><strong>Al-Jawf (Libya)</strong></td><td class="crd-td">24,2, 23,29</td><td class="crd-td">3,8k (1954)</td><td class="crd-td">27,4k</td><td class="crd-td">44,8k (11,7x)</td></tr>
<tr><td class="crd-td"><strong>Illizi (Algeria)</strong></td><td class="crd-td">26,48, 8,47</td><td class="crd-td">4,5k (1980)</td><td class="crd-td">6,7k</td><td class="crd-td">16,5k (3,6x)</td></tr>
<tr><td class="crd-td"><strong>Ghadāmis (Libya)</strong></td><td class="crd-td">30,13, 9,5</td><td class="crd-td">3,6k (1954)</td><td class="crd-td">8,9k</td><td class="crd-td">12,9k (3,5x)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Saharan oasis and steppe urban centres across Algeria, Libya, Morocco and Western Sahara from 1951AD to 2025AD.</figcaption>
</figure>

## Pycnophylactic GIS and Spatial Calibration Summary

Table 7 summarises the spatial kriging parameters and subadministrative mass-conservation diagnostics governing HANDBOOK's disaggregation across the Maghreb, Libya and the wider MENA reference surface.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Diagnostic Metric</th><th class="crd-th">Observed Value</th><th class="crd-th">Calibration Method</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Active Habitable Domain Cells (Ch. 25)</strong></td><td class="crd-td">63.278</td><td class="crd-td">5-arcminute habitable continental grid across 110 subregions</td></tr>
<tr><td class="crd-td"><strong>Weighted MENA Conditioning Records</strong></td><td class="crd-td">83.857</td><td class="crd-td">Multi-register archaeological &amp; settlement intensity anchors</td></tr>
<tr><td class="crd-td"><strong>Voronoi Catchments (Active vs Total)</strong></td><td class="crd-td">1.942 of 3.416</td><td class="crd-td">Metric-isotropic radial distance partitioning</td></tr>
<tr><td class="crd-td"><strong>Voronoi Radius (Median vs 90th Pct)</strong></td><td class="crd-td">32,51 km and 40,25 km</td><td class="crd-td">Scale-adaptive catchment radius distribution</td></tr>
<tr><td class="crd-td"><strong>Matérn (nu = 3/2) Ranges (Tau1 and Tau2)</strong></td><td class="crd-td">1,35 and 2,9 (R2 = 0,999)</td><td class="crd-td">Weighted least-squares biophysical residuals (urban buffer = 2 cells)</td></tr>
<tr><td class="crd-td"><strong>Subadministrative Polygon Domains</strong></td><td class="crd-td">29 historical and 2.629 modern</td><td class="crd-td">Historical colonial &amp; geoBoundaries ADM1/ADM2 polygons</td></tr>
<tr><td class="crd-td"><strong>Pycnophylactic Unit-Year Checks</strong></td><td class="crd-td">65.864</td><td class="crd-td">83 benchmark years across 29 historical &amp; 2.629 modern units</td></tr>
<tr><td class="crd-td"><strong>Maximum Relative Mass Error</strong></td><td class="crd-td">5,845e-08 (100% within 0,01%)</td><td class="crd-td">Strictly mass-conserving pycnophylactic scaling</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Spatial kriging calibration and pycnophylactic mass-conservation audit parameters for the Maghreb, Libya and wider MENA surface.</figcaption>
</figure>

# Sources

::: {#refs}
:::
