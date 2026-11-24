---
title: "Mediaeval Near East, Iran and Caucasia (1000-1500)"
subtitle: "Settlement Gazetteer and Urban Rank-Size Catalogue"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: mediaeval_near_east_iran_caucasia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_mediaeval_near_east_iran_caucasia_spatial.png"
hero_caption: "Spatial distribution of 1.200 catalogued mediaeval settlements across eight ecological and political sub-regions from Anatolia to Khorasan and Arabia between 1000AD and 1500AD."
hero_label: "fig:hero-settlements-mediaeval-near-east-iran-caucasia"

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

This companion gazetteer documents the 1.200 settlements compiled for the Near East, Iran, Afghanistan, Caucasia, Cyprus and the Arabian Peninsula between 1000AD and 1500AD. Selected from an initial pool of 1.450 candidate places after excluding 250 duplicates, uninhabited monuments and overlapping suburban entries, the catalogue spans nineteen modern jurisdictions anchored by Iran (306 places), Turkey (302), Iraq (136), Syria (101), Afghanistan (91), Israel (76), Saudi Arabia (48) and Yemen (34), alongside smaller highland and maritime networks in Azerbaijan, Lebanon, Oman, Jordan, Cyprus and Georgia. Across the five-century interval, urban primacy shifted repeatedly in response to Seljuk frontier consolidation around Konya, Bagratid expansion in Tbilisi and Ani, Crusader-Mamluk contests along the Levantine seaboard, Mongol destruction in Khorasan and Baghdad, the Black Death of 1347-1349AD and Timurid-Turkmen reconstruction in Herat and Tabriz. Evaluated across all 1.200 settlements, the peak rank-size distribution exhibits a markedly flat Zipf slope of $\alpha = 0,268$ ($R^2 = 0,661$), reflecting a polycentric mediaeval urban network in which regional capitals and caravan entrepôts balanced against frequent demographic shocks.

<figure class="crd-figure-block" id="fig:hero-settlements-mediaeval-near-east-iran-caucasia">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mediaeval-near-east-iran-caucasia-settlements/fig1_mediaeval_near_east_iran_caucasia_spatial.png" alt="fig:hero-settlements-mediaeval-near-east-iran-caucasia" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 1.200 catalogued mediaeval settlements across eight ecological and political sub-regions from Anatolia to Khorasan and Arabia between 1000AD and 1500AD.</figcaption>
</figure>

# Background

Urban networks across southwestern Asia between 1000AD and 1500AD did not conform to a single imperial hierarchy. Unlike late antique Rome or early Abbasid Baghdad, which had concentrated disproportionate fiscal and demographic weight in a single capital, the mediaeval Near East and Iranian world fragmented into competing regional courts and mercantile corridors [@Bosworth2007Historic; @Peacock2021Urban]. Great Seljuk and Khwarazmian rule elevated Nishapur, Rayy, Isfahan, Shiraz and Hamadan across the Iranian plateau while Rum Seljuk sultans turned Konya, Kayseri and Sivas into fortified caravanserai hubs across central Anatolia [@S2020History; @Mahmuluddin2024Myth]. In Transcaucasia, Bagratid kings expanded Tbilisi and Ani while Shaddadid and Eldiguzid rulers patronised Ganja and Tabriz [@Yusif2025Reflection; @Guven2024Seljuk]. Along the Mediterranean and Mesopotamian corridors, Damascus, Aleppo, Mosul and Baghdad sustained dense craft and transit quarters until thirteenth-century Mongol campaigns and mid-fourteenth-century plague curtailed urban heights across every subregion [@Katie2021Cities; @Wing2016Jalayirids; @MH2025Plague].

# Methodology

Candidate settlements were consolidated from four primary geographic and archaeological registers: the Al-Thurayya Early Islamic Gazetteer (629 included settlements), the Pleiades Ancient World Gazetteer (592 entries), the Published Excavations Atlas (114 sites) and the C-Turkey Chronometric Register, with overlapping cross-references reconciled by coordinate proximity and historical toponymy [@Bosworth2007Historic; @M2026Late; @AM2026Tale]. Candidate filtering excluded 250 records representing isolated forts, rural sanctuaries without residential quarters, unlocated itinerary stages or variant-spelling doublets within 25 km. Each of the 1.200 retained settlements carries a fifty-year population series from 1000AD to 1500AD tied to its surrounding sub-region's urban share and constrained by an explicit urban-core mask so modern suburban sprawl never inflates mediaeval urban totals.

