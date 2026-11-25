---
title: "Ancient and Mediaeval Ethiopia and the Horn"
subtitle: "Axum, Solomonic Abyssinia, Adal and Somali-Oromo Migrations"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: ancient_horn_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Nine demographic sub-regions and 1.320 individually assessed settlements across Ethiopia, Eritrea, Somalia, Somaliland, Djibouti and adjacent Sudanese and Kenyan borderlands from 1000BC to 1885AD."
hero_label: "fig:hero-horn-africa"

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

Between the emergence of the first stone-built townships on the Tigrayan and Eritrean plateau around 1000BC and the consolidation of the modern Ethiopian and coastal frontiers in 1885AD, the Horn of Africa sustained one of the longest continuous urban and agrarian traditions south of the Sahara. Across a study area of 2.429.794 km² spanning modern Ethiopia, Eritrea, Somalia, Somaliland, Djibouti and bordering tracts of Sudan and northern Kenya, NICETHI reconstructs a total population that grew from 292,6k inhabitants in 1000BC to 1,25M in 200AD and 1,4M at the Aksumite zenith in 500AD, edged upward through the mediaeval highland and littoral transition to 1,79M in 1000AD and 2,71M in 1300AD, and then expanded sharply from 4,77M in 1600AD to 10,18M in 1850AD and 10,15M by 1880AD. Demographic gravity shifted repeatedly across altitude and rainfall zones over these three millennia. In antiquity, plough-based teff and barley agriculture anchored Aksum, Yeha and Adulis along the northern Red Sea corridor, whereas mediaeval growth pivoted southward toward Zagwe Lasta, the Solomonic camps of Shewa and Begemder, the walled Islamic emirates of Ifat, Adal and Harar, and the Indian Ocean ports of the Benadir coast. From the sixteenth century onward, Oromo pastoral-agrarian expansions and intensive enset root-crop cultivation across Kaffa, Wolayta and the Omo-Gibe highlands carried the demographic centre of gravity into the central and south-western plateaus. These trajectories are anchored to 1.320 individually assessed settlements across 6.169 period observations, paired with Matérn kriging over archaeological catchments and pycnophylactic disaggregation across subadministrative census polygons.



# Background

## Highland Ecology, Plough Farming and Pastoral Littorals

The Horn of Africa divides abruptly along the East African Rift escarpment into two contrasting demographic environments [@Fattovich2010Aksum; @Phillipson2000FoundationsAfrican]. Above 1.500 m, the volcanic Abyssinian and Eritrean highlands receive 800 to 1.800 mm of monsoon rainfall between June and September, supporting dense mixed farming. In the northern and central provinces of Tigray, Begemder, Gojjam and Shewa, ox-drawn scratch ploughs sustained cereal regimes built on teff, barley, emmer wheat, chickpeas and oilseeds [@Phillipson2000FoundationsAfrican; @Agostini2020LuisaSernicola]. Across the humid south-western uplands of Kaffa, Wolayta and the Gibe valley, by contrast, perennial hoe cultivation of enset (*Ensete ventricosum*), yams and taro yielded far higher caloric densities per hectare than rain-fed cereals, enabling dense rural settlement under forest cover [@GonzalezRuiba2024LandscapesMemory; @Mekonnen2017AncestralHuman].

Surrounding this highland massif on three sides lay arid and semi-arid lowlands where rainfall drops below 400 mm and drops under 150 mm along the Danakil depression and the Gulf of Aden shore [@Zazzaro2013TheAncient; @Lewis1960TheSomali]. Here pastoralism dominated, punctuated by oasis horticulture along the Awash, Shebelle and Juba rivers and by maritime entrepots anchored to monsoon shipping lanes [@Kassim1995IslamAnd; @Pankhurst1982EthiopianTowns]. Coastal towns such as Adulis, Zeila, Barbara, Muqdisho, Marka and Barawa linked highland ivory, gold, civet, coffee and captives to Red Sea and Indian Ocean markets, creating an enduring economic interdependence between highland kingdoms and lowland ports [@Zazzaro2013TheAncient; @Addawe2026ConflictBetween].

## Historiography and Archaeological Foundations

Historical demography in the Horn was long constrained by thin written chronicles before the fourteenth century and an absence of national censuses prior to the late twentieth century. Classical periplus texts, Ge'ez royal inscriptions and Arabic geographical compendia established political sequences for Aksum, Ifat, Adal and the Benadir coast, yet gave few reliable headcounts [@Phillipson2000FoundationsAfrican; @Kassim1995IslamAnd]. Early estimates therefore leaned heavily on nineteenth-century European travellers such as Bruce, Salt, Burton, Harris and Cecchi, whose counts captured only single royal camps or seasonal trade fairs rather than broader rural carrying capacity [@Pankhurst1982EthiopianTowns; @Assefa2016FertilityBelow].

Over the past half-century, regional archaeology and archival synthesis have altered this picture. Systematic field surveys around Aksum, Yeha, Beta Giyorgis, Adulis and eastern Tigray quantified built-up settlement footprints and rural site densities from the first millennium BC through the Late Aksumite contraction [@Fattovich2010Aksum; @Agostini2020LuisaSernicola; @Uhlig2013DavidPhillipson; @Zazzaro2013TheAncient]. Subsequent excavations at Lalibela, rock-cut church complexes across Tigray, the mediaeval Islamic towns of Harar, Harlaa and Fedis, and fortified frontier landscapes in western Ethiopia revealed dense regional networks that textual chronicles had largely overlooked [@Muehlbauer2021BastionsThe; @Smith1998LalibelaKonjowa; @Insoll2017FirstFootsteps; @Siraj2024PreliminarySurvey; @GonzalezRuiba2024LandscapesMemory]. Meanwhile, historical syntheses of Ethiopian towns and Benadir-Somali oral and archival traditions clarified how mobile royal camps, walled caravan centres and riverine sultanates rose and waned between 1200AD and 1885AD [@Pankhurst1982EthiopianTowns; @Lewis1960TheSomali; @Lewis1996SongsFrom].

# Methodology

## Territorial Partition and Chronological Benchmarks

The study domain covers 2.429.794,2 km² across 28.665 five-arcminute grid cells, spanning modern Ethiopia, Eritrea, Somalia, Somaliland and Djibouti together with bordering tracts of eastern Sudan, South Sudan and northern Kenya. Within NICETHI, the chapter occupies Regime 2 (1000BC to 1885AD), connecting Holocene pastoral-neolithic baselines with late-nineteenth and twentieth-century colonial and national enumerations. Guided by historical polity boundaries and HydroBASINS hydrological divides, the domain is partitioned into nine contiguous sub-regions summarised in Table \ref{tab:subregions}.

