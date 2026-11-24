---
title: "Early Islamic Caliphate (AD 632-1000)"
subtitle: "Settlement Gazetteer and Urban Hierarchy, 632AD to 1000AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_islamic_caliphate_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_early_islamic_caliphate_spatial.png"
hero_caption: "Spatial distribution of 917 individually assessed settlements across ten regions of the Early Islamic Caliphate and neighbouring Byzantine Anatolia between 632AD and 1000AD."
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

This gazetteer compiles individually assessed population series for 917 urban centres, garrison foundations (*amsar*), fortified towns (*kastra*) and caravan hubs across 22 modern national jurisdictions from 632AD to 1000AD. Vetted from 1.123 evaluated candidates after excluding 206 unquantified minor scatters, subordinate suburbs, duplicate aliases and architectural fragments, the dataset tracks 132 active centres housing 2,4M inhabitants in 632AD, 850 active centres housing 5,84M in 750AD, 869 active centres housing 7,78M at the 850AD Abbasid zenith and 890 centres housing 8,59M in 1000AD ($\alpha = 1,15$, $R^2 = 0,91$). Grouped into six geographic divisions covering Iraq and al-Jazira, Bilad al-Sham and Cyprus, Egypt, Iran and Afghanistan, Byzantine Anatolia and Caucasia, and North Africa with the Arabian Peninsula, the tables show how Rashidun garrison foundations (Basra, Kufa, Fustat, Kairouan), Umayyad regional capitals (Shiraz, Wasit, Ramla) and Abbasid river metropolises (Baghdad, Samarra, Raqqa) reshaped older Late Antique urban networks without extinguishing classical Mediterranean or Iranian oasis cities [@Nol2023Arab; @Bessard2018Politics; @ALJabri2023Developmen; @Bosworth2007Historic].



# Background

Urbanism across the Early Islamic Caliphate and its Byzantine and Caucasian frontiers was neither a sterile preservation of Hellenistic civic geometry nor an abrupt collapse into nomadic pasture. Between 632AD and 1000AD, old Roman, Byzantine and Sassanid cities coexisted with planned Muslim foundations whose street grids, congregational mosques, *suq* market halls and waterworks answered fiscal and military imperatives [@Allahham2025Untold; @Yassin2012Architectu; @Bessard2018Politics]. In Iraq and Egypt, the Rashidun conquests immediately generated purpose-built garrison camps (*amsar*) at Basra (638AD), Kufa (638AD) and Fustat (641AD), followed in Ifriqiya by Kairouan (670AD) [@Nol2023Arab; @ALJabri2023Developmen; @Bosworth2007Historic]. Positioned along navigable river margins or desert-steppe interfaces where tribal cavalry could assemble without billeting inside existing civic quarters, these camps quickly grew into permanent craft and trading cities sustained by *kharaj* grain and silver stipends [@Yuksel2024Mecca; @Isoldi2026Confluent].

Under the Umayyad caliphs (661AD to 750AD), planned foundations multiplied across Syria, Palestine, Fars and lower Mesopotamia. Governors laid out Shiraz (693AD) and Wasit (702AD) as military-administrative capitals, while Sulayman ibn Abd al-Malik established al-Ramla (c. 715AD) as the provincial capital of Jund Filastin, displacing coastal Caesarea without erasing inland market towns such as Tiberias, Amman and Damascus [@Nol2021Defining; @Stern2025Mamluk; @Ali2026Dimensions]. The Abbasid transfer of the seat of power to Iraq in 750AD shifted metropolitan gravity east again. Al-Mansur's Round City of Baghdad (762AD) and al-Mu'tasim's palace-garrison belt at Samarra (836AD) towered over the Tigris corridor, supported by the dense canal networks of the Sawad [@ALJabri2023Developmen; @Wahhab2024Decorative]. Further east, Tahirid, Samanid and Buyid patronage turned Rayy, Nishapur, Isfahan, Shiraz, Balkh and Herat into high-density *qanat*-fed manufacturing metropolises on the Silk Roads [@Saatsaz2023Technology; @Lu2023Connected; @Michailidis2014Dynastic]. Meanwhile, in Byzantine Anatolia, seventh-century raids compressed open *poleis* into fortified hilltop *kastra* such as Amorium, Ancyra, Ephesus and Caesarea before ninth- and tenth-century frontier stability renewed provincial towns [@Coleman2021Poleis; @Bakirtzis2023Introducin; @Navruz2024Historical].

# Methodology

The 917 individually assessed settlement entries tabulated here represent the vetted urban core of 1.123 candidate records evaluated for HANDBOOK between 632AD and 1000AD. Out of 1.123 candidates, 206 were excluded prior to tabulation to prevent spatial double counting and eliminate unquantified minor scatters, subordinate suburbs merged into metropolitan cores, duplicate aliases and non-settlement architectural fragments. Each retained settlement was assessed on a case-by-case basis by harmonising excavated walled and suburban footprints, period urban densities, *diwan* troop registers and early Islamic geographical treatises (al-Ya'qubi, al-Istakhri, Ibn Hawqal, al-Muqaddasi) with enriched historical and archaeological registers—including the Al-Thurayya Early Islamic Gazetteer, DARMC Mediaeval Major Towns, Euratlas, late-antique continuity anchors from the OXREP Roman Cities Database (Hanson 2016), the Egypt Exploration Society (EES) Delta Survey, the Near East Holocene Urban Settlement Database (Palmisano et al. 2021), From Villages to Empires (Titolo and Palmisano 2025), NERD and C-Turkey—alongside primary morphological and archaeological literature [@Nol2021Defining; @Mokranova2025Material; @Mitchell2021Church], with foundation chronologies and historical toponyms cross-checked against Bosworth's urban reference volume [@Bosworth2007Historic] strictly as a supplemental gazetteer.

Settlement names preserve clean Latin transliteration, while modern national jurisdictions follow current boundaries across 22 states to allow direct comparison with modern geoBoundaries subadministrative units [@Runfola2020GeoBoundaries]. Coordinates are reported in decimal degrees (European comma notation) alongside each site's active chronological span inside the 632AD to 1000AD window. Benchmark population columns report 632AD (the Prophet's death), 850AD (the Abbasid zenith) and 1000AD (the turn of the millennium), linearly interpolating between a city's bracketing documented turning points where individual dated observations fall on intermediate years; periods before foundation are marked with a hyphen (-).

# Testing and Validation

Across the 917 individually assessed settlements, log-log rank-size regression yields a Zipf exponent $\alpha = 1,15$ ($R^2 = 0,91$), displayed in Figure \ref{fig:settlements-gazetteer}. Mean settlement size shifts from 18.203 inhabitants across 132 active centres in 632AD to 6.874 across 850 centres in 750AD, 8.958 across 869 centres at the 850AD Abbasid zenith and 9.655 across 890 centres in 1000AD as lower Iraqi metropolises contracted while Iranian, Egyptian and Maghribi cities and regional itinerary towns expanded. At the top of the distribution sits Baghdad (peaking at 695k in 900AD after its 762AD foundation), followed by Rayy (194k), Samarra (178k in 860AD, founded 836AD), Fustat (174k), Basra (168k), Nishapur (156k), Al-Mada'in (145k), Alexandria (142k), Kufa (132k), Isfahan (132k), Damascus (126k) and Kairouan (124k), producing a strongly structured polycentric rank-size gradient free of artificial tier ceilings.

<figure class="crd-figure-block" id="fig:settlements-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-early-islamic-caliphate-settlements/fig4_early_islamic_caliphate_settlements.png" alt="fig:settlements-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 917 individually assessed settlements and peak populations of the twelve highest-ranked urban centres.</figcaption>
</figure>

# Results

## Al-Iraq and Al-Jazira

