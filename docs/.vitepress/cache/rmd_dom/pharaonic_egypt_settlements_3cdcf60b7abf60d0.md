---
title: "Pharaonic Egypt to the Persian Conquest"
subtitle: "Settlement Gazetteer: Capitals, Nome Centres, Oases and Desert Harbours, 3200BC to 525BC"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: pharaonic_egypt_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_pharaonic_egypt_spatial.png"
hero_caption: "Spatial distribution of 823 catalogued settlements across Upper and Lower Egypt, the Fayum depression and the desert oases through 525BC."
hero_label: "fig:hero-pharaonic-egypt-settlements"
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

This gazetteer documents 823 catalogued nucleated settlements, royal capitals, provincial nome centres, desert oasis towns and Red Sea mining ports active across Pharaonic Egypt between 3200BC and 525BC, spanning six analytical territories covering 999.989 km² (13.028 five-arcminute cells). Synthesising the Published Excavations Atlas (524 ledger links), the Egypt Exploration Society (EES) Delta Survey (259 links), the Pleiades Ancient World Gazetteer (100 links) and the Near East Radiocarbon Database (6 links), the catalogue captures 4.852 settlement-year population observations averaging 5,9 temporal checkpoints per site [@Kohler2017Developmen; @Moeller2015Archaeolog; @Elfadaly2019Discoverin]. At the apex stand Memphis (18k) and Akhetaten/Amarna (17k), followed by standardised provincial nome centres and strategic harbours near 6,5k including El Kab, Syene, Pathyris, Hermopolis Mikra, Heliopolis, Mendes, Bouto, Pelusium, Krokodilopolis, Hermopolis Magna, Lykopolis, Abydos, Nekhen and Diospolis Magna (Thebes), alongside Western Desert oasis nodes at Bahariya (Oasis Parva, 5,6k), Siwa (Ammon, 5,2k), Dakhla (Tineida, 5,1k) and Kharga (Hibis, 5k) [@Love2003Questionin; @Hubschmann2010Inhabited; @Dabbs2025Mortality]. Alongside the 823 included settlements, the regional source ledger records 250 excluded candidates—240 subordinate suburbs merged within 4,5 km and 10 variant-spelling duplicates consolidated within 25 km—out of 1.073 evaluated entities, anchored to geoBoundaries subadministrative GIS geometry [@Runfola2020GeoBoundaries].

# Background

Urbanism in Pharaonic Egypt evolved in tight step with Nile inundation management, state labour mobilisation and overland mineral logistics [@Kohler2017Developmen; @Moeller2015Archaeolog]. During the Predynastic and Early Dynastic transition (3200BC to 2686BC), walled provincial nuclei emerged along elevated river levees in Upper Egypt—notably Hierakonpolis (Nekhen), Naqada (Nubt), Abydos (Ebot) and El Kab—while commercial tell settlements at Bouto, Tell el-Farkha, Tell el-Iswid and Maadi linked the Delta to Levantine caravan routes [@Agnieszka2016Nile; @Kohler2017Developmen]. The foundation of Memphis at the Delta apex established a durable administrative pivot commanding both river navigation and the nearby Ahramat channel along which Old Kingdom pyramid crews moved limestone and timber [@Love2003Questionin; @Ghoneim2024Egyptian; @Younes2023Pyramid].

During the Old and Middle Kingdoms (2686BC to 1650BC), Egyptian settlement morphology diversified beyond natural levee tells. Royal mortuary institutions built orthogonal worker and priestly towns such as Heit el-Ghurab at Giza, Kahun (el-Lahun) at the Fayum mouth and planned fortress garrisons in Lower Nubia [@Moeller2015Archaeolog; @Romer2017Nile; @Ferreira2019Lower]. Concurrently, state mining and maritime expeditions established seasonal or fortified bases at Wadi al-Jarf and Ayn Soukhna on the Gulf of Suez, Saww (Mersa Gawasis) on the Red Sea coast, Bir Nasib in Sinai, and Balat (Ayn el-Gazareen) in Dakhla Oasis [@Rademakers2018Copper; @Hubschmann2010Inhabited].

In the Second Intermediate Period and New Kingdom (1650BC to 1069BC), eastern Delta ports such as Tell el-Dab'a (Avaris) and later Pi-Ramesses absorbed dense Levantine and Mediterranean migration [@Stantis2021Multi]. Meanwhile, Thebes (Diospolis Magna) expanded around the Karnak and Luxor temple complexes, Memphis retained its industrial and necropolis hinterland across Saqqara [@Staring2023Saqqara], and Akhenaten's brief Amarna capital created an instant desert metropolis in Middle Egypt [@Kulmar2018Possible; @Dabbs2025Mortality]. During the Third Intermediate Period and Saite Dynasty to 525BC, Delta temple cities—Tanis, Bubastis, Mendes, Sais and the Sinai border bastion of Pelusium—anchored northern Egypt's commercial revival [@Bennett2019Archaeolog; @Siegel2025Appraisal].