Population trajectories are evaluated across fourteen benchmark dates capturing major political and ecological turning points: 1000BC (pre-Axumite highland consolidation), 200AD and 500AD (Aksumite commercial apogee), 700AD (post-Aksumite Red Sea realignment), 1000AD (Zagwe and early Benadir urban rise), 1300AD (early Solomonic and Ifat expansion), 1600AD (post-Adal war and Oromo migration frontier), and seven eighteenth- and nineteenth-century benchmarks (1710AD, 1740AD, 1770AD, 1800AD, 1820AD, 1850AD and 1880AD) spanning Gondarine maturity, the *Zemene Mesafint* (Era of the Princes), the Oromo Gibe monarchies and Egyptian-Ethiopian frontier consolidation ahead of 1885AD [@Pankhurst1982EthiopianTowns; @Addawe2026ConflictBetween; @Khayre2016SomaliaOverview].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Era</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Assessed Sites</th><th class="crd-th">Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kingdom of Kaffa, Wolayta and Omotic SW</strong></td><td class="crd-td">1300 to 1885</td><td class="crd-td">402.525</td><td class="crd-td">4.711</td><td class="crd-td">245</td><td class="crd-td">16,6</td></tr>
<tr><td class="crd-td"><strong>Shewa and Central Ethiopian Highlands</strong></td><td class="crd-td">1270 to 1885</td><td class="crd-td">109.054</td><td class="crd-td">1.287</td><td class="crd-td">142</td><td class="crd-td">4,5</td></tr>
<tr><td class="crd-td"><strong>Zagwe, Begemder, Gojjam and Lake Tana</strong></td><td class="crd-td">900 to 1885</td><td class="crd-td">217.689</td><td class="crd-td">2.592</td><td class="crd-td">134</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Oromo Gadaa Confederacies and Bale</strong></td><td class="crd-td">1500 to 1885</td><td class="crd-td">365.555</td><td class="crd-td">4.274</td><td class="crd-td">84</td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>Aksum, Tigray and Medri Bahri</strong></td><td class="crd-td">-1000 to 1885</td><td class="crd-td">294.287</td><td class="crd-td">3.561</td><td class="crd-td">270</td><td class="crd-td">12,1</td></tr>
<tr><td class="crd-td"><strong>Afar Danakil, Massawa and Habesh Littoral</strong></td><td class="crd-td">-500 to 1885</td><td class="crd-td">339.714</td><td class="crd-td">4.026</td><td class="crd-td">145</td><td class="crd-td">14</td></tr>
<tr><td class="crd-td"><strong>Ajuran Empire, Benadir and Juba-Shabelle</strong></td><td class="crd-td">1200 to 1885</td><td class="crd-td">338.746</td><td class="crd-td">3.953</td><td class="crd-td">93</td><td class="crd-td">13,9</td></tr>
<tr><td class="crd-td"><strong>Northern Somali Clans and Majeerteen</strong></td><td class="crd-td">1420 to 1885</td><td class="crd-td">298.917</td><td class="crd-td">3.517</td><td class="crd-td">55</td><td class="crd-td">12,3</td></tr>
<tr><td class="crd-td"><strong>Sultanates of Ifat, Adal and Harar</strong></td><td class="crd-td">1285 to 1885</td><td class="crd-td">63.308</td><td class="crd-td">744</td><td class="crd-td">14</td><td class="crd-td">2,6</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Nine demographic sub-regions of Ancient and Mediaeval Ethiopia and the Horn showing active eras, polygon area, grid pixel counts, internal assessed settlements (152 inside sub-region polygons plus 12 borderland sites) and territorial share.</figcaption>
</figure>

## Settlement Gazetteer Screening and Source Integration

To anchor urban and market networks across the three-millennium span, 1.511 candidate towns, ports, royal camps and archaeological settlements were screened from excavation reports, heritage inventories, classical gazetteers and historical town histories [@ARCCH2020EthiopiaInventory; @Pleiades2024Africa; @Pankhurst1982EthiopianTowns; @Phillipson2000FoundationsAfrican]. After removing 191 duplicate alias records, 1.320 individually assessed settlements remained (6.169 period observations, all scoped to city-proper extents). Across modern borders, 81 sites lie in Ethiopia, 21 in Sudan, 19 in Somalia, 15 in Eritrea, 15 in Kenya, 10 in Somaliland, 2 in Djibouti and 1 in South Sudan.

Of these 1.320 settlements, 152 fall directly inside the nine mapped Horn sub-regions, while 12 lie along adjacent Nile-Butana, Red Sea, Sobat and Swahili borderlands (including Meroe, Barbar, Wad Medani and Lamu). Active assessed settlements rise from 52 early loci in 1000BC to 154 in 200AD, 331 in 1000AD, 520 in 1600AD and 758 in 1850AD before narrowing to 448 documented centres around 1880AD. Table \ref{tab:top-settlements} summarises the twenty largest settlements by assessed historical peak.