Table \ref{tab:zone1-iraq} lists all 63 individually assessed settlements within modern Iraq, spanning the Rashidun *amsar* of Basra and Kufa, Umayyad Wasit, Abbasid Baghdad and Samarra, and surviving Late Antique and early Islamic Tigris-Euphrates centres including Al-Mada'in, Mosul, Tikrit, Al-Anbar and Nahrawan [@ALJabri2023Developmen; @Wahhab2024Decorative; @Yuksel2024Mecca].

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
<tr><td class="crd-td"><strong>al-Ubullah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">30,5, 47,84 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">12,6k</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Bādūrayā</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,38, 44,22 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">11,1k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Qaṭrabbul</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,4, 44,25 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">11,1k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>al-Khawarnaq</strong></td><td class="crd-td">Iraq</td><td class="crd-td">31,97, 44,36 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">10,8k</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Karbalā'</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,62, 44,04 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">10,6k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>al-Jāmi'ān</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,48, 44,44 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>Bābil</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,57, 44,42 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>Jabbūl</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,55, 45,73 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,1k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Ḥammām Ibn 'Umar</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,39, 44,35 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,9k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Bājisrá</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,73, 44,64 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,9k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Ba'qūbā</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,76, 44,66 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,9k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Ma'lathāyah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,82, 42,96 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Abū al-Khaṣīb</strong></td><td class="crd-td">Iraq</td><td class="crd-td">30,44, 47,99 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">8,7k</td></tr>
<tr><td class="crd-td"><strong>Dimimmā</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,33, 43,78 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>al-Rabb</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,46, 43,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Bayān</strong></td><td class="crd-td">Iraq</td><td class="crd-td">30,46, 48,03 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Tall A'far</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,36, 42,49 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Khāniqīn</strong></td><td class="crd-td">Iraq</td><td class="crd-td">34,35, 45,45 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Sūq Asad</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,48, 44,3 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>al-Hārūniyya</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,98, 45,02 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Daskarah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,94, 44,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Fallūjah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,56, 44,31 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>al-Karkh</strong></td><td class="crd-td">Iraq</td><td class="crd-td">34,3, 43,87 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>al-Nu'māniyyah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,6, 45,43 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Qaṣr Ibn Hubayrah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,7, 44,35 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>al-Sīb</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,98, 44,85 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Dayr al-'Āqūl</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,91, 44,98 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Šahrazūr</strong></td><td class="crd-td">Iraq</td><td class="crd-td">35,26, 46,02 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Hīt</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,64, 42,81 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>'Alth</strong></td><td class="crd-td">Iraq</td><td class="crd-td">34,03, 44,09 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Ḥarbá</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,96, 44,19 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Jalūlā</strong></td><td class="crd-td">Iraq</td><td class="crd-td">34,18, 45,12 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>al-Ḥadīthah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">34,11, 42,39 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Aywānah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,81, 44,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>'Ukbarā</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,86, 44,23 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>al-Jibāl</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,24, 41,62 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Nahr al-Malik</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,05, 44,36 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Ṣarṣar</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,11, 44,37 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>'Abdās</strong></td><td class="crd-td">Iraq</td><td class="crd-td">31,46, 47,34 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>al-Madhār</strong></td><td class="crd-td">Iraq</td><td class="crd-td">31,48, 47,38 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Sinjār</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,32, 41,89 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Jisr Sūrā</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,65, 44,37 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Bandanījān</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,72, 45,49 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>'Ayn al-Tamr</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,62, 43,53 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>'Ānah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">34,43, 41,96 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>al-Dūr</strong></td><td class="crd-td">Iraq</td><td class="crd-td">34,47, 43,81 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Marj Juhaynah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,14, 43,27 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>al-Ḥadīthah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,02, 43,39 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>al-Sinn</strong></td><td class="crd-td">Iraq</td><td class="crd-td">35,26, 43,47 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Daqūqā'</strong></td><td class="crd-td">Iraq</td><td class="crd-td">35,14, 44,46 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Bā'ašīqā</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,41, 43,37 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Mazāri'ī</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,64, 43,05 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>'Abbādān</strong></td><td class="crd-td">Iraq</td><td class="crd-td">30,34, 48,27 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Al-Iraq and Al-Jazira (63 centres) from 632AD to 1000AD.</figcaption>
</figure>

## Bilad al-Sham and Cyprus

Table \ref{tab:zone2-sham} records 143 individually assessed settlements across Syria, Israel, Jordan, Lebanon, Cyprus and Palestine, including Umayyad Damascus, Raqqa, Aleppo (*Halab*), Ramla, Jerusalem, Tyre, Tripoli, Tiberias, Amman and Cypriot Nicosia and Constantia, reflecting dense urban-rural commercial continuity across the Levant [@Bessard2018Politics; @Nol2021Defining; @Mokranova2025Material; @Stern2025Mamluk].

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
<tr><td class="crd-td"><strong>Jerusalem</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,77, 35,23 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">15,1k</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Berytus</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,88, 35,56 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>Beirut</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,89, 35,5 (632-1000AD)</td><td class="crd-td">8,6k</td><td class="crd-td">13,8k</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>Amman</strong></td><td class="crd-td">Jordan</td><td class="crd-td">31,95, 35,94 (632-1000AD)</td><td class="crd-td">10,8k</td><td class="crd-td">12,8k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Bethlehem</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,71, 35,2 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>al-Raqīm</strong></td><td class="crd-td">Jordan</td><td class="crd-td">31,89, 35,96 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">12,6k</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Ma'arrah Qinnasrīn</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,01, 36,7 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">12,3k</td><td class="crd-td">13,3k</td></tr>
<tr><td class="crd-td"><strong>Laodicea</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,52, 35,79 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>Paphos</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">34,76, 32,42 (632-1000AD)</td><td class="crd-td">11,2k</td><td class="crd-td">7,6k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Haifa</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,77, 35 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ayla</strong></td><td class="crd-td">Jordan</td><td class="crd-td">29,53, 35 (632-1000AD)</td><td class="crd-td">4,2k</td><td class="crd-td">9,6k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>al-Biqā'</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,84, 35,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">10k</td></tr>
<tr><td class="crd-td"><strong>Yāfā</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,06, 34,75 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Anṭarṭūs</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,9, 35,9 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Sidon</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,58, 35,42 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>'Arqah</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">34,53, 36,07 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,6k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>'Amawās</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,84, 34,98 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Raḥbah Malik Ibn Ṭawq</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,99, 40,46 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,1k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Adhri'āt</strong></td><td class="crd-td">Syria</td><td class="crd-td">32,61, 36,09 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Māḥūz Azdūd</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,81, 34,64 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,9k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Māḥūz Yubnā</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,88, 34,67 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,9k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Baablbek</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,99, 36,22 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Ṣaydā'</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,57, 35,37 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Nazareth</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,7, 35,28 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Salamiyyah</strong></td><td class="crd-td">Syria</td><td class="crd-td">35, 37,07 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Naṣībīn</strong></td><td class="crd-td">Syria</td><td class="crd-td">37,06, 41,22 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,3k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Bulunyās</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,18, 35,97 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Labwah</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">34,19, 36,33 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Šayzar</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,26, 36,56 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Arsūf</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,2, 34,81 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Qaysariyyah</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,49, 34,9 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>al-Bathaniyyah</strong></td><td class="crd-td">Syria</td><td class="crd-td">32,72, 36,16 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Juniyyah</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,98, 35,62 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>'Arjamūš</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,86, 35,89 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Manbij</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,55, 37,99 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>al-Kanīsah</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,75, 34,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>al-Dāliyah</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,71, 40,74 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Ma'arrah al-Nu'mān</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,64, 36,69 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Kafarsābā</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,18, 34,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>'Āqir</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,86, 34,81 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Ludd</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,96, 34,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Yubnā</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,87, 34,74 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>al-Lajjūn</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,61, 35,27 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Qalansuwah</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,3, 34,98 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Jabalah</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,37, 35,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Bayt Jibrīl</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,61, 34,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Jarabuluṣ</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,82, 38,01 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Dārā</strong></td><td class="crd-td">Syria</td><td class="crd-td">37,19, 40,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Aylah</strong></td><td class="crd-td">Israel</td><td class="crd-td">29,57, 34,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>al-Jaḥšiyyah</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,65, 40,41 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Juraš</strong></td><td class="crd-td">Jordan</td><td class="crd-td">32,27, 35,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Ṣarafandah</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,45, 35,29 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>al-Aṭmīn</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,31, 36,62 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Tall Maḥrá</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,62, 39,14 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Rafaniyyah</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,93, 36,41 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Ma'ān</strong></td><td class="crd-td">Jordan</td><td class="crd-td">30,2, 35,72 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Rastān</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,93, 36,75 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Bathrūn</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">34,26, 35,67 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>'Arabān</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,06, 40,69 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Khušāf</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,09, 37,7 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Mīkisīn</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,74, 40,76 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Buṣrá</strong></td><td class="crd-td">Syria</td><td class="crd-td">32,52, 36,43 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>al-Furḍah</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,68, 40,78 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Ma'āb</strong></td><td class="crd-td">Jordan</td><td class="crd-td">31,26, 35,73 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Tall Mannas</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,63, 36,75 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Ra's al-'Ayn</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,84, 40,06 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Tīzīn</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,24, 36,7 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Fāmiyyah</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,42, 36,4 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Bāniyās</strong></td><td class="crd-td">Israel</td><td class="crd-td">33,25, 35,68 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Suwaydā'</strong></td><td class="crd-td">Syria</td><td class="crd-td">32,7, 36,56 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>al-Sukkariyyah</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,56, 34,65 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Qadas</strong></td><td class="crd-td">Israel</td><td class="crd-td">33,12, 35,49 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>al-Bārah</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,68, 36,54 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Qūrus</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,73, 36,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Jubayl</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">34,13, 35,65 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Baysān</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,5, 35,49 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Kafarṭāb</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,51, 36,61 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>al-Khunāṣirah</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,78, 37,51 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>al-Ḥawrān</strong></td><td class="crd-td">Syria</td><td class="crd-td">32,65, 36,73 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>al-Mubārak</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,59, 39,84 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Bīrā</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,66, 39,87 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Ṭābān</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,16, 40,76 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>al-Jašš</strong></td><td class="crd-td">Israel</td><td class="crd-td">33,03, 35,45 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Jubb Yūsuf</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,92, 35,53 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>al-Ḥulah</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,98, 35,64 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>'Adhnūn</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,39, 35,27 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Karak</strong></td><td class="crd-td">Jordan</td><td class="crd-td">31,18, 35,69 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Ṣawwarān</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,29, 36,77 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Anafah</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">34,36, 35,74 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Fāsirah</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,67, 35,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Mu'tah</strong></td><td class="crd-td">Jordan</td><td class="crd-td">31,06, 35,69 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>al-Nā'imah</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,78, 35,47 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>al-Majdal</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,53, 40,55 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Ḥabrah</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,53, 35,09 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Adhramah</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,99, 41,72 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qarqīsiyyah</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,15, 40,44 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Nābulus</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,22, 35,24 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Riḥā</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,86, 35,44 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Kābul</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,87, 35,21 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Sarmīn</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,89, 36,72 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Gaza</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,52, 34,45 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Wādī Mūsá</strong></td><td class="crd-td">Jordan</td><td class="crd-td">30,33, 35,47 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Bālis</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,03, 38,09 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Barqa'īd</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,95, 42,08 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Jisr Manbij</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,67, 38,22 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Tunānīr</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,39, 40,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Bājarwān</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,14, 38,99 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>al-Šamsīniyyah</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,87, 40,91 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">952</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Sabasṭiyah</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,27, 35,15 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">909</td><td class="crd-td">982</td></tr>
<tr><td class="crd-td"><strong>Marāqiyyah</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,05, 35,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">889</td><td class="crd-td">960</td></tr>
<tr><td class="crd-td"><strong>Ghazzah</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,5, 34,46 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">838</td><td class="crd-td">905</td></tr>
<tr><td class="crd-td"><strong>al-Fudayn</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,41, 40,6 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">836</td><td class="crd-td">903</td></tr>
<tr><td class="crd-td"><strong>al-Ṣuwwār</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,49, 40,65 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">836</td><td class="crd-td">903</td></tr>
<tr><td class="crd-td"><strong>Mīmās</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,5, 34,42 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">800</td><td class="crd-td">864</td></tr>
<tr><td class="crd-td"><strong>Kafartūthā</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,99, 40,43 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">790</td><td class="crd-td">853</td></tr>
<tr><td class="crd-td"><strong>'Aqabah al-Fīq</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,77, 35,68 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">747</td><td class="crd-td">807</td></tr>
<tr><td class="crd-td"><strong>Ḥiṣn Maslamah</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,39, 39,07 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">727</td><td class="crd-td">786</td></tr>
<tr><td class="crd-td"><strong>al-Jawlān</strong></td><td class="crd-td">Israel</td><td class="crd-td">33,09, 35,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">699</td><td class="crd-td">755</td></tr>
<tr><td class="crd-td"><strong>Fayšābūr</strong></td><td class="crd-td">Syria</td><td class="crd-td">37,05, 42,43 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">683</td><td class="crd-td">738</td></tr>
<tr><td class="crd-td"><strong>Tall Farāšah</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,98, 41,34 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">673</td><td class="crd-td">727</td></tr>
<tr><td class="crd-td"><strong>Oylum Höyük</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,69, 37,17 (632-950AD)</td><td class="crd-td">696</td><td class="crd-td">664</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>al-Ḥuṣayn</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,62, 40,72 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">641</td><td class="crd-td">693</td></tr>
<tr><td class="crd-td"><strong>al-Maṭariyyah</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,2, 40,76 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">605</td><td class="crd-td">654</td></tr>
<tr><td class="crd-td"><strong>Majdal Salīm</strong></td><td class="crd-td">Israel</td><td class="crd-td">33,23, 35,43 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">592</td><td class="crd-td">640</td></tr>
<tr><td class="crd-td"><strong>Sukayr al-'Abbās</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,24, 40,59 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">592</td><td class="crd-td">639</td></tr>
<tr><td class="crd-td"><strong>Jazīrah Ibn 'Umar</strong></td><td class="crd-td">Syria</td><td class="crd-td">37,29, 42,2 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">508</td><td class="crd-td">549</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Bilad al-Sham and Cyprus (143 centres across six modern jurisdictions) from 632AD to 1000AD.</figcaption>
</figure>

