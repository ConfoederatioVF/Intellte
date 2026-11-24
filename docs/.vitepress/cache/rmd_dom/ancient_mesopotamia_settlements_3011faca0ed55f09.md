---
title: "Ancient Mesopotamia to 539 BC"
subtitle: "Settlement Gazetteer: 111 Individually Assessed Cities, Tells and Towns (3500BC-539BC)"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: ancient_mesopotamia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_ancient_mesopotamia_spatial.png"
hero_caption: "Spatial distribution of 88 core intra-mask settlements (from 111 individually assessed sites across Iraq, eastern Syria and south-eastern Turkey) spanning five Mesopotamian ecological zones from 3500BC to 539BC."
hero_label: "fig:hero-settlements-mesopotamia"

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

This gazetteer compiles verified spatial coordinates and evidence-assessed multi-period population series for 111 individually assessed ancient settlements across Mesopotamia between 3500BC and 539BC (79 in modern Iraq, 27 in eastern Syria and 5 in the Upper Euphrates and Tur Abdin borderlands of south-eastern Turkey). Screened from 311 candidate tells, historic cities and archaeological loci (200 excluded), the retained settlements span five ecological zones: Lower Mesopotamia (Sumer and Southern Babylonia), Akkad and Central Babylonia, Assyria and the Upper Tigris, the Middle Euphrates and Khabur Jezirah, and the Diyala and East Tigris piedmont. Active assessed entries rise from 15 early urban hubs at 3500BC to 62 at 2500BC and 87 at 1800BC before consolidating to 61 in 1000BC and 47 major centres in 539BC, tracing urban growth from early Sumerian cities such as Uruk (51,2k), Lagash (44,6k) and Ur (43,8k) to the imperial metropolises of Nimrud (63,8k), Nineveh (114k) and Babylon (172k).



# Background

Reconstructing the urban network of ancient Mesopotamia requires uniting archaeological tell surveys with historical cuneiform geography. Unlike Graeco-Roman towns recorded in surviving civic charters, Mesopotamian settlements appear across disparate repositories: mounded ceramic surveys across the southern alluvium, declassified satellite hollow-way inventories in the Syrian Jazira, Neo-Assyrian royal itineraries and excavated stratigraphic sequences [@Marchetti2019Rise; @Ur2010Cycles; @Gordin2022Mapa; @Deadman2026Comparativ].

In the southern floodplains of Sumer and Akkad, settlement clustered tightly along raised alluvial levees and engineered feeder canals, leaving tells spaced 10 to 30 km apart across otherwise arid mudflats [@Giosan2025Morphodyna; @Mantellini2024Developmen]. Further north across the Upper Tigris, Khabur and Balikh triangles, settlements sat on limestone ridges and wadi terraces spaced every 2 to 5 km within rain-fed barley corridors [@McMahon2019Early; @Ur2013Ancient]. Bringing both ecological zones into a single bilingual gazetteer exposes long-run shifts between polycentric Sumerian city-states, northern Bronze Age tell kingdoms and first-millennium imperial capitals [@Chelazzi2026Emergence; @Marchetti2024Long].

# Methodology

## Candidate Screening and Spatial Partition

Candidate entries were screened from published excavation monographs, regional surface surveys, linked Mesopotamian gazetteers and radiocarbon inventories [@Gordin2022Mapa; @Deadman2026Comparativ]. Of 311 initial candidates located within and immediately bordering the 505.275 km² Mesopotamian territorial mask defined over geoBoundaries national outlines [@Runfola2020GeoBoundaries], 200 duplicate tell synonyms, monumental non-settlement fragments (city gates, palaces, shrines and excavation grid blocks) and unquantified sherd scatters were excluded, leaving 111 individually assessed settlements (88 strictly inside the core territorial polygon and 23 along immediate Upper Euphrates, Anatolian piedmont and Zagros borderlands).

Every retained settlement is mapped to one of five ecological zones using its decimal coordinates and modern country territory: Lower Mesopotamia (Sumer and Southern Babylonia), Akkad and Central Babylonia, Assyria and the Upper Tigris, the Middle Euphrates and Khabur Jezirah, and the Diyala and East Tigris Piedmont. Combining diacritics on historical transliterations such as Mari and Shuruppak are normalised prior to typesetting so tables render cleanly without glyph substitution.

## Site-Specific Population Assessment and Benchmarks