<figure class="crd-table-figure" id="tab:top-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Year</th><th class="crd-th">Active Span</th><th class="crd-th">Obs.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gonder</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">62k</td><td class="crd-td">1700AD</td><td class="crd-td">1650AD to 1885AD</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Aksum</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">34,2k</td><td class="crd-td">550AD</td><td class="crd-td">400BC to 1850AD</td><td class="crd-td">19</td></tr>
<tr><td class="crd-td"><strong>Meroe</strong></td><td class="crd-td">Sudan</td><td class="crd-td">29,4k</td><td class="crd-td">100AD</td><td class="crd-td">800BC to 400AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Muqdisho</strong></td><td class="crd-td">Somalia</td><td class="crd-td">24,8k</td><td class="crd-td">1331AD</td><td class="crd-td">1000AD to 1848AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Barbara</strong></td><td class="crd-td">Somaliland</td><td class="crd-td">20k</td><td class="crd-td">1856AD</td><td class="crd-td">200AD to 1856AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Entoto</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">18,5k</td><td class="crd-td">1884AD</td><td class="crd-td">1884AD to 1884AD</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Harar</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">18,2k</td><td class="crd-td">1560AD</td><td class="crd-td">1300AD to 1855AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Pate</strong></td><td class="crd-td">Kenya</td><td class="crd-td">16,8k</td><td class="crd-td">1700AD</td><td class="crd-td">800AD to 1885AD</td><td class="crd-td">19</td></tr>
<tr><td class="crd-td"><strong>Magdala</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">16,6k</td><td class="crd-td">1865AD</td><td class="crd-td">1855AD to 1875AD</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Kassalā</strong></td><td class="crd-td">Sudan</td><td class="crd-td">15,2k</td><td class="crd-td">1880AD</td><td class="crd-td">1850AD to 1885AD</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Lamu</strong></td><td class="crd-td">Kenya</td><td class="crd-td">15,2k</td><td class="crd-td">1813AD</td><td class="crd-td">1200AD to 1875AD</td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>Adulis</strong></td><td class="crd-td">Eritrea</td><td class="crd-td">14,9k</td><td class="crd-td">250AD</td><td class="crd-td">100BC to 1500AD</td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>Debretabor</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">14,6k</td><td class="crd-td">1860AD</td><td class="crd-td">1820AD to 1880AD</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Zeila</strong></td><td class="crd-td">Somaliland</td><td class="crd-td">14,1k</td><td class="crd-td">1400AD</td><td class="crd-td">200AD to 1855AD</td><td class="crd-td">14</td></tr>
<tr><td class="crd-td"><strong>Ankober</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">12,4k</td><td class="crd-td">1841AD</td><td class="crd-td">1810AD to 1885AD</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Wad Medani</strong></td><td class="crd-td">Sudan</td><td class="crd-td">12,4k</td><td class="crd-td">1880AD</td><td class="crd-td">1800AD to 1880AD</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Jima</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">11,8k</td><td class="crd-td">1880AD</td><td class="crd-td">1845AD to 1880AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Mekele</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">11,8k</td><td class="crd-td">1881AD</td><td class="crd-td">1881AD to 1881AD</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Barbar</strong></td><td class="crd-td">Sudan</td><td class="crd-td">11,5k</td><td class="crd-td">1870AD</td><td class="crd-td">1500AD to 1870AD</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Barara</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">11,4k</td><td class="crd-td">1515AD</td><td class="crd-td">1450AD to 1515AD</td><td class="crd-td">2</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Twenty largest individually assessed settlements in Ethiopia and the Horn between 1000BC and 1885AD by peak resident population.</figcaption>
</figure>

## Radial Kriging Substrata and Pycnophylactic Disaggregation

Point settlement ledgers capture nucleated towns, royal camps and excavated sites, yet most inhabitants lived in unmounded highland homesteads, enset gardens and mobile pastoral camps [@Agostini2020LuisaSernicola; @Takele2020CulturalHeritage]. NICETHI therefore reconstructs continuous spatial population surfaces using non-stationary Matérn ($\nu = 3/2$) residual kriging calibrated across 24.537 weighted domestic archaeological records and 6.431 Voronoi catchments pan-regionally (1.731 active catchments). Within the East-Horn archaeological register specifically, 2.708 site records (2.349 unique-coordinate loci) achieve a 93,91% share of regional primary and monograph sources with zero crowd-sourced coordinates [@ARCCH2020EthiopiaInventory; @Pleiades2024Africa].

Spatial correlation is evaluated along metric-isotropic radial distance fields scaled by local Voronoi catchment radii (median 31,72 km, 90th percentile 49,29 km). Across the Classical Aksum-Meroe horizon through the nineteenth-century pre-colonial horizon, dimensionless correlation range converges at $\tau_1 = 1,35$ (raw estimates 1,38 to 1,42), secondary scale $\tau_2 = 2,90$ and nugget-to-sill ratio 0,04, yielding effective short-range correlation distances between 43,63 km and 45,16 km ($R^2 = 0,9992$). Deterministic trend conditioning weights baseline habitability, natural biome productivity, ecological suitability, fluvial proximity ($\beta_3$ tapering from 0,101 in antiquity to 0,0342 in the nineteenth century) and coastal access ($\beta_4$ tapering from 0,0969 to 0,0475), with a two-pixel urban-core buffer preventing modern metropolitan footprints around Addis Ababa, Asmara or Mogadishu from distorting earlier surfaces. Downstream, colonial and national subadministrative polygons from geoBoundaries [@Runfola2020GeoBoundaries] across Ethiopia, Eritrea, Somalia, Somaliland, Djibouti, Kenya and Sudan are reconciled over 81 disaggregated years (30.911 unit-year checks, 100% mass conservation within 0,01%, maximum relative error 5,6e-08).

# Testing and Validation

## Rank-Size Scaling and Gazetteer Saturation

To test whether the 1.320 retained settlements reflect a coherent urban hierarchy rather than isolated travellers' curiosities, rank-size scaling was evaluated across peak populations (Figure \ref{fig:rank-size}). Ordinary least-squares regression on the upper half of the urban distribution ($n = 82$) yields a Zipf exponent of $q = 0,67$ (slope $-0,6738$, $R^2 = 0,9657$), while regression across all 1.320 settlements gives $q = 1,01$ (slope $-1,0099$, $R^2 = 0,8133$). That dual structure captures a polycentric urban network: no single metropolis dominated the Horn for three millennia, because political capitals migrated from Yeha and Aksum to Lalibela, Barara, Harar, Muqdisho, Gondar, Ankober and Entoto as dynasties and trade routes shifted [@Pankhurst1982EthiopianTowns; @Addawe2026ConflictBetween; @Insoll2017FirstFootsteps].

Four saturation waves confirmed that all nine sub-regions contain multiple dated settlements (0 empty inhabited sub-regions). Adding the fourth gap-sweep wave contributed only 2 sites (1,22% marginal gain), while unique peak values account for 84,15% of entries (interquartile log10 spread 0,605), demonstrating that individual site curves preserve local historical turning points rather than synthetic interpolation templates [@Agostini2020LuisaSernicola; @Uhlig2013DavidPhillipson].

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-ancient-horn-africa/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution of all 1.320 individually assessed settlements (Zipf slope 0,67 over the upper tier, R² = 0,97) alongside 1880AD sub-regional population densities across Ethiopia and the Horn.</figcaption>
</figure>

## Archaeological Cross-Checks and Subadministrative Continuity

Archaeological surveys around Aksum and eastern Tigray provide an independent check on highland carrying capacity. Intensive transect mapping across the Beta Giyorgis and Aksum hinterland documents rural hamlet densities rising steadily from the Pre-Aksumite phase (c. 800BC to 400BC) to Classical and Middle Aksumite peaks between 150AD and 550AD before thinning sharply after 700AD [@Fattovich2010Aksum; @Agostini2020LuisaSernicola; @Uhlig2013DavidPhillipson]. On the Red Sea coast, excavations at Adulis confirm a parallel rise from 100BC to a fifth- and sixth-century commercial zenith (13,4k) followed by seventh-century flood silting and maritime decline [@Zazzaro2013TheAncient].