## Misr (Early Islamic Egypt)

Table \ref{tab:zone3-misr} compiles 106 individually assessed centres along the Nile Valley, the Fayyum depression and the Delta, led by Fustat, Alexandria (*al-Iskandariyya*), Fatimid Al-Qahira (founded 969AD) and Tinnis alongside Damietta, Asyut, Al-Faiyum, Aswan, Akhmim, Qus, Al-Ashmunayn and Al-Farama documented in Marwanid fiscal papyri and Delta surveys [@Maghraby2025Arab; @Isoldi2026Confluent; @Nol2023Arab].

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
<tr><td class="crd-td"><strong>Cairo</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,08, 31,25 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">22,6k</td><td class="crd-td">22,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Farama</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,04, 32,55 (632-1000AD)</td><td class="crd-td">15,4k</td><td class="crd-td">14,6k</td><td class="crd-td">12,4k</td></tr>
<tr><td class="crd-td"><strong>Pelusium</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,26, 32,29 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sardūs</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,16, 31,19 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">13,4k</td></tr>
<tr><td class="crd-td"><strong>Wasīm</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,12, 31,11 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">10,7k</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>al-Qulzum</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,03, 32,56 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">10,4k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Awīš</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,01, 31,31 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Damīrah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,14, 31,35 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Ḥulwān</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,86, 31,3 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Manf</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,85, 31,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Maḥallah al-Kabīrah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,97, 31,15 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,7k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>al-Bundāriyyah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,72, 30,93 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,7k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>Maḥallah al-Maḥrūm</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,8, 30,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,7k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>Maštūl</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,37, 31,37 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">10,3k</td></tr>
<tr><td class="crd-td"><strong>Būtīj</strong></td><td class="crd-td">Egypt</td><td class="crd-td">27,11, 31,23 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,4k</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Asnā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">25,32, 32,55 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Bilbays</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,42, 31,57 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,7k</td><td class="crd-td">9,4k</td></tr>
<tr><td class="crd-td"><strong>El'Arish</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,13, 33,8 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>al-Aqṣūr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">25,72, 32,61 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,6k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Unbuwā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">24,47, 32,99 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Ṭaḥā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">28,27, 30,69 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Damanhūr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,04, 30,46 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Babīj</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,87, 30,76 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Šaṭā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,41, 31,87 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Rašīd</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,41, 30,38 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Malīj</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,58, 31,01 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,4k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Daqahlah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,28, 31,66 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,3k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Suways</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,97, 32,54 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Manūf</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,46, 30,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Fīšah Ibn Sulaym</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,76, 30,93 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Ghayfā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,38, 31,51 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Ṣakhā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,09, 30,93 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Banhā al-'Asal</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,44, 31,16 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Tūnah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,16, 32,08 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Ziftā Jawād</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,71, 31,21 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Sanhūr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,16, 30,71 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Damsīs</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,82, 31,22 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Bilāq</strong></td><td class="crd-td">Egypt</td><td class="crd-td">23,99, 32,94 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>al-Karyūn</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,14, 30,13 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Šaṭnūf</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,23, 31,06 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Fāqūs</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,71, 31,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>al-Qays</strong></td><td class="crd-td">Egypt</td><td class="crd-td">28,53, 30,79 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Danšāl</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,96, 30,51 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Fīšah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,13, 30,5 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Maḥallah Ṣurad</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,97, 30,85 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Ṣā'</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,96, 30,74 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Tanā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,04, 31,54 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Sumusṭā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">28,96, 30,89 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>al-'Abbāsiyyah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,54, 31,71 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Ṭaṭā'</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,69, 31,09 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Dayrūṭ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,25, 30,45 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Fuwah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,22, 30,51 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Sanbādhah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,19, 30,47 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Anṣinā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">27,9, 30,85 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Dandarah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,16, 32,65 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Qinā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,17, 32,73 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Armant</strong></td><td class="crd-td">Egypt</td><td class="crd-td">25,64, 32,52 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Bistāmah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,62, 30,79 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Bulyanā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,22, 32 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Ahnās</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,13, 30,96 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Misīr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,05, 30,98 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Dijwah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,37, 31,11 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Barsīq</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,08, 30,3 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Hū</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,02, 32,3 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Būṣīr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,28, 31,11 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Burullus</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,59, 31 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Abšāyah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,47, 31,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Ṣahrajāt</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,65, 31,27 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>al-Ṣāfiyyah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,04, 30,7 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Balhīb</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,29, 30,46 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Atfū</strong></td><td class="crd-td">Egypt</td><td class="crd-td">25,01, 32,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>al-Jurasiyyāt</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,34, 30,89 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Dhāt al-Ḥumām</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,86, 29,3 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Qaw</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,94, 31,47 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Maḥallah Nuqaydah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,78, 30,71 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Šābūr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,8, 30,73 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Tantītā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,28, 31,1 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Aṭfīḥ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,43, 31,3 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>al-Baqqārah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,02, 33,13 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Subk al-'Abīd</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,43, 31,05 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Farnwah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,99, 30,67 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Ṭuwwah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,68, 30,93 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>al-Lāhūn</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,25, 30,99 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>al-Rāfiqah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,69, 30,74 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Fāw</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,69, 31,65 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Quṣayr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,11, 34,28 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>al-Qanṭarah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,86, 32,32 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Tandah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">27,76, 30,7 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Maḥallah Abū Khurāšah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,03, 30,62 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Dalāṣ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,22, 31,16 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Qifṭ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26, 32,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Banhasá</strong></td><td class="crd-td">Egypt</td><td class="crd-td">28,29, 28,84 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>al-Qaṣr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">25,67, 28,83 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">899</td><td class="crd-td">971</td></tr>
<tr><td class="crd-td"><strong>Bayrīs</strong></td><td class="crd-td">Egypt</td><td class="crd-td">24,59, 30,5 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">867</td><td class="crd-td">937</td></tr>
<tr><td class="crd-td"><strong>Qalamūn</strong></td><td class="crd-td">Egypt</td><td class="crd-td">25,45, 28,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">603</td><td class="crd-td">652</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in Misr (106 centres across the Nile Valley, Fayyum and Delta) from 632AD to 1000AD.</figcaption>
</figure>