All spatial joins map settlement coordinates onto smooth vector sub-region polygons and 29 historical Ottoman, Russian and Mandate divisions alongside 2.645 modern geoBoundaries ADM1 and ADM2 polygons [@Runfola2020GeoBoundaries]. Strictly mass-conserving pycnophylactic scaling across 66.308 unit-year checks ensures that urban point totals remain consistent with regional rural densities across the 1500AD transition into early modern censuses.

# Testing and Validation

Internal validation of the 1.200-settlement gazetteer evaluates territorial completeness across all nineteen jurisdictions, temporal density across fifty-year steps from 1000AD to 1500AD and rank-size conformity. Temporal coverage remains steady throughout the domain, with 1.194 to 1.197 active settlements recorded at each fifty-year benchmark. Across all 1.200 settlements, the ordinary-least-squares log-log regression of peak population against rank yields $\alpha = 0,268$ ($R^2 = 0,661$). This gentle slope captures the historical reality of a multi-polar urban world in which roughly a dozen major capitals - including Shiraz, Nishapur, Rayy, Hamadan, Baghdad, Damascus, Ardabil, Ahvaz, Sirjan and Mecca - clustered along a broad upper tier rather than trailing a single mega-city [@Bosworth2007Historic; @Katie2021Cities].

<figure class="crd-figure-block" id="fig:settlements-catalogue-mediaeval-near-east-iran-caucasia">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mediaeval-near-east-iran-caucasia-settlements/fig4_mediaeval_near_east_iran_caucasia_settlements.png" alt="fig:settlements-catalogue-mediaeval-near-east-iran-caucasia" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Rank-size distribution across 1.200 catalogued mediaeval settlements and leading urban centres by peak population between 1000AD and 1500AD.</figcaption>
</figure>

# Results

