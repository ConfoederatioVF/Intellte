---
title: "Early Islamic Caliphate (AD 632-1000)"
subtitle: "Settlement Gazetteer and Urban Hierarchy across Twenty-Two Jurisdictions"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_islamic_caliphate_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_early_islamic_caliphate_spatial.png"
hero_caption: "Spatial distribution of 140 individually assessed settlements across ten regions of the Early Islamic Caliphate and neighbouring Byzantine Anatolia between 632AD and 1000AD."
hero_label: "fig:hero-early-islamic-caliphate-settlements"

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

This gazetteer compiles individually assessed population series for 140 urban centres, garrison foundations (*amsar*), fortified towns (*kastra*) and caravan hubs across 22 modern national jurisdictions from 632AD to 1000AD. Vetted from 340 evaluated candidates after excluding 200 unquantified minor scatters, subordinate suburbs, duplicate aliases and architectural fragments, the dataset tracks 122 active centres housing 2,4M inhabitants in 632AD, 130 active centres housing 3,39M in 750AD, 135 active centres housing 4,92M at the 850AD Abbasid zenith and 140 centres housing 5,35M in 1000AD ($\alpha = 0,72$, $R^2 = 0,96$). Grouped into six geographic divisions covering Iraq and al-Jazira, Bilad al-Sham and Cyprus, Egypt, Iran and Afghanistan, Byzantine Anatolia and Caucasia, and North Africa with the Arabian Peninsula, the tables show how Rashidun garrison foundations (Basra, Kufa, Fustat, Kairouan), Umayyad regional capitals (Shiraz, Wasit, Ramla) and Abbasid river metropolises (Baghdad, Samarra, Raqqa) reshaped older Late Antique urban networks without extinguishing classical Mediterranean or Iranian oasis cities [@Nol2023Arab; @Bessard2018Politics; @ALJabri2023Developmen; @Bosworth2007Historic].



# Background

Urbanism across the Early Islamic Caliphate and its Byzantine and Caucasian frontiers was neither a sterile preservation of Hellenistic civic geometry nor an abrupt collapse into nomadic pasture. Between 632AD and 1000AD, old Roman, Byzantine and Sassanid cities coexisted with planned Muslim foundations whose street grids, congregational mosques, *suq* market halls and waterworks answered fiscal and military imperatives [@Allahham2025Untold; @Yassin2012Architectu; @Bessard2018Politics]. In Iraq and Egypt, the Rashidun conquests immediately generated purpose-built garrison camps (*amsar*) at Basra (638AD), Kufa (638AD) and Fustat (641AD), followed in Ifriqiya by Kairouan (670AD) [@Nol2023Arab; @ALJabri2023Developmen; @Bosworth2007Historic]. Positioned along navigable river margins or desert-steppe interfaces where tribal cavalry could assemble without billeting inside existing civic quarters, these camps quickly grew into permanent craft and trading cities sustained by *kharaj* grain and silver stipends [@Yuksel2024Mecca; @Isoldi2026Confluent].

Under the Umayyad caliphs (661AD to 750AD), planned foundations multiplied across Syria, Palestine, Fars and lower Mesopotamia. Governors laid out Shiraz (693AD) and Wasit (702AD) as military-administrative capitals, while Sulayman ibn Abd al-Malik established al-Ramla (c. 715AD) as the provincial capital of Jund Filastin, displacing coastal Caesarea without erasing inland market towns such as Tiberias, Amman and Damascus [@Nol2021Defining; @Stern2025Mamluk; @Ali2026Dimensions]. The Abbasid transfer of the seat of power to Iraq in 750AD shifted metropolitan gravity east again. Al-Mansur's Round City of Baghdad (762AD) and al-Mu'tasim's palace-garrison belt at Samarra (836AD) towered over the Tigris corridor, supported by the dense canal networks of the Sawad [@ALJabri2023Developmen; @Wahhab2024Decorative]. Further east, Tahirid, Samanid and Buyid patronage turned Rayy, Nishapur, Isfahan, Shiraz, Balkh and Herat into high-density *qanat*-fed manufacturing metropolises on the Silk Roads [@Saatsaz2023Technology; @Lu2023Connected; @Michailidis2014Dynastic]. Meanwhile, in Byzantine Anatolia, seventh-century raids compressed open *poleis* into fortified hilltop *kastra* such as Amorium, Ancyra, Ephesus and Caesarea before ninth- and tenth-century frontier stability renewed provincial towns [@Coleman2021Poleis; @Bakirtzis2023Introducin; @Navruz2024Historical].

# Methodology

The 140 individually assessed settlement entries tabulated here represent the vetted urban core of 340 candidate records evaluated for HANDBOOK between 632AD and 1000AD. Out of 340 candidates, 200 were excluded prior to tabulation to prevent spatial double counting and eliminate unquantified minor scatters, subordinate suburbs merged into metropolitan cores, duplicate aliases and non-settlement architectural fragments. Each retained city was assessed on a case-by-case basis from excavated walled and suburban footprints paired with period urban densities, *diwan* troop registers, early Islamic geographical treatises (al-Ya'qubi, al-Istakhri, Ibn Hawqal, al-Muqaddasi) and primary morphological and archaeological literature [@Nol2021Defining; @Mokranova2025Material; @Mitchell2021Church], with foundation chronologies and historical toponyms cross-checked against Bosworth's urban reference volume [@Bosworth2007Historic] strictly as a supplemental gazetteer.

Settlement names preserve clean Latin transliteration, while modern national jurisdictions follow current boundaries across 22 states to allow direct comparison with modern geoBoundaries subadministrative units [@Runfola2020GeoBoundaries]. Coordinates are reported in decimal degrees (European comma notation) alongside each site's active chronological span inside the 632AD to 1000AD window. Benchmark population columns report 632AD (the Prophet's death), 850AD (the Abbasid zenith) and 1000AD (the turn of the millennium), linearly interpolating between a city's bracketing documented turning points where individual dated observations fall on intermediate years; periods before foundation are marked with a hyphen (-).