## Iran, Khorasan and Afghanistan

Table \ref{tab:zone4-iran} covers 308 individually assessed settlements across Iran and Afghanistan, including Rayy, Nishapur, Isfahan, Shiraz, Hamadan, Jurjan, Ahvaz, Ardabil, Siraf, Tus, Qom and Qazvin in Iran alongside Balkh, Herat, Zaranj, Ghazni, Bust and Kabul in Afghanistan, anchoring *qanat*-irrigated oasis agriculture and Silk Road craft manufacture [@Saatsaz2023Technology; @Lu2023Connected; @Michailidis2014Dynastic; @Spooner2019Epilogue].

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
<tr><td class="crd-td"><strong>al-Nūqān</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,21, 59,59 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">15,6k</td><td class="crd-td">17k</td></tr>
<tr><td class="crd-td"><strong>Naysābūr</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,12, 58,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">11,2k</td><td class="crd-td">12,2k</td></tr>
<tr><td class="crd-td"><strong>Sanābādh</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,23, 59,61 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">11,2k</td><td class="crd-td">12,2k</td></tr>
<tr><td class="crd-td"><strong>Qarmāsīn</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,32, 47,1 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">10,8k</td><td class="crd-td">11,7k</td></tr>
<tr><td class="crd-td"><strong>Urmīyah</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,52, 45,07 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Qāšān</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,97, 51,5 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,7k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>Šahrastān</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,19, 55,21 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Burūjird</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,9, 48,81 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,1k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Āmul</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,42, 52,41 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,9k</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>Sūrū</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,19, 56,21 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Zanjān</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,66, 48,51 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Sīsar</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,32, 46,98 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Warwālīj</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,78, 68,9 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Astārabādh</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,79, 54,47 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Sāriyah</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,53, 53,12 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,3k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Jīruft</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,69, 57,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Bamm</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,1, 58,34 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,1k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Arrājān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,61, 50,3 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">7,7k</td></tr>
<tr><td class="crd-td"><strong>al-Diz</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,39, 48,42 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,9k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,78, 66,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,9k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Ṭālaqān</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,76, 69,62 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Māmaṭīr</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,52, 52,75 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Sābzawār</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,16, 57,67 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Sāwah</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,98, 50,43 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Khuwī</strong></td><td class="crd-td">Iran</td><td class="crd-td">38,59, 44,99 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Bardasīr</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,31, 57,1 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Simnān</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,5, 53,41 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Šabūrqān</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,65, 65,78 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Sūs</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,2, 48,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Nihāwand</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,22, 48,39 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Rām Hurmuz</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,29, 49,6 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Bisṭām</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,46, 55,07 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">6,3k</td></tr>
<tr><td class="crd-td"><strong>al-Rūdhān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,4, 56,02 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">6,3k</td></tr>
<tr><td class="crd-td"><strong>Darābajird</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,75, 54,55 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Jahram</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,52, 53,51 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Sāburkhast</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,92, 46,11 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>al-Bahraj</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,28, 60,66 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Marand</strong></td><td class="crd-td">Iran</td><td class="crd-td">38,46, 45,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Salamās</strong></td><td class="crd-td">Iran</td><td class="crd-td">38,22, 44,83 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Sābūrkhāšt</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,49, 48,37 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Īdhaj</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,86, 49,87 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Nayrīz</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,21, 54,28 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Darīz</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,66, 51,54 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Kāzarūn</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,61, 51,68 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Fasā</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,92, 53,63 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>al-Ghundijān</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,22, 51,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Dašt Bārīn</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,28, 51,27 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Šālūs</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,6, 51,46 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>al-Tīz</strong></td><td class="crd-td">Iran</td><td class="crd-td">25,38, 60,63 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>al-Mayānij</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,4, 47,74 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Ḥulwān</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,48, 45,93 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Ahar</strong></td><td class="crd-td">Iran</td><td class="crd-td">38,45, 47,14 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>al-Būzjān</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,18, 60,62 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Abhar</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,16, 49,23 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Junbadh Mallaghān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,29, 50,85 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>al-Ṭazar</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,17, 46,44 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>al-Burj</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,4, 49,64 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Maybudh</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,28, 53,99 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Baghlān</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,24, 68,77 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Afrīdhīn</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,42, 51,77 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Jannābah</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,6, 50,54 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Khān Lanjān</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,4, 51,56 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>al-Asfuzār</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">33,24, 62,13 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Jūr</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,85, 52,58 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Khulm</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,75, 67,7 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Barzah</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,51, 46,21 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Šahrastān</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,83, 51,52 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Zarand</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,83, 56,6 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Dizak</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,36, 62,27 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Ābādhah</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,16, 52,66 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Nūbandajān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,13, 51,55 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>al-Ṣaymarah</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,15, 47,41 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Asadābādh</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,8, 48,15 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Rudhrāwar</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,62, 48,39 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Qaṣr al-Luṣūṣ</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,5, 47,9 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Bāsiyān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,66, 48,77 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Maghūn</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,98, 57,79 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>al-Anbār</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,21, 65,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Nahr Tīrā</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,47, 48,38 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Šābābak</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,13, 55,06 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Barwān</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,57, 48,56 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Ṭabas Jīlakī</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,59, 56,94 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>al-Khuwār</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,26, 52,41 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Šalanbah</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,68, 52,05 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Andakhūdh</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,96, 65,17 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Siminjān</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,23, 68,09 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Sarakhs</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,52, 61,19 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Dākharraqān</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,72, 45,99 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Farah</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">32,36, 62,07 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Ārhan</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">37,24, 68,86 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Ra's Kišm</strong></td><td class="crd-td">Iran</td><td class="crd-td">26,97, 56,28 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Lūrdajān</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,54, 50,74 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Zāwar</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,25, 56,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Ṭamīšah</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,73, 54,06 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>'Askar Mukram</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,67, 48,9 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Qaṣrqand</strong></td><td class="crd-td">Iran</td><td class="crd-td">26,29, 60,71 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>al-Iṣbahānāt</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,11, 54,04 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Alham</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,56, 52,23 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Hinduwān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,25, 49,71 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Tūn</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,93, 58,12 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Yazdakhawāst</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,34, 54,43 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Būsanj</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">34,35, 61,48 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Abarqūh</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,15, 53,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Gharwah</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,54, 49,9 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Mahrūbān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,06, 50,21 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Rustāq Bīk</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">37,11, 69,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Jundaysābūr</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,3, 48,54 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Jirm</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,81, 70,93 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Āsak</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,73, 49,69 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Qīr</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,45, 53,04 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Bawwān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,46, 53,62 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Khašm</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,49, 49,19 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Māhān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,11, 57,31 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Ābaskūn</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,03, 54,04 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Tawwaz</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,44, 51,04 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Khurrāmah</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,54, 53,34 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Nih</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,58, 60,05 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Khawaristān</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,26, 53,21 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Jālq</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,64, 62,65 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Karūkh</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">34,48, 62,55 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>al-Karaj</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,88, 49,55 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Iqlīd</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,92, 52,67 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Šihmār</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,16, 52,87 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Ardistān</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,38, 52,37 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Manūqān</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,46, 57,56 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Abān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,89, 55,25 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Jamm</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,82, 52,39 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Khawāš</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">31,49, 62,76 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Barwān</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">35,17, 69,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>al-Sarāt</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,91, 47,58 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Sarwān</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">31,98, 64,85 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Kalār</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,5, 51,08 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Harāh</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,11, 54,41 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Ruwaydašt</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,44, 52,72 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Barbūr</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,26, 60,42 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Mālin</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">34,18, 62,2 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Narmāsīr</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,98, 58,65 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Khašt</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,55, 51,31 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Lāštar</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,87, 48,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Kūh Bayān</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,38, 56,3 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Bāzīr</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,64, 49,89 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Rakān</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,78, 52,75 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Ṭurthīth</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,14, 58,41 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Rā'in</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,61, 57,5 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Bih</strong></td><td class="crd-td">Iran</td><td class="crd-td">26,23, 61,33 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Mīmand</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,88, 52,85 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Kamīn</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,17, 53,16 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Āwah</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,69, 50,54 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Jabrawān</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,96, 45,6 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Bahāwadh</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,83, 55,96 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Kūk</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,86, 57,76 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Bīmand</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,66, 55,6 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Mālin</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,94, 60,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Qaryah Bīdh</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,64, 53,18 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Ajgh</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,51, 56,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Nātil</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,48, 51,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Khannāb</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,86, 56,72 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Salūmak</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,65, 59,98 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Ābādhah</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,78, 53,74 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mīlah</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,47, 52,55 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Sakāwand</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">34,08, 68,75 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Bayḍā'</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,04, 52,37 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Mihrawān</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,68, 53,7 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Fahraj</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,98, 58,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Kulsārah</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,38, 47,01 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Jakīn</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,23, 57,47 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Sa'īdābādh</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,4, 51,36 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khasū</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,52, 54,41 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Kundur</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,12, 58,13 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Iyj</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,99, 54,25 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>al-Mījan</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,45, 57,77 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Khurrah</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,22, 51,98 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>al-Fustujān</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,88, 54,08 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Fārūq</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,97, 53,07 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Janzarūdh</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,67, 56,93 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Jāyimand</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,05, 59,85 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Juwaym</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,87, 52,3 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Hurmūz</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,1, 56,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Qāyīn</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,65, 59,09 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Ghubayrā'</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,73, 56,98 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Kūghūn</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,62, 57,07 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Būstah</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,13, 49,74 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Warzaqān</strong></td><td class="crd-td">Iran</td><td class="crd-td">38,56, 46,66 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Rādhakān</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,82, 58,97 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Isbīdh</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,92, 59,97 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Khabīṣ</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,46, 57,75 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Zūzan</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,31, 59,86 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Ṣāhik</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,74, 50,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Khawāš</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,8, 61,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Walāšjird</strong></td><td class="crd-td">Iran</td><td class="crd-td">28, 57,28 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Yunābīdh</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,25, 58,64 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Ṭabas Masīnān</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,82, 60,21 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Awārik</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,33, 57,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Sarwīstān</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,27, 57,89 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Nāmiyah</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,77, 54,33 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Sankān</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,05, 59,41 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Ūrd</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,78, 51,99 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Baṣinnā</strong></td><td class="crd-td">Iran</td><td class="crd-td">32, 48,3 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Rustāq</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,48, 55,1 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Rāman</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,26, 48,66 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Hindūjān</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,39, 51,3 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Dakhwīd</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,31, 51,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Ṭalaqān</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,19, 50,84 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Khabr</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,86, 56,31 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>al-Rūyān</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,36, 51,71 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Juwaym Abū Aḥmad</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,14, 53,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Sarmaq</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,06, 52,79 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Sārūq</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,36, 49,56 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Khawādhān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,24, 51,51 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>al-Fahraj</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,77, 54,62 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Azam</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,25, 49,04 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Ṣahīh</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,77, 54,31 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Kārzin</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,41, 53,11 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Furj</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,32, 55,17 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Kadruwā</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,16, 54,67 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Kurk</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,89, 58,49 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Sīnīz</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,92, 50,28 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>al-Sīrawān</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,52, 46,87 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Kurdakān</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,79, 55,68 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Biyār</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,06, 55,87 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Firzīn</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,95, 56,77 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Ḥawmah al-Zuṭṭ</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,06, 49,71 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Ṭabistān</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,95, 53,82 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Zānbūq</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,99, 61,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>al-Jāyzan</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,88, 49,84 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Rīšahr</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,34, 50,22 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Kumārij</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,58, 51,51 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Jāh Zandāyah</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,86, 54,19 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">989</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Kurm</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,07, 53,61 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">987</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Rāsk</strong></td><td class="crd-td">Iran</td><td class="crd-td">26,71, 61,22 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">978</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Buštafrūš</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,18, 59,24 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">953</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Khawst</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,78, 58,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">953</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Qaṣr al-Rīḥ</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,03, 59,13 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">953</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Rūdhah</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,1, 49,79 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">928</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>'Uqdah</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,41, 53,66 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">922</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>al-Mādhawan</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,72, 54,3 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">900</td><td class="crd-td">980</td></tr>
<tr><td class="crd-td"><strong>Šūrāb</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,21, 48,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">892</td><td class="crd-td">971</td></tr>
<tr><td class="crd-td"><strong>Dīnawar</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,6, 47,49 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">882</td><td class="crd-td">960</td></tr>
<tr><td class="crd-td"><strong>Ma'īn</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,19, 52,64 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">881</td><td class="crd-td">959</td></tr>
<tr><td class="crd-td"><strong>Darjīn</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,2, 58,17 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">872</td><td class="crd-td">949</td></tr>
<tr><td class="crd-td"><strong>Kathruwā</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,11, 57,71 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">849</td><td class="crd-td">924</td></tr>
<tr><td class="crd-td"><strong>Asfarāyin</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,99, 57,43 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">840</td><td class="crd-td">915</td></tr>
<tr><td class="crd-td"><strong>Kallār</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,72, 51,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">835</td><td class="crd-td">909</td></tr>
<tr><td class="crd-td"><strong>Sanbīl</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,72, 50,14 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">824</td><td class="crd-td">897</td></tr>
<tr><td class="crd-td"><strong>Karkūyah</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,26, 61,74 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">820</td><td class="crd-td">893</td></tr>
<tr><td class="crd-td"><strong>Khusrawjird</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,19, 57,48 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">819</td><td class="crd-td">892</td></tr>
<tr><td class="crd-td"><strong>Khūjān</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,91, 58,45 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">807</td><td class="crd-td">879</td></tr>
<tr><td class="crd-td"><strong>Khān Mīm</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,32, 52,89 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">754</td><td class="crd-td">820</td></tr>
<tr><td class="crd-td"><strong>Suhraward</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,46, 48,63 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">748</td><td class="crd-td">815</td></tr>
<tr><td class="crd-td"><strong>Muškān</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,61, 52,86 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">747</td><td class="crd-td">813</td></tr>
<tr><td class="crd-td"><strong>Dašt 'Alī</strong></td><td class="crd-td">Iran</td><td class="crd-td">25,59, 61,15 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">718</td><td class="crd-td">782</td></tr>
<tr><td class="crd-td"><strong>Bahmanābādh</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,33, 56,83 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">699</td><td class="crd-td">761</td></tr>
<tr><td class="crd-td"><strong>Abzar</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,28, 52,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">690</td><td class="crd-td">751</td></tr>
<tr><td class="crd-td"><strong>Khūr</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,94, 58,45 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">666</td><td class="crd-td">725</td></tr>
<tr><td class="crd-td"><strong>Hurmuz al-Malik</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,02, 57,93 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">657</td><td class="crd-td">715</td></tr>
<tr><td class="crd-td"><strong>Dašt Arzan</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,61, 51,94 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">654</td><td class="crd-td">711</td></tr>
<tr><td class="crd-td"><strong>Kūh Barjān</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,68, 57,76 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">647</td><td class="crd-td">705</td></tr>
<tr><td class="crd-td"><strong>Tūštān</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,42, 57,81 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">638</td><td class="crd-td">694</td></tr>
<tr><td class="crd-td"><strong>al-Ṣīmakān</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,7, 53,13 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">599</td><td class="crd-td">652</td></tr>
<tr><td class="crd-td"><strong>Hazār</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,94, 52,49 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">589</td><td class="crd-td">641</td></tr>
<tr><td class="crd-td"><strong>Khabr</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,76, 53,28 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">575</td><td class="crd-td">626</td></tr>
<tr><td class="crd-td"><strong>Mazīnān</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,28, 56,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">565</td><td class="crd-td">615</td></tr>
<tr><td class="crd-td"><strong>al-Murayzijān</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,81, 54,4 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">564</td><td class="crd-td">614</td></tr>
<tr><td class="crd-td"><strong>Qaṣr A'īn</strong></td><td class="crd-td">Iran</td><td class="crd-td">30,82, 52,45 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">556</td><td class="crd-td">605</td></tr>
<tr><td class="crd-td"><strong>Qalmayhan</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,13, 59,29 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">525</td><td class="crd-td">571</td></tr>
<tr><td class="crd-td"><strong>Mazdūrān</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,17, 60,55 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">499</td><td class="crd-td">543</td></tr>
<tr><td class="crd-td"><strong>Nāband</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,34, 52,64 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">499</td><td class="crd-td">543</td></tr>
<tr><td class="crd-td"><strong>Khayār</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,26, 53,94 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">490</td><td class="crd-td">534</td></tr>
<tr><td class="crd-td"><strong>Qaryah al-Milḥ</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,26, 52,64 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">490</td><td class="crd-td">534</td></tr>
<tr><td class="crd-td"><strong>Marzaqān</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,97, 56,75 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">484</td><td class="crd-td">527</td></tr>
<tr><td class="crd-td"><strong>Ṣāhih</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,11, 60,19 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">483</td><td class="crd-td">526</td></tr>
<tr><td class="crd-td"><strong>al-Ḥaddādah</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,29, 54,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">482</td><td class="crd-td">525</td></tr>
<tr><td class="crd-td"><strong>Ataškahān</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,67, 56,79 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">482</td><td class="crd-td">525</td></tr>
<tr><td class="crd-td"><strong>Bīskand</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,08, 58,39 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">482</td><td class="crd-td">525</td></tr>
<tr><td class="crd-td"><strong>Darnawá</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,85, 48,73 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">482</td><td class="crd-td">525</td></tr>
<tr><td class="crd-td"><strong>Dih Bārist</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,77, 56,14 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">482</td><td class="crd-td">525</td></tr>
<tr><td class="crd-td"><strong>Kurī</strong></td><td class="crd-td">Iran</td><td class="crd-td">33,38, 57,19 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">482</td><td class="crd-td">525</td></tr>
<tr><td class="crd-td"><strong>Ra's al-Kalb</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,38, 53,08 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">482</td><td class="crd-td">525</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements across Iran, Khorasan and Afghanistan (308 centres) from 632AD to 1000AD.</figcaption>
</figure>