Territorial distribution reflects the underlying agrarian and oasis carrying capacity of southwestern Asia. Iran (306 settlements, 25,5% of the catalogue) and Turkey (302 settlements, 25,2%) together account for just over half of all catalogued sites, followed by Iraq (136), Syria (101), Afghanistan (91) and Israel (76). Across the Arabian Peninsula, Arabia's 103 catalogued places concentrate heavily in Saudi Arabia (48), Yemen (34) and Oman (17), tracing Red Sea pilgrimage routes, Yemeni highland terraces and Gulf maritime entrepôts such as Sohar. Transcaucasia contributes 34 settlements across Azerbaijan (19), Georgia (12) and Armenia (3), while Cyprus adds 14 fortified and coastal centres including Nicosia and Famagusta [@Kaya2016History; @Yusif2025Reflection].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">1000AD Urban</th><th class="crd-th">1500AD Urban</th><th class="crd-th">Peak City</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Iran</strong></td><td class="crd-td">306</td><td class="crd-td">25,5%</td><td class="crd-td">2,64M</td><td class="crd-td">2,07M</td><td class="crd-td">44,9k</td></tr>
<tr><td class="crd-td"><strong>Turkey</strong></td><td class="crd-td">302</td><td class="crd-td">25,2%</td><td class="crd-td">1,97M</td><td class="crd-td">1,69M</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Iraq</strong></td><td class="crd-td">136</td><td class="crd-td">11,3%</td><td class="crd-td">1,07M</td><td class="crd-td">887,8k</td><td class="crd-td">44,9k</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">101</td><td class="crd-td">8,4%</td><td class="crd-td">775k</td><td class="crd-td">641,3k</td><td class="crd-td">44,9k</td></tr>
<tr><td class="crd-td"><strong>Afghanistan</strong></td><td class="crd-td">91</td><td class="crd-td">7,6%</td><td class="crd-td">697,8k</td><td class="crd-td">541,6k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">76</td><td class="crd-td">6,3%</td><td class="crd-td">507k</td><td class="crd-td">427,6k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Saudi Arabia</strong></td><td class="crd-td">48</td><td class="crd-td">4%</td><td class="crd-td">391,5k</td><td class="crd-td">310k</td><td class="crd-td">44,9k</td></tr>
<tr><td class="crd-td"><strong>Yemen</strong></td><td class="crd-td">34</td><td class="crd-td">2,8%</td><td class="crd-td">275,4k</td><td class="crd-td">215,7k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Azerbaijan</strong></td><td class="crd-td">19</td><td class="crd-td">1,6%</td><td class="crd-td">144,1k</td><td class="crd-td">115,1k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">19</td><td class="crd-td">1,6%</td><td class="crd-td">132,4k</td><td class="crd-td">108k</td><td class="crd-td">16,8k</td></tr>
<tr><td class="crd-td"><strong>Oman</strong></td><td class="crd-td">17</td><td class="crd-td">1,4%</td><td class="crd-td">115,8k</td><td class="crd-td">97,5k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">16</td><td class="crd-td">1,3%</td><td class="crd-td">125,5k</td><td class="crd-td">106,9k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">14</td><td class="crd-td">1,2%</td><td class="crd-td">87k</td><td class="crd-td">76,3k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">12</td><td class="crd-td">1%</td><td class="crd-td">74,9k</td><td class="crd-td">59,5k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Armenia</strong></td><td class="crd-td">3</td><td class="crd-td">0,2%</td><td class="crd-td">30,6k</td><td class="crd-td">25,3k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">2</td><td class="crd-td">0,2%</td><td class="crd-td">12,7k</td><td class="crd-td">11,5k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">2</td><td class="crd-td">0,2%</td><td class="crd-td">12,3k</td><td class="crd-td">10,5k</td><td class="crd-td">6,3k</td></tr>
<tr><td class="crd-td"><strong>Bahrain</strong></td><td class="crd-td">1</td><td class="crd-td">0,1%</td><td class="crd-td">6,4k</td><td class="crd-td">5,7k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>United Arab Emirates</strong></td><td class="crd-td">1</td><td class="crd-td">0,1%</td><td class="crd-td">6,5k</td><td class="crd-td">6k</td><td class="crd-td">6,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Territorial breakdown of the 1.200 catalogued mediaeval settlements showing urban totals at 1000AD and 1500AD and maximum single-city peak.</figcaption>
</figure>

## Leading Mediaeval Urban Centres