Rather than applying uniform nominal caps, every settlement in the ledger is individually evaluated from excavated or surveyed occupied hectares multiplied by documented period-specific urban density coefficients (typically 110 to 220 inhabitants per hectare depending on whether outer lower towns held compact courtyard housing or palace precincts and gardens), cross-checked against architectural plans, cuneiform archives and historical episodes of foundation, expansion and destruction [@Ur2014Households; @Marchetti2024Long; @Ur2013Ancient]. Assessed urban peaks span two orders of magnitude: from first-millennium imperial metropolises such as Babylon (172k at 565BC across roughly 900 ha), Nineveh (114k at 680BC across 750 ha) and Nimrud (63,8k at 750BC across 360 ha), through Early Dynastic, Ur III and Old Babylonian capitals including Uruk (51,2k), Lagash (44,6k), Ur (43,8k), Dur-Sharrukin (36,4k), Umma (35,2k), Larsa (34,8k), Kish (33,4k), Girsu (31,4k) and Nippur (29,8k), down to excavated secondary towns and forts of 620 to 4k inhabitants. Because each site's trajectory is dated to its own archaeological turning points (such as Sennacherib's 689BC sack of Babylon, Sargon II's 705BC abandonment of Dur-Sharrukin or the 612BC fall of Nineveh), Tables 1 to 5 present linearly interpolated resident populations at four chapter benchmarks (2500BC, 1800BC, 1000BC and 539BC) alongside each settlement's exact assessed peak and peak date, marking periods prior to foundation or following abandonment with a hyphen (-).

# Testing and Validation

Across all 111 individually assessed settlements, rank-size regression on peak populations yields a near-canonical Zipf slope of $\alpha = 0,98$ ($R^2 = 0,86$), while the 88 core intra-mask sites plotted in Figure \ref{fig:settlements-rank} yield $\alpha = 1,05$ ($R^2 = 0,85$). Replacing legacy flat gazetteer caps with site-specific area-density reconstructions restores authentic urban scaling from imperial mega-capitals down to regional market tells [@Chelazzi2026Emergence; @Marchetti2024Long].

Spatial and typological verification confirms zero non-settlement fragments (such as named city gates, ramparts or survey blocks), zero duplicate tell synonyms and complete chronological alignment between each settlement's population horizon and its documented foundation and abandonment dates [@Ur2013Ancient; @Schneider2022Nippur].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ancient-mesopotamia-settlements/fig4_ancient_mesopotamia_settlements.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size distribution across 88 core intra-mask settlements (plotted slope 1,05, R² = 0,85; full 111-site ledger slope 0,98, R² = 0,86) and the twelve largest individually assessed Mesopotamian cities between 3500BC and 539BC.</figcaption>
</figure>

# Results

## Lower Mesopotamia: Sumer and Southern Babylonia

Table \ref{tab:zone1-sites} catalogues 23 individually assessed settlements across the Lower Euphrates-Tigris alluvial plain from Eridu and Ur north to Nippur, Mashkan-Shapir and Tulul al-Baqarat (Kesh). Here stand the earliest urban hubs of antiquity - Uruk (51,2k), Lagash (44,6k), Ur (43,8k), Umma (35,2k), Larsa (34,8k), Girsu (31,4k), Nippur (29,8k), Adab (27,8k), Isin (24,6k), Shuruppak (19,2k), Bad-tibira (17,6k), Mashkan-Shapir (16,6k) and Zabalam (13,6k) - anchored to deltaic marshes and gravity-fed levee canals [@Giosan2025Morphodyna; @Goodman2024Flooding; @Mantellini2024Developmen].