## Byzantine Anatolia and Caucasia

Table \ref{tab:zone5-anatolia} enumerates 114 individually assessed centres across Turkey, Georgia, Azerbaijan and Armenia, spanning Byzantine provincial metropolises and *Thughur* border cities (Antioch, Tarsus, Amid, Trebizond, Nicaea, Harran, Mayyafariqin, Malatya, Amorium, Ephesus, Caesarea, Attaleia, Ancyra, Iconium) alongside Transcaucasian capitals and trade hubs (Barda, Ani, Dvin, Tbilisi, Ganja, Shamakhi, Kars and Kutaisi) [@Coleman2021Poleis; @Mitchell2021Church; @Bakirtzis2023Introducin; @Ozbal2026Diet].

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
<tr><td class="crd-td"><strong>Constantinople</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,07, 29,01 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">24,5k</td><td class="crd-td">26,6k</td></tr>
<tr><td class="crd-td"><strong>Kars</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,6, 43,09 (632-1000AD)</td><td class="crd-td">6,8k</td><td class="crd-td">13,6k</td><td class="crd-td">23,2k</td></tr>
<tr><td class="crd-td"><strong>Smyrna</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,42, 27,13 (632-1000AD)</td><td class="crd-td">16,8k</td><td class="crd-td">15,6k</td><td class="crd-td">25,4k</td></tr>
<tr><td class="crd-td"><strong>Kutaisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,27, 42,7 (632-1000AD)</td><td class="crd-td">7,2k</td><td class="crd-td">15,2k</td><td class="crd-td">24,6k</td></tr>
<tr><td class="crd-td"><strong>Sebasteia</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,75, 37,02 (632-1000AD)</td><td class="crd-td">12,6k</td><td class="crd-td">12,7k</td><td class="crd-td">24,5k</td></tr>
<tr><td class="crd-td"><strong>Chalcedon</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,98, 29,08 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Iconium</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,87, 32,48 (632-1000AD)</td><td class="crd-td">14,5k</td><td class="crd-td">13,8k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Marash</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,59, 36,94 (632-1000AD)</td><td class="crd-td">11,5k</td><td class="crd-td">19,2k</td><td class="crd-td">17,9k</td></tr>
<tr><td class="crd-td"><strong>Nakhchivan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,21, 45,41 (632-1000AD)</td><td class="crd-td">11,5k</td><td class="crd-td">17,1k</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>Ancyra</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,94, 32,86 (632-1000AD)</td><td class="crd-td">16,2k</td><td class="crd-td">11,6k</td><td class="crd-td">20,4k</td></tr>
<tr><td class="crd-td"><strong>Theodosiopolis</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,9, 41,27 (632-1000AD)</td><td class="crd-td">13,8k</td><td class="crd-td">18,4k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Beylagan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,86, 47,62 (632-1000AD)</td><td class="crd-td">9,2k</td><td class="crd-td">16,7k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Nicomedia</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,77, 29,92 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,9k</td></tr>
<tr><td class="crd-td"><strong>Sinope</strong></td><td class="crd-td">Turkey</td><td class="crd-td">42,03, 35,15 (632-1000AD)</td><td class="crd-td">11,8k</td><td class="crd-td">12,8k</td><td class="crd-td">17,2k</td></tr>
<tr><td class="crd-td"><strong>Melitene</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,35, 38,31 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">14k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Bākūh</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,38, 49,86 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">16,2k</td></tr>
<tr><td class="crd-td"><strong>Dorylaeum</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,78, 30,52 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">14,1k</td><td class="crd-td">14,1k</td></tr>
<tr><td class="crd-td"><strong>Adrianople</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,68, 26,56 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Sardis</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,48, 28,04 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">11,3k</td></tr>
<tr><td class="crd-td"><strong>Kyzikos</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,37, 27,89 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">11,3k</td></tr>
<tr><td class="crd-td"><strong>Seleucia</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,37, 33,93 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,7k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Luleburgaz</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,4, 27,36 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>Acroenus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,76, 30,54 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Iskandarūnah</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,57, 36,19 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Claudipolis</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,73, 31,6 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Herakleia</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,29, 31,41 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Wān</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,58, 43,35 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Adramytium</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,6, 27,02 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Dazimon</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,31, 36,56 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Tyana</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,89, 34,56 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Abydos</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,15, 26,41 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Dabīl</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,16, 44,69 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Amasya</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,65, 35,84 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pergamum</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,11, 27,18 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Tall Mawzan</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,23, 39,77 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Arjīš</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,02, 43,36 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Tall Ḥūm</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,2, 39,75 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Bayyās</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,75, 36,24 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Gallipoli</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,41, 26,68 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Rhodos</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,45, 28,22 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Amastris</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,75, 32,39 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Coloneia</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,3, 37,84 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Milet</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,52, 27,28 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Ṭanzah</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,79, 41,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Badlīs</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,4, 42,13 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Mytilene</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,11, 26,56 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Tephrik</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,37, 38,13 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Barkarī</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,98, 43,76 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Malāzkird</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,14, 42,56 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Ḥiṣn Kayfā</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,7, 41,42 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Mūš</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,76, 41,49 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>al-Ḥadath</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,73, 37,53 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Akhlāṭ</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,77, 42,51 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Ra'bān</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,43, 37,68 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Thūr 'Abdīn</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,4, 40,86 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Wasṭān</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,34, 43,13 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Samosata</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,64, 38,48 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Arzan</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,98, 41,66 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Mūghān</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,34, 48,5 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Mopsuestia</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,96, 35,64 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Anazarbos</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,26, 35,9 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>al-Šamākhiyyah</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,68, 48,69 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Šakkī</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,35, 47,2 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Adana</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,14, 35,76 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Warthān</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,57, 47,64 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Janzah</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,81, 46,39 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>al-Našawá</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,35, 45,38 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>al-Andarāb</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,11, 47,33 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Sumaysāṭ</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,54, 38,54 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Tiflīs</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,08, 44,84 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>al-Abkhān</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,88, 48,38 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tall Fāfān</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,73, 41,78 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Thamānīn</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,31, 42,64 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>al-Baylaqān</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,87, 47,46 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Qaṣr Sanjah</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,49, 38,19 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Šābarān</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,27, 48,77 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Bardāj</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,24, 47,57 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Qal'ah Ibn Kandamān</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,57, 45,17 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Qabalah</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,8, 47,65 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Dulūk</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,18, 37,18 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">908</td><td class="crd-td">980</td></tr>
<tr><td class="crd-td"><strong>Kilise Tepe</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,48, 33,55 (632-1000AD)</td><td class="crd-td">880</td><td class="crd-td">822</td><td class="crd-td">822</td></tr>
<tr><td class="crd-td"><strong>Sughdabīl</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,27, 45,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">802</td><td class="crd-td">866</td></tr>
<tr><td class="crd-td"><strong>Ilıpınar</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,47, 29,31 (632-750AD)</td><td class="crd-td">852</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kaman-Kalehöyük</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,36, 33,79 (632-1000AD)</td><td class="crd-td">778</td><td class="crd-td">737</td><td class="crd-td">737</td></tr>
<tr><td class="crd-td"><strong>Sumaki Höyük</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,93, 41,33 (632-800AD)</td><td class="crd-td">774</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Murat Höyük</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,89, 40,97 (632-850AD)</td><td class="crd-td">759</td><td class="crd-td">748</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Barcın Höyük</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,21, 29,53 (632-750AD)</td><td class="crd-td">707</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Širwān</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,12, 48,75 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">626</td><td class="crd-td">677</td></tr>
<tr><td class="crd-td"><strong>Bājarwān</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,23, 48,12 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">610</td><td class="crd-td">659</td></tr>
<tr><td class="crd-td"><strong>Qalqāṭūs</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,21, 46,65 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">571</td><td class="crd-td">617</td></tr>
<tr><td class="crd-td"><strong>Yenikapı</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,01, 28,95 (632-1000AD)</td><td class="crd-td">595</td><td class="crd-td">522</td><td class="crd-td">484</td></tr>
<tr><td class="crd-td"><strong>Jisr Samūr</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,85, 48,48 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">505</td><td class="crd-td">546</td></tr>
<tr><td class="crd-td"><strong>Dereağzı</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,36, 29,8 (632-850AD)</td><td class="crd-td">250</td><td class="crd-td">200</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pompeiopolis</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,51, 34,22 (632-650AD)</td><td class="crd-td">252</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements across Byzantine Anatolia and Caucasia (114 centres) from 632AD to 1000AD.</figcaption>
</figure>