At the opposite chronological end, nineteenth-century regional totals align smoothly with twentieth-century subadministrative census geography [@Runfola2020GeoBoundaries; @Assefa2016FertilityBelow]. By 1880AD, Shewa (15,46 persons/km²), Begemder-Gojjam (7,5 persons/km²) and the Omotic south-west (5,82 persons/km²) already exhibit the same highland density gradient recorded in Ethiopia's 1984 and 2007 enumerations, whereas arid northern Somalia (1,15 persons/km²) and the Juba-Shabelle littoral (2,06 persons/km²) preserve the sharp highland-to-steppe contrast characteristic of pastoral-nomadic zones [@Mekonnen2017AncestralHuman; @Khayre2016SomaliaOverview].

# Results

## Pre-Axumite Da'amat and the Northern Highland Core (1000BC to 100BC)

In 1000BC, the 2.429.794 km² Horn domain held approximately 292,6k inhabitants (Table \ref{tab:traj-early} and Figure \ref{fig:trends}). Settlement remained overwhelmingly concentrated in the northern highlands and adjacent Sudanese river corridors: Aksum, Tigray and Medri Bahri held 70,5k (24,1% of the regional total), Zagwe, Begemder and Gojjam held 56,8k (19,4%), and the south-western Omotic uplands held 40,4k (13,8%). Along the Eritrean Asmara plateau and in north-eastern Tigray, agricultural villages of the Ona and Pre-Aksumite traditions combined stone-walled architecture with emmer wheat, barley and cattle husbandry [@Fattovich2010Aksum; @Agostini2020LuisaSernicola].

By 800BC to 400BC, the polity of Da'amat emerged around Yeha, where a monumental limestone temple, South Arabian-influenced inscriptions and stone-built elite compounds anchored a town of roughly 5,5k inhabitants at 600BC alongside early centres at Sembel Ona (1,2k), Keskese (1,2k), Hawelti-Melazo (1,2k), Matara, Qohaito and Mezber [@Fattovich2010Aksum; @Phillipson2000FoundationsAfrican]. Across the western Tigray-Atbara marches, Nile-influenced Kushitic towns such as Meroe (12,6k by 400BC, rising to 29,4k in 100AD) linked middle-Nile iron production with northern Horn ivory and incense networks [@Phillipson2000FoundationsAfrican; @Zazzaro2013TheAncient].

## Kingdom of Aksum, Adulis and Red Sea Apogee (100BC to 700AD)

Between 100BC and 550AD, the Kingdom of Aksum unified northern Tigray and highland Eritrea into one of late antiquity's principal trading empires, lifting regional population more than fourfold from 292,6k in 1000BC to 1,25M in 200AD and 1,4M in 500AD (Table \ref{tab:traj-early}). Aksum itself expanded from 3,9k in 200BC to 12,4k in 100AD, 28,6k in 350AD and 34,2k at its sixth-century peak, ringed by stone stelae, royal tombs and dense peri-urban farming hamlets surveyed at Beta Samati (4,3k), Ona Adi (3,9k) and Henzat (2,5k) [@Phillipson2000FoundationsAfrican; @Uhlig2013DavidPhillipson; @Agostini2020LuisaSernicola].

Maritime trade through the Gulf of Zula powered this expansion. Adulis grew from 2,9k in 100BC to 13,4k by 550AD, serving as the kingdom's custom-house for Mediterranean amphorae, Indian textiles, highland gold and ivory, while highland staging posts at Qohaito (7,9k) and Matara (6,3k) linked the Red Sea escarpment to the Aksumite plateau [@Zazzaro2013TheAncient; @Pleiades2024Africa]. Further south-east along the Gulf of Aden and Guardafui littoral, classical periplus ports including Zeila (1,7k), Barbara (1,5k) and Hafun (2,6k at 350AD) connected aromatic-gum hinterlands to Indian Ocean shipping [@Lewis1960TheSomali; @Pleiades2024Africa].

After 600AD, environmental degradation around Aksum, Red Sea commercial disruption and the rise of Islamic maritime networks eroded Aksumite urban density [@Fattovich2010Aksum; @Zazzaro2013TheAncient]. Adulis fell sharply to 5,2k around 650AD before siltation and raids ended its urban phase, while Aksum itself contracted from 34,2k in 550AD to 11,8k in 750AD. Aksum, Tigray and Medri Bahri correspondingly eased from 288k in 200AD to 259,9k in 700AD, even as aggregate Horn population edged upward to 1,48M thanks to slow agricultural expansion further south in Amhara, Shewa and the Omotic south-west [@Phillipson2000FoundationsAfrican; @Muehlbauer2021BastionsThe].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-ancient-horn-africa/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Aggregate regional and urban population series (logarithmic scale), active settlement counts and leading city trajectories across Ethiopia and the Horn from 1000BC to 1885AD.</figcaption>
</figure>

## Zagwe Lalibela, Early Solomonic Expansion and the Islamic Emirates (700AD to 1520AD)

Between 700AD and 1300AD, regional population nearly doubled from 1,48M to 2,71M, while Aksum, Tigray and Medri Bahri relinquished demographic primacy to the central and south-western highlands (Table \ref{tab:traj-early}). In northern Tigray, Christian monastic communities carved rock-cut cruciform churches across limestone massifs, sustaining rural parishes even as large Aksumite towns shrank [@Muehlbauer2021BastionsThe; @Gervers2025ReviewMikael]. Political gravity moved south into Lasta, where the Zagwe dynasty (c. 1137AD to 1270AD) established its sacred capital at Roha-Lalibela. Anchored by eleven monolithic rock-hewn churches and subterranean trench networks, Lalibela grew to roughly 9,7k inhabitants around 1220AD, functioning as both royal seat and enduring pilgrimage centre [@Smith1998LalibelaKonjowa; @Takele2020CulturalHeritage].

In 1270AD, the Solomonic restoration under Yekuno Amlak shifted highland power further south into Amhara and Shewa, pushing Zagwe, Begemder and Gojjam to 436,1k and Shewa to 256,8k by 1300AD [@Pankhurst1982EthiopianTowns; @Addawe2026ConflictBetween]. Unlike Aksum or Gondar, the early Solomonic monarchy governed through mobile royal *katama* encampments - temporary tented cities of tens of thousands of soldiers, clergy and retainers - supplemented by fixed highland strongholds such as Tegulet, Debre Birhan (7,4k in 1465AD) and Barara (11,4k in 1515AD) overlooking the Awash approaches [@Pankhurst1982EthiopianTowns].