<figure class="crd-table-figure" id="tab:zone1-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2500BC</th><th class="crd-th">1800BC</th><th class="crd-th">1000BC</th><th class="crd-th">539BC</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Uruk</strong></td><td class="crd-td">IRQ: 31,32, 45,64</td><td class="crd-td">51,2k</td><td class="crd-td">24,8k</td><td class="crd-td">13,3k</td><td class="crd-td">25,4k</td><td class="crd-td">51,2k (2500BC)</td></tr>
<tr><td class="crd-td"><strong>Lagash</strong></td><td class="crd-td">IRQ: 31,41, 46,41</td><td class="crd-td">44,6k</td><td class="crd-td">8,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">44,6k (2500BC)</td></tr>
<tr><td class="crd-td"><strong>Ur</strong></td><td class="crd-td">IRQ: 30,96, 46,11</td><td class="crd-td">13,4k</td><td class="crd-td">27,4k</td><td class="crd-td">9,8k</td><td class="crd-td">18,4k</td><td class="crd-td">43,8k (2050BC)</td></tr>
<tr><td class="crd-td"><strong>Umma</strong></td><td class="crd-td">IRQ: 31,62, 45,93</td><td class="crd-td">33k</td><td class="crd-td">13,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">35,2k (2450BC)</td></tr>
<tr><td class="crd-td"><strong>Larsa</strong></td><td class="crd-td">IRQ: 31,24, 45,96</td><td class="crd-td">14,6k</td><td class="crd-td">34,2k</td><td class="crd-td">8,6k</td><td class="crd-td">14,6k</td><td class="crd-td">34,8k (1780BC)</td></tr>
<tr><td class="crd-td"><strong>Girsu</strong></td><td class="crd-td">IRQ: 31,56, 46,18</td><td class="crd-td">20,3k</td><td class="crd-td">11,4k</td><td class="crd-td">4,4k</td><td class="crd-td">5,8k</td><td class="crd-td">31,4k (2120BC)</td></tr>
<tr><td class="crd-td"><strong>Nippur</strong></td><td class="crd-td">IRQ: 32,13, 45,23</td><td class="crd-td">25,4k</td><td class="crd-td">27,6k</td><td class="crd-td">10,5k</td><td class="crd-td">18,9k</td><td class="crd-td">29,8k (2050BC)</td></tr>
<tr><td class="crd-td"><strong>Adab</strong></td><td class="crd-td">IRQ: 31,95, 45,63</td><td class="crd-td">25,3k</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,8k (2450BC)</td></tr>
<tr><td class="crd-td"><strong>Isin</strong></td><td class="crd-td">IRQ: 31,93, 45,28</td><td class="crd-td">6,4k</td><td class="crd-td">18,4k</td><td class="crd-td">13,2k</td><td class="crd-td">9,6k</td><td class="crd-td">24,6k (1950BC)</td></tr>
<tr><td class="crd-td"><strong>Shuruppak</strong></td><td class="crd-td">IRQ: 31,78, 45,51</td><td class="crd-td">17,7k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,2k (2550BC)</td></tr>
<tr><td class="crd-td"><strong>Bad-tibira</strong></td><td class="crd-td">IRQ: 31,38, 46</td><td class="crd-td">16,5k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,6k (2450BC)</td></tr>
<tr><td class="crd-td"><strong>Mashkan-Shapir</strong></td><td class="crd-td">IRQ: 32,23, 45,31</td><td class="crd-td">-</td><td class="crd-td">16,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,6k (1760BC)</td></tr>
<tr><td class="crd-td"><strong>Zabalam</strong></td><td class="crd-td">IRQ: 31,74, 45,88</td><td class="crd-td">13,4k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,6k (2450BC)</td></tr>
<tr><td class="crd-td"><strong>Nigin</strong></td><td class="crd-td">IRQ: 31,43, 46,15</td><td class="crd-td">10,8k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,6k (2450BC)</td></tr>
<tr><td class="crd-td"><strong>Tell al-Wilaya</strong></td><td class="crd-td">IRQ: 32,31, 45,66</td><td class="crd-td">9,2k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,6k (2250BC)</td></tr>
<tr><td class="crd-td"><strong>Abu Salabikh</strong></td><td class="crd-td">IRQ: 32,25, 45,05</td><td class="crd-td">8,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (2550BC)</td></tr>
<tr><td class="crd-td"><strong>Tulul al-Baqarat</strong></td><td class="crd-td">IRQ: 32,34, 45,72</td><td class="crd-td">7,8k</td><td class="crd-td">5,6k</td><td class="crd-td">3,9k</td><td class="crd-td">4,9k</td><td class="crd-td">8,2k (2050BC)</td></tr>
<tr><td class="crd-td"><strong>Kisurra</strong></td><td class="crd-td">IRQ: 31,84, 45,48</td><td class="crd-td">3,7k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k (1900BC)</td></tr>
<tr><td class="crd-td"><strong>Abu Tbeirah</strong></td><td class="crd-td">IRQ: 30,98, 46,27</td><td class="crd-td">5,4k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (2350BC)</td></tr>
<tr><td class="crd-td"><strong>Eridu</strong></td><td class="crd-td">IRQ: 30,82, 46</td><td class="crd-td">3,7k</td><td class="crd-td">1,9k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">6,2k (3500BC)</td></tr>
<tr><td class="crd-td"><strong>Tell al-Lahm</strong></td><td class="crd-td">IRQ: 30,77, 46,37</td><td class="crd-td">4,6k</td><td class="crd-td">5,6k</td><td class="crd-td">3,8k</td><td class="crd-td">4,6k</td><td class="crd-td">5,9k (1650BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Sifr</strong></td><td class="crd-td">IRQ: 31,29, 45,97</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1900BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Khaiber</strong></td><td class="crd-td">IRQ: 31,06, 45,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1580BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Lower Mesopotamia (Sumer and Southern Babylonia) from 2500BC to 539BC with assessed peak populations.</figcaption>
</figure>

## Akkad and Central Babylonia

Table \ref{tab:zone2-sites} lists 14 individually assessed settlements across the narrow Euphrates-Tigris neck spanning Babylon (172k), Kish (33,4k), Dur-Kurigalzu (28,6k), Borsippa (25,6k), Sippar (22,4k), Cutha (17,6k), Marad (13,4k), Tell ed-Der, Dilbat, Rapiqu, Samarra and Hit. As salinisation curtailed productivity in southernmost Sumer during the second millennium BC, central Babylonia became the demographic heartland of Old, Kassite and Neo-Babylonian statehood [@Schneider2022Nippur; @Gordin2022Mapa; @Marchetti2024Long].

<figure class="crd-table-figure" id="tab:zone2-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2500BC</th><th class="crd-th">1800BC</th><th class="crd-th">1000BC</th><th class="crd-th">539BC</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Babylon</strong></td><td class="crd-td">IRQ: 32,54, 44,42</td><td class="crd-td">-</td><td class="crd-td">41k</td><td class="crd-td">42,2k</td><td class="crd-td">168k</td><td class="crd-td">172k (565BC)</td></tr>
<tr><td class="crd-td"><strong>Kish</strong></td><td class="crd-td">IRQ: 32,54, 44,6</td><td class="crd-td">33,4k</td><td class="crd-td">21,6k</td><td class="crd-td">8,6k</td><td class="crd-td">17,2k</td><td class="crd-td">33,4k (2500BC)</td></tr>
<tr><td class="crd-td"><strong>Dur-Kurigalzu</strong></td><td class="crd-td">IRQ: 33,35, 44,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">3,1k</td><td class="crd-td">28,6k (1300BC)</td></tr>
<tr><td class="crd-td"><strong>Borsippa</strong></td><td class="crd-td">IRQ: 32,39, 44,34</td><td class="crd-td">-</td><td class="crd-td">11,2k</td><td class="crd-td">9,8k</td><td class="crd-td">25,6k</td><td class="crd-td">25,6k (539BC)</td></tr>
<tr><td class="crd-td"><strong>Sippar</strong></td><td class="crd-td">IRQ: 33,06, 44,25</td><td class="crd-td">11,2k</td><td class="crd-td">18,6k</td><td class="crd-td">9,6k</td><td class="crd-td">21,8k</td><td class="crd-td">22,4k (565BC)</td></tr>
<tr><td class="crd-td"><strong>Cutha</strong></td><td class="crd-td">IRQ: 32,73, 44,67</td><td class="crd-td">9,2k</td><td class="crd-td">14,6k</td><td class="crd-td">9,4k</td><td class="crd-td">17,6k</td><td class="crd-td">17,6k (539BC)</td></tr>
<tr><td class="crd-td"><strong>Marad</strong></td><td class="crd-td">IRQ: 32,07, 44,78</td><td class="crd-td">9,8k</td><td class="crd-td">13,4k</td><td class="crd-td">6,8k</td><td class="crd-td">12,2k</td><td class="crd-td">13,4k (1800BC)</td></tr>
<tr><td class="crd-td"><strong>Tell ed-Der</strong></td><td class="crd-td">IRQ: 33,1, 44,3</td><td class="crd-td">-</td><td class="crd-td">9k</td><td class="crd-td">6,2k</td><td class="crd-td">7,4k</td><td class="crd-td">9,4k (1850BC)</td></tr>
<tr><td class="crd-td"><strong>Dilbat</strong></td><td class="crd-td">IRQ: 32,3, 44,47</td><td class="crd-td">4,2k</td><td class="crd-td">7,6k</td><td class="crd-td">3,9k</td><td class="crd-td">6,6k</td><td class="crd-td">7,6k (1800BC)</td></tr>
<tr><td class="crd-td"><strong>Rapiqu</strong></td><td class="crd-td">IRQ: 33,35, 43,78</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6k</td><td class="crd-td">5,9k</td><td class="crd-td">6,8k (850BC)</td></tr>
<tr><td class="crd-td"><strong>Samarra</strong></td><td class="crd-td">IRQ: 34,2, 43,87</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">5,2k</td><td class="crd-td">5,4k</td><td class="crd-td">6,8k (700BC)</td></tr>
<tr><td class="crd-td"><strong>Hit</strong></td><td class="crd-td">IRQ: 33,64, 42,83</td><td class="crd-td">3,2k</td><td class="crd-td">5,4k</td><td class="crd-td">5,6k</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k (539BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Uqair</strong></td><td class="crd-td">IRQ: 32,78, 44,66</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (3000BC)</td></tr>
<tr><td class="crd-td"><strong>Jemdet Nasr</strong></td><td class="crd-td">IRQ: 32,72, 44,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (3000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Akkad and Central Babylonia from 2500BC to 539BC with assessed peak populations.</figcaption>
</figure>

## Assyria and the Upper Tigris

Table \ref{tab:zone3-sites} compiles 21 individually assessed settlements across the Assyrian heartland and Upper Tigris piedmont, led by Nineveh (114k), Nimrud or Kalhu (63,8k), Dur-Sharrukin (36,4k), Arbela (26,4k), Tell Taya (16,8k), Kar-Tukulti-Ninurta (15,6k), Assur (15,2k), Kurd Qaburstan (Qabra), Tell Baqrta, Qasr Shemamok (Kilizu), Tell al-Hawa, Imgur-Enlil and Ekallatum. Royal aqueducts and state-directed village foundations turned this dry-farming belt into an imperial core during the ninth to seventh centuries BC [@Ur2013Ancient; @Dercksen2022Golden; @Sotysiak2015Antemortem].

<figure class="crd-table-figure" id="tab:zone3-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2500BC</th><th class="crd-th">1800BC</th><th class="crd-th">1000BC</th><th class="crd-th">539BC</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nineveh</strong></td><td class="crd-td">IRQ: 36,36, 43,15</td><td class="crd-td">9,2k</td><td class="crd-td">12,4k</td><td class="crd-td">18,6k</td><td class="crd-td">7,6k</td><td class="crd-td">114k (680BC)</td></tr>
<tr><td class="crd-td"><strong>Nimrud</strong></td><td class="crd-td">IRQ: 36,1, 43,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">3,4k</td><td class="crd-td">63,8k (750BC)</td></tr>
<tr><td class="crd-td"><strong>Dur-Sharrukin</strong></td><td class="crd-td">IRQ: 36,5, 43,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">36,4k (705BC)</td></tr>
<tr><td class="crd-td"><strong>Arbela</strong></td><td class="crd-td">IRQ: 36,19, 44,01</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">14,3k</td><td class="crd-td">17,6k</td><td class="crd-td">26,4k (700BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Taya</strong></td><td class="crd-td">IRQ: 36,33, 42,49</td><td class="crd-td">13,4k</td><td class="crd-td">4,8k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">16,8k (2300BC)</td></tr>
<tr><td class="crd-td"><strong>Kar-Tukulti-Ninurta</strong></td><td class="crd-td">IRQ: 35,5, 43,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">15,6k (1225BC)</td></tr>
<tr><td class="crd-td"><strong>Assur</strong></td><td class="crd-td">IRQ: 35,46, 43,26</td><td class="crd-td">3,1k</td><td class="crd-td">12,4k</td><td class="crd-td">13,6k</td><td class="crd-td">2,6k</td><td class="crd-td">15,2k (750BC)</td></tr>
<tr><td class="crd-td"><strong>Kurd Qaburstan</strong></td><td class="crd-td">IRQ: 35,99, 43,86</td><td class="crd-td">-</td><td class="crd-td">11,8k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">12,4k (1850BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Baqrta</strong></td><td class="crd-td">IRQ: 35,94, 43,92</td><td class="crd-td">7,9k</td><td class="crd-td">1,8k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">9,6k (2400BC)</td></tr>
<tr><td class="crd-td"><strong>Qasr Shemamok</strong></td><td class="crd-td">IRQ: 36,11, 43,77</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">6,8k</td><td class="crd-td">2,9k</td><td class="crd-td">9,2k (1300BC)</td></tr>
<tr><td class="crd-td"><strong>Tell al-Hawa</strong></td><td class="crd-td">IRQ: 36,75, 42,3</td><td class="crd-td">8,1k</td><td class="crd-td">5,8k</td><td class="crd-td">4,3k</td><td class="crd-td">2,2k</td><td class="crd-td">9,2k (2400BC)</td></tr>
<tr><td class="crd-td"><strong>Imgur-Enlil</strong></td><td class="crd-td">IRQ: 36,22, 43,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">8,8k (750BC)</td></tr>
<tr><td class="crd-td"><strong>Ekallatum</strong></td><td class="crd-td">IRQ: 35,62, 43,28</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">7,6k (1800BC)</td></tr>
<tr><td class="crd-td"><strong>Tarbisu</strong></td><td class="crd-td">IRQ: 36,42, 43,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">1,2k</td><td class="crd-td">6,8k (680BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Gomel</strong></td><td class="crd-td">IRQ: 36,69, 43,52</td><td class="crd-td">4,6k</td><td class="crd-td">4,2k</td><td class="crd-td">5,5k</td><td class="crd-td">4,4k</td><td class="crd-td">5,8k (750BC)</td></tr>
<tr><td class="crd-td"><strong>Tell al-Rimah</strong></td><td class="crd-td">IRQ: 36,26, 42,45</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1780BC)</td></tr>
<tr><td class="crd-td"><strong>Tikrit</strong></td><td class="crd-td">IRQ: 34,6, 43,68</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k</td><td class="crd-td">3,9k</td><td class="crd-td">4,8k (615BC)</td></tr>
<tr><td class="crd-td"><strong>Shibaniba</strong></td><td class="crd-td">IRQ: 36,43, 43,3</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,4k (800BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Shemshara</strong></td><td class="crd-td">IRQ: 36,2, 44,94</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1800BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Shelgiyya</strong></td><td class="crd-td">IRQ: 36,94, 42,63</td><td class="crd-td">2,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,4k (2700BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Mohammed Arab</strong></td><td class="crd-td">IRQ: 36,63, 42,74</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1400BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in Assyria and the Upper Tigris piedmont from 2500BC to 539BC with assessed peak populations.</figcaption>
</figure>

## Middle Euphrates and Khabur Jezirah

Table \ref{tab:zone4-sites} documents 38 individually assessed settlements across the Middle Euphrates corridor, the Syrian Khabur and Balikh plains and the northern piedmont borderlands of south-eastern Turkey. Extending from Mari (23,8k), Carchemish (18,8k), Terqa, Dur-Katlimmu (16,8k), Emar and Habuba Kabira on the Euphrates and lower Khabur to Tell Mozan or Urkesh (17,6k), Tell Brak (15,4k), Tell Hamoukar (14,4k), Harran (14,2k), Tell Leilan (13,6k), Tell Halaf (Guzana), Tell Chuera, Tell Beydar, Tell Arbid and Nasibina in the northern rain-fed belt, this zone captures both third-millennium tell urbanisation and Aramean-Assyrian Iron Age settlement [@Ur2010Cycles; @McMahon2019Early; @Butterlin2010Uruk].

<figure class="crd-table-figure" id="tab:zone4-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2500BC</th><th class="crd-th">1800BC</th><th class="crd-th">1000BC</th><th class="crd-th">539BC</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mari</strong></td><td class="crd-td">SYR: 34,54, 40,89</td><td class="crd-td">17,6k</td><td class="crd-td">23,8k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">23,8k (1800BC)</td></tr>
<tr><td class="crd-td"><strong>Carchemish</strong></td><td class="crd-td">TUR: 36,83, 38,02</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">17,2k</td><td class="crd-td">7,1k</td><td class="crd-td">18,8k (850BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Mozan</strong></td><td class="crd-td">SYR: 37,06, 41</td><td class="crd-td">11,4k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,6k (2350BC)</td></tr>
<tr><td class="crd-td"><strong>Dur-Katlimmu</strong></td><td class="crd-td">SYR: 35,63, 40,74</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">7,6k</td><td class="crd-td">8,4k</td><td class="crd-td">16,8k (700BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Brak</strong></td><td class="crd-td">SYR: 36,67, 41,06</td><td class="crd-td">9,2k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,4k (3500BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Hamoukar</strong></td><td class="crd-td">SYR: 36,81, 41,96</td><td class="crd-td">11k</td><td class="crd-td">1,4k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">14,4k (2400BC)</td></tr>
<tr><td class="crd-td"><strong>Harran</strong></td><td class="crd-td">TUR: 36,87, 39,02</td><td class="crd-td">-</td><td class="crd-td">9,4k</td><td class="crd-td">10,9k</td><td class="crd-td">10,6k</td><td class="crd-td">14,2k (610BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Leilan</strong></td><td class="crd-td">SYR: 36,96, 41,51</td><td class="crd-td">10,2k</td><td class="crd-td">9,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,6k (2400BC)</td></tr>
<tr><td class="crd-td"><strong>Kazane Hoyuk</strong></td><td class="crd-td">TUR: 37,11, 38,82</td><td class="crd-td">9,4k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,6k (2400BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Halaf</strong></td><td class="crd-td">SYR: 36,82, 40,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">5,4k</td><td class="crd-td">11,6k (750BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Khoshi</strong></td><td class="crd-td">IRQ: 36,2, 41,84</td><td class="crd-td">9,2k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,8k (2350BC)</td></tr>
<tr><td class="crd-td"><strong>Til Barsip</strong></td><td class="crd-td">SYR: 36,67, 38,12</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">6,8k</td><td class="crd-td">4,9k</td><td class="crd-td">10,6k (800BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Chuera</strong></td><td class="crd-td">SYR: 36,63, 39,52</td><td class="crd-td">9,5k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,4k (2450BC)</td></tr>
<tr><td class="crd-td"><strong>Emar</strong></td><td class="crd-td">SYR: 35,99, 38,11</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k (1300BC)</td></tr>
<tr><td class="crd-td"><strong>Nasibina</strong></td><td class="crd-td">TUR: 37,08, 41,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">6,2k</td><td class="crd-td">8,8k (750BC)</td></tr>
<tr><td class="crd-td"><strong>Tuttul</strong></td><td class="crd-td">SYR: 35,96, 39,05</td><td class="crd-td">6k</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k (1800BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Hadidi</strong></td><td class="crd-td">SYR: 36,26, 38,15</td><td class="crd-td">6,2k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (2300BC)</td></tr>
<tr><td class="crd-td"><strong>Terqa</strong></td><td class="crd-td">SYR: 34,92, 40,57</td><td class="crd-td">4,4k</td><td class="crd-td">7k</td><td class="crd-td">4,6k</td><td class="crd-td">3,4k</td><td class="crd-td">7,6k (1700BC)</td></tr>
<tr><td class="crd-td"><strong>Anat</strong></td><td class="crd-td">IRQ: 34,37, 41,99</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">6,2k</td><td class="crd-td">5,4k</td><td class="crd-td">7,2k (750BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Barri</strong></td><td class="crd-td">SYR: 36,68, 40,92</td><td class="crd-td">4,8k</td><td class="crd-td">5,8k</td><td class="crd-td">5,4k</td><td class="crd-td">3,2k</td><td class="crd-td">6,4k (1400BC)</td></tr>
<tr><td class="crd-td"><strong>Tell es-Sweyhat</strong></td><td class="crd-td">SYR: 36,27, 38,25</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (2300BC)</td></tr>
<tr><td class="crd-td"><strong>Titris Hoyuk</strong></td><td class="crd-td">TUR: 37,47, 38,69</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (2350BC)</td></tr>
<tr><td class="crd-td"><strong>Hindanu</strong></td><td class="crd-td">IRQ: 34,48, 41,16</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">6,1k (750BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Mohammed Diyab</strong></td><td class="crd-td">SYR: 36,92, 41,56</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1780BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Arbid</strong></td><td class="crd-td">SYR: 36,87, 41,02</td><td class="crd-td">4,4k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (2400BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Banat</strong></td><td class="crd-td">SYR: 36,45, 38,28</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (2450BC)</td></tr>
<tr><td class="crd-td"><strong>Grai Resh</strong></td><td class="crd-td">IRQ: 36,32, 41,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (3500BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Beydar</strong></td><td class="crd-td">SYR: 36,74, 40,59</td><td class="crd-td">3,4k</td><td class="crd-td">1,9k</td><td class="crd-td">763</td><td class="crd-td">-</td><td class="crd-td">3,9k (2400BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Munbaqa</strong></td><td class="crd-td">SYR: 36,22, 38,13</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1450BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Hammam et-Turkman</strong></td><td class="crd-td">SYR: 36,48, 39,06</td><td class="crd-td">3,2k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1800BC)</td></tr>
<tr><td class="crd-td"><strong>Habuba Kabira</strong></td><td class="crd-td">SYR: 36,15, 38,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (3400BC)</td></tr>
<tr><td class="crd-td"><strong>Chagar Bazar</strong></td><td class="crd-td">SYR: 36,87, 40,89</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1780BC)</td></tr>
<tr><td class="crd-td"><strong>Usiyeh</strong></td><td class="crd-td">IRQ: 34,33, 42,12</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1750BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Zeidan</strong></td><td class="crd-td">SYR: 35,95, 39,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (3500BC)</td></tr>
<tr><td class="crd-td"><strong>Haradu</strong></td><td class="crd-td">IRQ: 34,46, 41,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1680BC)</td></tr>
<tr><td class="crd-td"><strong>Jebel Aruda</strong></td><td class="crd-td">SYR: 36,16, 38,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (3400BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Sabi Abyad</strong></td><td class="crd-td">SYR: 36,5, 39,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1230BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Mashnaqa</strong></td><td class="crd-td">SYR: 36,24, 40,78</td><td class="crd-td">607</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">780 (2700BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in the Middle Euphrates and Khabur Jezirah from 2500BC to 539BC with assessed peak populations.</figcaption>
</figure>

## Diyala and East Tigris Piedmont

Table \ref{tab:zone5-sites} records 15 individually assessed settlements along the Diyala river valley, the Hamrin basin and the Zagros piedmont corridor east of the Tigris, led by Eshnunna (14,8k), Arrapha (14,2k), Opis (13,2k), Der (9,6k), Bakr Awa (9,2k), Tutub (7,8k), Me-Turan (7,8k), Ishchali (5,4k), Nuzi (4,8k), Tell Agrab and Shaduppum. Linking Babylonia with Elam and the Iranian plateau, the Diyala and East Tigris corridor sustained the highest rural-urban density per square kilometre in late Neo-Babylonian Mesopotamia [@Marchetti2024Long; @Altaweel2015Evaluating].

<figure class="crd-table-figure" id="tab:zone5-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">2500BC</th><th class="crd-th">1800BC</th><th class="crd-th">1000BC</th><th class="crd-th">539BC</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Eshnunna</strong></td><td class="crd-td">IRQ: 33,48, 44,73</td><td class="crd-td">8,7k</td><td class="crd-td">14,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k (1800BC)</td></tr>
<tr><td class="crd-td"><strong>Arrapha</strong></td><td class="crd-td">IRQ: 35,47, 44,39</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">10,7k</td><td class="crd-td">11,8k</td><td class="crd-td">14,2k (650BC)</td></tr>
<tr><td class="crd-td"><strong>Opis</strong></td><td class="crd-td">IRQ: 33,17, 44,58</td><td class="crd-td">-</td><td class="crd-td">8,6k</td><td class="crd-td">8,1k</td><td class="crd-td">13,2k</td><td class="crd-td">13,2k (539BC)</td></tr>
<tr><td class="crd-td"><strong>Der</strong></td><td class="crd-td">IRQ: 33,11, 45,93</td><td class="crd-td">6,4k</td><td class="crd-td">9,4k</td><td class="crd-td">6,2k</td><td class="crd-td">9,4k</td><td class="crd-td">9,6k (1850BC)</td></tr>
<tr><td class="crd-td"><strong>Bakr Awa</strong></td><td class="crd-td">IRQ: 35,22, 45,94</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">8,6k</td><td class="crd-td">6,2k</td><td class="crd-td">9,2k (850BC)</td></tr>
<tr><td class="crd-td"><strong>Me-Turan</strong></td><td class="crd-td">IRQ: 34,21, 45,08</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">6,4k</td><td class="crd-td">4,6k</td><td class="crd-td">7,8k (1850BC)</td></tr>
<tr><td class="crd-td"><strong>Tutub</strong></td><td class="crd-td">IRQ: 33,35, 44,56</td><td class="crd-td">7,3k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (2600BC)</td></tr>
<tr><td class="crd-td"><strong>Ishchali</strong></td><td class="crd-td">IRQ: 33,3, 44,58</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1850BC)</td></tr>
<tr><td class="crd-td"><strong>Nuzi</strong></td><td class="crd-td">IRQ: 35,34, 44,25</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1450BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Agrab</strong></td><td class="crd-td">IRQ: 33,34, 44,87</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (2600BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Kunara</strong></td><td class="crd-td">IRQ: 35,48, 45,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (2150BC)</td></tr>
<tr><td class="crd-td"><strong>Tell Yelkhi</strong></td><td class="crd-td">IRQ: 34,29, 45</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850BC)</td></tr>
<tr><td class="crd-td"><strong>Tell al-Daim</strong></td><td class="crd-td">IRQ: 35,48, 44,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k (650BC)</td></tr>
<tr><td class="crd-td"><strong>Shaduppum</strong></td><td class="crd-td">IRQ: 33,31, 44,47</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1850BC)</td></tr>
<tr><td class="crd-td"><strong>Gurga Chiya</strong></td><td class="crd-td">IRQ: 35,33, 45,86</td><td class="crd-td">906</td><td class="crd-td">1,1k</td><td class="crd-td">948</td><td class="crd-td">-</td><td class="crd-td">1,1k (1450BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Diyala and East Tigris Piedmont from 2500BC to 539BC with assessed peak populations.</figcaption>
</figure>

# Limitations

Three caveats govern use of this settlement ledger. First, converting excavated or surveyed site hectares into resident headcounts remains sensitive to intra-mural open space (royal palaces, parks, temples and canals) and local residential density (typically 110 to 220 persons per hectare), introducing roughly 15% to 25% uncertainty around individual urban peaks [@Marchetti2024Long; @Chelazzi2026Emergence]. Second, deep Holocene siltation in southern Iraq obscures small unmounded canal hamlets, producing fewer individually assessed tells in Lower Mesopotamia (23 sites) than in the rain-fed Middle Euphrates and Khabur Jezirah (38 sites) despite far higher true alluvial population density [@Giosan2025Morphodyna; @Deadman2026Comparativ]. Third, because the 111 retained sites capture the archaeologically quantified urban and major-town tier rather than unexcavated rural hamlets, their combined sums reflect nucleated urban population and should be read alongside the full regional demographic totals in the companion review.

# Conclusion

Taken together, the 111 individually assessed sites trace the enduring geography of ancient Mesopotamian urbanism across Iraq, eastern Syria and the northern piedmont borderlands of south-eastern Turkey from 3500BC to 539BC. Southern deltaic tells sustained the earliest dense city-state networks at Uruk, Lagash, Ur, Umma and Nippur, northern Khabur and Upper Tigris centres rose on rain-fed grain and overland trade, and Neo-Assyrian and Neo-Babylonian imperial capitals at Nimrud, Nineveh and Babylon bridged both halves of the basin ahead of the Persian conquest in 539BC.

# Appendix

## Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums the individually assessed settlements and their combined interpolated urban populations across all five Mesopotamian ecological zones across the five chapter benchmarks from 3500BC to 539BC.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Zone (Sites)</th><th class="crd-th">3500BC</th><th class="crd-th">2500BC</th><th class="crd-th">1800BC</th><th class="crd-th">1000BC</th><th class="crd-th">539BC</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Lower Mesopotamia (Sumer) (23)</strong></td><td class="crd-td">36k</td><td class="crd-td">335,7k</td><td class="crd-td">236,8k</td><td class="crd-td">68,7k</td><td class="crd-td">103,6k</td></tr>
<tr><td class="crd-td"><strong>2. Akkad and Central Babylonia (14)</strong></td><td class="crd-td">0</td><td class="crd-td">72,7k</td><td class="crd-td">154,2k</td><td class="crd-td">120,3k</td><td class="crd-td">297,2k</td></tr>
<tr><td class="crd-td"><strong>3. Assyria and Upper Tigris (21)</strong></td><td class="crd-td">14,5k</td><td class="crd-td">52,6k</td><td class="crd-td">88,4k</td><td class="crd-td">98,1k</td><td class="crd-td">48,1k</td></tr>
<tr><td class="crd-td"><strong>4. Middle Euphrates and Khabur (38)</strong></td><td class="crd-td">31,4k</td><td class="crd-td">135,2k</td><td class="crd-td">144,8k</td><td class="crd-td">85k</td><td class="crd-td">54,6k</td></tr>
<tr><td class="crd-td"><strong>5. Diyala and East Tigris (15)</strong></td><td class="crd-td">0</td><td class="crd-td">27,4k</td><td class="crd-td">72,4k</td><td class="crd-td">42,6k</td><td class="crd-td">46,6k</td></tr>
<tr><td class="crd-td"><strong>All Zones (111)</strong></td><td class="crd-td">81,9k</td><td class="crd-td">623,6k</td><td class="crd-td">696,7k</td><td class="crd-td">414,7k</td><td class="crd-td">550,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed site counts and combined interpolated urban populations across the five Mesopotamian ecological zones from 3500BC to 539BC.</figcaption>
</figure>

# Sources

::: {#refs}
:::