# Methodology

Settlement entries in this gazetteer were assembled by harmonising four curated archaeological and historical corpora: the Published Excavations Atlas (524 linked entries), the EES Delta Survey Gazetteer (259 entries), the Pleiades Ancient World Gazetteer (100 entries) and the Near East Radiocarbon Database (6 entries). Every included site carries decimal-degree geographic coordinates and longitudinal population estimates sampled at canonical temporal checkpoints (3200BC, 3000BC, 2500BC, 2000BC, 1500BC, 1000BC, 650BC and 525BC).

To prevent double-counting contiguous urban wards, satellite necropolis villages and modern Arabic versus classical Greek or Egyptian toponym doublets, HANDBOOK applies strict spatial consolidation rules recorded in the chapter source ledger. Across 1.073 evaluated candidate entities, 240 subordinate wards situated within 4,5 km of a primary urban core were merged into their parent metropolis—folding Elephantine and Suhail into Syene, Deir el-Medina into Diospolis Magna (Thebes), Avaris into Pi-Ramesses, Thmouis into Mendes, and Sa el-Hagar into Sais—while 10 variant-spelling duplicates within 25 km (such as El-Kom el-Ahmar) were consolidated. For regional breakdown, each of the 823 canonical settlements is mapped to Egypt's six ecological divisions and reconciled with subadministrative census boundaries from geoBoundaries [@Runfola2020GeoBoundaries].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 1.073 candidate features (823 included plus 250 excluded, zero unaccounted records). All 823 catalogued settlements hold valid geographic coordinates spanning 21,99°N to 31,58°N latitude and 25,3°E to 36,49°E longitude, with 4.852 positive settlement-year entries across the Pharaonic span (320 active sites at 3200BC, 741 at 3000BC, 744 at 2500BC, 749 at 2000BC, 756 at 1500BC and 1000BC, 1 dedicated Iron Age desert checkpoint at 650BC and 785 at 525BC). Rank-size evaluation yields a Zipf slope of $\alpha = 0,418$ ($R^2 = 0,78$), reflecting the broad plateau of nome capitals below Memphis and Amarna (Figure \ref{fig:sett-gazetteer}).

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-pharaonic-egypt-settlements/fig4_pharaonic_egypt_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen Pharaonic capitals, nome centres and ports across Egypt through 525BC.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-egypt} lists the leading 45 settlements ordered by peak documented population, highlighting the dual primacy of Memphis (18k) and Amarna (17k) above the dense constellation of Upper and Lower Egyptian nome capitals, Fayum hydraulic towns and Sinai-Red Sea frontier ports.