# Testing and Validation

Across the 140 individually assessed urban centres (138 within the contiguous spatial mask), log-log rank-size regression yields a Zipf exponent $\alpha = 0,72$ ($R^2 = 0,96$), displayed in Figure \ref{fig:settlements-gazetteer}. Mean settlement size rises from 19.641 inhabitants across 122 active centres in 632AD to 26.047 across 130 centres in 750AD and 36.471 across 135 centres at the 850AD Abbasid zenith, before easing to 38.229 across all 140 centres in 1000AD as lower Iraqi metropolises contracted while Iranian, Egyptian and Maghribi cities expanded. At the top of the distribution sits Baghdad (peaking at 695k in 900AD after its 762AD foundation), followed by Rayy (194k), Samarra (178k in 860AD, founded 836AD), Fustat (174k), Basra (168k), Nishapur (156k), Al-Mada'in (145k), Alexandria (142k), Kufa (132k), Isfahan (132k), Damascus (126k) and Kairouan (124k), producing a strongly structured polycentric rank-size gradient free of artificial tier ceilings.

<figure class="crd-figure-block" id="fig:settlements-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-early-islamic-caliphate-settlements/fig4_early_islamic_caliphate_settlements.png" alt="fig:settlements-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 140 individually assessed settlements and peak populations of the twelve highest-ranked urban centres.</figcaption>
</figure>

# Results

## Al-Iraq and Al-Jazira

Table \ref{tab:zone1-iraq} lists all 10 individually assessed settlements within modern Iraq, spanning the Rashidun *amsar* of Basra and Kufa, Umayyad Wasit, Abbasid Baghdad and Samarra, and surviving Late Antique and early Islamic Tigris-Euphrates centres including Al-Mada'in, Mosul, Tikrit, Al-Anbar and Nahrawan [@ALJabri2023Developmen; @Wahhab2024Decorative; @Yuksel2024Mecca].

<figure class="crd-table-figure" id="tab:zone1-iraq">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">632AD</th><th class="crd-th">850AD</th><th class="crd-th">1000AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baghdad</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,34, 44,37 (765-1000AD)</td><td class="crd-td">-</td><td class="crd-td">575k</td><td class="crd-td">360k</td></tr>
<tr><td class="crd-td"><strong>Samarra</strong></td><td class="crd-td">Iraq</td><td class="crd-td">34,2, 43,87 (840-1000AD)</td><td class="crd-td">-</td><td class="crd-td">136,5k</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>Basra</strong></td><td class="crd-td">Iraq</td><td class="crd-td">30,39, 47,71 (640-1000AD)</td><td class="crd-td">-</td><td class="crd-td">144k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Al-Mada'in</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,09, 44,58 (632-1000AD)</td><td class="crd-td">145k</td><td class="crd-td">10,8k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Kufa</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,03, 44,4 (640-1000AD)</td><td class="crd-td">-</td><td class="crd-td">78k</td><td class="crd-td">33k</td></tr>
<tr><td class="crd-td"><strong>Mosul</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,34, 43,13 (632-1000AD)</td><td class="crd-td">24k</td><td class="crd-td">76k</td><td class="crd-td">82k</td></tr>
<tr><td class="crd-td"><strong>Wasit</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,19, 46,3 (705-1000AD)</td><td class="crd-td">-</td><td class="crd-td">57k</td><td class="crd-td">37k</td></tr>
<tr><td class="crd-td"><strong>Al-Anbar</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,38, 43,72 (632-1000AD)</td><td class="crd-td">18,5k</td><td class="crd-td">24k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>Nahrawan</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,52, 44,71 (632-1000AD)</td><td class="crd-td">12,4k</td><td class="crd-td">26,8k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Tikrit</strong></td><td class="crd-td">Iraq</td><td class="crd-td">34,62, 43,68 (632-1000AD)</td><td class="crd-td">11,5k</td><td class="crd-td">21,5k</td><td class="crd-td">15,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Al-Iraq and Al-Jazira (10 centres) from 632AD to 1000AD.</figcaption>
</figure>

## Bilad al-Sham and Cyprus

Table \ref{tab:zone2-sham} records 21 individually assessed settlements across Syria, Israel, Jordan, Lebanon, Cyprus and Palestine, including Umayyad Damascus, Raqqa, Aleppo (*Halab*), Ramla, Jerusalem, Tyre, Tripoli, Tiberias, Amman and Cypriot Nicosia and Constantia, reflecting dense urban-rural commercial continuity across the Levant [@Bessard2018Politics; @Nol2021Defining; @Mokranova2025Material; @Stern2025Mamluk].