East of the Rift escarpment, Islamic trade networks transformed urbanism from the Danakil coast to Hararghe and the Benadir shore [@Insoll2017FirstFootsteps; @Addawe2026ConflictBetween; @Kassim1995IslamAnd]. Harlaa reached 9,9k around 1300AD as a stone-built commercial hub linking highland Christian kingdoms with Zeila (9k in 1331AD, 11,4k in 1500AD), while mediaeval Islamic settlements excavated at Fedis and Gidaya sustained terraced sorghum and khat farming across the Chercher and Harar plateaus [@Insoll2017FirstFootsteps; @Siraj2024PreliminarySurvey]. Further south along the Indian Ocean coast, Muqdisho swelled from 6,4k in 1000AD to 18,5k in 1220AD and 24,8k when Ibn Battuta visited in 1331AD, anchoring the Benadir wool-weaving and maritime network alongside Marka, Barawa and Pate (16,8k peak in 1700AD) [@Kassim1995IslamAnd; @Lewis1960TheSomali].

<figure class="crd-table-figure" id="tab:traj-early">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">1000BC</th><th class="crd-th">200AD</th><th class="crd-th">500AD</th><th class="crd-th">700AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kingdom of Kaffa, Wolayta and Omotic SW</strong></td><td class="crd-td">40,4k</td><td class="crd-td">188,9k</td><td class="crd-td">248,7k</td><td class="crd-td">291,2k</td><td class="crd-td">394,5k</td><td class="crd-td">606,1k</td><td class="crd-td">1,08M</td></tr>
<tr><td class="crd-td"><strong>Shewa and Central Ethiopian Highlands</strong></td><td class="crd-td">16,7k</td><td class="crd-td">78k</td><td class="crd-td">109,2k</td><td class="crd-td">131,8k</td><td class="crd-td">162,8k</td><td class="crd-td">256,8k</td><td class="crd-td">460,2k</td></tr>
<tr><td class="crd-td"><strong>Zagwe, Begemder, Gojjam and Lake Tana</strong></td><td class="crd-td">56,8k</td><td class="crd-td">244,8k</td><td class="crd-td">260,3k</td><td class="crd-td">266k</td><td class="crd-td">307,9k</td><td class="crd-td">436,1k</td><td class="crd-td">738,4k</td></tr>
<tr><td class="crd-td"><strong>Oromo Gadaa Confederacies and Bale</strong></td><td class="crd-td">16,3k</td><td class="crd-td">72,9k</td><td class="crd-td">103,6k</td><td class="crd-td">125k</td><td class="crd-td">160k</td><td class="crd-td">251,9k</td><td class="crd-td">454k</td></tr>
<tr><td class="crd-td"><strong>Aksum, Tigray and Medri Bahri</strong></td><td class="crd-td">70,5k</td><td class="crd-td">288k</td><td class="crd-td">274,2k</td><td class="crd-td">259,9k</td><td class="crd-td">289,5k</td><td class="crd-td">392,1k</td><td class="crd-td">703,1k</td></tr>
<tr><td class="crd-td"><strong>Afar Danakil, Massawa and Habesh Littoral</strong></td><td class="crd-td">28,4k</td><td class="crd-td">120,9k</td><td class="crd-td">134,9k</td><td class="crd-td">143,6k</td><td class="crd-td">168,8k</td><td class="crd-td">269,2k</td><td class="crd-td">470,5k</td></tr>
<tr><td class="crd-td"><strong>Ajuran Empire, Benadir and Juba-Shabelle</strong></td><td class="crd-td">37,8k</td><td class="crd-td">157k</td><td class="crd-td">158,3k</td><td class="crd-td">157,8k</td><td class="crd-td">186,3k</td><td class="crd-td">304,1k</td><td class="crd-td">520,6k</td></tr>
<tr><td class="crd-td"><strong>Northern Somali Clans and Majeerteen</strong></td><td class="crd-td">23,1k</td><td class="crd-td">91,5k</td><td class="crd-td">92,5k</td><td class="crd-td">90,2k</td><td class="crd-td">99,1k</td><td class="crd-td">161,4k</td><td class="crd-td">269,9k</td></tr>
<tr><td class="crd-td"><strong>Sultanates of Ifat, Adal and Harar</strong></td><td class="crd-td">2,5k</td><td class="crd-td">11k</td><td class="crd-td">15,5k</td><td class="crd-td">18,7k</td><td class="crd-td">23k</td><td class="crd-td">37,2k</td><td class="crd-td">68,1k</td></tr>
<tr><td class="crd-td"><strong>Total Ethiopia and the Horn</strong></td><td class="crd-td">292,6k</td><td class="crd-td">1,25M</td><td class="crd-td">1,4M</td><td class="crd-td">1,48M</td><td class="crd-td">1,79M</td><td class="crd-td">2,71M</td><td class="crd-td">4,77M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional and aggregate population trajectory from 1000BC to 1600AD across seven early benchmark years.</figcaption>
</figure>

## Adal Wars, Oromo Migrations and Gondarine Reconstruction (1520AD to 1769AD)

The sixteenth century reshaped the political and ethnic map of the entire Horn. Long-standing commercial rivalry between the Solomonic state and the Sultanate of Adal erupted into full-scale war between 1529AD and 1543AD under Imam Ahmad ibn Ibrahim al-Ghazi, whose armies marched from Dakar (7,3k in 1500AD) and Harar across Shewa, Begemder and Tigray [@Addawe2026ConflictBetween; @Pankhurst1982EthiopianTowns]. Following the war's devastation, Emir Nur ibn Mujahid encircled Harar within its stone *Jugol* walls around 1551AD, lifting the city to 18,2k by 1560AD as the chief Islamic citadel of the eastern plateau [@Insoll2017FirstFootsteps; @Assefa2016FertilityBelow].

Almost simultaneously, pastoral-agrarian Oromo confederacies governed by the eight-year *Gadaa* age-grade cycle expanded northward and eastward from the upper Genale and Bale uplands into Shewa, Hararghe, Gojjam and the Gibe valley [@Lewis1960TheSomali; @GonzalezRuiba2024LandscapesMemory]. By 1600AD, the Horn's population reached 4,77M: Kaffa, Wolayta and the Omotic south-west led at 1,08M, followed by Zagwe, Begemder and Gojjam (738,4k), Aksum and Tigray (703,1k), the Ajuran-Benadir basin (520,6k), the Afar-Red Sea littoral (470,5k), Shewa (460,2k) and the Oromo-Bale confederacies (454k). Along the Shabelle and lower Juba rivers, the Ajuran Imamate built limestone wells, masonry fortresses and canal works supporting agrarian surplus and Benadir port exports before yielding to the Geledi Sultanate at Afgoye (7,4k by 1880AD) and inland Somali clan confederacies [@Kassim1995IslamAnd; @Lewis1996SongsFrom; @Khayre2016SomaliaOverview].