Between 1000AD and 1200AD, the top urban tier was anchored by Persian plateau metropolises (Shiraz, Nishapur, Hamadan, Rayy, Ahvaz, Sirjan and Ardabil), alongside Baghdad, Damascus and Mecca [@Bosworth2007Historic]. Secondary provincial hubs between 13k and 18k included Aleppo, Mosul, Isfahan, Tus, Samarra, Kufa, Wasit, Raqqa, Amid (Diyarbakir), Sanaa, Herat and Marv al-Rudh [@Katie2021Cities; @Wing2016Jalayirids]. The thirteenth-century Mongol shocks and fourteenth-century plague compressed these upper figures by roughly a fifth to a quarter across Iraq and eastern Iran, while Anatolian and Azerbaijani centres such as Konya, Sivas, Tabriz and Tbilisi sustained durable regional roles into the Timurid and early Ottoman fifteenth century [@Peacock2021Urban; @Darvish2025Comparativ].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1000AD</th><th class="crd-th">1250AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Šahrastān</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,19, 55,21</td><td class="crd-td">44,5k</td><td class="crd-td">42,5k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Šīrāz</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,62, 52,53</td><td class="crd-td">44,5k</td><td class="crd-td">42,5k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Baghdād</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,36, 44,36</td><td class="crd-td">44,5k</td><td class="crd-td">42,5k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Makkah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,39, 39,84</td><td class="crd-td">44,5k</td><td class="crd-td">42,5k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Hamadhān</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,78, 48,58</td><td class="crd-td">44,5k</td><td class="crd-td">42,5k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Naysābūr</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,12, 58,8</td><td class="crd-td">44,5k</td><td class="crd-td">42,5k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>al-Ahwāz</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,33, 48,69</td><td class="crd-td">44,5k</td><td class="crd-td">42,5k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>al-Sīrjān</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,46, 55,75</td><td class="crd-td">44,5k</td><td class="crd-td">42,5k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Ardabīl</strong></td><td class="crd-td">Iran</td><td class="crd-td">38,24, 48,31</td><td class="crd-td">44,5k</td><td class="crd-td">42,5k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Dimašq</strong></td><td class="crd-td">Syria</td><td class="crd-td">33,52, 36,3</td><td class="crd-td">44,5k</td><td class="crd-td">42,5k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>River Gate</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,75, 40,73</td><td class="crd-td">18k</td><td class="crd-td">17,7k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Ani city wall</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,51, 43,57</td><td class="crd-td">17,9k</td><td class="crd-td">16,5k</td><td class="crd-td">NA</td></tr>
<tr><td class="crd-td"><strong>Theodosian Walls</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41, 28,92</td><td class="crd-td">17,9k</td><td class="crd-td">17,8k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>al-Raqqah</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,95, 39,05</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Āmid</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,92, 40,21</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>'Arabān</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,06, 40,69</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>al-Mawṣil</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,33, 43,13</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Āmul</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,42, 52,41</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>al-Damghān</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,13, 54,38</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Arrājān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,61, 50,3</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Šahrastān</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,83, 51,52</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Sīrāf</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,7, 52,34</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Iṣṭakhr</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,97, 52,93</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Nayrīz</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,21, 54,28</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Khasū</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,52, 54,41</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Darābajird</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,75, 54,55</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Sāmarrā'</strong></td><td class="crd-td">Iraq</td><td class="crd-td">34,21, 43,88</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>al-Kūfah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,04, 44,39</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Ḥulwān</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,48, 45,93</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Wāsiṭ</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,19, 46,32</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td><td class="crd-td">13,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 30 catalogued mediaeval settlements ranked by peak population with coordinates and populations at 1000AD, 1250AD and 1500AD.</figcaption>
</figure>

# Limitations

Three gazetteer constraints require care in local interpretation. First, early Islamic geographic compendia describe central Iran, Mesopotamia and northern Syria in much finer detail than interior Anatolia, highland Georgia or southern Arabia, producing denser point clustering along historic Iranian and Syrian trunk roads than in mountainous or pastoral districts [@Bosworth2007Historic; @Peacock2021Urban]. Second, several wall-circuit and monument entries inherited from classical archaeological atlases (such as city-wall segments at Ani or Constantinople) act as spatial proxies for wider urban quarters when historical quarter-level tallies are absent, requiring careful deduplication against adjacent municipal centroids [@M2026Late; @Katie2021Cities]. Third, fifty-year smoothing absorbs sharp short-term siege depopulations - such as the 1221AD sack of Nishapur or the 1258AD sack of Baghdad - into multi-decadal regional trajectories rather than single-year spikes [@Wing2016Jalayirids; @MH2025Plague].

# Conclusion

The 1.200-settlement gazetteer confirms that mediaeval southwestern Asia maintained a deeply polycentric urban network from 1000AD to 1500AD. Even after thirteenth-century conquests and fourteenth-century plague depressed peak metropolitan populations, regional market nodes across Anatolia, Iran, Khorasan, the Levant, Transcaucasia and Yemen preserved the institutional and spatial skeleton upon which early modern urban growth resumed.

# Appendix

## Regional Sub-Catalogues: Anatolia, Levant and Transcaucasia