<figure class="crd-table-figure" id="tab:zone2-sham">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">632AD</th><th class="crd-th">850AD</th><th class="crd-th">1000AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Damascus</strong></td><td class="crd-td">Syria</td><td class="crd-td">33,51, 36,31 (632-1000AD)</td><td class="crd-td">56k</td><td class="crd-td">76k</td><td class="crd-td">74k</td></tr>
<tr><td class="crd-td"><strong>Raqqa</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,95, 39,02 (632-1000AD)</td><td class="crd-td">14,5k</td><td class="crd-td">62k</td><td class="crd-td">29,5k</td></tr>
<tr><td class="crd-td"><strong>Aleppo</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,2, 37,16 (632-1000AD)</td><td class="crd-td">24,5k</td><td class="crd-td">49,5k</td><td class="crd-td">54,5k</td></tr>
<tr><td class="crd-td"><strong>Ramla</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,93, 34,87 (720-1000AD)</td><td class="crd-td">-</td><td class="crd-td">38,5k</td><td class="crd-td">37,6k</td></tr>
<tr><td class="crd-td"><strong>Jerusalem</strong></td><td class="crd-td">Palestine</td><td class="crd-td">31,78, 35,23 (632-1000AD)</td><td class="crd-td">34,5k</td><td class="crd-td">30,2k</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td"><strong>Homs</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,73, 36,71 (632-1000AD)</td><td class="crd-td">22,5k</td><td class="crd-td">27,4k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Tyre</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,27, 35,2 (632-1000AD)</td><td class="crd-td">19,5k</td><td class="crd-td">26,6k</td><td class="crd-td">33,4k</td></tr>
<tr><td class="crd-td"><strong>Tripoli</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">34,44, 35,85 (632-1000AD)</td><td class="crd-td">14,8k</td><td class="crd-td">20,4k</td><td class="crd-td">28,6k</td></tr>
<tr><td class="crd-td"><strong>Acre</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,93, 35,08 (632-1000AD)</td><td class="crd-td">12,8k</td><td class="crd-td">19,5k</td><td class="crd-td">27,4k</td></tr>
<tr><td class="crd-td"><strong>Ascalon</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,67, 34,55 (632-1000AD)</td><td class="crd-td">15,2k</td><td class="crd-td">20,9k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td"><strong>Tiberias</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,78, 35,54 (632-1000AD)</td><td class="crd-td">16,5k</td><td class="crd-td">25,6k</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Constantia</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">35,19, 33,9 (632-1000AD)</td><td class="crd-td">24,5k</td><td class="crd-td">3,1k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Nicosia</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">35,17, 33,36 (632-1000AD)</td><td class="crd-td">6,4k</td><td class="crd-td">14,5k</td><td class="crd-td">23,8k</td></tr>
<tr><td class="crd-td"><strong>Qinnasrin</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,99, 37 (632-1000AD)</td><td class="crd-td">16,8k</td><td class="crd-td">11,4k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Gaza</strong></td><td class="crd-td">Palestine</td><td class="crd-td">31,5, 34,47 (632-1000AD)</td><td class="crd-td">17,5k</td><td class="crd-td">18,6k</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Hama</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,13, 36,76 (632-1000AD)</td><td class="crd-td">11,2k</td><td class="crd-td">17,1k</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Palmyra</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,55, 38,27 (632-1000AD)</td><td class="crd-td">12,5k</td><td class="crd-td">7,1k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Beirut</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,89, 35,5 (632-1000AD)</td><td class="crd-td">8,6k</td><td class="crd-td">13,8k</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>Amman</strong></td><td class="crd-td">Jordan</td><td class="crd-td">31,95, 35,94 (632-1000AD)</td><td class="crd-td">10,8k</td><td class="crd-td">12,8k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Paphos</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">34,76, 32,42 (632-1000AD)</td><td class="crd-td">11,2k</td><td class="crd-td">7,6k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Ayla</strong></td><td class="crd-td">Jordan</td><td class="crd-td">29,53, 35 (632-1000AD)</td><td class="crd-td">4,2k</td><td class="crd-td">9,6k</td><td class="crd-td">8,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Bilad al-Sham and Cyprus (21 centres across six modern jurisdictions) from 632AD to 1000AD.</figcaption>
</figure>

## Misr (Early Islamic Egypt)

Table \ref{tab:zone3-misr} compiles 12 individually assessed centres along the Nile Valley, the Fayyum depression and the Delta, led by Fustat, Alexandria (*al-Iskandariyya*), Fatimid Al-Qahira (founded 969AD) and Tinnis alongside Damietta, Asyut, Al-Faiyum, Aswan, Akhmim, Qus, Al-Ashmunayn and Al-Farama documented in Marwanid fiscal papyri and Delta surveys [@Maghraby2025Arab; @Isoldi2026Confluent; @Nol2023Arab].