Retreating north-west to Lake Tana after the sixteenth-century upheavals, Solomonic emperors abandoned nomadic camps for permanent stone architecture at Gorgora (9,4k), Danqaz (7,8k) and finally Gondar, founded by Emperor Fasilides in 1636AD [@Pankhurst1982EthiopianTowns]. Protected by stone castles and fed by fertile Dembiya grain estates, Gondar expanded from 24,5k in 1650AD to 62k around 1700AD - the largest city in the Horn's pre-1885 history - anchoring an artisanal, clerical and commercial capital that still held 48,5k inhabitants in 1770AD before civil wars eroded its primacy [@Pankhurst1982EthiopianTowns].

<figure class="crd-table-figure" id="tab:traj-late">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">1710AD</th><th class="crd-th">1740AD</th><th class="crd-th">1770AD</th><th class="crd-th">1800AD</th><th class="crd-th">1820AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kingdom of Kaffa, Wolayta and Omotic SW</strong></td><td class="crd-td">1,22M</td><td class="crd-td">1,5M</td><td class="crd-td">1,71M</td><td class="crd-td">2,03M</td><td class="crd-td">2,16M</td><td class="crd-td">2,25M</td><td class="crd-td">2,34M</td></tr>
<tr><td class="crd-td"><strong>Shewa and Central Ethiopian Highlands</strong></td><td class="crd-td">577,3k</td><td class="crd-td">863,8k</td><td class="crd-td">1,11M</td><td class="crd-td">1,4M</td><td class="crd-td">1,55M</td><td class="crd-td">1,71M</td><td class="crd-td">1,69M</td></tr>
<tr><td class="crd-td"><strong>Zagwe, Begemder, Gojjam and Lake Tana</strong></td><td class="crd-td">787,5k</td><td class="crd-td">1,04M</td><td class="crd-td">1,24M</td><td class="crd-td">1,49M</td><td class="crd-td">1,62M</td><td class="crd-td">1,65M</td><td class="crd-td">1,63M</td></tr>
<tr><td class="crd-td"><strong>Oromo Gadaa Confederacies and Bale</strong></td><td class="crd-td">551,4k</td><td class="crd-td">741k</td><td class="crd-td">895,6k</td><td class="crd-td">1,11M</td><td class="crd-td">1,2M</td><td class="crd-td">1,21M</td><td class="crd-td">1,2M</td></tr>
<tr><td class="crd-td"><strong>Aksum, Tigray and Medri Bahri</strong></td><td class="crd-td">712k</td><td class="crd-td">834,2k</td><td class="crd-td">915,6k</td><td class="crd-td">1,05M</td><td class="crd-td">1,08M</td><td class="crd-td">1,08M</td><td class="crd-td">1,08M</td></tr>
<tr><td class="crd-td"><strong>Afar Danakil, Massawa and Habesh Littoral</strong></td><td class="crd-td">544,8k</td><td class="crd-td">703,1k</td><td class="crd-td">824k</td><td class="crd-td">955,2k</td><td class="crd-td">1,01M</td><td class="crd-td">1,01M</td><td class="crd-td">985,5k</td></tr>
<tr><td class="crd-td"><strong>Ajuran Empire, Benadir and Juba-Shabelle</strong></td><td class="crd-td">561,7k</td><td class="crd-td">633,6k</td><td class="crd-td">678,2k</td><td class="crd-td">746,7k</td><td class="crd-td">766,4k</td><td class="crd-td">730,1k</td><td class="crd-td">698,8k</td></tr>
<tr><td class="crd-td"><strong>Northern Somali Clans and Majeerteen</strong></td><td class="crd-td">290,3k</td><td class="crd-td">325,1k</td><td class="crd-td">346,5k</td><td class="crd-td">387,3k</td><td class="crd-td">394,3k</td><td class="crd-td">360k</td><td class="crd-td">344,1k</td></tr>
<tr><td class="crd-td"><strong>Sultanates of Ifat, Adal and Harar</strong></td><td class="crd-td">84,7k</td><td class="crd-td">119,5k</td><td class="crd-td">144,6k</td><td class="crd-td">180,1k</td><td class="crd-td">190,6k</td><td class="crd-td">186,8k</td><td class="crd-td">177,1k</td></tr>
<tr><td class="crd-td"><strong>Total Ethiopia and the Horn</strong></td><td class="crd-td">5,33M</td><td class="crd-td">6,75M</td><td class="crd-td">7,86M</td><td class="crd-td">9,35M</td><td class="crd-td">9,98M</td><td class="crd-td">10,18M</td><td class="crd-td">10,15M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional and aggregate population trajectory from 1710AD to 1880AD across seven late benchmark years.</figcaption>
</figure>

## Omotic Intensification, Shewan Ascendancy and the 1880AD Horizon (1770AD to 1885AD)

Between 1710AD and 1850AD, the Horn experienced its strongest pre-industrial demographic surge, nearly doubling from 5,33M to 10,18M before plateauing at 10,15M in 1880AD under recurring mid-to-late nineteenth-century droughts, regional wars and Egyptian-Mahdist frontier disruptions (Table \ref{tab:traj-late}). Three regional dynamics defined this era. First, the Omotic forest kingdoms of Kaffa (centred at Bonga, 7,9k, and Anderacha), Wolayta (Dalbo) and the Oromo Gibe monarchies led by Jimma Abba Jifar (11,8k by 1880AD) combined high-yield enset cultivation, terraced slopes and long-distance caravan trade in coffee, musk and gold to reach 2,34M inhabitants by 1880AD [@GonzalezRuiba2024LandscapesMemory; @Pankhurst1982EthiopianTowns].

Second, while northern Begemder fragmented during the *Zemene Mesafint* - depressing Gondar to 14,2k by 1833AD and 7,2k by 1865AD - the autonomous Kingdom of Shewa tripled from 577,3k in 1710AD to 1,71M in 1850AD (15,46 persons/km² in 1880AD, the highest regional density in the Horn). Successive Shewan capitals at Ankober (12,4k in 1841AD), Liche (11,2k in 1875AD) and Menelik II's ridge fortress at Entoto (18,5k in 1884AD) positioned Shewa to unify the central plateau just before the founding of Addis Ababa in 1886AD [@Pankhurst1982EthiopianTowns; @ARCCH2020EthiopiaInventory]. Elsewhere in the north, Emperors Tewodros II and Yohannes IV anchored military-administrative towns at Debretabor (14,6k in 1860AD), Magdala (11,5k in 1868AD) and Mekele (11,8k in 1881AD), while Kassalā (15,2k), Wad Medani (12,4k), Barbar (11,5k) and Al-Qaḍārif (11,2k) grew along the western Sudanese caravan corridor [@Pankhurst1982EthiopianTowns].