The following table lists the twenty highest-ranking catalogued settlements across Turkey, Syria, Lebanon, Israel, Palestine, Jordan, Cyprus, Georgia, Armenia and Azerbaijan.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1350AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dimašq</strong></td><td class="crd-td">Syria</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k</td><td class="crd-td">39k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>River Gate</strong></td><td class="crd-td">Syria</td><td class="crd-td">18k</td><td class="crd-td">17,9k</td><td class="crd-td">17,2k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Ani city wall</strong></td><td class="crd-td">Turkey</td><td class="crd-td">17,9k</td><td class="crd-td">17,6k</td><td class="crd-td">14,9k</td><td class="crd-td">NA</td></tr>
<tr><td class="crd-td"><strong>Theodosian Walls</strong></td><td class="crd-td">Turkey</td><td class="crd-td">17,9k</td><td class="crd-td">18k</td><td class="crd-td">17,4k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>al-Raqqah</strong></td><td class="crd-td">Syria</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Āmid</strong></td><td class="crd-td">Turkey</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>'Arabān</strong></td><td class="crd-td">Syria</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Dabīl</strong></td><td class="crd-td">Armenia</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Bardha'ah</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Mūghān</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>al-Ramlah</strong></td><td class="crd-td">Israel</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Ṭabariyyah</strong></td><td class="crd-td">Israel</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Adhrūḥ</strong></td><td class="crd-td">Jordan</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Adhri'āt</strong></td><td class="crd-td">Syria</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Ḥimṣ</strong></td><td class="crd-td">Syria</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Qinnasrīn</strong></td><td class="crd-td">Syria</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Ḥalab</strong></td><td class="crd-td">Syria</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Gerasa</strong></td><td class="crd-td">Jordan</td><td class="crd-td">17,8k</td><td class="crd-td">17,3k</td><td class="crd-td">16,5k</td><td class="crd-td">15,7k</td></tr>
<tr><td class="crd-td"><strong>Archaic City Wall and Gate of Phocaea</strong></td><td class="crd-td">Turkey</td><td class="crd-td">17,4k</td><td class="crd-td">16,9k</td><td class="crd-td">16k</td><td class="crd-td">15,3k</td></tr>
<tr><td class="crd-td"><strong>Cnidus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">17,4k</td><td class="crd-td">16,9k</td><td class="crd-td">16k</td><td class="crd-td">15,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading catalogued settlements across Anatolia, the Levant, Cyprus and Transcaucasia (1000-1500AD).</figcaption>
</figure>

## Regional Sub-Catalogues: Iran, Iraq, Afghanistan and Arabia

The complementary eastern and southern table enumerates the twenty highest-ranking catalogued settlements across Iran, Iraq, Afghanistan, Saudi Arabia, Yemen, Oman, Kuwait, Bahrain and the United Arab Emirates.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1350AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Šahrastān</strong></td><td class="crd-td">Iran</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k</td><td class="crd-td">39k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Šīrāz</strong></td><td class="crd-td">Iran</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k</td><td class="crd-td">39k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Baghdād</strong></td><td class="crd-td">Iraq</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k</td><td class="crd-td">39k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Makkah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k</td><td class="crd-td">39k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Hamadhān</strong></td><td class="crd-td">Iran</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k</td><td class="crd-td">39k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Naysābūr</strong></td><td class="crd-td">Iran</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k</td><td class="crd-td">39k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>al-Ahwāz</strong></td><td class="crd-td">Iran</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k</td><td class="crd-td">39k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>al-Sīrjān</strong></td><td class="crd-td">Iran</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k</td><td class="crd-td">39k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Ardabīl</strong></td><td class="crd-td">Iran</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k</td><td class="crd-td">39k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>al-Mawṣil</strong></td><td class="crd-td">Iraq</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Āmul</strong></td><td class="crd-td">Iran</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>al-Damghān</strong></td><td class="crd-td">Iran</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Arrājān</strong></td><td class="crd-td">Iran</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Šahrastān</strong></td><td class="crd-td">Iran</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Sīrāf</strong></td><td class="crd-td">Iran</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Iṣṭakhr</strong></td><td class="crd-td">Iran</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Nayrīz</strong></td><td class="crd-td">Iran</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Khasū</strong></td><td class="crd-td">Iran</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Darābajird</strong></td><td class="crd-td">Iran</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Sāmarrā'</strong></td><td class="crd-td">Iraq</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">15,6k</td><td class="crd-td">13,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading catalogued settlements across Iran, Iraq, Afghanistan and the Arabian Peninsula (1000-1500AD).</figcaption>
</figure>

# Sources