<figure class="crd-table-figure" id="tab:top45-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">2500BC</th><th class="crd-th">1500BC</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Memphis</strong></td><td class="crd-td">29,85, 31,26</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">14,4k</td><td class="crd-td">17k</td><td class="crd-td">18k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Amarna</strong></td><td class="crd-td">27,64, 30,9</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">1,5k</td><td class="crd-td">13,7k</td><td class="crd-td">17k (525BC)</td></tr>
<tr><td class="crd-td"><strong>El Kab</strong></td><td class="crd-td">25,13, 32,81</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">5,2k</td><td class="crd-td">6,1k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Heliopolis</strong></td><td class="crd-td">30,13, 31,31</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Hermopolis Mikra</strong></td><td class="crd-td">31,03, 30,47</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Saqia</strong></td><td class="crd-td">26,37, 33,76</td><td class="crd-td">650BC-650BC</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k (650BC)</td></tr>
<tr><td class="crd-td"><strong>Pathyris</strong></td><td class="crd-td">25,37, 32,47</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Syene</strong></td><td class="crd-td">24,09, 32,9</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Bouto</strong></td><td class="crd-td">31,2, 30,74</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Mendes</strong></td><td class="crd-td">30,96, 31,52</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">6,5k (2000BC)</td></tr>
<tr><td class="crd-td"><strong>Giza</strong></td><td class="crd-td">29,97, 31,13</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Babylon</strong></td><td class="crd-td">30,01, 31,23</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Momemphis</strong></td><td class="crd-td">30,8, 30,6</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Pelusium</strong></td><td class="crd-td">31,04, 32,55</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Lykopolis</strong></td><td class="crd-td">27,18, 31,18</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Touphion</strong></td><td class="crd-td">25,58, 32,53</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Wadi al-Jarf</strong></td><td class="crd-td">28,89, 32,66</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Tell el-Yahudiya</strong></td><td class="crd-td">30,29, 31,33</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">2,8k</td><td class="crd-td">5k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Abydos/Ebot</strong></td><td class="crd-td">26,19, 31,92</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,2k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Tell el-Iswid</strong></td><td class="crd-td">30,85, 31,77</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,2k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Contra Latopolin</strong></td><td class="crd-td">25,21, 32,53</td><td class="crd-td">1500BC-525BC</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Nekhen</strong></td><td class="crd-td">25,1, 32,78</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,2k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Maadi</strong></td><td class="crd-td">29,97, 31,28</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,2k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>el-Mahasna</strong></td><td class="crd-td">26,26, 31,84</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,2k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Nubt</strong></td><td class="crd-td">25,94, 32,71</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,2k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Tell el-Farkha</strong></td><td class="crd-td">30,87, 31,6</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,2k</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k (1500BC)</td></tr>
<tr><td class="crd-td"><strong>Rhinocolura</strong></td><td class="crd-td">31,11, 33,8</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">5,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Tell el-Heir</strong></td><td class="crd-td">30,97, 32,49</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">5,5k</td><td class="crd-td">6,3k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Antaiopolis</strong></td><td class="crd-td">26,9, 31,52</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">1,5k</td><td class="crd-td">5,7k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Krokodilopolis</strong></td><td class="crd-td">29,31, 30,84</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td><td class="crd-td">6,5k (3200BC)</td></tr>
<tr><td class="crd-td"><strong>Hermopolis Magna</strong></td><td class="crd-td">27,78, 30,8</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td><td class="crd-td">6,5k (3200BC)</td></tr>
<tr><td class="crd-td"><strong>Diospolis Magna</strong></td><td class="crd-td">25,66, 32,63</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td><td class="crd-td">6,5k (3200BC)</td></tr>
<tr><td class="crd-td"><strong>Kaine</strong></td><td class="crd-td">26,15, 32,7</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td><td class="crd-td">6,5k (3200BC)</td></tr>
<tr><td class="crd-td"><strong>Latopolis</strong></td><td class="crd-td">25,29, 32,55</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td><td class="crd-td">6,5k (3200BC)</td></tr>
<tr><td class="crd-td"><strong>Tell el-Moqdam</strong></td><td class="crd-td">30,68, 31,36</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">1,5k</td><td class="crd-td">5k</td><td class="crd-td">6,5k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Thallos</strong></td><td class="crd-td">28,08, 30,73</td><td class="crd-td">2000BC-525BC</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,4k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Tell el-Samara</strong></td><td class="crd-td">30,92, 31,61</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">5,6k</td><td class="crd-td">3,2k</td><td class="crd-td">6,4k (3200BC)</td></tr>
<tr><td class="crd-td"><strong>Alexandria</strong></td><td class="crd-td">31,2, 29,91</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">1,5k</td><td class="crd-td">5,4k</td><td class="crd-td">6,4k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Athribis</strong></td><td class="crd-td">30,47, 31,18</td><td class="crd-td">2000BC-525BC</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">6,4k (525BC)</td></tr>
<tr><td class="crd-td"><strong>el-Lahun</strong></td><td class="crd-td">29,24, 30,98</td><td class="crd-td">2000BC-525BC</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">6,4k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Saww</strong></td><td class="crd-td">26,56, 34,04</td><td class="crd-td">2000BC-525BC</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">6,4k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Medamud</strong></td><td class="crd-td">25,73, 32,71</td><td class="crd-td">2000BC-525BC</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">6,4k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Bir Wasif</strong></td><td class="crd-td">26,49, 33,74</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">6,2k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Apis</strong></td><td class="crd-td">31,4, 27,03</td><td class="crd-td">1500BC-525BC</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6,1k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Hermopolis</strong></td><td class="crd-td">31,04, 31,38</td><td class="crd-td">1500BC-525BC</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6,1k (525BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Pharaonic Egypt ordered by peak population (823 total catalogued sites).</figcaption>
</figure>

## Sub-Regional Settlement Distribution

Table \ref{tab:regsum-egypt} groups all 823 catalogued settlements across Egypt's six ecological sub-regions. Lower Egypt (Nile Delta) accounts for the largest share of sites (326 centres, 39,6%), reflecting intensive EES Delta Survey recovery of buried mound tells [@Elfadaly2019Discoverin]. Sinai and the Eastern Desert account for 245 catalogued sites (29,8%), largely reflecting high archaeological visibility of fortified desert road stations, gold-mining camps and Red Sea ports in hyper-arid terrain [@Rademakers2018Copper; @Siegel2025Appraisal]. Upper Egypt (99 sites, 12%), Western Desert Oases (55 sites, 6,7%), the Memphis and Fayum core (53 sites, 6,4%) and Middle Egypt (45 sites, 5,5%) encompass the remaining valley and oasis centres.

<figure class="crd-table-figure" id="tab:regsum-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Share</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Egypt (Nile Delta)</strong></td><td class="crd-td">326</td><td class="crd-td">39,6%</td><td class="crd-td">Hermopolis Mikra (6,5k)</td></tr>
<tr><td class="crd-td"><strong>Memphis and Fayum Core</strong></td><td class="crd-td">53</td><td class="crd-td">6,4%</td><td class="crd-td">Memphis (18k)</td></tr>
<tr><td class="crd-td"><strong>Middle Egypt</strong></td><td class="crd-td">45</td><td class="crd-td">5,5%</td><td class="crd-td">Amarna (17k)</td></tr>
<tr><td class="crd-td"><strong>Upper Egypt (Thebaid)</strong></td><td class="crd-td">99</td><td class="crd-td">12%</td><td class="crd-td">El Kab (6,5k)</td></tr>
<tr><td class="crd-td"><strong>Western Desert Oases</strong></td><td class="crd-td">55</td><td class="crd-td">6,7%</td><td class="crd-td">Oasis Parva (5,6k)</td></tr>
<tr><td class="crd-td"><strong>Sinai and Eastern Desert</strong></td><td class="crd-td">245</td><td class="crd-td">29,8%</td><td class="crd-td">Saqia (6,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional distribution and leading centres across the 823 catalogued Pharaonic Egyptian settlements.</figcaption>
</figure>

## Source Ledger Exclusions

Table \ref{tab:excluded-egypt} lists the first 30 of 250 excluded candidate entries documented in the chapter source ledger, illustrating how subordinate urban wards and variant aliases were consolidated into canonical metropolitan nuclei.

<figure class="crd-table-figure" id="tab:excluded-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Country</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Elephantine</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Suhail</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Letopolis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Menouthis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Deir el-Medina</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Avaris</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Thmouis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Eileithyiaspolis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Hermonthis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Petemout</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Tentyra</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Kanobikos</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Sebennytikos</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Sa el-Hagar</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Behbeit el-Hagar</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Samannud</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Abusir Bana</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Arab el-Hisn</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Ausim</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>El-Matariya</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Qatta</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Abu Zabal</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>El-Kom el-Ahmar</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Arab el-Eliqat el-Bahariya</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Arab el-Sawalah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Tell Atrib</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Tell Beni Tamin</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Kom Ishfin</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>El-Marg</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Qaha</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 4,5 km of primary urban core in Egypt.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 250 excluded candidate entries in the Pharaonic Egypt source ledger.</figcaption>
</figure>

# Limitations

Three structural biases shape the settlement gazetteer. First, spatial merging within a 4,5 km urban radius consolidates adjacent royal, artisanal and island suburbs into single metropolitan polygons—such as folding Deir el-Medina into Thebes and Elephantine into Syene—which improves regional density accuracy while masking intra-urban ward boundaries [@Moeller2015Archaeolog; @Dabbs2025Mortality]. Second, Delta alluviation and modern town expansion bury early Pharaonic occupation layers beneath deep silt, making Lower Egyptian site recovery reliant on systematic EES Delta Survey coring and remote sensing rather than uniform surface walkovers [@Elfadaly2019Discoverin]. Third, hyper-arid preservation in Sinai and the Eastern Desert exaggerates the numerical share of small quarry camps and waystations relative to ephemeral Nile levee hamlets destroyed by river migration [@Toonen2021Hydro; @Siegel2025Appraisal].

# Conclusion

Cataloguing 823 settlements across 4.852 temporal observations, this gazetteer traces the urban anatomy of Pharaonic Egypt from Early Dynastic walled estates to the dense Delta and Valley network conquered by Cambyses II in 525BC. Combining ArchAtlas excavations, the EES Delta Survey, Pleiades and radiocarbon chronologies with strict spatial deduplication prevents suburban double-counting while preserving the true balance between Egypt's leading capitals (Memphis and Amarna), its remarkably uniform tier of provincial nome centres, its reclaimed Fayum towns and its desert oasis and Red Sea outposts.

# Appendix

All 823 included settlement records and 250 ledger exclusions are stored in machine-readable chapter archives linked to Egypt's 296 modern ADM2 polygons from geoBoundaries [@Runfola2020GeoBoundaries] and CAPMAS historical provincial series. Coordinate precision is maintained to at least two decimal places for regional cartographic projection and five-arcminute spatial aggregation.

# Sources

<div id="refs"></div>