<figure class="crd-table-figure" id="tab:zone3-misr">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">632AD</th><th class="crd-th">850AD</th><th class="crd-th">1000AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Fustat</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,01, 31,23 (645-1000AD)</td><td class="crd-td">-</td><td class="crd-td">152k</td><td class="crd-td">168k</td></tr>
<tr><td class="crd-td"><strong>Alexandria</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,2, 29,92 (632-1000AD)</td><td class="crd-td">142k</td><td class="crd-td">62k</td><td class="crd-td">72,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Qahira</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,05, 31,26 (970-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">62k</td></tr>
<tr><td class="crd-td"><strong>Tinnis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,2, 32,24 (632-1000AD)</td><td class="crd-td">14,5k</td><td class="crd-td">34,8k</td><td class="crd-td">53,5k</td></tr>
<tr><td class="crd-td"><strong>Damietta</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,42, 31,81 (632-1000AD)</td><td class="crd-td">12,8k</td><td class="crd-td">24,2k</td><td class="crd-td">31,8k</td></tr>
<tr><td class="crd-td"><strong>Asyut</strong></td><td class="crd-td">Egypt</td><td class="crd-td">27,18, 31,18 (632-1000AD)</td><td class="crd-td">19,4k</td><td class="crd-td">25,1k</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Faiyum</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,31, 30,84 (632-1000AD)</td><td class="crd-td">22,4k</td><td class="crd-td">26,4k</td><td class="crd-td">27,5k</td></tr>
<tr><td class="crd-td"><strong>Aswan</strong></td><td class="crd-td">Egypt</td><td class="crd-td">24,09, 32,9 (632-1000AD)</td><td class="crd-td">14,2k</td><td class="crd-td">21,4k</td><td class="crd-td">27,2k</td></tr>
<tr><td class="crd-td"><strong>Akhmim</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,56, 31,75 (632-1000AD)</td><td class="crd-td">18,2k</td><td class="crd-td">22,3k</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Ashmunayn</strong></td><td class="crd-td">Egypt</td><td class="crd-td">27,78, 30,8 (632-1000AD)</td><td class="crd-td">24,5k</td><td class="crd-td">21,1k</td><td class="crd-td">18,4k</td></tr>
<tr><td class="crd-td"><strong>Qus</strong></td><td class="crd-td">Egypt</td><td class="crd-td">25,91, 32,76 (632-1000AD)</td><td class="crd-td">7,6k</td><td class="crd-td">13,6k</td><td class="crd-td">23,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Farama</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,04, 32,55 (632-1000AD)</td><td class="crd-td">15,4k</td><td class="crd-td">14,6k</td><td class="crd-td">12,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in Misr (12 centres across the Nile Valley, Fayyum and Delta) from 632AD to 1000AD.</figcaption>
</figure>

## Iran, Khorasan and Afghanistan

Table \ref{tab:zone4-iran} covers 30 individually assessed settlements across Iran and Afghanistan, including Rayy, Nishapur, Isfahan, Shiraz, Hamadan, Jurjan, Ahvaz, Ardabil, Siraf, Tus, Qom and Qazvin in Iran alongside Balkh, Herat, Zaranj, Ghazni, Bust and Kabul in Afghanistan, anchoring *qanat*-irrigated oasis agriculture and Silk Road craft manufacture [@Saatsaz2023Technology; @Lu2023Connected; @Michailidis2014Dynastic; @Spooner2019Epilogue].

<figure class="crd-table-figure" id="tab:zone4-iran">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">632AD</th><th class="crd-th">850AD</th><th class="crd-th">1000AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Rayy</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,6, 51,43 (632-1000AD)</td><td class="crd-td">54k</td><td class="crd-td">138k</td><td class="crd-td">194k</td></tr>
<tr><td class="crd-td"><strong>Nishapur</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,21, 58,8 (632-1000AD)</td><td class="crd-td">26,5k</td><td class="crd-td">104k</td><td class="crd-td">156k</td></tr>
<tr><td class="crd-td"><strong>Isfahan</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,65, 51,67 (632-1000AD)</td><td class="crd-td">42k</td><td class="crd-td">82,5k</td><td class="crd-td">132k</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,76, 66,9 (632-1000AD)</td><td class="crd-td">52k</td><td class="crd-td">98k</td><td class="crd-td">106k</td></tr>
<tr><td class="crd-td"><strong>Shiraz</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,61, 52,53 (700-1000AD)</td><td class="crd-td">-</td><td class="crd-td">62k</td><td class="crd-td">114k</td></tr>
<tr><td class="crd-td"><strong>Herat</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">34,34, 62,2 (632-1000AD)</td><td class="crd-td">36,5k</td><td class="crd-td">66,8k</td><td class="crd-td">91,4k</td></tr>
<tr><td class="crd-td"><strong>Hamadan</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,8, 48,52 (632-1000AD)</td><td class="crd-td">34,5k</td><td class="crd-td">57,5k</td><td class="crd-td">76,5k</td></tr>
<tr><td class="crd-td"><strong>Zaranj</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">30,96, 61,86 (632-1000AD)</td><td class="crd-td">24,5k</td><td class="crd-td">54,5k</td><td class="crd-td">56,8k</td></tr>
<tr><td class="crd-td"><strong>Ghazni</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">33,55, 68,42 (632-1000AD)</td><td class="crd-td">8,4k</td><td class="crd-td">16,1k</td><td class="crd-td">74,5k</td></tr>
<tr><td class="crd-td"><strong>Jurjan</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,25, 55,17 (632-1000AD)</td><td class="crd-td">24,5k</td><td class="crd-td">53,8k</td><td class="crd-td">72,8k</td></tr>
<tr><td class="crd-td"><strong>Ahvaz</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,32, 48,69 (632-1000AD)</td><td class="crd-td">26,5k</td><td class="crd-td">56,2k</td><td class="crd-td">61,5k</td></tr>
<tr><td class="crd-td"><strong>Ardabil</strong></td><td class="crd-td">Iran</td><td class="crd-td">38,25, 48,29 (632-1000AD)</td><td class="crd-td">24,5k</td><td class="crd-td">45,2k</td><td class="crd-td">51,4k</td></tr>
<tr><td class="crd-td"><strong>Siraf</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,66, 52,34 (632-1000AD)</td><td class="crd-td">6,8k</td><td class="crd-td">39,8k</td><td class="crd-td">17,4k</td></tr>
<tr><td class="crd-td"><strong>Amol</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,47, 52,35 (632-1000AD)</td><td class="crd-td">18,5k</td><td class="crd-td">36,4k</td><td class="crd-td">48,9k</td></tr>
<tr><td class="crd-td"><strong>Tus</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,49, 59,52 (632-1000AD)</td><td class="crd-td">18,4k</td><td class="crd-td">34,6k</td><td class="crd-td">48,2k</td></tr>
<tr><td class="crd-td"><strong>Bust</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">31,5, 64,36 (632-1000AD)</td><td class="crd-td">14,2k</td><td class="crd-td">29,8k</td><td class="crd-td">47,8k</td></tr>
<tr><td class="crd-td"><strong>Istakhr</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,98, 52,91 (632-1000AD)</td><td class="crd-td">46k</td><td class="crd-td">14,2k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Qom</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,64, 50,88 (632-1000AD)</td><td class="crd-td">6,5k</td><td class="crd-td">33,2k</td><td class="crd-td">44,6k</td></tr>
<tr><td class="crd-td"><strong>Sirjan</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,45, 55,68 (632-1000AD)</td><td class="crd-td">19,5k</td><td class="crd-td">39,2k</td><td class="crd-td">31,8k</td></tr>
<tr><td class="crd-td"><strong>Qazvin</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,27, 50 (632-1000AD)</td><td class="crd-td">14,2k</td><td class="crd-td">32,6k</td><td class="crd-td">41,2k</td></tr>
<tr><td class="crd-td"><strong>Shushtar</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,05, 48,86 (632-1000AD)</td><td class="crd-td">19,2k</td><td class="crd-td">30,6k</td><td class="crd-td">37,4k</td></tr>
<tr><td class="crd-td"><strong>Tabriz</strong></td><td class="crd-td">Iran</td><td class="crd-td">38,08, 46,29 (632-1000AD)</td><td class="crd-td">12,4k</td><td class="crd-td">26,5k</td><td class="crd-td">36,8k</td></tr>
<tr><td class="crd-td"><strong>Maragha</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,39, 46,24 (632-1000AD)</td><td class="crd-td">11,8k</td><td class="crd-td">23,8k</td><td class="crd-td">29,8k</td></tr>
<tr><td class="crd-td"><strong>Kabul</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">34,52, 69,18 (632-1000AD)</td><td class="crd-td">16,5k</td><td class="crd-td">22,1k</td><td class="crd-td">28,9k</td></tr>
<tr><td class="crd-td"><strong>Damghan</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,17, 54,35 (632-1000AD)</td><td class="crd-td">13,2k</td><td class="crd-td">23k</td><td class="crd-td">26,4k</td></tr>
<tr><td class="crd-td"><strong>Yazd</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,9, 54,36 (632-1000AD)</td><td class="crd-td">11,5k</td><td class="crd-td">19,1k</td><td class="crd-td">26,8k</td></tr>
<tr><td class="crd-td"><strong>Maymana</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">35,92, 64,78 (632-1000AD)</td><td class="crd-td">8,8k</td><td class="crd-td">16,8k</td><td class="crd-td">26,2k</td></tr>
<tr><td class="crd-td"><strong>Kunduz</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,73, 68,86 (632-1000AD)</td><td class="crd-td">11,8k</td><td class="crd-td">18,6k</td><td class="crd-td">21,4k</td></tr>
<tr><td class="crd-td"><strong>Kandahar</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">31,61, 65,66 (632-1000AD)</td><td class="crd-td">11,2k</td><td class="crd-td">17k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Bamiyan</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">34,82, 67,83 (632-1000AD)</td><td class="crd-td">12,4k</td><td class="crd-td">16,4k</td><td class="crd-td">15,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements across Iran, Khorasan and Afghanistan (30 centres) from 632AD to 1000AD.</figcaption>
</figure>

## Byzantine Anatolia and Caucasia

Table \ref{tab:zone5-anatolia} enumerates 31 individually assessed centres across Turkey, Georgia, Azerbaijan and Armenia, spanning Byzantine provincial metropolises and *Thughur* border cities (Antioch, Tarsus, Amid, Trebizond, Nicaea, Harran, Mayyafariqin, Malatya, Amorium, Ephesus, Caesarea, Attaleia, Ancyra, Iconium) alongside Transcaucasian capitals and trade hubs (Barda, Ani, Dvin, Tbilisi, Ganja, Shamakhi, Kars and Kutaisi) [@Coleman2021Poleis; @Mitchell2021Church; @Bakirtzis2023Introducin; @Ozbal2026Diet].

<figure class="crd-table-figure" id="tab:zone5-anatolia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">632AD</th><th class="crd-th">850AD</th><th class="crd-th">1000AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Barda</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,38, 47,13 (632-1000AD)</td><td class="crd-td">28,5k</td><td class="crd-td">64,8k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Ani</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,51, 43,57 (632-1000AD)</td><td class="crd-td">4,2k</td><td class="crd-td">9,6k</td><td class="crd-td">64,5k</td></tr>
<tr><td class="crd-td"><strong>Antioch</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,2, 36,16 (632-1000AD)</td><td class="crd-td">64k</td><td class="crd-td">49,5k</td><td class="crd-td">49k</td></tr>
<tr><td class="crd-td"><strong>Dvin</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,01, 44,58 (632-1000AD)</td><td class="crd-td">34,5k</td><td class="crd-td">61,8k</td><td class="crd-td">35,8k</td></tr>
<tr><td class="crd-td"><strong>Tarsus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,92, 34,9 (632-1000AD)</td><td class="crd-td">16,5k</td><td class="crd-td">44,8k</td><td class="crd-td">25,6k</td></tr>
<tr><td class="crd-td"><strong>Amid</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,91, 40,24 (632-1000AD)</td><td class="crd-td">28,5k</td><td class="crd-td">37,1k</td><td class="crd-td">45,8k</td></tr>
<tr><td class="crd-td"><strong>Harran</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,87, 39,03 (632-1000AD)</td><td class="crd-td">18,2k</td><td class="crd-td">28,8k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>Trebizond</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,01, 39,73 (632-1000AD)</td><td class="crd-td">18,5k</td><td class="crd-td">26,8k</td><td class="crd-td">42,5k</td></tr>
<tr><td class="crd-td"><strong>Nicaea</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,43, 29,72 (632-1000AD)</td><td class="crd-td">24,5k</td><td class="crd-td">30,8k</td><td class="crd-td">41,6k</td></tr>
<tr><td class="crd-td"><strong>Tbilisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,69, 44,8 (632-1000AD)</td><td class="crd-td">18,5k</td><td class="crd-td">33,5k</td><td class="crd-td">39,2k</td></tr>
<tr><td class="crd-td"><strong>Ganja</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,68, 46,36 (865-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">38,5k</td></tr>
<tr><td class="crd-td"><strong>Mayyafariqin</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,14, 41,01 (632-1000AD)</td><td class="crd-td">14,2k</td><td class="crd-td">21k</td><td class="crd-td">37,8k</td></tr>
<tr><td class="crd-td"><strong>Amorium</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,02, 31,3 (632-1000AD)</td><td class="crd-td">16,5k</td><td class="crd-td">12,2k</td><td class="crd-td">21,5k</td></tr>
<tr><td class="crd-td"><strong>Malatya</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,42, 38,37 (632-1000AD)</td><td class="crd-td">17,2k</td><td class="crd-td">31,5k</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Nisibis</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,08, 41,22 (632-1000AD)</td><td class="crd-td">21,5k</td><td class="crd-td">31,4k</td><td class="crd-td">25,4k</td></tr>
<tr><td class="crd-td"><strong>Ephesus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,95, 27,37 (632-1000AD)</td><td class="crd-td">29,5k</td><td class="crd-td">22,4k</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>Attaleia</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,88, 30,71 (632-1000AD)</td><td class="crd-td">14,2k</td><td class="crd-td">22,4k</td><td class="crd-td">29,5k</td></tr>
<tr><td class="crd-td"><strong>Edessa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,16, 38,8 (632-1000AD)</td><td class="crd-td">26k</td><td class="crd-td">28,6k</td><td class="crd-td">23,8k</td></tr>
<tr><td class="crd-td"><strong>Shamakhi</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,63, 48,64 (632-1000AD)</td><td class="crd-td">7,4k</td><td class="crd-td">15k</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Caesarea</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,72, 35,49 (632-1000AD)</td><td class="crd-td">19,8k</td><td class="crd-td">16,9k</td><td class="crd-td">26,8k</td></tr>
<tr><td class="crd-td"><strong>Kars</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,6, 43,09 (632-1000AD)</td><td class="crd-td">6,8k</td><td class="crd-td">13,6k</td><td class="crd-td">23,2k</td></tr>
<tr><td class="crd-td"><strong>Smyrna</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,42, 27,13 (632-1000AD)</td><td class="crd-td">16,8k</td><td class="crd-td">15,6k</td><td class="crd-td">25,4k</td></tr>
<tr><td class="crd-td"><strong>Kutaisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,27, 42,7 (632-1000AD)</td><td class="crd-td">7,2k</td><td class="crd-td">15,2k</td><td class="crd-td">24,6k</td></tr>
<tr><td class="crd-td"><strong>Sebasteia</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,75, 37,02 (632-1000AD)</td><td class="crd-td">12,6k</td><td class="crd-td">12,7k</td><td class="crd-td">24,5k</td></tr>
<tr><td class="crd-td"><strong>Iconium</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,87, 32,48 (632-1000AD)</td><td class="crd-td">14,5k</td><td class="crd-td">13,8k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Marash</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,59, 36,94 (632-1000AD)</td><td class="crd-td">11,5k</td><td class="crd-td">19,2k</td><td class="crd-td">17,9k</td></tr>
<tr><td class="crd-td"><strong>Nakhchivan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,21, 45,41 (632-1000AD)</td><td class="crd-td">11,5k</td><td class="crd-td">17,1k</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>Ancyra</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,94, 32,86 (632-1000AD)</td><td class="crd-td">16,2k</td><td class="crd-td">11,6k</td><td class="crd-td">20,4k</td></tr>
<tr><td class="crd-td"><strong>Theodosiopolis</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,9, 41,27 (632-1000AD)</td><td class="crd-td">13,8k</td><td class="crd-td">18,4k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Beylagan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,86, 47,62 (632-1000AD)</td><td class="crd-td">9,2k</td><td class="crd-td">16,7k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Sinope</strong></td><td class="crd-td">Turkey</td><td class="crd-td">42,03, 35,15 (632-1000AD)</td><td class="crd-td">11,8k</td><td class="crd-td">12,8k</td><td class="crd-td">17,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements across Byzantine Anatolia and Caucasia (31 centres) from 632AD to 1000AD.</figcaption>
</figure>

## North Africa and the Arabian Peninsula

Table \ref{tab:zone6-maghrib-arabia} lists 36 individually assessed settlements across Tunisia, Libya, Algeria, Morocco, Saudi Arabia, Yemen, Oman and Bahrain, linking Kairouan, Fez, Tunis, Carthage, Al-Mahdiyya, Tahert, Tripoli, Sousse, Tlemcen and Sabta with Sohar, Medina, Sanaa, Mecca, Al-Hasa, Zabid, Aden and Omani *falaj* oasis centres [@Yuksel2024Mecca; @Biezeveld2025Quantifyin; @Bosworth2007Historic].

<figure class="crd-table-figure" id="tab:zone6-maghrib-arabia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">632AD</th><th class="crd-th">850AD</th><th class="crd-th">1000AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kairouan</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,68, 10,1 (675-1000AD)</td><td class="crd-td">-</td><td class="crd-td">94k</td><td class="crd-td">118k</td></tr>
<tr><td class="crd-td"><strong>Fez</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,06, -4,98 (795-1000AD)</td><td class="crd-td">-</td><td class="crd-td">42k</td><td class="crd-td">88,5k</td></tr>
<tr><td class="crd-td"><strong>Sohar</strong></td><td class="crd-td">Oman</td><td class="crd-td">24,36, 56,75 (632-1000AD)</td><td class="crd-td">14,5k</td><td class="crd-td">46,2k</td><td class="crd-td">52,4k</td></tr>
<tr><td class="crd-td"><strong>Tunis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,8, 10,17 (632-1000AD)</td><td class="crd-td">6,4k</td><td class="crd-td">41,5k</td><td class="crd-td">52,8k</td></tr>
<tr><td class="crd-td"><strong>Medina</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,47, 39,61 (632-1000AD)</td><td class="crd-td">36,5k</td><td class="crd-td">36,4k</td><td class="crd-td">31,5k</td></tr>
<tr><td class="crd-td"><strong>Sanaa</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,36, 44,21 (632-1000AD)</td><td class="crd-td">32,5k</td><td class="crd-td">45,8k</td><td class="crd-td">41,2k</td></tr>
<tr><td class="crd-td"><strong>Mecca</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,42, 39,83 (632-1000AD)</td><td class="crd-td">28,5k</td><td class="crd-td">41,8k</td><td class="crd-td">36,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Hasa</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">25,38, 49,59 (632-1000AD)</td><td class="crd-td">13,5k</td><td class="crd-td">20,6k</td><td class="crd-td">39,4k</td></tr>
<tr><td class="crd-td"><strong>Tahert</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,37, 1,32 (765-1000AD)</td><td class="crd-td">-</td><td class="crd-td">38,5k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Mahdiyya</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,51, 11,06 (920-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">36,4k</td></tr>
<tr><td class="crd-td"><strong>Carthage</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,85, 10,32 (632-1000AD)</td><td class="crd-td">42,5k</td><td class="crd-td">1,2k</td><td class="crd-td">750</td></tr>
<tr><td class="crd-td"><strong>Tripoli</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,9, 13,18 (632-1000AD)</td><td class="crd-td">18,5k</td><td class="crd-td">29,2k</td><td class="crd-td">37,2k</td></tr>
<tr><td class="crd-td"><strong>Zabid</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,2, 43,31 (825-1000AD)</td><td class="crd-td">-</td><td class="crd-td">22,4k</td><td class="crd-td">35,2k</td></tr>
<tr><td class="crd-td"><strong>Sousse</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,83, 10,64 (632-1000AD)</td><td class="crd-td">9,2k</td><td class="crd-td">24,5k</td><td class="crd-td">31,6k</td></tr>
<tr><td class="crd-td"><strong>Aden</strong></td><td class="crd-td">Yemen</td><td class="crd-td">12,78, 45,04 (632-1000AD)</td><td class="crd-td">14,2k</td><td class="crd-td">22,1k</td><td class="crd-td">29,4k</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">Algeria</td><td class="crd-td">34,88, -1,31 (632-1000AD)</td><td class="crd-td">8,4k</td><td class="crd-td">22,5k</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Sabta</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,89, -5,32 (632-1000AD)</td><td class="crd-td">8,2k</td><td class="crd-td">12,5k</td><td class="crd-td">27,4k</td></tr>
<tr><td class="crd-td"><strong>Aghmat</strong></td><td class="crd-td">Morocco</td><td class="crd-td">31,42, -7,8 (632-1000AD)</td><td class="crd-td">4,8k</td><td class="crd-td">14,2k</td><td class="crd-td">26,8k</td></tr>
<tr><td class="crd-td"><strong>Barqa</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,49, 20,9 (632-1000AD)</td><td class="crd-td">12,4k</td><td class="crd-td">20,1k</td><td class="crd-td">22,4k</td></tr>
<tr><td class="crd-td"><strong>Tangier</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,78, -5,81 (632-1000AD)</td><td class="crd-td">10,8k</td><td class="crd-td">16,5k</td><td class="crd-td">23,2k</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,37, 6,62 (632-1000AD)</td><td class="crd-td">12,4k</td><td class="crd-td">17,8k</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Msila</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,71, 4,54 (930-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,4k</td></tr>
<tr><td class="crd-td"><strong>Ashir</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,91, 3,1 (940-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,5k</td></tr>
<tr><td class="crd-td"><strong>Gabes</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">33,88, 10,1 (632-1000AD)</td><td class="crd-td">7,8k</td><td class="crd-td">14,6k</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>Sa'da</strong></td><td class="crd-td">Yemen</td><td class="crd-td">16,94, 43,76 (632-1000AD)</td><td class="crd-td">8,4k</td><td class="crd-td">14,2k</td><td class="crd-td">18,6k</td></tr>
<tr><td class="crd-td"><strong>Jeddah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,49, 39,19 (632-1000AD)</td><td class="crd-td">3,2k</td><td class="crd-td">14,8k</td><td class="crd-td">18,6k</td></tr>
<tr><td class="crd-td"><strong>Nizwa</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,93, 57,53 (632-1000AD)</td><td class="crd-td">9,2k</td><td class="crd-td">17k</td><td class="crd-td">15,4k</td></tr>
<tr><td class="crd-td"><strong>Awal</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">26,23, 50,59 (632-1000AD)</td><td class="crd-td">8,8k</td><td class="crd-td">14,6k</td><td class="crd-td">17,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Qatif</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,56, 50 (632-1000AD)</td><td class="crd-td">7,2k</td><td class="crd-td">12,6k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Sale</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,03, -6,82 (632-1000AD)</td><td class="crd-td">5,6k</td><td class="crd-td">11k</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Nakur</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,15, -3,86 (715-1000AD)</td><td class="crd-td">-</td><td class="crd-td">14,8k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Hajr al-Yamama</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,63, 46,72 (632-1000AD)</td><td class="crd-td">10,5k</td><td class="crd-td">14,8k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Shibam</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,93, 48,63 (632-1000AD)</td><td class="crd-td">9,6k</td><td class="crd-td">13k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Muscat</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,61, 58,59 (632-1000AD)</td><td class="crd-td">5,4k</td><td class="crd-td">11,1k</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Ajdabiya</strong></td><td class="crd-td">Libya</td><td class="crd-td">30,75, 20,23 (632-1000AD)</td><td class="crd-td">4,6k</td><td class="crd-td">9k</td><td class="crd-td">12,6k</td></tr>
<tr><td class="crd-td"><strong>Ghadames</strong></td><td class="crd-td">Libya</td><td class="crd-td">30,13, 9,5 (632-1000AD)</td><td class="crd-td">4,8k</td><td class="crd-td">8,7k</td><td class="crd-td">11,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements across North Africa and the Arabian Peninsula (36 centres) from 632AD to 1000AD.</figcaption>
</figure>

# Limitations

Three constraints qualify individual settlement entries in this gazetteer. First, metropolitan population trajectories carry genuine archaeological uncertainty - particularly for sprawling multi-quarter capitals such as Abbasid Baghdad (peaking at 695k in 900AD across roughly 7.000 ha of discontinuous urban and garden districts), Samarra (178k in 860AD), Rayy (194k), Fustat (174k) and Nishapur (156k) - where residential housing densities varied widely between dense urban cores and outer *rabad* suburbs [@ALJabri2023Developmen; @Bosworth2007Historic]. Second, the vetted gazetteer restricts tabulation to 140 individually documented urban centres and regional capitals above roughly 10k peak population (excluding 200 unquantified minor scatters, merged suburbs, duplicate aliases and non-settlement architectural fragments), leaving smaller rural market towns and villages to the continuous Matérn kriging surface rather than discrete table rows. Third, where individual cities experienced dated foundation or crisis turning points between canonical regional benchmarks (such as Samarra's 836AD foundation and 860AD peak, Damascus's 745AD Umayyad peak or Amorium's 838AD sack), table columns at 750AD and 850AD linearly interpolate between bracketing documented observations.

# Conclusion

Taken together, the 140 individually assessed settlements demonstrate a strongly structured, polycentric urban hierarchy ($\alpha = 0,72$, $R^2 = 0,96$) across the Early Islamic world and Byzantine Anatolia between 632AD and 1000AD. Active urban centres expanded from 122 cities housing 2,4M inhabitants in 632AD to 135 centres housing 4,92M at the 850AD Abbasid zenith and 140 centres housing 5,35M by 1000AD, driven by the seventh-century *amsar* wave, Umayyad foundation towns, Abbasid metropolitan growth at Baghdad and Samarra and resilient oasis urbanisation across Iran, Khurasan, Egypt and the Maghrib.

# Appendix

Table \ref{tab:gazetteer-summary} aggregates site counts and combined urban populations across the six geographic divisions at 632AD, 750AD, 850AD and 1000AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Division</th><th class="crd-th">Sites</th><th class="crd-th">632AD</th><th class="crd-th">750AD</th><th class="crd-th">850AD</th><th class="crd-th">1000AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Al-Iraq and Al-Jazira</strong></td><td class="crd-td">10</td><td class="crd-td">211,4k</td><td class="crd-td">522,5k</td><td class="crd-td">1,15M</td><td class="crd-td">613,5k</td></tr>
<tr><td class="crd-td"><strong>2. Bilad al-Sham and Cyprus</strong></td><td class="crd-td">21</td><td class="crd-td">354,5k</td><td class="crd-td">492,7k</td><td class="crd-td">512,2k</td><td class="crd-td">508,6k</td></tr>
<tr><td class="crd-td"><strong>3. Misr (Egypt)</strong></td><td class="crd-td">12</td><td class="crd-td">291k</td><td class="crd-td">371,2k</td><td class="crd-td">417,6k</td><td class="crd-td">550,8k</td></tr>
<tr><td class="crd-td"><strong>4. Iran, Khorasan and Afghanistan</strong></td><td class="crd-td">30</td><td class="crd-td">626,8k</td><td class="crd-td">897,2k</td><td class="crd-td">1,31M</td><td class="crd-td">1,74M</td></tr>
<tr><td class="crd-td"><strong>5. Byzantine Anatolia and Caucasia</strong></td><td class="crd-td">31</td><td class="crd-td">554,1k</td><td class="crd-td">594k</td><td class="crd-td">755,6k</td><td class="crd-td">904,2k</td></tr>
<tr><td class="crd-td"><strong>6. North Africa and Arabia</strong></td><td class="crd-td">36</td><td class="crd-td">358,4k</td><td class="crd-td">508,4k</td><td class="crd-td">780,1k</td><td class="crd-td">1,03M</td></tr>
<tr><td class="crd-td"><strong>Total Assessed Domain</strong></td><td class="crd-td">140</td><td class="crd-td">2,4M</td><td class="crd-td">3,39M</td><td class="crd-td">4,92M</td><td class="crd-td">5,35M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Summary of individually assessed settlements and aggregate urban populations across six geographic divisions from 632AD to 1000AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::