## North Africa and the Arabian Peninsula

Table \ref{tab:zone6-maghrib-arabia} lists 183 individually assessed settlements across Tunisia, Libya, Algeria, Morocco, Saudi Arabia, Yemen, Oman and Bahrain, linking Kairouan, Fez, Tunis, Carthage, Al-Mahdiyya, Tahert, Tripoli, Sousse, Tlemcen and Sabta with Sohar, Medina, Sanaa, Mecca, Al-Hasa, Zabid, Aden and Omani *falaj* oasis centres [@Yuksel2024Mecca; @Biezeveld2025Quantifyin; @Bosworth2007Historic].

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
<tr><td class="crd-td"><strong>Algiers</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,78, 3,05 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jeddah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,49, 39,19 (632-1000AD)</td><td class="crd-td">3,2k</td><td class="crd-td">14,8k</td><td class="crd-td">18,6k</td></tr>
<tr><td class="crd-td"><strong>Nizwa</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,93, 57,53 (632-1000AD)</td><td class="crd-td">9,2k</td><td class="crd-td">17k</td><td class="crd-td">15,4k</td></tr>
<tr><td class="crd-td"><strong>Awal</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">26,23, 50,59 (632-1000AD)</td><td class="crd-td">8,8k</td><td class="crd-td">14,6k</td><td class="crd-td">17,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Qatif</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,56, 50 (632-1000AD)</td><td class="crd-td">7,2k</td><td class="crd-td">12,6k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Sale</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,03, -6,82 (632-1000AD)</td><td class="crd-td">5,6k</td><td class="crd-td">11k</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Fās</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,07, -5,03 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">15,6k</td><td class="crd-td">16,8k</td></tr>
<tr><td class="crd-td"><strong>Nakur</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,15, -3,86 (715-1000AD)</td><td class="crd-td">-</td><td class="crd-td">14,8k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Hajr al-Yamama</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,63, 46,72 (632-1000AD)</td><td class="crd-td">10,5k</td><td class="crd-td">14,8k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>al-Thujjah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,98, 44,18 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>al-Aḥsā'</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">25,35, 49,54 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">13,5k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Shibam</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,93, 48,63 (632-1000AD)</td><td class="crd-td">9,6k</td><td class="crd-td">13k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Muscat</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,61, 58,59 (632-1000AD)</td><td class="crd-td">5,4k</td><td class="crd-td">11,1k</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Ajdabiya</strong></td><td class="crd-td">Libya</td><td class="crd-td">30,75, 20,23 (632-1000AD)</td><td class="crd-td">4,6k</td><td class="crd-td">9k</td><td class="crd-td">12,6k</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,75, -0,52 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bona</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,9, 7,76 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Wahrān</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,71, -0,62 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">10,9k</td><td class="crd-td">11,7k</td></tr>
<tr><td class="crd-td"><strong>Ghadames</strong></td><td class="crd-td">Libya</td><td class="crd-td">30,13, 9,5 (632-1000AD)</td><td class="crd-td">4,8k</td><td class="crd-td">8,7k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Barnīq</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,11, 20,08 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">10,5k</td><td class="crd-td">11,3k</td></tr>
<tr><td class="crd-td"><strong>'Iṭnah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,82, 42,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">10,3k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Qarṭājannah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,88, 10,27 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">10,2k</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Miknāsah</strong></td><td class="crd-td">Morocco</td><td class="crd-td">33,91, -5,57 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,7k</td><td class="crd-td">10,4k</td></tr>
<tr><td class="crd-td"><strong>Tabūk</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">28,37, 36,51 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">10,4k</td></tr>
<tr><td class="crd-td"><strong>al-Ṭā'if</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,22, 40,41 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">10,3k</td></tr>
<tr><td class="crd-td"><strong>Sfax</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">34,75, 10,76 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Ribāṭ</strong></td><td class="crd-td">Morocco</td><td class="crd-td">33,99, -6,89 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9,4k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>al-Qusṭanṭiniyyah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,34, 6,63 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">9k</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>Dhū al-Ḥulayfah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,41, 39,57 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,9k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Qubā</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,45, 39,58 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,9k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Hajar al-Naṣr</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,22, -3,91 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Mostaganem</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,94, 0,09 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bizerte</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">37,3, 9,86 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jijel</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,82, 5,77 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Yanbu'</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,11, 38,13 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Bilizmah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,64, 6,14 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Saṭīf</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,16, 5,41 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Asfāqus</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">34,77, 10,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,4k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Tāmadfūs</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,74, 3,29 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">7,3k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Gafsa</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">34,42, 8,79 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>El-Monastir</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,78, 10,83 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Biskarah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">34,85, 5,73 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Tahūdhā</strong></td><td class="crd-td">Algeria</td><td class="crd-td">34,8, 5,83 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>El-Kef</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,17, 8,67 (814-814AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bajāyah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,7, 5,05 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Jāzān</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">16,9, 42,55 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>al-Ghurrabah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">31,37, 37,34 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Tīzā</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,22, -4,03 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Dhimār</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,56, 44,4 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Melilla</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,32, -2,97 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Banzart</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">37,24, 9,82 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Tušummus</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,07, -5,95 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Jījil</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,77, 5,72 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Ṣabrah</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,79, 12,48 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>al-Baṭḥah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,78, 0,6 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Ṣā'</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,42, -2,9 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Azemmour</strong></td><td class="crd-td">Morocco</td><td class="crd-td">33,29, -8,35 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Qafṣah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">34,41, 8,82 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Bājah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,68, 9,21 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Ṭubnah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,32, 5,36 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Tābarīdā</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,32, -3,31 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Qal'at Beni Hammad</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36, 5,53 (1000-1000AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Mattījah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,59, 2,84 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Qurḥ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,55, 37,99 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Tu'ām</strong></td><td class="crd-td">Oman</td><td class="crd-td">24,19, 55,77 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Sūq Ḥamzah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,36, 3,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Surt</strong></td><td class="crd-td">Libya</td><td class="crd-td">31,1, 16,61 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Miliyānah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,28, 2,22 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Nazwah</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,86, 57,53 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Laḥj</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,07, 44,87 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Ma'rib</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,56, 45,44 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>al-'Urf</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,09, 44,27 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Mīlā</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,42, 6,29 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>al-Šiḥr</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,77, 49,6 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Manzil Bāšū</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,73, 10,94 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Marsá al-Dajjāj</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,73, 3,59 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Awdhanah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,6, 10,28 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Sbeitla</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,23, 9,13 (814-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Subayṭilah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,23, 9,22 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Aylān</strong></td><td class="crd-td">Morocco</td><td class="crd-td">31,5, -7,7 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Ṭawlaqā</strong></td><td class="crd-td">Algeria</td><td class="crd-td">34,69, 5,38 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>al-Ghuzzah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,11, 1,09 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>al-Janad</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,69, 44,18 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Ašrašāl</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,54, 2,25 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Ẓafār</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,24, 44,38 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>al-Ḥawrā'</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">25,03, 37,34 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Radā'</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,43, 44,84 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>al-Khaṣūf</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">16,68, 42,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Mawr</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,73, 42,9 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Arjikūk</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,28, -1,46 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Tawzir</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">33,94, 8,15 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Taymā'</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">27,58, 38,52 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>al-Mahjam</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,22, 43,07 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Tanas</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,49, 1,38 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Baṣrah</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,83, -5,89 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Kurt</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,59, -5,83 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Niqāwus</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,58, 5,7 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Fālūsan</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,03, -1,76 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Bayš</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">17,38, 42,54 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>'Ašīr</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,7, 3,16 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Badr</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">23,73, 38,8 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>al-Miskyānah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,62, 7,73 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Mindās</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,68, 0,83 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Maqqarah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,54, 5,03 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Fakkān</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,22, 0,06 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Azīlah</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,58, -5,97 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Tajannah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,35, 1,35 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Khawr al-Kāf</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,18, 8,72 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Warīkah</strong></td><td class="crd-td">Morocco</td><td class="crd-td">31,45, -7,64 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Nafṭah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">33,87, 7,9 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Zaghwān</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,4, 10,14 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Jarāwah Abū al-'Ayš</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,1, -2,29 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Ṭabarqah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,92, 8,81 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Banū Wārīfan</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,22, 2,03 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Khulayṣ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">22,11, 39,42 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Āslān</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,46, -1,16 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>al-Mudhaykhirah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,79, 43,97 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Tījis</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,09, 6,83 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Balad Ghumār</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,2, -4,7 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Mukhā</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,33, 43,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Tandalī</strong></td><td class="crd-td">Morocco</td><td class="crd-td">31,78, -7,18 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Khaybar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">25,79, 39,27 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Milaḥ</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,61, 58,11 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Dawmah al-Jandal</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">29,76, 39,88 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Ḥays</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,93, 43,48 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Biššará</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">33,8, 8,82 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Damth</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,16, 44,74 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Baṭn Marr</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,64, 39,74 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Ḍank</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,53, 56,31 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Walīlah</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,1, -5,6 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Jamīlā</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,24, 5,6 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Huwārah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,55, 0,44 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Maṭmāṭah</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,12, -4,54 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Namālatah</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,14, -4,63 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Arkū</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,05, 7,2 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Banṭiyūs</strong></td><td class="crd-td">Algeria</td><td class="crd-td">34,68, 5,61 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Dūfānah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,5, 6,63 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Kazannāyah</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,67, -3,92 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Dabā</strong></td><td class="crd-td">Oman</td><td class="crd-td">25,59, 56,23 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Jazīrah Abū Šarīk</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">37,03, 11 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Jublān</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,28, 43,67 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Turabah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,25, 41,64 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Sūq Karā</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,1, 2,69 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Ṣanhājah</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,3, -5,52 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>al-Ḥammah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">34,06, 8,19 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Taqyūs</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">34,01, 8,26 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>al-Raydah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,83, 44,04 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>al-Mahjarah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">17,61, 43,54 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Qal'ah Karmāṭah</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,19, -4,32 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Aḥwar</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,57, 46,62 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Bāghāy</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,51, 7,12 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Šibām</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,52, 43,9 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>al-Ḥirdah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,22, 42,73 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Khaywān</strong></td><td class="crd-td">Yemen</td><td class="crd-td">16,29, 44,06 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Ubbah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,81, 8,72 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>'Arafāt</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,32, 40,2 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Ghalāfiqah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,44, 43,03 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Jalūlā'</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,78, 9,86 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">966</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Marmājannah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,49, 8,4 (650-1000AD)</td><td class="crd-td">-</td><td class="crd-td">806</td><td class="crd-td">871</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements across North Africa and the Arabian Peninsula (183 centres) from 632AD to 1000AD.</figcaption>
</figure>

# Limitations

Three constraints qualify individual settlement entries in this gazetteer. First, metropolitan population trajectories carry genuine archaeological uncertainty - particularly for sprawling multi-quarter capitals such as Abbasid Baghdad (peaking at 695k in 900AD across roughly 7.000 ha of discontinuous urban and garden districts), Samarra (178k in 860AD), Rayy (194k), Fustat (174k) and Nishapur (156k) - where residential housing densities varied widely between dense urban cores and outer *rabad* suburbs [@ALJabri2023Developmen; @Bosworth2007Historic]. Second, the vetted gazetteer restricts tabulation to 917 individually documented urban centres, regional capitals and itinerary towns supported by archaeological area measurements, itinerary registers or historical tax assessments (excluding 206 unquantified minor scatters, merged suburbs, duplicate aliases and non-settlement architectural fragments), leaving smaller unquantified rural hamlets to the continuous Matérn kriging surface rather than discrete table rows. Third, where individual cities experienced dated foundation or crisis turning points between canonical regional benchmarks (such as Samarra's 836AD foundation and 860AD peak, Damascus's 745AD Umayyad peak or Amorium's 838AD sack), table columns at 750AD and 850AD linearly interpolate between bracketing documented observations.

# Conclusion

Taken together, the 917 individually assessed settlements demonstrate a strongly structured, polycentric urban hierarchy ($\alpha = 1,15$, $R^2 = 0,91$) across the Early Islamic world and Byzantine Anatolia between 632AD and 1000AD. Active urban centres expanded from 132 cities housing 2,4M inhabitants in 632AD to 869 centres housing 7,78M at the 850AD Abbasid zenith and 890 centres housing 8,59M by 1000AD, driven by the seventh-century *amsar* wave, Umayyad foundation towns, Abbasid metropolitan growth at Baghdad and Samarra and resilient oasis urbanisation across Iran, Khurasan, Egypt and the Maghrib.

# Appendix

Table \ref{tab:gazetteer-summary} aggregates site counts and combined urban populations across the six geographic divisions at 632AD, 750AD, 850AD and 1000AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Division</th><th class="crd-th">Sites</th><th class="crd-th">632AD</th><th class="crd-th">750AD</th><th class="crd-th">850AD</th><th class="crd-th">1000AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Al-Iraq and Al-Jazira</strong></td><td class="crd-td">63</td><td class="crd-td">211,4k</td><td class="crd-td">792,2k</td><td class="crd-td">1,45M</td><td class="crd-td">933,5k</td></tr>
<tr><td class="crd-td"><strong>2. Bilad al-Sham and Cyprus</strong></td><td class="crd-td">143</td><td class="crd-td">355,2k</td><td class="crd-td">842,3k</td><td class="crd-td">920,6k</td><td class="crd-td">994,2k</td></tr>
<tr><td class="crd-td"><strong>3. Misr (Egypt)</strong></td><td class="crd-td">106</td><td class="crd-td">291k</td><td class="crd-td">818,7k</td><td class="crd-td">931,8k</td><td class="crd-td">1,1M</td></tr>
<tr><td class="crd-td"><strong>4. Iran, Khorasan and Afghanistan</strong></td><td class="crd-td">308</td><td class="crd-td">626,8k</td><td class="crd-td">1,63M</td><td class="crd-td">2,11M</td><td class="crd-td">2,61M</td></tr>
<tr><td class="crd-td"><strong>5. Byzantine Anatolia and Caucasia</strong></td><td class="crd-td">114</td><td class="crd-td">559,9k</td><td class="crd-td">727,2k</td><td class="crd-td">1,03M</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>6. North Africa and Arabia</strong></td><td class="crd-td">183</td><td class="crd-td">358,4k</td><td class="crd-td">1,03M</td><td class="crd-td">1,36M</td><td class="crd-td">1,68M</td></tr>
<tr><td class="crd-td"><strong>Total Assessed Domain</strong></td><td class="crd-td">917</td><td class="crd-td">2,4M</td><td class="crd-td">5,84M</td><td class="crd-td">7,78M</td><td class="crd-td">8,59M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Summary of individually assessed settlements and aggregate urban populations across six geographic divisions from 632AD to 1000AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::