Third, on the Gulf of Aden and Benadir coasts, commercial realignment shifted urban weight from decaying Harar (9,4k in 1855AD) and Zeila (2,5k in 1855AD) toward seasonal maritime fairs at Barbara, where dry-season caravans swelled coastal numbers to 18,2k in 1855AD, and toward eastern Somali ports under the Majeerteen, Warsangali and Isaaq sultanates [@Insoll2017FirstFootsteps; @Lewis1960TheSomali; @Khayre2016SomaliaOverview]. By 1880AD, 698,8k people inhabited the Benadir and Juba-Shabelle sub-region and 344,1k inhabited the northern Somali and Majeerteen littoral, closing the pre-colonial epoch on the eve of the 1885AD European partition and the Great Ethiopian Famine of 1888AD to 1892AD [@Lewis1996SongsFrom; @Khayre2016SomaliaOverview].

# Limitations

Three structural uncertainties bound historical demographic reconstruction in Ethiopia and the Horn prior to 1885AD. First, textual and traveller records heavily favour northern Christian royal capitals and Red Sea or Benadir ports while under-reporting dense agrarian populations in the south-western enset belt. Although 2,34M inhabitants lived in Kaffa, Wolayta and the Omotic south-west by 1880AD, only 13 settlements there enter the historical gazetteer compared with 36 in Aksum, Tigray and Medri Bahri [@GonzalezRuiba2024LandscapesMemory; @ARCCH2020EthiopiaInventory]. NICETHI mitigates that northern archaeological bias through ecological suitability covariates and backward pycnophylactic calibration to modern subadministrative census densities, yet early-period estimates (1000BC to 1300AD) in southern Ethiopia and Somalia carry wider uncertainty bounds than in surveyed northern Tigray [@Fattovich2010Aksum; @Agostini2020LuisaSernicola].

Second, royal Ethiopian *katama* camps and Somali seasonal trading ports exhibited extreme intra-annual population swings. Traveller accounts of Barara, Gondar, Ankober, Magdala and Barbara often conflated permanent resident townspeople with campaigning armies or monsoon caravan fairs, while modern census baselines reflect settled administrative boundaries [@Pankhurst1982EthiopianTowns; @Assefa2016FertilityBelow]. Separating temporary military encampments from permanent urban cores therefore relies on architectural footprint checks and cross-observer triangulation, introducing roughly 20% to 30% uncertainty around individual pre-colonial city peaks [@Takele2020CulturalHeritage; @Insoll2017FirstFootsteps].

Third, mobile pastoralists across the Danakil depression, Ogaden, northern Kenya and northern Somalia leave sparse architectural remains compared with stone-built highland towns [@Lewis1960TheSomali; @Zazzaro2013TheAncient]. While Matérn kriging incorporates regional pastoral-neolithic and iron-age surface loci across eastern Africa, low-density nomadic fluctuations during droughts or clan migrations before 1700AD remain smoother in the reconstructed curve than short-term climatic shocks likely produced in reality [@Mekonnen2017AncestralHuman; @Khayre2016SomaliaOverview].

# Conclusion

Across nearly three millennia from 1000BC to 1885AD, the population of Ethiopia and the Horn grew thirty-five-fold from 292,6k to 10,15M, transforming a cluster of northern Pre-Axumite townships and Kushitic river towns into a complex mosaic of highland plough states, intensive enset kingdoms, walled Islamic emirates and Indian Ocean trading ports. That expansion followed a pronounced southward and altitudinal drift: Aksum and Adulis dominated the first-millennium Red Sea horizon, Zagwe Lalibela and early Solomonic Shewa anchored the mediaeval plateau, Ifat, Adal, Harar and Ajuran-Benadir tied the eastern escarpment to monsoon commerce, and Oromo, Shewan and Omotic polities propelled eighteenth- and nineteenth-century growth to over 10M inhabitants. By uniting 1.320 individually assessed settlements across eight modern jurisdictions with radial kriging substrata and mass-conserving subadministrative census boundaries [@Runfola2020GeoBoundaries], NICETHI establishes a continuous quantitative baseline leading directly into the colonial partition and modern demographic era after 1885AD.

# Appendix

## Sub-Regional Density and Territorial Shares

Table \ref{tab:density-appendix} reports mean population density in persons per km² across all nine Horn sub-regions at eight representative benchmarks from 1000BC to 1880AD, contrasting the dense central highlands of Shewa (15,46 persons/km² in 1880AD) and Begemder-Gojjam (7,5 persons/km²) with the expansive Somali and Afar rangelands (1,15 to 2,9 persons/km²).

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">1000BC</th><th class="crd-th">200AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th><th class="crd-th">1800AD</th><th class="crd-th">1880AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kingdom of Kaffa, Wolayta and Omotic SW</strong></td><td class="crd-td">0,1</td><td class="crd-td">0,47</td><td class="crd-td">0,62</td><td class="crd-td">0,98</td><td class="crd-td">1,51</td><td class="crd-td">2,69</td><td class="crd-td">5,03</td><td class="crd-td">5,82</td></tr>
<tr><td class="crd-td"><strong>Shewa and Central Ethiopian Highlands</strong></td><td class="crd-td">0,15</td><td class="crd-td">0,72</td><td class="crd-td">1</td><td class="crd-td">1,49</td><td class="crd-td">2,35</td><td class="crd-td">4,22</td><td class="crd-td">12,82</td><td class="crd-td">15,45</td></tr>
<tr><td class="crd-td"><strong>Zagwe, Begemder, Gojjam and Lake Tana</strong></td><td class="crd-td">0,26</td><td class="crd-td">1,12</td><td class="crd-td">1,2</td><td class="crd-td">1,41</td><td class="crd-td">2</td><td class="crd-td">3,39</td><td class="crd-td">6,86</td><td class="crd-td">7,5</td></tr>
<tr><td class="crd-td"><strong>Oromo Gadaa Confederacies and Bale</strong></td><td class="crd-td">0,04</td><td class="crd-td">0,2</td><td class="crd-td">0,28</td><td class="crd-td">0,44</td><td class="crd-td">0,69</td><td class="crd-td">1,24</td><td class="crd-td">3,04</td><td class="crd-td">3,29</td></tr>
<tr><td class="crd-td"><strong>Aksum, Tigray and Medri Bahri</strong></td><td class="crd-td">0,24</td><td class="crd-td">0,98</td><td class="crd-td">0,93</td><td class="crd-td">0,98</td><td class="crd-td">1,33</td><td class="crd-td">2,39</td><td class="crd-td">3,56</td><td class="crd-td">3,69</td></tr>
<tr><td class="crd-td"><strong>Afar Danakil, Massawa and Habesh Littoral</strong></td><td class="crd-td">0,08</td><td class="crd-td">0,36</td><td class="crd-td">0,4</td><td class="crd-td">0,5</td><td class="crd-td">0,79</td><td class="crd-td">1,38</td><td class="crd-td">2,81</td><td class="crd-td">2,9</td></tr>
<tr><td class="crd-td"><strong>Ajuran Empire, Benadir and Juba-Shabelle</strong></td><td class="crd-td">0,11</td><td class="crd-td">0,46</td><td class="crd-td">0,47</td><td class="crd-td">0,55</td><td class="crd-td">0,9</td><td class="crd-td">1,54</td><td class="crd-td">2,2</td><td class="crd-td">2,06</td></tr>
<tr><td class="crd-td"><strong>Northern Somali Clans and Majeerteen</strong></td><td class="crd-td">0,08</td><td class="crd-td">0,31</td><td class="crd-td">0,31</td><td class="crd-td">0,33</td><td class="crd-td">0,54</td><td class="crd-td">0,9</td><td class="crd-td">1,3</td><td class="crd-td">1,15</td></tr>
<tr><td class="crd-td"><strong>Sultanates of Ifat, Adal and Harar</strong></td><td class="crd-td">0,04</td><td class="crd-td">0,17</td><td class="crd-td">0,24</td><td class="crd-td">0,36</td><td class="crd-td">0,59</td><td class="crd-td">1,08</td><td class="crd-td">2,84</td><td class="crd-td">2,8</td></tr>
<tr><td class="crd-td"><strong>Mean Ethiopia and the Horn</strong></td><td class="crd-td">0,12</td><td class="crd-td">0,52</td><td class="crd-td">0,58</td><td class="crd-td">0,74</td><td class="crd-td">1,12</td><td class="crd-td">1,96</td><td class="crd-td">3,85</td><td class="crd-td">4,18</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Mean population density (persons per km²) across the nine sub-regions of Ethiopia and the Horn at eight benchmark years from 1000BC to 1880AD.</figcaption>
</figure>

Table \ref{tab:shares-appendix} tracks each sub-region's percentage share of the regional total across the same eight benchmarks, documenting the long-term relative decline of Aksum, Tigray and Medri Bahri from 24,1% in 1000BC to 10,7% in 1880AD alongside the parallel rise of Shewa (5,7% to 16,6%) and the Omotic south-west (13,8% to 23,1%).

<figure class="crd-table-figure" id="tab:shares-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">1000BC (%)</th><th class="crd-th">200AD (%)</th><th class="crd-th">500AD (%)</th><th class="crd-th">1000AD (%)</th><th class="crd-th">1300AD (%)</th><th class="crd-th">1600AD (%)</th><th class="crd-th">1800AD (%)</th><th class="crd-th">1880AD (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kingdom of Kaffa, Wolayta and Omotic SW</strong></td><td class="crd-td">13,8</td><td class="crd-td">15,1</td><td class="crd-td">17,8</td><td class="crd-td">22</td><td class="crd-td">22,3</td><td class="crd-td">22,7</td><td class="crd-td">21,7</td><td class="crd-td">23,1</td></tr>
<tr><td class="crd-td"><strong>Shewa and Central Ethiopian Highlands</strong></td><td class="crd-td">5,7</td><td class="crd-td">6,2</td><td class="crd-td">7,8</td><td class="crd-td">9,1</td><td class="crd-td">9,5</td><td class="crd-td">9,7</td><td class="crd-td">15</td><td class="crd-td">16,6</td></tr>
<tr><td class="crd-td"><strong>Zagwe, Begemder, Gojjam and Lake Tana</strong></td><td class="crd-td">19,4</td><td class="crd-td">19,5</td><td class="crd-td">18,6</td><td class="crd-td">17,2</td><td class="crd-td">16,1</td><td class="crd-td">15,5</td><td class="crd-td">16</td><td class="crd-td">16,1</td></tr>
<tr><td class="crd-td"><strong>Oromo Gadaa Confederacies and Bale</strong></td><td class="crd-td">5,6</td><td class="crd-td">5,8</td><td class="crd-td">7,4</td><td class="crd-td">8,9</td><td class="crd-td">9,3</td><td class="crd-td">9,5</td><td class="crd-td">11,9</td><td class="crd-td">11,8</td></tr>
<tr><td class="crd-td"><strong>Aksum, Tigray and Medri Bahri</strong></td><td class="crd-td">24,1</td><td class="crd-td">23</td><td class="crd-td">19,6</td><td class="crd-td">16,2</td><td class="crd-td">14,4</td><td class="crd-td">14,8</td><td class="crd-td">11,2</td><td class="crd-td">10,7</td></tr>
<tr><td class="crd-td"><strong>Afar Danakil, Massawa and Habesh Littoral</strong></td><td class="crd-td">9,7</td><td class="crd-td">9,7</td><td class="crd-td">9,7</td><td class="crd-td">9,4</td><td class="crd-td">9,9</td><td class="crd-td">9,9</td><td class="crd-td">10,2</td><td class="crd-td">9,7</td></tr>
<tr><td class="crd-td"><strong>Ajuran Empire, Benadir and Juba-Shabelle</strong></td><td class="crd-td">12,9</td><td class="crd-td">12,5</td><td class="crd-td">11,3</td><td class="crd-td">10,4</td><td class="crd-td">11,2</td><td class="crd-td">10,9</td><td class="crd-td">8</td><td class="crd-td">6,9</td></tr>
<tr><td class="crd-td"><strong>Northern Somali Clans and Majeerteen</strong></td><td class="crd-td">7,9</td><td class="crd-td">7,3</td><td class="crd-td">6,6</td><td class="crd-td">5,5</td><td class="crd-td">5,9</td><td class="crd-td">5,7</td><td class="crd-td">4,1</td><td class="crd-td">3,4</td></tr>
<tr><td class="crd-td"><strong>Sultanates of Ifat, Adal and Harar</strong></td><td class="crd-td">0,9</td><td class="crd-td">0,9</td><td class="crd-td">1,1</td><td class="crd-td">1,3</td><td class="crd-td">1,4</td><td class="crd-td">1,4</td><td class="crd-td">1,9</td><td class="crd-td">1,7</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Percentage share of aggregate Horn population by sub-region across eight benchmark years from 1000BC to 1880AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

The 1880AD terminal benchmark precedes the 1888AD to 1892AD rinderpest panzootic and Great Ethiopian Famine, preserving pre-crisis plateau and pastoral population levels prior to colonial boundary demarcation. Twelve peripheral settlements in the 164-site gazetteer lie immediately outside the nine mapped Horn sub-region masks along the Sudanese Nile-Butana, Red Sea, Sobat and Kenyan Lamu-Winam corridors and are catalogued alongside the internal sub-regions in the companion settlement gazetteer.
